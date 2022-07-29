import React, {useState, useEffect} from "react";
import { useStateContext } from "../context/StateContext";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const SICcodes = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const url = "http://localhost:8000";
        const fetchData = async () => {
            try {
                const res = await axios.get(url + "/tblSicFT");
                setData(res.data);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);
    
    if(error) console.log(error)
    
    const location = useLocation()
    const {setSICcode, SICCodesChange, setSICCodesChages, setSICValue} = useStateContext()
    const handleChange = (e) =>{
        let value = Array.from(e.target.selectedOptions, (option)=> option.value)
        setSICcode(value)
    } 
    const handleValueChange = (e) => {
        setSICValue(e.target.value)
    }

    const handleTextChange = (e) =>{
        setSICCodesChages({...SICCodesChange, [e.target.name] : e.target.value})
    }
    const handleCheckChange = (e) =>{
        const {name, value, checked} =e.target
        setSICCodesChages({
            ...SICCodesChange, [name] : checked ? value : ""
        })
    }

    return (
        <>
            <fieldset>
                <legend>
                    Search by "Standard Industrial Codes" (SICS Codes or SIC Codes)
                </legend>
                <div id="search_parameters">
                    <div
                        style={{
                            border: "2px solid #CCC",
                            color: "#111",
                            paddingtop: "5px",
                            paddingbottom: "0",
                            fontsize: "12px",
                            padding: "5px",
                        }}
                        className="tah11"
                    >
                        <h3>Search by "Standard Industrial Codes" (SIC) </h3>
                        <b>
                            {" "}
                            Bypass this entire SIC Codes / Business Industry Section if you
                            simply want to search business in ALL Industries.
                        </b>
                        <br />
                        <b>
                            It is recommended to search on either SIC or NAICS codes but not
                            both of them together. Matching NAICS codes will be added
                            automatically to your SIC Code search.
                        </b>
                    </div>
                    <label
                        htmlFor="chkNAICSfromSICS"
                        style={{ fontsize: "12pt", fontweight: "700" }}
                    >
                        Check This If You want the Corresponding NAICS Codes Included Too:
                    </label>
                    <input onChange={handleCheckChange}
                        type="checkbox"
                        name="chkNAICSfromSICS"
                        id="chkNAICSfromSICS"
                        value="1"
                    />
                    <br />
                    <label
                        htmlFor="chkGroupBySIC"
                        style={{ fontsize: "12pt", fontweight: "700" }}
                    >
                        Check This If You have Multiple SIC Codes Where You Want the Results
                        Grouped:
                    </label>
                    <input onChange={handleCheckChange}
                        type="checkbox"
                        name="chkGroupBySIC"
                        id="chkGroupBySIC"
                        value="1"
                    />
                    <hr />
                    <br />
                    <b>
                        List Of SIC Codes:
                        <a href="@" target="_blank" className="smallLink">
                            Click Here
                        </a>
                        <br />
                        SIC Codes In Excel Spreadsheet:
                        <a href="sic_codes.xls" target="_blank" className="smallLink">
                            Click Here
                        </a>
                        <br />
                        Compare Codes &amp; Search:
                        <Link to="/database-emailer/sictonaciscodes" >
                            SIC to NAICS Code Relations
                        </Link>
                    </b>
                    <br />
                    <hr />
                    <div align="center" className="divImportant">
                        <h3>5 Ways to Search for Business by Industry with SIC Codes</h3>
                    </div>
                    <fieldset>
                        <legend>SIC Query Option l:</legend>
                        <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                            <tbody>
                            <tr>
                                <td align="left">
                                    <b>
                                        
                                        Search through the Description of the Industry the Code is
                                        in.
                                        <br />
                                        Example: Insurance
                                        <br />
                                        This will find all SIC Codes that have insurance in their
                                        description field,
                                    </b>
                                    <br />
                                    <br />
                                    <div align="left">
                                        <b>Search on SICS Description: </b>&nbsp;
                                        <input onChange={handleTextChange}
                                            type="text"
                                            name="txtSICDescription"
                                            id="txtSICDescription"
                                            maxLength="256"
                                            size="20"
                                            
                                        />
                                        <br />
                                        <br />
                                        <input 
                                            type="button"
                                            name="subSICDescription"
                                            id="subSICDescription"
                                            value="Search for SICS Based on Description"
                                            title="or alt-h"
                                        />
                                    </div>
                                </td>
                            </tr></tbody>
                        </table>
                    </fieldset>
                    <hr />
                    <fieldset>
                        <legend>SIC Query Option ll:</legend>
                        <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                            <tbody>
                            <tr>
                                <td align="left" id="selSics">
                                    <b>
                                        Click on the SIC Codes/Business Industry you desire.
                                        <br /> (Hold the Control key down to select more than one
                                        SIC Business Category)
                                    </b>
                                    <br />
                                    <br />
                                    <br />
                                    {
                                        location.pathname === "/database-emailer/checkbuisness" ? (
                                            <select
                                        onChange={handleChange}
                                        name="selSIC_codes[]"
                                        id="selSIC_codes"
                                        style={{ width: "90%" }}
                                        size="10"
                                        multiple="multiple"
                                    >
                                        <option
                                            style={{
                                                color: "#FFF",
                                                backgroundcolor: "blue",
                                                fontsize: "10pt",
                                            }}
                                            value=""
                                        >
                                            -- Select Some SIC Codes Below. Hold the Control key down
                                            to select more than one --
                                        </option>
                                        {
                                            data.map((item, i)=>(
                                                <option key={i} value={item.nics_code}>
                                                    {item.nics_code + " " + item.description}
                                                </option>
                                            ))
                                        }
                                       
                                    </select>
                                        ) :(
                                            <select
                                        onChange={handleChange}
                                        name="selSIC_codes[]"
                                        id="selSIC_codes"
                                        style={{ width: "90%" }}
                                        size="10"
                                        multiple="multiple"
                                    >
                                        <option
                                            style={{
                                                color: "#FFF",
                                                backgroundcolor: "blue",
                                                fontsize: "10pt",
                                            }}
                                            value=""
                                        >
                                            -- Select Some SIC Codes Below. Hold the Control key down
                                            to select more than one --
                                        </option>
                                    </select>
                                        )
                                    }
                                    
                                </td>
                            </tr></tbody>
                        </table>
                    </fieldset>
                    <hr />
                    <fieldset>
                        <legend>SIC Query Option lll:</legend>
                        <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                            <tbody>
                            <tr>
                                <td align="left">
                                    <b>
                                        SIC Codes are often assigned by ranges for different types
                                        of business within an Industry.
                                        <br /> you may also enter a Range of SICS to obtain all type
                                        of Business.
                                    </b>
                                    <br />
                                    <br />
                                    <b>
                                       
                                        For Example: If you select 5700, you will get all codes
                                        between 5700 &amp; 5799.
                                        <br /> This search it will also override the other 3 SIC
                                        Code Searches.
                                        <br />
                                        hold the control or shift key down to select more than one
                                        range. You can select multiple ranges.
                                    </b>
                                    <br />
                                    <br />
                                    <Link to="/database-emailer/sictonaciscodes">
                                        SIC to NAICS Code Relations
                                    </Link>
                                </td>
                                <td align="center">
                                    <b> Select a Range(s) of SIC Codes:</b>
                                    <br />
                                    <label htmlFor="txtSicLower">Lower SIC Code: </label>
                                    <input onChange={handleTextChange}
                                        type="text"
                                        name="txtSicLower"
                                        id="txtSicLower"
                                        maxLength="8"
                                        size="4"
                                        
                                        placeholder="Lower Sic Code"
                                    />
                                    | <label htmlFor="txtSicHigher">Higher SIC Code: </label>
                                    <input onChange={handleTextChange}
                                        type="text"
                                        name="txtSicHigher"
                                        id="txtSicHigher"
                                        maxLength="8"
                                        size="4"
                                        
                                        placeholder="Higher Sic Code"
                                    />
                                    <hr />
                                    Or Use this Box Below:
                                    <br />
                                    <select
                                        onChange={handleValueChange}
                                        name="selSIC_code_ranges"
                                        id="selSIC_code_ranges"
                                        style={{ width: "90%" }}
                                        size="8"
                                        multiple="multiple"
                                    >
                                        <option
                                            style={{
                                                color: "#FFF",
                                                backgroundColor: "blue",
                                                fontSize: "11pt",
                                            }}
                                            value=""
                                        >
                                            -- Select a Range, You Can Select Multiple Ranges --
                                        </option>
                                        <option value="01">100 - 199</option>
                                        <option value="02">200 - 299</option>
                                        <option value="03">300 - 399</option>
                                        <option value="04">400 - 499</option>
                                        <option value="05">500 - 599</option>
                                        <option value="06">600 - 699</option>
                                        <option value="07">700 - 799</option>
                                        <option value="08">800 - 899</option>
                                        <option value="09">900 - 999</option>
                                        <option value="10">1000 - 1099</option>
                                        <option value="11">1100 - 1199</option>
                                        <option value="12">1200 - 1299</option>
                                        <option value="13">1300 - 1399</option>
                                        <option value="14">1400 - 1499</option>
                                        <option value="15">1500 - 1599</option>
                                        <option value="16">1600 - 1699</option>
                                        <option value="17">1700 - 1799</option>
                                        <option value="18">1800 - 1899</option>
                                        <option value="19">1900 - 1999</option>
                                        <option value="20">2000 - 2099</option>
                                        <option value="21">2100 - 2199</option>
                                        <option value="22">2200 - 2299</option>
                                        <option value="23">2300 - 2399</option>
                                        <option value="24">2400 - 2499</option>
                                        <option value="25">2500 - 2599</option>
                                        <option value="26">2600 - 2699</option>
                                        <option value="27">2700 - 2799</option>
                                        <option value="28">2800 - 2899</option>
                                        <option value="29">2900 - 2999</option>
                                        <option value="30">3000 - 3099</option>
                                        <option value="31">3100 - 3199</option>
                                        <option value="32">3200 - 3299</option>
                                        <option value="33">3300 - 3399</option>
                                        <option value="34">3400 - 3499</option>
                                        <option value="35">3500 - 3599</option>
                                        <option value="36">3600 - 3699</option>
                                        <option value="37">3700 - 3799</option>
                                        <option value="38">3800 - 3899</option>
                                        <option value="39">3900 - 3999</option>
                                        <option value="40">4000 - 4099</option>
                                        <option value="41">4100 - 4199</option>
                                        <option value="42">4200 - 4299</option>
                                        <option value="43">4300 - 4399</option>
                                        <option value="44">4400 - 4499</option>
                                        <option value="45">4500 - 4599</option>
                                        <option value="46">4600 - 4699</option>
                                        <option value="47">4700 - 4799</option>
                                        <option value="48">4800 - 4899</option>
                                        <option value="49">4900 - 4999</option>
                                        <option value="50">5000 - 5099</option>
                                        <option value="51">5100 - 5199</option>
                                        <option value="52">5200 - 5299</option>
                                        <option value="53">5300 - 5399</option>
                                        <option value="54">5400 - 5499</option>
                                        <option value="55">5500 - 5599</option>
                                        <option value="56">5600 - 5699</option>
                                        <option value="57">5700 - 5799</option>
                                        <option value="58">5800 - 5899</option>
                                        <option value="59">5900 - 5999</option>
                                        <option value="60">6000 - 6099</option>
                                        <option value="61">6100 - 6199</option>
                                        <option value="62">6200 - 6299</option>
                                        <option value="63">6300 - 6399</option>
                                        <option value="64">6400 - 6499</option>
                                        <option value="65">6500 - 6599</option>
                                        <option value="66">6600 - 6699</option>
                                        <option value="67">6700 - 6799</option>
                                        <option value="68">6800 - 6899</option>
                                        <option value="69">6900 - 6999</option>
                                        <option value="70">7000 - 7099</option>
                                        <option value="71">7100 - 7199</option>
                                        <option value="72">7200 - 7299</option>
                                        <option value="73">7300 - 7399</option>
                                        <option value="74">7400 - 7499</option>
                                        <option value="75">7500 - 7599</option>
                                        <option value="76">7600 - 7699</option>
                                        <option value="77">7700 - 7799</option>
                                        <option value="78">7800 - 7899</option>
                                        <option value="79">7900 - 7999</option>
                                        <option value="80">8000 - 8099</option>
                                        <option value="81">8100 - 8199</option>
                                        <option value="82">8200 - 8299</option>
                                        <option value="83">8300 - 8399</option>
                                        <option value="84">8400 - 8499</option>
                                        <option value="85">8500 - 8599</option>
                                        <option value="86">8600 - 8699</option>
                                        <option value="87">8700 - 8799</option>
                                        <option value="88">8800 - 8899</option>
                                        <option value="89">8900 - 8999</option>
                                        <option value="90">9000 - 9099</option>
                                        <option value="91">9100 - 9199</option>
                                        <option value="92">9200 - 9299</option>
                                        <option value="93">9300 - 9399</option>
                                        <option value="94">9400 - 9499</option>
                                        <option value="95">9500 - 9599</option>
                                        <option value="96">9600 - 9699</option>
                                        <option value="97">9700 - 9799</option>
                                        <option value="98">9800 - 9899</option>
                                        <option value="99">9900 - 9999</option>
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
                                        This will only work by itself, don't select any other SIC
                                        Codes searches if you want to use this one
                                        <br />
                                        If you want all your records to just have a SIC code, then
                                        check the "Only Businesses with SIC Codes" Box Below
                                    </h4>
                                </td>
                            </tr></tbody>
                        </table>
                    </fieldset>
                    <hr />
                    <fieldset>
                        <legend>SIC Query Option lV:</legend>
                        <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                            <tbody>
                            <tr>
                                <td align="left" colSpan="2">
                                    <b className="redtextbold2">SIC Query Option IV:</b>
                                    <br />
                                    <span className="twefont" style={{ fontSize: "11pt" }}>
                                        To Select Only Those Businesses That Have a SIC Code
                                        Assigned to Them
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td align="right" width="270">
                                    <label colSpan="chkSICCODESONLY">
                                        <b>Only Businesses with SIC Codes</b>
                                    </label>
                                </td>
                                <td align="left">
                                    <input onChange={handleCheckChange}
                                        type="checkbox"
                                        name="chkSICCODESONLY"
                                        id="chkSICCODESONLY"
                                        value="1"
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </fieldset>
                    <hr />
                    <fieldset>
                        <legend>SIC Query Option V:</legend>
                        <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                            <tbody>
                            <tr>
                                <td align="left">
                                    <b>
                                        {" "}
                                        Paste the contents of a file of 4 Digit SIC codes Below
                                    </b>
                                    <br />
                                    <b>
                                        SIC codes can be separated by spaces or any non-numeric
                                        character like a comma. All non-numeric characters will be
                                        stripped out. Only the first 4 digits of each SIC code are
                                        used
                                    </b>
                                    <br />
                                    <textarea
                                        onChange={handleTextChange}
                                        name="taSIC"
                                        id="taSIC"
                                        style={{ height: "100px", width: "90%" }}
                                    ></textarea>
                                    <hr />
                                    <b>
                                        Paste the contents of a file of 6 or More Digit SIC codes
                                        Below
                                    </b>
                                    <br />
                                    <b>
                                        SIC codes can be separated by spaces or any non-numeric
                                        character like a comma. All non-numeric characters will be
                                        stripped out. Only the first 6 digits of each SIC code are
                                        used
                                    </b>
                                    <br />
                                    <textarea
                                        onChange={handleTextChange}
                                        name="taSIC6"
                                        id="taSIC6"
                                        style={{ height: "100px", width: "90%" }}
                                    ></textarea>
                                    <br />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <hr />
                        <Link to="/database-emailer/sictonaciscodes">
                            SIC to NAICS Code Relations
                        </Link>
                    </fieldset>
                </div>
            </fieldset>
        </>
    );
};
export default SICcodes;
