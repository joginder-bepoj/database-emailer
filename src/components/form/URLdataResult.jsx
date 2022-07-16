import React from "react";
import { useStateContext } from "../context/StateContext";

const URLdataResult = () => {
    const {data, searchQuery} = useStateContext()
    const refreshPage = () =>{
        window.location.reload()
    }
    return (
        <>
            <fieldset
                style={{fontSize: "12pt", fontWeight: "600", color:"#F03"}}
                id="fsResults"
            >
                <legend>Results:</legend>
                {data.length !== 0 ? data.message +":"+ data?.output?.NumOfRecords: ""}
            </fieldset>
            <div id="buttonsOuter">
                <fieldset>
                    <legend>Buttons:</legend>
                    <div align="center" id="divButtons">
                        <div align="left" style={{paddingLeft:"20px"}}>
                            Before you press the button below to get your query results, you
                            also have the option to be emailed the results. Depending upon the
                            time of day, the quantity of selects, the query wait time can
                            range from 10 seconds to 12 minutes.
                            <br />
                            <br />
                            <b style={{color: "red"}}>Option 1:</b> If you don't want to wait to
                            see your query results, we'll email them to you at the following
                            address: &nbsp;
                            <input
                                type="text"
                                
                                size="30"
                                maxLength="128"
                                id="email"
                                name="txtQueryEmail"
                                title="enter the email address here that you want the results sent to"
                            />
                            Or Use My Account Email of :{" "}
                            <input
                                type="checkbox"
                                name="chkDefaultEmail"
                                id="chkDefaultEmail"
                                
                            />
                            <br />
                            <br />
                            <b style={{color:"red"}}>Option 2: </b>Go to this{" "}
                            <a href="@">
                                Page to See Your Query Results then Download Them Anytime
                            </a>
                            <br />
                            <span style={{fontSize: "8pt"}}>
                                (You must be logged in to use this feature)
                            </span>
                            <br />
                            <br />
                            <b style={{color:"red"}}>Option 3: </b>Make this a Repeat Search,
                            which will automatically rerun every 2 weeks. Then the results
                            will be emailed to you:{" "}
                            <input
                                type="checkbox"
                                name="chkRepeat"
                                id="chkRepeat"
                                value="1"
                            />
                            <br />
                            <span style={{fontSize: "8pt"}}>
                                (Limit of 10 Active Repeat Searches. You can manage your
                                searches{" "}
                                <a
                                    href="@"
                                    target="_blank"
                                    style={{fontSize: "8pt"}}
                                >
                                    here
                                </a>
                                . You must be logged in to use this feature)
                            </span>
                        </div>
                        <img
                            src="/images/Progress_95.gif"
                            width="95"
                            height="95"
                            border="0"
                            alt="wait"
                            style={{display: "none", margin: "auto"}}
                            id="wait"
                        />
                        <input
                            type="submit"
                            onClick={searchQuery}
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

export default URLdataResult;
