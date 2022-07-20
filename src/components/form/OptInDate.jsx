import React from "react";
import { useStateContext } from "../context/StateContext";

const OptInDate = () => {
    const {setOptIn, optIn} = useStateContext()
    const handleChange = (e) =>{
        setOptIn({
            ...optIn, [e.target.name] : e.target.value
        })
    }

    return (
        <>
            <fieldset>
                <legend>Select Records Based on Their Opt-In Date: (Optional)</legend>
                <span className="elevfont">
                    Include in only records that have opted-in from an earlier date back
                    to a later date.
                </span>
                <table width="100%" cellPadding="1" cellSpacing="1" className="tdBlock">
                    <tbody>
                    <tr valign="top" align="center">
                        <td>
                            <h5 className="redtext">From this Date:</h5>
                            <select name="registration_date" id="registration_date" onChange={handleChange}>
                                <option
                                    value=""
                                    style={{ color: "#FFF", backgroundColor: "blue" }}
                                >
                                    --- Opt-In Date ---
                                </option>
                                <optgroup label="---- Year 2022 ---"></optgroup>
                                <option value="05/2022">5/2022</option>
                                <option value="04/2022">4/2022</option>
                                <option value="03/2022">3/2022</option>
                                <option value="02/2022">2/2022</option>
                                <option value="01/2022">1/2022</option>
                                <optgroup label="---- Year 2021 ---"></optgroup>
                                <option value="12/2021">12/2021</option>
                                <option value="11/2021">11/2021</option>
                                <option value="10/2021">10/2021</option>
                                <option value="09/2021">9/2021</option>
                                <option value="08/2021">8/2021</option>
                                <option value="07/2021">7/2021</option>
                                <option value="06/2021">6/2021</option>
                                <option value="05/2021">5/2021</option>
                                <option value="04/2021">4/2021</option>
                                <option value="03/2021">3/2021</option>
                                <option value="02/2021">2/2021</option>
                                <option value="01/2021">1/2021</option>
                                <optgroup label="---- Year 2020 ---"></optgroup>
                                <option value="12/2020">12/2020</option>
                                <option value="11/2020">11/2020</option>
                                <option value="10/2020">10/2020</option>
                                <option value="09/2020">9/2020</option>
                                <option value="08/2020">8/2020</option>
                                <option value="07/2020">7/2020</option>
                                <option value="06/2020">6/2020</option>
                                <option value="05/2020">5/2020</option>
                                <option value="04/2020">4/2020</option>
                                <option value="03/2020">3/2020</option>
                                <option value="02/2020">2/2020</option>
                                <option value="01/2020">1/2020</option>
                                <optgroup label="---- Year 2019 ---"></optgroup>
                                <option value="12/2019">12/2019</option>
                                <option value="11/2019">11/2019</option>
                                <option value="10/2019">10/2019</option>
                                <option value="09/2019">9/2019</option>
                                <option value="08/2019">8/2019</option>
                                <option value="07/2019">7/2019</option>
                                <option value="06/2019">6/2019</option>
                                <option value="05/2019">5/2019</option>
                                <option value="04/2019">4/2019</option>
                                <option value="03/2019">3/2019</option>
                                <option value="02/2019">2/2019</option>
                                <option value="01/2019">1/2019</option>
                                <option value="">All Dates</option>
                            </select>
                            <br />
                            <span className="tenfont">
                                This Must be an Earlier Date
                                <br /> than the One to the Right.
                            </span>
                        </td>
                        <td width="50%">
                            <h5 className="redtext">To this Date:</h5>
                            <select
                                name="registration_date_later"
                                id="registration_date_later"
                                onChange={handleChange}
                            >
                                <option
                                    value=""
                                    style={{ color: "#FFF", backgroundColor: "blue" }}
                                >
                                    Default: Today's Date
                                </option>
                                <optgroup label="---- Year 2022 ---" />
                                <option value="05/2022">5/2022</option>
                                <option value="04/2022">4/2022</option>
                                <option value="03/2022">3/2022</option>
                                <option value="02/2022">2/2022</option>
                                <option value="01/2022">1/2022</option>
                                <optgroup label="---- Year 2021 ---" />
                                <option value="12/2021">12/2021</option>
                                <option value="11/2021">11/2021</option>
                                <option value="10/2021">10/2021</option>
                                <option value="09/2021">9/2021</option>
                                <option value="08/2021">8/2021</option>
                                <option value="07/2021">7/2021</option>
                                <option value="06/2021">6/2021</option>
                                <option value="05/2021">5/2021</option>
                                <option value="04/2021">4/2021</option>
                                <option value="03/2021">3/2021</option>
                                <option value="02/2021">2/2021</option>
                                <option value="01/2021">1/2021</option>
                                <optgroup label="---- Year 2020 ---" />
                                <option value="12/2020">12/2020</option>
                                <option value="11/2020">11/2020</option>
                                <option value="10/2020">10/2020</option>
                                <option value="09/2020">9/2020</option>
                                <option value="08/2020">8/2020</option>
                                <option value="07/2020">7/2020</option>
                                <option value="06/2020">6/2020</option>
                                <option value="05/2020">5/2020</option>
                                <option value="04/2020">4/2020</option>
                                <option value="03/2020">3/2020</option>
                                <option value="02/2020">2/2020</option>
                                <option value="01/2020">1/2020</option>
                                <optgroup label="---- Year 2019 ---" />
                                <option value="12/2019">12/2019</option>
                                <option value="11/2019">11/2019</option>
                                <option value="10/2019">10/2019</option>
                                <option value="09/2019">9/2019</option>
                                <option value="08/2019">8/2019</option>
                                <option value="07/2019">7/2019</option>
                                <option value="06/2019">6/2019</option>
                                <option value="05/2019">5/2019</option>
                                <option value="04/2019">4/2019</option>
                                <option value="03/2019">3/2019</option>
                                <option value="02/2019">2/2019</option>
                                <option value="01/2019">1/2019</option>
                            </select>
                            <br />
                            <span className="tenfont">
                                Leave this one alone if you want to
                                <br />
                                select all records up to the present.
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <label htmlFor="chkRegDate">Must Have an Opt-In Date:</label>{" "}
                <input type="checkbox" name="chkRegDate" id="chkRegDate" value="1" onChange={handleChange} />
            </fieldset>
        </>
    );
};

export default OptInDate;
