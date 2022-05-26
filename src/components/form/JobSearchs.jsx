import React, {useState, useEffect} from "react";
import { useStateContext } from "../context/StateContext";
import { jobTitles } from "./jobTitles";

const JobSearchs = () => {
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [isChecked, setIsChecked] = useState([])
    const [tempArr, setTempArr] = useState([])
    const [check, setCheck] = useState(false)

    const {setJobSearch, jobSearch} = useStateContext()
    const handleChange = (e) =>{
        setJobSearch({
            ...jobSearch, [e.target.name] : e.target.value
        })
    } 

    useEffect(() => {
        setTempArr(jobTitles);
    }, [tempArr]);


    const handleJobChange = e => {
        const { id, checked } = e.target;
        setIsChecked([...isChecked, id]);
        if (!checked) {
          setIsChecked(isChecked.filter(item => item !== id));
        }
    };

    const handleSelectAll = e =>{
        setIsCheckedAll(!isCheckedAll);
        setIsChecked(tempArr.map(li => li.id));
        if (isCheckedAll) {
        setIsChecked([]);
        }
        setCheck(!check)
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
                                    onClick={()=>setIsChecked([tempArr.map(li => li.id)])}
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
                                    onClick={()=>setIsChecked([tempArr.map(li => li.id)])}
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
                                    value={ check ? "Uncheck All Titles"  : "Check All Titles" }
                                    disabled={jobSearch?.titleCondition === "IN"}
                                    title="Checks all the title boxes, or alt-o"
                                    onClick={handleSelectAll}
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
                        {
                            jobTitles.map((item) =>(
                            <div key={item.id}>
                                <label htmlFor={item.id}>{item.value}</label>{" "}
                                <input onChange={handleJobChange}
                                    type="checkbox"
                                    name={item.name}
                                    id={item.id}
                                    value={item.value}
                                    checked={isChecked.includes(item.id)}
                                />
                            </div>
                            ))
                        }
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
