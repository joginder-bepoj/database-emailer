import React from "react";
import { useStateContext } from "../context/StateContext";

const IntrestGroup = () => {
    const {setIntrestedGroup, intrestedGroup} = useStateContext()
    const handleCheckChange= (e) =>{
        setIntrestedGroup({
            ...intrestedGroup, [e.target.name]: e.target.checked
        })
    }
    return (
        <>
            <fieldset id="interests">
                <legend>Select Interest Groups, From 1 to All: (Optional)</legend>
                <h3>Interest Groups</h3>
                <div
                    className="stateLabel flex-row"
                    id="divInterest"
                    style={{ width: "100%" }}
                >
                    <div>
                        <label htmlFor="chkInterests_55">Airline Tickets</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Airline_Tickets"
                            id="chkInterests_55"
                            value="55"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_56">Apartment Seekers</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Apartment_Seekers"
                            id="chkInterests_56"
                            value="56"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_57">Astrology</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Astrology"
                            id="chkInterests_57"
                            value="57"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_58">Auto Insurance</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Auto_Insurance"
                            id="chkInterests_58"
                            value="58"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_59">Auto Loans</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Auto_Loans"
                            id="chkInterests_59"
                            value="59"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_60">Automobiles</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Automobiles"
                            id="chkInterests_60"
                            value="60"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_61">Business News</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Business_News"
                            id="chkInterests_61"
                            value="61"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_62">Business Opportunities</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Business_Opportunities"
                            id="chkInterests_62"
                            value="62"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_63">Cars Listing Services</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Cars_Listing_Services"
                            id="chkInterests_63"
                            value="63"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_10">Celebrity Gossip</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Celebrity_Gossip"
                            id="chkInterests_10"
                            value="10"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_11">Computers And Technology</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Computers_and_Technology"
                            id="chkInterests_11"
                            value="11"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_12">Coupons</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Coupons"
                            id="chkInterests_12"
                            value="12"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_13">Credit Card Seekers</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Credit_Card_Seekers"
                            id="chkInterests_13"
                            value="13"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_14">Debt Leads</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Debt_Leads"
                            id="chkInterests_14"
                            value="14"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_15">Ebay</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Ebay"
                            id="chkInterests_15"
                            value="15"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_16">Education</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Education"
                            id="chkInterests_16"
                            value="16"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_17">Employment</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Employment"
                            id="chkInterests_17"
                            value="17"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_18">Entertainment</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Entertainment"
                            id="chkInterests_18"
                            value="18"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_19">Entrepreneurs</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Entrepreneurs"
                            id="chkInterests_19"
                            value="19"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_20">Ethnic</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Ethnic"
                            id="chkInterests_20"
                            value="20"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_21">Event Seekers</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Event_Seekers"
                            id="chkInterests_21"
                            value="21"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_22">Fashion</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Fashion"
                            id="chkInterests_22"
                            value="22"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_23">Financial Services</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Financial_Services"
                            id="chkInterests_23"
                            value="23"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_24">Franchises</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Franchises"
                            id="chkInterests_24"
                            value="24"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_25">Freebies</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Freebies"
                            id="chkInterests_25"
                            value="25"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_26">Gamers</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Gamers"
                            id="chkInterests_26"
                            value="26"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_27">Golf</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Golf"
                            id="chkInterests_27"
                            value="27"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_28">Health</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Health"
                            id="chkInterests_28"
                            value="28"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_29">Hollywood</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Hollywood"
                            id="chkInterests_29"
                            value="29"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_30">Home</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Home"
                            id="chkInterests_30"
                            value="30"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_31">Horoscope Related</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Horoscope_Related"
                            id="chkInterests_31"
                            value="31"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_32">Insurance</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Insurance"
                            id="chkInterests_32"
                            value="32"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_33">Internet Based Earning</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Internet_Based_Earning"
                            id="chkInterests_33"
                            value="33"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_34">Investors</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Investors"
                            id="chkInterests_34"
                            value="34"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_35">Loans</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Loans"
                            id="chkInterests_35"
                            value="35"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_36">Lottery</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Lottery"
                            id="chkInterests_36"
                            value="36"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_37">Movies</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Movies"
                            id="chkInterests_37"
                            value="37"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_38">Nascar</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Nascar"
                            id="chkInterests_38"
                            value="38"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_39">Netscape</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Netscape"
                            id="chkInterests_39"
                            value="39"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_40">Networking-Business</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Networking_Business"
                            id="chkInterests_40"
                            value="40"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_41">Networking-Dating</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Networking_Dating"
                            id="chkInterests_41"
                            value="41"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_42">Networking-Social</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Networking_Social"
                            id="chkInterests_42"
                            value="42"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_43">Networking-Woman</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Networking_Woman"
                            id="chkInterests_43"
                            value="43"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_44">News</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_News"
                            id="chkInterests_44"
                            value="44"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_45">Parents</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Parents"
                            id="chkInterests_45"
                            value="45"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_46">Photography</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Photography"
                            id="chkInterests_46"
                            value="46"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_47">Real Estate</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Real_Estate"
                            id="chkInterests_47"
                            value="47"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_48">Shopping</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Shopping"
                            id="chkInterests_48"
                            value="48"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_49">Sports</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Sports"
                            id="chkInterests_49"
                            value="49"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_50">Stocks Investment</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Stocks_Investment"
                            id="chkInterests_50"
                            value="50"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_51">Travel</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Travel"
                            id="chkInterests_51"
                            value="51"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_52">Trend Setters</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Trend_Setters"
                            id="chkInterests_52"
                            value="52"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_53">Weather</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Weather"
                            id="chkInterests_53"
                            value="53"
                        />
                    </div>
                    <div>
                        <label htmlFor="chkInterests_54">Weight Loss</label>{" "}
                        <input onChange={handleCheckChange}
                            type="checkbox"
                            name="chkInterests_Weight_Loss"
                            id="chkInterests_54"
                            value="54"
                        />
                    </div>
                </div>
                <a
                    id="InterestIDs"
                    href="@"
                    style={{ fontSize: "12pt", fontWeight: "600", color: "#111" }}
                >
                    Click Here to Show Interest and ID relationships
                </a>{" "}
                or{" "}
                <a
                    href="Consumer_Interest_Lookup.csv"
                    target="_blank"
                    style={{ fontSize: "12pt", fontWeight: "600", color: "#111" }}
                >
                    Download the File
                </a>
                <div id="divInterestlookups" style={{ display: "none" }}>
                    <table width="100%" cellPadding="0" cellSpacing="0">
                        <tbody>
                        <tr>
                            <td style={{ fontSize: "12pt", fontWeight: "600" }}>ID</td>
                            <td style={{ fontSize: "12pt", fontWeight: "600" }}>Interest</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Celebrity Gossip</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Computers and Technology</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Coupons</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Credit Card Seekers</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Debt Leads</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Ebay</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Education</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Employment</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Entertainment</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Entrepreneurs</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Ethnic</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>Event Seekers</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>Fashion</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>Financial Services</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>Franchises</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>Freebies</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>Gamers</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>Golf</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>Health</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>Hollywood</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>Home</td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td>Horoscope Related</td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td>Insurance</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>Internet Based Earning</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Investors</td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td>Loans</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>Lottery</td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td>Movies</td>
                        </tr>
                        <tr>
                            <td>38</td>
                            <td>Nascar</td>
                        </tr>
                        <tr>
                            <td>39</td>
                            <td>Netscape</td>
                        </tr>
                        <tr>
                            <td>40</td>
                            <td>Networking-Business</td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td>Networking-Dating</td>
                        </tr>
                        <tr>
                            <td>42</td>
                            <td>Networking-Social</td>
                        </tr>
                        <tr>
                            <td>43</td>
                            <td>Networking-Woman</td>
                        </tr>
                        <tr>
                            <td>44</td>
                            <td>News</td>
                        </tr>
                        <tr>
                            <td>45</td>
                            <td>Parents</td>
                        </tr>
                        <tr>
                            <td>46</td>
                            <td>Photography</td>
                        </tr>
                        <tr>
                            <td>47</td>
                            <td>Real Estate</td>
                        </tr>
                        <tr>
                            <td>48</td>
                            <td>Shopping</td>
                        </tr>
                        <tr>
                            <td>49</td>
                            <td>Sports</td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>Stocks Investment</td>
                        </tr>
                        <tr>
                            <td>51</td>
                            <td>Travel</td>
                        </tr>
                        <tr>
                            <td>52</td>
                            <td>Trend Setters</td>
                        </tr>
                        <tr>
                            <td>53</td>
                            <td>Weather</td>
                        </tr>
                        <tr>
                            <td>54</td>
                            <td>Weight Loss</td>
                        </tr>
                        <tr>
                            <td>55</td>
                            <td>Airline Tickets</td>
                        </tr>
                        <tr>
                            <td>56</td>
                            <td>Apartment Seekers</td>
                        </tr>
                        <tr>
                            <td>57</td>
                            <td>Astrology</td>
                        </tr>
                        <tr>
                            <td>58</td>
                            <td>Auto Insurance</td>
                        </tr>
                        <tr>
                            <td>59</td>
                            <td>Auto Loans</td>
                        </tr>
                        <tr>
                            <td>60</td>
                            <td>Automobiles</td>
                        </tr>
                        <tr>
                            <td>61</td>
                            <td>Business News</td>
                        </tr>
                        <tr>
                            <td>62</td>
                            <td>Business Opportunities</td>
                        </tr>
                        <tr>
                            <td>63</td>
                            <td>Cars Listing Services</td>
                        </tr>
                        </tbody>
                    </table>
                    <a
                        href="@"
                        style={{ fontSize: "12pt", fontWeight: "600", color: "#111" }}
                    >
                        Hide Interest and ID relationships
                    </a>
                </div>
            </fieldset>
        </>
    );
};

export default IntrestGroup;
