import React from "react";
import { useStateContext } from "../context/StateContext";

const ExecutiveContact = () => {
    const {setExecutiveContact} = useStateContext()
    const handleChange= (e) =>{
        setExecutiveContact(e.target.value)
    }
    return (
        <>
            <fieldset id="hasNames">
                <legend>Executive Contact Names:</legend>
                <div align="center">
                    <b>Executive Contact Names</b>
                </div>
                <br />
                In Our Database executive's names are: A) Under 2 separate columns
                "First Name" and "Last Name" Or B) The full name under one "Contact
                Name" column and C) Some data records will have all three columns.
                <table width="100%">
                    <tbody>
                    <tr>
                        <td>
                            <input onChange={handleChange}
                                type="radio"
                                name="chkName"
                                id="chkNameNone"
                                value="0"
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
        </>
    );
};

export default ExecutiveContact;
