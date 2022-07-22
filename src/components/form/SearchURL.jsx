import React from "react";
import { useStateContext } from "../context/StateContext";

const SearchURL = () => {
    const {setUrl, setUrlCondition} = useStateContext()

    return (
        <>
            <fieldset>
                <legend>Search by the Source Website that the Record Came From:</legend>
                <b>Search by Website (URL)</b>
                <br />
                <br />
                Input A Web Address, Domain Name or URL, partial ones, words, etc are
                ok.
                <br />
                No spaces or commas
                <br />
                <small>https(s)://www.</small>
                <input type="text" name="web_source" size="50" onChange={(e)=>setUrl(e.target.value)} />
                <br />
                <label htmlFor="chkHasWebSource">Has A Websource URL:</label>{" "}
                <input
                    type="checkbox"
                    name="chkHasWebSource"
                    id="chkHasWebSource"
                    value="1"
                    onChange={(e)=>setUrlCondition(e.target.checked ? e.target.value : "")}
                />
            </fieldset>
        </>
    );
};

export default SearchURL;
