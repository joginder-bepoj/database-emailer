import React from "react";
import { useStateContext } from "../context/StateContext";

const URLdomain = () => {
    const {setUrlDomain} = useStateContext() 
    const handleChange = (e) =>{
        setUrlDomain(e.target.value)
    }
    return (
        <>
            <fieldset>
                <legend>URL, or Domain Name Search</legend>
                Search URLs for This Word or Phrase:&nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    name="txtURLString"
                    id="txtURLString"
                    maxLength=""
                    size="40"
                    onChange={handleChange}
                />
                <br />
                <small>
                    (This also insures that all your results will have a website)
                </small>
                <br />
                For example, if you enter "piano" in the box, it will find all URLs with
                "piano" embedded in it somewhere. Remember that there are no spaces or
                commas in URLs. Just enter letters, numbers, "-" or periods "."
            </fieldset>
        </>
    );
};

export default URLdomain;
