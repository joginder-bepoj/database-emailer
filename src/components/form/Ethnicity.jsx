import React from "react";
import { useStateContext } from "../context/StateContext";

const Ethnicity = () => {
    const {setEthnicity, ethnicity} = useStateContext()
    const handleCheckChange = (e) =>{
        const checked = e.target.checked
        const value = e.target.value
        setEthnicity(checked ? [...ethnicity, value] : ethnicity.filter(item=> item !==value))
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
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Armenian"
                            id="ethnicsArmenian"
                            value="Armenian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsAustrian">Austrian</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Austrian"
                            id="ethnicsAustrian"
                            value="Austrian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsBelgian">Belgian</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Belgian"
                            id="ethnicsBelgian"
                            value="Belgian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsChinese">Chinese</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Chinese"
                            id="ethnicsChinese"
                            value="Chinese"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsCzech">Czech</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Czech"
                            id="ethnicsCzech"
                            value="Czech"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsDanish">Danish</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Danish"
                            id="ethnicsDanish"
                            value="Danish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsDutch">Dutch</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Dutch"
                            id="ethnicsDutch"
                            value="Dutch"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsEnglish">English</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_English"
                            id="ethnicsEnglish"
                            value="English"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsFilipino">Filipino</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Filipino"
                            id="ethnicsFilipino"
                            value="Filipino"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsFinnish">Finnish</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Finnish"
                            id="ethnicsFinnish"
                            value="Finnish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsFrench">French</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_French"
                            id="ethnicsFrench"
                            value="French"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsGerman">German</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_German"
                            id="ethnicsGerman"
                            value="German"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsGreek">Greek</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Greek"
                            id="ethnicsGreek"
                            value="Greek"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsHispanic">Hispanic</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Hispanic"
                            id="ethnicsHispanic"
                            value="Hispanic"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsHungarian">Hungarian</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Hungarian"
                            id="ethnicsHungarian"
                            value="Hungarian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsIndian">Indian</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Indian"
                            id="ethnicsIndian"
                            value="Indian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsIrish">Irish</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Irish"
                            id="ethnicsIrish"
                            value="Irish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsItalian">Italian</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Italian"
                            id="ethnicsItalian"
                            value="Italian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsJapanese">Japanese</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Japanese"
                            id="ethnicsJapanese"
                            value="Japanese"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsJewish">Jewish</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Jewish"
                            id="ethnicsJewish"
                            value="Jewish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsKorean">Korean</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Korean"
                            id="ethnicsKorean"
                            value="Korean"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsNorwegian">Norwegian</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Norwegian"
                            id="ethnicsNorwegian"
                            value="Norwegian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsPolish">Polish</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Polish"
                            id="ethnicsPolish"
                            value="Polish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsRomanian">Romanian</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Romanian"
                            id="ethnicsRomanian"
                            value="Romanian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsRussian">Russian</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Russian"
                            id="ethnicsRussian"
                            value="Russian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsScotch">Scotch</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Scotch"
                            id="ethnicsScotch"
                            value="Scotch"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsSlovakian">Slovakian</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Slovakian"
                            id="ethnicsSlovakian"
                            value="Slovakian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsSlovenian">Slovenian</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Slovenian"
                            id="ethnicsSlovenian"
                            value="Slovenian"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsSwedish">Swedish</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Swedish"
                            id="ethnicsSwedish"
                            value="Swedish"
                        />
                    </div>
                    <div>
                        <label htmlFor="ethnicsTaiwanese">Taiwanese</label>{" "}
                        <input 
                            onChange={handleCheckChange}
                            type="checkbox"
                            name="ethnics_Taiwanese"
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
