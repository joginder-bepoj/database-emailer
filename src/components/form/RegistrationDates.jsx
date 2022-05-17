import React from "react";
import { useStateContext } from "../context/StateContext";

const RegistrationDates = () => {
    const {setRegDates, regDates} = useStateContext()
    const handleChange = (e) => {
        setRegDates({
            ...regDates, [e.target.name] : e.target.value
        })
    }
    return (
        <>
            <fieldset>
                <legend>URL Creation Date: (Optional)</legend>
                <span className="elevfont">
                    Select any or all of the three to search on Dates Matching,{" "}
                </span>
                <br />
                <br />
                <div align="center">
                    <label htmlFor="selRegMonth">Creation Date:</label>
                    <select onChange={handleChange} name="selRegYear" id="selRegYear" className="dateSelect">
                        <option value="">Year</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                    </select>{" "}
                    /
                    <select
                        onChange={handleChange}
                        name="selRegMonth"
                        id="selRegMonth"
                        className="dateSelect"
                        style={{ width: "84px" }}
                    >
                        <option value="">Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>{" "}
                    /
                    <select onChange={handleChange} name="selRegDay" id="selRegDay" className="dateSelect">
                        <option value="">Day</option>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>{" "}
                    | How You want the Dates to Match Your Selection
                    <select onChange={handleChange} name="selRegComp" id="selRegComp" className="dateSelect">
                        <option value="E">Equal To</option>
                        <option value="GT">Greater Than</option>
                        <option value="GTE">Greater Than or Equal To</option>
                        <option value="LT">Less Than</option>
                        <option value="LTE">Less Than or Equal To</option>
                        <option value="NE">Not Equal To</option>
                    </select>
                </div>
            </fieldset>
            <hr />
            <fieldset>
                <legend>URL Updated Date: (Optional)</legend>
                <span className="elevfont">
                    Select any or all of the three to search on Matching Updated Dates
                </span>
                <br />
                <br />
                <div align="center">
                    <label htmlFor="selRegUpdateMonth">Updated Date:</label>
                    <select 
                        onChange={handleChange}
                        name="selRegUpdateYear"
                        id="selRegUpdateYear"
                        className="dateSelect"
                    >
                        <option value="">Year</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                    </select>{" "}
                    /
                    <select
                        onChange={handleChange}
                        name="selRegUpdateMonth"
                        id="selRegUpdateMonth"
                        className="dateSelect"
                        style={{ width: "84px" }}
                    >
                        <option value="">Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>{" "}
                    /
                    <select
                        onChange={handleChange}
                        name="selRegUpdateDay"
                        id="selRegUpdateDay"
                        className="dateSelect"
                    >
                        <option value="">Day</option>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>{" "}
                    | How You want the Dates to Match Your Selection
                    <select
                    onChange={handleChange}
                        name="selRegUpdateComp"
                        id="selRegUpdateComp"
                        className="dateSelect"
                    >
                        <option value="E">Equal To</option>
                        <option value="GT">Greater Than</option>
                        <option value="GTE">Greater Than or Equal To</option>
                        <option value="LT">Less Than</option>
                        <option value="LTE">Less Than or Equal To</option>
                        <option value="NE">Not Equal To</option>
                    </select>
                </div>
            </fieldset>
            <hr />
            <fieldset>
                <legend>URL Expiration Date: (Optional)</legend>
                <span className="elevfont">
                    Select any or all of the three to search on Matching Expiration Dates
                </span>
                <br />
                <br />
                <div align="center">
                    <label htmlFor="selRegEXPIRESMonth">Expiration Date:</label>
                    <select
                        onChange={handleChange}
                        name="selRegEXPIRESYear"
                        id="selRegEXPIRESYear"
                        className="dateSelect"
                    >
                        <option value="">Year</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                    </select>{" "}
                    /
                    <select
                        onChange={handleChange}
                        name="selRegEXPIRESMonth"
                        id="selRegEXPIRESMonth"
                        className="dateSelect"
                        style={{ width: "84px" }}
                    >
                        <option value="">Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>{" "}
                    /
                    <select
                        onChange={handleChange}
                        name="selRegEXPIRESDay"
                        id="selRegEXPIRESDay"
                        className="dateSelect"
                    >
                        <option value="">Day</option>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    How You want the Dates to Match Your Selection
                    <select
                        onChange={handleChange}
                        name="selRegEXPIRESComp"
                        id="selRegEXPIRESComp"
                        className="dateSelect"
                    >
                        <option value="E">Equal To</option>
                        <option value="GT">Greater Than</option>
                        <option value="GTE">Greater Than or Equal To</option>
                        <option value="LT">Less Than</option>
                        <option value="LTE">Less Than or Equal To</option>
                        <option value="NE">Not Equal To</option>
                    </select>
                </div>
            </fieldset>
        </>
    );
};

export default RegistrationDates;
