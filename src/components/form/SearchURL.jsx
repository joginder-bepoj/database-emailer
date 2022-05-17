import React from "react";
import { useStateContext } from "../context/StateContext";

const SearchURL = () => {
    const {setUrl, url} = useStateContext()
    const handleChange = (e) =>{
        setUrl({...url, [e.target.name]: e.target.value})
    }
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
                <input type="text" name="web_source" size="50" onChange={handleChange} />
                <br />
                <label htmlFor="chkHasWebSource">Has A Websource URL:</label>{" "}
                <input
                    type="checkbox"
                    name="chkHasWebSource"
                    id="chkHasWebSource"
                    value="1"
                    onChange={handleChange}
                />
            </fieldset>
        </>
    );
};

export default SearchURL;
