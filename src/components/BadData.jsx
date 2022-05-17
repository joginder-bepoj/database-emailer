import React from "react";
import { useStateContext } from "./context/StateContext";

const BadData = () => {
    const {setBadData, badData} = useStateContext()
    const handleChange = (e) =>{
        setBadData({
            ...badData, [e.target.name] : e.target.value
        })
    }
    console.log(badData)
    return (
        <>
            <section className="section section-xs content">
                <div className="container" id="searchContainer">
                    <div
                        className="row row-50 justify-content-center justify-content-lg-start align-items-center"
                        id="row50"
                    >
                        <div className="col-md-3 noShow wow fadeIn" data-wow-delay=".3s">
                            &nbsp;
                        </div>
                        <div className="col-md-9 wow fadeIn" data-wow-delay=".3s">
                            <div className="wide" id="searchContent">
                                <div id="divTopSearch">
                                    <h3>Verify Your Emails:</h3>
                                </div>
                                <h1>
                                    Check Your Email Addresses Against Our Huge 500 Million+
                                    Database of Spam Traps &amp; Suppressed Emails
                                </h1>
                                You will be charged one credit for each email address checked.
                                If any bad emails are encountered. you can download a file of
                                just the good emails. There is a 10 thousand email limit per
                                search.
                                <form
                                    method="post"
                                    action=""
                                    id="frmVerify"
                                    name="frmVerify"
                                    
                                >
                                    <b>
                                        Enter Your Emails to Be Checked Here, Separated by Commas or
                                        Spaces
                                    </b>{" "}
                                    <input
                                        onChange
                                        type="button"
                                        name="buttClearTA"
                                        id="buttClearTA"
                                        value="Clear Emails"
                                        title="clear out all emails below or alt-c"
                                    />
                                    <br />
                                    <textarea
                                        onChange={handleChange}
                                        name="taEmails"
                                        id="taEmails"
                                        style={{ height: "140px", width: "700px" }}
                                    ></textarea>
                                    <hr />
                                    <input
                                        type="submit"
                                        name="subVerify"
                                        id="subVerify"
                                        value="Verify Emails"
                                        title="Verify Emails"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BadData;
