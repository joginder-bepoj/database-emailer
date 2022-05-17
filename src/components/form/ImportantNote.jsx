import React from "react";

const ImportantNote = () => {
    return (
        <>
            <div
                align="left"
                style={{fontSize: "10pt", fontWeight: "bold", border: "2px solid #FC0", padding: "6px"}}
                id="divANDs_to_ORs"
            >
                <h3>Important Note:</h3>
                <hr />
                Read This To Understand the Following Options
                <br />
                <br />
                Many of the questions below have at the bottom the statement: "All Must
                Match" and "Any Match On This"
                <br />
                <br />
                When you select "All Must Match" this means that when you select
                multiple interests the only records that you get included within your
                query results are when a person has indicated they are interested in ALL
                the Interests that you have chosen--therefore you are substantially
                limiting your data results. <br />
                <br />
                When you select "Any Match On This" this means that when you select
                multiple interests you want added to your query results all records in
                which the person has indicated they are interested in the interest
                category you selected but they don't also have to be interested in other
                categories you selected. <br />
                <br />
                Example:
                <br />
                If I chose "All Must Match" and selected interests: 1) Hunt 2) Fish 3)
                Golf <br />
                This would mean that only the records that they are interested in ALL
                three will be included in the query results. If they were interested in
                only two of the three interests you would get a ZERO results. <br />
                <br />
                If I chose "Any Match On This" and selected interests 1) Hunt 2) Fish 3)
                Golf This would mean that ALL people who have indicated interest in any
                one of the interests selected will be added to the query results.
            </div>
        </>
    );
};

export default ImportantNote;
