import React from "react";
import { useStateContext } from "../context/StateContext";

const UniqueValue = () => {
    const {setUniqValues, uniqValues} = useStateContext()
    const handleChange = (e) =>{
        setUniqValues({
            ...uniqValues, [e.target.name] : e.target.value
        })
    }
    return (
        <>
            <fieldset id="fsUnique">
                <legend>Unique Values Requirement</legend>
                The database contains company website domains which have more than one
                email address per company domain. Conversely the database contains email
                addresses in which the owner of an email address owns more than one
                website domain. Below you have an option to query to obtain counts by
                either unique email addresses, unique website domains, or no unique data
                because you want as many leads as possible for your targeted market
                <br />
                <hr style={{ width: "50%" }} />
                <table>
                    <tbody>
                    <tr align="center">
                        <td>
                            <input onChange={handleChange}
                                type="radio"
                                name="optGrouping"
                                id="optPhones"
                                value="phone"
                            />
                        </td>
                        <td>
                            <label htmlFor="optPhones">Unique Phone Numbers</label>
                        </td>
                        <td>
                            <input onChange={handleChange}
                                type="radio"
                                name="optGrouping"
                                id="optFaxs"
                                value="fax"
                            />
                        </td>
                        <td>
                            <label htmlFor="optFaxs">Unique Fax Numbers</label>
                        </td>
                        <td>
                            <input onChange={handleChange}
                                type="radio"
                                name="optGrouping"
                                id="optAddresses"
                                value="postal_address"
                            />
                        </td>
                        <td>
                            <label htmlFor="optAddresses">Unique Postal Addresses</label>
                        </td>
                    </tr>

                    <tr align="center">
                        <td>
                            <input onChange={handleChange}
                                type="radio"
                                name="optGrouping"
                                id="optEmails"
                                value="email_address"
                            />
                        </td>
                        <td>
                            <label htmlFor="optEmails">Unique Email Addresses</label>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </>
    );
};

export default UniqueValue;
