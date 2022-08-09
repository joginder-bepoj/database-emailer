import React from "react";
import SearchByCountry from "./form/SearchByCountry";
import USstates from "./form/USstates";
import TelephoneSearch from "./form/TelephoneSearch";
import HouseholdIncome from "./form/HouseholdIncome";
import Ethnicity from "./form/Ethnicity";
import GenderSelect from "./form/GenderSelect";
import RentingHome from "./form/RentingHome";
import ResultButton from "./form/ResultButton";
import CellCarriers from "./form/CellCarriers";
import URLdataResult from "./form/URLdataResult"
import { useStateContext } from "./context/StateContext";
import ScrollToTop from "react-scroll-to-top"


const CellPhoneData = () => {
    const {setCellData, cellData, isLoggedIn} = useStateContext()
    const handleChange = (e) =>{
        const {name, checked, value} = e.target
        setCellData({ ...cellData,
            [name]: checked ? value : ""
        })
    }

    return (
        <>
            <section className="section section-xs content">
            <ScrollToTop smooth />
                <div className="container" id="searchContainer">
                    <div
                        className="row row-50 justify-content-center justify-content-lg-start align-items-center"
                        id="row50"
                    >
                        <div className="col-md-12 wow fadeIn" data-wow-delay=".3s">
                            <div className="wide" id="searchContent">
                                <div id="divTopSearch">
                                    <h3>Search for Cell Phone Numbers + Customer Data :</h3>
                                </div>
                                <form
                                    method="post"
                                    action=""
                                    id="frmSearch"
                                    name="frmSearch"
                                    
                                >
                                    <div className="divImportant">
                                        <h3>Cell Phone Numbers Search:</h3>
                                        <div align="center">
                                            <button
                                                type="button"
                                                style={{
                                                    textDecoration: "none",
                                                    color: "##F00",
                                                    fontSize: "10pt",
                                                    padding: "8px",
                                                    width: "180px",
                                                    backgroundColor: "#C1C1C1",
                                                }}
                                                title="Search Now or alt-s"
                                            >
                                                Check Record Count
                                            </button>
                                        </div>
                                        <br />
                                    </div>
                                    <fieldset>
                                        <legend>Geographic Search Parameters</legend>
                                        <SearchByCountry />
                                        {/* US states */}
                                        <USstates />
                                    </fieldset>
                                    {/* telephone optional */}
                                    <TelephoneSearch />
                                    <hr />
                                    {/* everything is optional */}
                                    <div className="divImportant">
                                        <h3>Choose Any or All of the following search options:</h3>
                                        <b>Everything Below is Optional.</b>
                                    </div>
                                    <fieldset>
                                        <legend>Name and Address</legend>
                                        <label htmlFor="chkNameAddress">
                                            Records Must Have Customer Name:
                                        </label>
                                        <input onChange={handleChange}
                                            type="checkbox"
                                            name="chkNameFL"
                                            id="chkNameFL"
                                            value="1"
                                        />{" "}
                                        |
                                        <label htmlFor="chkNameAddress">
                                            Records Must Have Customer Name &amp; Street Address:
                                        </label>
                                        <input onChange={handleChange}
                                            type="checkbox"
                                            name="chkNameAddress"
                                            id="chkNameAddress"
                                            value="1"
                                        />
                                    </fieldset>
                                    <hr />
                                    {/* HouseHold income */}
                                    <HouseholdIncome />
                                    <hr />
                                    {/* select ethincy */}
                                    <Ethnicity />
                                    <hr />
                                    {/* select gender */}
                                    <GenderSelect />
                                    <hr />
                                    {/* Renting there home */}
                                    <RentingHome />
                                    <hr />
                                    {/* cellpone carriers */}
                                    <CellCarriers />
                                    <hr />
                                    {/* Result buttons */}
                                    {
                                        isLoggedIn ? <URLdataResult /> : <ResultButton />
                                    }
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CellPhoneData;
