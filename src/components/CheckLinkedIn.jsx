import React from "react";
import CompanyRevenue from "./form/CompanyRevenue";
import EmailAddress from "./form/EmailAddress";
import ExcludeGeneralEmail from "./form/ExcludeGeneralEmail";
import FaxNumber from "./form/FaxNumber";
import GetUnique from "./form/GetUnique";
import JobSearchs from "./form/JobSearchs";
import ObtainRecords from "./form/ObtainRecords";
import ResultButton from "./form/ResultButton";
import SearchByCountry from "./form/SearchByCountry";
import SearchCompanyName from "./form/SearchCompanyName";
import SearchEmployee from "./form/SearchEmployee";
import SearchLastName from "./form/SearchLastName";
import SICcodes from "./form/SICcodes";
import TelephoneSearch from "./form/TelephoneSearch";
import UniqueEmailFax from "./form/UniqueEmailFax";
import URLdomain from "./form/URLdomain";
import USstates from "./form/USstates";
import ScrollToTop from "react-scroll-to-top";
import URLdataResult from "./form/URLdataResult";
import { useStateContext } from "./context/StateContext";

const CheckLinkedIn = () => {
    const {isLoggedIn} = useStateContext()
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
                                <div className="divImportant" id="divTopSearch">
                                    <h1>LinkedIn Data Search:</h1>
                                    <h3>You Need to Buy Special New Home Mover Credits.</h3>
                                </div>
                                <form
                                    method="post"
                                    action=""
                                    id="frmSearch"
                                    name="frmSearch"
                                   
                                >
                                    <div className="divImportant">
                                        <h3>Linked In Search</h3>
                                        <h4>
                                            All Records Have a Unique Email Address &amp; LinkedIn URL
                                        </h4>
                                        <br />
                                        <div align="center">
                                            <a
                                                href="@"
                                                style={{
                                                    textDecoration: "none",
                                                    color: "#F00",
                                                    fontSize: "10pt",
                                                    padding: "8px",
                                                    width: "180px",
                                                    backgroundColor: "#C1C1C1",
                                                }}
                                                title="Search Now or alt-s"
                                                id="topSearch"
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
                                        {/* Unique email and fax address */}
                                        <UniqueEmailFax />
                                        <hr />
                                        {/* get unique value */}
                                        <GetUnique />
                                        <hr />
                                        {/* Execlude general */}
                                        <ExcludeGeneralEmail />
                                        <hr />
                                        {/* URL domain search */}
                                        <URLdomain />
                                        <hr />
                                        {/* telephone serach */}
                                        <TelephoneSearch />
                                        <hr />
                                        {/* Fax number */}
                                        <FaxNumber />
                                        <hr />
                                        {/* Obtain records */}
                                        <ObtainRecords />
                                        <hr />
                                        {/* SIS Codes */}
                                        <SICcodes />
                                        <hr />
                                        {/* Search employee */}
                                        <SearchEmployee />
                                        <hr />
                                        {/* Company revenue */}
                                        <CompanyRevenue />
                                        <hr />
                                        {/* JOb search */}
                                        <JobSearchs />
                                        <hr />
                                        {/* search by company name */}
                                        <SearchCompanyName />
                                        <hr />
                                        {/* serach last name */}
                                        <SearchLastName />
                                        <hr />
                                        {
                                        isLoggedIn ? <URLdataResult /> : <ResultButton />
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CheckLinkedIn;
