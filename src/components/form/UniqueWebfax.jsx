import React from "react";
import { useStateContext } from "../context/StateContext";

const UniqueWebfax = () => {
    const {setUniqueWebFax, uniqueWebFax} = useStateContext()
    const handleChange = (e) => {
        const {name, checked, value} = e.target
        setUniqueWebFax({...uniqueWebFax, [name] : checked ? value : ""})
     };
    const handleCheckChange = (e) => { 
        setUniqueWebFax({...uniqueWebFax, [e.target.name]: e.target.value
        })
    };
    return (
        <>
            <fieldset id="fsUniques">
                <legend>Email Addresses, Websites(URLs) &amp; Fax Numbers:</legend>
                <table>
                    <tbody>
                        <tr align="center">
                            <td>
                                <input
                                    onChange={handleCheckChange}
                                    type="checkbox"
                                    name="chkFaxes"
                                    id="chkFaxes"
                                    value="1"
                                    className="checkbox-custom"
                                />
                                <span className="checkbox-custom-dummy"></span>
                                <span className="checkbox-custom-dummy"></span>
                            </td>
                            <td>
                                <label htmlFor="chkFaxes">Must Include Valid Fax</label>
                            </td>
                            <td>
                                <input
                                    onChange={handleCheckChange}
                                    type="checkbox"
                                    name="chkPhone"
                                    id="chkPhone"
                                    value="1"
                                    className="checkbox-custom"
                                />
                                <span className="checkbox-custom-dummy"></span>
                                <span className="checkbox-custom-dummy"></span>
                            </td>
                            <td>
                                <label htmlFor="chkPhone">Must Include Valid Phone</label>
                            </td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr align="center">
                            <td>
                                <input
                                    onChange={handleChange}
                                    type="radio"
                                    name="chkEmails"
                                    id="chkEmailsY"
                                    value="Y"
                                    className="radio-custom"
                                />
                                <span className="radio-custom-dummy"></span>
                                <span className="radio-custom-dummy"></span>&nbsp;&nbsp;
                            </td>
                            <td>
                                <label htmlFor="chkEmailsY">Must Include Email Address</label>
                            </td>
                            <td>
                                <input
                                    onChange={handleChange}
                                    type="radio"
                                    name="chkEmails"
                                    id="chkEmailsN"
                                    value="N"
                                    className="radio-custom"
                                />
                                <span className="radio-custom-dummy"></span>
                                <span className="radio-custom-dummy"></span>&nbsp;&nbsp;
                            </td>
                            <td>
                                <label htmlFor="chkEmailsN">Without Email Address</label>
                            </td>
                            <td>
                                <input
                                    onChange={handleChange}
                                    type="radio"
                                    name="chkEmails"
                                    id="chkEmailsE"
                                    value="0"
                                    defaultChecked
                                    className="radio-custom"
                                />
                                <span className="radio-custom-dummy"></span>
                                <span className="radio-custom-dummy"></span>&nbsp;&nbsp;
                            </td>
                            <td>
                                <label htmlFor="chkEmailsE">Either</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                &nbsp;If you check the "Unique Email Addresses" or "Unique Fax Numbers"
                below, then you don't need to check the boxes above too.
            </fieldset>
        </>
    );
};

export default UniqueWebfax;
