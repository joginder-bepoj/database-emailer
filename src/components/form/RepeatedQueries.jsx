import React from "react";
import { useStateContext } from "../context/StateContext";

const RepeatedQueries = () => {
    const {setRepeated, repeated} = useStateContext()
    const handleChange= (e) =>{
        setRepeated({
            ...repeated, [e.target.name] : e.target.value
        })
    }
    return (
        <>
            <fieldset align="center" id="upload_date">
                <legend>
                    Obtain Records That Are New to the Database on Repeated Queries:
                    (Opt.)
                </legend>
                <span className="elevfont">
                    To obtain new records to supplement your previous query/download.
                    Repeat the same query parameters, then enter the date of your previous
                    download below.{" "}
                </span>
                <br />
                <label htmlFor="selMonth">Previous Download Date of Repeated Query</label>
                <select
                    name="selMonth"
                    id="selMonth"
                    className="dateSelect"
                    style={{ width: "84px" }}
                    onChange={handleChange}
                >
                    <option value=""> Month* </option>
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
                    name="selDay"
                    id="selDay"
                    className="dateSelect"
                    style={{ width: "64px" }}
                    onChange={handleChange}
                >
                    <option value="1"> Day </option>
                    <option defaultValue="01" >
                        1
                    </option>
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
                /
                <select
                    name="selYear"
                    id="selYear"
                    className="dateSelect"
                    style={{ width: "64px" }}
                    onChange={handleChange}
                >
                    <option value=""> Year* </option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
                &nbsp;&nbsp;
                <span className="redtextbold1"> Select At Least the Month &amp; Year</span>
            </fieldset>
        </>
    );
};

export default RepeatedQueries;
