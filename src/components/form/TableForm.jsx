import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";

const TableForm = () => {
  const {
    setTeleMarketingForm,
    teleMarketingForm,
    setAge,
    Age,
    setTelDOB,
    telDOB,
    setEdu,
    edu,
    setBusinessOwner,
    businessOwner,
    setOccupationsGeneral,
    occupationsGeneral,
    occupationDetailed,
    setOccupationDetailed,
    setLanguages,
    languages,
    setEthnicitiesOP,
    ethnicitiesOP,
    setEthnicGroup,
    ethnicGroup,
    setReligions,
    religions,
    setChildrenAndMartial,
    childrenAndMartial,
    setChildAndAdult,
    childAndAdult,
    setIncomeHH,
    incomeHH,
    setNetWorth,
    netWorth,
    setCreditRating,
    creditRating,
    setFamily,
    setOwnerRenter,
    setAddress,
    address,
    setResidentLength,
    residentLength,
    setMortgageDate,
    mortgageDate,
    setHomeMarket,
    homeMarket,
    setFuel,
    setAirCond,
    setSmokker,
    setGenderMF,
    setWater,
    setSewer,
    setGenerations,
    setNumAdults
  } = useStateContext();
  const handleChange = (e) => {
    setTeleMarketingForm({
      ...teleMarketingForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgeChange = (e) => {
    setAge({
      ...Age,
      [e.target.name]: e.target.value,
    });
  };

  const handleDOBChange = (e) => {
    setTelDOB({
      ...telDOB,
      [e.target.name]: e.target.value,
    });
  };

  const handleEduChange = (e) => {
    const { checked, value } = e.target;
    setEdu(checked ? [...edu, value] : edu.filter((item) => item !== value));
  };

  const handleBusiChange = (e) => {
    const { checked, value } = e.target;
    setBusinessOwner(
      checked
        ? [...businessOwner, value]
        : businessOwner.filter((item) => item !== value)
    );
  };

  const handleGeneralChange = (e) => {
    const { checked, value } = e.target;
    setOccupationsGeneral(
      checked
        ? [...occupationsGeneral, value]
        : occupationsGeneral.filter((item) => item !== value)
    );
  };

  const handleDetailedOccuChange = (e) => {
    const { checked, value } = e.target;
    setOccupationDetailed(
      checked
        ? [...occupationDetailed, value]
        : occupationDetailed.filter((item) => item !== value)
    );
  };
  const handleLangChange = (e) => {
    const { checked, value } = e.target;
    setLanguages(
      checked
        ? [...languages, value]
        : languages.filter((item) => item !== value)
    );
  };
  const handleEthnicitiesChange = (e) => {
    const { checked, value } = e.target;
    setEthnicitiesOP(
      checked
        ? [...ethnicitiesOP, value]
        : ethnicitiesOP.filter((item) => item !== value)
    );
  };
  const handleEthnicChange = (e) => {
    const { checked, value } = e.target;
    setEthnicGroup(
      checked
        ? [...ethnicGroup, value]
        : ethnicGroup.filter((item) => item !== value)
    );
  };

  const handleRelgionChange = (e) =>{
    const {checked, value} = e.target;
    setReligions(
        checked ? [...religions, value] : religions.filter(item => item !== value)
    )
  }
  const handleChildrenAndMartialChange = (e) =>{
    setChildrenAndMartial({...childrenAndMartial, [e.target.name]: e.target.value})
  }
  const handleChildAndAdultChange = (e) =>{
    const {checked, value} = e.target;
    setChildAndAdult(
        checked ? [...childAndAdult, value] : childAndAdult.filter(item => item !== value)
    )
  }

  const handleIncChange = (e) =>{
    setIncomeHH({...incomeHH, [e.target.name]: e.target.value})
  }
  const handleNetChange = (e) =>{
    setNetWorth({...netWorth, [e.target.name]: e.target.value})
  }
  const handleCreditChange = (e) =>{
    setCreditRating({...creditRating, [e.target.name]: e.target.value})
  }

  const handleFamilyChange = (e) =>{
    setFamily(e.target.value)
  }
  const handlePropChange = (e) =>{
    setOwnerRenter(e.target.value)
  }

  const handleAddressChange = (e) =>{
    const {checked, value} = e.target;
    setAddress(checked ? [...address, value]: address.filter(item => item !== value))
  }

  const handleResidentChange = (e) =>{
    setResidentLength({...residentLength, [e.target.name]: e.target.value})
  }

  const handleMortgageChange = (e) =>{
    setMortgageDate({...mortgageDate, [e.target.name]: e.target.value})
  }
  const handleHomeMarkChange = (e) =>{
    setHomeMarket({...homeMarket, [e.target.name]: e.target.value})
  }

  const handleFuelChange = (e) =>{
    setFuel(e.target.value)
  }
  const handleAirChange = (e) =>{
    setAirCond(e.target.value)
  }
  const handleGenderChange = (e) =>{
    setGenderMF(e.target.value)
  }
  const handleWaterChange = (e) =>{
    setWater(e.target.value)
  }
  const handleSewerChange =(e) =>{
    setSewer(e.target.value)
  }
  const handleSomkkerChange = (e) =>{
    setSmokker(e.target.value)
  }
  const handleAdultsChange = (e) =>{
    setNumAdults(e.target.value)
  }
  const handleGenerationChange = (e) =>{
    setGenerations(e.target.value)
  }


  const [education, setEducation] = useState(false);
  const [buisnessOwner, setBuisnessOwner] = useState(false);
  const [occupation, setOccupation] = useState(false);
  const [occupationDetails, setOccupationDetails] = useState(false);
  const [langages, setLangages] = useState(false);
  const [ethnicities, setEthnicities] = useState(false);
  const [ethnic, setEthnic] = useState(false);
  const [religion, setReligion] = useState(false);
  const [houseHoldRange, setHouseHoldRange] = useState(false);

  return (
    <>
      <table className="tdBlock" id="tblMain">
        <tbody>
          <tr>
            <td>
              {" "}
              <fieldset id="fsDOB">
                <legend>Enter an Age or Age Range: (Optional)</legend>
                <h4>
                  If you want a range of ages, enter the lower age in the left
                  dropdown box & the higher age in the right dropdown box.
                </h4>
                <table
                  width="100%"
                  style={{ color: "#111", fontSize: "14px" }}
                  className="tdBlock"
                >
                  <tbody>
                    <tr valign="top">
                      <td>
                        <select
                          onChange={handleAgeChange}
                          name="ageLower"
                          id="ageLower"
                        >
                          <option value="">-- Lower or Exact Age --</option>
                          <option value="18">AGE: 18</option>
                          <option value="19">AGE: 19</option>
                          <option value="20">AGE: 20</option>
                          <option value="21">AGE: 21</option>
                          <option value="22">AGE: 22</option>
                          <option value="23">AGE: 23</option>
                          <option value="24">AGE: 24</option>
                          <option value="25">AGE: 25</option>
                          <option value="26">AGE: 26</option>
                          <option value="27">AGE: 27</option>
                          <option value="28">AGE: 28</option>
                          <option value="29">AGE: 29</option>
                          <option value="30">AGE: 30</option>
                          <option value="31">AGE: 31</option>
                          <option value="32">AGE: 32</option>
                          <option value="33">AGE: 33</option>
                          <option value="34">AGE: 34</option>
                          <option value="35">AGE: 35</option>
                          <option value="36">AGE: 36</option>
                          <option value="37">AGE: 37</option>
                          <option value="38">AGE: 38</option>
                          <option value="39">AGE: 39</option>
                          <option value="40">AGE: 40</option>
                          <option value="41">AGE: 41</option>
                          <option value="42">AGE: 42</option>
                          <option value="43">AGE: 43</option>
                          <option value="44">AGE: 44</option>
                          <option value="45">AGE: 45</option>
                          <option value="46">AGE: 46</option>
                          <option value="47">AGE: 47</option>
                          <option value="48">AGE: 48</option>
                          <option value="49">AGE: 49</option>
                          <option value="50">AGE: 50</option>
                          <option value="51">AGE: 51</option>
                          <option value="52">AGE: 52</option>
                          <option value="53">AGE: 53</option>
                          <option value="54">AGE: 54</option>
                          <option value="55">AGE: 55</option>
                          <option value="56">AGE: 56</option>
                          <option value="57">AGE: 57</option>
                          <option value="58">AGE: 58</option>
                          <option value="59">AGE: 59</option>
                          <option value="60">AGE: 60</option>
                          <option value="61">AGE: 61</option>
                          <option value="62">AGE: 62</option>
                          <option value="63">AGE: 63</option>
                          <option value="64">AGE: 64</option>
                          <option value="65">AGE: 65</option>
                          <option value="66">AGE: 66</option>
                          <option value="67">AGE: 67</option>
                          <option value="68">AGE: 68</option>
                          <option value="69">AGE: 69</option>
                          <option value="70">AGE: 70</option>
                          <option value="71">AGE: 71</option>
                          <option value="72">AGE: 72</option>
                          <option value="73">AGE: 73</option>
                          <option value="74">AGE: 74</option>
                          <option value="75">AGE: 75</option>
                          <option value="76">AGE: 76</option>
                          <option value="77">AGE: 77</option>
                          <option value="78">AGE: 78</option>
                          <option value="79">AGE: 79</option>
                          <option value="80">AGE: 80</option>
                          <option value="81">AGE: 81</option>
                          <option value="82">AGE: 82</option>
                          <option value="83">AGE: 83</option>
                          <option value="84">AGE: 84</option>
                          <option value="85">AGE: 85</option>
                          <option value="86">AGE: 86</option>
                          <option value="87">AGE: 87</option>
                          <option value="88">AGE: 88</option>
                          <option value="89">AGE: 89</option>
                          <option value="90">AGE: 90</option>
                          <option value="91">AGE: 91</option>
                          <option value="92">AGE: 92</option>
                          <option value="93">AGE: 93</option>
                          <option value="94">AGE: 94</option>
                          <option value="95">AGE: 95</option>
                          <option value="96">AGE: 96</option>
                          <option value="97">AGE: 97</option>
                          <option value="98">AGE: 98</option>
                          <option value="99">AGE: 99</option>
                          <option value="100">AGE: 100</option>{" "}
                        </select>
                      </td>
                      <td>
                        <select
                          onChange={handleAgeChange}
                          name="ageUpper"
                          id="ageUpper"
                        >
                          <option value="">-- Upper Age Limit --</option>
                          <option defaultValue="ALL">-- All --</option>
                          <option value="18">AGE: 18</option>
                          <option value="19">AGE: 19</option>
                          <option value="20">AGE: 20</option>
                          <option value="21">AGE: 21</option>
                          <option value="22">AGE: 22</option>
                          <option value="23">AGE: 23</option>
                          <option value="24">AGE: 24</option>
                          <option value="25">AGE: 25</option>
                          <option value="26">AGE: 26</option>
                          <option value="27">AGE: 27</option>
                          <option value="28">AGE: 28</option>
                          <option value="29">AGE: 29</option>
                          <option value="30">AGE: 30</option>
                          <option value="31">AGE: 31</option>
                          <option value="32">AGE: 32</option>
                          <option value="33">AGE: 33</option>
                          <option value="34">AGE: 34</option>
                          <option value="35">AGE: 35</option>
                          <option value="36">AGE: 36</option>
                          <option value="37">AGE: 37</option>
                          <option value="38">AGE: 38</option>
                          <option value="39">AGE: 39</option>
                          <option value="40">AGE: 40</option>
                          <option value="41">AGE: 41</option>
                          <option value="42">AGE: 42</option>
                          <option value="43">AGE: 43</option>
                          <option value="44">AGE: 44</option>
                          <option value="45">AGE: 45</option>
                          <option value="46">AGE: 46</option>
                          <option value="47">AGE: 47</option>
                          <option value="48">AGE: 48</option>
                          <option value="49">AGE: 49</option>
                          <option value="50">AGE: 50</option>
                          <option value="51">AGE: 51</option>
                          <option value="52">AGE: 52</option>
                          <option value="53">AGE: 53</option>
                          <option value="54">AGE: 54</option>
                          <option value="55">AGE: 55</option>
                          <option value="56">AGE: 56</option>
                          <option value="57">AGE: 57</option>
                          <option value="58">AGE: 58</option>
                          <option value="59">AGE: 59</option>
                          <option value="60">AGE: 60</option>
                          <option value="61">AGE: 61</option>
                          <option value="62">AGE: 62</option>
                          <option value="63">AGE: 63</option>
                          <option value="64">AGE: 64</option>
                          <option value="65">AGE: 65</option>
                          <option value="66">AGE: 66</option>
                          <option value="67">AGE: 67</option>
                          <option value="68">AGE: 68</option>
                          <option value="69">AGE: 69</option>
                          <option value="70">AGE: 70</option>
                          <option value="71">AGE: 71</option>
                          <option value="72">AGE: 72</option>
                          <option value="73">AGE: 73</option>
                          <option value="74">AGE: 74</option>
                          <option value="75">AGE: 75</option>
                          <option value="76">AGE: 76</option>
                          <option value="77">AGE: 77</option>
                          <option value="78">AGE: 78</option>
                          <option value="79">AGE: 79</option>
                          <option value="80">AGE: 80</option>
                          <option value="81">AGE: 81</option>
                          <option value="82">AGE: 82</option>
                          <option value="83">AGE: 83</option>
                          <option value="84">AGE: 84</option>
                          <option value="85">AGE: 85</option>
                          <option value="86">AGE: 86</option>
                          <option value="87">AGE: 87</option>
                          <option value="88">AGE: 88</option>
                          <option value="89">AGE: 89</option>
                          <option value="90">AGE: 90</option>
                          <option value="91">AGE: 91</option>
                          <option value="92">AGE: 92</option>
                          <option value="93">AGE: 93</option>
                          <option value="94">AGE: 94</option>
                          <option value="95">AGE: 95</option>
                          <option value="96">AGE: 96</option>
                          <option value="97">AGE: 97</option>
                          <option value="98">AGE: 98</option>
                          <option value="99">AGE: 99</option>
                          <option value="100">AGE: 100</option>{" "}
                        </select>
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
            </td>
            <td>
              <fieldset id="dob_date">
                <legend>Date of Birth: (Optional)</legend>
                <h4>
                  Select any of the three to Obtain an Exact or partial Date of
                  Birth, Even htmlFor People Born on a particular day or month{" "}
                </h4>
                <div align="center">
                  <label htmlFor="selDOBMonth">DOB:</label>
                  <select
                    onChange={handleDOBChange}
                    name="selDOBMonth"
                    id="selDOBMonth"
                    className="dateSelect"
                    style={{ width: "80px" }}
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
                    onChange={handleDOBChange}
                    name="selDOBDay"
                    id="selDOBDay"
                    className="dateSelect"
                    style={{ width: "60px" }}
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
                  /
                  <select
                    onChange={handleDOBChange}
                    name="selDOBYear"
                    id="selDOBYear"
                    className="dateSelect"
                    style={{ width: "60px" }}
                  >
                    <option value="">Year</option>
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
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                    <option value="1929">1929</option>
                    <option value="1928">1928</option>
                    <option value="1927">1927</option>
                    <option value="1926">1926</option>
                    <option value="1925">1925</option>
                    <option value="1924">1924</option>
                    <option value="1923">1923</option>
                    <option value="1922">1922</option>
                    <option value="1921">1921</option>
                    <option value="1920">1920</option>
                  </select>
                  <br />
                  <span className="redtextbold1">
                    {" "}
                    Select Any of the Three or All
                  </span>
                </div>
              </fieldset>
              <hr />
            </td>
          </tr>
          <tr>
            <td width="50%">&nbsp;</td>
            <td width="50%">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="2">
              <fieldset className="stateLabel" id="fsEDUCATION">
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Educational Levels</legend>
                  </div>
                  <div>
                    <small onClick={() => setEducation(true)}>
                      (click here to expand options)
                    </small>{" "}
                    |
                    <small onClick={() => setEducation(false)}>
                      (click here to hide options)
                    </small>
                  </div>
                </div>
                {education ? (
                  <table cellPadding="4" cellSpacing="4" id="tblEDUCATION">
                    <tbody>
                      <tr>
                        <td>
                          <input
                            onChange={handleEduChange}
                            type="checkbox"
                            name="EDUCATION_0"
                            id="EDUCATION-0"
                            value="Attended Vocational/Technical"
                          />{" "}
                          <label htmlFor="EDUCATION-0">
                            Attended Vocational/Technical
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEduChange}
                            type="checkbox"
                            name="EDUCATION_1"
                            id="EDUCATION-1"
                            value="Completed College"
                          />{" "}
                          <label htmlFor="EDUCATION-1">Completed College</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEduChange}
                            type="checkbox"
                            name="EDUCATION_2"
                            id="EDUCATION-2"
                            value="Completed Graduate School"
                          />{" "}
                          <label htmlFor="EDUCATION-2">
                            Completed Graduate School
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEduChange}
                            type="checkbox"
                            name="EDUCATION_3"
                            id="EDUCATION-3"
                            value="Completed High School"
                          />{" "}
                          <label htmlFor="EDUCATION-3">
                            Completed High School
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="EDUCATION_AND_OR"
                  id="EDUCATION_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="EDUCATION_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="EDUCATION_AND_OR"
                  id="EDUCATION_OR"
                  value="1"
                />{" "}
                <label htmlFor="EDUCATION_OR">Any Match On These</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <fieldset className="stateLabel" id="fsBUSINESS_OWNER">
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Types of Business Owners</legend>
                  </div>
                  <div>
                    <small onClick={() => setBuisnessOwner(true)}>
                      (click here to expand options)
                    </small>{" "}
                    |
                    <small onClick={() => setBuisnessOwner(false)}>
                      (click here to hide options)
                    </small>
                  </div>
                </div>
                {buisnessOwner ? (
                  <table cellPadding="4" cellSpacing="4" id="tblBUSINESS_OWNER">
                    <tbody>
                      <tr>
                        <td>
                          <input
                            onChange={handleBusiChange}
                            type="checkbox"
                            name="BUSINESS_OWNER_0"
                            id="BUSINESS_OWNER-0"
                            value="Accountant"
                          />{" "}
                          <label htmlFor="BUSINESS_OWNER-0">Accountant</label>
                        </td>
                        <td>
                          <input
                            onChange={handleBusiChange}
                            type="checkbox"
                            name="BUSINESS_OWNER_1"
                            id="BUSINESS_OWNER-1"
                            value="Builder"
                          />{" "}
                          <label htmlFor="BUSINESS_OWNER-1">Builder</label>
                        </td>
                        <td>
                          <input
                            onChange={handleBusiChange}
                            type="checkbox"
                            name="BUSINESS_OWNER_2"
                            id="BUSINESS_OWNER-2"
                            value="Contractor"
                          />{" "}
                          <label htmlFor="BUSINESS_OWNER-2">Contractor</label>
                        </td>
                        <td>
                          <input
                            onChange={handleBusiChange}
                            type="checkbox"
                            name="BUSINESS_OWNER_3"
                            id="BUSINESS_OWNER-3"
                            value="Dealer/Retailer/Storekeeper"
                          />{" "}
                          <label htmlFor="BUSINESS_OWNER-3">
                            Dealer/Retailer/Storekeeper
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleBusiChange}
                            type="checkbox"
                            name="BUSINESS_OWNER_4"
                            id="BUSINESS_OWNER-4"
                            value="Distributor/Wholesaler"
                          />{" "}
                          <label htmlFor="BUSINESS_OWNER-4">
                            Distributor/Wholesaler
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleBusiChange}
                            type="checkbox"
                            name="BUSINESS_OWNER_5"
                            id="BUSINESS_OWNER-5"
                            value="Funeral Director"
                          />{" "}
                          <label htmlFor="BUSINESS_OWNER-5">
                            Funeral Director
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleBusiChange}
                            type="checkbox"
                            name="BUSINESS_OWNER_6"
                            id="BUSINESS_OWNER-6"
                            value="Maker/Manufacturer"
                          />{" "}
                          <label htmlFor="BUSINESS_OWNER-6">
                            Maker/Manufacturer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleBusiChange}
                            type="checkbox"
                            name="BUSINESS_OWNER_7"
                            id="BUSINESS_OWNER-7"
                            value="Owner"
                          />{" "}
                          <label htmlFor="BUSINESS_OWNER-7">Owner</label>
                        </td>
                        <td>
                          <input
                            onChange={handleBusiChange}
                            type="checkbox"
                            name="BUSINESS_OWNER_8"
                            id="BUSINESS_OWNER-8"
                            value="Partner"
                          />{" "}
                          <label htmlFor="BUSINESS_OWNER-8">Partner</label>
                        </td>
                        <td>
                          <input
                            onChange={handleBusiChange}
                            type="checkbox"
                            name="BUSINESS_OWNER_9"
                            id="BUSINESS_OWNER-9"
                            value="Self Employed"
                          />{" "}
                          <label htmlFor="BUSINESS_OWNER-9">
                            Self-Employed
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="BUSINESS_OWNER_AND_OR"
                  id="BUSINESS_OWNER_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="BUSINESS_OWNER_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="BUSINESS_OWNER_AND_OR"
                  id="BUSINESS_OWNER_OR"
                  value="1"
                />{" "}
                <label htmlFor="BUSINESS_OWNER_OR">Any Match On These</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <fieldset className="stateLabel" id="fsOCCUPATION">
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Occupations General</legend>
                  </div>
                  <div>
                    <small onClick={() => setOccupation(true)}>
                      (click here to expand options)
                    </small>{" "}
                    |
                    <small onClick={() => setOccupation(false)}>
                      (click here to hide options)
                    </small>
                  </div>
                </div>
                {occupation ? (
                  <table cellPadding="4" cellSpacing="4" id="tblOCCUPATION">
                    <tbody>
                      <tr>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_0"
                            id="OCCUPATION-0"
                            value="Administration / Managerial"
                          />{" "}
                          <label htmlFor="OCCUPATION-0">
                            Administration / Managerial
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_1"
                            id="OCCUPATION-1"
                            value="Clerical / White Collar"
                          />{" "}
                          <label htmlFor="OCCUPATION-1">
                            Clerical / White Collar
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_2"
                            id="OCCUPATION-2"
                            value="Craftsman / Blue Collar"
                          />{" "}
                          <label htmlFor="OCCUPATION-2">
                            Craftsman / Blue Collar
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_3"
                            id="OCCUPATION-3"
                            value="Educator"
                          />{" "}
                          <label htmlFor="OCCUPATION-3">Educator</label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_4"
                            id="OCCUPATION-4"
                            value="Farmer"
                          />{" "}
                          <label htmlFor="OCCUPATION-4">Farmer</label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_5"
                            id="OCCUPATION-5"
                            value="Financial Professional"
                          />{" "}
                          <label htmlFor="OCCUPATION-5">
                            Financial Professional
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_6"
                            id="OCCUPATION-6"
                            value="Homemaker"
                          />{" "}
                          <label htmlFor="OCCUPATION-6">Homemaker</label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_7"
                            id="OCCUPATION-7"
                            value="Legal Professional"
                          />{" "}
                          <label htmlFor="OCCUPATION-7">
                            Legal Professional
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_8"
                            id="OCCUPATION-8"
                            value="Medical Professional"
                          />{" "}
                          <label htmlFor="OCCUPATION-8">
                            Medical Professional
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_9"
                            id="OCCUPATION-9"
                            value="Military"
                          />{" "}
                          <label htmlFor="OCCUPATION-9">Military</label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_10"
                            id="OCCUPATION-10"
                            value="Other"
                          />{" "}
                          <label htmlFor="OCCUPATION-10">Other</label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_11"
                            id="OCCUPATION-11"
                            value="Professional / Technical"
                          />{" "}
                          <label htmlFor="OCCUPATION-11">
                            Professional / Technical
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_12"
                            id="OCCUPATION-12"
                            value="Religious"
                          />{" "}
                          <label htmlFor="OCCUPATION-12">Religious</label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_13"
                            id="OCCUPATION-13"
                            value="Retired"
                          />{" "}
                          <label htmlFor="OCCUPATION-13">Retired</label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_14"
                            id="OCCUPATION-14"
                            value="Sales / Service"
                          />{" "}
                          <label htmlFor="OCCUPATION-14">Sales / Service</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_15"
                            id="OCCUPATION-15"
                            value="Self Employed"
                          />{" "}
                          <label htmlFor="OCCUPATION-15">Self Employed</label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_16"
                            id="OCCUPATION-16"
                            value="Self Employed - Administration / Managerial"
                          />{" "}
                          <label htmlFor="OCCUPATION-16">
                            Self Employed - Administration / Managerial
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_17"
                            id="OCCUPATION-17"
                            value="Self Employed - Clerical / White Collar"
                          />{" "}
                          <label htmlFor="OCCUPATION-17">
                            Self Employed - Clerical / White Collar
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_18"
                            id="OCCUPATION-18"
                            value="Self Employed - Craftsman / Blue Collar"
                          />{" "}
                          <label htmlFor="OCCUPATION-18">
                            Self Employed - Craftsman / Blue Collar
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_19"
                            id="OCCUPATION-19"
                            value="Self Employed - Homemaker"
                          />{" "}
                          <label htmlFor="OCCUPATION-19">
                            Self Employed - Homemaker
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_20"
                            id="OCCUPATION-20"
                            value="Self Employed - Other"
                          />{" "}
                          <label htmlFor="OCCUPATION-20">
                            Self Employed - Other
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_21"
                            id="OCCUPATION-21"
                            value="Self Employed - Professional / Technical"
                          />{" "}
                          <label htmlFor="OCCUPATION-21">
                            Self Employed - Professional / Technical
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_22"
                            id="OCCUPATION-22"
                            value="Self Employed - Retired"
                          />{" "}
                          <label htmlFor="OCCUPATION-22">
                            Self Employed - Retired
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_23"
                            id="OCCUPATION-23"
                            value="Self Employed - Sales / Service"
                          />{" "}
                          <label htmlFor="OCCUPATION-23">
                            Self Employed - Sales / Service
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_24"
                            id="OCCUPATION-24"
                            value="Self Employed - Student"
                          />{" "}
                          <label htmlFor="OCCUPATION-24">
                            Self Employed - Student
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleGeneralChange}
                            type="checkbox"
                            name="OCCUPATION_25"
                            id="OCCUPATION-25"
                            value="Student"
                          />{" "}
                          <label htmlFor="OCCUPATION-25">Student</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="OCCUPATION_AND_OR"
                  id="OCCUPATION_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="OCCUPATION_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="OCCUPATION_AND_OR"
                  id="OCCUPATION_OR"
                  value="1"
                />{" "}
                <label htmlFor="OCCUPATION_OR">Any Match On These</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <fieldset className="stateLabel" id="fsOCCUPATION_DETAILED">
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Occupations Detailed</legend>
                  </div>
                  <div>
                    <small onClick={() => setOccupationDetails(true)}>
                      (click here to expand options)
                    </small>{" "}
                    |
                    <small onClick={() => setOccupationDetails(false)}>
                      (click here to hide options)
                    </small>
                  </div>
                </div>
                {occupationDetails ? (
                  <table
                    cellPadding="4"
                    cellSpacing="4"
                    id="tblOCCUPATION_DETAILED"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_0"
                            id="OCCUPATION_DETAILED-0"
                            value="Account Executive"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-0">
                            Account Executive
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_1"
                            id="OCCUPATION_DETAILED-1"
                            value="Accounting/Biller/Billing clerk"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-1">
                            Accounting/Biller/Billing clerk
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_2"
                            id="OCCUPATION_DETAILED-2"
                            value="Actor/Entertainer/Announcer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-2">
                            Actor/Entertainer/Announcer
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_3"
                            id="OCCUPATION_DETAILED-3"
                            value="Adjuster"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-3">
                            Adjuster
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_4"
                            id="OCCUPATION_DETAILED-4"
                            value="Administration/Management"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-4">
                            Administration/Management
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_5"
                            id="OCCUPATION_DETAILED-5"
                            value="Advertising"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-5">
                            Advertising
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_6"
                            id="OCCUPATION_DETAILED-6"
                            value="Agent"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-6">Agent</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_7"
                            id="OCCUPATION_DETAILED-7"
                            value="Aide/Assistant"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-7">
                            Aide/Assistant
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_8"
                            id="OCCUPATION_DETAILED-8"
                            value="Aide/Assistant/Executive"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-8">
                            Aide/Assistant/Executive
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_9"
                            id="OCCUPATION_DETAILED-9"
                            value="Aide/Assistant/Office"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-9">
                            Aide/Assistant/Office
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_10"
                            id="OCCUPATION_DETAILED-10"
                            value="Aide/Assistant/School"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-10">
                            Aide/Assistant/School
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_11"
                            id="OCCUPATION_DETAILED-11"
                            value="Aide/Assistant/Staff"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-11">
                            Aide/Assistant/Staff
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_12"
                            id="OCCUPATION_DETAILED-12"
                            value="Aide/Assistant/Technical"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-12">
                            Aide/Assistant/Technical
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_13"
                            id="OCCUPATION_DETAILED-13"
                            value="Air Force"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-13">
                            Air Force
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_14"
                            id="OCCUPATION_DETAILED-14"
                            value="Air Traffic Control"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-14">
                            Air Traffic Control
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_15"
                            id="OCCUPATION_DETAILED-15"
                            value="Analyst"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-15">
                            Analyst
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_16"
                            id="OCCUPATION_DETAILED-16"
                            value="Animal Technician/Groomer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-16">
                            Animal Technician/Groomer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_17"
                            id="OCCUPATION_DETAILED-17"
                            value="Appraiser"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-17">
                            Appraiser
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_18"
                            id="OCCUPATION_DETAILED-18"
                            value="Apprentice"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-18">
                            Apprentice
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_19"
                            id="OCCUPATION_DETAILED-19"
                            value="Architect"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-19">
                            Architect
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_20"
                            id="OCCUPATION_DETAILED-20"
                            value="Armed Forces"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-20">
                            Armed Forces
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_21"
                            id="OCCUPATION_DETAILED-21"
                            value="Army Credit Union Trades"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-21">
                            Army Credit Union Trades
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_22"
                            id="OCCUPATION_DETAILED-22"
                            value="Artist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-22">Artist</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_23"
                            id="OCCUPATION_DETAILED-23"
                            value="Assembler"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-23">
                            Assembler
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_24"
                            id="OCCUPATION_DETAILED-24"
                            value="Athlete/Professional"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-24">
                            Athlete/Professional
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_25"
                            id="OCCUPATION_DETAILED-25"
                            value="Attendant"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-25">
                            Attendant
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_26"
                            id="OCCUPATION_DETAILED-26"
                            value="Auctioneer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-26">
                            Auctioneer
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_27"
                            id="OCCUPATION_DETAILED-27"
                            value="Auditor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-27">
                            Auditor
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_28"
                            id="OCCUPATION_DETAILED-28"
                            value="Auto Mechanic"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-28">
                            Auto Mechanic
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_29"
                            id="OCCUPATION_DETAILED-29"
                            value="Baker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-29">Baker</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_30"
                            id="OCCUPATION_DETAILED-30"
                            value="Banker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-30">Banker</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_31"
                            id="OCCUPATION_DETAILED-31"
                            value="Banker/Loan Office"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-31">
                            Banker/Loan Office
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_32"
                            id="OCCUPATION_DETAILED-32"
                            value="Banker/Loan Processor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-32">
                            Banker/Loan Processor
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_33"
                            id="OCCUPATION_DETAILED-33"
                            value="Barber/Hairstylist/Beautician"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-33">
                            Barber/Hairstylist/Beautician
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_34"
                            id="OCCUPATION_DETAILED-34"
                            value="Bartender"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-34">
                            Bartender
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_35"
                            id="OCCUPATION_DETAILED-35"
                            value="Binder"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-35">Binder</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_36"
                            id="OCCUPATION_DETAILED-36"
                            value="Blue Collar Worker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-36">
                            Blue Collar Worker
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_37"
                            id="OCCUPATION_DETAILED-37"
                            value="Bodyman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-37">
                            Bodyman
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_38"
                            id="OCCUPATION_DETAILED-38"
                            value="Bookkeeper"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-38">
                            Bookkeeper
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_39"
                            id="OCCUPATION_DETAILED-39"
                            value="Brakeman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-39">
                            Brakeman
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_40"
                            id="OCCUPATION_DETAILED-40"
                            value="Brewer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-40">Brewer</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_41"
                            id="OCCUPATION_DETAILED-41"
                            value="Broker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-41">Broker</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_42"
                            id="OCCUPATION_DETAILED-42"
                            value="Broker/Stock/Trader"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-42">
                            Broker/Stock/Trader
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_43"
                            id="OCCUPATION_DETAILED-43"
                            value="Butcher/Meat Cutter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-43">
                            Butcher/Meat Cutter
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_44"
                            id="OCCUPATION_DETAILED-44"
                            value="Buyer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-44">Buyer</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_45"
                            id="OCCUPATION_DETAILED-45"
                            value="CEO/CFO/Chairman/Corp Officer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-45">
                            CEO/CFO/Chairman/Corp Officer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_46"
                            id="OCCUPATION_DETAILED-46"
                            value="Carpenter/Furniture/Woodworking"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-46">
                            Carpenter/Furniture/Woodworking
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_47"
                            id="OCCUPATION_DETAILED-47"
                            value="Cashier"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-47">
                            Cashier
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_48"
                            id="OCCUPATION_DETAILED-48"
                            value="Caterer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-48">
                            Caterer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_49"
                            id="OCCUPATION_DETAILED-49"
                            value="Checker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-49">
                            Checker
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_50"
                            id="OCCUPATION_DETAILED-50"
                            value="Chef/Butler"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-50">
                            Chef/Butler
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_51"
                            id="OCCUPATION_DETAILED-51"
                            value="Chemist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-51">
                            Chemist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_52"
                            id="OCCUPATION_DETAILED-52"
                            value="Child Care/Day Care/Babysitter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-52">
                            Child Care/Day Care/Babysitter
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_53"
                            id="OCCUPATION_DETAILED-53"
                            value="Chiropractor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-53">
                            Chiropractor
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_54"
                            id="OCCUPATION_DETAILED-54"
                            value="Civil Service"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-54">
                            Civil Service
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED-55"
                            id="OCCUPATION_DETAILED-55"
                            value="Civil Service/Government"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-55">
                            Civil Service/Government
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_56"
                            id="OCCUPATION_DETAILED-56"
                            value="Claims Examiner/Rep/Adjudicator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-56">
                            Claims Examiner/Rep/Adjudicator
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_57"
                            id="OCCUPATION_DETAILED-57"
                            value="Cleaner/Laundry"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-57">
                            Cleaner/Laundry
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_58"
                            id="OCCUPATION_DETAILED-58"
                            value="Clerk"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-58">Clerk</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_59"
                            id="OCCUPATION_DETAILED-59"
                            value="Clerk/Deli"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-59">
                            Clerk/Deli
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_60"
                            id="OCCUPATION_DETAILED-60"
                            value="Clerk/File"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-60">
                            Clerk/File
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_61"
                            id="OCCUPATION_DETAILED-61"
                            value="Clerk/Produce"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-61">
                            Clerk/Produce
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_62"
                            id="OCCUPATION_DETAILED-62"
                            value="Clerk/Stock"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-62">
                            Clerk/Stock
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_63"
                            id="OCCUPATION_DETAILED-63"
                            value="Coach"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-63">Coach</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_64"
                            id="OCCUPATION_DETAILED-64"
                            value="Coast Guard"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-64">
                            Coast Guard
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_65"
                            id="OCCUPATION_DETAILED-65"
                            value="Collector"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-65">
                            Collector
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_66"
                            id="OCCUPATION_DETAILED-66"
                            value="Communications"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-66">
                            Communications
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_67"
                            id="OCCUPATION_DETAILED-67"
                            value="Comptroller"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-67">
                            Comptroller
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_68"
                            id="OCCUPATION_DETAILED-68"
                            value="Computer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-68">
                            Computer
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_69"
                            id="OCCUPATION_DETAILED-69"
                            value="Computer Operator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-69">
                            Computer Operator
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_70"
                            id="OCCUPATION_DETAILED-70"
                            value="Computer Programmer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-70">
                            Computer Programmer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_71"
                            id="OCCUPATION_DETAILED-71"
                            value="Computer/Systems Analyst"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-71">
                            Computer/Systems Analyst
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_72"
                            id="OCCUPATION_DETAILED-72"
                            value="Conductor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-72">
                            Conductor
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_73"
                            id="OCCUPATION_DETAILED-73"
                            value="Conservation/Environment"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-73">
                            Conservation/Environment
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_74"
                            id="OCCUPATION_DETAILED-74"
                            value="Construction"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-74">
                            Construction
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_75"
                            id="OCCUPATION_DETAILED-75"
                            value="Consultant/Advisor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-75">
                            Consultant/Advisor
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_76"
                            id="OCCUPATION_DETAILED-76"
                            value="Cook"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-76">Cook</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_77"
                            id="OCCUPATION_DETAILED-77"
                            value="Coordinator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-77">
                            Coordinator
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_78"
                            id="OCCUPATION_DETAILED-78"
                            value="Corrections/Probation/Parole"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-78">
                            Corrections/Probation/Parole
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_79"
                            id="OCCUPATION_DETAILED-79"
                            value="Cosmetologist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-79">
                            Cosmetologist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_80"
                            id="OCCUPATION_DETAILED-80"
                            value="Counselor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-80">
                            Counselor
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_81"
                            id="OCCUPATION_DETAILED-81"
                            value="Courier/Delivery/Messenger"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-81">
                            Courier/Delivery/Messenger
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_82"
                            id="OCCUPATION_DETAILED-82"
                            value="Court Reporter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-82">
                            Court Reporter
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_83"
                            id="OCCUPATION_DETAILED-83"
                            value="Crewman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-83">
                            Crewman
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_84"
                            id="OCCUPATION_DETAILED-84"
                            value="Curator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-84">
                            Curator
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_85"
                            id="OCCUPATION_DETAILED-85"
                            value="Custodian"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-85">
                            Custodian
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_86"
                            id="OCCUPATION_DETAILED-86"
                            value="Customer Service/Representative"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-86">
                            Customer Service/Representative
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_87"
                            id="OCCUPATION_DETAILED-87"
                            value="Cutter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-87">Cutter</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_88"
                            id="OCCUPATION_DETAILED-88"
                            value="Data Entry/Key Punch"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-88">
                            Data Entry/Key Punch
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_89"
                            id="OCCUPATION_DETAILED-89"
                            value="Dental Assistant"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-89">
                            Dental Assistant
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_90"
                            id="OCCUPATION_DETAILED-90"
                            value="Dental Hygienist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-90">
                            Dental Hygienist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_91"
                            id="OCCUPATION_DETAILED-91"
                            value="Dentist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-91">
                            Dentist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_92"
                            id="OCCUPATION_DETAILED-92"
                            value="Designer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-92">
                            Designer
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_93"
                            id="OCCUPATION_DETAILED-93"
                            value="Detective/Investigator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-93">
                            Detective/Investigator
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_94"
                            id="OCCUPATION_DETAILED-94"
                            value="Dietician"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-94">
                            Dietician
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_95"
                            id="OCCUPATION_DETAILED-95"
                            value="Director/Art Director"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-95">
                            Director/Art Director
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_96"
                            id="OCCUPATION_DETAILED-96"
                            value="Director/Executive Director"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-96">
                            Director/Executive Director
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_97"
                            id="OCCUPATION_DETAILED-97"
                            value="Dispatcher"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-97">
                            Dispatcher
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_98"
                            id="OCCUPATION_DETAILED-98"
                            value="Dock Worker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-98">
                            Dock Worker
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_99"
                            id="OCCUPATION_DETAILED-99"
                            value="Draftsman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-99">
                            Draftsman
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_100"
                            id="OCCUPATION_DETAILED-100"
                            value="Driver"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-100">
                            Driver
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_101"
                            id="OCCUPATION_DETAILED-101"
                            value="Driver/Bus Driver"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-101">
                            Driver/Bus Driver
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_102"
                            id="OCCUPATION_DETAILED-102"
                            value="Driver/Truck Driver"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-102">
                            Driver/Truck Driver
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_103"
                            id="OCCUPATION_DETAILED-103"
                            value="Editor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-103">
                            Editor
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_104"
                            id="OCCUPATION_DETAILED-104"
                            value="Electrician"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-104">
                            Electrician
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_105"
                            id="OCCUPATION_DETAILED-105"
                            value="Engineer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-105">
                            Engineer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_106"
                            id="OCCUPATION_DETAILED-106"
                            value="Engineer/Aerospace"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-106">
                            Engineer/Aerospace
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_107"
                            id="OCCUPATION_DETAILED-107"
                            value="Engineer/Chemical"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-107">
                            Engineer/Chemical
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_108"
                            id="OCCUPATION_DETAILED-108"
                            value="Engineer/Civil"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-108">
                            Engineer/Civil
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_109"
                            id="OCCUPATION_DETAILED-109"
                            value="Engineer/Electrical/Electronic"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-109">
                            Engineer/Electrical/Electronic
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_110"
                            id="OCCUPATION_DETAILED-110"
                            value="Engineer/Field"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-110">
                            Engineer/Field
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_111"
                            id="OCCUPATION_DETAILED-111"
                            value="Engineer/Industrial"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-111">
                            Engineer/Industrial
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_112"
                            id="OCCUPATION_DETAILED-112"
                            value="Engineer/Mechanical"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-112">
                            Engineer/Mechanical
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_113"
                            id="OCCUPATION_DETAILED-113"
                            value="Estimator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-113">
                            Estimator
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_114"
                            id="OCCUPATION_DETAILED-114"
                            value="Executive/Upper Management"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-114">
                            Executive/Upper Management
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_115"
                            id="OCCUPATION_DETAILED-115"
                            value="Expeditor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-115">
                            Expeditor
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_116"
                            id="OCCUPATION_DETAILED-116"
                            value="Fabricator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-116">
                            Fabricator
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_117"
                            id="OCCUPATION_DETAILED-117"
                            value="Factory Workman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-117">
                            Factory Workman
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_118"
                            id="OCCUPATION_DETAILED-118"
                            value="Farmer/Dairyman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-118">
                            Farmer/Dairyman
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_119"
                            id="OCCUPATION_DETAILED-119"
                            value="Finance"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-119">
                            Finance
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_120"
                            id="OCCUPATION_DETAILED-120"
                            value="Finisher"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-120">
                            Finisher
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_121"
                            id="OCCUPATION_DETAILED-121"
                            value="Firefighter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-121">
                            Firefighter
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_122"
                            id="OCCUPATION_DETAILED-122"
                            value="Fisherman/Seaman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-122">
                            Fisherman/Seaman
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_123"
                            id="OCCUPATION_DETAILED-123"
                            value="Fitter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-123">
                            Fitter
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_124"
                            id="OCCUPATION_DETAILED-124"
                            value="Flight Attendant/Steward"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-124">
                            Flight Attendant/Steward
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_125"
                            id="OCCUPATION_DETAILED-125"
                            value="Florist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-125">
                            Florist
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_126"
                            id="OCCUPATION_DETAILED-126"
                            value="Food Service"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-126">
                            Food Service
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_127"
                            id="OCCUPATION_DETAILED-127"
                            value="Foreman/Crew leader"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-127">
                            Foreman/Crew leader
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_128"
                            id="OCCUPATION_DETAILED-128"
                            value="Foreman/Shop Foreman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-128">
                            Foreman/Shop Foreman
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_129"
                            id="OCCUPATION_DETAILED-129"
                            value="Forestry"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-129">
                            Forestry
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_130"
                            id="OCCUPATION_DETAILED-130"
                            value="Foundry Worker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-130">
                            Foundry Worker
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_131"
                            id="OCCUPATION_DETAILED-131"
                            value="Furrier"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-131">
                            Furrier
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_132"
                            id="OCCUPATION_DETAILED-132"
                            value="Gardener/Landscaper"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-132">
                            Gardener/Landscaper
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_133"
                            id="OCCUPATION_DETAILED-133"
                            value="Geologist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-133">
                            Geologist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_134"
                            id="OCCUPATION_DETAILED-134"
                            value="Glazier"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-134">
                            Glazier
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_135"
                            id="OCCUPATION_DETAILED-135"
                            value="Graphic Designer/Commercial Artist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-135">
                            Graphic Designer/Commercial Artist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_136"
                            id="OCCUPATION_DETAILED-136"
                            value="Grinder"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-136">
                            Grinder
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_137"
                            id="OCCUPATION_DETAILED-137"
                            value="Grocer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-137">
                            Grocer
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_138"
                            id="OCCUPATION_DETAILED-138"
                            value="Health Care"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-138">
                            Health Care
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_139"
                            id="OCCUPATION_DETAILED-139"
                            value="Health Services"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-139">
                            Health Services
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_140"
                            id="OCCUPATION_DETAILED-140"
                            value="Helper"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-140">
                            Helper
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_141"
                            id="OCCUPATION_DETAILED-141"
                            value="Home Economist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-141">
                            Home Economist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_142"
                            id="OCCUPATION_DETAILED-142"
                            value="Homemaker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-142">
                            Homemaker
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_143"
                            id="OCCUPATION_DETAILED-143"
                            value="Hostess/Host/Usher"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-143">
                            Hostess/Host/Usher
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_144"
                            id="OCCUPATION_DETAILED-144"
                            value="Housekeeper/Maid"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-144">
                            Housekeeper/Maid
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_145"
                            id="OCCUPATION_DETAILED-145"
                            value="Inspector"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-145">
                            Inspector
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_146"
                            id="OCCUPATION_DETAILED-146"
                            value="Installer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-146">
                            Installer
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_147"
                            id="OCCUPATION_DETAILED-147"
                            value="Instructor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-147">
                            Instructor
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_148"
                            id="OCCUPATION_DETAILED-148"
                            value="Insurance/Agent"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-148">
                            Insurance/Agent
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_149"
                            id="OCCUPATION_DETAILED-149"
                            value="Insurance/Underwriter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-149">
                            Insurance/Underwriter
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_150"
                            id="OCCUPATION_DETAILED-150"
                            value="Interior Designer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-150">
                            Interior Designer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_151"
                            id="OCCUPATION_DETAILED-151"
                            value="Ironworker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-151">
                            Ironworker
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_152"
                            id="OCCUPATION_DETAILED-152"
                            value="Janitor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-152">
                            Janitor
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_153"
                            id="OCCUPATION_DETAILED-153"
                            value="Jeweler"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-153">
                            Jeweler
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_154"
                            id="OCCUPATION_DETAILED-154"
                            value="Journeyman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-154">
                            Journeyman
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_155"
                            id="OCCUPATION_DETAILED-155"
                            value="Judge/Referee"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-155">
                            Judge/Referee
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_156"
                            id="OCCUPATION_DETAILED-156"
                            value="Laborer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-156">
                            Laborer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_157"
                            id="OCCUPATION_DETAILED-157"
                            value="Lecturer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-157">
                            Lecturer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_158"
                            id="OCCUPATION_DETAILED-158"
                            value="Legal Secretary"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-158">
                            Legal Secretary
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_159"
                            id="OCCUPATION_DETAILED-159"
                            value="Legal/Attorney/Lawyer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-159">
                            Legal/Attorney/Lawyer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_160"
                            id="OCCUPATION_DETAILED-160"
                            value="Legal/Paralegal/Assistant"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-160">
                            Legal/Paralegal/Assistant
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_161"
                            id="OCCUPATION_DETAILED-161"
                            value="Librarian/Archivist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-161">
                            Librarian/Archivist
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_162"
                            id="OCCUPATION_DETAILED-162"
                            value="Lineman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-162">
                            Lineman
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_163"
                            id="OCCUPATION_DETAILED-163"
                            value="Lithographer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-163">
                            Lithographer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_164"
                            id="OCCUPATION_DETAILED-164"
                            value="Loader"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-164">
                            Loader
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_165"
                            id="OCCUPATION_DETAILED-165"
                            value="Locksmith"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-165">
                            Locksmith
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_166"
                            id="OCCUPATION_DETAILED-166"
                            value="Machinist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-166">
                            Machinist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_167"
                            id="OCCUPATION_DETAILED-167"
                            value="Mail Carrier/Postal"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-167">
                            Mail Carrier/Postal
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_168"
                            id="OCCUPATION_DETAILED-168"
                            value="Mail/Postmaster"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-168">
                            Mail/Postmaster
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_169"
                            id="OCCUPATION_DETAILED-169"
                            value="Maintenance"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-169">
                            Maintenance
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_170"
                            id="OCCUPATION_DETAILED-170"
                            value="Maintenance/Supervisor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-170">
                            Maintenance/Supervisor
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_171"
                            id="OCCUPATION_DETAILED-171"
                            value="Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-171">
                            Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_172"
                            id="OCCUPATION_DETAILED-172"
                            value="Manager/Assistant Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-172">
                            Manager/Assistant Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_173"
                            id="OCCUPATION_DETAILED-173"
                            value="Manager/Branch Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-173">
                            Manager/Branch Manager
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_174"
                            id="OCCUPATION_DETAILED-174"
                            value="Manager/Credit Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-174">
                            Manager/Credit Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_175"
                            id="OCCUPATION_DETAILED-175"
                            value="Manager/District Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-175">
                            Manager/District Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_176"
                            id="OCCUPATION_DETAILED-176"
                            value="Manager/Division Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-176">
                            Manager/Division Manager
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_177"
                            id="OCCUPATION_DETAILED-177"
                            value="Manager/Marketing Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-177">
                            Manager/Marketing Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_178"
                            id="OCCUPATION_DETAILED-178"
                            value="Manager/Office Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-178">
                            Manager/Office Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_179"
                            id="OCCUPATION_DETAILED-179"
                            value="Manager/Plant Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-179">
                            Manager/Plant Manager
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_180"
                            id="OCCUPATION_DETAILED-180"
                            value="Manager/Product Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-180">
                            Manager/Product Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_181"
                            id="OCCUPATION_DETAILED-181"
                            value="Manager/Project Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-181">
                            Manager/Project Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_182"
                            id="OCCUPATION_DETAILED-182"
                            value="Manager/Property Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-182">
                            Manager/Property Manager
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_183"
                            id="OCCUPATION_DETAILED-183"
                            value="Manager/Regional Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-183">
                            Manager/Regional Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_184"
                            id="OCCUPATION_DETAILED-184"
                            value="Manager/Sales Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-184">
                            Manager/Sales Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_185"
                            id="OCCUPATION_DETAILED-185"
                            value="Manager/Store Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-185">
                            Manager/Store Manager
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_186"
                            id="OCCUPATION_DETAILED-186"
                            value="Manager/Traffic Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-186">
                            Manager/Traffic Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_187"
                            id="OCCUPATION_DETAILED-187"
                            value="Manager/Warehouse Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-187">
                            Manager/Warehouse Manager
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_188"
                            id="OCCUPATION_DETAILED-188"
                            value="Manger/General Manager"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-188">
                            Manger/General Manager
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_189"
                            id="OCCUPATION_DETAILED-189"
                            value="Marines"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-189">
                            Marines
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_190"
                            id="OCCUPATION_DETAILED-190"
                            value="Marketing"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-190">
                            Marketing
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_191"
                            id="OCCUPATION_DETAILED-191"
                            value="Mason/Brick/Etc."
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-191">
                            Mason/Brick/Etc.
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_192"
                            id="OCCUPATION_DETAILED-192"
                            value="Material Handler"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-192">
                            Material Handler
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_193"
                            id="OCCUPATION_DETAILED-193"
                            value="Mechanic"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-193">
                            Mechanic
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_194"
                            id="OCCUPATION_DETAILED-194"
                            value="Medical Assistant"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-194">
                            Medical Assistant
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_195"
                            id="OCCUPATION_DETAILED-195"
                            value="Medical Doctor/Physician"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-195">
                            Medical Doctor/Physician
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_196"
                            id="OCCUPATION_DETAILED-196"
                            value="Medical Secretary"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-196">
                            Medical Secretary
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_197"
                            id="OCCUPATION_DETAILED-197"
                            value="Medical Technician"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-197">
                            Medical Technician
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_198"
                            id="OCCUPATION_DETAILED-198"
                            value="Medical/Paramedic"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-198">
                            Medical/Paramedic
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_199"
                            id="OCCUPATION_DETAILED-199"
                            value="Merchandiser"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-199">
                            Merchandiser
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_200"
                            id="OCCUPATION_DETAILED-200"
                            value="Meter Reader"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-200">
                            Meter Reader
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_201"
                            id="OCCUPATION_DETAILED-201"
                            value="Middle Management"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-201">
                            Middle Management
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_202"
                            id="OCCUPATION_DETAILED-202"
                            value="Mill worker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-202">
                            Mill worker
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_203"
                            id="OCCUPATION_DETAILED-203"
                            value="Millwright"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-203">
                            Millwright
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_204"
                            id="OCCUPATION_DETAILED-204"
                            value="Miner"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-204">Miner</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_205"
                            id="OCCUPATION_DETAILED-205"
                            value="Model"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-205">Model</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_206"
                            id="OCCUPATION_DETAILED-206"
                            value="Mold Maker/Molder/Injection Mold"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-206">
                            Mold Maker/Molder/Injection Mold
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_207"
                            id="OCCUPATION_DETAILED-207"
                            value="Musician/Music/Dance"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-207">
                            Musician/Music/Dance
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_208"
                            id="OCCUPATION_DETAILED-208"
                            value="National Guard"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-208">
                            National Guard
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_209"
                            id="OCCUPATION_DETAILED-209"
                            value="Navy Credit Union Trades"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-209">
                            Navy Credit Union Trades
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_210"
                            id="OCCUPATION_DETAILED-210"
                            value="Nurse"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-210">Nurse</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_211"
                            id="OCCUPATION_DETAILED-211"
                            value="Nurse (Registered)"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-211">
                            Nurse (Registered)
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_212"
                            id="OCCUPATION_DETAILED-212"
                            value="Nurse/LPN"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-212">
                            Nurse/LPN
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_213"
                            id="OCCUPATION_DETAILED-213"
                            value="Nurses Aide/Orderly"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-213">
                            Nurses Aide/Orderly
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_214"
                            id="OCCUPATION_DETAILED-214"
                            value="Oil Industry/Driller"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-214">
                            Oil Industry/Driller
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_215"
                            id="OCCUPATION_DETAILED-215"
                            value="Operator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-215">
                            Operator
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_216"
                            id="OCCUPATION_DETAILED-216"
                            value="Operator/Boilermaker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-216">
                            Operator/Boilermaker
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_217"
                            id="OCCUPATION_DETAILED-217"
                            value="Operator/Crane Operator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-217">
                            Operator/Crane Operator
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_218"
                            id="OCCUPATION_DETAILED-218"
                            value="Operator/Forklift Operator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-218">
                            Operator/Forklift Operator
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_219"
                            id="OCCUPATION_DETAILED-219"
                            value="Operator/Machine Operator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-219">
                            Operator/Machine Operator
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_220"
                            id="OCCUPATION_DETAILED-220"
                            value="Optician"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-220">
                            Optician
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_221"
                            id="OCCUPATION_DETAILED-221"
                            value="Optometrist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-221">
                            Optometrist
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_222"
                            id="OCCUPATION_DETAILED-222"
                            value="Packer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-222">
                            Packer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_223"
                            id="OCCUPATION_DETAILED-223"
                            value="Painter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-223">
                            Painter
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_224"
                            id="OCCUPATION_DETAILED-224"
                            value="Part Time"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-224">
                            Part Time
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_225"
                            id="OCCUPATION_DETAILED-225"
                            value="Parts (Auto Etc.)"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-225">
                            Parts (Auto Etc.)
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_226"
                            id="OCCUPATION_DETAILED-226"
                            value="Pastor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-226">
                            Pastor
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_227"
                            id="OCCUPATION_DETAILED-227"
                            value="Personnel/Recruiter/Interviewer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-227">
                            Personnel/Recruiter/Interviewer
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_228"
                            id="OCCUPATION_DETAILED-228"
                            value="Pharmacist/Pharmacy"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-228">
                            Pharmacist/Pharmacy
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_229"
                            id="OCCUPATION_DETAILED-229"
                            value="Photography"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-229">
                            Photography
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_230"
                            id="OCCUPATION_DETAILED-230"
                            value="Pilot"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-230">Pilot</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_231"
                            id="OCCUPATION_DETAILED-231"
                            value="Pipe fitter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-231">
                            Pipe fitter
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_232"
                            id="OCCUPATION_DETAILED-232"
                            value="Planner"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-232">
                            Planner
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_233"
                            id="OCCUPATION_DETAILED-233"
                            value="Plumber"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-233">
                            Plumber
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_234"
                            id="OCCUPATION_DETAILED-234"
                            value="Police/Trooper"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-234">
                            Police/Trooper
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_235"
                            id="OCCUPATION_DETAILED-235"
                            value="Polisher"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-235">
                            Polisher
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_236"
                            id="OCCUPATION_DETAILED-236"
                            value="Politician/Legislator/Diplomat"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-236">
                            Politician/Legislator/Diplomat
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_237"
                            id="OCCUPATION_DETAILED-237"
                            value="Porter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-237">
                            Porter
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_238"
                            id="OCCUPATION_DETAILED-238"
                            value="President"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-238">
                            President
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_239"
                            id="OCCUPATION_DETAILED-239"
                            value="Press Operator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-239">
                            Press Operator
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_240"
                            id="OCCUPATION_DETAILED-240"
                            value="Presser"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-240">
                            Presser
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_241"
                            id="OCCUPATION_DETAILED-241"
                            value="Principal/Dean/Educator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-241">
                            Principal/Dean/Educator
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_242"
                            id="OCCUPATION_DETAILED-242"
                            value="Printer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-242">
                            Printer
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_243"
                            id="OCCUPATION_DETAILED-243"
                            value="Production"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-243">
                            Production
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_244"
                            id="OCCUPATION_DETAILED-244"
                            value="Professional"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-244">
                            Professional
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_245"
                            id="OCCUPATION_DETAILED-245"
                            value="Professor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-245">
                            Professor
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_246"
                            id="OCCUPATION_DETAILED-246"
                            value="Psychologist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-246">
                            Psychologist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_247"
                            id="OCCUPATION_DETAILED-247"
                            value="Public Relations"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-247">
                            Public Relations
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_248"
                            id="OCCUPATION_DETAILED-248"
                            value="Publishing"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-248">
                            Publishing
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_249"
                            id="OCCUPATION_DETAILED-249"
                            value="Purchasing"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-249">
                            Purchasing
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_250"
                            id="OCCUPATION_DETAILED-250"
                            value="Quality Control"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-250">
                            Quality Control
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_251"
                            id="OCCUPATION_DETAILED-251"
                            value="Real Estate/Realtor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-251">
                            Real Estate/Realtor
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_252"
                            id="OCCUPATION_DETAILED-252"
                            value="Receptionist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-252">
                            Receptionist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_253"
                            id="OCCUPATION_DETAILED-253"
                            value="Repairman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-253">
                            Repairman
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_254"
                            id="OCCUPATION_DETAILED-254"
                            value="Reporter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-254">
                            Reporter
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_255"
                            id="OCCUPATION_DETAILED-255"
                            value="Researcher"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-255">
                            Researcher
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_256"
                            id="OCCUPATION_DETAILED-256"
                            value="Retired"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-256">
                            Retired
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_257"
                            id="OCCUPATION_DETAILED-257"
                            value="Retired/Pensioner"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-257">
                            Retired/Pensioner
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_258"
                            id="OCCUPATION_DETAILED-258"
                            value="Roofer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-258">
                            Roofer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_259"
                            id="OCCUPATION_DETAILED-259"
                            value="Sales"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-259">Sales</label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_260"
                            id="OCCUPATION_DETAILED-260"
                            value="Sales Clerk/Counterman"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-260">
                            Sales Clerk/Counterman
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_261"
                            id="OCCUPATION_DETAILED-261"
                            value="Sanitation/Exterminator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-261">
                            Sanitation/Exterminator
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_262"
                            id="OCCUPATION_DETAILED-262"
                            value="Scientist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-262">
                            Scientist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_263"
                            id="OCCUPATION_DETAILED-263"
                            value="Seamstress/Tailor/Handicraft"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-263">
                            Seamstress/Tailor/Handicraft
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_264"
                            id="OCCUPATION_DETAILED-264"
                            value="Secretary"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-264">
                            Secretary
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_265"
                            id="OCCUPATION_DETAILED-265"
                            value="Security"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-265">
                            Security
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_266"
                            id="OCCUPATION_DETAILED-266"
                            value="Setup man"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-266">
                            Setup man
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_267"
                            id="OCCUPATION_DETAILED-267"
                            value="Sheet Metal Worker/Steel Worker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-267">
                            Sheet Metal Worker/Steel Worker
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_268"
                            id="OCCUPATION_DETAILED-268"
                            value="Shipping/Import/Export/Custom"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-268">
                            Shipping/Import/Export/Custom
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_269"
                            id="OCCUPATION_DETAILED-269"
                            value="Social Worker/Case Worker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-269">
                            Social Worker/Case Worker
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_270"
                            id="OCCUPATION_DETAILED-270"
                            value="Sorter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-270">
                            Sorter
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_271"
                            id="OCCUPATION_DETAILED-271"
                            value="Statistician/Actuary"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-271">
                            Statistician/Actuary
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_272"
                            id="OCCUPATION_DETAILED-272"
                            value="Student"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-272">
                            Student
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_273"
                            id="OCCUPATION_DETAILED-273"
                            value="Superintendent"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-273">
                            Superintendent
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_274"
                            id="OCCUPATION_DETAILED-274"
                            value="Supervisor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-274">
                            Supervisor
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_275"
                            id="OCCUPATION_DETAILED-275"
                            value="Surveyor"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-275">
                            Surveyor
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_276"
                            id="OCCUPATION_DETAILED-276"
                            value="Teacher"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-276">
                            Teacher
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_277"
                            id="OCCUPATION_DETAILED-277"
                            value="Technician"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-277">
                            Technician
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_278"
                            id="OCCUPATION_DETAILED-278"
                            value="Technician/Lab"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-278">
                            Technician/Lab
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_279"
                            id="OCCUPATION_DETAILED-279"
                            value="Technician/X-ray"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-279">
                            Technician/X-ray
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_280"
                            id="OCCUPATION_DETAILED-280"
                            value="Telemarketer/Telephone/Operator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-280">
                            Telemarketer/Telephone/Operator
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_281"
                            id="OCCUPATION_DETAILED-281"
                            value="Teller/Bank Teller"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-281">
                            Teller/Bank Teller
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_282"
                            id="OCCUPATION_DETAILED-282"
                            value="Tester"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-282">
                            Tester
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_283"
                            id="OCCUPATION_DETAILED-283"
                            value="Therapist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-283">
                            Therapist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_284"
                            id="OCCUPATION_DETAILED-284"
                            value="Therapists/Physical"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-284">
                            Therapists/Physical
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_285"
                            id="OCCUPATION_DETAILED-285"
                            value="Toolmaker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-285">
                            Toolmaker
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_286"
                            id="OCCUPATION_DETAILED-286"
                            value="Trainer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-286">
                            Trainer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_287"
                            id="OCCUPATION_DETAILED-287"
                            value="Transcripter/Translator"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-287">
                            Transcripter/Translator
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_288"
                            id="OCCUPATION_DETAILED-288"
                            value="Transportation"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-288">
                            Transportation
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_289"
                            id="OCCUPATION_DETAILED-289"
                            value="Travel Agent"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-289">
                            Travel Agent
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_290"
                            id="OCCUPATION_DETAILED-290"
                            value="Treasurer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-290">
                            Treasurer
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_291"
                            id="OCCUPATION_DETAILED-291"
                            value="Typesetter"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-291">
                            Typesetter
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_292"
                            id="OCCUPATION_DETAILED-292"
                            value="Typist"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-292">
                            Typist
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_293"
                            id="OCCUPATION_DETAILED-293"
                            value="Union Member/Rep."
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-293">
                            Union Member/Rep.
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_294"
                            id="OCCUPATION_DETAILED-294"
                            value="Upholstery"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-294">
                            Upholstery
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_295"
                            id="OCCUPATION_DETAILED-295"
                            value="Utility"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-295">
                            Utility
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_296"
                            id="OCCUPATION_DETAILED-296"
                            value="Veterinarian"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-296">
                            Veterinarian
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_297"
                            id="OCCUPATION_DETAILED-297"
                            value="Vice President"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-297">
                            Vice President
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_298"
                            id="OCCUPATION_DETAILED-298"
                            value="Volunteer"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-298">
                            Volunteer
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_299"
                            id="OCCUPATION_DETAILED-299"
                            value="Waiter/Waitress"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-299">
                            Waiter/Waitress
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_300"
                            id="OCCUPATION_DETAILED-300"
                            value="Ward Clerk"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-300">
                            Ward Clerk
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_301"
                            id="OCCUPATION_DETAILED-301"
                            value="Water Treatment"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-301">
                            Water Treatment
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_302"
                            id="OCCUPATION_DETAILED-302"
                            value="Welder"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-302">
                            Welder
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_303"
                            id="OCCUPATION_DETAILED-303"
                            value="White Collar Worker"
                          />{" "}
                          <label htmlFor="OCCUPATION_DETAILED-303">
                            White Collar Worker
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleDetailedOccuChange}
                            type="checkbox"
                            name="OCCUPATION_DETAILED_304"
                            id="OCCUPATION_DETAILED-304"
                            value="Writer"
                          />
                          <label htmlFor="OCCUPATION_DETAILED-304">
                            Writer
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="OCCUPATION_DETAILED_AND_OR"
                  id="OCCUPATION_DETAILED_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="OCCUPATION_DETAILED_AND">All Must Match</label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="OCCUPATION_DETAILED_AND_OR"
                  id="OCCUPATION_DETAILED_OR"
                  value="1"
                />{" "}
                <label htmlFor="OCCUPATION_DETAILED_OR">
                  Any Match On These
                </label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <fieldset className="stateLabel" id="fsLANGUAGE">
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Languages</legend>
                  </div>
                  <div>
                    <small onClick={() => setLangages(true)}>
                      (click here to expand options)
                    </small>{" "}
                    |
                    <small onClick={() => setLangages(false)}>
                      (click here to hide options)
                    </small>
                  </div>
                </div>
                {langages ? (
                  <table cellPadding="4" cellSpacing="4" id="tblLANGUAGE">
                    <tbody>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_0"
                            id="LANGUAGE-0"
                            value="Afrikaans"                          />{" "}
                          <label htmlFor="LANGUAGE-0">Afrikaans</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_1"
                            id="LANGUAGE-1"
                            value="Albanian"                          />{" "}
                          <label htmlFor="LANGUAGE-1">Albanian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_2"
                            id="LANGUAGE-2"
                            value="Amharic"                          />{" "}
                          <label htmlFor="LANGUAGE-2">Amharic</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_3"
                            id="LANGUAGE-3"
                            value="Arabic"                          />{" "}
                          <label htmlFor="LANGUAGE-3">Arabic</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_4"
                            id="LANGUAGE-4"
                            value="Armenian"                          />{" "}
                          <label htmlFor="LANGUAGE-4">Armenian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_5"
                            id="LANGUAGE-5"
                            value="Ashanti"                          />{" "}
                          <label htmlFor="LANGUAGE-5">Ashanti</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_6"
                            id="LANGUAGE-6"
                            value="Azeri"                          />{" "}
                          <label htmlFor="LANGUAGE-6">Azeri</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_7"
                            id="LANGUAGE-7"
                            value="Bantu"                          />{" "}
                          <label htmlFor="LANGUAGE-7">Bantu</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_8"
                            id="LANGUAGE-8"
                            value="Basque"                          />{" "}
                          <label htmlFor="LANGUAGE-8">Basque</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_9"
                            id="LANGUAGE-9"
                            value="Bengali"                          />{" "}
                          <label htmlFor="LANGUAGE-9">Bengali</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_10"
                            id="LANGUAGE-10"
                            value="Bulgarian"
                          />{" "}
                          <label htmlFor="LANGUAGE-10">Bulgarian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_11"
                            id="LANGUAGE-11"
                            value="Burmese"
                          />{" "}
                          <label htmlFor="LANGUAGE-11">Burmese</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_12"
                            id="LANGUAGE-12"
                            value="Chinese"
                          />{" "}
                          <label htmlFor="LANGUAGE-12">Chinese</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_13"
                            id="LANGUAGE-13"
                            value="Comorian"
                          />{" "}
                          <label htmlFor="LANGUAGE-13">Comorian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_14"
                            id="LANGUAGE-14"
                            value="Czech"
                          />{" "}
                          <label htmlFor="LANGUAGE-14">Czech</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_15"
                            id="LANGUAGE-15"
                            value="Danish"
                          />{" "}
                          <label htmlFor="LANGUAGE-15">Danish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_16"
                            id="LANGUAGE-16"
                            value="Dutch"
                          />{" "}
                          <label htmlFor="LANGUAGE-16">Dutch</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_17"
                            id="LANGUAGE-17"
                            value="Dzongha"
                          />{" "}
                          <label htmlFor="LANGUAGE-17">Dzongha</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_18"
                            id="LANGUAGE-18"
                            value="English"
                          />{" "}
                          <label htmlFor="LANGUAGE-18">English</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_19"
                            id="LANGUAGE-19"
                            value="Estonian"
                          />{" "}
                          <label htmlFor="LANGUAGE-19">Estonian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_20"
                            id="LANGUAGE-20"
                            value="Farsi"
                          />{" "}
                          <label htmlFor="LANGUAGE-20">Farsi</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_21"
                            id="LANGUAGE-21"
                            value="Finnish"
                          />{" "}
                          <label htmlFor="LANGUAGE-21">Finnish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_22"
                            id="LANGUAGE-22"
                            value="French"
                          />{" "}
                          <label htmlFor="LANGUAGE-22">French</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_23"
                            id="LANGUAGE-23"
                            value="Ga"
                          />{" "}
                          <label htmlFor="LANGUAGE-23">Ga</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_24"
                            id="LANGUAGE-24"
                            value="Georgian"
                          />{" "}
                          <label htmlFor="LANGUAGE-24">Georgian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_25"
                            id="LANGUAGE-25"
                            value="German"
                          />{" "}
                          <label htmlFor="LANGUAGE-25">German</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_26"
                            id="LANGUAGE-26"
                            value="Greek"
                          />{" "}
                          <label htmlFor="LANGUAGE-26">Greek</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_27"
                            id="LANGUAGE-27"
                            value="Hausa"
                          />{" "}
                          <label htmlFor="LANGUAGE-27">Hausa</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_28"
                            id="LANGUAGE-28"
                            value="Hebrew"
                          />{" "}
                          <label htmlFor="LANGUAGE-28">Hebrew</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_29"
                            id="LANGUAGE-29"
                            value="Hindi"
                          />{" "}
                          <label htmlFor="LANGUAGE-29">Hindi</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_30"
                            id="LANGUAGE-30"
                            value="Hungarian"
                          />{" "}
                          <label htmlFor="LANGUAGE-30">Hungarian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_31"
                            id="LANGUAGE-31"
                            value="Icelandic"
                          />{" "}
                          <label htmlFor="LANGUAGE-31">Icelandic</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_32"
                            id="LANGUAGE-32"
                            value="Indonesian"
                          />{" "}
                          <label htmlFor="LANGUAGE-32">Indonesian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_33"
                            id="LANGUAGE-33"
                            value="Italian"
                          />{" "}
                          <label htmlFor="LANGUAGE-33">Italian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_34"
                            id="LANGUAGE-34"
                            value="Japanese"
                          />{" "}
                          <label htmlFor="LANGUAGE-34">Japanese</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_35"
                            id="LANGUAGE-35"
                            value="Kazakh"
                          />{" "}
                          <label htmlFor="LANGUAGE-35">Kazakh</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_36"
                            id="LANGUAGE-36"
                            value="Khmer"
                          />{" "}
                          <label htmlFor="LANGUAGE-36">Khmer</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_37"
                            id="LANGUAGE-37"
                            value="Kirghiz"
                          />{" "}
                          <label htmlFor="LANGUAGE-37">Kirghiz</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_38"
                            id="LANGUAGE-38"
                            value="Korean"
                          />{" "}
                          <label htmlFor="LANGUAGE-38">Korean</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_39"
                            id="LANGUAGE-39"
                            value="Laotian (Include Hmong)"
                          />{" "}
                          <label htmlFor="LANGUAGE-39">
                            Laotian (Include Hmong)
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_40"
                            id="LANGUAGE-40"
                            value="Latvian"
                          />{" "}
                          <label htmlFor="LANGUAGE-40">Latvian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_41"
                            id="LANGUAGE-41"
                            value="Lithuanian"
                          />{" "}
                          <label htmlFor="LANGUAGE-41">Lithuanian</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_42"
                            id="LANGUAGE-42"
                            value="Macedonian"
                          />{" "}
                          <label htmlFor="LANGUAGE-42">Macedonian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_43"
                            id="LANGUAGE-43"
                            value="Malagasy"
                          />{" "}
                          <label htmlFor="LANGUAGE-43">Malagasy</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_44"
                            id="LANGUAGE-44"
                            value="Malay"
                          />{" "}
                          <label htmlFor="LANGUAGE-44">Malay</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_45"
                            id="LANGUAGE-45"
                            value="Moldavian"
                          />{" "}
                          <label htmlFor="LANGUAGE-45">Moldavian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_46"
                            id="LANGUAGE-46"
                            value="Mongolian"
                          />{" "}
                          <label htmlFor="LANGUAGE-46">Mongolian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_47"
                            id="LANGUAGE-47"
                            value="Nepali"
                          />{" "}
                          <label htmlFor="LANGUAGE-47">Nepali</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_48"
                            id="LANGUAGE-48"
                            value="Norwegian"
                          />{" "}
                          <label htmlFor="LANGUAGE-48">Norwegian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_49"
                            id="LANGUAGE-49"
                            value="Oromo"
                          />{" "}
                          <label htmlFor="LANGUAGE-49">Oromo</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_50"
                            id="LANGUAGE-50"
                            value="Pashto"
                          />{" "}
                          <label htmlFor="LANGUAGE-50">Pashto</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_51"
                            id="LANGUAGE-51"
                            value="Polish"
                          />{" "}
                          <label htmlFor="LANGUAGE-51">Polish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_52"
                            id="LANGUAGE-52"
                            value="Portuguese"
                          />{" "}
                          <label htmlFor="LANGUAGE-52">Portuguese</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_53"
                            id="LANGUAGE-53"
                            value="Romanian"
                          />{" "}
                          <label htmlFor="LANGUAGE-53">Romanian</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_54"
                            id="LANGUAGE-54"
                            value="Russian"
                          />{" "}
                          <label htmlFor="LANGUAGE-54">Russian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_55"
                            id="LANGUAGE-55"
                            value="Samoan"
                          />{" "}
                          <label htmlFor="LANGUAGE-55">Samoan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_56"
                            id="LANGUAGE-56"
                            value="Serbo-Croatian"
                          />{" "}
                          <label htmlFor="LANGUAGE-56">Serbo-Croatian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_57"
                            id="LANGUAGE-57"
                            value="Sinhalese"
                          />{" "}
                          <label htmlFor="LANGUAGE-57">Sinhalese</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_58"
                            id="LANGUAGE-58"
                            value="Slovakian"
                          />{" "}
                          <label htmlFor="LANGUAGE-58">Slovakian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_59"
                            id="LANGUAGE-59"
                            value="Slovenian"
                          />{" "}
                          <label htmlFor="LANGUAGE-59">Slovenian</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_60"
                            id="LANGUAGE-60"
                            value="Somali"
                          />{" "}
                          <label htmlFor="LANGUAGE-60">Somali</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_61"
                            id="LANGUAGE-61"
                            value="Sotho"
                          />{" "}
                          <label htmlFor="LANGUAGE-61">Sotho</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_62"
                            id="LANGUAGE-62"
                            value="Spanish"
                          />{" "}
                          <label htmlFor="LANGUAGE-62">Spanish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_63"
                            id="LANGUAGE-63"
                            value="Swahili"
                          />{" "}
                          <label htmlFor="LANGUAGE-63">Swahili</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_64"
                            id="LANGUAGE-64"
                            value="Swazi"
                          />{" "}
                          <label htmlFor="LANGUAGE-64">Swazi</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_65"
                            id="LANGUAGE-65"
                            value="Swedish"
                          />{" "}
                          <label htmlFor="LANGUAGE-65">Swedish</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_66"
                            id="LANGUAGE-66"
                            value="Tagalog"
                          />{" "}
                          <label htmlFor="LANGUAGE-66">Tagalog</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_67"
                            id="LANGUAGE-67"
                            value="Tajik"
                          />{" "}
                          <label htmlFor="LANGUAGE-67">Tajik</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_68"
                            id="LANGUAGE-68"
                            value="Thai"
                          />{" "}
                          <label htmlFor="LANGUAGE-68">Thai</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_69"
                            id="LANGUAGE-69"
                            value="Tibetan"
                          />{" "}
                          <label htmlFor="LANGUAGE-69">Tibetan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_70"
                            id="LANGUAGE-70"
                            value="Tongan"
                          />{" "}
                          <label htmlFor="LANGUAGE-70">Tongan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_71"
                            id="LANGUAGE-71"
                            value="Tswana"
                          />{" "}
                          <label htmlFor="LANGUAGE-71">Tswana</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_72"
                            id="LANGUAGE-72"
                            value="Turkish"
                          />{" "}
                          <label htmlFor="LANGUAGE-72">Turkish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_73"
                            id="LANGUAGE-73"
                            value="Turkmeni"
                          />{" "}
                          <label htmlFor="LANGUAGE-73">Turkmeni</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_74"
                            id="LANGUAGE-74"
                            value="Unknown"
                          />{" "}
                          <label htmlFor="LANGUAGE-74">Unknown</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_75"
                            id="LANGUAGE-75"
                            value="Urdu"
                          />{" "}
                          <label htmlFor="LANGUAGE-75">Urdu</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_76"
                            id="LANGUAGE-76"
                            value="Uzbeki"
                          />{" "}
                          <label htmlFor="LANGUAGE-76">Uzbeki</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_77"
                            id="LANGUAGE-77"
                            value="Vietnamese"
                          />{" "}
                          <label htmlFor="LANGUAGE-77">Vietnamese</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_78"
                            id="LANGUAGE-78"
                            value="Xhosa"
                          />{" "}
                          <label htmlFor="LANGUAGE-78">Xhosa</label>
                        </td>
                        <td>
                          <input
                            onChange={handleLangChange}
                            type="checkbox"
                            name="LANGUAGE_79"
                            id="LANGUAGE-79"
                            value="Zulu"
                          />{" "}
                          <label htmlFor="LANGUAGE-79">Zulu</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="LANGUAGE_AND_OR"
                  id="LANGUAGE_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="LANGUAGE_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="LANGUAGE_AND_OR"
                  id="LANGUAGE_OR"
                  value="1"
                />{" "}
                <label htmlFor="LANGUAGE_OR">Any Match On These</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <fieldset className="stateLabel" id="fsETHNIC_CODE">
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Ethnicities</legend>
                  </div>
                  <div>
                    <small onClick={() => setEthnicities(true)}>
                      (click here to expand options)
                    </small>{" "}
                    |
                    <small onClick={() => setEthnicities(false)}>
                      (click here to hide options)
                    </small>
                  </div>
                </div>
                {ethnicities ? (
                  <table cellPadding="4" cellSpacing="4" id="tblETHNIC_CODE">
                    <tbody>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_0"
                            id="ETHNIC_CODE-0"
                            value="Afghani"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-0">Afghani</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_1"
                            id="ETHNIC_CODE-1"
                            value="African American 1"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-1">
                            African American 1
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_2"
                            id="ETHNIC_CODE-2"
                            value="African American 2"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-2">
                            African American 2
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_3"
                            id="ETHNIC_CODE-3"
                            value="Albanian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-3">Albanian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_4"
                            id="ETHNIC_CODE-4"
                            value="Aleut"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-4">Aleut</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_5"
                            id="ETHNIC_CODE-5"
                            value="Algerian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-5">Algerian</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_6"
                            id="ETHNIC_CODE-6"
                            value="Angolan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-6">Angolan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_7"
                            id="ETHNIC_CODE-7"
                            value="Arab"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-7">Arab</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_8"
                            id="ETHNIC_CODE-8"
                            value="Armenian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-8">Armenian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_9"
                            id="ETHNIC_CODE-9"
                            value="Ashanti"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-9">Ashanti</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_10"
                            id="ETHNIC_CODE-10"
                            value="Australian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-10">Australian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_11"
                            id="ETHNIC_CODE-11"
                            value="Austrian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-11">Austrian</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_12"
                            id="ETHNIC_CODE-12"
                            value="Azerb"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-12">Azerb</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_13"
                            id="ETHNIC_CODE-13"
                            value="Bahrain"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-13">Bahrain</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_14"
                            id="ETHNIC_CODE-14"
                            value="Basotho"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-14">Basotho</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_15"
                            id="ETHNIC_CODE-15"
                            value="Basque"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-15">Basque</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_16"
                            id="ETHNIC_CODE-16"
                            value="Belgian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-16">Belgian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_17"
                            id="ETHNIC_CODE-17"
                            value="Bengladesh"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-17">Bengladesh</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_18"
                            id="ETHNIC_CODE-18"
                            value="Benin"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-18">Benin</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_19"
                            id="ETHNIC_CODE-19"
                            value="Bhutanese"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-19">Bhutanese</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_20"
                            id="ETHNIC_CODE-20"
                            value="Bosnian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-20">Bosnian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_21"
                            id="ETHNIC_CODE-21"
                            value="Botswanian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-21">Botswanian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_22"
                            id="ETHNIC_CODE-22"
                            value="Bulgarian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-22">Bulgarian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_23"
                            id="ETHNIC_CODE-23"
                            value="Burkina Faso"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-23">Burkina Faso</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_24"
                            id="ETHNIC_CODE-24"
                            value="Burundi"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-24">Burundi</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_25"
                            id="ETHNIC_CODE-25"
                            value="Byelorussian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-25">Byelorussian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_26"
                            id="ETHNIC_CODE-26"
                            value="Cameroon"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-26">Cameroon</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_27"
                            id="ETHNIC_CODE-27"
                            value="Caribbean African American"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-27">
                            Caribbean African American
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_28"
                            id="ETHNIC_CODE-28"
                            value="Cent Afric Rep"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-28">Cent Afric Rep</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_29"
                            id="ETHNIC_CODE-29"
                            value="Chad"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-29">Chad</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_30"
                            id="ETHNIC_CODE-30"
                            value="Chechnian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-30">Chechnian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_31"
                            id="ETHNIC_CODE-31"
                            value="Chinese"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-31">Chinese</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_32"
                            id="ETHNIC_CODE-32"
                            value="Comoros"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-32">Comoros</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_33"
                            id="ETHNIC_CODE-33"
                            value="Congo"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-33">Congo</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_34"
                            id="ETHNIC_CODE-34"
                            value="Croatian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-34">Croatian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_35"
                            id="ETHNIC_CODE-35"
                            value="Czech"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-35">Czech</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_36"
                            id="ETHNIC_CODE-36"
                            value="Danish"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-36">Danish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_37"
                            id="ETHNIC_CODE-37"
                            value="Djibouti"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-37">Djibouti</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_38"
                            id="ETHNIC_CODE-38"
                            value="Dutch"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-38">Dutch</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_39"
                            id="ETHNIC_CODE-39"
                            value="Egyptian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-39">Egyptian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_40"
                            id="ETHNIC_CODE-40"
                            value="English"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-40">English</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_41"
                            id="ETHNIC_CODE-41"
                            value="Equat Guinea"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-41">Equat Guinea</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_42"
                            id="ETHNIC_CODE-42"
                            value="Estonian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-42">Estonian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_43"
                            id="ETHNIC_CODE-43"
                            value="Ethiopian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-43">Ethiopian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_44"
                            id="ETHNIC_CODE-44"
                            value="Fiji"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-44">Fiji</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_45"
                            id="ETHNIC_CODE-45"
                            value="Filipino"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-45">Filipino</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_46"
                            id="ETHNIC_CODE-46"
                            value="Finnish"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-46">Finnish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_47"
                            id="ETHNIC_CODE-47"
                            value="French"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-47">French</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_48"
                            id="ETHNIC_CODE-48"
                            value="Gabon"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-48">Gabon</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_49"
                            id="ETHNIC_CODE-49"
                            value="Gambia"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-49">Gambia</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_50"
                            id="ETHNIC_CODE-50"
                            value="Georgian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-50">Georgian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_51"
                            id="ETHNIC_CODE-51"
                            value="German"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-51">German</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_52"
                            id="ETHNIC_CODE-52"
                            value="Ghana"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-52">Ghana</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_53"
                            id="ETHNIC_CODE-53"
                            value="Greek"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-53">Greek</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_54"
                            id="ETHNIC_CODE-54"
                            value="Guinea-Bissea"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-54">Guinea-Bissea</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_55"
                            id="ETHNIC_CODE-55"
                            value="Guinean"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-55">Guinean</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_56"
                            id="ETHNIC_CODE-56"
                            value="Guyana"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-56">Guyana</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_57"
                            id="ETHNIC_CODE-57"
                            value="Hausa"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-57">Hausa</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_58"
                            id="ETHNIC_CODE-58"
                            value="Hawaiian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-58">Hawaiian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_59"
                            id="ETHNIC_CODE-59"
                            value="Hispanic"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-59">Hispanic</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_60"
                            id="ETHNIC_CODE-60"
                            value="Hungarian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-60">Hungarian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_61"
                            id="ETHNIC_CODE-61"
                            value="Icelandic"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-61">Icelandic</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_62"
                            id="ETHNIC_CODE-62"
                            value="Indian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-62">Indian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_63"
                            id="ETHNIC_CODE-63"
                            value="Indonesian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-63">Indonesian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_64"
                            id="ETHNIC_CODE-64"
                            value="Iraqi"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-64">Iraqi</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_65"
                            id="ETHNIC_CODE-65"
                            value="Irish"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-65">Irish</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_66"
                            id="ETHNIC_CODE-66"
                            value="Italian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-66">Italian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_67"
                            id="ETHNIC_CODE-67"
                            value="Ivory Coast"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-67">Ivory Coast</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_68"
                            id="ETHNIC_CODE-68"
                            value="Japanese"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-68">Japanese</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_69"
                            id="ETHNIC_CODE-69"
                            value="Jewish"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-69">Jewish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_70"
                            id="ETHNIC_CODE-70"
                            value="Kazakh"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-70">Kazakh</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_71"
                            id="ETHNIC_CODE-71"
                            value="Kenya"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-71">Kenya</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_72"
                            id="ETHNIC_CODE-72"
                            value="Khmer"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-72">Khmer</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_73"
                            id="ETHNIC_CODE-73"
                            value="Kirghiz"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-73">Kirghiz</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_74"
                            id="ETHNIC_CODE-74"
                            value="Korean"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-74">Korean</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_75"
                            id="ETHNIC_CODE-75"
                            value="Kurdish"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-75">Kurdish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_76"
                            id="ETHNIC_CODE-76"
                            value="Kuwaiti"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-76">Kuwaiti</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_77"
                            id="ETHNIC_CODE-77"
                            value="Kyrgyzstani"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-77">Kyrgyzstani</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_78"
                            id="ETHNIC_CODE-78"
                            value="Laotian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-78">Laotian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_79"
                            id="ETHNIC_CODE-79"
                            value="Latvian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-79">Latvian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_80"
                            id="ETHNIC_CODE-80"
                            value="Lesotho"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-80">Lesotho</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_81"
                            id="ETHNIC_CODE-81"
                            value="Liberian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-81">Liberian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_82"
                            id="ETHNIC_CODE-82"
                            value="Libyan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-82">Libyan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_83"
                            id="ETHNIC_CODE-83"
                            value="Liechtenstein"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-83">Liechtenstein</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_84"
                            id="ETHNIC_CODE-84"
                            value="Lithuanian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-84">Lithuanian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_85"
                            id="ETHNIC_CODE-85"
                            value="Luxembourgian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-85">Luxembourgian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_86"
                            id="ETHNIC_CODE-86"
                            value="Macedonian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-86">Macedonian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_87"
                            id="ETHNIC_CODE-87"
                            value="Madagascar"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-87">Madagascar</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_88"
                            id="ETHNIC_CODE-88"
                            value="Malawi"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-88">Malawi</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_89"
                            id="ETHNIC_CODE-89"
                            value="Malay"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-89">Malay</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_90"
                            id="ETHNIC_CODE-90"
                            value="Maldivian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-90">Maldivian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_91"
                            id="ETHNIC_CODE-91"
                            value="Mali"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-91">Mali</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_92"
                            id="ETHNIC_CODE-92"
                            value="Maltese"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-92">Maltese</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_93"
                            id="ETHNIC_CODE-93"
                            value="Manx"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-93">Manx</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_94"
                            id="ETHNIC_CODE-94"
                            value="Mauritania"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-94">Mauritania</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_95"
                            id="ETHNIC_CODE-95"
                            value="Moldavian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-95">Moldavian</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_96"
                            id="ETHNIC_CODE-96"
                            value="Mongolian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-96">Mongolian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_97"
                            id="ETHNIC_CODE-97"
                            value="Moroccan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-97">Moroccan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_98"
                            id="ETHNIC_CODE-98"
                            value="Mozambique"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-98">Mozambique</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_99"
                            id="ETHNIC_CODE-99"
                            value="Multi-Ethnic"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-99">Multi-Ethnic</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_100"
                            id="ETHNIC_CODE-100"
                            value="Myanmar"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-100">Myanmar</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_101"
                            id="ETHNIC_CODE-101"
                            value="Namibian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-101">Namibian</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_102"
                            id="ETHNIC_CODE-102"
                            value="Native American"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-102">
                            Native American
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_103"
                            id="ETHNIC_CODE-103"
                            value="Nauruan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-103">Nauruan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_104"
                            id="ETHNIC_CODE-104"
                            value="Nepal"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-104">Nepal</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_105"
                            id="ETHNIC_CODE-105"
                            value="New Zealand"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-105">New Zealand</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_106"
                            id="ETHNIC_CODE-106"
                            value="Niger"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-106">Niger</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_107"
                            id="ETHNIC_CODE-107"
                            value="Nigerian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-107">Nigerian</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_108"
                            id="ETHNIC_CODE-108"
                            value="Norwegian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-108">Norwegian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_109"
                            id="ETHNIC_CODE-109"
                            value="Other Asian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-109">Other Asian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_110"
                            id="ETHNIC_CODE-110"
                            value="Pakistani"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-110">Pakistani</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_111"
                            id="ETHNIC_CODE-111"
                            value="Papua New Guinea"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-111">
                            Papua New Guinea
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_112"
                            id="ETHNIC_CODE-112"
                            value="Persian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-112">Persian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_113"
                            id="ETHNIC_CODE-113"
                            value="Pili"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-113">Pili</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_114"
                            id="ETHNIC_CODE-114"
                            value="Polish"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-114">Polish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE-115"
                            id="ETHNIC_CODE-115"
                            value="Portuguese"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-115">Portuguese</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_116"
                            id="ETHNIC_CODE-116"
                            value="Qatar"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-116">Qatar</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_117"
                            id="ETHNIC_CODE-117"
                            value="Romanian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-117">Romanian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_118"
                            id="ETHNIC_CODE-118"
                            value="Ruandan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-118">Ruandan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_119"
                            id="ETHNIC_CODE-119"
                            value="Russian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-119">Russian</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_120"
                            id="ETHNIC_CODE-120"
                            value="Saudi"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-120">Saudi</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_121"
                            id="ETHNIC_CODE-121"
                            value="Scotch"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-121">Scotch</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_122"
                            id="ETHNIC_CODE-122"
                            value="Senegalese"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-122">Senegalese</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_123"
                            id="ETHNIC_CODE-123"
                            value="Serbian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-123">Serbian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_124"
                            id="ETHNIC_CODE-124"
                            value="Seychelles"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-124">Seychelles</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_125"
                            id="ETHNIC_CODE-125"
                            value="Siere Leone"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-125">Siere Leone</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_126"
                            id="ETHNIC_CODE-126"
                            value="Slovakian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-126">Slovakian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_127"
                            id="ETHNIC_CODE-127"
                            value="Slovenian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-127">Slovenian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_128"
                            id="ETHNIC_CODE-128"
                            value="Somalia"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-128">Somalia</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_129"
                            id="ETHNIC_CODE-129"
                            value="South African"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-129">South African</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_130"
                            id="ETHNIC_CODE-130"
                            value="Sri Lankan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-130">Sri Lankan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_131"
                            id="ETHNIC_CODE-131"
                            value="Sudanese"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-131">Sudanese</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_132"
                            id="ETHNIC_CODE-132"
                            value="Surinam"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-132">Surinam</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_133"
                            id="ETHNIC_CODE-133"
                            value="Swahili"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-133">Swahili</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_134"
                            id="ETHNIC_CODE-134"
                            value="Swaziland"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-134">Swaziland</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_135"
                            id="ETHNIC_CODE-135"
                            value="Swedish"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-135">Swedish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_136"
                            id="ETHNIC_CODE-136"
                            value="Swiss"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-136">Swiss</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_137"
                            id="ETHNIC_CODE-137"
                            value="Syrian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-137">Syrian</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_138"
                            id="ETHNIC_CODE-138"
                            value="Tajik"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-138">Tajik</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_139"
                            id="ETHNIC_CODE-139"
                            value="Tajikistan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-139">Tajikistan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_140"
                            id="ETHNIC_CODE-140"
                            value="Tanzanian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-140">Tanzanian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_141"
                            id="ETHNIC_CODE-141"
                            value="Telugan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-141">Telugan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_142"
                            id="ETHNIC_CODE-142"
                            value="Thai"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-142">Thai</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_143"
                            id="ETHNIC_CODE-143"
                            value="Tibetan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-143">Tibetan</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_144"
                            id="ETHNIC_CODE-144"
                            value="Togo"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-144">Togo</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_145"
                            id="ETHNIC_CODE-145"
                            value="Tonga"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-145">Tonga</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_146"
                            id="ETHNIC_CODE-146"
                            value="Tunisian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-146">Tunisian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_147"
                            id="ETHNIC_CODE-147"
                            value="Turkish"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-147">Turkish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_148"
                            id="ETHNIC_CODE-148"
                            value="Turkmenistan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-148">Turkmenistan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_149"
                            id="ETHNIC_CODE-149"
                            value="Ugandan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-149">Ugandan</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_150"
                            id="ETHNIC_CODE-150"
                            value="Ukrainian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-150">Ukrainian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_151"
                            id="ETHNIC_CODE-151"
                            value="Unknown"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-151">Unknown</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_152"
                            id="ETHNIC_CODE-152"
                            value="Uzbekistani"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-152">Uzbekistani</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_153"
                            id="ETHNIC_CODE-153"
                            value="Vanuatuan"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-153">Vanuatuan</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_154"
                            id="ETHNIC_CODE-154"
                            value="Vietnamese"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-154">Vietnamese</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_155"
                            id="ETHNIC_CODE-155"
                            value="Welsh"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-155">Welsh</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_156"
                            id="ETHNIC_CODE-156"
                            value="Western Samoa"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-156">Western Samoa</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_157"
                            id="ETHNIC_CODE-157"
                            value="Xhosa"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-157">Xhosa</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_158"
                            id="ETHNIC_CODE-158"
                            value="Yemeni"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-158">Yemeni</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_159"
                            id="ETHNIC_CODE-159"
                            value="Zaire"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-159">Zaire</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_160"
                            id="ETHNIC_CODE-160"
                            value="Zambian"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-160">Zambian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_161"
                            id="ETHNIC_CODE-161"
                            value="Zimbabwe"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-161">Zimbabwe</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicitiesChange}
                            type="checkbox"
                            name="ETHNIC_CODE_162"
                            id="ETHNIC_CODE-162"
                            value="Zulu"
                          />{" "}
                          <label htmlFor="ETHNIC_CODE-162">Zulu</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="ETHNIC_CODE_AND_OR"
                  id="ETHNIC_CODE_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="ETHNIC_CODE_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="ETHNIC_CODE_AND_OR"
                  id="ETHNIC_CODE_OR"
                  value="1"
                />{" "}
                <label htmlFor="ETHNIC_CODE_OR">Any Match On These</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <fieldset className="stateLabel" id="fsETHNIC_GROUP">
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Ethnic Groups</legend>
                  </div>
                  <div>
                    <small onClick={() => setEthnic(true)}>
                      (click here to expand options)
                    </small>{" "}
                    |
                    <small onClick={() => setEthnic(false)}>
                      (click here to hide options)
                    </small>
                  </div>
                </div>
                {ethnic ? (
                  <table cellPadding="4" cellSpacing="4" id="tblETHNIC_GROUP">
                    <tbody>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_0"
                            id="ETHNIC_GROUP-0"
                            value="African American"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-0">
                            African American
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_1"
                            id="ETHNIC_GROUP-1"
                            value="Central + SW Asian"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-1">
                            Central + SW Asian
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_2"
                            id="ETHNIC_GROUP-2"
                            value="Eastern European"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-2">
                            Eastern European
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_3"
                            id="ETHNIC_GROUP-3"
                            value="Far Eastern"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-3">Far Eastern</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_4"
                            id="ETHNIC_GROUP-4"
                            value="Hispanic"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-4">Hispanic</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_5"
                            id="ETHNIC_GROUP-5"
                            value="Jewish"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-5">Jewish</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_6"
                            id="ETHNIC_GROUP-6"
                            value="Mediterranean"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-6">Mediterranean</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_7"
                            id="ETHNIC_GROUP-7"
                            value="Middle Eastern"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-7">Middle Eastern</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_8"
                            id="ETHNIC_GROUP-8"
                            value="Miscellaneous Other"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-8">
                            Miscellaneous Other
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_9"
                            id="ETHNIC_GROUP-9"
                            value="Native American"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-9">
                            Native American
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_10"
                            id="ETHNIC_GROUP-10"
                            value="Other"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-10">Other</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_11"
                            id="ETHNIC_GROUP-11"
                            value="Polynesian"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-11">Polynesian</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_12"
                            id="ETHNIC_GROUP-12"
                            value="Scandinavian"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-12">Scandinavian</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_13"
                            id="ETHNIC_GROUP-13"
                            value="Southeast Asian"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-13">
                            Southeast Asian
                          </label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_14"
                            id="ETHNIC_GROUP-14"
                            value="Unknown"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-14">Unknown</label>
                        </td>
                        <td>
                          <input
                            onChange={handleEthnicChange}
                            type="checkbox"
                            name="ETHNIC_GROUP_15"
                            id="ETHNIC_GROUP-15"
                            value="Western European"
                          />{" "}
                          <label htmlFor="ETHNIC_GROUP-15">
                            Western European
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="ETHNIC_GROUP_AND_OR"
                  id="ETHNIC_GROUP_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="ETHNIC_GROUP_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="ETHNIC_GROUP_AND_OR"
                  id="ETHNIC_GROUP_OR"
                  value="1"
                />{" "}
                <label htmlFor="ETHNIC_GROUP_OR">Any Match On These</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <fieldset className="stateLabel" id="fsRELIGION">
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Religions</legend>
                  </div>
                  <div>
                    <small onClick={() => setReligion(true)}>
                      (click here to expand options)
                    </small>{" "}
                    |
                    <small onClick={() => setReligion(false)}>
                      (click here to hide options)
                    </small>
                  </div>
                </div>
                {religion ? (
                  <table cellPadding="4" cellSpacing="4" id="tblRELIGION">
                    <tbody>
                      <tr>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_A"
                            id="RELIGION-A"
                            value="All Christians"
                          />{" "}
                          <label htmlFor="RELIGION-A">All Christians</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_B"
                            id="RELIGION-B"
                            value="Buddhist"
                          />{" "}
                          <label htmlFor="RELIGION-B">Buddhist</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_C"
                            id="RELIGION-C"
                            value="Catholic"
                          />{" "}
                          <label htmlFor="RELIGION-C">Catholic</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_G"
                            id="RELIGION-G"
                            value="Greek Orthodox"
                          />{" "}
                          <label htmlFor="RELIGION-G">Greek Orthodox</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_H"
                            id="RELIGION-H"
                            value="Hindu"
                          />{" "}
                          <label htmlFor="RELIGION-H">Hindu</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_I"
                            id="RELIGION-I"
                            value="Islamic"
                          />{" "}
                          <label htmlFor="RELIGION-I">Islamic</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_J"
                            id="RELIGION-J"
                            value="Jewish"
                          />{" "}
                          <label htmlFor="RELIGION-J">Jewish</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_K"
                            id="RELIGION-K"
                            value="Sikh"
                          />{" "}
                          <label htmlFor="RELIGION-K">Sikh</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_L"
                            id="RELIGION-L"
                            value="Lutheran"
                          />{" "}
                          <label htmlFor="RELIGION-L">Lutheran</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_M"
                            id="RELIGION-M"
                            value="Mormon"
                          />{" "}
                          <label htmlFor="RELIGION-M">Mormon</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_O"
                            id="RELIGION-O"
                            value="Eastern Orthodox"
                          />{" "}
                          <label htmlFor="RELIGION-O">Eastern Orthodox</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_P"
                            id="RELIGION-P"
                            value="Protestant"
                          />{" "}
                          <label htmlFor="RELIGION-P">Protestant</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_S"
                            id="RELIGION-S"
                            value="Shinto"
                          />{" "}
                          <label htmlFor="RELIGION-S">Shinto</label>
                        </td>
                        <td>
                          <input
                            onChange={handleRelgionChange}
                            type="checkbox"
                            name="RELIGION_X"
                            id="RELIGION-X"
                            value="Not Known"
                          />{" "}
                          <label htmlFor="RELIGION-X">Not Known</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="RELIGION_AND_OR"
                  id="RELIGION_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="RELIGION_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="RELIGION_AND_OR"
                  id="RELIGION_OR"
                  value="1"
                />{" "}
                <label htmlFor="RELIGION_OR">Any Match On These</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset>
                <legend>Number Of Children</legend>
                <select
                  onChange={handleChildrenAndMartialChange}
                  name="NUMBER_OF_CHILDREN"
                  id="NUMBER_OF_CHILDREN"
                >
                  <option value="">Select a Number Of Children</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">1 to 2</option>
                  <option value="3">1 to 3</option>
                  <option value="4">1 to 4</option>
                  <option value="5">1 to 5</option>
                  <option value="6">1 to 6</option>
                  <option value="7">1 to 7</option>
                  <option value="8">1 to 8 and More</option>
                </select>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="NUMBER_OF_CHILDREN_AND_OR"
                  id="NUMBER_OF_CHILDREN_AND"
                  value="0"
                />
                <label htmlFor="NUMBER_OF_CHILDREN_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="NUMBER_OF_CHILDREN_AND_OR"
                  id="NUMBER_OF_CHILDREN_OR"
                  value="1"
                  defaultChecked
                />{" "}
                <label htmlFor="NUMBER_OF_CHILDREN_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsPRESENCE_OF_CHILDREN">
                <legend>Children in Household?</legend>
                <input
                  onChange={handleChildrenAndMartialChange}
                  type="radio"
                  name="PRESENCE_OF_CHILDREN"
                  id="PRESENCE_OF_CHILDREN_Y"
                  value="Y"
                />{" "}
                <label htmlFor="PRESENCE_OF_CHILDREN_Y">Yes</label> |{" "}
                <input
                  onChange={handleChildrenAndMartialChange}
                  type="radio"
                  name="PRESENCE_OF_CHILDREN"
                  id="PRESENCE_OF_CHILDREN_N"
                  value="N"
                />{" "}
                <label htmlFor="PRESENCE_OF_CHILDREN_N">No</label> |
                <input
                  onChange={handleChildrenAndMartialChange}
                  type="radio"
                  name="PRESENCE_OF_CHILDREN"
                  id="PRESENCE_OF_CHILDREN_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="PRESENCE_OF_CHILDREN_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="PRESENCE_OF_CHILDREN_AND_OR"
                  id="PRESENCE_OF_CHILDREN_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="PRESENCE_OF_CHILDREN_AND">All Must Match</label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="PRESENCE_OF_CHILDREN_AND_OR"
                  id="PRESENCE_OF_CHILDREN_OR"
                  value="1"
                />
                <label htmlFor="PRESENCE_OF_CHILDREN_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset>
                <legend>Sex of Children</legend>
                <input
                  onChange={handleChildrenAndMartialChange}
                  type="radio"
                  name="SEX_OF_CHILDREN"
                  id="SEX_OF_CHILDREN_B"
                  value="B"
                />
                <label htmlFor="SEX_OF_CHILDREN_B">Boys</label> |
                <input
                  onChange={handleChildrenAndMartialChange}
                  type="radio"
                  name="SEX_OF_CHILDREN"
                  id="SEX_OF_CHILDREN_G"
                  value="G"
                />
                <label htmlFor="SEX_OF_CHILDREN_G">Girls</label> |
                <input
                  onChange={handleChildrenAndMartialChange}
                  type="radio"
                  name="SEX_OF_CHILDREN"
                  id="SEX_OF_CHILDREN_NULL"
                  value=""
                  defaultChecked
                />
                <label htmlFor="SEX_OF_CHILDREN_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SEX_OF_CHILDREN_AND_OR"
                  id="SEX_OF_CHILDREN_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SEX_OF_CHILDREN_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SEX_OF_CHILDREN_AND_OR"
                  id="SEX_OF_CHILDREN_OR"
                  value="1"
                />{" "}
                <label htmlFor="SEX_OF_CHILDREN_OR">Any Match On This</label>
              </fieldset>
            </td>

            <td>
              <fieldset>
                <legend>Marital Status</legend>
                <input
                  onChange={handleChildrenAndMartialChange}
                  type="radio"
                  name="MARITAL_STATUS"
                  id="MARITAL_STATUS_M"
                  value="M"
                />
                <label htmlFor="MARITAL_STATUS_M">Married</label> |
                <input
                  onChange={handleChildrenAndMartialChange}
                  type="radio"
                  name="MARITAL_STATUS"
                  id="MARITAL_STATUS_S"
                  value="S"
                />
                <label htmlFor="MARITAL_STATUS_S">Single</label> |
                <input
                  onChange={handleChildrenAndMartialChange}
                  type="radio"
                  name="MARITAL_STATUS"
                  id="MARITAL_STATUS_NULL"
                  value=""
                  defaultChecked
                />
                <label htmlFor="MARITAL_STATUS_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MARITAL_STATUS_AND_OR"
                  id="MARITAL_STATUS_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="MARITAL_STATUS_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MARITAL_STATUS_AND_OR"
                  id="MARITAL_STATUS_OR"
                  value="1"
                />{" "}
                <label htmlFor="MARITAL_STATUS_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td colSpan="2">
              <fieldset className="stateLabel" id="fsAGEINHH">
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>
                      Child or Adults Present In Household by Age Range
                    </legend>
                  </div>
                  <div>
                    <small onClick={() => setHouseHoldRange(true)}>
                      (click here to expand options)
                    </small>{" "}
                    |
                    <small onClick={() => setHouseHoldRange(false)}>
                      (click here to hide options)
                    </small>
                  </div>
                </div>
                {houseHoldRange ? (
                  <table cellPadding="4" cellSpacing="4" id="tblAGEINHH">
                    <tbody>
                      <tr>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_1"
                            id="AGEINHH-1"
                            value="0 - 2"                          />{" "}
                          <label htmlFor="AGEINHH-1">0 - 2</label>
                        </td>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_2"
                            id="AGEINHH-2"
                            value="3 - 5"                          />{" "}
                          <label htmlFor="AGEINHH-2">3 - 5</label>
                        </td>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_3"
                            id="AGEINHH-3"
                            value="6 - 10"                          />{" "}
                          <label htmlFor="AGEINHH-3">6 - 10</label>
                        </td>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_4"
                            id="AGEINHH-4"
                            value="11 - 15"                          />{" "}
                          <label htmlFor="AGEINHH-4">11 - 15</label>
                        </td>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_5"
                            id="AGEINHH-5"
                            value="16 - 17"                          />{" "}
                          <label htmlFor="AGEINHH-5">16 - 17</label>
                        </td>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_6"
                            id="AGEINHH-6"
                            value="18 - 24"                          />{" "}
                          <label htmlFor="AGEINHH-6">18 - 24</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_7"
                            id="AGEINHH-7"
                            value="25 - 34"                          />{" "}
                          <label htmlFor="AGEINHH-7">25 - 34</label>
                        </td>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_8"
                            id="AGEINHH-8"
                            value="35 - 44"                          />{" "}
                          <label htmlFor="AGEINHH-8">35 - 44</label>
                        </td>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_9"
                            id="AGEINHH-9"
                            value="45 - 54"                          />{" "}
                          <label htmlFor="AGEINHH-9">45 - 54</label>
                        </td>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_10"
                            id="AGEINHH-10"
                            value="55 - 64"
                          />{" "}
                          <label htmlFor="AGEINHH-10">55 - 64</label>
                        </td>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_11"
                            id="AGEINHH-11"
                            value="65 - 74"
                          />{" "}
                          <label htmlFor="AGEINHH-11">65 - 74</label>
                        </td>
                        <td>
                          <input
                            onChange={handleChildAndAdultChange}
                            type="checkbox"
                            name="AGEINHH_12"
                            id="AGEINHH-12"
                            value="75+"
                          />{" "}
                          <label htmlFor="AGEINHH-12">75+</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AGEINHH_AND_OR"
                  id="AGEINHH_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="AGEINHH_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AGEINHH_AND_OR"
                  id="AGEINHH_OR"
                  value="1"
                />{" "}
                <label htmlFor="AGEINHH_OR">Any Match On These</label>
              </fieldset>
            </td>
          </tr>
          <tr valign="top">
            <td width="50%">
              <fieldset>
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Estimated Household Income</legend>
                  </div>
                  <div>
                    <small>Lower Range or Exact Value</small>
                  </div>
                </div>
                <select
                  onChange={handleIncChange}
                  name="INCOME_ESTIMATED_HH"
                  id="INCOME_ESTIMATED_HH"
                >
                  <option value="">Select Estimated Household Income</option>
                  <option value="A">Under $10,000</option>
                  <option value="B">$10,000 - $14,999</option>
                  <option value="C">$15,000 - $19,999</option>
                  <option value="D">$20,000 - $24,999</option>
                  <option value="E">$25,000 - $29,999</option>
                  <option value="F">$30,000 - $34,999</option>
                  <option value="G">$35,000 - $39,999</option>
                  <option value="H">$40,000 - $44,999</option>
                  <option value="I">$45,000 - $49,999</option>
                  <option value="J">$50,000 - $54,999</option>
                  <option value="K">$55,000 - $59,999</option>
                  <option value="L">$60,000 - $64,999</option>
                  <option value="M">$65,000 - $74,999</option>
                  <option value="N">$75,000 - $99,999</option>
                  <option value="O">$100,000 - $149,999</option>
                  <option value="P">$150,000 - $174,999</option>
                  <option value="Q">$175,000 - $199,999</option>
                  <option value="R">$200,000 - $249,999</option>
                  <option value="S">$250,000 +</option>
                </select>
              </fieldset>
            </td>
            <td>
              <fieldset>
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Estimated Household Income Upper Range</legend>
                  </div>
                  <div>
                    <small>(optional)</small>
                  </div>
                </div>
                <select
                  onChange={handleIncChange}
                  name="INCOME_ESTIMATED_HH_UPPER"
                  id="INCOME_ESTIMATED_HH_UPPER"
                >
                  <option value="">
                    Select Estimated Household Income Upper Range
                  </option>
                  <option value="A">Under $10,000</option>
                  <option value="B">$10,000 - $14,999</option>
                  <option value="C">$15,000 - $19,999</option>
                  <option value="D">$20,000 - $24,999</option>
                  <option value="E">$25,000 - $29,999</option>
                  <option value="F">$30,000 - $34,999</option>
                  <option value="G">$35,000 - $39,999</option>
                  <option value="H">$40,000 - $44,999</option>
                  <option value="I">$45,000 - $49,999</option>
                  <option value="J">$50,000 - $54,999</option>
                  <option value="K">$55,000 - $59,999</option>
                  <option value="L">$60,000 - $64,999</option>
                  <option value="M">$65,000 - $74,999</option>
                  <option value="N">$75,000 - $99,999</option>
                  <option value="O">$100,000 - $149,999</option>
                  <option value="P">$150,000 - $174,999</option>
                  <option value="Q">$175,000 - $199,999</option>
                  <option value="R">$200,000 - $249,999</option>
                  <option value="S">$250,000 +</option>
                </select>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <div style={{ border: "2px solid grey", borderTopWidth: "0" }}>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="INCOME_ESTIMATED_HH_AND_OR"
                  id="INCOME_ESTIMATED_HH_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="INCOME_ESTIMATED_HH_AND">All Must Match</label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="INCOME_ESTIMATED_HH_AND_OR"
                  id="INCOME_ESTIMATED_HH_OR"
                  value="1"
                />{" "}
                <label htmlFor="INCOME_ESTIMATED_HH_OR">
                  Any Match On This
                </label>
              </div>
            </td>
          </tr>
          <tr valign="top">
            <td>
              <fieldset>
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Estimated Net Worth</legend>
                  </div>
                  <div>
                    <small>Lower Range or Exact Values</small>
                  </div>
                </div>
                <select onChange={handleNetChange} name="NET_WORTH" id="NET_WORTH">
                  <option value="">Select Estimated Net Worth</option>
                  <option value="1 - 5K">1 - 5K</option>
                  <option value="5K - 10K">5K - 10K</option>
                  <option value="10K - 25K">10K - 25K</option>
                  <option value="25K - 50K">25K - 50K</option>
                  <option value="50K - 100K">50K - 100K</option>
                  <option value="100K - 250K">100K - 250K</option>
                  <option value="250K - 500K">250K - 500K</option>
                  <option value="More than 500K">More than 500K</option>
                </select>
              </fieldset>
            </td>
            <td>
              <fieldset>
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Estimated Net Worth Upper Range</legend>
                  </div>
                  <div>
                    <small>(optional)</small>
                  </div>
                </div>
                <select
                  onChange={handleNetChange}
                  name="NET_WORTH_UPPER"
                  id="NET_WORTH_UPPER"
                >
                  <option value="">
                    Select Estimated Net Worth Upper Range
                  </option>
                  <option value="1 - 5K">1 - 5K</option>
                  <option value="5K - 10K">5K - 10K</option>
                  <option value="10K - 25K">10K - 25K</option>
                  <option value="25K - 50K">25K - 50K</option>
                  <option value="50K - 100K">50K - 100K</option>
                  <option value="100K - 250K">100K - 250K</option>
                  <option value="250K - 500K">250K - 500K</option>
                  <option value="More than 500K">More than 500K</option>
                </select>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <div style={{ border: "2px solid grey", borderTopWidth: "0" }}>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="NET_WORTH_AND_OR"
                  id="NET_WORTH_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="NET_WORTH_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="NET_WORTH_AND_OR"
                  id="NET_WORTH_OR"
                  value="1"
                />{" "}
                <label htmlFor="NET_WORTH_OR">Any Match On This</label>
              </div>
            </td>
          </tr>
          <tr valign="top">
            <td width="50%">
              <fieldset>
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Credit Rating</legend>
                  </div>
                  <div>
                    <small>Lower Range or Exact Value</small>
                  </div>
                </div>
                <select
                  onChange={handleCreditChange}
                  name="CREDIT_RATING"
                  id="CREDIT_RATING"
                >
                  <option value="">Select Credit Rating</option>
                  <option value="H">Under 499</option>
                  <option value="G">500 - 549</option>
                  <option value="F">550 - 599</option>
                  <option value="E">600 - 649</option>
                  <option value="D">650 - 699</option>
                  <option value="C">700 - 749</option>
                  <option value="B">750 - 799</option>
                  <option value="A">800+</option>
                </select>
              </fieldset>
            </td>
            <td>
              <fieldset>
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Credit Rating Upper Range</legend>
                  </div>
                  <div>
                    <small>(optional)</small>
                  </div>
                </div>
                <select
                  onChange={handleCreditChange}
                  name="CREDIT_RATING_UPPER"
                  id="CREDIT_RATING_UPPER"
                >
                  <option value="">Select Credit Rating Upper Range</option>
                  <option value="H">Under 499</option>
                  <option value="G">500 - 549</option>
                  <option value="F">550 - 599</option>
                  <option value="E">600 - 649</option>
                  <option value="D">650 - 699</option>
                  <option value="C">700 - 749</option>
                  <option value="B">750 - 799</option>
                  <option value="A">800+</option>
                </select>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <div style={{ border: "2px solid grey", borderTopWidth: "0" }}>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CREDIT_RATING_AND_OR"
                  id="CREDIT_RATING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="CREDIT_RATING_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CREDIT_RATING_AND_OR"
                  id="CREDIT_RATING_OR"
                  value="1"
                />{" "}
                <label htmlFor="CREDIT_RATING_OR">Any Match On This</label>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <hr />
              <h3>Home and Dwelling Section</h3>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <fieldset>
                <legend>Type of Property</legend>
                <input
                  onChange={handleFamilyChange}
                  type="radio"
                  name="DWELLING_TYPE"
                  id="DWELLING_TYPE_S"
                  value="S"
                />
                <label htmlFor="DWELLING_TYPE_S">Single Family</label> |
                <input
                  onChange={handleFamilyChange}
                  type="radio"
                  name="DWELLING_TYPE"
                  id="DWELLING_TYPE_M"
                  value="M"
                />
                <label htmlFor="DWELLING_TYPE_M">Multi Family</label> |
                <input
                  onChange={handleFamilyChange}
                  type="radio"
                  name="DWELLING_TYPE"
                  id="DWELLING_TYPE_NULL"
                  value=""
                  defaultChecked
                />
                <label htmlFor="DWELLING_TYPE_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="DWELLING_TYPE_AND_OR"
                  id="DWELLING_TYPE_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="DWELLING_TYPE_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="DWELLING_TYPE_AND_OR"
                  id="DWELLING_TYPE_OR"
                  value="1"
                />{" "}
                <label htmlFor="DWELLING_TYPE_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset>
                <legend>Property Owner or Renter</legend>
                <input
                  onChange={handlePropChange}
                  type="radio"
                  name="HOME_OWNER_RENTER"
                  id="HOME_OWNER_RENTER_O"
                  value="O"
                />
                <label htmlFor="HOME_OWNER_RENTER_O">Property Owner</label> |
                <input
                  onChange={handlePropChange}
                  type="radio"
                  name="HOME_OWNER_RENTER"
                  id="HOME_OWNER_RENTER_R"
                  value="R"
                />
                <label htmlFor="HOME_OWNER_RENTER_R">Property Renter</label> |
                <input
                  onChange={handlePropChange}
                  type="radio"
                  name="HOME_OWNER_RENTER"
                  id="HOME_OWNER_RENTER_NULL"
                  value=""
                  defaultChecked
                />
                <label htmlFor="HOME_OWNER_RENTER_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_OWNER_RENTER_AND_OR"
                  id="HOME_OWNER_RENTER_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="HOME_OWNER_RENTER_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_OWNER_RENTER_AND_OR"
                  id="HOME_OWNER_RENTER_OR"
                  value="1"
                />{" "}
                <label htmlFor="HOME_OWNER_RENTER_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset className="stateLabel" id="fsADDRESS_TYPE_INDICATOR">
                <legend>Address Type (post office)</legend>
                <table
                  id="tblADDRESS_TYPE_INDICATOR"
                  cellPadding="4"
                  cellSpacing="4"
                >
                  <tbody>
                    <tr>
                      <td>
                        <input
                          onChange={handleAddressChange}
                          type="checkbox"
                          name="ADDRESS_TYPE_INDICATOR_0"
                          id="ADDRESS_TYPE_INDICATOR-0"
                          value="Apartment w/o unit designator"
                        />{" "}
                        <label htmlFor="ADDRESS_TYPE_INDICATOR-0">
                          Apartment w/o unit designator
                        </label>
                      </td>
                      <td>
                        <input
                          onChange={handleAddressChange}
                          type="checkbox"
                          name="ADDRESS_TYPE_INDICATOR_1"
                          id="ADDRESS_TYPE_INDICATOR-1"
                          value="Apartment w/unit designator"
                        />{" "}
                        <label htmlFor="ADDRESS_TYPE_INDICATOR-1">
                          Apartment w/unit designator
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          onChange={handleAddressChange}
                          type="checkbox"
                          name="ADDRESS_TYPE_INDICATOR_2"
                          id="ADDRESS_TYPE_INDICATOR-2"
                          value="PO Box"
                        />{" "}
                        <label htmlFor="ADDRESS_TYPE_INDICATOR-2">
                          Post Office Box
                        </label>
                      </td>
                      <td>
                        <input
                          onChange={handleAddressChange}
                          type="checkbox"
                          name="ADDRESS_TYPE_INDICATOR_3"
                          id="ADDRESS_TYPE_INDICATOR-3"
                          value="Rural Route"
                        />{" "}
                        <label htmlFor="ADDRESS_TYPE_INDICATOR-3">
                          Rural Route
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          onChange={handleAddressChange}
                          type="checkbox"
                          name="ADDRESS_TYPE_INDICATOR_4"
                          id="ADDRESS_TYPE_INDICATOR-4"
                          value="Single Family Dwelling"
                        />{" "}
                        <label htmlFor="ADDRESS_TYPE_INDICATOR-4">
                          Single Family Dwelling
                        </label>
                      </td>
                      <td>
                        <input
                          onChange={handleAddressChange}
                          type="checkbox"
                          name="ADDRESS_TYPE_INDICATOR_5"
                          id="ADDRESS_TYPE_INDICATOR-5"
                          value="Undetermined"
                        />{" "}
                        <label htmlFor="ADDRESS_TYPE_INDICATOR-5">
                          Undetermined
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="ADDRESS_TYPE_INDICATOR_AND_OR"
                  id="ADDRESS_TYPE_INDICATOR_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="ADDRESS_TYPE_INDICATOR_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="ADDRESS_TYPE_INDICATOR_AND_OR"
                  id="ADDRESS_TYPE_INDICATOR_OR"
                  value="1"
                />{" "}
                <label htmlFor="ADDRESS_TYPE_INDICATOR_OR">
                  Any Match On These
                </label>
              </fieldset>
            </td>
            <td>
              {" "}
              <fieldset>
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>
                      Length of Time in Years at Current Residence
                    </legend>
                  </div>
                  <div>
                    <small>In Years</small>
                  </div>
                </div>
                <select
                  onChange={handleResidentChange}
                  name="LENGTH_OF_RESIDENCE"
                  id="LENGTH_OF_RESIDENCE"
                >
                  <option defaultValue="">
                    Select Length at Current Residence in Years
                  </option>
                  <option value="01">1 year</option>
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
                  <option value="MORE">More or Less than 21 years</option>
                </select>
                <br />
                <label htmlFor="LTY">Less Than or Equal To in Years</label>{" "}
                <input
                  onChange={handleResidentChange}
                  type="radio"
                  name="Years_Residence"
                  id="LTY"
                  value="0"
                  defaultChecked
                />
                <br />
                <label htmlFor="EQU">Exactly Equal To in Years</label>{" "}
                <input
                  onChange={handleResidentChange}
                  type="radio"
                  name="Years_Residence"
                  id="EQU"
                  value="-1"
                />
                <br />
                <label htmlFor="GTY">
                  Greater Than or Equal To in Years
                </label>{" "}
                <input
                  onChange={handleResidentChange}
                  type="radio"
                  name="Years_Residence"
                  id="GTY"
                  value="1"
                />
                <br />
                <hr />
                <br />
                <label htmlFor="LENGTH_OF_RESIDENCE_AND">
                  All Must Match
                </label>{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="LENGTH_OF_RESIDENCE_AND_OR"
                  id="LENGTH_OF_RESIDENCE_AND"
                  value="0"
                  defaultChecked
                />{" "}
                |
                <label htmlFor="LENGTH_OF_RESIDENCE_OR">
                  Any Match On This
                </label>{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="LENGTH_OF_RESIDENCE_AND_OR"
                  id="LENGTH_OF_RESIDENCE_OR"
                  value="1"
                />
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              {" "}
              <fieldset>
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>
                      Select Records Based on Homeowners 1<sup>st</sup> Mortgage
                      Date:
                    </legend>
                  </div>
                  <div>
                    <span className="elevfont">
                      Include in only records that have mortgage from an earlier
                      date back to a later date.
                    </span>
                  </div>
                </div>
                <table width="100%" cellPadding="10" cellSpacing="2">
                  <tbody>
                    <tr valign="top">
                      <td align="center">
                        <h5 className="redtext">From this Date:</h5>
                        <select
                          onChange={handleMortgageChange}
                          name="mortgage_date"
                          id="mortgage_date"
                        >
                          <option
                            value=""
                            style={{ color: "#FFF", backgroundColor: "blue" }}
                          >
                            --- Mortgage Date ---
                          </option>
                          <optgroup label="---- Year 2022 ---"></optgroup>
                          <option value="2022-05-01">May 2022</option>
                          <option value="2022-04-01">April 2022</option>
                          <option value="2022-03-01">March 2022</option>
                          <option value="2022-02-01">February 2022</option>
                          <option value="2022-01-01">January 2022</option>
                          <optgroup label="---- Year 2021 ---"></optgroup>
                          <option value="2021-12-01">December 2021</option>
                          <option value="2021-11-01">November 2021</option>
                          <option value="2021-10-01">October 2021</option>
                          <option value="2021-09-01">September 2021</option>
                          <option value="2021-08-01">August 2021</option>
                          <option value="2021-07-01">July 2021</option>
                          <option value="2021-06-01">June 2021</option>
                          <option value="2021-05-01">May 2021</option>
                          <option value="2021-04-01">April 2021</option>
                          <option value="2021-03-01">March 2021</option>
                          <option value="2021-02-01">February 2021</option>
                          <option value="2021-01-01">January 2021</option>
                          <optgroup label="---- Year 2020 ---"></optgroup>
                          <option value="2020-12-01">December 2020</option>
                          <option value="2020-11-01">November 2020</option>
                          <option value="2020-10-01">October 2020</option>
                          <option value="2020-09-01">September 2020</option>
                          <option value="2020-08-01">August 2020</option>
                          <option value="2020-07-01">July 2020</option>
                          <option value="2020-06-01">June 2020</option>
                          <option value="2020-05-01">May 2020</option>
                          <option value="2020-04-01">April 2020</option>
                          <option value="2020-03-01">March 2020</option>
                          <option value="2020-02-01">February 2020</option>
                          <option value="2020-01-01">January 2020</option>
                          <optgroup label="---- Year 2019 ---"></optgroup>
                          <option value="2019-12-01">December 2019</option>
                          <option value="2019-11-01">November 2019</option>
                          <option value="2019-10-01">October 2019</option>
                          <option value="2019-09-01">September 2019</option>
                          <option value="2019-08-01">August 2019</option>
                          <option value="2019-07-01">July 2019</option>
                          <option value="2019-06-01">June 2019</option>
                          <option value="2019-05-01">May 2019</option>
                          <option value="2019-04-01">April 2019</option>
                          <option value="2019-03-01">March 2019</option>
                          <option value="2019-02-01">February 2019</option>
                          <option value="2019-01-01">January 2019</option>
                          <optgroup label="---- Year 2018 ---"></optgroup>
                          <option value="2018-12-01">December 2018</option>
                          <option value="2018-11-01">November 2018</option>
                          <option value="2018-10-01">October 2018</option>
                          <option value="2018-09-01">September 2018</option>
                          <option value="2018-08-01">August 2018</option>
                          <option value="2018-07-01">July 2018</option>
                          <option value="2018-06-01">June 2018</option>
                          <option value="2018-05-01">May 2018</option>
                          <option value="2018-04-01">April 2018</option>
                          <option value="2018-03-01">March 2018</option>
                          <option value="2018-02-01">February 2018</option>
                          <option value="2018-01-01">January 2018</option>
                          <optgroup label="---- Year 2017 ---"></optgroup>
                          <option value="2017-12-01">December 2017</option>
                          <option value="2017-11-01">November 2017</option>
                          <option value="2017-10-01">October 2017</option>
                          <option value="2017-09-01">September 2017</option>
                          <option value="2017-08-01">August 2017</option>
                          <option value="2017-07-01">July 2017</option>
                          <option value="2017-06-01">June 2017</option>
                          <option value="2017-05-01">May 2017</option>
                          <option value="2017-04-01">April 2017</option>
                          <option value="2017-03-01">March 2017</option>
                          <option value="2017-02-01">February 2017</option>
                          <option value="2017-01-01">January 2017</option>
                          <optgroup label="---- Year 2016 ---"></optgroup>
                          <option value="2016-12-01">December 2016</option>
                          <option value="2016-11-01">November 2016</option>
                          <option value="2016-10-01">October 2016</option>
                          <option value="2016-09-01">September 2016</option>
                          <option value="2016-08-01">August 2016</option>
                          <option value="2016-07-01">July 2016</option>
                          <option value="2016-06-01">June 2016</option>
                          <option value="2016-05-01">May 2016</option>
                          <option value="2016-04-01">April 2016</option>
                          <option value="2016-03-01">March 2016</option>
                          <option value="2016-02-01">February 2016</option>
                          <option value="2016-01-01">January 2016</option>
                          <optgroup label="---- Year 2015 ---"></optgroup>
                          <option value="2015-12-01">December 2015</option>
                          <option value="2015-11-01">November 2015</option>
                          <option value="2015-10-01">October 2015</option>
                          <option value="2015-09-01">September 2015</option>
                          <option value="2015-08-01">August 2015</option>
                          <option value="2015-07-01">July 2015</option>
                          <option value="2015-06-01">June 2015</option>
                          <option value="2015-05-01">May 2015</option>
                          <option value="2015-04-01">April 2015</option>
                          <option value="2015-03-01">March 2015</option>
                          <option value="2015-02-01">February 2015</option>
                          <option value="2015-01-01">January 2015</option>
                          <optgroup label="---- Year 2014 ---"></optgroup>
                          <option value="2014-12-01">December 2014</option>
                          <option value="2014-11-01">November 2014</option>
                          <option value="2014-10-01">October 2014</option>
                          <option value="2014-09-01">September 2014</option>
                          <option value="2014-08-01">August 2014</option>
                          <option value="2014-07-01">July 2014</option>
                          <option value="2014-06-01">June 2014</option>
                          <option value="2014-05-01">May 2014</option>
                          <option value="2014-04-01">April 2014</option>
                          <option value="2014-03-01">March 2014</option>
                          <option value="2014-02-01">February 2014</option>
                          <option value="2014-01-01">January 2014</option>
                          <optgroup label="---- Year 2013 ---"></optgroup>
                          <option value="2013-12-01">December 2013</option>
                          <option value="2013-11-01">November 2013</option>
                          <option value="2013-10-01">October 2013</option>
                          <option value="2013-09-01">September 2013</option>
                          <option value="2013-08-01">August 2013</option>
                          <option value="2013-07-01">July 2013</option>
                          <option value="2013-06-01">June 2013</option>
                          <option value="2013-05-01">May 2013</option>
                          <option value="2013-04-01">April 2013</option>
                          <option value="2013-03-01">March 2013</option>
                          <option value="2013-02-01">February 2013</option>
                          <option value="2013-01-01">January 2013</option>
                          <optgroup label="---- Year 2012 ---"></optgroup>
                          <option value="2012-12-01">December 2012</option>
                          <option value="2012-11-01">November 2012</option>
                          <option value="2012-10-01">October 2012</option>
                          <option value="2012-09-01">September 2012</option>
                          <option value="2012-08-01">August 2012</option>
                          <option value="2012-07-01">July 2012</option>
                          <option value="2012-06-01">June 2012</option>
                          <option value="2012-05-01">May 2012</option>
                          <option value="2012-04-01">April 2012</option>
                          <option value="2012-03-01">March 2012</option>
                          <option value="2012-02-01">February 2012</option>
                          <option value="2012-01-01">January 2012</option>
                          <optgroup label="---- Year 2011 ---"></optgroup>
                          <option value="2011-12-01">December 2011</option>
                          <option value="2011-11-01">November 2011</option>
                          <option value="2011-10-01">October 2011</option>
                          <option value="2011-09-01">September 2011</option>
                          <option value="2011-08-01">August 2011</option>
                          <option value="2011-07-01">July 2011</option>
                          <option value="2011-06-01">June 2011</option>
                          <option value="2011-05-01">May 2011</option>
                          <option value="2011-04-01">April 2011</option>
                          <option value="2011-03-01">March 2011</option>
                          <option value="2011-02-01">February 2011</option>
                          <option value="2011-01-01">January 2011</option>
                          <optgroup label="---- Year 2010 ---"></optgroup>
                          <option value="2010-12-01">December 2010</option>
                          <option value="2010-11-01">November 2010</option>
                          <option value="2010-10-01">October 2010</option>
                          <option value="2010-09-01">September 2010</option>
                          <option value="2010-08-01">August 2010</option>
                          <option value="2010-07-01">July 2010</option>
                          <option value="2010-06-01">June 2010</option>
                          <option value="2010-05-01">May 2010</option>
                          <option value="2010-04-01">April 2010</option>
                          <option value="2010-03-01">March 2010</option>
                          <option value="2010-02-01">February 2010</option>
                          <option value="2010-01-01">January 2010</option>
                          <optgroup label="---- Year 2009 ---"></optgroup>
                          <option value="2009-12-01">December 2009</option>
                          <option value="2009-11-01">November 2009</option>
                          <option value="2009-10-01">October 2009</option>
                          <option value="2009-09-01">September 2009</option>
                          <option value="2009-08-01">August 2009</option>
                          <option value="2009-07-01">July 2009</option>
                          <option value="2009-06-01">June 2009</option>
                          <option value="2009-05-01">May 2009</option>
                          <option value="2009-04-01">April 2009</option>
                          <option value="2009-03-01">March 2009</option>
                          <option value="2009-02-01">February 2009</option>
                          <option value="2009-01-01">January 2009</option>
                          <optgroup label="---- Year 2008 ---"></optgroup>
                          <option value="2008-12-01">December 2008</option>
                          <option value="2008-11-01">November 2008</option>
                          <option value="2008-10-01">October 2008</option>
                          <option value="2008-09-01">September 2008</option>
                          <option value="2008-08-01">August 2008</option>
                          <option value="2008-07-01">July 2008</option>
                          <option value="2008-06-01">June 2008</option>
                          <option value="2008-05-01">May 2008</option>
                          <option value="2008-04-01">April 2008</option>
                          <option value="2008-03-01">March 2008</option>
                          <option value="2008-02-01">February 2008</option>
                          <option value="2008-01-01">January 2008</option>
                          <optgroup label="---- Year 2007 ---"></optgroup>
                          <option value="2007-12-01">December 2007</option>
                          <option value="2007-11-01">November 2007</option>
                          <option value="2007-10-01">October 2007</option>
                          <option value="2007-09-01">September 2007</option>
                          <option value="2007-08-01">August 2007</option>
                          <option value="2007-07-01">July 2007</option>
                          <option value="2007-06-01">June 2007</option>
                          <option value="2007-05-01">May 2007</option>
                          <option value="2007-04-01">April 2007</option>
                          <option value="2007-03-01">March 2007</option>
                          <option value="2007-02-01">February 2007</option>
                          <option value="2007-01-01">January 2007</option>
                          <optgroup label="---- Year 2006 ---"></optgroup>
                          <option value="2006-12-01">December 2006</option>
                          <option value="2006-11-01">November 2006</option>
                          <option value="2006-10-01">October 2006</option>
                          <option value="2006-09-01">September 2006</option>
                          <option value="2006-08-01">August 2006</option>
                          <option value="2006-07-01">July 2006</option>
                          <option value="2006-06-01">June 2006</option>
                          <option value="2006-05-01">May 2006</option>
                          <option value="2006-04-01">April 2006</option>
                          <option value="2006-03-01">March 2006</option>
                          <option value="2006-02-01">February 2006</option>
                          <option value="2006-01-01">January 2006</option>
                          <optgroup label="---- Year 2005 ---"></optgroup>
                          <option value="2005-12-01">December 2005</option>
                          <option value="2005-11-01">November 2005</option>
                          <option value="2005-10-01">October 2005</option>
                          <option value="2005-09-01">September 2005</option>
                          <option value="2005-08-01">August 2005</option>
                          <option value="2005-07-01">July 2005</option>
                          <option value="2005-06-01">June 2005</option>
                          <option value="2005-05-01">May 2005</option>
                          <option value="2005-04-01">April 2005</option>
                          <option value="2005-03-01">March 2005</option>
                          <option value="2005-02-01">February 2005</option>
                          <option value="2005-01-01">January 2005</option>
                          <optgroup label="---- Year 2004 ---"></optgroup>
                          <option value="2004-12-01">December 2004</option>
                          <option value="2004-11-01">November 2004</option>
                          <option value="2004-10-01">October 2004</option>
                          <option value="2004-09-01">September 2004</option>
                          <option value="2004-08-01">August 2004</option>
                          <option value="2004-07-01">July 2004</option>
                          <option value="2004-06-01">June 2004</option>
                          <option value="2004-05-01">May 2004</option>
                          <option value="2004-04-01">April 2004</option>
                          <option value="2004-03-01">March 2004</option>
                          <option value="2004-02-01">February 2004</option>
                          <option value="2004-01-01">January 2004</option>
                          <optgroup label="---- Year 2003 ---"></optgroup>
                          <option value="2003-12-01">December 2003</option>
                          <option value="2003-11-01">November 2003</option>
                          <option value="2003-10-01">October 2003</option>
                          <option value="2003-09-01">September 2003</option>
                          <option value="2003-08-01">August 2003</option>
                          <option value="2003-07-01">July 2003</option>
                          <option value="2003-06-01">June 2003</option>
                          <option value="2003-05-01">May 2003</option>
                          <option value="2003-04-01">April 2003</option>
                          <option value="2003-03-01">March 2003</option>
                          <option value="2003-02-01">February 2003</option>
                          <option value="2003-01-01">January 2003</option>
                          <optgroup label="---- Year 2002 ---"></optgroup>
                          <option value="2002-12-01">December 2002</option>
                          <option value="2002-11-01">November 2002</option>
                          <option value="2002-10-01">October 2002</option>
                          <option value="2002-09-01">September 2002</option>
                          <option value="2002-08-01">August 2002</option>
                          <option value="2002-07-01">July 2002</option>
                          <option value="2002-06-01">June 2002</option>
                          <option value="2002-05-01">May 2002</option>
                          <option value="2002-04-01">April 2002</option>
                          <option value="2002-03-01">March 2002</option>
                          <option value="2002-02-01">February 2002</option>
                          <option value="2002-01-01">January 2002</option>
                          <optgroup label="---- Year 2001 ---"></optgroup>
                          <option value="2001-12-01">December 2001</option>
                          <option value="2001-11-01">November 2001</option>
                          <option value="2001-10-01">October 2001</option>
                          <option value="2001-09-01">September 2001</option>
                          <option value="2001-08-01">August 2001</option>
                          <option value="2001-07-01">July 2001</option>
                          <option value="2001-06-01">June 2001</option>
                          <option value="2001-05-01">May 2001</option>
                          <option value="2001-04-01">April 2001</option>
                          <option value="2001-03-01">March 2001</option>
                          <option value="2001-02-01">February 2001</option>
                          <option value="2001-01-01">January 2001</option>
                          <optgroup label="---- Year 2000 ---"></optgroup>
                          <option value="2000-12-01">December 2000</option>
                          <option value="2000-11-01">November 2000</option>
                          <option value="2000-10-01">October 2000</option>
                          <option value="2000-09-01">September 2000</option>
                          <option value="2000-08-01">August 2000</option>
                          <option value="2000-07-01">July 2000</option>
                          <option value="2000-06-01">June 2000</option>
                          <option value="2000-05-01">May 2000</option>
                          <option value="2000-04-01">April 2000</option>
                          <option value="2000-03-01">March 2000</option>
                          <option value="2000-02-01">February 2000</option>
                          <option value="2000-01-01">January 2000</option>
                          <optgroup label="---- Year 1999 ---"></optgroup>
                          <option value="1999-12-01">December 1999</option>
                          <option value="1999-11-01">November 1999</option>
                          <option value="1999-10-01">October 1999</option>
                          <option value="1999-09-01">September 1999</option>
                          <option value="1999-08-01">August 1999</option>
                          <option value="1999-07-01">July 1999</option>
                          <option value="1999-06-01">June 1999</option>
                          <option value="1999-05-01">May 1999</option>
                          <option value="1999-04-01">April 1999</option>
                          <option value="1999-03-01">March 1999</option>
                          <option value="1999-02-01">February 1999</option>
                          <option value="1999-01-01">January 1999</option>
                          <optgroup label="---- Year 1998 ---"></optgroup>
                          <option value="1998-12-01">December 1998</option>
                          <option value="1998-11-01">November 1998</option>
                          <option value="1998-10-01">October 1998</option>
                          <option value="1998-09-01">September 1998</option>
                          <option value="1998-08-01">August 1998</option>
                          <option value="1998-07-01">July 1998</option>
                          <option value="1998-06-01">June 1998</option>
                          <option value="1998-05-01">May 1998</option>
                          <option value="1998-04-01">April 1998</option>
                          <option value="1998-03-01">March 1998</option>
                          <option value="1998-02-01">February 1998</option>
                          <option value="1998-01-01">January 1998</option>
                          <optgroup label="---- Year 1997 ---"></optgroup>
                          <option value="1997-12-01">December 1997</option>
                          <option value="1997-11-01">November 1997</option>
                          <option value="1997-10-01">October 1997</option>
                          <option value="1997-09-01">September 1997</option>
                          <option value="1997-08-01">August 1997</option>
                          <option value="1997-07-01">July 1997</option>
                          <option value="1997-06-01">June 1997</option>
                          <option value="1997-05-01">May 1997</option>
                          <option value="1997-04-01">April 1997</option>
                          <option value="1997-03-01">March 1997</option>
                          <option value="1997-02-01">February 1997</option>
                          <option value="1997-01-01">January 1997</option>
                          <optgroup label="---- Year 1996 ---"></optgroup>
                          <option value="1996-12-01">December 1996</option>
                          <option value="1996-11-01">November 1996</option>
                          <option value="1996-10-01">October 1996</option>
                          <option value="1996-09-01">September 1996</option>
                          <option value="1996-08-01">August 1996</option>
                          <option value="1996-07-01">July 1996</option>
                          <option value="1996-06-01">June 1996</option>
                          <option value="1996-05-01">May 1996</option>
                          <option value="1996-04-01">April 1996</option>
                          <option value="1996-03-01">March 1996</option>
                          <option value="1996-02-01">February 1996</option>
                          <option value="1996-01-01">January 1996</option>
                          <optgroup label="---- Year 1995 ---"></optgroup>
                          <option value="1995-12-01">December 1995</option>
                          <option value="1995-11-01">November 1995</option>
                          <option value="1995-10-01">October 1995</option>
                          <option value="1995-09-01">September 1995</option>
                          <option value="1995-08-01">August 1995</option>
                          <option value="1995-07-01">July 1995</option>
                          <option value="1995-06-01">June 1995</option>
                          <option value="1995-05-01">May 1995</option>
                          <option value="1995-04-01">April 1995</option>
                          <option value="1995-03-01">March 1995</option>
                          <option value="1995-02-01">February 1995</option>
                          <option value="1995-01-01">January 1995</option>
                          <optgroup label="---- Year 1994 ---"></optgroup>
                          <option value="1994-12-01">December 1994</option>
                          <option value="1994-11-01">November 1994</option>
                          <option value="1994-10-01">October 1994</option>
                          <option value="1994-09-01">September 1994</option>
                          <option value="1994-08-01">August 1994</option>
                          <option value="1994-07-01">July 1994</option>
                          <option value="1994-06-01">June 1994</option>
                          <option value="1994-05-01">May 1994</option>
                          <option value="1994-04-01">April 1994</option>
                          <option value="1994-03-01">March 1994</option>
                          <option value="1994-02-01">February 1994</option>
                          <option value="1994-01-01">January 1994</option>
                          <optgroup label="---- Year 1993 ---"></optgroup>
                          <option value="1993-12-01">December 1993</option>
                          <option value="1993-11-01">November 1993</option>
                          <option value="1993-10-01">October 1993</option>
                          <option value="1993-09-01">September 1993</option>
                          <option value="1993-08-01">August 1993</option>
                          <option value="1993-07-01">July 1993</option>
                          <option value="1993-06-01">June 1993</option>
                          <option value="1993-05-01">May 1993</option>
                          <option value="1993-04-01">April 1993</option>
                          <option value="1993-03-01">March 1993</option>
                          <option value="1993-02-01">February 1993</option>
                          <option value="1993-01-01">January 1993</option>
                          <optgroup label="---- Year 1992 ---"></optgroup>
                          <option value="1992-12-01">December 1992</option>
                          <option value="1992-11-01">November 1992</option>
                          <option value="1992-10-01">October 1992</option>
                          <option value="1992-09-01">September 1992</option>
                          <option value="1992-08-01">August 1992</option>
                          <option value="1992-07-01">July 1992</option>
                          <option value="1992-06-01">June 1992</option>
                          <option value="1992-05-01">May 1992</option>
                          <option value="1992-04-01">April 1992</option>
                          <option value="1992-03-01">March 1992</option>
                          <option value="1992-02-01">February 1992</option>
                          <option value="1992-01-01">January 1992</option>
                          <optgroup label="---- Year 1991 ---"></optgroup>
                          <option value="1991-12-01">December 1991</option>
                          <option value="1991-11-01">November 1991</option>
                          <option value="1991-10-01">October 1991</option>
                          <option value="1991-09-01">September 1991</option>
                          <option value="1991-08-01">August 1991</option>
                          <option value="1991-07-01">July 1991</option>
                          <option value="1991-06-01">June 1991</option>
                          <option value="1991-05-01">May 1991</option>
                          <option value="1991-04-01">April 1991</option>
                          <option value="1991-03-01">March 1991</option>
                          <option value="1991-02-01">February 1991</option>
                          <option value="1991-01-01">January 1991</option>
                          <optgroup label="---- Year 1990 ---"></optgroup>
                          <option value="1990-12-01">December 1990</option>
                          <option value="1990-11-01">November 1990</option>
                          <option value="1990-10-01">October 1990</option>
                          <option value="1990-09-01">September 1990</option>
                          <option value="1990-08-01">August 1990</option>
                          <option value="1990-07-01">July 1990</option>
                          <option value="1990-06-01">June 1990</option>
                          <option value="1990-05-01">May 1990</option>
                          <option value="1990-04-01">April 1990</option>
                          <option value="1990-03-01">March 1990</option>
                          <option value="1990-02-01">February 1990</option>
                          <option value="1990-01-01">January 1990</option>
                          <optgroup label="---- Year 1989 ---"></optgroup>
                          <option value="1989-12-01">December 1989</option>
                          <option value="1989-11-01">November 1989</option>
                          <option value="1989-10-01">October 1989</option>
                          <option value="1989-09-01">September 1989</option>
                          <option value="1989-08-01">August 1989</option>
                          <option value="1989-07-01">July 1989</option>
                          <option value="1989-06-01">June 1989</option>
                          <option value="1989-05-01">May 1989</option>
                          <option value="1989-04-01">April 1989</option>
                          <option value="1989-03-01">March 1989</option>
                          <option value="1989-02-01">February 1989</option>
                          <option value="1989-01-01">January 1989</option>
                          <optgroup label="---- Year 1988 ---"></optgroup>
                          <option value="1988-12-01">December 1988</option>
                          <option value="1988-11-01">November 1988</option>
                          <option value="1988-10-01">October 1988</option>
                          <option value="1988-09-01">September 1988</option>
                          <option value="1988-08-01">August 1988</option>
                          <option value="1988-07-01">July 1988</option>
                          <option value="1988-06-01">June 1988</option>
                          <option value="1988-05-01">May 1988</option>
                          <option value="1988-04-01">April 1988</option>
                          <option value="1988-03-01">March 1988</option>
                          <option value="1988-02-01">February 1988</option>
                          <option value="1988-01-01">January 1988</option>
                          <optgroup label="---- Year 1987 ---"></optgroup>
                          <option value="1987-12-01">December 1987</option>
                          <option value="1987-11-01">November 1987</option>
                          <option value="1987-10-01">October 1987</option>
                          <option value="1987-09-01">September 1987</option>
                          <option value="1987-08-01">August 1987</option>
                          <option value="1987-07-01">July 1987</option>
                          <option value="1987-06-01">June 1987</option>
                          <option value="1987-05-01">May 1987</option>
                          <option value="1987-04-01">April 1987</option>
                          <option value="1987-03-01">March 1987</option>
                          <option value="1987-02-01">February 1987</option>
                          <option value="1987-01-01">January 1987</option>
                          <optgroup label="---- Year 1986 ---"></optgroup>
                          <option value="1986-12-01">December 1986</option>
                          <option value="1986-11-01">November 1986</option>
                          <option value="1986-10-01">October 1986</option>
                          <option value="1986-09-01">September 1986</option>
                          <option value="1986-08-01">August 1986</option>
                          <option value="1986-07-01">July 1986</option>
                          <option value="1986-06-01">June 1986</option>
                          <option value="1986-05-01">May 1986</option>
                          <option value="1986-04-01">April 1986</option>
                          <option value="1986-03-01">March 1986</option>
                          <option value="1986-02-01">February 1986</option>
                          <option value="1986-01-01">January 1986</option>
                          <optgroup label="---- Year 1985 ---"></optgroup>
                          <option value="1985-12-01">December 1985</option>
                          <option value="1985-11-01">November 1985</option>
                          <option value="1985-10-01">October 1985</option>
                          <option value="1985-09-01">September 1985</option>
                          <option value="1985-08-01">August 1985</option>
                          <option value="1985-07-01">July 1985</option>
                          <option value="1985-06-01">June 1985</option>
                          <option value="1985-05-01">May 1985</option>
                          <option value="1985-04-01">April 1985</option>
                          <option value="1985-03-01">March 1985</option>
                          <option value="1985-02-01">February 1985</option>
                          <option value="1985-01-01">January 1985</option>
                          <optgroup label="---- Year 1984 ---"></optgroup>
                          <option value="1984-12-01">December 1984</option>
                          <option value="1984-11-01">November 1984</option>
                          <option value="1984-10-01">October 1984</option>
                          <option value="1984-09-01">September 1984</option>
                          <option value="1984-08-01">August 1984</option>
                          <option value="1984-07-01">July 1984</option>
                          <option value="1984-06-01">June 1984</option>
                          <option value="1984-05-01">May 1984</option>
                          <option value="1984-04-01">April 1984</option>
                          <option value="1984-03-01">March 1984</option>
                          <option value="1984-02-01">February 1984</option>
                          <option value="1984-01-01">January 1984</option>
                          <optgroup label="---- Year 1983 ---"></optgroup>
                          <option value="1983-12-01">December 1983</option>
                          <option value="1983-11-01">November 1983</option>
                          <option value="1983-10-01">October 1983</option>
                          <option value="1983-09-01">September 1983</option>
                          <option value="1983-08-01">August 1983</option>
                          <option value="1983-07-01">July 1983</option>
                          <option value="1983-06-01">June 1983</option>
                          <option value="1983-05-01">May 1983</option>
                          <option value="1983-04-01">April 1983</option>
                          <option value="1983-03-01">March 1983</option>
                          <option value="1983-02-01">February 1983</option>
                          <option value="1983-01-01">January 1983</option>
                          <optgroup label="---- Year 1982 ---"></optgroup>
                          <option value="1982-12-01">December 1982</option>
                          <option value="1982-11-01">November 1982</option>
                          <option value="1982-10-01">October 1982</option>
                          <option value="1982-09-01">September 1982</option>
                          <option value="1982-08-01">August 1982</option>
                          <option value="1982-07-01">July 1982</option>
                          <option value="1982-06-01">June 1982</option>
                          <option value="1982-05-01">May 1982</option>
                          <option value="1982-04-01">April 1982</option>
                          <option value="1982-03-01">March 1982</option>
                          <option value="1982-02-01">February 1982</option>
                          <option value="1982-01-01">January 1982</option>
                          <option value="">All Dates</option>
                        </select>{" "}
                        <br />
                        <span className="tenfont">
                          This Must be an Earlier Date
                          <br /> than the One to the Right.
                        </span>
                      </td>
                      <td width="2px" bgcolor="#000"></td>
                      <td align="center" width="49%">
                        <h5 className="redtext">To this Date:</h5>
                        <select
                          onChange={handleMortgageChange}
                          name="mortgage_date_later"
                          id="mortgage_date_later"
                        >
                          <option
                            value=""
                            style={{ color: "#FFF", backgroundColor: "blue" }}
                          >
                            Default: Today's Date
                          </option>
                          <optgroup label="---- Year 2022 ---" />
                          <option value="2022-05-01">May 2022</option>
                          <option value="2022-04-01">April 2022</option>
                          <option value="2022-03-01">March 2022</option>
                          <option value="2022-02-01">February 2022</option>
                          <option value="2022-01-01">January 2022</option>
                          <optgroup label="---- Year 2021 ---" />
                          <option value="2021-12-01">December 2021</option>
                          <option value="2021-11-01">November 2021</option>
                          <option value="2021-10-01">October 2021</option>
                          <option value="2021-09-01">September 2021</option>
                          <option value="2021-08-01">August 2021</option>
                          <option value="2021-07-01">July 2021</option>
                          <option value="2021-06-01">June 2021</option>
                          <option value="2021-05-01">May 2021</option>
                          <option value="2021-04-01">April 2021</option>
                          <option value="2021-03-01">March 2021</option>
                          <option value="2021-02-01">February 2021</option>
                          <option value="2021-01-01">January 2021</option>
                          <optgroup label="---- Year 2020 ---" />
                          <option value="2020-12-01">December 2020</option>
                          <option value="2020-11-01">November 2020</option>
                          <option value="2020-10-01">October 2020</option>
                          <option value="2020-09-01">September 2020</option>
                          <option value="2020-08-01">August 2020</option>
                          <option value="2020-07-01">July 2020</option>
                          <option value="2020-06-01">June 2020</option>
                          <option value="2020-05-01">May 2020</option>
                          <option value="2020-04-01">April 2020</option>
                          <option value="2020-03-01">March 2020</option>
                          <option value="2020-02-01">February 2020</option>
                          <option value="2020-01-01">January 2020</option>
                          <optgroup label="---- Year 2019 ---" />
                          <option value="2019-12-01">December 2019</option>
                          <option value="2019-11-01">November 2019</option>
                          <option value="2019-10-01">October 2019</option>
                          <option value="2019-09-01">September 2019</option>
                          <option value="2019-08-01">August 2019</option>
                          <option value="2019-07-01">July 2019</option>
                          <option value="2019-06-01">June 2019</option>
                          <option value="2019-05-01">May 2019</option>
                          <option value="2019-04-01">April 2019</option>
                          <option value="2019-03-01">March 2019</option>
                          <option value="2019-02-01">February 2019</option>
                          <option value="2019-01-01">January 2019</option>
                          <optgroup label="---- Year 2018 ---" />
                          <option value="2018-12-01">December 2018</option>
                          <option value="2018-11-01">November 2018</option>
                          <option value="2018-10-01">October 2018</option>
                          <option value="2018-09-01">September 2018</option>
                          <option value="2018-08-01">August 2018</option>
                          <option value="2018-07-01">July 2018</option>
                          <option value="2018-06-01">June 2018</option>
                          <option value="2018-05-01">May 2018</option>
                          <option value="2018-04-01">April 2018</option>
                          <option value="2018-03-01">March 2018</option>
                          <option value="2018-02-01">February 2018</option>
                          <option value="2018-01-01">January 2018</option>
                          <optgroup label="---- Year 2017 ---" />
                          <option value="2017-12-01">December 2017</option>
                          <option value="2017-11-01">November 2017</option>
                          <option value="2017-10-01">October 2017</option>
                          <option value="2017-09-01">September 2017</option>
                          <option value="2017-08-01">August 2017</option>
                          <option value="2017-07-01">July 2017</option>
                          <option value="2017-06-01">June 2017</option>
                          <option value="2017-05-01">May 2017</option>
                          <option value="2017-04-01">April 2017</option>
                          <option value="2017-03-01">March 2017</option>
                          <option value="2017-02-01">February 2017</option>
                          <option value="2017-01-01">January 2017</option>
                          <optgroup label="---- Year 2016 ---" />
                          <option value="2016-12-01">December 2016</option>
                          <option value="2016-11-01">November 2016</option>
                          <option value="2016-10-01">October 2016</option>
                          <option value="2016-09-01">September 2016</option>
                          <option value="2016-08-01">August 2016</option>
                          <option value="2016-07-01">July 2016</option>
                          <option value="2016-06-01">June 2016</option>
                          <option value="2016-05-01">May 2016</option>
                          <option value="2016-04-01">April 2016</option>
                          <option value="2016-03-01">March 2016</option>
                          <option value="2016-02-01">February 2016</option>
                          <option value="2016-01-01">January 2016</option>
                          <optgroup label="---- Year 2015 ---" />
                          <option value="2015-12-01">December 2015</option>
                          <option value="2015-11-01">November 2015</option>
                          <option value="2015-10-01">October 2015</option>
                          <option value="2015-09-01">September 2015</option>
                          <option value="2015-08-01">August 2015</option>
                          <option value="2015-07-01">July 2015</option>
                          <option value="2015-06-01">June 2015</option>
                          <option value="2015-05-01">May 2015</option>
                          <option value="2015-04-01">April 2015</option>
                          <option value="2015-03-01">March 2015</option>
                          <option value="2015-02-01">February 2015</option>
                          <option value="2015-01-01">January 2015</option>
                          <optgroup label="---- Year 2014 ---" />
                          <option value="2014-12-01">December 2014</option>
                          <option value="2014-11-01">November 2014</option>
                          <option value="2014-10-01">October 2014</option>
                          <option value="2014-09-01">September 2014</option>
                          <option value="2014-08-01">August 2014</option>
                          <option value="2014-07-01">July 2014</option>
                          <option value="2014-06-01">June 2014</option>
                          <option value="2014-05-01">May 2014</option>
                          <option value="2014-04-01">April 2014</option>
                          <option value="2014-03-01">March 2014</option>
                          <option value="2014-02-01">February 2014</option>
                          <option value="2014-01-01">January 2014</option>
                          <optgroup label="---- Year 2013 ---" />
                          <option value="2013-12-01">December 2013</option>
                          <option value="2013-11-01">November 2013</option>
                          <option value="2013-10-01">October 2013</option>
                          <option value="2013-09-01">September 2013</option>
                          <option value="2013-08-01">August 2013</option>
                          <option value="2013-07-01">July 2013</option>
                          <option value="2013-06-01">June 2013</option>
                          <option value="2013-05-01">May 2013</option>
                          <option value="2013-04-01">April 2013</option>
                          <option value="2013-03-01">March 2013</option>
                          <option value="2013-02-01">February 2013</option>
                          <option value="2013-01-01">January 2013</option>
                          <optgroup label="---- Year 2012 ---" />
                          <option value="2012-12-01">December 2012</option>
                          <option value="2012-11-01">November 2012</option>
                          <option value="2012-10-01">October 2012</option>
                          <option value="2012-09-01">September 2012</option>
                          <option value="2012-08-01">August 2012</option>
                          <option value="2012-07-01">July 2012</option>
                          <option value="2012-06-01">June 2012</option>
                          <option value="2012-05-01">May 2012</option>
                          <option value="2012-04-01">April 2012</option>
                          <option value="2012-03-01">March 2012</option>
                          <option value="2012-02-01">February 2012</option>
                          <option value="2012-01-01">January 2012</option>
                          <optgroup label="---- Year 2011 ---" />
                          <option value="2011-12-01">December 2011</option>
                          <option value="2011-11-01">November 2011</option>
                          <option value="2011-10-01">October 2011</option>
                          <option value="2011-09-01">September 2011</option>
                          <option value="2011-08-01">August 2011</option>
                          <option value="2011-07-01">July 2011</option>
                          <option value="2011-06-01">June 2011</option>
                          <option value="2011-05-01">May 2011</option>
                          <option value="2011-04-01">April 2011</option>
                          <option value="2011-03-01">March 2011</option>
                          <option value="2011-02-01">February 2011</option>
                          <option value="2011-01-01">January 2011</option>
                          <optgroup label="---- Year 2010 ---" />
                          <option value="2010-12-01">December 2010</option>
                          <option value="2010-11-01">November 2010</option>
                          <option value="2010-10-01">October 2010</option>
                          <option value="2010-09-01">September 2010</option>
                          <option value="2010-08-01">August 2010</option>
                          <option value="2010-07-01">July 2010</option>
                          <option value="2010-06-01">June 2010</option>
                          <option value="2010-05-01">May 2010</option>
                          <option value="2010-04-01">April 2010</option>
                          <option value="2010-03-01">March 2010</option>
                          <option value="2010-02-01">February 2010</option>
                          <option value="2010-01-01">January 2010</option>
                          <optgroup label="---- Year 2009 ---" />
                          <option value="2009-12-01">December 2009</option>
                          <option value="2009-11-01">November 2009</option>
                          <option value="2009-10-01">October 2009</option>
                          <option value="2009-09-01">September 2009</option>
                          <option value="2009-08-01">August 2009</option>
                          <option value="2009-07-01">July 2009</option>
                          <option value="2009-06-01">June 2009</option>
                          <option value="2009-05-01">May 2009</option>
                          <option value="2009-04-01">April 2009</option>
                          <option value="2009-03-01">March 2009</option>
                          <option value="2009-02-01">February 2009</option>
                          <option value="2009-01-01">January 2009</option>
                          <optgroup label="---- Year 2008 ---" />
                          <option value="2008-12-01">December 2008</option>
                          <option value="2008-11-01">November 2008</option>
                          <option value="2008-10-01">October 2008</option>
                          <option value="2008-09-01">September 2008</option>
                          <option value="2008-08-01">August 2008</option>
                          <option value="2008-07-01">July 2008</option>
                          <option value="2008-06-01">June 2008</option>
                          <option value="2008-05-01">May 2008</option>
                          <option value="2008-04-01">April 2008</option>
                          <option value="2008-03-01">March 2008</option>
                          <option value="2008-02-01">February 2008</option>
                          <option value="2008-01-01">January 2008</option>
                          <optgroup label="---- Year 2007 ---" />
                          <option value="2007-12-01">December 2007</option>
                          <option value="2007-11-01">November 2007</option>
                          <option value="2007-10-01">October 2007</option>
                          <option value="2007-09-01">September 2007</option>
                          <option value="2007-08-01">August 2007</option>
                          <option value="2007-07-01">July 2007</option>
                          <option value="2007-06-01">June 2007</option>
                          <option value="2007-05-01">May 2007</option>
                          <option value="2007-04-01">April 2007</option>
                          <option value="2007-03-01">March 2007</option>
                          <option value="2007-02-01">February 2007</option>
                          <option value="2007-01-01">January 2007</option>
                          <optgroup label="---- Year 2006 ---" />
                          <option value="2006-12-01">December 2006</option>
                          <option value="2006-11-01">November 2006</option>
                          <option value="2006-10-01">October 2006</option>
                          <option value="2006-09-01">September 2006</option>
                          <option value="2006-08-01">August 2006</option>
                          <option value="2006-07-01">July 2006</option>
                          <option value="2006-06-01">June 2006</option>
                          <option value="2006-05-01">May 2006</option>
                          <option value="2006-04-01">April 2006</option>
                          <option value="2006-03-01">March 2006</option>
                          <option value="2006-02-01">February 2006</option>
                          <option value="2006-01-01">January 2006</option>
                          <optgroup label="---- Year 2005 ---" />
                          <option value="2005-12-01">December 2005</option>
                          <option value="2005-11-01">November 2005</option>
                          <option value="2005-10-01">October 2005</option>
                          <option value="2005-09-01">September 2005</option>
                          <option value="2005-08-01">August 2005</option>
                          <option value="2005-07-01">July 2005</option>
                          <option value="2005-06-01">June 2005</option>
                          <option value="2005-05-01">May 2005</option>
                          <option value="2005-04-01">April 2005</option>
                          <option value="2005-03-01">March 2005</option>
                          <option value="2005-02-01">February 2005</option>
                          <option value="2005-01-01">January 2005</option>
                          <optgroup label="---- Year 2004 ---" />
                          <option value="2004-12-01">December 2004</option>
                          <option value="2004-11-01">November 2004</option>
                          <option value="2004-10-01">October 2004</option>
                          <option value="2004-09-01">September 2004</option>
                          <option value="2004-08-01">August 2004</option>
                          <option value="2004-07-01">July 2004</option>
                          <option value="2004-06-01">June 2004</option>
                          <option value="2004-05-01">May 2004</option>
                          <option value="2004-04-01">April 2004</option>
                          <option value="2004-03-01">March 2004</option>
                          <option value="2004-02-01">February 2004</option>
                          <option value="2004-01-01">January 2004</option>
                          <optgroup label="---- Year 2003 ---" />
                          <option value="2003-12-01">December 2003</option>
                          <option value="2003-11-01">November 2003</option>
                          <option value="2003-10-01">October 2003</option>
                          <option value="2003-09-01">September 2003</option>
                          <option value="2003-08-01">August 2003</option>
                          <option value="2003-07-01">July 2003</option>
                          <option value="2003-06-01">June 2003</option>
                          <option value="2003-05-01">May 2003</option>
                          <option value="2003-04-01">April 2003</option>
                          <option value="2003-03-01">March 2003</option>
                          <option value="2003-02-01">February 2003</option>
                          <option value="2003-01-01">January 2003</option>
                          <optgroup label="---- Year 2002 ---" />
                          <option value="2002-12-01">December 2002</option>
                          <option value="2002-11-01">November 2002</option>
                          <option value="2002-10-01">October 2002</option>
                          <option value="2002-09-01">September 2002</option>
                          <option value="2002-08-01">August 2002</option>
                          <option value="2002-07-01">July 2002</option>
                          <option value="2002-06-01">June 2002</option>
                          <option value="2002-05-01">May 2002</option>
                          <option value="2002-04-01">April 2002</option>
                          <option value="2002-03-01">March 2002</option>
                          <option value="2002-02-01">February 2002</option>
                          <option value="2002-01-01">January 2002</option>
                          <optgroup label="---- Year 2001 ---" />
                          <option value="2001-12-01">December 2001</option>
                          <option value="2001-11-01">November 2001</option>
                          <option value="2001-10-01">October 2001</option>
                          <option value="2001-09-01">September 2001</option>
                          <option value="2001-08-01">August 2001</option>
                          <option value="2001-07-01">July 2001</option>
                          <option value="2001-06-01">June 2001</option>
                          <option value="2001-05-01">May 2001</option>
                          <option value="2001-04-01">April 2001</option>
                          <option value="2001-03-01">March 2001</option>
                          <option value="2001-02-01">February 2001</option>
                          <option value="2001-01-01">January 2001</option>
                          <optgroup label="---- Year 2000 ---" />
                          <option value="2000-12-01">December 2000</option>
                          <option value="2000-11-01">November 2000</option>
                          <option value="2000-10-01">October 2000</option>
                          <option value="2000-09-01">September 2000</option>
                          <option value="2000-08-01">August 2000</option>
                          <option value="2000-07-01">July 2000</option>
                          <option value="2000-06-01">June 2000</option>
                          <option value="2000-05-01">May 2000</option>
                          <option value="2000-04-01">April 2000</option>
                          <option value="2000-03-01">March 2000</option>
                          <option value="2000-02-01">February 2000</option>
                          <option value="2000-01-01">January 2000</option>
                          <optgroup label="---- Year 1999 ---" />
                          <option value="1999-12-01">December 1999</option>
                          <option value="1999-11-01">November 1999</option>
                          <option value="1999-10-01">October 1999</option>
                          <option value="1999-09-01">September 1999</option>
                          <option value="1999-08-01">August 1999</option>
                          <option value="1999-07-01">July 1999</option>
                          <option value="1999-06-01">June 1999</option>
                          <option value="1999-05-01">May 1999</option>
                          <option value="1999-04-01">April 1999</option>
                          <option value="1999-03-01">March 1999</option>
                          <option value="1999-02-01">February 1999</option>
                          <option value="1999-01-01">January 1999</option>
                          <optgroup label="---- Year 1998 ---" />
                          <option value="1998-12-01">December 1998</option>
                          <option value="1998-11-01">November 1998</option>
                          <option value="1998-10-01">October 1998</option>
                          <option value="1998-09-01">September 1998</option>
                          <option value="1998-08-01">August 1998</option>
                          <option value="1998-07-01">July 1998</option>
                          <option value="1998-06-01">June 1998</option>
                          <option value="1998-05-01">May 1998</option>
                          <option value="1998-04-01">April 1998</option>
                          <option value="1998-03-01">March 1998</option>
                          <option value="1998-02-01">February 1998</option>
                          <option value="1998-01-01">January 1998</option>
                          <optgroup label="---- Year 1997 ---" />
                          <option value="1997-12-01">December 1997</option>
                          <option value="1997-11-01">November 1997</option>
                          <option value="1997-10-01">October 1997</option>
                          <option value="1997-09-01">September 1997</option>
                          <option value="1997-08-01">August 1997</option>
                          <option value="1997-07-01">July 1997</option>
                          <option value="1997-06-01">June 1997</option>
                          <option value="1997-05-01">May 1997</option>
                          <option value="1997-04-01">April 1997</option>
                          <option value="1997-03-01">March 1997</option>
                          <option value="1997-02-01">February 1997</option>
                          <option value="1997-01-01">January 1997</option>
                          <optgroup label="---- Year 1996 ---" />
                          <option value="1996-12-01">December 1996</option>
                          <option value="1996-11-01">November 1996</option>
                          <option value="1996-10-01">October 1996</option>
                          <option value="1996-09-01">September 1996</option>
                          <option value="1996-08-01">August 1996</option>
                          <option value="1996-07-01">July 1996</option>
                          <option value="1996-06-01">June 1996</option>
                          <option value="1996-05-01">May 1996</option>
                          <option value="1996-04-01">April 1996</option>
                          <option value="1996-03-01">March 1996</option>
                          <option value="1996-02-01">February 1996</option>
                          <option value="1996-01-01">January 1996</option>
                          <optgroup label="---- Year 1995 ---" />
                          <option value="1995-12-01">December 1995</option>
                          <option value="1995-11-01">November 1995</option>
                          <option value="1995-10-01">October 1995</option>
                          <option value="1995-09-01">September 1995</option>
                          <option value="1995-08-01">August 1995</option>
                          <option value="1995-07-01">July 1995</option>
                          <option value="1995-06-01">June 1995</option>
                          <option value="1995-05-01">May 1995</option>
                          <option value="1995-04-01">April 1995</option>
                          <option value="1995-03-01">March 1995</option>
                          <option value="1995-02-01">February 1995</option>
                          <option value="1995-01-01">January 1995</option>
                          <optgroup label="---- Year 1994 ---" />
                          <option value="1994-12-01">December 1994</option>
                          <option value="1994-11-01">November 1994</option>
                          <option value="1994-10-01">October 1994</option>
                          <option value="1994-09-01">September 1994</option>
                          <option value="1994-08-01">August 1994</option>
                          <option value="1994-07-01">July 1994</option>
                          <option value="1994-06-01">June 1994</option>
                          <option value="1994-05-01">May 1994</option>
                          <option value="1994-04-01">April 1994</option>
                          <option value="1994-03-01">March 1994</option>
                          <option value="1994-02-01">February 1994</option>
                          <option value="1994-01-01">January 1994</option>
                          <optgroup label="---- Year 1993 ---" />
                          <option value="1993-12-01">December 1993</option>
                          <option value="1993-11-01">November 1993</option>
                          <option value="1993-10-01">October 1993</option>
                          <option value="1993-09-01">September 1993</option>
                          <option value="1993-08-01">August 1993</option>
                          <option value="1993-07-01">July 1993</option>
                          <option value="1993-06-01">June 1993</option>
                          <option value="1993-05-01">May 1993</option>
                          <option value="1993-04-01">April 1993</option>
                          <option value="1993-03-01">March 1993</option>
                          <option value="1993-02-01">February 1993</option>
                          <option value="1993-01-01">January 1993</option>
                          <optgroup label="---- Year 1992 ---" />
                          <option value="1992-12-01">December 1992</option>
                          <option value="1992-11-01">November 1992</option>
                          <option value="1992-10-01">October 1992</option>
                          <option value="1992-09-01">September 1992</option>
                          <option value="1992-08-01">August 1992</option>
                          <option value="1992-07-01">July 1992</option>
                          <option value="1992-06-01">June 1992</option>
                          <option value="1992-05-01">May 1992</option>
                          <option value="1992-04-01">April 1992</option>
                          <option value="1992-03-01">March 1992</option>
                          <option value="1992-02-01">February 1992</option>
                          <option value="1992-01-01">January 1992</option>
                          <optgroup label="---- Year 1991 ---" />
                          <option value="1991-12-01">December 1991</option>
                          <option value="1991-11-01">November 1991</option>
                          <option value="1991-10-01">October 1991</option>
                          <option value="1991-09-01">September 1991</option>
                          <option value="1991-08-01">August 1991</option>
                          <option value="1991-07-01">July 1991</option>
                          <option value="1991-06-01">June 1991</option>
                          <option value="1991-05-01">May 1991</option>
                          <option value="1991-04-01">April 1991</option>
                          <option value="1991-03-01">March 1991</option>
                          <option value="1991-02-01">February 1991</option>
                          <option value="1991-01-01">January 1991</option>
                          <optgroup label="---- Year 1990 ---" />
                          <option value="1990-12-01">December 1990</option>
                          <option value="1990-11-01">November 1990</option>
                          <option value="1990-10-01">October 1990</option>
                          <option value="1990-09-01">September 1990</option>
                          <option value="1990-08-01">August 1990</option>
                          <option value="1990-07-01">July 1990</option>
                          <option value="1990-06-01">June 1990</option>
                          <option value="1990-05-01">May 1990</option>
                          <option value="1990-04-01">April 1990</option>
                          <option value="1990-03-01">March 1990</option>
                          <option value="1990-02-01">February 1990</option>
                          <option value="1990-01-01">January 1990</option>
                          <optgroup label="---- Year 1989 ---" />
                          <option value="1989-12-01">December 1989</option>
                          <option value="1989-11-01">November 1989</option>
                          <option value="1989-10-01">October 1989</option>
                          <option value="1989-09-01">September 1989</option>
                          <option value="1989-08-01">August 1989</option>
                          <option value="1989-07-01">July 1989</option>
                          <option value="1989-06-01">June 1989</option>
                          <option value="1989-05-01">May 1989</option>
                          <option value="1989-04-01">April 1989</option>
                          <option value="1989-03-01">March 1989</option>
                          <option value="1989-02-01">February 1989</option>
                          <option value="1989-01-01">January 1989</option>
                          <optgroup label="---- Year 1988 ---" />
                          <option value="1988-12-01">December 1988</option>
                          <option value="1988-11-01">November 1988</option>
                          <option value="1988-10-01">October 1988</option>
                          <option value="1988-09-01">September 1988</option>
                          <option value="1988-08-01">August 1988</option>
                          <option value="1988-07-01">July 1988</option>
                          <option value="1988-06-01">June 1988</option>
                          <option value="1988-05-01">May 1988</option>
                          <option value="1988-04-01">April 1988</option>
                          <option value="1988-03-01">March 1988</option>
                          <option value="1988-02-01">February 1988</option>
                          <option value="1988-01-01">January 1988</option>
                          <optgroup label="---- Year 1987 ---" />
                          <option value="1987-12-01">December 1987</option>
                          <option value="1987-11-01">November 1987</option>
                          <option value="1987-10-01">October 1987</option>
                          <option value="1987-09-01">September 1987</option>
                          <option value="1987-08-01">August 1987</option>
                          <option value="1987-07-01">July 1987</option>
                          <option value="1987-06-01">June 1987</option>
                          <option value="1987-05-01">May 1987</option>
                          <option value="1987-04-01">April 1987</option>
                          <option value="1987-03-01">March 1987</option>
                          <option value="1987-02-01">February 1987</option>
                          <option value="1987-01-01">January 1987</option>
                          <optgroup label="---- Year 1986 ---" />
                          <option value="1986-12-01">December 1986</option>
                          <option value="1986-11-01">November 1986</option>
                          <option value="1986-10-01">October 1986</option>
                          <option value="1986-09-01">September 1986</option>
                          <option value="1986-08-01">August 1986</option>
                          <option value="1986-07-01">July 1986</option>
                          <option value="1986-06-01">June 1986</option>
                          <option value="1986-05-01">May 1986</option>
                          <option value="1986-04-01">April 1986</option>
                          <option value="1986-03-01">March 1986</option>
                          <option value="1986-02-01">February 1986</option>
                          <option value="1986-01-01">January 1986</option>
                          <optgroup label="---- Year 1985 ---" />
                          <option value="1985-12-01">December 1985</option>
                          <option value="1985-11-01">November 1985</option>
                          <option value="1985-10-01">October 1985</option>
                          <option value="1985-09-01">September 1985</option>
                          <option value="1985-08-01">August 1985</option>
                          <option value="1985-07-01">July 1985</option>
                          <option value="1985-06-01">June 1985</option>
                          <option value="1985-05-01">May 1985</option>
                          <option value="1985-04-01">April 1985</option>
                          <option value="1985-03-01">March 1985</option>
                          <option value="1985-02-01">February 1985</option>
                          <option value="1985-01-01">January 1985</option>
                          <optgroup label="---- Year 1984 ---" />
                          <option value="1984-12-01">December 1984</option>
                          <option value="1984-11-01">November 1984</option>
                          <option value="1984-10-01">October 1984</option>
                          <option value="1984-09-01">September 1984</option>
                          <option value="1984-08-01">August 1984</option>
                          <option value="1984-07-01">July 1984</option>
                          <option value="1984-06-01">June 1984</option>
                          <option value="1984-05-01">May 1984</option>
                          <option value="1984-04-01">April 1984</option>
                          <option value="1984-03-01">March 1984</option>
                          <option value="1984-02-01">February 1984</option>
                          <option value="1984-01-01">January 1984</option>
                          <optgroup label="---- Year 1983 ---" />
                          <option value="1983-12-01">December 1983</option>
                          <option value="1983-11-01">November 1983</option>
                          <option value="1983-10-01">October 1983</option>
                          <option value="1983-09-01">September 1983</option>
                          <option value="1983-08-01">August 1983</option>
                          <option value="1983-07-01">July 1983</option>
                          <option value="1983-06-01">June 1983</option>
                          <option value="1983-05-01">May 1983</option>
                          <option value="1983-04-01">April 1983</option>
                          <option value="1983-03-01">March 1983</option>
                          <option value="1983-02-01">February 1983</option>
                          <option value="1983-01-01">January 1983</option>
                          <optgroup label="---- Year 1982 ---" />
                          <option value="1982-12-01">December 1982</option>
                          <option value="1982-11-01">November 1982</option>
                          <option value="1982-10-01">October 1982</option>
                          <option value="1982-09-01">September 1982</option>
                          <option value="1982-08-01">August 1982</option>
                          <option value="1982-07-01">July 1982</option>
                          <option value="1982-06-01">June 1982</option>
                          <option value="1982-05-01">May 1982</option>
                          <option value="1982-04-01">April 1982</option>
                          <option value="1982-03-01">March 1982</option>
                          <option value="1982-02-01">February 1982</option>
                          <option value="1982-01-01">January 1982</option>
                        </select>{" "}
                        <br />
                        <span className="tenfont">
                          Leave this one alone if you want to <br />
                          select all records up to the present.
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
              <hr />
            </td>
          </tr>
          <tr valign="top">
            <td>
              <fieldset>
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Estimated Home Market Value</legend>
                  </div>
                  <div>
                    <small>Lower Range or Exact Values</small>
                  </div>
                </div>
                <select
                  onChange={handleHomeMarkChange}
                  name="HOME_MARKET_VALUE"
                  id="HOME_MARKET_VALUE"
                >
                  <option value="">Select Estimated Home Market Value</option>
                  <option value="$999">Under $999</option>
                  <option value="$1,000 - $24,99">$1,000 - $24,99</option>
                  <option value="$25,000 - $49,9">$25,000 - $49,9</option>
                  <option value="$50,000 - $74,9">$50,000 - $74,9</option>
                  <option value="$75,000 - $99,9">$75,000 - $99,9</option>
                  <option value="$100,000 - $124">$100,000 - $124</option>
                  <option value="$125,000 - $149">$125,000 - $149</option>
                  <option value="$150,000 - $174">$150,000 - $174</option>
                  <option value="$175,000 - $199">$175,000 - $199</option>
                  <option value="$200,000 - $224">$200,000 - $224</option>
                  <option value="$225,000 - $249">$225,000 - $249</option>
                  <option value="$250,000 - $274">$250,000 - $274</option>
                  <option value="$275,000 - $299">$275,000 - $299</option>
                  <option value="$300,000 - $349">$300,000 - $349</option>
                  <option value="$350,000 - $399">$350,000 - $399</option>
                  <option value="$400,000 - $449">$400,000 - $449</option>
                  <option value="$450,000 - $499">$450,000 - $499</option>
                  <option value="$500,000 - $749">$500,000 - $749</option>
                  <option value="$750,000 - $999">$750,000 - $999</option>
                  <option value="$1,000,000 Plus">Over $1,000,000 Plus</option>
                </select>
              </fieldset>
            </td>
            <td>
              <fieldset>
                <div style={{ display: "flex" }}>
                  <div>
                    <legend>Estimated Home Market Value Upper Range</legend>
                  </div>
                  <div>
                    <small>(optional)</small>
                  </div>
                </div>
                <select
                  onChange={handleHomeMarkChange}
                  name="HOME_MARKET_VALUE_UPPER"
                  id="HOME_MARKET_VALUE_UPPER"
                >
                  <option value="">
                    Select Estimated Home Market Value Upper Range
                  </option>
                  <option value="$999">Under $999</option>
                  <option value="$1,000 - $24,99">$1,000 - $24,99</option>
                  <option value="$25,000 - $49,9">$25,000 - $49,9</option>
                  <option value="$50,000 - $74,9">$50,000 - $74,9</option>
                  <option value="$75,000 - $99,9">$75,000 - $99,9</option>
                  <option value="$100,000 - $124">$100,000 - $124</option>
                  <option value="$125,000 - $149">$125,000 - $149</option>
                  <option value="$150,000 - $174">$150,000 - $174</option>
                  <option value="$175,000 - $199">$175,000 - $199</option>
                  <option value="$200,000 - $224">$200,000 - $224</option>
                  <option value="$225,000 - $249">$225,000 - $249</option>
                  <option value="$250,000 - $274">$250,000 - $274</option>
                  <option value="$275,000 - $299">$275,000 - $299</option>
                  <option value="$300,000 - $349">$300,000 - $349</option>
                  <option value="$350,000 - $399">$350,000 - $399</option>
                  <option value="$400,000 - $449">$400,000 - $449</option>
                  <option value="$450,000 - $499">$450,000 - $499</option>
                  <option value="$500,000 - $749">$500,000 - $749</option>
                  <option value="$750,000 - $999">$750,000 - $999</option>
                  <option value="$1,000,000 Plus">Over $1,000,000 Plus</option>
                </select>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <div style={{ border: "2px solid grey", borderTopWidth: "0" }}>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_MARKET_VALUE_AND_OR"
                  id="HOME_MARKET_VALUE_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="HOME_MARKET_VALUE_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_MARKET_VALUE_AND_OR"
                  id="HOME_MARKET_VALUE_OR"
                  value="1"
                />{" "}
                <label htmlFor="HOME_MARKET_VALUE_OR">Any Match On This</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset>
                <legend>Heating Fuel</legend>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div>
                    <input
                      onChange={handleFuelChange}
                      type="radio"
                      name="FUEL"
                      id="FUEL_Electric"
                      value="Electric"
                    />
                    <label htmlFor="FUEL_Electric">Electric</label> |
                  </div>
                  <div>
                    <input
                      onChange={handleFuelChange}
                      type="radio"
                      name="FUEL"
                      id="FUEL_Gas"
                      value="Gas"
                    />
                    <label htmlFor="FUEL_Gas">Gas</label> |
                  </div>
                  <div>
                    <input
                      onChange={handleFuelChange}
                      type="radio"
                      name="FUEL"
                      id="FUEL_Gas Piped"
                      value="Gas Piped"
                    />
                    <label htmlFor="FUEL_Gas Piped">Gas Piped</label> |
                  </div>
                  <div>
                    <input
                      onChange={handleFuelChange}
                      type="radio"
                      name="FUEL"
                      id="FUEL_Oil"
                      value="Oil"
                    />
                    <label htmlFor="FUEL_Oil">Oil</label> |
                  </div>
                  <div>
                    <input
                      onChange={handleFuelChange}
                      type="radio"
                      name="FUEL"
                      id="FUEL_NULL"
                      value=""
                      defaultChecked
                    />
                    <label htmlFor="FUEL_NULL">Ignore</label>
                  </div>
                </div>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="FUEL_AND_OR"
                  id="FUEL_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="FUEL_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="FUEL_AND_OR"
                  id="FUEL_OR"
                  value="1"
                />{" "}
                <label htmlFor="FUEL_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset>
                <legend>Type of Air Conditioning</legend>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div>
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC CENTRAL"
                      value="AC CENTRAL"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC CENTRAL">
                      Ac Central
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC CENTRAL & UNIT"
                      value="AC CENTRAL & UNIT"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC CENTRAL & UNIT">
                      Ac Central & Unit
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC DUAL UNIT"
                      value="AC DUAL UNIT"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC DUAL UNIT">
                      Ac Dual Unit
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC EVAPORATIVE"
                      value="AC EVAPORATIVE"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC EVAPORATIVE">
                      Ac Evaporative
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC HEAT PUMP"
                      value="AC HEAT PUMP"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC HEAT PUMP">
                      Ac Heat Pump
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC REFRIGERATION"
                      value="AC REFRIGERATION"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC REFRIGERATION">
                      Ac Refrigeration
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC PACKAGE"
                      value="AC PACKAGE"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC PACKAGE">
                      Ac Package
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC SEPARATE SYSTEM"
                      value="AC SEPARATE SYSTEM"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC SEPARATE SYSTEM">
                      Ac Separate System
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC SPLIT SYSTEM"
                      value="AC SPLIT SYSTEM"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC SPLIT SYSTEM">
                      Ac Split System
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC WALL UNIT"
                      value="AC WALL UNIT"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC WALL UNIT">
                      Ac Wall Unit
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC WINDOW UNIT"
                      value="AC WINDOW UNIT"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC WINDOW UNIT">
                      Ac Window Unit
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_AC WALL/WINDOW UNIT"
                      value="AC WALL/WINDOW UNIT"
                    />
                    <label htmlFor="AIR_CONDITIONING_AC WALL/WINDOW UNIT">
                      Ac Wall/window Unit
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleAirChange}
                      type="radio"
                      name="AIR_CONDITIONING"
                      id="AIR_CONDITIONING_NULL"
                      value=""
                      defaultChecked
                    />
                    <label htmlFor="AIR_CONDITIONING_NULL">Ignore</label>
                  </div>
                </div>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AIR_CONDITIONING_AND_OR"
                  id="AIR_CONDITIONING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="AIR_CONDITIONING_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AIR_CONDITIONING_AND_OR"
                  id="AIR_CONDITIONING_OR"
                  value="1"
                />{" "}
                <label htmlFor="AIR_CONDITIONING_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset>
                <legend>Type of Water Service</legend>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div>
                    <input
                      onChange={handleWaterChange}
                      type="radio"
                      name="WATER"
                      id="WATER_Commercial Water"
                      value="Commercial Water"
                    />
                    <label htmlFor="WATER_Commercial Water">
                      Commercial Water
                    </label>{" "}
                  </div>

                  <div>
                    |
                    <input
                      onChange={handleWaterChange}
                      type="radio"
                      name="WATER"
                      id="WATER_Private Water"
                      value="Private Water"
                    />
                    <label htmlFor="WATER_Private Water">Private Water</label> |
                  </div>
                  <div>
                    <input
                      onChange={handleWaterChange}
                      type="radio"
                      name="WATER"
                      id="WATER_Public Water"
                      value="Public Water"
                    />
                    <label htmlFor="WATER_Public Water">Public Water</label> |
                  </div>
                  <div>
                    <input
                      onChange={handleWaterChange}
                      type="radio"
                      name="WATER"
                      id="WATER_Well"
                      value="Well"
                    />
                    <label htmlFor="WATER_Well">Well</label> |
                  </div>
                  <div>
                    <input
                      onChange={handleWaterChange}
                      type="radio"
                      name="WATER"
                      id="WATER_NULL"
                      value=""
                      defaultChecked
                    />
                    <label htmlFor="WATER_NULL">Ignore</label>
                  </div>
                </div>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="WATER_AND_OR"
                  id="WATER_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="WATER_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="WATER_AND_OR"
                  id="WATER_OR"
                  value="1"
                />{" "}
                <label htmlFor="WATER_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset>
                <legend>Type of Sewer Service</legend>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div>
                    <input
                      onChange={handleSewerChange}
                      type="radio"
                      name="SEWER"
                      id="SEWER_Commercial Sewer"
                      value="Commercial Sewer"
                    />
                    <label htmlFor="SEWER_Commercial Sewer">
                      Commercial Sewer
                    </label>{" "}
                  </div>
                  <div>
                    |
                    <input
                      onChange={handleSewerChange}
                      type="radio"
                      name="SEWER"
                      id="SEWER_Private Sewer"
                      value="Private Sewer"
                    />
                    <label htmlFor="SEWER_Private Sewer">Private Sewer</label> |
                  </div>
                  <div>
                    <input
                      onChange={handleSewerChange}
                      type="radio"
                      name="SEWER"
                      id="SEWER_Public Sewer"
                      value="Public Sewer"
                    />
                    <label htmlFor="SEWER_Public Sewer">Public Sewer</label> |
                  </div>
                  <div>
                    <input
                      onChange={handleSewerChange}
                      type="radio"
                      name="SEWER"
                      id="SEWER_Septic"
                      value="Septic"
                    />
                    <label htmlFor="SEWER_Septic">Septic</label> |
                  </div>
                  <div>
                    <input
                      onChange={handleSewerChange}
                      type="radio"
                      name="SEWER"
                      id="SEWER_NULL"
                      value=""
                      defaultChecked
                    />
                    <label htmlFor="SEWER_NULL">Ignore</label>
                  </div>
                </div>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SEWER_AND_OR"
                  id="SEWER_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SEWER_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SEWER_AND_OR"
                  id="SEWER_OR"
                  value="1"
                />{" "}
                <label htmlFor="SEWER_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>

          <tr>
            <td>
              <fieldset>
                <legend>Generations in Household</legend>
                <input
                  onChange={handleGenerationChange}
                  type="radio"
                  name="GENERATIONS_IN_HH"
                  id="GENERATIONS_IN_HH_1"
                  value="1"
                />
                <label htmlFor="GENERATIONS_IN_HH_1">1</label> |
                <input
                  onChange={handleGenerationChange}
                  type="radio"
                  name="GENERATIONS_IN_HH"
                  id="GENERATIONS_IN_HH_2"
                  value="2"
                />
                <label htmlFor="GENERATIONS_IN_HH_2">2</label> |
                <input
                  onChange={handleGenerationChange}
                  type="radio"
                  name="GENERATIONS_IN_HH"
                  id="GENERATIONS_IN_HH_3"
                  value="3"
                />
                <label htmlFor="GENERATIONS_IN_HH_3">3</label> |
                <input
                  onChange={handleGenerationChange}
                  type="radio"
                  name="GENERATIONS_IN_HH"
                  id="GENERATIONS_IN_HH_4"
                  value="4"
                />
                <label htmlFor="GENERATIONS_IN_HH_4">4</label> |
                <input
                  onChange={handleGenerationChange}
                  type="radio"
                  name="GENERATIONS_IN_HH"
                  id="GENERATIONS_IN_HH_NULL"
                  value=""
                  defaultChecked
                />
                <label htmlFor="GENERATIONS_IN_HH_NULL">Ignore</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GENERATIONS_IN_HH_AND_OR"
                  id="GENERATIONS_IN_HH_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="GENERATIONS_IN_HH_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GENERATIONS_IN_HH_AND_OR"
                  id="GENERATIONS_IN_HH_OR"
                  value="1"
                />{" "}
                <label htmlFor="GENERATIONS_IN_HH_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset>
                <legend>No. of Adults in Household</legend>
                <input
                  onChange={handleAdultsChange}
                  type="radio"
                  name="NUMBER_OF_ADULTS"
                  id="NUMBER_OF_ADULTS_1"
                  value="1"
                />
                <label htmlFor="NUMBER_OF_ADULTS_1">1</label> |
                <input
                  onChange={handleAdultsChange}
                  type="radio"
                  name="NUMBER_OF_ADULTS"
                  id="NUMBER_OF_ADULTS_2"
                  value="2"
                />
                <label htmlFor="NUMBER_OF_ADULTS_2">2</label> |
                <input
                  onChange={handleAdultsChange}
                  type="radio"
                  name="NUMBER_OF_ADULTS"
                  id="NUMBER_OF_ADULTS_3"
                  value="3"
                />
                <label htmlFor="NUMBER_OF_ADULTS_3">3</label> |
                <input
                  onChange={handleAdultsChange}
                  type="radio"
                  name="NUMBER_OF_ADULTS"
                  id="NUMBER_OF_ADULTS_4"
                  value="4"
                />
                <label htmlFor="NUMBER_OF_ADULTS_4">4</label> |
                <input
                  onChange={handleAdultsChange}
                  type="radio"
                  name="NUMBER_OF_ADULTS"
                  id="NUMBER_OF_ADULTS_5"
                  value="5"
                />
                <label htmlFor="NUMBER_OF_ADULTS_5">5</label> |
                <input
                  onChange={handleAdultsChange}
                  type="radio"
                  name="NUMBER_OF_ADULTS"
                  id="NUMBER_OF_ADULTS_6"
                  value="6"
                />
                <label htmlFor="NUMBER_OF_ADULTS_6">6</label> |
                <input
                  onChange={handleAdultsChange}
                  type="radio"
                  name="NUMBER_OF_ADULTS"
                  id="NUMBER_OF_ADULTS_NULL"
                  value=""
                  defaultChecked
                />
                <label htmlFor="NUMBER_OF_ADULTS_NULL">Ignore</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="NUMBER_OF_ADULTS_AND_OR"
                  id="NUMBER_OF_ADULTS_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="NUMBER_OF_ADULTS_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="NUMBER_OF_ADULTS_AND_OR"
                  id="NUMBER_OF_ADULTS_OR"
                  value="1"
                />{" "}
                <label htmlFor="NUMBER_OF_ADULTS_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset>
                <legend>Gender Male or Female</legend>
                <input
                  onChange={handleGenderChange}
                  type="radio"
                  name="GENDER"
                  id="GENDER_F"
                  value="F"
                />
                <label htmlFor="GENDER_F">Female</label> |
                <input
                  onChange={handleGenderChange}
                  type="radio"
                  name="GENDER"
                  id="GENDER_M"
                  value="M"
                />
                <label htmlFor="GENDER_M">Male</label> |
                <input
                  onChange={handleGenderChange}
                  type="radio"
                  name="GENDER"
                  id="GENDER_NULL"
                  value=""
                  defaultChecked
                />
                <label htmlFor="GENDER_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GENDER_AND_OR"
                  id="GENDER_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="GENDER_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GENDER_AND_OR"
                  id="GENDER_OR"
                  value="1"
                />{" "}
                <label htmlFor="GENDER_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsSmoking_Tobacco">
                <legend>Tobacco Smoker</legend>
                <input
                  onChange={handleSomkkerChange}
                  type="radio"
                  name="Smoking_Tobacco"
                  id="Smoking_Tobacco_Y"
                  value="Y"
                />{" "}
                <label htmlFor="Smoking_Tobacco_Y">Yes</label> |{" "}
                <input
                  onChange={handleSomkkerChange}
                  type="radio"
                  name="Smoking_Tobacco"
                  id="Smoking_Tobacco_N"
                  value="N"
                />{" "}
                <label htmlFor="Smoking_Tobacco_N">No</label> |
                <input
                  onChange={handleSomkkerChange}
                  type="radio"
                  name="Smoking_Tobacco"
                  id="Smoking_Tobacco_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="Smoking_Tobacco_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="Smoking_Tobacco_AND_OR"
                  id="Smoking_Tobacco_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="Smoking_Tobacco_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="Smoking_Tobacco_AND_OR"
                  id="Smoking_Tobacco_OR"
                  value="1"
                />
                <label htmlFor="Smoking_Tobacco_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>

          <tr>
            <td colSpan="2" align="center">
              <hr />
              <h3>Bank and Credit Card Section</h3>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsDISCOVER_CARD">
                <legend>Discover Card User</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="DISCOVER_CARD"
                  id="DISCOVER_CARD_Y"
                  value="Y"
                />{" "}
                <label htmlFor="DISCOVER_CARD_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="DISCOVER_CARD"
                  id="DISCOVER_CARD_N"
                  value="N"
                />{" "}
                <label htmlFor="DISCOVER_CARD_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="DISCOVER_CARD"
                  id="DISCOVER_CARD_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="DISCOVER_CARD_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="DISCOVER_CARD_AND_OR"
                  id="DISCOVER_CARD_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="DISCOVER_CARD_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="DISCOVER_CARD_AND_OR"
                  id="DISCOVER_CARD_OR"
                  value="1"
                />
                <label htmlFor="DISCOVER_CARD_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsMASTERCARD">
                <legend>MASTERCARD User</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MASTERCARD"
                  id="MASTERCARD_Y"
                  value="Y"
                />{" "}
                <label htmlFor="MASTERCARD_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MASTERCARD"
                  id="MASTERCARD_N"
                  value="N"
                />{" "}
                <label htmlFor="MASTERCARD_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MASTERCARD"
                  id="MASTERCARD_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="MASTERCARD_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MASTERCARD_AND_OR"
                  id="MASTERCARD_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="MASTERCARD_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MASTERCARD_AND_OR"
                  id="MASTERCARD_OR"
                  value="1"
                />
                <label htmlFor="MASTERCARD_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsVISA">
                <legend>VISA Card User</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="VISA"
                  id="VISA_Y"
                  value="Y"
                />{" "}
                <label htmlFor="VISA_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="VISA"
                  id="VISA_N"
                  value="N"
                />{" "}
                <label htmlFor="VISA_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="VISA"
                  id="VISA_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="VISA_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="VISA_AND_OR"
                  id="VISA_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="VISA_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="VISA_AND_OR"
                  id="VISA_OR"
                  value="1"
                />
                <label htmlFor="VISA_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsAMERICAN_EXPRESS">
                <legend>American Express Card User</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AMERICAN_EXPRESS"
                  id="AMERICAN_EXPRESS_Y"
                  value="Y"
                />{" "}
                <label htmlFor="AMERICAN_EXPRESS_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AMERICAN_EXPRESS"
                  id="AMERICAN_EXPRESS_N"
                  value="N"
                />{" "}
                <label htmlFor="AMERICAN_EXPRESS_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AMERICAN_EXPRESS"
                  id="AMERICAN_EXPRESS_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="AMERICAN_EXPRESS_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AMERICAN_EXPRESS_AND_OR"
                  id="AMERICAN_EXPRESS_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="AMERICAN_EXPRESS_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AMERICAN_EXPRESS_AND_OR"
                  id="AMERICAN_EXPRESS_OR"
                  value="1"
                />
                <label htmlFor="AMERICAN_EXPRESS_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsGASOLINE_OR_RETAIL_CARD_REGULAR">
                <legend>Gas, Department, Retail Card Holder</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GASOLINE_OR_RETAIL_CARD_REGULAR"
                  id="GASOLINE_OR_RETAIL_CARD_REGULAR_Y"
                  value="Y"
                />{" "}
                <label htmlFor="GASOLINE_OR_RETAIL_CARD_REGULAR_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GASOLINE_OR_RETAIL_CARD_REGULAR"
                  id="GASOLINE_OR_RETAIL_CARD_REGULAR_N"
                  value="N"
                />{" "}
                <label htmlFor="GASOLINE_OR_RETAIL_CARD_REGULAR_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GASOLINE_OR_RETAIL_CARD_REGULAR"
                  id="GASOLINE_OR_RETAIL_CARD_REGULAR_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="GASOLINE_OR_RETAIL_CARD_REGULAR_NULL">
                  Either
                </label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GASOLINE_OR_RETAIL_CARD_REGULAR_AND_OR"
                  id="GASOLINE_OR_RETAIL_CARD_REGULAR_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="GASOLINE_OR_RETAIL_CARD_REGULAR_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GASOLINE_OR_RETAIL_CARD_REGULAR_AND_OR"
                  id="GASOLINE_OR_RETAIL_CARD_REGULAR_OR"
                  value="1"
                />
                <label htmlFor="GASOLINE_OR_RETAIL_CARD_REGULAR_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
            <td></td>
          </tr>

          <tr>
            <td colSpan="2" align="center">
              <hr />
              <h3>Interests &amp; Activities</h3>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsTENNIS">
                <legend>Tennis</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TENNIS"
                  id="TENNIS_Y"
                  value="Y"
                />{" "}
                <label htmlFor="TENNIS_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TENNIS"
                  id="TENNIS_N"
                  value="N"
                />{" "}
                <label htmlFor="TENNIS_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TENNIS"
                  id="TENNIS_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="TENNIS_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TENNIS_AND_OR"
                  id="TENNIS_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="TENNIS_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TENNIS_AND_OR"
                  id="TENNIS_OR"
                  value="1"
                />
                <label htmlFor="TENNIS_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsGOLF">
                <legend>Golf</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GOLF"
                  id="GOLF_Y"
                  value="Y"
                />{" "}
                <label htmlFor="GOLF_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GOLF"
                  id="GOLF_N"
                  value="N"
                />{" "}
                <label htmlFor="GOLF_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GOLF"
                  id="GOLF_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="GOLF_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GOLF_AND_OR"
                  id="GOLF_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="GOLF_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GOLF_AND_OR"
                  id="GOLF_OR"
                  value="1"
                />
                <label htmlFor="GOLF_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsSNOW_SKIING">
                <legend>Snow Skiing</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SNOW_SKIING"
                  id="SNOW_SKIING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="SNOW_SKIING_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SNOW_SKIING"
                  id="SNOW_SKIING_N"
                  value="N"
                />{" "}
                <label htmlFor="SNOW_SKIING_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SNOW_SKIING"
                  id="SNOW_SKIING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="SNOW_SKIING_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SNOW_SKIING_AND_OR"
                  id="SNOW_SKIING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SNOW_SKIING_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SNOW_SKIING_AND_OR"
                  id="SNOW_SKIING_OR"
                  value="1"
                />
                <label htmlFor="SNOW_SKIING_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsMOTORCYCLING">
                <legend>Motorcycling</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MOTORCYCLING"
                  id="MOTORCYCLING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="MOTORCYCLING_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MOTORCYCLING"
                  id="MOTORCYCLING_N"
                  value="N"
                />{" "}
                <label htmlFor="MOTORCYCLING_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MOTORCYCLING"
                  id="MOTORCYCLING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="MOTORCYCLING_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MOTORCYCLING_AND_OR"
                  id="MOTORCYCLING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="MOTORCYCLING_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MOTORCYCLING_AND_OR"
                  id="MOTORCYCLING_OR"
                  value="1"
                />
                <label htmlFor="MOTORCYCLING_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsNASCAR">
                <legend>NASCAR</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="NASCAR"
                  id="NASCAR_Y"
                  value="Y"
                />{" "}
                <label htmlFor="NASCAR_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="NASCAR"
                  id="NASCAR_N"
                  value="N"
                />{" "}
                <label htmlFor="NASCAR_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="NASCAR"
                  id="NASCAR_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="NASCAR_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="NASCAR_AND_OR"
                  id="NASCAR_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="NASCAR_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="NASCAR_AND_OR"
                  id="NASCAR_OR"
                  value="1"
                />
                <label htmlFor="NASCAR_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsBOATING_SAILING">
                <legend>Boating &amp; Sailing</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="BOATING_SAILING"
                  id="BOATING_SAILING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="BOATING_SAILING_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="BOATING_SAILING"
                  id="BOATING_SAILING_N"
                  value="N"
                />{" "}
                <label htmlFor="BOATING_SAILING_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="BOATING_SAILING"
                  id="BOATING_SAILING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="BOATING_SAILING_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="BOATING_SAILING_AND_OR"
                  id="BOATING_SAILING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="BOATING_SAILING_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="BOATING_SAILING_AND_OR"
                  id="BOATING_SAILING_OR"
                  value="1"
                />
                <label htmlFor="BOATING_SAILING_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsSCUBA_DIVING">
                <legend>SCUBA Diving</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SCUBA_DIVING"
                  id="SCUBA_DIVING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="SCUBA_DIVING_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SCUBA_DIVING"
                  id="SCUBA_DIVING_N"
                  value="N"
                />{" "}
                <label htmlFor="SCUBA_DIVING_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SCUBA_DIVING"
                  id="SCUBA_DIVING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="SCUBA_DIVING_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SCUBA_DIVING_AND_OR"
                  id="SCUBA_DIVING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SCUBA_DIVING_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SCUBA_DIVING_AND_OR"
                  id="SCUBA_DIVING_OR"
                  value="1"
                />
                <label htmlFor="SCUBA_DIVING_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsSPORTS_AND_LEISURE">
                <legend>Sports And Leisure</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPORTS_AND_LEISURE"
                  id="SPORTS_AND_LEISURE_Y"
                  value="Y"
                />{" "}
                <label htmlFor="SPORTS_AND_LEISURE_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPORTS_AND_LEISURE"
                  id="SPORTS_AND_LEISURE_N"
                  value="N"
                />{" "}
                <label htmlFor="SPORTS_AND_LEISURE_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPORTS_AND_LEISURE"
                  id="SPORTS_AND_LEISURE_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="SPORTS_AND_LEISURE_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPORTS_AND_LEISURE_AND_OR"
                  id="SPORTS_AND_LEISURE_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SPORTS_AND_LEISURE_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPORTS_AND_LEISURE_AND_OR"
                  id="SPORTS_AND_LEISURE_OR"
                  value="1"
                />
                <label htmlFor="SPORTS_AND_LEISURE_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsHUNTING">
                <legend>Hunting</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HUNTING"
                  id="HUNTING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="HUNTING_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HUNTING"
                  id="HUNTING_N"
                  value="N"
                />{" "}
                <label htmlFor="HUNTING_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HUNTING"
                  id="HUNTING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="HUNTING_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HUNTING_AND_OR"
                  id="HUNTING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="HUNTING_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HUNTING_AND_OR"
                  id="HUNTING_OR"
                  value="1"
                />
                <label htmlFor="HUNTING_OR">Any Match On This</label>
              </fieldset>
            </td>

            <td>
              <fieldset id="fsFISHING">
                <legend>Fishing</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="FISHING"
                  id="FISHING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="FISHING_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="FISHING"
                  id="FISHING_N"
                  value="N"
                />{" "}
                <label htmlFor="FISHING_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="FISHING"
                  id="FISHING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="FISHING_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="FISHING_AND_OR"
                  id="FISHING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="FISHING_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="FISHING_AND_OR"
                  id="FISHING_OR"
                  value="1"
                />
                <label htmlFor="FISHING_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsCAMPING_HIKING">
                <legend>Camping And Hiking</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CAMPING_HIKING"
                  id="CAMPING_HIKING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="CAMPING_HIKING_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CAMPING_HIKING"
                  id="CAMPING_HIKING_N"
                  value="N"
                />{" "}
                <label htmlFor="CAMPING_HIKING_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CAMPING_HIKING"
                  id="CAMPING_HIKING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="CAMPING_HIKING_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CAMPING_HIKING_AND_OR"
                  id="CAMPING_HIKING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="CAMPING_HIKING_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CAMPING_HIKING_AND_OR"
                  id="CAMPING_HIKING_OR"
                  value="1"
                />
                <label htmlFor="CAMPING_HIKING_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsHUNTING_SHOOTING">
                <legend>Hunting And Shooting</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HUNTING_SHOOTING"
                  id="HUNTING_SHOOTING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="HUNTING_SHOOTING_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HUNTING_SHOOTING"
                  id="HUNTING_SHOOTING_N"
                  value="N"
                />{" "}
                <label htmlFor="HUNTING_SHOOTING_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HUNTING_SHOOTING"
                  id="HUNTING_SHOOTING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="HUNTING_SHOOTING_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HUNTING_SHOOTING_AND_OR"
                  id="HUNTING_SHOOTING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="HUNTING_SHOOTING_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HUNTING_SHOOTING_AND_OR"
                  id="HUNTING_SHOOTING_OR"
                  value="1"
                />
                <label htmlFor="HUNTING_SHOOTING_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsEXERCISE_HEALTH_GROUPING">
                <legend>Exercise Enthusiasts</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="EXERCISE_HEALTH_GROUPING"
                  id="EXERCISE_HEALTH_GROUPING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="EXERCISE_HEALTH_GROUPING_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="EXERCISE_HEALTH_GROUPING"
                  id="EXERCISE_HEALTH_GROUPING_N"
                  value="N"
                />{" "}
                <label htmlFor="EXERCISE_HEALTH_GROUPING_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="EXERCISE_HEALTH_GROUPING"
                  id="EXERCISE_HEALTH_GROUPING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="EXERCISE_HEALTH_GROUPING_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="EXERCISE_HEALTH_GROUPING_AND_OR"
                  id="EXERCISE_HEALTH_GROUPING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="EXERCISE_HEALTH_GROUPING_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="EXERCISE_HEALTH_GROUPING_AND_OR"
                  id="EXERCISE_HEALTH_GROUPING_OR"
                  value="1"
                />
                <label htmlFor="EXERCISE_HEALTH_GROUPING_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsAVIATION">
                <legend>Flying</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AVIATION"
                  id="AVIATION_Y"
                  value="Y"
                />{" "}
                <label htmlFor="AVIATION_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AVIATION"
                  id="AVIATION_N"
                  value="N"
                />{" "}
                <label htmlFor="AVIATION_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AVIATION"
                  id="AVIATION_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="AVIATION_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AVIATION_AND_OR"
                  id="AVIATION_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="AVIATION_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="AVIATION_AND_OR"
                  id="AVIATION_OR"
                  value="1"
                />
                <label htmlFor="AVIATION_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <hr />
              <h3 id="travel">Travel</h3>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsTRAVEL">
                <legend>Travel</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL"
                  id="TRAVEL_Y"
                  value="Y"
                />{" "}
                <label htmlFor="TRAVEL_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL"
                  id="TRAVEL_N"
                  value="N"
                />{" "}
                <label htmlFor="TRAVEL_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL"
                  id="TRAVEL_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="TRAVEL_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_AND_OR"
                  id="TRAVEL_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="TRAVEL_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_AND_OR"
                  id="TRAVEL_OR"
                  value="1"
                />
                <label htmlFor="TRAVEL_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsTRAVEL_DOMESTIC">
                <legend>Travel: Domestic</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_DOMESTIC"
                  id="TRAVEL_DOMESTIC_Y"
                  value="Y"
                />{" "}
                <label htmlFor="TRAVEL_DOMESTIC_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_DOMESTIC"
                  id="TRAVEL_DOMESTIC_N"
                  value="N"
                />{" "}
                <label htmlFor="TRAVEL_DOMESTIC_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_DOMESTIC"
                  id="TRAVEL_DOMESTIC_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="TRAVEL_DOMESTIC_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_DOMESTIC_AND_OR"
                  id="TRAVEL_DOMESTIC_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="TRAVEL_DOMESTIC_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_DOMESTIC_AND_OR"
                  id="TRAVEL_DOMESTIC_OR"
                  value="1"
                />
                <label htmlFor="TRAVEL_DOMESTIC_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsTRAVEL_INTERNATIONAL">
                <legend>Travel: Foreign</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_INTERNATIONAL"
                  id="TRAVEL_INTERNATIONAL_Y"
                  value="Y"
                />{" "}
                <label htmlFor="TRAVEL_INTERNATIONAL_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_INTERNATIONAL"
                  id="TRAVEL_INTERNATIONAL_N"
                  value="N"
                />{" "}
                <label htmlFor="TRAVEL_INTERNATIONAL_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_INTERNATIONAL"
                  id="TRAVEL_INTERNATIONAL_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="TRAVEL_INTERNATIONAL_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_INTERNATIONAL_AND_OR"
                  id="TRAVEL_INTERNATIONAL_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="TRAVEL_INTERNATIONAL_AND">All Must Match</label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="TRAVEL_INTERNATIONAL_AND_OR"
                  id="TRAVEL_INTERNATIONAL_OR"
                  value="1"
                />
                <label htmlFor="TRAVEL_INTERNATIONAL_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsTRAVEL_CRUISE_VACATIONS">
                <legend>Travel: Cruise Vacations</legend>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="TRAVEL_CRUISE_VACATIONS"
                      id="TRAVEL_CRUISE_VACATIONS_Y"
                      value="Y"
                    />{" "}
                    <label htmlFor="TRAVEL_CRUISE_VACATIONS_Y">Yes</label> |{" "}
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="TRAVEL_CRUISE_VACATIONS"
                      id="TRAVEL_CRUISE_VACATIONS_N"
                      value="N"
                    />{" "}
                    <label htmlFor="TRAVEL_CRUISE_VACATIONS_N">No</label> |
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="TRAVEL_CRUISE_VACATIONS"
                      id="TRAVEL_CRUISE_VACATIONS_NULL"
                      value=""
                      defaultChecked
                    />{" "}
                    <label htmlFor="TRAVEL_CRUISE_VACATIONS_NULL">Either</label>
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="TRAVEL_CRUISE_VACATIONS_AND_OR"
                      id="TRAVEL_CRUISE_VACATIONS_AND"
                      value="0"
                      defaultChecked
                    />
                    <label htmlFor="TRAVEL_CRUISE_VACATIONS_AND">
                      All Must Match
                    </label>{" "}
                    |
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="TRAVEL_CRUISE_VACATIONS_AND_OR"
                      id="TRAVEL_CRUISE_VACATIONS_OR"
                      value="1"
                    />
                    <label htmlFor="TRAVEL_CRUISE_VACATIONS_OR">
                      Any Match On This
                    </label>
                  </div>
                </div>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <hr />
              <h3 id="Spectator_Sports">Spectator Sports</h3>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsSPECTATOR_SPORTS_TV_SPORTS">
                <legend>TV Sports</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_TV_SPORTS"
                  id="SPECTATOR_SPORTS_TV_SPORTS_Y"
                  value="Y"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_TV_SPORTS_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_TV_SPORTS"
                  id="SPECTATOR_SPORTS_TV_SPORTS_N"
                  value="N"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_TV_SPORTS_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_TV_SPORTS"
                  id="SPECTATOR_SPORTS_TV_SPORTS_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_TV_SPORTS_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_TV_SPORTS_AND_OR"
                  id="SPECTATOR_SPORTS_TV_SPORTS_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SPECTATOR_SPORTS_TV_SPORTS_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_TV_SPORTS_AND_OR"
                  id="SPECTATOR_SPORTS_TV_SPORTS_OR"
                  value="1"
                />
                <label htmlFor="SPECTATOR_SPORTS_TV_SPORTS_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsSPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING">
                <legend>Auto &amp; Motorcycle Racing</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING"
                  id="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_Y">
                  Yes
                </label>{" "}
                |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING"
                  id="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_N"
                  value="N"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_N">
                  No
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING"
                  id="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_NULL">
                  Either
                </label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_AND_OR"
                  id="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_AND_OR"
                  id="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_OR"
                  value="1"
                />
                <label htmlFor="SPECTATOR_SPORTS_AUTO_MOTORCYCLE_RACING_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsSPECTATOR_SPORTS_FOOTBALL">
                <legend>Football</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_FOOTBALL"
                  id="SPECTATOR_SPORTS_FOOTBALL_Y"
                  value="Y"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_FOOTBALL_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_FOOTBALL"
                  id="SPECTATOR_SPORTS_FOOTBALL_N"
                  value="N"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_FOOTBALL_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_FOOTBALL"
                  id="SPECTATOR_SPORTS_FOOTBALL_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_FOOTBALL_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_FOOTBALL_AND_OR"
                  id="SPECTATOR_SPORTS_FOOTBALL_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SPECTATOR_SPORTS_FOOTBALL_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_FOOTBALL_AND_OR"
                  id="SPECTATOR_SPORTS_FOOTBALL_OR"
                  value="1"
                />
                <label htmlFor="SPECTATOR_SPORTS_FOOTBALL_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsSPECTATOR_SPORTS_BASEBALL">
                <legend>Baseball</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_BASEBALL"
                  id="SPECTATOR_SPORTS_BASEBALL_Y"
                  value="Y"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_BASEBALL_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_BASEBALL"
                  id="SPECTATOR_SPORTS_BASEBALL_N"
                  value="N"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_BASEBALL_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_BASEBALL"
                  id="SPECTATOR_SPORTS_BASEBALL_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_BASEBALL_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_BASEBALL_AND_OR"
                  id="SPECTATOR_SPORTS_BASEBALL_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SPECTATOR_SPORTS_BASEBALL_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_BASEBALL_AND_OR"
                  id="SPECTATOR_SPORTS_BASEBALL_OR"
                  value="1"
                />
                <label htmlFor="SPECTATOR_SPORTS_BASEBALL_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsSPECTATOR_SPORTS_BASKETBALL">
                <legend>Basketball</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_BASKETBALL"
                  id="SPECTATOR_SPORTS_BASKETBALL_Y"
                  value="Y"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_BASKETBALL_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_BASKETBALL"
                  id="SPECTATOR_SPORTS_BASKETBALL_N"
                  value="N"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_BASKETBALL_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_BASKETBALL"
                  id="SPECTATOR_SPORTS_BASKETBALL_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_BASKETBALL_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_BASKETBALL_AND_OR"
                  id="SPECTATOR_SPORTS_BASKETBALL_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SPECTATOR_SPORTS_BASKETBALL_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_BASKETBALL_AND_OR"
                  id="SPECTATOR_SPORTS_BASKETBALL_OR"
                  value="1"
                />
                <label htmlFor="SPECTATOR_SPORTS_BASKETBALL_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsSPECTATOR_SPORTS_HOCKEY">
                <legend>Hockey</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_HOCKEY"
                  id="SPECTATOR_SPORTS_HOCKEY_Y"
                  value="Y"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_HOCKEY_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_HOCKEY"
                  id="SPECTATOR_SPORTS_HOCKEY_N"
                  value="N"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_HOCKEY_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_HOCKEY"
                  id="SPECTATOR_SPORTS_HOCKEY_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_HOCKEY_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_HOCKEY_AND_OR"
                  id="SPECTATOR_SPORTS_HOCKEY_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SPECTATOR_SPORTS_HOCKEY_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_HOCKEY_AND_OR"
                  id="SPECTATOR_SPORTS_HOCKEY_OR"
                  value="1"
                />
                <label htmlFor="SPECTATOR_SPORTS_HOCKEY_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsSPECTATOR_SPORTS_SOCCER">
                <legend>Soccer</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_SOCCER"
                  id="SPECTATOR_SPORTS_SOCCER_Y"
                  value="Y"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_SOCCER_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_SOCCER"
                  id="SPECTATOR_SPORTS_SOCCER_N"
                  value="N"
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_SOCCER_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_SOCCER"
                  id="SPECTATOR_SPORTS_SOCCER_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="SPECTATOR_SPORTS_SOCCER_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_SOCCER_AND_OR"
                  id="SPECTATOR_SPORTS_SOCCER_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SPECTATOR_SPORTS_SOCCER_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SPECTATOR_SPORTS_SOCCER_AND_OR"
                  id="SPECTATOR_SPORTS_SOCCER_OR"
                  value="1"
                />
                <label htmlFor="SPECTATOR_SPORTS_SOCCER_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsSWEEPSTAKES_CONTESTS">
                <legend>Sweepstakes Contests</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SWEEPSTAKES_CONTESTS"
                  id="SWEEPSTAKES_CONTESTS_Y"
                  value="Y"
                />{" "}
                <label htmlFor="SWEEPSTAKES_CONTESTS_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SWEEPSTAKES_CONTESTS"
                  id="SWEEPSTAKES_CONTESTS_N"
                  value="N"
                />{" "}
                <label htmlFor="SWEEPSTAKES_CONTESTS_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SWEEPSTAKES_CONTESTS"
                  id="SWEEPSTAKES_CONTESTS_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="SWEEPSTAKES_CONTESTS_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SWEEPSTAKES_CONTESTS_AND_OR"
                  id="SWEEPSTAKES_CONTESTS_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="SWEEPSTAKES_CONTESTS_AND">All Must Match</label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="SWEEPSTAKES_CONTESTS_AND_OR"
                  id="SWEEPSTAKES_CONTESTS_OR"
                  value="1"
                />
                <label htmlFor="SWEEPSTAKES_CONTESTS_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <hr />
              <h3>Collectors</h3>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsCOLLECTIBLES_GENERAL">
                <legend>Collectors</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_GENERAL"
                  id="COLLECTIBLES_GENERAL_Y"
                  value="Y"
                />{" "}
                <label htmlFor="COLLECTIBLES_GENERAL_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_GENERAL"
                  id="COLLECTIBLES_GENERAL_N"
                  value="N"
                />{" "}
                <label htmlFor="COLLECTIBLES_GENERAL_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_GENERAL"
                  id="COLLECTIBLES_GENERAL_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="COLLECTIBLES_GENERAL_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_GENERAL_AND_OR"
                  id="COLLECTIBLES_GENERAL_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="COLLECTIBLES_GENERAL_AND">All Must Match</label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_GENERAL_AND_OR"
                  id="COLLECTIBLES_GENERAL_OR"
                  value="1"
                />
                <label htmlFor="COLLECTIBLES_GENERAL_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsCOLLECTIBLES_STAMPS">
                <legend>Stamp Collectors</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_STAMPS"
                  id="COLLECTIBLES_STAMPS_Y"
                  value="Y"
                />{" "}
                <label htmlFor="COLLECTIBLES_STAMPS_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_STAMPS"
                  id="COLLECTIBLES_STAMPS_N"
                  value="N"
                />{" "}
                <label htmlFor="COLLECTIBLES_STAMPS_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_STAMPS"
                  id="COLLECTIBLES_STAMPS_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="COLLECTIBLES_STAMPS_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_STAMPS_AND_OR"
                  id="COLLECTIBLES_STAMPS_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="COLLECTIBLES_STAMPS_AND">All Must Match</label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_STAMPS_AND_OR"
                  id="COLLECTIBLES_STAMPS_OR"
                  value="1"
                />
                <label htmlFor="COLLECTIBLES_STAMPS_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsCOLLECTIBLES_COINS">
                <legend>Coin Collectors</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_COINS"
                  id="COLLECTIBLES_COINS_Y"
                  value="Y"
                />{" "}
                <label htmlFor="COLLECTIBLES_COINS_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_COINS"
                  id="COLLECTIBLES_COINS_N"
                  value="N"
                />{" "}
                <label htmlFor="COLLECTIBLES_COINS_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_COINS"
                  id="COLLECTIBLES_COINS_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="COLLECTIBLES_COINS_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_COINS_AND_OR"
                  id="COLLECTIBLES_COINS_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="COLLECTIBLES_COINS_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_COINS_AND_OR"
                  id="COLLECTIBLES_COINS_OR"
                  value="1"
                />
                <label htmlFor="COLLECTIBLES_COINS_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsCOLLECTIBLES_ARTS">
                <legend>Art Collectors</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_ARTS"
                  id="COLLECTIBLES_ARTS_Y"
                  value="Y"
                />{" "}
                <label htmlFor="COLLECTIBLES_ARTS_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_ARTS"
                  id="COLLECTIBLES_ARTS_N"
                  value="N"
                />{" "}
                <label htmlFor="COLLECTIBLES_ARTS_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_ARTS"
                  id="COLLECTIBLES_ARTS_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="COLLECTIBLES_ARTS_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_ARTS_AND_OR"
                  id="COLLECTIBLES_ARTS_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="COLLECTIBLES_ARTS_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_ARTS_AND_OR"
                  id="COLLECTIBLES_ARTS_OR"
                  value="1"
                />
                <label htmlFor="COLLECTIBLES_ARTS_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsCOLLECTIBLES_ANTIQUES">
                <legend>Antique Collectors</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_ANTIQUES"
                  id="COLLECTIBLES_ANTIQUES_Y"
                  value="Y"
                />{" "}
                <label htmlFor="COLLECTIBLES_ANTIQUES_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_ANTIQUES"
                  id="COLLECTIBLES_ANTIQUES_N"
                  value="N"
                />{" "}
                <label htmlFor="COLLECTIBLES_ANTIQUES_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_ANTIQUES"
                  id="COLLECTIBLES_ANTIQUES_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="COLLECTIBLES_ANTIQUES_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_ANTIQUES_AND_OR"
                  id="COLLECTIBLES_ANTIQUES_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="COLLECTIBLES_ANTIQUES_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_ANTIQUES_AND_OR"
                  id="COLLECTIBLES_ANTIQUES_OR"
                  value="1"
                />
                <label htmlFor="COLLECTIBLES_ANTIQUES_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsMILITARY_MEMORABILIA_WEAPONRY">
                <legend>Military Memorabilia Collectors</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MILITARY_MEMORABILIA_WEAPONRY"
                  id="MILITARY_MEMORABILIA_WEAPONRY_Y"
                  value="Y"
                />{" "}
                <label htmlFor="MILITARY_MEMORABILIA_WEAPONRY_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MILITARY_MEMORABILIA_WEAPONRY"
                  id="MILITARY_MEMORABILIA_WEAPONRY_N"
                  value="N"
                />{" "}
                <label htmlFor="MILITARY_MEMORABILIA_WEAPONRY_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MILITARY_MEMORABILIA_WEAPONRY"
                  id="MILITARY_MEMORABILIA_WEAPONRY_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="MILITARY_MEMORABILIA_WEAPONRY_NULL">
                  Either
                </label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MILITARY_MEMORABILIA_WEAPONRY_AND_OR"
                  id="MILITARY_MEMORABILIA_WEAPONRY_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="MILITARY_MEMORABILIA_WEAPONRY_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="MILITARY_MEMORABILIA_WEAPONRY_AND_OR"
                  id="MILITARY_MEMORABILIA_WEAPONRY_OR"
                  value="1"
                />
                <label htmlFor="MILITARY_MEMORABILIA_WEAPONRY_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsCOLLECTIBLES_SPORTS_MEMORABILIA">
                <legend>Sports Memorabilia Collectors</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_SPORTS_MEMORABILIA"
                  id="COLLECTIBLES_SPORTS_MEMORABILIA_Y"
                  value="Y"
                />{" "}
                <label htmlFor="COLLECTIBLES_SPORTS_MEMORABILIA_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_SPORTS_MEMORABILIA"
                  id="COLLECTIBLES_SPORTS_MEMORABILIA_N"
                  value="N"
                />{" "}
                <label htmlFor="COLLECTIBLES_SPORTS_MEMORABILIA_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_SPORTS_MEMORABILIA"
                  id="COLLECTIBLES_SPORTS_MEMORABILIA_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="COLLECTIBLES_SPORTS_MEMORABILIA_NULL">
                  Either
                </label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_SPORTS_MEMORABILIA_AND_OR"
                  id="COLLECTIBLES_SPORTS_MEMORABILIA_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="COLLECTIBLES_SPORTS_MEMORABILIA_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="COLLECTIBLES_SPORTS_MEMORABILIA_AND_OR"
                  id="COLLECTIBLES_SPORTS_MEMORABILIA_OR"
                  value="1"
                />
                <label htmlFor="COLLECTIBLES_SPORTS_MEMORABILIA_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsLIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES">
                <legend>Lifestyles Collectors</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES"
                  id="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_Y"
                  value="Y"
                />{" "}
                <label htmlFor="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_Y">
                  Yes
                </label>{" "}
                |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES"
                  id="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_N"
                  value="N"
                />{" "}
                <label htmlFor="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_N">
                  No
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES"
                  id="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_NULL">
                  Either
                </label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_AND_OR"
                  id="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_AND_OR"
                  id="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_OR"
                  value="1"
                />
                <label htmlFor="LIFESTYLES_INTERESTS_AND_PASSIONS_COLLECTIBLES_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
          </tr>

          <tr>
            <td colSpan="2" align="center">
              <hr />
              <h3>Home &amp; Garden</h3>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsHOME_AND_GARDEN">
                <legend>Home &amp; Garden</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_AND_GARDEN"
                  id="HOME_AND_GARDEN_Y"
                  value="Y"
                />{" "}
                <label htmlFor="HOME_AND_GARDEN_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_AND_GARDEN"
                  id="HOME_AND_GARDEN_N"
                  value="N"
                />{" "}
                <label htmlFor="HOME_AND_GARDEN_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_AND_GARDEN"
                  id="HOME_AND_GARDEN_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="HOME_AND_GARDEN_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_AND_GARDEN_AND_OR"
                  id="HOME_AND_GARDEN_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="HOME_AND_GARDEN_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_AND_GARDEN_AND_OR"
                  id="HOME_AND_GARDEN_OR"
                  value="1"
                />
                <label htmlFor="HOME_AND_GARDEN_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsHOUSE_PLANTS">
                <legend>House Plants</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOUSE_PLANTS"
                  id="HOUSE_PLANTS_Y"
                  value="Y"
                />{" "}
                <label htmlFor="HOUSE_PLANTS_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOUSE_PLANTS"
                  id="HOUSE_PLANTS_N"
                  value="N"
                />{" "}
                <label htmlFor="HOUSE_PLANTS_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOUSE_PLANTS"
                  id="HOUSE_PLANTS_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="HOUSE_PLANTS_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOUSE_PLANTS_AND_OR"
                  id="HOUSE_PLANTS_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="HOUSE_PLANTS_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOUSE_PLANTS_AND_OR"
                  id="HOUSE_PLANTS_OR"
                  value="1"
                />
                <label htmlFor="HOUSE_PLANTS_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsHOME_IMPROVEMENT_GROUPING">
                <legend>Home Improvement</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_IMPROVEMENT_GROUPING"
                  id="HOME_IMPROVEMENT_GROUPING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="HOME_IMPROVEMENT_GROUPING_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_IMPROVEMENT_GROUPING"
                  id="HOME_IMPROVEMENT_GROUPING_N"
                  value="N"
                />{" "}
                <label htmlFor="HOME_IMPROVEMENT_GROUPING_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_IMPROVEMENT_GROUPING"
                  id="HOME_IMPROVEMENT_GROUPING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="HOME_IMPROVEMENT_GROUPING_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_IMPROVEMENT_GROUPING_AND_OR"
                  id="HOME_IMPROVEMENT_GROUPING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="HOME_IMPROVEMENT_GROUPING_AND">
                  All Must Match
                </label>{" "}
                |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="HOME_IMPROVEMENT_GROUPING_AND_OR"
                  id="HOME_IMPROVEMENT_GROUPING_OR"
                  value="1"
                />
                <label htmlFor="HOME_IMPROVEMENT_GROUPING_OR">
                  Any Match On This
                </label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsGARDENING1">
                <legend>Gardening</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GARDENING1"
                  id="GARDENING1_Y"
                  value="Y"
                />{" "}
                <label htmlFor="GARDENING1_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GARDENING1"
                  id="GARDENING1_N"
                  value="N"
                />{" "}
                <label htmlFor="GARDENING1_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GARDENING1"
                  id="GARDENING1_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="GARDENING1_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GARDENING1_AND_OR"
                  id="GARDENING1_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="GARDENING1_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="GARDENING1_AND_OR"
                  id="GARDENING1_OR"
                  value="1"
                />
                <label htmlFor="GARDENING1_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td>
              <fieldset id="fsCRAFTS">
                <legend>Crafts</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CRAFTS"
                  id="CRAFTS_Y"
                  value="Y"
                />{" "}
                <label htmlFor="CRAFTS_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CRAFTS"
                  id="CRAFTS_N"
                  value="N"
                />{" "}
                <label htmlFor="CRAFTS_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CRAFTS"
                  id="CRAFTS_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="CRAFTS_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CRAFTS_AND_OR"
                  id="CRAFTS_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="CRAFTS_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="CRAFTS_AND_OR"
                  id="CRAFTS_OR"
                  value="1"
                />
                <label htmlFor="CRAFTS_OR">Any Match On This</label>
              </fieldset>
            </td>
            <td>
              <fieldset id="fsWOODWORKING">
                <legend>Woodworking</legend>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="WOODWORKING"
                  id="WOODWORKING_Y"
                  value="Y"
                />{" "}
                <label htmlFor="WOODWORKING_Y">Yes</label> |{" "}
                <input
                  onChange={handleChange}
                  type="radio"
                  name="WOODWORKING"
                  id="WOODWORKING_N"
                  value="N"
                />{" "}
                <label htmlFor="WOODWORKING_N">No</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="WOODWORKING"
                  id="WOODWORKING_NULL"
                  value=""
                  defaultChecked
                />{" "}
                <label htmlFor="WOODWORKING_NULL">Either</label>
                <hr />
                <input
                  onChange={handleChange}
                  type="radio"
                  name="WOODWORKING_AND_OR"
                  id="WOODWORKING_AND"
                  value="0"
                  defaultChecked
                />
                <label htmlFor="WOODWORKING_AND">All Must Match</label> |
                <input
                  onChange={handleChange}
                  type="radio"
                  name="WOODWORKING_AND_OR"
                  id="WOODWORKING_OR"
                  value="1"
                />
                <label htmlFor="WOODWORKING_OR">Any Match On This</label>
              </fieldset>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableForm;
