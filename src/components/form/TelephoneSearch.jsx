import React from "react";
import { useStateContext } from "../context/StateContext";

const TelephoneSearch = () => {
    const {setTelSearch, telSearch} = useStateContext()
    const handleChange = (e) =>{
        setTelSearch({ ...telSearch,[e.target.name] : e.target.value})
        console.log(telSearch)
    }
    return (
        <>
            <fieldset className="stateLabel">
                <legend>Telephone Numbers Search: (Optional)</legend>
                <span>
                    Enter the area code and exchange of the phone # as a string w/o any
                    spaces, like 203233. Separate them by at least a space. Note: At least
                    a 3 Digit Area Code is required. This search option can take a
                    considerable time, especially if multiple states and many area codes
                    and exchanges are entered.
                </span>
                <hr />
                <textarea
                    name="taPhones"
                    id="taPhones"
                    style={{ width: "90%", height: "130px" }}
                    placeholder="phone area codes and exchanges"
                    onChange={handleChange}
                ></textarea>
                <br />
                <hr />
                <label htmlFor="chkPhone2">
                    <b>Records Must Include A Phone Number:</b>
                </label>
                <input type="checkbox" name="chkPhone" id="chkPhone2" value="1" onChange={handleChange}/>
                <br />
            </fieldset>
        </>
    );
};

export default TelephoneSearch;
