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
                <legend>Email Address Search</legend>
                Search Email Addresses for This Word or Phrase:&nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    name="txtEmailString"
                    id="txtEmailString"
                    maxLength=""
                    size="30"
                    onChange={emailChange}
                />
                <br />
                <small>&nbsp;</small>
                <br /> Example: if you enter "piano" in the box, it will find all emails
                addresses with "piano" embedded in it somewhere. There are no spaces or
                commas in an email address. Just enter letters, numbers, '@', '_', '-'
                or periods '.'
            </fieldset>
        </>
    );
};

export default EmailAddress;
