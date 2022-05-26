import React from "react";
import EmailAddress from "./form/EmailAddress";
import RegistrationDates from "./form/RegistrationDates";
import SearchByCountry from "./form/SearchByCountry";
import TelephoneSearch from "./form/TelephoneSearch";
import USstates from "./form/USstates";
import UniqueEmailFax from "./form/UniqueEmailFax";
import UniqueValue from "./form/UniqueValue";
import ExcludeGeneralEmail from "./form/ExcludeGeneralEmail";
import URLdomain from "./form/URLdomain";
import SearchCompanyName from "./form/SearchCompanyName";
import RegistrantContact from "./form/RegistrantContact";
import URLdataResult from "./form/URLdataResult";
import { useStateContext } from "./context/StateContext";
import ScrollToTop from "react-scroll-to-top";
import RestWorld from "./form/RestWorld";

const URLdata = () => {
    const {setUrlData, urlData} = useStateContext()
    const handleChange = (e) =>{
        setUrlData({
            ...urlData, [e.target.name] : e.target.value
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
                                    <h3>Search for US &amp; Canadian URL Records:</h3>
                                </div>
                                <form
                                    method="post"
                                    action=""
                                    id="frmSearch"
                                    name="frmSearch"
                                    
                                >
                                    <div className="important">
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
                                    <br />
                                    <fieldset id="fsWorld">
                                        <legend >USA/CAN or the Rest of the World</legend>
                                        <h2 style={{color: "black", textShadow: "none"}}>
                                            Here is where You Switch Between US/Canada or the Rest of
                                            the World
                                        </h2>
                                        <label htmlFor="optWorld_USCAN">Search on USA + Canada</label>{" "}
                                        <input onChange={handleChange}
                                            type="radio"
                                            name="optWorld"
                                            id="optWorld_USCAN"
                                            value="USCAN"
                                            defaultChecked
                                            
                                        />{" "}
                                        | <label htmlFor="optWorld_World">The Rest of the World</label>{" "}
                                        <input onChange={handleChange}
                                            type="radio"
                                            name="optWorld"
                                            id="optWorld_World"
                                            value="World"
                                            
                                        />
                                    </fieldset>{" "}
                                    <fieldset id="fsRecordTypes">
                                        <legend>
                                            Search on Registrant or Adminstrative Records
                                        </legend>
                                        <label htmlFor="optSET_Reg">Search on Registrant Records</label>{" "}
                                        <input onChange={handleChange}
                                            type="radio"
                                            name="optSET"
                                            id="optSET_Reg"
                                            value="Registrant"
                                            defaultChecked
                                        />{" "}
                                        | <label htmlFor="optSET_Admin">Or Adminstrative Records</label>{" "}
                                        <input onChange={handleChange}
                                            type="radio"
                                            name="optSET"
                                            id="optSET_Admin"
                                            value="Adminstrative"
                                        />
                                        <br />
                                        There are four sets of records in the usual URL record set:
                                        Adminstrative, Registrant, Technical and Information. We
                                        have the two main one, who bought the URL, or the
                                        registrant, and who runs the site, the adminstrator. The
                                        Registrant record is usually the most complete one, so it is
                                        the default.
                                    </fieldset>
                                    <div id="USCAN" className="world">
                                        {
                                            urlData.optWorld === "USCAN" ? (
                                                <>
                                                     <h2 style={{color: "black", textShadow: "none"}}>USA and Canada Only</h2>
                                        <fieldset>
                                            <legend>Geographic Search Parameters</legend>
                                            {/* search by country */}
                                            <SearchByCountry />
                                            {/* US states */}
                                            <USstates />
                                        </fieldset>
                                                </>
                                            ) : <RestWorld />
                                        }
                                       
                                        {/* email address serach */}
                                        {
                                            urlData.optWorld === "USCAN" && (<><EmailAddress />
                                        {/* telphone search */}
                                        <TelephoneSearch /></>)
                                        }
                                        <hr />
                                        <hr />
                                        <div id="divCountries" align="center">
                                            <hr />
                                            <a href="@">US + Canada</a>
                                            OR
                                            <a href="@">The Rest of world</a>
                                            <hr />
                                        </div>
                                        {/* Email address search */}
                                        <EmailAddress />
                                        {/* Registration date */}
                                        <RegistrationDates />
                                        <hr />
                                        {/* Unique email and fax address */}
                                        <UniqueEmailFax />
                                        <hr />
                                        {/* unique value */}
                                        <UniqueValue />
                                        <hr />
                                        {/* TLD */}
                                        <fieldset>
                                            <legend>Top Level Domains or TLDs</legend>
                                            Such as .com, .net, .org{" "}
                                            <select onChange={handleChange} name="selTLD" id="selTLD" size="1">
                                                <option>Select a TLD</option>
                                                <option value="com">.com</option>
                                                <option value=".net">.net</option>
                                                <option value=".biz">.biz</option>
                                                <option value=".org">.org</option>
                                                <option value=".info">.info</option>
                                                <option value=".pro">.pro</option>
                                            </select>
                                            Or enter your own:{" "}
                                            <input onChange={handleChange}
                                                type="text"
                                                name="txtTLD"
                                                id="txtTLD"
                                                maxLength="10"
                                                size="5"
                                                placeholder="TLD"
                                            />
                                        </fieldset>
                                        <hr />
                                        {/* Exclude genral email */}
                                        <ExcludeGeneralEmail />
                                        <hr />
                                        {/* URL domain name search */}
                                        <URLdomain />
                                        <hr />
                                        {/* search by company name */}
                                        <SearchCompanyName />
                                        <hr />
                                        {/* Registrants contact names */}
                                        <RegistrantContact />
                                        <hr />
                                        {/* url data result */}
                                        <URLdataResult />
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

export default URLdata;
