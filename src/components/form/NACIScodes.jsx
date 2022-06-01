import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";


const NACIScodes = () => {
  
    const {setNACIcode, NACIcodeChanges, setNACIcodeChanges} = useStateContext()
    const handleChange = (e) =>{
        let value = Array.from(e.target.selectedOptions, (option)=> option.value)
        setNACIcode(value)
    }
    const handleTextChange = (e) =>{
        setNACIcodeChanges({
            ...NACIcodeChanges, [e.target.name] : e.target.value
        })
    }
    const handleCheckChange = (e) => {
        setNACIcodeChanges({
            ...NACIcodeChanges, [e.target.name] : e.target.checked
        })
    }
    return (
        <>
            <fieldset>
                <legend>Search by NAICS Codes</legend>
                <div className="divImportant">
                    <h3>
                        Search by "North American Industry Classification System" (NAICS){" "}
                    </h3>
                    <b>
                        {" "}
                        Bypass this entire NAICS Codes / Business Industry Section if you
                        simply want to search business in ALL Industries.
                    </b>{" "}
                    <br />
                    <b>
                        It is recommended to search on either SIC or NAICS codes but not
                        both of them together. Matching SIC codes will be added
                        automatically to your NAICS Code search.
                    </b>
                    <p>
                        NAICS is the North American Industry Classification System; the
                        industry classification system that replaced the Standard Industrial
                        Classification (SIC) system. NAICS is the standard used by Federal
                        statistical agencies in classifying business establishments for the
                        purpose of collecting, analyzing, and publishing statistical data
                        related to the U.S. business economy.
                    </p>
                </div>
                <div align="center" style={{ backgroundColor: "#f2f2f2" }}>
                    <h3>
                        Five Ways to Search for Business by Industry using NAICS Codes
                    </h3>
                </div>
                <label
                    htmlFor="chkSICSfromNAICS"
                    style={{ fontSize: "12pt", fontWeight: "700" }}
                >
                    Check This If You want the Corresponding SICS Codes Included Too:
                </label>{" "}
                <input onChange={handleCheckChange}
                    type="checkbox"
                    name="chkSICSfromNAICS"
                    id="chkSICSfromNAICS"
                    value="1"
                />
                <hr />
                <fieldset>
                    <legend>NAICS Query Option l:</legend>
                    <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                        <tbody>
                        <tr>
                            <td align="left">
                                <div align="left">
                                    <hr />
                                    <b>
                                        {" "}
                                        Search through the Description of the Industry the Code is
                                        in.
                                        <br />
                                        Example: Insurance
                                        <br />
                                        This will find all NAICS Codes that have insurance in their
                                        description field,
                                    </b>
                                    <br />
                                    <br />
                                    <div align="left">
                                        <b>Search on NAICS Description: </b>&nbsp;
                                        <input onChange={handleTextChange}
                                            type="text"
                                            name="txtNAICSDescription"
                                            id="txtNAICSDescription"
                                            size="30"
                                        />
                                        <br />
                                        <br />
                                        <input 
                                            type="submit"
                                            name="subNAICSDescription"
                                            id="subNAICSDescription"
                                            value="Search for NAICS Based on Description"
                                            title="or alt-h"
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
                <hr />
                <fieldset>
                    <legend>NAICS Query Option ll:</legend>
                    <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                        <tbody>
                        <tr>
                            <td align="left">
                                <b>
                                    Click on the NAICS Codes/Business Industry you desire.
                                    <br /> (Hold the Control key down to select more than one
                                    NAICS Business Category)
                                </b>
                                <br />
                                <br />
                                <select
                                    name="selNAICScodes[]"
                                    id="selNAICScodes"
                                    style={{ width: "90%" }}
                                    size="15"
                                    multiple="multiple"
                                    onChange={handleChange}
                                >
                                    <option
                                        style={{
                                            color: "#FFF",
                                            backgroundColor: "blue",
                                            fontSize: "10pt",
                                        }}
                                        value=""
                                    >
                                        -- Select Some NAICS Codes Below. Hold the Control key down
                                        to select more than one --
                                    </option>

                                    <option value="111110">111110 Soybean Farmin</option>
                                    <option value="111120">
                                        111120 Oilseed (except Soybean) Farmi
                                    </option>
                                    <option value="111130">111130 Dry Pea and Bean Farmi</option>
                                    <option value="111140">111140 Wheat Farmi</option>
                                    <option value="111150">111150 Corn Farmi</option>
                                    <option value="111160">111160 Rice Farmi</option>
                                    <option value="111191">
                                        111191 Oilseed and Grain Combination Farmi
                                    </option>
                                    <option value="111199">111199 All Other Grain Farmi</option>
                                    <option value="111211">111211 Potato Farmi</option>
                                    <option value="111219">
                                        111219 Other Vegetable (except Potato) and Melon Farmi
                                    </option>
                                    <option value="111310">111310 Orange Grov</option>
                                    <option value="111320">
                                        111320 Citrus (except Orange) Grove
                                    </option>
                                    <option value="111331">111331 Apple Orchar</option>
                                    <option value="111332">111332 Grape Vineyar</option>
                                    <option value="111333">111333 Strawberry Farmi</option>
                                    <option value="111334">
                                        111334 Berry (except Strawberry) Farmi
                                    </option>
                                    <option value="111335">111335 Tree Nut Farmi</option>
                                    <option value="111336">
                                        111336 Fruit and Tree Nut Combination Farmi
                                    </option>
                                    <option value="111339">
                                        111339 Other Noncitrus Fruit Farmi
                                    </option>
                                    <option value="111411">111411 Mushroom Producti</option>
                                    <option value="111419">
                                        111419 Other Food Crops Grown Under Cov
                                    </option>
                                    <option value="111421">
                                        111421 Nursery and Tree Producti
                                    </option>
                                    <option value="111422">111422 Floriculture Producti</option>
                                    <option value="111910">111910 Tobacco Farmi</option>
                                    <option value="111920">111920 Cotton Farmi</option>
                                    <option value="111930">111930 Sugarcane Farmi</option>
                                    <option value="111940">111940 Hay Farmi</option>
                                    <option value="111991">111991 Sugar Beet Farmi</option>
                                    <option value="111992">111992 Peanut Farmi</option>
                                    <option value="111998">
                                        111998 All Other Miscellaneous Crop Farmi
                                    </option>
                                    <option value="112111">
                                        112111 Beef Cattle Ranching and Farmi
                                    </option>
                                    <option value="112112">112112 Cattle Feedlo</option>
                                    <option value="112120">
                                        112120 Dairy Cattle and Milk Producti
                                    </option>
                                    <option value="112130">
                                        112130 Dual Purpose Cattle Ranching and Farmi
                                    </option>
                                    <option value="112210">112210 Hog and Pig Farmi</option>
                                    <option value="112310">112310 Chicken Egg Producti</option>
                                    <option value="112320">
                                        112320 Broilers and Other Meat Type Chicken Producti
                                    </option>
                                    <option value="112330">112330 Turkey Producti</option>
                                    <option value="112340">112340 Poultry Hatcheri</option>
                                    <option value="112390">112390 Other Poultry Producti</option>
                                    <option value="112410">112410 Sheep Farmi</option>
                                    <option value="112420">112420 Goat Farmi</option>
                                    <option value="112511">
                                        112511 Finfish Farming and Fish Hatcheri
                                    </option>
                                    <option value="112512">112512 Shellfish Farmi</option>
                                    <option value="112519">112519 Other Animal Aquacultu</option>
                                    <option value="112910">112910 Apicultu</option>
                                    <option value="112920">
                                        112920 Horse and Other Equine Producti
                                    </option>
                                    <option value="112930">
                                        112930 Fur-Bearing Animal and Rabbit Producti
                                    </option>
                                    <option value="112990">
                                        112990 All Other Animal Producti
                                    </option>
                                    <option value="113110">113110 Timber Tract Operatio</option>
                                    <option value="113210">
                                        113210 Forest Nurseries and Gathering of Forest Produc
                                    </option>
                                    <option value="113310">113310 Loggi</option>
                                    <option value="114111">114111 Finfish Fishi</option>
                                    <option value="114112">114112 Shellfish Fishi</option>
                                    <option value="114119">114119 Other Marine Fishi</option>
                                    <option value="114210">114210 Hunting and Trappi</option>
                                    <option value="115111">115111 Cotton Ginni</option>
                                    <option value="115112">115112 Soil Preparati</option>
                                    <option value="115113">115113 Crop Harvesti</option>
                                    <option value="115114">
                                        115114 Postharvest Crop Activities (except Cotton Ginnin
                                    </option>
                                    <option value="115115">
                                        115115 Farm Labor Contractors and Crew Leade
                                    </option>
                                    <option value="115116">115116 Farm Management Servic</option>
                                    <option value="115210">
                                        115210 Support Activities for Animal Producti
                                    </option>
                                    <option value="115310">
                                        115310 Support Activities for Forest
                                    </option>
                                    <option value="211111">
                                        211111 Crude Petroleum and Natural Gas Extracti
                                    </option>
                                    <option value="211112">
                                        211112 Natural Gas Liquid Extracti
                                    </option>
                                    <option value="212111">
                                        212111 Bituminous Coal and Lignite Surface Mini
                                    </option>
                                    <option value="212112">
                                        212112 Bituminous Coal Underground Mini
                                    </option>
                                    <option value="212113">212113 Anthracite Mini</option>
                                    <option value="212210">212210 Iron Ore Mini</option>
                                    <option value="212221">212221 Gold Ore Mini</option>
                                    <option value="212222">212222 Silver Ore Mini</option>
                                    <option value="212231">
                                        212231 Lead Ore and Zinc Ore Mini
                                    </option>
                                    <option value="212234">
                                        212234 Copper Ore and Nickel Ore Mini
                                    </option>
                                    <option value="212291">
                                        212291 Uranium-Radium-Vanadium Ore Mini
                                    </option>
                                    <option value="212299">
                                        212299 All Other Metal Ore Mini
                                    </option>
                                    <option value="212311">
                                        212311 Dimension Stone Mining and Quarryi
                                    </option>
                                    <option value="212312">
                                        212312 Crushed and Broken Limestone Mining and Quarryi
                                    </option>
                                    <option value="212313">
                                        212313 Crushed and Broken Granite Mining and Quarryi
                                    </option>
                                    <option value="212319">
                                        212319 Other Crushed and Broken Stone Mining and Quarryi
                                    </option>
                                    <option value="212321">
                                        212321 Construction Sand and Gravel Mini
                                    </option>
                                    <option value="212322">212322 Industrial Sand Mini</option>
                                    <option value="212324">
                                        212324 Kaolin and Ball Clay Mini
                                    </option>
                                    <option value="212325">
                                        212325 Clay and Ceramic and Refractory Minerals Mini
                                    </option>
                                    <option value="212391">212391 Pota</option>
                                    <option value="212392">212392 Phosphate Rock Mini</option>
                                    <option value="212393">
                                        212393 Other Chemical and Fertilizer Mineral Mini
                                    </option>
                                    <option value="212399">
                                        212399 All Other Nonmetallic Mineral Mini
                                    </option>
                                    <option value="213111">
                                        213111 Drilling Oil and Gas Wel
                                    </option>
                                    <option value="213112">
                                        213112 Support Activities for Oil and Gas Operatio
                                    </option>
                                    <option value="213113">
                                        213113 Support Activities for Coal Mini
                                    </option>
                                    <option value="213114">
                                        213114 Support Activities for Metal Mini
                                    </option>
                                    <option value="213115">
                                        213115 Support Activities for Nonmetallic Minerals (except
                                        Fuel
                                    </option>
                                    <option value="221111">
                                        221111 Hydroelectric Power Generati
                                    </option>
                                    <option value="221112">
                                        221112 Fossil Fuel Electric Power Generati
                                    </option>
                                    <option value="221113">
                                        221113 Nuclear Electric Power Generati
                                    </option>
                                    <option value="221119">
                                        221119 Other Electric Power Generati
                                    </option>
                                    <option value="221121">
                                        221121 Electric Bulk Power Transmission and Contr
                                    </option>
                                    <option value="221122">
                                        221122 Electric Power Distributi
                                    </option>
                                    <option value="221210">221210 Natural Gas Distributi</option>
                                    <option value="221310">
                                        221310 Water Supply and Irrigation Syste
                                    </option>
                                    <option value="221320">
                                        221320 Sewage Treatment Faciliti
                                    </option>
                                    <option value="221330">
                                        221330 Steam and Air-Conditioning Supp
                                    </option>
                                    <option value="236115">
                                        236115 New Single-Family Housing Construction (except
                                        Operative Builder
                                    </option>
                                    <option value="236116">
                                        236116 New Multifamily Housing Construction (except
                                        Operative Builder
                                    </option>
                                    <option value="236117">
                                        236117 New Housing Operative Builde
                                    </option>
                                    <option value="236118">236118 Residential Remodele</option>
                                    <option value="236210">
                                        236210 Industrial Building Constructi
                                    </option>
                                    <option value="236220">
                                        236220 Commercial and Institutional Building Constructi
                                    </option>
                                    <option value="237110">
                                        237110 Water and Sewer Line and Related Structures
                                        Constructi
                                    </option>
                                    <option value="237120">
                                        237120 Oil and Gas Pipeline and Related Structures
                                        Constructi
                                    </option>
                                    <option value="237130">
                                        237130 Power and Communication Line and Related Structures
                                        Constructi
                                    </option>
                                    <option value="237210">237210 Land Subdivisi</option>
                                    <option value="237310">237310 Highw</option>
                                    <option value="237990">
                                        237990 Other Heavy and Civil Engineering Constructi
                                    </option>
                                    <option value="238110">
                                        238110 Poured Concrete Foundation and Structure Contracto
                                    </option>
                                    <option value="238120">
                                        238120 Structural Steel and Precast Concrete Contracto
                                    </option>
                                    <option value="238130">238130 Framing Contracto</option>
                                    <option value="238140">238140 Masonry Contracto</option>
                                    <option value="238150">
                                        238150 Glass and Glazing Contracto
                                    </option>
                                    <option value="238160">238160 Roofing Contracto</option>
                                    <option value="238170">238170 Siding Contracto</option>
                                    <option value="238190">238190 Other Foundati</option>
                                    <option value="238210">238210 Electrical Contracto</option>
                                    <option value="238220">238220 Plumbi</option>
                                    <option value="238290">
                                        238290 Other Building Equipment Contracto
                                    </option>
                                    <option value="238310">
                                        238310 Drywall and Insulation Contracto
                                    </option>
                                    <option value="238320">
                                        238320 Paint and Wall Covering Contracto
                                    </option>
                                    <option value="238330">238330 Flooring Contracto</option>
                                    <option value="238340">
                                        238340 Tile and Terrazzo Contracto
                                    </option>
                                    <option value="238350">
                                        238350 Finish Carpentry Contracto
                                    </option>
                                    <option value="238390">
                                        238390 Other Building Finishing Contracto
                                    </option>
                                    <option value="238910">
                                        238910 Site Preparation Contracto
                                    </option>
                                    <option value="238990">
                                        238990 All Other Specialty Trade Contracto
                                    </option>
                                    <option value="311111">
                                        311111 Dog and Cat Food Manufacturi
                                    </option>
                                    <option value="311119">
                                        311119 Other Animal Food Manufacturi
                                    </option>
                                    <option value="311211">311211 Flour Milli</option>
                                    <option value="311212">311212 Rice Milli</option>
                                    <option value="311213">311213 Malt Manufacturi</option>
                                    <option value="311221">311221 Wet Corn Milli</option>
                                    <option value="311222">311222 Soybean Processi</option>
                                    <option value="311223">311223 Other Oilseed Processi</option>
                                    <option value="311225">
                                        311225 Fats and Oils Refining and Blendi
                                    </option>
                                    <option value="311230">
                                        311230 Breakfast Cereal Manufacturi
                                    </option>
                                    <option value="311311">311311 Sugarcane Mil</option>
                                    <option value="311312">311312 Cane Sugar Refini</option>
                                    <option value="311313">311313 Beet Sugar Manufacturi</option>
                                    <option value="311320">
                                        311320 Chocolate and Confectionery Manufacturing from Cacao
                                        Bea
                                    </option>
                                    <option value="311330">
                                        311330 Confectionery Manufacturing from Purchased Chocolat
                                    </option>
                                    <option value="311340">
                                        311340 Nonchocolate Confectionery Manufacturi
                                    </option>
                                    <option value="311411">311411 Frozen Fru</option>
                                    <option value="311412">
                                        311412 Frozen Specialty Food Manufacturi
                                    </option>
                                    <option value="311421">
                                        311421 Fruit and Vegetable Canni
                                    </option>
                                    <option value="311422">311422 Specialty Canni</option>
                                    <option value="311423">
                                        311423 Dried and Dehydrated Food Manufacturi
                                    </option>
                                    <option value="311511">311511 Fluid Milk Manufacturi</option>
                                    <option value="311512">
                                        311512 Creamery Butter Manufacturi
                                    </option>
                                    <option value="311513">311513 Cheese Manufacturi</option>
                                    <option value="311514">311514 D</option>
                                    <option value="311520">
                                        311520 Ice Cream and Frozen Dessert Manufacturi
                                    </option>
                                    <option value="311611">
                                        311611 Animal (except Poultry) Slaughteri
                                    </option>
                                    <option value="311612">
                                        311612 Meat Processed from Carcasse
                                    </option>
                                    <option value="311613">
                                        311613 Rendering and Meat Byproduct Processi
                                    </option>
                                    <option value="311615">311615 Poultry Processi</option>
                                    <option value="311711">311711 Seafood Canni</option>
                                    <option value="311712">
                                        311712 Fresh and Frozen Seafood Processi
                                    </option>
                                    <option value="311811">311811 Retail Bakeri</option>
                                    <option value="311812">311812 Commercial Bakeri</option>
                                    <option value="311813">311813 Frozen Cak</option>
                                    <option value="311821">
                                        311821 Cookie and Cracker Manufacturi
                                    </option>
                                    <option value="311822">
                                        311822 Flour Mixes and Dough Manufacturing from Purchased
                                        Flo
                                    </option>
                                    <option value="311823">311823 Dry Pasta Manufacturin</option>
                                    <option value="311830">311830 Tortilla Manufacturin</option>
                                    <option value="311911">
                                        311911 Roasted Nuts and Peanut Butter Manufacturi
                                    </option>
                                    <option value="311919">
                                        311919 Other Snack Food Manufacturi
                                    </option>
                                    <option value="311920">
                                        311920 Coffee and Tea Manufacturi
                                    </option>
                                    <option value="311930">
                                        311930 Flavoring Syrup and Concentrate Manufacturi
                                    </option>
                                    <option value="311941">311941 Mayonnai</option>
                                    <option value="311942">
                                        311942 Spice and Extract Manufacturi
                                    </option>
                                    <option value="311991">
                                        311991 Perishable Prepared Food Manufacturi
                                    </option>
                                    <option value="311999">
                                        311999 All Other Miscellaneous Food Manufacturi
                                    </option>
                                    <option value="312111">312111 Soft Drink Manufacturi</option>
                                    <option value="312112">
                                        312112 Bottled Water Manufacturi
                                    </option>
                                    <option value="312113">312113 Ice Manufacturi</option>
                                    <option value="312120">312120 Breweri</option>
                                    <option value="312130">312130 Wineri</option>
                                    <option value="312140">312140 Distilleri</option>
                                    <option value="312210">
                                        312210 Tobacco Stemming and Redryi
                                    </option>
                                    <option value="312221">312221 Cigarette Manufacturi</option>
                                    <option value="312229">
                                        312229 Other Tobacco Product Manufacturi
                                    </option>
                                    <option value="313111">313111 Yarn Spinning Mil</option>
                                    <option value="313112">313112 Yarn Texturi</option>
                                    <option value="313113">313113 Thread Mil</option>
                                    <option value="313210">313210 Broadwoven Fabric Mil</option>
                                    <option value="313221">313221 Narrow Fabric Mil</option>
                                    <option value="313222">
                                        313222 Schiffli Machine Embroide
                                    </option>
                                    <option value="313230">313230 Nonwoven Fabric Mil</option>
                                    <option value="313241">313241 Weft Knit Fabric Mil</option>
                                    <option value="313249">
                                        313249 Other Knit Fabric and Lace Mil
                                    </option>
                                    <option value="313311">
                                        313311 Broadwoven Fabric Finishing Mil
                                    </option>
                                    <option value="313312">
                                        313312 Textile and Fabric Finishing (except Broadwoven
                                        Fabric) Mil
                                    </option>
                                    <option value="313320">313320 Fabric Coating Mil</option>
                                    <option value="314110">314110 Carpet and Rug Mil</option>
                                    <option value="314121">314121 Curtain and Drapery Mil</option>
                                    <option value="314129">
                                        314129 Other Household Textile Product Mil
                                    </option>
                                    <option value="314911">314911 Textile Bag Mil</option>
                                    <option value="314912">
                                        314912 Canvas and Related Product Mil
                                    </option>
                                    <option value="314991">314991 Ro</option>
                                    <option value="314992">
                                        314992 Tire Cord and Tire Fabric Mil
                                    </option>
                                    <option value="314999">
                                        314999 All Other Miscellaneous Textile Product Mil
                                    </option>
                                    <option value="315111">315111 Sheer Hosiery Mil</option>
                                    <option value="315119">
                                        315119 Other Hosiery and Sock Mil
                                    </option>
                                    <option value="315191">315191 Outerwear Knitting Mil</option>
                                    <option value="315192">
                                        315192 Underwear and Nightwear Knitting Mil
                                    </option>
                                    <option value="315211">
                                        315211 Men's and Boys' Cut and Sew Apparel Contracto
                                    </option>
                                    <option value="315212">315212 Women</option>
                                    <option value="315221">
                                        315221 Men's and Boys' Cut and Sew Underwear and Nightwear
                                        Manufacturi
                                    </option>
                                    <option value="315222">
                                        315222 Men's and Boys' Cut and Sew Su
                                    </option>
                                    <option value="315223">
                                        315223 Men's and Boys' Cut and Sew Shirt (except Work Shirt)
                                        Manufacturi
                                    </option>
                                    <option value="315224">
                                        315224 Men's and Boys' Cut and Sew Trous
                                    </option>
                                    <option value="315225">
                                        315225 Men's and Boys' Cut and Sew Work Clothing Manufacturi
                                    </option>
                                    <option value="315228">
                                        315228 Men's and Boys' Cut and Sew Other Outerwear
                                        Manufacturi
                                    </option>
                                    <option value="315231">
                                        315231 Women's and Girls' Cut and Sew Linger
                                    </option>
                                    <option value="315232">
                                        315232 Women's and Girls' Cut and Sew Blouse and Shirt
                                        Manufacturi
                                    </option>
                                    <option value="315233">
                                        315233 Women's and Girls' Cut and Sew Dress Manufacturi
                                    </option>
                                    <option value="315234">
                                        315234 Women's and Girls' Cut and Sew Su
                                    </option>
                                    <option value="315239">
                                        315239 Women's and Girls' Cut and Sew Other Outerwear
                                        Manufacturin
                                    </option>
                                    <option value="315291">
                                        315291 Infants' Cut and Sew Apparel Manufacturi
                                    </option>
                                    <option value="315292">
                                        315292 Fur and Leather Apparel Manufacturi
                                    </option>
                                    <option value="315299">
                                        315299 All Other Cut and Sew Apparel Manufacturi
                                    </option>
                                    <option value="315991">315991 H</option>
                                    <option value="315992">
                                        315992 Glove and Mitten Manufacturi
                                    </option>
                                    <option value="315993">
                                        315993 Men's and Boys' Neckwear Manufacturi
                                    </option>
                                    <option value="315999">
                                        315999 Other Apparel Accessories and Other Apparel
                                        Manufacturi
                                    </option>
                                    <option value="316110">
                                        316110 Leather and Hide Tanning and Finishi
                                    </option>
                                    <option value="316211">
                                        316211 Rubber and Plastics Footwear Manufacturi
                                    </option>
                                    <option value="316212">
                                        316212 House Slipper Manufacturi
                                    </option>
                                    <option value="316213">
                                        316213 Men's Footwear (except Athletic) Manufacturi
                                    </option>
                                    <option value="316214">
                                        316214 Women's Footwear (except Athletic) Manufacturin
                                    </option>
                                    <option value="316219">
                                        316219 Other Footwear Manufacturi
                                    </option>
                                    <option value="316991">316991 Luggage Manufacturi</option>
                                    <option value="316992">
                                        316992 Women's Handbag and Purse Manufacturi
                                    </option>
                                    <option value="316993">
                                        316993 Personal Leather Good (except Women's Handbag and
                                        Purse) Manufacturi
                                    </option>
                                    <option value="316999">
                                        316999 All Other Leather Good Manufacturi
                                    </option>
                                    <option value="321113">321113 Sawmil</option>
                                    <option value="321114">321114 Wood Preservati</option>
                                    <option value="321211">
                                        321211 Hardwood Veneer and Plywood Manufacturi
                                    </option>
                                    <option value="321212">
                                        321212 Softwood Veneer and Plywood Manufacturi
                                    </option>
                                    <option value="321213">
                                        321213 Engineered Wood Member (except Truss) Manufacturi
                                    </option>
                                    <option value="321214">321214 Truss Manufacturi</option>
                                    <option value="321219">
                                        321219 Reconstituted Wood Product Manufacturi
                                    </option>
                                    <option value="321911">
                                        321911 Wood Window and Door Manufacturi
                                    </option>
                                    <option value="321912">321912 Cut Sto</option>
                                    <option value="321918">
                                        321918 Other Millwork (including Flooring
                                    </option>
                                    <option value="321920">
                                        321920 Wood Container and Pallet Manufacturi
                                    </option>
                                    <option value="321991">
                                        321991 Manufactured Home (Mobile Home) Manufacturi
                                    </option>
                                    <option value="321992">
                                        321992 Prefabricated Wood Building Manufacturi
                                    </option>
                                    <option value="321999">
                                        321999 All Other Miscellaneous Wood Product Manufacturi
                                    </option>
                                    <option value="322110">322110 Pulp Mil</option>
                                    <option value="322121">
                                        322121 Paper (except Newsprint) Mil
                                    </option>
                                    <option value="322122">322122 Newsprint Mil</option>
                                    <option value="322130">322130 Paperboard Mil</option>
                                    <option value="322211">
                                        322211 Corrugated and Solid Fiber Box Manufacturi
                                    </option>
                                    <option value="322212">
                                        322212 Folding Paperboard Box Manufacturi
                                    </option>
                                    <option value="322213">
                                        322213 Setup Paperboard Box Manufacturi
                                    </option>
                                    <option value="322214">322214 Fiber C</option>
                                    <option value="322215">
                                        322215 Nonfolding Sanitary Food Container Manufacturi
                                    </option>
                                    <option value="322221">
                                        322221 Coated and Laminated Packaging Paper and Plastics
                                        Film Manufacturi
                                    </option>
                                    <option value="322222">
                                        322222 Coated and Laminated Paper Manufacturi
                                    </option>
                                    <option value="322223">322223 Plasti</option>
                                    <option value="322224">
                                        322224 Uncoated Paper and Multiwall Bag Manufacturi
                                    </option>
                                    <option value="322225">
                                        322225 Laminated Aluminum Foil Manufacturing for Flexible
                                        Packaging Us
                                    </option>
                                    <option value="322226">
                                        322226 Surface-Coated Paperboard Manufacturi
                                    </option>
                                    <option value="322231">
                                        322231 Die-Cut Paper and Paperboard Office Supplies
                                        Manufacturi
                                    </option>
                                    <option value="322232">322232 Envelope Manufacturi</option>
                                    <option value="322233">322233 Statione</option>
                                    <option value="322291">
                                        322291 Sanitary Paper Product Manufacturi
                                    </option>
                                    <option value="322299">
                                        322299 All Other Converted Paper Product Manufacturi
                                    </option>
                                    <option value="323110">
                                        323110 Commercial Lithographic Printi
                                    </option>
                                    <option value="323111">
                                        323111 Commercial Gravure Printi
                                    </option>
                                    <option value="323112">
                                        323112 Commercial Flexographic Printi
                                    </option>
                                    <option value="323113">
                                        323113 Commercial Screen Printi
                                    </option>
                                    <option value="323114">323114 Quick Printi</option>
                                    <option value="323115">323115 Digital Printi</option>
                                    <option value="323116">
                                        323116 Manifold Business Form Printi
                                    </option>
                                    <option value="323117">323117 Book Printi</option>
                                    <option value="323118">323118 Blankbo</option>
                                    <option value="323119">
                                        323119 Other Commercial Printin
                                    </option>
                                    <option value="323121">
                                        323121 Tradebinding and Related Wo
                                    </option>
                                    <option value="323122">323122 Prepress Servic</option>
                                    <option value="324110">324110 Petroleum Refineri</option>
                                    <option value="324121">
                                        324121 Asphalt Paving Mixture and Block Manufacturi
                                    </option>
                                    <option value="324122">
                                        324122 Asphalt Shingle and Coating Materials Manufacturi
                                    </option>
                                    <option value="324191">
                                        324191 Petroleum Lubricating Oil and Grease Manufacturi
                                    </option>
                                    <option value="324199">
                                        324199 All Other Petroleum and Coal Products Manufacturi
                                    </option>
                                    <option value="325110">
                                        325110 Petrochemical Manufacturi
                                    </option>
                                    <option value="325120">
                                        325120 Industrial Gas Manufacturi
                                    </option>
                                    <option value="325131">
                                        325131 Inorganic Dye and Pigment Manufacturi
                                    </option>
                                    <option value="325132">
                                        325132 Synthetic Organic Dye and Pigment Manufacturi
                                    </option>
                                    <option value="325181">
                                        325181 Alkalies and Chlorine Manufacturi
                                    </option>
                                    <option value="325182">
                                        325182 Carbon Black Manufacturi
                                    </option>
                                    <option value="325188">
                                        325188 All Other Basic Inorganic Chemical Manufacturi
                                    </option>
                                    <option value="325191">
                                        325191 Gum and Wood Chemical Manufacturi
                                    </option>
                                    <option value="325192">
                                        325192 Cyclic Crude and Intermediate Manufacturi
                                    </option>
                                    <option value="325193">
                                        325193 Ethyl Alcohol Manufacturi
                                    </option>
                                    <option value="325199">
                                        325199 All Other Basic Organic Chemical Manufacturi
                                    </option>
                                    <option value="325211">
                                        325211 Plastics Material and Resin Manufacturi
                                    </option>
                                    <option value="325212">
                                        325212 Synthetic Rubber Manufacturi
                                    </option>
                                    <option value="325221">
                                        325221 Cellulosic Organic Fiber Manufacturi
                                    </option>
                                    <option value="325222">
                                        325222 Noncellulosic Organic Fiber Manufacturi
                                    </option>
                                    <option value="325311">
                                        325311 Nitrogenous Fertilizer Manufacturi
                                    </option>
                                    <option value="325312">
                                        325312 Phosphatic Fertilizer Manufacturi
                                    </option>
                                    <option value="325314">
                                        325314 Fertilizer (Mixing Only) Manufacturi
                                    </option>
                                    <option value="325320">
                                        325320 Pesticide and Other Agricultural Chemical Manufacturi
                                    </option>
                                    <option value="325411">
                                        325411 Medicinal and Botanical Manufacturi
                                    </option>
                                    <option value="325412">
                                        325412 Pharmaceutical Preparation Manufacturi
                                    </option>
                                    <option value="325413">
                                        325413 In-Vitro Diagnostic Substance Manufacturi
                                    </option>
                                    <option value="325414">
                                        325414 Biological Product (except Diagnostic) Manufacturi
                                    </option>
                                    <option value="325510">
                                        325510 Paint and Coating Manufacturi
                                    </option>
                                    <option value="325520">325520 Adhesive Manufacturi</option>
                                    <option value="325611">
                                        325611 Soap and Other Detergent Manufacturi
                                    </option>
                                    <option value="325612">
                                        325612 Polish and Other Sanitation Good Manufacturi
                                    </option>
                                    <option value="325613">
                                        325613 Surface Active Agent Manufacturi
                                    </option>
                                    <option value="325620">
                                        325620 Toilet Preparation Manufacturi
                                    </option>
                                    <option value="325910">
                                        325910 Printing Ink Manufacturi
                                    </option>
                                    <option value="325920">325920 Explosives Manufacturi</option>
                                    <option value="325991">
                                        325991 Custom Compounding of Purchased Resin
                                    </option>
                                    <option value="325992">325992 Photographic Fi</option>
                                    <option value="325998">
                                        325998 All Other Miscellaneous Chemical Product and
                                        Preparation Manufacturi
                                    </option>
                                    <option value="326111">
                                        326111 Plastics Bag Manufacturi
                                    </option>
                                    <option value="326112">
                                        326112 Plastics Packaging Film and Sheet (including
                                        Laminated) Manufacturi
                                    </option>
                                    <option value="326113">
                                        326113 Unlaminated Plastics Film and Sheet (except
                                        Packaging) Manufacturi
                                    </option>
                                    <option value="326121">
                                        326121 Unlaminated Plastics Profile Shape Manufacturi
                                    </option>
                                    <option value="326122">
                                        326122 Plastics Pipe and Pipe Fitting Manufacturi
                                    </option>
                                    <option value="326130">326130 Laminated Plastics Pla</option>
                                    <option value="326140">
                                        326140 Polystyrene Foam Product Manufacturi
                                    </option>
                                    <option value="326150">
                                        326150 Urethane and Other Foam Product (except Polystyrene)
                                        Manufacturi
                                    </option>
                                    <option value="326160">
                                        326160 Plastics Bottle Manufacturi
                                    </option>
                                    <option value="326191">
                                        326191 Plastics Plumbing Fixture Manufacturi
                                    </option>
                                    <option value="326192">
                                        326192 Resilient Floor Covering Manufacturi
                                    </option>
                                    <option value="326199">
                                        326199 All Other Plastics Product Manufacturi
                                    </option>
                                    <option value="326211">
                                        326211 Tire Manufacturing (except Retreadin
                                    </option>
                                    <option value="326212">326212 Tire Retreadi</option>
                                    <option value="326220">
                                        326220 Rubber and Plastics Hoses and Belting Manufacturi
                                    </option>
                                    <option value="326291">
                                        326291 Rubber Product Manufacturing for Mechanical U
                                    </option>
                                    <option value="326299">
                                        326299 All Other Rubber Product Manufacturi
                                    </option>
                                    <option value="327111">
                                        327111 Vitreous China Plumbing Fixture and China and
                                        Earthenware Bathroom Accessories Manufacturi
                                    </option>
                                    <option value="327112">327112 Vitreous Chi</option>
                                    <option value="327113">
                                        327113 Porcelain Electrical Supply Manufacturi
                                    </option>
                                    <option value="327121">
                                        327121 Brick and Structural Clay Tile Manufacturi
                                    </option>
                                    <option value="327122">
                                        327122 Ceramic Wall and Floor Tile Manufacturi
                                    </option>
                                    <option value="327123">
                                        327123 Other Structural Clay Product Manufacturi
                                    </option>
                                    <option value="327124">
                                        327124 Clay Refractory Manufacturi
                                    </option>
                                    <option value="327125">
                                        327125 Nonclay Refractory Manufacturi
                                    </option>
                                    <option value="327211">327211 Flat Glass Manufacturi</option>
                                    <option value="327212">
                                        327212 Other Pressed and Blown Glass and Glassware
                                        Manufacturi
                                    </option>
                                    <option value="327213">
                                        327213 Glass Container Manufacturi
                                    </option>
                                    <option value="327215">
                                        327215 Glass Product Manufacturing Made of Purchased Gla
                                    </option>
                                    <option value="327310">327310 Cement Manufacturi</option>
                                    <option value="327320">
                                        327320 Ready-Mix Concrete Manufacturi
                                    </option>
                                    <option value="327331">
                                        327331 Concrete Block and Brick Manufacturi
                                    </option>
                                    <option value="327332">
                                        327332 Concrete Pipe Manufacturi
                                    </option>
                                    <option value="327390">
                                        327390 Other Concrete Product Manufacturi
                                    </option>
                                    <option value="327410">327410 Lime Manufacturi</option>
                                    <option value="327420">
                                        327420 Gypsum Product Manufacturi
                                    </option>
                                    <option value="327910">
                                        327910 Abrasive Product Manufacturi
                                    </option>
                                    <option value="327991">
                                        327991 Cut Stone and Stone Product Manufacturi
                                    </option>
                                    <option value="327992">
                                        327992 Ground or Treated Mineral and Earth Manufacturi
                                    </option>
                                    <option value="327993">
                                        327993 Mineral Wool Manufacturi
                                    </option>
                                    <option value="327999">
                                        327999 All Other Miscellaneous Nonmetallic Mineral Product
                                        Manufacturi
                                    </option>
                                    <option value="331111">331111 Iron and Steel Mil</option>
                                    <option value="331112">
                                        331112 Electrometallurgical Ferroalloy Product Manufacturi
                                    </option>
                                    <option value="331210">
                                        331210 Iron and Steel Pipe and Tube Manufacturing from
                                        Purchased Ste
                                    </option>
                                    <option value="331221">
                                        331221 Rolled Steel Shape Manufacturi
                                    </option>
                                    <option value="331222">331222 Steel Wire Drawi</option>
                                    <option value="331311">331311 Alumina Refini</option>
                                    <option value="331312">
                                        331312 Primary Aluminum Producti
                                    </option>
                                    <option value="331314">
                                        331314 Secondary Smelting and Alloying of Alumin
                                    </option>
                                    <option value="331315">331315 Aluminum She</option>
                                    <option value="331316">
                                        331316 Aluminum Extruded Product Manufacturi
                                    </option>
                                    <option value="331319">
                                        331319 Other Aluminum Rolling and Drawi
                                    </option>
                                    <option value="331411">
                                        331411 Primary Smelting and Refining of Copp
                                    </option>
                                    <option value="331419">
                                        331419 Primary Smelting and Refining of Nonferrous Metal
                                        (except Copper and Aluminu
                                    </option>
                                    <option value="331421">331421 Copper Rolli</option>
                                    <option value="331422">
                                        331422 Copper Wire (except Mechanical) Drawi
                                    </option>
                                    <option value="331423">331423 Secondary Smelti</option>
                                    <option value="331491">
                                        331491 Nonferrous Metal (except Copper and Aluminum) Rolli
                                    </option>
                                    <option value="331492">331492 Secondary Smelti</option>
                                    <option value="331511">331511 Iron Foundri</option>
                                    <option value="331512">
                                        331512 Steel Investment Foundri
                                    </option>
                                    <option value="331513">
                                        331513 Steel Foundries (except Investmen
                                    </option>
                                    <option value="331521">
                                        331521 Aluminum Die-Casting Foundri
                                    </option>
                                    <option value="331522">
                                        331522 Nonferrous (except Aluminum) Die-Casting Foundri
                                    </option>
                                    <option value="331524">
                                        331524 Aluminum Foundries (except Die-Castin
                                    </option>
                                    <option value="331525">
                                        331525 Copper Foundries (except Die-Castin
                                    </option>
                                    <option value="331528">
                                        331528 Other Nonferrous Foundries (except Die-Castin
                                    </option>
                                    <option value="332111">332111 Iron and Steel Forgi</option>
                                    <option value="332112">332112 Nonferrous Forgi</option>
                                    <option value="332114">332114 Custom Roll Formi</option>
                                    <option value="332115">
                                        332115 Crown and Closure Manufacturi
                                    </option>
                                    <option value="332116">332116 Metal Stampi</option>
                                    <option value="332117">
                                        332117 Powder Metallurgy Part Manufacturi
                                    </option>
                                    <option value="332211">
                                        332211 Cutlery and Flatware (except Precious) Manufacturi
                                    </option>
                                    <option value="332212">
                                        332212 Hand and Edge Tool Manufacturi
                                    </option>
                                    <option value="332213">
                                        332213 Saw Blade and Handsaw Manufacturi
                                    </option>
                                    <option value="332214">332214 Kitchen Utens</option>
                                    <option value="332311">
                                        332311 Prefabricated Metal Building and Component
                                        Manufacturi
                                    </option>
                                    <option value="332312">
                                        332312 Fabricated Structural Metal Manufacturi
                                    </option>
                                    <option value="332313">332313 Plate Work Manufacturi</option>
                                    <option value="332321">
                                        332321 Metal Window and Door Manufacturing
                                    </option>
                                    <option value="332322">
                                        332322 Sheet Metal Work Manufacturi
                                    </option>
                                    <option value="332323">
                                        332323 Ornamental and Architectural Metal Work Manufacturi
                                    </option>
                                    <option value="332410">
                                        332410 Power Boiler and Heat Exchanger Manufacturi
                                    </option>
                                    <option value="332420">
                                        332420 Metal Tank (Heavy Gauge) Manufacturin
                                    </option>
                                    <option value="332431">332431 Metal Can Manufacturi</option>
                                    <option value="332439">
                                        332439 Other Metal Container Manufacturi
                                    </option>
                                    <option value="332510">332510 Hardware Manufacturi</option>
                                    <option value="332611">
                                        332611 Spring (Heavy Gauge) Manufacturi
                                    </option>
                                    <option value="332612">
                                        332612 Spring (Light Gauge) Manufacturi
                                    </option>
                                    <option value="332618">
                                        332618 Other Fabricated Wire Product Manufacturi
                                    </option>
                                    <option value="332710">332710 Machine Sho</option>
                                    <option value="332721">
                                        332721 Precision Turned Product Manufacturi
                                    </option>
                                    <option value="332722">332722 Bo</option>
                                    <option value="332811">332811 Metal Heat Treati</option>
                                    <option value="332812">332812 Metal Coati</option>
                                    <option value="332813">332813 Electroplati</option>
                                    <option value="332911">
                                        332911 Industrial Valve Manufacturi
                                    </option>
                                    <option value="332912">
                                        332912 Fluid Power Valve and Hose Fitting Manufacturi
                                    </option>
                                    <option value="332913">
                                        332913 Plumbing Fixture Fitting and Trim Manufacturi
                                    </option>
                                    <option value="332919">
                                        332919 Other Metal Valve and Pipe Fitting Manufacturi
                                    </option>
                                    <option value="332991">
                                        332991 Ball and Roller Bearing Manufacturi
                                    </option>
                                    <option value="332992">
                                        332992 Small Arms Ammunition Manufacturi
                                    </option>
                                    <option value="332993">
                                        332993 Ammunition (except Small Arms) Manufacturi
                                    </option>
                                    <option value="332994">332994 Small Arms Manufacturi</option>
                                    <option value="332995">
                                        332995 Other Ordnance and Accessories Manufacturi
                                    </option>
                                    <option value="332996">
                                        332996 Fabricated Pipe and Pipe Fitting Manufacturi
                                    </option>
                                    <option value="332997">
                                        332997 Industrial Pattern Manufacturi
                                    </option>
                                    <option value="332998">
                                        332998 Enameled Iron and Metal Sanitary Ware Manufacturi
                                    </option>
                                    <option value="332999">
                                        332999 All Other Miscellaneous Fabricated Metal Product
                                        Manufacturi
                                    </option>
                                    <option value="333111">
                                        333111 Farm Machinery and Equipment Manufacturi
                                    </option>
                                    <option value="333112">
                                        333112 Lawn and Garden Tractor and Home Lawn and Garden
                                        Equipment Manufacturi
                                    </option>
                                    <option value="333120">
                                        333120 Construction Machinery Manufacturi
                                    </option>
                                    <option value="333131">
                                        333131 Mining Machinery and Equipment Manufacturi
                                    </option>
                                    <option value="333132">
                                        333132 Oil and Gas Field Machinery and Equipment Manufacturi
                                    </option>
                                    <option value="333210">
                                        333210 Sawmill and Woodworking Machinery Manufacturi
                                    </option>
                                    <option value="333220">
                                        333220 Plastics and Rubber Industry Machinery Manufacturi
                                    </option>
                                    <option value="333291">
                                        333291 Paper Industry Machinery Manufacturi
                                    </option>
                                    <option value="333292">
                                        333292 Textile Machinery Manufacturi
                                    </option>
                                    <option value="333293">
                                        333293 Printing Machinery and Equipment Manufacturi
                                    </option>
                                    <option value="333294">
                                        333294 Food Product Machinery Manufacturi
                                    </option>
                                    <option value="333295">
                                        333295 Semiconductor Machinery Manufacturi
                                    </option>
                                    <option value="333298">
                                        333298 All Other Industrial Machinery Manufacturi
                                    </option>
                                    <option value="333311">
                                        333311 Automatic Vending Machine Manufacturi
                                    </option>
                                    <option value="333312">333312 Commercial Laund</option>
                                    <option value="333313">
                                        333313 Office Machinery Manufacturi
                                    </option>
                                    <option value="333314">
                                        333314 Optical Instrument and Lens Manufacturi
                                    </option>
                                    <option value="333315">
                                        333315 Photographic and Photocopying Equipment Manufacturi
                                    </option>
                                    <option value="333319">
                                        333319 Other Commercial and Service Industry Machinery
                                        Manufacturi
                                    </option>
                                    <option value="333411">
                                        333411 Air Purification Equipment Manufacturi
                                    </option>
                                    <option value="333412">
                                        333412 Industrial and Commercial Fan and Blower Manufacturi
                                    </option>
                                    <option value="333414">
                                        333414 Heating Equipment (except Warm Air Furnaces)
                                        Manufacturi
                                    </option>
                                    <option value="333415">
                                        333415 Air-Conditioning and Warm Air Heating Equipment and
                                        Commercial and Industrial Refrigeration Equipment
                                        Manufacturi
                                    </option>
                                    <option value="333511">
                                        333511 Industrial Mold Manufacturi
                                    </option>
                                    <option value="333512">
                                        333512 Machine Tool (Metal Cutting Types) Manufacturi
                                    </option>
                                    <option value="333513">
                                        333513 Machine Tool (Metal Forming Types) Manufacturi
                                    </option>
                                    <option value="333514">333514 Special Die and To</option>
                                    <option value="333515">
                                        333515 Cutting Tool and Machine Tool Accessory Manufacturi
                                    </option>
                                    <option value="333516">
                                        333516 Rolling Mill Machinery and Equipment Manufacturi
                                    </option>
                                    <option value="333518">
                                        333518 Other Metalworking Machinery Manufacturi
                                    </option>
                                    <option value="333611">
                                        333611 Turbine and Turbine Generator Set Units Manufacturi
                                    </option>
                                    <option value="333612">333612 Speed Chang</option>
                                    <option value="333613">
                                        333613 Mechanical Power Transmission Equipment Manufacturi
                                    </option>
                                    <option value="333618">
                                        333618 Other Engine Equipment Manufacturi
                                    </option>
                                    <option value="333911">
                                        333911 Pump and Pumping Equipment Manufacturi
                                    </option>
                                    <option value="333912">
                                        333912 Air and Gas Compressor Manufacturin
                                    </option>
                                    <option value="333913">
                                        333913 Measuring and Dispensing Pump Manufacturi
                                    </option>
                                    <option value="333921">
                                        333921 Elevator and Moving Stairway Manufacturi
                                    </option>
                                    <option value="333922">
                                        333922 Conveyor and Conveying Equipment Manufacturi
                                    </option>
                                    <option value="333923">333923 Overhead Traveling Cra</option>
                                    <option value="333924">333924 Industrial Tru</option>
                                    <option value="333991">
                                        333991 Power-Driven Hand Tool Manufacturi
                                    </option>
                                    <option value="333992">
                                        333992 Welding and Soldering Equipment Manufacturi
                                    </option>
                                    <option value="333993">
                                        333993 Packaging Machinery Manufacturi
                                    </option>
                                    <option value="333994">
                                        333994 Industrial Process Furnace and Oven Manufacturi
                                    </option>
                                    <option value="333995">
                                        333995 Fluid Power Cylinder and Actuator Manufacturi
                                    </option>
                                    <option value="333996">
                                        333996 Fluid Power Pump and Motor Manufacturi
                                    </option>
                                    <option value="333997">
                                        333997 Scale and Balance (except Laboratory) Manufacturi
                                    </option>
                                    <option value="333999">
                                        333999 All Other Miscellaneous General Purpose Machinery
                                        Manufacturi
                                    </option>
                                    <option value="334111">
                                        334111 Electronic Computer Manufacturi
                                    </option>
                                    <option value="334112">
                                        334112 Computer Storage Device Manufacturi
                                    </option>
                                    <option value="334113">
                                        334113 Computer Terminal Manufacturi
                                    </option>
                                    <option value="334119">
                                        334119 Other Computer Peripheral Equipment Manufacturi
                                    </option>
                                    <option value="334210">
                                        334210 Telephone Apparatus Manufacturi
                                    </option>
                                    <option value="334220">
                                        334220 Radio and Television Broadcasting and Wireless
                                        Communications Equipment Manufacturi
                                    </option>
                                    <option value="334290">
                                        334290 Other Communications Equipment Manufacturi
                                    </option>
                                    <option value="334310">
                                        334310 Audio and Video Equipment Manufacturi
                                    </option>
                                    <option value="334411">
                                        334411 Electron Tube Manufacturi
                                    </option>
                                    <option value="334412">
                                        334412 Bare Printed Circuit Board Manufacturi
                                    </option>
                                    <option value="334413">
                                        334413 Semiconductor and Related Device Manufacturi
                                    </option>
                                    <option value="334414">
                                        334414 Electronic Capacitor Manufacturi
                                    </option>
                                    <option value="334415">
                                        334415 Electronic Resistor Manufacturi
                                    </option>
                                    <option value="334416">334416 Electronic Co</option>
                                    <option value="334417">
                                        334417 Electronic Connector Manufacturi
                                    </option>
                                    <option value="334418">
                                        334418 Printed Circuit Assembly (Electronic Assembly)
                                        Manufacturi
                                    </option>
                                    <option value="334419">
                                        334419 Other Electronic Component Manufacturi
                                    </option>
                                    <option value="334510">
                                        334510 Electromedical and Electrotherapeutic Apparatus
                                        Manufacturi
                                    </option>
                                    <option value="334511">334511 Sear</option>
                                    <option value="334512">
                                        334512 Automatic Environmental Control Manufacturing for
                                        Residenti
                                    </option>
                                    <option value="334513">
                                        334513 Instruments and Related Products Manufacturing for
                                        Measuri
                                    </option>
                                    <option value="334514">
                                        334514 Totalizing Fluid Meter and Counting Device
                                        Manufacturi
                                    </option>
                                    <option value="334515">
                                        334515 Instrument Manufacturing for Measuring and Testing
                                        Electricity and Electrical Signa
                                    </option>
                                    <option value="334516">
                                        334516 Analytical Laboratory Instrument Manufacturi
                                    </option>
                                    <option value="334517">
                                        334517 Irradiation Apparatus Manufacturi
                                    </option>
                                    <option value="334518">334518 Wat</option>
                                    <option value="334519">
                                        334519 Other Measuring and Controlling Device Manufacturi
                                    </option>
                                    <option value="334611">334611 Software Reproduci</option>
                                    <option value="334612">
                                        334612 Prerecorded Compact Disc (except Softwar
                                    </option>
                                    <option value="334613">
                                        334613 Magnetic and Optical Recording Media Manufacturi
                                    </option>
                                    <option value="335110">
                                        335110 Electric Lamp Bulb and Part Manufacturi
                                    </option>
                                    <option value="335121">
                                        335121 Residential Electric Lighting Fixture Manufacturin
                                    </option>
                                    <option value="335122">335122 Commerci</option>
                                    <option value="335129">
                                        335129 Other Lighting Equipment Manufacturi
                                    </option>
                                    <option value="335211">
                                        335211 Electric Housewares and Household Fan Manufacturi
                                    </option>
                                    <option value="335212">
                                        335212 Household Vacuum Cleaner Manufacturi
                                    </option>
                                    <option value="335221">
                                        335221 Household Cooking Appliance Manufacturi
                                    </option>
                                    <option value="335222">
                                        335222 Household Refrigerator and Home Freezer Manufacturi
                                    </option>
                                    <option value="335224">
                                        335224 Household Laundry Equipment Manufacturi
                                    </option>
                                    <option value="335228">
                                        335228 Other Major Household Appliance Manufacturi
                                    </option>
                                    <option value="335311">335311 Pow</option>
                                    <option value="335312">
                                        335312 Motor and Generator Manufacturi
                                    </option>
                                    <option value="335313">
                                        335313 Switchgear and Switchboard Apparatus Manufacturi
                                    </option>
                                    <option value="335314">
                                        335314 Relay and Industrial Control Manufacturi
                                    </option>
                                    <option value="335911">
                                        335911 Storage Battery Manufacturi
                                    </option>
                                    <option value="335912">
                                        335912 Primary Battery Manufacturi
                                    </option>
                                    <option value="335921">
                                        335921 Fiber Optic Cable Manufacturi
                                    </option>
                                    <option value="335929">
                                        335929 Other Communication and Energy Wire Manufacturi
                                    </option>
                                    <option value="335931">
                                        335931 Current-Carrying Wiring Device Manufacturi
                                    </option>
                                    <option value="335932">
                                        335932 Noncurrent-Carrying Wiring Device Manufacturi
                                    </option>
                                    <option value="335991">
                                        335991 Carbon and Graphite Product Manufacturi
                                    </option>
                                    <option value="335999">
                                        335999 All Other Miscellaneous Electrical Equipment and
                                        Component Manufacturi
                                    </option>
                                    <option value="336111">336111 Automobile Manufacturi</option>
                                    <option value="336112">
                                        336112 Light Truck and Utility Vehicle Manufacturin
                                    </option>
                                    <option value="336120">
                                        336120 Heavy Duty Truck Manufacturi
                                    </option>
                                    <option value="336211">
                                        336211 Motor Vehicle Body Manufacturi
                                    </option>
                                    <option value="336212">
                                        336212 Truck Trailer Manufacturi
                                    </option>
                                    <option value="336213">336213 Motor Home Manufacturi</option>
                                    <option value="336214">
                                        336214 Travel Trailer and Camper Manufacturi
                                    </option>
                                    <option value="336311">336311 Carburet</option>
                                    <option value="336312">
                                        336312 Gasoline Engine and Engine Parts Manufacturi
                                    </option>
                                    <option value="336321">
                                        336321 Vehicular Lighting Equipment Manufacturi
                                    </option>
                                    <option value="336322">
                                        336322 Other Motor Vehicle Electrical and Electronic
                                        Equipment Manufacturi
                                    </option>
                                    <option value="336330">
                                        336330 Motor Vehicle Steering and Suspension Components
                                        (except Spring) Manufacturi
                                    </option>
                                    <option value="336340">
                                        336340 Motor Vehicle Brake System Manufacturi
                                    </option>
                                    <option value="336350">
                                        336350 Motor Vehicle Transmission and Power Train Parts
                                        Manufacturi
                                    </option>
                                    <option value="336360">
                                        336360 Motor Vehicle Seating and Interior Trim Manufacturi
                                    </option>
                                    <option value="336370">
                                        336370 Motor Vehicle Metal Stampi
                                    </option>
                                    <option value="336391">
                                        336391 Motor Vehicle Air-Conditioning Manufacturi
                                    </option>
                                    <option value="336399">
                                        336399 All Other Motor Vehicle Parts Manufacturi
                                    </option>
                                    <option value="336411">336411 Aircraft Manufacturi</option>
                                    <option value="336412">
                                        336412 Aircraft Engine and Engine Parts Manufacturi
                                    </option>
                                    <option value="336413">
                                        336413 Other Aircraft Part and Auxiliary Equipment
                                        Manufacturi
                                    </option>
                                    <option value="336414">
                                        336414 Guided Missile and Space Vehicle Manufacturi
                                    </option>
                                    <option value="336415">
                                        336415 Guided Missile and Space Vehicle Propulsion Unit and
                                        Propulsion Unit Parts Manufacturi
                                    </option>
                                    <option value="336419">
                                        336419 Other Guided Missile and Space Vehicle Parts and
                                        Auxiliary Equipment Manufacturi
                                    </option>
                                    <option value="336510">
                                        336510 Railroad Rolling Stock Manufacturi
                                    </option>
                                    <option value="336611">
                                        336611 Ship Building and Repairi
                                    </option>
                                    <option value="336612">336612 Boat Buildin</option>
                                    <option value="336991">336991 Motorcyc</option>
                                    <option value="336992">336992 Military Armored Vehic</option>
                                    <option value="336999">
                                        336999 All Other Transportation Equipment Manufacturi
                                    </option>
                                    <option value="337110">
                                        337110 Wood Kitchen Cabinet and Countertop Manufacturi
                                    </option>
                                    <option value="337121">
                                        337121 Upholstered Household Furniture Manufacturi
                                    </option>
                                    <option value="337122">
                                        337122 Nonupholstered Wood Household Furniture Manufacturi
                                    </option>
                                    <option value="337124">
                                        337124 Metal Household Furniture Manufacturi
                                    </option>
                                    <option value="337125">
                                        337125 Household Furniture (except Wood and Metal)
                                        Manufacturi
                                    </option>
                                    <option value="337127">
                                        337127 Institutional Furniture Manufacturi
                                    </option>
                                    <option value="337129">337129 Wood Televisi</option>
                                    <option value="337211">
                                        337211 Wood Office Furniture Manufacturin
                                    </option>
                                    <option value="337212">
                                        337212 Custom Architectural Woodwork and Millwork
                                        Manufacturi
                                    </option>
                                    <option value="337214">
                                        337214 Office Furniture (except Wood) Manufacturi
                                    </option>
                                    <option value="337215">337215 Showca</option>
                                    <option value="337910">337910 Mattress Manufacturi</option>
                                    <option value="337920">
                                        337920 Blind and Shade Manufacturi
                                    </option>
                                    <option value="339112">
                                        339112 Surgical and Medical Instrument Manufacturi
                                    </option>
                                    <option value="339113">
                                        339113 Surgical and Appliance and Supplies Manufacturi
                                    </option>
                                    <option value="339113">
                                        339113 Surgical Appliance and Supplies Manufacturi
                                    </option>
                                    <option value="339114">
                                        339114 Dental Equipment and Supplies Manufacturi
                                    </option>
                                    <option value="339115">
                                        339115 Ophthalmic Goods Manufacturi
                                    </option>
                                    <option value="339116">339116 Dental Laboratori</option>
                                    <option value="339911">
                                        339911 Jewelry (except Costume) Manufacturi
                                    </option>
                                    <option value="339912">
                                        339912 Silverware and Holloware Manufacturi
                                    </option>
                                    <option value="339913">
                                        339913 Jewelers' Material and Lapidary Work Manufacturi
                                    </option>
                                    <option value="339914">
                                        339914 Costume Jewelry and Novelty Manufacturi
                                    </option>
                                    <option value="339920">
                                        339920 Sporting and Athletic Goods Manufacturi
                                    </option>
                                    <option value="339931">
                                        339931 Doll and Stuffed Toy Manufacturi
                                    </option>
                                    <option value="339932">339932 Ga</option>
                                    <option value="339941">
                                        339941 Pen and Mechanical Pencil Manufacturi
                                    </option>
                                    <option value="339942">
                                        339942 Lead Pencil and Art Good Manufacturi
                                    </option>
                                    <option value="339943">
                                        339943 Marking Device Manufacturi
                                    </option>
                                    <option value="339944">
                                        339944 Carbon Paper and Inked Ribbon Manufacturi
                                    </option>
                                    <option value="339950">339950 Sign Manufacturi</option>
                                    <option value="339991">339991 Gask</option>
                                    <option value="339992">
                                        339992 Musical Instrument Manufacturi
                                    </option>
                                    <option value="339993">339993 Fasten</option>
                                    <option value="339994">339994 Bro</option>
                                    <option value="339995">
                                        339995 Burial Casket Manufacturi
                                    </option>
                                    <option value="339999">
                                        339999 All Other Miscellaneous Manufacturi
                                    </option>
                                    <option value="423110">
                                        423110 Automobile and Other Motor Vehicle Merchant Wholesale
                                    </option>
                                    <option value="423120">
                                        423120 Motor Vehicle Supplies and New Parts Merchant
                                        Wholesale
                                    </option>
                                    <option value="423130">
                                        423130 Tire and Tube Merchant Wholesale
                                    </option>
                                    <option value="423140">
                                        423140 Motor Vehicle Parts (Used) Merchant Wholesale
                                    </option>
                                    <option value="423210">
                                        423210 Furniture Merchant Wholesale
                                    </option>
                                    <option value="423220">
                                        423220 Home Furnishing Merchant Wholesale
                                    </option>
                                    <option value="423310">423310 Lumb</option>
                                    <option value="423320">423320 Bri</option>
                                    <option value="423330">423330 Roofi</option>
                                    <option value="423390">
                                        423390 Other Construction Material Merchant Wholesale
                                    </option>
                                    <option value="423410">
                                        423410 Photographic Equipment and Supplies Merchant
                                        Wholesale
                                    </option>
                                    <option value="423420">
                                        423420 Office Equipment Merchant Wholesale
                                    </option>
                                    <option value="423430">
                                        423430 Computer and Computer Peripheral Equipment and
                                        Software Merchant Wholesale
                                    </option>
                                    <option value="423440">
                                        423440 Other Commercial Equipment Merchant Wholesale
                                    </option>
                                    <option value="423450">423450 Medic</option>
                                    <option value="423460">
                                        423460 Ophthalmic Goods Merchant Wholesale
                                    </option>
                                    <option value="423490">
                                        423490 Other Professional Equipment and Supplies Merchant
                                        Wholesale
                                    </option>
                                    <option value="423510">
                                        423510 Metal Service Centers and Other Metal Merchant
                                        Wholesale
                                    </option>
                                    <option value="423520">
                                        423520 Coal and Other Mineral and Ore Merchant Wholesale
                                    </option>
                                    <option value="423610">
                                        423610 Electrical Apparatus and Equipme
                                    </option>
                                    <option value="423620">
                                        423620 Electrical and Electronic Applian
                                    </option>
                                    <option value="423690">
                                        423690 Other Electronic Parts and Equipment Merchant
                                        Wholesale
                                    </option>
                                    <option value="423710">
                                        423710 Hardware Merchant Wholesale
                                    </option>
                                    <option value="423720">
                                        423720 Plumbing and Heating Equipment and Supplies
                                        (Hydronics) Merchant Wholesaler
                                    </option>
                                    <option value="423730">
                                        423730 Warm Air Heating and Air-Conditioning Equipment and
                                        Supplies Merchant Wholesale
                                    </option>
                                    <option value="423740">
                                        423740 Refrigeration Equipment and Supplies Merchant
                                        Wholesale
                                    </option>
                                    <option value="423810">
                                        423810 Construction and Mining (except Oil Well) Machinery
                                        and Equipment Merchant Wholesale
                                    </option>
                                    <option value="423820">
                                        423820 Farm and Garden Machinery and Equipment Merchant
                                        Wholesale
                                    </option>
                                    <option value="423830">
                                        423830 Industrial Machinery and Equipment Merchant Wholesale
                                    </option>
                                    <option value="423840">
                                        423840 Industrial Supplies Merchant Wholesale
                                    </option>
                                    <option value="423850">
                                        423850 Service Establishment Equipment and Supplies Merchant
                                        Wholesale
                                    </option>
                                    <option value="423860">
                                        423860 Transportation Equipment and Supplies (except Motor
                                        Vehicle) Merchant Wholesale
                                    </option>
                                    <option value="423910">
                                        423910 Sporting and Recreational Goods and Supplies Merchant
                                        Wholesale
                                    </option>
                                    <option value="423920">
                                        423920 Toy and Hobby Goods and Supplies Merchant Wholesale
                                    </option>
                                    <option value="423930">
                                        423930 Recyclable Material Merchant Wholesale
                                    </option>
                                    <option value="423940">423940 Jewel</option>
                                    <option value="423990">
                                        423990 Other Miscellaneous Durable Goods Merchant Wholesale
                                    </option>
                                    <option value="424110">
                                        424110 Printing and Writing Paper Merchant Wholesale
                                    </option>
                                    <option value="424120">
                                        424120 Stationery and Office Supplies Merchant Wholesale
                                    </option>
                                    <option value="424130">
                                        424130 Industrial and Personal Service Paper Merchant
                                        Wholesale
                                    </option>
                                    <option value="424210">
                                        424210 Drugs and Druggists' Sundries Merchant Wholesale
                                    </option>
                                    <option value="424310">424310 Piece Goo</option>
                                    <option value="424320">
                                        424320 Men's and Boys' Clothing and Furnishings Merchant
                                        Wholesale
                                    </option>
                                    <option value="424330">424330 Women</option>
                                    <option value="424340">
                                        424340 Footwear Merchant Wholesale
                                    </option>
                                    <option value="424410">
                                        424410 General Line Grocery Merchant Wholesale
                                    </option>
                                    <option value="424420">
                                        424420 Packaged Frozen Food Merchant Wholesale
                                    </option>
                                    <option value="424430">
                                        424430 Dairy Product (except Dried or Canned) Merchant
                                        Wholesale
                                    </option>
                                    <option value="424440">
                                        424440 Poultry and Poultry Product Merchant Wholesale
                                    </option>
                                    <option value="424450">
                                        424450 Confectionery Merchant Wholesale
                                    </option>
                                    <option value="424460">
                                        424460 Fish and Seafood Merchant Wholesale
                                    </option>
                                    <option value="424470">
                                        424470 Meat and Meat Product Merchant Wholesale
                                    </option>
                                    <option value="424480">
                                        424480 Fresh Fruit and Vegetable Merchant Wholesale
                                    </option>
                                    <option value="424490">
                                        424490 Other Grocery and Related Products Merchant Wholesale
                                    </option>
                                    <option value="424510">
                                        424510 Grain and Field Bean Merchant Wholesale
                                    </option>
                                    <option value="424520">
                                        424520 Livestock Merchant Wholesale
                                    </option>
                                    <option value="424590">
                                        424590 Other Farm Product Raw Material Merchant Wholesale
                                    </option>
                                    <option value="424610">
                                        424610 Plastics Materials and Basic Forms and Shapes
                                        Merchant Wholesale
                                    </option>
                                    <option value="424690">
                                        424690 Other Chemical and Allied Products Merchant Wholesale
                                    </option>
                                    <option value="424710">
                                        424710 Petroleum Bulk Stations and Termina
                                    </option>
                                    <option value="424720">
                                        424720 Petroleum and Petroleum Products Merchant Wholesalers
                                        (except Bulk Stations and Terminal
                                    </option>
                                    <option value="424810">
                                        424810 Beer and Ale Merchant Wholesale
                                    </option>
                                    <option value="424820">
                                        424820 Wine and Distilled Alcoholic Beverage Merchant
                                        Wholesale
                                    </option>
                                    <option value="424910">
                                        424910 Farm Supplies Merchant Wholesale
                                    </option>
                                    <option value="424920">424920 Bo</option>
                                    <option value="424930">424930 Flow</option>
                                    <option value="424940">
                                        424940 Tobacco and Tobacco Product Merchant Wholesale
                                    </option>
                                    <option value="424950">424950 Pai</option>
                                    <option value="424990">
                                        424990 Other Miscellaneous Nondurable Goods Merchant
                                        Wholesale
                                    </option>
                                    <option value="425110">
                                        425110 Business to Business Electronic Marke
                                    </option>
                                    <option value="425120">
                                        425120 Wholesale Trade Agents and Broke
                                    </option>
                                    <option value="441110">441110 New Car Deale</option>
                                    <option value="441120">441120 Used Car Deale</option>
                                    <option value="441210">
                                        441210 Recreational Vehicle Deale
                                    </option>
                                    <option value="441221">441221 Motorcycle Deale</option>
                                    <option value="441222">441222 Boat Deale</option>
                                    <option value="441229">
                                        441229 All Other Motor Vehicle Deale
                                    </option>
                                    <option value="441310">
                                        441310 Automotive Parts and Accessories Stor
                                    </option>
                                    <option value="441320">441320 Tire Deale</option>
                                    <option value="442110">442110 Furniture Stor</option>
                                    <option value="442210">442210 Floor Covering Stor</option>
                                    <option value="442291">442291 Window Treatment Stor</option>
                                    <option value="442299">
                                        442299 All Other Home Furnishings Stor
                                    </option>
                                    <option value="443111">
                                        443111 Household Appliance Stor
                                    </option>
                                    <option value="443112">443112 Rad</option>
                                    <option value="443120">
                                        443120 Computer and Software Stor
                                    </option>
                                    <option value="443130">
                                        443130 Camera and Photographic Supplies Stor
                                    </option>
                                    <option value="444110">444110 Home Cente</option>
                                    <option value="444120">
                                        444120 Paint and Wallpaper Stor
                                    </option>
                                    <option value="444130">444130 Hardware Stor</option>
                                    <option value="444190">
                                        444190 Other Building Material Deale
                                    </option>
                                    <option value="444210">
                                        444210 Outdoor Power Equipment Stor
                                    </option>
                                    <option value="444220">444220 Nurseri</option>
                                    <option value="445110">
                                        445110 Supermarkets and Other Grocery (except Convenience)
                                        Stor
                                    </option>
                                    <option value="445120">445120 Convenience Stor</option>
                                    <option value="445210">445210 Meat Marke</option>
                                    <option value="445220">445220 Fish and Seafood Marke</option>
                                    <option value="445230">
                                        445230 Fruit and Vegetable Marke
                                    </option>
                                    <option value="445291">445291 Baked Goods Stor</option>
                                    <option value="445292">
                                        445292 Confectionery and Nut Store
                                    </option>
                                    <option value="445299">
                                        445299 All Other Specialty Food Stor
                                    </option>
                                    <option value="445310">445310 Be</option>
                                    <option value="446110">
                                        446110 Pharmacies and Drug Stor
                                    </option>
                                    <option value="446120">446120 Cosmeti</option>
                                    <option value="446130">446130 Optical Goods Stor</option>
                                    <option value="446191">
                                        446191 Food (Health) Supplement Stor
                                    </option>
                                    <option value="446199">
                                        446199 All Other Health and Personal Care Store
                                    </option>
                                    <option value="447110">
                                        447110 Gasoline Stations with Convenience Stor
                                    </option>
                                    <option value="447190">447190 Other Gasoline Statio</option>
                                    <option value="448110">448110 Men's Clothing Stor</option>
                                    <option value="448120">448120 Women's Clothing Stor</option>
                                    <option value="448130">
                                        448130 Children's and Infants' Clothing Stor
                                    </option>
                                    <option value="448140">448140 Family Clothing Stor</option>
                                    <option value="448150">
                                        448150 Clothing Accessories Stor
                                    </option>
                                    <option value="448190">448190 Other Clothing Stor</option>
                                    <option value="448210">448210 Shoe Stor</option>
                                    <option value="448310">448310 Jewelry Stor</option>
                                    <option value="448320">
                                        448320 Luggage and Leather Goods Stor
                                    </option>
                                    <option value="451110">451110 Sporting Goods Stor</option>
                                    <option value="451120">451120 Hob</option>
                                    <option value="451130">451130 Sewi</option>
                                    <option value="451140">
                                        451140 Musical Instrument and Supplies Stor
                                    </option>
                                    <option value="451211">451211 Book Stor</option>
                                    <option value="451212">
                                        451212 News Dealers and Newsstan
                                    </option>
                                    <option value="451220">451220 Prerecorded Ta</option>
                                    <option value="452111">
                                        452111 Department Stores (except Discount Department Store
                                    </option>
                                    <option value="452112">
                                        452112 Discount Department Stor
                                    </option>
                                    <option value="452910">
                                        452910 Warehouse Clubs and Supercente
                                    </option>
                                    <option value="452990">
                                        452990 All Other General Merchandise Stor
                                    </option>
                                    <option value="453110">453110 Floris</option>
                                    <option value="453210">
                                        453210 Office Supplies and Stationary Stor
                                    </option>
                                    <option value="453210">
                                        453210 Office Supplies and Stationery Stor
                                    </option>
                                    <option value="453220">453220 Gi</option>
                                    <option value="453310">453310 Used Merchandise Stor</option>
                                    <option value="453910">
                                        453910 Pet and Pet Supplies Stor
                                    </option>
                                    <option value="453920">453920 Art Deale</option>
                                    <option value="453930">
                                        453930 Manufactured (Mobile) Home Deale
                                    </option>
                                    <option value="453991">453991 Tobacco Stor</option>
                                    <option value="453998">
                                        453998 All Other Miscellaneous Store Retailers (except
                                        Tobacco Store
                                    </option>
                                    <option value="454111">454111 Electronic Shoppi</option>
                                    <option value="454112">454112 Electronic Auctio</option>
                                    <option value="454113">454113 Mail-Order Hous</option>
                                    <option value="454210">454210 Vending Machine Operato</option>
                                    <option value="454311">454311 Heating Oil Deale</option>
                                    <option value="454312">
                                        454312 Liquefied Petroleum Gas (Bottled Gas) Deale
                                    </option>
                                    <option value="454319">454319 Other Fuel Deale</option>
                                    <option value="454390">
                                        454390 Other Direct Selling Establishmen
                                    </option>
                                    <option value="481111">
                                        481111 Scheduled Passenger Air Transportati
                                    </option>
                                    <option value="481112">
                                        481112 Scheduled Freight Air Transportati
                                    </option>
                                    <option value="481211">
                                        481211 Nonscheduled Chartered Passenger Air Transportati
                                    </option>
                                    <option value="481212">
                                        481212 Nonscheduled Chartered Freight Air Transportati
                                    </option>
                                    <option value="481219">
                                        481219 Other Nonscheduled Air Transportati
                                    </option>
                                    <option value="482111">482111 Line-Haul Railroa</option>
                                    <option value="482112">482112 Short Line Railroa</option>
                                    <option value="483111">
                                        483111 Deep Sea Freight Transportati
                                    </option>
                                    <option value="483112">
                                        483112 Deep Sea Passenger Transportati
                                    </option>
                                    <option value="483113">
                                        483113 Coastal and Great Lakes Freight Transportati
                                    </option>
                                    <option value="483114">
                                        483114 Coastal and Great Lakes Passenger Transportati
                                    </option>
                                    <option value="483211">
                                        483211 Inland Water Freight Transportati
                                    </option>
                                    <option value="483212">
                                        483212 Inland Water Passenger Transportati
                                    </option>
                                    <option value="484110">484110 General Freight Trucki</option>
                                    <option value="484121">484121 General Freight Trucki</option>
                                    <option value="484122">484122 General Freight Trucki</option>
                                    <option value="484210">
                                        484210 Used Household and Office Goods Movi
                                    </option>
                                    <option value="484220">
                                        484220 Specialized Freight (except Used Goods) Trucki
                                    </option>
                                    <option value="484230">
                                        484230 Specialized Freight (except Used Goods) Trucki
                                    </option>
                                    <option value="485111">
                                        485111 Mixed Mode Transit Syste
                                    </option>
                                    <option value="485112">485112 Commuter Rail Syste</option>
                                    <option value="485113">
                                        485113 Bus and Other Motor Vehicle Transit Syste
                                    </option>
                                    <option value="485119">
                                        485119 Other Urban Transit Syste
                                    </option>
                                    <option value="485210">
                                        485210 Interurban and Rural Bus Transportati
                                    </option>
                                    <option value="485310">485310 Taxi Servi</option>
                                    <option value="485320">485320 Limousine Servi</option>
                                    <option value="485410">
                                        485410 School and Employee Bus Transportati
                                    </option>
                                    <option value="485510">485510 Charter Bus Indust</option>
                                    <option value="485991">
                                        485991 Special Needs Transportati
                                    </option>
                                    <option value="485999">
                                        485999 All Other Transit and Ground Passenger Transportati
                                    </option>
                                    <option value="486110">
                                        486110 Pipeline Transportation of Crude O
                                    </option>
                                    <option value="486210">
                                        486210 Pipeline Transportation of Natural G
                                    </option>
                                    <option value="486910">
                                        486910 Pipeline Transportation of Refined Petroleum Produc
                                    </option>
                                    <option value="486990">
                                        486990 All Other Pipeline Transportati
                                    </option>
                                    <option value="487110">
                                        487110 Scenic and Sightseeing Transportati
                                    </option>
                                    <option value="487210">
                                        487210 Scenic and Sightseeing Transportati
                                    </option>
                                    <option value="487990">
                                        487990 Scenic and Sightseeing Transportati
                                    </option>
                                    <option value="488111">488111 Air Traffic Contr</option>
                                    <option value="488119">488119 Other Airport Operatio</option>
                                    <option value="488190">
                                        488190 Other Support Activities for Air Transportati
                                    </option>
                                    <option value="488210">
                                        488210 Support Activities for Rail Transportati
                                    </option>
                                    <option value="488310">
                                        488310 Port and Harbor Operatio
                                    </option>
                                    <option value="488320">488320 Marine Cargo Handli</option>
                                    <option value="488330">
                                        488330 Navigational Services to Shippi
                                    </option>
                                    <option value="488390">
                                        488390 Other Support Activities for Water Transportati
                                    </option>
                                    <option value="488410">488410 Motor Vehicle Towi</option>
                                    <option value="488490">
                                        488490 Other Support Activities for Road Transportati
                                    </option>
                                    <option value="488510">
                                        488510 Freight Transportation Arrangeme
                                    </option>
                                    <option value="488991">488991 Packing and Crati</option>
                                    <option value="488999">
                                        488999 All Other Support Activities for Transportati
                                    </option>
                                    <option value="491110">491110 Postal Servi</option>
                                    <option value="492110">492110 Courie</option>
                                    <option value="492210">
                                        492210 Local Messengers and Local Delive
                                    </option>
                                    <option value="493110">
                                        493110 General Warehousing and Stora
                                    </option>
                                    <option value="493120">
                                        493120 Refrigerated Warehousing and Stora
                                    </option>
                                    <option value="493130">
                                        493130 Farm Product Warehousing and Stora
                                    </option>
                                    <option value="493190">
                                        493190 Other Warehousing and Stora
                                    </option>
                                    <option value="511110">511110 Newspaper Publishe</option>
                                    <option value="511120">511120 Periodical Publishe</option>
                                    <option value="511130">511130 Book Publishe</option>
                                    <option value="511140">
                                        511140 Directory and Mailing List Publishe
                                    </option>
                                    <option value="511191">511191 Greeting Card Publishe</option>
                                    <option value="511199">511199 All Other Publishe</option>
                                    <option value="511210">511210 Software Publishe</option>
                                    <option value="512110">
                                        512110 Motion Picture and Video Producti
                                    </option>
                                    <option value="512120">
                                        512120 Motion Picture and Video Distributi
                                    </option>
                                    <option value="512131">
                                        512131 Motion Picture Theaters (except Drive-In
                                    </option>
                                    <option value="512132">
                                        512132 Drive-In Motion Picture Theate
                                    </option>
                                    <option value="512191">
                                        512191 Teleproduction and Other Postproduction Servic
                                    </option>
                                    <option value="512199">
                                        512199 Other Motion Picture and Video Industri
                                    </option>
                                    <option value="512210">512210 Record Productio</option>
                                    <option value="512220">
                                        512220 Integrated Record Production/Distributi
                                    </option>
                                    <option value="512230">512230 Music Publishe</option>
                                    <option value="512240">512240 Sound Recording Studi</option>
                                    <option value="512290">
                                        512290 Other Sound Recording Industri
                                    </option>
                                    <option value="515111">515111 Radio Networ</option>
                                    <option value="515112">515112 Radio Statio</option>
                                    <option value="515120">515120 Television Broadcastin</option>
                                    <option value="515210">
                                        515210 Cable and Other Subscription Programmi
                                    </option>
                                    <option value="517110">
                                        517110 Wired Telecommunications Carrie
                                    </option>
                                    <option value="517210">
                                        517210 Wired Telecommunications Carriers (except Satellit
                                    </option>
                                    <option value="517410">
                                        517410 Satellite Telecommunicatio
                                    </option>
                                    <option value="517911">
                                        517911 Telecommunications Reselle
                                    </option>
                                    <option value="517919">
                                        517919 All Other Telecommunicatio
                                    </option>
                                    <option value="518210">518210 Data Processi</option>
                                    <option value="519110">519110 News Syndicat</option>
                                    <option value="519120">519120 Libraries and Archiv</option>
                                    <option value="519130">
                                        519130 Internet Publishing and Broadcasting and Web Search
                                        Porta
                                    </option>
                                    <option value="519190">
                                        519190 All Other Information Servic
                                    </option>
                                    <option value="521110">
                                        521110 Monetary Authorities - Central Ba
                                    </option>
                                    <option value="522110">522110 Commercial Banki</option>
                                    <option value="522120">522120 Savings Institutio</option>
                                    <option value="522130">522130 Credit Unio</option>
                                    <option value="522190">
                                        522190 Other Depository Credit Intermediati
                                    </option>
                                    <option value="522210">522210 Credit Card Issui</option>
                                    <option value="522220">522220 Sales Financi</option>
                                    <option value="522291">522291 Consumer Lendi</option>
                                    <option value="522292">522292 Real Estate Cred</option>
                                    <option value="522293">
                                        522293 International Trade Financi
                                    </option>
                                    <option value="522294">
                                        522294 Secondary Market Financi
                                    </option>
                                    <option value="522298">
                                        522298 All Other Nondepository Credit Intermediati
                                    </option>
                                    <option value="522310">
                                        522310 Mortgage and Nonmortgage Loan Broke
                                    </option>
                                    <option value="522320">
                                        522320 Financial Transactions Processi
                                    </option>
                                    <option value="522390">
                                        522390 Other Activities Related to Credit Intermediati
                                    </option>
                                    <option value="523110">
                                        523110 Investment Banking and Securities Deali
                                    </option>
                                    <option value="523120">523120 Securities Brokera</option>
                                    <option value="523130">
                                        523130 Commodity Contracts Deali
                                    </option>
                                    <option value="523140">
                                        523140 Commodity Contracts Brokera
                                    </option>
                                    <option value="523210">
                                        523210 Securities and Commodity Exchang
                                    </option>
                                    <option value="523910">
                                        523910 Miscellaneous Intermediati
                                    </option>
                                    <option value="523920">523920 Portfolio Manageme</option>
                                    <option value="523930">523930 Investment Advi</option>
                                    <option value="523991">523991 Tru</option>
                                    <option value="523999">
                                        523999 Miscellaneous Financial Investment Activiti
                                    </option>
                                    <option value="524113">
                                        524113 Direct Life Insurance Carrie
                                    </option>
                                    <option value="524114">
                                        524114 Direct Health and Medical Insurance Carrie
                                    </option>
                                    <option value="524126">
                                        524126 Direct Property and Casualty Insurance Carrie
                                    </option>
                                    <option value="524127">
                                        524127 Direct Title Insurance Carrie
                                    </option>
                                    <option value="524128">
                                        524128 Other Direct Insurance (except Li
                                    </option>
                                    <option value="524130">524130 Reinsurance Carrie</option>
                                    <option value="524210">
                                        524210 Insurance Agencies and Brokerag
                                    </option>
                                    <option value="524291">524291 Claims Adjusti</option>
                                    <option value="524292">
                                        524292 Third Party Administration of Insurance and Pension
                                        Fun
                                    </option>
                                    <option value="524298">
                                        524298 All Other Insurance Related Activiti
                                    </option>
                                    <option value="525110">525110 Pension Fun</option>
                                    <option value="525120">525120 Health and Welfare Fun</option>
                                    <option value="525190">525190 Other Insurance Fun</option>
                                    <option value="525910">525910 Open-End Investment Fun</option>
                                    <option value="525920">525920 Trus</option>
                                    <option value="525930">
                                        525930 Real Estate Investment Trus
                                    </option>
                                    <option value="525990">525990 Other Financial Vehicl</option>
                                    <option value="531110">
                                        531110 Lessors of Residential Buildings and Dwellin
                                    </option>
                                    <option value="531120">
                                        531120 Lessors of Nonresidential Buildings (except
                                        Miniwarehouse
                                    </option>
                                    <option value="531130">
                                        531130 Lessors of Miniwarehouses and Self-Storage Uni
                                    </option>
                                    <option value="531190">
                                        531190 Lessors of Other Real Estate Proper
                                    </option>
                                    <option value="531210">
                                        531210 Offices of Real Estate Agents and Broke
                                    </option>
                                    <option value="531311">
                                        531311 Residential Property Manage
                                    </option>
                                    <option value="531312">
                                        531312 Nonresidential Property Manage
                                    </option>
                                    <option value="531320">
                                        531320 Offices of Real Estate Appraise
                                    </option>
                                    <option value="531390">
                                        531390 Other Activities Related to Real Esta
                                    </option>
                                    <option value="532111">532111 Passenger Car Rent</option>
                                    <option value="532112">532112 Passenger Car Leasing</option>
                                    <option value="532120">532120 Tru</option>
                                    <option value="532210">
                                        532210 Consumer Electronics and Appliances Rent
                                    </option>
                                    <option value="532220">
                                        532220 Formal Wear and Costume Rent
                                    </option>
                                    <option value="532230">
                                        532230 Video Tape and Disc Rent
                                    </option>
                                    <option value="532291">
                                        532291 Home Health Equipment Rent
                                    </option>
                                    <option value="532292">532292 Recreational Goods Rent</option>
                                    <option value="532299">
                                        532299 All Other Consumer Goods Rent
                                    </option>
                                    <option value="532310">532310 General Rental Cente</option>
                                    <option value="532411">532411 Commercial A</option>
                                    <option value="532412">532412 Constructi</option>
                                    <option value="532420">
                                        532420 Office Machinery and Equipment Rental and Leasi
                                    </option>
                                    <option value="532490">
                                        532490 Other Commercial and Industrial Machinery and
                                        Equipment Rental and Leasi
                                    </option>
                                    <option value="533110">
                                        533110 Lessors of Nonfinancial Intangible Assets (except
                                        Copyrighted Works
                                    </option>
                                    <option value="541110">541110 Offices of Lawyer</option>
                                    <option value="541120">541120 Offices of Notari</option>
                                    <option value="541191">
                                        541191 Title Abstract and Settlement Offic
                                    </option>
                                    <option value="541199">541199 All Other Legal Servic</option>
                                    <option value="541211">
                                        541211 Offices of Certified Public Accountan
                                    </option>
                                    <option value="541213">541213 Tax Preparation Servic</option>
                                    <option value="541214">541214 Payroll Servic</option>
                                    <option value="541219">541219 Other Accounting Servic</option>
                                    <option value="541310">541310 Architectural Servic</option>
                                    <option value="541320">
                                        541320 Landscape Architectural Servic
                                    </option>
                                    <option value="541330">541330 Engineering Servic</option>
                                    <option value="541340">541340 Drafting Servic</option>
                                    <option value="541350">
                                        541350 Building Inspection Services
                                    </option>
                                    <option value="541360">
                                        541360 Geophysical Surveying and Mapping Servic
                                    </option>
                                    <option value="541370">
                                        541370 Surveying and Mapping (except Geophysical) Servic
                                    </option>
                                    <option value="541380">541380 Testing Laboratori</option>
                                    <option value="541410">541410 Interior Design Servic</option>
                                    <option value="541420">
                                        541420 Industrial Design Servic
                                    </option>
                                    <option value="541430">541430 Graphic Design Servic</option>
                                    <option value="541490">
                                        541490 Other Specialized Design Servic
                                    </option>
                                    <option value="541511">
                                        541511 Custom Computer Programming Servic
                                    </option>
                                    <option value="541512">
                                        541512 Computer Systems Design Servic
                                    </option>
                                    <option value="541513">
                                        541513 Computer Facilities Management Servic
                                    </option>
                                    <option value="541519">
                                        541519 Other Computer Related Servic
                                    </option>
                                    <option value="541611">
                                        541611 Administrative Management and General Management
                                        Consulting Service
                                    </option>
                                    <option value="541612">
                                        541612 Human Resources and Executive Search Consulting
                                        Servic
                                    </option>
                                    <option value="541613">
                                        541613 Marketing Consulting Servic
                                    </option>
                                    <option value="541614">541614 Proce</option>
                                    <option value="541618">
                                        541618 Other Management Consulting Servic
                                    </option>
                                    <option value="541620">
                                        541620 Environmental Consulting Servic
                                    </option>
                                    <option value="541690">
                                        541690 Other Scientific and Technical Consulting Servic
                                    </option>
                                    <option value="541711">
                                        541711 Research and Development in Biotechnolo
                                    </option>
                                    <option value="541712">
                                        541712 Research and Development in the Physic
                                    </option>
                                    <option value="541810">541810 Advertising Agenci</option>
                                    <option value="541820">541820 Public Relations Agenci</option>
                                    <option value="541830">541830 Media Buying Agenci</option>
                                    <option value="541840">541840 Media Representativ</option>
                                    <option value="541850">541850 Display Advertisi</option>
                                    <option value="541860">541860 Direct Mail Advertisi</option>
                                    <option value="541870">
                                        541870 Advertising Material Distribution Servic
                                    </option>
                                    <option value="541890">
                                        541890 Other Services Related to Advertisi
                                    </option>
                                    <option value="541910">
                                        541910 Marketing Research and Public Opinion Polli
                                    </option>
                                    <option value="541921">541921 Photography Studi</option>
                                    <option value="541922">541922 Commercial Photograp</option>
                                    <option value="541930">
                                        541930 Translation and Interpretation Servic
                                    </option>
                                    <option value="541940">541940 Veterinary Servic</option>
                                    <option value="541990">541990 All Other Profession</option>
                                    <option value="551111">
                                        551111 Offices of Bank Holding Compani
                                    </option>
                                    <option value="551112">
                                        551112 Offices of Other Holding Compani
                                    </option>
                                    <option value="551114">551114 Corpora</option>
                                    <option value="561110">
                                        561110 Office Administrative Servic
                                    </option>
                                    <option value="561210">
                                        561210 Facilities Support Servic
                                    </option>
                                    <option value="561311">
                                        561311 Employment Placement Agenci
                                    </option>
                                    <option value="561312">561312 Executive Search Servic</option>
                                    <option value="561320">561320 Temporary Help Servic</option>
                                    <option value="561330">
                                        561330 Professional Employer Organizatio
                                    </option>
                                    <option value="561410">
                                        561410 Document Preparation Servic
                                    </option>
                                    <option value="561421">
                                        561421 Telephone Answering Servic
                                    </option>
                                    <option value="561422">561422 Telemarketing Burea</option>
                                    <option value="561431">561431 Private Mail Cente</option>
                                    <option value="561439">
                                        561439 Other Business Service Centers (including Copy Shop
                                    </option>
                                    <option value="561440">561440 Collection Agenci</option>
                                    <option value="561450">561450 Credit Burea</option>
                                    <option value="561491">561491 Repossession Servic</option>
                                    <option value="561492">
                                        561492 Court Reporting and Stenotype Servic
                                    </option>
                                    <option value="561499">
                                        561499 All Other Business Support Servic
                                    </option>
                                    <option value="561510">561510 Travel Agenci</option>
                                    <option value="561520">561520 Tour Operato</option>
                                    <option value="561591">
                                        561591 Convention and Visitors Burea
                                    </option>
                                    <option value="561599">
                                        561599 All Other Travel Arrangement and Reservation Servic
                                    </option>
                                    <option value="561611">561611 Investigation Servic</option>
                                    <option value="561612">
                                        561612 Security Guards and Patrol Servic
                                    </option>
                                    <option value="561613">561613 Armored Car Servic</option>
                                    <option value="561621">
                                        561621 Security Systems Services (except Locksmith
                                    </option>
                                    <option value="561622">561622 Locksmit</option>
                                    <option value="561710">
                                        561710 Exterminating and Pest Control Servic
                                    </option>
                                    <option value="561720">561720 Janitorial Servic</option>
                                    <option value="561730">561730 Landscaping Servic</option>
                                    <option value="561740">
                                        561740 Carpet and Upholstery Cleaning Servic
                                    </option>
                                    <option value="561790">
                                        561790 Other Services to Buildings and Dwellin
                                    </option>
                                    <option value="561910">
                                        561910 Packaging and Labeling Servic
                                    </option>
                                    <option value="561920">
                                        561920 Convention and Trade Show Organize
                                    </option>
                                    <option value="561990">
                                        561990 All Other Support Servic
                                    </option>
                                    <option value="562111">562111 Solid Waste Collecti</option>
                                    <option value="562112">
                                        562112 Hazardous Waste Collecti
                                    </option>
                                    <option value="562119">562119 Other Waste Collecti</option>
                                    <option value="562211">
                                        562211 Hazardous Waste Treatment and Dispos
                                    </option>
                                    <option value="562212">562212 Solid Waste Landfi</option>
                                    <option value="562213">
                                        562213 Solid Waste Combustors and Incinerato
                                    </option>
                                    <option value="562219">
                                        562219 Other Nonhazardous Waste Treatment and Dispos
                                    </option>
                                    <option value="562910">562910 Remediation Servic</option>
                                    <option value="562920">
                                        562920 Materials Recovery Faciliti
                                    </option>
                                    <option value="562991">
                                        562991 Septic Tank and Related Servic
                                    </option>
                                    <option value="562998">
                                        562998 All Other Miscellaneous Waste Management Servic
                                    </option>
                                    <option value="611110">
                                        611110 Elementary and Secondary Schoo
                                    </option>
                                    <option value="611210">611210 Junior Colleg</option>
                                    <option value="611310">611310 Colleg</option>
                                    <option value="611410">
                                        611410 Business and Secretarial Schoo
                                    </option>
                                    <option value="611420">611420 Computer Trainin</option>
                                    <option value="611430">
                                        611430 Professional and Management Development Traini
                                    </option>
                                    <option value="611511">
                                        611511 Cosmetology and Barber Schoo
                                    </option>
                                    <option value="611512">611512 Flight Traini</option>
                                    <option value="611513">611513 Apprenticeship Traini</option>
                                    <option value="611519">
                                        611519 Other Technical and Trade Schoo
                                    </option>
                                    <option value="611610">611610 Fine Arts Schoo</option>
                                    <option value="611620">
                                        611620 Sports and Recreation Instructi
                                    </option>
                                    <option value="611630">611630 Language Schoo</option>
                                    <option value="611691">
                                        611691 Exam Preparation and Tutori
                                    </option>
                                    <option value="611692">
                                        611692 Automobile Driving Schoo
                                    </option>
                                    <option value="611699">
                                        611699 All Other Miscellaneous Schools and Instructi
                                    </option>
                                    <option value="611710">
                                        611710 Educational Support Servic
                                    </option>
                                    <option value="621111">
                                        621111 Offices of Physicians (except Mental Health
                                        Specialist
                                    </option>
                                    <option value="621112">621112 Offices of Physicia</option>
                                    <option value="621210">621210 Offices of Dentis</option>
                                    <option value="621310">621310 Offices of Chiropracto</option>
                                    <option value="621320">621320 Offices of Optometris</option>
                                    <option value="621330">
                                        621330 Offices of Mental Health Practitioners (except
                                        Physician
                                    </option>
                                    <option value="621340">621340 Offices of Physic</option>
                                    <option value="621391">621391 Offices of Podiatris</option>
                                    <option value="621399">
                                        621399 Offices of All Other Miscellaneous Health Practitione
                                    </option>
                                    <option value="621410">621410 Family Planning Cente</option>
                                    <option value="621420">
                                        621420 Outpatient Mental Health and Substance Abuse Cente
                                    </option>
                                    <option value="621491">621491 HMO Medical Cente</option>
                                    <option value="621492">621492 Kidney Dialysis Cente</option>
                                    <option value="621493">
                                        621493 Freestanding Ambulatory Surgical and Emergency Cente
                                    </option>
                                    <option value="621498">
                                        621498 All Other Outpatient Care Cente
                                    </option>
                                    <option value="621511">621511 Medical Laboratori</option>
                                    <option value="621512">
                                        621512 Diagnostic Imaging Cente
                                    </option>
                                    <option value="621610">621610 Home Health Care Servic</option>
                                    <option value="621910">621910 Ambulance Servic</option>
                                    <option value="621991">621991 Blood and Organ Ban</option>
                                    <option value="621999">
                                        621999 All Other Miscellaneous Ambulatory Health Care Servic
                                    </option>
                                    <option value="622110">
                                        622110 General Medical and Surgical Hospita
                                    </option>
                                    <option value="622210">
                                        622210 Psychiatric and Substance Abuse Hospita
                                    </option>
                                    <option value="622310">
                                        622310 Specialty (except Psychiatric and Substance Abuse)
                                        Hospita
                                    </option>
                                    <option value="623110">623110 Nursing Care Faciliti</option>
                                    <option value="623210">
                                        623210 Residential Mental Retardation Faciliti
                                    </option>
                                    <option value="623220">
                                        623220 Residential Mental Health and Substance Abuse
                                        Faciliti
                                    </option>
                                    <option value="623311">
                                        623311 Continuing Care Retirement Communitie
                                    </option>
                                    <option value="623312">623312 Homes for the Elder</option>
                                    <option value="623990">
                                        623990 Other Residential Care Faciliti
                                    </option>
                                    <option value="624110">624110 Child and Youth Servic</option>
                                    <option value="624120">
                                        624120 Services for the Elderly and Persons with Disabiliti
                                    </option>
                                    <option value="624190">
                                        624190 Other Individual and Family Servic
                                    </option>
                                    <option value="624210">624210 Community Food Servic</option>
                                    <option value="624221">624221 Temporary Shelte</option>
                                    <option value="624229">
                                        624229 Other Community Housing Servic
                                    </option>
                                    <option value="624230">
                                        624230 Emergency and Other Relief Servic
                                    </option>
                                    <option value="624310">
                                        624310 Vocational Rehabilitation Servic
                                    </option>
                                    <option value="624410">624410 Child Day Care Servic</option>
                                    <option value="711110">
                                        711110 Theater Companies and Dinner Theate
                                    </option>
                                    <option value="711120">711120 Dance Compani</option>
                                    <option value="711130">
                                        711130 Musical Groups and Artis
                                    </option>
                                    <option value="711190">
                                        711190 Other Performing Arts Compani
                                    </option>
                                    <option value="711211">711211 Sports Teams and Clu</option>
                                    <option value="711212">711212 Racetrac</option>
                                    <option value="711219">711219 Other Spectator Spor</option>
                                    <option value="711310">
                                        711310 Promoters of Performing Ar
                                    </option>
                                    <option value="711320">
                                        711320 Promoters of Performing Ar
                                    </option>
                                    <option value="711410">
                                        711410 Agents and Managers for Artis
                                    </option>
                                    <option value="711510">711510 Independent Artis</option>
                                    <option value="712110">712110 Museu</option>
                                    <option value="712120">712120 Historical Sit</option>
                                    <option value="712130">
                                        712130 Zoos and Botanical Garde
                                    </option>
                                    <option value="712190">
                                        712190 Nature Parks and Other Similar Institutio
                                    </option>
                                    <option value="713110">713110 Amusement and Theme Par</option>
                                    <option value="713120">713120 Amusement Arcad</option>
                                    <option value="713210">
                                        713210 Casinos (except Casino Hotel
                                    </option>
                                    <option value="713290">713290 Other Gambling Industri</option>
                                    <option value="713910">
                                        713910 Golf Courses and Country Clu
                                    </option>
                                    <option value="713920">713920 Skiing Faciliti</option>
                                    <option value="713930">713930 Marin</option>
                                    <option value="713940">
                                        713940 Fitness and Recreational Sports Cente
                                    </option>
                                    <option value="713950">713950 Bowling Cente</option>
                                    <option value="713990">
                                        713990 All Other Amusement and Recreation Industri
                                    </option>
                                    <option value="721110">
                                        721110 Hotels (except Casino Hotels) and Mote
                                    </option>
                                    <option value="721120">721120 Casino Hote</option>
                                    <option value="721191">721191 Bed-and-Breakfast In</option>
                                    <option value="721199">
                                        721199 All Other Traveler Accommodati
                                    </option>
                                    <option value="721211">
                                        721211 RV (Recreational Vehicle) Parks and Campgroun
                                    </option>
                                    <option value="721214">
                                        721214 Recreational and Vacation Camps (except Campground
                                    </option>
                                    <option value="721310">
                                        721310 Rooming and Boarding Hous
                                    </option>
                                    <option value="722110">722110 Full-Service Restauran</option>
                                    <option value="722211">
                                        722211 Limited-Service Restauran
                                    </option>
                                    <option value="722212">722212 Cafeteri</option>
                                    <option value="722213">
                                        722213 Snack and Nonalcoholic Beverage Ba
                                    </option>
                                    <option value="722310">722310 Food Service Contracto</option>
                                    <option value="722320">722320 Catere</option>
                                    <option value="722330">722330 Mobile Food Servic</option>
                                    <option value="722410">
                                        722410 Drinking Places (Alcoholic Beverage
                                    </option>
                                    <option value="811111">811111 General Automotive Repa</option>
                                    <option value="811112">
                                        811112 Automotive Exhaust System Repa
                                    </option>
                                    <option value="811113">
                                        811113 Automotive Transmission Repa
                                    </option>
                                    <option value="811118">
                                        811118 Other Automotive Mechanical and Electrical Repair and
                                        Maintenan
                                    </option>
                                    <option value="811121">811121 Automotive Bo</option>
                                    <option value="811122">
                                        811122 Automotive Glass Replacement Sho
                                    </option>
                                    <option value="811191">
                                        811191 Automotive Oil Change and Lubrication Sho
                                    </option>
                                    <option value="811192">811192 Car Wash</option>
                                    <option value="811198">
                                        811198 All Other Automotive Repair and Maintenan
                                    </option>
                                    <option value="811211">
                                        811211 Consumer Electronics Repair and Maintenan
                                    </option>
                                    <option value="811212">
                                        811212 Computer and Office Machine Repair and Maintenan
                                    </option>
                                    <option value="811213">
                                        811213 Communication Equipment Repair and Maintenan
                                    </option>
                                    <option value="811219">
                                        811219 Other Electronic and Precision Equipment Repair and
                                        Maintenan
                                    </option>
                                    <option value="811310">
                                        811310 Commercial and Industrial Machinery and Equipment
                                        (except Automotive and Electronic) Repair and Maintenan
                                    </option>
                                    <option value="811411">
                                        811411 Home and Garden Equipment Repair and Maintenan
                                    </option>
                                    <option value="811412">
                                        811412 Appliance Repair and Maintenan
                                    </option>
                                    <option value="811420">
                                        811420 Reupholstery and Furniture Repa
                                    </option>
                                    <option value="811430">
                                        811430 Footwear and Leather Goods Repa
                                    </option>
                                    <option value="811490">
                                        811490 Other Personal and Household Goods Repair and
                                        Maintenan
                                    </option>
                                    <option value="812111">812111 Barber Sho</option>
                                    <option value="812112">812112 Beauty Salo</option>
                                    <option value="812113">812113 Nail Salo</option>
                                    <option value="812191">
                                        812191 Diet and Weight Reducing Cente
                                    </option>
                                    <option value="812199">
                                        812199 Other Personal Care Servic
                                    </option>
                                    <option value="812210">
                                        812210 Funeral Homes and Funeral Servic
                                    </option>
                                    <option value="812220">
                                        812220 Cemeteries and Crematori
                                    </option>
                                    <option value="812310">
                                        812310 Coin-Operated Laundries and Drycleane
                                    </option>
                                    <option value="812320">
                                        812320 Drycleaning and Laundry Services (except Coin-Operate
                                    </option>
                                    <option value="812331">812331 Linen Supp</option>
                                    <option value="812332">812332 Industrial Laundere</option>
                                    <option value="812910">
                                        812910 Pet Care (except Veterinary) Servic
                                    </option>
                                    <option value="812921">
                                        812921 Photofinishing Laboratories (except One-Hou
                                    </option>
                                    <option value="812922">812922 One-Hour Photofinishi</option>
                                    <option value="812930">812930 Parking Lots and Garag</option>
                                    <option value="812990">
                                        812990 All Other Personal Servic
                                    </option>
                                    <option value="813110">813110 Religious Organizatio</option>
                                    <option value="813211">813211 Grantmaking Foundatio</option>
                                    <option value="813212">
                                        813212 Voluntary Health Organizatio
                                    </option>
                                    <option value="813219">
                                        813219 Other Grantmaking and Giving Servic
                                    </option>
                                    <option value="813311">
                                        813311 Human Rights Organizatio
                                    </option>
                                    <option value="813312">813312 Environme</option>
                                    <option value="813319">
                                        813319 Other Social Advocacy Organizatio
                                    </option>
                                    <option value="813410">
                                        813410 Civic and Social Organizatio
                                    </option>
                                    <option value="813910">813910 Business Associatio</option>
                                    <option value="813920">
                                        813920 Professional Organizatio
                                    </option>
                                    <option value="813930">
                                        813930 Labor Unions and Similar Labor Organizatio
                                    </option>
                                    <option value="813940">813940 Political Organizatio</option>
                                    <option value="813990">
                                        813990 Other Similar Organizations (except Busine
                                    </option>
                                    <option value="814110">814110 Private Househol</option>
                                    <option value="921110">921110 Executive Offic</option>
                                    <option value="921120">921120 Legislative Bodi</option>
                                    <option value="921130">921130 Public Finance Activiti</option>
                                    <option value="921140">
                                        921140 Executive and Legislative Offic
                                    </option>
                                    <option value="921150">
                                        921150 American Indian and Alaska Native Tribal Governmen
                                    </option>
                                    <option value="921190">
                                        921190 Other General Government Suppo
                                    </option>
                                    <option value="922110">922110 Cour</option>
                                    <option value="922120">922120 Police Protecti</option>
                                    <option value="922130">
                                        922130 Legal Counsel and Prosecuti
                                    </option>
                                    <option value="922140">922140 Correctional Institutio</option>
                                    <option value="922150">
                                        922150 Parole Offices and Probation Offic
                                    </option>
                                    <option value="922160">922160 Fire Protecti</option>
                                    <option value="922190">922190 All Other Justi</option>
                                    <option value="923110">
                                        923110 Administration of Education Progra
                                    </option>
                                    <option value="923120">
                                        923120 Administration of Public Health Progra
                                    </option>
                                    <option value="923130">
                                        923130 Administration of Human Resource Programs (except
                                        Educati
                                    </option>
                                    <option value="923140">
                                        923140 Administration of Veteran's Affai
                                    </option>
                                    <option value="924110">
                                        924110 Administration of Air and Water Resource and Solid
                                        Waste Management Progra
                                    </option>
                                    <option value="924120">
                                        924120 Administration of Conservation Progra
                                    </option>
                                    <option value="925110">
                                        925110 Administration of Housing Progra
                                    </option>
                                    <option value="925120">
                                        925120 Administration of Urban Planning and Community and
                                        Rural Developme
                                    </option>
                                    <option value="926110">
                                        926110 Administration of General Economic Progra
                                    </option>
                                    <option value="926120">
                                        926120 Regulation and Administration of Transportation
                                        Progra
                                    </option>
                                    <option value="926130">
                                        926130 Regulation and Administration of Communicatio
                                    </option>
                                    <option value="926140">
                                        926140 Regulation of Agricultural Marketing and Commoditi
                                    </option>
                                    <option value="926150">926150 Regulati</option>
                                    <option value="927110">
                                        927110 Space Research and Technolo
                                    </option>
                                    <option value="928110">928110 National Securi</option>
                                    <option value="928120">928120 International Affai</option>
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
                <hr />
                <fieldset>
                    <legend>NAICS Query Option lll:</legend>
                    <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                        <tbody>
                        <tr>
                            <td align="left">
                                <b>
                                    NAICS Codes are often assigned by ranges for different types
                                    of business within an Industry.
                                    <br />
                                    you may also enter a Range of NAICS to obtain all type of
                                    Business.
                                </b>
                                <br />
                                <br />
                                <b>
                                    {" "}
                                    For Example: If you select 57000, you will get all codes
                                    between 57000 &amp; 57999.
                                    <br />
                                    To select multiple ranges, hold the control or shift key down
                                    to select another range.
                                </b>
                                <br />
                                <Link to="/database-emailer/sictonaciscodes">
                                    SIC to NAICS Code Relations
                                </Link>
                            </td>
                            <td align="center">
                                <b>Select a Range(s) of NAICS Codes:</b>
                                <br />
                                <label htmlFor="txtNAICSLower">Lower NAICS Code: </label>{" "}
                                <input onChange={handleTextChange}
                                    type="text"
                                    name="txtNAICSLower"
                                    id="txtNAICSLower"
                                    maxLength="8"
                                    size="6"
                                    
                                    placeholder="Lower NAICS Code"
                                />
                                | <label htmlFor="txtNAICSHigher">Higher NAICS Code: </label>{" "}
                                <input onChange={handleTextChange}
                                    type="text"
                                    name="txtNAICSHigher"
                                    id="txtNAICSHigher"
                                    maxLength="8"
                                    size="6"
                                    
                                    placeholder="Higher NAICS Code"
                                />
                                <hr />
                                Or Use this Box Below:
                                <br />
                                <select
                                    name="selNaicsCodeRange[]"
                                    id="selNaicsCodeRange"
                                    size="8"
                                    multiple="multiple"
                                    style={{ width: "90%" }}
                                    onChange={handleChange}
                                >
                                    <option
                                        style={{
                                            color: "#FFF",
                                            backgroundColor: "blue",
                                            fontSize: "11pt",
                                        }}
                                        value=""
                                    >
                                        -- Select a Range, Hold Shift or Control Key for Multiple
                                        Choices --
                                    </option>
                                    <option value="10">100000 - 109999</option>
                                    <option value="11">110000 - 119999</option>
                                    <option value="12">120000 - 129999</option>
                                    <option value="13">130000 - 139999</option>
                                    <option value="14">140000 - 149999</option>
                                    <option value="15">150000 - 159999</option>
                                    <option value="16">160000 - 169999</option>
                                    <option value="17">170000 - 179999</option>
                                    <option value="18">180000 - 189999</option>
                                    <option value="19">190000 - 199999</option>
                                    <option value="20">200000 - 209999</option>
                                    <option value="21">210000 - 219999</option>
                                    <option value="22">220000 - 229999</option>
                                    <option value="23">230000 - 239999</option>
                                    <option value="24">240000 - 249999</option>
                                    <option value="25">250000 - 259999</option>
                                    <option value="26">260000 - 269999</option>
                                    <option value="27">270000 - 279999</option>
                                    <option value="28">280000 - 289999</option>
                                    <option value="29">290000 - 299999</option>
                                    <option value="30">300000 - 309999</option>
                                    <option value="31">310000 - 319999</option>
                                    <option value="32">320000 - 329999</option>
                                    <option value="33">330000 - 339999</option>
                                    <option value="34">340000 - 349999</option>
                                    <option value="35">350000 - 359999</option>
                                    <option value="36">360000 - 369999</option>
                                    <option value="37">370000 - 379999</option>
                                    <option value="38">380000 - 389999</option>
                                    <option value="39">390000 - 399999</option>
                                    <option value="40">400000 - 409999</option>
                                    <option value="41">410000 - 419999</option>
                                    <option value="42">420000 - 429999</option>
                                    <option value="43">430000 - 439999</option>
                                    <option value="44">440000 - 449999</option>
                                    <option value="45">450000 - 459999</option>
                                    <option value="46">460000 - 469999</option>
                                    <option value="47">470000 - 479999</option>
                                    <option value="48">480000 - 489999</option>
                                    <option value="49">490000 - 499999</option>
                                    <option value="50">500000 - 509999</option>
                                    <option value="51">510000 - 519999</option>
                                    <option value="52">520000 - 529999</option>
                                    <option value="53">530000 - 539999</option>
                                    <option value="54">540000 - 549999</option>
                                    <option value="55">550000 - 559999</option>
                                    <option value="56">560000 - 569999</option>
                                    <option value="57">570000 - 579999</option>
                                    <option value="58">580000 - 589999</option>
                                    <option value="59">590000 - 599999</option>
                                    <option value="60">600000 - 609999</option>
                                    <option value="61">610000 - 619999</option>
                                    <option value="62">620000 - 629999</option>
                                    <option value="63">630000 - 639999</option>
                                    <option value="64">640000 - 649999</option>
                                    <option value="65">650000 - 659999</option>
                                    <option value="66">660000 - 669999</option>
                                    <option value="67">670000 - 679999</option>
                                    <option value="68">680000 - 689999</option>
                                    <option value="69">690000 - 699999</option>
                                    <option value="70">700000 - 709999</option>
                                    <option value="71">710000 - 719999</option>
                                    <option value="72">720000 - 729999</option>
                                    <option value="73">730000 - 739999</option>
                                    <option value="74">740000 - 749999</option>
                                    <option value="75">750000 - 759999</option>
                                    <option value="76">760000 - 769999</option>
                                    <option value="77">770000 - 779999</option>
                                    <option value="78">780000 - 789999</option>
                                    <option value="79">790000 - 799999</option>
                                    <option value="80">800000 - 809999</option>
                                    <option value="81">810000 - 819999</option>
                                    <option value="82">820000 - 829999</option>
                                    <option value="83">830000 - 839999</option>
                                    <option value="84">840000 - 849999</option>
                                    <option value="85">850000 - 859999</option>
                                    <option value="86">860000 - 869999</option>
                                    <option value="87">870000 - 879999</option>
                                    <option value="88">880000 - 889999</option>
                                    <option value="89">890000 - 899999</option>
                                    <option value="90">900000 - 909999</option>
                                    <option value="91">910000 - 919999</option>
                                    <option value="92">920000 - 929999</option>
                                    <option value="93">930000 - 939999</option>
                                    <option value="94">940000 - 949999</option>
                                    <option value="95">950000 - 959999</option>
                                    <option value="96">960000 - 969999</option>
                                    <option value="97">970000 - 979999</option>
                                    <option value="98">980000 - 989999</option>
                                    <option value="99">990000 - 999999</option>
                                    <option
                                        style={{
                                            color: "#FFF",
                                            backgroundColor: "blue",
                                            fontSize: "11pt",
                                        }}
                                        value=""
                                    >
                                        -- Select a Range --
                                    </option>
                                </select>
                                <h4>
                                    If you want all the ranges, then check the "Only Businesses
                                    with NAICS Codes" Box Below
                                </h4>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
                <hr />
                <fieldset id="NAICS_CODES_ONLY">
                    <legend>NAICS Query Option lV:</legend>
                    <table cellPadding="0" cellSpacing="0" width="90%">
                        <tbody>
                        <tr>
                            <td align="left" colSpan="2">
                                <span className="twefont" style={{ fontSize: "11pt" }}>
                                    To Select Only Those Businesses That Have a NAICS Code
                                    Assigned to Them
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colSpan="2">
                                <label htmlFor="chkNAICS">
                                    <b>Select Only Businesses with NAICS Codes</b>
                                </label>
                                <input onChange={handleCheckChange}
                                    type="checkbox"
                                    name="chkNAICS"
                                    id="chkNAICS"
                                    value="1"
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
                <hr />
                <fieldset>
                    <legend>NAICS Query Option V:</legend>
                    <table cellPadding="0" cellSpacing="0" width="90%">
                        <tbody>
                        <tr>
                            <td align="left">
                                <b className="redtextbold2">NAICS Query Option V:</b>
                                <br />
                                <span className="twefont">
                                    Paste the contents of a file or string of NAICS codes here,
                                </span>
                                <br />
                                <b>
                                    NAICS codes can be separated by spaces or any non-numeric
                                    character like a comma. All non-numeric characters will be
                                    stripped out. Only the first 6 digits of each NAICS code are
                                    used
                                </b>
                                <br />
                                ex: 483111, 483112, 483113, 483114, 483211, 483212
                                <br />
                                <textarea
                                onChange={handleTextChange}
                                    name="taNAICS"
                                    id="taNAICS"
                                    style={{ height: "165px", width: "90%" }}
                                ></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </fieldset>
            </fieldset>
        </>
    );
};

export default NACIScodes;
