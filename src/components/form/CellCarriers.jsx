import React from "react";
import { useStateContext } from "../context/StateContext";

const CellCarriers = () => {
    const { setCellCarrier, setCarriers, carriers} = useStateContext()
    const handleChange = (e) => {
        setCellCarrier(e.target.value)
    }
    const handleCheckChange = (e) =>{
        const {checked, value} = e.target
        setCarriers(checked ? [...carriers, value] : carriers.filter(item => item !== value))
    }
    return (
        <>
            <fieldset id="fsCarriers">
                <div style={{ display: "flex" }}>
                    <div>
                    <legend style={{ display: "inline" }}>Cellphone Carriers</legend>
                    </div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <div>
                    <span style={{ fontSize: "11pt", fontWeight: "700", display: "inline" }}>
                        For Phone WITH OR WITHOUT a Carrier
                    </span>
                    </div>
                </div>
                <div className="cellOptions">
                    <div>
                    <label htmlFor="optAnyCarrierY" style={{textAlign:"center"}}>For Cell Phones WITH any Carrier:</label>
                &nbsp;
                <input onChange={handleChange}
                    type="radio"
                    name="optAnyCarrier"
                    id="optAnyCarrierY"
                    value="Y"
                />
                    </div> 
                 <div>|
                <label htmlFor="optAnyCarrierN">For Cell Phones WITHOUT A Carrier:</label>
                &nbsp;
                <input onChange={handleChange}
                    type="radio"
                    name="optAnyCarrier"
                    id="optAnyCarrierN"
                    value="N"
                />
                </div>
                <div>|
                <label htmlFor="optAnyCarrierNULL">Neither:</label>&nbsp;
                <input onChange={handleChange}
                    type="radio"
                    name="optAnyCarrier"
                    id="optAnyCarrierNULL"
                    value=""
                    defaultChecked
                />
                </div>
                </div>
                (Selecting WITH or WITHOUT Carrier Will Override the Selections
                Below)
                <br />
                <hr />
                <span style={{ fontSize: "11pt", fontWeight: "700" }}>
                    OR Select Phones BY Carriers
                </span>
                <br />
                <div>
                    <div
                        className="stateLabel flex-row"
                        id="cell_carriers"
                        style={{ width: "100%" }}
                    >
                        <div>
                            <label htmlFor="Carrier_0">A.v. Lauttamus</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="A.v. Lauttamus"
                                name="Carriers_Av_Lauttamus"
                                id="Carrier_0"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_1">Aat Paging</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Aat Paging"
                                name="Carriers_Aat_Paging"
                                id="Carrier_1"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_2">Abc Paging</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Abc Paging"
                                name="Carriers_Abc_Paging"
                                id="Carrier_2"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_3">Acc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Acc"
                                name="Carriers_Acc"
                                id="Carrier_3"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_4">Accessible Wireless, Llc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Accessible Wireless, Llc"
                                name="Carriers_Accessible_Wireless_Llc"
                                id="Carrier_4"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_5">Acs Wireless, Inc.</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Acs Wireless, Inc."
                                name="Carriers_Acs_Wireless_Inc"
                                id="Carrier_5"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_6">Adbeep, Llc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Adbeep, Llc"
                                name="Carriers_Adbeep_Llc"
                                id="Carrier_6"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_7">Advantage Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Advantage Cellular"
                                name="Carriers_Advantage_Cellular"
                                id="Carrier_7"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_8">Aerial Communications</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Aerial Communications"
                                name="Carriers_Aerial_Communications"
                                id="Carrier_8"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_9">Airadigm Communications I</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Airadigm Communications Inc"
                                name="Carriers_Airadigm_Communications_Inc"
                                id="Carrier_9"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_10">Airtouch Communications, </label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Airtouch Communications, Inc."
                                name="Carriers_Airtouch_Communications_Inc"
                                id="Carrier_10"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_11">Alexandra Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Alexandra Cellular"
                                name="Carriers_Alexandra_Cellular"
                                id="Carrier_11"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_12">All City Answering Sv</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="All City Answering Sv"
                                name="Carriers_All_City_Answering_Sv"
                                id="Carrier_12"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_13">Allpage</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Allpage"
                                name="Carriers_Allpage"
                                id="Carrier_13"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_14">Alltel</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Alltel"
                                name="Carriers_Alltel"
                                id="Carrier_14"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_15">American Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="American Cellular"
                                name="Carriers_American_Cellular"
                                id="Carrier_15"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_16">American Messaging</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="American Messaging"
                                name="Carriers_American_Messaging"
                                id="Carrier_16"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_17">Americell</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Americell"
                                name="Carriers_Americell"
                                id="Carrier_17"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_18">Appalachian Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Appalachian Wireless"
                                name="Carriers_Appalachian_Wireless"
                                id="Carrier_18"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_19">Aquis</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Aquis"
                                name="Carriers_Aquis"
                                id="Carrier_19"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_20">Arch Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Arch Wireless"
                                name="Carriers_Arch_Wireless"
                                id="Carrier_20"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_21">Asap Paging</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Asap Paging"
                                name="Carriers_Asap_Paging"
                                id="Carrier_21"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_22">ATT</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="ATT"
                                name="Carriers_ATT"
                                id="Carrier_22"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_23">Awesome Paging</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Awesome Paging"
                                name="Carriers_Awesome_Paging"
                                id="Carrier_23"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_24">Bell Atlantic</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Bell Atlantic"
                                name="Carriers_Bell_Atlantic"
                                id="Carrier_24"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_25">Blue Licenses</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Blue Licenses"
                                name="Carriers_Blue_Licenses"
                                id="Carrier_25"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_26">Bluegrass Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Bluegrass Wireless"
                                name="Carriers_Bluegrass_Wireless"
                                id="Carrier_26"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_27">Brookings</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Brookings"
                                name="Carriers_Brookings"
                                id="Carrier_27"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_28">Buffalo-lake Erie Wireles</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Buffalo-lake Erie Wireless"
                                name="Carriers_Buffalo_lake_Erie_Wireless"
                                id="Carrier_28"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_29">Caprock Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Caprock Cellular"
                                name="Carriers_Caprock_Cellular"
                                id="Carrier_29"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_30">Cellcom</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cellcom"
                                name="Carriers_Cellcom"
                                id="Carrier_30"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_31">Cellular 29 Plus</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cellular 29 Plus"
                                name="Carriers_Cellular_29_Plus"
                                id="Carrier_31"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_32">Cellular Mobile Sys Of Mi</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cellular Mobile Sys Of Mi Rsa"
                                name="Carriers_Cellular_Mobile_Sys_Of_Mi_Rsa"
                                id="Carrier_32"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_33">Cellular Network</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cellular Network"
                                name="Carriers_Cellular_Network"
                                id="Carrier_33"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_34">Cellular One</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cellular One"
                                name="Carriers_Cellular_One"
                                id="Carrier_34"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_35">Cellular Properties</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cellular Properties"
                                name="Carriers_Cellular_Properties"
                                id="Carrier_35"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_36">Cellular South</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cellular South"
                                name="Carriers_Cellular_South"
                                id="Carrier_36"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_37">Centennial</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Centennial"
                                name="Carriers_Centennial"
                                id="Carrier_37"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_38">Central Vermont</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Central Vermont"
                                name="Carriers_Central_Vermont"
                                id="Carrier_38"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_39">Centurytel Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Centurytel Wireless"
                                name="Carriers_Centurytel_Wireless"
                                id="Carrier_39"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_40">Chariton Valley</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Chariton Valley"
                                name="Carriers_Chariton_Valley"
                                id="Carrier_40"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_41">Choice Wireless Lc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Choice Wireless Lc"
                                name="Carriers_Choice_Wireless_Lc"
                                id="Carrier_41"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_42">Cincinnati Bell</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cincinnati Bell"
                                name="Carriers_Cincinnati_Bell"
                                id="Carrier_42"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_43">Cingular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cingular"
                                name="Carriers_Cingular"
                                id="Carrier_43"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_44">Citizens Mohave Cell</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Citizens Mohave Cell"
                                name="Carriers_Citizens_Mohave_Cell"
                                id="Carrier_44"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_45">Cleveland Unlimited</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cleveland Unlimited"
                                name="Carriers_Cleveland_Unlimited"
                                id="Carrier_45"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_46">Commnet Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Commnet Wireless"
                                name="Carriers_Commnet_Wireless"
                                id="Carrier_46"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_47">Comscape</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Comscape"
                                name="Carriers_Comscape"
                                id="Carrier_47"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_48">Corr Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Corr Wireless"
                                name="Carriers_Corr_Wireless"
                                id="Carrier_48"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_49">Cricket</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cricket"
                                name="Carriers_Cricket"
                                id="Carrier_49"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_50">Ctc Telecom</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Ctc Telecom"
                                name="Carriers_Ctc_Telecom"
                                id="Carrier_50"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_51">Cumberland</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Cumberland"
                                name="Carriers_Cumberland"
                                id="Carrier_51"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_52">Dba Trans Texas Pcs</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Dba Trans Texas Pcs"
                                name="Carriers_Dba_Trans_Texas_Pcs"
                                id="Carrier_52"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_53">Digicomm</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Digicomm"
                                name="Carriers_Digicomm"
                                id="Carrier_53"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_54">Dobson</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Dobson"
                                name="Carriers_Dobson"
                                id="Carrier_54"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_55">Douglas</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Douglas"
                                name="Carriers_Douglas"
                                id="Carrier_55"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_56">Dutchess</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Dutchess"
                                name="Carriers_Dutchess"
                                id="Carrier_56"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_57">Eagle</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Eagle"
                                name="Carriers_Eagle"
                                id="Carrier_57"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_58">Eastern Sub-rsa Limited P</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Eastern Sub-rsa Limited Partnership"
                                name="Carriers_Eastern_Sub_rsa_Limited_Partnership"
                                id="Carrier_58"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_59">Edge Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Edge Wireless"
                                name="Carriers_Edge_Wireless"
                                id="Carrier_59"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_60">Eliska Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Eliska Wireless"
                                name="Carriers_Eliska_Wireless"
                                id="Carrier_60"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_61">Farmers Cellular Telephon</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Farmers Cellular Telephone"
                                name="Carriers_Farmers_Cellular_Telephone"
                                id="Carrier_61"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_62">Farmers Mutual</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Farmers Mutual"
                                name="Carriers_Farmers_Mutual"
                                id="Carrier_62"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_63">Fiber Data</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Fiber Data"
                                name="Carriers_Fiber_Data"
                                id="Carrier_63"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_64">Fitch, F. Cary</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Fitch, F. Cary"
                                name="Carriers_Fitch_F_Cary"
                                id="Carrier_64"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_65">Five Star Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Five  Star Wireless"
                                name="Carriers_Five_Star_Wireless"
                                id="Carrier_65"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_66">Fred Burg</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Fred Burg"
                                name="Carriers_Fred_Burg"
                                id="Carrier_66"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_67">General Communication</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="General Communication"
                                name="Carriers_General_Communication"
                                id="Carrier_67"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_68">Globalstar</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Globalstar"
                                name="Carriers_Globalstar"
                                id="Carrier_68"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_69">Handy Page</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Handy Page"
                                name="Carriers_Handy_Page"
                                id="Carrier_69"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_70">Hargray Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Hargray Wireless"
                                name="Carriers_Hargray_Wireless"
                                id="Carrier_70"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_71">Illinois Valley Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Illinois Valley Cellular"
                                name="Carriers_Illinois_Valley_Cellular"
                                id="Carrier_71"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_72">Indiana Paging Ntwk</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Indiana Paging Ntwk"
                                name="Carriers_Indiana_Paging_Ntwk"
                                id="Carrier_72"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_73">Iowa Rsa 2 Limited Partne</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Iowa Rsa 2 Limited Partnership"
                                name="Carriers_Iowa_Rsa_2_Limited_Partnership"
                                id="Carrier_73"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_74">Iowa Wireless Services, L</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Iowa Wireless Services, Lp"
                                name="Carriers_Iowa_Wireless_Services_Lp"
                                id="Carrier_74"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_75">Kentucky Rsa 3 Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Kentucky Rsa 3 Cellular"
                                name="Carriers_Kentucky_Rsa_3_Cellular"
                                id="Carrier_75"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_76">Keystone Wireless, Inc.</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Keystone Wireless, Inc."
                                name="Carriers_Keystone_Wireless_Inc"
                                id="Carrier_76"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_77">Lcw Wireless License, Llc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Lcw Wireless License, Llc"
                                name="Carriers_Lcw_Wireless_License_Llc"
                                id="Carrier_77"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_78">Leaco Rural</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Leaco Rural"
                                name="Carriers_Leaco_Rural"
                                id="Carrier_78"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_79">Leap Wireless Intl</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Leap Wireless Intl"
                                name="Carriers_Leap_Wireless_Intl"
                                id="Carrier_79"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_80">Lincoln Communications</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Lincoln Communications"
                                name="Carriers_Lincoln_Communications"
                                id="Carrier_80"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_81">Louisiana Unwired Llc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Louisiana Unwired Llc"
                                name="Carriers_Louisiana_Unwired_Llc"
                                id="Carrier_81"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_82">Mbo Wireless, Inc.</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Mbo Wireless, Inc."
                                name="Carriers_Mbo_Wireless_Inc"
                                id="Carrier_82"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_83">Metro Pcs, Inc.</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Metro Pcs, Inc."
                                name="Carriers_Metro_Pcs_Inc"
                                id="Carrier_83"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_84">Metro Southwest Pcs, Llp</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Metro Southwest Pcs, Llp"
                                name="Carriers_Metro_Southwest_Pcs_Llp"
                                id="Carrier_84"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_85">Metrocall</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Metrocall"
                                name="Carriers_Metrocall"
                                id="Carrier_85"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_86">Metropcs Texas, Llc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Metropcs Texas, Llc"
                                name="Carriers_Metropcs_Texas_Llc"
                                id="Carrier_86"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_87">Metrotel</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Metrotel"
                                name="Carriers_Metrotel"
                                id="Carrier_87"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_88">Midwest Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Midwest Wireless"
                                name="Carriers_Midwest_Wireless"
                                id="Carrier_88"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_89">Mtpcs, Llc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Mtpcs, Llc"
                                name="Carriers_Mtpcs_Llc"
                                id="Carrier_89"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_90">Network Services Llc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Network Services Llc"
                                name="Carriers_Network_Services_Llc"
                                id="Carrier_90"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_91">New Cingular Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="New Cingular Wireless"
                                name="Carriers_New_Cingular_Wireless"
                                id="Carrier_91"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_92">Nex-tech Wireless, Llc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Nex-tech Wireless, Llc"
                                name="Carriers_Nex_tech_Wireless_Llc"
                                id="Carrier_92"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_93">Nextel</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Nextel"
                                name="Carriers_Nextel"
                                id="Carrier_93"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_94">North Carolina Rsa</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="North Carolina Rsa"
                                name="Carriers_North_Carolina_Rsa"
                                id="Carrier_94"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_95">Northstar</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Northstar"
                                name="Carriers_Northstar"
                                id="Carrier_95"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_96">Northwest Missouri</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Northwest Missouri"
                                name="Carriers_Northwest_Missouri"
                                id="Carrier_96"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_97">Ntch</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Ntch"
                                name="Carriers_Ntch"
                                id="Carrier_97"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_98">Ntch</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Ntch"
                                name="Carriers_Ntch"
                                id="Carrier_98"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_99">Oklahoma City Smsa</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Oklahoma City Smsa"
                                name="Carriers_Oklahoma_City_Smsa"
                                id="Carrier_99"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_100">Oklahoma Western</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Oklahoma Western"
                                name="Carriers_Oklahoma_Western"
                                id="Carrier_100"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_101">Omnipoint</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Omnipoint"
                                name="Carriers_Omnipoint"
                                id="Carrier_101"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_102">Pacific Bell Mobile</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Pacific Bell Mobile"
                                name="Carriers_Pacific_Bell_Mobile"
                                id="Carrier_102"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_103">Pacificom-alaska, Llc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Pacificom-alaska, Llc"
                                name="Carriers_Pacificom_alaska_Llc"
                                id="Carrier_103"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_104">Pagedata</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Pagedata"
                                name="Carriers_Pagedata"
                                id="Carrier_104"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_105">Pcs One</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Pcs One"
                                name="Carriers_Pcs_One"
                                id="Carrier_105"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_106">Plateau</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Plateau"
                                name="Carriers_Plateau"
                                id="Carrier_106"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_107">Powertel</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Powertel"
                                name="Carriers_Powertel"
                                id="Carrier_107"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_108">Premier Paging</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Premier Paging"
                                name="Carriers_Premier_Paging"
                                id="Carrier_108"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_109">Priority Paging</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Priority Paging"
                                name="Carriers_Priority_Paging"
                                id="Carrier_109"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_110">Rcc Holdings</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Rcc Holdings"
                                name="Carriers_Rcc_Holdings"
                                id="Carrier_110"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_111">Rcc Network</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Rcc Network"
                                name="Carriers_Rcc_Network"
                                id="Carrier_111"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_112">Royal Street</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Royal Street"
                                name="Carriers_Royal_Street"
                                id="Carrier_112"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_113">Salmon Pcs</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Salmon Pcs"
                                name="Carriers_Salmon_Pcs"
                                id="Carrier_113"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_114">Scarsdale</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Scarsdale"
                                name="Carriers_Scarsdale"
                                id="Carrier_114"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_115">Schuylkill</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Schuylkill"
                                name="Carriers_Schuylkill"
                                id="Carrier_115"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_116">Shelcomm</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Shelcomm"
                                name="Carriers_Shelcomm"
                                id="Carrier_116"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_117">Slo Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Slo Cellular"
                                name="Carriers_Slo_Cellular"
                                id="Carrier_117"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_118">South #5 Rsa Limited Part</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="South #5 Rsa Limited Partnership"
                                name="Carriers_South_5_Rsa_Limited_Partnership"
                                id="Carrier_118"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_119">South Canaan Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="South Canaan Cellular"
                                name="Carriers_South_Canaan_Cellular"
                                id="Carrier_119"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_120">Southern Communications S</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Southern Communications Services"
                                name="Carriers_Southern_Communications_Services"
                                id="Carrier_120"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_121">Southern Illinois</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Southern Illinois"
                                name="Carriers_Southern_Illinois"
                                id="Carrier_121"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_122">Southern Michigan</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Southern Michigan"
                                name="Carriers_Southern_Michigan"
                                id="Carrier_122"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_123">Sprint</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Sprint"
                                name="Carriers_Sprint"
                                id="Carrier_123"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_124">Sprint Spectrum L.p.</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Sprint Spectrum L.p."
                                name="Carriers_Sprint_Spectrum_Lp"
                                id="Carrier_124"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_125">Star Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Star Cellular"
                                name="Carriers_Star_Cellular"
                                id="Carrier_125"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_126">Stpcs Joint Venture, Llc</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Stpcs Joint Venture, Llc"
                                name="Carriers_Stpcs_Joint_Venture_Llc"
                                id="Carrier_126"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_127">T-mobile Usa</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="T-mobile"
                                name="Carriers_T_mobile_Usa"
                                id="Carrier_127"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_128">T.k.o.</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="T.k.o."
                                name="Carriers_Tko"
                                id="Carrier_128"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_129">Tern Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Tern Wireless"
                                name="Carriers_Tern_Wireless"
                                id="Carrier_129"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_130">Texas Communications</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Texas Communications"
                                name="Carriers_Texas_Communications"
                                id="Carrier_130"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_131">Thumb Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Thumb Cellular"
                                name="Carriers_Thumb_Cellular"
                                id="Carrier_131"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_132">Tmp Corp.</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Tmp Corp."
                                name="Carriers_Tmp_Corp"
                                id="Carrier_132"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_133">Tracy Corporation</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Tracy Corporation"
                                name="Carriers_Tracy_Corporation"
                                id="Carrier_133"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_134">Uintah Basin</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Uintah Basin"
                                name="Carriers_Uintah_Basin"
                                id="Carrier_134"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_135">Union Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Union Cellular"
                                name="Carriers_Union_Cellular"
                                id="Carrier_135"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_136">United States Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="United States Cellular"
                                name="Carriers_United_States_Cellular"
                                id="Carrier_136"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_137">Upstate Paging</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Upstate Paging"
                                name="Carriers_Upstate_Paging"
                                id="Carrier_137"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_138">Verizon</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Verizon"
                                name="Carriers_Verizon"
                                id="Carrier_138"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_139">Virginia Pcs Alliance</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Virginia Pcs Alliance"
                                name="Carriers_Virginia_Pcs_Alliance"
                                id="Carrier_139"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_140">Voicestream Gsm</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Voicestream Gsm"
                                name="Carriers_Voicestream_Gsm"
                                id="Carrier_140"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_141">Washington Rsa</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Washington Rsa"
                                name="Carriers_Washington_Rsa"
                                id="Carrier_141"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_142">Wavesent</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Wavesent"
                                name="Carriers_Wavesent"
                                id="Carrier_142"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_143">West Central Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="West Central Cellular"
                                name="Carriers_West_Central_Cellular"
                                id="Carrier_143"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_144">West Coast Pcs</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="West Coast Pcs"
                                name="Carriers_West_Coast_Pcs"
                                id="Carrier_144"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_145">Western Wireless</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Western Wireless"
                                name="Carriers_Western_Wireless"
                                id="Carrier_145"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_146">Westlink Communications</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Westlink Communications"
                                name="Carriers_Westlink_Communications"
                                id="Carrier_146"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_147">Windstream</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Windstream"
                                name="Carriers_Windstream"
                                id="Carrier_147"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_148">Wireless Alliance</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Wireless Alliance"
                                name="Carriers_Wireless_Alliance"
                                id="Carrier_148"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_149">Wireless Communications V</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Wireless Communications Venture"
                                name="Carriers_Wireless_Communications_Venture"
                                id="Carrier_149"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_150">Wisconsin Rsa</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Wisconsin Rsa"
                                name="Carriers_Wisconsin_Rsa"
                                id="Carrier_150"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_151">Xit Cellular</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Xit Cellular"
                                name="Carriers_Xit_Cellular"
                                id="Carrier_151"
                            />
                        </div>
                        <div>
                            <label htmlFor="Carrier_152">Youghiogheny</label>&nbsp;
                            <input onChange={handleCheckChange}
                                type="checkbox"
                                value="Youghiogheny"
                                name="Carriers_Youghiogheny"
                                id="Carrier_152"
                            />
                        </div>
                    </div>
                </div>
            </fieldset>
            <hr />
        </>
    );
};

export default CellCarriers;
