import React from "react";
import { useStateContext } from "../context/StateContext";

const UniqueTelephoneEmail = () => {
    const {setUniqueTelephoneEmail, uniqueTelephoneEmail} = useStateContext()
    const handleChange = (e) =>{
        setUniqueTelephoneEmail({
            ...uniqueTelephoneEmail, [e.target.name] : e.target.value
        })
    }
    const handleCheckChange = (e) =>{
        setUniqueTelephoneEmail({
            ...uniqueTelephoneEmail, [e.target.name] : e.target.checked
        })
    }
    return (
        <>
            <fieldset id="fsUniques">
                <div style={{display: "flex", justifyContent: "flex-start"}}>
                    <div>
                    <legend >Unique Telephone, Emails &amp; Postal Mail Addresses</legend>
                    </div>
                <span style={{display:"inline"}}> Over 25 Million of these records have valid emails Check Here For Unique</span>
                </div>
                <table width="100%" cellPadding="1" cellSpacing="1" className="tdBlock">
                    <tbody>
                    <tr>
                        <td>
                            <label htmlFor="chkDistinctPhones" className="chkUnique">
                                Unique Phone Numbers:
                            </label>
                            &nbsp;&nbsp;
                            <input onChange={handleChange}
                                type="radio"
                                name="optUnique"
                                id="chkDistinctPhones"
                                value="Phones"
                            />
                        </td>
                        <td>
                            <label htmlFor="chkDistinctAddresses" className="chkUnique">
                                Unique Postal Mail Addresses:
                            </label>
                            &nbsp;&nbsp;
                            <input onChange={handleChange}
                                type="radio"
                                name="optUnique"
                                id="chkDistinctAddresses"
                                value="Addresses"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="none" className="chkUnique">
                                No Uniques:
                            </label>
                            &nbsp;&nbsp;
                            <input onChange={handleChange}
                                type="radio"
                                name="optUnique"
                                id="none"
                                value="0"
                                defaultChecked
                            />
                        </td>
                        <td>
                            <label htmlFor="chkDistinctEmails" className="chkUnique">
                                Unique Email Addresses:
                            </label>
                            &nbsp;&nbsp;
                            <input onChange={handleChange}
                                type="radio"
                                name="optUnique"
                                id="chkDistinctEmails"
                                value="Emails"
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr />
                <label htmlFor="chkHavePhone" className="chkUnique">
                    Check Here For Valid Phone #:
                </label>{" "}
                <input onChange={handleCheckChange}
                    type="checkbox"
                    name="chkHavePhone"
                    id="chkHavePhone"
                    value="1"
                />
                &nbsp; |{" "}
                <label htmlFor="chkValidEmails" className="chkUnique">
                    Check Here For Valid Email Addresses:
                </label>
                &nbsp;&nbsp;
                <input onChange={handleCheckChange}
                    type="checkbox"
                    name="chkValidEmails"
                    id="chkValidEmails"
                    value="1"
                />
                <br />
                <hr />
                <span className="chkUnique">Check Here For Valid Phone Numbers WITH:</span>
                <br />
                <table width="100%" cellPadding="1" cellSpacing="1" className="tdBlock">
                    <tbody>
                    <tr style={{display:"flex", justifyContent:"space-between"}}>
                        <td width="40%">
                            <label htmlFor="chkDoNotCallN" title="Flag = 'N'">
                                The "Do Not Call" Flag = No:
                            </label>{" "}
                            <input onChange={handleChange}
                                type="radio"
                                name="chkDoNotCall"
                                id="chkDoNotCallN"
                                value="N"
                            />
                            <br /> If the <b>"Do Not Call"</b> Flag = <b>NO</b>, that means
                            the phone number <b>IS NOT ON</b> the "Do Not Call" List. This
                            means you can cold call them.
                        </td>
                        <td width="40%">
                            <label htmlFor="chkDoNotCallY" title="Flag = 'Y'">
                                The "Do Not Call" Flag = Yes:
                            </label>{" "}
                            <input onChange={handleChange}
                                type="radio"
                                name="chkDoNotCall"
                                id="chkDoNotCallY"
                                value="Y"
                            />
                            <br /> If the <b>"Do Not Call"</b> Flag ={" "}
                            <b style={{color: "red"}}>Yes</b>, that means the phone number{" "}
                            <b style={{color: "red"}}>IS ON</b> the "Do Not Call" List. This means
                            you shouldn't cold call them or you might get into trouble.
                            <br />
                        </td>
                        <td width="15%">
                            <label htmlFor="chkDoNotCallI">OR Ignore:</label>{" "}
                            <input onChange={handleChange}
                                type="radio"
                                name="chkDoNotCall"
                                id="chkDoNotCallI"
                                value=""
                                defaultChecked
                            />
                            <br />
                            Includes blanks as well as Y's and N's
                        </td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </>
    );
};

export default UniqueTelephoneEmail;
