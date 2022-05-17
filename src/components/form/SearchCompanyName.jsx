import React from "react";
import { useStateContext } from "../context/StateContext";

const SearchCompanyName = () => {
    const {setSearchCompany, searchCompany} = useStateContext()
    const handleChange = (e) =>{
        setSearchCompany({
            ...searchCompany, [e.target.name] : e.target.value
        })
    }
    return (
        <>
            <fieldset id="fsCompanyName">
                <legend>Search by Company Name:</legend>
                <b>Company Name:</b>
                <input onChange={handleChange}
                    type="text"
                    name="txtCompanyName"
                    id="txtCompanyName"
                    size="30"
                    
                />
                <table width="100%" cellPadding="0" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td width="33%">
                            <label htmlFor="starts_with">Name Starts With This Entry</label>
                            <input onChange={handleChange}
                                type="radio"
                                name="opt_company_search_conditions"
                                id="starts_with"
                                title="All company names that start with this will be included"
                                value="1"
                            />
                        </td>
                        <td>
                            <label htmlFor="includes_this">
                                Name Includes This Entry Somewhere
                            </label>
                            <input onChange={handleChange}
                                type="radio"
                                name="opt_company_search_conditions"
                                id="includes_this"
                                title="All company names that include this will be included"
                                value="2"
                            />
                        </td>
                        <td>
                            <label htmlFor="exactly_this">Name Is Exactly This Entry</label>{" "}
                            <input onChange={handleChange}
                                type="radio"
                                name="opt_company_search_conditions"
                                id="exactly_this"
                                title="Names match this exactly"
                                value="3"
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br />
                <label htmlFor="chkCapitalizationCompNames">
                    Make This Search Case Sensitive:
                </label>
                <input onChange={handleChange}
                    type="checkbox"
                    name="chkCapitalizationCompNames"
                    id="chkCapitalizationCompNames"
                    value="1"
                />{" "}
                | <label htmlFor="chkCompNames">Must have a Company Name:</label>{" "}
                <input onChange={handleChange}
                    type="checkbox"
                    name="chkCompNames"
                    id="chkCompNames"
                    value="1"
                />
                <br />
                <small>
                    (Normally the search is case insensitive, or capitalization doesn't
                    matters. This feature makes the name search case sensitive so "Hurley"
                    would match only Hurley, not HURLEY OR hurley)
                </small>
            </fieldset>
        </>
    );
};

export default SearchCompanyName;
