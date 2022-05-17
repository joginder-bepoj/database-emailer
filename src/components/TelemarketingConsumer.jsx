import React from "react";
import EmailAddress from "./form/EmailAddress";
import EmailDomain from "./form/EmailDomain";
import ImportantNote from "./form/ImportantNote";
import SearchByCountry from "./form/SearchByCountry";
import TableForm from "./form/TableForm";
import TelephoneSearch from "./form/TelephoneSearch";
import UniqueTelephoneEmail from "./form/UniqueTelephoneEmail";
import USstates from "./form/USstates";

const TelemarketingConsumer = () => {
    return (
        <>
            <section className="section section-xs content">
                <div className="container" id="searchContainer">
                    <div
                        className="row row-50 justify-content-center justify-content-lg-start align-items-center"
                        id="row50"
                    >
                        <div className="col-md-12 wow fadeIn" data-wow-delay=".3s">
                            <div className="wide" id="searchContent">
                                <div id="divTopSearch" className="divImportant">
                                    <h3>Consumer Data Search Type ll</h3>
                                    This database contains 213 Column Fields of Demographic Data
                                    per Record. About 25% of these data records also have opt-in
                                    email data and you can require that your query includes only
                                    records that have opt-in email addresses. Our other ALL EMAIL
                                    Consumer Database has 23 basic columns of demographics per
                                    record and over 70 categories of interests and the entire
                                    database has opt-in email addresses.{" "}
                                    <a href="@">Take me there!</a>
                                </div>
                                <form
                                    method="post"
                                    action=""
                                    id="frmSearch"
                                    name="frmSearch"
                                    
                                >
                                    <div className="divImportant">
                                        <h3>Consumer Address &amp; Phone Lists</h3>
                                        <b>
                                            Less than Half of the Records Have Valid Email Addresses
                                            But You Can Select Only Records that Have Them
                                        </b>
                                        <br />
                                        <br />
                                        <div align="center">
                                            <a
                                                href="@"
                                                style={{
                                                    textDecoration: "none",
                                                    color: "#F00",
                                                    fontSize: "11pt",
                                                    padding: "8px",
                                                    width: "180px",
                                                    backgroundColor: "#C1C1C1",
                                                }}
                                                title="Search Now or alt-s"
                                            >
                                                Check Record Count
                                            </a>
                                        </div>
                                        <br />
                                    </div>
                                    <fieldset>
                                        <legend>Geographic Search Parameters</legend>
                                        {/* search by country */}
                                        <SearchByCountry />
                                        {/* US states */}
                                        <USstates />
                                    </fieldset>
                                    {/* email address search */}
                                    <EmailAddress />
                                    <hr />
                                    {/* email domain */}
                                    <EmailDomain />
                                    <hr />
                                    {/* Unique telephones email and faxs */}
                                    <UniqueTelephoneEmail />
                                    <hr />

                                    <div className="divImportant">
                                        <h3>Choose Any or All of the following search options:</h3>
                                        <b>Everything Below is Optional.</b>
                                    </div>
                                    {/* telephone serach optional */}
                                    <TelephoneSearch />
                                    <hr />
                                    {/* important note */}
                                    <ImportantNote />
                                    <hr />
                                    {/* table from comes here */}
                                    <TableForm />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TelemarketingConsumer;
