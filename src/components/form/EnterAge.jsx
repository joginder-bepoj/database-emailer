import React from "react";
import { useStateContext } from "../context/StateContext";

const EnterAge = () => {
    const {setEnterAge, enterAge} = useStateContext()
    const handleChange = (e) =>{
        setEnterAge({
            ...enterAge, [e.target.name] : e.target.value
        })
    }
    
    return (
        <>
            <fieldset>
                <legend>Enter an Age or Age Range: (Optional)</legend>
                {/* <!--  			 <small>(NOTE:  By choosing an age parameter you substantially reduce the available record pool to pull data from because only 5% of the data has a date of birth. All records are of adults!!! In other words, if there are 200 million records in the database only 10 million have ages to query. Therefore by choosing an age,  you'll remove from the available pool 95% of the data that actually contains the ages you are looking for. Because the data and emailing is so inexpensive it does not make sense to use the age select unless your campaign requires a very narrow age range; if that is the case you can still select data from the 5% of the database that has age in the records and of course all the records selected from the much smaller pool will have age. .)</small><br />  --> */}
                <span className="redtextbold1">Caution:</span> By choosing an age parameter
                you substantially reduce the available record pool to pull data from
                because only 5% of the records have a date of birth. But all records are
                of adults!!! <br />
                In other words, if there are 200 million records in the database only 10
                million have ages to query.
                <br />
                <br />
                If you want an exact age, use only the left dropdown box.
                <br />
                If you want a range of ages, select the lower age in the left dropdown
                box &amp; the higher age in the right dropdown box.
                <table width="100%" style={{ fontSize: "15px" }} className="tdBlock">
                    <tbody>
                    <tr valign="top">
                        <td>
                            <select name="ageLower" id="ageLower" onChange={handleChange}>
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
                                <option value="100">AGE: 100</option>
                            </select>
                        </td>
                        <td>
                            <select name="ageUpper" id="ageUpper" onChange={handleChange}>
                                <option value="">-- Upper Age Limit --</option>
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
                                <option value="100">AGE: 100</option>
                            </select>
                            <br />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </>
    );
};

export default EnterAge;
