import React, { useState, useEffect } from "react";
import axios from "axios";

const SCFtable = ({ selectSCF }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const url = "http://localhost:8000";
        const fetchData = async () => {
            try {
                const res = await axios.get(url + "/tblscf");
                setData(res.data);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    if(error) console.log(error)

    return (
        <div className="floatleft" id="SCF" align="left">
            <b className="redtextbold2">Zip Code Option lll:</b>
            <h4>United States Zip Code Based SCF Look Up</h4>
            Will Find all the Zip Codes in a region based on the first three numbers
            of the Zip Code, like '011' will give you all the zips in the Springfield
            Mass area. The US Census Population of the SCF region is the last number.
            <br />
            Selecting an SCF will exclude all Canadian Data
            <br />
            <select
                name="selSCF"
                id="selSCF"
                size="8"
                multiple="multiple"
                onChange={selectSCF}
            >
                <option
                    value=""
                    style={{
                        backgroundColor: "#30C",
                        color: "white",
                        fontSize: "10pt",
                    }}
                >
                    SELECT an SCF Region
                </option>
                <optgroup label="&nbsp;&nbsp;Alaska" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "AK" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Alabama" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "AL" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Arkansas" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "AR" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Arizona" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "AZ" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;California" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "CA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Colorado" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "CO" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Connecticut" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "CT" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Dist. of Col." className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "DC" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Delaware" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "DE" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Florida" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "FL" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Georgia" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "GA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Hawaii" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "HI" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Iowa" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "IA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Idaho" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "ID" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Illinois" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "IL" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Indiana" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "IN" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Kansas" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "KS" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Kentucky" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "KY" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Louisiana" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "LA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Massachusetts" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "MA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Maryland" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "MD" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Maine" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "ME" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Michigan" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "MI" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Minnesota" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "MN" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Missouri" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "MO" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Mississippi" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "MS" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Montana" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "MT" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;No. Carolina" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "NC" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;No. Dakota" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "ND" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Nebraska" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "NE" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;New Hampshire" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "NH" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;New Jersey" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "NJ" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;New Mexico" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "NM" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Nevada" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "NV" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;New York" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "NY" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Ohio" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "OH" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} | {item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Oklahoma" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "OK" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Oregon" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "OR" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Pennsylvania" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "PA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Rhode Island" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "RI" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;So. Carolina" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "SC" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;So. Dakota" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "SD" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Tennessee" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "TN" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Texas" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "TX" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Utah" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "UT" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Virginia" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "VA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Vermont" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "VT" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Washington" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "WA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Wisconsin" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "WI" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;West Virginia" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "WV" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Wyoming" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.Town_State.split(", ")[1] === "WY" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town_State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
            </select>
            <br />
            <span style={{ fontSize: "8pt" }}>
                (<b>NOTE:</b> Hold the Control key down to select more than one SCF
                Region)
            </span>
            <br />
            <label htmlFor="SCFNOT">
                <b>To Instead EXCLUDE The Above Selected SCF Zones:</b>
            </label>
            <input type="checkbox" name="SCFNOT" id="SCFNOT" value="NOT" />
        </div>
    );
};

export default SCFtable;