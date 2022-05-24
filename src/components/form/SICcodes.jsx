import React from "react";
import { useStateContext } from "../context/StateContext";
import { Link, useLocation } from "react-router-dom";

const SICcodes = () => {
    const location = useLocation()
    const {setSICcode, SICcode} = useStateContext()
    const handleChange = (e) =>{
        setSICcode({
            ...SICcode, [e.target.name] : e.target.value
        })
    } 
    return (
        <>
            <fieldset>
                <legend>
                    Search by "Standard Industrial Codes" (SICS Codes or SIC Codes)
                </legend>
                <div id="search_parameters">
                    <div
                        style={{
                            border: "2px solid #CCC",
                            color: "#111",
                            paddingtop: "5px",
                            paddingbottom: "0",
                            fontsize: "12px",
                            padding: "5px",
                        }}
                        className="tah11"
                    >
                        <h3>Search by "Standard Industrial Codes" (SIC) </h3>
                        <b>
                            {" "}
                            Bypass this entire SIC Codes / Business Industry Section if you
                            simply want to search business in ALL Industries.
                        </b>
                        <br />
                        <b>
                            It is recommended to search on either SIC or NAICS codes but not
                            both of them together. Matching NAICS codes will be added
                            automatically to your SIC Code search.
                        </b>
                    </div>
                    <label
                        htmlFor="chkNAICSfromSICS"
                        style={{ fontsize: "12pt", fontweight: "700" }}
                    >
                        Check This If You want the Corresponding NAICS Codes Included Too:
                    </label>
                    <input onChange={handleChange}
                        type="checkbox"
                        name="chkNAICSfromSICS"
                        id="chkNAICSfromSICS"
                        value="1"
                    />
                    <br />
                    <label
                        htmlFor="chkGroupBySIC"
                        style={{ fontsize: "12pt", fontweight: "700" }}
                    >
                        Check This If You have Multiple SIC Codes Where You Want the Results
                        Grouped:
                    </label>
                    <input onChange={handleChange}
                        type="checkbox"
                        name="chkGroupBySIC"
                        id="chkGroupBySIC"
                        value="1"
                    />
                    <hr />
                    <br />
                    <b>
                        List Of SIC Codes:
                        <a href="@" target="_blank" className="smallLink">
                            Click Here
                        </a>
                        <br />
                        SIC Codes In Excel Spreadsheet:
                        <a href="sic_codes.xls" target="_blank" className="smallLink">
                            Click Here
                        </a>
                        <br />
                        Compare Codes &amp; Search:
                        <Link to="/database-emailer/sictonaciscodes" >
                            SIC to NAICS Code Relations
                        </Link>
                    </b>
                    <br />
                    <hr />
                    <div align="center" className="divImportant">
                        <h3>5 Ways to Search for Business by Industry with SIC Codes</h3>
                    </div>
                    <fieldset>
                        <legend>SIC Query Option l:</legend>
                        <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                            <tbody>
                            <tr>
                                <td align="left">
                                    <b>
                                        
                                        Search through the Description of the Industry the Code is
                                        in.
                                        <br />
                                        Example: Insurance
                                        <br />
                                        This will find all SIC Codes that have insurance in their
                                        description field,
                                    </b>
                                    <br />
                                    <br />
                                    <div align="left">
                                        <b>Search on SICS Description: </b>&nbsp;
                                        <input onChange={handleChange}
                                            type="text"
                                            name="txtSICDescription"
                                            id="txtSICDescription"
                                            maxLength="256"
                                            size="20"
                                            
                                        />
                                        <br />
                                        <br />
                                        <input 
                                            type="submit"
                                            name="subSICDescription"
                                            id="subSICDescription"
                                            value="Search for SICS Based on Description"
                                            title="or alt-h"
                                           
                                        />
                                    </div>
                                </td>
                            </tr></tbody>
                        </table>
                    </fieldset>
                    <hr />
                    <fieldset>
                        <legend>SIC Query Option ll:</legend>
                        <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                            <tbody>
                            <tr>
                                <td align="left" id="selSics">
                                    <b>
                                        Click on the SIC Codes/Business Industry you desire.
                                        <br /> (Hold the Control key down to select more than one
                                        SIC Business Category)
                                    </b>
                                    <br />
                                    <br />
                                    <br />
                                    {
                                        location.pathname === "/checkbuisness" ? (
                                            <select
                                        onChange={handleChange}
                                        name="selSIC_codes[]"
                                        id="selSIC_codes"
                                        style={{ width: "90%" }}
                                        size="10"
                                        multiple="multiple"
                                    >
                                        <option
                                            style={{
                                                color: "#FFF",
                                                backgroundcolor: "blue",
                                                fontsize: "10pt",
                                            }}
                                            value=""
                                        >
                                            -- Select Some SIC Codes Below. Hold the Control key down
                                            to select more than one --
                                        </option>
                                        <option value="3291">
                                            3291 Abrasive Products (except steel wool with or without
                                            soap)
                                        </option>
                                        <option value="3291">
                                            3291 Abrasive Products (steel wool with or without soap)
                                        </option>
                                        <option value="6321">
                                            6321 Accident and Health Insurance (disability
                                            insurers-direct)
                                        </option>
                                        <option value="6321">
                                            6321 Accident and Health Insurance (health and medical
                                            insurers-direct)
                                        </option>
                                        <option value="6321">
                                            6321 Accident and Health Insurance (reinsurers)
                                        </option>
                                        <option value="6321">
                                            6321 Accident and Health Insurance (self insurers)
                                        </option>
                                        <option value="8721">
                                            8721 Accounting Auditing and Bookkeeping Services
                                            (auditing accountants)
                                        </option>
                                        <option value="8721">
                                            8721 Accounting Auditing and Bookkeeping Services (other
                                            accounting services)
                                        </option>
                                        <option value="8721">
                                            8721 Accounting Auditing and Bookkeeping Services (payroll
                                            services)
                                        </option>
                                        <option value="2891">2891 Adhesives and Sealant</option>
                                        <option value="7322">
                                            7322 Adjustment and Collection Service
                                        </option>
                                        <option value="9411">
                                            9411 Administration of Educational Program
                                        </option>
                                        <option value="9611">
                                            9611 Administration of General Economic Program
                                        </option>
                                        <option value="9531">
                                            9531 Administration of Housing Program
                                        </option>
                                        <option value="9431">
                                            9431 Administration of Public Health Program
                                        </option>
                                        <option value="9441">
                                            9441 Administration of Social Human Resource and Income
                                            Maintenance Program
                                        </option>
                                        <option value="9532">
                                            9532 Administration of Urban Planning and Community and
                                            Rural Developmen
                                        </option>
                                        <option value="9451">
                                            9451 Administration of Veterans Affairs Except Health and
                                            Insuranc
                                        </option>
                                        <option value="7319">
                                            7319 Advertising NEC (advertising materials distributor)
                                        </option>
                                        <option value="7319">
                                            7319 Advertising NEC (display advertising aerial
                                            advertising using special purpose aircraft such as blimps)
                                        </option>
                                        <option value="7319">
                                            7319 Advertising NEC (except media buying display
                                            advertising except outdoor; and advertising material
                                            distributors)
                                        </option>
                                        <option value="7319">
                                            7319 Advertising NEC (media buying services)
                                        </option>
                                        <option value="7319">
                                            7319 Advertising NEC (using general purpose aircraft for
                                            aerial advertising and a variety of other services)
                                        </option>
                                        <option value="7311">7311 Advertising Agencie</option>
                                        <option value="3563">3563 Air and Gas Compressor</option>
                                        <option value="9511">
                                            9511 Air and Water Resource and Solid Waste Managemen
                                        </option>
                                        <option value="4513">4513 Air Courier Service</option>
                                        <option value="4522">
                                            4522 Air Transportation Nonscheduled (air ambulance)
                                        </option>
                                        <option value="4522">
                                            4522 Air Transportation Nonscheduled (freight)
                                        </option>
                                        <option value="4522">
                                            4522 Air Transportation Nonscheduled (passenger)
                                        </option>
                                        <option value="4522">
                                            4522 Air Transportation Nonscheduled (sightseeing planes)
                                        </option>
                                        <option value="4522">
                                            4522 Air Transportation Nonscheduled (using general
                                            purpose aircraft for a variety of passenger freight
                                            courier and other uses)
                                        </option>
                                        <option value="4512">
                                            4512 Air Transportation Scheduled (freight)
                                        </option>
                                        <option value="4512">
                                            4512 Air Transportation Scheduled (passenger)
                                        </option>
                                        <option value="3585">
                                            3585 Air-Conditioning and Warm Air Heating Equipment and
                                            Commercial and Industrial Refrigeration Equipment (except
                                            motor vehicle air-conditioning)
                                        </option>
                                        <option value="3585">
                                            3585 Air-Conditioning and Warm Air Heating Equipment and
                                            Commercial and Industrial Refrigeration Equipment (motor
                                            vehicle air-conditioning)
                                        </option>
                                        <option value="3721">
                                            3721 Aircraft (except research and development not
                                            producing prototypes)
                                        </option>
                                        <option value="3721">
                                            3721 Aircraft (research and development not producing
                                            prototypes)
                                        </option>
                                        <option value="3724">
                                            3724 Aircraft Engines and Engine Parts (except research
                                            and development not producing prototypes)
                                        </option>
                                        <option value="3724">
                                            3724 Aircraft Engines and Engine Parts (research and
                                            development not producing prototypes)
                                        </option>
                                        <option value="3728">
                                            3728 Aircraft Parts and Auxiliary Equipment NEC (except
                                            fluid power aircraft subassemblies target drones and
                                            research and development not producing prototypes)
                                        </option>
                                        <option value="3728">
                                            3728 Aircraft Parts and Auxiliary Equipment NEC (fluid
                                            power aircraft subassemblies)
                                        </option>
                                        <option value="3728">
                                            3728 Aircraft Parts and Auxiliary Equipment NEC (research
                                            and development not producing prototypes)
                                        </option>
                                        <option value="3728">
                                            3728 Aircraft Parts and Auxiliary Equipment NEC (target
                                            drones)
                                        </option>
                                        <option value="4581">
                                            4581 Airports Flying Fields and Airport Terminal Services
                                            (air freight handling at airports hangar operations
                                            airport terminal services aircraft storage airports and
                                            flying fields)
                                        </option>
                                        <option value="4581">
                                            4581 Airports Flying Fields and Airport Terminal Services
                                            (aircraft servicing and repairing)
                                        </option>
                                        <option value="4581">
                                            4581 Airports Flying Fields and Airport Terminal Services
                                            (aircraft upholstery repair)
                                        </option>
                                        <option value="4581">
                                            4581 Airports Flying Fields and Airport Terminal Services
                                            (airplane cleaning and janitorial services)
                                        </option>
                                        <option value="4581">
                                            4581 Airports Flying Fields and Airport Terminal Services
                                            (private air traffic control)
                                        </option>
                                        <option value="2812">2812 Alkalies and Chlorin</option>
                                        <option value="3363">3363 Aluminum Die-Casting</option>
                                        <option value="3354">3354 Aluminum Extruded Product</option>
                                        <option value="3365">3365 Aluminum Foundrie</option>
                                        <option value="3355">
                                            3355 Aluminum Rolling and Drawing NE
                                        </option>
                                        <option value="3353">
                                            3353 Aluminum Sheet Plate and Foi
                                        </option>
                                        <option value="3483">
                                            3483 Ammunition Except for Small Arm
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (aerial
                                            tramways scenic and amusement)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (baseball
                                            basketball bowling gymnastic judo karate parachute scuba
                                            and skin diving skating ski swimming tennis and other
                                            sports instruction; and sports instructional schools and
                                            camps)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (bridge
                                            instruction yoga instruction and similar nonathletic
                                            instruction)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (canoe pleasure
                                            boats bicycles motorcycles moped go carts etc. rental)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (casinos except
                                            hotel casinos)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (caverns and
                                            miscellaneous commercial parks)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (charter
                                            fishing)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (circus
                                            companies and traveling carnival shows)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (except
                                            circuses traveling carnivals professional athletes caverns
                                            and other commercial parks skiing facilities casinos and
                                            other gambling operations nonmembership fitness and
                                            recreational sports centers sports instruction sports
                                            equipment rental ticket agencies charter fishing state
                                            fairs agriculture fairs county fairs operation of fishing
                                            lakes phrenologists services and amusement or scenic
                                            transport operations)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (lottery bingo
                                            bookie and other gambling operations)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (nonmembership
                                            fitness and recreational sports centers)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (phrenologists
                                            services)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (professional
                                            athletes)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (scenic
                                            transport operations land)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (skiing
                                            facilities)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (state fairs
                                            agriculture fairs and county fairs with facilities)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (state fairs
                                            agriculture fairs and county fairs without facilities)
                                        </option>
                                        <option value="7999">
                                            7999 Amusement and Recreation Services NEC (ticket
                                            agencies)
                                        </option>
                                        <option value="7996">7996 Amusement Park</option>
                                        <option value="2077">
                                            2077 Animal and Marine Fats and Oils (animal fats and oils)
                                        </option>
                                        <option value="2077">
                                            2077 Animal and Marine Fats and Oils (canned marine fats
                                            and oils)
                                        </option>
                                        <option value="2077">
                                            2077 Animal and Marine Fats and Oils (fresh and frozen
                                            marine fats and oils)
                                        </option>
                                        <option value="273">
                                            0273 Animal Aquaculture (except finfish and shellfish
                                            farms)
                                        </option>
                                        <option value="273">
                                            0273 Animal Aquaculture (finfish farms)
                                        </option>
                                        <option value="273">
                                            0273 Animal Aquaculture (shellfish farms)
                                        </option>
                                        <option value="279">
                                            0279 Animal Specialties NEC (apiculture)
                                        </option>
                                        <option value="279">
                                            0279 Animal Specialties NEC (except apiculture frog and
                                            alligator farms)
                                        </option>
                                        <option value="279">
                                            0279 Animal Specialties NEC (frog and alligator farms)
                                        </option>
                                        <option value="752">
                                            0752 Animal Specialty Services Except Veterinary (boarding
                                            and training horses (except race horses) animal semen
                                            banks and artificial insemination services for pets)
                                        </option>
                                        <option value="752">
                                            0752 Animal Specialty Services Except Veterinary (pet care
                                            services except veterinary)
                                        </option>
                                        <option value="1231">1231 Anthracite Minin</option>
                                        <option value="2389">
                                            2389 Apparel and Accessories NEC (accessories such as
                                            handkerchiefs arm bands cummerbunds suspenders etc. except
                                            contractors)
                                        </option>
                                        <option value="2389">
                                            2389 Apparel and Accessories NEC (apparel such as academic
                                            gowns clerical outerwear and band uniforms except)
                                            contractors
                                        </option>
                                        <option value="2389">
                                            2389 Apparel and Accessories NEC (garters and garter belts
                                            except contractors)
                                        </option>
                                        <option value="2389">
                                            2389 Apparel and Accessories NEC (men's and boys'
                                            contractors)
                                        </option>
                                        <option value="2389">
                                            2389 Apparel and Accessories NEC (women's girls' and
                                            infants' contractors)
                                        </option>
                                        <option value="2387">
                                            2387 Apparel Belts (except contractors)
                                        </option>
                                        <option value="2387">
                                            2387 Apparel Belts (men's and boys' contractors)
                                        </option>
                                        <option value="2387">
                                            2387 Apparel Belts (women's girls' and infants'
                                            contractors)
                                        </option>
                                        <option value="8422">
                                            8422 Arboreta and Botanical or Zoological Gardens (except
                                            nature parks and reserves)
                                        </option>
                                        <option value="8422">
                                            8422 Arboreta and Botanical or Zoological Gardens (nature
                                            parks and reserves)
                                        </option>
                                        <option value="3446">
                                            3446 Architectural and Ornamental Metal Wor
                                        </option>
                                        <option value="8712">8712 Architectural Service</option>
                                        <option value="7694">
                                            7694 Armature Rewinding Shops (remanufacturing)
                                        </option>
                                        <option value="7694">
                                            7694 Armature Rewinding Shops (repair)
                                        </option>
                                        <option value="4729">
                                            4729 Arrangement of Passenger Transportation NEC
                                            (arrangement of carpools and vanpools
                                        </option>
                                        <option value="4729">
                                            4729 Arrangement of Passenger Transportation NEC (except
                                            arrangement of vanpools and carpools
                                        </option>
                                        <option value="4731">
                                            4731 Arrangement of Transportation of Freight and Cargo
                                            (except freight rate auditors private mail centers and
                                            tariff consultants
                                        </option>
                                        <option value="4731">
                                            4731 Arrangement of Transportation of Freight and Cargo
                                            (freight rate-auditors and tariff consulting
                                        </option>
                                        <option value="3292">
                                            3292 Asbestos Products (asbestos brake linings and pads
                                        </option>
                                        <option value="3292">
                                            3292 Asbestos Products (asbestos clutch facings motor
                                            vehicle
                                        </option>
                                        <option value="3292">
                                            3292 Asbestos Products (except brake pads and linings
                                        </option>
                                        <option value="2952">2952 Asphalt Felts and Coating</option>
                                        <option value="2951">
                                            2951 Asphalt Paving Mixtures and Block
                                        </option>
                                        <option value="5531">
                                            5531 Auto and Home Supply Stores (auto supply stores
                                        </option>
                                        <option value="5531">
                                            5531 Auto and Home Supply Stores (other auto and home
                                            supply stores
                                        </option>
                                        <option value="5531">
                                            5531 Auto and Home Supply Stores (tires and tubes
                                        </option>
                                        <option value="3822">
                                            3822 Automatic Controls for Regulating Residential and
                                            Commercial Environments and Appliance
                                        </option>
                                        <option value="5962">
                                            5962 Automatic Merchandise Machine Operator
                                        </option>
                                        <option value="3581">3581 Automatic Vending Machine</option>
                                        <option value="7521">7521 Automobile Parkin</option>
                                        <option value="5012">
                                            5012 Automobiles and Other Motor Vehicles (agents and
                                            brokers
                                        </option>
                                        <option value="5012">
                                            5012 Automobiles and Other Motor Vehicles (business to
                                            business electronic markets
                                        </option>
                                        <option value="5012">
                                            5012 Automobiles and Other Motor Vehicles (merchant
                                            wholesalers
                                        </option>
                                        <option value="5599">5599 Automotive Dealers NE</option>
                                        <option value="7533">
                                            7533 Automotive Exhaust System Repair Shop
                                        </option>
                                        <option value="7536">
                                            7536 Automotive Glass Replacement Shop
                                        </option>
                                        <option value="7539">
                                            7539 Automotive Repair Shops NEC (automotive
                                            air-conditioning repair
                                        </option>
                                        <option value="7539">
                                            7539 Automotive Repair Shops NEC (except automotive
                                            air-conditioning repair
                                        </option>
                                        <option value="7549">
                                            7549 Automotive Services Except Repair and Carwashes
                                            (automotive window tinting
                                        </option>
                                        <option value="7549">
                                            7549 Automotive Services Except Repair and Carwashes
                                            (except automotive lubricating automotive window tinting
                                            and towing services
                                        </option>
                                        <option value="7549">
                                            7549 Automotive Services Except Repair and Carwashes
                                            (lubricating service automotive
                                        </option>
                                        <option value="7549">
                                            7549 Automotive Services Except Repair and Carwashes
                                            (towing
                                        </option>
                                        <option value="3465">3465 Automotive Stamping</option>
                                        <option value="7537">
                                            7537 Automotive Transmission Repair Shop
                                        </option>
                                        <option value="2396">
                                            2396 Automotive Trimmings Apparel Findings and Related
                                            Products (apparel findings and trimmings except
                                            contractors
                                        </option>
                                        <option value="2396">
                                            2396 Automotive Trimmings Apparel Findings and Related
                                            Products (men's and boys' contractors
                                        </option>
                                        <option value="2396">
                                            2396 Automotive Trimmings Apparel Findings and Related
                                            Products (printing and embossing on fabric articles
                                        </option>
                                        <option value="2396">
                                            2396 Automotive Trimmings Apparel Findings and Related
                                            Products (textile motor vehicle trimming except
                                            contractors
                                        </option>
                                        <option value="2396">
                                            2396 Automotive Trimmings Apparel Findings and Related
                                            Products (textile products except automotive and apparel
                                            trimmings and findings printing or embossing on apparel
                                            and contractors
                                        </option>
                                        <option value="2396">
                                            2396 Automotive Trimmings Apparel Findings and Related
                                            Products (women's girls' and infants' contractors
                                        </option>
                                        <option value="3562">3562 Ball and Roller Bearing</option>
                                        <option value="7929">
                                            7929 Bands Orchestras Actors and Entertainment Groups
                                            (except musical groups musical artists orchestras actors
                                            and actresses
                                        </option>
                                        <option value="7929">
                                            7929 Bands Orchestras Actors and Other Entertainers and
                                            Entertainment Groups (actors and actresses
                                        </option>
                                        <option value="7929">
                                            7929 Bands Orchestras Actors and Other Entertainers
                                            Entertainment Groups (musical groups musical artists and
                                            orchestras
                                        </option>
                                        <option value="7241">
                                            7241 Barber Shops (barber colleges
                                        </option>
                                        <option value="7241">
                                            7241 Barber Shops (except barber colleges
                                        </option>
                                        <option value="7231">
                                            7231 Beauty Shops (beauty and cosmetology schools
                                        </option>
                                        <option value="7231">
                                            7231 Beauty Shops (except beauty and cosmetology schools
                                            and manicure and pedicure salons
                                        </option>
                                        <option value="7231">
                                            7231 Beauty Shops (manicure and pedicure salons
                                        </option>
                                        <option value="212">0212 Beef Cattle Except Feedlot</option>
                                        <option value="211">0211 Beef Cattle Feedlot</option>
                                        <option value="5181">
                                            5181 Beer and Ale (agents and brokers
                                        </option>
                                        <option value="5181">
                                            5181 Beer and Ale (beer and ale sold via retail method
                                        </option>
                                        <option value="5181">
                                            5181 Beer and Ale (business to business electronic markets
                                        </option>
                                        <option value="5181">
                                            5181 Beer and Ale (merchant wholesalers except those
                                            selling beer and ale via retail method
                                        </option>
                                        <option value="2063">2063 Beet Suga</option>
                                        <option value="171">
                                            0171 Berry Crops ( except strawberry farms
                                        </option>
                                        <option value="171">
                                            0171 Berry Crops (strawberry farms
                                        </option>
                                        <option value="2836">
                                            2836 Biological Products Except Diagnostic Substance
                                        </option>
                                        <option value="1221">
                                            1221 Bituminous Coal and Lignite Surface Minin
                                        </option>
                                        <option value="1222">
                                            1222 Bituminous Coal Underground Minin
                                        </option>
                                        <option value="2782">
                                            2782 Blankbooks Looseleaf Binders and Devices (checkbooks
                                        </option>
                                        <option value="2782">
                                            2782 Blankbooks Looseleaf Binders and Devices (except
                                            checkbooks
                                        </option>
                                        <option value="3732">
                                            3732 Boat Building and Repairing (boat building
                                        </option>
                                        <option value="3732">
                                            3732 Boat Building and Repairing (pleasure boat repair
                                        </option>
                                        <option value="5551">5551 Boat Dealers</option>
                                        <option value="3452">
                                            3452 Bolts Nuts Screws Rivets and Washer
                                        </option>
                                        <option value="2732">2732 Book Printin</option>
                                        <option value="5942">5942 Book Store</option>
                                        <option value="2789">
                                            2789 Bookbinding and Related Wor
                                        </option>
                                        <option value="5192">
                                            5192 Books Periodicals and Newspapers (agents and brokers
                                        </option>
                                        <option value="5192">
                                            5192 Books Periodicals and Newspapers (business to
                                            business electronic markets
                                        </option>
                                        <option value="5192">
                                            5192 Books Periodicals and Newspapers (merchant
                                            wholesalers except those selling publications via retail
                                            method
                                        </option>
                                        <option value="5192">
                                            5192 Books Periodicals and Newspapers (sold via retail
                                            method
                                        </option>
                                        <option value="2731">
                                            2731 Books: Publishing or Publishing and Printing (except
                                            music books and Internet book publishing
                                        </option>
                                        <option value="2731">
                                            2731 Books: Publishing or Publishing and Printing
                                            (Internet book publishing
                                        </option>
                                        <option value="2731">
                                            2731 Books: Publishing or Publishing and Printing (music
                                            books
                                        </option>
                                        <option value="3131">
                                            3131 Boot and Shoe Cut Stock and Findings (except wood
                                            heels and metal buckles
                                        </option>
                                        <option value="3131">
                                            3131 Boot and Shoe Cut Stock and Findings (metal buckles
                                        </option>
                                        <option value="3131">
                                            3131 Boot and Shoe Cut Stock and Findings (wood heels
                                        </option>
                                        <option value="2086">
                                            2086 Bottled and Canned Soft Drinks and Carbonated Water
                                            (bottled water
                                        </option>
                                        <option value="2086">
                                            2086 Bottled and Canned Soft Drinks and Carbonated Water
                                            (except bottled water
                                        </option>
                                        <option value="7933">7933 Bowling Center</option>
                                        <option value="6081">
                                            6081 Branches and Agencies of Foreign Banks (agencies
                                            except international trade financing
                                        </option>
                                        <option value="6081">
                                            6081 Branches and Agencies of Foreign Banks (branches
                                        </option>
                                        <option value="6081">
                                            6081 Branches and Agencies of Foreign Banks (international
                                            trade financing
                                        </option>
                                        <option value="2342">
                                            2342 Brassieres Girdles and Allied Garments (contractors
                                        </option>
                                        <option value="2342">
                                            2342 Brassieres Girdles and Allied Garments (except
                                            contractors
                                        </option>
                                        <option value="2051">
                                            2051 Bread and Other Bakery Products Except Cookies and
                                            Cracker
                                        </option>
                                        <option value="5032">
                                            5032 Brick Stone and Related Construction Materials
                                            (agents and brokers
                                        </option>
                                        <option value="5032">
                                            5032 Brick Stone and Related Construction Materials
                                            (business to business electronic markets
                                        </option>
                                        <option value="5032">
                                            5032 Brick Stone and Related Construction Materials
                                            (merchant wholesalers except construction materials sold
                                            via retail method
                                        </option>
                                        <option value="5032">
                                            5032 Brick Stone and Related Construction Materials (brick
                                            stone and related construction materials sold via retail
                                            method
                                        </option>
                                        <option value="3251">
                                            3251 Brick and Structural Clay Tile (except slumped brick
                                        </option>
                                        <option value="3251">
                                            3251 Brick and Structural Clay Tile (slumped brick
                                        </option>
                                        <option value="1622">
                                            1622 Bridge Tunnel and Elevated Highway Construction
                                            (bridge and elevated highway construction)
                                        </option>
                                        <option value="1622">
                                            1622 Bridge Tunnel and Elevated Highway Construction
                                            (tunnel construction
                                        </option>
                                        <option value="2211">
                                            2211 Broadwoven Fabric Mills Cotto
                                        </option>
                                        <option value="2221">
                                            2221 Broadwoven Fabric Mills Manmade Fiber and Sil
                                        </option>
                                        <option value="2231">
                                            2231 Broadwoven Fabric Mills Wool (Including Dyeing and
                                            Finishing) (except finishing wool fabric without weaving
                                            wool fabric
                                        </option>
                                        <option value="2231">
                                            2231 Broadwoven Fabric Mills Wool (wool broadwoven fabric
                                            finishing without weaving fabric
                                        </option>
                                        <option value="2231">
                                            2231 Broadwoven Fabric Mills Wool (wool fabric except
                                            broadwoven finishing without weaving fabric
                                        </option>
                                        <option value="251">
                                            0251 Broiler Fryer and Roaster Chicken
                                        </option>
                                        <option value="3991">3991 Brooms and Brushe</option>
                                        <option value="7349">
                                            7349 Building Cleaning and Maintenance Services NEC
                                            (janitorial services
                                        </option>
                                        <option value="7349">
                                            7349 Building Cleaning and Maintenance Services NEC
                                            (services to buildings and dwellings except janitorial
                                            services
                                        </option>
                                        <option value="3995">3995 Burial Casket</option>
                                        <option value="4142">
                                            4142 Bus Charter Service Except Loca
                                        </option>
                                        <option value="8244">
                                            8244 Business and Secretarial School
                                        </option>
                                        <option value="8611">8611 Business Association</option>
                                        <option value="8748">
                                            8748 Business Consulting Services NEC (educational test
                                            development and evaluation services educational testing
                                            services and educational consultants
                                        </option>
                                        <option value="8748">
                                            8748 Business Consulting Services NEC (except educational
                                            testing and consulting economic consulting safety and
                                            security agriculture consulting environmental consulting
                                            firms urban planning and industrial development
                                            organizations
                                        </option>
                                        <option value="8748">
                                            8748 Business Consulting Services NEC (safety security
                                            agriculture and economic consultants
                                        </option>
                                        <option value="8748">
                                            8748 Business Consulting Services NEC (traffic consultants
                                        </option>
                                        <option value="8748">
                                            8748 Business Consulting Services NEC (urban planners and
                                            industrial development organizations
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (aerosol packaging solvent
                                            recovery service-contract
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (agents and brokers for authors
                                            and artists and speaker bureaus
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (apparel pressing service for
                                            the trade
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (audio taping services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (business support services
                                            except telephone answering telemarketing bureaus private
                                            mail centers and repossession services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (convention and trade show
                                            services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (convention and visitors
                                            bureaus tourist information bureaus
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (credit card and check
                                            validation service
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (distribution of telephone
                                            directories on a fee or contract basis
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (drafting service)
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (driving services e.g. auto or
                                            truck delivery and pilot car services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (embroidery of advertising on
                                            shirts and rug binding for the trade
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (fashion furniture and other
                                            design services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (home and building inspection
                                            services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (industrial design
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (interior design
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (map making services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (microfilm services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (other business service centers
                                            except private mail centers and mailbox rental
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (other support services except
                                            packaging and labeling convention and trade shows services
                                            convention and visitor bureaus tourist information bureaus
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (packaging and labeling
                                            services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (post office contract stations
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (press clipping services and
                                            stock photo agencies
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (private mail centers and
                                            mailbox rental
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (process services patent agents
                                            notaries public paralegal services{" "}
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (promoters of air shows
                                            heritage festivals and ethnic festivals with facilities
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (promoters of air shows
                                            heritage festivals and ethnic festivals without facilities
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (radio transcription services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (recording studios
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (recovery and repossession
                                            services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (reservation systems for hotels
                                            restaurants and time-share condominium exchanges
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (sign painting and lettering
                                            showcard painting mannequin decorating service and other
                                            advertising related business services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (sponging shrinking etc. fabric
                                            for tailors and dress makers batik work
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (swimming pool cleaning and
                                            maintenance
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (tax collection for federal
                                            state or local agencies
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (telemarketing bureaus and
                                            telephone soliciting
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (telephone answering services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (tobacco sheeting service
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (translation and interpretation
                                            services
                                        </option>
                                        <option value="7389">
                                            7389 Business Services NEC (yacht brokers
                                        </option>
                                        <option value="7389">
                                            7389 Business Services (appraisers except insurance and
                                            real estate outplacement services and miscellaneous
                                            professional scientific and technical services
                                        </option>
                                        <option value="4841">
                                            4841 Cable and Other Pay Television Services (cable
                                            networks
                                        </option>
                                        <option value="4841">
                                            4841 Cable and Other Pay Television Services (except cable
                                            and other subscription programming
                                        </option>
                                        <option value="3578">
                                            3578 Calculating and Accounting Machinery Except
                                            Electronic Computers (change making machines
                                        </option>
                                        <option value="3578">
                                            3578 Calculating and Accounting Machinery Except
                                            Electronic Computers (except point of sales terminals
                                            change making machines and funds transfer devices
                                        </option>
                                        <option value="3578">
                                            3578 Calculating and Accounting Machines Except Electronic
                                            Computers (point of sale terminals and fund transfer
                                            devices
                                        </option>
                                        <option value="5946">
                                            5946 Camera and Photographic Supply Store
                                        </option>
                                        <option value="5441">
                                            5441 Candy Nut and Confectionery Stores (chocolate candy
                                            stores preparing on premises
                                        </option>
                                        <option value="5441">
                                            5441 Candy Nut and Confectionery Stores (except stores
                                            preparing candy on premises
                                        </option>
                                        <option value="5441">
                                            5441 Candy Nut and Confectionery Stores (nonchocolate
                                            candy stores preparing on premises
                                        </option>
                                        <option value="2064">
                                            2064 Candy and Other Confectionery Products (chocolate
                                            confectionery
                                        </option>
                                        <option value="2064">
                                            2064 Candy and Other Confectionery Products (nonchocolate
                                            confectionery
                                        </option>
                                        <option value="2061">2061 Cane Sugar Except Refinin</option>
                                        <option value="2062">2062 Cane Sugar Refinin</option>
                                        <option value="2091">
                                            2091 Canned and Cured Fish and Seafood
                                        </option>
                                        <option value="2033">
                                            2033 Canned Fruits Vegetables Preserves Jams and Jellie
                                        </option>
                                        <option value="2032">
                                            2032 Canned Specialties (canned puddings
                                        </option>
                                        <option value="2032">
                                            2032 Canned Specialties (except canned puddings
                                        </option>
                                        <option value="2394">
                                            2394 Canvas and Related Product
                                        </option>
                                        <option value="3624">
                                            3624 Carbon and Graphite Products
                                        </option>
                                        <option value="2895">2895 Carbon Blac</option>
                                        <option value="3955">
                                            3955 Carbon Paper and Inked Ribbon
                                        </option>
                                        <option value="3592">
                                            3592 Carburetors Pistons Piston Rings and Valve
                                        </option>
                                        <option value="1751">
                                            1751 Carpentry Work (finish carpentry
                                        </option>
                                        <option value="1751">
                                            1751 Carpentry Work (framing carpentry
                                        </option>
                                        <option value="7217">
                                            7217 Carpet and Upholstery Cleanin
                                        </option>
                                        <option value="2273">2273 Carpets and Rug</option>
                                        <option value="7542">7542 Carwashe</option>
                                        <option value="119">
                                            0119 Cash Grains NEC (dry pea and bean farms
                                        </option>
                                        <option value="119">
                                            0119 Cash Grains NEC (except popcorn dry pea and bean
                                            oilseed (except soybean) and oilseed and grain combination
                                            farms
                                        </option>
                                        <option value="119">
                                            0119 Cash Grains NEC (oilseed and grain combination farms
                                        </option>
                                        <option value="119">
                                            0119 Cash Grains NEC (oilseed farming except soybeans
                                        </option>
                                        <option value="119">
                                            0119 Cash Grains NEC (popcorn farming
                                        </option>
                                        <option value="5961">
                                            5961 Catalog and Mail-Order Houses (electronic auctions
                                        </option>
                                        <option value="5961">
                                            5961 Catalog and Mail-Order Houses (electronic shopping
                                            web sites
                                        </option>
                                        <option value="5961">
                                            5961 Catalog and Mail-Order Houses (mail-order houses
                                        </option>
                                        <option value="2823">2823 Cellulosic Manmade Fiber</option>
                                        <option value="3241">3241 Cement Hydrauli</option>
                                        <option value="6553">
                                            6553 Cemetery Subdividers and Developer
                                        </option>
                                        <option value="6019">
                                            6019 Central Reserve Depository Institutions NE
                                        </option>
                                        <option value="3253">
                                            3253 Ceramic Wall and Floor Til
                                        </option>
                                        <option value="2043">
                                            2043 Cereal Breakfast Foods (cereal breakfast foods and
                                            related preparations except grain based coffee substitutes
                                        </option>
                                        <option value="2043">
                                            2043 Cereal Breakfast Foods (grain based coffee
                                            substitutes
                                        </option>
                                        <option value="1479">
                                            1479 Chemical and Fertilizer Mineral Mining NE
                                        </option>
                                        <option value="5169">
                                            5169 Chemicals and Allied Products NEC (agents and brokers
                                        </option>
                                        <option value="5169">
                                            5169 Chemicals and Allied Products NEC (business to
                                            business electronic markets
                                        </option>
                                        <option value="5169">
                                            5169 Chemicals and Allied Products NEC (merchant
                                            wholesalers
                                        </option>
                                        <option value="2899">
                                            2899 Chemicals and Chemical Preparations NEC (except frit
                                            fatty acids plastic wood fillers and table salt
                                        </option>
                                        <option value="2899">
                                            2899 Chemicals and Chemical Preparations NEC (fatty acids
                                        </option>
                                        <option value="2899">
                                            2899 Chemicals and Chemical Preparations NEC (frit and
                                            plastic wood fillers
                                        </option>
                                        <option value="2899">
                                            2899 Chemicals and Chemical Preparations NEC (table salt
                                        </option>
                                        <option value="2131">
                                            2131 Chewing and Smoking Tobacco and Snuf
                                        </option>
                                        <option value="2067">2067 Chewing Gu</option>
                                        <option value="252">0252 Chicken Egg</option>
                                        <option value="8351">8351 Child Day Care Service</option>
                                        <option value="5641">
                                            5641 Children's and Infants? Wear Store
                                        </option>
                                        <option value="2066">
                                            2066 Chocolate and Cocoa Products (chocolate products made
                                            from purchased chocolate
                                        </option>
                                        <option value="2066">
                                            2066 Chocolate and Cocoa Products (except chocolate
                                            products made from purchased chocolate
                                        </option>
                                        <option value="2111">2111 Cigarette</option>
                                        <option value="2121">2121 Cigar</option>
                                        <option value="174">
                                            0174 Citrus Fruits (except orange groves and farms
                                        </option>
                                        <option value="174">
                                            0174 Citrus Fruits (orange groves and farms
                                        </option>
                                        <option value="8641">
                                            8641 Civic Social and Fraternal Associations (condominium
                                            and homeowner associations
                                        </option>
                                        <option value="8641">
                                            8641 Civic Social and Fraternal Associations (except
                                            condominium and homeowner associations taxpayers
                                            associations tenants advocacy associations temperance
                                            organizations and Indian and Alaska Native Tribal Councils
                                        </option>
                                        <option value="8641">
                                            8641 Civic Social and Fraternal Associations (Indian and
                                            Alaska Native Tribal Councils
                                        </option>
                                        <option value="8641">
                                            8641 Civic Social and Fraternal Associations (taxpayers'
                                            associations tenants' advocacy associations temperance
                                            organizations
                                        </option>
                                        <option value="1459">
                                            1459 Clay Ceramic and Refractory Minerals NE
                                        </option>
                                        <option value="3255">3255 Clay Refractorie</option>
                                        <option value="5052">
                                            5052 Coal and Other Minerals and Ores (agents and brokers
                                        </option>
                                        <option value="5052">
                                            5052 Coal and Other Minerals and Ores (business to
                                            business electronic markets
                                        </option>
                                        <option value="5052">
                                            5052 Coal and Other Minerals and Ores (merchant
                                            wholesalers
                                        </option>
                                        <option value="1241">
                                            1241 Coal Mining Services (except site preparation and
                                            related construction activities on a contract basis
                                        </option>
                                        <option value="1241">
                                            1241 Coal Mining Services (site preparation and related
                                            construction activities on a contract basis
                                        </option>
                                        <option value="2672">
                                            2672 Coated and Laminated Paper NE
                                        </option>
                                        <option value="2295">
                                            2295 Coated Fabrics Not Rubberize
                                        </option>
                                        <option value="3479">
                                            3479 Coating Engraving and Allied Services NEC (costume
                                            jewelry engraving and etching
                                        </option>
                                        <option value="3479">
                                            3479 Coating Engraving and Allied Services NEC (except
                                            jewelry silverware and flatware engraving and etching
                                        </option>
                                        <option value="3479">
                                            3479 Coating Engraving and Allied Services NEC (precious
                                            metal jewelry engraving and etching
                                        </option>
                                        <option value="3479">
                                            3479 Coating Engraving and Allied Services NEC (silver and
                                            plated ware engraving and etching
                                        </option>
                                        <option value="7993">
                                            7993 Coin-Operated Amusement Devices (amusement arcades
                                        </option>
                                        <option value="7993">
                                            7993 Coin-Operated Amusement Devices (except amusement
                                            arcades and slot machine operators
                                        </option>
                                        <option value="7993">
                                            7993 Coin-Operated Amusement Devices (slot machine
                                            operators
                                        </option>
                                        <option value="7215">
                                            7215 Coin-Operated Laundry and Drycleaning
                                        </option>
                                        <option value="3316">
                                            3316 Cold-Rolled Steel Sheet Strip and Bar
                                        </option>
                                        <option value="8221">
                                            8221 Colleges Universities and Professional School
                                        </option>
                                        <option value="4939">
                                            4939 Combination Utilities NEC (electric power
                                            distribution
                                        </option>
                                        <option value="4939">
                                            4939 Combination Utilities NEC (electric power
                                            transmission and control)
                                        </option>
                                        <option value="4939">
                                            4939 Combination Utilities NEC (fossil fuel power
                                            generation
                                        </option>
                                        <option value="4939">
                                            4939 Combination Utilities NEC (hydroelectric power
                                            generation
                                        </option>
                                        <option value="4939">
                                            4939 Combination Utilities NEC (natural gas distribution
                                        </option>
                                        <option value="4939">
                                            4939 Combination Utilities NEC (nuclear power generation
                                        </option>
                                        <option value="4939">
                                            4939 Combination Utilities NEC (other electric power
                                            generation
                                        </option>
                                        <option value="3646">
                                            3646 Commercial Industrial and Institutional Electric
                                            Lighting Fixture
                                        </option>
                                        <option value="7336">
                                            7336 Commercial Art and Graphic Desig
                                        </option>
                                        <option value="6029">6029 Commercial Banks NEC</option>
                                        <option value="8732">
                                            8732 Commercial Economic Sociological and Educational
                                            Research (market research and opinion research
                                        </option>
                                        <option value="8732">
                                            8732 Commercial Economic Sociological and Educational
                                            Research (social sciences and humanities
                                        </option>
                                        <option value="5046">
                                            5046 Commercial Equipment NEC (agents and brokers
                                        </option>
                                        <option value="5046">
                                            5046 Commercial Equipment NEC (business to business
                                            electronic markets
                                        </option>
                                        <option value="5046">
                                            5046 Commercial Equipment NEC (merchant wholesalers
                                        </option>
                                        <option value="3582">
                                            3582 Commercial Laundry Drycleaning and Pressing Machine
                                        </option>
                                        <option value="7335">
                                            7335 Commercial Photography (except using general purpose
                                            aircraft for aerial photography and a variety of other
                                            services
                                        </option>
                                        <option value="7335">
                                            7335 Commercial Photography (using general purpose
                                            aircraft for aerial photography and a variety of other
                                            services
                                        </option>
                                        <option value="8731">
                                            8731 Commercial Physical and Biological Researc
                                        </option>
                                        <option value="2754">
                                            2754 Commercial Printing Gravur
                                        </option>
                                        <option value="2752">
                                            2752 Commercial Printing Lithographic (except quick
                                            printing
                                        </option>
                                        <option value="2752">
                                            2752 Commercial Printing Lithographic (quick printing
                                        </option>
                                        <option value="2759">
                                            2759 Commercial Printing NEC (digital printing except
                                            quick printing
                                        </option>
                                        <option value="2759">
                                            2759 Commercial Printing NEC (flexographic printing
                                        </option>
                                        <option value="2759">
                                            2759 Commercial Printing NEC (other commercial printing
                                            except flexographic screen digital and quick printing
                                        </option>
                                        <option value="2759">
                                            2759 Commercial Printing NEC (quick printing
                                        </option>
                                        <option value="2759">
                                            2759 Commercial Printing NEC (screen printing
                                        </option>
                                        <option value="6221">
                                            6221 Commodity Contracts Brokers and Dealers (commodity
                                            brokers
                                        </option>
                                        <option value="6221">
                                            6221 Commodity Contracts Brokers and Dealers (commodity
                                            dealers
                                        </option>
                                        <option value="3669">
                                            3669 Communications Equipment NE
                                        </option>
                                        <option value="4899">
                                            4899 Communications Services NEC (except ship to shore
                                            broadcasting satellite communications pay telephone
                                            concession operators
                                        </option>
                                        <option value="4899">
                                            4899 Communications Services NEC (pay telephone concession
                                            operators
                                        </option>
                                        <option value="4899">
                                            4899 Communications Services NEC (radio broadcasting
                                            operated by cab companies
                                        </option>
                                        <option value="4899">
                                            4899 Communications Services NEC (satellite communications
                                        </option>
                                        <option value="4899">
                                            4899 Communications Services NEC (ship to shore
                                            broadcasting carriers
                                        </option>
                                        <option value="5734">
                                            5734 Computer and Computer Software Store
                                        </option>
                                        <option value="7376">
                                            7376 Computer Facilities Management Service
                                        </option>
                                        <option value="7373">
                                            7373 Computer Integrated Systems Desig
                                        </option>
                                        <option value="7378">
                                            7378 Computer Maintenance and Repair (except sales
                                            locations providing supporting repair services as major
                                            source of revenue
                                        </option>
                                        <option value="7378">
                                            7378 Computer Maintenance and Repair (sales locations
                                            providing supporting repair services as major source of
                                            receipts
                                        </option>
                                        <option value="3577">
                                            3577 Computer Peripheral Equipment NEC (except plotter
                                            controllers and magnetic tape head cleaners
                                        </option>
                                        <option value="3577">
                                            3577 Computer Peripheral Equipment NEC (magnetic tape head
                                            cleaners
                                        </option>
                                        <option value="3577">
                                            3577 Computer Peripheral Equipment NEC (plotter
                                            controllers
                                        </option>
                                        <option value="7374">
                                            7374 Computer Processing and Data Preparation and
                                            Processing Service
                                        </option>
                                        <option value="7371">
                                            7371 Computer Programming Service
                                        </option>
                                        <option value="7379">
                                            7379 Computer Related Services NEC (computer systems
                                            consultants
                                        </option>
                                        <option value="7379">
                                            7379 Computer Related Services NEC (disk conversion
                                            services
                                        </option>
                                        <option value="7379">
                                            7379 Computer Related Services NEC (except computer
                                            systems consultants and disk conversion services
                                        </option>
                                        <option value="7377">
                                            7377 Computer Rental and Leasin
                                        </option>
                                        <option value="3572">3572 Computer Storage Device</option>
                                        <option value="3575">3575 Computer Terminal</option>
                                        <option value="5045">
                                            5045 Computers and Computer Peripheral Equipment and
                                            Software (agents and brokers
                                        </option>
                                        <option value="5045">
                                            5045 Computers and Computer Peripheral Equipment and
                                            Software (business to business electronic markets
                                        </option>
                                        <option value="5045">
                                            5045 Computers and Computer Peripheral Equipment and
                                            Software (computers peripherals and software sold via
                                            retail method
                                        </option>
                                        <option value="5045">
                                            5045 Computers and Computer Peripheral Equipment and
                                            Software (merchant wholesalers except those selling
                                            computers equipment and software via retail method
                                        </option>
                                        <option value="3271">3271 Concrete Block and Bric</option>
                                        <option value="3272">
                                            3272 Concrete Products Except Block and Brick (concrete
                                            pipe
                                        </option>
                                        <option value="3272">
                                            3272 Concrete Products Except Block and Brick (concrete
                                            products except dry mix concrete and pipe
                                        </option>
                                        <option value="3272">
                                            3272 Concrete Products Except Block and Brick (dry mixture
                                            concrete
                                        </option>
                                        <option value="1771">
                                            1771 Concrete Work (asphalt brick and concrete paving
                                        </option>
                                        <option value="1771">
                                            1771 Concrete Work (concrete work except stucco work and
                                            asphalt brick and paving
                                        </option>
                                        <option value="1771">
                                            1771 Concrete Work (stucco work
                                        </option>
                                        <option value="5145">
                                            5145 Confectionery (agents and brokers
                                        </option>
                                        <option value="5145">
                                            5145 Confectionery (business to business electronic
                                            markets
                                        </option>
                                        <option value="5145">
                                            5145 Confectionery (confectionery sold via retail method
                                        </option>
                                        <option value="5145">
                                            5145 Confectionery (merchant wholesalers except those
                                            selling confectionery via retail method
                                        </option>
                                        <option value="5082">
                                            5082 Construction and Mining (Except Petroleum) Machinery
                                            and Equipment (agents and brokers
                                        </option>
                                        <option value="5082">
                                            5082 Construction and Mining (Except Petroleum) Machinery
                                            and Equipment (business to business electronic markets
                                        </option>
                                        <option value="5082">
                                            5082 Construction and Mining (Except Petroleum) Machinery
                                            and Equipment (merchant wholesalers
                                        </option>
                                        <option value="3531">
                                            3531 Construction Machinery and Equipment (except railway
                                            track maintenance equipment; winches aerial work
                                            platforms; and automotive wrecker hoists
                                        </option>
                                        <option value="3531">
                                            3531 Construction Machinery and Equipment (railway track
                                            maintenance equipment
                                        </option>
                                        <option value="3531">
                                            3531 Construction Machinery and Equipment (winches aerial
                                            work platforms automobile wrecker hoists locomotive cranes
                                            and ship cranes
                                        </option>
                                        <option value="5039">
                                            5039 Construction Materials NEC (agents and brokers
                                        </option>
                                        <option value="5039">
                                            5039 Construction Materials NEC (business to business
                                            electronic markets
                                        </option>
                                        <option value="5039">
                                            5039 Construction Materials NEC (glass sold via retail
                                            method
                                        </option>
                                        <option value="5039">
                                            5039 Construction Materials NEC (merchant wholesalers of
                                            construction materials nec except wood prefabricated
                                            buildings and structural assemblies and merchant
                                            wholesalers selling via retail method
                                        </option>
                                        <option value="5039">
                                            5039 Construction Materials NEC (merchant wholesalers of
                                            prefabricated buildings and structural assemblies wood
                                        </option>
                                        <option value="1442">
                                            1442 Construction Sand and Grave
                                        </option>
                                        <option value="2679">
                                            2679 Converted Paper and Paperboard Products NEC ( except
                                            corrugated paper wall paper gift wrap paper paper supplies
                                            for business machines and other paper office supplies
                                        </option>
                                        <option value="2679">
                                            2679 Converted Paper and Paperboard Products NEC
                                            (corrugated paper
                                        </option>
                                        <option value="2679">
                                            2679 Converted Paper and Paperboard Products NEC (paper
                                            supplies for business machines such as adding machine tape
                                            and other paper office supplies
                                        </option>
                                        <option value="2679">
                                            2679 Converted Paper and Paperboard Products NEC
                                            (wallpaper and gift wrap paper
                                        </option>
                                        <option value="3535">
                                            3535 Conveyors and Conveying Equipmen
                                        </option>
                                        <option value="2052">
                                            2052 Cookies and Crackers (except unleavened bread and
                                            pretzels
                                        </option>
                                        <option value="2052">
                                            2052 Cookies and Crackers (hard pretzels and snack
                                            pretzels except soft
                                        </option>
                                        <option value="2052">
                                            2052 Cookies and Crackers (unleavened bread and soft
                                            pretzels
                                        </option>
                                        <option value="3366">3366 Copper Foundrie</option>
                                        <option value="1021">1021 Copper Ore</option>
                                        <option value="2298">
                                            2298 Cordage and Twine (except hemp rope made in spinning
                                            mills
                                        </option>
                                        <option value="2298">
                                            2298 Cordage and Twine (hemp rope made in spinning mills
                                        </option>
                                        <option value="115">0115 Cor</option>
                                        <option value="9223">9223 Correctional Institution</option>
                                        <option value="2653">
                                            2653 Corrugated and Solid Fiber Boxe
                                        </option>
                                        <option value="3961">
                                            3961 Costume Jewelry and Costume Novelties Except Precious
                                            Metal (except cuff links
                                        </option>
                                        <option value="3961">
                                            3961 Costume Jewelry and Costume Novelties Except Precious
                                            Metal (nonprecious cuff links
                                        </option>
                                        <option value="131">0131 Cotto</option>
                                        <option value="724">0724 Cotton Ginnin</option>
                                        <option value="2074">
                                            2074 Cottonseed Oil Mills (cottonseed processing
                                        </option>
                                        <option value="2074">
                                            2074 Cottonseed Oil Mills (processing purchased cottonseed
                                            oil
                                        </option>
                                        <option value="4215">
                                            4215 Courier Services Except by Air (hub and spoke
                                            intercity delivery
                                        </option>
                                        <option value="4215">
                                            4215 Courier Services Except by Air (local delivery
                                        </option>
                                        <option value="9211">9211 Court</option>
                                        <option value="2021">2021 Creamery Butte</option>
                                        <option value="7323">7323 Credit Reporting Service</option>
                                        <option value="6061">
                                            6061 Credit Unions Federally Chartere
                                        </option>
                                        <option value="6062">
                                            6062 Credit Unions Not Federally Chartere
                                        </option>
                                        <option value="722">
                                            0722 Crop Harvesting Primarily by Machin
                                        </option>
                                        <option value="721">
                                            0721 Crop Planting Cultivating and Protectin
                                        </option>
                                        <option value="723">
                                            0723 Crop Preparation Services for Market Except Cotton
                                            Ginning (custom grain grinding
                                        </option>
                                        <option value="723">
                                            0723 Crop Preparation Services for Market Except Cotton
                                            Ginning (except custom grain grinding
                                        </option>
                                        <option value="3466">3466 Crowns and Closure</option>
                                        <option value="1311">
                                            1311 Crude Petroleum and Natural Ga
                                        </option>
                                        <option value="4612">4612 Crude Petroleum Pipeline</option>
                                        <option value="1423">1423 Crushed and Broken Granit</option>
                                        <option value="1422">
                                            1422 Crushed and Broken Limeston
                                        </option>
                                        <option value="1429">
                                            1429 Crushed and Broken Stone NE
                                        </option>
                                        <option value="3643">
                                            3643 Current-Carrying Wiring Device
                                        </option>
                                        <option value="2391">2391 Curtains and Draperie</option>
                                        <option value="3087">
                                            3087 Custom Compounding of Purchased Plastics Resin
                                        </option>
                                        <option value="3281">
                                            3281 Cut Stone and Stone Product
                                        </option>
                                        <option value="3421">
                                            3421 Cutlery (except hedge shears and trimmers tinners'
                                            snips and similar nonelectric hand tools
                                        </option>
                                        <option value="3421">
                                            3421 Cutlery (hedge shears and trimmers tinners snips and
                                            similar nonelectric hand tools
                                        </option>
                                        <option value="3545">
                                            3545 Cutting Tools Machine Tool Accessories and Machinist
                                            Precision Measuring Devices (precision measuring devices
                                        </option>
                                        <option value="3545">
                                            3545 Cutting Tools Machine Tool Accessories and
                                            Machinists' Precision Measuring Devices (except precision
                                            measuring devices
                                        </option>
                                        <option value="2865">
                                            2865 Cyclic Organic Crudes and Intermediates and Organic
                                            Dyes and Pigments (aromatics
                                        </option>
                                        <option value="2865">
                                            2865 Cyclic Organic Crudes and Intermediates and Organic
                                            Dyes and Pigments (organic dyes and pigments
                                        </option>
                                        <option value="2865">
                                            2865 Cyclic Organic Crudes and Intermediates and Organic
                                            Dyes and Pigments (except aromatics and organic dyes and
                                            pigments
                                        </option>
                                        <option value="241">
                                            0241 Dairy Farms (dairy heifer replacement farms
                                        </option>
                                        <option value="241">
                                            0241 Dairy Farms (except dairy heifer replacement farms)
                                        </option>
                                        <option value="5143">
                                            5143 Dairy Products Except Dried or Canned (agents and
                                            brokers
                                        </option>
                                        <option value="5143">
                                            5143 Dairy Products Except Dried or Canned (business to
                                            business electronic markets
                                        </option>
                                        <option value="5143">
                                            5143 Dairy Products Except Dried or Canned (dairy products
                                            sold via retail method
                                        </option>
                                        <option value="5143">
                                            5143 Dairy Products Except Dried or Canned (merchant
                                            wholesalers except those selling dairy products via retail
                                            method
                                        </option>
                                        <option value="5451">5451 Dairy Products Store</option>
                                        <option value="7911">
                                            7911 Dance Studios Schools and Halls (dance instructors
                                            and professional and other dance schools
                                        </option>
                                        <option value="7911">
                                            7911 Dance Studios Schools and Halls (except instruction
                                        </option>
                                        <option value="8243">
                                            8243 Data Processing Schools (computer repair training
                                        </option>
                                        <option value="8243">
                                            8243 Data Processing Schools (except computer repair
                                            training
                                        </option>
                                        <option value="175">
                                            0175 Deciduous Tree Fruits (apple orchards and farms
                                        </option>
                                        <option value="175">
                                            0175 Deciduous Tree Fruits (except apple orchards and
                                            farms
                                        </option>
                                        <option value="4424">
                                            4424 Deep Sea Domestic Transportation of Freigh
                                        </option>
                                        <option value="4412">
                                            4412 Deep Sea Foreign Transportation of Freigh
                                        </option>
                                        <option value="4481">
                                            4481 Deep Sea Transportation of Passengers Except by Ferry
                                            (coastal activities
                                        </option>
                                        <option value="4481">
                                            4481 Deep Sea Transportation of Passengers Except by Ferry
                                            (deep sea activities
                                        </option>
                                        <option value="3843">
                                            3843 Dental Equipment and Supplie
                                        </option>
                                        <option value="8072">8072 Dental Laboratorie</option>
                                        <option value="5311">
                                            5311 Department Stores (discount department stores
                                        </option>
                                        <option value="5311">
                                            5311 Department Stores (except discount department stores
                                            and supercenters-general merchandise and groceries
                                        </option>
                                        <option value="7381">
                                            7381 Detective Guard and Armored Car Services (armored car
                                            services
                                        </option>
                                        <option value="7381">
                                            7381 Detective Guard and Armored Car Services (detective
                                            services
                                        </option>
                                        <option value="7381">
                                            7381 Detective Guard and Armored Car Services (guard
                                            services
                                        </option>
                                        <option value="2675">
                                            2675 Die-Cut Paper and Paperboard and Cardboard (die-cut
                                            paper and paperboard office supplies such as file folders
                                            tabulating cards and report covers
                                        </option>
                                        <option value="2675">
                                            2675 Die-Cut Paper and Paperboard and Cardboard (except
                                            pasted lined laminated or surface coated paperboard and
                                            die-cut paper and paperboard office supplies
                                        </option>
                                        <option value="2675">
                                            2675 Die-Cut Paper and Paperboard and Cardboard (pasted
                                            lined laminated or surface-coated paperboard
                                        </option>
                                        <option value="1411">1411 Dimension Ston</option>
                                        <option value="7331">
                                            7331 Direct Mail Advertising Services (except mailing list
                                            compilers
                                        </option>
                                        <option value="7331">
                                            7331 Direct Mail Advertising Services (mailing list
                                            compilers
                                        </option>
                                        <option value="5963">
                                            5963 Direct Selling Establishments (except mobile food
                                            services and food wagons
                                        </option>
                                        <option value="5963">
                                            5963 Direct Selling Establishments (mobile food services
                                            and food wagons
                                        </option>
                                        <option value="7342">
                                            7342 Disinfecting and Pest Control Services (except
                                            exterminating and pest control
                                        </option>
                                        <option value="7342">
                                            7342 Disinfecting and Pest Control Services (exterminating
                                            and pest control
                                        </option>
                                        <option value="2085">
                                            2085 Distilled and Blended Liquors (apple jack
                                        </option>
                                        <option value="2085">
                                            2085 Distilled and Blended Liquors (except apple jack
                                        </option>
                                        <option value="2047">2047 Dog and Cat Foo</option>
                                        <option value="3942">3942 Dolls and Stuffed Toy</option>
                                        <option value="5714">
                                            5714 Drapery Curtain and Upholstery Stores (custom drapes
                                        </option>
                                        <option value="5714">
                                            5714 Drapery Curtain and Upholstery Stores (custom
                                            slipcovers
                                        </option>
                                        <option value="5714">
                                            5714 Drapery Curtain and Upholstery Stores (drapery and
                                            curtain stores except primarily custom
                                        </option>
                                        <option value="5714">
                                            5714 Drapery Curtain and Upholstery Stores (upholstery
                                            materials
                                        </option>
                                        <option value="2591">
                                            2591 Drapery Hardware and Window Blinds and Shade
                                        </option>
                                        <option value="3357">
                                            3357 Drawing and Insulating of Nonferrous Wire (aluminum
                                            wire drawing
                                        </option>
                                        <option value="3357">
                                            3357 Drawing and Insulating of Nonferrous Wire
                                            (communication and energy wire except fiber
                                            optic-insulating only
                                        </option>
                                        <option value="3357">
                                            3357 Drawing and Insulating of Nonferrous Wire (copper
                                            wire drawing
                                        </option>
                                        <option value="3357">
                                            3357 Drawing and Insulating of Nonferrous Wire (fiber
                                            optic cable-insulating only
                                        </option>
                                        <option value="3357">
                                            3357 Drawing and Insulating of Nonferrous Wire (wire
                                            drawing except copper or aluminum
                                        </option>
                                        <option value="2381">
                                            2381 Dress and Work Gloves Except Knit and All-Leather
                                            (except contractors
                                        </option>
                                        <option value="2381">
                                            2381 Dress and Work Gloves Except Knit and All-Leather
                                            (men's and boys' contractors
                                        </option>
                                        <option value="2381">
                                            2381 Dress and Work Gloves Except Knit and All-Leather
                                            (women's girls' and infants' contractors
                                        </option>
                                        <option value="2034">
                                            2034 Dried and Dehydrated Fruits Vegetables and Soup Mixes
                                            (soup mixes made from purchased dehydrated ingredients
                                        </option>
                                        <option value="2034">
                                            2034 Dried and Dehydrated Fruits Vegetables and Soup Mixes
                                            (except vegetable flour and soup mixes made from purchased
                                            dried and dehydrated ingredients
                                        </option>
                                        <option value="2034">
                                            2034 Dried and Dehydrated Fruits Vegetables and Soup Mixes
                                            (vegetable flour
                                        </option>
                                        <option value="1381">1381 Drilling Oil and Gas Well</option>
                                        <option value="5813">
                                            5813 Drinking Places (Alcoholic Beverages
                                        </option>
                                        <option value="7833">
                                            7833 Drive-In Motion Picture Theater
                                        </option>
                                        <option value="5912">
                                            5912 Drug Stores and Proprietary Store
                                        </option>
                                        <option value="5122">
                                            5122 Drugs Drug Proprietaries and Druggists' Sundries
                                            (vitamins sold via retail method
                                        </option>
                                        <option value="5122">
                                            5122 Drugs Drug Proprietaries and Druggists? Sundries
                                            (agents and brokers
                                        </option>
                                        <option value="5122">
                                            5122 Drugs Drug Proprietaries and Druggists? Sundries
                                            (business to business electronic markets
                                        </option>
                                        <option value="5122">
                                            5122 Drugs Drug Proprietaries and Druggists? Sundries
                                            (cosmetics sold via retail method
                                        </option>
                                        <option value="5122">
                                            5122 Drugs Drug Proprietaries and Druggists? Sundries
                                            (drugs and sundries sold via retail method
                                        </option>
                                        <option value="5122">
                                            5122 Drugs Drug Proprietaries and Druggists? Sundries
                                            (merchant wholesalers except those selling drugs and
                                            sundries via retail method
                                        </option>
                                        <option value="2023">
                                            2023 Dry Condensed and Evaporated Dairy Products (except
                                            liquid non-dairy creamer
                                        </option>
                                        <option value="2023">
                                            2023 Dry Condensed and Evaporated Dairy Products (liquid
                                            non-dairy creamer
                                        </option>
                                        <option value="7216">
                                            7216 Drycleaning Plants Except Rug Cleanin
                                        </option>
                                        <option value="5099">
                                            5099 Durable Goods NEC (agents and brokers
                                        </option>
                                        <option value="5099">
                                            5099 Durable Goods NEC (ammunition and firearms sold via
                                            retail method
                                        </option>
                                        <option value="5099">
                                            5099 Durable Goods NEC (business to business electronic
                                            markets
                                        </option>
                                        <option value="5099">
                                            5099 Durable Goods NEC (coin-operated game machines sold
                                            via retail method
                                        </option>
                                        <option value="5099">
                                            5099 Durable Goods NEC (gas lighting fixtures rough
                                            timbers and other wood or construction materials sold via
                                            retail method
                                        </option>
                                        <option value="5099">
                                            5099 Durable Goods NEC (merchant wholesalers except those
                                            selling miscellaneous durable goods via retail method
                                        </option>
                                        <option value="5099">
                                            5099 Durable Goods NEC (prerecorded audio and video tapes
                                            and discs sold via retail method
                                        </option>
                                        <option value="5812">5812 Eating Places (cafeterias</option>
                                        <option value="5812">5812 Eating Places (caterers</option>
                                        <option value="5812">
                                            5812 Eating Places (dinner theaters
                                        </option>
                                        <option value="5812">
                                            5812 Eating Places (food service contractors
                                        </option>
                                        <option value="5812">
                                            5812 Eating Places (full-service restaurants
                                        </option>
                                        <option value="5812">
                                            5812 Eating Places (limited-service restaurants
                                        </option>
                                        <option value="5812">
                                            5812 Eating Places (snack and nonalcoholic beverage bars
                                        </option>
                                        <option value="6732">
                                            6732 Educational Religious and Charitable Trust
                                        </option>
                                        <option value="3548">
                                            3548 Electric and Gas Welding and Soldering Equipment
                                            (except transformers for arc-welding
                                        </option>
                                        <option value="3548">
                                            3548 Electric and Gas Welding and Soldering Equipment
                                            (transformers for arc-welders
                                        </option>
                                        <option value="4931">
                                            4931 Electric and Other Services Combined (electric power
                                            distribution
                                        </option>
                                        <option value="4931">
                                            4931 Electric and Other Services Combined (electric power
                                            transmission and control
                                        </option>
                                        <option value="4931">
                                            4931 Electric and Other Services Combined (fossil fuel
                                            power generation
                                        </option>
                                        <option value="4931">
                                            4931 Electric and Other Services Combined (hydroelectric
                                            power generation)
                                        </option>
                                        <option value="4931">
                                            4931 Electric and Other Services Combined (natural gas
                                            distribution
                                        </option>
                                        <option value="4931">
                                            4931 Electric and Other Services Combined (nuclear power
                                            generation
                                        </option>
                                        <option value="4931">
                                            4931 Electric and Other Services Combined (other electric
                                            power generation
                                        </option>
                                        <option value="3634">
                                            3634 Electric Housewares and Fans (electronic cigarette
                                            lighters
                                        </option>
                                        <option value="3634">
                                            3634 Electric Housewares and Fans (except wall and
                                            baseboard heating units for permanent installation
                                            electronic cigarette lighters and wall mount restroom hand
                                            dryers
                                        </option>
                                        <option value="3634">
                                            3634 Electric Housewares and Fans (wall and baseboard
                                            heating units for permanent installation
                                        </option>
                                        <option value="3641">
                                            3641 Electric Lamp Bulbs and Tube
                                        </option>
                                        <option value="4911">
                                            4911 Electric Services (electric power distribution
                                        </option>
                                        <option value="4911">
                                            4911 Electric Services (electric power transmission and
                                            control
                                        </option>
                                        <option value="4911">
                                            4911 Electric Services (fossil fuel power generation
                                        </option>
                                        <option value="4911">
                                            4911 Electric Services (hydroelectric power generation
                                        </option>
                                        <option value="4911">
                                            4911 Electric Services (nuclear electric power generation
                                        </option>
                                        <option value="4911">
                                            4911 Electric Services (other electric power generation
                                        </option>
                                        <option value="7629">
                                            7629 Electrical and Electronic Repair Shops NEC (business
                                            and office machine repair electrical)
                                        </option>
                                        <option value="7629">
                                            7629 Electrical and Electronic Repair Shops NEC
                                            (electrical appliance repair washing machine repair
                                            electric razor repair
                                        </option>
                                        <option value="7629">
                                            7629 Electrical and Electronic Repair Shops NEC
                                            (electrical measuring instrument repair and calibration
                                            medical electrical equipment repair
                                        </option>
                                        <option value="7629">
                                            7629 Electrical and Electronic Repair Shops NEC (new
                                            retail sales combined with repair-repair services as major
                                            source of receipts
                                        </option>
                                        <option value="7629">
                                            7629 Electrical and Electronic Repair Shops NEC (other
                                            consumer electronic equipment except business and office
                                            machines telephones and appliances-repair and maintenance
                                        </option>
                                        <option value="7629">
                                            7629 Electrical and Electronic Repair Shops NEC (telephone
                                            set repair
                                        </option>
                                        <option value="5063">
                                            5063 Electrical Apparatus and Equipment Wiring Supplies
                                            and Construction Materials (electrical supplies equipment
                                            and apparatus sold via retail method
                                        </option>
                                        <option value="5063">
                                            5063 Electrical Apparatus and Equipment Wiring Supplies
                                            and Construction Materials (agents and brokers
                                        </option>
                                        <option value="5063">
                                            5063 Electrical Apparatus and Equipment Wiring Supplies
                                            and Construction Materials (business to business
                                            electronic markets
                                        </option>
                                        <option value="5063">
                                            5063 Electrical Apparatus and Equipment Wiring Supplies
                                            and Construction Materials (merchant wholesalers except
                                            those selling electrical supplies equipment and apparatus
                                            via retail method
                                        </option>
                                        <option value="5064">
                                            5064 Electrical Appliances Television and Radio Sets
                                            (agents and brokers
                                        </option>
                                        <option value="5064">
                                            5064 Electrical Appliances Television and Radio Sets
                                            (business to business electronic markets
                                        </option>
                                        <option value="5064">
                                            5064 Electrical Appliances Television and Radio Sets
                                            (ceiling fans sold via retail method
                                        </option>
                                        <option value="5064">
                                            5064 Electrical Appliances Television and Radio Sets
                                            (household appliances sold via retail method
                                        </option>
                                        <option value="5064">
                                            5064 Electrical Appliances Television and Radio Sets
                                            (merchant wholesalers except those selling appliances TVs
                                            and radios via retail method
                                        </option>
                                        <option value="5064">
                                            5064 Electrical Appliances Television and Radio Sets
                                            (television and radio sets sold via retail method
                                        </option>
                                        <option value="3694">
                                            3694 Electrical Equipment for Internal Combustion Engine
                                        </option>
                                        <option value="3629">
                                            3629 Electrical Industrial Apparatus NE
                                        </option>
                                        <option value="3699">
                                            3699 Electrical Machinery Equipment and Supplies NEC
                                            (Christmas tree lighting sets electric insect lamps
                                            electric fireplace logs and trouble lights
                                        </option>
                                        <option value="3699">
                                            3699 Electrical Machinery Equipment and Supplies NEC
                                            (electronic teaching machines and flight simulators
                                        </option>
                                        <option value="3699">
                                            3699 Electrical Machinery Equipment and Supplies NEC
                                            (other electrical industrial apparatus
                                        </option>
                                        <option value="3699">
                                            3699 Electrical Machinery Equipment and Supplies NEC
                                            (outboard electric motors
                                        </option>
                                        <option value="3699">
                                            3699 Electrical Machinery Equipment and Supplies NEC
                                            (laser welding and soldering equipment
                                        </option>
                                        <option value="1731">
                                            1731 Electrical Work (electrical work except burglar and
                                            fire alarm installation
                                        </option>
                                        <option value="3845">
                                            3845 Electromedical and Electrotherapeutic Apparatus (CT
                                            and CAT Scanners
                                        </option>
                                        <option value="3845">
                                            3845 Electromedical and Electrotherapeutic Apparatus
                                            (except CT and CAT scanners
                                        </option>
                                        <option value="3313">
                                            3313 Electrometallurgical Products Except Stee
                                        </option>
                                        <option value="3671">3671 Electron Tube</option>
                                        <option value="3675">3675 Electronic Capacitor</option>
                                        <option value="3677">
                                            3677 Electronic Coils Transformers and Other Inductor
                                        </option>
                                        <option value="3679">
                                            3679 Electronic Components NEC (antennas
                                        </option>
                                        <option value="3679">
                                            3679 Electronic Components NEC (other electronic
                                            components
                                        </option>
                                        <option value="3679">
                                            3679 Electronic Components NEC (printed circuit/electronic
                                            assembly manufacturing
                                        </option>
                                        <option value="3679">
                                            3679 Electronic Components NEC (radio headphones
                                        </option>
                                        <option value="3571">3571 Electronic Computer</option>
                                        <option value="3678">3678 Electronic Connector</option>
                                        <option value="5065">
                                            5065 Electronic Parts and Equipment NEC (agents and
                                            brokers
                                        </option>
                                        <option value="5065">
                                            5065 Electronic Parts and Equipment NEC (amateur radios
                                            CB's intercommunications equipment public address
                                            equipment and similar communications equipment sold via
                                            retail method
                                        </option>
                                        <option value="5065">
                                            5065 Electronic Parts and Equipment NEC (business to
                                            business electronic markets
                                        </option>
                                        <option value="5065">
                                            5065 Electronic Parts and Equipment NEC (merchant
                                            wholesalers except those selling electronic parts and
                                            equipment via retail method
                                        </option>
                                        <option value="5065">
                                            5065 Electronic Parts and Equipment NEC (modems and other
                                            computer components sold via retail method
                                        </option>
                                        <option value="3676">3676 Electronic Resistor</option>
                                        <option value="3471">
                                            3471 Electroplating Plating Polishing Anodizing and
                                            Colorin
                                        </option>
                                        <option value="8211">
                                            8211 Elementary and Secondary School
                                        </option>
                                        <option value="3534">
                                            3534 Elevators and Moving Stairway
                                        </option>
                                        <option value="7361">
                                            7361 Employment Agencies (except executive placement
                                            services
                                        </option>
                                        <option value="7361">
                                            7361 Employment Agencies (executive placement services
                                        </option>
                                        <option value="3431">
                                            3431 Enameled Iron and Metal Sanitary War
                                        </option>
                                        <option value="8711">8711 Engineering Service</option>
                                        <option value="2677">2677 Envelope</option>
                                        <option value="7359">
                                            7359 Equipment Rental and Leasing NEC (aircraft rental and
                                            leasing
                                        </option>
                                        <option value="7359">
                                            7359 Equipment Rental and Leasing NEC (appliances; TVs
                                            VCRs and other consumer electronic equipment rental
                                        </option>
                                        <option value="7359">
                                            7359 Equipment Rental and Leasing NEC (except aircraft;
                                            industrial truck and equipment; TV VCR and other consumer
                                            electronic equipment; appliances; general rental centers;
                                            portable toilets; office machines; oil field and oil well
                                            drilling equipment; and home and garden equipment rental
                                            and leasing
                                        </option>
                                        <option value="7359">
                                            7359 Equipment Rental and Leasing NEC (general rental
                                            centers and home and garden equipment rental centers
                                        </option>
                                        <option value="7359">
                                            7359 Equipment Rental and Leasing NEC (industrial truck
                                            and equipment rental and leasing
                                        </option>
                                        <option value="7359">
                                            7359 Equipment Rental and Leasing NEC (office machine
                                            rental and leasing
                                        </option>
                                        <option value="7359">
                                            7359 Equipment Rental and Leasing NEC (oil field and well
                                            drilling equipment
                                        </option>
                                        <option value="7359">
                                            7359 Equipment Rental and Leasing NEC (portable toilet
                                            rental
                                        </option>
                                        <option value="1794">1794 Excavation Wor</option>
                                        <option value="9131">
                                            9131 Executive and Legislative Office Combined
                                        </option>
                                        <option value="9111">9111 Executive Office</option>
                                        <option value="2892">2892 Explosive</option>
                                        <option value="3499">
                                            3499 Fabricated Metal Products NEC (metal aerosol valves
                                        </option>
                                        <option value="3499">
                                            3499 Fabricated Metal Products NEC (metal automobile seat
                                            frames
                                        </option>
                                        <option value="3499">
                                            3499 Fabricated Metal Products NEC (metal boxes
                                        </option>
                                        <option value="3499">
                                            3499 Fabricated Metal Products NEC (metal furniture frames
                                        </option>
                                        <option value="3499">
                                            3499 Fabricated Metal Products NEC (other metal products
                                        </option>
                                        <option value="3499">
                                            3499 Fabricated Metal Products NEC (powder metallurgy
                                        </option>
                                        <option value="3499">
                                            3499 Fabricated Metal Products NEC (safe and vault locks
                                        </option>
                                        <option value="3498">
                                            3498 Fabricated Pipe and Pipe Fitting
                                        </option>
                                        <option value="3443">
                                            3443 Fabricated Plate Work (Boiler Shops) (fabricated
                                            plate work and metal weldments
                                        </option>
                                        <option value="3443">
                                            3443 Fabricated Plate Work (Boiler Shops) (heavy gauge
                                            tanks
                                        </option>
                                        <option value="3443">
                                            3443 Fabricated Plate Work (Boiler Shops) (metal cooling
                                            towers
                                        </option>
                                        <option value="3443">
                                            3443 Fabricated Plate Work (Boiler Shops) (power boilers
                                            and heat exchangers
                                        </option>
                                        <option value="3069">
                                            3069 Fabricated Rubber Products NEC (bags made from
                                            rubberized fabric
                                        </option>
                                        <option value="3069">
                                            3069 Fabricated Rubber Products NEC (bibs bathing caps
                                            related rubber accessories
                                        </option>
                                        <option value="3069">
                                            3069 Fabricated Rubber Products NEC (except rubberized
                                            fabric and garments gloves life vests wet suits
                                            accessories such as bibs and bathing caps rubber toys bags
                                            made from rubberized fabric rubber diaper covers and
                                            rubber resilient floor coverings
                                        </option>
                                        <option value="3069">
                                            3069 Fabricated Rubber Products NEC (rubber cut and sew
                                            outerwear
                                        </option>
                                        <option value="3069">
                                            3069 Fabricated Rubber Products NEC (rubber gloves
                                            inflatable rubber lifejackets
                                        </option>
                                        <option value="3069">
                                            3069 Fabricated Rubber Products NEC (rubber resilient
                                            floor coverings
                                        </option>
                                        <option value="3069">
                                            3069 Fabricated Rubber Products NEC (rubber toys except
                                            dolls
                                        </option>
                                        <option value="3069">
                                            3069 Fabricated Rubber Products NEC (rubberizing fabric or
                                            purchased textile products
                                        </option>
                                        <option value="3069">
                                            3069 Fabricated Rubber Products NEC (wet suits
                                        </option>
                                        <option value="3441">
                                            3441 Fabricated Structural Meta
                                        </option>
                                        <option value="2399">
                                            2399 Fabricated Textile Products NEC (apparel and apparel
                                            accessories except contractors
                                        </option>
                                        <option value="2399">
                                            2399 Fabricated Textile Products NEC (except apparel and
                                            accessories automotive seat belts seat and tire covers and
                                            contractors
                                        </option>
                                        <option value="2399">
                                            2399 Fabricated Textile Products NEC (men's and boys'
                                            contractors
                                        </option>
                                        <option value="2399">
                                            2399 Fabricated Textile Products NEC (seat belts and seat
                                            and tire covers
                                        </option>
                                        <option value="2399">
                                            2399 Fabricated Textile Products NEC (women's girls' and
                                            infants' contractors
                                        </option>
                                        <option value="8744">
                                            8744 Facilities Support Management Service
                                        </option>
                                        <option value="5651">5651 Family Clothing Store</option>
                                        <option value="5083">
                                            5083 Farm and Garden Machinery and Equipment (agents and
                                            brokers
                                        </option>
                                        <option value="5083">
                                            5083 Farm and Garden Machinery and Equipment (business to
                                            business electronic markets
                                        </option>
                                        <option value="5083">
                                            5083 Farm and Garden Machinery and Equipment (lawn and
                                            garden equipment sold via retail method
                                        </option>
                                        <option value="5083">
                                            5083 Farm and Garden Machinery and Equipment (merchant
                                            wholesalers except those selling lawn and garden equipment
                                            via retail method
                                        </option>
                                        <option value="761">
                                            0761 Farm Labor Contractors and Crew Leader
                                        </option>
                                        <option value="3523">
                                            3523 Farm Machinery and Equipment (corrals stalls and
                                            holding gates
                                        </option>
                                        <option value="3523">
                                            3523 Farm Machinery and Equipment (except corrals stalls
                                            holding gates hand clippers for animals and farm
                                            conveyors/elevators
                                        </option>
                                        <option value="3523">
                                            3523 Farm Machinery and Equipment (farm conveyors and
                                            elevators
                                        </option>
                                        <option value="3523">
                                            3523 Farm Machinery and Equipment (hand hair clippers for
                                            animals
                                        </option>
                                        <option value="762">0762 Farm Management Service</option>
                                        <option value="4221">
                                            4221 Farm Product Warehousing and Storag
                                        </option>
                                        <option value="5191">
                                            5191 Farm Supplies (agents and brokers
                                        </option>
                                        <option value="5191">
                                            5191 Farm Supplies (business to business electronic
                                            markets
                                        </option>
                                        <option value="5191">
                                            5191 Farm Supplies (lawn and garden supplies sold via
                                            retail method
                                        </option>
                                        <option value="5191">
                                            5191 Farm Supplies (merchant wholesalers except those
                                            selling lawn and garden supplies via retail method
                                        </option>
                                        <option value="5159">
                                            5159 Farm-Product Raw Materials NEC (agents and brokers
                                        </option>
                                        <option value="5159">
                                            5159 Farm-Product Raw Materials NEC (business to business
                                            electronic markets
                                        </option>
                                        <option value="5159">
                                            5159 Farm-Product Raw Materials NEC (farm-product raw
                                            materials sold via retail method
                                        </option>
                                        <option value="5159">
                                            5159 Farm-Product Raw Materials NEC (merchant wholesalers
                                            except those selling farm product raw materials nec via
                                            retail method
                                        </option>
                                        <option value="3965">
                                            3965 Fasteners Buttons Needles and Pin
                                        </option>
                                        <option value="6111">
                                            6111 Federal and Federally Sponsored Credit Agencies
                                            (secondary market financing
                                        </option>
                                        <option value="6111">
                                            6111 Federal and Federally-Sponsored Credit Agencies
                                            (except trade banks secondary market financing and Federal
                                            Land Banks
                                        </option>
                                        <option value="6111">
                                            6111 Federal and Federally-Sponsored Credit Agencies
                                            (trade banks
                                        </option>
                                        <option value="6111">
                                            6111 Federal and Federally-Sponsored Credit Agencies
                                            (trade banks
                                        </option>
                                        <option value="6011">6011 Federal Reserve Bank</option>
                                        <option value="4482">
                                            4482 Ferries (coastal and Great Lakes
                                        </option>
                                        <option value="4482">4482 Ferries (inland</option>
                                        <option value="1061">
                                            1061 Ferroalloy Ores Except Vanadium (nickel
                                        </option>
                                        <option value="1061">
                                            1061 Ferroalloy Ores Except Vanadium (other ferroalloys
                                            except nickel
                                        </option>
                                        <option value="2875">2875 Fertilizers Mixing Onl</option>
                                        <option value="2655">
                                            2655 Fiber Cans Tubes Drums and Similar Product
                                        </option>
                                        <option value="139">
                                            0139 Field Crops Except Cash Grains NEC (broom corn
                                            farming
                                        </option>
                                        <option value="139">
                                            0139 Field Crops Except Cash Grains NEC (except peanut
                                            sweet potato broom corn yam and hay farms
                                        </option>
                                        <option value="139">
                                            0139 Field Crops Except Cash Grains NEC (hay farms
                                        </option>
                                        <option value="139">
                                            0139 Field Crops Except Cash Grains NEC (peanut farms
                                        </option>
                                        <option value="139">
                                            0139 Field Crops Except Cash Grains (sweet potatoes and
                                            yams) NE
                                        </option>
                                        <option value="3263">
                                            3263 Fine Earthenware (Whiteware) Table and Kitchen
                                            Article
                                        </option>
                                        <option value="912">0912 Finfis</option>
                                        <option value="2261">
                                            2261 Finishers of Broadwoven Fabrics of Cotto
                                        </option>
                                        <option value="2262">
                                            2262 Finishers of Broadwoven Fabrics of Manmade Fiber and
                                            Sil
                                        </option>
                                        <option value="2269">
                                            2269 Finishers of Textiles NEC (except linen fabric
                                            finishing
                                        </option>
                                        <option value="2269">
                                            2269 Finishers of Textiles NEC (linen fabric finishing
                                        </option>
                                        <option value="6331">
                                            6331 Fire Marine and Casualty Insurance (contact lens
                                            insurance
                                        </option>
                                        <option value="6331">
                                            6331 Fire Marine and Casualty Insurance (fire marine and
                                            casualty insurers-direct except contact lens insurance
                                        </option>
                                        <option value="6331">
                                            6331 Fire Marine and Casualty Insurance (reinsurers
                                        </option>
                                        <option value="6331">
                                            6331 Fire Marine and Casualty Insurance (self insurers
                                        </option>
                                        <option value="9224">9224 Fire Protectio</option>
                                        <option value="5146">
                                            5146 Fish and Seafoods (agents and brokers
                                        </option>
                                        <option value="5146">
                                            5146 Fish and Seafoods (business to business electronic
                                            markets
                                        </option>
                                        <option value="5146">
                                            5146 Fish and Seafoods (fish and seafoods sold via retail
                                            method
                                        </option>
                                        <option value="5146">
                                            5146 Fish and Seafoods (merchant wholesalers except those
                                            selling fish and seafoods via retail method
                                        </option>
                                        <option value="921">
                                            0921 Fish Hatcheries and Preserves (finfish hatcheries
                                        </option>
                                        <option value="921">
                                            0921 Fish Hatcheries and Preserves (shellfish hatcheries
                                        </option>
                                        <option value="4785">
                                            4785 Fixed Facilities and Inspection and Weighing Services
                                            for Motor Vehicle Transportation (except marine cargo
                                            checkers
                                        </option>
                                        <option value="4785">
                                            4785 Fixed Facilities and Inspection and Weighing Services
                                            for Motor Vehicle Transportation (marine cargo checkers
                                        </option>
                                        <option value="3211">3211 Flat Glas</option>
                                        <option value="2087">
                                            2087 Flavoring Extracts and Flavoring Syrups NEC
                                            (flavoring syrups and concentrates except coffee
                                        </option>
                                        <option value="2087">
                                            2087 Flavoring Extracts and Flavoring Syrups NEC (coffee
                                            flavoring and syrups
                                        </option>
                                        <option value="2087">
                                            2087 Flavoring Extracts and Flavoring Syrups NEC
                                            (flavoring extracts and natural food colorings
                                        </option>
                                        <option value="2087">
                                            2087 Flavoring Extracts and Flavoring Syrups NEC (powered
                                            drink mix
                                        </option>
                                        <option value="5713">5713 Floor Coverings Store</option>
                                        <option value="1752">
                                            1752 Floor Laying and Other Floor Work NEC
                                        </option>
                                        <option value="5992">5992 Florist</option>
                                        <option value="2041">
                                            2041 Flour and Other Grain Mill Product
                                        </option>
                                        <option value="5193">
                                            5193 Flowers Nursery Stock and Florists? Supplies (agents
                                            and brokers
                                        </option>
                                        <option value="5193">
                                            5193 Flowers Nursery Stock and Florists? Supplies
                                            (business to business electronic markets
                                        </option>
                                        <option value="5193">
                                            5193 Flowers Nursery Stock and Florists? Supplies
                                            (merchant wholesalers except those selling nursery stock
                                            via retail method
                                        </option>
                                        <option value="5193">
                                            5193 Flowers Nursery Stock and Florists? Supplies (sold
                                            via retail method
                                        </option>
                                        <option value="2026">
                                            2026 Fluid Milk (except ultra-high temperature
                                        </option>
                                        <option value="2026">
                                            2026 Fluid Milk (ultra-high temperature
                                        </option>
                                        <option value="3593">
                                            3593 Fluid Power Cylinders and Actuator
                                        </option>
                                        <option value="3594">
                                            3594 Fluid Power Pumps and Motor
                                        </option>
                                        <option value="3492">
                                            3492 Fluid Power Valves and Hose Fitting
                                        </option>
                                        <option value="2657">
                                            2657 Folding Paperboard Boxes Including Sanitary (except
                                            paperboard backs for blister or skin packages
                                        </option>
                                        <option value="182">
                                            0182 Food Crops Grown Under Cover (except growing
                                            mushrooms
                                        </option>
                                        <option value="182">
                                            0182 Food Crops Grown Under Cover (growing mushrooms
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (bouillon and potatoes dried
                                            and packaged with other ingredients produced in
                                            dehydrating plants
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (dry pasta packaged with other
                                            ingredients made in dry pasta plants
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (except bouillon marshmallow
                                            creme spices peanut butter perishable prepared foods
                                            tortillas tea and tea extracts dry dip mix prepared dips
                                            dry salad dressing mix seasoning mix dried potatoes pasta
                                            and rice mixed with other ingredients in mills or
                                            dehydrating plants reducing maple sap to maple syrup wool
                                            grease and vinegar
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (marshmallow creme
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (peanut butter
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (perishable prepared food
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (reducing maple sap to maple
                                            syrup
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (rice uncooked and packaged
                                            with other ingredients made in rice mills
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (spices dry dip mix dry salad
                                            dressing mix and seasoning mix
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (tea
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (tortillas
                                        </option>
                                        <option value="2099">
                                            2099 Food Preparations NEC (vinegar prepared dip
                                        </option>
                                        <option value="3556">3556 Food Products Machiner</option>
                                        <option value="3149">3149 Footwear Except Rubber NE</option>
                                        <option value="5139">
                                            5139 Footwear (agents and brokers
                                        </option>
                                        <option value="5139">
                                            5139 Footwear (business to business electronic markets
                                        </option>
                                        <option value="5139">
                                            5139 Footwear (footwear sold via retail method
                                        </option>
                                        <option value="5139">
                                            5139 Footwear (merchant wholesalers except those selling
                                            footwear via retail method
                                        </option>
                                        <option value="6082">
                                            6082 Foreign Trade and International Banking Institutions
                                            (except international trade financing
                                        </option>
                                        <option value="6082">
                                            6082 Foreign Trade and International Banking Institutions
                                            (international trade financing
                                        </option>
                                        <option value="831">
                                            0831 Forest Nurseries and Gathering of Forest Products
                                            (forest products except gathering of maple sap
                                        </option>
                                        <option value="831">
                                            0831 Forest Nurseries and Gathering of Forest Products
                                            (gathering maple sap
                                        </option>
                                        <option value="851">0851 Forestry Service</option>
                                        <option value="4432">
                                            4432 Freight Transportation on the Great Lakes - St.
                                            Lawrence Seawa
                                        </option>
                                        <option value="5148">
                                            5148 Fresh Fruits and Vegetables (agents and brokers
                                        </option>
                                        <option value="5148">
                                            5148 Fresh Fruits and Vegetables (business to business
                                            electronic markets
                                        </option>
                                        <option value="5148">
                                            5148 Fresh Fruits and Vegetables (fresh fruits and
                                            vegetables sold via retail method
                                        </option>
                                        <option value="5148">
                                            5148 Fresh Fruits and Vegetables (merchant wholesalers
                                            except those selling fresh fruits and vegetables via
                                            retail method
                                        </option>
                                        <option value="2053">
                                            2053 Frozen Bakery Products Except Brea
                                        </option>
                                        <option value="2037">
                                            2037 Frozen Fruits Fruit Juices and Vegetable
                                        </option>
                                        <option value="2038">2038 Frozen Specialties NE</option>
                                        <option value="5431">
                                            5431 Fruit and Vegetable Markets (except temporary fruit
                                            and vegetable stands
                                        </option>
                                        <option value="5431">
                                            5431 Fruit and Vegetable Markets (temporary fruit and
                                            vegetable stands
                                        </option>
                                        <option value="179">
                                            0179 Fruits and Tree Nuts NEC (combination farms
                                        </option>
                                        <option value="179">
                                            0179 Fruits and Tree Nuts NEC (except combination farms)
                                        </option>
                                        <option value="5989">5989 Fuel Dealers NE</option>
                                        <option value="5983">5983 Fuel Oil Dealer</option>
                                        <option value="6099">
                                            6099 Functions Related to Depository Banking NEC (escrow
                                            and fiduciary agencies
                                        </option>
                                        <option value="6099">
                                            6099 Functions Related to Depository Banking NEC (foreign
                                            currency exchange
                                        </option>
                                        <option value="6099">
                                            6099 Functions Related to Depository Banking NEC
                                            (electronic funds transfer networks and clearinghouse
                                            associations
                                        </option>
                                        <option value="6099">
                                            6099 Functions Related to Depository Banking NEC (except
                                            electronic funds transfer networks and clearinghouses
                                            foreign currency exchanges escrow and fiduciary agencies
                                            and deposit brokers
                                        </option>
                                        <option value="7261">
                                            7261 Funeral Services and Crematories (crematories
                                        </option>
                                        <option value="7261">
                                            7261 Funeral Services and Crematories (funeral homes and
                                            services
                                        </option>
                                        <option value="2371">
                                            2371 Fur Goods (except contractors
                                        </option>
                                        <option value="2371">
                                            2371 Fur Goods (men's and boys' contractors
                                        </option>
                                        <option value="2371">
                                            2371 Fur Goods (women's girls' and infants' contractors
                                        </option>
                                        <option value="271">
                                            0271 Fur-Bearing Animals and Rabbit
                                        </option>
                                        <option value="5712">
                                            5712 Furniture Stores (custom made upholstered household
                                            furniture
                                        </option>
                                        <option value="5021">
                                            5021 Furniture (agents and brokers
                                        </option>
                                        <option value="5021">
                                            5021 Furniture (business to business electronic markets
                                        </option>
                                        <option value="5021">
                                            5021 Furniture (furniture sold via the retail method
                                        </option>
                                        <option value="5021">
                                            5021 Furniture (merchant wholesalers except those selling
                                            via retail method
                                        </option>
                                        <option value="2599">
                                            2599 Furniture and Fixtures NEC (except hospital beds
                                        </option>
                                        <option value="2599">
                                            2599 Furniture and Fixtures NEC (hospital beds
                                        </option>
                                        <option value="5712">
                                            5712 Furniture Stores (custom made nonupholstered wood
                                            household furniture except cabinets
                                        </option>
                                        <option value="5712">
                                            5712 Furniture Stores (custom wood cabinets
                                        </option>
                                        <option value="5712">
                                            5712 Furniture Stores (except custom furniture and
                                            cabinets
                                        </option>
                                        <option value="3944">
                                            3944 Games Toys and Children's Vehicles Except Dolls and
                                            Bicycles (except metal tricycles
                                        </option>
                                        <option value="3944">
                                            3944 Games Toys and Children?s Vehicles Except Dolls and
                                            Bicycles (metal tricycles
                                        </option>
                                        <option value="7212">
                                            7212 Garment Pressing and Agents for Laundries and
                                            Drycleaner
                                        </option>
                                        <option value="4932">
                                            4932 Gas and Other Services Combined (natural gas
                                            distribution
                                        </option>
                                        <option value="3053">
                                            3053 Gaskets Packing and Sealing Device
                                        </option>
                                        <option value="5541">
                                            5541 Gasoline Service Station (gasoline station with
                                            convenience store
                                        </option>
                                        <option value="5541">
                                            5541 Gasoline Service Station (gasoline station without
                                            convenience store
                                        </option>
                                        <option value="7538">
                                            7538 General Automotive Repair Shop
                                        </option>
                                        <option value="1541">
                                            1541 General Contractors - Industrial Buildings and
                                            Warehouses (general contractors of grain elevators; dry
                                            cleaning plants; and manufacturing industrial and public
                                            warehouses
                                        </option>
                                        <option value="1542">
                                            1542 General Contractors - Nonresidential Buildings Other
                                            than Industrial Buildings and Warehouse
                                        </option>
                                        <option value="1522">
                                            1522 General Contractors - Residential Buildings Other
                                            Than Single-Family (dormitory barrack hotel and motel
                                            construction contractors
                                        </option>
                                        <option value="1522">
                                            1522 General Contractors - Residential Buildings Other
                                            Than Single-Family (except remodeling contractors hotel
                                            and motel construction contractors and dormitory and
                                            barrack construction contractors
                                        </option>
                                        <option value="1522">
                                            1522 General Contractors - Residential Buildings Other
                                            Than Single-Family (remodeling contractors
                                        </option>
                                        <option value="1521">
                                            1521 General Contractors - Single-Family Houses
                                            (remodeling contractors
                                        </option>
                                        <option value="1541">
                                            1541 General Contractors Industrial Buildings and
                                            Warehouses ( except grain elevators; drycleaning plants;
                                            and manufacturing public and industrial warehouses
                                        </option>
                                        <option value="1521">
                                            1521 General Contractors--Single Family Houses (except
                                            remodeling contractors
                                        </option>
                                        <option value="191">
                                            0191 General Farms Primarily Cro
                                        </option>
                                        <option value="291">
                                            0291 General Farms Primarily Livestock and Animal
                                            Specialtie
                                        </option>
                                        <option value="9199">9199 General Government NE</option>
                                        <option value="3569">
                                            3569 General Industrial Machinery and Equipment NEC
                                            (electric swimming pool heaters
                                        </option>
                                        <option value="3569">
                                            3569 General Industrial Machinery and Equipment NEC
                                            (except fire hoses and electric swimming pool heaters
                                        </option>
                                        <option value="3569">
                                            3569 General Industrial Machinery and Equipment NEC
                                            (textile fire hose
                                        </option>
                                        <option value="219">
                                            0219 General Livestock Except Dairy and Poultr
                                        </option>
                                        <option value="8062">
                                            8062 General Medical and Surgical Hospital
                                        </option>
                                        <option value="4225">
                                            4225 General Warehousing and Storage (except self-storage
                                            and miniwarehouses
                                        </option>
                                        <option value="4225">
                                            4225 General Warehousing and Storage (miniwarehouses and
                                            self-storage units
                                        </option>
                                        <option value="5947">
                                            5947 Gift Novelty and Souvenir Shop
                                        </option>
                                        <option value="2361">
                                            2361 Girls? Children?s and Infants? Dresses Blouses and
                                            Shirts (boys? contractors
                                        </option>
                                        <option value="2361">
                                            2361 Girls? Children?s and Infants? Dresses Blouses and
                                            Shirts (boys? shirts except contractors
                                        </option>
                                        <option value="2361">
                                            2361 Girls? Children?s and Infants? Dresses Blouses and
                                            Shirts (girls? and infants? contractors
                                        </option>
                                        <option value="2361">
                                            2361 Girls? Children?s and Infants? Dresses Blouses and
                                            Shirts (girls? blouses and shirts except contractors
                                        </option>
                                        <option value="2361">
                                            2361 Girls? Children?s and Infants? Dresses Blouses and
                                            Shirts (girls? dresses except contractors
                                        </option>
                                        <option value="2361">
                                            2361 Girls? Children?s and Infants? Dresses Blouses and
                                            Shirts (infants? except contractors
                                        </option>
                                        <option value="2369">
                                            2369 Girls? Children?s and Infants? Outerwear NEC (boys?
                                            contractors
                                        </option>
                                        <option value="2369">
                                            2369 Girls? Children?s and Infants? Outerwear NEC (boys?
                                            other outerwear except contractors
                                        </option>
                                        <option value="2369">
                                            2369 Girls? Children?s and Infants? Outerwear NEC (boys?
                                            robes except contractors
                                        </option>
                                        <option value="2369">
                                            2369 Girls? Children?s and Infants? Outerwear NEC (boys?
                                            suits and coats except contractors
                                        </option>
                                        <option value="2369">
                                            2369 Girls? Children?s and Infants? Outerwear NEC (boys?
                                            trousers slacks and jeans except contractors
                                        </option>
                                        <option value="2369">
                                            2369 Girls? Children?s and Infants? Outerwear NEC (girls?
                                            and infants' contractors
                                        </option>
                                        <option value="2369">
                                            2369 Girls? Children?s and Infants? Outerwear NEC (girls?
                                            other outerwear except contractors
                                        </option>
                                        <option value="2369">
                                            2369 Girls? Children?s and Infants? Outerwear NEC (girls?
                                            robes except contractors
                                        </option>
                                        <option value="2369">
                                            2369 Girls? Children?s and Infants? Outerwear NEC (girls?
                                            suits coats jackets and skirts except contractors
                                        </option>
                                        <option value="2369">
                                            2369 Girls? Children?s and Infants? Outerwear NEC
                                            (infants? except contractors
                                        </option>
                                        <option value="1793">1793 Glass and Glazing Wor</option>
                                        <option value="3221">3221 Glass Container</option>
                                        <option value="3231">
                                            3231 Glass Products Made of Purchased Glas
                                        </option>
                                        <option value="1041">1041 Gold Ore</option>
                                        <option value="5153">
                                            5153 Grain and Field Beans (agents and brokers
                                        </option>
                                        <option value="5153">
                                            5153 Grain and Field Beans (business to business
                                            electronic markets
                                        </option>
                                        <option value="5153">
                                            5153 Grain and Field Beans (grain and field beans sold via
                                            retail method
                                        </option>
                                        <option value="5153">
                                            5153 Grain and Field Beans (merchant wholesalers except
                                            those selling grains and field beans via retail method
                                        </option>
                                        <option value="172">0172 Grape</option>
                                        <option value="3321">
                                            3321 Gray and Ductile Iron Foundrie
                                        </option>
                                        <option value="2771">
                                            2771 Greeting Cards (flexographic printing of greeting
                                            cards
                                        </option>
                                        <option value="2771">
                                            2771 Greeting Cards (gravure printing of greeting cards
                                        </option>
                                        <option value="2771">
                                            2771 Greeting Cards (Internet greeting card publishers
                                        </option>
                                        <option value="2771">
                                            2771 Greeting Cards (lithographic printing of greeting
                                            cards
                                        </option>
                                        <option value="2771">
                                            2771 Greeting Cards (other printing of greeting cards
                                        </option>
                                        <option value="2771">
                                            2771 Greeting Cards (publishing greeting cards except
                                            Internet greeting card publishers
                                        </option>
                                        <option value="2771">
                                            2771 Greeting Cards (screen printing of greeting cards
                                        </option>
                                        <option value="5141">
                                            5141 Groceries General Line (agents and brokers
                                        </option>
                                        <option value="5141">
                                            5141 Groceries General Line (business to business
                                            electronic markets
                                        </option>
                                        <option value="5141">
                                            5141 Groceries General Line (general line groceries sold
                                            via retail method
                                        </option>
                                        <option value="5141">
                                            5141 Groceries General Line (merchant wholesalers except
                                            those selling general line groceries via retail method
                                        </option>
                                        <option value="5149">
                                            5149 Groceries and Related Products NEC (agents and
                                            brokers
                                        </option>
                                        <option value="5149">
                                            5149 Groceries and Related Products NEC (business to
                                            business electronic markets
                                        </option>
                                        <option value="5149">
                                            5149 Groceries and Related Products NEC (groceries and
                                            related products except pet food sold via retail method
                                        </option>
                                        <option value="5149">
                                            5149 Groceries and Related Products NEC (merchant
                                            wholesalers except processed bottled water manufacturing
                                            and merchant wholesalers selling groceries and related
                                            products via retail method
                                        </option>
                                        <option value="5149">
                                            5149 Groceries and Related Products NEC (pet food sold via
                                            retail method
                                        </option>
                                        <option value="5149">
                                            5149 Groceries and Related Products NEC (processed bottled
                                            water manufacturing)
                                        </option>
                                        <option value="5411">
                                            5411 Grocery Stores (convenience store with gas
                                        </option>
                                        <option value="5411">
                                            5411 Grocery Stores (convenience stores without gas
                                        </option>
                                        <option value="5411">
                                            5411 Grocery Stores (except convenience stores freezer
                                            plans and grocery stores with substantial general
                                            merchandise
                                        </option>
                                        <option value="5411">
                                            5411 Grocery Stores (frozen food and freezer plan
                                            providers
                                        </option>
                                        <option value="5411">
                                            5411 Grocery Stores (grocery stores and supermarkets
                                            selling substantial amounts of nonfood items
                                        </option>
                                        <option value="3769">
                                            3769 Guided Missile and Space Vehicle Parts and Auxiliary
                                            Equipment NEC (except research and development not
                                            producing prototypes
                                        </option>
                                        <option value="3769">
                                            3769 Guided Missile and Space Vehicle Parts and Auxiliary
                                            Equipment NEC (research and development not producing
                                            prototypes
                                        </option>
                                        <option value="3764">
                                            3764 Guided Missile and Space Vehicle Propulsion Units and
                                            Propulsion Unit Parts (except research and development not
                                            producing prototypes)
                                        </option>
                                        <option value="3764">
                                            3764 Guided Missile and Space Vehicle Propulsion Units and
                                            Propulsion Unit Parts (research and development not
                                            producing prototypes
                                        </option>
                                        <option value="3761">
                                            3761 Guided Missiles and Space Vehicles (except research
                                            and development not producing prototypes
                                        </option>
                                        <option value="3761">
                                            3761 Guided Missiles and Space Vehicles (research and
                                            development not producing prototypes
                                        </option>
                                        <option value="2861">2861 Gum and Wood Chemical</option>
                                        <option value="3275">3275 Gypsum Product</option>
                                        <option value="3423">
                                            3423 Hand and Edge Tools Except Machine Tools and Handsaw
                                        </option>
                                        <option value="3429">
                                            3429 Hardware NEC (except fire hose nozzles hose couplings
                                            vacuum and insulated bottles jugs and chests fireplace
                                            fixtures time locks turnbuckles pulleys tackle blocks
                                            luggage and utility racks sleep sofa mechanisms and chair
                                            glides traps handcuffs and leg irons ladder jacks and
                                            other like metal products
                                        </option>
                                        <option value="3429">
                                            3429 Hardware NEC (fire hose nozzles and hose couplings
                                        </option>
                                        <option value="3429">
                                            3429 Hardware NEC (fireplace fixtures traps handcuffs and
                                            leg irons ladder jacks and other like metal products
                                        </option>
                                        <option value="3429">
                                            3429 Hardware NEC (luggage and utility racks
                                        </option>
                                        <option value="3429">
                                            3429 Hardware NEC (pulleys tackle blocks block and tackle
                                            assemblies
                                        </option>
                                        <option value="3429">
                                            3429 Hardware NEC (sleep sofa mechanisms and chair glides
                                        </option>
                                        <option value="3429">3429 Hardware NEC (time locks</option>
                                        <option value="3429">
                                            3429 Hardware NEC (turnbuckles and hose clamps
                                        </option>
                                        <option value="3429">
                                            3429 Hardware NEC (vacuum and insulated bottles jugs and
                                            chests
                                        </option>
                                        <option value="5072">
                                            5072 Hardware (agents and brokers
                                        </option>
                                        <option value="5072">
                                            5072 Hardware (business to business electronic markets
                                        </option>
                                        <option value="5072">
                                            5072 Hardware (hardware sold via retail method
                                        </option>
                                        <option value="5072">
                                            5072 Hardware (merchant wholesalers except those selling
                                            hardware via retail method
                                        </option>
                                        <option value="5251">5251 Hardware Store</option>
                                        <option value="2426">
                                            2426 Hardwood Dimension and Flooring Mills (hardwood cut
                                            stock resawing hardwood lumber and planing purchased
                                            hardwood lumber except flooring
                                        </option>
                                        <option value="2426">
                                            2426 Hardwood Dimension and Flooring Mills (hardwood
                                            dimension lumber made from logs or bolts
                                        </option>
                                        <option value="2426">
                                            2426 Hardwood Dimension and Flooring Mills (hardwood
                                            flooring
                                        </option>
                                        <option value="2426">
                                            2426 Hardwood Dimension and Flooring Mills (wood furniture
                                            frames and finished furniture parts
                                        </option>
                                        <option value="2435">
                                            2435 Hardwood Veneer and Plywoo
                                        </option>
                                        <option value="2353">
                                            2353 Hats Caps and Millinery (except contractors
                                        </option>
                                        <option value="2353">
                                            2353 Hats Caps and Millinery (men's and boys' contractors
                                        </option>
                                        <option value="2353">
                                            2353 Hats Caps and Millinery (women's girls' and infants'
                                            contractors
                                        </option>
                                        <option value="8099">
                                            8099 Health and Allied Services NEC (blood and organ banks
                                        </option>
                                        <option value="8099">
                                            8099 Health and Allied Services NEC (childbirth
                                            preparation
                                        </option>
                                        <option value="8099">
                                            8099 Health and Allied Services NEC (except blood and
                                            organ banks medical artists medical photography and
                                            childbirth preparation classes
                                        </option>
                                        <option value="8099">
                                            8099 Health and Allied Services NEC (medical artists
                                        </option>
                                        <option value="8099">
                                            8099 Health and Allied Services NEC (medical photography
                                        </option>
                                        <option value="3433">
                                            3433 Heating Equipment Except Electric and Warm Air
                                            Furnace
                                        </option>
                                        <option value="1629">
                                            1629 Heavy Construction NEC (except industrial nonbuilding
                                            structures irrigation systems sewage and water treatment
                                            plants petrochemical plants and refineries power
                                            generation plants [except hydroelectric dams] transmission
                                            and distribution stations right-of-way clearing line
                                            slashing blasting and trenching
                                        </option>
                                        <option value="1629">
                                            1629 Heavy Construction NEC (Industrial nonbuilding
                                            structures [except petrochemical plants and petroleum
                                            refineries]
                                        </option>
                                        <option value="1629">
                                            1629 Heavy Construction NEC (petrochemical plants and
                                            refineries
                                        </option>
                                        <option value="1629">
                                            1629 Heavy Construction NEC (power generation plants
                                            [except hydroelectric dams] transmission stations and
                                            distribution stations
                                        </option>
                                        <option value="1629">
                                            1629 Heavy Construction NEC (right-of-way clearing and
                                            line slashing blasting and trenching
                                        </option>
                                        <option value="7353">
                                            7353 Heavy Construction Equipment Rental and Leasing
                                            (crane rental with operator
                                        </option>
                                        <option value="7353">
                                            7353 Heavy Construction Equipment Rental and Leasing
                                            (heavy construction equipment rental without operators
                                        </option>
                                        <option value="7353">
                                            7353 Heavy Construction Equipment Rental and Leasing
                                            (rental of construction equipment [except cranes] with
                                            operator
                                        </option>
                                        <option value="1629">
                                            1629 Heavy Construction NEC (irrigation systems sewage
                                            treatment plants and water treatment plants
                                        </option>
                                        <option value="7363">
                                            7363 Help Supply Services (employee leasing services
                                            professional employer organizations
                                        </option>
                                        <option value="7363">
                                            7363 Help Supply Services (temporary help services
                                        </option>
                                        <option value="1611">
                                            1611 Highway and Street Construction Except Elevated
                                            Highway
                                        </option>
                                        <option value="5945">5945 Hobby Toy and Game Store</option>
                                        <option value="213">0213 Hog</option>
                                        <option value="8082">8082 Home Health Care Service</option>
                                        <option value="5023">
                                            5023 Homefurnishings (agents and brokers
                                        </option>
                                        <option value="5023">
                                            5023 Homefurnishings (business to business electronic
                                            markets
                                        </option>
                                        <option value="5023">
                                            5023 Homefurnishings (floor coverings sold via retail
                                            method
                                        </option>
                                        <option value="5023">
                                            5023 Homefurnishings (merchant wholesalers except those
                                            selling via retail method
                                        </option>
                                        <option value="272">0272 Horses and Other Equine</option>
                                        <option value="2252">
                                            2252 Hosiery NEC (dyeing and finishing hosiery except
                                            sheer without knitting hosiery
                                        </option>
                                        <option value="2252">
                                            2252 Hosiery NEC (except girls' full-length and
                                            knee-length sheer hosiery and dyeing and finishing hosiery
                                            without knitting hosiery
                                        </option>
                                        <option value="2252">
                                            2252 Hosiery NEC (girls? full length and knee length sheer
                                            hosiery
                                        </option>
                                        <option value="6324">
                                            6324 Hospital and Medical Service Plans (health and
                                            medical insurers-direct
                                        </option>
                                        <option value="6324">
                                            6324 Hospital and Medical Service Plans (reinsurers
                                        </option>
                                        <option value="6324">
                                            6324 Hospital and Medical Service Plans (self insurers
                                        </option>
                                        <option value="7011">
                                            7011 Hotels and Motels (bed and breakfast inns
                                        </option>
                                        <option value="7011">
                                            7011 Hotels and Motels (casino hotels
                                        </option>
                                        <option value="7011">
                                            7011 Hotels and Motels (except hotels motels and bed and
                                            breakfast inns
                                        </option>
                                        <option value="7011">
                                            7011 Hotels and Motels (hotels except casino hotels and
                                            motels
                                        </option>
                                        <option value="3142">3142 House Slipper</option>
                                        <option value="2392">
                                            2392 Housefurnishings Except Curtains and Draperies
                                            (blanket laundry and wardrobe bags
                                        </option>
                                        <option value="2392">
                                            2392 Housefurnishings Except Curtains and Draperies (dust
                                            rags
                                        </option>
                                        <option value="2392">
                                            2392 Housefurnishings Except Curtains and Draperies
                                            (except mops dust rags and bags
                                        </option>
                                        <option value="2392">
                                            2392 Housefurnishings Except Curtains and Draperies (floor
                                            and dust mops
                                        </option>
                                        <option value="5722">5722 Household Appliance Store</option>
                                        <option value="3639">
                                            3639 Household Appliances NEC (except floor waxing and
                                            floor polishing machines and household sewing machines
                                        </option>
                                        <option value="3639">
                                            3639 Household Appliances NEC (floor waxing and floor
                                            polishing machines
                                        </option>
                                        <option value="3639">
                                            3639 Household Appliances NEC (household sewing machines
                                        </option>
                                        <option value="3651">
                                            3651 Household Audio and Video Equipmen
                                        </option>
                                        <option value="3631">
                                            3631 Household Cooking Equipmen
                                        </option>
                                        <option value="2519">2519 Household Furniture NE</option>
                                        <option value="3633">
                                            3633 Household Laundry Equipmen
                                        </option>
                                        <option value="3632">
                                            3632 Household Refrigerators and Home and Farm Freezer
                                        </option>
                                        <option value="3635">3635 Household Vacuum Cleaner</option>
                                        <option value="971">
                                            0971 Hunting and Trapping and Game Propagatio
                                        </option>
                                        <option value="2024">
                                            2024 Ice Cream and Frozen Dessert
                                        </option>
                                        <option value="2835">
                                            2835 In Vitro and In Vivo Diagnostic Substances (except
                                            in-vitro diagnostic substances
                                        </option>
                                        <option value="2835">
                                            2835 In Vitro and In Vivo Diagnostic Substances (in-vitro
                                            diagnostic substances
                                        </option>
                                        <option value="8322">
                                            8322 Individual and Family Social Services ( community
                                            food assistance services
                                        </option>
                                        <option value="8322">
                                            8322 Individual and Family Social Services (child and
                                            youth services
                                        </option>
                                        <option value="8322">
                                            8322 Individual and Family Social Services (emergency and
                                            relief services
                                        </option>
                                        <option value="8322">
                                            8322 Individual and Family Social Services (except
                                            services for children youth elderly and disabled;
                                            community food assistance services; housing services
                                            (except temporary) emergency and relief services and
                                            government parole or probation offices
                                        </option>
                                        <option value="8322">
                                            8322 Individual and Family Social Services (government
                                            parole and probation offices
                                        </option>
                                        <option value="8322">
                                            8322 Individual and Family Social Services (housing
                                            services except temporary shelter
                                        </option>
                                        <option value="8322">
                                            8322 Individual and Family Social Services (services for
                                            the elderly and disabled
                                        </option>
                                        <option value="8322">
                                            8322 Individual and Family Social Services (temporary
                                            shelter
                                        </option>
                                        <option value="3564">
                                            3564 Industrial and Commercial Fans and Blowers and Air
                                            Purification Equipment (air purification equipment
                                        </option>
                                        <option value="3564">
                                            3564 Industrial and Commercial Fans and Blowers and Air
                                            Purification Equipment (fans and blowers
                                        </option>
                                        <option value="3599">
                                            3599 Industrial and Commercial Machinery and Equipment NEC
                                            (carnival amusement park equipment
                                        </option>
                                        <option value="3599">
                                            3599 Industrial and Commercial Machinery and Equipment NEC
                                            (flexible metal hose
                                        </option>
                                        <option value="3599">
                                            3599 Industrial and Commercial Machinery and Equipment NEC
                                            (gasoline oil and intake filters for internal combustion
                                            engines except for motor vehicles
                                        </option>
                                        <option value="3599">
                                            3599 Industrial and Commercial Machinery and Equipment NEC
                                            (grinding castings for the trade
                                        </option>
                                        <option value="3599">
                                            3599 Industrial and Commercial Machinery and Equipment NEC
                                            (machine shops
                                        </option>
                                        <option value="3599">
                                            3599 Industrial and Commercial Machinery and Equipment NEC
                                            (other industrial and commercial machinery and equipment
                                        </option>
                                        <option value="3599">
                                            3599 Industrial and Commercial Machinery and Equipment NEC
                                            (water leak detectors
                                        </option>
                                        <option value="5113">
                                            5113 Industrial and Personal Service Paper (agents and
                                            brokers
                                        </option>
                                        <option value="5113">
                                            5113 Industrial and Personal Service Paper (business to
                                            business electronic markets
                                        </option>
                                        <option value="5113">
                                            5113 Industrial and Personal Service Paper (industrial and
                                            personal service paper sold via retail method
                                        </option>
                                        <option value="5113">
                                            5113 Industrial and Personal Service Paper (merchant
                                            wholesalers except those selling industrial and personal
                                            service paper via retail method
                                        </option>
                                        <option value="2813">2813 Industrial Gase</option>
                                        <option value="2819">
                                            2819 Industrial Inorganic Chemicals NEC (activated carbon
                                            and charcoal
                                        </option>
                                        <option value="2819">
                                            2819 Industrial Inorganic Chemicals NEC (alumina
                                        </option>
                                        <option value="2819">
                                            2819 Industrial Inorganic Chemicals NEC (except activated
                                            carbon and charcoal alumina recovering sulfur from natural
                                            gas and inorganic dyes
                                        </option>
                                        <option value="2819">
                                            2819 Industrial Inorganic Chemicals NEC (inorganic dyes
                                        </option>
                                        <option value="2819">
                                            2819 Industrial Inorganic Chemicals NEC (recovering sulfur
                                            from natural gas
                                        </option>
                                        <option value="3823">
                                            3823 Industrial Instruments for Measurement Display and
                                            Control of Process Variables; and Related Product
                                        </option>
                                        <option value="7218">7218 Industrial Launderer</option>
                                        <option value="5084">
                                            5084 Industrial Machinery and Equipment (agents and
                                            brokers
                                        </option>
                                        <option value="5084">
                                            5084 Industrial Machinery and Equipment (business to
                                            business electronic markets
                                        </option>
                                        <option value="5084">
                                            5084 Industrial Machinery and Equipment (merchant
                                            wholesalers
                                        </option>
                                        <option value="2869">
                                            2869 Industrial Organic Chemicals NEC (aliphatics
                                        </option>
                                        <option value="2869">
                                            2869 Industrial Organic Chemicals NEC (carbon bisulfide
                                        </option>
                                        <option value="2869">
                                            2869 Industrial Organic Chemicals NEC (cyclopropane
                                            diethylcyclohexane naphthalene sulfonic acid
                                        </option>
                                        <option value="2869">
                                            2869 Industrial Organic Chemicals NEC (ethyl alcohol
                                        </option>
                                        <option value="2869">
                                            2869 Industrial Organic Chemicals NEC (except aliphatics
                                            carbon bisulfide ethyl alcohol cyclopropane
                                            diethylcyclohexane napthalene sulfonic acid synthetic
                                            hydraulic fluids and fluorocarbon gases
                                        </option>
                                        <option value="2869">
                                            2869 Industrial Organic Chemicals NEC (fluorocarbon gases
                                        </option>
                                        <option value="2869">
                                            2869 Industrial Organic Chemicals NEC (synthetic hydraulic
                                            fluids
                                        </option>
                                        <option value="3543">3543 Industrial Pattern</option>
                                        <option value="3567">
                                            3567 Industrial Process Furnaces and Oven
                                        </option>
                                        <option value="1446">1446 Industrial San</option>
                                        <option value="5085">
                                            5085 Industrial Supplies (agents and brokers
                                        </option>
                                        <option value="5085">
                                            5085 Industrial Supplies (business to business electronic
                                            markets
                                        </option>
                                        <option value="5085">
                                            5085 Industrial Supplies (merchant wholesalers of fluid
                                            power accessories
                                        </option>
                                        <option value="5085">
                                            5085 Industrial Supplies (merchant wholesalers of
                                            industrial supplies except fluid power accessories and
                                            merchant wholesalers selling industrial supplies via
                                            retail method
                                        </option>
                                        <option value="5085">
                                            5085 Industrial Supplies (sold via retail method
                                        </option>
                                        <option value="3537">
                                            3537 Industrial Trucks Tractors Trailers and Stackers
                                            (except metal pallets and metal air cargo containers
                                        </option>
                                        <option value="3537">
                                            3537 Industrial Trucks Tractors Trailers and Stackers
                                            (metal air cargo containers
                                        </option>
                                        <option value="3537">
                                            3537 Industrial Trucks Tractors Trailers and Stackers
                                            (metal pallets
                                        </option>
                                        <option value="3491">3491 Industrial Valve</option>
                                        <option value="7375">
                                            7375 Information Retrieval Services (Internet service
                                            providers and Internet access providers
                                        </option>
                                        <option value="2816">
                                            2816 Inorganic Pigments (bone and lamp black
                                        </option>
                                        <option value="2816">
                                            2816 Inorganic Pigments (except bone and lamp black
                                        </option>
                                        <option value="1796">
                                            1796 Installation or Erection of Building Equipment NEC
                                            (installation of equipment not elsewhere specified such as
                                            central vacuum cleaning systems and dumb waiters
                                        </option>
                                        <option value="1796">
                                            1796 Installation or Erection of Building Equipment NEC
                                            (scrubber dust collection and other industrial ventilation
                                            installation
                                        </option>
                                        <option value="3825">
                                            3825 Instruments for Measuring and Testing of Electricity
                                            and Electrical Signals (automotive ammeters and voltmeters
                                        </option>
                                        <option value="3825">
                                            3825 Instruments for Measuring and Testing of Electricity
                                            and Electrical Signals (except automotive instruments
                                        </option>
                                        <option value="6411">
                                            6411 Insurance Agents Brokers and Service (except
                                            processors agents and brokers and claims adjusters
                                        </option>
                                        <option value="6411">
                                            6411 Insurance Agents Brokers and Service (insurance
                                            agents and brokers
                                        </option>
                                        <option value="6411">
                                            6411 Insurance Agents Brokers and Service (insurance
                                            claims adjusters
                                        </option>
                                        <option value="6411">
                                            6411 Insurance Agents Brokers and Service (processors
                                        </option>
                                        <option value="6399">6399 Insurance Carriers NE</option>
                                        <option value="4131">
                                            4131 Intercity and Rural Bus Transportatio
                                        </option>
                                        <option value="8052">
                                            8052 Intermediate Care Facilities (continuing care
                                            retirement communities)
                                        </option>
                                        <option value="8052">
                                            8052 Intermediate Care Facilities (except continuing care
                                            retirement communities and mental retardation facilities
                                        </option>
                                        <option value="8052">
                                            8052 Intermediate Care Facilities (mental retardation
                                            facilities
                                        </option>
                                        <option value="3519">
                                            3519 Internal Combustion Engines NEC (except stationary
                                            engine radiators
                                        </option>
                                        <option value="3519">
                                            3519 Internal Combustion Engines NEC (stationary engine
                                            radiators
                                        </option>
                                        <option value="9721">9721 International Affair</option>
                                        <option value="6282">
                                            6282 Investment Advice (except portfolio managers
                                        </option>
                                        <option value="6282">
                                            6282 Investment Advice (portfolio managers
                                        </option>
                                        <option value="6799">
                                            6799 Investors NEC (commodity contract pool operators
                                        </option>
                                        <option value="6799">
                                            6799 Investors NEC (commodity contract trading companies
                                        </option>
                                        <option value="6799">
                                            6799 Investors NEC (venture capital companies investment
                                            clubs and speculators for own account
                                        </option>
                                        <option value="134">0134 Irish Potatoe</option>
                                        <option value="3462">3462 Iron and Steel Forging</option>
                                        <option value="1011">1011 Iron Ore</option>
                                        <option value="4971">4971 Irrigation System</option>
                                        <option value="3915">
                                            3915 Jewelers Findings and Materials and Lapidary Work
                                            (watch jewels
                                        </option>
                                        <option value="3915">
                                            3915 Jewelers' Findings and Materials and Lapidary Work
                                            (except watch jewels
                                        </option>
                                        <option value="3911">3911 Jewelry Precious Meta</option>
                                        <option value="5094">
                                            5094 Jewelry Watches Precious Stones and Precious Metals
                                            (agents and brokers
                                        </option>
                                        <option value="5094">
                                            5094 Jewelry Watches Precious Stones and Precious Metals
                                            (business to business electronic markets
                                        </option>
                                        <option value="5094">
                                            5094 Jewelry Watches Precious Stones and Precious Metals
                                            (jewelry and related goods sold via retail method
                                        </option>
                                        <option value="5094">
                                            5094 Jewelry Watches Precious Stones and Precious Metals
                                            (merchant wholesalers except those selling jewelry and
                                            related goods via retail method
                                        </option>
                                        <option value="5944">5944 Jewelry Store</option>
                                        <option value="8331">
                                            8331 Job Training and Vocational Rehabilitation Service
                                        </option>
                                        <option value="8222">
                                            8222 Junior Colleges and Technical Institute
                                        </option>
                                        <option value="1455">1455 Kaolin and Ball Cla</option>
                                        <option value="8092">8092 Kidney Dialysis Center</option>
                                        <option value="2253">
                                            2253 Knit Outerwear Mills (dyeing and finishing knit
                                            outerwear without knitting outerwear
                                        </option>
                                        <option value="2253">
                                            2253 Knit Outerwear Mills (except bath and lounging robes
                                            and dying and finish without knitting garments
                                        </option>
                                        <option value="2253">
                                            2253 Knit Outerwear Mills (knitting bath or lounging robes
                                        </option>
                                        <option value="2254">
                                            2254 Knit Underwear and Nightwear Mills (dyeing and
                                            finishing underwear and nightwear without knitting
                                            garments
                                        </option>
                                        <option value="2254">
                                            2254 Knit Underwear and Nightwear Mills (except dyeing and
                                            finishing underwear and nightwear without knitting
                                            garments
                                        </option>
                                        <option value="2259">
                                            2259 Knitting Mills NEC (dyeing and finishing knit gloves
                                            and mittens without knitting gloves or mittens
                                        </option>
                                        <option value="2259">
                                            2259 Knitting Mills NEC (knitting girdles and allied
                                            foundation garments
                                        </option>
                                        <option value="2259">
                                            2259 Knitting Mills NEC (knitting gloves and mittens
                                        </option>
                                        <option value="2259">
                                            2259 Knitting Mills NEC (knitting lace or warp fabric and
                                            fabricating textile products such as bedspreads curtains
                                            or towels
                                        </option>
                                        <option value="2259">
                                            2259 Knitting Mills NEC (knitting weft fabric and
                                            fabricating textile products such as bedspreads curtains
                                            or towels
                                        </option>
                                        <option value="8631">
                                            8631 Labor Unions and Similar Labor Organization
                                        </option>
                                        <option value="3826">
                                            3826 Laboratory Analytical Instrument
                                        </option>
                                        <option value="3821">
                                            3821 Laboratory Apparatus and Furnitur
                                        </option>
                                        <option value="2258">
                                            2258 Lace and Warp Knit Fabric Mills (except finishing
                                            lace or warp fabric without knitting lace or warp fabric
                                        </option>
                                        <option value="2258">
                                            2258 Lace and Warp Knit Fabric Mills (finishing lace or
                                            warp fabric without knitting lace or warp fabric
                                        </option>
                                        <option value="3083">
                                            3083 Laminated Plastics Plate Sheet and Profile Shape
                                        </option>
                                        <option value="9512">
                                            9512 Land Mineral Wildlife and Forest Conservatio
                                        </option>
                                        <option value="6552">
                                            6552 Land Subdividers and Developers Except Cemeterie
                                        </option>
                                        <option value="781">
                                            0781 Landscape Counseling and Planning (except
                                            horticultural consulting
                                        </option>
                                        <option value="781">
                                            0781 Landscape Counseling and Planning (horticulture
                                            consulting
                                        </option>
                                        <option value="7219">
                                            7219 Laundry and Garment Services NEC (alteration and
                                            repair
                                        </option>
                                        <option value="7219">
                                            7219 Laundry and Garment Services NEC (diaper service
                                        </option>
                                        <option value="7219">
                                            7219 Laundry and Garment Services NEC (except diaper
                                            service and clothing alteration and repair
                                        </option>
                                        <option value="782">0782 Lawn and Garden Service</option>
                                        <option value="3524">
                                            3524 Lawn and Garden Tractors and Home Lawn and Garden
                                            Equipment (except nonpowered lawnmowers
                                        </option>
                                        <option value="3524">
                                            3524 Lawn and Garden Tractors and Home Lawn and Garden
                                            Equipment (nonpowered lawnmowers
                                        </option>
                                        <option value="1031">1031 Lead and Zinc Ore</option>
                                        <option value="3952">
                                            3952 Lead Pencils Crayons and Artists' Materials (drafting
                                            tables and boards
                                        </option>
                                        <option value="3952">
                                            3952 Lead Pencils Crayons and Artists' Materials (except
                                            drawing ink india ink drafting tables and drafting boards
                                        </option>
                                        <option value="3952">
                                            3952 Lead Pencils and Art Goods (drawing inks and india
                                            ink
                                        </option>
                                        <option value="2386">
                                            2386 Leather and Sheep-lined Clothing (except contractors
                                        </option>
                                        <option value="2386">
                                            2386 Leather and Sheep-Lined Clothing (men's and boys'
                                            contractors
                                        </option>
                                        <option value="2386">
                                            2386 Leather and Sheep-Lined Clothing (women's girls' and
                                            infants' contractors
                                        </option>
                                        <option value="3151">
                                            3151 Leather Gloves and Mittens (except contractors
                                        </option>
                                        <option value="3151">
                                            3151 Leather Gloves and Mittens (men's and boys'
                                            contractors
                                        </option>
                                        <option value="3151">
                                            3151 Leather Gloves and Mittens (women's girls' and
                                            infants' contractors
                                        </option>
                                        <option value="3199">3199 Leather Goods NE</option>
                                        <option value="3111">
                                            3111 Leather Tanning and Finishin
                                        </option>
                                        <option value="9222">
                                            9222 Legal Counsel and Prosecutio
                                        </option>
                                        <option value="8111">8111 Legal Service</option>
                                        <option value="9121">9121 Legislative Bodie</option>
                                        <option value="6517">
                                            6517 Lessors of Railroad Propert
                                        </option>
                                        <option value="6519">
                                            6519 Lessors of Real Property NE
                                        </option>
                                        <option value="8231">8231 Librarie</option>
                                        <option value="6311">
                                            6311 Life Insurance (burial insurance
                                        </option>
                                        <option value="6311">
                                            6311 Life Insurance (life insurers-direct
                                        </option>
                                        <option value="6311">
                                            6311 Life Insurance (reinsurers
                                        </option>
                                        <option value="3648">3648 Lighting Equipment NE</option>
                                        <option value="3274">3274 Lim</option>
                                        <option value="7213">7213 Linen Suppl</option>
                                        <option value="3996">
                                            3996 Linoleum Asphalted-Felt-Base and Other Hard Surface
                                            Floor Coverings NE
                                        </option>
                                        <option value="5984">
                                            5984 Liquefied Petroleum Gas (Bottled Gas) Dealer
                                        </option>
                                        <option value="5921">5921 Liquor Store</option>
                                        <option value="5154">
                                            5154 Livestock (agents and brokers
                                        </option>
                                        <option value="5154">
                                            5154 Livestock (business to business electronic markets
                                        </option>
                                        <option value="5154">
                                            5154 Livestock (merchant wholesalers
                                        </option>
                                        <option value="751">
                                            0751 Livestock Services Except Veterinary (custom
                                            slaughtering
                                        </option>
                                        <option value="751">
                                            0751 Livestock Services Except Veterinary (except custom
                                            slaughtering
                                        </option>
                                        <option value="6163">6163 Loan Broker</option>
                                        <option value="4111">
                                            4111 Local and Suburban Transit (airport transportation
                                            service
                                        </option>
                                        <option value="4111">
                                            4111 Local and Suburban Transit (bus and motor vehicle
                                        </option>
                                        <option value="4111">
                                            4111 Local and Suburban Transit (commuter rail
                                        </option>
                                        <option value="4111">
                                            4111 Local and Suburban Transit (except mixed mode
                                            commuter rail airport transportation service and bus and
                                            motor vehicle
                                        </option>
                                        <option value="4111">
                                            4111 Local and Suburban Transit (mixed mode
                                        </option>
                                        <option value="4141">4141 Local Bus Charter Servic</option>
                                        <option value="4119">
                                            4119 Local Passenger Transportation NEC (employee
                                            transportation
                                        </option>
                                        <option value="4119">
                                            4119 Local Passenger Transportation NEC (hearse rental
                                            with driver and carpool and vanpool operation
                                        </option>
                                        <option value="4119">
                                            4119 Local Passenger Transportation NEC (land ambulance
                                        </option>
                                        <option value="4119">
                                            4119 Local Passenger Transportation NEC (limousine rental
                                            with driver and automobile rental with driver
                                        </option>
                                        <option value="4119">
                                            4119 Local Passenger Transportation NEC (sightseeing buses
                                            and cable and cog railways except scenic
                                        </option>
                                        <option value="4119">
                                            4119 Local Passenger Transportation NEC (special needs
                                            transportation
                                        </option>
                                        <option value="4214">
                                            4214 Local Trucking With Storage (general freight
                                        </option>
                                        <option value="4214">
                                            4214 Local Trucking With Storage (household goods moving
                                        </option>
                                        <option value="4214">
                                            4214 Local Trucking With Storage (specialized freight
                                        </option>
                                        <option value="4212">
                                            4212 Local Trucking Without Storage (general freight
                                        </option>
                                        <option value="4212">
                                            4212 Local Trucking Without Storage (hazardous waste
                                            collection without disposal
                                        </option>
                                        <option value="4212">
                                            4212 Local Trucking Without Storage (household goods
                                            moving
                                        </option>
                                        <option value="4212">
                                            4212 Local Trucking Without Storage (other waste
                                            collection without disposal
                                        </option>
                                        <option value="4212">
                                            4212 Local Trucking Without Storage (solid waste
                                            collection without disposal
                                        </option>
                                        <option value="4212">
                                            4212 Local Trucking Without Storage (specialized freight
                                        </option>
                                        <option value="2411">2411 Loggin</option>
                                        <option value="2992">
                                            2992 Lubricating Oils and Grease
                                        </option>
                                        <option value="3161">3161 Luggag</option>
                                        <option value="5948">
                                            5948 Luggage and Leather Goods Store
                                        </option>
                                        <option value="5031">
                                            5031 Lumber Plywood Millwork and Wood Panels (agents and
                                            brokers
                                        </option>
                                        <option value="5031">
                                            5031 Lumber Plywood Millwork and Wood Panels (business to
                                            business electronic markets
                                        </option>
                                        <option value="5031">
                                            5031 Lumber Plywood Millwork and Wood Panels (merchant
                                            wholesalers
                                        </option>
                                        <option value="5031">
                                            5031 Lumber Plywood Millwork and Wood Panels (sold via
                                            retail method
                                        </option>
                                        <option value="5211">
                                            5211 Lumber and Other Building Materials Dealers (except
                                            home center stores
                                        </option>
                                        <option value="5211">
                                            5211 Lumber and Other Building Materials Dealers (home
                                            center stores
                                        </option>
                                        <option value="2098">
                                            2098 Macaroni Spaghetti Vermicelli and Noodle
                                        </option>
                                        <option value="3541">
                                            3541 Machine Tools Metal Cutting Type
                                        </option>
                                        <option value="3542">
                                            3542 Machine Tools Metal Forming Typ
                                        </option>
                                        <option value="3695">
                                            3695 Magnetic and Optical Recording Medi
                                        </option>
                                        <option value="3322">3322 Malleable Iron Foundrie</option>
                                        <option value="2083">2083 Mal</option>
                                        <option value="2082">
                                            2082 Malt Beverages (except malt extract
                                        </option>
                                        <option value="2082">
                                            2082 Malt Beverages (malt extract
                                        </option>
                                        <option value="8742">
                                            8742 Management Consulting Services (administrative
                                            management and general management consulting
                                        </option>
                                        <option value="8742">
                                            8742 Management Consulting Services (human resources and
                                            personnel management consulting
                                        </option>
                                        <option value="8742">
                                            8742 Management Consulting Services (manufacturing
                                            management physical distribution and site location
                                            consulting
                                        </option>
                                        <option value="8742">
                                            8742 Management Consulting Services (marketing consulting
                                        </option>
                                        <option value="6722">
                                            6722 Management Investment Offices Open-End
                                        </option>
                                        <option value="8741">
                                            8741 Management Services (commercial and institutional
                                            building construction management
                                        </option>
                                        <option value="8741">
                                            8741 Management Services (construction management for
                                            other heavy and civil engineering construction)
                                        </option>
                                        <option value="8741">
                                            8741 Management Services (construction management of oil
                                            and gas pipelines and related structure construction
                                            projects
                                        </option>
                                        <option value="8741">
                                            8741 Management Services (construction management of power
                                            generation [except hydroelectric] facilities and
                                            transmission and distribution station construction
                                            projects
                                        </option>
                                        <option value="8741">
                                            8741 Management Services (construction management of water
                                            sewer and related structure construction projects
                                        </option>
                                        <option value="8741">
                                            8741 Management Services (except construction management
                                        </option>
                                        <option value="8741">
                                            8741 Management Services (highway street and bridge
                                            construction management
                                        </option>
                                        <option value="8741">
                                            8741 Management Services (industrial building and
                                            nonbuilding structure construction management
                                        </option>
                                        <option value="8741">
                                            8741 Management Services (multifamily housing construction
                                            management
                                        </option>
                                        <option value="8741">
                                            8741 Management Services (residential remodeling
                                            construction management
                                        </option>
                                        <option value="8741">
                                            8741 Management Services (single-family housing
                                            construction management
                                        </option>
                                        <option value="2761">2761 Manifold Business Form</option>
                                        <option value="2824">
                                            2824 Manmade Organic Fibers Except Cellulosi
                                        </option>
                                        <option value="2097">2097 Manufactured Ic</option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (beauty and barber
                                            chairs
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (beauty and barber shop
                                            equipment except chairs
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (burnt wood articles
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (electric hair clippers
                                            for humans
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (embroidery kits
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (flocking metal products
                                            for the trade
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (fur dressing and
                                            finishing
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (hand operated hair
                                            clippers for humans
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (lamp shades of paper or
                                            textile
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (matches
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (other miscellaneous
                                            metal products such as combs hair curlers etc.
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (other miscellaneous
                                            products not specially provided for previously
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (plastics products such
                                            as combs hair curlers etc.
                                        </option>
                                        <option value="3999">
                                            3999 Manufacturing Industries NEC (tape measures
                                        </option>
                                        <option value="4493">4493 Marina</option>
                                        <option value="4491">
                                            4491 Marine Cargo Handling (all but dock and pier
                                            operations
                                        </option>
                                        <option value="4491">
                                            4491 Marine Cargo Handling (dock and pier operations
                                        </option>
                                        <option value="3953">3953 Marking Device</option>
                                        <option value="1741">
                                            1741 Masonry Stone Setting and Other Stone Wor
                                        </option>
                                        <option value="2515">
                                            2515 Mattresses Foundations and Convertible Beds
                                            (convertible beds
                                        </option>
                                        <option value="2515">
                                            2515 Mattresses Foundations and Convertible Beds
                                            (mattresses and foundations
                                        </option>
                                        <option value="3829">
                                            3829 Measuring and Controlling Devices NEC (electronic
                                            chronometers
                                        </option>
                                        <option value="3829">
                                            3829 Measuring and Controlling Devices NEC (except medical
                                            thermometers electronic chronometers and motor vehicle
                                            gauges
                                        </option>
                                        <option value="3829">
                                            3829 Measuring and Controlling Devices NEC (medical
                                            thermometers
                                        </option>
                                        <option value="3829">
                                            3829 Measuring and Controlling Devices NEC (motor vehicle
                                            gauges
                                        </option>
                                        <option value="3586">
                                            3586 Measuring and Dispensing Pump
                                        </option>
                                        <option value="5421">
                                            5421 Meat and Fish (Seafood) Markets Including Freezer
                                            Provisioners (freezer provisioners
                                        </option>
                                        <option value="5421">
                                            5421 Meat and Fish (Seafood) Markets Including Freezer
                                            Provisioners (meat except freezer provisioners
                                        </option>
                                        <option value="5421">
                                            5421 Meat and Fish (Seafood) Markets Including Freezer
                                            Provisioners (seafood
                                        </option>
                                        <option value="5147">
                                            5147 Meat and Meat Products (meat and meat products sold
                                            via retail method
                                        </option>
                                        <option value="2011">2011 Meat Packing Plant</option>
                                        <option value="5147">
                                            5147 Meats and Meat Products (agents and brokers
                                        </option>
                                        <option value="5147">
                                            5147 Meats and Meat Products (boxed beef
                                        </option>
                                        <option value="5147">
                                            5147 Meats and Meat Products (business to business
                                            electronic markets
                                        </option>
                                        <option value="5147">
                                            5147 Meats and Meat Products (merchant wholesalers except
                                            boxed beef manufacturers and merchant wholesalers selling
                                            meats and meat products via retail method
                                        </option>
                                        <option value="3568">
                                            3568 Mechanical Power Transmission Equipment NE
                                        </option>
                                        <option value="5047">
                                            5047 Medical Dental and Hospital Equipment and Supplies
                                            (medical dental and hospital equipment and supplies sold
                                            via retail method
                                        </option>
                                        <option value="5047">
                                            5047 Medical Dental and Hospital Equipment and Supplies
                                            (agents and brokers
                                        </option>
                                        <option value="5047">
                                            5047 Medical Dental and Hospital Equipment and Supplies
                                            (business to business electronic markets
                                        </option>
                                        <option value="5047">
                                            5047 Medical Dental and Hospital Equipment and Supplies
                                            (merchant wholesalers except those selling medical dental
                                            and hospital equipment and supplies via retail method
                                        </option>
                                        <option value="7352">
                                            7352 Medical Equipment Rental and Leasing (home health
                                            furniture and equipment rental and leasing
                                        </option>
                                        <option value="7352">
                                            7352 Medical Equipment Rental and Leasing (medical
                                            machinery and equipment except home health furniture and
                                            equipment rental and leasing
                                        </option>
                                        <option value="8071">
                                            8071 Medical Laboratories (diagnostic imaging centers
                                        </option>
                                        <option value="8071">
                                            8071 Medical Laboratories (except diagnostic imaging
                                            centers
                                        </option>
                                        <option value="2833">
                                            2833 Medicinal Chemicals and Botanical Product
                                        </option>
                                        <option value="8699">
                                            8699 Membership Organizations NEC (athletic associations
                                        </option>
                                        <option value="8699">
                                            8699 Membership Organizations NEC (except humane societies
                                            farm business organizations athletic associations and
                                            travel motor clubs
                                        </option>
                                        <option value="8699">
                                            8699 Membership Organizations NEC (farm business
                                            organizations
                                        </option>
                                        <option value="8699">
                                            8699 Membership Organizations NEC (humane societies
                                        </option>
                                        <option value="8699">
                                            8699 Membership Organizations NEC (travel motor clubs
                                        </option>
                                        <option value="7997">
                                            7997 Membership Sports and Recreation Clubs (flying clubs
                                            primarily providing a variety of flying services to the
                                            public using general purpose aircraft
                                        </option>
                                        <option value="7997">
                                            7997 Membership Sports and Recreation Clubs (flying fields
                                            operated by aviation clubs
                                        </option>
                                        <option value="7997">
                                            7997 Membership Sports and Recreation Clubs (golf clubs
                                        </option>
                                        <option value="7997">
                                            7997 Membership Sports and Recreation Clubs (recreation
                                            clubs with facilities
                                        </option>
                                        <option value="7997">
                                            7997 Membership Sports and Recreation Clubs (recreation
                                            clubs without facilities
                                        </option>
                                        <option value="5611">
                                            5611 Men's and Boys' Clothing and Accessory Stores
                                            (clothing stores
                                        </option>
                                        <option value="5136">
                                            5136 Men's and Boys' Clothing and Furnishings (men's and
                                            boys' apparel except uniforms and work clothing sold via
                                            retail method
                                        </option>
                                        <option value="5136">
                                            5136 Men's and Boys' Clothing and Furnishings (merchant
                                            wholesalers of athletic uniforms
                                        </option>
                                        <option value="5136">
                                            5136 Men's and Boys' Clothing and Furnishings (uniforms
                                            and work clothing sold via retail method
                                        </option>
                                        <option value="2323">
                                            2323 Men's and Boys' Neckwear (contractors
                                        </option>
                                        <option value="2329">
                                            2329 Men?s and Boys? Clothing NEC (contractors
                                        </option>
                                        <option value="2329">
                                            2329 Men?s and Boys? Clothing NEC (except team athletic
                                            uniforms and contractors
                                        </option>
                                        <option value="2329">
                                            2329 Men?s and Boys? Clothing NEC (team athletic uniforms
                                            except contractors
                                        </option>
                                        <option value="5611">
                                            5611 Men?s and Boys? Clothing and Accessory Stores
                                            (accessories
                                        </option>
                                        <option value="5136">
                                            5136 Men?s and Boys? Clothing and Furnishings (agents and
                                            brokers
                                        </option>
                                        <option value="5136">
                                            5136 Men?s and Boys? Clothing and Furnishings (business to
                                            business electronic markets
                                        </option>
                                        <option value="5136">
                                            5136 Men?s and Boys? Clothing and Furnishings (merchant
                                            wholesalers except wholesaling athletic uniforms and
                                            uniforms and merchant wholesalers selling work clothing
                                            via retail method
                                        </option>
                                        <option value="2323">
                                            2323 Men?s and Boys? Neckwear (except contractors
                                        </option>
                                        <option value="2325">
                                            2325 Men?s and Boys? Separate Trousers and Slacks
                                            (contractors
                                        </option>
                                        <option value="2325">
                                            2325 Men?s and Boys? Separate Trousers and Slacks (except
                                            contractors
                                        </option>
                                        <option value="2321">
                                            2321 Men?s and Boys? Shirts Except Work Shirts
                                            (contractors
                                        </option>
                                        <option value="2321">
                                            2321 Men?s and Boys? Shirts Except Work Shirts (except
                                            contractors
                                        </option>
                                        <option value="2311">
                                            2311 Men?s and Boys? Suits Coats and Overcoats
                                            (contractors
                                        </option>
                                        <option value="2311">
                                            2311 Men?s and Boys? Suits Coats and Overcoats (except
                                            contractors
                                        </option>
                                        <option value="2322">
                                            2322 Men?s and Boys? Underwear and Nightwear (contractors
                                        </option>
                                        <option value="2322">
                                            2322 Men?s and Boys? Underwear and Nightwear (except
                                            contractors
                                        </option>
                                        <option value="2326">
                                            2326 Men?s and Boys? Work Clothing (contractors
                                        </option>
                                        <option value="2326">
                                            2326 Men?s and Boys? Work Clothing (except contractors
                                        </option>
                                        <option value="3143">
                                            3143 Men?s Footwear Except Athleti
                                        </option>
                                        <option value="3411">3411 Metal Can</option>
                                        <option value="3442">
                                            3442 Metal Doors Sash Frames Molding and Tri
                                        </option>
                                        <option value="3497">
                                            3497 Metal Foil and Leaf (foil and foil containers
                                        </option>
                                        <option value="3497">
                                            3497 Metal Foil and Leaf (laminated aluminum foil rolls
                                            and sheets for flexible packaging uses
                                        </option>
                                        <option value="3398">3398 Metal Heat Treatin</option>
                                        <option value="2514">
                                            2514 Metal Household Furniture (except upholstered metal
                                            furniture and metal box spring frames
                                        </option>
                                        <option value="2514">
                                            2514 Metal Household Furniture (metal box spring frames
                                        </option>
                                        <option value="2514">
                                            2514 Metal Household Furniture (upholstered
                                        </option>
                                        <option value="1081">
                                            1081 Metal Mining Services (except site preparation and
                                            related activities performed on a contract or fee basis
                                            and geophysical surveying and mapping
                                        </option>
                                        <option value="1081">
                                            1081 Metal Mining Services (geophysical surveying and
                                            mapping
                                        </option>
                                        <option value="1081">
                                            1081 Metal Mining Services (site preparation and related
                                            construction activities on a contract basis
                                        </option>
                                        <option value="3412">
                                            3412 Metal Shipping Barrels Drums Kegs and Pail
                                        </option>
                                        <option value="3469">
                                            3469 Metal Stampings NEC (except kitchen utensils pots and
                                            pans for cooking coins and stamped metal boxes
                                        </option>
                                        <option value="3469">
                                            3469 Metal Stampings NEC (kitchen utensils pots and pans
                                            for cooking
                                        </option>
                                        <option value="3469">
                                            3469 Metal Stampings NEC (stamped metal tool cash mail and
                                            lunch boxes
                                        </option>
                                        <option value="5051">
                                            5051 Metals Service Centers and Offices (agents and
                                            brokers)
                                        </option>
                                        <option value="5051">
                                            5051 Metals Service Centers and Offices (business to
                                            business electronic markets)
                                        </option>
                                        <option value="5051">
                                            5051 Metals Service Centers and Offices (merchant
                                            wholesalers)
                                        </option>
                                        <option value="3549">3549 Metalworking Machinery NE</option>
                                        <option value="2431">
                                            2431 Millwork (except wood doors and windows
                                        </option>
                                        <option value="2431">
                                            2431 Millwork (wood windows and doors
                                        </option>
                                        <option value="3296">3296 Mineral Woo</option>
                                        <option value="3295">
                                            3295 Minerals and Earths Ground or Otherwise Treated
                                            (except grinding washing separating etc. of nonmetallic
                                            minerals
                                        </option>
                                        <option value="3295">
                                            3295 Minerals and Earths Ground or Otherwise Treated
                                            (grinding washing separating etc. of chemical and
                                            fertilizer minerals nec
                                        </option>
                                        <option value="3295">
                                            3295 Minerals and Earths Ground or Otherwise Treated
                                            (grinding washing separating etc. of clay ceramic and
                                            refractory minerals nec
                                        </option>
                                        <option value="3295">
                                            3295 Minerals and Earths Ground or Otherwise Treated
                                            (grinding washing separating etc. of kaolin and ball clay
                                        </option>
                                        <option value="3295">
                                            3295 Minerals and Earths Ground or Otherwise Treated
                                            (grinding washing separating etc. of nonmetallic minerals
                                            nec
                                        </option>
                                        <option value="3532">
                                            3532 Mining Machinery and Equipment Except Oil and Gas
                                            Field Machinery and Equipmen
                                        </option>
                                        <option value="5699">
                                            5699 Miscellaneous Apparel and Accessory Stores
                                            (accessories
                                        </option>
                                        <option value="5699">
                                            5699 Miscellaneous Apparel and Accessory Stores (custom
                                            dressmakers
                                        </option>
                                        <option value="5699">
                                            5699 Miscellaneous Apparel and Accessory Stores (custom
                                            tailors
                                        </option>
                                        <option value="5699">
                                            5699 Miscellaneous Apparel and Accessory Stores (custom
                                            tailors
                                        </option>
                                        <option value="5699">
                                            5699 Miscellaneous Apparel and Accessory Stores
                                            (miscellaneous apparel except accessories and custom
                                            tailors
                                        </option>
                                        <option value="6159">
                                            6159 Miscellaneous Business Credit Institutions (except
                                            trade banks farm mortgage companies secondary market
                                            financing and finance leasing combined with sales
                                            financing
                                        </option>
                                        <option value="6159">
                                            6159 Miscellaneous Business Credit Institutions (farm
                                            mortgage companies
                                        </option>
                                        <option value="6159">
                                            6159 Miscellaneous Business Credit Institutions (finance
                                            leasing combined with sales financing
                                        </option>
                                        <option value="6159">
                                            6159 Miscellaneous Business Credit Institutions (secondary
                                            market financing
                                        </option>
                                        <option value="6159">
                                            6159 Miscellaneous Business Credit Institutions (trade
                                            banks
                                        </option>
                                        <option value="7389">
                                            7389 Miscellaneous Business Services (bail bonding
                                        </option>
                                        <option value="3496">
                                            3496 Miscellaneous Fabricated Wire Products (except
                                            shopping carts and potato mashers
                                        </option>
                                        <option value="3496">
                                            3496 Miscellaneous Fabricated Wire Products (potato
                                            mashers
                                        </option>
                                        <option value="3496">
                                            3496 Miscellaneous Fabricated Wire Products (shopping
                                            carts made from purchased wire
                                        </option>
                                        <option value="5499">
                                            5499 Miscellaneous Food Stores (except food supplement
                                            stores and poultry stores
                                        </option>
                                        <option value="5499">
                                            5499 Miscellaneous Food Stores (food supplements
                                        </option>
                                        <option value="5499">
                                            5499 Miscellaneous Food Stores (poultry and poultry
                                            products
                                        </option>
                                        <option value="5399">
                                            5399 Miscellaneous General Merchandise Stores (except
                                            warehouse club and supermarket/general merchandise
                                            combination
                                        </option>
                                        <option value="5399">
                                            5399 Miscellaneous General Merchandise Stores (warehouse
                                            clubs and supermarket/general merchandise combination
                                        </option>
                                        <option value="5719">
                                            5719 Miscellaneous Homefurnishings Stores (blinds and
                                            shades
                                        </option>
                                        <option value="5719">
                                            5719 Miscellaneous Homefurnishings Stores (except pottery
                                            and crafts made and sold on site and window furnishings)
                                        </option>
                                        <option value="5719">
                                            5719 Miscellaneous Homefurnishings Stores (manufacturing
                                            and selling pottery on site
                                        </option>
                                        <option value="919">
                                            0919 Miscellaneous Marine Products (catching sea urchins
                                        </option>
                                        <option value="919">
                                            0919 Miscellaneous Marine Products (cultured pearl
                                            production
                                        </option>
                                        <option value="919">
                                            0919 Miscellaneous Marine Products (except plant
                                            aquaculture cultured pearl production and catching sea
                                            urchins
                                        </option>
                                        <option value="919">
                                            0919 Miscellaneous Marine Products (plant aquaculture
                                        </option>
                                        <option value="1099">
                                            1099 Miscellaneous Metal Ores NE
                                        </option>
                                        <option value="1499">
                                            1499 Miscellaneous Nonmetallic Minerals Except Fuels
                                            (bituminous limestone and bituminous sandstone
                                        </option>
                                        <option value="1499">
                                            1499 Miscellaneous Nonmetallic Minerals Except Fuels
                                            (except bituminous limestone and bituminous sandstone
                                        </option>
                                        <option value="7299">
                                            7299 Miscellaneous Personal Services NEC (babysitting
                                            bureaus
                                        </option>
                                        <option value="7299">
                                            7299 Miscellaneous Personal Services NEC (consumer
                                            bartering services
                                        </option>
                                        <option value="7299">
                                            7299 Miscellaneous Personal Services NEC (consumer credit
                                            and debt counseling services
                                        </option>
                                        <option value="7299">
                                            7299 Miscellaneous Personal Services NEC (diet and weight
                                            reducing services
                                        </option>
                                        <option value="7299">
                                            7299 Miscellaneous Personal Services NEC (except diet and
                                            weight reducing services personal care services valet
                                            parking services babysitting bureaus debt and credit
                                            counseling consumer bartering services and formal wear and
                                            costume rental
                                        </option>
                                        <option value="7299">
                                            7299 Miscellaneous Personal Services NEC (formal wear and
                                            costume rental
                                        </option>
                                        <option value="7299">
                                            7299 Miscellaneous Personal Services NEC (personal care
                                            services
                                        </option>
                                        <option value="7299">
                                            7299 Miscellaneous Personal Services NEC (valet parking
                                            services
                                        </option>
                                        <option value="2741">
                                            2741 Miscellaneous Publishing (directory publishers except
                                            Internet publishers
                                        </option>
                                        <option value="2741">
                                            2741 Miscellaneous Publishing (except database advertising
                                            periodicals shopping news technical manuals and books and
                                            sheet music publishing or publishing and printing and
                                            Internet versions of these activities
                                        </option>
                                        <option value="2741">
                                            2741 Miscellaneous Publishing (miscellaneous Internet
                                            publishing
                                        </option>
                                        <option value="2741">
                                            2741 Miscellaneous Publishing (sheet music publishing or
                                            publishing and printing
                                        </option>
                                        <option value="2741">
                                            2741 Miscellaneous Publishing (shopping news and
                                            advertising periodical publishing or publishing and
                                            printing except Internet
                                        </option>
                                        <option value="2741">
                                            2741 Miscellaneous Publishing (technical manuals and books
                                            publishing or publishing and printing except Internet
                                        </option>
                                        <option value="5999">
                                            5999 Miscellaneous Retail Stores NEC (art dealer
                                        </option>
                                        <option value="5999">
                                            5999 Miscellaneous Retail Stores NEC (except art dealers
                                            pet and pet supplies hearing aids artificial limbs
                                            cosmetics telephones sunglasses manufacture of orthopedic
                                            devices to prescription in a retail environment and
                                            typewriters
                                        </option>
                                        <option value="5999">
                                            5999 Miscellaneous Retail Stores NEC (cosmetics and
                                            perfumes
                                        </option>
                                        <option value="5999">
                                            5999 Miscellaneous Retail Stores NEC (hearing aids and
                                            artificial limbs
                                        </option>
                                        <option value="5999">
                                            5999 Miscellaneous Retail Stores NEC (manufacture of
                                            orthopedic devices to prescription in a retail environment
                                        </option>
                                        <option value="5999">
                                            5999 Miscellaneous Retail Stores NEC (pet and pet supplies
                                        </option>
                                        <option value="5999">
                                            5999 Miscellaneous Retail Stores NEC (typewriters and
                                            telephones
                                        </option>
                                        <option value="3449">
                                            3449 Miscellaneous Structural Metal Work (curtain wall and
                                            metal plaster bases and lath
                                        </option>
                                        <option value="3449">
                                            3449 Miscellaneous Structural Metal Work (custom roll
                                            forming
                                        </option>
                                        <option value="3449">
                                            3449 Miscellaneous Structural Metal Work (fabricated bar
                                            joists and concrete reinforcing bars
                                        </option>
                                        <option value="4925">
                                            4925 Mixed Manufactured or Liquefied Petroleum Gas
                                            Production and/or Distributio
                                        </option>
                                        <option value="5271">5271 Mobile Home Dealer</option>
                                        <option value="2451">2451 Mobile Home</option>
                                        <option value="3061">
                                            3061 Molded Extruded and Lathe-Cut Mechanical Rubber Good
                                        </option>
                                        <option value="6162">
                                            6162 Mortgage Bankers and Loan Correspondents (mortgage
                                            servicing
                                        </option>
                                        <option value="6162">
                                            6162 Mortgage Bankers and Loan Correspondents (mortgage
                                            bankers and originators
                                        </option>
                                        <option value="7822">
                                            7822 Motion Picture and Video Tape Distribution (except
                                            video tape and cassette wholesalers
                                        </option>
                                        <option value="7822">
                                            7822 Motion Picture and Video Tape Distribution
                                            (prerecorded video tape and cassette wholesalers
                                        </option>
                                        <option value="7812">
                                            7812 Motion Picture and Video Tape Productio
                                        </option>
                                        <option value="7832">
                                            7832 Motion Picture Theaters Except Drive-I
                                        </option>
                                        <option value="3716">3716 Motor Home</option>
                                        <option value="5511">
                                            5511 Motor Vehicle Dealers (New and Used
                                        </option>
                                        <option value="5521">
                                            5521 Motor Vehicle Dealers (Used Only
                                        </option>
                                        <option value="5015">
                                            5015 Motor Vehicle Parts Used (agents and brokers
                                        </option>
                                        <option value="5015">
                                            5015 Motor Vehicle Parts Used (business to business
                                            electronic markets
                                        </option>
                                        <option value="5015">
                                            5015 Motor Vehicle Parts Used (merchant wholesalers except
                                            those selling via retail method
                                        </option>
                                        <option value="5015">
                                            5015 Motor Vehicle Parts Used (used auto parts sold via
                                            the retail method
                                        </option>
                                        <option value="3714">
                                            3714 Motor Vehicle Parts and Accessories (brake and brake
                                            systems including assemblies
                                        </option>
                                        <option value="3714">
                                            3714 Motor Vehicle Parts and Accessories (dump truck
                                            lifting mechanisms and fifth wheels
                                        </option>
                                        <option value="3714">
                                            3714 Motor Vehicle Parts and Accessories (except truck and
                                            bus bodies trailers engine and engine parts motor vehicle
                                            electrical and electronic equipment motor vehicle steering
                                            and suspension components motor vehicle brake systems and
                                            motor vehicle transmission and power train parts)
                                        </option>
                                        <option value="3714">
                                            3714 Motor Vehicle Parts and Accessories (gasoline engines
                                            and engine parts including rebuilt
                                        </option>
                                        <option value="3714">
                                            3714 Motor Vehicle Parts and Accessories (steering and
                                            suspension parts
                                        </option>
                                        <option value="3714">
                                            3714 Motor Vehicle Parts and Accessories (transmissions
                                            and power train parts including rebuilding
                                        </option>
                                        <option value="3714">
                                            3714 Motor Vehicle Parts and Accessories (wiring harness
                                            sets other than ignition; block heaters and battery
                                            heaters; instrument board assemblies; permanent
                                            defrosters; windshield washer-wiper mechanisms; cruise
                                            control mechanisms; and other electrical equipment for
                                            internal combustion engines
                                        </option>
                                        <option value="5013">
                                            5013 Motor Vehicle Supplies and New Parts (agents and
                                            brokers
                                        </option>
                                        <option value="5013">
                                            5013 Motor Vehicle Supplies and New Parts (auto parts sold
                                            via retail method
                                        </option>
                                        <option value="5013">
                                            5013 Motor Vehicle Supplies and New Parts (business to
                                            business electronic markets
                                        </option>
                                        <option value="5013">
                                            5013 Motor Vehicle Supplies and New Parts (merchant
                                            wholesalers except those selling via retail method)
                                        </option>
                                        <option value="3711">
                                            3711 Motor Vehicles and Passenger Car Bodies (automobiles
                                        </option>
                                        <option value="3711">
                                            3711 Motor Vehicles and Passenger Car Bodies (heavy duty
                                            trucks
                                        </option>
                                        <option value="3711">
                                            3711 Motor Vehicles and Passenger Car Bodies (kit car and
                                            other passenger car bodies
                                        </option>
                                        <option value="3711">
                                            3711 Motor Vehicles and Passenger Car Bodies (light trucks
                                            and utility vehicles
                                        </option>
                                        <option value="3711">
                                            3711 Motor Vehicles and Passenger Car Bodies (military
                                            armored vehicles
                                        </option>
                                        <option value="5571">5571 Motorcycle Dealer</option>
                                        <option value="3751">
                                            3751 Motorcycles Bicycles and Part
                                        </option>
                                        <option value="3621">3621 Motors and Generator</option>
                                        <option value="8412">
                                            8412 Museums and Art Galleries (except historic and
                                            heritage sites
                                        </option>
                                        <option value="8412">
                                            8412 Museums and Art Galleries (historic and heritage
                                            sites
                                        </option>
                                        <option value="3931">3931 Musical Instrument</option>
                                        <option value="5736">5736 Musical Instruments Store</option>
                                        <option value="2441">
                                            2441 Nailed and Lock Corner Wood Boxes and Shoo
                                        </option>
                                        <option value="2241">
                                            2241 Narrow Fabric and Other Smallware Mills: Cotton Wool
                                            Silk and Manmade Fibe
                                        </option>
                                        <option value="6021">
                                            6021 National Commercial Banks (banking
                                        </option>
                                        <option value="6021">
                                            6021 National Commercial Banks (credit card issuing
                                        </option>
                                        <option value="9711">9711 National Securit</option>
                                        <option value="2022">
                                            2022 Natural Processed and Imitation Chees
                                        </option>
                                        <option value="4924">4924 Natural Gas Distributio</option>
                                        <option value="1321">1321 Natural Gas Liquid</option>
                                        <option value="4922">4922 Natural Gas Transmissio</option>
                                        <option value="4923">
                                            4923 Natural Gas Transmission and Distribution
                                            (distribution
                                        </option>
                                        <option value="4923">
                                            4923 Natural Gas Transmission and Distribution
                                            (transmission
                                        </option>
                                        <option value="5994">
                                            5994 News Dealers and Newsstands
                                        </option>
                                        <option value="7383">
                                            7383 News Syndicates (except independent news
                                            correspondents
                                        </option>
                                        <option value="7383">
                                            7383 News Syndicates (independent news correspondents
                                        </option>
                                        <option value="2711">
                                            2711 Newspapers: Publishing or Publishing and Printing
                                            (except Internet newspaper publishing
                                        </option>
                                        <option value="2711">
                                            2711 Newspapers: Publishing or Publishing and Printing
                                            (Internet newspaper publishing
                                        </option>
                                        <option value="2873">2873 Nitrogenous Fertilizer</option>
                                        <option value="3297">3297 Nonclay Refractorie</option>
                                        <option value="8733">
                                            8733 Noncommercial Research Organizations (physical
                                            engineering and life sciences
                                        </option>
                                        <option value="8733">
                                            8733 Noncommercial Research Organizations (social sciences
                                            and humanities
                                        </option>
                                        <option value="3644">
                                            3644 Noncurrent-Carrying Wiring Devices (except fishwire
                                            electrical wiring tool
                                        </option>
                                        <option value="3644">
                                            3644 Noncurrent-Carrying Wiring Devices (fish wire
                                            electrical wiring tool
                                        </option>
                                        <option value="6091">
                                            6091 Nondeposit Trust Facilities
                                        </option>
                                        <option value="5199">
                                            5199 Nondurable Goods NEC (advertising specialties goods
                                            distributors
                                        </option>
                                        <option value="5199">
                                            5199 Nondurable Goods NEC (agents and brokers
                                        </option>
                                        <option value="5199">
                                            5199 Nondurable Goods NEC (business to business electronic
                                            markets
                                        </option>
                                        <option value="5199">
                                            5199 Nondurable Goods NEC (curios statuary gifts novelties
                                            and souvenirs sold via retail method
                                        </option>
                                        <option value="5199">
                                            5199 Nondurable Goods NEC (merchant wholesalers except
                                            advertising specialties goods distributors wholesaling
                                            footwear cutstock wholesaling plastics foam wholesaling
                                            industrial yarns and merchant wholesalers selling
                                            miscellaneous nondurable goods via the retail method
                                        </option>
                                        <option value="5199">
                                            5199 Nondurable Goods NEC (merchant wholesalers of
                                            footwear cutstock
                                        </option>
                                        <option value="5199">
                                            5199 Nondurable Goods NEC (merchant wholesalers of
                                            plastics foam
                                        </option>
                                        <option value="5199">
                                            5199 Nondurable Goods NEC (merchant wholesalers of yarns
                                            except industrial
                                        </option>
                                        <option value="5199">
                                            5199 Nondurable Goods NEC (pets pet supplies and tropical
                                            fish sold via retail method
                                        </option>
                                        <option value="5199">
                                            5199 Nondurable Goods NEC (smokers' supplies sold via
                                            retail method
                                        </option>
                                        <option value="3364">
                                            3364 Nonferrous Die-Castings Except Aluminu
                                        </option>
                                        <option value="3463">3463 Nonferrous Forging</option>
                                        <option value="3369">
                                            3369 Nonferrous Foundries Except Aluminum and Coppe
                                        </option>
                                        <option value="3299">
                                            3299 Nonmetallic Mineral Products NEC (clay statuary
                                        </option>
                                        <option value="3299">
                                            3299 Nonmetallic Mineral Products NEC (except moldings
                                            ornamental and architectural plaster work clay statuary
                                            and gypsum statuary
                                        </option>
                                        <option value="3299">
                                            3299 Nonmetallic Mineral Products NEC (moldings ornamental
                                            and architectural plaster work and gypsum statuary
                                        </option>
                                        <option value="1481">
                                            1481 Nonmetallic Minerals Services Except Fuels (except
                                            geophysical surveying and mapping and site preparation and
                                            related construction activities performed on a contract or
                                            fee basis
                                        </option>
                                        <option value="1481">
                                            1481 Nonmetallic Minerals Services Except Fuels
                                            (geophysical surveying and mapping
                                        </option>
                                        <option value="1481">
                                            1481 Nonmetallic Minerals Services Except Fuels (site
                                            preparation and related construction activities on a
                                            contract basis
                                        </option>
                                        <option value="2297">2297 Nonwoven Fabric</option>
                                        <option value="8059">
                                            8059 Nursing and Personal Care Facilities NEC (continuing
                                            care retirement communities
                                        </option>
                                        <option value="8059">
                                            8059 Nursing and Personal Care Facilities NEC (except
                                            continuing care retirement communities psychiatric
                                            convalescent homes with health care and homes for the
                                            mentally retarded with health care
                                        </option>
                                        <option value="8059">
                                            8059 Nursing and Personal Care Facilities NEC (homes for
                                            the mentally retarded with health care
                                        </option>
                                        <option value="2542">
                                            2542 Office and Store Fixtures Partitions Shelving and
                                            Lockers Except Wood (except lunchroom tables and chairs
                                        </option>
                                        <option value="2542">
                                            2542 Office and Store Fixtures Partitions Shelving and
                                            Lockers Except Wood (lunchroom tables and chairs
                                        </option>
                                        <option value="5044">
                                            5044 Office Equipment (agents and brokers
                                        </option>
                                        <option value="5044">
                                            5044 Office Equipment (business to business electronic
                                            markets
                                        </option>
                                        <option value="5044">
                                            5044 Office Equipment (merchant wholesalers except those
                                            selling office equipment via retail method
                                        </option>
                                        <option value="5044">
                                            5044 Office Equipment (office equipment sold via retail
                                            method
                                        </option>
                                        <option value="2522">
                                            2522 Office Furniture Except Woo
                                        </option>
                                        <option value="3579">
                                            3579 Office Machines NEC (except timeclocks time stamps
                                            pencil sharpeners stapling machines etc.
                                        </option>
                                        <option value="3579">
                                            3579 Office Machines NEC (pencil sharpeners staplers and
                                            other office equipment
                                        </option>
                                        <option value="3579">
                                            3579 Office Machines NEC (time clocks and other time
                                            recording devices
                                        </option>
                                        <option value="8041">
                                            8041 Offices and Clinics of Chiropractor
                                        </option>
                                        <option value="8021">
                                            8021 Offices and Clinics of Dentist
                                        </option>
                                        <option value="8011">
                                            8011 Offices and Clinics of Doctors of Medicine
                                            (ambulatory surgical and emergency centers
                                        </option>
                                        <option value="8011">
                                            8011 Offices and Clinics of Doctors of Medicine (except
                                            mental health specialists HMO medical centers and
                                            ambulatory surgical and emergency centers
                                        </option>
                                        <option value="8011">
                                            8011 Offices and Clinics of Doctors of Medicine (HMO
                                            Medical Centers
                                        </option>
                                        <option value="8011">
                                            8011 Offices and Clinics of Doctors of Medicine (mental
                                            health specialists
                                        </option>
                                        <option value="8031">
                                            8031 Offices and Clinics of Doctors of Osteopathy (except
                                            mental health specialists)
                                        </option>
                                        <option value="8031">
                                            8031 Offices and Clinics of Doctors of Osteopathy (mental
                                            health specialists
                                        </option>
                                        <option value="8049">
                                            8049 Offices and Clinics of Health Practitioners NEC
                                            (except mental health practitioners physical occupational
                                            speech therapists and audiologists
                                        </option>
                                        <option value="8049">
                                            8049 Offices and Clinics of Health Practitioners NEC
                                            (mental health practitioners except physicians
                                        </option>
                                        <option value="8049">
                                            8049 Offices and Clinics of Health Practitioners NEC
                                            (physical occupational recreational and speech therapists
                                            and audiologists
                                        </option>
                                        <option value="8042">
                                            8042 Offices and Clinics of Optometrist
                                        </option>
                                        <option value="8043">
                                            8043 Offices and Clinics of Podiatrist
                                        </option>
                                        <option value="6712">
                                            6712 Offices of Bank Holding Companie
                                        </option>
                                        <option value="6719">
                                            6719 Offices of Holding Companies NE
                                        </option>
                                        <option value="1382">
                                            1382 Oil and Gas Field Exploration Services (except
                                            geophysical mapping and surveying
                                        </option>
                                        <option value="1382">
                                            1382 Oil and Gas Field Exploration Services (geophysical
                                            surveying and mapping
                                        </option>
                                        <option value="3533">
                                            3533 Oil and Gas Field Machinery and Equipmen
                                        </option>
                                        <option value="1389">
                                            1389 Oil and Gas Field Services NEC (construction of field
                                            gathering lines on a contract or fee basis
                                        </option>
                                        <option value="1389">
                                            1389 Oil and Gas Field Services NEC (except construction
                                            of field gathering lines site preparation and related
                                            construction activities performed on a contract or fee
                                            basis
                                        </option>
                                        <option value="1389">
                                            1389 Oil and Gas Field Services NEC (site preparation and
                                            related construction activities on a contract basis
                                        </option>
                                        <option value="6792">
                                            6792 Oil Royalty Traders (investing on own account
                                        </option>
                                        <option value="6792">
                                            6792 Oil Royalty Traders (oil and gas royalty leasing
                                        </option>
                                        <option value="1531">
                                            1531 Operative Builders (grain elevator dry cleaning plant
                                            and manufacturing and industrial warehouse operative
                                            builders
                                        </option>
                                        <option value="1531">
                                            1531 Operative Builders (Operative builders of industrial
                                            and manufacturing buildings except grain elevators dry
                                            cleaning plants and manufacturing and industrial
                                            warehouses
                                        </option>
                                        <option value="1531">
                                            1531 Operative Builders (residential operative builders
                                        </option>
                                        <option value="1531">
                                            1531 Operative Builders (residential operative remodelers
                                        </option>
                                        <option value="6513">
                                            6513 Operators of Apartment Building
                                        </option>
                                        <option value="6514">
                                            6514 Operators of Dwellings Other Than Apartment Building
                                        </option>
                                        <option value="6512">
                                            6512 Operators of Nonresidential Buildings (except stadium
                                            and arena owners
                                        </option>
                                        <option value="6512">
                                            6512 Operators of Nonresidential Buildings (stadium and
                                            arena owners
                                        </option>
                                        <option value="6515">
                                            6515 Operators of Residential Mobile Home Site
                                        </option>
                                        <option value="5048">
                                            5048 Ophthalmic Goods (agents and brokers
                                        </option>
                                        <option value="5048">
                                            5048 Ophthalmic Goods (business to business electronic
                                            markets
                                        </option>
                                        <option value="3851">
                                            3851 Ophthalmic Goods (except intraocular lenses
                                        </option>
                                        <option value="3851">
                                            3851 Ophthalmic Goods (intraoccular lenses i.e. surgical
                                            implants
                                        </option>
                                        <option value="5048">
                                            5048 Ophthalmic Goods (merchant wholesalers
                                        </option>
                                        <option value="5995">
                                            5995 Optical Goods Stores (except labs grinding
                                            prescription lenses
                                        </option>
                                        <option value="5995">
                                            5995 Optical Goods Stores (optical laboratories grinding
                                            lenses to prescription
                                        </option>
                                        <option value="3827">
                                            3827 Optical Instruments and Lense
                                        </option>
                                        <option value="3489">
                                            3489 Ordnance and Accessories NE
                                        </option>
                                        <option value="7041">
                                            7041 Organization Hotels and Lodging Houses on Membership
                                            Basis (except hotels
                                        </option>
                                        <option value="7041">
                                            7041 Organization Hotels and Lodging Houses on Membership
                                            Basis (hotels
                                        </option>
                                        <option value="181">
                                            0181 Ornamental Floriculture and Nursery Products
                                            (floriculture farming
                                        </option>
                                        <option value="181">
                                            0181 Ornamental Floriculture and Nursery Products (nursery
                                            farming
                                        </option>
                                        <option value="783">
                                            0783 Ornamental Shrub and Tree Service
                                        </option>
                                        <option value="3842">
                                            3842 Orthopedic Prosthetic and Surgical Appliances and
                                            Supplies (anatomical models
                                        </option>
                                        <option value="3842">
                                            3842 Orthopedic Prosthetic and Surgical Appliances and
                                            Supplies (electronic hearing aids
                                        </option>
                                        <option value="3842">
                                            3842 Orthopedic Prosthetic and Surgical Appliances and
                                            Supplies (except electronic hearing aids incontinent pads
                                            anatomical models and bed pads
                                        </option>
                                        <option value="3842">
                                            3842 Orthopedic Prosthetic and Surgical Appliances and
                                            Supplies (incontinent pads and bed pads
                                        </option>
                                        <option value="7312">
                                            7312 Outdoor Advertising Service
                                        </option>
                                        <option value="3536">
                                            3536 Overhead Traveling Cranes Hoists and Monorail System
                                        </option>
                                        <option value="5142">
                                            5142 Packaged Frozen Foods (agents and brokers
                                        </option>
                                        <option value="5142">
                                            5142 Packaged Frozen Foods (business to business
                                            electronic markets
                                        </option>
                                        <option value="5142">
                                            5142 Packaged Frozen Foods (frozen food sold via retail
                                            method
                                        </option>
                                        <option value="5142">
                                            5142 Packaged Frozen Foods (merchant wholesalers except
                                            those selling packaged frozen foods via retail method
                                        </option>
                                        <option value="3565">3565 Packaging Machiner</option>
                                        <option value="2671">
                                            2671 Packaging Paper and Plastics Film Coated and
                                            Laminated (except single-web and multi-web plastics
                                            packaging film and sheet
                                        </option>
                                        <option value="2671">
                                            2671 Packaging Paper and Plastics Film Coated and
                                            Laminated (single-web and multi-web plastics packaging
                                            film and sheet
                                        </option>
                                        <option value="4783">4783 Packing and Cratin</option>
                                        <option value="5231">
                                            5231 Paint Glass and Wallpaper Stores (except glass
                                        </option>
                                        <option value="5231">
                                            5231 Paint Glass and Wallpaper Stores (glass
                                        </option>
                                        <option value="1721">1721 Painting and Paper Hangin</option>
                                        <option value="1721">
                                            1721 Painting and Paper Hanging (traffic lane painting
                                        </option>
                                        <option value="5198">
                                            5198 Paints Varnishes and Supplies (business to business
                                            electronic markets
                                        </option>
                                        <option value="5198">
                                            5198 Paints Varnishes and Supplies (agents and brokers)
                                        </option>
                                        <option value="5198">
                                            5198 Paints Varnishes and Supplies (merchant wholesalers)
                                        </option>
                                        <option value="2851">
                                            2851 Paints Varnishes Lacquers Enamels and Allied Product
                                        </option>
                                        <option value="3554">3554 Paper Industries Machiner</option>
                                        <option value="2621">
                                            2621 Paper Mills (except newsprint mills
                                        </option>
                                        <option value="2621">
                                            2621 Paper Mills (newsprint mills
                                        </option>
                                        <option value="2631">2631 Paperboard Mill</option>
                                        <option value="7515">7515 Passenger Car Leasin</option>
                                        <option value="7514">7514 Passenger Car Renta</option>
                                        <option value="6794">6794 Patent Owners and Lessor</option>
                                        <option value="3951">
                                            3951 Pens Mechanical Pencils and Parts
                                        </option>
                                        <option value="6371">
                                            6371 Pension Health and Welfare Funds (administrators
                                        </option>
                                        <option value="6371">
                                            6371 Pension Health and Welfare Funds (health and welfare
                                            funds
                                        </option>
                                        <option value="6371">
                                            6371 Pension Health and Welfare Funds (managers
                                        </option>
                                        <option value="6371">
                                            6371 Pension Health and Welfare Funds (pension funds
                                        </option>
                                        <option value="6371">
                                            6371 Pension Health and Welfare Funds (profit sharing
                                            funds
                                        </option>
                                        <option value="2844">
                                            2844 Perfumes Cosmetics and Other Toilet Preparations
                                            (except toothpaste gel and dentifrice powders
                                        </option>
                                        <option value="2844">
                                            2844 Perfumes Cosmetics and Other Toilet Preparations
                                            (toothpaste gel and dentifrice powders
                                        </option>
                                        <option value="2721">
                                            2721 Periodicals: Publishing or Publishing and Printing
                                            (except Internet periodical publishing
                                        </option>
                                        <option value="2721">
                                            2721 Periodicals: Publishing or Publishing and Printing
                                            (Internet periodical publishing
                                        </option>
                                        <option value="6141">
                                            6141 Personal Credit Institutions (credit card issuing
                                        </option>
                                        <option value="6141">
                                            6141 Personal Credit Institutions (except installment
                                            sales finance industrial nondeposit banks and credit card
                                            issuing
                                        </option>
                                        <option value="6141">
                                            6141 Personal Credit Institutions (industrial nondeposit
                                            banks
                                        </option>
                                        <option value="6141">
                                            6141 Personal Credit Institutions (installment sales
                                            finance
                                        </option>
                                        <option value="3172">
                                            3172 Personal Leather Goods Except Women's Handbags and
                                            Purses (nonprecious metal personal goods such as card
                                            cases cigar cases and comb cases
                                        </option>
                                        <option value="3172">
                                            3172 Personal Leather Goods Except Women?s Handbags and
                                            Purses (except nonprecious metal personal goods such as
                                            card cases cigar cases and comb cases
                                        </option>
                                        <option value="2879">
                                            2879 Pesticides and Agricultural Chemicals NE
                                        </option>
                                        <option value="5172">
                                            5172 Petroleum and Petroleum Products Wholesalers Except
                                            Bulk Stations and Terminals (agents and brokers
                                        </option>
                                        <option value="5172">
                                            5172 Petroleum and Petroleum Products Wholesalers Except
                                            Bulk Stations and Terminals (business to business
                                            electronic markets
                                        </option>
                                        <option value="5172">
                                            5172 Petroleum and Petroleum Products Wholesalers Except
                                            Bulk Stations and Terminals (merchant wholesalers
                                        </option>
                                        <option value="5171">
                                            5171 Petroleum Bulk Stations and Terminals (except
                                            petroleum sold via retail method
                                        </option>
                                        <option value="5171">
                                            5171 Petroleum Bulk Stations and Terminals (heating oil
                                            sold to final consumer
                                        </option>
                                        <option value="5171">
                                            5171 Petroleum Bulk Stations and Terminals (LP gas sold to
                                            final consumer
                                        </option>
                                        <option value="2911">2911 Petroleum Refinin</option>
                                        <option value="2834">
                                            2834 Pharmaceutical Preparations
                                        </option>
                                        <option value="3652">
                                            3652 Phonograph Records and Prerecorded Audio Tapes and
                                            Disks (integrated record companies except duplication only
                                        </option>
                                        <option value="3652">
                                            3652 Phonograph Records and Prerecorded Audio Tapes and
                                            Disks (reproduction of all other media except video
                                        </option>
                                        <option value="1475">1475 Phosphate Roc</option>
                                        <option value="2874">2874 Phosphatic Fertilizer</option>
                                        <option value="7334">
                                            7334 Photocopying and Duplicating Services (except quick
                                            printing
                                        </option>
                                        <option value="7334">
                                            7334 Photocopying and Duplicating Services (quick printing
                                        </option>
                                        <option value="7384">
                                            7384 Photofinishing Laboratories (except one-hour
                                        </option>
                                        <option value="7384">
                                            7384 Photofinishing Laboratories (one-hour
                                        </option>
                                        <option value="5043">
                                            5043 Photographic Equipment and Supplies (agents and
                                            brokers
                                        </option>
                                        <option value="5043">
                                            5043 Photographic Equipment and Supplies (business to
                                            business electronic markets
                                        </option>
                                        <option value="3861">
                                            3861 Photographic Equipment and Supplies (except
                                            photographic film paper plates and chemicals
                                        </option>
                                        <option value="5043">
                                            5043 Photographic Equipment and Supplies (merchant
                                            wholesalers
                                        </option>
                                        <option value="3861">
                                            3861 Photographic Equipment and Supplies (photographic
                                            films paper plates and chemicals
                                        </option>
                                        <option value="7221">
                                            7221 Photographic Studios Portrai
                                        </option>
                                        <option value="7991">
                                            7991 Physical Fitness Facilitie
                                        </option>
                                        <option value="2035">
                                            2035 Pickled Fruits and Vegetables Vegetable Sauces and
                                            Seasonings and Salad Dressings (pickled fruits and
                                            vegetables
                                        </option>
                                        <option value="2035">
                                            2035 Pickled Fruits and Vegetables Vegetable Sauces and
                                            Seasonings and Salad Dressings (sauces and salad dressings
                                        </option>
                                        <option value="5131">
                                            5131 Piece Goods Notions and Other Dry Goods (agents and
                                            brokers
                                        </option>
                                        <option value="5131">
                                            5131 Piece Goods Notions and Other Dry Goods (broadwoven
                                            converters
                                        </option>
                                        <option value="5131">
                                            5131 Piece Goods Notions and Other Dry Goods (business to
                                            business electronic markets
                                        </option>
                                        <option value="5131">
                                            5131 Piece Goods Notions and Other Dry Goods (merchant
                                            wholesalers except broadwoven and piece goods converters
                                            and merchant wholesalers selling piece goods notions and
                                            other dry goods via retail method
                                        </option>
                                        <option value="5131">
                                            5131 Piece Goods Notions and Other Dry Goods (piece goods
                                            notions and other dry goods sold via retail method
                                        </option>
                                        <option value="5131">
                                            5131 Piece Goods Notions and Other Dry Goods (piece goods
                                            converters except broadwoven
                                        </option>
                                        <option value="4619">4619 Pipelines NE</option>
                                        <option value="1742">
                                            1742 Plastering Drywall Acoustical and Insulation Wor
                                        </option>
                                        <option value="2673">
                                            2673 Plastics Foil and Coated Paper Bags (except single
                                            web or multi-web plastic bags
                                        </option>
                                        <option value="2673">
                                            2673 Plastics Foil and Coated Paper Bags (single-web and
                                            multi-web plastics bags
                                        </option>
                                        <option value="3085">3085 Plastics Bottle</option>
                                        <option value="3086">
                                            3086 Plastics Foam Products (except polystyrene foam
                                            products
                                        </option>
                                        <option value="3086">
                                            3086 Plastics Foam Products (polystyrene foam products
                                        </option>
                                        <option value="2821">
                                            2821 Plastics Materials Synthetic and Resins and
                                            Nonvulcanizable Elastomer
                                        </option>
                                        <option value="5162">
                                            5162 Plastics Materials and Basic Forms and Shapes (agents
                                            and brokers
                                        </option>
                                        <option value="5162">
                                            5162 Plastics Materials and Basic Forms and Shapes
                                            (business to business electronic markets
                                        </option>
                                        <option value="5162">
                                            5162 Plastics Materials and Basic Forms and Shapes
                                            (merchant wholesalers except those selling plastics via
                                            retail method
                                        </option>
                                        <option value="5162">
                                            5162 Plastics Materials and Basic Forms and Shapes
                                            (plastics materials forms and basic shapes sold via retail
                                            method
                                        </option>
                                        <option value="3084">3084 Plastics Pip</option>
                                        <option value="3088">3088 Plastics Plumbing Fixture</option>
                                        <option value="3089">
                                            3089 Plastics Products NEC (except plastics pipe fittings
                                            inflatable plastics life jackets plastics furniture parts
                                            and plastics sausage casings
                                        </option>
                                        <option value="3089">
                                            3089 Plastics Products NEC (finished plastic furniture
                                            parts
                                        </option>
                                        <option value="3089">
                                            3089 Plastics Products NEC (inflatable plastic life
                                            jackets
                                        </option>
                                        <option value="3089">
                                            3089 Plastics Products NEC (pipe fittings
                                        </option>
                                        <option value="3089">
                                            3089 Plastics Products NEC (plastics sausage casings
                                        </option>
                                        <option value="2796">
                                            2796 Platemaking and Related Service
                                        </option>
                                        <option value="2395">
                                            2395 Pleating Decorative and Novelty Stitching and Tucking
                                            for the Trade (except apparel contractors
                                        </option>
                                        <option value="2395">
                                            2395 Pleating Decorative and Novelty Stitching and Tucking
                                            for the Trade (men?s and boy?s apparel contractors
                                        </option>
                                        <option value="2395">
                                            2395 Pleating Decorative and Novelty Stitching and Tucking
                                            for the Trade (women?s girls? and infants? apparel
                                            contractors
                                        </option>
                                        <option value="1711">
                                            1711 Plumbing Heating and Air-Conditioning (environmental
                                            control installation contractors
                                        </option>
                                        <option value="1711">
                                            1711 Plumbing Heating and Air-Conditioning (except
                                            environmental controls installation; and septic tank
                                            cesspool and dry well construction
                                        </option>
                                        <option value="1711">
                                            1711 Plumbing Heating and Air-Conditioning (septic tank
                                            cesspool and dry well construction contractors
                                        </option>
                                        <option value="5074">
                                            5074 Plumbing and Heating Equipment and Supplies
                                            (Hydronics) (agents and brokers
                                        </option>
                                        <option value="5074">
                                            5074 Plumbing and Heating Equipment and Supplies
                                            (Hydronics) (business to business electronic markets
                                        </option>
                                        <option value="5074">
                                            5074 Plumbing and Heating Equipment and Supplies
                                            (Hydronics) (merchant wholesalers except those selling
                                            plumbing and hydronic heating equipment via retail method
                                        </option>
                                        <option value="5074">
                                            5074 Plumbing and Heating Equipment and Supplies
                                            (Hydronics)(plumbing and hydronic heating equipment sold
                                            via retail method
                                        </option>
                                        <option value="3432">
                                            3432 Plumbing Fixture Fittings and Trim (except shower
                                            rods lawn hose nozzles and lawn sprinklers
                                        </option>
                                        <option value="3432">
                                            3432 Plumbing Fixture Fittings and Trim (lawn hose nozzles
                                            and lawn sprinklers
                                        </option>
                                        <option value="3432">
                                            3432 Plumbing Fixture Fittings and Trim (metal shower rods
                                        </option>
                                        <option value="9221">9221 Police Protectio</option>
                                        <option value="8651">8651 Political Organization</option>
                                        <option value="3264">
                                            3264 Porcelain Electrical Supplie
                                        </option>
                                        <option value="1474">
                                            1474 Potash Soda and Borate Mineral
                                        </option>
                                        <option value="2096">
                                            2096 Potato Chips Corn Chips and Similar Snack
                                        </option>
                                        <option value="3269">3269 Pottery Products NE</option>
                                        <option value="259">0259 Poultry and Eggs NE</option>
                                        <option value="5144">
                                            5144 Poultry and Poultry Products (agents and brokers
                                        </option>
                                        <option value="5144">
                                            5144 Poultry and Poultry Products (business to business
                                            electronic markets
                                        </option>
                                        <option value="5144">
                                            5144 Poultry and Poultry Products (merchant wholesalers
                                            except those selling poultry and poultry products via
                                            retail method
                                        </option>
                                        <option value="5144">
                                            5144 Poultry and Poultry Products (poultry and poultry
                                            products sold via retail method
                                        </option>
                                        <option value="254">0254 Poultry Hatcherie</option>
                                        <option value="2015">
                                            2015 Poultry Slaughtering and Processing (egg processing
                                        </option>
                                        <option value="2015">
                                            2015 Poultry Slaughtering and Processing (poultry
                                            slaughtering and processing
                                        </option>
                                        <option value="3612">
                                            3612 Power Distribution and Specialty Transformer
                                        </option>
                                        <option value="7211">
                                            7211 Power Laundries Family and Commercia
                                        </option>
                                        <option value="3546">3546 Power-Driven Handtool</option>
                                        <option value="3448">
                                            3448 Prefabricated Metal Buildings and Component
                                        </option>
                                        <option value="2452">
                                            2452 Prefabricated Wood Buildings and Component
                                        </option>
                                        <option value="7372">
                                            7372 Prepackaged Software (mass reproduction of software
                                        </option>
                                        <option value="7372">
                                            7372 Prepackaged Software (software publishing
                                        </option>
                                        <option value="2048">
                                            2048 Prepared Feeds and Feed Ingredients for Animals and
                                            Fowls Except Dogs and Cats (except slaughtering animals
                                            for pet food
                                        </option>
                                        <option value="2048">
                                            2048 Prepared Feeds and Feed Ingredients for Animals and
                                            Fowls Except Dogs and Cats (slaughtering animals for pet
                                            food
                                        </option>
                                        <option value="2045">
                                            2045 Prepared Flour Mixes and Dough
                                        </option>
                                        <option value="2092">
                                            2092 Prepared Fresh or Frozen Fish and Seafood
                                        </option>
                                        <option value="3229">
                                            3229 Pressed and Blown Glass and Glassware NE
                                        </option>
                                        <option value="3692">
                                            3692 Primary Batteries Dry and We
                                        </option>
                                        <option value="3399">
                                            3399 Primary Metal Products NEC (aluminum powder paste
                                            flakes etc.
                                        </option>
                                        <option value="3399">
                                            3399 Primary Metal Products NEC (copper powder paste
                                            flakes etc.
                                        </option>
                                        <option value="3399">
                                            3399 Primary Metal Products NEC (ferrous powder paste
                                            flakes etc.
                                        </option>
                                        <option value="3399">
                                            3399 Primary Metal Products NEC (iron ore recovery from
                                            open hearth slag
                                        </option>
                                        <option value="3399">
                                            3399 Primary Metal Products NEC (laminating steel for the
                                            trade
                                        </option>
                                        <option value="3399">
                                            3399 Primary Metal Products NEC (nonferrous nails brads
                                            staples tacks etc. made from purchased nonferrous wire
                                        </option>
                                        <option value="3399">
                                            3399 Primary Metal Products NEC (nonferrous powder paste
                                            flakes etc. except copper and aluminum
                                        </option>
                                        <option value="3334">
                                            3334 Primary Production of Aluminu
                                        </option>
                                        <option value="3331">
                                            3331 Primary Smelting and Refining of Coppe
                                        </option>
                                        <option value="3339">
                                            3339 Primary Smelting and Refining of Nonferrous Metals
                                            Except Copper and Aluminu
                                        </option>
                                        <option value="3672">3672 Printed Circuit Board</option>
                                        <option value="5111">
                                            5111 Printing and Writing Paper (agents and brokers
                                        </option>
                                        <option value="5111">
                                            5111 Printing and Writing Paper (business to business
                                            electronic markets
                                        </option>
                                        <option value="5111">
                                            5111 Printing and Writing Paper (merchant wholesalers
                                            except those selling printing and writing paper via retail
                                            method
                                        </option>
                                        <option value="5111">
                                            5111 Printing and Writing Paper (printing and writing
                                            paper sold via retail method
                                        </option>
                                        <option value="2893">2893 Printing In</option>
                                        <option value="3555">
                                            3555 Printing Trades Machinery and Equipmen
                                        </option>
                                        <option value="8811">8811 Private Household</option>
                                        <option value="2999">
                                            2999 Products of Petroleum and Coal NE
                                        </option>
                                        <option value="5049">
                                            5049 Professional Equipment and Supplies NEC (agents and
                                            brokers
                                        </option>
                                        <option value="5049">
                                            5049 Professional Equipment and Supplies NEC (business to
                                            business electronic markets
                                        </option>
                                        <option value="5049">
                                            5049 Professional Equipment and Supplies NEC (merchant
                                            wholesalers except those selling religious and teacher's
                                            school supplies via retail method)
                                        </option>
                                        <option value="5049">
                                            5049 Professional Equipment and Supplies NEC (religious
                                            and teacher's school supplies sold via retail method
                                        </option>
                                        <option value="8621">
                                            8621 Professional Membership Organization
                                        </option>
                                        <option value="7941">
                                            7941 Professional Sports Clubs and Promoters (professional
                                            sports clubs
                                        </option>
                                        <option value="7941">
                                            7941 Professional Sports Clubs and Promoters (sports
                                            agents
                                        </option>
                                        <option value="7941">
                                            7941 Professional Sports Clubs and Promoters (sports
                                            promoters
                                        </option>
                                        <option value="7941">
                                            7941 Professional Sports Clubs and Promoters (stadium
                                            operators promoting events in their own facilities)
                                        </option>
                                        <option value="8063">8063 Psychiatric Hospital</option>
                                        <option value="2531">
                                            2531 Public Building and Related Furniture (blackboards
                                        </option>
                                        <option value="2531">
                                            2531 Public Building and Related Furniture (except motor
                                            vehicle seats and blackboards
                                        </option>
                                        <option value="2531">
                                            2531 Public Building and Related Furniture (seats for
                                            motor vehicles
                                        </option>
                                        <option value="9311">
                                            9311 Public Finance Taxation and Monetary Polic
                                        </option>
                                        <option value="7992">7992 Public Golf Course</option>
                                        <option value="9229">
                                            9229 Public Order and Safety NE
                                        </option>
                                        <option value="8743">8743 Public Relations Service</option>
                                        <option value="2611">
                                            2611 Pulp Mills (pulp mills producing newsprint
                                        </option>
                                        <option value="2611">
                                            2611 Pulp Mills (pulp mills producing paper except
                                            newsprint
                                        </option>
                                        <option value="2611">
                                            2611 Pulp Mills (pulp mills producing paperboard
                                        </option>
                                        <option value="2611">
                                            2611 Pulp Mills (pulp producing mills only
                                        </option>
                                        <option value="3561">
                                            3561 Pumps and Pumping Equipmen
                                        </option>
                                        <option value="7948">
                                            7948 Racing Including Track Operations (except track
                                            operators
                                        </option>
                                        <option value="7948">
                                            7948 Racing Including Track Operations (track operations
                                        </option>
                                        <option value="5731">
                                            5731 Radio Television and Consumer Electronics Stores
                                            (automobile radios
                                        </option>
                                        <option value="5731">
                                            5731 Radio Television and Consumer Electronics Stores
                                            (except automobile radios
                                        </option>
                                        <option value="7313">
                                            7313 Radio Television and Publishers? Advertising
                                            Representative
                                        </option>
                                        <option value="3663">
                                            3663 Radio and Television Broadcasting and Communications
                                            Equipmen
                                        </option>
                                        <option value="7622">
                                            7622 Radio and Television Repair Shops (household antenna
                                            installation and household-type satellite dish
                                            installation
                                        </option>
                                        <option value="7622">
                                            7622 Radio and Television Repair Shops (new retail sales
                                            combined with repair-repair services as major source of
                                            receipts
                                        </option>
                                        <option value="7622">
                                            7622 Radio and Television Repair Shops (stereo TV VCR and
                                            radio repair
                                        </option>
                                        <option value="7622">
                                            7622 Radio and Television Repair Shops (telecommunication
                                            equipment repair
                                        </option>
                                        <option value="4832">
                                            4832 Radio Broadcasting Stations (except networks
                                        </option>
                                        <option value="4832">
                                            4832 Radio Broadcasting Stations (networks
                                        </option>
                                        <option value="4812">
                                            4812 Radiotelephone Communications (cellular carriers
                                        </option>
                                        <option value="4812">
                                            4812 Radiotelephone Communications (paging and cellular
                                            resellers
                                        </option>
                                        <option value="4812">
                                            4812 Radiotelephone Communications (paging carriers
                                        </option>
                                        <option value="3743">
                                            3743 Railroad Equipment (except locomotive fuel
                                            lubricating or cooling medium pumps
                                        </option>
                                        <option value="3743">
                                            3743 Railroad Equipment (locomotive fuel lubricating or
                                            cooling medium pumps
                                        </option>
                                        <option value="4013">
                                            4013 Railroad Switching and Terminal Establishments
                                            (except short line railroads
                                        </option>
                                        <option value="4013">
                                            4013 Railroad Switching and Terminal Establishments (short
                                            line railroads
                                        </option>
                                        <option value="4011">
                                            4011 Railroads Line-Haul Operatin
                                        </option>
                                        <option value="3273">3273 Ready-Mixed Concret</option>
                                        <option value="6531">
                                            6531 Real Estate Agents and Managers (agents and brokers
                                        </option>
                                        <option value="6531">
                                            6531 Real Estate Agents and Managers (appraisers
                                        </option>
                                        <option value="6531">
                                            6531 Real Estate Agents and Managers (cemetery management
                                        </option>
                                        <option value="6531">
                                            6531 Real Estate Agents and Managers (condominium
                                            associations
                                        </option>
                                        <option value="6531">
                                            6531 Real Estate Agents and Managers (except property
                                            managers condominium associations cemetery management
                                            agents and brokers operating housing authorities and
                                            appraisers
                                        </option>
                                        <option value="6531">
                                            6531 Real Estate Agents and Managers (nonresidential
                                            property managers
                                        </option>
                                        <option value="6531">
                                            6531 Real Estate Agents and Managers (operating housing
                                            authorities
                                        </option>
                                        <option value="6531">
                                            6531 Real Estate Agents and Managers (residential property
                                            managers
                                        </option>
                                        <option value="6798">
                                            6798 Real Estate Investment Trusts (hybrid or equity REITs
                                            primarily leasing miniwarehouses and self-storage units
                                        </option>
                                        <option value="6798">
                                            6798 Real Estate Investment Trusts (hybrid or equity REITs
                                            primarily leasing nonresidential Buildings
                                        </option>
                                        <option value="6798">
                                            6798 Real Estate Investment Trusts (hybrid or equity REITs
                                            primarily leasing other real estate property
                                        </option>
                                        <option value="6798">
                                            6798 Real Estate Investment Trusts (hybrid or equity REITs
                                            primarily leasing residential Buildings and Dwellings
                                        </option>
                                        <option value="6798">
                                            6798 Real Estate Investment Trusts (hybrid or mortgage
                                            REITs primarily in underwriting or investing in mortgages
                                        </option>
                                        <option value="2493">
                                            2493 Reconstituted Wood Product
                                        </option>
                                        <option value="5735">
                                            5735 Record and Prerecorded Tape Store
                                        </option>
                                        <option value="5561">
                                            5561 Recreational Vehicle Dealer
                                        </option>
                                        <option value="7033">
                                            7033 Recreational Vehicle Parks and Campsite
                                        </option>
                                        <option value="4613">
                                            4613 Refined Petroleum Pipeline
                                        </option>
                                        <option value="4222">
                                            4222 Refrigerated Warehousing and Storag
                                        </option>
                                        <option value="7623">
                                            7623 Refrigeration and Air-Conditioning Service and Repair
                                            Shops (except commercial refrigeration equipment repair
                                            and sales locations with repair as major source of
                                            receipts
                                        </option>
                                        <option value="7623">
                                            7623 Refrigeration and Air-Conditioning Services and
                                            Repair Shops (commercial refrigerator equipment repair
                                        </option>
                                        <option value="7623">
                                            7623 Refrigeration and Air-Conditioning Services and
                                            Repair Shops (new retail sales combined with repair-repair
                                            services as major source of receipts
                                        </option>
                                        <option value="5078">
                                            5078 Refrigeration Equipment and Supplies (agents and
                                            brokers
                                        </option>
                                        <option value="5078">
                                            5078 Refrigeration Equipment and Supplies (business to
                                            business electronic markets
                                        </option>
                                        <option value="5078">
                                            5078 Refrigeration Equipment and Supplies (merchant
                                            wholesalers
                                        </option>
                                        <option value="4953">
                                            4953 Refuse Systems (hazardous waste treatment and
                                            disposal
                                        </option>
                                        <option value="4953">
                                            4953 Refuse Systems (materials recovery facilities
                                        </option>
                                        <option value="4953">
                                            4953 Refuse Systems (other nonhazardous waste treatment
                                            and disposal
                                        </option>
                                        <option value="4953">
                                            4953 Refuse Systems (solid waste combustors and
                                            incinerators
                                        </option>
                                        <option value="4953">
                                            4953 Refuse Systems (solid waste landfills
                                        </option>
                                        <option value="9651">
                                            9651 Regulation Licensing and Inspection of Miscellaneous
                                            Commercial Sector
                                        </option>
                                        <option value="9631">
                                            9631 Regulation and Administration of Communications
                                            Electric Gas and Other Utilitie
                                        </option>
                                        <option value="9621">
                                            9621 Regulation and Administration of Transportation
                                            Programs (except air traffic control
                                        </option>
                                        <option value="9621">
                                            9621 Regulation and Administration of Transportation
                                            Programs (government air traffic control
                                        </option>
                                        <option value="9641">
                                            9641 Regulation of Agricultural Marketing and Commoditie
                                        </option>
                                        <option value="3625">
                                            3625 Relays and Industrial Control
                                        </option>
                                        <option value="8661">8661 Religious Organization</option>
                                        <option value="4741">
                                            4741 Rental of Railroad Cars (grain leveling in railroad
                                            cars grain trimming for railroad equipment precooling of
                                            fruits and vegetables in connection with transportation
                                            and railroad car cleaning icing ventilating and heating
                                        </option>
                                        <option value="4741">
                                            4741 Rental of Railroad Cars (rental of railroad cars
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (boiler
                                            cleaning chipping and scaling
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (camera repair
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (cesspool and
                                            septic tank cleaning
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (custom picture
                                            framing shops
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (dental
                                            instrument repair laboratory instrument repair medical
                                            equipment and other electronic and precision equipment
                                            repair except typewriters
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (except
                                            industrial electronic home and garden appliance and
                                            leather goods
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (farriers
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (furnace duct
                                            gutter and drain cleaning services
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (gas appliance
                                            repair service sewing machine repair stove repair shops
                                            and other non-electrical appliance
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (lawnmower
                                            repair shops sharpening and repairing knives saws and
                                            tools
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (leather goods
                                            repair shops luggage repair shops pocketbook repair shops
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (locksmith
                                            shops
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (new bicycle
                                            retail sales combined with repair-repair services for
                                            bicycles as major source of receipts
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (new lawn and
                                            garden equipment retail sales combined with repair-repair
                                            services as major source of receipts
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (new power tool
                                            retail sales combined with repair-repair services as major
                                            source of receipts
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (other
                                            non-automotive transportation equipment and industrial
                                            machines and equipment and sharpening commercial blades
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (sewer cleaning
                                            and rodding
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (ship scaling)
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (taxidermists
                                            and antique repair and restoration except antique car
                                            restoration
                                        </option>
                                        <option value="7699">
                                            7699 Repair Shops and Related Services NEC (typewriter
                                            repair refilling or recycling ink jet cartridges
                                        </option>
                                        <option value="8361">
                                            8361 Residential Care (except mental health and substance
                                            abuse facilities homes for the elderly and homes for the
                                            mentally handicapped with incidental health care
                                        </option>
                                        <option value="8361">
                                            8361 Residential Care (homes for the elderly
                                        </option>
                                        <option value="8361">
                                            8361 Residential Care (homes for the mentally handicapped
                                            with incidental health care
                                        </option>
                                        <option value="8361">
                                            8361 Residential Care (mental health and substance abuse
                                            facilities)
                                        </option>
                                        <option value="3645">
                                            3645 Residential Electric Lighting Fixture
                                        </option>
                                        <option value="5461">
                                            5461 Retail Bakeries (bread cake and related products
                                            baked and sold on premise
                                        </option>
                                        <option value="5461">
                                            5461 Retail Bakeries (selling only
                                        </option>
                                        <option value="5461">5461 Retail Bakeries (snacks</option>
                                        <option value="5261">
                                            5261 Retail Nurseries Lawn and Garden Supply Stores
                                            (except outdoor power equipment
                                        </option>
                                        <option value="5261">
                                            5261 Retail Nurseries Lawn and Garden Supply Stores
                                            (outdoor power equipment
                                        </option>
                                        <option value="7641">
                                            7641 Reupholstery and Furniture Repai
                                        </option>
                                        <option value="112">0112 Rice</option>
                                        <option value="2044">2044 Rice Millin</option>
                                        <option value="2095">2095 Roasted Coffe</option>
                                        <option value="2384">
                                            2384 Robes and Dressing Gowns (men?s and boys? contractors
                                        </option>
                                        <option value="2384">
                                            2384 Robes and Dressing Gowns (men?s except contractors
                                        </option>
                                        <option value="2384">
                                            2384 Robes and Dressing Gowns (women?s girls? and infants'
                                            contractors
                                        </option>
                                        <option value="2384">
                                            2384 Robes and Dressing Gowns (women?s except contractors
                                        </option>
                                        <option value="3351">
                                            3351 Rolling Drawing and Extruding of Coppe
                                        </option>
                                        <option value="3356">
                                            3356 Rolling Drawing and Extruding of Nonferrous Metals
                                            Except Copper and Aluminu
                                        </option>
                                        <option value="3547">
                                            3547 Rolling Mill Machinery and Equipmen
                                        </option>
                                        <option value="5033">
                                            5033 Roofing Siding and Insulation Materials (agents and
                                            brokers
                                        </option>
                                        <option value="5033">
                                            5033 Roofing Siding and Insulation Materials (business to
                                            business electronic markets
                                        </option>
                                        <option value="5033">
                                            5033 Roofing Siding and Insulation Materials (merchant
                                            wholesalers except those selling via retail method
                                        </option>
                                        <option value="5033">
                                            5033 Roofing Siding and Insulation Materials (roofing
                                            siding and insulation materials sold via retail method
                                        </option>
                                        <option value="1761">
                                            1761 Roofing Siding and Sheet Metal Work (except roofing
                                            and siding work
                                        </option>
                                        <option value="1761">
                                            1761 Roofing Siding and Sheet Metal Work (roofing
                                            contractors
                                        </option>
                                        <option value="1761">
                                            1761 Roofing Siding and Sheet Metal Work (siding
                                            contractors
                                        </option>
                                        <option value="7021">
                                            7021 Rooming and Boarding House
                                        </option>
                                        <option value="3021">
                                            3021 Rubber and Plastics Footwea
                                        </option>
                                        <option value="3052">
                                            3052 Rubber and Plastics Hose and Beltin
                                        </option>
                                        <option value="2068">
                                            2068 Salted and Roasted Nuts and Seed
                                        </option>
                                        <option value="2656">
                                            2656 Sanitary Food Containers Except Foldin
                                        </option>
                                        <option value="2676">2676 Sanitary Paper Product</option>
                                        <option value="4959">
                                            4959 Sanitary Services NEC (all but remediation services
                                            malaria control mosquito eradication snow plowing street
                                            sweeping and airport runway vacuuming
                                        </option>
                                        <option value="4959">
                                            4959 Sanitary Services NEC (cleaning parking lots and
                                            driveways
                                        </option>
                                        <option value="4959">
                                            4959 Sanitary Services NEC (mosquito eradication
                                        </option>
                                        <option value="4959">
                                            4959 Sanitary Services NEC (remediation services
                                        </option>
                                        <option value="4959">
                                            4959 Sanitary Services NEC (snow plowing and sweeping
                                            streets and highways
                                        </option>
                                        <option value="4959">
                                            4959 Sanitary Services NEC (vacuuming of runways
                                        </option>
                                        <option value="2013">
                                            2013 Sausages and Other Prepared Meat Products (except
                                            lard made from purchased materials
                                        </option>
                                        <option value="2013">
                                            2013 Sausages and Other Prepared Meat Products (lard made
                                            from purchased materials
                                        </option>
                                        <option value="6035">
                                            6035 Savings Institutions Federally Chartere
                                        </option>
                                        <option value="6036">
                                            6036 Savings Institutions Not Federally Chartere
                                        </option>
                                        <option value="3425">3425 Saw Blades and Handsaw</option>
                                        <option value="2421">
                                            2421 Sawmills and Planing Mills General (box lumber made
                                            from purchased lumber
                                        </option>
                                        <option value="2421">
                                            2421 Sawmills and Planing Mills General (kiln drying
                                        </option>
                                        <option value="2421">
                                            2421 Sawmills and Planing Mills General (lumber
                                            manufacturing from purchased lumber softwood cut stock
                                            wood lath fence pickets and planing mill products
                                        </option>
                                        <option value="2421">
                                            2421 Sawmills and Planing Mills General (sawmills
                                        </option>
                                        <option value="2421">
                                            2421 Sawmills and Planing Mills General (softwood flooring
                                        </option>
                                        <option value="3596">
                                            3596 Scales and Balances Except Laborator
                                        </option>
                                        <option value="2397">
                                            2397 Schiffli Machine Embroiderie
                                        </option>
                                        <option value="4151">4151 School Buse</option>
                                        <option value="8299">
                                            8299 Schools and Educational Services NEC (art drama and
                                            music schools
                                        </option>
                                        <option value="8299">
                                            8299 Schools and Educational Services NEC (automobile
                                            driving instruction
                                        </option>
                                        <option value="8299">
                                            8299 Schools and Educational Services NEC (baton
                                            instruction
                                        </option>
                                        <option value="8299">
                                            8299 Schools and Educational Services NEC (cooking and
                                            modeling schools
                                        </option>
                                        <option value="8299">
                                            8299 Schools and Educational Services NEC (exam
                                            preparation and tutoring)
                                        </option>
                                        <option value="8299">
                                            8299 Schools and Educational Services NEC (except
                                            professional and management training aviation and flight
                                            training fine arts schools language schools exam
                                            preparation and tutoring automobile driving schools and
                                            educational support services
                                        </option>
                                        <option value="8299">
                                            8299 Schools and Educational Services NEC (flying
                                            instruction
                                        </option>
                                        <option value="8299">
                                            8299 Schools and Educational Services NEC (language
                                            schools
                                        </option>
                                        <option value="8299">
                                            8299 Schools and Educational Services NEC (professional
                                            and management development training
                                        </option>
                                        <option value="8299">
                                            8299 Schools and Educational Services NEC (educational
                                            support services
                                        </option>
                                        <option value="5093">
                                            5093 Scrap and Waste Materials (agents and brokers
                                        </option>
                                        <option value="5093">
                                            5093 Scrap and Waste Materials (business to business
                                            electronic markets)
                                        </option>
                                        <option value="5093">
                                            5093 Scrap and Waste Materials (merchant wholesalers
                                        </option>
                                        <option value="3451">3451 Screw Machine Product</option>
                                        <option value="3812">
                                            3812 Search Detection Navigation Guidance Aeronautical and
                                            Nautical Systems and Instrument
                                        </option>
                                        <option value="3341">
                                            3341 Secondary Smelting and Refining of Nonferrous Metals
                                            (aluminum
                                        </option>
                                        <option value="3341">
                                            3341 Secondary Smelting and Refining of Nonferrous Metals
                                            (copper
                                        </option>
                                        <option value="3341">
                                            3341 Secondary Smelting and Refining of Nonferrous Metals
                                            (except copper and aluminum
                                        </option>
                                        <option value="7338">
                                            7338 Secretarial and Court Reporting (court reporting
                                            services
                                        </option>
                                        <option value="7338">
                                            7338 Secretarial and Court Reporting (secretarial services
                                        </option>
                                        <option value="6231">
                                            6231 Security and Commodity Exchange
                                        </option>
                                        <option value="6211">
                                            6211 Security Brokers Dealers and Flotation Companies
                                            (except security dealers and underwriters and security oil
                                            lease and gas lease brokers
                                        </option>
                                        <option value="6211">
                                            6211 Security Brokers Dealers and Flotation Companies (oil
                                            lease and gas lease brokers offices
                                        </option>
                                        <option value="6211">
                                            6211 Security Brokers Dealers and Flotation Companies
                                            (security brokers note brokers
                                        </option>
                                        <option value="6211">
                                            6211 Security Brokers Dealers and Flotation Companies
                                            (security dealers and underwriters
                                        </option>
                                        <option value="7382">7382 Security Systems Service</option>
                                        <option value="3674">
                                            3674 Semiconductors and Related Device
                                        </option>
                                        <option value="5087">
                                            5087 Service Establishment Equipment and Supplies (agents
                                            and brokers
                                        </option>
                                        <option value="5087">
                                            5087 Service Establishment Equipment and Supplies (beauty
                                            and barber shop equipment and supplies sold via retail
                                            method
                                        </option>
                                        <option value="5087">
                                            5087 Service Establishment Equipment and Supplies
                                            (business to business electronic markets
                                        </option>
                                        <option value="5087">
                                            5087 Service Establishment Equipment and Supplies
                                            (merchant wholesalers except those selling beauty and
                                            barber shop equipment and supplies via retail method
                                        </option>
                                        <option value="3589">
                                            3589 Service Industry Machinery NE
                                        </option>
                                        <option value="8999">
                                            8999 Services NEC (actuarial consulting
                                        </option>
                                        <option value="8999">
                                            8999 Services NEC (authors artists and related technical
                                            services independent)
                                        </option>
                                        <option value="8999">
                                            8999 Services NEC (environmental consultants
                                        </option>
                                        <option value="8999">
                                            8999 Services NEC (Internet broadcasting special interest
                                            web sites entertainment sites and interactive game sites
                                        </option>
                                        <option value="8999">
                                            8999 Services NEC (Internet web search portals
                                        </option>
                                        <option value="8999">
                                            8999 Services NEC (music publishing
                                        </option>
                                        <option value="8999">
                                            8999 Services NEC (record production
                                        </option>
                                        <option value="8999">
                                            8999 Services NEC (scientific and related consulting
                                            services
                                        </option>
                                        <option value="8999">
                                            8999 Services NEC (weather forecasting services
                                        </option>
                                        <option value="7829">
                                            7829 Services Allied to Motion Picture Distribution
                                            (commercial distribution film libraries
                                        </option>
                                        <option value="7829">
                                            7829 Services Allied to Motion Picture Distribution
                                            (except commercial film distribution libraries and film
                                            archives
                                        </option>
                                        <option value="7829">
                                            7829 Services Allied to Motion Picture Distribution (film
                                            archives
                                        </option>
                                        <option value="7819">
                                            7819 Services Allied to Motion Picture Production (casting
                                            bureaus
                                        </option>
                                        <option value="7819">
                                            7819 Services Allied to Motion Picture Production (except
                                            casting bureaus wardrobe and equipment rental talent
                                            payment services teleproduction and other postproduction
                                            services reproduction of videos independent film directors
                                            and other independent motion picture production related
                                            services
                                        </option>
                                        <option value="7819">
                                            7819 Services Allied to Motion Picture Production (film
                                            directors and related motion picture production services
                                            independent
                                        </option>
                                        <option value="7819">
                                            7819 Services Allied to Motion Picture Production (motion
                                            picture consulting
                                        </option>
                                        <option value="7819">
                                            7819 Services Allied to Motion Picture Production (motion
                                            picture equipment rental
                                        </option>
                                        <option value="7819">
                                            7819 Services Allied to Motion Picture Production
                                            (reproduction of video
                                        </option>
                                        <option value="7819">
                                            7819 Services Allied to Motion Picture Production (talent
                                            payment services
                                        </option>
                                        <option value="7819">
                                            7819 Services Allied to Motion Picture Production
                                            (teleproduction and postproduction services
                                        </option>
                                        <option value="7819">
                                            7819 Services Allied to Motion Picture Production
                                            (wardrobe rental for motion picture film production
                                        </option>
                                        <option value="6289">
                                            6289 Services Allied With the Exchange of Securities or
                                            Commodities NEC (except security custodians
                                        </option>
                                        <option value="6289">
                                            6289 Services Allied With the Exchange of Securities or
                                            Commodities NEC (security custodians
                                        </option>
                                        <option value="2652">2652 Setup Paperboard Boxe</option>
                                        <option value="4952">4952 Sewerage System</option>
                                        <option value="5949">
                                            5949 Sewing Needlework and Piece Goods Store
                                        </option>
                                        <option value="214">
                                            0214 Sheep and Goats (goat farms
                                        </option>
                                        <option value="214">
                                            0214 Sheep and Goats (sheep farms
                                        </option>
                                        <option value="3444">
                                            3444 Sheet Metal Work (cooling towers sheet metal
                                        </option>
                                        <option value="3444">
                                            3444 Sheet Metal Work (except sheet metal bins and vats
                                            skylights and sheet metal cooling towers
                                        </option>
                                        <option value="3444">
                                            3444 Sheet Metal Work (metal bins and vats
                                        </option>
                                        <option value="3444">
                                            3444 Sheet Metal Work (stamped metal skylights
                                        </option>
                                        <option value="913">0913 Shellfis</option>
                                        <option value="3731">
                                            3731 Ship Building and Repairing (except repairs in
                                            floating drydocks
                                        </option>
                                        <option value="3731">
                                            3731 Ship Building and Repairing (repair services provided
                                            by floating drydocks
                                        </option>
                                        <option value="7251">
                                            7251 Shoe Repair Shops and Shoeshine Parlors (hatcleaning
                                            and blocking shops
                                        </option>
                                        <option value="7251">
                                            7251 Shoe Repair Shops and Shoeshine Parlors (shoe repair
                                            shops
                                        </option>
                                        <option value="7251">
                                            7251 Shoe Repair Shops and Shoeshine Parlors (shoeshine
                                            parlors
                                        </option>
                                        <option value="5661">5661 Shoe Store</option>
                                        <option value="6153">
                                            6153 Short Term Business Credit Institutions Except
                                            Agricultural (short term inventory credit and purchasing
                                            accounts receivable
                                        </option>
                                        <option value="6153">
                                            6153 Short-Term Business Credit Institutions Except
                                            Agricultural (business sales finance)
                                        </option>
                                        <option value="6153">
                                            6153 Short-Term Business Credit Institutions Except
                                            Agricultural (credit card issuing
                                        </option>
                                        <option value="6153">
                                            6153 Short-Term Business Credit Institutions Except
                                            Agricultural (credit card service
                                        </option>
                                        <option value="6153">
                                            6153 Short-Term Business Credit Institutions Except
                                            Agricultural (except credit card service and issuing short
                                            term inventory credit purchasing accounts receivable and
                                            business sales finance
                                        </option>
                                        <option value="2079">
                                            2079 Shortening Table Oils Margarine and Other Edible Fats
                                            and Oils NEC (except processing vegetable and soybean oils
                                            into edible oils from oilseeds and vegetables crushed in
                                            the same establishment
                                        </option>
                                        <option value="2079">
                                            2079 Shortening Table Oils Margarine and Other Edible Fats
                                            and Oils NEC (processing soybean oil into edible cooking
                                            oils from soybeans crushed in the same establishment
                                        </option>
                                        <option value="2079">
                                            2079 Shortening Table Oils Margarine and Other Edible Fats
                                            and Oils NEC (processing vegetable oils except soybean
                                            into edible cooking oils from oilseeds and vegetables
                                            crushed in the same establishment
                                        </option>
                                        <option value="3993">
                                            3993 Signs and Advertising Specialties (screen printing
                                            purchased advertising specialties
                                        </option>
                                        <option value="3993">
                                            3993 Signs and Advertising Specialties (signs
                                        </option>
                                        <option value="1044">1044 Silver Ore</option>
                                        <option value="3914">
                                            3914 Silverware Plated Ware and Stainless Steel Ware
                                            (cutlery and flatware nonprecious and precious plated
                                        </option>
                                        <option value="3914">
                                            3914 Silverware Plated Ware and Stainless Steel Ware
                                            (except nonprecious and precious plated metal cutlery
                                            flatware and hollowware
                                        </option>
                                        <option value="3914">
                                            3914 Silverware Plated Ware and Stainless Steel Ware
                                            (precious metal plated hollowware
                                        </option>
                                        <option value="8051">
                                            8051 Skilled Nursing Care Facilities (continuing care
                                            retirement communities
                                        </option>
                                        <option value="8051">
                                            8051 Skilled Nursing Care Facilities (except continuing
                                            care retirement communities and mental retardation
                                            hospitals
                                        </option>
                                        <option value="8051">
                                            8051 Skilled Nursing Care Facilities (mental retardation
                                            hospitals
                                        </option>
                                        <option value="3484">3484 Small Arm</option>
                                        <option value="3482">3482 Small Arms Ammunitio</option>
                                        <option value="2841">
                                            2841 Soaps and Other Detergents Except Specialty Cleaner
                                        </option>
                                        <option value="8399">
                                            8399 Social Services NEC (environment conservation and
                                            wildlife advocacy
                                        </option>
                                        <option value="8399">
                                            8399 Social Services NEC (except human rights environment
                                            conservation and wildlife advocacy organizations
                                            grantmaking and giving and voluntary health organizations
                                        </option>
                                        <option value="8399">
                                            8399 Social Services NEC (grantmaking and giving
                                        </option>
                                        <option value="8399">
                                            8399 Social Services NEC (human rights organizations
                                        </option>
                                        <option value="8399">
                                            8399 Social Services NEC (voluntary health organizations
                                        </option>
                                        <option value="2436">
                                            2436 Softwood Veneer and Plywoo
                                        </option>
                                        <option value="711">0711 Soil Preparation Service</option>
                                        <option value="2075">
                                            2075 Soybean Oil Mills (processing purchased soybean oil
                                        </option>
                                        <option value="2075">
                                            2075 Soybean Oil Mills (soybean processing except edible
                                            soybean oil
                                        </option>
                                        <option value="116">0116 Soybean</option>
                                        <option value="9661">
                                            9661 Space Research and Technolog
                                        </option>
                                        <option value="3544">
                                            3544 Special Dies and Tools Die Sets Jigs and Fixtures and
                                            Industrial Molds (except molds
                                        </option>
                                        <option value="3544">
                                            3544 Special Dies and Tools Die Sets Jigs and Fixtures and
                                            Industrial Molds (industrial molds
                                        </option>
                                        <option value="3559">
                                            3559 Special Industry Machinery NEC (automotive
                                            maintenance equipment
                                        </option>
                                        <option value="3559">
                                            3559 Special Industry Machinery NEC (cotton ginning
                                            machinery
                                        </option>
                                        <option value="3559">
                                            3559 Special Industry Machinery NEC (except rubber and
                                            plastics manufacturing machinery semiconductor
                                            manufacturing machinery and automotive maintenance
                                            equipment
                                        </option>
                                        <option value="3559">
                                            3559 Special Industry Machinery NEC (nuclear control rod
                                            drive mechanisms
                                        </option>
                                        <option value="3559">
                                            3559 Special Industry Machinery NEC (rubber and plastics
                                            manufacturing machinery
                                        </option>
                                        <option value="3559">
                                            3559 Special Industry Machinery NEC (semiconductor
                                            machinery manufacturing
                                        </option>
                                        <option value="2429">
                                            2429 Special Product Sawmills NEC (excelsior
                                        </option>
                                        <option value="2429">
                                            2429 Special Product Sawmills NEC (shingle mills shakes
                                        </option>
                                        <option value="2429">
                                            2429 Special Product Sawmills Not Elsewhere Classified
                                            (cooperage stock
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (anchored earth
                                            retention contractors
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (asbestos abatement and
                                            lead paint removal contractors
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (building equipment
                                            installation contractors for service station equipment;
                                            boiler duct and pipe insulation; lightning rod
                                            installation; bowling alley equipment installation; church
                                            bell installation; and clock tower installation
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (building finishing
                                            contractors for weather stripping and damp proofing window
                                            covering fixture installation bathtub refinishing modular
                                            furniture installation trade show exhibit installation and
                                            removal and spectator seating installation)
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (countertop
                                            residential-type installation
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (dewatering contractors
                                            test drilling for construction and core drilling for
                                            construction
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (except indoor swimming
                                            pool contractors; anchored earth retention contractors;
                                            glass tinting work; forming contractors; ornamental metal
                                            work contractors; lightning rod installation contractors;
                                            paint and wall paper removal contractors; countertop
                                            residential-type installation; miscellaneous residential
                                            building finishing contractors; dewatering contractors;
                                            test drilling for construction; and core drilling for
                                            construction
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (forming contractors
                                            and ornamental metal work contractors
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (glass tinting work
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (indoor swimming pool
                                            construction contractors
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (paint and wallpaper
                                            stripping and removing contractors
                                        </option>
                                        <option value="1799">
                                            1799 Special Trade Contractors NEC (power washing building
                                            exteriors not associated with construction
                                        </option>
                                        <option value="4226">
                                            4226 Special Warehousing and Storage NEC (except fur
                                            storage and warehousing in foreign trade zones
                                        </option>
                                        <option value="4226">
                                            4226 Special Warehousing and Storage NEC (fur storage
                                        </option>
                                        <option value="4226">
                                            4226 Special Warehousing and Storage NEC (warehousing in
                                            foreign trade zones
                                        </option>
                                        <option value="2842">
                                            2842 Specialty Cleaning Polishing and Sanitation
                                            Preparation
                                        </option>
                                        <option value="8069">
                                            8069 Specialty Hospitals Except Psychiatric (children?s
                                            hospitals
                                        </option>
                                        <option value="8069">
                                            8069 Specialty Hospitals Except Psychiatric (except
                                            children?s and substance abuse hospitals)
                                        </option>
                                        <option value="8069">
                                            8069 Specialty Hospitals Except Psychiatric (substance
                                            abuse hospitals
                                        </option>
                                        <option value="8093">
                                            8093 Specialty Outpatient Facilities NEC (except family
                                            planning centers mental health centers and respritory
                                            therapy clinics and offices
                                        </option>
                                        <option value="8093">
                                            8093 Specialty Outpatient Facilities NEC (family planning
                                            centers
                                        </option>
                                        <option value="8093">
                                            8093 Specialty Outpatient Facilities NEC (mental health
                                            facilities
                                        </option>
                                        <option value="8093">
                                            8093 Specialty Outpatient Facilities NEC (respiratory
                                            therapy clinics and offices
                                        </option>
                                        <option value="3566">
                                            3566 Speed Changers Industrial High-Speed Drives and Gear
                                        </option>
                                        <option value="3949">
                                            3949 Sporting and Athletic Goods NE
                                        </option>
                                        <option value="7032">
                                            7032 Sporting and Recreational Camp
                                        </option>
                                        <option value="5091">
                                            5091 Sporting and Recreational Goods and Supplies (agents
                                            and brokers
                                        </option>
                                        <option value="5091">
                                            5091 Sporting and Recreational Goods and Supplies
                                            (business to business electronic markets
                                        </option>
                                        <option value="5091">
                                            5091 Sporting and Recreational Goods and Supplies
                                            (merchant wholesalers except those selling sporting and
                                            recreational goods via retail method
                                        </option>
                                        <option value="5091">
                                            5091 Sporting and Recreational Goods and Supplies
                                            (sporting and recreational goods sold via retail method
                                        </option>
                                        <option value="5941">
                                            5941 Sporting Goods Stores and Bicycle Shop
                                        </option>
                                        <option value="6022">
                                            6022 State Commercial Banks (commercial banking
                                        </option>
                                        <option value="6022">
                                            6022 State Commercial Banks (credit card issuing
                                        </option>
                                        <option value="6022">
                                            6022 State Commercial Banks (private and industrial
                                            banking
                                        </option>
                                        <option value="2678">
                                            2678 Stationery Tablets and Related Product
                                        </option>
                                        <option value="5112">
                                            5112 Stationery and Office Supplies (agents and brokers
                                        </option>
                                        <option value="5112">
                                            5112 Stationery and Office Supplies (business to business
                                            electronic markets
                                        </option>
                                        <option value="5112">
                                            5112 Stationery and Office Supplies (merchant wholesalers
                                            except those selling stationery and office supplies via
                                            retail method
                                        </option>
                                        <option value="5112">
                                            5112 Stationery and Office Supplies (stationery and office
                                            supplies sold via retail method
                                        </option>
                                        <option value="5943">5943 Stationery Store</option>
                                        <option value="3511">
                                            3511 Steam Gas and Hydraulic Turbines and Turbine
                                            Generator Set Unit
                                        </option>
                                        <option value="4961">
                                            4961 Steam and Air-Conditioning Suppl
                                        </option>
                                        <option value="3325">3325 Steel Foundries NE</option>
                                        <option value="3324">3324 Steel Investment Foundrie</option>
                                        <option value="3317">3317 Steel Pipe and Tube</option>
                                        <option value="3493">3493 Steel Springs Except Wir</option>
                                        <option value="3315">
                                            3315 Steel Wiredrawing and Steel Nails and Spikes (nails
                                            spikes paper clips and wire not made in wiredrawing plants
                                        </option>
                                        <option value="3315">
                                            3315 Steel Wiredrawing and Steel Nails and Spikes (steel
                                            wire drawing
                                        </option>
                                        <option value="3312">
                                            3312 Steel Works Blast Furnaces (Including Coke Ovens) and
                                            Rolling Mills (coke ovens
                                        </option>
                                        <option value="3312">
                                            3312 Steel Works Blast Furnaces (Including Coke Ovens) and
                                            Rolling Mills (except coke ovens not integrated with steel
                                            mills and hot-rolling purchased steel
                                        </option>
                                        <option value="3312">
                                            3312 Steel Works Blast Furnaces (Including Coke Ovens) and
                                            Rolling Mills (hot-rolling purchased steel
                                        </option>
                                        <option value="3691">3691 Storage Batterie</option>
                                        <option value="3259">
                                            3259 Structural Clay Products NE
                                        </option>
                                        <option value="1791">
                                            1791 Structural Steel Erection (cooling tower installation
                                        </option>
                                        <option value="1791">
                                            1791 Structural Steel Erection (curtain wall installation
                                            and metal furring installation
                                        </option>
                                        <option value="1791">
                                            1791 Structural Steel Erection (structural steel work
                                        </option>
                                        <option value="2439">
                                            2439 Structural Wood Members NEC (except trusses
                                        </option>
                                        <option value="2439">
                                            2439 Structural Wood Members NEC (trusses
                                        </option>
                                        <option value="133">
                                            0133 Sugarcane and Sugar Beets (sugar beet farms
                                        </option>
                                        <option value="133">
                                            0133 Sugarcane and Sugar Beets (sugarcane farms
                                        </option>
                                        <option value="6351">
                                            6351 Surety Insurance (financial responsibility
                                            insurers-direct
                                        </option>
                                        <option value="6351">
                                            6351 Surety Insurance (reinsurers
                                        </option>
                                        <option value="6351">
                                            6351 Surety Insurance (warranty insurance home
                                        </option>
                                        <option value="2843">
                                            2843 Surface Active Agents Finishing Agents Sulfonated
                                            Oils and Assistant
                                        </option>
                                        <option value="3841">
                                            3841 Surgical and Medical Instruments and Apparatus
                                            (except tranquilizer guns and operating room tables
                                        </option>
                                        <option value="3841">
                                            3841 Surgical and Medical Instruments and Apparatus
                                            (operating room tables
                                        </option>
                                        <option value="3841">
                                            3841 Surgical and Medical Instruments and Apparatus
                                            (tranquilizer guns
                                        </option>
                                        <option value="8713">
                                            8713 Surveying Services (except geophysical surveying
                                        </option>
                                        <option value="8713">
                                            8713 Surveying Services (geophysical surveying
                                        </option>
                                        <option value="3613">
                                            3613 Switchgear and Switchboard Apparatu
                                        </option>
                                        <option value="2822">2822 Synthetic Rubbe</option>
                                        <option value="3795">3795 Tanks and Tank Component</option>
                                        <option value="7291">
                                            7291 Tax Return Preparation Service
                                        </option>
                                        <option value="4121">4121 Taxicab</option>
                                        <option value="4822">
                                            4822 Telegraph and Other Message Communication
                                        </option>
                                        <option value="3661">
                                            3661 Telephone and Telegraph Apparatus (consumer external
                                            modems
                                        </option>
                                        <option value="3661">
                                            3661 Telephone and Telegraph Apparatus (except consumer
                                            external modems
                                        </option>
                                        <option value="4813">
                                            4813 Telephone Communications Except Radiotelephone
                                            (except resellers
                                        </option>
                                        <option value="4813">
                                            4813 Telephone Communications Except Radiotelephone
                                            (resellers
                                        </option>
                                        <option value="4833">
                                            4833 Television Broadcasting Stations
                                        </option>
                                        <option value="4231">
                                            4231 Terminal and Joint Terminal Maintenance Facilities
                                            for Motor Freight Transportatio
                                        </option>
                                        <option value="4173">
                                            4173 Terminal and Service Facilities for Motor Vehicle
                                            Passenger Transportatio
                                        </option>
                                        <option value="1743">
                                            1743 Terrazzo Tile Marble and Mosaic Work (except fresco
                                            work
                                        </option>
                                        <option value="1743">
                                            1743 Terrazzo Tile Marble and Mosaic Work (fresco work
                                        </option>
                                        <option value="8734">
                                            8734 Testing Laboratories (except veterinary testing
                                            laboratories
                                        </option>
                                        <option value="8734">
                                            8734 Testing Laboratories (veterinary testing laboratories
                                        </option>
                                        <option value="2393">2393 Textile Bag</option>
                                        <option value="2299">
                                            2299 Textile Goods NEC (broadwoven fabrics of jute linen
                                            hemp and ramie and hand woven fabrics
                                        </option>
                                        <option value="2299">
                                            2299 Textile Goods NEC (finishing hard fiber thread and
                                            yarn without manufacturing thread or yarn
                                        </option>
                                        <option value="2299">
                                            2299 Textile Goods NEC (hemp bags made in spinning mills
                                        </option>
                                        <option value="2299">
                                            2299 Textile Goods NEC (manufacturing other textile
                                            products
                                        </option>
                                        <option value="2299">
                                            2299 Textile Goods NEC (manufacturing thread of hemp linen
                                            and ramie
                                        </option>
                                        <option value="2299">
                                            2299 Textile Goods NEC (narrow woven fabric of jute linen
                                            hemp and ramie
                                        </option>
                                        <option value="2299">
                                            2299 Textile Goods NEC (nonwoven felt
                                        </option>
                                        <option value="2299">
                                            2299 Textile Goods NEC (spinning yarn of flax hemp jute
                                            and ramie
                                        </option>
                                        <option value="3552">3552 Textile Machiner</option>
                                        <option value="7922">
                                            7922 Theatrical Producers (Except Motion Picture) and
                                            Miscellaneous Theatrical Services (casting agencies and
                                            television employment agencies
                                        </option>
                                        <option value="7922">
                                            7922 Theatrical Producers (Except Motion Picture) and
                                            Miscellaneous Theatrical Services (producers of radio
                                            programs
                                        </option>
                                        <option value="7922">
                                            7922 Theatrical Producers (Except Motion Picture) and
                                            Miscellaneous Theatrical Services (theater operators
                                        </option>
                                        <option value="7922">
                                            7922 Theatrical Producers (Except Motion Picture) and
                                            Miscellaneous Theatrical Services (theatrical agents
                                        </option>
                                        <option value="7922">
                                            7922 Theatrical Producers (Except Motion Picture) and
                                            Miscellaneous Theatrical Services (theatrical costume
                                            design
                                        </option>
                                        <option value="7922">
                                            7922 Theatrical Producers (Except Motion Picture) and
                                            Miscellaneous Theatrical Services (theatrical equipment
                                            rental
                                        </option>
                                        <option value="7922">
                                            7922 Theatrical Producers (Except Motion Picture) and
                                            Miscellaneous Theatrical Services (theatrical promoters
                                        </option>
                                        <option value="7922">
                                            7922 Theatrical Producers (Except Motion Picture) and
                                            Miscellaneous Theatrical Services (theatrical ticket
                                            agencies
                                        </option>
                                        <option value="7922">
                                            7922 Theatrical Producers (Except Motion Pictures) and
                                            Miscellaneous Theatrical Services (ballet and dance
                                            companies
                                        </option>
                                        <option value="7922">
                                            7922 Theatrical Producers (Except Motion Pictures) and
                                            Miscellaneous Theatrical Services (theater companies opera
                                            companies
                                        </option>
                                        <option value="2284">
                                            2284 Thread Mills (except finishing thread without
                                            manufacturing thread
                                        </option>
                                        <option value="2284">
                                            2284 Thread Mills (finishing thread without manufacturing
                                            thread
                                        </option>
                                        <option value="811">
                                            0811 Timber Tracts (long term timber farms
                                        </option>
                                        <option value="811">
                                            0811 Timber Tracts (short rotation woody crops
                                        </option>
                                        <option value="2296">2296 Tire Cord and Fabric</option>
                                        <option value="7534">
                                            7534 Tire Retreading and Repair Shops (rebuilding tires
                                            and retreaded tire manufacturing
                                        </option>
                                        <option value="7534">
                                            7534 Tire Retreading and Repair Shops (tire repair
                                        </option>
                                        <option value="3011">3011 Tires and Inner Tube</option>
                                        <option value="5014">
                                            5014 Tires and Tubes (agents and brokers
                                        </option>
                                        <option value="5014">
                                            5014 Tires and Tubes (business to business electronic
                                            markets
                                        </option>
                                        <option value="5014">
                                            5014 Tires and Tubes (merchant wholesalers except those
                                            selling via retail method
                                        </option>
                                        <option value="5014">
                                            5014 Tires and Tubes (tires and tubes sold via retail
                                            method
                                        </option>
                                        <option value="6541">6541 Title Abstract Office</option>
                                        <option value="6361">
                                            6361 Title Insurance (reinsurers
                                        </option>
                                        <option value="6361">
                                            6361 Title Insurance (title insurers-direct
                                        </option>
                                        <option value="132">0132 Tobacc</option>
                                        <option value="5194">
                                            5194 Tobacco and Tobacco Products (agents and brokers
                                        </option>
                                        <option value="5194">
                                            5194 Tobacco and Tobacco Products (business to business
                                            electronic markets
                                        </option>
                                        <option value="5194">
                                            5194 Tobacco and Tobacco Products (merchant wholesalers
                                            except those selling tobacco and tobacco products via
                                            retail method
                                        </option>
                                        <option value="5194">
                                            5194 Tobacco and Tobacco Products (sold via retail method
                                        </option>
                                        <option value="2141">
                                            2141 Tobacco Stemming and Redrying (reconstituted tobacco
                                        </option>
                                        <option value="2141">
                                            2141 Tobacco Stemming and Redrying (stemming and redrying
                                            tobacco
                                        </option>
                                        <option value="5993">5993 Tobacco Stores and Stand</option>
                                        <option value="7532">
                                            7532 Top Body and Upholstery Repair Shops and Paint Shop
                                        </option>
                                        <option value="3824">
                                            3824 Totalizing Fluid Meters and Counting Device
                                        </option>
                                        <option value="4725">4725 Tour Operator</option>
                                        <option value="4492">
                                            4492 Towing and Tugboat Services
                                        </option>
                                        <option value="5092">
                                            5092 Toys and Hobby Goods and Supplies (agents and brokers
                                        </option>
                                        <option value="5092">
                                            5092 Toys and Hobby Goods and Supplies (business to
                                            business electronic markets
                                        </option>
                                        <option value="5092">
                                            5092 Toys and Hobby Goods and Supplies (merchant
                                            wholesalers except those selling toys and hobby goods and
                                            supplies via retail method
                                        </option>
                                        <option value="5092">
                                            5092 Toys and Hobby Goods and Supplies (toys and hobby
                                            goods and supplies sold via retail method
                                        </option>
                                        <option value="3799">
                                            3799 Transportation Equipment NEC (automobile boat utility
                                            and light truck trailers
                                        </option>
                                        <option value="3799">
                                            3799 Transportation Equipment NEC (except automobile boat
                                            utility light truck trailers trailer hitches and
                                            wheelbarrows
                                        </option>
                                        <option value="3799">
                                            3799 Transportation Equipment NEC (trailer hitches
                                        </option>
                                        <option value="3799">
                                            3799 Transportation Equipment NEC (wheelbarrows
                                        </option>
                                        <option value="5088">
                                            5088 Transportation Equipment and Supplies Except Motor
                                            Vehicles (agents and brokers
                                        </option>
                                        <option value="5088">
                                            5088 Transportation Equipment and Supplies Except Motor
                                            Vehicles (business to business electronic markets
                                        </option>
                                        <option value="5088">
                                            5088 Transportation Equipment and Supplies Except Motor
                                            Vehicles (merchant wholesalers
                                        </option>
                                        <option value="4789">
                                            4789 Transportation Services NEC (car loading and
                                            unloading; cleaning of railroad ballast; dining parlor
                                            sleeping and other car operations; and railroad
                                            maintenance
                                        </option>
                                        <option value="4789">
                                            4789 Transportation Services NEC (dining car operations on
                                            a fee or contract basis
                                        </option>
                                        <option value="4789">
                                            4789 Transportation Services NEC (horse-drawn cabs and
                                            carriages
                                        </option>
                                        <option value="4789">
                                            4789 Transportation Services NEC (pipeline terminals and
                                            stockyards for transportation
                                        </option>
                                        <option value="4724">4724 Travel Agencie</option>
                                        <option value="3792">
                                            3792 Travel Trailers and Camper
                                        </option>
                                        <option value="173">0173 Tree Nut</option>
                                        <option value="3713">3713 Truck and Bus Bodie</option>
                                        <option value="7513">
                                            7513 Truck Rental and Leasing Without Driver
                                        </option>
                                        <option value="3715">3715 Truck Trailer</option>
                                        <option value="4213">
                                            4213 Trucking Except Local (general freight less than
                                            truckload
                                        </option>
                                        <option value="4213">
                                            4213 Trucking Except Local (general freight truckload
                                        </option>
                                        <option value="4213">
                                            4213 Trucking Except Local (household goods moving
                                        </option>
                                        <option value="4213">
                                            4213 Trucking Except Local (specialized freight
                                        </option>
                                        <option value="6733">
                                            6733 Trusts Except Educational Religious and Charitable
                                            (administrators of private estates
                                        </option>
                                        <option value="6733">
                                            6733 Trusts Except Educational Religious and Charitable
                                            (managers
                                        </option>
                                        <option value="6733">
                                            6733 Trusts Except Educational Religious and Charitable
                                            (personal trusts estates and agency accounts
                                        </option>
                                        <option value="6733">
                                            6733 Trusts Except Educational Religious and Charitable
                                            (vacation funds for employees
                                        </option>
                                        <option value="253">0253 Turkeys and Turkey Egg</option>
                                        <option value="2791">2791 Typesettin</option>
                                        <option value="2674">
                                            2674 Uncoated Paper and Multiwall Bag
                                        </option>
                                        <option value="6726">
                                            6726 Unit Investment Trusts Face-Amount Certificate
                                            Offices and Closed-End Management Investment Office
                                        </option>
                                        <option value="4311">
                                            4311 United States Postal Servic
                                        </option>
                                        <option value="3081">
                                            3081 Unsupported Plastics Film and Shee
                                        </option>
                                        <option value="3082">
                                            3082 Unsupported Plastics Profile Shape
                                        </option>
                                        <option value="1094">
                                            1094 Uranium-Radium-Vanadium Ore
                                        </option>
                                        <option value="5932">
                                            5932 Used Merchandise Stores (except pawn shops
                                        </option>
                                        <option value="5932">
                                            5932 Used Merchandise Stores (pawnshops
                                        </option>
                                        <option value="7519">
                                            7519 Utility Trailers and Recreational Vehicle Renta
                                        </option>
                                        <option value="3494">
                                            3494 Valves and Pipe Fittings NEC (except metal pipe
                                            hangers and supports
                                        </option>
                                        <option value="3494">
                                            3494 Valves and Pipe Fittings NEC (metal pipe hangers and
                                            supports
                                        </option>
                                        <option value="5331">5331 Variety Store</option>
                                        <option value="2076">
                                            2076 Vegetable Oil Mills Except Corn Cottonseed and
                                            Soybean (oilseed processing
                                        </option>
                                        <option value="2076">
                                            2076 Vegetable Oil Mills Except Corn Cottonseed and
                                            Soybean (processing purchased vegetable and oilseed oils
                                        </option>
                                        <option value="161">0161 Vegetables and Melon</option>
                                        <option value="3647">
                                            3647 Vehicular Lighting Equipmen
                                        </option>
                                        <option value="742">
                                            0742 Veterinary Services for Animal Specialtie
                                        </option>
                                        <option value="741">
                                            0741 Veterinary Services for Livestoc
                                        </option>
                                        <option value="7841">7841 Video Tape Renta</option>
                                        <option value="3261">
                                            3261 Vitreous China Plumbing Fixtures and China and
                                            Earthenware Fittings and Bathroom Accessorie
                                        </option>
                                        <option value="3262">
                                            3262 Vitreous China Table and Kitchen Article
                                        </option>
                                        <option value="8249">
                                            8249 Vocational Schools NEC (aviation schools excluding
                                            flying instruction
                                        </option>
                                        <option value="8249">
                                            8249 Vocational Schools NEC (except aviation and flight
                                            training and apprenticeship training
                                        </option>
                                        <option value="8249">
                                            8249 Vocational Schools NEC (vocational apprenticeship
                                            training
                                        </option>
                                        <option value="5075">
                                            5075 Warm Air Heating and Air-Conditioning Equipment and
                                            Supplies (agents and brokers
                                        </option>
                                        <option value="5075">
                                            5075 Warm Air Heating and Air-Conditioning Equipment and
                                            Supplies (business to business electronic markets
                                        </option>
                                        <option value="5075">
                                            5075 Warm Air Heating and Air-Conditioning Equipment and
                                            Supplies (merchant wholesalers
                                        </option>
                                        <option value="7631">
                                            7631 Watch Clock and Jewelry Repair (except new retail
                                            sales combined with repair services
                                        </option>
                                        <option value="7631">
                                            7631 Watch Clock and Jewelry Repair (new retail sales
                                            combined with repair-repair services as major source of
                                            receipts
                                        </option>
                                        <option value="3873">
                                            3873 Watches Clocks Clockwork Operated Devices and Part
                                        </option>
                                        <option value="1623">
                                            1623 Water Sewer Pipeline and Communications and Power
                                            Line Construction (gas and oil pipelines mains and pumping
                                            stations
                                        </option>
                                        <option value="1623">
                                            1623 Water Sewer Pipeline and Communications and Power
                                            Line Construction (power and communications transmission
                                            lines
                                        </option>
                                        <option value="1623">
                                            1623 Water Sewer Pipeline and Communications and Power
                                            Line Construction (water and sewer pipelines and related
                                            construction
                                        </option>
                                        <option value="4941">4941 Water Suppl</option>
                                        <option value="4449">
                                            4449 Water Transportation of Freight NE
                                        </option>
                                        <option value="4489">
                                            4489 Water Transportation of Passengers NEC (airboats
                                            excursion boats and sightseeing boats
                                        </option>
                                        <option value="4489">
                                            4489 Water Transportation of Passengers NEC (water taxi
                                        </option>
                                        <option value="4499">
                                            4499 Water Transportation Services NEC (all but lighthouse
                                            operations piloting vessels in and out of harbors boat and
                                            ship rental marine salvage lighterage marine surveyor
                                            services and canal operations
                                        </option>
                                        <option value="4499">
                                            4499 Water Transportation Services NEC (boat and ship
                                            rental commercial
                                        </option>
                                        <option value="4499">
                                            4499 Water Transportation Services NEC (lighterage
                                        </option>
                                        <option value="4499">
                                            4499 Water Transportation Services NEC (lighthouse and
                                            canal operations
                                        </option>
                                        <option value="4499">
                                            4499 Water Transportation Services NEC (marine surveying
                                            services
                                        </option>
                                        <option value="4499">
                                            4499 Water Transportation Services NEC (piloting vessels
                                            in and out of harbors and marine salvage
                                        </option>
                                        <option value="1781">1781 Water Well Drillin</option>
                                        <option value="2385">
                                            2385 Waterproof Outerwear (accessories such as aprons bibs
                                            and other miscellaneous waterproof items made from
                                            rubberized fabric plastics etc. except contractors
                                        </option>
                                        <option value="2385">
                                            2385 Waterproof Outerwear (infants? waterproof outerwear
                                            made from rubberized fabric plastics etc. except
                                            contractors
                                        </option>
                                        <option value="2385">
                                            2385 Waterproof Outerwear (men's boys' women's and girls'
                                            waterproof outerwear made from rubberized fabric plastics
                                            etc. except contractors
                                        </option>
                                        <option value="2385">
                                            2385 Waterproof Outerwear (men?s and boys' contractors
                                        </option>
                                        <option value="2385">
                                            2385 Waterproof Outerwear (men?s and boys? water resistant
                                            or water repellent nontailored outerwear except made from
                                            rubberized fabric plastics etc. and contractors
                                        </option>
                                        <option value="2385">
                                            2385 Waterproof Outerwear (men?s and boys? water resistant
                                            or water repellent tailored overcoats except made from
                                            rubberized fabric plastics etc. and contractors
                                        </option>
                                        <option value="2385">
                                            2385 Waterproof Outerwear (other women?s and girls? water
                                            resistant or water repellent nontailored outerwear except
                                            made from rubberized fabric plastics etc. and contractors
                                        </option>
                                        <option value="2385">
                                            2385 Waterproof Outerwear (women?s girls? and infants'
                                            contractors
                                        </option>
                                        <option value="2385">
                                            2385 Waterproof Outerwear (women?s and girls? water
                                            resistant or water repellent tailored coats except made
                                            from rubberized fabric plastics etc. and contractors
                                        </option>
                                        <option value="2257">
                                            2257 Weft Knit Fabric Mills (except finishing without
                                            knitting weft fabric
                                        </option>
                                        <option value="2257">
                                            2257 Weft Knit Fabric Mills (finishing weft fabric without
                                            knitting weft fabric
                                        </option>
                                        <option value="7692">7692 Welding Repai</option>
                                        <option value="2046">
                                            2046 Wet Corn Milling (except refining purchased corn oil
                                        </option>
                                        <option value="2046">
                                            2046 Wet Corn Milling (refining purchased corn oil
                                        </option>
                                        <option value="111">0111 Whea</option>
                                        <option value="5182">
                                            5182 Wine and Distilled Alcoholic Beverages (agents and
                                            brokers
                                        </option>
                                        <option value="5182">
                                            5182 Wine and Distilled Alcoholic Beverages (business to
                                            business electronic markets
                                        </option>
                                        <option value="5182">
                                            5182 Wine and Distilled Alcoholic Beverages (merchant
                                            wholesalers except those selling wine and distilled
                                            beverages via retail method
                                        </option>
                                        <option value="5182">
                                            5182 Wine and Distilled Alcoholic Beverages (wine and
                                            distilled alcoholic beverages sold via retail method
                                        </option>
                                        <option value="2084">
                                            2084 Wines Brandy and Brandy Spirit
                                        </option>
                                        <option value="3495">
                                            3495 Wire Springs (clock and watch springs
                                        </option>
                                        <option value="3495">
                                            3495 Wire Springs (except watch and clock springs
                                        </option>
                                        <option value="5137">
                                            5137 Women's Children's and Infants' Clothing and
                                            Accessories (selling a general line of womens clothing via
                                            retail method
                                        </option>
                                        <option value="5137">
                                            5137 Women's Children's and Infants' Clothing and
                                            Accessories (merchant wholesalers of athletic uniforms
                                        </option>
                                        <option value="5137">
                                            5137 Women's Children's and Infants' Clothing and
                                            Accessories (selling a general line of children's and
                                            infants' clothing via retail method
                                        </option>
                                        <option value="5632">
                                            5632 Women's Accessory and Specialty Stores (accessories
                                        </option>
                                        <option value="5621">
                                            5621 Women's Clothing Stores (dress shops and bridal shops
                                        </option>
                                        <option value="5621">
                                            5621 Women's Clothing Stores (except dress shops and
                                            bridal shops
                                        </option>
                                        <option value="5137">
                                            5137 Women?s Children?s and Infants? Clothing and
                                            Accessories (agents and brokers
                                        </option>
                                        <option value="5137">
                                            5137 Women?s Children?s and Infants? Clothing and
                                            Accessories (business to business electronic markets
                                        </option>
                                        <option value="5137">
                                            5137 Women?s Children?s and Infants? Clothing and
                                            Accessories (merchant wholesalers except wholesaling
                                            athletic uniforms and uniforms and merchant wholesalers
                                            selling work clothing via retail method
                                        </option>
                                        <option value="5137">
                                            5137 Women?s Children?s and Infants? Clothing and
                                            Accessories (uniforms and work clothing sold via retail
                                            method
                                        </option>
                                        <option value="2331">
                                            2331 Women?s Misses? and Juniors? Blouses and Shirts
                                            (contractors
                                        </option>
                                        <option value="2331">
                                            2331 Women?s Misses? and Juniors? Blouses and Shirts
                                            (except contractors
                                        </option>
                                        <option value="2335">
                                            2335 Women?s Misses? and Juniors? Dresses (contractors
                                        </option>
                                        <option value="2335">
                                            2335 Women?s Misses? and Juniors? Dresses (except
                                            contractors
                                        </option>
                                        <option value="2339">
                                            2339 Women?s Misses? and Juniors? Outerwear NEC
                                            (contractors
                                        </option>
                                        <option value="2339">
                                            2339 Women?s Misses? and Juniors? Outerwear NEC (except
                                            team athletic uniforms scarves and contractors
                                        </option>
                                        <option value="2339">
                                            2339 Women?s Misses? and Juniors? Outerwear NEC (scarves
                                            except contractors
                                        </option>
                                        <option value="2339">
                                            2339 Women?s Misses? and Juniors? Outerwear NEC (team
                                            athletic uniforms except contractors
                                        </option>
                                        <option value="2337">
                                            2337 Women?s Misses? and Juniors? Suits Skirts and Coats
                                            (contractors
                                        </option>
                                        <option value="2337">
                                            2337 Women?s Misses? and Juniors? Suits Skirts and Coats
                                            (except contractors
                                        </option>
                                        <option value="2341">
                                            2341 Women?s Misses? Children?s and Infants? Underwear and
                                            Nightwear (boys? contractors
                                        </option>
                                        <option value="2341">
                                            2341 Women?s Misses? Children?s and Infants? Underwear and
                                            Nightwear (boys? except contractors
                                        </option>
                                        <option value="2341">
                                            2341 Women?s Misses? Children?s and Infants? Underwear and
                                            Nightwear (infants? except contractors
                                        </option>
                                        <option value="2341">
                                            2341 Women?s Misses? Children?s and Infants? Underwear and
                                            Nightwear (women and girls? except contractors
                                        </option>
                                        <option value="2341">
                                            2341 Women?s Misses? Children?s and Infants? Underwear and
                                            Nightwear (women's girls' and infants' contractors
                                        </option>
                                        <option value="5632">
                                            5632 Women?s Accessory and Specialty Stores (specialty
                                            stores
                                        </option>
                                        <option value="3144">
                                            3144 Women?s Footwear Except Athleti
                                        </option>
                                        <option value="2251">
                                            2251 Women?s Full-Length and Knee-Length Hosiery Except
                                            Socks (dyeing and finishing sheer hosiery without knitting
                                            sheer hosiery
                                        </option>
                                        <option value="2251">
                                            2251 Women?s Full-Length and Knee-Length Hosiery Except
                                            Socks (except dyeing and finishing sheer hosiery without
                                            knitting sheer hosiery
                                        </option>
                                        <option value="3171">
                                            3171 Women?s Handbags and Purse
                                        </option>
                                        <option value="2449">2449 Wood Containers NE</option>
                                        <option value="2511">
                                            2511 Wood Household Furniture Except Upholstered (except
                                            wood box spring frames
                                        </option>
                                        <option value="2511">
                                            2511 Wood Household Furniture Except Upholstered (wood box
                                            spring frames(parts)
                                        </option>
                                        <option value="2512">
                                            2512 Wood Household Furniture Upholstere
                                        </option>
                                        <option value="2434">2434 Wood Kitchen Cabinet</option>
                                        <option value="2541">
                                            2541 Wood Office and Store Fixtures Partitions Shelving
                                            and Lockers ( custom architectural millwork
                                        </option>
                                        <option value="2541">
                                            2541 Wood Office and Store Fixtures Partitions Shelving
                                            and Lockers (counter tops
                                        </option>
                                        <option value="2541">
                                            2541 Wood Office and Store Fixtures Partitions Shelving
                                            and Lockers (except custom architectural millwork counter
                                            tops and lunchroom tables and chairs
                                        </option>
                                        <option value="2541">
                                            2541 Wood Office and Store Fixtures Partitions Shelving
                                            and Lockers (wood lunchroom tables and chairs
                                        </option>
                                        <option value="2521">2521 Wood Office Furnitur</option>
                                        <option value="2448">2448 Wood Pallets and Skid</option>
                                        <option value="2491">2491 Wood Preservin</option>
                                        <option value="2499">
                                            2499 Wood Products NEC (cork life preservers
                                        </option>
                                        <option value="2499">
                                            2499 Wood Products NEC (except wood containers wood
                                            cooling towers cork life preservers mirror or picture
                                            frames and laundry hampers of reed rattan and willow
                                        </option>
                                        <option value="2499">
                                            2499 Wood Products NEC (laundry hampers of reed rattan and
                                            willow
                                        </option>
                                        <option value="2499">
                                            2499 Wood Products NEC (mirror and picture frames
                                        </option>
                                        <option value="2499">
                                            2499 Wood Products NEC (wood containers such as
                                            noncoopered vats and reed or straw baskets
                                        </option>
                                        <option value="2499">
                                            2499 Wood Products NEC (wood cooling towers
                                        </option>
                                        <option value="2517">
                                            2517 Wood Television Radio Phonograph and Sewing Machine
                                            Cabinet
                                        </option>
                                        <option value="3553">3553 Woodworking Machiner</option>
                                        <option value="1795">
                                            1795 Wrecking and Demolition Wor
                                        </option>
                                        <option value="3844">
                                            3844 X-Ray Apparatus and Tubes and Related Irradiation
                                            Apparatu
                                        </option>
                                        <option value="2281">2281 Yarn Spinning Mill</option>
                                        <option value="2282">
                                            2282 Yarn Texturizing Throwing Twisting and Winding Mills
                                        </option>
                                    </select>
                                        ) :(
                                            <select
                                        onChange={handleChange}
                                        name="selSIC_codes[]"
                                        id="selSIC_codes"
                                        style={{ width: "90%" }}
                                        size="10"
                                        multiple="multiple"
                                    >
                                        <option
                                            style={{
                                                color: "#FFF",
                                                backgroundcolor: "blue",
                                                fontsize: "10pt",
                                            }}
                                            value=""
                                        >
                                            -- Select Some SIC Codes Below. Hold the Control key down
                                            to select more than one --
                                        </option>
                                    </select>
                                        )
                                    }
                                    
                                </td>
                            </tr></tbody>
                        </table>
                    </fieldset>
                    <hr />
                    <fieldset>
                        <legend>SIC Query Option lll:</legend>
                        <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                            <tbody>
                            <tr>
                                <td align="left">
                                    <b>
                                        SIC Codes are often assigned by ranges for different types
                                        of business within an Industry.
                                        <br /> you may also enter a Range of SICS to obtain all type
                                        of Business.
                                    </b>
                                    <br />
                                    <br />
                                    <b>
                                       
                                        For Example: If you select 5700, you will get all codes
                                        between 5700 &amp; 5799.
                                        <br /> This search it will also override the other 3 SIC
                                        Code Searches.
                                        <br />
                                        hold the control or shift key down to select more than one
                                        range. You can select multiple ranges.
                                    </b>
                                    <br />
                                    <br />
                                    <Link to="/database-emailer/sictonaciscodes">
                                        SIC to NAICS Code Relations
                                    </Link>
                                </td>
                                <td align="center">
                                    <b> Select a Range(s) of SIC Codes:</b>
                                    <br />
                                    <label htmlFor="txtSicLower">Lower SIC Code: </label>
                                    <input onChange={handleChange}
                                        type="text"
                                        name="txtSicLower"
                                        id="txtSicLower"
                                        maxLength="8"
                                        size="4"
                                        
                                        placeholder="Lower Sic Code"
                                    />
                                    | <label htmlFor="txtSicHigher">Higher SIC Code: </label>
                                    <input onChange={handleChange}
                                        type="text"
                                        name="txtSicHigher"
                                        id="txtSicHigher"
                                        maxLength="8"
                                        size="4"
                                        
                                        placeholder="Higher Sic Code"
                                    />
                                    <hr />
                                    Or Use this Box Below:
                                    <br />
                                    <select
                                        onChange={handleChange}
                                        name="selSIC_code_ranges[]"
                                        id="selSIC_code_ranges"
                                        style={{ width: "90%" }}
                                        size="8"
                                        multiple="multiple"
                                    >
                                        <option
                                            style={{
                                                color: "#FFF",
                                                backgroundColor: "blue",
                                                fontSize: "11pt",
                                            }}
                                            value=""
                                        >
                                            -- Select a Range, You Can Select Multiple Ranges --
                                        </option>
                                        <option value="01">100 - 199</option>
                                        <option value="02">200 - 299</option>
                                        <option value="03">300 - 399</option>
                                        <option value="04">400 - 499</option>
                                        <option value="05">500 - 599</option>
                                        <option value="06">600 - 699</option>
                                        <option value="07">700 - 799</option>
                                        <option value="08">800 - 899</option>
                                        <option value="09">900 - 999</option>
                                        <option value="10">1000 - 1099</option>
                                        <option value="11">1100 - 1199</option>
                                        <option value="12">1200 - 1299</option>
                                        <option value="13">1300 - 1399</option>
                                        <option value="14">1400 - 1499</option>
                                        <option value="15">1500 - 1599</option>
                                        <option value="16">1600 - 1699</option>
                                        <option value="17">1700 - 1799</option>
                                        <option value="18">1800 - 1899</option>
                                        <option value="19">1900 - 1999</option>
                                        <option value="20">2000 - 2099</option>
                                        <option value="21">2100 - 2199</option>
                                        <option value="22">2200 - 2299</option>
                                        <option value="23">2300 - 2399</option>
                                        <option value="24">2400 - 2499</option>
                                        <option value="25">2500 - 2599</option>
                                        <option value="26">2600 - 2699</option>
                                        <option value="27">2700 - 2799</option>
                                        <option value="28">2800 - 2899</option>
                                        <option value="29">2900 - 2999</option>
                                        <option value="30">3000 - 3099</option>
                                        <option value="31">3100 - 3199</option>
                                        <option value="32">3200 - 3299</option>
                                        <option value="33">3300 - 3399</option>
                                        <option value="34">3400 - 3499</option>
                                        <option value="35">3500 - 3599</option>
                                        <option value="36">3600 - 3699</option>
                                        <option value="37">3700 - 3799</option>
                                        <option value="38">3800 - 3899</option>
                                        <option value="39">3900 - 3999</option>
                                        <option value="40">4000 - 4099</option>
                                        <option value="41">4100 - 4199</option>
                                        <option value="42">4200 - 4299</option>
                                        <option value="43">4300 - 4399</option>
                                        <option value="44">4400 - 4499</option>
                                        <option value="45">4500 - 4599</option>
                                        <option value="46">4600 - 4699</option>
                                        <option value="47">4700 - 4799</option>
                                        <option value="48">4800 - 4899</option>
                                        <option value="49">4900 - 4999</option>
                                        <option value="50">5000 - 5099</option>
                                        <option value="51">5100 - 5199</option>
                                        <option value="52">5200 - 5299</option>
                                        <option value="53">5300 - 5399</option>
                                        <option value="54">5400 - 5499</option>
                                        <option value="55">5500 - 5599</option>
                                        <option value="56">5600 - 5699</option>
                                        <option value="57">5700 - 5799</option>
                                        <option value="58">5800 - 5899</option>
                                        <option value="59">5900 - 5999</option>
                                        <option value="60">6000 - 6099</option>
                                        <option value="61">6100 - 6199</option>
                                        <option value="62">6200 - 6299</option>
                                        <option value="63">6300 - 6399</option>
                                        <option value="64">6400 - 6499</option>
                                        <option value="65">6500 - 6599</option>
                                        <option value="66">6600 - 6699</option>
                                        <option value="67">6700 - 6799</option>
                                        <option value="68">6800 - 6899</option>
                                        <option value="69">6900 - 6999</option>
                                        <option value="70">7000 - 7099</option>
                                        <option value="71">7100 - 7199</option>
                                        <option value="72">7200 - 7299</option>
                                        <option value="73">7300 - 7399</option>
                                        <option value="74">7400 - 7499</option>
                                        <option value="75">7500 - 7599</option>
                                        <option value="76">7600 - 7699</option>
                                        <option value="77">7700 - 7799</option>
                                        <option value="78">7800 - 7899</option>
                                        <option value="79">7900 - 7999</option>
                                        <option value="80">8000 - 8099</option>
                                        <option value="81">8100 - 8199</option>
                                        <option value="82">8200 - 8299</option>
                                        <option value="83">8300 - 8399</option>
                                        <option value="84">8400 - 8499</option>
                                        <option value="85">8500 - 8599</option>
                                        <option value="86">8600 - 8699</option>
                                        <option value="87">8700 - 8799</option>
                                        <option value="88">8800 - 8899</option>
                                        <option value="89">8900 - 8999</option>
                                        <option value="90">9000 - 9099</option>
                                        <option value="91">9100 - 9199</option>
                                        <option value="92">9200 - 9299</option>
                                        <option value="93">9300 - 9399</option>
                                        <option value="94">9400 - 9499</option>
                                        <option value="95">9500 - 9599</option>
                                        <option value="96">9600 - 9699</option>
                                        <option value="97">9700 - 9799</option>
                                        <option value="98">9800 - 9899</option>
                                        <option value="99">9900 - 9999</option>
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
                                        This will only work by itself, don't select any other SIC
                                        Codes searches if you want to use this one
                                        <br />
                                        If you want all your records to just have a SIC code, then
                                        check the "Only Businesses with SIC Codes" Box Below
                                    </h4>
                                </td>
                            </tr></tbody>
                        </table>
                    </fieldset>
                    <hr />
                    <fieldset>
                        <legend>SIC Query Option lV:</legend>
                        <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                            <tbody>
                            <tr>
                                <td align="left" colSpan="2">
                                    <b className="redtextbold2">SIC Query Option IV:</b>
                                    <br />
                                    <span className="twefont" style={{ fontSize: "11pt" }}>
                                        To Select Only Those Businesses That Have a SIC Code
                                        Assigned to Them
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td align="right" width="270">
                                    <label colSpan="chkSICCODESONLY">
                                        <b>Only Businesses with SIC Codes</b>
                                    </label>
                                </td>
                                <td align="left">
                                    <input onChange={handleChange}
                                        type="checkbox"
                                        name="chkSICCODESONLY"
                                        id="chkSICCODESONLY"
                                        value="1"
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </fieldset>
                    <hr />
                    <fieldset>
                        <legend>SIC Query Option V:</legend>
                        <table cellPadding="0" cellSpacing="0" width="100%" className="tdBlock">
                            <tbody>
                            <tr>
                                <td align="left">
                                    <b>
                                        {" "}
                                        Paste the contents of a file of 4 Digit SIC codes Below
                                    </b>
                                    <br />
                                    <b>
                                        SIC codes can be separated by spaces or any non-numeric
                                        character like a comma. All non-numeric characters will be
                                        stripped out. Only the first 4 digits of each SIC code are
                                        used
                                    </b>
                                    <br />
                                    <textarea
                                        onChange={handleChange}
                                        name="taSIC"
                                        id="taSIC"
                                        style={{ height: "100px", width: "90%" }}
                                    ></textarea>
                                    <hr />
                                    <b>
                                        Paste the contents of a file of 6 or More Digit SIC codes
                                        Below
                                    </b>
                                    <br />
                                    <b>
                                        SIC codes can be separated by spaces or any non-numeric
                                        character like a comma. All non-numeric characters will be
                                        stripped out. Only the first 6 digits of each SIC code are
                                        used
                                    </b>
                                    <br />
                                    <textarea
                                        onChange={handleChange}
                                        name="taSIC6"
                                        id="taSIC6"
                                        style={{ height: "100px", width: "90%" }}
                                    ></textarea>
                                    <br />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <hr />
                        <Link to="/database-emailer/sictonaciscodes">
                            SIC to NAICS Code Relations
                        </Link>
                    </fieldset>
                </div>
            </fieldset>
        </>
    );
};
export default SICcodes;
