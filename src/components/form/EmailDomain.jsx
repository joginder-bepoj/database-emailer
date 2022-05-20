import React, {useState} from "react";
import { useStateContext } from "../context/StateContext";
import { emailDomainData } from "./emailDomainData";

const EmailDomain = () => {
    const {setEmailDomain, emailDomain} = useStateContext()
    const [isChecked, setIsChecked] = useState(false)
    const handleChange = (e) =>{
        setEmailDomain({
            ...emailDomain, [e.target.name]: e.target.value
        })
    }
    const selectAllCheckBox = () =>{
        setIsChecked(!isChecked);
    }

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
                        {
                            emailDomainData.map(({name, id, value}) =>(
                                <div key={id}>
                            <label htmlFor="email_0">{value}</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name={name}
                                id= {id}
                                value={value}
                                checked={isChecked}
                            />
                            </div>
                            ))
                        }  
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
                                <button
                                    type="button"
                                    name="butCheckAll"
                                    onClick={selectAllCheckBox}
                                >Check all emails</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </fieldset>
        </>
    );
};

export default EmailDomain;
