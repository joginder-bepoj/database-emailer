import React from "react";
import { useStateContext } from "../context/StateContext";

const RegistrantContact = () => {
    const {setRegistrantContact, registrantContact} = useStateContext()
    const handleChange = (e) =>{
        setRegistrantContact({
            ...registrantContact, [e.target.name] : e.target.value
        })
    }
    console.log(registrantContact)
    return (
        <>
            <fieldset>
                <legend>Registrant Contact Names:</legend>
                <div align="center">
                    <b> Contact Names</b>
                </div>
                <br />
                <table width="100%">
                    <tbody>
                    <tr valign="top">
                        <td>
                            <input onChange={handleChange}
                                type="radio"
                                name="chkName"
                                id="chkNameNone"
                                value="0"
                                defaultChecked
                            />
                        </td>
                        <td width="45%">
                            <label htmlFor="chkNameNone">
                                Check here if you do not need anyone's name. This will give you
                                the most results:
                            </label>
                        </td>
                        <td>
                            <input onChange={handleChange} type="radio" name="chkName" id="chkNameSome" value="1" />
                        </td>
                        <td width="45%">
                            <label htmlFor="chkNameSome">
                                Check here if you require executives full name either under
                                "First Name and Last Name" OR "Contact Name".{" "}
                            </label>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <small>
                    Note: If you are using our emailing software, it will allow you to
                    automatically pull name values into your email presentation if the
                    data record contains EITHER the executive's name in 2 columns as
                    "First Name" and "Last Name" OR 1 full column "Contact Name".
                </small>
            </fieldset>
            <hr />
        </>
    );
};

export default RegistrantContact;
