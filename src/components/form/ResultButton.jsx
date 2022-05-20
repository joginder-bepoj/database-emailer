import React from "react";

const ResultButton = () => {
    const refreshPage = () =>{
        window.location.reload()
    }
   
    
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    bottom: "12px",
                    left: "1px",
                    padding: "10px",
                    backgroundColor: "#EEE",
                    opacity: "0.8",
                    border: "2px solid blue",
                }}
                title="Search Now"
                alt="Search Now"
            >
                <div
                    style={{
                        textAlign: "center",
                        padding: "2px 2px 10px 2px",
                        fontSize: "9pt",
                    }}
                    align="center"
                >
                    <b>Search Anytime</b>
                    <br />
                    <img
                        src="./images/Progress_95.gif"
                        width="95"
                        height="95"
                        border="0"
                        alt="wait"
                        style={{ display: "none", margin: "auto" }}
                        id="wait2"
                    />
                </div>
                <a
                    href="@"
                    style={{
                        textDecoration: "none",
                        color: "#F00",
                        fontSize: "10pt",
                        padding: "4px",
                        width: "180px",
                        backgroundColor: "#C1C1C1",
                        fontWeight: "700",
                    }}
                    title="Search Now or alt-s"
                    id="FSB"
                >
                    Check Record Count
                </a>
            </div>
            <hr id="results" />
            <fieldset
                style={{ fontSize: "12pt", fontWeight: "600", color: "#F03" }}
                id="fsResults"
            >
                <legend>Results:</legend>
            </fieldset>
            <div id="buttonsOuter">
                <fieldset>
                    <legend>Buttons:</legend>
                    <div align="center" id="divButtons">
                        <div align="left" style={{ paddingLeft: "20px" }}>
                            Before you press the button below to get your query results, you
                            also have the option to be emailed the results. Depending upon the
                            time of day, the quantity of selects, the query wait time can
                            range from 10 seconds to 12 minutes.
                            <br />
                            <br />
                            <b style={{ color: "red" }}>Option 1:</b> If you don't want to
                            wait to see your query results, we'll email them to you at the
                            following address: &nbsp;
                            <input
                                type="text"
                                size="30"
                                maxLength="128"
                                id="email"
                                name="txtQueryEmail"
                                title="enter the email address here that you want the results sent to"
                            />
                        </div>
                        <img
                            src="/images/Progress_95.gif"
                            width="95"
                            height="95"
                            border="0"
                            alt="wait"
                            style={{ display: "none", margin: "auto" }}
                            id="wait"
                        />
                        <input
                            type="submit"
                            value="Check Record Count!"
                            name="cmdSearch"
                            id="cmdSearch"
                            title="Search for number of records matching your selections, or alt-s"
                            className="MainButton"
                        />
                    </div>
                        <h2 style={{textDecorationStyle: "none", color: "#333", fontWeight: "bold" }} onClick={refreshPage}>Clear Form</h2>
                </fieldset>
            </div>
        </>
    );
};

export default ResultButton;
