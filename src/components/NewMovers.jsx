import React from "react";
import RepeatedQueries from "./form/RepeatedQueries";
import ResultButton from "./form/ResultButton";
import SearchByCountry from "./form/SearchByCountry";
import SelectRecords from "./form/SelectRecords";
import USstates from "./form/USstates";
import { useStateContext } from "./context/StateContext";
import ScrollToTop from "react-scroll-to-top";

const NewMovers = () => {
    const {setNewMovers, newMovers} = useStateContext()
    const handleChange = (e)=>{
        setNewMovers({ 
            ...newMovers, [e.target.name]:e.target.value
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
                                    <h1>Search for Recent Home Movers</h1>
                                    <h3>You Need to Buy Special New Home Mover Credits.</h3>
                                </div>
                                <form
                                    method="post"
                                    action=""
                                    id="frmSearch"
                                    name="frmSearch"
                                    
                                >
                                    <div className="tab22" align="center">
                                        <h3>Search for New Movers:</h3>
                                        <h4>
                                            These records don't have phone numbers or emails, just
                                            names and their new mailing addresses.
                                        </h4>
                                    </div>

                                    <fieldset>
                                        <legend>Geographic Search Parameters</legend>
                                        {/* search by country */}
                                        <SearchByCountry />
                                        {/* US states */}
                                        <USstates />
                                    </fieldset>
                                    <fieldset className="stateLabel" id="phones">
                                        <legend>
                                            Records with Telephone Numbers or Email Address:
                                            (Optional)
                                        </legend>
                                        <label htmlFor="chkPhone">
                                            <b>Records Must Include A Phone Number:</b>
                                        </label>{" "}
                                        <input onChange={handleChange}
                                            type="checkbox"
                                            name="chkPhone"
                                            id="chkPhone"
                                            value="1"
                                        />{" "}
                                        |
                                        <label htmlFor="chkEmails">
                                            <b>Must Include an Email Address</b>
                                        </label>{" "}
                                        <input onChange={handleChange}
                                            type="checkbox"
                                            name="chkEmails"
                                            id="chkEmails"
                                            value="1"
                                        />
                                    </fieldset>
                                    <hr />
                                    {/* select the records */}
                                    <SelectRecords />
                                    <hr />
                                    {/* Repeated queries */}
                                    <RepeatedQueries />
                                    <br />
                                    {/* record based on home price */}
                                    <fieldset id="fsHomePrice">
                                        <legend>Select Records Based on Home Price: (Opt.)</legend>
                                        Lower Home Price:{" "}
                                        <input onChange={handleChange}
                                            type="text"
                                            name="PriceL"
                                            id="PriceL"
                                            size="12"
                                            placeholder="Lower Home Price"
                                        />{" "}
                                        <br className="yesShowIn" />
                                        <small>(leave blank for no lower limit)</small>
                                        <br />
                                        Higher Home Price:{" "}
                                        <input onChange={handleChange}
                                            type="text"
                                            name="PriceH"
                                            id="PriceH"
                                            size="12"
                                            placeholder="Higher Home Price"
                                        />{" "}
                                        <br className="yesShowIn" />
                                        <small>(leave blank for no upper limit)</small>
                                    </fieldset>
                                    <hr />
                                    {/* record based on home loan */}
                                    <fieldset id="fsHomeLoan">
                                        <legend>
                                            Select Records Based on Home Loan Amount: (Opt.)
                                        </legend>
                                        Lower Loan Amount:{" "}
                                        <input onChange={handleChange}
                                            type="text"
                                            name="LoanL"
                                            id="LoanL"
                                            size="12"
                                           
                                            placeholder="Lower Loan Amount"
                                        />{" "}
                                        <br className="yesShowIn" />
                                        <small>(leave blank for no lower limit)</small>
                                        <br />
                                        Higher Loan Amount:{" "}
                                        <input onChange={handleChange}
                                            type="text"
                                            name="LoanH"
                                            id="LoanH"
                                            size="12"
                                           
                                            placeholder="Higher Loan Amount"
                                        />{" "}
                                        <br className="yesShowIn" />
                                        <small>(leave blank for no upper limit)</small>
                                    </fieldset>
                                    {/* Result and the button  */}
                                    <ResultButton />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewMovers;
