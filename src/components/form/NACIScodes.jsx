import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import axios from "axios";


const NACIScodes = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const url = "http://localhost:8000";
        const fetchData = async () => {
            try {
                const res = await axios.get(url + "/tblNAICS");
                setData(res.data);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);
    
    if(error) console.log(error)
  
    const {setNACIcode, NACIcodeChanges, setNACIcodeChanges} = useStateContext()
    const handleChange = (e) =>{
        let value = Array.from(e.target.selectedOptions, (option)=> option.value)
        setNACIcode(value)
    }
    const handleTextChange = (e) =>{
        setNACIcodeChanges({
            ...NACIcodeChanges, [e.target.name] : e.target.value
        })
    }
    const handleCheckChange = (e) => {
        setNACIcodeChanges({
            ...NACIcodeChanges, [e.target.name] : e.target.checked
        })
    }
    return (
        <>
            <fieldset>
                <legend>Search by NAICS Codes</legend>
                <div className="divImportant">
                    <h3>
                        Search by "North American Industry Classification System" (NAICS){" "}
                    </h3>
                    <b>
                        {" "}
                        Bypass this entire NAICS Codes / Business Industry Section if you
                        simply want to search business in ALL Industries.
                    </b>{" "}
                    <br />
                    <b>
                        It is recommended to search on either SIC or NAICS codes but not
                        both of them together. Matching SIC codes will be added
                        automatically to your NAICS Code search.
                    </b>
                    <p>
                        NAICS is the North American Industry Classification System; the
                        industry classification system that replaced the Standard Industrial
                        Classification (SIC) system. NAICS is the standard used by Federal
                        statistical agencies in classifying business establishments for the
                        purpose of collecting, analyzing, and publishing statistical data
                        related to the U.S. business economy.
                    </p>
                </div>
                <div align="center" style={{ backgroundColor: "#f2f2f2" }}>
                    <h3>
                        Five Ways to Search for Business by Industry using NAICS Codes
                    </h3>
                </div>
                <label
                    htmlFor="chkSICSfromNAICS"
                    style={{ fontSize: "12pt", fontWeight: "700" }}
                >
                    Check This If You want the Corresponding SICS Codes Included Too:
                </label>{" "}
                <input onChange={handleCheckChange}
                    type="checkbox"
                    name="chkSICSfromNAICS"
                    id="chkSICSfromNAICS"
                    value="1"
                />
                <hr />
                <fieldset>
                    <legend>NAICS Query Option l:</legend>
                    <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                        <tbody>
                        <tr>
                            <td align="left">
                                <div align="left">
                                    <hr />
                                    <b>
                                        {" "}
                                        Search through the Description of the Industry the Code is
                                        in.
                                        <br />
                                        Example: Insurance
                                        <br />
                                        This will find all NAICS Codes that have insurance in their
                                        description field,
                                    </b>
                                    <br />
                                    <br />
                                    <div align="left">
                                        <b>Search on NAICS Description: </b>&nbsp;
                                        <input onChange={handleTextChange}
                                            type="text"
                                            name="txtNAICSDescription"
                                            id="txtNAICSDescription"
                                            size="30"
                                        />
                                        <br />
                                        <br />
                                        <input 
                                            type="submit"
                                            name="subNAICSDescription"
                                            id="subNAICSDescription"
                                            value="Search for NAICS Based on Description"
                                            title="or alt-h"
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
                <hr />
                <fieldset>
                    <legend>NAICS Query Option ll:</legend>
                    <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                        <tbody>
                        <tr>
                            <td align="left">
                                <b>
                                    Click on the NAICS Codes/Business Industry you desire.
                                    <br /> (Hold the Control key down to select more than one
                                    NAICS Business Category)
                                </b>
                                <br />
                                <br />
                                <select
                                    name="selNAICScodes[]"
                                    id="selNAICScodes"
                                    style={{ width: "90%" }}
                                    size="15"
                                    multiple="multiple"
                                    onChange={handleChange}
                                >
                                    <option
                                        style={{
                                            color: "#FFF",
                                            backgroundColor: "blue",
                                            fontSize: "10pt",
                                        }}
                                        value=""
                                    >
                                        -- Select Some NAICS Codes Below. Hold the Control key down
                                        to select more than one --
                                    </option>
                                    {
                                        data.map((item,i)=>(
                                            <option value={item.naics_code} key={i}>{item.naics_code+ " " + item.description}</option>
                                        ))
                                    }
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
                <hr />
                <fieldset>
                    <legend>NAICS Query Option lll:</legend>
                    <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                        <tbody>
                        <tr>
                            <td align="left">
                                <b>
                                    NAICS Codes are often assigned by ranges for different types
                                    of business within an Industry.
                                    <br />
                                    you may also enter a Range of NAICS to obtain all type of
                                    Business.
                                </b>
                                <br />
                                <br />
                                <b>
                                    {" "}
                                    For Example: If you select 57000, you will get all codes
                                    between 57000 &amp; 57999.
                                    <br />
                                    To select multiple ranges, hold the control or shift key down
                                    to select another range.
                                </b>
                                <br />
                                <Link to="/database-emailer/sictonaciscodes">
                                    SIC to NAICS Code Relations
                                </Link>
                            </td>
                            <td align="center">
                                <b>Select a Range(s) of NAICS Codes:</b>
                                <br />
                                <label htmlFor="txtNAICSLower">Lower NAICS Code: </label>{" "}
                                <input onChange={handleTextChange}
                                    type="text"
                                    name="txtNAICSLower"
                                    id="txtNAICSLower"
                                    maxLength="8"
                                    size="6"
                                    
                                    placeholder="Lower NAICS Code"
                                />
                                | <label htmlFor="txtNAICSHigher">Higher NAICS Code: </label>{" "}
                                <input onChange={handleTextChange}
                                    type="text"
                                    name="txtNAICSHigher"
                                    id="txtNAICSHigher"
                                    maxLength="8"
                                    size="6"
                                    
                                    placeholder="Higher NAICS Code"
                                />
                                <hr />
                                Or Use this Box Below:
                                <br />
                                <select
                                    name="selNaicsCodeRange[]"
                                    id="selNaicsCodeRange"
                                    size="8"
                                    multiple="multiple"
                                    style={{ width: "90%" }}
                                    onChange={handleChange}
                                >
                                    <option
                                        style={{
                                            color: "#FFF",
                                            backgroundColor: "blue",
                                            fontSize: "11pt",
                                        }}
                                        value=""
                                    >
                                        -- Select a Range, Hold Shift or Control Key for Multiple
                                        Choices --
                                    </option>
                                    <option value="10">100000 - 109999</option>
                                    <option value="11">110000 - 119999</option>
                                    <option value="12">120000 - 129999</option>
                                    <option value="13">130000 - 139999</option>
                                    <option value="14">140000 - 149999</option>
                                    <option value="15">150000 - 159999</option>
                                    <option value="16">160000 - 169999</option>
                                    <option value="17">170000 - 179999</option>
                                    <option value="18">180000 - 189999</option>
                                    <option value="19">190000 - 199999</option>
                                    <option value="20">200000 - 209999</option>
                                    <option value="21">210000 - 219999</option>
                                    <option value="22">220000 - 229999</option>
                                    <option value="23">230000 - 239999</option>
                                    <option value="24">240000 - 249999</option>
                                    <option value="25">250000 - 259999</option>
                                    <option value="26">260000 - 269999</option>
                                    <option value="27">270000 - 279999</option>
                                    <option value="28">280000 - 289999</option>
                                    <option value="29">290000 - 299999</option>
                                    <option value="30">300000 - 309999</option>
                                    <option value="31">310000 - 319999</option>
                                    <option value="32">320000 - 329999</option>
                                    <option value="33">330000 - 339999</option>
                                    <option value="34">340000 - 349999</option>
                                    <option value="35">350000 - 359999</option>
                                    <option value="36">360000 - 369999</option>
                                    <option value="37">370000 - 379999</option>
                                    <option value="38">380000 - 389999</option>
                                    <option value="39">390000 - 399999</option>
                                    <option value="40">400000 - 409999</option>
                                    <option value="41">410000 - 419999</option>
                                    <option value="42">420000 - 429999</option>
                                    <option value="43">430000 - 439999</option>
                                    <option value="44">440000 - 449999</option>
                                    <option value="45">450000 - 459999</option>
                                    <option value="46">460000 - 469999</option>
                                    <option value="47">470000 - 479999</option>
                                    <option value="48">480000 - 489999</option>
                                    <option value="49">490000 - 499999</option>
                                    <option value="50">500000 - 509999</option>
                                    <option value="51">510000 - 519999</option>
                                    <option value="52">520000 - 529999</option>
                                    <option value="53">530000 - 539999</option>
                                    <option value="54">540000 - 549999</option>
                                    <option value="55">550000 - 559999</option>
                                    <option value="56">560000 - 569999</option>
                                    <option value="57">570000 - 579999</option>
                                    <option value="58">580000 - 589999</option>
                                    <option value="59">590000 - 599999</option>
                                    <option value="60">600000 - 609999</option>
                                    <option value="61">610000 - 619999</option>
                                    <option value="62">620000 - 629999</option>
                                    <option value="63">630000 - 639999</option>
                                    <option value="64">640000 - 649999</option>
                                    <option value="65">650000 - 659999</option>
                                    <option value="66">660000 - 669999</option>
                                    <option value="67">670000 - 679999</option>
                                    <option value="68">680000 - 689999</option>
                                    <option value="69">690000 - 699999</option>
                                    <option value="70">700000 - 709999</option>
                                    <option value="71">710000 - 719999</option>
                                    <option value="72">720000 - 729999</option>
                                    <option value="73">730000 - 739999</option>
                                    <option value="74">740000 - 749999</option>
                                    <option value="75">750000 - 759999</option>
                                    <option value="76">760000 - 769999</option>
                                    <option value="77">770000 - 779999</option>
                                    <option value="78">780000 - 789999</option>
                                    <option value="79">790000 - 799999</option>
                                    <option value="80">800000 - 809999</option>
                                    <option value="81">810000 - 819999</option>
                                    <option value="82">820000 - 829999</option>
                                    <option value="83">830000 - 839999</option>
                                    <option value="84">840000 - 849999</option>
                                    <option value="85">850000 - 859999</option>
                                    <option value="86">860000 - 869999</option>
                                    <option value="87">870000 - 879999</option>
                                    <option value="88">880000 - 889999</option>
                                    <option value="89">890000 - 899999</option>
                                    <option value="90">900000 - 909999</option>
                                    <option value="91">910000 - 919999</option>
                                    <option value="92">920000 - 929999</option>
                                    <option value="93">930000 - 939999</option>
                                    <option value="94">940000 - 949999</option>
                                    <option value="95">950000 - 959999</option>
                                    <option value="96">960000 - 969999</option>
                                    <option value="97">970000 - 979999</option>
                                    <option value="98">980000 - 989999</option>
                                    <option value="99">990000 - 999999</option>
                                    <option
                                        style={{
                                            color: "#FFF",
                                            backgroundColor: "blue",
                                            fontSize: "11pt",
                                        }}
                                        value=""
                                    >
                                        -- Select a Range --
                                    </option>
                                </select>
                                <h4>
                                    If you want all the ranges, then check the "Only Businesses
                                    with NAICS Codes" Box Below
                                </h4>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
                <hr />
                <fieldset id="NAICS_CODES_ONLY">
                    <legend>NAICS Query Option lV:</legend>
                    <table cellPadding="0" cellSpacing="0" width="90%">
                        <tbody>
                        <tr>
                            <td align="left" colSpan="2">
                                <span className="twefont" style={{ fontSize: "11pt" }}>
                                    To Select Only Those Businesses That Have a NAICS Code
                                    Assigned to Them
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colSpan="2">
                                <label htmlFor="chkNAICS">
                                    <b>Select Only Businesses with NAICS Codes</b>
                                </label>
                                <input onChange={handleCheckChange}
                                    type="checkbox"
                                    name="chkNAICS"
                                    id="chkNAICS"
                                    value="1"
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
                <hr />
                <fieldset>
                    <legend>NAICS Query Option V:</legend>
                    <table cellPadding="0" cellSpacing="0" width="90%">
                        <tbody>
                        <tr>
                            <td align="left">
                                <b className="redtextbold2">NAICS Query Option V:</b>
                                <br />
                                <span className="twefont">
                                    Paste the contents of a file or string of NAICS codes here,
                                </span>
                                <br />
                                <b>
                                    NAICS codes can be separated by spaces or any non-numeric
                                    character like a comma. All non-numeric characters will be
                                    stripped out. Only the first 6 digits of each NAICS code are
                                    used
                                </b>
                                <br />
                                ex: 483111, 483112, 483113, 483114, 483211, 483212
                                <br />
                                <textarea
                                onChange={handleTextChange}
                                    name="taNAICS"
                                    id="taNAICS"
                                    style={{ height: "165px", width: "90%" }}
                                ></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
            </fieldset>
        </>
    );
};

export default NACIScodes;
