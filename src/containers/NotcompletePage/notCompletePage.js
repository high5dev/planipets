import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import errorImage from '../../Images/404page/errorImage.png'
import Logo from "../../Images/home/logo.png";

import '../PageNotFound/pageNotFound.scss'
// import html from '../../../index.html'
var NewComponent = function () {
    useEffect(()=>{
       document.getElementById("formNotCom").innerHTML += `  <script type="text/javascript">
       (function () {
           var IE = /@cc_on!@/false;
           if (!IE) { return; }
           if (document.compatMode && document.compatMode == 'BackCompat') {
               if (document.getElementById("af-form-1946495044")) {
                   document.getElementById("af-form-1946495044").className = 'af-form af-quirksMode';
               }
               if (document.getElementById("af-body-1946495044")) {
                   document.getElementById("af-body-1946495044").className = "af-body inline af-quirksMode";
               }
               if (document.getElementById("af-header-1946495044")) {
                   document.getElementById("af-header-1946495044").className = "af-header af-quirksMode";
               }
               if (document.getElementById("af-footer-1946495044")) {
                   document.getElementById("af-footer-1946495044").className = "af-footer af-quirksMode";
               }
           }
       })();
   </script> 
   <script type="text/javascript">(function(d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) return;
       js = d.createElement(s); js.id = id;
       js.src = "//forms.aweber.com/form/44/1946495044.js";
       fjs.parentNode.insertBefore(js, fjs);
       }(document, "script", "aweber-wjs-ti97ylwjn"));
   </script>`
    },[])
    return (
        <div style={{ width: "100%" }}>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n        #af-form-1946495044 .af-body .af-textWrap {\n            width: 98%;\n            display: block;\n            float: none;\n        }\n\n        #af-form-1946495044 .af-body a {\n            color: #454545;\n            text-decoration: none;\n            font-style: normal;\n            font-weight: normal;\n        }\n\n        #af-form-1946495044 .af-body input.text,\n        #af-form-1946495044 .af-body textarea {\n            background-color: #FFFFFF;\n            color: #454545;\n            text-decoration: none;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 24px;\n            font-family: Trebuchet MS, sans-serif;\n        }\n\n        #af-form-1946495044 .af-body input.text:focus,\n        #af-form-1946495044 .af-body textarea:focus {\n            background-color: #FFFFFF;\n            }\n\n        #af-form-1946495044 .af-body label.previewLabel {\n            display: block;\n            float: none;\n            text-align: left;\n            width: auto;\n            color: #454545;\n            text-decoration: none;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 16px;\n            font-family: Helvetica, sans-serif;\n        }\n\n        #af-form-1946495044 .af-body {\n            padding-bottom: 15px;\n            padding-top: 15px;\n            background-repeat: no-repeat;\n            background-position: inherit;\n            background-image: none;\n            color: inherit;\n            font-size: 16px;\n            font-family: Helvetica, sans-serif;\n        }\n\n        #af-form-1946495044 .af-footer {\n            padding-bottom: 0px;\n            padding-top: 0px;\n            padding-right: 16px;\n            padding-left: 16px;\n            background-color: #FFFFFF;\n            background-repeat: no-repeat;\n            background-position: top left;\n            background-image: none;\n            border-width: 1px;\n            border-bottom-style: none;\n            border-left-style: none;\n            border-right-style: none;\n            border-top-style: none;\n            color: inherit;\n            font-size: 12px;\n            font-family: Helvetica, sans-serif;\n        }\n\n        #af-form-1946495044 .af-header {\n            padding-bottom: 9px;\n            padding-top: 9px;\n            padding-right: 10px;\n            padding-left: 10px;\n            background-color: #26914A;\n            background-repeat: no-repeat;\n            background-position: inherit;\n            background-image: none;\n            border-color: #FFFFFF;\n            border-width: 1px;\n            border-bottom-style: none;\n            border-left-style: none;\n            border-right-style: none;\n            border-top-style: none;\n            color: inherit;\n            font-size: 18px;\n            font-family: Helvetica, sans-serif;\n        }\n\n        #af-form-1946495044 .af-quirksMode .bodyText {\n            padding-top: 2px;\n            padding-bottom: 2px;\n        }\n\n        #af-form-1946495044 .af-quirksMode {\n            padding-right: 60px;\n            padding-left: 60px;\n        }\n\n        #af-form-1946495044 .af-standards .af-element {\n            padding-right: 60px;\n            padding-left: 60px;\n        }\n\n        #af-form-1946495044 .bodyText p {\n            margin: 1em 0;\n        }\n\n        #af-form-1946495044 .buttonContainer input.submit {\n            background-image: none;\n            background-color: #1CBD27;\n            color: #FFFFFF;\n            text-decoration: none;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 16px;\n            font-family: Helvetica, sans-serif;\n        }\n\n        #af-form-1946495044 .buttonContainer input.submit {\n            width: auto;\n        }\n\n        #af-form-1946495044 .buttonContainer {\n            text-align: right;\n        }\n\n        #af-form-1946495044 body,\n        #af-form-1946495044 dl,\n        #af-form-1946495044 dt,\n        #af-form-1946495044 dd,\n        #af-form-1946495044 h1,\n        #af-form-1946495044 h2,\n        #af-form-1946495044 h3,\n        #af-form-1946495044 h4,\n        #af-form-1946495044 h5,\n        #af-form-1946495044 h6,\n        #af-form-1946495044 pre,\n        #af-form-1946495044 code,\n        #af-form-1946495044 fieldset,\n        #af-form-1946495044 legend,\n        #af-form-1946495044 blockquote,\n        #af-form-1946495044 th,\n        #af-form-1946495044 td {\n            float: none;\n            color: inherit;\n            position: static;\n            margin: 0;\n            padding: 0;\n        }\n\n        #af-form-1946495044 button,\n        #af-form-1946495044 input,\n        #af-form-1946495044 submit,\n        #af-form-1946495044 textarea,\n        #af-form-1946495044 select,\n        #af-form-1946495044 label,\n        #af-form-1946495044 optgroup,\n        #af-form-1946495044 option {\n            float: none;\n            position: static;\n            margin: 0;\n        }\n\n        #af-form-1946495044 div {\n            margin: 0;\n        }\n\n        #af-form-1946495044 fieldset {\n            border: 0;\n        }\n\n        #af-form-1946495044 form,\n        #af-form-1946495044 textarea,\n        .af-form-wrapper,\n        .af-form-close-button,\n        #af-form-1946495044 img {\n            float: none;\n            color: inherit;\n            position: static;\n            background-color: none;\n            border: none;\n            margin: 0;\n            padding: 0;\n        }\n\n        #af-form-1946495044 input,\n        #af-form-1946495044 button,\n        #af-form-1946495044 textarea,\n        #af-form-1946495044 select {\n            font-size: 100%;\n        }\n\n        #af-form-1946495044 p {\n            color: inherit;\n        }\n\n        #af-form-1946495044 select,\n        #af-form-1946495044 label,\n        #af-form-1946495044 optgroup,\n        #af-form-1946495044 option {\n            padding: 0;\n        }\n\n        #af-form-1946495044 table {\n            border-collapse: collapse;\n            border-spacing: 0;\n        }\n\n        #af-form-1946495044 ul,\n        #af-form-1946495044 ol {\n            list-style-image: none;\n            list-style-position: outside;\n            list-style-type: disc;\n            padding-left: 40px;\n        }\n\n        #af-form-1946495044,\n        #af-form-1946495044 .quirksMode {\n            width: 100%;\n            max-width: 590px;\n        }\n\n        #af-form-1946495044.af-quirksMode {\n            overflow-x: hidden;\n        }\n\n        #af-form-1946495044 {\n            background-color: #FFFFFF;\n            border-color: #454545;\n            border-width: 1px;\n            border-style: none;\n        }\n\n        #af-form-1946495044 {\n            display: block;\n        }\n\n        #af-form-1946495044 {\n            overflow: hidden;\n        }\n\n        .af-body .af-textWrap {\n            text-align: left;\n        }\n\n        .af-body input.image {\n            border: none !important;\n        }\n\n        .af-body input.submit,\n        .af-body input.image,\n        .af-form .af-element input.button {\n            float: none !important;\n        }\n\n        .af-body input.submit {\n            white-space: inherit;\n        }\n\n        .af-body input.text {\n            width: 100%;\n            float: none;\n            padding: 2px !important;\n        }\n\n        .af-body.af-standards input.submit {\n            padding: 4px 12px;\n        }\n\n        .af-clear {\n            clear: both;\n        }\n\n        .af-element label {\n            text-align: left;\n            display: block;\n            float: left;\n        }\n\n        .af-element {\n            padding-bottom: 5px;\n            padding-top: 5px;\n        }\n\n        .af-form-wrapper {\n            text-indent: 0;\n        }\n\n        .af-form {\n            box-sizing: border-box;\n            text-align: left;\n            margin: auto;\n        }\n\n        .af-header,\n        .af-footer {\n            margin-bottom: 0;\n            margin-top: 0;\n            padding: 10px;\n        }\n\n        .af-quirksMode .af-element {\n            padding-left: 0 !important;\n            padding-right: 0 !important;\n        }\n\n        .lbl-right .af-element label {\n            text-align: right;\n        }\n\n        body {}\n\n        #af-form-1946495044 input.submit,\n        #af-form-1946495044 #webFormSubmitButton {\n            -webkit-appearance: none;\n        }\n\n        .af-form {\n            border-radius: 12px;\n        }\n\n        .af-header {\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);\n        }\n\n        .af-header p {\n            padding-top: 25px;\n            padding-right: 50px;\n            padding-bottom: 40px;\n            padding-left: 50px;\n        }\n\n        .af-body input.text,\n        .af-body textarea {\n            border-radius: 4px;\n        }\n\n        .af-element {\n            padding-top: 10px;\n            padding-bottom: 10px;\n        }\n\n        #af-form-1946495044 select,\n        #af-form-1946495044 label,\n        #af-form-1946495044 optgroup,\n        #af-form-1946495044 option {\n            padding-bottom: 5px;\n        }\n\n        #af-form-1946495044 p {\n            margin: 0;\n        }\n\n        #af-form-1946495044 .af-body .privacyPolicy {\n            font-size: 9px;\n            padding-top: 20px;\n            padding-bottom: 10px;\n        }\n\n        #af-form-1946495044 .af-body .poweredBy {\n            font-size: 9px;\n            padding-top: 0;\n            padding-bottom: 0;\n        }\n\n        #af-form #webFormSubmitButton,\n        .buttonContainer input.submit,\n        .af-body.af-standards input.submit {\n            border: none;\n            border-radius: 4px;\n            padding: 10px 30px;\n        }\n\n        .bodyText p strong {\n            letter-spacing: 0.03em;\n            line-height: 1.25;\n        }\n\n        .af-form .af-element-radio {\n            padding-bottom: 5px;\n        }\n    " }} />
            







            <form id="formNotCom" method="post" class="af-form-wrapper" accept-charset="UTF-8"
        action="https://www.aweber.com/scripts/addlead.pl" target="_blank">
        <div style={{display: 'none'}}>
            <input type="hidden" name="meta_web_form_id" value="1946495044" />
            <input type="hidden" name="meta_split_id" value="" />
            <input type="hidden" name="listname" value="awlist6185098" />
            <input type="hidden" name="redirect" value="https://www.aweber.com/thankyou-coi.htm?m=text"
                id="redirect_c50132921baf91dd72e159d68f2a53e1" />

            <input type="hidden" name="meta_adtracking" value="My_Web_Form" />
            <input type="hidden" name="meta_message" value="1" />
            <input type="hidden" name="meta_required" value="email" />

            <input type="hidden" name="meta_tooltip" value="" />
        </div>
        <div id="af-form-1946495044" class="af-form">
            {/* <div id="af-header-1946495044" class="af-header">
                <div class="bodyText">
                    <p>&nbsp;</p>
                </div>
            </div> */}
            <div id="af-body-1946495044" class="af-body af-standards">
                <div class="af-element">
                    {/* <label class="previewLabel" for="awf_field-113242042">Email: </label> */}


                    <div className="af-textWrap inputDiv filter"><input placeholder="Entrez votre e-mail" className="text" id="awf_field-113242042" type="text" name="email" tabIndex={500} />
                            </div>


                    {/* <div class="af-textWrap inputDiv filter"><input class="text" id="awf_field-113242042" type="text" name="email"
                            value="" tabindex="500" onfocus=" if (this.value == '') { this.value = ''; }"
                            onblur="if (this.value == '') { this.value='';} " />
                    </div> */}
                    <div class="af-clear"></div>
                </div>


                <div className="af-element buttonContainer ">
                            <input name="submit" className="submit" type="submit" value="Envoyer" defaultValue="Envoyer" tabIndex={501} />
                            <div className="af-clear" />
                        </div>


                {/* <div class="af-element buttonContainer">
                    <input name="submit" class="submit" type="submit" value="Envoyer" tabindex="501" />
                    <div class="af-clear"></div>
                </div> */}
            </div>
            <div id="af-footer-1946495044" class="af-footer">
                <div class="bodyText">
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
        <div style={{display: 'none'}}><img src="https://forms.aweber.com/form/displays.htm?id=jJwsbCycrAwsLA==" alt="" />
        </div>
    <div class="AW-Form-1946495044"></div>
</form>
            {/* AWeber Web Form Generator 3.0.1 */}
            {/* /AWeber Web Form Generator 3.0.1 */}
        </div>
    );
}

// var perf =require('./indexfn.html');
// var template = { __html: perf };
function NotCompletePage(props) {
    return (
        <div className="container errorPageMain">
            <img src={Logo} alt="notCompletePage" />
            <h2>Bientôt, Planipets sera avec vous et pour vos animaux de compagnie</h2>
            <h3>Entrez ci-dessous votre adresse mail pour vous tenir au courant de la révolution Planipets. </h3>
            {/* <div className="inputDiv filter">
                <input type="text" placeholder="Entrez votre e-mail" name="Email"/>
            </div>
            <button onClick={() => props.history.goBack()}>Envoyer</button> */}
            {/* <iframe src={perf} title="W3Schools Free Online Web Tutorials">
            </iframe> */}
            {/* <div dangerouslySetInnerHTML={template} /> */}
            <NewComponent />
        </div>
    )
}

const mapStateToProps = ({ store }) => ({

})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotCompletePage)