import React from "react";
import { useStateContext } from "../context/StateContext";

const SearchByCountry = () => {
    const {setSelectCountry} = useStateContext()
    const handleChange = (event) =>{
        setSelectCountry(event.target.value)
      }
    return (
        <>
            <fieldset>
                <legend>Search By Country</legend>
                <h4>
                    Clicking on the name of a country, state or province will check that
                    box too.
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
                        Selecting US, Canada or Both will override any State or Province
                        selection below.
                    </span>
                </p>
                <br />
            </fieldset>
        </>
    );
};

export default SearchByCountry;
