import React from "react";
import CompanyRevenue from "./form/CompanyRevenue";
import EmailAddress from "./form/EmailAddress";
import ExcludeGeneralEmail from "./form/ExcludeGeneralEmail";
import ExecutiveContact from "./form/ExecutiveContact";
import FaxNumber from "./form/FaxNumber";
import GetUnique from "./form/GetUnique";
import JobSearchs from "./form/JobSearchs";
import NACIScodes from "./form/NACIScodes";
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

const CheckBusiness = () => {
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
                        <div className="col-md-12 wow fadeIn" data-wow-delay=".3s"></div>
                        <div className="wide">
                            <div className="divImportant" id="divTopSearch">
                                <h3>Business Data Search:</h3>
                                This Business Database will allow you to query businesses by geo
                                location, industry ( SIC/NAISC) codes, company revenues,
                                employee size, and by titles of executives. The database
                                contains data with and without email addresses but enables you
                                to require that your query results must all have email
                                addresses. Our Database Emailer software will allow you to email
                                with exceptional delivery for under $15 per million.
                                <br />
                                <br />
                                In addition to this business database you may also find very
                                useful our "Occupation" query option within our Consumer
                                Database if you are looking for professionals within a certain
                                industry. <a href="@">Take me there! </a>
                                <br /> <br />
                                The reason why there are some business data records in the
                                database that do not have email addresses is because many of our
                                customers utilize the non-email data records with our
                                ContactPageSubmitter (CPS) software. CPS freely and
                                automatically bypasses email filters by posting a personalized
                                message by inserting in real-time many personal values from the
                                uploaded business .csv file into the contact pages of the
                                websites without emailing! It actually appears as if you
                                personally took the time and effort to have visited many
                                thousands of targeted websites per day with a personalized
                                automated submitted letter, so you look more professional as
                                opposed to emailing. CPS also has several search engines built
                                into it which will freely and automatically gather unlimited
                                targeted businesses websites into the CPS database to freely
                                contact them. Whether you upload Business data from our database
                                or from search engines, CPS also has a feature that will freely
                                gather email addresses from the websites you upload into the CPS
                                database. See the{" "}
                                <a
                                    href="https://www.ContactPageSubmitter.com/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {" "}
                                    CPS Website
                                </a>
                            </div>
                            <form action="">
                                <div className="divImportant">
                                    <h3>Business Records, B2B Search</h3>
                                    <h4>
                                        Less than Half of the Records Have Valid Email Addresses
                                        <br />
                                        But You Can Select Only Records that Have Them
                                    </h4>
                                    <div align="center">
                                        <button 
                                            type="button"
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
                                        </button>
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
                                    {/* NACIS codes */}
                                    <NACIScodes />
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
                                    <br />
                                    {/* serach last name */}
                                    <SearchLastName />
                                    <br />
                                    {/* Executive contact */}
                                    <ExecutiveContact />
                                    <hr />
                                    {
                                        isLoggedIn ? <URLdataResult /> : <ResultButton />
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CheckBusiness;
