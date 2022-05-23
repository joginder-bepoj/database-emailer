import React from "react";
import { useStateContext } from "../context/StateContext";

const JobSearchs = () => {
    const {setJobSearch, jobSearch} = useStateContext()
    const handleChange = (e) =>{
        setJobSearch({
            ...jobSearch, [e.target.name] : e.target.value
        })
    } 
    return (
        <>
            <fieldset id="jobtitles">
                <legend>Job Title Searches:</legend>
                <div style={{ backgroundColor: "#f2f2f2" }}>
                    <h3>A) Search by Pre-selected Job Titles (Optional)</h3>
                </div>
                <div style={{ fontSize: "12px" }} className="tah11" id="TITLESBOX">
                    <p align="justify">
                        We currently have about 750 different Job Titles in our database in
                        which we have categorized into the below 100 Job Titles to make
                        searching easier. When you download the data record it will include
                        the actual title that the executive gave themselves. See here the
                        list of all titles in our database and the title category that we
                        assigned it.
                    </p>
                </div>
                <div id="divEmail">
                    <input onChange={handleChange} type="hidden" name="chkFilter" id="chkFilter" value="1" />
                    <table
                        align="center"
                        cellPadding="1"
                        cellSpacing="1"
                        width="100%"
                        id="tblJobTitles"
                        className="tdBlock"
                    >
                        <tbody>
                        <tr valign="top" style={{display: "flex",justifyContent: "space-around"}}>
                            <td  width= "30%" >
                                <span style={{ fontSize: "13px" }} className="redtext">
                                    <b>Option I</b>
                                </span>
                                <br />
                                &nbsp;&nbsp;
                                <label htmlFor="titleCondition_none">
                                    <b>INCLUDE ALL titles, with blank too, in the database </b>
                                </label>{" "}
                                <input onChange={handleChange}
                                    defaultChecked
                                    type="radio"
                                    name="titleCondition"
                                    title="include all "
                                    value="IN"
                                    id="titleCondition_none"
                                />
                            </td>
                            <td width="30%" >
                                <span style={{ fontSize: "13px" }} className="redtext">
                                    <b>Option Il</b>
                                </span>
                                <br />
                                &nbsp;&nbsp;
                                <label htmlFor="titleCondition_included">
                                    <b>INCLUDE ONLY</b>
                                    the titles checked below and all the others will be EXCLUDED
                                </label>{" "}
                                <input onChange={handleChange}
                                    type="radio"
                                    
                                    name="titleCondition"
                                    title="Do you want some or all of these most common 100 INCLUDED and you understand thousands of other titles not listed here will be excluded from search"
                                    id="titleCondition_included"
                                    value="IN"
                                />
                            </td>
                            <td width="30%" style={{ fontSize: "13px" }}>
                                <span style={{ fontSize: "13px" }} className="redtext">
                                    <b>Option IIl</b>
                                </span>
                                <br />
                                &nbsp;&nbsp;
                                <label htmlFor="titleCondition_excluded">
                                    <b>EXCLUDE ONLY</b>
                                    the titles checked below and all the others will be INCLUDED
                                </label>{" "}
                                <input onChange={handleChange}
                                    type="radio"
                                    title="Do you want some or all of these most common 100 Job Titles to be Excluded from search "
                                    name="titleCondition"
                                    id="titleCondition_excluded"
                                    
                                    value="NOT IN"
                                />
                            </td>
                        </tr>
                        <tr valign="top" style={{display: "flex",justifyContent: "space-around"}}>
                            <td width="30%">
                                <span style={{ fontSize: "13px" }} className="redtext">
                                    <b>Option IV</b>
                                </span>
                                <br />
                                &nbsp;&nbsp;
                                <label htmlFor="titleCondition_no">
                                    <b>EXCLUDE ANY Records with Job Titles</b>
                                </label>{" "}
                                <input onChange={handleChange}
                                    type="radio"
                                    title="Any records with tiles will be excluded"
                                    name="titleCondition"
                                    id="titleCondition_no"
                                    
                                    value="NONE"
                                />
                            </td>
                            <td width="30%">
                                <span style={{ fontSize: "13px" }} className="redtext">
                                    <b>Option V</b>
                                </span>
                                <br />
                                &nbsp;&nbsp;
                                <label htmlFor="titleCondition_all">
                                    <b>INCLUDE ONLY Records with Job Titles</b>
                                </label>{" "}
                                <input onChange={handleChange}
                                    type="radio"
                                    title="Any records with tiles will be included"
                                    name="titleCondition"
                                    id="titleCondition_all"
                                    
                                    value="ALL"
                                />
                            </td>
                            <td valign="middle" width="30%">
                                <input 
                                    type="button"
                                    name="butCheckAllTitles"
                                    id="butCheckAllTitles"
                                    style={jobSearch?.titleCondition === "IN" ? {backgroundColor: "rgb(128 128 128 / 20%)", color: "rgb(128 128 128 / 60%)"} : {color: "black"} }
                                    value="Check All Titles"
                                    disabled={jobSearch?.titleCondition === "IN"}
                                    title="Checks all the title boxes, or alt-o"
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <hr />

                    <div style={{ width: "150px", backgroundColor: "#f2f2f2" }}>
                        <h4>Job Titles:</h4>
                    </div>
                    <hr />
                    <div
                        className="stateLabel flex-row"
                        id="divJobTitles"
                        style={{ width: "100%" }}
                    >
                        <div>
                            <label htmlFor="chkTitle_0">Accountant</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[0]"
                                id="chkTitle_0"
                                value="Accountant"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_1">Acupuncture</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[1]"
                                id="chkTitle_1"
                                value="Acupuncture"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_2">Administrator</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[2]"
                                id="chkTitle_2"
                                value="Administrator"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_3">Admissions Officer</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[3]"
                                id="chkTitle_3"
                                value="Admissions Officer"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_4">Advertising Director</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[4]"
                                id="chkTitle_4"
                                value="Advertising Director"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_5">Agent</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[5]"
                                id="chkTitle_5"
                                value="Agent"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_6">Analyst</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[6]"
                                id="chkTitle_6"
                                value="Analyst"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_7">Architect</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[7]"
                                id="chkTitle_7"
                                value="Architect"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_8">Assessor</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[8]"
                                id="chkTitle_8"
                                value="Assessor"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_9">Assistant</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[9]"
                                id="chkTitle_9"
                                value="Assistant"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_10">Athletic Director</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[10]"
                                id="chkTitle_10"
                                value="Athletic Director"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_11">Attorney</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[11]"
                                id="chkTitle_11"
                                value="Attorney"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_12">Board of Directors</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[12]"
                                id="chkTitle_12"
                                value="Board of Directors"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_13">CEO</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[13]"
                                id="chkTitle_13"
                                value="CEO"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_14">CFO</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[14]"
                                id="chkTitle_14"
                                value="CFO"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_15">Chairman</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[15]"
                                id="chkTitle_15"
                                value="Chairman"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_16">Chancellor</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[16]"
                                id="chkTitle_16"
                                value="Chancellor"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_17">Chief</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[17]"
                                id="chkTitle_17"
                                value="Chief"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_18">Chiropractor</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[18]"
                                id="chkTitle_18"
                                value="Chiropractor"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_19">Claims Manager</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[19]"
                                id="chkTitle_19"
                                value="Claims Manager"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_20">Commander</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[20]"
                                id="chkTitle_20"
                                value="Commander"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_21">Commisioner</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[21]"
                                id="chkTitle_21"
                                value="Commisioner"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_22">Communications</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[22]"
                                id="chkTitle_22"
                                value="Communications"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_23">Compliance</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[23]"
                                id="chkTitle_23"
                                value="Compliance"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_24">Comptroller</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[24]"
                                id="chkTitle_24"
                                value="Comptroller"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_25">Consultant</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[25]"
                                id="chkTitle_25"
                                value="Consultant"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_26">Contractor</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[26]"
                                id="chkTitle_26"
                                value="Contractor"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_27">Controller</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[27]"
                                id="chkTitle_27"
                                value="Controller"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_28">COO</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[28]"
                                id="chkTitle_28"
                                value="COO"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_29">Corporate Secretary</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[29]"
                                id="chkTitle_29"
                                value="Corporate Secretary"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_30">Correspondent</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[30]"
                                id="chkTitle_30"
                                value="Correspondent"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_31">Council Member</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[31]"
                                id="chkTitle_31"
                                value="Council Member"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_32">CPA</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[32]"
                                id="chkTitle_32"
                                value="CPA"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_33">Credit Officer</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[33]"
                                id="chkTitle_33"
                                value="Credit Officer"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_34">CTO</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[34]"
                                id="chkTitle_34"
                                value="CTO"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_35">Customer Service Mngr.</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[35]"
                                id="chkTitle_35"
                                value="Customer Service Mngr."
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_36">Dean</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[36]"
                                id="chkTitle_36"
                                value="Dean"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_37">Dentist</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[37]"
                                id="chkTitle_37"
                                value="Dentist"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_38">Dietician</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[38]"
                                id="chkTitle_38"
                                value="Dietician"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_39">Director</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[39]"
                                id="chkTitle_39"
                                value="Director"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_40">Editor</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[40]"
                                id="chkTitle_40"
                                value="Editor"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_41">Engineer</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[41]"
                                id="chkTitle_41"
                                value="Engineer"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_42">Environmental</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[42]"
                                id="chkTitle_42"
                                value="Environmental"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_43">Executive</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[43]"
                                id="chkTitle_43"
                                value="Executive"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_44">Executor</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[44]"
                                id="chkTitle_44"
                                value="Executor"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_45">Facilities/Plant Director</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[45]"
                                id="chkTitle_45"
                                value="Facilities/Plant Director"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_46">Food Service Director</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[46]"
                                id="chkTitle_46"
                                value="Food Service Director"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_47">Founder</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[47]"
                                id="chkTitle_47"
                                value="Founder"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_48">Geriatrics</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[48]"
                                id="chkTitle_48"
                                value="Geriatrics"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_49">Gov Affairs/Reg Comply</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[49]"
                                id="chkTitle_49"
                                value="Gov Affairs/Reg Comply"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_50">Human Resources Benefits Director</label>
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[50]"
                                id="chkTitle_50"
                                value="Human Resources Benefits Director"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_51">Insurance Seller</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[51]"
                                id="chkTitle_51"
                                value="Insurance Seller"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_52">International Ops</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[52]"
                                id="chkTitle_52"
                                value="International Ops"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_53">Investment Manager</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[53]"
                                id="chkTitle_53"
                                value="Investment Manager"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_54">Judge</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[54]"
                                id="chkTitle_54"
                                value="Judge"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_55">Librarian</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[55]"
                                id="chkTitle_55"
                                value="Librarian"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_56">Loan Officer</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[56]"
                                id="chkTitle_56"
                                value="Loan Officer"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_57">Maintenance Manager</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[57]"
                                id="chkTitle_57"
                                value="Maintenance Manager"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_58">Manager</label>

                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[58]"
                                id="chkTitle_58"
                                value="Manager"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_59">Manufacturing Director</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[59]"
                                id="chkTitle_59"
                                value="Manufacturing Director"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_60">Marketing Director</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[60]"
                                id="chkTitle_60"
                                value="Marketing Director"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_61">Master</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[61]"
                                id="chkTitle_61"
                                value="Master"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_62">Medical Doctor</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[62]"
                                id="chkTitle_62"
                                value="Medical Doctor"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_63">Meeting & Events</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[63]"
                                id="chkTitle_63"
                                value="Meeting & Events"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_64">Mortgage Broker</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[64]"
                                id="chkTitle_64"
                                value="Mortgage Broker"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_65">Nursing Director</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[65]"
                                id="chkTitle_65"
                                value="Nursing Director"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_66">Officer</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[66]"
                                id="chkTitle_66"
                                value="Officer"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_67">Owner</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[67]"
                                id="chkTitle_67"
                                value="Owner"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_68">Partner</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[68]"
                                id="chkTitle_68"
                                value="Partner"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_69">Ph.D.</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[69]"
                                id="chkTitle_69"
                                value="Ph.D."
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_70">Pharmacist</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[70]"
                                id="chkTitle_70"
                                value="Pharmacist"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_71">Politician</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[71]"
                                id="chkTitle_71"
                                value="Politician"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_72">President</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[72]"
                                id="chkTitle_72"
                                value="President"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_73">Principal</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[73]"
                                id="chkTitle_73"
                                value="Principal"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_74">Producer</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[74]"
                                id="chkTitle_74"
                                value="Producer"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_75">Psychiatry</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[75]"
                                id="chkTitle_75"
                                value="Psychiatry"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_76">Public Relations Mgr</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[76]"
                                id="chkTitle_76"
                                value="Public Relations Mgr"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_77">Publisher</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[77]"
                                id="chkTitle_77"
                                value="Publisher"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_78">Purchasing Manager</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[78]"
                                id="chkTitle_78"
                                value="Purchasing Manager"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_79">Quality Control</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[79]"
                                id="chkTitle_79"
                                value="Quality Control"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_80">Quatermaster</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[80]"
                                id="chkTitle_80"
                                value="Quatermaster"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_81">Realtor</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[81]"
                                id="chkTitle_81"
                                value="Realtor"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_82">Religious Leader</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[82]"
                                id="chkTitle_82"
                                value="Religious Leader"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_83">Researcher</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[83]"
                                id="chkTitle_83"
                                value="Researcher"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_84">Risk Manager</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[84]"
                                id="chkTitle_84"
                                value="Risk Manager"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_85">Safety Director</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[85]"
                                id="chkTitle_85"
                                value="Safety Director"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_86">Secretary</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[86]"
                                id="chkTitle_86"
                                value="Secretary"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_87">Security</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[87]"
                                id="chkTitle_87"
                                value="Security"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_88">Shareholder</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[88]"
                                id="chkTitle_88"
                                value="Shareholder"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_89">Sheriff</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[89]"
                                id="chkTitle_89"
                                value="Sheriff"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_90">Solicitor</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[90]"
                                id="chkTitle_90"
                                value="Solicitor"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_91">Superintendent</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[91]"
                                id="chkTitle_91"
                                value="Superintendent"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_92">Surgeon</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[92]"
                                id="chkTitle_92"
                                value="Surgeon"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_93">Training</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[93]"
                                id="chkTitle_93"
                                value="Training"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_94">Trustee</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[94]"
                                id="chkTitle_94"
                                value="Trustee"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_95">Underwriter</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[95]"
                                id="chkTitle_95"
                                value="Underwriter"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_96">Venturer</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[96]"
                                id="chkTitle_96"
                                value="Venturer"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_97">Veterinarian</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[97]"
                                id="chkTitle_97"
                                value="Veterinarian"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_98">Vice President</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[98]"
                                id="chkTitle_98"
                                value="Vice President"
                            />
                        </div>
                        <div>
                            <label htmlFor="chkTitle_99">Webmaster</label>{" "}
                            <input onChange={handleChange}
                                type="checkbox"
                                name="chkTitleDisplay[99]"
                                id="chkTitle_99"
                                value="Webmaster"
                            />
                        </div>
                    </div>
                </div>
                <hr />

                <hr />
                <div style={{ width: "50%", backgroundColor: "#f2f2f2" }}>
                    <h3>B) Or Enter Your Own Job Title</h3>
                </div>
                <table width="100%" cellPadding="0" cellSpacing="0" id="CustJobTitles">
                    <tbody>
                    <tr valign="top">
                        <td align="right" width="25%">
                            <b>Your Title(s)</b>
                            <br />
                            <small>(Example Traffic Manager, Systems Analyst)</small>
                        </td>
                        <td>
                            <input onChange={handleChange}
                                type="text"
                                name="txtTitle"
                                id="txtTitle"
                                size="25"
                                
                            />
                            <br />
                            <label htmlFor="optTxtTitle_Exact">Exact Match:</label>
                            <input onChange={handleChange}
                                type="radio"
                                name="optTxtTitle"
                                id="optTxtTitle_Exact"
                                value="E"
                            />{" "}
                            | <label htmlFor="optTxtTitle_Like">Starts With:</label>
                            <input onChange={handleChange}
                                type="radio"
                                name="optTxtTitle"
                                id="optTxtTitle_Like"
                                value="L"
                            />{" "}
                            |{" "}
                            <label htmlFor="optTxtTitle_Inside">
                                Contains It Somewhere Inside:
                            </label>
                            <input onChange={handleChange}
                                type="radio"
                                name="optTxtTitle"
                                id="optTxtTitle_Inside"
                                value="Inside"
                            />
                            <br />
                            <small>
                                ( To search on more than one title, separate them by commas, ','
                                Maximum of 4 titles per search. Must be 3 characters or longer
                                too.)
                            </small>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </>
    );
};

export default JobSearchs;
