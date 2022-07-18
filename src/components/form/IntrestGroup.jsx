import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { interestedGroupData } from "./interestgroupData";

const IntrestGroup = () => {
    const [show, setShow] = useState(false)
    const {setIntrestedGroup, intrestedGroup} = useStateContext()
    const handleCheckChange= (e) =>{
        const checked = e.target.checked
        const value = e.target.value
        setIntrestedGroup(checked ? [...intrestedGroup, value] : intrestedGroup.filter(item=> item !==value))
    }
    let interestIds = interestedGroupData.sort((a, b)=>a.value-b.value)
    return (
        <>
            <fieldset id="interests">
                <legend>Select Interest Groups, From 1 to All: (Optional)</legend>
                <h3>Interest Groups</h3>
                <div
                    className="stateLabel flex-row"
                    id="divInterest"
                    style={{ width: "100%" }}
                >
                   { interestedGroupData.map(item=>(
                        <div key={item.value}>
                            <label htmlFor={item.id}>{item.name}</label>
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                name={item.name}
                                id={item.id}
                                value={item.value}
                            />
                        </div>
                    ))}
                </div>
                <button 
                    id="InterestIDs"
                    type="button"
                    onClick={()=>setShow(true)}
                >
                    Click Here to Show Interest and ID relationships
                </button>{" "}
                or{" "}
                <a
                    href="Consumer_Interest_Lookup.csv"
                    target="_blank"
                    style={{ fontSize: "12pt", fontWeight: "600", color: "#111" }}
                >
                    Download the File
                </a>
                <div id="divInterestlookups" style={ show ? {display: "block"} : {display: "none" }}>
                    <table width="100%" cellPadding="0" cellSpacing="0">
                        <tbody>
                        <tr>
                            <td style={{ fontSize: "12pt", fontWeight: "600" }}>ID</td>
                            <td style={{ fontSize: "12pt", fontWeight: "600" }}>Interest</td>
                        </tr>
                        {
                            interestIds.map(item=>(
                                <tr key={item.value}>
                                    <td>{item.value}</td>
                                    <td>{item.name}</td>
                                </tr>
                            ))
                            
                        }
                        </tbody>
                    </table>
                    <button
                        id="InterestIDs"
                        type="button"
                        onClick={()=>setShow(false)}
                    >
                        Hide Interest and ID relationships
                    </button>
                </div>
            </fieldset>
        </>
    );
};

export default IntrestGroup;
