import React from "react";
import { useStateContext } from "../context/StateContext";

const CellCarriers = () => {
    const { setCellCarrier, cellCarrier } = useStateContext()
    const handleChange = (e) => {
        setCellCarrier({
            ...cellCarrier, [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <fieldset id="fsCarriers">
                <div style={{ display: "flex" }}>
                    <div>
                    <legend style={{ display: "inline" }}>Cellphone Carriers</legend>
                    </div>
                    <div>
                    <span style={{ fontSize: "11pt", fontWeight: "700", display: "inline" }}>
                        For Phone WITH OR WITHOUT a Carrier
                    </span>
                    </div>
                </div>
                <br />
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
               
                <br /> (Selecting WITH or WITHOUT Carrier Will Override the Selections
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
                            {" "}
                            <label htmlFor="Carrier_0">A.v. Lauttamus</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="A.v. Lauttamus"
                                name="Carriers[A.v. Lauttamus]"
                                id="Carrier_0"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_1">Aat Paging</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Aat Paging"
                                name="Carriers[Aat Paging]"
                                id="Carrier_1"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_2">Abc Paging</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Abc Paging"
                                name="Carriers[Abc Paging]"
                                id="Carrier_2"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_3">Acc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Acc"
                                name="Carriers[Acc]"
                                id="Carrier_3"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_4">Accessible Wireless, Llc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Accessible Wireless, Llc"
                                name="Carriers[Accessible Wireless, Llc]"
                                id="Carrier_4"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_5">Acs Wireless, Inc.</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Acs Wireless, Inc."
                                name="Carriers[Acs Wireless, Inc.]"
                                id="Carrier_5"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_6">Adbeep, Llc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Adbeep, Llc"
                                name="Carriers[Adbeep, Llc]"
                                id="Carrier_6"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_7">Advantage Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Advantage Cellular"
                                name="Carriers[Advantage Cellular]"
                                id="Carrier_7"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_8">Aerial Communications</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Aerial Communications"
                                name="Carriers[Aerial Communications]"
                                id="Carrier_8"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_9">Airadigm Communications I</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Airadigm Communications Inc"
                                name="Carriers[Airadigm Communications Inc]"
                                id="Carrier_9"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_10">Airtouch Communications, </label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Airtouch Communications, Inc."
                                name="Carriers[Airtouch Communications, Inc.]"
                                id="Carrier_10"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_11">Alexandra Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Alexandra Cellular"
                                name="Carriers[Alexandra Cellular]"
                                id="Carrier_11"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_12">All City Answering Sv</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="All City Answering Sv"
                                name="Carriers[All City Answering Sv]"
                                id="Carrier_12"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_13">Allpage</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Allpage"
                                name="Carriers[Allpage]"
                                id="Carrier_13"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_14">Alltel</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Alltel"
                                name="Carriers[Alltel]"
                                id="Carrier_14"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_15">American Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="American Cellular"
                                name="Carriers[American Cellular]"
                                id="Carrier_15"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_16">American Messaging</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="American Messaging"
                                name="Carriers[American Messaging]"
                                id="Carrier_16"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_17">Americell</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Americell"
                                name="Carriers[Americell]"
                                id="Carrier_17"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_18">Appalachian Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Appalachian Wireless"
                                name="Carriers[Appalachian Wireless]"
                                id="Carrier_18"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_19">Aquis</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Aquis"
                                name="Carriers[Aquis]"
                                id="Carrier_19"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_20">Arch Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Arch Wireless"
                                name="Carriers[Arch Wireless]"
                                id="Carrier_20"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_21">Asap Paging</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Asap Paging"
                                name="Carriers[Asap Paging]"
                                id="Carrier_21"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_22">ATT</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="ATT"
                                name="Carriers[ATT]"
                                id="Carrier_22"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_23">Awesome Paging</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Awesome Paging"
                                name="Carriers[Awesome Paging]"
                                id="Carrier_23"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_24">Bell Atlantic</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Bell Atlantic"
                                name="Carriers[Bell Atlantic]"
                                id="Carrier_24"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_25">Blue Licenses</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Blue Licenses"
                                name="Carriers[Blue Licenses]"
                                id="Carrier_25"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_26">Bluegrass Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Bluegrass Wireless"
                                name="Carriers[Bluegrass Wireless]"
                                id="Carrier_26"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_27">Brookings</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Brookings"
                                name="Carriers[Brookings]"
                                id="Carrier_27"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_28">Buffalo-lake Erie Wireles</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Buffalo-lake Erie Wireless"
                                name="Carriers[Buffalo-lake Erie Wireless]"
                                id="Carrier_28"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_29">Caprock Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Caprock Cellular"
                                name="Carriers[Caprock Cellular]"
                                id="Carrier_29"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_30">Cellcom</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cellcom"
                                name="Carriers[Cellcom]"
                                id="Carrier_30"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_31">Cellular 29 Plus</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cellular 29 Plus"
                                name="Carriers[Cellular 29 Plus]"
                                id="Carrier_31"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_32">Cellular Mobile Sys Of Mi</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cellular Mobile Sys Of Mi Rsa"
                                name="Carriers[Cellular Mobile Sys Of Mi Rsa]"
                                id="Carrier_32"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_33">Cellular Network</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cellular Network"
                                name="Carriers[Cellular Network]"
                                id="Carrier_33"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_34">Cellular One</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cellular One"
                                name="Carriers[Cellular One]"
                                id="Carrier_34"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_35">Cellular Properties</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cellular Properties"
                                name="Carriers[Cellular Properties]"
                                id="Carrier_35"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_36">Cellular South</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cellular South"
                                name="Carriers[Cellular South]"
                                id="Carrier_36"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_37">Centennial</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Centennial"
                                name="Carriers[Centennial]"
                                id="Carrier_37"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_38">Central Vermont</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Central Vermont"
                                name="Carriers[Central Vermont]"
                                id="Carrier_38"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_39">Centurytel Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Centurytel Wireless"
                                name="Carriers[Centurytel Wireless]"
                                id="Carrier_39"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_40">Chariton Valley</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Chariton Valley"
                                name="Carriers[Chariton Valley]"
                                id="Carrier_40"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_41">Choice Wireless Lc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Choice Wireless Lc"
                                name="Carriers[Choice Wireless Lc]"
                                id="Carrier_41"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_42">Cincinnati Bell</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cincinnati Bell"
                                name="Carriers[Cincinnati Bell]"
                                id="Carrier_42"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_43">Cingular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cingular"
                                name="Carriers[Cingular]"
                                id="Carrier_43"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_44">Citizens Mohave Cell</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Citizens Mohave Cell"
                                name="Carriers[Citizens Mohave Cell]"
                                id="Carrier_44"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_45">Cleveland Unlimited</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cleveland Unlimited"
                                name="Carriers[Cleveland Unlimited]"
                                id="Carrier_45"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_46">Commnet Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Commnet Wireless"
                                name="Carriers[Commnet Wireless]"
                                id="Carrier_46"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_47">Comscape</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Comscape"
                                name="Carriers[Comscape]"
                                id="Carrier_47"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_48">Corr Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Corr Wireless"
                                name="Carriers[Corr Wireless]"
                                id="Carrier_48"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_49">Cricket</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cricket"
                                name="Carriers[Cricket]"
                                id="Carrier_49"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_50">Ctc Telecom</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Ctc Telecom"
                                name="Carriers[Ctc Telecom]"
                                id="Carrier_50"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_51">Cumberland</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Cumberland"
                                name="Carriers[Cumberland]"
                                id="Carrier_51"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_52">Dba Trans Texas Pcs</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Dba Trans Texas Pcs"
                                name="Carriers[Dba Trans Texas Pcs]"
                                id="Carrier_52"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_53">Digicomm</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Digicomm"
                                name="Carriers[Digicomm]"
                                id="Carrier_53"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_54">Dobson</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Dobson"
                                name="Carriers[Dobson]"
                                id="Carrier_54"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_55">Douglas</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Douglas"
                                name="Carriers[Douglas]"
                                id="Carrier_55"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_56">Dutchess</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Dutchess"
                                name="Carriers[Dutchess]"
                                id="Carrier_56"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_57">Eagle</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Eagle"
                                name="Carriers[Eagle]"
                                id="Carrier_57"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_58">Eastern Sub-rsa Limited P</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Eastern Sub-rsa Limited Partnership"
                                name="Carriers[Eastern Sub-rsa Limited Partnership]"
                                id="Carrier_58"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_59">Edge Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Edge Wireless"
                                name="Carriers[Edge Wireless]"
                                id="Carrier_59"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_60">Eliska Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Eliska Wireless"
                                name="Carriers[Eliska Wireless]"
                                id="Carrier_60"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_61">Farmers Cellular Telephon</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Farmers Cellular Telephone"
                                name="Carriers[Farmers Cellular Telephone]"
                                id="Carrier_61"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_62">Farmers Mutual</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Farmers Mutual"
                                name="Carriers[Farmers Mutual]"
                                id="Carrier_62"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_63">Fiber Data</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Fiber Data"
                                name="Carriers[Fiber Data]"
                                id="Carrier_63"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_64">Fitch, F. Cary</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Fitch, F. Cary"
                                name="Carriers[Fitch, F. Cary]"
                                id="Carrier_64"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_65">Five Star Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Five  Star Wireless"
                                name="Carriers[Five  Star Wireless]"
                                id="Carrier_65"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_66">Fred Burg</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Fred Burg"
                                name="Carriers[Fred Burg]"
                                id="Carrier_66"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_67">General Communication</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="General Communication"
                                name="Carriers[General Communication]"
                                id="Carrier_67"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_68">Globalstar</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Globalstar"
                                name="Carriers[Globalstar]"
                                id="Carrier_68"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_69">Handy Page</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Handy Page"
                                name="Carriers[Handy Page]"
                                id="Carrier_69"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_70">Hargray Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Hargray Wireless"
                                name="Carriers[Hargray Wireless]"
                                id="Carrier_70"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_71">Illinois Valley Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Illinois Valley Cellular"
                                name="Carriers[Illinois Valley Cellular]"
                                id="Carrier_71"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_72">Indiana Paging Ntwk</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Indiana Paging Ntwk"
                                name="Carriers[Indiana Paging Ntwk]"
                                id="Carrier_72"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_73">Iowa Rsa 2 Limited Partne</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Iowa Rsa 2 Limited Partnership"
                                name="Carriers[Iowa Rsa 2 Limited Partnership]"
                                id="Carrier_73"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_74">Iowa Wireless Services, L</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Iowa Wireless Services, Lp"
                                name="Carriers[Iowa Wireless Services, Lp]"
                                id="Carrier_74"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_75">Kentucky Rsa 3 Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Kentucky Rsa 3 Cellular"
                                name="Carriers[Kentucky Rsa 3 Cellular]"
                                id="Carrier_75"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_76">Keystone Wireless, Inc.</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Keystone Wireless, Inc."
                                name="Carriers[Keystone Wireless, Inc.]"
                                id="Carrier_76"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_77">Lcw Wireless License, Llc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Lcw Wireless License, Llc"
                                name="Carriers[Lcw Wireless License, Llc]"
                                id="Carrier_77"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_78">Leaco Rural</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Leaco Rural"
                                name="Carriers[Leaco Rural]"
                                id="Carrier_78"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_79">Leap Wireless Intl</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Leap Wireless Intl"
                                name="Carriers[Leap Wireless Intl]"
                                id="Carrier_79"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_80">Lincoln Communications</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Lincoln Communications"
                                name="Carriers[Lincoln Communications]"
                                id="Carrier_80"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_81">Louisiana Unwired Llc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Louisiana Unwired Llc"
                                name="Carriers[Louisiana Unwired Llc]"
                                id="Carrier_81"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_82">Mbo Wireless, Inc.</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Mbo Wireless, Inc."
                                name="Carriers[Mbo Wireless, Inc.]"
                                id="Carrier_82"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_83">Metro Pcs, Inc.</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Metro Pcs, Inc."
                                name="Carriers[Metro Pcs, Inc.]"
                                id="Carrier_83"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_84">Metro Southwest Pcs, Llp</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Metro Southwest Pcs, Llp"
                                name="Carriers[Metro Southwest Pcs, Llp]"
                                id="Carrier_84"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_85">Metrocall</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Metrocall"
                                name="Carriers[Metrocall]"
                                id="Carrier_85"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_86">Metropcs Texas, Llc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Metropcs Texas, Llc"
                                name="Carriers[Metropcs Texas, Llc]"
                                id="Carrier_86"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_87">Metrotel</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Metrotel"
                                name="Carriers[Metrotel]"
                                id="Carrier_87"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_88">Midwest Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Midwest Wireless"
                                name="Carriers[Midwest Wireless]"
                                id="Carrier_88"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_89">Mtpcs, Llc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Mtpcs, Llc"
                                name="Carriers[Mtpcs, Llc]"
                                id="Carrier_89"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_90">Network Services Llc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Network Services Llc"
                                name="Carriers[Network Services Llc]"
                                id="Carrier_90"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_91">New Cingular Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="New Cingular Wireless"
                                name="Carriers[New Cingular Wireless]"
                                id="Carrier_91"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_92">Nex-tech Wireless, Llc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Nex-tech Wireless, Llc"
                                name="Carriers[Nex-tech Wireless, Llc]"
                                id="Carrier_92"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_93">Nextel</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Nextel"
                                name="Carriers[Nextel]"
                                id="Carrier_93"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_94">North Carolina Rsa</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="North Carolina Rsa"
                                name="Carriers[North Carolina Rsa]"
                                id="Carrier_94"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_95">Northstar</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Northstar"
                                name="Carriers[Northstar]"
                                id="Carrier_95"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_96">Northwest Missouri</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Northwest Missouri"
                                name="Carriers[Northwest Missouri]"
                                id="Carrier_96"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_97">Ntch</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Ntch"
                                name="Carriers[Ntch]"
                                id="Carrier_97"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_98">Ntch</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Ntch"
                                name="Carriers[Ntch]"
                                id="Carrier_98"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_99">Oklahoma City Smsa</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Oklahoma City Smsa"
                                name="Carriers[Oklahoma City Smsa]"
                                id="Carrier_99"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_100">Oklahoma Western</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Oklahoma Western"
                                name="Carriers[Oklahoma Western]"
                                id="Carrier_100"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_101">Omnipoint</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Omnipoint"
                                name="Carriers[Omnipoint]"
                                id="Carrier_101"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_102">Pacific Bell Mobile</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Pacific Bell Mobile"
                                name="Carriers[Pacific Bell Mobile]"
                                id="Carrier_102"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_103">Pacificom-alaska, Llc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Pacificom-alaska, Llc"
                                name="Carriers[Pacificom-alaska, Llc]"
                                id="Carrier_103"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_104">Pagedata</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Pagedata"
                                name="Carriers[Pagedata]"
                                id="Carrier_104"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_105">Pcs One</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Pcs One"
                                name="Carriers[Pcs One]"
                                id="Carrier_105"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_106">Plateau</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Plateau"
                                name="Carriers[Plateau]"
                                id="Carrier_106"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_107">Powertel</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Powertel"
                                name="Carriers[Powertel]"
                                id="Carrier_107"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_108">Premier Paging</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Premier Paging"
                                name="Carriers[Premier Paging]"
                                id="Carrier_108"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_109">Priority Paging</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Priority Paging"
                                name="Carriers[Priority Paging]"
                                id="Carrier_109"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_110">Rcc Holdings</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Rcc Holdings"
                                name="Carriers[Rcc Holdings]"
                                id="Carrier_110"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_111">Rcc Network</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Rcc Network"
                                name="Carriers[Rcc Network]"
                                id="Carrier_111"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_112">Royal Street</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Royal Street"
                                name="Carriers[Royal Street]"
                                id="Carrier_112"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_113">Salmon Pcs</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Salmon Pcs"
                                name="Carriers[Salmon Pcs]"
                                id="Carrier_113"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_114">Scarsdale</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Scarsdale"
                                name="Carriers[Scarsdale]"
                                id="Carrier_114"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_115">Schuylkill</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Schuylkill"
                                name="Carriers[Schuylkill]"
                                id="Carrier_115"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_116">Shelcomm</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Shelcomm"
                                name="Carriers[Shelcomm]"
                                id="Carrier_116"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_117">Slo Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Slo Cellular"
                                name="Carriers[Slo Cellular]"
                                id="Carrier_117"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_118">South #5 Rsa Limited Part</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="South #5 Rsa Limited Partnership"
                                name="Carriers[South #5 Rsa Limited Partnership]"
                                id="Carrier_118"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_119">South Canaan Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="South Canaan Cellular"
                                name="Carriers[South Canaan Cellular]"
                                id="Carrier_119"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_120">Southern Communications S</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Southern Communications Services"
                                name="Carriers[Southern Communications Services]"
                                id="Carrier_120"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_121">Southern Illinois</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Southern Illinois"
                                name="Carriers[Southern Illinois]"
                                id="Carrier_121"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_122">Southern Michigan</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Southern Michigan"
                                name="Carriers[Southern Michigan]"
                                id="Carrier_122"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_123">Sprint</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Sprint"
                                name="Carriers[Sprint]"
                                id="Carrier_123"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_124">Sprint Spectrum L.p.</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Sprint Spectrum L.p."
                                name="Carriers[Sprint Spectrum L.p.]"
                                id="Carrier_124"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_125">Star Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Star Cellular"
                                name="Carriers[Star Cellular]"
                                id="Carrier_125"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_126">Stpcs Joint Venture, Llc</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Stpcs Joint Venture, Llc"
                                name="Carriers[Stpcs Joint Venture, Llc]"
                                id="Carrier_126"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_127">T-mobile Usa</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="T-mobile Usa"
                                name="Carriers[T-mobile Usa]"
                                id="Carrier_127"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_128">T.k.o.</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="T.k.o."
                                name="Carriers[T.k.o.]"
                                id="Carrier_128"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_129">Tern Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Tern Wireless"
                                name="Carriers[Tern Wireless]"
                                id="Carrier_129"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_130">Texas Communications</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Texas Communications"
                                name="Carriers[Texas Communications]"
                                id="Carrier_130"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_131">Thumb Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Thumb Cellular"
                                name="Carriers[Thumb Cellular]"
                                id="Carrier_131"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_132">Tmp Corp.</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Tmp Corp."
                                name="Carriers[Tmp Corp.]"
                                id="Carrier_132"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_133">Tracy Corporation</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Tracy Corporation"
                                name="Carriers[Tracy Corporation]"
                                id="Carrier_133"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_134">Uintah Basin</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Uintah Basin"
                                name="Carriers[Uintah Basin]"
                                id="Carrier_134"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_135">Union Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Union Cellular"
                                name="Carriers[Union Cellular]"
                                id="Carrier_135"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_136">United States Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="United States Cellular"
                                name="Carriers[United States Cellular]"
                                id="Carrier_136"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_137">Upstate Paging</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Upstate Paging"
                                name="Carriers[Upstate Paging]"
                                id="Carrier_137"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_138">Verizon</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Verizon"
                                name="Carriers[Verizon]"
                                id="Carrier_138"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_139">Virginia Pcs Alliance</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Virginia Pcs Alliance"
                                name="Carriers[Virginia Pcs Alliance]"
                                id="Carrier_139"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_140">Voicestream Gsm</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Voicestream Gsm"
                                name="Carriers[Voicestream Gsm]"
                                id="Carrier_140"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_141">Washington Rsa</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Washington Rsa"
                                name="Carriers[Washington Rsa]"
                                id="Carrier_141"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_142">Wavesent</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Wavesent"
                                name="Carriers[Wavesent]"
                                id="Carrier_142"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_143">West Central Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="West Central Cellular"
                                name="Carriers[West Central Cellular]"
                                id="Carrier_143"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_144">West Coast Pcs</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="West Coast Pcs"
                                name="Carriers[West Coast Pcs]"
                                id="Carrier_144"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_145">Western Wireless</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Western Wireless"
                                name="Carriers[Western Wireless]"
                                id="Carrier_145"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_146">Westlink Communications</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Westlink Communications"
                                name="Carriers[Westlink Communications]"
                                id="Carrier_146"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_147">Windstream</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Windstream"
                                name="Carriers[Windstream]"
                                id="Carrier_147"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_148">Wireless Alliance</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Wireless Alliance"
                                name="Carriers[Wireless Alliance]"
                                id="Carrier_148"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_149">Wireless Communications V</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Wireless Communications Venture"
                                name="Carriers[Wireless Communications Venture]"
                                id="Carrier_149"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_150">Wisconsin Rsa</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Wisconsin Rsa"
                                name="Carriers[Wisconsin Rsa]"
                                id="Carrier_150"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_151">Xit Cellular</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Xit Cellular"
                                name="Carriers[Xit Cellular]"
                                id="Carrier_151"
                            />
                        </div>
                        <div>
                            {" "}
                            <label htmlFor="Carrier_152">Youghiogheny</label>&nbsp;
                            <input onChange={handleChange}
                                type="checkbox"
                                value="Youghiogheny"
                                name="Carriers[Youghiogheny]"
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
