import React from "react";
import { useStateContext } from "../context/StateContext";

const ExcludeGeneralEmail = () => {
    const {setExcludeEmail, excludeEmail} = useStateContext()
    const handleCheckChange = (e) =>{
        const {value, checked} = e.target
        setExcludeEmail(checked ? [...excludeEmail, value] : excludeEmail.filter(item=> item !==value))
    }

    return (
        <>
            <fieldset>
                <legend>Exclude General Department Email Addresses</legend>
                <p align="justify">
                    SKIP THIS SECTION ENTIRELY if you simply wish to include in your query
                    results the thousands of these general business email boxes in our
                    database!
                    <br />
                    A) Excluding some or all of the most common business email boxes from
                    your searchs.
                </p>
                Check the Box to Exclude Them:
                <table width="100%" className="stateLabel">
                    <tbody>
                    <tr>
                        <td align="center">
                            <label htmlFor="chkBoxes_0">sales@</label>{" "}
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                name="chkBoxes_0"
                                id="chkBoxes_0"
                                value="sales@"
                            />
                        </td>
                        <td align="center">
                            <label htmlFor="chkBoxes_1">webmaster@</label>{" "}
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                name="chkBoxes_1"
                                id="chkBoxes_1"
                                value="webmaster@"
                            />
                        </td>
                        <td align="center">
                            <label htmlFor="chkBoxes_2">info@</label>{" "}
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                name="chkBoxes_2"
                                id="chkBoxes_2"
                                value="info@"
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </>
    );
};

export default ExcludeGeneralEmail;
