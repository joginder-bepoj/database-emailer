import React from "react";
import { useStateContext } from "../context/StateContext";

const EmailAddress = () => {
    const {setEmail} = useStateContext()
    const emailChange =(e) =>{
        setEmail(e.target.value)
    }
    return (
        <>
            <fieldset>
                <div style={{display:"flex", alignItems:"center", flexWrap: "wrap"}}>
                <div>
                <legend>Email Address Search</legend>
                </div>
                <div> Search Email Addresses for This Word or Phrase:&nbsp;&nbsp;&nbsp;</div>
                <input
                    type="text"
                    name="txtEmailString"
                    id="txtEmailString"
                    maxLength=""
                    size="30"
                    onChange={emailChange}
                />
                </div>
                <small style={{paddingLeft: "150px"}}>(This insures that all your results will have an email address)</small>
                <br /> Example: if you enter "piano" in the box, it will find all emails
                addresses with "piano" embedded in it somewhere. There are no spaces or
                commas in an email address. Just enter letters, numbers, '@', '_', '-'
                or periods '.'
            </fieldset>
        </>
    );
};

export default EmailAddress;
