import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "../utils/Axios";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { fetchVets } from "./actions";
const queryString = require("query-string");

const RecentSearches = (props) => {
  const { className } = props;
  const history = useHistory();
  let urlParams = queryString.parse(history.location.search);
  const [recentSearch, setRecentSearch] = useState([]);

  const fetchTerms = () => {
    axios
      .get("recentsearch", {
        headers: { Authorization: localStorage.getItem("cookie-token") },
      })
      .then((res) => {
        setRecentSearch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const search = (typeVal) => {
    const searchParams = queryString.stringify({
      ...urlParams,
      type: typeVal,
    });
    history.push({
      pathname: "/vet-listings",
      search: "?" + searchParams,
    });
    props.fetchVets(searchParams);
    // console.log(urlParams);
  };

  useEffect(() => {
    fetchTerms();
  }, []);

  const menu = (
    <Menu>
      {recentSearch.map((value, key) => (
        <Menu.Item key={key} onClick={() => search(value.term_type)}>
          <div className="text-success">
            <strong>{value.term_type}</strong>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      {recentSearch.length > 0 ? (
        <Space wrap>
          <Dropdown overlay={menu} trigger={["click"]}>
            <div
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <a className={className}>Recent Searches </a>
              <DownOutlined className="text-success" />
            </div>
          </Dropdown>
        </Space>
      ) : (
        <></>
      )}
    </>
  );
};
const mapStateToProps = ({ store }) => ({
  store,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchVets,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecentSearches);
