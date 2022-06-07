import React from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

const SearchByCountry = () => {
    const location = useLocation()
    const {setSelectCountry} = useStateContext()
    const handleChange = (event) =>{
        setSelectCountry(event.target.value)
    }

    switch (location.pathname) {
        case"/database-emailer/newmovers":
            return (
                <>
                    <fieldset>
                <legend>Search By Country</legend>
                <h4>
                Clicking on the name of a state will check that box too.
                </h4>
                <div id="divCountriesStates" className="stateLabel flex-row">
                    <div style={{display: "flex",maxWidth: "200px", justifyContent: "center", alignItems: "center"}}>
                        <label htmlFor="optUS">All of the US</label>
                        <input
                            type="radio"
                            name="US_CAN_ALL"
                            id="optUS"
                            value="USA"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="optNone">States</label>
                        <input
                            defaultChecked
                            type="radio"
                            name="US_CAN_ALL"
                            id="optNone"
                            value="none"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <p align="center">
                    <sup style={{ color: "#bf0700" }}>
                        <b>*</b>
                    </sup>
                    <span className="elevfont">
                    Selecting US will override any State selection below.
                    </span>
                </p>
                <br />
            </fieldset>
                </>
            )
        case "/database-emailer/telemarketing":
            return(
                <>
                    <fieldset>
                <legend>Search By Country</legend>
                <h4>
                Clicking on the name of a state will check that box too.
                </h4>
                <div id="divCountriesStates" className="stateLabel flex-row">
                    <div>
                        <label htmlFor="optUS">All US</label>
                        <input
                            type="radio"
                            name="US_CAN_ALL"
                            id="optUS"
                            value="USA"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="optNone">States</label>
                        <input
                            defaultChecked
                            type="radio"
                            name="US_CAN_ALL"
                            id="optNone"
                            value="none"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <p align="center">
                    <sup style={{ color: "#bf0700" }}>
                        <b>*</b>
                    </sup>
                    <span className="elevfont">
                    Selecting US will override any State selection below.
                    </span>
                </p>
                <br />
            </fieldset>
                </>
            )
            case "/database-emailer/checkbuisness":
                return(
                    <>
                    <legend>Search By Country</legend>
                    <h4>
                    Clicking on the name of a state will check that box too.
                    </h4>
                    <div id="divCountriesStates" className="stateLabel flex-row">
                        <div>
                            <label htmlFor="optUS">All US</label>
                            <input
                                type="radio"
                                name="US_CAN_ALL"
                                id="optUS"
                                value="USA"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="optNone">States</label>
                            <input
                                defaultChecked
                                type="radio"
                                name="US_CAN_ALL"
                                id="optNone"
                                value="none"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <p align="center">
                        <sup style={{ color: "#bf0700" }}>
                            <b>*</b>
                        </sup>
                        <span className="elevfont">
                        Selecting US will override any State selection below.
                        </span>
                    </p>
                    <br />
                    </>
                )
        default:
            return(
                <>
                    <fieldset>
                <legend>Search By Country</legend>
                <h4>
                Clicking on the name of a country, state or province will check that box too.
                </h4>
                <div id="divCountriesStates" className="stateLabel flex-row">
                    <div>
                        <label htmlFor="optUS">US</label>
                        <input
                            type="radio"
                            name="US_CAN_ALL"
                            id="optUS"
                            value="USA"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="optCAN">Canada</label>
                        <input
                            type="radio"
                            name="US_CAN_ALL"
                            id="optCAN"
                            value="CAN"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="optALL">Both</label>
                        <input
                            type="radio"
                            name="US_CAN_ALL"
                            id="optALL"
                            value="ALL"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="optNone">States</label>
                        <input
                            defaultChecked
                            type="radio"
                            name="US_CAN_ALL"
                            id="optNone"
                            value="none"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <p align="center">
                    <sup style={{ color: "#bf0700" }}>
                        <b>*</b>
                    </sup>
                    <span className="elevfont">
                    Selecting US, Canada or Both will override any State or Province selection below.
                    </span>
                </p>
                <br />
            </fieldset>
                </>
            )
    }

};

export default SearchByCountry;
