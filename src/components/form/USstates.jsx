import React, { useState } from "react";
import { states, provinces, countiesAR, countiesAZ } from "./usStatesvalue";
import { useStateContext } from "../context/StateContext";

const USstates = () => {
  const { selectCountry, setSelectCounty, setTextData, textData, setSCF } =
    useStateContext();
  const [show, setShow] = useState(true);

  const selectCountyChange = (event) => {
    setSelectCounty(event.target.value);
  };
  const handleDataChange = (e) => {
    setTextData({ ...textData, [e.target.name]: e.target.value });
  };
  const selectSCF = (e) => {
    setSCF(e.target.value);
  };

  return (
    <>
      <fieldset>
        <legend>Search By US States and/or Canadian Provinces</legend>
        <h5>US States</h5>
        <div
          className="stateLabel flex-row"
          id="USStates"
          style={{ width: "95%" }}
        >
          {states.map((states) => (
            <div key={states.value}>
              <label htmlFor={states.name}>{states.name}</label>
              <input
                type="checkbox"
                name={states.name}
                id={states.name}
                className="sc"
                value={states.value}
                disabled={selectCountry !== "none"}
              />
            </div>
          ))}
        </div>
        <hr />
        <h5>Canadian Provinces</h5>
        <div
          className="stateLabel flex-row"
          id="CanProv"
          style={{ width: "95%" }}
        >
          {provinces.map((provinces) => (
            <div key={provinces.value}>
              <label htmlFor={provinces.name}>{provinces.name}</label>
              <input
                type="checkbox"
                name={provinces.name}
                id={provinces.name}
                className="sc"
                value={provinces.value}
                disabled={selectCountry !== "none"}
              />
            </div>
          ))}
        </div>
      </fieldset>
      <fieldset id="counties">
        <legend>Search By US Counties</legend>
        {show ? (
          <table
            width="100%"
            cellPadding="1"
            cellSpacing="0"
            className="tdBlock"
          >
            <tbody>
              <tr>
                <td width="60%" align="left">
                  <div className="tab33">
                    <span className="twefont" style={{ fontSize: "13px" }}>
                      Select one or more US STATES FIRST, then click right
                      button for all the counties, <i>Not valid for Canada.</i>
                    </span>
                    <br />
                    <span className="twefont">
                      Avoid the following "Counties" search option if you are
                      searching for a specific State, Country or just one or a
                      few Municipalities within a State.
                    </span>
                    <br />
                  </div>
                </td>
                <td width="40%">
                  <span id="St"></span>
                  <br />
                  <input
                    type="submit"
                    name="SelectCounties"
                    id="SelectCounties"
                    className="sc"
                    onClick={(prev) => setShow(!prev)}
                    value="Search By Counties"
                    title="Brings Up Counties in a State or states, But select at least one state first! Or alt-v"
                  />
                  <input type="hidden" name="Counties" id="Counties" value="" />
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <>
            <div style={{ fontSize: "13pt" }} align="center">
              Select a County
            </div>
            <span style={{ fontSize: "11pt", verticalAlign: "top" }}>
              All Counties in <span id="St">AZ, AR, NB, YT</span>:
            </span>
            <select
              name="Counties[]"
              id="Counties"
              onchange="LockoutBoxes(this.value);"
              size="10"
              multiple="multiple"
              onChange={selectCountyChange}
            >
              <option
                value=""
                style={{ color: "#FFF", backgroundColor: "blue" }}
              >
                Select Counties
              </option>
              <optgroup label="Counties in AZ">
                {countiesAZ.map((counties) => (
                  <option value={counties.value} key={counties.name}>
                    {counties.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Counties in AR">
                {countiesAR.map((counties) => (
                  <option value={counties.value} key={counties.name}>
                    {counties.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </>
        )}
        <br />
        <span style={{ fontSize: "8pt" }}>
          (<b>NOTE</b>, selecting a county name will prevent you from searching
          by city, radius or zip. Hold the Control key down to select more than
          one county)
        </span>
        <input type="hidden" name="stCheck" id="stCheck" value="Array" />
      </fieldset>
      <hr />

      <fieldset>
        <legend>Search By City Names</legend>
        <table width="100%" cellPadding="1" cellSpacing="1" className="tdBlock">
          <tbody>
            <tr valign="top">
              <td width="50%">
                <span>
                  City names that are common to multiple States will give you
                  the data count for each City in every State selected. Also,
                  city name spellings are not consistent and the USPS city/town
                  names do not always jibe with the actual town the resident is
                  in, especially in sparsely populated rural areas. Zip codes
                  &amp; county names are a lot more accurate way to get the
                  right geographical matches..
                </span>
              </td>
              <td width="50%">
                <textarea
                  name="taCities"
                  id="taCities"
                  rows="5"
                  cols="50"
                  onChange={handleDataChange}
                ></textarea>
                <br />
                Separate the city names with commas, spaces...
                <input
                  onChange={handleDataChange}
                  type="hidden"
                  name="boolCounty"
                  id="boolCounty"
                  value="1"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h4>
          Use the Zip Codes or SCF Codes specific to the City and it's
          Metropolitan area for the Best Results.
        </h4>
      </fieldset>

      <hr />
      <fieldset>
        <legend>Search By US Zip Codes</legend>
        <div id="divZip">
          <span style={{ fontSize: "13pt" }}>
            <b>Choose Only One Zip Code Option from Below:</b>
          </span>
          <hr />
          <b className="redtextbold2">Zip Code Options l &amp; ll:</b>
          <div align="center" style={{ fontSize: "15pt", fontWeight: "600" }}>
            Input Individual 5-digit US Zip Codes
          </div>
          <div id="zips">
            <h3>Paste Your Zip Codes Here</h3>
            The zip codes can be separated by spaces or any non numeric
            character like a comma. All non-numeric characters will be stripped
            out. Only the first 5 digits of the zip code are used. There is a
            25000 character limit.
            <br />
            <textarea
              name="taZIPS"
              id="taZIPS"
              style={{ height: "165px", width: "90%" }}
              onChange={handleDataChange}
            ></textarea>
            <hr />
            <span style={{ fontSize: "13px" }} className="redtext">
              <b>Sub-Option I</b>
            </span>
            <br />
            <label htmlFor="zipCondition_included" className="twefont">
              <b>INCLUDE ONLY</b> the Zip Codes entered below and all the rest
              will be EXCLUDED
            </label>{" "}
            <input
              type="radio"
              name="zipCondition"
              title="Do you want only these zips to be included"
              id="zipCondition_included"
              value="0"
              defaultChecked
            />
            <br />
            <input
              type="checkbox"
              name="chkGroupBy"
              id="chkGroupBy"
              value="1"
              title="If you are selecting more than one zip code you will be given just one total of all the zip codes selected. If you must have the record count for each zip code selected, this is possible, however your search will take about 3 times longer than with just one total. If you need record count break down by zip check this box:"
            />
            <label className="elevfont" htmlFor="chkGroupBy">
              <b>
                Check this box for results grouped by Zip Code | For INCLUDE
                ONLY
              </b>
            </label>
            <br />
            <span style={{ fontSize: "13px" }} className="redtext">
              {" "}
              <b>Sub-Option II</b>
            </span>
            <br />
            <label htmlFor="zipCondition_excluded" className="twefont">
              <b>EXCLUDE ONLY</b> the Zip Codes entered below and all the rest
              will be INCLUDED
            </label>{" "}
            <input
              type="radio"
              title="Do you want only these zips to be excluded "
              name="zipCondition"
              id="zipCondition_excluded"
              value="1"
            />
          </div>
          <hr />
          <div className="floatleft" id="SCF" align="left">
            <b className="redtextbold2">Zip Code Option lll:</b>
            <h4>United States Zip Code Based SCF Look Up</h4>
            Will Find all the Zip Codes in a region based on the first three
            numbers of the Zip Code, like '011' will give you all the zips in
            the Springfield Mass area. The US Census Population of the SCF
            region is the last number.
            <br />
            Selecting an SCF will exclude all Canadian Data
            <br />
            <select
              name="selSCF[]"
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
                <option value="995">995 | ANCHORAGE, AK | 132,479</option>
                <option value="997">997 | FAIRBANKS, AK | 46,073</option>
                <option value="996">996 | HOLY CROSS, AK | 60,781</option>
                <option value="998">998 | JUNEAU, AK | 22,659</option>
                <option value="999">999 | KETCHIKAN, AK | 9,191</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Alabama" className="optGroupSCF">
                <option value="365">365 | ALMA, AL | 152,348</option>
                <option value="362">362 | ANNISTON, AL | 80,150</option>
                <option value="357">357 | ARDMORE, AL | 96,335</option>
                <option value="360">360 | AUTAUGAVILLE, AL | 120,362</option>
                <option value="369">369 | BELLAMY, AL | 8,941</option>
                <option value="352">352 | BIRMINGHAM, AL | 203,923</option>
                <option value="356">356 | DECATUR, AL | 157,138</option>
                <option value="363">363 | DOTHAN, AL | 100,854</option>
                <option value="364">364 | EVERGREEN, AL | 46,570</option>
                <option value="359">359 | GADSDEN, AL | 119,794</option>
                <option value="358">358 | HUNTSVILLE, AL | 82,271</option>
                <option value="355">355 | JASPER, AL | 69,136</option>
                <option value="351">351 | MC CALLA, AL | 137,378</option>
                <option value="366">366 | MOBILE, AL | 126,520</option>
                <option value="361">361 | MONTGOMERY, AL | 94,499</option>
                <option value="350">350 | MOODY, AL | 187,831</option>
                <option value="368">368 | OPELIKA, AL | 100,762</option>
                <option value="367">367 | SELMA, AL | 50,771</option>
                <option value="354">354 | TUSCALOOSA, AL | 89,137</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Arkansas" className="optGroupSCF">
                <option value="720">720 | ADONA, AR | 155,697</option>
                <option value="725">725 | BATESVILLE, AR | 45,796</option>
                <option value="717">717 | CAMDEN, AR | 48,291</option>
                <option value="727">727 | FAYETTEVILLE, AR | 169,743</option>
                <option value="729">729 | FORT SMITH, AR | 87,337</option>
                <option value="726">726 | HARRISON, AR | 62,515</option>
                <option value="718">718 | HOPE, AR | 51,440</option>
                <option value="719">
                  719 | HOT SPRINGS NATIONAL PARK, AR | 78,573
                </option>
                <option value="724">724 | JONESBORO, AR | 88,232</option>
                <option value="722">722 | LITTLE ROCK, AR | 100,911</option>
                <option value="721">721 | MC CRORY, AR | 134,942</option>
                <option value="716">716 | PINE BLUFF, AR | 72,005</option>
                <option value="728">728 | RUSSELLVILLE, AR | 47,274</option>
                <option value="723">723 | WEST MEMPHIS, AR | 75,445</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Arizona" className="optGroupSCF">
                <option value="851">851 | APACHE JUNCTION, AZ | 115,605</option>
                <option value="856">856 | ARIVACA, AZ | 107,165</option>
                <option value="865">865 | CHAMBERS, AZ | 9,955</option>
                <option value="860">860 | FLAGSTAFF, AZ | 48,866</option>
                <option value="853">853 | GLENDALE, AZ | 442,785</option>
                <option value="855">855 | GLOBE, AZ | 31,098</option>
                <option value="864">864 | KINGMAN, AZ | 76,633</option>
                <option value="852">852 | MESA, AZ | 528,472</option>
                <option value="850">850 | PHOENIX, AZ | 440,267</option>
                <option value="863">863 | PRESCOTT, AZ | 89,508</option>
                <option value="859">859 | SHOW LOW, AZ | 24,104</option>
                <option value="857">857 | TUCSON, AZ | 321,252</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;California" className="optGroupSCF">
                <option value="923">923 | ADELANTO, CA | 381,870</option>
                <option value="913">913 | AGOURA HILLS, CA | 472,650</option>
                <option value="936">936 | AHWAHNEE, CA | 180,050</option>
                <option value="945">945 | ALAMEDA, CA | 874,311</option>
                <option value="918">918 | ALHAMBRA, CA | 29,785</option>
                <option value="932">932 | ALPAUGH, CA | 218,458</option>
                <option value="919">919 | ALPINE, CA | 189,433</option>
                <option value="957">957 | ALTA, CA | 116,272</option>
                <option value="910">910 | ALTADENA, CA | 112,349</option>
                <option value="961">961 | ALTURAS, CA | 42,882</option>
                <option value="956">956 | AMADOR CITY, CA | 452,032</option>
                <option value="928">928 | ANAHEIM, CA | 403,079</option>
                <option value="950">950 | APTOS, CA | 303,733</option>
                <option value="907">907 | ARTESIA, CA | 210,428</option>
                <option value="953">953 | ATWATER, CA | 347,668</option>
                <option value="933">933 | BAKERSFIELD, CA | 171,856</option>
                <option value="902">902 | BELL, CA | 416,258</option>
                <option value="940">940 | BELMONT, CA | 321,207</option>
                <option value="947">947 | BERKELEY, CA | 55,275</option>
                <option value="920">920 | BONSALL, CA | 457,144</option>
                <option value="915">915 | BURBANK, CA | 43,811</option>
                <option value="955">955 | EUREKA, CA | 66,628</option>
                <option value="937">937 | FRESNO, CA | 187,830</option>
                <option value="912">912 | GLENDALE, CA | 73,681</option>
                <option value="922">922 | INDIO, CA | 263,281</option>
                <option value="903">903 | INGLEWOOD, CA | 41,188</option>
                <option value="926">926 | IRVINE, CA | 503,697</option>
                <option value="908">908 | LONG BEACH, CA | 161,293</option>
                <option value="900">900 | LOS ANGELES, CA | 760,465</option>
                <option value="959">959 | MARYSVILLE, CA | 199,323</option>
                <option value="935">935 | MOJAVE, CA | 186,186</option>
                <option value="916">916 | NORTH HOLLYWOOD, CA | 76,604</option>
                <option value="946">946 | OAKLAND, CA | 160,178</option>
                <option value="943">943 | PALO ALTO, CA | 38,834</option>
                <option value="911">911 | PASADENA, CA | 66,865</option>
                <option value="917">
                  917 | RANCHO CUCAMONGA, CA | 621,710
                </option>
                <option value="960">960 | REDDING, CA | 125,745</option>
                <option value="948">948 | RICHMOND, CA | 60,480</option>
                <option value="925">925 | RIVERSIDE, CA | 459,582</option>
                <option value="942">942 | SACRAMENTO, CA | 7</option>
                <option value="958">958 | SACRAMENTO, CA | 299,678</option>
                <option value="939">939 | SALINAS, CA | 121,895</option>
                <option value="924">924 | SAN BERNARDINO, CA | 72,670</option>
                <option value="921">921 | SAN DIEGO, CA | 486,074</option>
                <option value="941">941 | SAN FRANCISCO, CA | 341,436</option>
                <option value="951">951 | SAN JOSE, CA | 344,480</option>
                <option value="934">934 | SAN LUIS OBISPO, CA | 180,083</option>
                <option value="944">944 | SAN MATEO, CA | 53,887</option>
                <option value="949">949 | SAN RAFAEL, CA | 160,609</option>
                <option value="927">927 | SANTA ANA, CA | 144,505</option>
                <option value="931">931 | SANTA BARBARA, CA | 67,039</option>
                <option value="904">904 | SANTA MONICA, CA | 42,042</option>
                <option value="954">954 | SANTA ROSA, CA | 208,074</option>
                <option value="952">952 | STOCKTON, CA | 169,995</option>
                <option value="905">905 | TORRANCE, CA | 63,739</option>
                <option value="914">914 | VAN NUYS, CA | 102,387</option>
                <option value="930">930 | VENTURA, CA | 239,229</option>
                <option value="906">906 | WHITTIER, CA | 236,731</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Colorado" className="optGroupSCF">
                <option value="801">801 | AGATE, CO | 260,719</option>
                <option value="811">811 | ALAMOSA, CO | 27,434</option>
                <option value="808">808 | ANTON, CO | 43,088</option>
                <option value="800">800 | ARVADA, CO | 306,727</option>
                <option value="803">803 | BOULDER, CO | 49,841</option>
                <option value="806">806 | BRIGHTON, CO | 88,229</option>
                <option value="809">
                  809 | COLORADO SPRINGS, CO | 204,361
                </option>
                <option value="802">802 | DENVER, CO | 399,782</option>
                <option value="813">813 | DURANGO, CO | 26,817</option>
                <option value="807">807 | FORT MORGAN, CO | 25,054</option>
                <option value="816">816 | GLENWOOD SPRINGS, CO | 56,697</option>
                <option value="804">804 | GOLDEN, CO | 87,305</option>
                <option value="815">815 | GRAND JUNCTION, CO | 58,720</option>
                <option value="805">805 | LONGMONT, CO | 195,296</option>
                <option value="814">814 | MONTROSE, CO | 34,069</option>
                <option value="810">810 | PUEBLO, CO | 91,290</option>
                <option value="812">812 | SALIDA, CO | 33,693</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Connecticut" className="optGroupSCF">
                <option value="064">064 | ANSONIA, CT | 330,464</option>
                <option value="060">060 | AVON, CT | 311,221</option>
                <option value="068">068 | BETHEL, CT | 202,204</option>
                <option value="066">066 | BRIDGEPORT, CT | 101,715</option>
                <option value="061">061 | HARTFORD, CT | 138,263</option>
                <option value="065">065 | NEW HAVEN, CT | 134,715</option>
                <option value="063">063 | NEW LONDON, CT | 123,546</option>
                <option value="069">069 | STAMFORD, CT | 52,354</option>
                <option value="067">067 | WATERBURY, CT | 154,330</option>
                <option value="062">062 | WILLIMANTIC, CT | 68,329</option>
              </optgroup>
              <optgroup
                label="&nbsp;&nbsp;Dist. of Col."
                className="optGroupSCF"
              >
                <option value="200">200 | WASHINGTON, DC | 252,886</option>
                <option value="203">203 | WASHINGTON, DC | 1</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Delaware" className="optGroupSCF">
                <option value="197">197 | BEAR, DE | 141,151</option>
                <option value="199">199 | DOVER, DE | 168,952</option>
                <option value="198">198 | WILMINGTON, DE | 107,137</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Florida" className="optGroupSCF">
                <option value="327">
                  327 | ALTAMONTE SPRINGS, FL | 390,792
                </option>
                <option value="347">347 | ASTATULA, FL | 244,588</option>
                <option value="321">321 | ASTOR, FL | 253,494</option>
                <option value="335">335 | BALM, FL | 276,168</option>
                <option value="344">344 | BELLEVIEW, FL | 196,808</option>
                <option value="342">342 | BRADENTON, FL | 308,022</option>
                <option value="346">346 | BROOKSVILLE, FL | 288,635</option>
                <option value="320">320 | FLEMING ISLAND, FL | 240,935</option>
                <option value="333">333 | FORT LAUDERDALE, FL | 328,689</option>
                <option value="339">339 | FORT MYERS, FL | 301,930</option>
                <option value="349">349 | FORT PIERCE, FL | 176,018</option>
                <option value="326">326 | GAINESVILLE, FL | 137,304</option>
                <option value="322">322 | JACKSONVILLE, FL | 382,094</option>
                <option value="338">338 | LAKELAND, FL | 271,806</option>
                <option value="330">330 | LONG KEY, FL | 626,852</option>
                <option value="329">329 | MELBOURNE, FL | 269,226</option>
                <option value="331">331 | MIAMI, FL | 725,638</option>
                <option value="332">332 | MIAMI, FL | 6,775</option>
                <option value="341">341 | NAPLES, FL | 134,644</option>
                <option value="328">328 | ORLANDO, FL | 325,563</option>
                <option value="324">324 | PANAMA CITY, FL | 144,977</option>
                <option value="325">325 | PENSACOLA, FL | 270,780</option>
                <option value="337">
                  337 | SAINT PETERSBURG, FL | 304,430
                </option>
                <option value="323">323 | TALLAHASSEE, FL | 165,477</option>
                <option value="336">336 | TAMPA, FL | 275,959</option>
                <option value="334">334 | WEST PALM BEACH, FL | 564,582</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Georgia" className="optGroupSCF">
                <option value="310">310 | ABBEVILLE, GA | 190,367</option>
                <option value="301">301 | ACWORTH, GA | 459,090</option>
                <option value="317">317 | ALBANY, GA | 137,094</option>
                <option value="313">313 | ALLENHURST, GA | 71,091</option>
                <option value="308">308 | APPLING, GA | 72,791</option>
                <option value="398">398 | ARLINGTON, GA | 39,117</option>
                <option value="306">306 | ATHENS, GA | 142,765</option>
                <option value="311">311 | ATLANTA, GA | 2,050</option>
                <option value="303">303 | ATLANTA, GA | 334,296</option>
                <option value="309">309 | AUGUSTA, GA | 80,880</option>
                <option value="300">
                  300 | AVONDALE ESTATES, GA | 846,109
                </option>
                <option value="302">302 | BARNESVILLE, GA | 392,233</option>
                <option value="318">318 | BOX SPRINGS, GA | 30,020</option>
                <option value="307">307 | CALHOUN, GA | 136,230</option>
                <option value="319">319 | COLS, GA | 68,144</option>
                <option value="305">305 | GAINESVILLE, GA | 236,247</option>
                <option value="312">312 | MACON, GA | 61,590</option>
                <option value="314">314 | SAVANNAH, GA | 90,409</option>
                <option value="304">304 | SWAINSBORO, GA | 70,610</option>
                <option value="316">316 | VALDOSTA, GA | 63,427</option>
                <option value="315">315 | WAYCROSS, GA | 120,562</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Hawaii" className="optGroupSCF">
                <option value="967">967 | AIEA, HI | 282,455</option>
                <option value="968">968 | HONOLULU, HI | 129,487</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Iowa" className="optGroupSCF">
                <option value="506">506 | ACKLEY, IA | 67,609</option>
                <option value="500">500 | ACKWORTH, IA | 85,222</option>
                <option value="522">522 | AINSWORTH, IA | 61,022</option>
                <option value="510">510 | AKRON, IA | 37,156</option>
                <option value="527">527 | ANDOVER, IA | 68,080</option>
                <option value="526">526 | BURLINGTON, IA | 44,427</option>
                <option value="514">514 | CARROLL, IA | 20,202</option>
                <option value="524">524 | CEDAR RAPIDS, IA | 52,480</option>
                <option value="515">515 | COUNCIL BLUFFS, IA | 62,648</option>
                <option value="508">508 | CRESTON, IA | 14,331</option>
                <option value="528">528 | DAVENPORT, IA | 38,739</option>
                <option value="521">521 | DECORAH, IA | 24,149</option>
                <option value="503">503 | DES MOINES, IA | 114,223</option>
                <option value="520">520 | DUBUQUE, IA | 57,608</option>
                <option value="505">505 | FORT DODGE, IA | 51,946</option>
                <option value="501">501 | GALT, IA | 69,907</option>
                <option value="523">523 | MARENGO, IA | 62,964</option>
                <option value="504">504 | MASON CITY, IA | 44,988</option>
                <option value="502">502 | NEVADA, IA | 86,917</option>
                <option value="525">525 | OTTUMWA, IA | 46,551</option>
                <option value="512">512 | SHELDON, IA | 16,996</option>
                <option value="516">516 | SHENANDOAH, IA | 10,239</option>
                <option value="511">511 | SIOUX CITY, IA | 32,950</option>
                <option value="513">513 | SPENCER, IA | 21,327</option>
                <option value="507">507 | WATERLOO, IA | 32,465</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Idaho" className="optGroupSCF">
                <option value="838">838 | ATHOL, ID | 94,161</option>
                <option value="836">836 | ATLANTA, ID | 143,095</option>
                <option value="837">837 | BOISE, ID | 96,830</option>
                <option value="834">834 | IDAHO FALLS, ID | 60,051</option>
                <option value="835">835 | LEWISTON, ID | 27,953</option>
                <option value="832">832 | POCATELLO, ID | 57,357</option>
                <option value="833">833 | TWIN FALLS, ID | 62,286</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Illinois" className="optGroupSCF">
                <option value="601">601 | ADDISON, IL | 520,605</option>
                <option value="600">600 | ALDEN, IL | 624,219</option>
                <option value="626">626 | ALEXANDER, IL | 63,639</option>
                <option value="620">620 | ALHAMBRA, IL | 127,478</option>
                <option value="608">608 | ALSIP, IL | 47,678</option>
                <option value="610">610 | APPLE RIVER, IL | 124,677</option>
                <option value="619">619 | ARCOLA, IL | 39,978</option>
                <option value="625">625 | ARGENTA, IL | 74,691</option>
                <option value="615">615 | ASTORIA, IL | 85,709</option>
                <option value="604">604 | BEECHER, IL | 553,667</option>
                <option value="617">617 | BLOOMINGTON, IL | 85,658</option>
                <option value="629">629 | CARBONDALE, IL | 85,893</option>
                <option value="628">628 | CENTRALIA, IL | 85,280</option>
                <option value="607">607 | CHICAGO, IL | 41,577</option>
                <option value="606">606 | CHICAGO, IL | 971,220</option>
                <option value="622">
                  622 | EAST SAINT LOUIS, IL | 187,335
                </option>
                <option value="624">624 | EFFINGHAM, IL | 57,715</option>
                <option value="602">602 | EVANSTON, IL | 31,416</option>
                <option value="614">614 | GALESBURG, IL | 58,707</option>
                <option value="609">609 | KANKAKEE, IL | 64,891</option>
                <option value="613">613 | LA SALLE, IL | 61,690</option>
                <option value="603">603 | OAK PARK, IL | 27,226</option>
                <option value="616">616 | PEORIA, IL | 71,960</option>
                <option value="623">623 | QUINCY, IL | 43,582</option>
                <option value="612">612 | ROCK ISLAND, IL | 89,455</option>
                <option value="611">611 | ROCKFORD, IL | 96,633</option>
                <option value="627">627 | SPRINGFIELD, IL | 58,369</option>
                <option value="605">605 | SUMMIT ARGO, IL | 373,211</option>
                <option value="618">618 | URBANA, IL | 107,143</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Indiana" className="optGroupSCF">
                <option value="461">461 | ADVANCE, IN | 208,411</option>
                <option value="467">467 | ALBION, IN | 125,348</option>
                <option value="460">460 | ALEXANDRIA, IN | 201,346</option>
                <option value="465">465 | ARGOS, IN | 179,144</option>
                <option value="470">470 | AURORA, IN | 46,405</option>
                <option value="471">471 | AUSTIN, IN | 116,832</option>
                <option value="463">463 | BEVERLY SHORES, IN | 265,028</option>
                <option value="474">474 | BLOOMINGTON, IN | 95,706</option>
                <option value="476">476 | BOONVILLE, IN | 49,076</option>
                <option value="472">472 | COLUMBUS, IN | 81,762</option>
                <option value="477">477 | EVANSVILLE, IN | 76,192</option>
                <option value="468">468 | FORT WAYNE, IN | 123,629</option>
                <option value="464">464 | GARY, IN | 56,144</option>
                <option value="462">462 | INDIANAPOLIS, IN | 365,925</option>
                <option value="469">469 | KOKOMO, IN | 125,134</option>
                <option value="479">479 | LAFAYETTE, IN | 107,386</option>
                <option value="473">473 | MUNCIE, IN | 122,867</option>
                <option value="466">466 | SOUTH BEND, IN | 57,433</option>
                <option value="478">478 | TERRE HAUTE, IN | 69,211</option>
                <option value="475">475 | WASHINGTON, IN | 62,337</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Kansas" className="optGroupSCF">
                <option value="664">664 | ALMA, KS | 31,205</option>
                <option value="670">670 | ANDALE, KS | 70,029</option>
                <option value="660">660 | ATCHISON, KS | 173,936</option>
                <option value="677">677 | COLBY, KS | 13,297</option>
                <option value="669">669 | CONCORDIA, KS | 11,392</option>
                <option value="678">678 | DODGE CITY, KS | 38,050</option>
                <option value="668">668 | EMPORIA, KS | 23,559</option>
                <option value="667">667 | FORT SCOTT, KS | 46,658</option>
                <option value="676">676 | HAYS, KS | 24,191</option>
                <option value="675">675 | HUTCHINSON, KS | 48,435</option>
                <option value="673">673 | INDEPENDENCE, KS | 25,717</option>
                <option value="661">661 | KANSAS CITY, KS | 53,119</option>
                <option value="679">679 | LIBERAL, KS | 9,435</option>
                <option value="671">671 | MAIZE, KS | 44,131</option>
                <option value="665">665 | MC FARLAND, KS | 45,444</option>
                <option value="662">662 | MISSION, KS | 151,501</option>
                <option value="674">674 | SALINA, KS | 55,808</option>
                <option value="666">666 | TOPEKA, KS | 63,320</option>
                <option value="672">672 | WICHITA, KS | 143,846</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Kentucky" className="optGroupSCF">
                <option value="422">422 | ABERDEEN, KY | 55,842</option>
                <option value="412">412 | ADAMS, KY | 18,826</option>
                <option value="408">408 | AGES BROOKSIDE, KY | 12,821</option>
                <option value="426">426 | ALBANY, KY | 23,656</option>
                <option value="410">410 | ALEXANDRIA, KY | 192,370</option>
                <option value="416">416 | ALLEN, KY | 15,058</option>
                <option value="404">404 | ANNVILLE, KY | 67,369</option>
                <option value="409">409 | ARJAY, KY | 24,139</option>
                <option value="411">411 | ASHLAND, KY | 55,137</option>
                <option value="400">400 | BAGDAD, KY | 93,514</option>
                <option value="424">424 | BASKETT, KY | 53,643</option>
                <option value="401">401 | BATTLETOWN, KY | 54,984</option>
                <option value="418">418 | BLACKEY, KY | 11,225</option>
                <option value="421">421 | BOWLING GREEN, KY | 80,139</option>
                <option value="403">403 | BURGIN, KY | 128,757</option>
                <option value="413">413 | CAMPTON, KY | 12,795</option>
                <option value="414">414 | CANNEL CITY, KY | 8,565</option>
                <option value="407">407 | CORBIN, KY | 42,404</option>
                <option value="427">427 | ELIZABETHTOWN, KY | 71,570</option>
                <option value="406">406 | FRANKFORT, KY | 19,939</option>
                <option value="417">417 | HAZARD, KY | 15,053</option>
                <option value="405">405 | LEXINGTON, KY | 108,002</option>
                <option value="402">402 | LOUISVILLE, KY | 295,960</option>
                <option value="423">423 | OWENSBORO, KY | 65,237</option>
                <option value="420">420 | PADUCAH, KY | 90,022</option>
                <option value="415">415 | PIKEVILLE, KY | 26,821</option>
                <option value="425">425 | SOMERSET, KY | 31,216</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Louisiana" className="optGroupSCF">
                <option value="714">714 | AIMWELL, LA | 74,465</option>
                <option value="713">713 | ALEXANDRIA, LA | 82,408</option>
                <option value="710">710 | ARCADIA, LA | 76,840</option>
                <option value="707">707 | BAKER, LA | 152,579</option>
                <option value="708">708 | BATON ROUGE, LA | 159,759</option>
                <option value="704">704 | HAMMOND, LA | 175,822</option>
                <option value="705">705 | LAFAYETTE, LA | 252,334</option>
                <option value="706">706 | LAKE CHARLES, LA | 108,512</option>
                <option value="700">700 | METAIRIE, LA | 237,765</option>
                <option value="712">712 | MONROE, LA | 142,511</option>
                <option value="701">701 | NEW ORLEANS, LA | 171,272</option>
                <option value="711">711 | SHREVEPORT, LA | 132,815</option>
                <option value="703">703 | THIBODAUX, LA | 109,134</option>
              </optgroup>
              <optgroup
                label="&nbsp;&nbsp;Massachusetts"
                className="optGroupSCF"
              >
                <option value="020">020 | ACCORD, MA | 170,248</option>
                <option value="010">010 | AGAWAM, MA | 198,922</option>
                <option value="027">027 | ASSONET, MA | 224,698</option>
                <option value="015">015 | AUBURN, MA | 158,810</option>
                <option value="022">022 | BOSTON, MA | 8,338</option>
                <option value="021">021 | BOSTON, MA | 542,918</option>
                <option value="023">023 | BROCKTON, MA | 183,155</option>
                <option value="025">025 | BUZZARDS BAY, MA | 60,202</option>
                <option value="014">014 | FITCHBURG, MA | 89,745</option>
                <option value="017">017 | FRAMINGHAM, MA | 162,056</option>
                <option value="013">013 | GREENFIELD, MA | 39,694</option>
                <option value="026">026 | HYANNIS, MA | 87,295</option>
                <option value="024">024 | LEXINGTON, MA | 184,642</option>
                <option value="019">019 | LYNN, MA | 212,272</option>
                <option value="012">012 | PITTSFIELD, MA | 60,210</option>
                <option value="011">011 | SPRINGFIELD, MA | 69,973</option>
                <option value="018">018 | WOBURN, MA | 295,541</option>
                <option value="016">016 | WORCESTER, MA | 73,061</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Maryland" className="optGroupSCF">
                <option value="210">210 | ABERDEEN, MD | 304,393</option>
                <option value="207">
                  207 | ANNAPOLIS JUNCTION, MD | 383,855
                </option>
                <option value="214">214 | ANNAPOLIS, MD | 40,024</option>
                <option value="212">212 | BALTIMORE, MD | 508,701</option>
                <option value="208">208 | BETHESDA, MD | 282,860</option>
                <option value="215">215 | CUMBERLAND, MD | 42,925</option>
                <option value="216">216 | EASTON, MD | 74,160</option>
                <option value="217">217 | FREDERICK, MD | 190,170</option>
                <option value="211">211 | MANCHESTER, MD | 191,535</option>
                <option value="219">219 | NORTH EAST, MD | 41,903</option>
                <option value="218">218 | SALISBURY, MD | 75,379</option>
                <option value="209">209 | SILVER SPRING, MD | 123,180</option>
                <option value="206">206 | WALDORF, MD | 136,628</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Maine" className="optGroupSCF">
                <option value="040">040 | ACTON, ME | 147,740</option>
                <option value="042">042 | AUBURN, ME | 74,996</option>
                <option value="043">043 | AUGUSTA, ME | 36,070</option>
                <option value="044">044 | BANGOR, ME | 72,476</option>
                <option value="045">045 | BATH, ME | 22,464</option>
                <option value="039">039 | BERWICK, ME | 21,974</option>
                <option value="046">046 | ELLSWORTH, ME | 32,980</option>
                <option value="047">047 | HOULTON, ME | 31,363</option>
                <option value="041">041 | PORTLAND, ME | 49,708</option>
                <option value="048">048 | ROCKLAND, ME | 18,640</option>
                <option value="049">049 | WATERVILLE, ME | 68,524</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Michigan" className="optGroupSCF">
                <option value="493">493 | ADA, MI | 137,360</option>
                <option value="499">499 | AHMEEK, MI | 35,650</option>
                <option value="487">487 | AKRON, MI | 102,264</option>
                <option value="480">480 | ALGONAC, MI | 540,245</option>
                <option value="481">481 | ALLEN PARK, MI | 715,421</option>
                <option value="494">494 | ALLENDALE, MI | 240,515</option>
                <option value="488">488 | ALMA, MI | 252,661</option>
                <option value="484">484 | APPLEGATE, MI | 209,323</option>
                <option value="491">491 | BARODA, MI | 51,679</option>
                <option value="483">
                  483 | BLOOMFIELD HILLS, MI | 433,916
                </option>
                <option value="496">496 | CADILLAC, MI | 126,502</option>
                <option value="482">482 | DETROIT, MI | 466,463</option>
                <option value="485">485 | FLINT, MI | 101,081</option>
                <option value="495">495 | GRAND RAPIDS, MI | 176,942</option>
                <option value="498">498 | IRON MOUNTAIN, MI | 83,402</option>
                <option value="492">492 | JACKSON, MI | 157,539</option>
                <option value="490">490 | KALAMAZOO, MI | 339,176</option>
                <option value="489">489 | LANSING, MI | 79,291</option>
                <option value="497">497 | MACKINAW CITY, MI | 108,659</option>
                <option value="486">486 | SAGINAW, MI | 194,419</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Minnesota" className="optGroupSCF">
                <option value="557">557 | ADOLPH, MN | 74,133</option>
                <option value="550">550 | AFTON, MN | 258,227</option>
                <option value="553">553 | ALBERTVILLE, MN | 379,127</option>
                <option value="556">556 | BEAVER BAY, MN | 7,435</option>
                <option value="566">566 | BEMIDJI, MN | 35,101</option>
                <option value="564">564 | BRAINERD, MN | 60,794</option>
                <option value="565">565 | DETROIT LAKES, MN | 68,762</option>
                <option value="558">558 | DULUTH, MN | 47,877</option>
                <option value="560">560 | MANKATO, MN | 101,229</option>
                <option value="554">554 | PLYMOUTH, MN | 416,432</option>
                <option value="559">559 | ROCHESTER, MN | 122,069</option>
                <option value="563">563 | SAINT CLOUD, MN | 112,804</option>
                <option value="551">551 | SAINT PAUL, MN | 302,131</option>
                <option value="567">
                  567 | THIEF RIVER FALLS, MN | 28,275
                </option>
                <option value="562">562 | WILLMAR, MN | 56,384</option>
                <option value="561">561 | WINDOM, MN | 37,921</option>
                <option value="555">555 | YOUNG AMERICA, MN | 1</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Missouri" className="optGroupSCF">
                <option value="644">644 | AGENCY, MO | 40,905</option>
                <option value="656">656 | ALDRICH, MO | 83,625</option>
                <option value="630">630 | ALLENTON, MO | 299,632</option>
                <option value="640">640 | ALMA, MO | 248,741</option>
                <option value="650">650 | ARGYLE, MO | 63,995</option>
                <option value="637">637 | CAPE GIRARDEAU, MO | 48,520</option>
                <option value="646">646 | CHILLICOTHE, MO | 30,898</option>
                <option value="652">652 | COLUMBIA, MO | 99,961</option>
                <option value="634">634 | HANNIBAL, MO | 27,673</option>
                <option value="647">647 | HARRISONVILLE, MO | 47,121</option>
                <option value="655">655 | JADWIN, MO | 46,344</option>
                <option value="651">651 | JEFFERSON CITY, MO | 26,086</option>
                <option value="648">648 | JOPLIN, MO | 73,367</option>
                <option value="641">641 | KANSAS CITY, MO | 229,498</option>
                <option value="635">635 | KIRKSVILLE, MO | 24,028</option>
                <option value="657">657 | MC CLURG, MO | 112,094</option>
                <option value="636">636 | PARK HILLS, MO | 52,387</option>
                <option value="639">639 | POPLAR BLUFF, MO | 32,924</option>
                <option value="654">654 | ROLLA, MO | 32,297</option>
                <option value="633">633 | SAINT CHARLES, MO | 193,678</option>
                <option value="645">645 | SAINT JOSEPH, MO | 33,403</option>
                <option value="631">631 | SAINT LOUIS, MO | 401,872</option>
                <option value="653">653 | SEDALIA, MO | 41,538</option>
                <option value="638">638 | SIKESTON, MO | 50,577</option>
                <option value="658">658 | SPRINGFIELD, MO | 89,739</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Mississippi" className="optGroupSCF">
                <option value="386">386 | ABBEVILLE, MS | 148,078</option>
                <option value="390">390 | BELZONI, MS | 105,568</option>
                <option value="396">396 | BROOKHAVEN, MS | 50,597</option>
                <option value="397">397 | COLUMBUS, MS | 60,730</option>
                <option value="387">387 | GREENVILLE, MS | 42,956</option>
                <option value="389">389 | GRENADA, MS | 41,602</option>
                <option value="395">395 | GULFPORT, MS | 144,481</option>
                <option value="394">394 | HATTIESBURG, MS | 132,625</option>
                <option value="392">392 | JACKSON, MS | 87,475</option>
                <option value="391">391 | MC ADAMS, MS | 109,011</option>
                <option value="393">393 | MERIDIAN, MS | 77,314</option>
                <option value="388">388 | TUPELO, MS | 97,018</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Montana" className="optGroupSCF">
                <option value="590">590 | ABSAROKEE, MT | 32,451</option>
                <option value="591">591 | BILLINGS, MT | 49,808</option>
                <option value="597">597 | BUTTE, MT | 61,750</option>
                <option value="594">594 | GREAT FALLS, MT | 49,481</option>
                <option value="595">595 | HAVRE, MT | 11,316</option>
                <option value="596">596 | HELENA, MT | 31,209</option>
                <option value="599">599 | KALISPELL, MT | 47,923</option>
                <option value="593">593 | MILES CITY, MT | 14,158</option>
                <option value="598">598 | MISSOULA, MT | 75,214</option>
                <option value="592">592 | WOLF POINT, MT | 13,810</option>
              </optgroup>
              <optgroup
                label="&nbsp;&nbsp;No. Carolina"
                className="optGroupSCF"
              >
                <option value="270">270 | ADVANCE, NC | 127,715</option>
                <option value="272">272 | ALAMANCE, NC | 250,739</option>
                <option value="280">280 | ALBEMARLE, NC | 296,133</option>
                <option value="287">287 | ALEXANDER, NC | 247,771</option>
                <option value="289">289 | ANDREWS, NC | 18,241</option>
                <option value="275">275 | ANGIER, NC | 449,834</option>
                <option value="288">288 | ASHEVILLE, NC | 60,736</option>
                <option value="282">282 | CHARLOTTE, NC | 352,748</option>
                <option value="277">277 | DURHAM, NC | 114,704</option>
                <option value="279">279 | ELIZABETH CITY, NC | 88,147</option>
                <option value="283">283 | FAYETTEVILLE, NC | 352,388</option>
                <option value="274">274 | GREENSBORO, NC | 137,325</option>
                <option value="286">286 | HICKORY, NC | 278,791</option>
                <option value="285">285 | KINSTON, NC | 206,710</option>
                <option value="281">281 | MC ADENVILLE, NC | 247,389</option>
                <option value="273">273 | MC LEANSVILLE, NC | 165,602</option>
                <option value="276">276 | RALEIGH, NC | 212,992</option>
                <option value="278">278 | ROCKY MOUNT, NC | 234,780</option>
                <option value="284">284 | WILMINGTON, NC | 216,268</option>
                <option value="271">271 | WINSTON SALEM, NC | 109,346</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;No. Dakota" className="optGroupSCF">
                <option value="580">580 | ABERCROMBIE, ND | 31,450</option>
                <option value="585">585 | BISMARCK, ND | 51,022</option>
                <option value="583">583 | DEVILS LAKE, ND | 17,317</option>
                <option value="586">586 | DICKINSON, ND | 16,536</option>
                <option value="581">581 | FARGO, ND | 38,190</option>
                <option value="582">582 | GRAND FORKS, ND | 34,918</option>
                <option value="584">584 | JAMESTOWN, ND | 18,548</option>
                <option value="587">587 | MINOT, ND | 30,581</option>
                <option value="588">588 | WILLISTON, ND | 10,720</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Nebraska" className="optGroupSCF">
                <option value="680">680 | ABIE, NE | 76,374</option>
                <option value="683">683 | ADAMS, NE | 33,070</option>
                <option value="693">693 | ALLIANCE, NE | 27,115</option>
                <option value="686">686 | COLUMBUS, NE | 28,704</option>
                <option value="688">688 | GRAND ISLAND, NE | 58,957</option>
                <option value="689">689 | HASTINGS, NE | 29,338</option>
                <option value="685">685 | LINCOLN, NE | 99,420</option>
                <option value="690">690 | MC COOK, NE | 11,193</option>
                <option value="684">684 | MC COOL JUNCTION, NE | 28,135</option>
                <option value="687">687 | NORFOLK, NE | 48,439</option>
                <option value="691">691 | NORTH PLATTE, NE | 32,443</option>
                <option value="681">681 | OMAHA, NE | 218,452</option>
                <option value="692">692 | VALENTINE, NE | 3,540</option>
              </optgroup>
              <optgroup
                label="&nbsp;&nbsp;New Hampshire"
                className="optGroupSCF"
              >
                <option value="036">036 | ACWORTH, NH | 5,794</option>
                <option value="030">030 | AMHERST, NH | 156,976</option>
                <option value="037">037 | BATH, NH | 32,915</option>
                <option value="033">033 | CONCORD, NH | 25,404</option>
                <option value="034">034 | KEENE, NH | 34,478</option>
                <option value="035">035 | LITTLETON, NH | 21,479</option>
                <option value="031">031 | MANCHESTER, NH | 61,452</option>
                <option value="038">038 | PORTSMOUTH, NH | 134,400</option>
                <option value="032">
                  032 | WATERVILLE VALLEY, NH | 78,508
                </option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;New Jersey" className="optGroupSCF">
                <option value="082">082 | ABSECON, NJ | 121,858</option>
                <option value="074">074 | ALLENDALE, NJ | 186,380</option>
                <option value="085">085 | ALLENTOWN, NJ | 126,529</option>
                <option value="080">080 | ALLOWAY, NJ | 496,865</option>
                <option value="088">088 | ANNANDALE, NJ | 355,565</option>
                <option value="084">084 | ATLANTIC CITY, NJ | 23,395</option>
                <option value="070">070 | AVENEL, NJ | 644,296</option>
                <option value="083">083 | BRIDGETON, NJ | 92,172</option>
                <option value="081">081 | CAMDEN, NJ | 61,085</option>
                <option value="078">078 | DOVER, NJ | 144,942</option>
                <option value="072">072 | ELIZABETH, NJ | 57,078</option>
                <option value="076">076 | HACKENSACK, NJ | 192,823</option>
                <option value="073">073 | JERSEY CITY, NJ | 90,416</option>
                <option value="087">087 | LAKEWOOD, NJ | 200,405</option>
                <option value="089">089 | NEW BRUNSWICK, NJ | 31,550</option>
                <option value="071">071 | NEWARK, NJ | 122,481</option>
                <option value="075">075 | PATERSON, NJ | 61,277</option>
                <option value="077">077 | RED BANK, NJ | 245,264</option>
                <option value="079">079 | SUMMIT, NJ | 105,885</option>
                <option value="086">086 | TRENTON, NJ | 104,670</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;New Mexico" className="optGroupSCF">
                <option value="871">871 | ALBUQUERQUE, NM | 268,671</option>
                <option value="870">870 | ALGODONES, NM | 67,596</option>
                <option value="883">883 | CARRIZOZO, NM | 28,888</option>
                <option value="881">881 | CLOVIS, NM | 23,365</option>
                <option value="874">874 | FARMINGTON, NM | 36,075</option>
                <option value="873">873 | GALLUP, NM | 13,375</option>
                <option value="880">880 | LAS CRUCES, NM | 84,218</option>
                <option value="877">877 | LAS VEGAS, NM | 14,061</option>
                <option value="882">882 | ROSWELL, NM | 60,653</option>
                <option value="875">875 | SANTA FE, NM | 85,554</option>
                <option value="878">878 | SOCORRO, NM | 5,878</option>
                <option value="879">
                  879 | TRUTH OR CONSEQUENCES, NM | 5,738
                </option>
                <option value="884">884 | TUCUMCARI, NM | 6,508</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Nevada" className="optGroupSCF">
                <option value="890">890 | ALAMO, NV | 231,220</option>
                <option value="897">897 | CARSON CITY, NV | 27,281</option>
                <option value="894">894 | CRYSTAL BAY, NV | 119,601</option>
                <option value="898">898 | ELKO, NV | 18,533</option>
                <option value="893">893 | ELY, NV | 4,031</option>
                <option value="891">891 | LAS VEGAS, NV | 514,128</option>
                <option value="895">895 | RENO, NV | 112,998</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;New York" className="optGroupSCF">
                <option value="144">144 | ADAMS BASIN, NY | 131,056</option>
                <option value="148">148 | ADDISON, NY | 121,484</option>
                <option value="137">137 | AFTON, NY | 62,320</option>
                <option value="140">140 | AKRON, NY | 192,091</option>
                <option value="122">122 | ALBANY, NY | 68,960</option>
                <option value="120">120 | ALCOVE, NY | 147,460</option>
                <option value="133">133 | ALDER CREEK, NY | 59,621</option>
                <option value="105">105 | AMAWALK, NY | 269,419</option>
                <option value="125">125 | AMENIA, NY | 187,727</option>
                <option value="117">117 | AMITYVILLE, NY | 607,847</option>
                <option value="130">130 | APULIA STATION, NY | 171,374</option>
                <option value="139">139 | BINGHAMTON, NY | 34,025</option>
                <option value="104">104 | BRONX, NY | 512,535</option>
                <option value="112">112 | BROOKLYN, NY | 1,005,785</option>
                <option value="142">142 | BUFFALO, NY | 262,107</option>
                <option value="149">149 | ELMIRA, NY | 22,457</option>
                <option value="116">116 | FAR ROCKAWAY, NY | 45,739</option>
                <option value="110">110 | FLORAL PARK, NY | 104,023</option>
                <option value="113">113 | FLUSHING, NY | 452,695</option>
                <option value="128">128 | GLENS FALLS, NY | 102,433</option>
                <option value="118">118 | HICKSVILLE, NY | 30,550</option>
                <option value="114">114 | JAMAICA, NY | 309,899</option>
                <option value="147">147 | JAMESTOWN, NY | 78,783</option>
                <option value="124">124 | KINGSTON, NY | 74,617</option>
                <option value="111">111 | LONG ISLAND CITY, NY | 92,337</option>
                <option value="145">145 | MACEDON, NY | 140,625</option>
                <option value="141">141 | MACHIAS, NY | 89,538</option>
                <option value="134">134 | MC CONNELLSVILLE, NY | 78,039</option>
                <option value="138">138 | MC DONOUGH, NY | 59,716</option>
                <option value="131">131 | MC GRAW, NY | 76,927</option>
                <option value="115">115 | MINEOLA, NY | 294,928</option>
                <option value="127">127 | MONTICELLO, NY | 44,124</option>
                <option value="108">108 | NEW ROCHELLE, NY | 33,943</option>
                <option value="101">101 | NEW YORK, NY | 38,985</option>
                <option value="102">102 | NEW YORK, NY | 7,889</option>
                <option value="100">100 | NEW YORK, NY | 776,171</option>
                <option value="143">143 | NIAGARA FALLS, NY | 31,101</option>
                <option value="129">129 | PLATTSBURGH, NY | 70,005</option>
                <option value="126">126 | POUGHKEEPSIE, NY | 36,035</option>
                <option value="119">119 | RIVERHEAD, NY | 114,295</option>
                <option value="146">146 | ROCH, NY | 219,890</option>
                <option value="123">123 | SCHENECTADY, NY | 74,000</option>
                <option value="103">103 | STATEN ISLAND, NY | 200,465</option>
                <option value="109">109 | SUFFERN, NY | 203,941</option>
                <option value="132">132 | SYRACUSE, NY | 102,065</option>
                <option value="121">
                  121 | TROY, RENSSELAER, NY | 122,917
                </option>
                <option value="135">135 | UTICA, NY | 29,712</option>
                <option value="136">136 | WATERTOWN, NY | 95,677</option>
                <option value="106">106 | WHITE PLAINS, NY | 35,079</option>
                <option value="107">107 | YONKERS, NY | 91,302</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Ohio" className="optGroupSCF">
                <option value="451">451 | ABERDEEN, OH | 145,391</option>
                <option value="438">438 | ADAMSVILLE, OH | 27,793</option>
                <option value="450">450 | ADDYSTON, OH | 246,507</option>
                <option value="431">431 | ADELPHI, OH | 178,459</option>
                <option value="439">439 | ADENA, OH | 83,027</option>
                <option value="443">443 | AKRON, OH | 131,772</option>
                <option value="430">430 | ALEXANDRIA, OH | 345,426</option>
                <option value="446">446 | ALLIANCE, OH | 188,611</option>
                <option value="453">453 | ALPHA, OH | 217,994</option>
                <option value="448">448 | ALVADA, OH | 147,873</option>
                <option value="435">435 | ALVORDTON, OH | 129,452</option>
                <option value="440">440 | AMHERST, OH | 387,665</option>
                <option value="457">457 | ATHENS, OH | 69,474</option>
                <option value="442">442 | ATWATER, OH | 246,451</option>
                <option value="444">444 | BERLIN CENTER, OH | 161,261</option>
                <option value="434">434 | BOWLING GREEN, OH | 71,264</option>
                <option value="447">447 | CANTON, OH | 88,615</option>
                <option value="456">456 | CHILLICOTHE, OH | 158,389</option>
                <option value="452">452 | CINCINNATI, OH | 369,911</option>
                <option value="441">441 | CLEVELAND, OH | 594,625</option>
                <option value="432">432 | COLUMBUS, OH | 374,527</option>
                <option value="454">454 | DAYTON, OH | 230,452</option>
                <option value="458">458 | LIMA, OH | 157,912</option>
                <option value="449">449 | MANSFIELD, OH | 43,305</option>
                <option value="433">433 | MARION, OH | 79,300</option>
                <option value="455">455 | SPRINGFIELD, OH | 47,565</option>
                <option value="436">436 | TOLEDO, OH | 165,448</option>
                <option value="445">445 | YOUNGSTOWN, OH | 79,486</option>
                <option value="437">437 | ZANESVILLE, OH | 86,553</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Oklahoma" className="optGroupSCF">
                <option value="739">739 | ADAMS, OK | 9,192</option>
                <option value="730">730 | ALBERT, OK | 273,309</option>
                <option value="734">734 | ARDMORE, OK | 34,907</option>
                <option value="749">749 | ARKOMA, OK | 39,903</option>
                <option value="740">740 | AVANT, OK | 241,242</option>
                <option value="736">736 | CLINTON, OK | 21,592</option>
                <option value="747">747 | DURANT, OK | 31,690</option>
                <option value="737">737 | ENID, OK | 41,917</option>
                <option value="735">735 | LAWTON, OK | 80,100</option>
                <option value="745">745 | MCALESTER, OK | 31,868</option>
                <option value="744">744 | MUSKOGEE, OK | 88,701</option>
                <option value="731">731 | OKLAHOMA CITY, OK | 278,696</option>
                <option value="746">746 | PONCA CITY, OK | 23,109</option>
                <option value="748">748 | SHAWNEE, OK | 77,285</option>
                <option value="741">741 | TULSA, OK | 181,870</option>
                <option value="743">743 | VINITA, OK | 50,107</option>
                <option value="738">738 | WOODWARD, OK | 12,086</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Oregon" className="optGroupSCF">
                <option value="979">979 | ADRIAN, OR | 10,705</option>
                <option value="971">971 | AMITY, OR | 121,876</option>
                <option value="970">970 | ANTELOPE, OR | 299,027</option>
                <option value="977">977 | BEND, OR | 86,761</option>
                <option value="974">974 | EUGENE, OR | 232,239</option>
                <option value="976">976 | KLAMATH FALLS, OR | 30,817</option>
                <option value="975">975 | MEDFORD, OR | 122,881</option>
                <option value="978">978 | PENDLETON, OR | 55,365</option>
                <option value="972">972 | PORTLAND, OR | 349,448</option>
                <option value="973">973 | SALEM, OR | 221,676</option>
              </optgroup>
              <optgroup
                label="&nbsp;&nbsp;Pennsylvania"
                className="optGroupSCF"
              >
                <option value="173">173 | ABBOTTSTOWN, PA | 141,730</option>
                <option value="190">190 | ABINGTON, PA | 472,754</option>
                <option value="195">195 | ADAMSTOWN, PA | 89,037</option>
                <option value="175">175 | AKRON, PA | 126,746</option>
                <option value="164">164 | ALBION, PA | 51,581</option>
                <option value="184">184 | ALDENVILLE, PA | 80,312</option>
                <option value="150">150 | ALIQUIPPA, PA | 203,254</option>
                <option value="181">181 | ALLENTOWN, PA | 66,037</option>
                <option value="151">151 | ALLISON PARK, PA | 169,190</option>
                <option value="166">166 | ALTOONA, PA | 83,398</option>
                <option value="186">186 | BEACH HAVEN, PA | 74,608</option>
                <option value="167">167 | BRADFORD, PA | 20,245</option>
                <option value="160">160 | BUTLER, PA | 79,485</option>
                <option value="170">170 | CAMP HILL, PA | 256,142</option>
                <option value="172">172 | CHAMBERSBURG, PA | 83,155</option>
                <option value="189">189 | DOYLESTOWN, PA | 153,357</option>
                <option value="158">158 | DU BOIS, PA | 38,740</option>
                <option value="183">183 | EAST STROUDSBURG, PA | 65,207</option>
                <option value="165">165 | ERIE, PA | 76,324</option>
                <option value="156">156 | GREENSBURG, PA | 133,370</option>
                <option value="171">171 | HARRISBURG, PA | 72,732</option>
                <option value="182">182 | HAZLETON, PA | 57,657</option>
                <option value="157">157 | INDIANA, PA | 42,366</option>
                <option value="159">159 | JOHNSTOWN, PA | 62,882</option>
                <option value="162">162 | KITTANNING, PA | 34,593</option>
                <option value="176">176 | LANCASTER, PA | 68,107</option>
                <option value="180">180 | LEHIGH VALLEY, PA | 225,945</option>
                <option value="188">188 | MONTROSE, PA | 29,160</option>
                <option value="161">161 | NEW CASTLE, PA | 91,860</option>
                <option value="194">194 | NORRISTOWN, PA | 213,381</option>
                <option value="163">163 | OIL CITY, PA | 63,361</option>
                <option value="193">193 | PAOLI, PA | 168,784</option>
                <option value="191">191 | PHILADELPHIA, PA | 598,316</option>
                <option value="152">152 | PITTSBURGH, PA | 313,650</option>
                <option value="179">179 | POTTSVILLE, PA | 54,615</option>
                <option value="196">196 | READING, PA | 86,946</option>
                <option value="185">185 | SCRANTON, PA | 48,696</option>
                <option value="155">155 | SOMERSET, PA | 37,454</option>
                <option value="168">168 | STATE COLLEGE, PA | 66,069</option>
                <option value="178">178 | SUNBURY, PA | 91,171</option>
                <option value="154">154 | UNIONTOWN, PA | 60,354</option>
                <option value="153">153 | WASHINGTON, PA | 78,504</option>
                <option value="169">169 | WELLSBORO, PA | 26,361</option>
                <option value="187">187 | WILKES BARRE, PA | 57,982</option>
                <option value="177">177 | WILLIAMSPORT, PA | 69,859</option>
                <option value="174">174 | YORK, PA | 74,107</option>
              </optgroup>
              <optgroup
                label="&nbsp;&nbsp;Rhode Island"
                className="optGroupSCF"
              >
                <option value="028">028 | ADAMSVILLE, RI | 309,608</option>
                <option value="029">029 | PROVIDENCE, RI | 163,170</option>
              </optgroup>
              <optgroup
                label="&nbsp;&nbsp;So. Carolina"
                className="optGroupSCF"
              >
                <option value="298">298 | AIKEN, SC | 85,930</option>
                <option value="290">290 | ALCOLU, SC | 167,315</option>
                <option value="299">299 | BEAUFORT, SC | 81,624</option>
                <option value="297">297 | BLACKSBURG, SC | 137,062</option>
                <option value="294">294 | CHARLESTON, SC | 291,272</option>
                <option value="292">292 | COLUMBIA, SC | 121,719</option>
                <option value="295">295 | FLORENCE, SC | 256,071</option>
                <option value="296">296 | GREENVILLE, SC | 382,846</option>
                <option value="291">291 | MC BEE, SC | 144,396</option>
                <option value="293">293 | SPARTANBURG, SC | 152,837</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;So. Dakota" className="optGroupSCF">
                <option value="574">574 | ABERDEEN, SD | 22,895</option>
                <option value="570">570 | ALCESTER, SD | 63,336</option>
                <option value="573">573 | MITCHELL, SD | 31,390</option>
                <option value="576">576 | MOBRIDGE, SD | 7,155</option>
                <option value="575">575 | PIERRE, SD | 18,333</option>
                <option value="577">577 | RAPID CITY, SD | 70,936</option>
                <option value="571">571 | SIOUX FALLS, SD | 57,845</option>
                <option value="572">572 | WATERTOWN, SD | 28,179</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Tennessee" className="optGroupSCF">
                <option value="370">370 | ADAMS, TN | 358,950</option>
                <option value="380">380 | ALAMO, TN | 164,162</option>
                <option value="377">377 | ALCOA, TN | 147,434</option>
                <option value="373">373 | ALTAMONT, TN | 233,220</option>
                <option value="374">374 | CHATTANOOGA, TN | 81,534</option>
                <option value="384">384 | COLUMBIA, TN | 74,709</option>
                <option value="385">385 | COOKEVILLE, TN | 94,123</option>
                <option value="383">383 | JACKSON, TN | 120,766</option>
                <option value="376">376 | JOHNSON CITY, TN | 179,002</option>
                <option value="379">379 | KNOXVILLE, TN | 161,771</option>
                <option value="378">378 | MARYVILLE, TN | 219,951</option>
                <option value="371">371 | MC EWEN, TN | 243,865</option>
                <option value="382">382 | MC KENZIE, TN | 49,032</option>
                <option value="381">381 | MEMPHIS, TN | 286,325</option>
                <option value="372">372 | NASHVILLE, TN | 177,043</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Texas" className="optGroupSCF">
                <option value="766">766 | ABBOTT, TX | 60,435</option>
                <option value="793">793 | ABERNATHY, TX | 47,278</option>
                <option value="796">796 | ABILENE, TX | 46,621</option>
                <option value="750">750 | ADDISON, TX | 773,656</option>
                <option value="781">781 | ADKINS, TX | 143,213</option>
                <option value="790">790 | ADRIAN, TX | 74,440</option>
                <option value="783">783 | AGUA DULCE, TX | 82,022</option>
                <option value="791">791 | AMARILLO, TX | 85,082</option>
                <option value="795">795 | ANSON, TX | 37,008</option>
                <option value="798">798 | ANTHONY, TX | 18,795</option>
                <option value="760">760 | ARLINGTON, TX | 439,309</option>
                <option value="780">780 | ARTESIA WELLS, TX | 172,344</option>
                <option value="787">787 | AUSTIN, TX | 353,626</option>
                <option value="751">751 | BARDWELL, TX | 281,502</option>
                <option value="786">786 | BASTROP, TX | 316,788</option>
                <option value="777">777 | BEAUMONT, TX | 51,851</option>
                <option value="774">774 | BELLAIRE, TX | 366,305</option>
                <option value="789">789 | BLEIBLERVILLE, TX | 25,977</option>
                <option value="776">776 | BRIDGE CITY, TX | 108,223</option>
                <option value="768">768 | BROWNWOOD, TX | 32,967</option>
                <option value="778">778 | BRYAN, TX | 93,283</option>
                <option value="792">792 | CHILDRESS, TX | 11,858</option>
                <option value="773">773 | CONROE, TX | 393,982</option>
                <option value="784">784 | CORPUS CHRISTI, TX | 112,098</option>
                <option value="752">752 | DALLAS, TX | 437,505</option>
                <option value="753">753 | DALLAS, TX | 4,887</option>
                <option value="762">762 | DENTON, TX | 161,364</option>
                <option value="799">799 | EL PASO, TX | 252,768</option>
                <option value="761">761 | FORT WORTH, TX | 335,433</option>
                <option value="754">754 | GREENVILLE, TX | 127,214</option>
                <option value="770">770 | HOUSTON, TX | 980,627</option>
                <option value="772">772 | HOUSTON, TX | 15,350</option>
                <option value="756">756 | LONGVIEW, TX | 125,715</option>
                <option value="794">794 | LUBBOCK, TX | 88,314</option>
                <option value="759">759 | LUFKIN, TX | 90,747</option>
                <option value="785">785 | MCALLEN, TX | 328,739</option>
                <option value="797">797 | MIDLAND, TX | 136,899</option>
                <option value="758">758 | PALESTINE, TX | 40,340</option>
                <option value="775">775 | PASADENA, TX | 414,545</option>
                <option value="769">769 | SAN ANGELO, TX | 49,775</option>
                <option value="782">782 | SAN ANTONIO, TX | 569,104</option>
                <option value="764">764 | STEPHENVILLE, TX | 52,863</option>
                <option value="765">765 | TEMPLE, TX | 166,654</option>
                <option value="755">755 | TEXARKANA, TX | 47,440</option>
                <option value="757">757 | TYLER, TX | 134,318</option>
                <option value="788">788 | UVALDE, TX | 50,721</option>
                <option value="779">779 | VICTORIA, TX | 58,759</option>
                <option value="767">767 | WACO, TX | 63,763</option>
                <option value="763">763 | WICHITA FALLS, TX | 63,894</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Utah" className="optGroupSCF">
                <option value="840">840 | ALTAMONT, UT | 413,600</option>
                <option value="843">843 | BEAR RIVER CITY, UT | 56,848</option>
                <option value="844">844 | OGDEN, UT | 70,988</option>
                <option value="845">845 | PRICE, UT | 20,048</option>
                <option value="846">846 | PROVO, UT | 79,024</option>
                <option value="847">847 | RICHFIELD, UT | 73,984</option>
                <option value="841">841 | SALT LAKE CITY, UT | 224,414</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Virginia" className="optGroupSCF">
                <option value="233">233 | ACCOMAC, VA | 100,663</option>
                <option value="230">230 | ACHILLES, VA | 91,126</option>
                <option value="223">223 | ALEXANDRIA, VA | 140,895</option>
                <option value="246">246 | AMONATE, VA | 27,390</option>
                <option value="220">220 | ANNANDALE, VA | 186,315</option>
                <option value="222">222 | ARLINGTON, VA | 96,699</option>
                <option value="242">242 | BRISTOL, VA | 76,331</option>
                <option value="229">229 | CHARLOTTESVILLE, VA | 101,087</option>
                <option value="227">227 | CULPEPER, VA | 31,132</option>
                <option value="201">201 | DULLES, VA | 330,893</option>
                <option value="239">239 | FARMVILLE, VA | 39,938</option>
                <option value="238">238 | FORT LEE, VA | 130,800</option>
                <option value="224">224 | FREDERICKSBURG, VA | 84,601</option>
                <option value="241">241 | HARDY, VA | 95,051</option>
                <option value="228">228 | HARRISONBURG, VA | 57,885</option>
                <option value="234">234 | KELLER, VA | 233,184</option>
                <option value="225">225 | LADYSMITH, VA | 74,126</option>
                <option value="245">245 | LYNCHBURG, VA | 147,894</option>
                <option value="231">231 | MACON, VA | 145,744</option>
                <option value="221">221 | MC LEAN, VA | 178,768</option>
                <option value="236">236 | NEWPORT NEWS, VA | 152,976</option>
                <option value="235">235 | NORFOLK, VA | 85,198</option>
                <option value="237">237 | PORTSMOUTH, VA | 39,575</option>
                <option value="243">243 | PULASKI, VA | 65,568</option>
                <option value="232">232 | RICHMOND, VA | 224,810</option>
                <option value="240">240 | ROANOKE, VA | 138,042</option>
                <option value="244">244 | STAUNTON, VA | 58,278</option>
                <option value="226">226 | WINCHESTER, VA | 74,854</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Vermont" className="optGroupSCF">
                <option value="059">059 | AVERILL, VT | 1,464</option>
                <option value="051">051 | BELLOWS FALLS, VT | 13,437</option>
                <option value="052">052 | BENNINGTON, VT | 14,820</option>
                <option value="053">053 | BRATTLEBORO, VT | 16,712</option>
                <option value="054">054 | BURLINGTON, VT | 98,484</option>
                <option value="056">056 | MONTPELIER, VT | 36,916</option>
                <option value="057">057 | RUTLAND, VT | 35,703</option>
                <option value="058">058 | SAINT JOHNSBURY, VT | 24,583</option>
                <option value="050">
                  050 | WHITE RIVER JUNCTION, VT | 26,891
                </option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Washington" className="optGroupSCF">
                <option value="991">991 | ADDY, WA | 42,444</option>
                <option value="990">990 | AIRWAY HEIGHTS, WA | 54,492</option>
                <option value="986">986 | AMBOY, WA | 225,509</option>
                <option value="994">994 | ANATONE, WA | 9,075</option>
                <option value="983">983 | ANDERSON ISLAND, WA | 292,416</option>
                <option value="980">980 | AUBURN, WA | 503,301</option>
                <option value="982">982 | EVERETT, WA | 350,296</option>
                <option value="985">985 | OLYMPIA, WA | 197,480</option>
                <option value="993">993 | PASCO, WA | 117,414</option>
                <option value="981">981 | SEATTLE, WA | 357,536</option>
                <option value="992">992 | SPOKANE, WA | 143,802</option>
                <option value="984">984 | TACOMA, WA | 153,723</option>
                <option value="988">988 | WENATCHEE, WA | 77,654</option>
                <option value="989">989 | YAKIMA, WA | 98,152</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Wisconsin" className="optGroupSCF">
                <option value="541">541 | ABRAMS, WI | 105,950</option>
                <option value="530">530 | ADELL, WI | 264,779</option>
                <option value="535">535 | AFTON, WI | 231,030</option>
                <option value="542">542 | ALGOMA, WI | 57,183</option>
                <option value="540">540 | AMERY, WI | 59,455</option>
                <option value="538">538 | BAGLEY, WI | 22,837</option>
                <option value="531">531 | BASSETT, WI | 275,331</option>
                <option value="547">547 | EAU CLAIRE, WI | 103,638</option>
                <option value="543">543 | GREEN BAY, WI | 72,223</option>
                <option value="546">546 | LA CROSSE, WI | 99,286</option>
                <option value="537">537 | MADISON, WI | 112,276</option>
                <option value="532">532 | MILWAUKEE, WI | 321,723</option>
                <option value="549">549 | OSHKOSH, WI | 197,823</option>
                <option value="539">539 | PORTAGE, WI | 85,316</option>
                <option value="534">534 | RACINE, WI | 52,864</option>
                <option value="545">545 | RHINELANDER, WI | 45,652</option>
                <option value="548">548 | SPOONER, WI | 81,577</option>
                <option value="544">544 | WAUSAU, WI | 162,879</option>
              </optgroup>
              <optgroup
                label="&nbsp;&nbsp;West Virginia"
                className="optGroupSCF"
              >
                <option value="255">255 | ALKOL, WV | 55,207</option>
                <option value="250">250 | ALLOY, WV | 28,079</option>
                <option value="267">267 | AUGUSTA, WV | 20,653</option>
                <option value="268">268 | BAKER, WV | 13,073</option>
                <option value="258">258 | BECKLEY, WV | 35,423</option>
                <option value="247">247 | BLUEFIELD, WV | 24,471</option>
                <option value="262">262 | BUCKHANNON, WV | 33,127</option>
                <option value="253">253 | CHARLESTON, WV | 51,584</option>
                <option value="263">263 | CLARKSBURG, WV | 34,931</option>
                <option value="251">251 | HANDLEY, WV | 30,953</option>
                <option value="257">257 | HUNTINGTON, WV | 29,851</option>
                <option value="249">249 | LEWISBURG, WV | 19,914</option>
                <option value="256">256 | LOGAN, WV | 18,972</option>
                <option value="254">254 | MARTINSBURG, WV | 70,699</option>
                <option value="264">264 | MEADOWBROOK, WV | 22,482</option>
                <option value="265">265 | MORGANTOWN, WV | 65,773</option>
                <option value="259">259 | OAK HILL, WV | 19,219</option>
                <option value="261">261 | PARKERSBURG, WV | 56,836</option>
                <option value="266">266 | SUTTON, WV | 13,027</option>
                <option value="252">252 | TAD, WV | 22,713</option>
                <option value="248">248 | WELCH, WV | 13,533</option>
                <option value="260">260 | WHEELING, WV | 57,959</option>
              </optgroup>
              <optgroup label="&nbsp;&nbsp;Wyoming" className="optGroupSCF">
                <option value="826">826 | CASPER, WY | 36,823</option>
                <option value="820">820 | CHEYENNE, WY | 47,884</option>
                <option value="830">830 | JACKSON, WY | 8,256</option>
                <option value="831">831 | KEMMERER, WY | 6,957</option>
                <option value="827">827 | NEWCASTLE, WY | 21,592</option>
                <option value="823">823 | RAWLINS, WY | 6,124</option>
                <option value="825">825 | RIVERTON, WY | 14,298</option>
                <option value="829">829 | ROCK SPRINGS, WY | 24,554</option>
                <option value="828">828 | SHERIDAN, WY | 15,126</option>
                <option value="822">822 | WHEATLAND, WY | 9,695</option>
                <option value="824">824 | WORLAND, WY | 21,717</option>
                <option value="821">
                  821 | YELLOWSTONE NATIONAL PARK, WY | 261
                </option>
              </optgroup>
            </select>
            <br />
            <span style={{ fontSize: "8pt" }}>
              (<b>NOTE:</b> Hold the Control key down to select more than one
              SCF Region)
            </span>
            <br />
            <label htmlFor="SCFNOT">
              <b>To Instead EXCLUDE The Above Selected SCF Zones:</b>
            </label>
            <input type="checkbox" name="SCFNOT" id="SCFNOT" value="NOT" />
          </div>
          <div className="floatleft" id="ZIPRAD" align="center">
            <b className="redtextbold2">Zip Code Option lV:</b>
            <h4>Radius Search by US Zip Code:</h4>
            <span className="tfont">
              (For a radius distance up to 250 miles)
            </span>
            <br />
            <div align="center">
              <b>
                Zip:{" "}
                <input
                  type="text"
                  name="txtZipRadius"
                  size="5"
                  id="txtZipRadius"
                  maxLength="5"
                  onChange={handleDataChange}
                />
                &nbsp;&nbsp;|&nbsp;&nbsp;Miles:
                <input
                  type="text"
                  name="txtZipRadiusMiles"
                  id="txtZipRadiusMiles"
                  size="2"
                  maxLength="3"
                  onChange={handleDataChange}
                />
              </b>
            </div>
            <span className="redtextbold" style={{ fontSize: "13px" }}>
              NOTE : Selecting a US Search Radius will prevent you from
              searching by City, County or the 3 other Zip searches.
            </span>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      </fieldset>
    </>
  );
};

export default USstates;
