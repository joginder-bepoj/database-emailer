import React from "react";
import { useStateContext } from "../context/StateContext";

const Ethnicity = () => {
    const {setEthnicity, ethnicity} = useStateContext()
    const handleChange = (e) =>{
        setEthnicity({...ethnicity, [e.target.name] : e.target.value })
    }

    return (
        <>
            <fieldset>
                <legend>Select An Ethnicity: (Optional)</legend>
                <div
                    className="stateLabel flex-row"
                    id="divEthnicity"
                    style={{ width: "100%" }}
                >
                    <div>
                        <label htmlFor="ethnicsArmenian">Armenian</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Armenian]"
                            id="ethnicsArmenian"
                            value="Armenian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsAustrian">Austrian</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Austrian]"
                            id="ethnicsAustrian"
                            value="Austrian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsBelgian">Belgian</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Belgian]"
                            id="ethnicsBelgian"
                            value="Belgian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsChinese">Chinese</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Chinese]"
                            id="ethnicsChinese"
                            value="Chinese"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsCzech">Czech</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Czech]"
                            id="ethnicsCzech"
                            value="Czech"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsDanish">Danish</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Danish]"
                            id="ethnicsDanish"
                            value="Danish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsDutch">Dutch</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Dutch]"
                            id="ethnicsDutch"
                            value="Dutch"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsEnglish">English</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[English]"
                            id="ethnicsEnglish"
                            value="English"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsFilipino">Filipino</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Filipino]"
                            id="ethnicsFilipino"
                            value="Filipino"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsFinnish">Finnish</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Finnish]"
                            id="ethnicsFinnish"
                            value="Finnish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsFrench">French</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[French]"
                            id="ethnicsFrench"
                            value="French"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsGerman">German</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[German]"
                            id="ethnicsGerman"
                            value="German"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsGreek">Greek</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Greek]"
                            id="ethnicsGreek"
                            value="Greek"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsHispanic">Hispanic</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Hispanic]"
                            id="ethnicsHispanic"
                            value="Hispanic"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsHungarian">Hungarian</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Hungarian]"
                            id="ethnicsHungarian"
                            value="Hungarian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsIndian">Indian</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Indian]"
                            id="ethnicsIndian"
                            value="Indian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsIrish">Irish</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Irish]"
                            id="ethnicsIrish"
                            value="Irish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsItalian">Italian</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Italian]"
                            id="ethnicsItalian"
                            value="Italian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsJapanese">Japanese</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Japanese]"
                            id="ethnicsJapanese"
                            value="Japanese"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsJewish">Jewish</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Jewish]"
                            id="ethnicsJewish"
                            value="Jewish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsKorean">Korean</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Korean]"
                            id="ethnicsKorean"
                            value="Korean"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsNorwegian">Norwegian</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Norwegian]"
                            id="ethnicsNorwegian"
                            value="Norwegian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsPolish">Polish</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Polish]"
                            id="ethnicsPolish"
                            value="Polish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsRomanian">Romanian</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Romanian]"
                            id="ethnicsRomanian"
                            value="Romanian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsRussian">Russian</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Russian]"
                            id="ethnicsRussian"
                            value="Russian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsScotch">Scotch</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Scotch]"
                            id="ethnicsScotch"
                            value="Scotch"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsSlovakian">Slovakian</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Slovakian]"
                            id="ethnicsSlovakian"
                            value="Slovakian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsSlovenian">Slovenian</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Slovenian]"
                            id="ethnicsSlovenian"
                            value="Slovenian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsSwedish">Swedish</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Swedish]"
                            id="ethnicsSwedish"
                            value="Swedish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsTaiwanese">Taiwanese</label>{" "}
                        <input 
                            onChange={handleChange}
                            type="checkbox"
                            name="ethnics[Taiwanese]"
                            id="ethnicsTaiwanese"
                            value="Taiwanese"
                        />
                    </div>
                </div>
            </fieldset>
        </>
    );
};

export default Ethnicity;
