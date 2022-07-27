import React from "react";
import { useStateContext } from "../context/StateContext";

const UniqueEmailFax = () => {
    const {setUniqueEmail, uniqueEmail} = useStateContext(true)
    const handleChange = (e) =>{
        setUniqueEmail({
            ...uniqueEmail, [e.target.name] : e.target.value
        })
    }
    const handleCheckChange =  (e) => {
        const {name, value, checked} = e.target
        setUniqueEmail({
            ...uniqueEmail,
            [name] : checked ? value : ""            
        })
    }
    return (
        <>
            <fieldset id="fsUniques">
                <legend>Email Addresses, Websites(URLs) &amp; Fax Numbers:</legend>
                <br />
                <table width="100%">
                    <tbody>
                    <tr>
                        <td align="center">
                            <input onChange={handleCheckChange} type="checkbox" name="chkFaxes" id="chkFaxes" value="1" />
                        </td>
                        <td>
                            <label htmlFor="chkFaxes">Must Include Valid Fax</label>
                        </td>
                        <td align="center">
                            <input onChange={handleCheckChange} type="checkbox" name="chkPhone" id="chkPhone" value="1" />
                        </td>
                        <td>
                            <label htmlFor="chkPhone">Must Include Valid Phone</label>
                        </td>
                        <td align="center">&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="center">
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                name="chkEmailsOrPhones"
                                id="chkEmailsOrPhones"
                                value="EmPh"
                            />
                        </td>
                        <td>
                            <label htmlFor="chkEmailsOrPhones">Must Include Email OR Phone</label>
                        </td>
                        <td align="center">
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                name="chkEmailsAndPhones"
                                id="chkEmailsANDPhones"
                                value="EmANDPh"
                            />
                        </td>
                        <td>
                            <label htmlFor="chkEmailsANDPhones">
                                Must Include Email &amp; Phone
                            </label>
                        </td>
                        <td>
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                name="chkCompNames"
                                id="chkCompNamesT"
                                value="1"
                            />
                        </td>
                        <td align="center">
                            <label htmlFor="chkCompNamesT">Must have a Company Name:</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <input onChange={handleChange} type="radio" name="chkEmails" id="chkEmailsY" value="Y" />
                            &nbsp;&nbsp;
                        </td>
                        <td>
                            <label htmlFor="chkEmailsY">Must Include Email Address</label>{" "}
                        </td>
                        <td align="center">
                            <input onChange={handleChange} type="radio" name="chkEmails" id="chkEmailsN" value="N" />
                            &nbsp;&nbsp;
                        </td>
                        <td>
                            <label htmlFor="chkEmailsN">Without Email Address</label>
                        </td>
                        <td align="center">
                            <input onChange={handleChange}
                                type="radio"
                                name="chkEmails"
                                id="chkEmailsE"
                                value="0"
                                defaultChecked
                            />
                            &nbsp;&nbsp;
                        </td>
                        <td>
                            <label htmlFor="chkEmailsE">Either</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <input onChange={handleChange} type="radio" name="chkURL" id="chkURLY" value="Y" />
                            &nbsp;&nbsp;
                        </td>
                        <td>
                            <label htmlFor="chkURLY">Must Include a Web Address</label>
                        </td>
                        <td align="center">
                            <input onChange={handleChange} type="radio" name="chkURL" id="chkURLN" value="N" />
                            &nbsp;&nbsp;
                        </td>
                        <td>
                            <label htmlFor="chkURLN">Without a Web Address</label>
                        </td>
                        <td align="center">
                            <input onChange={handleChange}
                                type="radio"
                                name="chkURL"
                                id="chkURLE"
                                value="0"
                                defaultChecked
                            />
                            &nbsp;&nbsp;
                        </td>
                        <td>
                            <label htmlFor="chkURLE">Either</label>
                        </td>
                    </tr>
                    </tbody>
                </table>
                &nbsp;If you check the "Unique Email Addresses" or "Unique Fax Numbers"
                below, then you don't need to check the boxes above too. NOTE: We have
                over 80 million full records and 60 million of them have email
                addresses. However, most email records do NOT have values for the
                following two select options, so choosing them will greatly limit your
                email count.
            </fieldset>
        </>
    );
};

export default UniqueEmailFax;
