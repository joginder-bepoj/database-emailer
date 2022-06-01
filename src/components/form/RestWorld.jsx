import React from "react";

const RestWorld = () => {
    return (
        <div>
            <div id="theWorld" className="world" >
                <h2 style={{textDecoration: "none", color: "black", textShadow: "none"}}>The World Minus the US and Canada</h2>
                <fieldset id="fsCountries">
                    <legend>Select Your Country</legend>
                    <h4>Clicking on the name of a country will check its box too.</h4>
                    <table
                        width="100%"
                        cellPadding="0"
                        cellSpacing="0"
                        id="tblCountries"
                        className="stateLabel"
                    >
                        <tbody>
                        <tr valign="top">
                            <td width="34%" className="tdCountries  tdBlock" valign="top">
                                <h2 style={{textDecoration: "none", color: "black", textShadow: "none"}}>Europe</h2>
                                <div
                                    className="stateLabel flex-row tblCountry"
                                    id="divEurope"
                                    style={{width:"99%"}}
                                >
                                    <div>
                                        <label htmlFor="countries_AL">Albania</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[1]"
                                            id="countries_AL"
                                            value="AL"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_AD">Andorra</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[2]"
                                            id="countries_AD"
                                            value="AD"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_AM">Armenia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[3]"
                                            id="countries_AM"
                                            value="AM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_AT">Austria</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[4]"
                                            id="countries_AT"
                                            value="AT"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BY">Belarus</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[5]"
                                            id="countries_BY"
                                            value="BY"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BE">Belgium</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[6]"
                                            id="countries_BE"
                                            value="BE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BA">Bosnia-Herzegovina</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[7]"
                                            id="countries_BA"
                                            value="BA"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BG">Bulgaria</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[8]"
                                            id="countries_BG"
                                            value="BG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CV">Cape Verde</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[9]"
                                            id="countries_CV"
                                            value="CV"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_HR">Croatia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[10]"
                                            id="countries_HR"
                                            value="HR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CY">Cyprus</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[11]"
                                            id="countries_CY"
                                            value="CY"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CZ">Czech Republic</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[12]"
                                            id="countries_CZ"
                                            value="CZ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_DK">Denmark</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[13]"
                                            id="countries_DK"
                                            value="DK"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_EE">Estonia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[14]"
                                            id="countries_EE"
                                            value="EE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_FO">Faroe Islands</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[15]"
                                            id="countries_FO"
                                            value="FO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_FI">Finland</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[16]"
                                            id="countries_FI"
                                            value="FI"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_FR">France</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[17]"
                                            id="countries_FR"
                                            value="FR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GE">Georgia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[18]"
                                            id="countries_GE"
                                            value="GE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_DE">Germany</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[19]"
                                            id="countries_DE"
                                            value="DE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GI">Gibraltar</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[20]"
                                            id="countries_GI"
                                            value="GI"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GR">Greece</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[21]"
                                            id="countries_GR"
                                            value="GR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GL">Greenland</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[22]"
                                            id="countries_GL"
                                            value="GL"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_HU">Hungary</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[23]"
                                            id="countries_HU"
                                            value="HU"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_IS">Iceland</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[24]"
                                            id="countries_IS"
                                            value="IS"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_IE">Ireland</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[25]"
                                            id="countries_IE"
                                            value="IE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_IT">Italy</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[26]"
                                            id="countries_IT"
                                            value="IT"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_LV">Latvia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[27]"
                                            id="countries_LV"
                                            value="LV"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_LI">Liechtenstein</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[28]"
                                            id="countries_LI"
                                            value="LI"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_LT">Lithuania</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[29]"
                                            id="countries_LT"
                                            value="LT"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_LU">Luxembourg</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[30]"
                                            id="countries_LU"
                                            value="LU"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MK">Macedonia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[31]"
                                            id="countries_MK"
                                            value="MK"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MT">Malta</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[32]"
                                            id="countries_MT"
                                            value="MT"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MD">Moldova</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[33]"
                                            id="countries_MD"
                                            value="MD"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MC">Monaco</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[34]"
                                            id="countries_MC"
                                            value="MC"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MS">Montserrat</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[35]"
                                            id="countries_MS"
                                            value="MS"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NL">Netherlands</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[36]"
                                            id="countries_NL"
                                            value="NL"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NF">Norfolk Island</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[37]"
                                            id="countries_NF"
                                            value="NF"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NO">Norway</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[38]"
                                            id="countries_NO"
                                            value="NO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_PL">Poland</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[39]"
                                            id="countries_PL"
                                            value="PL"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_PT">Portugal</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[40]"
                                            id="countries_PT"
                                            value="PT"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_RO">Romania</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[41]"
                                            id="countries_RO"
                                            value="RO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_RU">Russia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[42]"
                                            id="countries_RU"
                                            value="RU"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SM">San Marino</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[43]"
                                            id="countries_SM"
                                            value="SM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_YU">Serbia &amp; Montenegro</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[44]"
                                            id="countries_YU"
                                            value="YU"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SK">Slovakia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[45]"
                                            id="countries_SK"
                                            value="SK"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SI">Slovenia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[46]"
                                            id="countries_SI"
                                            value="SI"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_ES">Spain</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[47]"
                                            id="countries_ES"
                                            value="ES"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SJ">Svalbard Jan Mayen Island</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[48]"
                                            id="countries_SJ"
                                            value="SJ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SE">Sweden</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[49]"
                                            id="countries_SE"
                                            value="SE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CH">Switzerland</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[50]"
                                            id="countries_CH"
                                            value="CH"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_UA">Ukraine</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[51]"
                                            id="countries_UA"
                                            value="UA"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_UK">United Kingdom</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[52]"
                                            id="countries_UK"
                                            value="UK"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_VA">Vatican City</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[53]"
                                            id="countries_VA"
                                            value="VA"
                                        />
                                    </div>{" "}
                                </div>
                                <hr />
                                <h2 style={{textDecoration: "none", color: "black", textShadow: "none"}}>Pacific Islands</h2>
                                <div
                                    className="stateLabel flex-row tblCountry"
                                    id="divPacific"
                                    style={{width:"99%"}}
                                >
                                    <div>
                                        <label htmlFor="countries_IO">
                                            British Indian Ocean Territory
                                        </label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[1]"
                                            id="countries_IO"
                                            value="IO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CX">Christmas Islands</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[2]"
                                            id="countries_CX"
                                            value="CX"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CC">Cocos Island</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[3]"
                                            id="countries_CC"
                                            value="CC"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_KM">Comoros</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[4]"
                                            id="countries_KM"
                                            value="KM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CK">Cook Islands</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[5]"
                                            id="countries_CK"
                                            value="CK"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TP">East Timor</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[6]"
                                            id="countries_TP"
                                            value="TP"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_FJ">Fiji</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[7]"
                                            id="countries_FJ"
                                            value="FJ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_PF">French Polynesia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[8]"
                                            id="countries_PF"
                                            value="PF"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TF">French Sthrn Territories</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[9]"
                                            id="countries_TF"
                                            value="TF"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_KI">Kiribati</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[10]"
                                            id="countries_KI"
                                            value="KI"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MV">Maldives</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[11]"
                                            id="countries_MV"
                                            value="MV"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NR">Nauru</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[12]"
                                            id="countries_NR"
                                            value="NR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NC">New Caledonia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[13]"
                                            id="countries_NC"
                                            value="NC"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NU">Niue</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[14]"
                                            id="countries_NU"
                                            value="NU"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NF">Norfolk Island</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[15]"
                                            id="countries_NF"
                                            value="NF"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_PG">Papua New Guinea</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[16]"
                                            id="countries_PG"
                                            value="PG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_PN">Pitcairn Island</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[17]"
                                            id="countries_PN"
                                            value="PN"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_RE">Reunion</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[18]"
                                            id="countries_RE"
                                            value="RE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_WS">Samoa</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[19]"
                                            id="countries_WS"
                                            value="WS"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SC">Seychelles</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[20]"
                                            id="countries_SC"
                                            value="SC"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SB">Soloman Islands</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[21]"
                                            id="countries_SB"
                                            value="SB"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TO">Tonga</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[22]"
                                            id="countries_TO"
                                            value="TO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TV">Tuvalu</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[23]"
                                            id="countries_TV"
                                            value="TV"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_UM">
                                            U.S. Minor Outlying Islands
                                        </label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[24]"
                                            id="countries_UM"
                                            value="UM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_VU">Vanuatu</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[25]"
                                            id="countries_VU"
                                            value="VU"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_WF">
                                            Wallis &amp; Futunu Islands
                                        </label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[26]"
                                            id="countries_WF"
                                            value="WF"
                                        />
                                    </div>{" "}
                                </div>
                                <hr />
                                <h2 style={{textDecoration: "none", color: "black", textShadow: "none"}}>Australia, New Zealand, Islands too</h2>
                                <div
                                    className="stateLabel flex-row tblCountry"
                                    id="divEurope"
                                    style={{width:"99%"}}
                                >
                                    <div>
                                        <label htmlFor="countries_AU">Australia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[1]"
                                            id="countries_AU"
                                            value="AU"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_HM">
                                            Heard &amp; McDonald Islands
                                        </label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[2]"
                                            id="countries_HM"
                                            value="HM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NZ">New Zealand</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[3]"
                                            id="countries_NZ"
                                            value="NZ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TK">Tokelau</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[4]"
                                            id="countries_TK"
                                            value="TK"
                                        />
                                    </div>{" "}
                                </div>
                            </td>
                            <td width="33%" className="tdCountries tdBlock" valign="top">
                                <h2 style={{textDecoration: "none", color: "black", textShadow: "none"}}>Asia Mainland</h2>
                                <div
                                    className="stateLabel flex-row tblCountry"
                                    id="divAsia"
                                    style={{width:"99%"}}
                                >
                                    <div>
                                        <label htmlFor="countries_AF">Afghanistan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[1]"
                                            id="countries_AF"
                                            value="AF"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_AZ">Azerbaijan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[2]"
                                            id="countries_AZ"
                                            value="AZ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BD">Bangladesh</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[3]"
                                            id="countries_BD"
                                            value="BD"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BH">Bahrain</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[4]"
                                            id="countries_BH"
                                            value="BH"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BT">Bhutan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[5]"
                                            id="countries_BT"
                                            value="BT"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BN">Brunei Darussalam</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[6]"
                                            id="countries_BN"
                                            value="BN"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_KH">Cambodia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[7]"
                                            id="countries_KH"
                                            value="KH"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CN">China</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[8]"
                                            id="countries_CN"
                                            value="CN"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GZ">Gaza Strip</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[9]"
                                            id="countries_GZ"
                                            value="GZ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_HK">Hong Kong</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[10]"
                                            id="countries_HK"
                                            value="HK"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_IN">India</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[11]"
                                            id="countries_IN"
                                            value="IN"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_ID">Indonesia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[12]"
                                            id="countries_ID"
                                            value="ID"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_IL">Israel</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[13]"
                                            id="countries_IL"
                                            value="IL"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_JP">Japan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[14]"
                                            id="countries_JP"
                                            value="JP"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_JO">Jordan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[15]"
                                            id="countries_JO"
                                            value="JO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_KZ">Kazakhstan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[16]"
                                            id="countries_KZ"
                                            value="KZ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_KW">Kuwait</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[17]"
                                            id="countries_KW"
                                            value="KW"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_KG">Kyrgyzstan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[18]"
                                            id="countries_KG"
                                            value="KG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_LA">Laos</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[19]"
                                            id="countries_LA"
                                            value="LA"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_LB">Lebanon</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[20]"
                                            id="countries_LB"
                                            value="LB"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MO">Macau</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[21]"
                                            id="countries_MO"
                                            value="MO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MY">Malaysia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[22]"
                                            id="countries_MY"
                                            value="MY"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MN">Mongolia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[23]"
                                            id="countries_MN"
                                            value="MN"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MM">Myanmar</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[24]"
                                            id="countries_MM"
                                            value="MM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NP">Nepal</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[25]"
                                            id="countries_NP"
                                            value="NP"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_OM">Oman</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[26]"
                                            id="countries_OM"
                                            value="OM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_QA">Qatar</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[27]"
                                            id="countries_QA"
                                            value="QA"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_PH">Philippines</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[28]"
                                            id="countries_PH"
                                            value="PH"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_PK">Pakistan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[29]"
                                            id="countries_PK"
                                            value="PK"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SA">Saudi Arabia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[30]"
                                            id="countries_SA"
                                            value="SA"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SG">Singapore</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[31]"
                                            id="countries_SG"
                                            value="SG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_KR">South Korea</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[32]"
                                            id="countries_KR"
                                            value="KR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_LK">Sri Lanka</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[33]"
                                            id="countries_LK"
                                            value="LK"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TW">Taiwan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[34]"
                                            id="countries_TW"
                                            value="TW"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TJ">Tajikistan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[35]"
                                            id="countries_TJ"
                                            value="TJ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TH">Thailand</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[36]"
                                            id="countries_TH"
                                            value="TH"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TR">Turkey</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[37]"
                                            id="countries_TR"
                                            value="TR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TM">Turkmenistan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[38]"
                                            id="countries_TM"
                                            value="TM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_AE">United Arab Emirates</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[39]"
                                            id="countries_AE"
                                            value="AE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_UZ">Uzbekistan</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[40]"
                                            id="countries_UZ"
                                            value="UZ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_YE">Yemen, Republic Of</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[41]"
                                            id="countries_YE"
                                            value="YE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_WE">West Bank</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[42]"
                                            id="countries_WE"
                                            value="WE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_VN">Vietnam</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[43]"
                                            id="countries_VN"
                                            value="VN"
                                        />
                                    </div>{" "}
                                </div>
                                <hr />
                                <h2 style={{textDecoration: "none", color: "black", textShadow: "none"}}>Africa</h2>
                                <div
                                    className="stateLabel flex-row tblCountry"
                                    id="divAfrica"
                                    style={{width:"99%"}}
                                >
                                    <div>
                                        <label htmlFor="countries_DZ">Algeria</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[1]"
                                            id="countries_DZ"
                                            value="DZ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_AO">Angola</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[2]"
                                            id="countries_AO"
                                            value="AO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_AI">Anguilla</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[3]"
                                            id="countries_AI"
                                            value="AI"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BJ">Benin</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[4]"
                                            id="countries_BJ"
                                            value="BJ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BW">Botswana</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[5]"
                                            id="countries_BW"
                                            value="BW"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BF">Burkina Faso</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[6]"
                                            id="countries_BF"
                                            value="BF"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BI">Burundi</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[7]"
                                            id="countries_BI"
                                            value="BI"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CM">Cameroon</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[8]"
                                            id="countries_CM"
                                            value="CM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CF">Central African Republic</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[9]"
                                            id="countries_CF"
                                            value="CF"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TD">Chad</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[10]"
                                            id="countries_TD"
                                            value="TD"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CG">Congo (Brazzaville)</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[11]"
                                            id="countries_CG"
                                            value="CG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CD">Congo, Dem. Republic Of</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[12]"
                                            id="countries_CD"
                                            value="CD"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_DJ">Djibouti</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[13]"
                                            id="countries_DJ"
                                            value="DJ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_EG">Egypt</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[14]"
                                            id="countries_EG"
                                            value="EG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GQ">Equatorial Guinea</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[15]"
                                            id="countries_GQ"
                                            value="GQ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_ER">Eritrea</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[16]"
                                            id="countries_ER"
                                            value="ER"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_ET">Ethiopia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[17]"
                                            id="countries_ET"
                                            value="ET"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GA">Gabon</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[18]"
                                            id="countries_GA"
                                            value="GA"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GM">Gambia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[19]"
                                            id="countries_GM"
                                            value="GM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GH">Ghana</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[20]"
                                            id="countries_GH"
                                            value="GH"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GN">Guinea</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[21]"
                                            id="countries_GN"
                                            value="GN"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GW">Guinea-Bissau</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[22]"
                                            id="countries_GW"
                                            value="GW"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CI">Ivory Coast</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[23]"
                                            id="countries_CI"
                                            value="CI"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_KE">Kenya</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[24]"
                                            id="countries_KE"
                                            value="KE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_LS">Lesotho</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[25]"
                                            id="countries_LS"
                                            value="LS"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_LR">Liberia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[26]"
                                            id="countries_LR"
                                            value="LR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MG">Madagascar</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[27]"
                                            id="countries_MG"
                                            value="MG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MW">Malawi</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[28]"
                                            id="countries_MW"
                                            value="MW"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_ML">Mali</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[29]"
                                            id="countries_ML"
                                            value="ML"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MR">Mauritania</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[30]"
                                            id="countries_MR"
                                            value="MR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MU">Mauritius</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[31]"
                                            id="countries_MU"
                                            value="MU"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_YT">Mayotte</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[32]"
                                            id="countries_YT"
                                            value="YT"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MA">Morocco</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[33]"
                                            id="countries_MA"
                                            value="MA"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MZ">Mozambique</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[34]"
                                            id="countries_MZ"
                                            value="MZ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NA">Namibia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[35]"
                                            id="countries_NA"
                                            value="NA"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NE">Niger</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[36]"
                                            id="countries_NE"
                                            value="NE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NG">Nigeria</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[37]"
                                            id="countries_NG"
                                            value="NG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_ST">Sao Tome &amp; Principe</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[38]"
                                            id="countries_ST"
                                            value="ST"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SN">Senegal</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[39]"
                                            id="countries_SN"
                                            value="SN"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SL">Sierra Leone</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[40]"
                                            id="countries_SL"
                                            value="SL"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SO">Somalia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[41]"
                                            id="countries_SO"
                                            value="SO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_ZA">South Africa</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[42]"
                                            id="countries_ZA"
                                            value="ZA"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SZ">Swaziland</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[43]"
                                            id="countries_SZ"
                                            value="SZ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TZ">Tanzania</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[44]"
                                            id="countries_TZ"
                                            value="TZ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TG">Togo</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[45]"
                                            id="countries_TG"
                                            value="TG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TN">Tunisia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[46]"
                                            id="countries_TN"
                                            value="TN"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_UG">Uganda</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[47]"
                                            id="countries_UG"
                                            value="UG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_EH">Western Sahara</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[48]"
                                            id="countries_EH"
                                            value="EH"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_ZM">Zambia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[49]"
                                            id="countries_ZM"
                                            value="ZM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_ZW">Zimbabwe</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[50]"
                                            id="countries_ZW"
                                            value="ZW"
                                        />
                                    </div>{" "}
                                </div>
                            </td>
                            <td
                                width="33%"
                                className="tdCountries tdBlock"
                                style={{borderRightWidth:"0px"}}
                                valign="top"
                            >
                                <h2 style={{textDecoration: "none", color: "black", textShadow: "none"}}>South America</h2>
                                <div
                                    className="stateLabel flex-row tblCountry"
                                    id="divSA"
                                    style={{width:"99%"}}
                                >
                                    <div>
                                        <label htmlFor="countries_AR">Argentina</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[1]"
                                            id="countries_AR"
                                            value="AR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BO">Bolivia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[2]"
                                            id="countries_BO"
                                            value="BO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BR">Brazil</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[3]"
                                            id="countries_BR"
                                            value="BR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CL">Chile</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[4]"
                                            id="countries_CL"
                                            value="CL"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CO">Colombia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[5]"
                                            id="countries_CO"
                                            value="CO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_EC">Ecuador</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[6]"
                                            id="countries_EC"
                                            value="EC"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_FK">Falkland Islands</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[7]"
                                            id="countries_FK"
                                            value="FK"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GF">French Guiana</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[8]"
                                            id="countries_GF"
                                            value="GF"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_PY">Paraguay</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[9]"
                                            id="countries_PY"
                                            value="PY"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_PE">Peru</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[10]"
                                            id="countries_PE"
                                            value="PE"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_UY">Uruguay</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[11]"
                                            id="countries_UY"
                                            value="UY"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_VE">Venezuela</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[12]"
                                            id="countries_VE"
                                            value="VE"
                                        />
                                    </div>{" "}
                                </div>
                                <hr />
                                <h2 style={{textDecoration: "none", color: "black", textShadow: "none"}}>Central America + Caribbean Islands</h2>
                                <div
                                    className="stateLabel flex-row tblCountry"
                                    id="divCaribCA"
                                    style={{width:"99%"}}
                                >
                                    <div>
                                        <label htmlFor="countries_AG">Antigua &amp; Barduba</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[1]"
                                            id="countries_AG"
                                            value="AG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_AW">Aruba</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[2]"
                                            id="countries_AW"
                                            value="AW"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BS">Bahamas</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[3]"
                                            id="countries_BS"
                                            value="BS"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BB">Barbados</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[4]"
                                            id="countries_BB"
                                            value="BB"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BZ">Belize</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[5]"
                                            id="countries_BZ"
                                            value="BZ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_BM">Bermuda</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[6]"
                                            id="countries_BM"
                                            value="BM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_VG">British Virgin Islands</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[7]"
                                            id="countries_VG"
                                            value="VG"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_KY">Cayman Islands</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[8]"
                                            id="countries_KY"
                                            value="KY"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_CR">Costa Rica</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[9]"
                                            id="countries_CR"
                                            value="CR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_DM">Dominica</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[10]"
                                            id="countries_DM"
                                            value="DM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_DO">Dominican Republic</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[11]"
                                            id="countries_DO"
                                            value="DO"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SV">El Salvador</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[12]"
                                            id="countries_SV"
                                            value="SV"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GD">Grenada</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[13]"
                                            id="countries_GD"
                                            value="GD"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GP">Guadeloupe</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[14]"
                                            id="countries_GP"
                                            value="GP"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GT">Guatemala</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[15]"
                                            id="countries_GT"
                                            value="GT"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_GY">Guyana</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[16]"
                                            id="countries_GY"
                                            value="GY"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_HT">Haiti</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[17]"
                                            id="countries_HT"
                                            value="HT"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_HN">Honduras</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[18]"
                                            id="countries_HN"
                                            value="HN"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_JM">Jamaica</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[19]"
                                            id="countries_JM"
                                            value="JM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MQ">Martinique</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[20]"
                                            id="countries_MQ"
                                            value="MQ"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_ME">Mexico</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[21]"
                                            id="countries_ME"
                                            value="ME"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_MS">Montserrat</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[22]"
                                            id="countries_MS"
                                            value="MS"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_AN">Netherlands Antilles</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[23]"
                                            id="countries_AN"
                                            value="AN"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_NI">Nicaragua</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[24]"
                                            id="countries_NI"
                                            value="NI"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_PA">Panama</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[25]"
                                            id="countries_PA"
                                            value="PA"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_LC">Saint Lucia</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[26]"
                                            id="countries_LC"
                                            value="LC"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_VC">St Vincent And Grenadines</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[27]"
                                            id="countries_VC"
                                            value="VC"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SH">St. Helena</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[28]"
                                            id="countries_SH"
                                            value="SH"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_KN">St. Kitts &amp; Nevis</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[29]"
                                            id="countries_KN"
                                            value="KN"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_PM">St. Pierre And Miquelon</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[30]"
                                            id="countries_PM"
                                            value="PM"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_SR">Suriname</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[31]"
                                            id="countries_SR"
                                            value="SR"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TT">Trinidad And Tobago</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[32]"
                                            id="countries_TT"
                                            value="TT"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="countries_TC">Turks And Caicos Islands</label>{" "}
                                        <input
                                            type="checkbox"
                                            name="countries[33]"
                                            id="countries_TC"
                                            value="TC"
                                        />
                                    </div>{" "}
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
                <hr />
                <fieldset>
                    <legend>Search By City Names</legend>
                    <div>
                        Use the Postal Code(s) specific to a City within a particular
                        Country for the Best Results
                    </div>
                    <textarea
                        name="taCities"
                        id="taCities"
                        style={{height: "165px", width:"90%"}}
                    ></textarea>
                </fieldset>
                <hr />
                <fieldset>
                    <legend>Search By Postal Codes</legend>
                    <div align="center">Enter Your Postal Codes, SEPARATED BY COMMAS</div>
                    <textarea
                        name="taPOSTALCODES"
                        id="taPOSTALCODES"
                        style={{height:"165px", width:"90%"}}
                    ></textarea>
                </fieldset>
                <hr />
                <fieldset className="stateLabel">
                    <legend>Telephone Numbers Search: (Optional)</legend>
                    <span className="">
                        Start your number with Country Code first, then enter nothing but
                        numbers or digits. Enter at least 2 digits{" "}
                    </span>
                    <hr />
                    <textarea
                        name="taPhones"
                        id="taPhones"
                        style={{width:"90%", height:"130px"}}
                        placeholder="foreign phone numbers"
                    ></textarea>
                </fieldset>
            </div>
        </div>
    );
};

export default RestWorld;
