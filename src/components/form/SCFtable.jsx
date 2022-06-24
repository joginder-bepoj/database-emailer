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
                            item.State === "AK" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Alabama" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "AL" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Arkansas" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "AR" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Arizona" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "AZ" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;California" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "CA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Colorado" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "CO" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Connecticut" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "CT" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Dist. of Col." className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "DC" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Delaware" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "DE" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Florida" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "FL" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Georgia" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "GA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Hawaii" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "HI" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Iowa" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "IA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Idaho" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "ID" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Illinois" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "IL" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Indiana" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "IN" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Kansas" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "KS" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Kentucky" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "KY" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Louisiana" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "LA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Massachusetts" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "MA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Maryland" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "MD" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Maine" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "ME" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Michigan" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "MI" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Minnesota" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "MN" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Missouri" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "MO" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Mississippi" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "MS" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Montana" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "MT" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;No. Carolina" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "NC" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;No. Dakota" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "ND" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Nebraska" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "NE" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;New Hampshire" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "NH" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;New Jersey" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "NJ" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;New Mexico" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "NM" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Nevada" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "NV" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;New York" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "NY" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Ohio" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "OH" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Oklahoma" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "OK" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Oregon" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "OR" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Pennsylvania" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "PA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Rhode Island" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "RI" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;So. Carolina" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "SC" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;So. Dakota" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "SD" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Tennessee" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "TN" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Texas" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "TX" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Utah" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "UT" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Virginia" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "VA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Vermont" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "VT" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Washington" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "WA" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Wisconsin" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "WI" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;West Virginia" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "WV" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
                                </option>
                            )
                    )}
                </optgroup>
                <optgroup label="&nbsp;&nbsp;Wyoming" className="optGroupSCF">
                    {data.map(
                        (item) =>
                            item.State === "WY" && (
                                <option key={item.SCF_Code} value={item.SCF_Code}>
                                    {item.SCF_Code} |{item.Town}, {item.State} | {item.Population}
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