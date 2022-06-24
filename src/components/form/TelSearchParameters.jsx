import React, { useState } from "react";
import { states} from "./usStatesvalue";
import { useStateContext } from "../context/StateContext";
import SearchByUSCounties from "./SearchByUSCounties";
import SCFtable from "./SCFtable";

const TelSearchParameters = () => {
    const {
        selectCountry,
        setSelectCounty,
        setTextData,
        textData,
        setSCF,
        zipCodeSelect,
        setZipCodeSelect,
        setSelectState,
        selectState,
    } = useStateContext();
    const [show, setShow] = useState(true);

    const selectCountyChange = (event) => {
        setSelectCounty(event.target.value);
    };
    const handleDataChange = (e) => {
        setTextData({ ...textData, [e.target.name]: e.target.value });
    };
    const selectSCF = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value)
        setSCF(value)
    };
    const selectStates = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectState(checked ? [...selectState, value] : selectState.filter(item=> item !==value))
    }
    const handleZIP = (e) => {
        setZipCodeSelect({ ...zipCodeSelect, [e.target.name]: e.target.value });
    };
    const disabledStyle = {
        backgroundColor: "red",
        color: "black",
    };
    const searchByCounties = (prev) => {
        prev.preventDefault();
        if (selectState.length === 0) {
            alert("Please select atleast one US state ");
        } else {
            setShow(!prev);
        }
    };
    return (
        <>
            <h5>United States:</h5>
            <div
                className="stateLabel flex-row"
                id="USStates"
                style={{ width: "95%" }}
            >
                {states.map((states) => (
                    <div key={states.value}>
                        <label htmlFor={states.name}>{states.label}</label>
                        <input
                            onChange={selectStates}
                            type="checkbox"
                            name={states.name}
                            id={states.name}
                            className="sc"
                            value={states.value}
                            disabled={selectCountry !== "none"}
                        />
                    </div>
                ))}
            </div>
            <hr />
            <legend>Search By City Names</legend>
            <table width="100%" cellPadding="1" cellSpacing="1" className="tdBlock">
                <tbody>
                    <tr
                        valign="top"
                        style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}
                    >
                        <td width="50%" style={{ padding: "0 5px" }}>
                            <span>
                                City names that are common to multiple States will give you the
                                data count for each City in every State selected. Also, city
                                name spellings are not consistent and the USPS city/town names
                                do not always jibe with the actual town the resident is in,
                                especially in sparsely populated rural areas. Zip codes &amp;
                                county names are a lot more accurate way to get the right
                                geographical matches..
                            </span>
                        </td>
                        <td width="48%">
                            <textarea
                                name="taCities"
                                id="taCities"
                                rows="5"
                                cols="50"
                                onChange={handleDataChange}
                            ></textarea>
                            <br />
                            Separate the city names with commas, spaces...
                            <input
                                onChange={handleDataChange}
                                type="hidden"
                                name="boolCounty"
                                id="boolCounty"
                                value="1"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <h4>
                Use the Zip Codes or SCF Codes specific to the City and it's
                Metropolitan area for the Best Results.
            </h4>
            <hr />
            <legend>Search By US Counties</legend>
            {show ? (
                <table width="100%" cellPadding="1" cellSpacing="0" className="tdBlock">
                    <tbody>
                        <tr>
                            <td width="60%" align="left">
                                <div className="tab33">
                                    <span className="twefont" style={{ fontSize: "13px" }}>
                                        Select one or more US STATES FIRST, then click right button
                                        for all the counties
                                    </span>
                                    <br />
                                    <span className="twefont">
                                        Avoid the following "Counties" search option if you are
                                        searching for a specific State or just one or a few
                                        Municipalities within a State.
                                    </span>
                                    <br />
                                </div>
                            </td>
                            <td width="40%">
                                <span id="St"></span>
                                <br />
                                <input
                                    type={
                                        selectState.length !== 0 ? "submit" : "button"
                                    }
                                    name="SelectCounties"
                                    id="SelectCounties"
                                    className="sc"
                                    style={
                                        selectCountry !== "none"
                                            ? disabledStyle
                                            : { color: "black" }
                                    }
                                    disabled={selectCountry !== "none"}
                                    onClick={searchByCounties}
                                    value="Search By Counties"
                                    title="Brings Up Counties in a State or states, But select at least one state first! Or alt-v"
                                />
                                <input type="hidden" name="Counties" id="Counties" value="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <SearchByUSCounties />
            )}
            <br />
            <input type="hidden" name="stCheck" id="stCheck" value="Array" />
            <hr />

            <div id="divZip" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "13pt" }}>
                    <b>Choose Only One from Below:</b>
                </span>
                <hr />
                <b className="redtextbold2" style={{ textAlign: "start" }}>
                    Zip Code Options l &amp; ll:
                </b>
                <div align="center" style={{ fontSize: "15pt", fontWeight: "600" }}>
                    Input Individual 5-digit US Zip Codes
                </div>
                <div id="zips">
                <span style={{ fontSize: "13px" }} className="redtext">
                        <b>Sub-Option I</b>
                    </span>
                    <br />
                    <label htmlFor="zipCondition_included" className="twefont">
                        <b>INCLUDE ONLY</b> the Zip Codes entered below and all the rest
                        will be EXCLUDED
                    </label>{" "}
                    <input
                        onChange={handleZIP}
                        type="radio"
                        name="zipCondition"
                        title="Do you want only these zips to be included"
                        id="zipCondition_included"
                        value="0"
                        defaultChecked
                    />
                    <br />
                    <input
                        onChange={handleZIP}
                        disabled={zipCodeSelect.zipCondition === "1"}
                        type="checkbox"
                        name="chkGroupBy"
                        id="chkGroupBy"
                        value="1"
                        title="If you are selecting more than one zip code you will be given just one total of all the zip codes selected. If you must have the record count for each zip code selected, this is possible, however your search will take about 3 times longer than with just one total. If you need record count break down by zip check this box:"
                    />
                    <label className="elevfont" htmlFor="chkGroupBy">
                        <b>
                            Check this box for results grouped by Zip Code | For INCLUDE ONLY
                        </b>
                    </label>
                    <br />
                    <span style={{ fontSize: "13px" }} className="redtext">
                        {" "}
                        <b>Sub-Option II</b>
                    </span>
                    <br />
                    <label htmlFor="zipCondition_excluded" className="twefont">
                        <b>EXCLUDE ONLY</b> the Zip Codes entered below and all the rest
                        will be INCLUDED
                    </label>{" "}
                    <input
                        onChange={handleZIP}
                        type="radio"
                        title="Do you want only these zips to be excluded "
                        name="zipCondition"
                        id="zipCondition_excluded"
                        value="1"
                    />
                    <hr />
                    <h3>Paste Your Zip Codes Here</h3>
                    The zip codes can be separated by spaces or any non numeric character
                    like a comma. All non-numeric characters will be stripped out. Only
                    the first 5 digits of the zip code are used. There is a 25000
                    character limit.
                    <br />
                    <textarea
                        name="taZIPS"
                        id="taZIPS"
                        style={{ height: "165px", width: "90%" }}
                        onChange={handleDataChange}
                    ></textarea>
                </div>
                <hr />
                {/* SCF table here */}
                <SCFtable selectSCF={selectSCF}/>
                <div className="floatleft" id="ZIPRAD" align="center">
                    <b className="redtextbold2">Zip Code Option lV:</b>
                    <h4>Radius Search by US Zip Code:</h4>
                    <span className="tfont">(For a radius distance up to 250 miles)</span>
                    <br />
                    <div align="center">
                        <b>
                            Zip:{" "}
                            <input
                                type="text"
                                name="txtZipRadius"
                                size="5"
                                id="txtZipRadius"
                                maxLength="5"
                                onChange={handleDataChange}
                            />
                            &nbsp;&nbsp;|&nbsp;&nbsp;Miles:
                            <input
                                type="text"
                                name="txtZipRadiusMiles"
                                id="txtZipRadiusMiles"
                                size="2"
                                maxLength="3"
                                onChange={handleDataChange}
                            />
                        </b>
                    </div>
                    <span className="redtextbold" style={{ fontSize: "13px" }}>
                        NOTE : Selecting a US Search Radius will prevent you from searching
                        by City, County or the 3 other Zip searches.
                    </span>
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
        </>
    );
};

export default TelSearchParameters;
