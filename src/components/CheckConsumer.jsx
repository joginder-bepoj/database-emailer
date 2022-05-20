import React from "react";
import { Link } from "react-router-dom";
import DOB from "./form/DOB";
import EmailAddress from "./form/EmailAddress";
import EmailDomain from "./form/EmailDomain";
import EnterAge from "./form/EnterAge";
import Ethnicity from "./form/Ethnicity";
import GenderSelect from "./form/GenderSelect";
import GetUnique from "./form/GetUnique";
import HouseholdIncome from "./form/HouseholdIncome";
import IntrestGroup from "./form/IntrestGroup";
import OptInDate from "./form/OptInDate";
import RentingHome from "./form/RentingHome";
import RepeatedQueries from "./form/RepeatedQueries";
import ResultButton from "./form/ResultButton";
import SearchByCountry from "./form/SearchByCountry";
import SearchLastName from "./form/SearchLastName";
import SearchURL from "./form/SearchURL";
import TelephoneSearch from "./form/TelephoneSearch";
import USstates from "./form/USstates";
import { useStateContext } from "./context/StateContext";

const CheckConsumer = () => {
    const {setFilter} = useStateContext()
    return (
        <section className="section section-xs content">
            <div className="container" id="searchContainer">
                <div
                    className="row row-50 justify-content-center justify-content-lg-start align-items-center"
                    id="row50"
                >
                    <div className="col-md-12 wow fadeIn" data-wow-delay=".3s"></div>
                    <div className="wide">
                        <div id="divTopSearch">
                            <h3>Consumer Optin Email Data Search:</h3>
                            The consumer database on this page averages about 288 million
                            records and 100% of the full records have full opt-in email data
                            criteria with 23 basic columns of demographics per data record.
                            Furthermore over 70 additional categories of "Interests" can be
                            queried and downloaded based upon the type of website that the
                            data recorded opted into. <br />
                            <br />
                            Our Other Consumer Database also has tens of millions of full
                            opt-in emails and 213 Demographic Interests to select data from
                            within its almost 200 million consumer records. You can specify
                            that all records queried from that database must have opt-in email
                            addresses. That consumer database is also a recently updated
                            postal and phone database. <Link to="/database-emailer/telemarketing">Take me there! </Link>
                        </div>
                        <form
                            method="post"
                            action=""
                            id="frmSearch"
                            name="frmSearch"
                        >
                            <div className="divImportant">
                                <h3>Consumer Residential Opt-In Emails</h3>
                                <h4>All Records have Emails &amp; All Emails are Unique</h4>
                                <div align="center">
                                    <a
                                        href="@"
                                        style={{
                                            textDecoration: "none",
                                            color: "#F00",
                                            fontSize: "10pt ",
                                            padding: "8px ",
                                            width: "180px ",
                                            backgroundColor: "#C1C1C1",
                                        }}
                                        title="Search Now or alt-s"
                                    >
                                        Check Record Count
                                    </a>
                                </div>
                                <br />
                            </div>
                            <div id="search_parameters">
                                <fieldset>
                                    <legend>Geographic Search Parameters</legend>
                                    {/* search by country */}
                                    <SearchByCountry />
                                    {/* US states */}
                                    <USstates />
                                </fieldset>
                                {/* emails address serach */}
                                <EmailAddress />
                                <hr />
                                {/* get unique address */}
                                <GetUnique />
                                <hr />
                                {/* everything is optional */}
                                <div className="divImportant">
                                    <h3>Choose Any or All of the following search options:</h3>
                                    <b>Everything Below is Optional.</b>
                                </div>
                                {/* telephone optional */}
                                <TelephoneSearch />
                                <hr />
                                {/* select gender */}
                                <GenderSelect />
                                <hr />
                                {/* household income */}
                                <HouseholdIncome />
                                <hr />
                                {/* search URL WEB sources */}
                                <SearchURL />
                                <hr />
                                <div className="divImportant" id="divANDs_to_ORs">
                                    Normally these fields below are filters, or the records
                                    selected are only those that will match ALL the parameters you
                                    selected. However if you check the box below, then you will
                                    get records that match ANY of the parameters you selected
                                    <br />
                                    <label
                                        htmlFor="chkANDs_to_ORs"
                                        style={{ fontSize: "12pt", fontWeight: "600" }}
                                    >
                                        Check Here:
                                    </label>{" "}
                                    <input
                                        type="checkbox"
                                        name="chkANDs_to_ORs"
                                        id="chkANDs_to_ORs"
                                        value="1"
                                        onChange={(e)=>setFilter(e.target.value)}
                                    />
                                    <br />
                                    But the checkboxes inside the Interests, Email Domains and
                                    Ethnicities groups are always ORed. Or you will get both
                                    "Germans" &amp; "Finnish" or "Airline Tickets" &amp;
                                    "Automobiles " if you checked more than one box in any of
                                    those sets.
                                </div>
                                <hr />
                                {/* select Ethincity */}
                                <Ethnicity />
                                <hr />
                                {/* serach by last name */}
                                <SearchLastName />
                                <hr />
                                {/* enter the age */}
                                <EnterAge />
                                <hr />
                                {/* DOB */}
                                <DOB />
                                <hr />
                                {/* Renting the home */}
                                <RentingHome />
                                <hr />
                                {/* opt-in date */}
                                <OptInDate />
                                <hr />
                                {/* Repetaed queries */}
                                <RepeatedQueries />
                                <hr />
                                {/* Interset group */}
                                <IntrestGroup />
                                <hr />
                                {/* Email domain */}
                                <EmailDomain />
                                <hr />
                                {/* Result and buttons */}
                                <ResultButton />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckConsumer;
