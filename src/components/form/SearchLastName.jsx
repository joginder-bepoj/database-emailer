import React from "react";
import { useStateContext } from "../context/StateContext";

const SearchLastName = () => {
    const { setSearchLastName, searchLastName } = useStateContext();
    const handleChange = (e) => {
        setSearchLastName({
            ...searchLastName,
            [e.target.name]: e.target.value,
        });
    };
    const handleCheckChange = (e) => {
        setSearchLastName({
            ...searchLastName, [e.target.name]: e.target.checked
        })
    }

    return (
        <>
            <fieldset id="fsLastName">
                <legend id="Last_name">Search by Last Name:</legend>
                <h4>Search By Last Name:</h4>
                <textarea
                    name="taLastNames"
                    id="taLastNames"
                    rows="5"
                    cols="40"
                    placeholder="Enter you last names Separated by Semi Colons ;"
                    style={{ width: "90%" }}
                    onChange={handleChange}
                ></textarea>
                <br />
                <small>Enter you last names Separated by Semi Colons ;</small>
                <hr />
                <table width="100%" className="tdBlock" id="tbllastName">
                    <tbody>
                        <tr valign="top">
                            <td width="35%">
                                <label htmlFor="last_exactly_this">Last Name Matches Exactly: </label>
                                <input
                                    onChange={handleChange}
                                    type="radio"
                                    name="opt_Last_search_conditions"
                                    id="last_exactly_this"
                                    title="Names match this exactly"
                                    value="3"
                                    defaultChecked
                                />
                                <br />
                                <label htmlFor="chkGroupByLastName">Group By Last Names: </label>
                                <input
                                    onChange={handleCheckChange}
                                    type="checkbox"
                                    name="chkGroupByLastName"
                                    id="chkGroupByLastName"
                                    value="1"
                                />
                                <br />
                                <small>
                                    (This is for exact matches only. It will slow query down
                                    considerably)
                                </small>
                            </td>
                            <td width="35%">
                                <label htmlFor="last_starts_with">
                                    Last Name Starts with Entry:{" "}
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="radio"
                                    name="opt_Last_search_conditions"
                                    id="last_starts_with"
                                    title="All Last names that start with this will be included"
                                    value="1"
                                />
                                <br />
                                <label htmlFor="chkCapitalizationLastNames">
                                    Make This Search Case Sensitive:
                                </label>{" "}
                                <input
                                    onChange={handleCheckChange}
                                    type="checkbox"
                                    name="chkCapitalizationLastNames"
                                    id="chkCapitalizationLastNames"
                                    value="1"
                                />
                                <br />
                                <small>
                                    (Ex.: "Hurley" would match only Hurley, not HURLEY OR hurley)
                                </small>
                            </td>
                            <td width="30%">
                                <label htmlFor="last_includes_this">Last Name Includes Entry:</label>
                                <input
                                    onChange={handleChange}
                                    type="radio"
                                    name="opt_Last_search_conditions"
                                    id="last_includes_this"
                                    title="All Last names that include this will be included"
                                    value="2"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <table
                    width="100%"
                    cellPadding="4"
                    cellSpacing="2"
                    id="tblFLNames"
                    className="tdBlock"
                >
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="chkNameAddress">
                                    Has a First Name, Last Name and Address:
                                </label>{" "}
                                <input
                                    onChange={handleCheckChange}
                                    type="checkbox"
                                    name="chkNameAddress"
                                    id="chkNameAddress"
                                    value="1"
                                />
                            </td>
                            <td>
                                <label htmlFor="chkNameFL">Just a First and Last Name:</label>{" "}
                                <input
                                    onChange={handleCheckChange}
                                    type="checkbox"
                                    name="chkNameFL"
                                    id="chkNameFL"
                                    value="1"
                                />{" "}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
        </>
    );
};

export default SearchLastName;
