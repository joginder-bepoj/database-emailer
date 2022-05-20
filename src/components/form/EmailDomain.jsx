import React from "react";
import { useStateContext } from "../context/StateContext";

const EmailDomain = () => {
    const {setEmailDomain, emailDomain} = useStateContext()
    const handleChange = (e) =>{
        setEmailDomain({
            ...emailDomain, [e.target.name]: e.target.value
        })
    }
    console.log(emailDomain)
    return (
        <>
            <fieldset id="fsEmailDomains">
                <legend>Email Domain Include OR Exclude Searches (Optional) </legend>

                <div
                    style={{ padding: "5px 10px 5px 15px", fontSize: "12px", border: "2px solid #CCC", fontWeight: "700" }}
                    className="tah11"
                >
                    <div align="center" style={{ fontSize: "13px", fontWeight: "700" }}>
                        Out Of Thousands of Email Domains, like @aol.com, in Our Database{" "}
                        <br />
                        These are the 62 Most Common Email Domains
                    </div>
                    {/* <!--        <p  align="justify">
       SKIP THIS SECTION ENTIRELY if you simply wish to include in your query results the thousands of domains in our database!
     </p>
      <p align="justify">
       A) Excluding some or all of the most common 62 "major" domains from your search allows you to send at higher speeds as you email over more domains by excluding the most common email domains.
     </p>
    OR
     <p align="justify">
       B) Include some or all of the below 62 most common domains and exclude all others. When you choose to limit your inclusion from our total database this means that you are excluding thousands of domains in your search!
     </p>  --> */}
                </div>
                <div id="divEmail" style={{ display: "block" }}>
                    <div style={{ width: "150px", backgroundColor: "#f2f2f2", fontSize: "13pt" }}>
                        Email Domains:
                    </div>
                    <hr />
                    <div
                        className="stateLabel flex-row"
                        id="divEmailDomains"
                        style={{ width: "100%" }}
                    >
                        <div>
                            <label htmlFor="email_0">aol</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[0]"
                                id="email_0"
                                value="aol"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_1">gmail</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[1]"
                                id="email_1"
                                value="gmail"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_2">hotmail</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[2]"
                                id="email_2"
                                value="hotmail"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_3">msn</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[3]"
                                id="email_3"
                                value="msn"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_4">verizon</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[4]"
                                id="email_4"
                                value="verizon"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_5">yahoo</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[5]"
                                id="email_5"
                                value="yahoo"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_6">alltel</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[6]"
                                id="email_6"
                                value="alltel"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_7">ameritech</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[7]"
                                id="email_7"
                                value="ameritech"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_8">att</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[8]"
                                id="email_8"
                                value="att"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_9">bellatlantic</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[9]"
                                id="email_9"
                                value="bellatlantic"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_10">bellsouth</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[10]"
                                id="email_10"
                                value="bellsouth"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_11">bigfoot</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[11]"
                                id="email_11"
                                value="bigfoot"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_12">cableone</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[12]"
                                id="email_12"
                                value="cableone"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_13">charm</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[13]"
                                id="email_13"
                                value="charm"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_14">charter</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[14]"
                                id="email_14"
                                value="charter"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_15">chartermi</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[15]"
                                id="email_15"
                                value="chartermi"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_16">chartertn</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[16]"
                                id="email_16"
                                value="chartertn"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_17">comcast</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[17]"
                                id="email_17"
                                value="comcast"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_18">compuserve</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[18]"
                                id="email_18"
                                value="compuserve"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_19">concentric</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[19]"
                                id="email_19"
                                value="concentric"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_20">covad</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[20]"
                                id="email_20"
                                value="covad"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_21">cox</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[21]"
                                id="email_21"
                                value="cox"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_22">coxmail</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[22]"
                                id="email_22"
                                value="coxmail"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_23">delphi</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[23]"
                                id="email_23"
                                value="delphi"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_24">earthlink</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[24]"
                                id="email_24"
                                value="earthlink"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_25">.edu</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[25]"
                                id="email_25"
                                value=".edu"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_26">excite</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[26]"
                                id="email_26"
                                value="excite"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_27">frontiernet</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[27]"
                                id="email_27"
                                value="frontiernet"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_28">go</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[28]"
                                id="email_28"
                                value="go"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_29">gte</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[29]"
                                id="email_29"
                                value="gte"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_30">ibm</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[30]"
                                id="email_30"
                                value="ibm"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_31">juno</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[31]"
                                id="email_31"
                                value="juno"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_32">live</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[32]"
                                id="email_32"
                                value="live"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_33">mac.com</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[33]"
                                id="email_33"
                                value="mac.com"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_34">mailcity</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[34]"
                                id="email_34"
                                value="mailcity"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_35">mailexcite</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[35]"
                                id="email_35"
                                value="mailexcite"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_36">mcimail</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[36]"
                                id="email_36"
                                value="mcimail"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_37">medione</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[37]"
                                id="email_37"
                                value="medione"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_38">mindspring</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[38]"
                                id="email_38"
                                value="mindspring"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_39">me.com</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[39]"
                                id="email_39"
                                value="me.com"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_40">netcom</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[40]"
                                id="email_40"
                                value="netcom"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_41">netscape</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[41]"
                                id="email_41"
                                value="netscape"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_42">netzero</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[42]"
                                id="email_42"
                                value="netzero"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_43">pacbell</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[43]"
                                id="email_43"
                                value="pacbell"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_44">peoplepc</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[44]"
                                id="email_44"
                                value="peoplepc"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_45">pipeline</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[45]"
                                id="email_45"
                                value="pipeline"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_46">prodigy</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[46]"
                                id="email_46"
                                value="prodigy"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_47">qwest</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[47]"
                                id="email_47"
                                value="qwest"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_48">rocketmail</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[48]"
                                id="email_48"
                                value="rocketmail"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_49">rogers</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[49]"
                                id="email_49"
                                value="rogers"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_50">rr</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[50]"
                                id="email_50"
                                value="rr"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_51">sbcglobal</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[51]"
                                id="email_51"
                                value="sbcglobal"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_52">speakeasy</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[52]"
                                id="email_52"
                                value="speakeasy"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_53">sprintmail</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[53]"
                                id="email_53"
                                value="sprintmail"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_54">sprynet</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[54]"
                                id="email_54"
                                value="sprynet"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_55">sympatico.ca</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[55]"
                                id="email_55"
                                value="sympatico.ca"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_56">usa</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[56]"
                                id="email_56"
                                value="usa"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_57">usit</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[57]"
                                id="email_57"
                                value="usit"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_58">uu</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[58]"
                                id="email_58"
                                value="uu"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_59">webtv</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[59]"
                                id="email_59"
                                value="webtv"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_60">worldnet</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[60]"
                                id="email_60"
                                value="worldnet"
                                
                            />
                        </div>
                        <div>
                            <label htmlFor="email_61">ymail</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="email[61]"
                                id="email_61"
                                value="ymail"
                                
                            />
                        </div>
                    </div>
                    <hr />
                    <table
                        align="center"
                        cellPadding="1"
                        cellSpacing="1"
                        width="100%"
                        className="tdBlock"
                    >
                        <tbody>
                        <tr>
                            <td style={{ paddingLeft: "10px" }}>
                                <span
                                    style={{ fontSize: "13px" }}
                                    className="redtext"
                                    title="the same as ignore this section"
                                >
                                    <b>Option I</b>
                                </span>
                                <br />
                                <label htmlFor="emailCondition_NOT" className="twefont">
                                    <b>INCLUDE All Domains (default)</b>
                                </label>{" "}
                                <input 
                                    type="radio"
                                    name="emailCondition"
                                    title="the same as ignore this section"
                                    id="emailCondition_NOT"
                                    value=""
                                    defaultChecked
                                    
                                />
                                <br />
                                <br />
                                <span style={{ fontSize: "13px" }} className="redtext">
                                    <b>Option Il</b>
                                </span>{" "}
                                <label htmlFor="emailCondition_included" className="twefont">
                                    <b>INCLUDE ONLY</b> the Domains checked above and ALL the
                                    others will be excluded
                                </label>
                                <input 
                                    type="radio"
                                    
                                    name="emailCondition"
                                    title="Do you want some or all of these most common 100 INCLUDED and you understand thousands of other domains not listed here will be excluded from search"
                                    id="emailCondition_included"
                                    value="IN"
                                />
                                <br />
                                <br />
                                <span style={{ fontSize: "13px" }} className="redtext">
                                    <b>Option Ill</b>
                                </span>{" "}
                                <label htmlFor="emailCondition_excluded" className="twefont">
                                    <b>EXCLUDE ONLY</b> the Domains checked above and ALL the
                                    others will be included
                                </label>{" "}
                                <input 
                                    type="radio"
                                    title="Do you want some or all of these most common 100 email domains to be Excluded from search "
                                    name="emailCondition"
                                    id="emailCondition_excluded"
                                    
                                    value="NOT IN"
                                />
                            </td>

                            <td>
                                <input 
                                    type="button"
                                    name="butCheckAll"
                                    id="butCheckAll"
                                    value="Check All Emails"
                                    title="Checks all the email boxes, or alt-o"
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    {/* <!--   <div align="center" style="font-weight: 600;"><hr />
    The more of these check boxes that you check off,  the more you will add to the number  of records.
  </div>
<b>Remember, if you just want to include all email domains, including the ones not listed above, then leave this section alone!</b>--> */}
                </div>
            </fieldset>
        </>
    );
};

export default EmailDomain;
