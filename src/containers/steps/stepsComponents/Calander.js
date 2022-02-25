import React from 'react';
import moment from 'moment';
import './calander.scss';

export default class Calendar extends React.Component {
  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false,
    selectedDay: null
  }

  constructor(props) {
    super(props);
    this.style = props.style || {};
    this.style.width = this.width; // add this
  }


  weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
  weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  months = moment.months();

  year = () => {
    return this.state.dateContext.format("Y");
  }
  month = () => {
    return this.state.dateContext.format("MMMM");
  }
  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  }
  currentDate = () => {
    // console.log("currentDate: ", this.state.dateContext.get("date"));
    return this.state.dateContext.get("date");
  }
  currentDay = () => {
    return this.state.dateContext.format("D");
  }

  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
    return firstDay;
  }

  setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({
      dateContext: dateContext
    });
  }

  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onNextMonth && this.props.onNextMonth();
  }

  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onPrevMonth && this.props.onPrevMonth();
  }

  onSelectChange = (e, data) => {
    this.setMonth(data);
    this.props.onMonthChange && this.props.onMonthChange();

  }
  SelectList = (props) => {
    let popup = props.data.map((data) => {
      return (
        <div className="MonthsDropdown" key={data}>
          <a href="#" onClick={(e) => { this.onSelectChange(e, data) }}>
            {data}
          </a>
        </div>
      );
    });

    return (
      <div className="month-popup">
        {popup}
      </div>
    );
  }

  SelectListYear = () => {
    let years = []
    let currentYear = Number(this.year())
    for (let i = (currentYear - 100); i <= (currentYear + 100); i++) {
      years.push(i)
    }
    let popup = years.map((data) => {
      return (
        <div id={`${data}`} className="MonthsDropdown" key={data}>
          <a href="#" onClick={(e) => { this.onYearChange(e, data) }}>
            {data}
          </a>
        </div>
      );
    });

    return (
      <div className="month-popup">
        {popup}
      </div>
    );
  }

  onChangeMonth = (e, month) => {
    this.setState({
      showMonthPopup: !this.state.showMonthPopup
    });
  }

  MonthNav = () => {
    return (
      <span className="label-month"
        onClick={(e) => { this.onChangeMonth(e, this.month()) }}>
        {this.month()}
        {this.state.showMonthPopup &&
          <this.SelectList data={this.months} />
        }
        <svg xmlns="http://www.w3.org/2000/svg" width="25.597" height="25.597" viewBox="0 0 25.597 25.597">
          <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,16.174a12.8,12.8,0,1,0,12.8-12.8A12.8,12.8,0,0,0,3.375,16.174ZM21.164,13.5a1.192,1.192,0,0,1,1.68,0,1.173,1.173,0,0,1,.345.837,1.194,1.194,0,0,1-.351.843l-5.8,5.784A1.186,1.186,0,0,1,15.4,20.93L9.51,15.06a1.188,1.188,0,0,1,1.68-1.68l4.99,5.039Z" transform="translate(-3.375 -3.375)" />
        </svg>
      </span>
    );
  }

  showYearEditor = () => {
    this.setState({
      showYearNav: this.state.showYearNav ? false : true
    }, () => {
      if (document.getElementById(`${this.year()}`)) {
        var el = document.getElementById(`${this.year()}`);
        el.classList += " active"
        el.scrollIntoView({ block: "end", inline: "nearest" });
      }
    });
  }

  setYear = (year) => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("year", year);
    this.setState({
      dateContext: dateContext
    })
  }
  onYearChange = (e, data) => {
    this.setYear(data);
    this.props.onYearChange && this.props.onYearChange(e, data);
  }

  onKeyUpYear = (e) => {
    if (e.which === 13 || e.which === 27) {
      this.setYear(e.target.value);
      this.setState({
        showYearNav: false
      })
    }
  }

  YearNav = () => {
    return (
      <span
        className="label-year"
        onClick={(e) => this.showYearEditor()}>
        {this.year()}
        {this.state.showYearNav &&
          <this.SelectListYear />
        }
        <svg xmlns="http://www.w3.org/2000/svg" width="25.597" height="25.597" viewBox="0 0 25.597 25.597">
          <path id="Icon_ionic-ios-arrow-dropdown-circle" data-name="Icon ionic-ios-arrow-dropdown-circle" d="M3.375,16.174a12.8,12.8,0,1,0,12.8-12.8A12.8,12.8,0,0,0,3.375,16.174ZM21.164,13.5a1.192,1.192,0,0,1,1.68,0,1.173,1.173,0,0,1,.345.837,1.194,1.194,0,0,1-.351.843l-5.8,5.784A1.186,1.186,0,0,1,15.4,20.93L9.51,15.06a1.188,1.188,0,0,1,1.68-1.68l4.99,5.039Z" transform="translate(-3.375 -3.375)" />
        </svg>
      </span>
    );
  }

  onDayClick = (e, day) => {
    this.setState({
      selectedDay: day,
      slotModel: true
    }, () => {

    });

    this.props.onDayClick && this.props.onDayClick(e, day);
  }

  render() {
    // Map the weekdays i.e Sun, Mon, Tue etc as <td>
    let weekdays = this.weekdaysShort.map((day) => {
      return (
        <td key={day} className="week-day">{day} <div className="line"></div></td>
      )
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td key={i * 80} className="emptySlot">
        {""}
      </td>
      );
    }

    // console.log("blanks: ", blanks);

    let daysInMonth = [];
    let randomDays = [2, 3, 5, 8, 9, 10, 16, 22]
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = (d == this.currentDay() ? "day current-day" : "day");
      let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
      let blockedClass = (randomDays.join(', ').match(`${d.toString()},`) ? " blocked-day " : "")
      daysInMonth.push(
        <td key={d} className={className + selectedClass + blockedClass} >
          <span onClick={(e) => { this.onDayClick(e, d) }}>{d}</span>
        </td>
      );
    }


    // console.log("days: ", daysInMonth);

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if ((i % 7) !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    let trElems = rows.map((d, i) => {
      return (
        <tr key={i * 100}>
          {d}
        </tr>
      );
    })

    let timeSlots = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]

    return (
      <div className="calendar-container" style={this.style}>
        {this.state.slotModel &&
          <div className="TimeSlots TimeSlotsMob">
            {timeSlots.map((a, i) => {
              return (
                <div onClick={() => this.setState({ selectedSlot: a, slotModel: false })} className={`slot ${a === this.state.selectedSlot ? "active" : ""}`}>
                  {a}:00
                </div>
              )
            })}
          </div>
        }
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="7">
                <div className="calendar-header-div">
                  <this.MonthNav />
                  {" "}
                  <this.YearNav />
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {trElems}
          </tbody>
        </table>

      </div>

    );
  }
}
