import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import { emailDomainData } from "./emailDomainData";

const EmailDomain = () => {
    const { setEmailDomain, } = useStateContext();
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [isChecked, setIsChecked] = useState([]);
    const [tempArr, setTempArr] = useState([]);
    const [check, setCheck] = useState(false);
    let epmty = []

    useEffect(() => {
        setTempArr(emailDomainData);
    }, [tempArr]);

    const handleChange = (e) => {
        const { checked, value } = e.target;
        setIsChecked([...isChecked, value]);
        if (!checked) {
            setIsChecked(isChecked.filter((item) => item !== value));
        }
        setEmailDomain(checked ? [...isChecked, value] : isChecked.filter(item=> item !==value))
        
    };

    const handleSelectAll = (e) => {
        console.log(isCheckedAll, "ischecl");
        setIsCheckedAll(!isCheckedAll);
        setIsChecked(tempArr.map((li) => li.value));
        if (isCheckedAll) {
            setIsChecked([]);
        }

        setCheck(!check);
        setEmailDomain(isCheckedAll ? epmty :  tempArr.map(item=>item.value))
    };

    return (
        <>
            <fieldset id="fsEmailDomains">
                <legend>Email Domain Include OR Exclude Searches (Optional) </legend>

                <div
                    style={{
                        padding: "5px 10px 5px 15px",
                        fontSize: "12px",
                        border: "2px solid #CCC",
                        fontWeight: "700",
                    }}
                    className="tah11"
                >
                    <div align="center" style={{ fontSize: "13px", fontWeight: "700" }}>
                        Out Of Thousands of Email Domains, like @aol.com, in Our Database{" "}
                        <br />
                        These are the 62 Most Common Email Domains
                    </div>
                </div>
                <div id="divEmail" style={{ display: "block" }}>
                    <div
                        style={{
                            width: "150px",
                            backgroundColor: "#f2f2f2",
                            fontSize: "13pt",
                        }}
                    >
                        Email Domains:
                    </div>
                    <hr />
                    <div
                        className="stateLabel flex-row"
                        id="divEmailDomains"
                        style={{ width: "100%" }}
                    >
                        {tempArr.map((item, index) => (
                            <div key={item.id}>
                                <label htmlFor={item.name}>{item.value}</label>{" "}
                                <input
                                    onChange={handleChange}
                                    type="checkbox"
                                    name={item.name}
                                    id={item.id}
                                    value={item.value}
                                    checked={isChecked.includes(item.value)}
                                />
                            </div>
                        ))}
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
                                        onChange={handleChange}
                                        type="radio"
                                        name="emailCondition"
                                        title="the same as ignore this section"
                                        id="emailCondition_NOT"
                                        value=""
                                        checked={isChecked.length === 0 || isChecked.length === 62}
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
                                        onChange={handleChange}
                                        type="radio"
                                        checked={isChecked.length > 0 && isChecked.length < 62}
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
                                        onChange={handleChange}
                                        type="radio"
                                        title="Do you want some or all of these most common 100 email domains to be Excluded from search "
                                        name="emailCondition"
                                        id="emailCondition_excluded"
                                        value="NOT IN"
                                        checked={isChecked.length > 0 && isChecked.length < 62}
                                    />
                                </td>

                                <td>
                                    <button
                                        type="button"
                                        name="butCheckAll"
                                        onClick={handleSelectAll}
                                    >
                                        {check ? "Uncheck all emails" : "Check all emails"}
                                    </button>
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
