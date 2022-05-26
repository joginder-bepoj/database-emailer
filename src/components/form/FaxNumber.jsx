import React from "react";
import { useStateContext } from "../context/StateContext";

const FaxNumber = () => {
    const {setFaxNumber, faxNumber} = useStateContext()
    const handleChange = (e) =>{
        setFaxNumber({
            ...faxNumber, [e.target.name] : e.target.value
        })
    }


    return (
        <>
            <fieldset className="stateLabel">
                <legend>Fax Numbers Search: (Optional)</legend>
                <span >
                    Enter the fax's area code and exchange as a string w/o any spaces,
                    like 203233. Separate them by at least a space. Note: At least a 3
                    Digit Area Code is required. This search option can take a
                    considerable time, especially if multiple states and many area codes
                    and exchanges are entered.
                </span>
                <hr />
                <textarea
                    name="taFaxes"
                    id="taFaxes"
                    style={{ width: "90%", height: "130px" }}
                    placeholder="fax area codes and exchanges"
                    onChange={handleChange}
                ></textarea>
                <br />
                <label htmlFor="chkFaxOnly"> For Valid Faxes Only</label> (don't use if you
                are searching on faxes above){" "}
                <input type="checkbox" name="chkFaxOnly" id="chkFaxOnly" value="1" onChange={handleChange} />
                <hr />
            </fieldset>
        </>
    );
};

export default FaxNumber;
