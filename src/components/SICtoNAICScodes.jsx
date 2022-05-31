import React, {useState} from "react";

const SICtoNAICScodes = () => {
  const [sicCodes, setSicCodes] = useState()
  const [naicsCodes, setNaicsCodes] = useState()
  const handleChange= (e) =>{
    const {name, value} = e.target;
    if(name === "NAICS_CODE"){
      setNaicsCodes(value)
    }
    if(name === "SIC_CODE"){
      setSicCodes(value)
    }
  }
  const handleSearch = () =>{
    
  }
  return (
    <>
      <div id="contentwrapper">
        <div id="searchContent">
          <form  >
            <b>
              Search on SIC or NAICS Code. You can enter full or partial code:
            </b>
            <br />
            <b>SIC Code:</b>{" "}
            <input
              type="text"
              name="SIC_CODE"
              id="SIC_CODE"
              maxlength="4"
              size="4"
              value={sicCodes}
              onChange={handleChange}
            />
            &nbsp;OR&nbsp;
            <b>NAICS Code:</b>{" "}
            <input
              type="text"
              name="NAICS_CODE"
              id="NAICS_CODE"
              maxlength="6"
              size="4"
              value={naicsCodes}
              onChange={handleChange}
            />
            <input
              type="submit"
              name="subSearch"
              id="subSearch"
              value="Search on Codes"
              title="Search on and entered code above"
              onClick={handleSearch}
            />
          </form>
          <table width="100%" id="NAICS_SIC">
            <caption>
              NAICS to SIC Codes Descriptions &amp; Correlations{" "}
            </caption>
            <tr id="tblHeader">
              <td width="4%">SIC Code</td>
              <td width="46%">SIC Description</td>
              <td width="5%">NAICS Code</td>
              <td width="45%">NAICS Description</td>
            </tr>
            <tr>
              <td>3291</td>
              <td>
                Abrasive Products (except steel wool with or without soap)
              </td>
              <td>327910</td>
              <td>Abrasive Product Manufacturing</td>
            </tr>
            <tr>
              <td>3291</td>
              <td>Abrasive Products (steel wool with or without soap)</td>
              <td>332999</td>
              <td>
                All Other Miscellaneous Fabricated Metal Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>6321</td>
              <td>
                Accident and Health Insurance (disability insurers-direct)
              </td>
              <td>524113</td>
              <td>Direct Life Insurance Carriers</td>
            </tr>
            <tr>
              <td>6321</td>
              <td>
                Accident and Health Insurance (health and medical
                insurers-direct)
              </td>
              <td>524114</td>
              <td>Direct Health and Medical Insurance Carriers</td>
            </tr>
            <tr>
              <td>6321</td>
              <td>Accident and Health Insurance (reinsurers)</td>
              <td>524130</td>
              <td>Reinsurance Carriers</td>
            </tr>
            <tr>
              <td>6321</td>
              <td>Accident and Health Insurance (self insurers)</td>
              <td>525190</td>
              <td>Other Insurance Funds</td>
            </tr>
            <tr>
              <td>8721</td>
              <td>
                Accounting, Auditing, and Bookkeeping Services (auditing
                accountants)
              </td>
              <td>541211</td>
              <td>Offices of Certified Public Accountants</td>
            </tr>
            <tr>
              <td>8721</td>
              <td>
                Accounting, Auditing, and Bookkeeping Services (other accounting
                services)
              </td>
              <td>541219</td>
              <td>Other Accounting Services</td>
            </tr>
            <tr>
              <td>8721</td>
              <td>
                Accounting, Auditing, and Bookkeeping Services (payroll
                services)
              </td>
              <td>541214</td>
              <td>Payroll Services</td>
            </tr>
            <tr>
              <td>2891</td>
              <td>Adhesives and Sealants</td>
              <td>325520</td>
              <td>Adhesive Manufacturing</td>
            </tr>
            <tr>
              <td>7322</td>
              <td>Adjustment and Collection Services</td>
              <td>561440</td>
              <td>Collection Agencies</td>
            </tr>
            <tr>
              <td>9411</td>
              <td>Administration of Educational Programs</td>
              <td>923110</td>
              <td>Administration of Education Programs</td>
            </tr>
            <tr>
              <td>9611</td>
              <td>Administration of General Economic Programs</td>
              <td>926110</td>
              <td>Administration of General Economic Programs</td>
            </tr>
            <tr>
              <td>9531</td>
              <td>Administration of Housing Programs</td>
              <td>925110</td>
              <td>Administration of Housing Programs</td>
            </tr>
            <tr>
              <td>9431</td>
              <td>Administration of Public Health Programs</td>
              <td>923120</td>
              <td>Administration of Public Health Programs</td>
            </tr>
            <tr>
              <td>9441</td>
              <td>
                Administration of Social, Human Resource and Income Maintenance
                Programs
              </td>
              <td>923130</td>
              <td>
                Administration of Human Resource Programs (except Education,
                Public Health, and Veteran's Affairs Programs)
              </td>
            </tr>
            <tr>
              <td>9532</td>
              <td>
                Administration of Urban Planning and Community and Rural
                Development
              </td>
              <td>925120</td>
              <td>
                Administration of Urban Planning and Community and Rural
                Development
              </td>
            </tr>
            <tr>
              <td>9451</td>
              <td>
                Administration of Veterans' Affairs, Except Health and Insurance
              </td>
              <td>923140</td>
              <td>Administration of Veteran's Affairs</td>
            </tr>
            <tr>
              <td>7311</td>
              <td>Advertising Agencies</td>
              <td>541810</td>
              <td>Advertising Agencies</td>
            </tr>
            <tr>
              <td>7319</td>
              <td>Advertising, NEC (advertising materials distributor)</td>
              <td>541870</td>
              <td>Advertising Material Distribution Services</td>
            </tr>
            <tr>
              <td>7319</td>
              <td>
                Advertising, NEC (display advertising, aerial advertising using
                special purpose aircraft, such as blimps)
              </td>
              <td>541850</td>
              <td>Display Advertising</td>
            </tr>
            <tr>
              <td>7319</td>
              <td>
                Advertising, NEC (except media buying, display advertising,
                except outdoor; and advertising material distributors)
              </td>
              <td>541890</td>
              <td>Other Services Related to Advertising</td>
            </tr>
            <tr>
              <td>7319</td>
              <td>Advertising, NEC (media buying services)</td>
              <td>541830</td>
              <td>Media Buying Agencies</td>
            </tr>
            <tr>
              <td>7319</td>
              <td>
                Advertising, NEC (using general purpose aircraft for aerial
                advertising and a variety of other services)
              </td>
              <td>481219</td>
              <td>Other Nonscheduled Air Transportation</td>
            </tr>
            <tr>
              <td>3563</td>
              <td>Air and Gas Compressors</td>
              <td>333912</td>
              <td>Air and Gas Compressor Manufacturing </td>
            </tr>
            <tr>
              <td>9511</td>
              <td>Air and Water Resource and Solid Waste Management</td>
              <td>924110</td>
              <td>
                Administration of Air and Water Resource and Solid Waste
                Management Programs
              </td>
            </tr>
            <tr>
              <td>4513</td>
              <td>Air Courier Services</td>
              <td>492110</td>
              <td>Couriers</td>
            </tr>
            <tr>
              <td>4522</td>
              <td>Air Transportation, Nonscheduled (air ambulance)</td>
              <td>621910</td>
              <td>Ambulance Services</td>
            </tr>
            <tr>
              <td>4522</td>
              <td>Air Transportation, Nonscheduled (freight)</td>
              <td>481212</td>
              <td>Nonscheduled Chartered Freight Air Transportation</td>
            </tr>
            <tr>
              <td>4522</td>
              <td>Air Transportation, Nonscheduled (passenger)</td>
              <td>481211</td>
              <td>Nonscheduled Chartered Passenger Air Transportation</td>
            </tr>
            <tr>
              <td>4522</td>
              <td>Air Transportation, Nonscheduled (sightseeing planes)</td>
              <td>487990</td>
              <td>Scenic and Sightseeing Transportation, Other</td>
            </tr>
            <tr>
              <td>4522</td>
              <td>
                Air Transportation, Nonscheduled (using general purpose aircraft
                for a variety of passenger, freight, courier, and other uses)
              </td>
              <td>481219</td>
              <td>Other Nonscheduled Air Transportation</td>
            </tr>
            <tr>
              <td>4512</td>
              <td>Air Transportation, Scheduled (freight)</td>
              <td>481112</td>
              <td>Scheduled Freight Air Transportation</td>
            </tr>
            <tr>
              <td>4512</td>
              <td>Air Transportation, Scheduled (passenger)</td>
              <td>481111</td>
              <td>Scheduled Passenger Air Transportation</td>
            </tr>
            <tr>
              <td>3585</td>
              <td>
                Air-Conditioning and Warm Air Heating Equipment and Commercial
                and Industrial Refrigeration Equipment (except motor vehicle
                air-conditioning)
              </td>
              <td>333415</td>
              <td>
                Air-Conditioning and Warm Air Heating Equipment and Commercial
                and Industrial Refrigeration Equipment Manufacturing
              </td>
            </tr>
            <tr>
              <td>3585</td>
              <td>
                Air-Conditioning and Warm Air Heating Equipment and Commercial
                and Industrial Refrigeration Equipment (motor vehicle
                air-conditioning)
              </td>
              <td>336391</td>
              <td>Motor Vehicle Air-Conditioning Manufacturing</td>
            </tr>
            <tr>
              <td>3721</td>
              <td>
                Aircraft (except research and development not producing
                prototypes)
              </td>
              <td>336411</td>
              <td>Aircraft Manufacturing</td>
            </tr>
            <tr>
              <td>3721</td>
              <td>
                Aircraft (research and development not producing prototypes)
              </td>
              <td>541712</td>
              <td>
                Research and Development in the Physical, Engineering, and Life
                Sciences (except biotechnology)
              </td>
            </tr>
            <tr>
              <td>3724</td>
              <td>
                Aircraft Engines and Engine Parts (except research and
                development not producing prototypes)
              </td>
              <td>336412</td>
              <td>Aircraft Engine and Engine Parts Manufacturing</td>
            </tr>
            <tr>
              <td>3724</td>
              <td>
                Aircraft Engines and Engine Parts (research and development not
                producing prototypes)
              </td>
              <td>541712</td>
              <td>
                Research and Development in the Physical, Engineering, and Life
                Sciences (except biotechnology)
              </td>
            </tr>
            <tr>
              <td>3728</td>
              <td>
                Aircraft Parts and Auxiliary Equipment, NEC (except fluid power
                aircraft subassemblies, target drones, and research and
                development not producing prototypes)
              </td>
              <td>336413</td>
              <td>Other Aircraft Part and Auxiliary Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3728</td>
              <td>
                Aircraft Parts and Auxiliary Equipment, NEC (fluid power
                aircraft subassemblies)
              </td>
              <td>332912</td>
              <td>Fluid Power Valve and Hose Fitting Manufacturing</td>
            </tr>
            <tr>
              <td>3728</td>
              <td>
                Aircraft Parts and Auxiliary Equipment, NEC (research and
                development not producing prototypes)
              </td>
              <td>541712</td>
              <td>
                Research and Development in the Physical, Engineering, and Life
                Sciences (except biotechnology)
              </td>
            </tr>
            <tr>
              <td>3728</td>
              <td>
                Aircraft Parts and Auxiliary Equipment, NEC (target drones)
              </td>
              <td>336411</td>
              <td>Aircraft Manufacturing</td>
            </tr>
            <tr>
              <td>4581</td>
              <td>
                Airports, Flying Fields, and Airport Terminal Services (air
                freight handling at airports, hangar operations, airport
                terminal services, aircraft storage, airports, and flying
                fields)
              </td>
              <td>488119</td>
              <td>Other Airport Operations</td>
            </tr>
            <tr>
              <td>4581</td>
              <td>
                Airports, Flying Fields, and Airport Terminal Services (aircraft
                servicing and repairing)
              </td>
              <td>488190</td>
              <td>Other Support Activities for Air Transportation</td>
            </tr>
            <tr>
              <td>4581</td>
              <td>
                Airports, Flying Fields, and Airport Terminal Services (aircraft
                upholstery repair)
              </td>
              <td>811420</td>
              <td>Reupholstery and Furniture Repair</td>
            </tr>
            <tr>
              <td>4581</td>
              <td>
                Airports, Flying Fields, and Airport Terminal Services (airplane
                cleaning and janitorial services)
              </td>
              <td>561720</td>
              <td>Janitorial Services</td>
            </tr>
            <tr>
              <td>4581</td>
              <td>
                Airports, Flying Fields, and Airport Terminal Services (private
                air traffic control)
              </td>
              <td>488111</td>
              <td>Air Traffic Control</td>
            </tr>
            <tr>
              <td>2812</td>
              <td>Alkalies and Chlorine</td>
              <td>325181</td>
              <td>Alkalies and Chlorine Manufacturing</td>
            </tr>
            <tr>
              <td>3363</td>
              <td>Aluminum Die-Castings</td>
              <td>331521</td>
              <td>Aluminum Die-Casting Foundries</td>
            </tr>
            <tr>
              <td>3354</td>
              <td>Aluminum Extruded Products</td>
              <td>331316</td>
              <td>Aluminum Extruded Product Manufacturing</td>
            </tr>
            <tr>
              <td>3365</td>
              <td>Aluminum Foundries</td>
              <td>331524</td>
              <td>Aluminum Foundries (except Die-Casting)</td>
            </tr>
            <tr>
              <td>3355</td>
              <td>Aluminum Rolling and Drawing, NEC</td>
              <td>331319</td>
              <td>Other Aluminum Rolling and Drawing</td>
            </tr>
            <tr>
              <td>3353</td>
              <td>Aluminum Sheet, Plate, and Foil</td>
              <td>331315</td>
              <td>Aluminum Sheet, Plate, and Foil Manufacturing</td>
            </tr>
            <tr>
              <td>3483</td>
              <td>Ammunition, Except for Small Arms</td>
              <td>332993</td>
              <td>Ammunition (except Small Arms) Manufacturing</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (aerial tramways, scenic
                and amusement)
              </td>
              <td>487990</td>
              <td>Scenic and Sightseeing Transportation, Other</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (baseball, basketball,
                bowling, gymnastic, judo, karate, parachute, scuba and skin
                diving, skating, ski, swimming, tennis, and other sports
                instruction; and sports instructional schools and camps)
              </td>
              <td>611620</td>
              <td>Sports and Recreation Instruction</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (bridge instruction, yoga
                instruction, and similar nonathletic instruction)
              </td>
              <td>611699</td>
              <td>All Other Miscellaneous Schools and Instruction</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (canoe, pleasure boats,
                bicycles, motorcycles, moped, go carts, etc. rental)
              </td>
              <td>532292</td>
              <td>Recreational Goods Rental</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (casinos, except hotel
                casinos)
              </td>
              <td>713210</td>
              <td>Casinos (except Casino Hotels)</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (caverns and
                miscellaneous commercial parks)
              </td>
              <td>712190</td>
              <td>Nature Parks and Other Similar Institutions</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>Amusement and Recreation Services, NEC (charter fishing)</td>
              <td>487210</td>
              <td>Scenic and Sightseeing Transportation, Water</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (circus companies and
                traveling carnival shows)
              </td>
              <td>711190</td>
              <td>Other Performing Arts Companies</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (except circuses,
                traveling carnivals, professional athletes, caverns and other
                commercial parks, skiing facilities, casinos and other gambling
                operations, nonmembership fitness and recreational sports
                centers, sports instruction, sports equipment rental, ticket
                agencies, charter fishing, state fairs, agriculture fairs,
                county fairs, operation of fishing lakes, phrenologists
                services, and amusement or scenic transport operations)
              </td>
              <td>713990</td>
              <td>All Other Amusement and Recreation Industries</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (lottery, bingo, bookie,
                and other gambling operations)
              </td>
              <td>713290</td>
              <td>Other Gambling Industries</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (nonmembership fitness
                and recreational sports centers)
              </td>
              <td>713940</td>
              <td>Fitness and Recreational Sports Centers</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (phrenologists services)
              </td>
              <td>812990</td>
              <td>All Other Personal Services</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (professional athletes)
              </td>
              <td>711219</td>
              <td>Other Spectator Sports</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (scenic transport
                operations, land)
              </td>
              <td>487110</td>
              <td>Scenic and Sightseeing Transportation, Land</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (skiing facilities)
              </td>
              <td>713920</td>
              <td>Skiing Facilities</td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (state fairs, agriculture
                fairs and county fairs with facilities)
              </td>
              <td>711310</td>
              <td>
                Promoters of Performing Arts, Sports, and Similar Events with
                Facilities
              </td>
            </tr>
            <tr>
              <td>7999</td>
              <td>
                Amusement and Recreation Services, NEC (state fairs, agriculture
                fairs and county fairs without facilities)
              </td>
              <td>711320</td>
              <td>
                Promoters of Performing Arts, Sports, and Similar Events without
                Facilities
              </td>
            </tr>
            <tr>
              <td>7999</td>
              <td>Amusement and Recreation Services, NEC (ticket agencies)</td>
              <td>561599</td>
              <td>All Other Travel Arrangement and Reservation Services</td>
            </tr>
            <tr>
              <td>7996</td>
              <td>Amusement Parks</td>
              <td>713110</td>
              <td>Amusement and Theme Parks</td>
            </tr>
            <tr>
              <td>2077</td>
              <td>Animal and Marine Fats and Oils (animal fats and oils)</td>
              <td>311613</td>
              <td>Rendering and Meat Byproduct Processing</td>
            </tr>
            <tr>
              <td>2077</td>
              <td>
                Animal and Marine Fats and Oils (canned marine fats and oils)
              </td>
              <td>311711</td>
              <td>Seafood Canning</td>
            </tr>
            <tr>
              <td>2077</td>
              <td>
                Animal and Marine Fats and Oils (fresh and frozen marine fats
                and oils)
              </td>
              <td>311712</td>
              <td>Fresh and Frozen Seafood Processing</td>
            </tr>
            <tr>
              <td>0273</td>
              <td>Animal Aquaculture (except finfish and shellfish farms)</td>
              <td>112519</td>
              <td>Other Animal Aquaculture</td>
            </tr>
            <tr>
              <td>0273</td>
              <td>Animal Aquaculture (finfish farms)</td>
              <td>112511</td>
              <td>Finfish Farming and Fish Hatcheries</td>
            </tr>
            <tr>
              <td>0273</td>
              <td>Animal Aquaculture (shellfish farms)</td>
              <td>112512</td>
              <td>Shellfish Farming</td>
            </tr>
            <tr>
              <td>0279</td>
              <td>Animal Specialties, NEC (apiculture)</td>
              <td>112910</td>
              <td>Apiculture</td>
            </tr>
            <tr>
              <td>0279</td>
              <td>
                Animal Specialties, NEC (except apiculture, frog and alligator
                farms)
              </td>
              <td>112990</td>
              <td>All Other Animal Production</td>
            </tr>
            <tr>
              <td>0279</td>
              <td>Animal Specialties, NEC (frog and alligator farms)</td>
              <td>112519</td>
              <td>Other Animal Aquaculture</td>
            </tr>
            <tr>
              <td>0752</td>
              <td>
                Animal Specialty Services, Except Veterinary (boarding and
                training horses (except race horses), animal semen banks, and
                artificial insemination services for pets)
              </td>
              <td>115210</td>
              <td>Support Activities for Animal Production</td>
            </tr>
            <tr>
              <td>0752</td>
              <td>
                Animal Specialty Services, Except Veterinary (pet care services,
                except veterinary)
              </td>
              <td>812910</td>
              <td>Pet Care (except Veterinary) Services</td>
            </tr>
            <tr>
              <td>1231</td>
              <td>Anthracite Mining</td>
              <td>212113</td>
              <td>Anthracite Mining</td>
            </tr>
            <tr>
              <td>2389</td>
              <td>
                Apparel and Accessories, NEC (accessories such as,
                handkerchiefs, arm bands, cummerbunds, suspenders, etc., except
                contractors)
              </td>
              <td>315999</td>
              <td>Other Apparel Accessories and Other Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2389</td>
              <td>
                Apparel and Accessories, NEC (apparel, such as academic gowns,
                clerical outerwear, and band uniforms, except contractors)
              </td>
              <td>315299</td>
              <td>All Other Cut and Sew Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2389</td>
              <td>
                Apparel and Accessories, NEC (garters and garter belts except
                contractors)
              </td>
              <td>315231</td>
              <td>
                Women's and Girls' Cut and Sew Lingerie, Loungewear, and
                Nightwear Manufacturing
              </td>
            </tr>
            <tr>
              <td>2389</td>
              <td>
                Apparel and Accessories, NEC (men's and boys' contractors)
              </td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2389</td>
              <td>
                Apparel and Accessories, NEC (women's, girls', and infants'
                contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>2387</td>
              <td>Apparel Belts (except contractors)</td>
              <td>315999</td>
              <td>Other Apparel Accessories and Other Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2387</td>
              <td>Apparel Belts (men's and boys' contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2387</td>
              <td>Apparel Belts (women's, girls', and infants' contractors)</td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>8422</td>
              <td>
                Arboreta and Botanical or Zoological Gardens (except nature
                parks and reserves)
              </td>
              <td>712130</td>
              <td>Zoos and Botanical Gardens</td>
            </tr>
            <tr>
              <td>8422</td>
              <td>
                Arboreta and Botanical or Zoological Gardens (nature parks and
                reserves)
              </td>
              <td>712190</td>
              <td>Nature Parks and Other Similar Institutions</td>
            </tr>
            <tr>
              <td>3446</td>
              <td>Architectural and Ornamental Metal Work</td>
              <td>332323</td>
              <td>Ornamental and Architectural Metal Work Manufacturing</td>
            </tr>
            <tr>
              <td>8712</td>
              <td>Architectural Services</td>
              <td>541310</td>
              <td>Architectural Services</td>
            </tr>
            <tr>
              <td>7694</td>
              <td>Armature Rewinding Shops (remanufacturing)</td>
              <td>335312</td>
              <td>Motor and Generator Manufacturing</td>
            </tr>
            <tr>
              <td>7694</td>
              <td>Armature Rewinding Shops (repair)</td>
              <td>811310</td>
              <td>
                Commercial and Industrial Machinery and Equipment (except
                Automotive and Electronic) Repair and Maintenance
              </td>
            </tr>
            <tr>
              <td>4729</td>
              <td>
                Arrangement of Passenger Transportation, NEC (arrangement of
                carpools and vanpools)
              </td>
              <td>488999</td>
              <td>All Other Support Activities for Transportation</td>
            </tr>
            <tr>
              <td>4729</td>
              <td>
                Arrangement of Passenger Transportation, NEC (except arrangement
                of vanpools and carpools)
              </td>
              <td>561599</td>
              <td>All Other Travel Arrangement and Reservation Services</td>
            </tr>
            <tr>
              <td>4731</td>
              <td>
                Arrangement of Transportation of Freight and Cargo (except
                freight rate auditors, private mail centers, and tariff
                consultants)
              </td>
              <td>488510</td>
              <td>Freight Transportation Arrangement</td>
            </tr>
            <tr>
              <td>4731</td>
              <td>
                Arrangement of Transportation of Freight and Cargo (freight
                rate-auditors and tariff consulting)
              </td>
              <td>541614</td>
              <td>
                Process, Physical Distribution, and Logistics Consulting
                Services
              </td>
            </tr>
            <tr>
              <td>3292</td>
              <td>Asbestos Products (asbestos brake linings and pads)</td>
              <td>336340</td>
              <td>Motor Vehicle Brake System Manufacturing</td>
            </tr>
            <tr>
              <td>3292</td>
              <td>
                Asbestos Products (asbestos clutch facings, motor vehicle)
              </td>
              <td>336350</td>
              <td>
                Motor Vehicle Transmission and Power Train Parts Manufacturing
              </td>
            </tr>
            <tr>
              <td>3292</td>
              <td>Asbestos Products (except brake pads and linings)</td>
              <td>327999</td>
              <td>
                All Other Miscellaneous Nonmetallic Mineral Product
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2952</td>
              <td>Asphalt Felts and Coatings</td>
              <td>324122</td>
              <td>Asphalt Shingle and Coating Materials Manufacturing</td>
            </tr>
            <tr>
              <td>2951</td>
              <td>Asphalt Paving Mixtures and Blocks</td>
              <td>324121</td>
              <td>Asphalt Paving Mixture and Block Manufacturing</td>
            </tr>
            <tr>
              <td>5531</td>
              <td>Auto and Home Supply Stores (auto supply stores)</td>
              <td>441310</td>
              <td>Automotive Parts and Accessories Stores</td>
            </tr>
            <tr>
              <td>5531</td>
              <td>
                Auto and Home Supply Stores (other auto and home supply stores)
              </td>
              <td>452990</td>
              <td>All Other General Merchandise Stores</td>
            </tr>
            <tr>
              <td>5531</td>
              <td>Auto and Home Supply Stores (tires and tubes)</td>
              <td>441320</td>
              <td>Tire Dealers</td>
            </tr>
            <tr>
              <td>3822</td>
              <td>
                Automatic Controls for Regulating Residential and Commercial
                Environments and Appliances
              </td>
              <td>334512</td>
              <td>
                Automatic Environmental Control Manufacturing for Residential,
                Commercial, and Appliance Use
              </td>
            </tr>
            <tr>
              <td>5962</td>
              <td>Automatic Merchandise Machine Operators</td>
              <td>454210</td>
              <td>Vending Machine Operators</td>
            </tr>
            <tr>
              <td>3581</td>
              <td>Automatic Vending Machines</td>
              <td>333311</td>
              <td>Automatic Vending Machine Manufacturing</td>
            </tr>
            <tr>
              <td>7521</td>
              <td>Automobile Parking</td>
              <td>812930</td>
              <td>Parking Lots and Garages</td>
            </tr>
            <tr>
              <td>5012</td>
              <td>Automobiles and Other Motor Vehicles (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5012</td>
              <td>
                Automobiles and Other Motor Vehicles (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5012</td>
              <td>
                Automobiles and Other Motor Vehicles (merchant wholesalers)
              </td>
              <td>423110</td>
              <td>Automobile and Other Motor Vehicle Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5599</td>
              <td>Automotive Dealers, NEC</td>
              <td>441229</td>
              <td>All Other Motor Vehicle Dealers</td>
            </tr>
            <tr>
              <td>7533</td>
              <td>Automotive Exhaust System Repair Shops</td>
              <td>811112</td>
              <td>Automotive Exhaust System Repair</td>
            </tr>
            <tr>
              <td>7536</td>
              <td>Automotive Glass Replacement Shops</td>
              <td>811122</td>
              <td>Automotive Glass Replacement Shops</td>
            </tr>
            <tr>
              <td>7539</td>
              <td>
                Automotive Repair Shops, NEC (automotive air-conditioning
                repair)
              </td>
              <td>811198</td>
              <td>All Other Automotive Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7539</td>
              <td>
                Automotive Repair Shops, NEC (except automotive air-conditioning
                repair)
              </td>
              <td>811118</td>
              <td>
                Other Automotive Mechanical and Electrical Repair and
                Maintenance
              </td>
            </tr>
            <tr>
              <td>7549</td>
              <td>
                Automotive Services, Except Repair and Carwashes (automotive
                window tinting)
              </td>
              <td>811122</td>
              <td>Automotive Glass Replacement Shops</td>
            </tr>
            <tr>
              <td>7549</td>
              <td>
                Automotive Services, Except Repair and Carwashes (except
                automotive lubricating, automotive window tinting, and towing
                services)
              </td>
              <td>811198</td>
              <td>All Other Automotive Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7549</td>
              <td>
                Automotive Services, Except Repair and Carwashes (lubricating
                service, automotive)
              </td>
              <td>811191</td>
              <td>Automotive Oil Change and Lubrication Shops</td>
            </tr>
            <tr>
              <td>7549</td>
              <td>Automotive Services, Except Repair and Carwashes (towing)</td>
              <td>488410</td>
              <td>Motor Vehicle Towing</td>
            </tr>
            <tr>
              <td>3465</td>
              <td>Automotive Stampings</td>
              <td>336370</td>
              <td>Motor Vehicle Metal Stamping</td>
            </tr>
            <tr>
              <td>7537</td>
              <td>Automotive Transmission Repair Shops</td>
              <td>811113</td>
              <td>Automotive Transmission Repair</td>
            </tr>
            <tr>
              <td>2396</td>
              <td>
                Automotive Trimmings, Apparel Findings, and Related Products
                (apparel findings and trimmings, except contractors)
              </td>
              <td>315999</td>
              <td>Other Apparel Accessories and Other Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2396</td>
              <td>
                Automotive Trimmings, Apparel Findings, and Related Products
                (men's and boys' contractors)
              </td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2396</td>
              <td>
                Automotive Trimmings, Apparel Findings, and Related Products
                (printing and embossing on fabric articles)
              </td>
              <td>323113</td>
              <td>Commercial Screen Printing</td>
            </tr>
            <tr>
              <td>2396</td>
              <td>
                Automotive Trimmings, Apparel Findings, and Related Products
                (textile motor vehicle trimming except contractors)
              </td>
              <td>336360</td>
              <td>Motor Vehicle Seating and Interior Trim Manufacturing</td>
            </tr>
            <tr>
              <td>2396</td>
              <td>
                Automotive Trimmings, Apparel Findings, and Related Products
                (textile products except automotive and apparel trimmings and
                findings, printing or embossing on apparel, and contractors)
              </td>
              <td>314999</td>
              <td>All Other Miscellaneous Textile Product Mills</td>
            </tr>
            <tr>
              <td>2396</td>
              <td>
                Automotive Trimmings, Apparel Findings, and Related Products
                (women's, girls', and infants' contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>3562</td>
              <td>Ball and Roller Bearings</td>
              <td>332991</td>
              <td>Ball and Roller Bearing Manufacturing</td>
            </tr>
            <tr>
              <td>7929</td>
              <td>
                Bands, Orchestras, Actors, and Entertainment Groups, (except
                musical groups, musical artists, orchestras, actors, and
                actresses)
              </td>
              <td>711190</td>
              <td>Other Performing Arts Companies</td>
            </tr>
            <tr>
              <td>7929</td>
              <td>
                Bands, Orchestras, Actors, and Other Entertainers and
                Entertainment Groups (actors and actresses)
              </td>
              <td>711510</td>
              <td>Independent Artists, Writers, and Performers</td>
            </tr>
            <tr>
              <td>7929</td>
              <td>
                Bands, Orchestras, Actors, and Other Entertainers Entertainment
                Groups (musical groups, musical artists, and orchestras)
              </td>
              <td>711130</td>
              <td>Musical Groups and Artists</td>
            </tr>
            <tr>
              <td>7241</td>
              <td>Barber Shops (barber colleges)</td>
              <td>611511</td>
              <td>Cosmetology and Barber Schools</td>
            </tr>
            <tr>
              <td>7241</td>
              <td>Barber Shops (except barber colleges)</td>
              <td>812111</td>
              <td>Barber Shops</td>
            </tr>
            <tr>
              <td>7231</td>
              <td>Beauty Shops (beauty and cosmetology schools)</td>
              <td>611511</td>
              <td>Cosmetology and Barber Schools</td>
            </tr>
            <tr>
              <td>7231</td>
              <td>
                Beauty Shops (except beauty and cosmetology schools and manicure
                and pedicure salons)
              </td>
              <td>812112</td>
              <td>Beauty Salons</td>
            </tr>
            <tr>
              <td>7231</td>
              <td>Beauty Shops (manicure and pedicure salons)</td>
              <td>812113</td>
              <td>Nail Salons</td>
            </tr>
            <tr>
              <td>0211</td>
              <td>Beef Cattle Feedlots</td>
              <td>112112</td>
              <td>Cattle Feedlots</td>
            </tr>
            <tr>
              <td>0212</td>
              <td>Beef Cattle, Except Feedlots</td>
              <td>112111</td>
              <td>Beef Cattle Ranching and Farming</td>
            </tr>
            <tr>
              <td>5181</td>
              <td>Beer and Ale (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5181</td>
              <td>Beer and Ale (beer and ale sold via retail method)</td>
              <td>445310</td>
              <td>Beer, Wine, and Liquor Stores</td>
            </tr>
            <tr>
              <td>5181</td>
              <td>Beer and Ale (business to business electronic markets)</td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5181</td>
              <td>
                Beer and Ale (merchant wholesalers except those selling beer and
                ale via retail method)
              </td>
              <td>424810</td>
              <td>Beer and Ale Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>2063</td>
              <td>Beet Sugar</td>
              <td>311313</td>
              <td>Beet Sugar Manufacturing</td>
            </tr>
            <tr>
              <td>0171</td>
              <td>Berry Crops ( except strawberry farms)</td>
              <td>111334</td>
              <td>Berry (except Strawberry) Farming</td>
            </tr>
            <tr>
              <td>0171</td>
              <td>Berry Crops (strawberry farms)</td>
              <td>111333</td>
              <td>Strawberry Farming</td>
            </tr>
            <tr>
              <td>2836</td>
              <td>Biological Products, Except Diagnostic Substances</td>
              <td>325414</td>
              <td>Biological Product (except Diagnostic) Manufacturing</td>
            </tr>
            <tr>
              <td>1221</td>
              <td>Bituminous Coal and Lignite Surface Mining</td>
              <td>212111</td>
              <td>Bituminous Coal and Lignite Surface Mining</td>
            </tr>
            <tr>
              <td>1222</td>
              <td>Bituminous Coal Underground Mining</td>
              <td>212112</td>
              <td>Bituminous Coal Underground Mining</td>
            </tr>
            <tr>
              <td>2782</td>
              <td>Blankbooks, Looseleaf Binders and Devices (checkbooks)</td>
              <td>323116</td>
              <td>Manifold Business Form Printing</td>
            </tr>
            <tr>
              <td>2782</td>
              <td>
                Blankbooks, Looseleaf Binders and Devices (except checkbooks)
              </td>
              <td>323118</td>
              <td>Blankbook, Loose-leaf Binder, and Device Manufacturing</td>
            </tr>
            <tr>
              <td>3732</td>
              <td>Boat Building and Repairing (boat building)</td>
              <td>336612</td>
              <td>Boat Building </td>
            </tr>
            <tr>
              <td>3732</td>
              <td>Boat Building and Repairing (pleasure boat repair)</td>
              <td>811490</td>
              <td>Other Personal and Household Goods Repair and Maintenance</td>
            </tr>
            <tr>
              <td>5551</td>
              <td>Boat Dealers </td>
              <td>441222</td>
              <td>Boat Dealers</td>
            </tr>
            <tr>
              <td>3452</td>
              <td>Bolts, Nuts, Screws, Rivets, and Washers</td>
              <td>332722</td>
              <td>Bolt, Nut, Screw, Rivet, and Washer Manufacturing</td>
            </tr>
            <tr>
              <td>2732</td>
              <td>Book Printing</td>
              <td>323117</td>
              <td>Book Printing</td>
            </tr>
            <tr>
              <td>5942</td>
              <td>Book Stores</td>
              <td>451211</td>
              <td>Book Stores</td>
            </tr>
            <tr>
              <td>2789</td>
              <td>Bookbinding and Related Work</td>
              <td>323121</td>
              <td>Tradebinding and Related Work</td>
            </tr>
            <tr>
              <td>5192</td>
              <td>Books, Periodicals, and Newspapers (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5192</td>
              <td>
                Books, Periodicals, and Newspapers (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5192</td>
              <td>
                Books, Periodicals, and Newspapers (merchant wholesalers except
                those selling publications via retail method)
              </td>
              <td>424920</td>
              <td>Book, Periodical, and Newspaper Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5192</td>
              <td>
                Books, Periodicals, and Newspapers (sold via retail method)
              </td>
              <td>451211</td>
              <td>Book Stores</td>
            </tr>
            <tr>
              <td>2731</td>
              <td>
                Books: Publishing, or Publishing and Printing (except music
                books and Internet book publishing)
              </td>
              <td>511130</td>
              <td> Book Publishers</td>
            </tr>
            <tr>
              <td>2731</td>
              <td>
                Books: Publishing, or Publishing and Printing (Internet book
                publishing)
              </td>
              <td>519130</td>
              <td>
                Internet Publishing and Broadcasting and Web Search Portals
              </td>
            </tr>
            <tr>
              <td>2731</td>
              <td>
                Books: Publishing, or Publishing and Printing (music books)
              </td>
              <td>512230</td>
              <td>Music Publishers</td>
            </tr>
            <tr>
              <td>3131</td>
              <td>
                Boot and Shoe Cut Stock and Findings (except wood heels and
                metal buckles)
              </td>
              <td>316999</td>
              <td>All Other Leather Good Manufacturing</td>
            </tr>
            <tr>
              <td>3131</td>
              <td>Boot and Shoe Cut Stock and Findings (metal buckles)</td>
              <td>339993</td>
              <td>Fastener, Button, Needle, and Pin Manufacturing</td>
            </tr>
            <tr>
              <td>3131</td>
              <td>Boot and Shoe Cut Stock and Findings (wood heels)</td>
              <td>321999</td>
              <td>All Other Miscellaneous Wood Product Manufacturing</td>
            </tr>
            <tr>
              <td>2086</td>
              <td>
                Bottled and Canned Soft Drinks and Carbonated Water (bottled
                water)
              </td>
              <td>312112</td>
              <td>Bottled Water Manufacturing</td>
            </tr>
            <tr>
              <td>2086</td>
              <td>
                Bottled and Canned Soft Drinks and Carbonated Water (except
                bottled water)
              </td>
              <td>312111</td>
              <td>Soft Drink Manufacturing</td>
            </tr>
            <tr>
              <td>7933</td>
              <td>Bowling Centers</td>
              <td>713950</td>
              <td>Bowling Centers</td>
            </tr>
            <tr>
              <td>6081</td>
              <td>
                Branches and Agencies of Foreign Banks (agencies, except
                international trade financing)
              </td>
              <td>522298</td>
              <td>All Other Nondepository Credit Intermediation</td>
            </tr>
            <tr>
              <td>6081</td>
              <td>Branches and Agencies of Foreign Banks (branches)</td>
              <td>522110</td>
              <td>Commercial Banking</td>
            </tr>
            <tr>
              <td>6081</td>
              <td>
                Branches and Agencies of Foreign Banks (international trade
                financing)
              </td>
              <td>522293</td>
              <td>International Trade Financing</td>
            </tr>
            <tr>
              <td>2342</td>
              <td>Brassieres, Girdles, and Allied Garments (contractors)</td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>2342</td>
              <td>
                Brassieres, Girdles, and Allied Garments (except contractors)
              </td>
              <td>315231</td>
              <td>
                Women's and Girls' Cut and Sew Lingerie, Loungewear, and
                Nightwear Manufacturing
              </td>
            </tr>
            <tr>
              <td>2051</td>
              <td>
                Bread and Other Bakery Products, Except Cookies and Crackers
              </td>
              <td>311812</td>
              <td>Commercial Bakeries</td>
            </tr>
            <tr>
              <td>3251</td>
              <td>Brick and Structural Clay Tile (except slumped brick)</td>
              <td>327121</td>
              <td>Brick and Structural Clay Tile Manufacturing</td>
            </tr>
            <tr>
              <td>3251</td>
              <td>Brick and Structural Clay Tile (slumped brick)</td>
              <td>327331</td>
              <td>Concrete Block and Brick Manufacturing</td>
            </tr>
            <tr>
              <td>5032</td>
              <td>
                Brick, Stone, and Related Construction Materials (agents and
                brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5032</td>
              <td>
                Brick, Stone, and Related Construction Materials (business to
                business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5032</td>
              <td>
                Brick, Stone, and Related Construction Materials (merchant
                wholesalers except construction materials sold via retail
                method)
              </td>
              <td>423320</td>
              <td>
                Brick, Stone, and Related Construction Material Merchant
                Wholesalers
              </td>
            </tr>
            <tr>
              <td>5032</td>
              <td>
                Brick, Stone, and Related Construction Materials (brick, stone,
                and related construction materials sold via retail method)
              </td>
              <td>444190</td>
              <td>Other Building Material Dealers</td>
            </tr>
            <tr>
              <td>1622</td>
              <td>
                Bridge, Tunnel, and Elevated Highway Construction (bridge and
                elevated highway construction){" "}
              </td>
              <td>237310</td>
              <td>Highway, Street, and Bridge Construction</td>
            </tr>
            <tr>
              <td>1622</td>
              <td>
                Bridge, Tunnel, and Elevated Highway Construction (tunnel
                construction)
              </td>
              <td>237990</td>
              <td>Other Heavy and Civil Engineering Construction</td>
            </tr>
            <tr>
              <td>2211</td>
              <td>Broadwoven Fabric Mills, Cotton</td>
              <td>313210</td>
              <td>Broadwoven Fabric Mills</td>
            </tr>
            <tr>
              <td>2221</td>
              <td>Broadwoven Fabric Mills, Manmade Fiber and Silk</td>
              <td>313210</td>
              <td>Broadwoven Fabric Mills</td>
            </tr>
            <tr>
              <td>2231</td>
              <td>
                Broadwoven Fabric Mills, Wool (Including Dyeing and Finishing)
                (except finishing wool fabric without weaving wool fabric)
              </td>
              <td>313210</td>
              <td>Broadwoven Fabric Mills</td>
            </tr>
            <tr>
              <td>2231</td>
              <td>
                Broadwoven Fabric Mills, Wool (wool broadwoven fabric finishing
                without weaving fabric)
              </td>
              <td>313311</td>
              <td>Broadwoven Fabric Finishing Mills</td>
            </tr>
            <tr>
              <td>2231</td>
              <td>
                Broadwoven Fabric Mills, Wool (wool fabric, except broadwoven,
                finishing without weaving fabric)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>0251</td>
              <td>Broiler, Fryer, and Roaster Chickens</td>
              <td>112320</td>
              <td>Broilers and Other Meat Type Chicken Production</td>
            </tr>
            <tr>
              <td>3991</td>
              <td>Brooms and Brushes</td>
              <td>339994</td>
              <td>Broom, Brush, and Mop Manufacturing</td>
            </tr>
            <tr>
              <td>7349</td>
              <td>
                Building Cleaning and Maintenance Services, NEC (janitorial
                services)
              </td>
              <td>561720</td>
              <td>Janitorial Services</td>
            </tr>
            <tr>
              <td>7349</td>
              <td>
                Building Cleaning and Maintenance Services, NEC (services to
                buildings and dwellings, except janitorial services)
              </td>
              <td>561790</td>
              <td>Other Services to Buildings and Dwellings</td>
            </tr>
            <tr>
              <td>3995</td>
              <td>Burial Caskets</td>
              <td>339995</td>
              <td>Burial Casket Manufacturing</td>
            </tr>
            <tr>
              <td>4142</td>
              <td>Bus Charter Service, Except Local</td>
              <td>485510</td>
              <td>Charter Bus Industry</td>
            </tr>
            <tr>
              <td>8244</td>
              <td>Business and Secretarial Schools</td>
              <td>611410</td>
              <td>Business and Secretarial Schools</td>
            </tr>
            <tr>
              <td>8611</td>
              <td>Business Associations</td>
              <td>813910</td>
              <td>Business Associations</td>
            </tr>
            <tr>
              <td>8748</td>
              <td>
                Business Consulting Services, NEC (educational test development
                and evaluation services, educational testing services, and
                educational consultants)
              </td>
              <td>611710</td>
              <td>Educational Support Services</td>
            </tr>
            <tr>
              <td>8748</td>
              <td>
                Business Consulting Services, NEC (except educational testing
                and consulting, economic consulting, safety and security,
                agriculture consulting, environmental consulting firms, urban
                planning and industrial development organizations)
              </td>
              <td>541618</td>
              <td>Other Management Consulting Services</td>
            </tr>
            <tr>
              <td>8748</td>
              <td>
                Business Consulting Services, NEC (safety, security,
                agriculture, and economic consultants)
              </td>
              <td>541690</td>
              <td>Other Scientific and Technical Consulting Services</td>
            </tr>
            <tr>
              <td>8748</td>
              <td>Business Consulting Services, NEC (traffic consultants)</td>
              <td>541330</td>
              <td>Engineering Services</td>
            </tr>
            <tr>
              <td>8748</td>
              <td>
                Business Consulting Services, NEC (urban planners and industrial
                development organizations)
              </td>
              <td>541320</td>
              <td>Landscape Architectural Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services (appraisers except insurance and real estate,
                outplacement services, and miscellaneous professional,
                scientific, and technical services)
              </td>
              <td>541990</td>
              <td>
                All Other Professional, Scientific, and Technical Services
              </td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (aerosol packaging, solvent recovery
                service-contract)
              </td>
              <td>325998</td>
              <td>
                All Other Miscellaneous Chemical Product and Preparation
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (agents and brokers for authors and
                artists and speaker bureaus)
              </td>
              <td>711410</td>
              <td>
                Agents and Managers for Artists, Athletes, Entertainers, and
                Other Public Figures
              </td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (apparel pressing service for the trade)
              </td>
              <td>812320</td>
              <td>Drycleaning and Laundry Services (except Coin-Operated)</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (audio taping services)</td>
              <td>512290</td>
              <td>Other Sound Recording Industries</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (business support services except
                telephone answering, telemarketing bureaus, private mail centers
                and repossession services)
              </td>
              <td>561499</td>
              <td>All Other Business Support Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (convention and trade show services)
              </td>
              <td>561920</td>
              <td>Convention and Trade Show Organizers</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (convention and visitors bureaus, tourist
                information bureaus)
              </td>
              <td>561591</td>
              <td>Convention and Visitors Bureaus</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (credit card and check validation
                service)
              </td>
              <td>522320</td>
              <td>
                Financial Transactions Processing, Reserve, and Clearinghouse
                Activities
              </td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (distribution of telephone directories on
                a fee or contract basis)
              </td>
              <td>541870</td>
              <td>Advertising Material Distribution Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (drafting service) </td>
              <td>541340</td>
              <td>Drafting Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (driving services, e.g., auto or truck
                delivery and pilot car services)
              </td>
              <td>488490</td>
              <td>Other Support Activities for Road Transportation</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (embroidery of advertising on shirts and
                rug binding for the trade)
              </td>
              <td>314999</td>
              <td>All Other Miscellaneous Textile Product Mills</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (fashion, furniture, and other design
                services)
              </td>
              <td>541490</td>
              <td>Other Specialized Design Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (home and building inspection services)
              </td>
              <td>541350</td>
              <td>Building Inspection Services </td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (industrial design)</td>
              <td>541420</td>
              <td>Industrial Design Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (interior design)</td>
              <td>541410</td>
              <td>Interior Design Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (map making services)</td>
              <td>541370</td>
              <td>Surveying and Mapping (except Geophysical) Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (microfilm services)</td>
              <td>518210</td>
              <td>Data Processing, Hosting, and Related Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (other business service centers, except
                private mail centers and mailbox rental)
              </td>
              <td>561439</td>
              <td>Other Business Service Centers (including Copy Shops)</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (other support services except packaging
                and labeling, convention and trade shows services, convention
                and visitor bureaus, tourist information bureaus)
              </td>
              <td>561990</td>
              <td>All Other Support Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (packaging and labeling services)</td>
              <td>561910</td>
              <td>Packaging and Labeling Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (post office contract stations)</td>
              <td>491110</td>
              <td>Postal Service</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (press clipping services and stock photo
                agencies)
              </td>
              <td>519190</td>
              <td>All Other Information Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (private mail centers and mailbox rental)
              </td>
              <td>561431</td>
              <td>Private Mail Centers</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (process services, patent agents,
                notaries public, paralegal services )
              </td>
              <td>541199</td>
              <td>All Other Legal Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (promoters of air shows, heritage
                festivals, and ethnic festivals with facilities)
              </td>
              <td>711310</td>
              <td>
                Promoters of Performing Arts, Sports, and Similar Events with
                Facilities
              </td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (promoters of air shows, heritage
                festivals, and ethnic festivals without facilities)
              </td>
              <td>711320</td>
              <td>
                Promoters of Performing Arts, Sports, and Similar Events without
                Facilities
              </td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (radio transcription services)</td>
              <td>561410</td>
              <td>Document Preparation Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (recording studios)</td>
              <td>512240</td>
              <td>Sound Recording Studios</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (recovery and repossession services)
              </td>
              <td>561491</td>
              <td>Repossession Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (reservation systems for hotels,
                restaurants, and time-share condominium exchanges)
              </td>
              <td>561599</td>
              <td>All Other Travel Arrangement and Reservation Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (sign painting and lettering, showcard
                painting, mannequin decorating service and other advertising
                related business services)
              </td>
              <td>541890</td>
              <td>Other Services Related to Advertising</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (sponging, shrinking, etc. fabric for
                tailors and dress makers, batik work)
              </td>
              <td>313311</td>
              <td>Broadwoven Fabric Finishing Mills</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (swimming pool cleaning and maintenance)
              </td>
              <td>561790</td>
              <td>Other Services to Buildings and Dwellings</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (tax collection for federal, state, or
                local agencies)
              </td>
              <td>561440</td>
              <td>Collection Agencies</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (telemarketing bureaus and telephone
                soliciting)
              </td>
              <td>561422</td>
              <td>Telemarketing Bureaus</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (telephone answering services)</td>
              <td>561421</td>
              <td>Telephone Answering Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (tobacco sheeting service)</td>
              <td>312229</td>
              <td>Other Tobacco Product Manufacturing</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>
                Business Services, NEC (translation and interpretation services)
              </td>
              <td>541930</td>
              <td>Translation and Interpretation Services</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Business Services, NEC (yacht brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>4841</td>
              <td>Cable and Other Pay Television Services (cable networks)</td>
              <td>515210</td>
              <td>Cable and Other Subscription Programming</td>
            </tr>
            <tr>
              <td>4841</td>
              <td>
                Cable and Other Pay Television Services (except cable and other
                subscription programming)
              </td>
              <td>517110</td>
              <td>Wired Telecommunications Carriers</td>
            </tr>
            <tr>
              <td>3578</td>
              <td>
                Calculating and Accounting Machinery, Except Electronic
                Computers (change making machines)
              </td>
              <td>333311</td>
              <td>Automatic Vending Machine Manufacturing</td>
            </tr>
            <tr>
              <td>3578</td>
              <td>
                Calculating and Accounting Machinery, Except Electronic
                Computers (except point of sales terminals, change making
                machines and funds transfer devices)
              </td>
              <td>333313</td>
              <td>Office Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>3578</td>
              <td>
                Calculating and Accounting Machines, Except Electronic Computers
                (point of sale terminals and fund transfer devices)
              </td>
              <td>334119</td>
              <td>Other Computer Peripheral Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>5946</td>
              <td>Camera and Photographic Supply Stores</td>
              <td>443130</td>
              <td>Camera and Photographic Supplies Stores</td>
            </tr>
            <tr>
              <td>2064</td>
              <td>
                Candy and Other Confectionery Products (chocolate confectionery)
              </td>
              <td>311330</td>
              <td>Confectionery Manufacturing from Purchased Chocolate </td>
            </tr>
            <tr>
              <td>2064</td>
              <td>
                Candy and Other Confectionery Products (nonchocolate
                confectionery )
              </td>
              <td>311340</td>
              <td>Nonchocolate Confectionery Manufacturing</td>
            </tr>
            <tr>
              <td>5441</td>
              <td>
                Candy, Nut, and Confectionery Stores (chocolate candy stores,
                preparing on premises)
              </td>
              <td>311330</td>
              <td>Confectionery Manufacturing from Purchased Chocolate </td>
            </tr>
            <tr>
              <td>5441</td>
              <td>
                Candy, Nut, and Confectionery Stores (except stores preparing
                candy on premises)
              </td>
              <td>445292</td>
              <td>Confectionery and Nut Stores </td>
            </tr>
            <tr>
              <td>5441</td>
              <td>
                Candy, Nut, and Confectionery Stores (nonchocolate candy stores,
                preparing on premises)
              </td>
              <td>311340</td>
              <td>Nonchocolate Confectionery Manufacturing</td>
            </tr>
            <tr>
              <td>2062</td>
              <td>Cane Sugar Refining</td>
              <td>311312</td>
              <td>Cane Sugar Refining</td>
            </tr>
            <tr>
              <td>2061</td>
              <td>Cane Sugar, Except Refining</td>
              <td>311311</td>
              <td>Sugarcane Mills</td>
            </tr>
            <tr>
              <td>2091</td>
              <td>Canned and Cured Fish and Seafoods</td>
              <td>311711</td>
              <td>Seafood Canning</td>
            </tr>
            <tr>
              <td>2033</td>
              <td>Canned Fruits, Vegetables, Preserves, Jams, and Jellies</td>
              <td>311421</td>
              <td>Fruit and Vegetable Canning</td>
            </tr>
            <tr>
              <td>2032</td>
              <td>Canned Specialties (canned puddings)</td>
              <td>311999</td>
              <td>All Other Miscellaneous Food Manufacturing</td>
            </tr>
            <tr>
              <td>2032</td>
              <td>Canned Specialties (except canned puddings)</td>
              <td>311422</td>
              <td>Specialty Canning</td>
            </tr>
            <tr>
              <td>2394</td>
              <td>Canvas and Related Products</td>
              <td>314912</td>
              <td>Canvas and Related Product Mills</td>
            </tr>
            <tr>
              <td>3624</td>
              <td>Carbon and Graphite Products </td>
              <td>335991</td>
              <td>Carbon and Graphite Product Manufacturing</td>
            </tr>
            <tr>
              <td>2895</td>
              <td>Carbon Black</td>
              <td>325182</td>
              <td>Carbon Black Manufacturing</td>
            </tr>
            <tr>
              <td>3955</td>
              <td>Carbon Paper and Inked Ribbons</td>
              <td>339944</td>
              <td>Carbon Paper and Inked Ribbon Manufacturing</td>
            </tr>
            <tr>
              <td>3592</td>
              <td>Carburetors, Pistons, Piston Rings, and Valves</td>
              <td>336311</td>
              <td>Carburetor, Piston, Piston Ring, and Valve Manufacturing</td>
            </tr>
            <tr>
              <td>1751</td>
              <td>Carpentry Work (finish carpentry)</td>
              <td>238350</td>
              <td>Finish Carpentry Contractors</td>
            </tr>
            <tr>
              <td>1751</td>
              <td>Carpentry Work (framing carpentry)</td>
              <td>238130</td>
              <td>Framing Contractors</td>
            </tr>
            <tr>
              <td>7217</td>
              <td>Carpet and Upholstery Cleaning</td>
              <td>561740</td>
              <td>Carpet and Upholstery Cleaning Services</td>
            </tr>
            <tr>
              <td>2273</td>
              <td>Carpets and Rugs</td>
              <td>314110</td>
              <td>Carpet and Rug Mills</td>
            </tr>
            <tr>
              <td>7542</td>
              <td>Carwashes</td>
              <td>811192</td>
              <td>Car Washes</td>
            </tr>
            <tr>
              <td>0119</td>
              <td>Cash Grains, NEC (dry pea and bean farms)</td>
              <td>111130</td>
              <td>Dry Pea and Bean Farming</td>
            </tr>
            <tr>
              <td>0119</td>
              <td>
                Cash Grains, NEC (except popcorn, dry pea and bean, oilseed
                (except soybean), and oilseed and grain combination farms)
              </td>
              <td>111199</td>
              <td>All Other Grain Farming</td>
            </tr>
            <tr>
              <td>0119</td>
              <td>Cash Grains, NEC (oilseed and grain combination farms)</td>
              <td>111191</td>
              <td>Oilseed and Grain Combination Farming</td>
            </tr>
            <tr>
              <td>0119</td>
              <td>Cash Grains, NEC (oilseed farming, except soybeans)</td>
              <td>111120</td>
              <td>Oilseed (except Soybean) Farming</td>
            </tr>
            <tr>
              <td>0119</td>
              <td>Cash Grains, NEC (popcorn farming)</td>
              <td>111150</td>
              <td>Corn Farming</td>
            </tr>
            <tr>
              <td>5961</td>
              <td>Catalog and Mail-Order Houses (electronic auctions)</td>
              <td>454112</td>
              <td>Electronic Auctions</td>
            </tr>
            <tr>
              <td>5961</td>
              <td>
                Catalog and Mail-Order Houses (electronic shopping web sites)
              </td>
              <td>454111</td>
              <td>Electronic Shopping</td>
            </tr>
            <tr>
              <td>5961</td>
              <td>Catalog and Mail-Order Houses (mail-order houses)</td>
              <td>454113</td>
              <td>Mail-Order Houses</td>
            </tr>
            <tr>
              <td>2823</td>
              <td>Cellulosic Manmade Fibers</td>
              <td>325221</td>
              <td>Cellulosic Organic Fiber Manufacturing</td>
            </tr>
            <tr>
              <td>3241</td>
              <td>Cement, Hydraulic</td>
              <td>327310</td>
              <td>Cement Manufacturing</td>
            </tr>
            <tr>
              <td>6553</td>
              <td>Cemetery Subdividers and Developers</td>
              <td>812220</td>
              <td>Cemeteries and Crematories</td>
            </tr>
            <tr>
              <td>6019</td>
              <td>Central Reserve Depository Institutions, NEC</td>
              <td>522298</td>
              <td>All Other Nondepository Credit Intermediation</td>
            </tr>
            <tr>
              <td>3253</td>
              <td>Ceramic Wall and Floor Tile</td>
              <td>327122</td>
              <td>Ceramic Wall and Floor Tile Manufacturing</td>
            </tr>
            <tr>
              <td>2043</td>
              <td>
                Cereal Breakfast Foods (cereal breakfast foods and related
                preparations except grain based coffee substitutes)
              </td>
              <td>311230</td>
              <td>Breakfast Cereal Manufacturing</td>
            </tr>
            <tr>
              <td>2043</td>
              <td>Cereal Breakfast Foods (grain based coffee substitutes)</td>
              <td>311920</td>
              <td>Coffee and Tea Manufacturing</td>
            </tr>
            <tr>
              <td>1479</td>
              <td>Chemical and Fertilizer Mineral Mining, NEC</td>
              <td>212393</td>
              <td>Other Chemical and Fertilizer Mineral Mining</td>
            </tr>
            <tr>
              <td>5169</td>
              <td>Chemicals and Allied Products, NEC (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5169</td>
              <td>
                Chemicals and Allied Products, NEC (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5169</td>
              <td>Chemicals and Allied Products, NEC (merchant wholesalers)</td>
              <td>424690</td>
              <td>Other Chemical and Allied Products Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>2899</td>
              <td>
                Chemicals and Chemical Preparations, NEC (except frit, fatty
                acids, plastic wood fillers, and table salt)
              </td>
              <td>325998</td>
              <td>
                All Other Miscellaneous Chemical Product and Preparation
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2899</td>
              <td>Chemicals and Chemical Preparations, NEC (fatty acids)</td>
              <td>325199</td>
              <td>All Other Basic Organic Chemical Manufacturing</td>
            </tr>
            <tr>
              <td>2899</td>
              <td>
                Chemicals and Chemical Preparations, NEC (frit and plastic wood
                fillers)
              </td>
              <td>325510</td>
              <td>Paint and Coating Manufacturing</td>
            </tr>
            <tr>
              <td>2899</td>
              <td>Chemicals and Chemical Preparations, NEC (table salt)</td>
              <td>311942</td>
              <td>Spice and Extract Manufacturing</td>
            </tr>
            <tr>
              <td>2131</td>
              <td>Chewing and Smoking Tobacco and Snuff</td>
              <td>312229</td>
              <td>Other Tobacco Product Manufacturing</td>
            </tr>
            <tr>
              <td>2067</td>
              <td>Chewing Gum</td>
              <td>311340</td>
              <td>Nonchocolate Confectionery Manufacturing</td>
            </tr>
            <tr>
              <td>0252</td>
              <td>Chicken Eggs</td>
              <td>112310</td>
              <td>Chicken Egg Production</td>
            </tr>
            <tr>
              <td>8351</td>
              <td>Child Day Care Services</td>
              <td>624410</td>
              <td>Child Day Care Services</td>
            </tr>
            <tr>
              <td>5641</td>
              <td>Children's and Infants' Wear Stores</td>
              <td>448130</td>
              <td>Children's and Infants' Clothing Stores</td>
            </tr>
            <tr>
              <td>2066</td>
              <td>
                Chocolate and Cocoa Products (chocolate products made from
                purchased chocolate)
              </td>
              <td>311330</td>
              <td>Confectionery Manufacturing from Purchased Chocolate </td>
            </tr>
            <tr>
              <td>2066</td>
              <td>
                Chocolate and Cocoa Products (except chocolate products, made
                from purchased chocolate)
              </td>
              <td>311320</td>
              <td>
                Chocolate and Confectionery Manufacturing from Cacao Beans
              </td>
            </tr>
            <tr>
              <td>2111</td>
              <td>Cigarettes</td>
              <td>312221</td>
              <td>Cigarette Manufacturing</td>
            </tr>
            <tr>
              <td>2121</td>
              <td>Cigars</td>
              <td>312229</td>
              <td>Other Tobacco Product Manufacturing</td>
            </tr>
            <tr>
              <td>0174</td>
              <td>Citrus Fruits (except orange groves and farms)</td>
              <td>111320</td>
              <td>Citrus (except Orange) Groves </td>
            </tr>
            <tr>
              <td>0174</td>
              <td>Citrus Fruits (orange groves and farms)</td>
              <td>111310</td>
              <td>Orange Groves</td>
            </tr>
            <tr>
              <td>8641</td>
              <td>
                Civic, Social, and Fraternal Associations (condominium and
                homeowner associations)
              </td>
              <td>813990</td>
              <td>
                Other Similar Organizations (except Business, Professional,
                Labor, and Political Organizations)
              </td>
            </tr>
            <tr>
              <td>8641</td>
              <td>
                Civic, Social, and Fraternal Associations (except condominium
                and homeowner associations, taxpayers associations, tenants
                advocacy associations, temperance organizations, and Indian and
                Alaska Native Tribal Councils)
              </td>
              <td>813410</td>
              <td>Civic and Social Organizations</td>
            </tr>
            <tr>
              <td>8641</td>
              <td>
                Civic, Social, and Fraternal Associations (Indian and Alaska
                Native Tribal Councils)
              </td>
              <td>921150</td>
              <td>American Indian and Alaska Native Tribal Governments</td>
            </tr>
            <tr>
              <td>8641</td>
              <td>
                Civic, Social, and Fraternal Associations (taxpayers'
                associations, tenants' advocacy associations, temperance
                organizations)
              </td>
              <td>813319</td>
              <td>Other Social Advocacy Organizations</td>
            </tr>
            <tr>
              <td>3255</td>
              <td>Clay Refractories</td>
              <td>327124</td>
              <td>Clay Refractory Manufacturing</td>
            </tr>
            <tr>
              <td>1459</td>
              <td>Clay, Ceramic, and Refractory Minerals, NEC</td>
              <td>212325</td>
              <td>Clay and Ceramic and Refractory Minerals Mining</td>
            </tr>
            <tr>
              <td>5052</td>
              <td>Coal and Other Minerals and Ores (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5052</td>
              <td>
                Coal and Other Minerals and Ores (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5052</td>
              <td>Coal and Other Minerals and Ores (merchant wholesalers)</td>
              <td>423520</td>
              <td>Coal and Other Mineral and Ore Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>1241</td>
              <td>
                Coal Mining Services (except site preparation and related
                construction activities on a contract basis)
              </td>
              <td>213113</td>
              <td>Support Activities for Coal Mining</td>
            </tr>
            <tr>
              <td>1241</td>
              <td>
                Coal Mining Services (site preparation and related construction
                activities on a contract basis)
              </td>
              <td>238910</td>
              <td>Site Preparation Contractors</td>
            </tr>
            <tr>
              <td>2672</td>
              <td>Coated and Laminated Paper, NEC</td>
              <td>322222</td>
              <td>Coated and Laminated Paper Manufacturing</td>
            </tr>
            <tr>
              <td>2295</td>
              <td>Coated Fabrics, Not Rubberized</td>
              <td>313320</td>
              <td>Fabric Coating Mills</td>
            </tr>
            <tr>
              <td>3479</td>
              <td>
                Coating, Engraving, and Allied Services, NEC (costume jewelry
                engraving and etching)
              </td>
              <td>339914</td>
              <td>Costume Jewelry and Novelty Manufacturing</td>
            </tr>
            <tr>
              <td>3479</td>
              <td>
                Coating, Engraving, and Allied Services, NEC (except jewelry,
                silverware, and flatware engraving and etching)
              </td>
              <td>332812</td>
              <td>
                Metal Coating, Engraving (except Jewelry and Silverware), and
                Allied Services to Manufacturers
              </td>
            </tr>
            <tr>
              <td>3479</td>
              <td>
                Coating, Engraving, and Allied Services, NEC (precious metal
                jewelry engraving and etching)
              </td>
              <td>339911</td>
              <td>Jewelry (except Costume) Manufacturing</td>
            </tr>
            <tr>
              <td>3479</td>
              <td>
                Coating, Engraving, and Allied Services, NEC (silver and plated
                ware engraving and etching)
              </td>
              <td>339912</td>
              <td>Silverware and Holloware Manufacturing</td>
            </tr>
            <tr>
              <td>7993</td>
              <td>Coin-Operated Amusement Devices (amusement arcades)</td>
              <td>713120</td>
              <td>Amusement Arcades</td>
            </tr>
            <tr>
              <td>7993</td>
              <td>
                Coin-Operated Amusement Devices (except amusement arcades and
                slot machine operators)
              </td>
              <td>713990</td>
              <td>All Other Amusement and Recreation Industries</td>
            </tr>
            <tr>
              <td>7993</td>
              <td>Coin-Operated Amusement Devices (slot machine operators)</td>
              <td>713290</td>
              <td>Other Gambling Industries</td>
            </tr>
            <tr>
              <td>7215</td>
              <td>Coin-Operated Laundry and Drycleaning </td>
              <td>812310</td>
              <td>Coin-Operated Laundries and Drycleaners</td>
            </tr>
            <tr>
              <td>3316</td>
              <td>Cold-Rolled Steel Sheet, Strip, and Bars</td>
              <td>331221</td>
              <td>Rolled Steel Shape Manufacturing</td>
            </tr>
            <tr>
              <td>8221</td>
              <td>Colleges, Universities, and Professional Schools</td>
              <td>611310</td>
              <td>Colleges, Universities, and Professional Schools</td>
            </tr>
            <tr>
              <td>4939</td>
              <td>Combination Utilities, NEC (electric power distribution)</td>
              <td>221122</td>
              <td>Electric Power Distribution</td>
            </tr>
            <tr>
              <td>4939</td>
              <td>
                Combination Utilities, NEC (electric power transmission and
                control){" "}
              </td>
              <td>221121</td>
              <td>Electric Bulk Power Transmission and Control</td>
            </tr>
            <tr>
              <td>4939</td>
              <td>Combination Utilities, NEC (fossil fuel power generation)</td>
              <td>221112</td>
              <td>Fossil Fuel Electric Power Generation</td>
            </tr>
            <tr>
              <td>4939</td>
              <td>
                Combination Utilities, NEC (hydroelectric power generation)
              </td>
              <td>221111</td>
              <td>Hydroelectric Power Generation</td>
            </tr>
            <tr>
              <td>4939</td>
              <td>Combination Utilities, NEC (natural gas distribution)</td>
              <td>221210</td>
              <td>Natural Gas Distribution</td>
            </tr>
            <tr>
              <td>4939</td>
              <td>Combination Utilities, NEC (nuclear power generation)</td>
              <td>221113</td>
              <td>Nuclear Electric Power Generation</td>
            </tr>
            <tr>
              <td>4939</td>
              <td>
                Combination Utilities, NEC (other electric power generation)
              </td>
              <td>221119</td>
              <td>Other Electric Power Generation</td>
            </tr>
            <tr>
              <td>7336</td>
              <td>Commercial Art and Graphic Design</td>
              <td>541430</td>
              <td>Graphic Design Services</td>
            </tr>
            <tr>
              <td>6029</td>
              <td>Commercial Banks, NEC </td>
              <td>522110</td>
              <td>Commercial Banking</td>
            </tr>
            <tr>
              <td>8732</td>
              <td>
                Commercial Economic, Sociological, and Educational Research
                (market research and opinion research)
              </td>
              <td>541910</td>
              <td>Marketing Research and Public Opinion Polling</td>
            </tr>
            <tr>
              <td>8732</td>
              <td>
                Commercial Economic, Sociological, and Educational Research
                (social sciences and humanities)
              </td>
              <td>541712</td>
              <td>
                Research and Development in the Physical, Engineering, and Life
                Sciences (except biotechnology)
              </td>
            </tr>
            <tr>
              <td>5046</td>
              <td>Commercial Equipment, NEC (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5046</td>
              <td>
                Commercial Equipment, NEC (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5046</td>
              <td>Commercial Equipment, NEC (merchant wholesalers)</td>
              <td>423440</td>
              <td>Other Commercial Equipment Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>3582</td>
              <td>Commercial Laundry, Drycleaning, and Pressing Machines</td>
              <td>333312</td>
              <td>
                Commercial Laundry, Drycleaning, and Pressing Machine
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>7335</td>
              <td>
                Commercial Photography (except using general purpose aircraft
                for aerial photography and a variety of other services)
              </td>
              <td>541922</td>
              <td>Commercial Photography</td>
            </tr>
            <tr>
              <td>7335</td>
              <td>
                Commercial Photography (using general purpose aircraft for
                aerial photography and a variety of other services)
              </td>
              <td>481219</td>
              <td>Other Nonscheduled Air Transportation</td>
            </tr>
            <tr>
              <td>8731</td>
              <td>Commercial Physical and Biological Research</td>
              <td>541711</td>
              <td>Research and Development in Biotechnology</td>
            </tr>
            <tr>
              <td>2754</td>
              <td>Commercial Printing, Gravure</td>
              <td>323111</td>
              <td>Commercial Gravure Printing</td>
            </tr>
            <tr>
              <td>2752</td>
              <td>Commercial Printing, Lithographic (except quick printing)</td>
              <td>323110</td>
              <td>Commercial Lithographic Printing</td>
            </tr>
            <tr>
              <td>2752</td>
              <td>Commercial Printing, Lithographic (quick printing)</td>
              <td>323114</td>
              <td>Quick Printing</td>
            </tr>
            <tr>
              <td>2759</td>
              <td>
                Commercial Printing, NEC (digital printing, except quick
                printing)
              </td>
              <td>323115</td>
              <td>Digital Printing</td>
            </tr>
            <tr>
              <td>2759</td>
              <td>Commercial Printing, NEC (flexographic printing)</td>
              <td>323112</td>
              <td>Commercial Flexographic Printing</td>
            </tr>
            <tr>
              <td>2759</td>
              <td>
                Commercial Printing, NEC (other commercial printing except
                flexographic, screen, digital, and quick printing)
              </td>
              <td>323119</td>
              <td>Other Commercial Printing </td>
            </tr>
            <tr>
              <td>2759</td>
              <td>Commercial Printing, NEC (quick printing)</td>
              <td>323114</td>
              <td>Quick Printing</td>
            </tr>
            <tr>
              <td>2759</td>
              <td>Commercial Printing, NEC (screen printing)</td>
              <td>323113</td>
              <td>Commercial Screen Printing</td>
            </tr>
            <tr>
              <td>3646</td>
              <td>
                Commercial, Industrial, and Institutional Electric Lighting
                Fixtures
              </td>
              <td>335122</td>
              <td>
                Commercial, Industrial, and Institutional Electric Lighting
                Fixture Manufacturing
              </td>
            </tr>
            <tr>
              <td>6221</td>
              <td>
                Commodity Contracts Brokers and Dealers (commodity brokers)
              </td>
              <td>523140</td>
              <td>Commodity Contracts Brokerage</td>
            </tr>
            <tr>
              <td>6221</td>
              <td>
                Commodity Contracts Brokers and Dealers (commodity dealers)
              </td>
              <td>523130</td>
              <td>Commodity Contracts Dealing</td>
            </tr>
            <tr>
              <td>3669</td>
              <td>Communications Equipment, NEC</td>
              <td>334290</td>
              <td>Other Communications Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>4899</td>
              <td>
                Communications Services, NEC (except ship to shore broadcasting,
                satellite communications, pay telephone concession operators)
              </td>
              <td>517919</td>
              <td>All Other Telecommunications</td>
            </tr>
            <tr>
              <td>4899</td>
              <td>
                Communications Services, NEC (pay telephone concession
                operators)
              </td>
              <td>812990</td>
              <td>All Other Personal Services</td>
            </tr>
            <tr>
              <td>4899</td>
              <td>
                Communications Services, NEC (radio broadcasting operated by cab
                companies)
              </td>
              <td>485310</td>
              <td>Taxi Service</td>
            </tr>
            <tr>
              <td>4899</td>
              <td>Communications Services, NEC (satellite communications)</td>
              <td>517410</td>
              <td>Satellite Telecommunications</td>
            </tr>
            <tr>
              <td>4899</td>
              <td>
                Communications Services, NEC (ship to shore broadcasting
                carriers)
              </td>
              <td>517210</td>
              <td>Wired Telecommunications Carriers (except Satellite)</td>
            </tr>
            <tr>
              <td>5734</td>
              <td>Computer and Computer Software Stores</td>
              <td>443120</td>
              <td>Computer and Software Stores</td>
            </tr>
            <tr>
              <td>7376</td>
              <td>Computer Facilities Management Services</td>
              <td>541513</td>
              <td>Computer Facilities Management Services</td>
            </tr>
            <tr>
              <td>7373</td>
              <td>Computer Integrated Systems Design</td>
              <td>541512</td>
              <td>Computer Systems Design Services</td>
            </tr>
            <tr>
              <td>7378</td>
              <td>
                Computer Maintenance and Repair (except sales locations
                providing supporting repair services as major source of revenue)
              </td>
              <td>811212</td>
              <td>Computer and Office Machine Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7378</td>
              <td>
                Computer Maintenance and Repair (sales locations providing
                supporting repair services as major source of receipts)
              </td>
              <td>443120</td>
              <td>Computer and Software Stores</td>
            </tr>
            <tr>
              <td>3577</td>
              <td>
                Computer Peripheral Equipment, NEC (except plotter controllers
                and magnetic tape head cleaners)
              </td>
              <td>334119</td>
              <td>Other Computer Peripheral Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3577</td>
              <td>
                Computer Peripheral Equipment, NEC (magnetic tape head cleaners)
              </td>
              <td>334613</td>
              <td>Magnetic and Optical Recording Media Manufacturing</td>
            </tr>
            <tr>
              <td>3577</td>
              <td>Computer Peripheral Equipment, NEC (plotter controllers)</td>
              <td>334418</td>
              <td>
                Printed Circuit Assembly (Electronic Assembly) Manufacturing
              </td>
            </tr>
            <tr>
              <td>7374</td>
              <td>
                Computer Processing and Data Preparation and Processing Services
              </td>
              <td>518210</td>
              <td>Data Processing, Hosting, and Related Services </td>
            </tr>
            <tr>
              <td>7371</td>
              <td>Computer Programming Services</td>
              <td>541511</td>
              <td>Custom Computer Programming Services</td>
            </tr>
            <tr>
              <td>7379</td>
              <td>
                Computer Related Services, NEC (computer systems consultants)
              </td>
              <td>541512</td>
              <td>Computer Systems Design Services</td>
            </tr>
            <tr>
              <td>7379</td>
              <td>Computer Related Services, NEC (disk conversion services)</td>
              <td>518210</td>
              <td>Data Processing, Hosting, and Related Services</td>
            </tr>
            <tr>
              <td>7379</td>
              <td>
                Computer Related Services, NEC (except computer systems
                consultants and disk conversion services)
              </td>
              <td>541519</td>
              <td>Other Computer Related Services</td>
            </tr>
            <tr>
              <td>7377</td>
              <td>Computer Rental and Leasing</td>
              <td>532420</td>
              <td>Office Machinery and Equipment Rental and Leasing</td>
            </tr>
            <tr>
              <td>3572</td>
              <td>Computer Storage Devices</td>
              <td>334112</td>
              <td>Computer Storage Device Manufacturing</td>
            </tr>
            <tr>
              <td>3575</td>
              <td>Computer Terminals</td>
              <td>334113</td>
              <td>Computer Terminal Manufacturing</td>
            </tr>
            <tr>
              <td>5045</td>
              <td>
                Computers and Computer Peripheral Equipment and Software (agents
                and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5045</td>
              <td>
                Computers and Computer Peripheral Equipment and Software
                (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5045</td>
              <td>
                Computers and Computer Peripheral Equipment and Software
                (computers, peripherals, and software sold via retail method)
              </td>
              <td>443120</td>
              <td>Computer and Software Stores</td>
            </tr>
            <tr>
              <td>5045</td>
              <td>
                Computers and Computer Peripheral Equipment and Software
                (merchant wholesalers except those selling computers, equipment,
                and software via retail method)
              </td>
              <td>423430</td>
              <td>
                Computer and Computer Peripheral Equipment and Software Merchant
                Wholesalers
              </td>
            </tr>
            <tr>
              <td>3271</td>
              <td>Concrete Block and Brick</td>
              <td>327331</td>
              <td>Concrete Block and Brick Manufacturing</td>
            </tr>
            <tr>
              <td>3272</td>
              <td>Concrete Products, Except Block and Brick (concrete pipe)</td>
              <td>327332</td>
              <td>Concrete Pipe Manufacturing</td>
            </tr>
            <tr>
              <td>3272</td>
              <td>
                Concrete Products, Except Block and Brick (concrete products,
                except dry mix concrete and pipe)
              </td>
              <td>327390</td>
              <td>Other Concrete Product Manufacturing</td>
            </tr>
            <tr>
              <td>3272</td>
              <td>
                Concrete Products, Except Block and Brick (dry mixture concrete)
              </td>
              <td>327999</td>
              <td>
                All Other Miscellaneous Nonmetallic Mineral Product
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>1771</td>
              <td>Concrete Work (asphalt, brick, and concrete paving)</td>
              <td>238990</td>
              <td>All Other Specialty Trade Contractors</td>
            </tr>
            <tr>
              <td>1771</td>
              <td>
                Concrete Work (concrete work except stucco work and asphalt,
                brick, and paving)
              </td>
              <td>238110</td>
              <td>Poured Concrete Foundation and Structure Contractors</td>
            </tr>
            <tr>
              <td>1771</td>
              <td>Concrete Work (stucco work)</td>
              <td>238140</td>
              <td>Masonry Contractors</td>
            </tr>
            <tr>
              <td>5145</td>
              <td>Confectionery (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5145</td>
              <td>Confectionery (business to business electronic markets)</td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5145</td>
              <td>Confectionery (confectionery sold via retail method)</td>
              <td>445292</td>
              <td>Confectionery and Nut Stores</td>
            </tr>
            <tr>
              <td>5145</td>
              <td>
                Confectionery (merchant wholesalers except those selling
                confectionery via retail method)
              </td>
              <td>424450</td>
              <td>Confectionery Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5082</td>
              <td>
                Construction and Mining (Except Petroleum) Machinery and
                Equipment (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5082</td>
              <td>
                Construction and Mining (Except Petroleum) Machinery and
                Equipment (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5082</td>
              <td>
                Construction and Mining (Except Petroleum) Machinery and
                Equipment (merchant wholesalers)
              </td>
              <td>423810</td>
              <td>
                Construction and Mining (except Oil Well) Machinery and
                Equipment Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>3531</td>
              <td>
                Construction Machinery and Equipment (except railway track
                maintenance equipment; winches, aerial work platforms; and
                automotive wrecker hoists)
              </td>
              <td>333120</td>
              <td>Construction Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>3531</td>
              <td>
                Construction Machinery and Equipment (railway track maintenance
                equipment)
              </td>
              <td>336510</td>
              <td>Railroad Rolling Stock Manufacturing</td>
            </tr>
            <tr>
              <td>3531</td>
              <td>
                Construction Machinery and Equipment (winches, aerial work
                platforms, automobile wrecker hoists, locomotive cranes, and
                ship cranes)
              </td>
              <td>333923</td>
              <td>
                Overhead Traveling Crane, Hoist, and Monorail System
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>5039</td>
              <td>Construction Materials, NEC (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5039</td>
              <td>
                Construction Materials, NEC (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5039</td>
              <td>
                Construction Materials, NEC (glass sold via retail method)
              </td>
              <td>444190</td>
              <td>Other Building Material Dealers</td>
            </tr>
            <tr>
              <td>5039</td>
              <td>
                Construction Materials, NEC (merchant wholesalers of
                construction materials, nec except wood prefabricated buildings
                and structural assemblies and merchant wholesalers selling via
                retail method)
              </td>
              <td>423390</td>
              <td>Other Construction Material Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5039</td>
              <td>
                Construction Materials, NEC (merchant wholesalers of
                prefabricated buildings and structural assemblies, wood)
              </td>
              <td>423310</td>
              <td>
                Lumber, Plywood, Millwork, and Wood Panel Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>1442</td>
              <td>Construction Sand and Gravel</td>
              <td>212321</td>
              <td>Construction Sand and Gravel Mining</td>
            </tr>
            <tr>
              <td>2679</td>
              <td>
                Converted Paper and Paperboard Products, NEC ( except corrugated
                paper, wall paper, gift wrap paper, paper supplies for business
                machines, and other paper office supplies)
              </td>
              <td>322299</td>
              <td>All Other Converted Paper Product Manufacturing</td>
            </tr>
            <tr>
              <td>2679</td>
              <td>
                Converted Paper and Paperboard Products, NEC (corrugated paper)
              </td>
              <td>322211</td>
              <td>Corrugated and Solid Fiber Box Manufacturing</td>
            </tr>
            <tr>
              <td>2679</td>
              <td>
                Converted Paper and Paperboard Products, NEC (paper supplies for
                business machines, such as adding machine tape, and other paper
                office supplies)
              </td>
              <td>322231</td>
              <td>
                Die-Cut Paper and Paperboard Office Supplies Manufacturing
              </td>
            </tr>
            <tr>
              <td>2679</td>
              <td>
                Converted Paper and Paperboard Products, NEC (wallpaper and gift
                wrap paper)
              </td>
              <td>322222</td>
              <td>Coated and Laminated Paper Manufacturing</td>
            </tr>
            <tr>
              <td>3535</td>
              <td>Conveyors and Conveying Equipment</td>
              <td>333922</td>
              <td>Conveyor and Conveying Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>2052</td>
              <td>
                Cookies and Crackers (except unleavened bread and pretzels)
              </td>
              <td>311821</td>
              <td>Cookie and Cracker Manufacturing</td>
            </tr>
            <tr>
              <td>2052</td>
              <td>
                Cookies and Crackers (hard pretzels and snack pretzels, except
                soft)
              </td>
              <td>311919</td>
              <td>Other Snack Food Manufacturing</td>
            </tr>
            <tr>
              <td>2052</td>
              <td>Cookies and Crackers (unleavened bread and soft pretzels)</td>
              <td>311812</td>
              <td>Commercial Bakeries</td>
            </tr>
            <tr>
              <td>3366</td>
              <td>Copper Foundries</td>
              <td>331525</td>
              <td>Copper Foundries (except Die-Casting)</td>
            </tr>
            <tr>
              <td>1021</td>
              <td>Copper Ores</td>
              <td>212234</td>
              <td>Copper Ore and Nickel Ore Mining</td>
            </tr>
            <tr>
              <td>2298</td>
              <td>
                Cordage and Twine (except hemp rope made in spinning mills)
              </td>
              <td>314991</td>
              <td>Rope, Cordage, and Twine Mills</td>
            </tr>
            <tr>
              <td>2298</td>
              <td>Cordage and Twine (hemp rope made in spinning mills)</td>
              <td>313111</td>
              <td>Yarn Spinning Mills</td>
            </tr>
            <tr>
              <td>0115</td>
              <td>Corn</td>
              <td>111150</td>
              <td>Corn Farming</td>
            </tr>
            <tr>
              <td>9223</td>
              <td>Correctional Institutions</td>
              <td>922140</td>
              <td>Correctional Institutions</td>
            </tr>
            <tr>
              <td>2653</td>
              <td>Corrugated and Solid Fiber Boxes</td>
              <td>322211</td>
              <td>Corrugated and Solid Fiber Box Manufacturing</td>
            </tr>
            <tr>
              <td>3961</td>
              <td>
                Costume Jewelry and Costume Novelties, Except Precious Metal
                (except cuff links)
              </td>
              <td>339914</td>
              <td>Costume Jewelry and Novelty Manufacturing</td>
            </tr>
            <tr>
              <td>3961</td>
              <td>
                Costume Jewelry and Costume Novelties, Except Precious Metal
                (nonprecious cuff links)
              </td>
              <td>339993</td>
              <td>Fastener, Button, Needle, and Pin Manufacturing</td>
            </tr>
            <tr>
              <td>0131</td>
              <td>Cotton</td>
              <td>111920</td>
              <td>Cotton Farming</td>
            </tr>
            <tr>
              <td>0724</td>
              <td>Cotton Ginning</td>
              <td>115111</td>
              <td>Cotton Ginning</td>
            </tr>
            <tr>
              <td>2074</td>
              <td>Cottonseed Oil Mills (cottonseed processing)</td>
              <td>311223</td>
              <td>Other Oilseed Processing</td>
            </tr>
            <tr>
              <td>2074</td>
              <td>
                Cottonseed Oil Mills (processing purchased cottonseed oil)
              </td>
              <td>311225</td>
              <td>Fats and Oils Refining and Blending</td>
            </tr>
            <tr>
              <td>4215</td>
              <td>
                Courier Services, Except by Air (hub and spoke intercity
                delivery)
              </td>
              <td>492110</td>
              <td>Couriers</td>
            </tr>
            <tr>
              <td>4215</td>
              <td>Courier Services, Except by Air (local delivery)</td>
              <td>492210</td>
              <td>Local Messengers and Local Delivery</td>
            </tr>
            <tr>
              <td>9211</td>
              <td>Courts</td>
              <td>922110</td>
              <td>Courts</td>
            </tr>
            <tr>
              <td>2021</td>
              <td>Creamery Butter</td>
              <td>311512</td>
              <td>Creamery Butter Manufacturing</td>
            </tr>
            <tr>
              <td>7323</td>
              <td>Credit Reporting Services</td>
              <td>561450</td>
              <td> Credit Bureaus</td>
            </tr>
            <tr>
              <td>6061</td>
              <td>Credit Unions, Federally Chartered</td>
              <td>522130</td>
              <td>Credit Unions</td>
            </tr>
            <tr>
              <td>6062</td>
              <td>Credit Unions, Not Federally Chartered</td>
              <td>522130</td>
              <td>Credit Unions</td>
            </tr>
            <tr>
              <td>0722</td>
              <td>Crop Harvesting, Primarily by Machine</td>
              <td>115113</td>
              <td>Crop Harvesting, Primarily by Machine</td>
            </tr>
            <tr>
              <td>0721</td>
              <td>Crop Planting, Cultivating, and Protecting</td>
              <td>115112</td>
              <td>Soil Preparation, Planting, and Cultivating</td>
            </tr>
            <tr>
              <td>0723</td>
              <td>
                Crop Preparation Services for Market, Except Cotton Ginning
                (custom grain grinding)
              </td>
              <td>311119</td>
              <td>Other Animal Food Manufacturing</td>
            </tr>
            <tr>
              <td>0723</td>
              <td>
                Crop Preparation Services for Market, Except Cotton Ginning
                (except custom grain grinding)
              </td>
              <td>115114</td>
              <td>Postharvest Crop Activities (except Cotton Ginning)</td>
            </tr>
            <tr>
              <td>3466</td>
              <td>Crowns and Closures</td>
              <td>332115</td>
              <td>Crown and Closure Manufacturing</td>
            </tr>
            <tr>
              <td>1311</td>
              <td>Crude Petroleum and Natural Gas</td>
              <td>211111</td>
              <td>Crude Petroleum and Natural Gas Extraction</td>
            </tr>
            <tr>
              <td>4612</td>
              <td>Crude Petroleum Pipelines</td>
              <td>486110</td>
              <td>Pipeline Transportation of Crude Oil</td>
            </tr>
            <tr>
              <td>1423</td>
              <td>Crushed and Broken Granite</td>
              <td>212313</td>
              <td>Crushed and Broken Granite Mining and Quarrying</td>
            </tr>
            <tr>
              <td>1422</td>
              <td>Crushed and Broken Limestone</td>
              <td>212312</td>
              <td>Crushed and Broken Limestone Mining and Quarrying</td>
            </tr>
            <tr>
              <td>1429</td>
              <td>Crushed and Broken Stone, NEC</td>
              <td>212319</td>
              <td>Other Crushed and Broken Stone Mining and Quarrying</td>
            </tr>
            <tr>
              <td>3643</td>
              <td>Current-Carrying Wiring Devices</td>
              <td>335931</td>
              <td>Current-Carrying Wiring Device Manufacturing</td>
            </tr>
            <tr>
              <td>2391</td>
              <td>Curtains and Draperies</td>
              <td>314121</td>
              <td>Curtain and Drapery Mills</td>
            </tr>
            <tr>
              <td>3087</td>
              <td>Custom Compounding of Purchased Plastics Resins</td>
              <td>325991</td>
              <td>Custom Compounding of Purchased Resins </td>
            </tr>
            <tr>
              <td>3281</td>
              <td>Cut Stone and Stone Products</td>
              <td>327991</td>
              <td>Cut Stone and Stone Product Manufacturing</td>
            </tr>
            <tr>
              <td>3421</td>
              <td>
                Cutlery (except hedge shears and trimmers, tinners' snips, and
                similar nonelectric hand tools)
              </td>
              <td>332211</td>
              <td>Cutlery and Flatware (except Precious) Manufacturing</td>
            </tr>
            <tr>
              <td>3421</td>
              <td>
                Cutlery (hedge shears and trimmers, tinners snips, and similar
                nonelectric hand tools)
              </td>
              <td>332212</td>
              <td>Hand and Edge Tool Manufacturing</td>
            </tr>
            <tr>
              <td>3545</td>
              <td>
                Cutting Tools, Machine Tool Accessories, and Machinist Precision
                Measuring Devices (precision measuring devices)
              </td>
              <td>332212</td>
              <td>Hand and Edge Tool Manufacturing</td>
            </tr>
            <tr>
              <td>3545</td>
              <td>
                Cutting Tools, Machine Tool Accessories, and Machinists'
                Precision Measuring Devices (except precision measuring devices)
              </td>
              <td>333515</td>
              <td>Cutting Tool and Machine Tool Accessory Manufacturing</td>
            </tr>
            <tr>
              <td>2865</td>
              <td>
                Cyclic Organic Crudes and Intermediates and Organic Dyes and
                Pigments (except aromatics and organic dyes and pigments)
              </td>
              <td>325192</td>
              <td>Cyclic Crude and Intermediate Manufacturing</td>
            </tr>
            <tr>
              <td>2865</td>
              <td>
                Cyclic Organic Crudes and Intermediates, and Organic Dyes and
                Pigments (aromatics)
              </td>
              <td>325110</td>
              <td>Petrochemical Manufacturing</td>
            </tr>
            <tr>
              <td>2865</td>
              <td>
                Cyclic Organic Crudes and Intermediates, and Organic Dyes and
                Pigments (organic dyes and pigments)
              </td>
              <td>325132</td>
              <td>Synthetic Organic Dye and Pigment Manufacturing</td>
            </tr>
            <tr>
              <td>0241</td>
              <td>Dairy Farms (dairy heifer replacement farms)</td>
              <td>112111</td>
              <td>Beef Cattle Ranching and Farming</td>
            </tr>
            <tr>
              <td>0241</td>
              <td>Dairy Farms (except dairy heifer replacement farms) </td>
              <td>112120</td>
              <td>Dairy Cattle and Milk Production</td>
            </tr>
            <tr>
              <td>5451</td>
              <td>Dairy Products Stores</td>
              <td>445299</td>
              <td>All Other Specialty Food Stores</td>
            </tr>
            <tr>
              <td>5143</td>
              <td>
                Dairy Products, Except Dried or Canned (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5143</td>
              <td>
                Dairy Products, Except Dried or Canned (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5143</td>
              <td>
                Dairy Products, Except Dried or Canned (dairy products sold via
                retail method)
              </td>
              <td>445299</td>
              <td>All Other Specialty Food Stores</td>
            </tr>
            <tr>
              <td>5143</td>
              <td>
                Dairy Products, Except Dried or Canned (merchant wholesalers
                except those selling dairy products via retail method)
              </td>
              <td>424430</td>
              <td>
                Dairy Product (except Dried or Canned) Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>7911</td>
              <td>
                Dance Studios, Schools, and Halls (dance instructors, and
                professional and other dance schools)
              </td>
              <td>611610</td>
              <td>Fine Arts Schools</td>
            </tr>
            <tr>
              <td>7911</td>
              <td>Dance Studios, Schools, and Halls (except instruction)</td>
              <td>713990</td>
              <td>All Other Amusement and Recreation Industries</td>
            </tr>
            <tr>
              <td>8243</td>
              <td>Data Processing Schools (computer repair training)</td>
              <td>611519</td>
              <td>Other Technical and Trade Schools</td>
            </tr>
            <tr>
              <td>8243</td>
              <td>Data Processing Schools (except computer repair training)</td>
              <td>611420</td>
              <td>Computer Training </td>
            </tr>
            <tr>
              <td>0175</td>
              <td>Deciduous Tree Fruits (apple orchards and farms)</td>
              <td>111331</td>
              <td>Apple Orchards</td>
            </tr>
            <tr>
              <td>0175</td>
              <td>Deciduous Tree Fruits (except apple orchards and farms)</td>
              <td>111339</td>
              <td>Other Noncitrus Fruit Farming</td>
            </tr>
            <tr>
              <td>4424</td>
              <td>Deep Sea Domestic Transportation of Freight</td>
              <td>483113</td>
              <td>Coastal and Great Lakes Freight Transportation</td>
            </tr>
            <tr>
              <td>4412</td>
              <td>Deep Sea Foreign Transportation of Freight</td>
              <td>483111</td>
              <td>Deep Sea Freight Transportation</td>
            </tr>
            <tr>
              <td>4481</td>
              <td>
                Deep Sea Transportation of Passengers, Except by Ferry (coastal
                activities)
              </td>
              <td>483114</td>
              <td>Coastal and Great Lakes Passenger Transportation</td>
            </tr>
            <tr>
              <td>4481</td>
              <td>
                Deep Sea Transportation of Passengers, Except by Ferry (deep sea
                activities)
              </td>
              <td>483112</td>
              <td>Deep Sea Passenger Transportation</td>
            </tr>
            <tr>
              <td>3843</td>
              <td>Dental Equipment and Supplies</td>
              <td>339114</td>
              <td>Dental Equipment and Supplies Manufacturing</td>
            </tr>
            <tr>
              <td>8072</td>
              <td>Dental Laboratories</td>
              <td>339116</td>
              <td>Dental Laboratories</td>
            </tr>
            <tr>
              <td>5311</td>
              <td>Department Stores (discount department stores)</td>
              <td>452112</td>
              <td>Discount Department Stores</td>
            </tr>
            <tr>
              <td>5311</td>
              <td>
                Department Stores (except discount department stores and
                supercenters-general merchandise and groceries)
              </td>
              <td>452111</td>
              <td>Department Stores (except Discount Department Stores)</td>
            </tr>
            <tr>
              <td>7381</td>
              <td>
                Detective, Guard, and Armored Car Services (armored car
                services)
              </td>
              <td>561613</td>
              <td>Armored Car Services</td>
            </tr>
            <tr>
              <td>7381</td>
              <td>
                Detective, Guard, and Armored Car Services (detective services)
              </td>
              <td>561611</td>
              <td>Investigation Services</td>
            </tr>
            <tr>
              <td>7381</td>
              <td>
                Detective, Guard, and Armored Car Services (guard services)
              </td>
              <td>561612</td>
              <td>Security Guards and Patrol Services</td>
            </tr>
            <tr>
              <td>2675</td>
              <td>
                Die-Cut Paper and Paperboard and Cardboard (die-cut paper and
                paperboard office supplies, such as file folders, tabulating
                cards, and report covers)
              </td>
              <td>322231</td>
              <td>
                Die-Cut Paper and Paperboard Office Supplies Manufacturing
              </td>
            </tr>
            <tr>
              <td>2675</td>
              <td>
                Die-Cut Paper and Paperboard and Cardboard (except pasted,
                lined, laminated, or surface coated paperboard and die-cut paper
                and paperboard office supplies)
              </td>
              <td>322299</td>
              <td>All Other Converted Paper Product Manufacturing</td>
            </tr>
            <tr>
              <td>2675</td>
              <td>
                Die-Cut Paper and Paperboard and Cardboard (pasted, lined,
                laminated, or surface-coated paperboard)
              </td>
              <td>322226</td>
              <td>Surface-Coated Paperboard Manufacturing</td>
            </tr>
            <tr>
              <td>1411</td>
              <td>Dimension Stone</td>
              <td>212311</td>
              <td>Dimension Stone Mining and Quarrying</td>
            </tr>
            <tr>
              <td>7331</td>
              <td>
                Direct Mail Advertising Services (except mailing list compilers)
              </td>
              <td>541860</td>
              <td>Direct Mail Advertising</td>
            </tr>
            <tr>
              <td>7331</td>
              <td>Direct Mail Advertising Services (mailing list compilers)</td>
              <td>511140</td>
              <td>Directory and Mailing List Publishers</td>
            </tr>
            <tr>
              <td>5963</td>
              <td>
                Direct Selling Establishments (except mobile food services and
                food wagons)
              </td>
              <td>454390</td>
              <td>Other Direct Selling Establishments</td>
            </tr>
            <tr>
              <td>5963</td>
              <td>
                Direct Selling Establishments (mobile food services and food
                wagons)
              </td>
              <td>722330</td>
              <td>Mobile Food Services</td>
            </tr>
            <tr>
              <td>7342</td>
              <td>
                Disinfecting and Pest Control Services (except exterminating and
                pest control)
              </td>
              <td>561720</td>
              <td>Janitorial Services</td>
            </tr>
            <tr>
              <td>7342</td>
              <td>
                Disinfecting and Pest Control Services (exterminating and pest
                control)
              </td>
              <td>561710</td>
              <td>Exterminating and Pest Control Services</td>
            </tr>
            <tr>
              <td>2085</td>
              <td>Distilled and Blended Liquors (apple jack)</td>
              <td>312130</td>
              <td>Wineries</td>
            </tr>
            <tr>
              <td>2085</td>
              <td>Distilled and Blended Liquors (except apple jack)</td>
              <td>312140</td>
              <td>Distilleries</td>
            </tr>
            <tr>
              <td>2047</td>
              <td>Dog and Cat Food</td>
              <td>311111</td>
              <td>Dog and Cat Food Manufacturing</td>
            </tr>
            <tr>
              <td>3942</td>
              <td>Dolls and Stuffed Toys</td>
              <td>339931</td>
              <td>Doll and Stuffed Toy Manufacturing</td>
            </tr>
            <tr>
              <td>2591</td>
              <td>Drapery Hardware and Window Blinds and Shades</td>
              <td>337920</td>
              <td>Blind and Shade Manufacturing</td>
            </tr>
            <tr>
              <td>5714</td>
              <td>Drapery, Curtain, and Upholstery Stores (custom drapes)</td>
              <td>314121</td>
              <td>Curtain and Drapery Mills</td>
            </tr>
            <tr>
              <td>5714</td>
              <td>
                Drapery, Curtain, and Upholstery Stores (custom slipcovers)
              </td>
              <td>314129</td>
              <td>Other Household Textile Product Mills</td>
            </tr>
            <tr>
              <td>5714</td>
              <td>
                Drapery, Curtain, and Upholstery Stores (drapery and curtain
                stores except primarily custom)
              </td>
              <td>442291</td>
              <td>Window Treatment Stores</td>
            </tr>
            <tr>
              <td>5714</td>
              <td>
                Drapery, Curtain, and Upholstery Stores (upholstery materials)
              </td>
              <td>451130</td>
              <td>Sewing, Needlework, and Piece Goods Stores</td>
            </tr>
            <tr>
              <td>3357</td>
              <td>
                Drawing and Insulating of Nonferrous Wire (aluminum wire
                drawing)
              </td>
              <td>331319</td>
              <td>Other Aluminum Rolling and Drawing</td>
            </tr>
            <tr>
              <td>3357</td>
              <td>
                Drawing and Insulating of Nonferrous Wire (communication and
                energy wire, except fiber optic-insulating only)
              </td>
              <td>335929</td>
              <td>Other Communication and Energy Wire Manufacturing</td>
            </tr>
            <tr>
              <td>3357</td>
              <td>
                Drawing and Insulating of Nonferrous Wire (copper wire drawing)
              </td>
              <td>331422</td>
              <td>Copper Wire (except Mechanical) Drawing</td>
            </tr>
            <tr>
              <td>3357</td>
              <td>
                Drawing and Insulating of Nonferrous Wire (fiber optic
                cable-insulating only)
              </td>
              <td>335921</td>
              <td>Fiber Optic Cable Manufacturing</td>
            </tr>
            <tr>
              <td>3357</td>
              <td>
                Drawing and Insulating of Nonferrous Wire (wire drawing except
                copper or aluminum)
              </td>
              <td>331491</td>
              <td>
                Nonferrous Metal (except Copper and Aluminum) Rolling, Drawing,
                and Extruding
              </td>
            </tr>
            <tr>
              <td>2381</td>
              <td>
                Dress and Work Gloves, Except Knit and All-Leather (except
                contractors)
              </td>
              <td>315992</td>
              <td>Glove and Mitten Manufacturing</td>
            </tr>
            <tr>
              <td>2381</td>
              <td>
                Dress and Work Gloves, Except Knit and All-Leather (men's and
                boys' contractors)
              </td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2381</td>
              <td>
                Dress and Work Gloves, Except Knit and All-Leather (women's,
                girls', and infants' contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>2034</td>
              <td>
                Dried and Dehydrated Fruits, Vegetables and Soup Mixes (except
                vegetable flour and soup mixes made from purchased dried and
                dehydrated ingredients)
              </td>
              <td>311423</td>
              <td>Dried and Dehydrated Food Manufacturing</td>
            </tr>
            <tr>
              <td>2034</td>
              <td>
                Dried and Dehydrated Fruits, Vegetables and Soup Mixes
                (vegetable flour)
              </td>
              <td>311211</td>
              <td>Flour Milling</td>
            </tr>
            <tr>
              <td>2034</td>
              <td>
                Dried and Dehydrated Fruits, Vegetables, and Soup Mixes (soup
                mixes made from purchased dehydrated ingredients)
              </td>
              <td>311999</td>
              <td>All Other Miscellaneous Food Manufacturing</td>
            </tr>
            <tr>
              <td>1381</td>
              <td>Drilling Oil and Gas Wells</td>
              <td>213111</td>
              <td>Drilling Oil and Gas Wells</td>
            </tr>
            <tr>
              <td>5813</td>
              <td>Drinking Places (Alcoholic Beverages)</td>
              <td>722410</td>
              <td>Drinking Places (Alcoholic Beverages)</td>
            </tr>
            <tr>
              <td>7833</td>
              <td>Drive-In Motion Picture Theaters</td>
              <td>512132</td>
              <td>Drive-In Motion Picture Theaters</td>
            </tr>
            <tr>
              <td>5912</td>
              <td>Drug Stores and Proprietary Stores</td>
              <td>446110</td>
              <td>Pharmacies and Drug Stores</td>
            </tr>
            <tr>
              <td>5122</td>
              <td>
                Drugs, Drug Proprietaries, and Druggists' Sundries (vitamins
                sold via retail method)
              </td>
              <td>446191</td>
              <td>Food (Health) Supplement Stores</td>
            </tr>
            <tr>
              <td>5122</td>
              <td>
                Drugs, Drug Proprietaries, and Druggists' Sundries (agents and
                brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5122</td>
              <td>
                Drugs, Drug Proprietaries, and Druggists' Sundries (business to
                business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5122</td>
              <td>
                Drugs, Drug Proprietaries, and Druggists' Sundries (cosmetics
                sold via retail method)
              </td>
              <td>446120</td>
              <td>Cosmetics, Beauty Supplies, and Perfume Stores</td>
            </tr>
            <tr>
              <td>5122</td>
              <td>
                Drugs, Drug Proprietaries, and Druggists' Sundries (drugs and
                sundries sold via retail method)
              </td>
              <td>446110</td>
              <td>Pharmacies and Drug Stores</td>
            </tr>
            <tr>
              <td>5122</td>
              <td>
                Drugs, Drug Proprietaries, and Druggists' Sundries (merchant
                wholesalers except those selling drugs and sundries via retail
                method)
              </td>
              <td>424210</td>
              <td>Drugs and Druggists' Sundries Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>2023</td>
              <td>
                Dry, Condensed and Evaporated Dairy Products (except liquid
                non-dairy creamer)
              </td>
              <td>311514</td>
              <td>
                Dry, Condensed, and Evaporated Dairy Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>2023</td>
              <td>
                Dry, Condensed and Evaporated Dairy Products (liquid non-dairy
                creamer)
              </td>
              <td>311511</td>
              <td>Fluid Milk Manufacturing</td>
            </tr>
            <tr>
              <td>7216</td>
              <td>Drycleaning Plants, Except Rug Cleaning</td>
              <td>812320</td>
              <td>Drycleaning and Laundry Services (except Coin-Operated)</td>
            </tr>
            <tr>
              <td>5099</td>
              <td>Durable Goods, NEC (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5099</td>
              <td>
                Durable Goods, NEC (ammunition and firearms sold via retail
                method)
              </td>
              <td>451110</td>
              <td>Sporting Goods Stores</td>
            </tr>
            <tr>
              <td>5099</td>
              <td>
                Durable Goods, NEC (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5099</td>
              <td>
                Durable Goods, NEC (coin-operated game machines sold via retail
                method)
              </td>
              <td>451120</td>
              <td>Hobby, Toy, and Game Stores</td>
            </tr>
            <tr>
              <td>5099</td>
              <td>
                Durable Goods, NEC (gas lighting fixtures, rough timbers, and
                other wood or construction materials sold via retail method)
              </td>
              <td>444190</td>
              <td>Other Building Material Dealers</td>
            </tr>
            <tr>
              <td>5099</td>
              <td>
                Durable Goods, NEC (merchant wholesalers except those selling
                miscellaneous durable goods via retail method)
              </td>
              <td>423990</td>
              <td>Other Miscellaneous Durable Goods Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5099</td>
              <td>
                Durable Goods, NEC (prerecorded audio and video tapes and discs
                sold via retail method)
              </td>
              <td>451220</td>
              <td>Prerecorded Tape, Compact Disc, and Record Stores</td>
            </tr>
            <tr>
              <td>5812</td>
              <td>Eating Places (cafeterias)</td>
              <td>722212</td>
              <td>Cafeterias</td>
            </tr>
            <tr>
              <td>5812</td>
              <td>Eating Places (caterers)</td>
              <td>722320</td>
              <td>Caterers</td>
            </tr>
            <tr>
              <td>5812</td>
              <td>Eating Places (dinner theaters)</td>
              <td>711110</td>
              <td>Theater Companies and Dinner Theaters</td>
            </tr>
            <tr>
              <td>5812</td>
              <td>Eating Places (food service contractors)</td>
              <td>722310</td>
              <td>Food Service Contractors</td>
            </tr>
            <tr>
              <td>5812</td>
              <td>Eating Places (full-service restaurants)</td>
              <td>722110</td>
              <td>Full-Service Restaurants</td>
            </tr>
            <tr>
              <td>5812</td>
              <td>Eating Places (limited-service restaurants)</td>
              <td>722211</td>
              <td>Limited-Service Restaurants</td>
            </tr>
            <tr>
              <td>5812</td>
              <td>Eating Places (snack and nonalcoholic beverage bars)</td>
              <td>722213</td>
              <td>Snack and Nonalcoholic Beverage Bars</td>
            </tr>
            <tr>
              <td>6732</td>
              <td>Educational, Religious, and Charitable Trusts</td>
              <td>813211</td>
              <td>Grantmaking Foundations</td>
            </tr>
            <tr>
              <td>3548</td>
              <td>
                Electric and Gas Welding and Soldering Equipment (except
                transformers for arc-welding)
              </td>
              <td>333992</td>
              <td>Welding and Soldering Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3548</td>
              <td>
                Electric and Gas Welding and Soldering Equipment (transformers
                for arc-welders)
              </td>
              <td>335311</td>
              <td>
                Power, Distribution, and Specialty Transformer Manufacturing
              </td>
            </tr>
            <tr>
              <td>4931</td>
              <td>
                Electric and Other Services Combined (electric power
                distribution)
              </td>
              <td>221122</td>
              <td>Electric Power Distribution</td>
            </tr>
            <tr>
              <td>4931</td>
              <td>
                Electric and Other Services Combined (electric power
                transmission and control)
              </td>
              <td>221121</td>
              <td>Electric Bulk Power Transmission and Control</td>
            </tr>
            <tr>
              <td>4931</td>
              <td>
                Electric and Other Services Combined (fossil fuel power
                generation)
              </td>
              <td>221112</td>
              <td>Fossil Fuel Electric Power Generation</td>
            </tr>
            <tr>
              <td>4931</td>
              <td>
                Electric and Other Services Combined (hydroelectric power
                generation){" "}
              </td>
              <td>221111</td>
              <td>Hydroelectric Power Generation</td>
            </tr>
            <tr>
              <td>4931</td>
              <td>
                Electric and Other Services Combined (natural gas distribution)
              </td>
              <td>221210</td>
              <td>Natural Gas Distribution</td>
            </tr>
            <tr>
              <td>4931</td>
              <td>
                Electric and Other Services Combined (nuclear power generation)
              </td>
              <td>221113</td>
              <td>Nuclear Electric Power Generation</td>
            </tr>
            <tr>
              <td>4931</td>
              <td>
                Electric and Other Services Combined (other electric power
                generation)
              </td>
              <td>221119</td>
              <td>Other Electric Power Generation</td>
            </tr>
            <tr>
              <td>3634</td>
              <td>
                Electric Housewares and Fans (electronic cigarette lighters)
              </td>
              <td>339999</td>
              <td>All Other Miscellaneous Manufacturing</td>
            </tr>
            <tr>
              <td>3634</td>
              <td>
                Electric Housewares and Fans (except wall and baseboard heating
                units for permanent installation, electronic cigarette lighters,
                and wall mount restroom hand dryers)
              </td>
              <td>335211</td>
              <td>Electric Housewares and Household Fan Manufacturing</td>
            </tr>
            <tr>
              <td>3634</td>
              <td>
                Electric Housewares and Fans (wall and baseboard heating units
                for permanent installation)
              </td>
              <td>333414</td>
              <td>
                Heating Equipment (except Warm Air Furnaces) Manufacturing
              </td>
            </tr>
            <tr>
              <td>3641</td>
              <td>Electric Lamp Bulbs and Tubes</td>
              <td>335110</td>
              <td>Electric Lamp Bulb and Part Manufacturing</td>
            </tr>
            <tr>
              <td>4911</td>
              <td>Electric Services (electric power distribution)</td>
              <td>221122</td>
              <td>Electric Power Distribution</td>
            </tr>
            <tr>
              <td>4911</td>
              <td>
                Electric Services (electric power transmission and control)
              </td>
              <td>221121</td>
              <td>Electric Bulk Power Transmission and Control</td>
            </tr>
            <tr>
              <td>4911</td>
              <td>Electric Services (fossil fuel power generation)</td>
              <td>221112</td>
              <td>Fossil Fuel Electric Power Generation</td>
            </tr>
            <tr>
              <td>4911</td>
              <td>Electric Services (hydroelectric power generation)</td>
              <td>221111</td>
              <td>Hydroelectric Power Generation</td>
            </tr>
            <tr>
              <td>4911</td>
              <td>Electric Services (nuclear electric power generation)</td>
              <td>221113</td>
              <td>Nuclear Electric Power Generation</td>
            </tr>
            <tr>
              <td>4911</td>
              <td>Electric Services (other electric power generation)</td>
              <td>221119</td>
              <td>Other Electric Power Generation</td>
            </tr>
            <tr>
              <td>7629</td>
              <td>
                Electrical and Electronic Repair Shops, NEC (business and office
                machine repair, electrical){" "}
              </td>
              <td>811212</td>
              <td>Computer and Office Machine Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7629</td>
              <td>
                Electrical and Electronic Repair Shops, NEC (electrical
                appliance repair, washing machine repair, electric razor repair)
              </td>
              <td>811412</td>
              <td>Appliance Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7629</td>
              <td>
                Electrical and Electronic Repair Shops, NEC (electrical
                measuring instrument repair and calibration, medical electrical
                equipment repair)
              </td>
              <td>811219</td>
              <td>
                Other Electronic and Precision Equipment Repair and Maintenance
              </td>
            </tr>
            <tr>
              <td>7629</td>
              <td>
                Electrical and Electronic Repair Shops, NEC (new retail sales
                combined with repair-repair services as major source of
                receipts)
              </td>
              <td>443111</td>
              <td>Household Appliance Stores</td>
            </tr>
            <tr>
              <td>7629</td>
              <td>
                Electrical and Electronic Repair Shops, NEC (other consumer
                electronic equipment, except business and office machines,
                telephones, and appliances-repair and maintenance)
              </td>
              <td>811211</td>
              <td>Consumer Electronics Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7629</td>
              <td>
                Electrical and Electronic Repair Shops, NEC (telephone set
                repair)
              </td>
              <td>811213</td>
              <td>Communication Equipment Repair and Maintenance</td>
            </tr>
            <tr>
              <td>5063</td>
              <td>
                Electrical Apparatus and Equipment, Wiring Supplies and
                Construction Materials (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5063</td>
              <td>
                Electrical Apparatus and Equipment, Wiring Supplies and
                Construction Materials (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5063</td>
              <td>
                Electrical Apparatus and Equipment, Wiring Supplies and
                Construction Materials (merchant wholesalers except those
                selling electrical supplies, equipment, and apparatus via retail
                method)
              </td>
              <td>423610</td>
              <td>
                Electrical Apparatus and Equipment, Wiring Supplies, and Related
                Equipment Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>5063</td>
              <td>
                Electrical Apparatus and Equipment, Wiring Supplies, and
                Construction Materials (electrical supplies, equipment, and
                apparatus sold via retail method)
              </td>
              <td>444190</td>
              <td>Other Building Material Dealers</td>
            </tr>
            <tr>
              <td>5064</td>
              <td>
                Electrical Appliances, Television and Radio Sets (agents and
                brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5064</td>
              <td>
                Electrical Appliances, Television and Radio Sets (business to
                business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5064</td>
              <td>
                Electrical Appliances, Television and Radio Sets (ceiling fans
                sold via retail method)
              </td>
              <td>444190</td>
              <td>Other Building Material Dealers</td>
            </tr>
            <tr>
              <td>5064</td>
              <td>
                Electrical Appliances, Television and Radio Sets (household
                appliances sold via retail method)
              </td>
              <td>443111</td>
              <td>Household Appliance Stores</td>
            </tr>
            <tr>
              <td>5064</td>
              <td>
                Electrical Appliances, Television and Radio Sets (merchant
                wholesalers except those selling appliances, TVs, and radios via
                retail method)
              </td>
              <td>423620</td>
              <td>
                Electrical and Electronic Appliance, Television, and Radio Set
                Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>5064</td>
              <td>
                Electrical Appliances, Television and Radio Sets (television and
                radio sets sold via retail method)
              </td>
              <td>443112</td>
              <td>Radio, Television, and Other Electronics Stores</td>
            </tr>
            <tr>
              <td>3694</td>
              <td>Electrical Equipment for Internal Combustion Engines</td>
              <td>336322</td>
              <td>
                Other Motor Vehicle Electrical and Electronic Equipment
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3629</td>
              <td>Electrical Industrial Apparatus, NEC</td>
              <td>335999</td>
              <td>
                All Other Miscellaneous Electrical Equipment and Component
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3699</td>
              <td>
                Electrical Machinery Equipment, and Supplies, NEC (laser welding
                and soldering equipment)
              </td>
              <td>333992</td>
              <td>Welding and Soldering Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3699</td>
              <td>
                Electrical Machinery, Equipment, and Supplies, NEC (Christmas
                tree lighting sets, electric insect lamps, electric fireplace
                logs, and trouble lights)
              </td>
              <td>335129</td>
              <td>Other Lighting Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3699</td>
              <td>
                Electrical Machinery, Equipment, and Supplies, NEC (electronic
                teaching machines and flight simulators)
              </td>
              <td>333319</td>
              <td>
                Other Commercial and Service Industry Machinery Manufacturing
              </td>
            </tr>
            <tr>
              <td>3699</td>
              <td>
                Electrical Machinery, Equipment, and Supplies, NEC (other
                electrical industrial apparatus)
              </td>
              <td>335999</td>
              <td>
                All Other Miscellaneous Electrical Equipment and Component
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3699</td>
              <td>
                Electrical Machinery, Equipment, and Supplies, NEC (outboard
                electric motors)
              </td>
              <td>333618</td>
              <td>Other Engine Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>1731</td>
              <td>
                Electrical Work (electrical work except burglar and fire alarm
                installation)
              </td>
              <td>238210</td>
              <td>Electrical Contractors</td>
            </tr>
            <tr>
              <td>3845</td>
              <td>
                Electromedical and Electrotherapeutic Apparatus (CT and CAT
                Scanners)
              </td>
              <td>334517</td>
              <td>Irradiation Apparatus Manufacturing</td>
            </tr>
            <tr>
              <td>3845</td>
              <td>
                Electromedical and Electrotherapeutic Apparatus (except CT and
                CAT scanners)
              </td>
              <td>334510</td>
              <td>
                Electromedical and Electrotherapeutic Apparatus Manufacturing
              </td>
            </tr>
            <tr>
              <td>3313</td>
              <td>Electrometallurgical Products, Except Steel</td>
              <td>331112</td>
              <td>Electrometallurgical Ferroalloy Product Manufacturing</td>
            </tr>
            <tr>
              <td>3671</td>
              <td>Electron Tubes</td>
              <td>334411</td>
              <td>Electron Tube Manufacturing</td>
            </tr>
            <tr>
              <td>3675</td>
              <td>Electronic Capacitors</td>
              <td>334414</td>
              <td>Electronic Capacitor Manufacturing</td>
            </tr>
            <tr>
              <td>3677</td>
              <td>Electronic Coils, Transformers, and Other Inductors</td>
              <td>334416</td>
              <td>
                Electronic Coil, Transformer, and Other Inductor Manufacturing
              </td>
            </tr>
            <tr>
              <td>3679</td>
              <td>Electronic Components, NEC (antennas)</td>
              <td>334220</td>
              <td>
                Radio and Television Broadcasting and Wireless Communications
                Equipment Manufacturing
              </td>
            </tr>
            <tr>
              <td>3679</td>
              <td>Electronic Components, NEC (other electronic components)</td>
              <td>334419</td>
              <td>Other Electronic Component Manufacturing</td>
            </tr>
            <tr>
              <td>3679</td>
              <td>
                Electronic Components, NEC (printed circuit/electronic assembly
                manufacturing)
              </td>
              <td>334418</td>
              <td>
                Printed Circuit Assembly (Electronic Assembly) Manufacturing
              </td>
            </tr>
            <tr>
              <td>3679</td>
              <td>Electronic Components, NEC (radio headphones)</td>
              <td>334310</td>
              <td>Audio and Video Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3571</td>
              <td>Electronic Computers</td>
              <td>334111</td>
              <td>Electronic Computer Manufacturing</td>
            </tr>
            <tr>
              <td>3678</td>
              <td>Electronic Connectors</td>
              <td>334417</td>
              <td>Electronic Connector Manufacturing</td>
            </tr>
            <tr>
              <td>5065</td>
              <td>Electronic Parts and Equipment, NEC (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5065</td>
              <td>
                Electronic Parts and Equipment, NEC (amateur radios, CB's,
                intercommunications equipment, public address equipment, and
                similar communications equipment sold via retail method)
              </td>
              <td>443112</td>
              <td>Radio, Television, and Other Electronics Stores</td>
            </tr>
            <tr>
              <td>5065</td>
              <td>
                Electronic Parts and Equipment, NEC (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5065</td>
              <td>
                Electronic Parts and Equipment, NEC (merchant wholesalers except
                those selling electronic parts and equipment via retail method)
              </td>
              <td>423690</td>
              <td>Other Electronic Parts and Equipment Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5065</td>
              <td>
                Electronic Parts and Equipment, NEC (modems and other computer
                components sold via retail method)
              </td>
              <td>443120</td>
              <td>Computer and Software Stores</td>
            </tr>
            <tr>
              <td>3676</td>
              <td>Electronic Resistors</td>
              <td>334415</td>
              <td>Electronic Resistor Manufacturing</td>
            </tr>
            <tr>
              <td>3471</td>
              <td>
                Electroplating, Plating, Polishing, Anodizing, and Coloring
              </td>
              <td>332813</td>
              <td>
                Electroplating, Plating, Polishing, Anodizing and Coloring
              </td>
            </tr>
            <tr>
              <td>8211</td>
              <td>Elementary and Secondary Schools</td>
              <td>611110</td>
              <td>Elementary and Secondary Schools</td>
            </tr>
            <tr>
              <td>3534</td>
              <td>Elevators and Moving Stairways</td>
              <td>333921</td>
              <td>Elevator and Moving Stairway Manufacturing</td>
            </tr>
            <tr>
              <td>7361</td>
              <td>Employment Agencies (except executive placement services)</td>
              <td>561311</td>
              <td>Employment Placement Agencies</td>
            </tr>
            <tr>
              <td>7361</td>
              <td>Employment Agencies (executive placement services)</td>
              <td>561312</td>
              <td>Executive Search Services</td>
            </tr>
            <tr>
              <td>3431</td>
              <td>Enameled Iron and Metal Sanitary Ware</td>
              <td>332998</td>
              <td>Enameled Iron and Metal Sanitary Ware Manufacturing</td>
            </tr>
            <tr>
              <td>8711</td>
              <td>Engineering Services</td>
              <td>541330</td>
              <td>Engineering Services</td>
            </tr>
            <tr>
              <td>2677</td>
              <td>Envelopes</td>
              <td>322232</td>
              <td>Envelope Manufacturing</td>
            </tr>
            <tr>
              <td>7359</td>
              <td>
                Equipment Rental and Leasing, NEC (aircraft rental and leasing)
              </td>
              <td>532411</td>
              <td>
                Commercial Air, Rail, and Water Transportation Equipment Rental
                and Leasing
              </td>
            </tr>
            <tr>
              <td>7359</td>
              <td>
                Equipment Rental and Leasing, NEC (appliances; TVs, VCRs, and
                other consumer electronic equipment rental)
              </td>
              <td>532210</td>
              <td>Consumer Electronics and Appliances Rental</td>
            </tr>
            <tr>
              <td>7359</td>
              <td>
                Equipment Rental and Leasing, NEC (except aircraft; industrial
                truck and equipment; TV, VCR, and other consumer electronic
                equipment; appliances; general rental centers; portable toilets;
                office machines; oil field and oil well drilling equipment; and
                home and garden equipment rental and leasing)
              </td>
              <td>532299</td>
              <td>All Other Consumer Goods Rental</td>
            </tr>
            <tr>
              <td>7359</td>
              <td>
                Equipment Rental and Leasing, NEC (general rental centers and
                home and garden equipment rental centers)
              </td>
              <td>532310</td>
              <td>General Rental Centers</td>
            </tr>
            <tr>
              <td>7359</td>
              <td>
                Equipment Rental and Leasing, NEC (industrial truck and
                equipment rental and leasing)
              </td>
              <td>532490</td>
              <td>
                Other Commercial and Industrial Machinery and Equipment Rental
                and Leasing
              </td>
            </tr>
            <tr>
              <td>7359</td>
              <td>
                Equipment Rental and Leasing, NEC (office machine rental and
                leasing)
              </td>
              <td>532420</td>
              <td>Office Machinery and Equipment Rental and Leasing</td>
            </tr>
            <tr>
              <td>7359</td>
              <td>
                Equipment Rental and Leasing, NEC (oil field and well drilling
                equipment)
              </td>
              <td>532412</td>
              <td>
                Construction, Mining, and Forestry Machinery and Equipment
                Rental and Leasing
              </td>
            </tr>
            <tr>
              <td>7359</td>
              <td>
                Equipment Rental and Leasing, NEC (portable toilet rental)
              </td>
              <td>562991</td>
              <td>Septic Tank and Related Services</td>
            </tr>
            <tr>
              <td>1794</td>
              <td>Excavation Work</td>
              <td>238910</td>
              <td>Site Preparation Contractors</td>
            </tr>
            <tr>
              <td>9131</td>
              <td>Executive and Legislative Office Combined </td>
              <td>921140</td>
              <td>Executive and Legislative Offices, Combined </td>
            </tr>
            <tr>
              <td>9111</td>
              <td>Executive Offices</td>
              <td>921110</td>
              <td>Executive Offices</td>
            </tr>
            <tr>
              <td>2892</td>
              <td>Explosives</td>
              <td>325920</td>
              <td>Explosives Manufacturing</td>
            </tr>
            <tr>
              <td>3499</td>
              <td>Fabricated Metal Products, NEC (metal aerosol valves)</td>
              <td>332919</td>
              <td>Other Metal Valve and Pipe Fitting Manufacturing</td>
            </tr>
            <tr>
              <td>3499</td>
              <td>
                Fabricated Metal Products, NEC (metal automobile seat frames)
              </td>
              <td>336360</td>
              <td>Motor Vehicle Seating and Interior Trim Manufacturing</td>
            </tr>
            <tr>
              <td>3499</td>
              <td>Fabricated Metal Products, NEC (metal boxes)</td>
              <td>332439</td>
              <td>Other Metal Container Manufacturing</td>
            </tr>
            <tr>
              <td>3499</td>
              <td>Fabricated Metal Products, NEC (metal furniture frames)</td>
              <td>337215</td>
              <td>Showcase, Partition, Shelving, and Locker Manufacturing</td>
            </tr>
            <tr>
              <td>3499</td>
              <td>Fabricated Metal Products, NEC (other metal products)</td>
              <td>332999</td>
              <td>
                All Other Miscellaneous Fabricated Metal Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>3499</td>
              <td>Fabricated Metal Products, NEC (powder metallurgy)</td>
              <td>332117</td>
              <td>Powder Metallurgy Part Manufacturing</td>
            </tr>
            <tr>
              <td>3499</td>
              <td>Fabricated Metal Products, NEC (safe and vault locks)</td>
              <td>332510</td>
              <td>Hardware Manufacturing</td>
            </tr>
            <tr>
              <td>3498</td>
              <td>Fabricated Pipe and Pipe Fittings</td>
              <td>332996</td>
              <td>Fabricated Pipe and Pipe Fitting Manufacturing</td>
            </tr>
            <tr>
              <td>3443</td>
              <td>
                Fabricated Plate Work (Boiler Shops) (fabricated plate work and
                metal weldments)
              </td>
              <td>332313</td>
              <td>Plate Work Manufacturing</td>
            </tr>
            <tr>
              <td>3443</td>
              <td>Fabricated Plate Work (Boiler Shops) (heavy gauge tanks)</td>
              <td>332420</td>
              <td>Metal Tank (Heavy Gauge) Manufacturing </td>
            </tr>
            <tr>
              <td>3443</td>
              <td>
                Fabricated Plate Work (Boiler Shops) (metal cooling towers)
              </td>
              <td>333415</td>
              <td>
                Air-Conditioning and Warm Air Heating Equipment and Commercial
                and Industrial Refrigeration Equipment Manufacturing
              </td>
            </tr>
            <tr>
              <td>3443</td>
              <td>
                Fabricated Plate Work (Boiler Shops) (power boilers and heat
                exchangers)
              </td>
              <td>332410</td>
              <td>Power Boiler and Heat Exchanger Manufacturing</td>
            </tr>
            <tr>
              <td>3069</td>
              <td>
                Fabricated Rubber Products, NEC (bags made from rubberized
                fabric)
              </td>
              <td>314911</td>
              <td>Textile Bag Mills</td>
            </tr>
            <tr>
              <td>3069</td>
              <td>
                Fabricated Rubber Products, NEC (bibs, bathing caps, related
                rubber accessories)
              </td>
              <td>315999</td>
              <td>Other Apparel Accessories and Other Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>3069</td>
              <td>
                Fabricated Rubber Products, NEC (except rubberized fabric and
                garments, gloves, life vests, wet suits, accessories, such as
                bibs and bathing caps, rubber toys, bags made from rubberized
                fabric, rubber diaper covers, and rubber resilient floor
                coverings)
              </td>
              <td>326299</td>
              <td>All Other Rubber Product Manufacturing</td>
            </tr>
            <tr>
              <td>3069</td>
              <td>
                Fabricated Rubber Products, NEC (rubber cut and sew outerwear)
              </td>
              <td>315299</td>
              <td>All Other Cut and Sew Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>3069</td>
              <td>
                Fabricated Rubber Products, NEC (rubber gloves, inflatable
                rubber lifejackets)
              </td>
              <td>339113</td>
              <td>Surgical and Appliance and Supplies Manufacturing</td>
            </tr>
            <tr>
              <td>3069</td>
              <td>
                Fabricated Rubber Products, NEC (rubber resilient floor
                coverings)
              </td>
              <td>326192</td>
              <td>Resilient Floor Covering Manufacturing</td>
            </tr>
            <tr>
              <td>3069</td>
              <td>
                Fabricated Rubber Products, NEC (rubber toys, except dolls)
              </td>
              <td>339932</td>
              <td>Game, Toy, and Children's Vehicle Manufacturing</td>
            </tr>
            <tr>
              <td>3069</td>
              <td>
                Fabricated Rubber Products, NEC (rubberizing fabric or purchased
                textile products)
              </td>
              <td>313320</td>
              <td>Fabric Coating Mills</td>
            </tr>
            <tr>
              <td>3069</td>
              <td>Fabricated Rubber Products, NEC (wet suits)</td>
              <td>339920</td>
              <td>Sporting and Athletic Goods Manufacturing</td>
            </tr>
            <tr>
              <td>3441</td>
              <td>Fabricated Structural Metal</td>
              <td>332312</td>
              <td>Fabricated Structural Metal Manufacturing</td>
            </tr>
            <tr>
              <td>2399</td>
              <td>
                Fabricated Textile Products, NEC (apparel and apparel
                accessories, except contractors)
              </td>
              <td>315999</td>
              <td>Other Apparel Accessories and Other Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2399</td>
              <td>
                Fabricated Textile Products, NEC (except apparel and
                accessories, automotive seat belts, seat and tire covers, and
                contractors)
              </td>
              <td>314999</td>
              <td>All Other Miscellaneous Textile Product Mills</td>
            </tr>
            <tr>
              <td>2399</td>
              <td>
                Fabricated Textile Products, NEC (men's and boys' contractors)
              </td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2399</td>
              <td>
                Fabricated Textile Products, NEC (seat belts, and seat and tire
                covers)
              </td>
              <td>336360</td>
              <td>Motor Vehicle Seating and Interior Trim Manufacturing</td>
            </tr>
            <tr>
              <td>2399</td>
              <td>
                Fabricated Textile Products, NEC (women's, girls', and infants'
                contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>8744</td>
              <td>Facilities Support Management Services</td>
              <td>561210</td>
              <td>Facilities Support Services</td>
            </tr>
            <tr>
              <td>5651</td>
              <td>Family Clothing Stores</td>
              <td>448140</td>
              <td>Family Clothing Stores</td>
            </tr>
            <tr>
              <td>5083</td>
              <td>
                Farm and Garden Machinery and Equipment (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5083</td>
              <td>
                Farm and Garden Machinery and Equipment (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5083</td>
              <td>
                Farm and Garden Machinery and Equipment (lawn and garden
                equipment sold via retail method)
              </td>
              <td>444210</td>
              <td>Outdoor Power Equipment Stores</td>
            </tr>
            <tr>
              <td>5083</td>
              <td>
                Farm and Garden Machinery and Equipment (merchant wholesalers
                except those selling lawn and garden equipment via retail
                method)
              </td>
              <td>423820</td>
              <td>
                Farm and Garden Machinery and Equipment Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>0761</td>
              <td>Farm Labor Contractors and Crew Leaders</td>
              <td>115115</td>
              <td>Farm Labor Contractors and Crew Leaders</td>
            </tr>
            <tr>
              <td>3523</td>
              <td>
                Farm Machinery and Equipment (corrals, stalls, and holding
                gates)
              </td>
              <td>332323</td>
              <td>Ornamental and Architectural Metal Work Manufacturing</td>
            </tr>
            <tr>
              <td>3523</td>
              <td>
                Farm Machinery and Equipment (except corrals, stalls, holding
                gates, hand clippers for animals, and farm conveyors/elevators)
              </td>
              <td>333111</td>
              <td>Farm Machinery and Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3523</td>
              <td>
                Farm Machinery and Equipment (farm conveyors and elevators)
              </td>
              <td>333922</td>
              <td>Conveyor and Conveying Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3523</td>
              <td>
                Farm Machinery and Equipment (hand hair clippers for animals)
              </td>
              <td>332212</td>
              <td>Hand and Edge Tool Manufacturing</td>
            </tr>
            <tr>
              <td>0762</td>
              <td>Farm Management Services</td>
              <td>115116</td>
              <td>Farm Management Services</td>
            </tr>
            <tr>
              <td>4221</td>
              <td>Farm Product Warehousing and Storage</td>
              <td>493130</td>
              <td>Farm Product Warehousing and Storage</td>
            </tr>
            <tr>
              <td>5191</td>
              <td>Farm Supplies (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5191</td>
              <td>Farm Supplies (business to business electronic markets)</td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5191</td>
              <td>
                Farm Supplies (lawn and garden supplies sold via retail method)
              </td>
              <td>444220</td>
              <td>Nurseries, Garden Centers, and Farm Supply Stores</td>
            </tr>
            <tr>
              <td>5191</td>
              <td>
                Farm Supplies (merchant wholesalers except those selling lawn
                and garden supplies via retail method)
              </td>
              <td>424910</td>
              <td>Farm Supplies Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5159</td>
              <td>Farm-Product Raw Materials, NEC (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5159</td>
              <td>
                Farm-Product Raw Materials, NEC (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5159</td>
              <td>
                Farm-Product Raw Materials, NEC (farm-product raw materials sold
                via retail method)
              </td>
              <td>444220</td>
              <td>Nurseries, Garden Centers, and Farm Supply Stores</td>
            </tr>
            <tr>
              <td>5159</td>
              <td>
                Farm-Product Raw Materials, NEC (merchant wholesalers except
                those selling farm product raw materials, nec via retail method)
              </td>
              <td>424590</td>
              <td>Other Farm Product Raw Material Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>3965</td>
              <td>Fasteners, Buttons, Needles, and Pins</td>
              <td>339993</td>
              <td>Fastener, Button, Needle, and Pin Manufacturing</td>
            </tr>
            <tr>
              <td>6111</td>
              <td>
                Federal and Federally Sponsored Credit Agencies (secondary
                market financing)
              </td>
              <td>522294</td>
              <td>Secondary Market Financing</td>
            </tr>
            <tr>
              <td>6111</td>
              <td>
                Federal and Federally-Sponsored Credit Agencies (except trade
                banks, secondary market financing and Federal Land Banks)
              </td>
              <td>522298</td>
              <td>All Other Nondepository Credit Intermediation</td>
            </tr>
            <tr>
              <td>6111</td>
              <td>
                Federal and Federally-Sponsored Credit Agencies (trade banks)
              </td>
              <td>522292</td>
              <td>Real Estate Credit</td>
            </tr>
            <tr>
              <td>6111</td>
              <td>
                Federal and Federally-Sponsored Credit Agencies (trade banks)
              </td>
              <td>522293</td>
              <td>International Trade Financing</td>
            </tr>
            <tr>
              <td>6011</td>
              <td>Federal Reserve Banks</td>
              <td>521110</td>
              <td>Monetary Authorities - Central Bank</td>
            </tr>
            <tr>
              <td>4482</td>
              <td>Ferries (coastal and Great Lakes)</td>
              <td>483114</td>
              <td>Coastal and Great Lakes Passenger Transportation</td>
            </tr>
            <tr>
              <td>4482</td>
              <td>Ferries (inland)</td>
              <td>483212</td>
              <td>Inland Water Passenger Transportation</td>
            </tr>
            <tr>
              <td>1061</td>
              <td>Ferroalloy Ores, Except Vanadium (nickel)</td>
              <td>212234</td>
              <td>Copper Ore and Nickel Ore Mining</td>
            </tr>
            <tr>
              <td>1061</td>
              <td>
                Ferroalloy Ores, Except Vanadium (other ferroalloys except
                nickel)
              </td>
              <td>212299</td>
              <td>All Other Metal Ore Mining</td>
            </tr>
            <tr>
              <td>2875</td>
              <td>Fertilizers, Mixing Only</td>
              <td>325314</td>
              <td>Fertilizer (Mixing Only) Manufacturing</td>
            </tr>
            <tr>
              <td>2655</td>
              <td>Fiber Cans, Tubes, Drums, and Similar Products</td>
              <td>322214</td>
              <td>Fiber Can, Tube, Drum, and Similar Products Manufacturing</td>
            </tr>
            <tr>
              <td>0139</td>
              <td>
                Field Crops Except Cash Grains (sweet potatoes and yams), NEC
              </td>
              <td>111211</td>
              <td>Potato Farming</td>
            </tr>
            <tr>
              <td>0139</td>
              <td>Field Crops, Except Cash Grains, NEC (broom corn farming)</td>
              <td>111199</td>
              <td>All Other Grain Farming</td>
            </tr>
            <tr>
              <td>0139</td>
              <td>
                Field Crops, Except Cash Grains, NEC (except peanut, sweet
                potato, broom corn, yam and hay farms)
              </td>
              <td>111998</td>
              <td>All Other Miscellaneous Crop Farming</td>
            </tr>
            <tr>
              <td>0139</td>
              <td>Field Crops, Except Cash Grains, NEC (hay farms)</td>
              <td>111940</td>
              <td>Hay Farming</td>
            </tr>
            <tr>
              <td>0139</td>
              <td>Field Crops, Except Cash Grains, NEC (peanut farms)</td>
              <td>111992</td>
              <td>Peanut Farming</td>
            </tr>
            <tr>
              <td>3263</td>
              <td>Fine Earthenware (Whiteware) Table and Kitchen Articles</td>
              <td>327112</td>
              <td>
                Vitreous China, Fine Earthenware, and Other Pottery Product
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>0912</td>
              <td>Finfish</td>
              <td>114111</td>
              <td>Finfish Fishing</td>
            </tr>
            <tr>
              <td>2261</td>
              <td>Finishers of Broadwoven Fabrics of Cotton</td>
              <td>313311</td>
              <td>Broadwoven Fabric Finishing Mills</td>
            </tr>
            <tr>
              <td>2262</td>
              <td>Finishers of Broadwoven Fabrics of Manmade Fiber and Silk</td>
              <td>313311</td>
              <td>Broadwoven Fabric Finishing Mills</td>
            </tr>
            <tr>
              <td>2269</td>
              <td>
                Finishers of Textiles, NEC (except linen fabric finishing)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>2269</td>
              <td>Finishers of Textiles, NEC (linen fabric finishing)</td>
              <td>313311</td>
              <td>Broadwoven Fabric Finishing Mills</td>
            </tr>
            <tr>
              <td>9224</td>
              <td>Fire Protection</td>
              <td>922160</td>
              <td>Fire Protection</td>
            </tr>
            <tr>
              <td>6331</td>
              <td>
                Fire, Marine, and Casualty Insurance (contact lens insurance)
              </td>
              <td>524128</td>
              <td>
                Other Direct Insurance (except Life, Health, and Medical)
                Carriers
              </td>
            </tr>
            <tr>
              <td>6331</td>
              <td>
                Fire, Marine, and Casualty Insurance (fire, marine, and casualty
                insurers-direct, except contact lens insurance)
              </td>
              <td>524126</td>
              <td>Direct Property and Casualty Insurance Carriers</td>
            </tr>
            <tr>
              <td>6331</td>
              <td>Fire, Marine, and Casualty Insurance (reinsurers)</td>
              <td>524130</td>
              <td>Reinsurance Carriers</td>
            </tr>
            <tr>
              <td>6331</td>
              <td>Fire, Marine, and Casualty Insurance (self insurers)</td>
              <td>525190</td>
              <td>Other Insurance Funds</td>
            </tr>
            <tr>
              <td>5146</td>
              <td>Fish and Seafoods (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5146</td>
              <td>
                Fish and Seafoods (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5146</td>
              <td>
                Fish and Seafoods (fish and seafoods sold via retail method)
              </td>
              <td>445220</td>
              <td>Fish and Seafood Markets</td>
            </tr>
            <tr>
              <td>5146</td>
              <td>
                Fish and Seafoods (merchant wholesalers except those selling
                fish and seafoods via retail method)
              </td>
              <td>424460</td>
              <td>Fish and Seafood Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>0921</td>
              <td>Fish Hatcheries and Preserves (finfish hatcheries)</td>
              <td>112511</td>
              <td>Finfish Farming and Fish Hatcheries</td>
            </tr>
            <tr>
              <td>0921</td>
              <td>Fish Hatcheries and Preserves (shellfish hatcheries)</td>
              <td>112512</td>
              <td>Shellfish Farming</td>
            </tr>
            <tr>
              <td>4785</td>
              <td>
                Fixed Facilities and Inspection and Weighing Services for Motor
                Vehicle Transportation (except marine cargo checkers)
              </td>
              <td>488490</td>
              <td>Other Support Activities for Road Transportation</td>
            </tr>
            <tr>
              <td>4785</td>
              <td>
                Fixed Facilities and Inspection and Weighing Services for Motor
                Vehicle Transportation (marine cargo checkers)
              </td>
              <td>488390</td>
              <td>Other Support Activities for Water Transportation</td>
            </tr>
            <tr>
              <td>3211</td>
              <td>Flat Glass</td>
              <td>327211</td>
              <td>Flat Glass Manufacturing</td>
            </tr>
            <tr>
              <td>2087</td>
              <td>
                Flavoring Extracts and Flavoring Syrups, NEC (flavoring syrups
                and concentrates except coffee)
              </td>
              <td>311930</td>
              <td>Flavoring Syrup and Concentrate Manufacturing</td>
            </tr>
            <tr>
              <td>2087</td>
              <td>
                Flavoring Extracts and Flavoring Syrups, NEC (coffee flavoring
                and syrups)
              </td>
              <td>311920</td>
              <td>Coffee and Tea Manufacturing</td>
            </tr>
            <tr>
              <td>2087</td>
              <td>
                Flavoring Extracts and Flavoring Syrups, NEC (flavoring extracts
                and natural food colorings)
              </td>
              <td>311942</td>
              <td>Spice and Extract Manufacturing</td>
            </tr>
            <tr>
              <td>2087</td>
              <td>
                Flavoring Extracts and Flavoring Syrups, NEC (powered drink mix)
              </td>
              <td>311999</td>
              <td>All Other Miscellaneous Food Manufacturing</td>
            </tr>
            <tr>
              <td>5713</td>
              <td>Floor Coverings Stores</td>
              <td>442210</td>
              <td>Floor Covering Stores</td>
            </tr>
            <tr>
              <td>1752</td>
              <td>Floor Laying and Other Floor Work, NEC </td>
              <td>238330</td>
              <td>Flooring Contractors</td>
            </tr>
            <tr>
              <td>5992</td>
              <td>Florists</td>
              <td>453110</td>
              <td>Florists</td>
            </tr>
            <tr>
              <td>2041</td>
              <td>Flour and Other Grain Mill Products</td>
              <td>311211</td>
              <td>Flour Milling</td>
            </tr>
            <tr>
              <td>5193</td>
              <td>
                Flowers, Nursery Stock, and Florists' Supplies (agents and
                brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5193</td>
              <td>
                Flowers, Nursery Stock, and Florists' Supplies (business to
                business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5193</td>
              <td>
                Flowers, Nursery Stock, and Florists' Supplies (merchant
                wholesalers except those selling nursery stock via retail
                method)
              </td>
              <td>424930</td>
              <td>
                Flower, Nursery Stock, and Florists' Supplies Merchant
                Wholesalers
              </td>
            </tr>
            <tr>
              <td>5193</td>
              <td>
                Flowers, Nursery Stock, and Florists' Supplies (sold via retail
                method)
              </td>
              <td>444220</td>
              <td>Nurseries, Garden Centers, and Farm Supply Stores</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>Fluid Milk (except ultra-high temperature)</td>
              <td>311511</td>
              <td>Fluid Milk Manufacturing</td>
            </tr>
            <tr>
              <td>2026</td>
              <td>Fluid Milk (ultra-high temperature)</td>
              <td>311514</td>
              <td>
                Dry, Condensed, and Evaporated Dairy Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>3593</td>
              <td>Fluid Power Cylinders and Actuators</td>
              <td>333995</td>
              <td>Fluid Power Cylinder and Actuator Manufacturing</td>
            </tr>
            <tr>
              <td>3594</td>
              <td>Fluid Power Pumps and Motors</td>
              <td>333996</td>
              <td>Fluid Power Pump and Motor Manufacturing</td>
            </tr>
            <tr>
              <td>3492</td>
              <td>Fluid Power Valves and Hose Fittings</td>
              <td>332912</td>
              <td>Fluid Power Valve and Hose Fitting Manufacturing</td>
            </tr>
            <tr>
              <td>2657</td>
              <td>
                Folding Paperboard Boxes, Including Sanitary (except paperboard
                backs for blister or skin packages)
              </td>
              <td>322212</td>
              <td>Folding Paperboard Box Manufacturing</td>
            </tr>
            <tr>
              <td>0182</td>
              <td>Food Crops Grown Under Cover (except growing mushrooms)</td>
              <td>111419</td>
              <td>Other Food Crops Grown Under Cover</td>
            </tr>
            <tr>
              <td>0182</td>
              <td>Food Crops Grown Under Cover (growing mushrooms)</td>
              <td>111411</td>
              <td>Mushroom Production</td>
            </tr>
            <tr>
              <td>2099</td>
              <td>
                Food Preparations, NEC (bouillon and potatoes dried and packaged
                with other ingredients produced in dehydrating plants)
              </td>
              <td>311423</td>
              <td>Dried and Dehydrated Food Manufacturing</td>
            </tr>
            <tr>
              <td>2099</td>
              <td>
                Food Preparations, NEC (dry pasta packaged with other
                ingredients made in dry pasta plants)
              </td>
              <td>311823</td>
              <td>Dry Pasta Manufacturing </td>
            </tr>
            <tr>
              <td>2099</td>
              <td>
                Food Preparations, NEC (except bouillon, marshmallow creme,
                spices, peanut butter, perishable prepared foods, tortillas, tea
                and tea extracts, dry dip mix, prepared dips, dry salad dressing
                mix, seasoning mix, dried potatoes, pasta, and rice mixed with
                other ingredients in mills or dehydrating plants, reducing maple
                sap to maple syrup, wool grease, and vinegar)
              </td>
              <td>311999</td>
              <td>All Other Miscellaneous Food Manufacturing</td>
            </tr>
            <tr>
              <td>2099</td>
              <td>Food Preparations, NEC (marshmallow creme)</td>
              <td>311340</td>
              <td>Nonchocolate Confectionery Manufacturing</td>
            </tr>
            <tr>
              <td>2099</td>
              <td>Food Preparations, NEC (peanut butter)</td>
              <td>311911</td>
              <td>Roasted Nuts and Peanut Butter Manufacturing</td>
            </tr>
            <tr>
              <td>2099</td>
              <td>Food Preparations, NEC (perishable prepared food)</td>
              <td>311991</td>
              <td>Perishable Prepared Food Manufacturing</td>
            </tr>
            <tr>
              <td>2099</td>
              <td>
                Food Preparations, NEC (reducing maple sap to maple syrup)
              </td>
              <td>111998</td>
              <td>All Other Miscellaneous Crop Farming</td>
            </tr>
            <tr>
              <td>2099</td>
              <td>
                Food Preparations, NEC (rice, uncooked and packaged with other
                ingredients made in rice mills)
              </td>
              <td>311212</td>
              <td>Rice Milling</td>
            </tr>
            <tr>
              <td>2099</td>
              <td>
                Food Preparations, NEC (spices, dry dip mix, dry salad dressing
                mix, and seasoning mix)
              </td>
              <td>311942</td>
              <td>Spice and Extract Manufacturing</td>
            </tr>
            <tr>
              <td>2099</td>
              <td>Food Preparations, NEC (tea)</td>
              <td>311920</td>
              <td>Coffee and Tea Manufacturing</td>
            </tr>
            <tr>
              <td>2099</td>
              <td>Food Preparations, NEC (tortillas)</td>
              <td>311830</td>
              <td>Tortilla Manufacturing </td>
            </tr>
            <tr>
              <td>2099</td>
              <td>Food Preparations, NEC (vinegar, prepared dip)</td>
              <td>311941</td>
              <td>
                Mayonnaise, Dressing, and Other Prepared Sauce Manufacturing
              </td>
            </tr>
            <tr>
              <td>3556</td>
              <td>Food Products Machinery</td>
              <td>333294</td>
              <td>Food Product Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>5139</td>
              <td>Footwear (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5139</td>
              <td>Footwear (business to business electronic markets)</td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5139</td>
              <td>Footwear (footwear sold via retail method)</td>
              <td>448210</td>
              <td>Shoe Stores</td>
            </tr>
            <tr>
              <td>5139</td>
              <td>
                Footwear (merchant wholesalers except those selling footwear via
                retail method)
              </td>
              <td>424340</td>
              <td>Footwear Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>3149</td>
              <td>Footwear, Except Rubber, NEC</td>
              <td>316219</td>
              <td>Other Footwear Manufacturing</td>
            </tr>
            <tr>
              <td>6082</td>
              <td>
                Foreign Trade and International Banking Institutions (except
                international trade financing)
              </td>
              <td>522298</td>
              <td>All Other Nondepository Credit Intermediation</td>
            </tr>
            <tr>
              <td>6082</td>
              <td>
                Foreign Trade and International Banking Institutions
                (international trade financing)
              </td>
              <td>522293</td>
              <td>International Trade Financing</td>
            </tr>
            <tr>
              <td>0831</td>
              <td>
                Forest Nurseries and Gathering of Forest Products (forest
                products, except gathering of maple sap)
              </td>
              <td>113210</td>
              <td>Forest Nurseries and Gathering of Forest Products</td>
            </tr>
            <tr>
              <td>0831</td>
              <td>
                Forest Nurseries and Gathering of Forest Products (gathering
                maple sap)
              </td>
              <td>111998</td>
              <td>All Other Miscellaneous Crop Farming</td>
            </tr>
            <tr>
              <td>0851</td>
              <td>Forestry Services</td>
              <td>115310</td>
              <td>Support Activities for Forestry</td>
            </tr>
            <tr>
              <td>4432</td>
              <td>
                Freight Transportation on the Great Lakes - St. Lawrence Seaway
              </td>
              <td>483113</td>
              <td>Coastal and Great Lakes Freight Transportation</td>
            </tr>
            <tr>
              <td>5148</td>
              <td>Fresh Fruits and Vegetables (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5148</td>
              <td>
                Fresh Fruits and Vegetables (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5148</td>
              <td>
                Fresh Fruits and Vegetables (fresh fruits and vegetables sold
                via retail method)
              </td>
              <td>445230</td>
              <td>Fruit and Vegetable Markets</td>
            </tr>
            <tr>
              <td>5148</td>
              <td>
                Fresh Fruits and Vegetables (merchant wholesalers except those
                selling fresh fruits and vegetables via retail method)
              </td>
              <td>424480</td>
              <td>Fresh Fruit and Vegetable Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>2053</td>
              <td>Frozen Bakery Products, Except Bread</td>
              <td>311813</td>
              <td>Frozen Cakes, Pies, and Other Pastries Manufacturing</td>
            </tr>
            <tr>
              <td>2037</td>
              <td>Frozen Fruits, Fruit Juices, and Vegetables</td>
              <td>311411</td>
              <td>Frozen Fruit, Juice, and Vegetable Manufacturing</td>
            </tr>
            <tr>
              <td>2038</td>
              <td>Frozen Specialties, NEC</td>
              <td>311412</td>
              <td>Frozen Specialty Food Manufacturing</td>
            </tr>
            <tr>
              <td>5431</td>
              <td>
                Fruit and Vegetable Markets (except temporary fruit and
                vegetable stands)
              </td>
              <td>445230</td>
              <td>Fruit and Vegetable Markets</td>
            </tr>
            <tr>
              <td>5431</td>
              <td>
                Fruit and Vegetable Markets (temporary fruit and vegetable
                stands)
              </td>
              <td>454390</td>
              <td>Other Direct Selling Establishments</td>
            </tr>
            <tr>
              <td>0179</td>
              <td>Fruits and Tree Nuts, NEC (combination farms)</td>
              <td>111336</td>
              <td>Fruit and Tree Nut Combination Farming</td>
            </tr>
            <tr>
              <td>0179</td>
              <td>Fruits and Tree Nuts, NEC (except combination farms) </td>
              <td>111339</td>
              <td>Other Noncitrus Fruit Farming</td>
            </tr>
            <tr>
              <td>5989</td>
              <td>Fuel Dealers, NEC</td>
              <td>454319</td>
              <td>Other Fuel Dealers</td>
            </tr>
            <tr>
              <td>5983</td>
              <td>Fuel Oil Dealers</td>
              <td>454311</td>
              <td>Heating Oil Dealers</td>
            </tr>
            <tr>
              <td>6099</td>
              <td>
                Functions Related to Depository Banking, NEC (escrow and
                fiduciary agencies)
              </td>
              <td>523991</td>
              <td>Trust, Fiduciary, and Custody Activities</td>
            </tr>
            <tr>
              <td>6099</td>
              <td>
                Functions Related to Depository Banking, NEC (foreign currency
                exchange)
              </td>
              <td>523130</td>
              <td>Commodity Contracts Dealing</td>
            </tr>
            <tr>
              <td>6099</td>
              <td>
                Functions Related to Depository Banking, NEC (electronic funds
                transfer networks and clearinghouse associations)
              </td>
              <td>522320</td>
              <td>
                Financial Transactions Processing, Reserve, and Clearinghouse
                Activities
              </td>
            </tr>
            <tr>
              <td>6099</td>
              <td>
                Functions Related to Depository Banking, NEC (except electronic
                funds transfer networks and clearinghouses, foreign currency
                exchanges, escrow and fiduciary agencies and deposit brokers)
              </td>
              <td>522390</td>
              <td>Other Activities Related to Credit Intermediation</td>
            </tr>
            <tr>
              <td>7261</td>
              <td>Funeral Services and Crematories (crematories)</td>
              <td>812220</td>
              <td>Cemeteries and Crematories</td>
            </tr>
            <tr>
              <td>7261</td>
              <td>
                Funeral Services and Crematories (funeral homes and services)
              </td>
              <td>812210</td>
              <td>Funeral Homes and Funeral Services</td>
            </tr>
            <tr>
              <td>2371</td>
              <td>Fur Goods (except contractors)</td>
              <td>315292</td>
              <td>Fur and Leather Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2371</td>
              <td>Fur Goods (men's and boys' contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2371</td>
              <td>Fur Goods (women's, girls', and infants' contractors)</td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>0271</td>
              <td>Fur-Bearing Animals and Rabbits</td>
              <td>112930</td>
              <td>Fur-Bearing Animal and Rabbit Production</td>
            </tr>
            <tr>
              <td>5712</td>
              <td>
                Furniture Stores (custom made upholstered household furniture)
              </td>
              <td>337121</td>
              <td>Upholstered Household Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>5021</td>
              <td>Furniture (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5021</td>
              <td>Furniture (business to business electronic markets)</td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5021</td>
              <td>Furniture (furniture sold via the retail method)</td>
              <td>442110</td>
              <td>Furniture Stores</td>
            </tr>
            <tr>
              <td>5021</td>
              <td>
                Furniture (merchant wholesalers except those selling via retail
                method)
              </td>
              <td>423210</td>
              <td>Furniture Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>2599</td>
              <td>Furniture and Fixtures, NEC (except hospital beds)</td>
              <td>337127</td>
              <td>Institutional Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>2599</td>
              <td>Furniture and Fixtures, NEC (hospital beds)</td>
              <td>337127</td>
              <td>Institutional Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>5712</td>
              <td>
                Furniture Stores (custom made nonupholstered wood household
                furniture except cabinets)
              </td>
              <td>337122</td>
              <td>Nonupholstered Wood Household Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>5712</td>
              <td>Furniture Stores (custom wood cabinets)</td>
              <td>337110</td>
              <td>Wood Kitchen Cabinet and Countertop Manufacturing</td>
            </tr>
            <tr>
              <td>5712</td>
              <td>Furniture Stores (except custom furniture and cabinets)</td>
              <td>442110</td>
              <td>Furniture Stores</td>
            </tr>
            <tr>
              <td>3944</td>
              <td>
                Games, Toys, and Children's Vehicles, Except Dolls and Bicycles
                (metal tricycles)
              </td>
              <td>336991</td>
              <td>Motorcycle, Bicycle, and Parts Manufacturing</td>
            </tr>
            <tr>
              <td>3944</td>
              <td>
                Games, Toys, and Children's Vehicles, Except Dolls and Bicycles
                (except metal tricycles)
              </td>
              <td>339932</td>
              <td>Game, Toy, and Children's Vehicle Manufacturing</td>
            </tr>
            <tr>
              <td>7212</td>
              <td>
                Garment Pressing, and Agents for Laundries and Drycleaners
              </td>
              <td>812320</td>
              <td>Drycleaning and Laundry Services (except Coin-Operated)</td>
            </tr>
            <tr>
              <td>4932</td>
              <td>
                Gas and Other Services Combined (natural gas distribution)
              </td>
              <td>221210</td>
              <td>Natural Gas Distribution</td>
            </tr>
            <tr>
              <td>3053</td>
              <td>Gaskets, Packing, and Sealing Devices</td>
              <td>339991</td>
              <td>Gasket, Packing, and Sealing Device Manufacturing</td>
            </tr>
            <tr>
              <td>5541</td>
              <td>
                Gasoline Service Station (gasoline station with convenience
                store)
              </td>
              <td>447110</td>
              <td>Gasoline Stations with Convenience Stores</td>
            </tr>
            <tr>
              <td>5541</td>
              <td>
                Gasoline Service Station (gasoline station without convenience
                store)
              </td>
              <td>447190</td>
              <td>Other Gasoline Stations</td>
            </tr>
            <tr>
              <td>7538</td>
              <td>General Automotive Repair Shops</td>
              <td>811111</td>
              <td>General Automotive Repair</td>
            </tr>
            <tr>
              <td>1541</td>
              <td>
                General Contractors - Industrial Buildings and Warehouses
                (general contractors of grain elevators; dry cleaning plants;
                and manufacturing, industrial, and public warehouses)
              </td>
              <td>236220</td>
              <td>Commercial and Institutional Building Construction</td>
            </tr>
            <tr>
              <td>1542</td>
              <td>
                General Contractors - Nonresidential Buildings, Other than
                Industrial Buildings and Warehouses
              </td>
              <td>236220</td>
              <td>Commercial and Institutional Building Construction</td>
            </tr>
            <tr>
              <td>1522</td>
              <td>
                General Contractors - Residential Buildings Other Than
                Single-Family (dormitory, barrack, hotel, and motel construction
                contractors)
              </td>
              <td>236220</td>
              <td>Commercial and Institutional Building Construction</td>
            </tr>
            <tr>
              <td>1522</td>
              <td>
                General Contractors - Residential Buildings Other Than
                Single-Family (except remodeling contractors, hotel and motel
                construction contractors, and dormitory and barrack construction
                contractors)
              </td>
              <td>236116</td>
              <td>
                New Multifamily Housing Construction (except Operative Builders)
              </td>
            </tr>
            <tr>
              <td>1522</td>
              <td>
                General Contractors - Residential Buildings Other Than
                Single-Family (remodeling contractors)
              </td>
              <td>236118</td>
              <td>Residential Remodelers</td>
            </tr>
            <tr>
              <td>1521</td>
              <td>
                General Contractors - Single-Family Houses (remodeling
                contractors)
              </td>
              <td>236118</td>
              <td>Residential Remodelers</td>
            </tr>
            <tr>
              <td>1541</td>
              <td>
                General Contractors Industrial Buildings and Warehouses ( except
                grain elevators; drycleaning plants; and manufacturing, public,
                and industrial warehouses)
              </td>
              <td>236210</td>
              <td>Industrial Building Construction</td>
            </tr>
            <tr>
              <td>1521</td>
              <td>
                General Contractors--Single Family Houses (except remodeling
                contractors)
              </td>
              <td>236115</td>
              <td>
                New Single-Family Housing Construction (except Operative
                Builders)
              </td>
            </tr>
            <tr>
              <td>0191</td>
              <td>General Farms, Primarily Crop</td>
              <td>111998</td>
              <td>All Other Miscellaneous Crop Farming</td>
            </tr>
            <tr>
              <td>0291</td>
              <td>General Farms, Primarily Livestock and Animal Specialties</td>
              <td>112990</td>
              <td>All Other Animal Production</td>
            </tr>
            <tr>
              <td>9199</td>
              <td>General Government, NEC</td>
              <td>921190</td>
              <td>Other General Government Support</td>
            </tr>
            <tr>
              <td>3569</td>
              <td>
                General Industrial Machinery and Equipment, NEC (electric
                swimming pool heaters)
              </td>
              <td>333414</td>
              <td>
                Heating Equipment (except Warm Air Furnaces) Manufacturing
              </td>
            </tr>
            <tr>
              <td>3569</td>
              <td>
                General Industrial Machinery and Equipment, NEC (except fire
                hoses and electric swimming pool heaters)
              </td>
              <td>333999</td>
              <td>
                All Other Miscellaneous General Purpose Machinery Manufacturing
              </td>
            </tr>
            <tr>
              <td>3569</td>
              <td>
                General Industrial Machinery and Equipment, NEC (textile fire
                hose)
              </td>
              <td>314999</td>
              <td>All Other Miscellaneous Textile Product Mills</td>
            </tr>
            <tr>
              <td>0219</td>
              <td>General Livestock, Except Dairy and Poultry</td>
              <td>112990</td>
              <td>All Other Animal Production</td>
            </tr>
            <tr>
              <td>8062</td>
              <td>General Medical and Surgical Hospitals</td>
              <td>622110</td>
              <td>General Medical and Surgical Hospitals</td>
            </tr>
            <tr>
              <td>4225</td>
              <td>
                General Warehousing and Storage (except self-storage and
                miniwarehouses)
              </td>
              <td>493110</td>
              <td>General Warehousing and Storage</td>
            </tr>
            <tr>
              <td>4225</td>
              <td>
                General Warehousing and Storage (miniwarehouses and self-storage
                units)
              </td>
              <td>531130</td>
              <td>Lessors of Miniwarehouses and Self-Storage Units</td>
            </tr>
            <tr>
              <td>5947</td>
              <td>Gift, Novelty, and Souvenir Shops</td>
              <td>453220</td>
              <td>Gift, Novelty, and Souvenir Stores</td>
            </tr>
            <tr>
              <td>2361</td>
              <td>
                Girls', Children's, and Infants' Dresses, Blouses, and Shirts
                (boys' contractors)
              </td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2361</td>
              <td>
                Girls', Children's, and Infants' Dresses, Blouses, and Shirts
                (boys' shirts except contractors)
              </td>
              <td>315223</td>
              <td>
                Men's and Boys' Cut and Sew Shirt (except Work Shirt)
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2361</td>
              <td>
                Girls', Children's, and Infants' Dresses, Blouses, and Shirts
                (girls' and infants' contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>2361</td>
              <td>
                Girls', Children's, and Infants' Dresses, Blouses, and Shirts
                (girls' blouses and shirts except contractors)
              </td>
              <td>315232</td>
              <td>
                Women's and Girls' Cut and Sew Blouse and Shirt Manufacturing
              </td>
            </tr>
            <tr>
              <td>2361</td>
              <td>
                Girls', Children's, and Infants' Dresses, Blouses, and Shirts
                (girls' dresses except contractors)
              </td>
              <td>315233</td>
              <td>Women's and Girls' Cut and Sew Dress Manufacturing</td>
            </tr>
            <tr>
              <td>2361</td>
              <td>
                Girls', Children's, and Infants' Dresses, Blouses, and Shirts
                (infants' except contractors)
              </td>
              <td>315291</td>
              <td>Infants' Cut and Sew Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2369</td>
              <td>
                Girls', Children's, and Infants' Outerwear, NEC (boys'
                contractors)
              </td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2369</td>
              <td>
                Girls', Children's, and Infants' Outerwear, NEC (boys' other
                outerwear except contractors)
              </td>
              <td>315228</td>
              <td>Men's and Boys' Cut and Sew Other Outerwear Manufacturing</td>
            </tr>
            <tr>
              <td>2369</td>
              <td>
                Girls', Children's, and Infants' Outerwear, NEC (boys' robes
                except contractors)
              </td>
              <td>315221</td>
              <td>
                Men's and Boys' Cut and Sew Underwear and Nightwear
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2369</td>
              <td>
                Girls', Children's, and Infants' Outerwear, NEC (boys' suits and
                coats except contractors)
              </td>
              <td>315222</td>
              <td>
                Men's and Boys' Cut and Sew Suit, Coat, and Overcoat
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2369</td>
              <td>
                Girls', Children's, and Infants' Outerwear, NEC (boys' trousers,
                slacks, and jeans except contractors)
              </td>
              <td>315224</td>
              <td>
                Men's and Boys' Cut and Sew Trouser, Slack and Jean
                Manufacturing{" "}
              </td>
            </tr>
            <tr>
              <td>2369</td>
              <td>
                Girls', Children's, and Infants' Outerwear, NEC (girls' and
                infants' contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>2369</td>
              <td>
                Girls', Children's, and Infants' Outerwear, NEC (girls' other
                outerwear except contractors)
              </td>
              <td>315239</td>
              <td>
                Women's and Girls' Cut and Sew Other Outerwear Manufacturing{" "}
              </td>
            </tr>
            <tr>
              <td>2369</td>
              <td>
                Girls', Children's, and Infants' Outerwear, NEC (girls' robes
                except contractors)
              </td>
              <td>315231</td>
              <td>
                Women's and Girls' Cut and Sew Lingerie, Loungewear, and
                Nightwear Manufacturing
              </td>
            </tr>
            <tr>
              <td>2369</td>
              <td>
                Girls', Children's, and Infants' Outerwear, NEC (girls' suits,
                coats, jackets, and skirts except contractors)
              </td>
              <td>315234</td>
              <td>
                Women's and Girls' Cut and Sew Suit, Coat, Tailored Jacket, and
                Skirt Manufacturing
              </td>
            </tr>
            <tr>
              <td>2369</td>
              <td>
                Girls', Children's, and Infants' Outerwear, NEC (infants' except
                contractors)
              </td>
              <td>315291</td>
              <td>Infants' Cut and Sew Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>1793</td>
              <td>Glass and Glazing Work</td>
              <td>238150</td>
              <td>Glass and Glazing Contractors</td>
            </tr>
            <tr>
              <td>3221</td>
              <td>Glass Containers</td>
              <td>327213</td>
              <td>Glass Container Manufacturing</td>
            </tr>
            <tr>
              <td>3231</td>
              <td>Glass Products Made of Purchased Glass</td>
              <td>327215</td>
              <td>Glass Product Manufacturing Made of Purchased Glass</td>
            </tr>
            <tr>
              <td>1041</td>
              <td>Gold Ores</td>
              <td>212221</td>
              <td>Gold Ore Mining</td>
            </tr>
            <tr>
              <td>5153</td>
              <td>Grain and Field Beans (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5153</td>
              <td>
                Grain and Field Beans (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5153</td>
              <td>
                Grain and Field Beans (grain and field beans sold via retail
                method)
              </td>
              <td>444220</td>
              <td>Nurseries, Garden Centers, and Farm Supply Stores</td>
            </tr>
            <tr>
              <td>5153</td>
              <td>
                Grain and Field Beans (merchant wholesalers except those selling
                grains and field beans via retail method)
              </td>
              <td>424510</td>
              <td>Grain and Field Bean Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>0172</td>
              <td>Grapes</td>
              <td>111332</td>
              <td>Grape Vineyards</td>
            </tr>
            <tr>
              <td>3321</td>
              <td>Gray and Ductile Iron Foundries</td>
              <td>331511</td>
              <td>Iron Foundries</td>
            </tr>
            <tr>
              <td>2771</td>
              <td>Greeting Cards (flexographic printing of greeting cards)</td>
              <td>323112</td>
              <td>Commercial Flexographic Printing</td>
            </tr>
            <tr>
              <td>2771</td>
              <td>Greeting Cards (gravure printing of greeting cards)</td>
              <td>323111</td>
              <td>Commercial Gravure Printing</td>
            </tr>
            <tr>
              <td>2771</td>
              <td>Greeting Cards (Internet greeting card publishers)</td>
              <td>519130</td>
              <td>
                Internet Publishing and Broadcasting and Web Search Portals
              </td>
            </tr>
            <tr>
              <td>2771</td>
              <td>Greeting Cards (lithographic printing of greeting cards)</td>
              <td>323110</td>
              <td>Commercial Lithographic Printing</td>
            </tr>
            <tr>
              <td>2771</td>
              <td>Greeting Cards (other printing of greeting cards)</td>
              <td>323119</td>
              <td>Other Commercial Printing </td>
            </tr>
            <tr>
              <td>2771</td>
              <td>
                Greeting Cards (publishing greeting cards except Internet
                greeting card publishers)
              </td>
              <td>511191</td>
              <td>Greeting Card Publishers</td>
            </tr>
            <tr>
              <td>2771</td>
              <td>Greeting Cards (screen printing of greeting cards)</td>
              <td>323113</td>
              <td>Commercial Screen Printing</td>
            </tr>
            <tr>
              <td>5149</td>
              <td>Groceries and Related Products, NEC (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5149</td>
              <td>
                Groceries and Related Products, NEC (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5149</td>
              <td>
                Groceries and Related Products, NEC (groceries and related
                products, except pet food, sold via retail method)
              </td>
              <td>445299</td>
              <td>All Other Specialty Food Stores</td>
            </tr>
            <tr>
              <td>5149</td>
              <td>
                Groceries and Related Products, NEC (merchant wholesalers except
                processed bottled water manufacturing and merchant wholesalers
                selling groceries and related products via retail method)
              </td>
              <td>424490</td>
              <td>Other Grocery and Related Products Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5149</td>
              <td>
                Groceries and Related Products, NEC (pet food sold via retail
                method)
              </td>
              <td>453910</td>
              <td>Pet and Pet Supplies Stores</td>
            </tr>
            <tr>
              <td>5149</td>
              <td>
                Groceries and Related Products, NEC (processed bottled water
                manufacturing){" "}
              </td>
              <td>312112</td>
              <td>Bottled Water Manufacturing</td>
            </tr>
            <tr>
              <td>5141</td>
              <td>Groceries, General Line (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5141</td>
              <td>
                Groceries, General Line (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5141</td>
              <td>
                Groceries, General Line (general line groceries sold via retail
                method)
              </td>
              <td>445110</td>
              <td>
                Supermarkets and Other Grocery (except Convenience) Stores
              </td>
            </tr>
            <tr>
              <td>5141</td>
              <td>
                Groceries, General Line (merchant wholesalers except those
                selling general line groceries via retail method)
              </td>
              <td>424410</td>
              <td>General Line Grocery Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5411</td>
              <td>Grocery Stores (convenience store with gas)</td>
              <td>447110</td>
              <td>Gasoline Stations with Convenience Stores</td>
            </tr>
            <tr>
              <td>5411</td>
              <td>Grocery Stores (convenience stores without gas)</td>
              <td>445120</td>
              <td>Convenience Stores</td>
            </tr>
            <tr>
              <td>5411</td>
              <td>
                Grocery Stores (except convenience stores, freezer plans, and
                grocery stores with substantial general merchandise)
              </td>
              <td>445110</td>
              <td>
                Supermarkets and Other Grocery (except Convenience) Stores
              </td>
            </tr>
            <tr>
              <td>5411</td>
              <td>Grocery Stores (frozen food and freezer plan providers)</td>
              <td>454390</td>
              <td>Other Direct Selling Establishments</td>
            </tr>
            <tr>
              <td>5411</td>
              <td>
                Grocery Stores (grocery stores and supermarkets selling
                substantial amounts of nonfood items)
              </td>
              <td>452910</td>
              <td>Warehouse Clubs and Supercenters</td>
            </tr>
            <tr>
              <td>3769</td>
              <td>
                Guided Missile and Space Vehicle Parts and Auxiliary Equipment,
                NEC (except research and development not producing prototypes)
              </td>
              <td>336419</td>
              <td>
                Other Guided Missile and Space Vehicle Parts and Auxiliary
                Equipment Manufacturing
              </td>
            </tr>
            <tr>
              <td>3769</td>
              <td>
                Guided Missile and Space Vehicle Parts and Auxiliary Equipment,
                NEC (research and development not producing prototypes)
              </td>
              <td>541712</td>
              <td>
                Research and Development in the Physical, Engineering, and Life
                Sciences (except biotechnology)
              </td>
            </tr>
            <tr>
              <td>3764</td>
              <td>
                Guided Missile and Space Vehicle Propulsion Units and Propulsion
                Unit Parts (except research and development not producing
                prototypes))
              </td>
              <td>336415</td>
              <td>
                Guided Missile and Space Vehicle Propulsion Unit and Propulsion
                Unit Parts Manufacturing
              </td>
            </tr>
            <tr>
              <td>3764</td>
              <td>
                Guided Missile and Space Vehicle Propulsion Units and Propulsion
                Unit Parts (research and development not producing prototypes)
              </td>
              <td>541712</td>
              <td>
                Research and Development in the Physical, Engineering, and Life
                Sciences (except biotechnology)
              </td>
            </tr>
            <tr>
              <td>3761</td>
              <td>
                Guided Missiles and Space Vehicles (except research and
                development not producing prototypes)
              </td>
              <td>336414</td>
              <td>Guided Missile and Space Vehicle Manufacturing</td>
            </tr>
            <tr>
              <td>3761</td>
              <td>
                Guided Missiles and Space Vehicles (research and development not
                producing prototypes)
              </td>
              <td>541712</td>
              <td>
                Research and Development in the Physical, Engineering, and Life
                Sciences (except biotechnology)
              </td>
            </tr>
            <tr>
              <td>2861</td>
              <td>Gum and Wood Chemicals</td>
              <td>325191</td>
              <td>Gum and Wood Chemical Manufacturing</td>
            </tr>
            <tr>
              <td>3275</td>
              <td>Gypsum Products</td>
              <td>327420</td>
              <td>Gypsum Product Manufacturing</td>
            </tr>
            <tr>
              <td>3423</td>
              <td>Hand and Edge Tools, Except Machine Tools and Handsaws</td>
              <td>332212</td>
              <td>Hand and Edge Tool Manufacturing</td>
            </tr>
            <tr>
              <td>5072</td>
              <td>Hardware (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5072</td>
              <td>Hardware (business to business electronic markets)</td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5072</td>
              <td>Hardware (hardware sold via retail method)</td>
              <td>444130</td>
              <td>Hardware Stores</td>
            </tr>
            <tr>
              <td>5072</td>
              <td>
                Hardware (merchant wholesalers except those selling hardware via
                retail method)
              </td>
              <td>423710</td>
              <td>Hardware Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5251</td>
              <td>Hardware Stores</td>
              <td>444130</td>
              <td>Hardware Stores</td>
            </tr>
            <tr>
              <td>3429</td>
              <td>
                Hardware, NEC (except fire hose nozzles, hose couplings, vacuum
                and insulated bottles, jugs and chests, fireplace fixtures, time
                locks, turnbuckles, pulleys, tackle blocks, luggage and utility
                racks, sleep sofa mechanisms and chair glides, traps, handcuffs
                and leg irons, ladder jacks, and other like metal products)
              </td>
              <td>332510</td>
              <td>Hardware Manufacturing</td>
            </tr>
            <tr>
              <td>3429</td>
              <td>Hardware, NEC (fire hose nozzles and hose couplings)</td>
              <td>332919</td>
              <td>Other Metal Valve and Pipe Fitting Manufacturing</td>
            </tr>
            <tr>
              <td>3429</td>
              <td>
                Hardware, NEC (fireplace fixtures, traps, handcuffs and leg
                irons, ladder jacks, and other like metal products)
              </td>
              <td>332999</td>
              <td>
                All Other Miscellaneous Fabricated Metal Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>3429</td>
              <td>Hardware, NEC (luggage and utility racks)</td>
              <td>336399</td>
              <td>All Other Motor Vehicle Parts Manufacturing</td>
            </tr>
            <tr>
              <td>3429</td>
              <td>
                Hardware, NEC (pulleys, tackle blocks, block and tackle
                assemblies)
              </td>
              <td>333923</td>
              <td>
                Overhead Traveling Crane, Hoist, and Monorail System
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3429</td>
              <td>Hardware, NEC (sleep sofa mechanisms and chair glides)</td>
              <td>337215</td>
              <td>Showcase, Partition, Shelving, and Locker Manufacturing</td>
            </tr>
            <tr>
              <td>3429</td>
              <td>Hardware, NEC (time locks)</td>
              <td>334518</td>
              <td>Watch, Clock, and Part Manufacturing</td>
            </tr>
            <tr>
              <td>3429</td>
              <td>Hardware, NEC (turnbuckles and hose clamps)</td>
              <td>332722</td>
              <td>Bolt, Nut, Screw, Rivet, and Washer Manufacturing</td>
            </tr>
            <tr>
              <td>3429</td>
              <td>
                Hardware, NEC (vacuum and insulated bottles, jugs, and chests)
              </td>
              <td>332439</td>
              <td>Other Metal Container Manufacturing</td>
            </tr>
            <tr>
              <td>2426</td>
              <td>
                Hardwood Dimension and Flooring Mills (hardwood cut stock,
                resawing hardwood lumber, and planing purchased hardwood lumber
                except flooring)
              </td>
              <td>321912</td>
              <td>Cut Stock, Resawing Lumber, and Planing</td>
            </tr>
            <tr>
              <td>2426</td>
              <td>
                Hardwood Dimension and Flooring Mills (hardwood dimension lumber
                made from logs or bolts)
              </td>
              <td>321113</td>
              <td>Sawmills</td>
            </tr>
            <tr>
              <td>2426</td>
              <td>Hardwood Dimension and Flooring Mills (hardwood flooring)</td>
              <td>321918</td>
              <td>Other Millwork (including Flooring ) </td>
            </tr>
            <tr>
              <td>2426</td>
              <td>
                Hardwood Dimension and Flooring Mills (wood furniture frames and
                finished furniture parts)
              </td>
              <td>337215</td>
              <td>Showcase, Partition, Shelving, and Locker Manufacturing</td>
            </tr>
            <tr>
              <td>2435</td>
              <td>Hardwood Veneer and Plywood</td>
              <td>321211</td>
              <td>Hardwood Veneer and Plywood Manufacturing</td>
            </tr>
            <tr>
              <td>2353</td>
              <td>Hats, Caps, and Millinery (except contractors)</td>
              <td>315991</td>
              <td>Hat, Cap, and Millinery Manufacturing</td>
            </tr>
            <tr>
              <td>2353</td>
              <td>Hats, Caps, and Millinery (men's and boys' contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2353</td>
              <td>
                Hats, Caps, and Millinery (women's, girls', and infants'
                contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>8099</td>
              <td>Health and Allied Services, NEC (blood and organ banks)</td>
              <td>621991</td>
              <td>Blood and Organ Banks</td>
            </tr>
            <tr>
              <td>8099</td>
              <td>Health and Allied Services, NEC (childbirth preparation)</td>
              <td>621410</td>
              <td>Family Planning Centers</td>
            </tr>
            <tr>
              <td>8099</td>
              <td>
                Health and Allied Services, NEC (except blood and organ banks,
                medical artists, medical photography, and childbirth preparation
                classes)
              </td>
              <td>621999</td>
              <td>All Other Miscellaneous Ambulatory Health Care Services</td>
            </tr>
            <tr>
              <td>8099</td>
              <td>Health and Allied Services, NEC (medical artists)</td>
              <td>541430</td>
              <td>Graphic Design Services</td>
            </tr>
            <tr>
              <td>8099</td>
              <td>Health and Allied Services, NEC (medical photography)</td>
              <td>541922</td>
              <td>Commercial Photography</td>
            </tr>
            <tr>
              <td>3433</td>
              <td>Heating Equipment, Except Electric and Warm Air Furnaces</td>
              <td>333414</td>
              <td>
                Heating Equipment (except Warm Air Furnaces) Manufacturing
              </td>
            </tr>
            <tr>
              <td>7353</td>
              <td>
                Heavy Construction Equipment Rental and Leasing (crane rental
                with operator)
              </td>
              <td>238990</td>
              <td>All Other Specialty Trade Contractors</td>
            </tr>
            <tr>
              <td>7353</td>
              <td>
                Heavy Construction Equipment Rental and Leasing (heavy
                construction equipment rental without operators)
              </td>
              <td>532412</td>
              <td>
                Construction, Mining, and Forestry Machinery and Equipment
                Rental and Leasing
              </td>
            </tr>
            <tr>
              <td>7353</td>
              <td>
                Heavy Construction Equipment Rental and Leasing (rental of
                construction equipment [except cranes] with operator)
              </td>
              <td>238910</td>
              <td>Site Preparation Contractors</td>
            </tr>
            <tr>
              <td>1629</td>
              <td>
                Heavy Construction NEC (irrigation systems, sewage treatment
                plants, and water treatment plants)
              </td>
              <td>237110</td>
              <td>Water and Sewer Line and Related Structures Construction</td>
            </tr>
            <tr>
              <td>1629</td>
              <td>
                Heavy Construction, NEC (except industrial nonbuilding
                structures, irrigation systems, sewage and water treatment
                plants, petrochemical plants and refineries, power generation
                plants [except hydroelectric dams] transmission and distribution
                stations, right-of-way clearing, line slashing, blasting, and
                trenching)
              </td>
              <td>237990</td>
              <td>Other Heavy and Civil Engineering Construction</td>
            </tr>
            <tr>
              <td>1629</td>
              <td>
                Heavy Construction, NEC (Industrial nonbuilding structures
                [except petrochemical plants and petroleum refineries])
              </td>
              <td>236210</td>
              <td>Industrial Building Construction</td>
            </tr>
            <tr>
              <td>1629</td>
              <td>
                Heavy Construction, NEC (petrochemical plants and refineries)
              </td>
              <td>237120</td>
              <td>Oil and Gas Pipeline and Related Structures Construction</td>
            </tr>
            <tr>
              <td>1629</td>
              <td>
                Heavy Construction, NEC (power generation plants [except
                hydroelectric dams], transmission stations, and distribution
                stations)
              </td>
              <td>237130</td>
              <td>
                Power and Communication Line and Related Structures Construction
              </td>
            </tr>
            <tr>
              <td>1629</td>
              <td>
                Heavy Construction, NEC (right-of-way clearing and line
                slashing, blasting, and trenching)
              </td>
              <td>238910</td>
              <td>Site Preparation Contractors</td>
            </tr>
            <tr>
              <td>7363</td>
              <td>
                Help Supply Services (employee leasing services, professional
                employer organizations)
              </td>
              <td>561330</td>
              <td>Professional Employer Organizations</td>
            </tr>
            <tr>
              <td>7363</td>
              <td>Help Supply Services (temporary help services)</td>
              <td>561320</td>
              <td>Temporary Help Services</td>
            </tr>
            <tr>
              <td>1611</td>
              <td>Highway and Street Construction, Except Elevated Highways</td>
              <td>237310</td>
              <td>Highway, Street, and Bridge Construction</td>
            </tr>
            <tr>
              <td>5945</td>
              <td>Hobby, Toy, and Game Stores</td>
              <td>451120</td>
              <td>Hobby, Toy, and Game Stores</td>
            </tr>
            <tr>
              <td>0213</td>
              <td>Hogs</td>
              <td>112210</td>
              <td>Hog and Pig Farming</td>
            </tr>
            <tr>
              <td>8082</td>
              <td>Home Health Care Services</td>
              <td>621610</td>
              <td>Home Health Care Services</td>
            </tr>
            <tr>
              <td>5023</td>
              <td>Homefurnishings (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5023</td>
              <td>Homefurnishings (business to business electronic markets)</td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5023</td>
              <td>Homefurnishings (floor coverings sold via retail method)</td>
              <td>442210</td>
              <td>Floor Covering Stores</td>
            </tr>
            <tr>
              <td>5023</td>
              <td>
                Homefurnishings (merchant wholesalers except those selling via
                retail method)
              </td>
              <td>423220</td>
              <td>Home Furnishing Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>0272</td>
              <td>Horses and Other Equines</td>
              <td>112920</td>
              <td>Horse and Other Equine Production</td>
            </tr>
            <tr>
              <td>2252</td>
              <td>
                Hosiery, NEC (dyeing and finishing hosiery , except sheer,
                without knitting hosiery)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>2252</td>
              <td>
                Hosiery, NEC (except girls' full-length and knee-length sheer
                hosiery and dyeing and finishing hosiery without knitting
                hosiery)
              </td>
              <td>315119</td>
              <td>Other Hosiery and Sock Mills</td>
            </tr>
            <tr>
              <td>2252</td>
              <td>
                Hosiery, NEC (girls' full length and knee length sheer hosiery)
              </td>
              <td>315111</td>
              <td>Sheer Hosiery Mills</td>
            </tr>
            <tr>
              <td>6324</td>
              <td>
                Hospital and Medical Service Plans (health and medical
                insurers-direct)
              </td>
              <td>524114</td>
              <td>Direct Health and Medical Insurance Carriers</td>
            </tr>
            <tr>
              <td>6324</td>
              <td>Hospital and Medical Service Plans (reinsurers)</td>
              <td>524130</td>
              <td>Reinsurance Carriers</td>
            </tr>
            <tr>
              <td>6324</td>
              <td>Hospital and Medical Service Plans (self insurers)</td>
              <td>525190</td>
              <td>Other Insurance Funds</td>
            </tr>
            <tr>
              <td>7011</td>
              <td>Hotels and Motels (bed and breakfast inns)</td>
              <td>721191</td>
              <td>Bed-and-Breakfast Inns</td>
            </tr>
            <tr>
              <td>7011</td>
              <td>Hotels and Motels (casino hotels)</td>
              <td>721120</td>
              <td>Casino Hotels</td>
            </tr>
            <tr>
              <td>7011</td>
              <td>
                Hotels and Motels (except hotels, motels, and bed and breakfast
                inns)
              </td>
              <td>721199</td>
              <td>All Other Traveler Accommodation</td>
            </tr>
            <tr>
              <td>7011</td>
              <td>
                Hotels and Motels (hotels, except casino hotels, and motels)
              </td>
              <td>721110</td>
              <td>Hotels (except Casino Hotels) and Motels</td>
            </tr>
            <tr>
              <td>3142</td>
              <td>House Slippers</td>
              <td>316212</td>
              <td>House Slipper Manufacturing</td>
            </tr>
            <tr>
              <td>2392</td>
              <td>
                Housefurnishings, Except Curtains and Draperies (blanket,
                laundry, and wardrobe bags)
              </td>
              <td>314911</td>
              <td>Textile Bag Mills</td>
            </tr>
            <tr>
              <td>2392</td>
              <td>
                Housefurnishings, Except Curtains and Draperies (dust rags)
              </td>
              <td>314999</td>
              <td>All Other Miscellaneous Textile Product Mills</td>
            </tr>
            <tr>
              <td>2392</td>
              <td>
                Housefurnishings, Except Curtains and Draperies (except mops,
                dust rags, and bags)
              </td>
              <td>314129</td>
              <td>Other Household Textile Product Mills</td>
            </tr>
            <tr>
              <td>2392</td>
              <td>
                Housefurnishings, Except Curtains and Draperies (floor and dust
                mops)
              </td>
              <td>339994</td>
              <td>Broom, Brush, and Mop Manufacturing</td>
            </tr>
            <tr>
              <td>5722</td>
              <td>Household Appliance Stores</td>
              <td>443111</td>
              <td>Household Appliance Stores</td>
            </tr>
            <tr>
              <td>3639</td>
              <td>
                Household Appliances, NEC (except floor waxing and floor
                polishing machines, and household sewing machines)
              </td>
              <td>335228</td>
              <td>Other Major Household Appliance Manufacturing</td>
            </tr>
            <tr>
              <td>3639</td>
              <td>
                Household Appliances, NEC (floor waxing and floor polishing
                machines)
              </td>
              <td>335212</td>
              <td>Household Vacuum Cleaner Manufacturing</td>
            </tr>
            <tr>
              <td>3639</td>
              <td>Household Appliances, NEC (household sewing machines)</td>
              <td>333298</td>
              <td>All Other Industrial Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>3651</td>
              <td>Household Audio and Video Equipment</td>
              <td>334310</td>
              <td>Audio and Video Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3631</td>
              <td>Household Cooking Equipment</td>
              <td>335221</td>
              <td>Household Cooking Appliance Manufacturing</td>
            </tr>
            <tr>
              <td>2519</td>
              <td>Household Furniture, NEC</td>
              <td>337125</td>
              <td>Household Furniture (except Wood and Metal) Manufacturing</td>
            </tr>
            <tr>
              <td>3633</td>
              <td>Household Laundry Equipment</td>
              <td>335224</td>
              <td>Household Laundry Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3632</td>
              <td>Household Refrigerators and Home and Farm Freezers</td>
              <td>335222</td>
              <td>Household Refrigerator and Home Freezer Manufacturing</td>
            </tr>
            <tr>
              <td>3635</td>
              <td>Household Vacuum Cleaners</td>
              <td>335212</td>
              <td>Household Vacuum Cleaner Manufacturing</td>
            </tr>
            <tr>
              <td>0971</td>
              <td>Hunting and Trapping, and Game Propagation</td>
              <td>114210</td>
              <td>Hunting and Trapping</td>
            </tr>
            <tr>
              <td>2024</td>
              <td>Ice Cream and Frozen Desserts</td>
              <td>311520</td>
              <td>Ice Cream and Frozen Dessert Manufacturing</td>
            </tr>
            <tr>
              <td>2835</td>
              <td>
                In Vitro and In Vivo Diagnostic Substances (except in-vitro
                diagnostic substances)
              </td>
              <td>325412</td>
              <td>Pharmaceutical Preparation Manufacturing</td>
            </tr>
            <tr>
              <td>2835</td>
              <td>
                In Vitro and In Vivo Diagnostic Substances (in-vitro diagnostic
                substances)
              </td>
              <td>325413</td>
              <td>In-Vitro Diagnostic Substance Manufacturing</td>
            </tr>
            <tr>
              <td>8322</td>
              <td>
                Individual and Family Social Services ( community food
                assistance services)
              </td>
              <td>624210</td>
              <td>Community Food Services</td>
            </tr>
            <tr>
              <td>8322</td>
              <td>
                Individual and Family Social Services (child and youth services)
              </td>
              <td>624110</td>
              <td>Child and Youth Services</td>
            </tr>
            <tr>
              <td>8322</td>
              <td>
                Individual and Family Social Services (emergency and relief
                services)
              </td>
              <td>624230</td>
              <td>Emergency and Other Relief Services</td>
            </tr>
            <tr>
              <td>8322</td>
              <td>
                Individual and Family Social Services (except services for
                children, youth, elderly, and disabled; community food
                assistance services; housing services (except temporary),
                emergency and relief services, and government parole or
                probation offices)
              </td>
              <td>624190</td>
              <td>Other Individual and Family Services</td>
            </tr>
            <tr>
              <td>8322</td>
              <td>
                Individual and Family Social Services (government parole and
                probation offices)
              </td>
              <td>922150</td>
              <td>Parole Offices and Probation Offices</td>
            </tr>
            <tr>
              <td>8322</td>
              <td>
                Individual and Family Social Services (housing services except
                temporary shelter)
              </td>
              <td>624229</td>
              <td>Other Community Housing Services</td>
            </tr>
            <tr>
              <td>8322</td>
              <td>
                Individual and Family Social Services (services for the elderly
                and disabled)
              </td>
              <td>624120</td>
              <td>Services for the Elderly and Persons with Disabilities</td>
            </tr>
            <tr>
              <td>8322</td>
              <td>Individual and Family Social Services (temporary shelter)</td>
              <td>624221</td>
              <td>Temporary Shelters</td>
            </tr>
            <tr>
              <td>3564</td>
              <td>
                Industrial and Commercial Fans and Blowers and Air Purification
                Equipment (air purification equipment)
              </td>
              <td>333411</td>
              <td>Air Purification Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3564</td>
              <td>
                Industrial and Commercial Fans and Blowers and Air Purification
                Equipment (fans and blowers)
              </td>
              <td>333412</td>
              <td>Industrial and Commercial Fan and Blower Manufacturing</td>
            </tr>
            <tr>
              <td>3599</td>
              <td>
                Industrial and Commercial Machinery and Equipment, NEC (carnival
                amusement park equipment)
              </td>
              <td>333319</td>
              <td>
                Other Commercial and Service Industry Machinery Manufacturing
              </td>
            </tr>
            <tr>
              <td>3599</td>
              <td>
                Industrial and Commercial Machinery and Equipment, NEC (flexible
                metal hose)
              </td>
              <td>332999</td>
              <td>
                All Other Miscellaneous Fabricated Metal Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>3599</td>
              <td>
                Industrial and Commercial Machinery and Equipment, NEC
                (gasoline, oil, and intake filters for internal combustion
                engines, except for motor vehicles)
              </td>
              <td>336399</td>
              <td>All Other Motor Vehicle Parts Manufacturing</td>
            </tr>
            <tr>
              <td>3599</td>
              <td>
                Industrial and Commercial Machinery and Equipment, NEC (grinding
                castings for the trade)
              </td>
              <td>332813</td>
              <td>
                Electroplating, Plating, Polishing, Anodizing and Coloring
              </td>
            </tr>
            <tr>
              <td>3599</td>
              <td>
                Industrial and Commercial Machinery and Equipment, NEC (machine
                shops)
              </td>
              <td>332710</td>
              <td>Machine Shops</td>
            </tr>
            <tr>
              <td>3599</td>
              <td>
                Industrial and Commercial Machinery and Equipment, NEC (other
                industrial and commercial machinery and equipment)
              </td>
              <td>333999</td>
              <td>
                All Other Miscellaneous General Purpose Machinery Manufacturing
              </td>
            </tr>
            <tr>
              <td>3599</td>
              <td>
                Industrial and Commercial Machinery and Equipment, NEC (water
                leak detectors)
              </td>
              <td>334519</td>
              <td>Other Measuring and Controlling Device Manufacturing</td>
            </tr>
            <tr>
              <td>5113</td>
              <td>
                Industrial and Personal Service Paper (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5113</td>
              <td>
                Industrial and Personal Service Paper (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5113</td>
              <td>
                Industrial and Personal Service Paper (industrial and personal
                service paper sold via retail method)
              </td>
              <td>453998</td>
              <td>
                All Other Miscellaneous Store Retailers (except Tobacco Stores)
              </td>
            </tr>
            <tr>
              <td>5113</td>
              <td>
                Industrial and Personal Service Paper (merchant wholesalers
                except those selling industrial and personal service paper via
                retail method)
              </td>
              <td>424130</td>
              <td>
                Industrial and Personal Service Paper Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>2813</td>
              <td>Industrial Gases</td>
              <td>325120</td>
              <td>Industrial Gas Manufacturing</td>
            </tr>
            <tr>
              <td>2819</td>
              <td>
                Industrial Inorganic Chemicals, NEC (activated carbon and
                charcoal)
              </td>
              <td>325998</td>
              <td>
                All Other Miscellaneous Chemical Product and Preparation
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2819</td>
              <td>Industrial Inorganic Chemicals, NEC (alumina)</td>
              <td>331311</td>
              <td>Alumina Refining</td>
            </tr>
            <tr>
              <td>2819</td>
              <td>
                Industrial Inorganic Chemicals, NEC (except activated carbon and
                charcoal, alumina, recovering sulfur from natural gas, and
                inorganic dyes)
              </td>
              <td>325188</td>
              <td>All Other Basic Inorganic Chemical Manufacturing</td>
            </tr>
            <tr>
              <td>2819</td>
              <td>Industrial Inorganic Chemicals, NEC (inorganic dyes)</td>
              <td>325131</td>
              <td>Inorganic Dye and Pigment Manufacturing</td>
            </tr>
            <tr>
              <td>2819</td>
              <td>
                Industrial Inorganic Chemicals, NEC (recovering sulfur from
                natural gas)
              </td>
              <td>211112</td>
              <td>Natural Gas Liquid Extraction</td>
            </tr>
            <tr>
              <td>3823</td>
              <td>
                Industrial Instruments for Measurement, Display, and Control of
                Process Variables; and Related Products
              </td>
              <td>334513</td>
              <td>
                Instruments and Related Products Manufacturing for Measuring,
                Displaying, and Controlling Industrial Process Variables
              </td>
            </tr>
            <tr>
              <td>7218</td>
              <td>Industrial Launderers</td>
              <td>812332</td>
              <td>Industrial Launderers</td>
            </tr>
            <tr>
              <td>5084</td>
              <td>Industrial Machinery and Equipment (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5084</td>
              <td>
                Industrial Machinery and Equipment (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5084</td>
              <td>Industrial Machinery and Equipment (merchant wholesalers)</td>
              <td>423830</td>
              <td>Industrial Machinery and Equipment Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>2869</td>
              <td>Industrial Organic Chemicals, NEC (aliphatics)</td>
              <td>325110</td>
              <td>Petrochemical Manufacturing</td>
            </tr>
            <tr>
              <td>2869</td>
              <td>Industrial Organic Chemicals, NEC (carbon bisulfide)</td>
              <td>325188</td>
              <td>All Other Basic Inorganic Chemical Manufacturing</td>
            </tr>
            <tr>
              <td>2869</td>
              <td>
                Industrial Organic Chemicals, NEC (cyclopropane,
                diethylcyclohexane, naphthalene sulfonic acid)
              </td>
              <td>325192</td>
              <td>Cyclic Crude and Intermediate Manufacturing</td>
            </tr>
            <tr>
              <td>2869</td>
              <td>Industrial Organic Chemicals, NEC (ethyl alcohol)</td>
              <td>325193</td>
              <td>Ethyl Alcohol Manufacturing</td>
            </tr>
            <tr>
              <td>2869</td>
              <td>
                Industrial Organic Chemicals, NEC (except aliphatics, carbon
                bisulfide, ethyl alcohol, cyclopropane, diethylcyclohexane,
                napthalene sulfonic acid, synthetic hydraulic fluids, and
                fluorocarbon gases)
              </td>
              <td>325199</td>
              <td>All Other Basic Organic Chemical Manufacturing</td>
            </tr>
            <tr>
              <td>2869</td>
              <td>Industrial Organic Chemicals, NEC (fluorocarbon gases)</td>
              <td>325120</td>
              <td>Industrial Gas Manufacturing</td>
            </tr>
            <tr>
              <td>2869</td>
              <td>
                Industrial Organic Chemicals, NEC (synthetic hydraulic fluids)
              </td>
              <td>325998</td>
              <td>
                All Other Miscellaneous Chemical Product and Preparation
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3543</td>
              <td>Industrial Patterns</td>
              <td>332997</td>
              <td>Industrial Pattern Manufacturing</td>
            </tr>
            <tr>
              <td>3567</td>
              <td>Industrial Process Furnaces and Ovens</td>
              <td>333994</td>
              <td>Industrial Process Furnace and Oven Manufacturing</td>
            </tr>
            <tr>
              <td>1446</td>
              <td>Industrial Sand</td>
              <td>212322</td>
              <td>Industrial Sand Mining</td>
            </tr>
            <tr>
              <td>5085</td>
              <td>Industrial Supplies (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5085</td>
              <td>
                Industrial Supplies (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5085</td>
              <td>
                Industrial Supplies (merchant wholesalers of fluid power
                accessories)
              </td>
              <td>423830</td>
              <td>Industrial Machinery and Equipment Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5085</td>
              <td>
                Industrial Supplies (merchant wholesalers of industrial supplies
                except fluid power accessories and merchant wholesalers selling
                industrial supplies via retail method)
              </td>
              <td>423840</td>
              <td>Industrial Supplies Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5085</td>
              <td>Industrial Supplies (sold via retail method)</td>
              <td>453998</td>
              <td>
                All Other Miscellaneous Store Retailers (except Tobacco Stores)
              </td>
            </tr>
            <tr>
              <td>3537</td>
              <td>
                Industrial Trucks, Tractors, Trailers, and Stackers (except
                metal pallets and metal air cargo containers)
              </td>
              <td>333924</td>
              <td>
                Industrial Truck, Tractor, Trailer, and Stacker Machinery
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3537</td>
              <td>
                Industrial Trucks, Tractors, Trailers, and Stackers (metal air
                cargo containers)
              </td>
              <td>332439</td>
              <td>Other Metal Container Manufacturing</td>
            </tr>
            <tr>
              <td>3537</td>
              <td>
                Industrial Trucks, Tractors, Trailers, and Stackers (metal
                pallets)
              </td>
              <td>332999</td>
              <td>
                All Other Miscellaneous Fabricated Metal Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>3491</td>
              <td>Industrial Valves</td>
              <td>332911</td>
              <td>Industrial Valve Manufacturing</td>
            </tr>
            <tr>
              <td>7375</td>
              <td>
                Information Retrieval Services (Internet service providers and
                Internet access providers)
              </td>
              <td>517110</td>
              <td>Wired Telecommunications Carriers</td>
            </tr>
            <tr>
              <td>2816</td>
              <td>Inorganic Pigments (bone and lamp black)</td>
              <td>325182</td>
              <td>Carbon Black Manufacturing</td>
            </tr>
            <tr>
              <td>2816</td>
              <td>Inorganic Pigments (except bone and lamp black)</td>
              <td>325131</td>
              <td>Inorganic Dye and Pigment Manufacturing</td>
            </tr>
            <tr>
              <td>1796</td>
              <td>
                Installation or Erection of Building Equipment, NEC
                (installation of equipment not elsewhere specified such as
                central vacuum cleaning systems and dumb waiters)
              </td>
              <td>238290</td>
              <td>Other Building Equipment Contractors</td>
            </tr>
            <tr>
              <td>1796</td>
              <td>
                Installation or Erection of Building Equipment, NEC (scrubber,
                dust collection, and other industrial ventilation installation)
              </td>
              <td>238220</td>
              <td>Plumbing, Heating, and Air-Conditioning Contractors</td>
            </tr>
            <tr>
              <td>3825</td>
              <td>
                Instruments for Measuring and Testing of Electricity and
                Electrical Signals (automotive ammeters and voltmeters)
              </td>
              <td>334514</td>
              <td>Totalizing Fluid Meter and Counting Device Manufacturing</td>
            </tr>
            <tr>
              <td>3825</td>
              <td>
                Instruments for Measuring and Testing of Electricity and
                Electrical Signals (except automotive instruments)
              </td>
              <td>334515</td>
              <td>
                Instrument Manufacturing for Measuring and Testing Electricity
                and Electrical Signals
              </td>
            </tr>
            <tr>
              <td>6411</td>
              <td>
                Insurance Agents, Brokers, and Service (except processors,
                agents and brokers, and claims adjusters)
              </td>
              <td>524298</td>
              <td>All Other Insurance Related Activities</td>
            </tr>
            <tr>
              <td>6411</td>
              <td>
                Insurance Agents, Brokers, and Service (insurance agents and
                brokers)
              </td>
              <td>524210</td>
              <td>Insurance Agencies and Brokerages</td>
            </tr>
            <tr>
              <td>6411</td>
              <td>
                Insurance Agents, Brokers, and Service (insurance claims
                adjusters)
              </td>
              <td>524291</td>
              <td>Claims Adjusting</td>
            </tr>
            <tr>
              <td>6411</td>
              <td>Insurance Agents, Brokers, and Service (processors)</td>
              <td>524292</td>
              <td>Third Party Administration of Insurance and Pension Funds</td>
            </tr>
            <tr>
              <td>6399</td>
              <td>Insurance Carriers, NEC</td>
              <td>524128</td>
              <td>
                Other Direct Insurance (except Life, Health, and Medical)
                Carriers
              </td>
            </tr>
            <tr>
              <td>4131</td>
              <td>Intercity and Rural Bus Transportation</td>
              <td>485210</td>
              <td>Interurban and Rural Bus Transportation</td>
            </tr>
            <tr>
              <td>8052</td>
              <td>
                Intermediate Care Facilities (continuing care retirement
                communities){" "}
              </td>
              <td>623311</td>
              <td>Continuing Care Retirement Communities </td>
            </tr>
            <tr>
              <td>8052</td>
              <td>
                Intermediate Care Facilities (except continuing care retirement
                communities and mental retardation facilities)
              </td>
              <td>623110</td>
              <td>Nursing Care Facilities</td>
            </tr>
            <tr>
              <td>8052</td>
              <td>
                Intermediate Care Facilities (mental retardation facilities)
              </td>
              <td>623210</td>
              <td>Residential Mental Retardation Facilities</td>
            </tr>
            <tr>
              <td>3519</td>
              <td>
                Internal Combustion Engines, NEC (except stationary engine
                radiators)
              </td>
              <td>333618</td>
              <td>Other Engine Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3519</td>
              <td>
                Internal Combustion Engines, NEC (stationary engine radiators)
              </td>
              <td>336399</td>
              <td>All Other Motor Vehicle Parts Manufacturing</td>
            </tr>
            <tr>
              <td>9721</td>
              <td>International Affairs</td>
              <td>928120</td>
              <td>International Affairs</td>
            </tr>
            <tr>
              <td>6282</td>
              <td>Investment Advice (except portfolio managers)</td>
              <td>523930</td>
              <td>Investment Advice</td>
            </tr>
            <tr>
              <td>6282</td>
              <td>Investment Advice (portfolio managers)</td>
              <td>523920</td>
              <td>Portfolio Management</td>
            </tr>
            <tr>
              <td>6799</td>
              <td>Investors, NEC (commodity contract pool operators)</td>
              <td>523920</td>
              <td>Portfolio Management</td>
            </tr>
            <tr>
              <td>6799</td>
              <td>Investors, NEC (commodity contract trading companies)</td>
              <td>523130</td>
              <td>Commodity Contracts Dealing</td>
            </tr>
            <tr>
              <td>6799</td>
              <td>
                Investors, NEC (venture capital companies, investment clubs, and
                speculators for own account)
              </td>
              <td>523910</td>
              <td>Miscellaneous Intermediation</td>
            </tr>
            <tr>
              <td>0134</td>
              <td>Irish Potatoes</td>
              <td>111211</td>
              <td>Potato Farming</td>
            </tr>
            <tr>
              <td>3462</td>
              <td>Iron and Steel Forgings</td>
              <td>332111</td>
              <td>Iron and Steel Forging</td>
            </tr>
            <tr>
              <td>1011</td>
              <td>Iron Ores</td>
              <td>212210</td>
              <td>Iron Ore Mining</td>
            </tr>
            <tr>
              <td>4971</td>
              <td>Irrigation Systems</td>
              <td>221310</td>
              <td>Water Supply and Irrigation Systems</td>
            </tr>
            <tr>
              <td>3915</td>
              <td>
                Jewelers Findings and Materials and Lapidary Work (watch jewels)
              </td>
              <td>334518</td>
              <td>Watch, Clock, and Part Manufacturing</td>
            </tr>
            <tr>
              <td>3915</td>
              <td>
                Jewelers' Findings and Materials, and Lapidary Work (except
                watch jewels)
              </td>
              <td>339913</td>
              <td>Jewelers' Material and Lapidary Work Manufacturing</td>
            </tr>
            <tr>
              <td>5944</td>
              <td>Jewelry Stores</td>
              <td>448310</td>
              <td>Jewelry Stores</td>
            </tr>
            <tr>
              <td>3911</td>
              <td>Jewelry, Precious Metal</td>
              <td>339911</td>
              <td>Jewelry (except Costume) Manufacturing</td>
            </tr>
            <tr>
              <td>5094</td>
              <td>
                Jewelry, Watches, Precious Stones, and Precious Metals (agents
                and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5094</td>
              <td>
                Jewelry, Watches, Precious Stones, and Precious Metals (business
                to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5094</td>
              <td>
                Jewelry, Watches, Precious Stones, and Precious Metals (jewelry
                and related goods sold via retail method)
              </td>
              <td>448310</td>
              <td>Jewelry Stores</td>
            </tr>
            <tr>
              <td>5094</td>
              <td>
                Jewelry, Watches, Precious Stones, and Precious Metals (merchant
                wholesalers except those selling jewelry and related goods via
                retail method)
              </td>
              <td>423940</td>
              <td>
                Jewelry, Watch, Precious Stone, and Precious Metal Merchant
                Wholesalers
              </td>
            </tr>
            <tr>
              <td>8331</td>
              <td>Job Training and Vocational Rehabilitation Services</td>
              <td>624310</td>
              <td>Vocational Rehabilitation Services</td>
            </tr>
            <tr>
              <td>8222</td>
              <td>Junior Colleges and Technical Institutes</td>
              <td>611210</td>
              <td>Junior Colleges</td>
            </tr>
            <tr>
              <td>1455</td>
              <td>Kaolin and Ball Clay</td>
              <td>212324</td>
              <td>Kaolin and Ball Clay Mining</td>
            </tr>
            <tr>
              <td>8092</td>
              <td>Kidney Dialysis Centers</td>
              <td>621492</td>
              <td>Kidney Dialysis Centers</td>
            </tr>
            <tr>
              <td>2253</td>
              <td>
                Knit Outerwear Mills (dyeing and finishing knit outerwear
                without knitting outerwear)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>2253</td>
              <td>
                Knit Outerwear Mills (except bath and lounging robes and dying
                and finish without knitting garments)
              </td>
              <td>315191</td>
              <td>Outerwear Knitting Mills</td>
            </tr>
            <tr>
              <td>2253</td>
              <td>Knit Outerwear Mills (knitting bath or lounging robes)</td>
              <td>315192</td>
              <td>Underwear and Nightwear Knitting Mills</td>
            </tr>
            <tr>
              <td>2254</td>
              <td>
                Knit Underwear and Nightwear Mills (dyeing and finishing
                underwear and nightwear without knitting garments)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>2254</td>
              <td>
                Knit Underwear and Nightwear Mills (except dyeing and finishing
                underwear and nightwear without knitting garments)
              </td>
              <td>315192</td>
              <td>Underwear and Nightwear Knitting Mills</td>
            </tr>
            <tr>
              <td>2259</td>
              <td>
                Knitting Mills, NEC (dyeing and finishing knit gloves and
                mittens without knitting gloves or mittens)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>2259</td>
              <td>
                Knitting Mills, NEC (knitting girdles and allied foundation
                garments)
              </td>
              <td>315192</td>
              <td>Underwear and Nightwear Knitting Mills</td>
            </tr>
            <tr>
              <td>2259</td>
              <td>Knitting Mills, NEC (knitting gloves and mittens)</td>
              <td>315191</td>
              <td>Outerwear Knitting Mills</td>
            </tr>
            <tr>
              <td>2259</td>
              <td>
                Knitting Mills, NEC (knitting lace or warp fabric and
                fabricating textile products, such as bedspreads, curtains, or
                towels)
              </td>
              <td>313249</td>
              <td>Other Knit Fabric and Lace Mills</td>
            </tr>
            <tr>
              <td>2259</td>
              <td>
                Knitting Mills, NEC (knitting weft fabric and fabricating
                textile products, such as bedspreads, curtains, or towels)
              </td>
              <td>313241</td>
              <td>Weft Knit Fabric Mills</td>
            </tr>
            <tr>
              <td>8631</td>
              <td>Labor Unions and Similar Labor Organizations</td>
              <td>813930</td>
              <td>Labor Unions and Similar Labor Organizations</td>
            </tr>
            <tr>
              <td>3826</td>
              <td>Laboratory Analytical Instruments</td>
              <td>334516</td>
              <td>Analytical Laboratory Instrument Manufacturing</td>
            </tr>
            <tr>
              <td>3821</td>
              <td>Laboratory Apparatus and Furniture</td>
              <td>339113</td>
              <td>Surgical Appliance and Supplies Manufacturing</td>
            </tr>
            <tr>
              <td>2258</td>
              <td>
                Lace and Warp Knit Fabric Mills (except finishing lace or warp
                fabric without knitting lace or warp fabric)
              </td>
              <td>313249</td>
              <td>Other Knit Fabric and Lace Mills</td>
            </tr>
            <tr>
              <td>2258</td>
              <td>
                Lace and Warp Knit Fabric Mills (finishing lace or warp fabric
                without knitting lace or warp fabric)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>3083</td>
              <td>Laminated Plastics Plate, Sheet, and Profile Shapes</td>
              <td>326130</td>
              <td>
                Laminated Plastics Plate, Sheet (except Packaging), and Shape
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>6552</td>
              <td>Land Subdividers and Developers, Except Cemeteries</td>
              <td>237210</td>
              <td>Land Subdivision</td>
            </tr>
            <tr>
              <td>9512</td>
              <td>Land, Mineral, Wildlife, and Forest Conservation</td>
              <td>924120</td>
              <td>Administration of Conservation Programs</td>
            </tr>
            <tr>
              <td>0781</td>
              <td>
                Landscape Counseling and Planning (except horticultural
                consulting)
              </td>
              <td>541320</td>
              <td>Landscape Architectural Services</td>
            </tr>
            <tr>
              <td>0781</td>
              <td>
                Landscape Counseling and Planning (horticulture consulting)
              </td>
              <td>541690</td>
              <td>Other Scientific and Technical Consulting Services</td>
            </tr>
            <tr>
              <td>7219</td>
              <td>Laundry and Garment Services, NEC (alteration and repair)</td>
              <td>811490</td>
              <td>Other Personal and Household Goods Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7219</td>
              <td>Laundry and Garment Services, NEC (diaper service)</td>
              <td>812331</td>
              <td>Linen Supply</td>
            </tr>
            <tr>
              <td>7219</td>
              <td>
                Laundry and Garment Services, NEC (except diaper service and
                clothing alteration and repair)
              </td>
              <td>812320</td>
              <td>Drycleaning and Laundry Services (except Coin-Operated)</td>
            </tr>
            <tr>
              <td>0782</td>
              <td>Lawn and Garden Services</td>
              <td>561730</td>
              <td>Landscaping Services</td>
            </tr>
            <tr>
              <td>3524</td>
              <td>
                Lawn and Garden Tractors and Home Lawn and Garden Equipment
                (except nonpowered lawnmowers)
              </td>
              <td>333112</td>
              <td>
                Lawn and Garden Tractor and Home Lawn and Garden Equipment
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3524</td>
              <td>
                Lawn and Garden Tractors and Home Lawn and Garden Equipment
                (nonpowered lawnmowers)
              </td>
              <td>332212</td>
              <td>Hand and Edge Tool Manufacturing</td>
            </tr>
            <tr>
              <td>1031</td>
              <td>Lead and Zinc Ores</td>
              <td>212231</td>
              <td>Lead Ore and Zinc Ore Mining</td>
            </tr>
            <tr>
              <td>3952</td>
              <td>Lead Pencils and Art Goods (drawing inks and india ink)</td>
              <td>325998</td>
              <td>
                All Other Miscellaneous Chemical Product and Preparation
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3952</td>
              <td>
                Lead Pencils, Crayons, and Artists' Materials (drafting tables
                and boards)
              </td>
              <td>337127</td>
              <td>Institutional Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>3952</td>
              <td>
                Lead Pencils, Crayons, and Artists' Materials (except drawing
                ink, india ink, drafting tables and drafting boards)
              </td>
              <td>339942</td>
              <td>Lead Pencil and Art Good Manufacturing</td>
            </tr>
            <tr>
              <td>2386</td>
              <td>Leather and Sheep-lined Clothing (except contractors)</td>
              <td>315292</td>
              <td>Fur and Leather Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2386</td>
              <td>
                Leather and Sheep-Lined Clothing (men's and boys' contractors)
              </td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2386</td>
              <td>
                Leather and Sheep-Lined Clothing (women's, girls', and infants'
                contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>3151</td>
              <td>Leather Gloves and Mittens (except contractors)</td>
              <td>315992</td>
              <td>Glove and Mitten Manufacturing</td>
            </tr>
            <tr>
              <td>3151</td>
              <td>Leather Gloves and Mittens (men's and boys' contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>3151</td>
              <td>
                Leather Gloves and Mittens (women's, girls', and infants'
                contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>3199</td>
              <td>Leather Goods, NEC</td>
              <td>316999</td>
              <td>All Other Leather Good Manufacturing</td>
            </tr>
            <tr>
              <td>3111</td>
              <td>Leather Tanning and Finishing</td>
              <td>316110</td>
              <td>Leather and Hide Tanning and Finishing</td>
            </tr>
            <tr>
              <td>9222</td>
              <td>Legal Counsel and Prosecution</td>
              <td>922130</td>
              <td>Legal Counsel and Prosecution</td>
            </tr>
            <tr>
              <td>8111</td>
              <td>Legal Services</td>
              <td>541110</td>
              <td>Offices of Lawyers </td>
            </tr>
            <tr>
              <td>9121</td>
              <td>Legislative Bodies</td>
              <td>921120</td>
              <td>Legislative Bodies</td>
            </tr>
            <tr>
              <td>6517</td>
              <td>Lessors of Railroad Property</td>
              <td>531190</td>
              <td>Lessors of Other Real Estate Property</td>
            </tr>
            <tr>
              <td>6519</td>
              <td>Lessors of Real Property, NEC</td>
              <td>531190</td>
              <td>Lessors of Other Real Estate Property</td>
            </tr>
            <tr>
              <td>8231</td>
              <td>Libraries</td>
              <td>519120</td>
              <td>Libraries and Archives</td>
            </tr>
            <tr>
              <td>6311</td>
              <td>Life Insurance (burial insurance)</td>
              <td>524128</td>
              <td>
                Other Direct Insurance (except Life, Health, and Medical)
                Carriers
              </td>
            </tr>
            <tr>
              <td>6311</td>
              <td>Life Insurance (life insurers-direct)</td>
              <td>524113</td>
              <td>Direct Life Insurance Carriers</td>
            </tr>
            <tr>
              <td>6311</td>
              <td>Life Insurance (reinsurers)</td>
              <td>524130</td>
              <td>Reinsurance Carriers</td>
            </tr>
            <tr>
              <td>3648</td>
              <td>Lighting Equipment, NEC</td>
              <td>335129</td>
              <td>Other Lighting Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3274</td>
              <td>Lime</td>
              <td>327410</td>
              <td>Lime Manufacturing</td>
            </tr>
            <tr>
              <td>7213</td>
              <td>Linen Supply</td>
              <td>812331</td>
              <td>Linen Supply</td>
            </tr>
            <tr>
              <td>3996</td>
              <td>
                Linoleum, Asphalted-Felt-Base, and Other Hard Surface Floor
                Coverings, NEC
              </td>
              <td>326192</td>
              <td>Resilient Floor Covering Manufacturing</td>
            </tr>
            <tr>
              <td>5984</td>
              <td>Liquefied Petroleum Gas (Bottled Gas) Dealers</td>
              <td>454312</td>
              <td>Liquefied Petroleum Gas (Bottled Gas) Dealers</td>
            </tr>
            <tr>
              <td>5921</td>
              <td>Liquor Stores</td>
              <td>445310</td>
              <td>Beer, Wine, and Liquor Stores</td>
            </tr>
            <tr>
              <td>5154</td>
              <td>Livestock (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5154</td>
              <td>Livestock (business to business electronic markets)</td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5154</td>
              <td>Livestock (merchant wholesalers)</td>
              <td>424520</td>
              <td>Livestock Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>0751</td>
              <td>
                Livestock Services, Except Veterinary (custom slaughtering)
              </td>
              <td>311611</td>
              <td>Animal (except Poultry) Slaughtering</td>
            </tr>
            <tr>
              <td>0751</td>
              <td>
                Livestock Services, Except Veterinary (except custom
                slaughtering)
              </td>
              <td>115210</td>
              <td>Support Activities for Animal Production</td>
            </tr>
            <tr>
              <td>6163</td>
              <td>Loan Brokers</td>
              <td>522310</td>
              <td>Mortgage and Nonmortgage Loan Brokers</td>
            </tr>
            <tr>
              <td>4111</td>
              <td>
                Local and Suburban Transit (airport transportation service)
              </td>
              <td>485999</td>
              <td>All Other Transit and Ground Passenger Transportation</td>
            </tr>
            <tr>
              <td>4111</td>
              <td>Local and Suburban Transit (bus and motor vehicle)</td>
              <td>485113</td>
              <td>Bus and Other Motor Vehicle Transit Systems</td>
            </tr>
            <tr>
              <td>4111</td>
              <td>Local and Suburban Transit (commuter rail)</td>
              <td>485112</td>
              <td>Commuter Rail Systems</td>
            </tr>
            <tr>
              <td>4111</td>
              <td>
                Local and Suburban Transit (except mixed mode, commuter rail,
                airport transportation service, and bus and motor vehicle)
              </td>
              <td>485119</td>
              <td>Other Urban Transit Systems</td>
            </tr>
            <tr>
              <td>4111</td>
              <td>Local and Suburban Transit (mixed mode)</td>
              <td>485111</td>
              <td>Mixed Mode Transit Systems</td>
            </tr>
            <tr>
              <td>4141</td>
              <td>Local Bus Charter Service</td>
              <td>485510</td>
              <td>Charter Bus Industry</td>
            </tr>
            <tr>
              <td>4119</td>
              <td>
                Local Passenger Transportation, NEC (employee transportation)
              </td>
              <td>485410</td>
              <td>School and Employee Bus Transportation</td>
            </tr>
            <tr>
              <td>4119</td>
              <td>
                Local Passenger Transportation, NEC (hearse rental with driver
                and carpool and vanpool operation)
              </td>
              <td>485999</td>
              <td>All Other Transit and Ground Passenger Transportation</td>
            </tr>
            <tr>
              <td>4119</td>
              <td>Local Passenger Transportation, NEC (land ambulance)</td>
              <td>621910</td>
              <td>Ambulance Services</td>
            </tr>
            <tr>
              <td>4119</td>
              <td>
                Local Passenger Transportation, NEC (limousine rental with
                driver and automobile rental with driver)
              </td>
              <td>485320</td>
              <td>Limousine Service</td>
            </tr>
            <tr>
              <td>4119</td>
              <td>
                Local Passenger Transportation, NEC (sightseeing buses and cable
                and cog railways, except scenic)
              </td>
              <td>487110</td>
              <td>Scenic and Sightseeing Transportation, Land</td>
            </tr>
            <tr>
              <td>4119</td>
              <td>
                Local Passenger Transportation, NEC (special needs
                transportation)
              </td>
              <td>485991</td>
              <td>Special Needs Transportation</td>
            </tr>
            <tr>
              <td>4214</td>
              <td>Local Trucking With Storage (general freight)</td>
              <td>484110</td>
              <td>General Freight Trucking, Local</td>
            </tr>
            <tr>
              <td>4214</td>
              <td>Local Trucking With Storage (household goods moving)</td>
              <td>484210</td>
              <td>Used Household and Office Goods Moving</td>
            </tr>
            <tr>
              <td>4214</td>
              <td>Local Trucking With Storage (specialized freight)</td>
              <td>484220</td>
              <td>Specialized Freight (except Used Goods) Trucking, Local</td>
            </tr>
            <tr>
              <td>4212</td>
              <td>Local Trucking Without Storage (general freight)</td>
              <td>484110</td>
              <td>General Freight Trucking, Local</td>
            </tr>
            <tr>
              <td>4212</td>
              <td>
                Local Trucking Without Storage (hazardous waste collection
                without disposal)
              </td>
              <td>562112</td>
              <td>Hazardous Waste Collection</td>
            </tr>
            <tr>
              <td>4212</td>
              <td>Local Trucking Without Storage (household goods moving)</td>
              <td>484210</td>
              <td>Used Household and Office Goods Moving</td>
            </tr>
            <tr>
              <td>4212</td>
              <td>
                Local Trucking Without Storage (other waste collection without
                disposal)
              </td>
              <td>562119</td>
              <td>Other Waste Collection</td>
            </tr>
            <tr>
              <td>4212</td>
              <td>
                Local Trucking Without Storage (solid waste collection without
                disposal)
              </td>
              <td>562111</td>
              <td>Solid Waste Collection</td>
            </tr>
            <tr>
              <td>4212</td>
              <td>Local Trucking Without Storage (specialized freight)</td>
              <td>484220</td>
              <td>Specialized Freight (except Used Goods) Trucking, Local</td>
            </tr>
            <tr>
              <td>2411</td>
              <td>Logging</td>
              <td>113310</td>
              <td>Logging</td>
            </tr>
            <tr>
              <td>2992</td>
              <td>Lubricating Oils and Greases</td>
              <td>324191</td>
              <td>Petroleum Lubricating Oil and Grease Manufacturing</td>
            </tr>
            <tr>
              <td>3161</td>
              <td>Luggage</td>
              <td>316991</td>
              <td>Luggage Manufacturing</td>
            </tr>
            <tr>
              <td>5948</td>
              <td>Luggage and Leather Goods Stores</td>
              <td>448320</td>
              <td>Luggage and Leather Goods Stores</td>
            </tr>
            <tr>
              <td>5211</td>
              <td>
                Lumber and Other Building Materials Dealers (except home center
                stores)
              </td>
              <td>444190</td>
              <td>Other Building Material Dealers</td>
            </tr>
            <tr>
              <td>5211</td>
              <td>
                Lumber and Other Building Materials Dealers (home center stores)
              </td>
              <td>444110</td>
              <td>Home Centers</td>
            </tr>
            <tr>
              <td>5031</td>
              <td>
                Lumber, Plywood, Millwork, and Wood Panels (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5031</td>
              <td>
                Lumber, Plywood, Millwork, and Wood Panels (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5031</td>
              <td>
                Lumber, Plywood, Millwork, and Wood Panels (merchant
                wholesalers)
              </td>
              <td>423310</td>
              <td>
                Lumber, Plywood, Millwork, and Wood Panel Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>5031</td>
              <td>
                Lumber, Plywood, Millwork, and Wood Panels (sold via retail
                method)
              </td>
              <td>444110</td>
              <td>Home Centers</td>
            </tr>
            <tr>
              <td>2098</td>
              <td>Macaroni, Spaghetti, Vermicelli and Noodles</td>
              <td>311823</td>
              <td>Dry Pasta Manufacturing </td>
            </tr>
            <tr>
              <td>3541</td>
              <td>Machine Tools, Metal Cutting Types</td>
              <td>333512</td>
              <td>Machine Tool (Metal Cutting Types) Manufacturing</td>
            </tr>
            <tr>
              <td>3542</td>
              <td>Machine Tools, Metal Forming Type</td>
              <td>333513</td>
              <td>Machine Tool (Metal Forming Types) Manufacturing</td>
            </tr>
            <tr>
              <td>3695</td>
              <td>Magnetic and Optical Recording Media</td>
              <td>334613</td>
              <td>Magnetic and Optical Recording Media Manufacturing</td>
            </tr>
            <tr>
              <td>3322</td>
              <td>Malleable Iron Foundries</td>
              <td>331511</td>
              <td>Iron Foundries</td>
            </tr>
            <tr>
              <td>2083</td>
              <td>Malt</td>
              <td>311213</td>
              <td>Malt Manufacturing</td>
            </tr>
            <tr>
              <td>2082</td>
              <td>Malt Beverages (except malt extract)</td>
              <td>312120</td>
              <td>Breweries</td>
            </tr>
            <tr>
              <td>2082</td>
              <td>Malt Beverages (malt extract)</td>
              <td>311942</td>
              <td>Spice and Extract Manufacturing</td>
            </tr>
            <tr>
              <td>8742</td>
              <td>
                Management Consulting Services (administrative management and
                general management consulting)
              </td>
              <td>541611</td>
              <td>
                Administrative Management and General Management Consulting
                Services{" "}
              </td>
            </tr>
            <tr>
              <td>8742</td>
              <td>
                Management Consulting Services (human resources and personnel
                management consulting)
              </td>
              <td>541612</td>
              <td>Human Resources and Executive Search Consulting Services</td>
            </tr>
            <tr>
              <td>8742</td>
              <td>
                Management Consulting Services (manufacturing management,
                physical distribution, and site location consulting)
              </td>
              <td>541614</td>
              <td>
                Process, Physical Distribution, and Logistics Consulting
                Services
              </td>
            </tr>
            <tr>
              <td>8742</td>
              <td>Management Consulting Services (marketing consulting)</td>
              <td>541613</td>
              <td>Marketing Consulting Services</td>
            </tr>
            <tr>
              <td>6722</td>
              <td>Management Investment Offices, Open-End </td>
              <td>525910</td>
              <td>Open-End Investment Funds</td>
            </tr>
            <tr>
              <td>8741</td>
              <td>
                Management Services (commercial and institutional building
                construction management)
              </td>
              <td>236220</td>
              <td>Commercial and Institutional Building Construction</td>
            </tr>
            <tr>
              <td>8741</td>
              <td>
                Management Services (construction management for other heavy and
                civil engineering construction){" "}
              </td>
              <td>237990</td>
              <td>Other Heavy and Civil Engineering Construction</td>
            </tr>
            <tr>
              <td>8741</td>
              <td>
                Management Services (construction management of oil and gas
                pipelines and related structure construction projects)
              </td>
              <td>237120</td>
              <td>Oil and Gas Pipeline and Related Structures Construction</td>
            </tr>
            <tr>
              <td>8741</td>
              <td>
                Management Services (construction management of power generation
                [except hydroelectric] facilities, and transmission and
                distribution station construction projects)
              </td>
              <td>237130</td>
              <td>
                Power and Communication Line and Related Structures Construction
              </td>
            </tr>
            <tr>
              <td>8741</td>
              <td>
                Management Services (construction management of water, sewer,
                and related structure construction projects)
              </td>
              <td>237110</td>
              <td>Water and Sewer Line and Related Structures Construction</td>
            </tr>
            <tr>
              <td>8741</td>
              <td>Management Services (except construction management)</td>
              <td>561110</td>
              <td>Office Administrative Services</td>
            </tr>
            <tr>
              <td>8741</td>
              <td>
                Management Services (highway, street, and bridge construction
                management)
              </td>
              <td>237310</td>
              <td>Highway, Street, and Bridge Construction</td>
            </tr>
            <tr>
              <td>8741</td>
              <td>
                Management Services (industrial building and nonbuilding
                structure construction management)
              </td>
              <td>236210</td>
              <td>Industrial Building Construction</td>
            </tr>
            <tr>
              <td>8741</td>
              <td>
                Management Services (multifamily housing construction
                management)
              </td>
              <td>236116</td>
              <td>
                New Multifamily Housing Construction (except Operative Builders)
              </td>
            </tr>
            <tr>
              <td>8741</td>
              <td>
                Management Services (residential remodeling construction
                management)
              </td>
              <td>236118</td>
              <td>Residential Remodelers</td>
            </tr>
            <tr>
              <td>8741</td>
              <td>
                Management Services (single-family housing construction
                management)
              </td>
              <td>236115</td>
              <td>
                New Single-Family Housing Construction (except Operative
                Builders)
              </td>
            </tr>
            <tr>
              <td>2761</td>
              <td>Manifold Business Forms</td>
              <td>323116</td>
              <td>Manifold Business Form Printing</td>
            </tr>
            <tr>
              <td>2824</td>
              <td>Manmade Organic Fibers, Except Cellulosic</td>
              <td>325222</td>
              <td>Noncellulosic Organic Fiber Manufacturing</td>
            </tr>
            <tr>
              <td>2097</td>
              <td>Manufactured Ice</td>
              <td>312113</td>
              <td>Ice Manufacturing</td>
            </tr>
            <tr>
              <td>3999</td>
              <td>Manufacturing Industries, NEC (beauty and barber chairs)</td>
              <td>337127</td>
              <td>Institutional Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>3999</td>
              <td>
                Manufacturing Industries, NEC (beauty and barber shop equipment,
                except chairs)
              </td>
              <td>333319</td>
              <td>
                Other Commercial and Service Industry Machinery Manufacturing
              </td>
            </tr>
            <tr>
              <td>3999</td>
              <td>Manufacturing Industries, NEC (burnt wood articles)</td>
              <td>321999</td>
              <td>All Other Miscellaneous Wood Product Manufacturing</td>
            </tr>
            <tr>
              <td>3999</td>
              <td>
                Manufacturing Industries, NEC (electric hair clippers for
                humans)
              </td>
              <td>335211</td>
              <td>Electric Housewares and Household Fan Manufacturing</td>
            </tr>
            <tr>
              <td>3999</td>
              <td>Manufacturing Industries, NEC (embroidery kits)</td>
              <td>339932</td>
              <td>Game, Toy, and Children's Vehicle Manufacturing</td>
            </tr>
            <tr>
              <td>3999</td>
              <td>
                Manufacturing Industries, NEC (flocking metal products for the
                trade)
              </td>
              <td>332812</td>
              <td>
                Metal Coating, Engraving (except Jewelry and Silverware), and
                Allied Services to Manufacturers
              </td>
            </tr>
            <tr>
              <td>3999</td>
              <td>
                Manufacturing Industries, NEC (fur dressing and finishing)
              </td>
              <td>316110</td>
              <td>Leather and Hide Tanning and Finishing</td>
            </tr>
            <tr>
              <td>3999</td>
              <td>
                Manufacturing Industries, NEC (hand operated hair clippers for
                humans)
              </td>
              <td>332211</td>
              <td>Cutlery and Flatware (except Precious) Manufacturing</td>
            </tr>
            <tr>
              <td>3999</td>
              <td>
                Manufacturing Industries, NEC (lamp shades of paper or textile)
              </td>
              <td>335121</td>
              <td>Residential Electric Lighting Fixture Manufacturing </td>
            </tr>
            <tr>
              <td>3999</td>
              <td>Manufacturing Industries, NEC (matches)</td>
              <td>325998</td>
              <td>
                All Other Miscellaneous Chemical Product and Preparation
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3999</td>
              <td>
                Manufacturing Industries, NEC (other miscellaneous metal
                products, such as combs, hair curlers, etc.)
              </td>
              <td>332999</td>
              <td>
                All Other Miscellaneous Fabricated Metal Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>3999</td>
              <td>
                Manufacturing Industries, NEC (other miscellaneous products not
                specially provided for previously)
              </td>
              <td>339999</td>
              <td>All Other Miscellaneous Manufacturing</td>
            </tr>
            <tr>
              <td>3999</td>
              <td>
                Manufacturing Industries, NEC (plastics products such as combs,
                hair curlers, etc.)
              </td>
              <td>326199</td>
              <td>All Other Plastics Product Manufacturing</td>
            </tr>
            <tr>
              <td>3999</td>
              <td>Manufacturing Industries, NEC (tape measures)</td>
              <td>332212</td>
              <td>Hand and Edge Tool Manufacturing</td>
            </tr>
            <tr>
              <td>4493</td>
              <td>Marinas</td>
              <td>713930</td>
              <td>Marinas</td>
            </tr>
            <tr>
              <td>4491</td>
              <td>Marine Cargo Handling (all but dock and pier operations)</td>
              <td>488320</td>
              <td>Marine Cargo Handling</td>
            </tr>
            <tr>
              <td>4491</td>
              <td>Marine Cargo Handling (dock and pier operations)</td>
              <td>488310</td>
              <td>Port and Harbor Operations</td>
            </tr>
            <tr>
              <td>3953</td>
              <td>Marking Devices</td>
              <td>339943</td>
              <td>Marking Device Manufacturing</td>
            </tr>
            <tr>
              <td>1741</td>
              <td>Masonry, Stone Setting, and Other Stone Work</td>
              <td>238140</td>
              <td>Masonry Contractors</td>
            </tr>
            <tr>
              <td>2515</td>
              <td>
                Mattresses, Foundations, and Convertible Beds (convertible beds)
              </td>
              <td>337121</td>
              <td>Upholstered Household Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>2515</td>
              <td>
                Mattresses, Foundations, and Convertible Beds (mattresses and
                foundations)
              </td>
              <td>337910</td>
              <td>Mattress Manufacturing</td>
            </tr>
            <tr>
              <td>3829</td>
              <td>
                Measuring and Controlling Devices, NEC (electronic chronometers)
              </td>
              <td>334518</td>
              <td>Watch, Clock, and Part Manufacturing</td>
            </tr>
            <tr>
              <td>3829</td>
              <td>
                Measuring and Controlling Devices, NEC (except medical
                thermometers, electronic chronometers and motor vehicle gauges)
              </td>
              <td>334519</td>
              <td>Other Measuring and Controlling Device Manufacturing</td>
            </tr>
            <tr>
              <td>3829</td>
              <td>
                Measuring and Controlling Devices, NEC (medical thermometers)
              </td>
              <td>339112</td>
              <td>Surgical and Medical Instrument Manufacturing</td>
            </tr>
            <tr>
              <td>3829</td>
              <td>
                Measuring and Controlling Devices, NEC (motor vehicle gauges)
              </td>
              <td>334514</td>
              <td>Totalizing Fluid Meter and Counting Device Manufacturing</td>
            </tr>
            <tr>
              <td>3586</td>
              <td>Measuring and Dispensing Pumps</td>
              <td>333913</td>
              <td>Measuring and Dispensing Pump Manufacturing</td>
            </tr>
            <tr>
              <td>5421</td>
              <td>
                Meat and Fish (Seafood) Markets, Including Freezer Provisioners
                (freezer provisioners)
              </td>
              <td>454390</td>
              <td>Other Direct Selling Establishments</td>
            </tr>
            <tr>
              <td>5421</td>
              <td>
                Meat and Fish (Seafood) Markets, Including Freezer Provisioners
                (meat except freezer provisioners)
              </td>
              <td>445210</td>
              <td>Meat Markets</td>
            </tr>
            <tr>
              <td>5421</td>
              <td>
                Meat and Fish (Seafood) Markets, Including Freezer Provisioners
                (seafood)
              </td>
              <td>445220</td>
              <td>Fish and Seafood Markets</td>
            </tr>
            <tr>
              <td>5147</td>
              <td>
                Meat and Meat Products (meat and meat products sold via retail
                method)
              </td>
              <td>445210</td>
              <td>Meat Markets</td>
            </tr>
            <tr>
              <td>2011</td>
              <td>Meat Packing Plants</td>
              <td>311611</td>
              <td>Animal (except Poultry) Slaughtering</td>
            </tr>
            <tr>
              <td>5147</td>
              <td>Meats and Meat Products (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5147</td>
              <td>Meats and Meat Products (boxed beef)</td>
              <td>311612</td>
              <td>Meat Processed from Carcasses </td>
            </tr>
            <tr>
              <td>5147</td>
              <td>
                Meats and Meat Products (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5147</td>
              <td>
                Meats and Meat Products (merchant wholesalers except boxed beef
                manufacturers and merchant wholesalers selling meats and meat
                products via retail method)
              </td>
              <td>424470</td>
              <td>Meat and Meat Product Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>3568</td>
              <td>Mechanical Power Transmission Equipment, NEC</td>
              <td>333613</td>
              <td>Mechanical Power Transmission Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>7352</td>
              <td>
                Medical Equipment Rental and Leasing (home health furniture and
                equipment rental and leasing)
              </td>
              <td>532291</td>
              <td>Home Health Equipment Rental</td>
            </tr>
            <tr>
              <td>7352</td>
              <td>
                Medical Equipment Rental and Leasing (medical machinery and
                equipment, except home health furniture and equipment, rental
                and leasing)
              </td>
              <td>532490</td>
              <td>
                Other Commercial and Industrial Machinery and Equipment Rental
                and Leasing
              </td>
            </tr>
            <tr>
              <td>8071</td>
              <td>Medical Laboratories (diagnostic imaging centers)</td>
              <td>621512</td>
              <td>Diagnostic Imaging Centers</td>
            </tr>
            <tr>
              <td>8071</td>
              <td>Medical Laboratories (except diagnostic imaging centers)</td>
              <td>621511</td>
              <td>Medical Laboratories</td>
            </tr>
            <tr>
              <td>5047</td>
              <td>
                Medical, Dental and Hospital Equipment and Supplies (agents and
                brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5047</td>
              <td>
                Medical, Dental and Hospital Equipment and Supplies (business to
                business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5047</td>
              <td>
                Medical, Dental and Hospital Equipment and Supplies (merchant
                wholesalers except those selling medical, dental, and hospital
                equipment and supplies via retail method)
              </td>
              <td>423450</td>
              <td>
                Medical, Dental, and Hospital Equipment and Supplies Merchant
                Wholesalers
              </td>
            </tr>
            <tr>
              <td>5047</td>
              <td>
                Medical, Dental, and Hospital Equipment and Supplies (medical,
                dental, and hospital equipment and supplies sold via retail
                method)
              </td>
              <td>446199</td>
              <td>All Other Health and Personal Care Stores </td>
            </tr>
            <tr>
              <td>2833</td>
              <td>Medicinal Chemicals and Botanical Products</td>
              <td>325411</td>
              <td>Medicinal and Botanical Manufacturing</td>
            </tr>
            <tr>
              <td>8699</td>
              <td>Membership Organizations, NEC (athletic associations)</td>
              <td>813990</td>
              <td>
                Other Similar Organizations (except Business, Professional,
                Labor, and Political Organizations)
              </td>
            </tr>
            <tr>
              <td>8699</td>
              <td>
                Membership Organizations, NEC (except humane societies, farm
                business organizations, athletic associations, and travel motor
                clubs)
              </td>
              <td>813410</td>
              <td>Civic and Social Organizations</td>
            </tr>
            <tr>
              <td>8699</td>
              <td>
                Membership Organizations, NEC (farm business organizations)
              </td>
              <td>813910</td>
              <td>Business Associations</td>
            </tr>
            <tr>
              <td>8699</td>
              <td>Membership Organizations, NEC (humane societies)</td>
              <td>813312</td>
              <td>Environment, Conservation and Wildlife Organizations</td>
            </tr>
            <tr>
              <td>8699</td>
              <td>Membership Organizations, NEC (travel motor clubs)</td>
              <td>561599</td>
              <td>All Other Travel Arrangement and Reservation Services</td>
            </tr>
            <tr>
              <td>7997</td>
              <td>
                Membership Sports and Recreation Clubs (flying clubs primarily
                providing a variety of flying services to the public using
                general purpose aircraft)
              </td>
              <td>481219</td>
              <td>Other Nonscheduled Air Transportation</td>
            </tr>
            <tr>
              <td>7997</td>
              <td>
                Membership Sports and Recreation Clubs (flying fields operated
                by aviation clubs)
              </td>
              <td>488119</td>
              <td>Other Airport Operations</td>
            </tr>
            <tr>
              <td>7997</td>
              <td>Membership Sports and Recreation Clubs (golf clubs)</td>
              <td>713910</td>
              <td>Golf Courses and Country Clubs</td>
            </tr>
            <tr>
              <td>7997</td>
              <td>
                Membership Sports and Recreation Clubs (recreation clubs with
                facilities)
              </td>
              <td>713940</td>
              <td>Fitness and Recreational Sports Centers</td>
            </tr>
            <tr>
              <td>7997</td>
              <td>
                Membership Sports and Recreation Clubs (recreation clubs without
                facilities)
              </td>
              <td>713990</td>
              <td>All Other Amusement and Recreation Industries</td>
            </tr>
            <tr>
              <td>5611</td>
              <td>
                Men's and Boys' Clothing and Accessory Stores (accessories)
              </td>
              <td>448150</td>
              <td>Clothing Accessories Stores</td>
            </tr>
            <tr>
              <td>5136</td>
              <td>
                Men's and Boys' Clothing and Furnishings (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5136</td>
              <td>
                Men's and Boys' Clothing and Furnishings (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5136</td>
              <td>
                Men's and Boys' Clothing and Furnishings (merchant wholesalers
                except wholesaling athletic uniforms and uniforms and merchant
                wholesalers selling work clothing via retail method)
              </td>
              <td>424320</td>
              <td>
                Men's and Boys' Clothing and Furnishings Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>2329</td>
              <td>Men's and Boys' Clothing, NEC (contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2329</td>
              <td>
                Men's and Boys' Clothing, NEC (except team athletic uniforms and
                contractors)
              </td>
              <td>315228</td>
              <td>Men's and Boys' Cut and Sew Other Outerwear Manufacturing</td>
            </tr>
            <tr>
              <td>2329</td>
              <td>
                Men's and Boys' Clothing, NEC (team athletic uniforms except
                contractors)
              </td>
              <td>315299</td>
              <td>All Other Cut and Sew Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2323</td>
              <td>Men's and Boys' Neckwear (except contractors)</td>
              <td>315993</td>
              <td>Men's and Boys' Neckwear Manufacturing</td>
            </tr>
            <tr>
              <td>2325</td>
              <td>
                Men's and Boys' Separate Trousers and Slacks (contractors)
              </td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2325</td>
              <td>
                Men's and Boys' Separate Trousers and Slacks (except
                contractors)
              </td>
              <td>315224</td>
              <td>
                Men's and Boys' Cut and Sew Trouser, Slack and Jean
                Manufacturing{" "}
              </td>
            </tr>
            <tr>
              <td>2321</td>
              <td>Men's and Boys' Shirts, Except Work Shirts (contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2321</td>
              <td>
                Men's and Boys' Shirts, Except Work Shirts (except contractors)
              </td>
              <td>315223</td>
              <td>
                Men's and Boys' Cut and Sew Shirt (except Work Shirt)
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2311</td>
              <td>Men's and Boys' Suits, Coats, and Overcoats (contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2311</td>
              <td>
                Men's and Boys' Suits, Coats, and Overcoats (except contractors)
              </td>
              <td>315222</td>
              <td>
                Men's and Boys' Cut and Sew Suit, Coat and Overcoat
                Manufacturing{" "}
              </td>
            </tr>
            <tr>
              <td>2322</td>
              <td>Men's and Boys' Underwear and Nightwear (contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2322</td>
              <td>
                Men's and Boys' Underwear and Nightwear (except contractors)
              </td>
              <td>315221</td>
              <td>
                Men's and Boys' Cut and Sew Underwear and Nightwear
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2326</td>
              <td>Men's and Boys' Work Clothing (contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2326</td>
              <td>Men's and Boys' Work Clothing (except contractors)</td>
              <td>315225</td>
              <td>Men's and Boys' Cut and Sew Work Clothing Manufacturing</td>
            </tr>
            <tr>
              <td>3143</td>
              <td>Men's Footwear, Except Athletic</td>
              <td>316213</td>
              <td>Men's Footwear (except Athletic) Manufacturing</td>
            </tr>
            <tr>
              <td>5611</td>
              <td>
                Men's and Boys' Clothing and Accessory Stores (clothing stores)
              </td>
              <td>448110</td>
              <td>Men's Clothing Stores</td>
            </tr>
            <tr>
              <td>5136</td>
              <td>
                Men's and Boys' Clothing and Furnishings (men's and boys'
                apparel, except uniforms and work clothing, sold via retail
                method)
              </td>
              <td>448110</td>
              <td>Men's Clothing Stores</td>
            </tr>
            <tr>
              <td>5136</td>
              <td>
                Men's and Boys' Clothing and Furnishings (merchant wholesalers
                of athletic uniforms)
              </td>
              <td>423910</td>
              <td>
                Sporting and Recreational Goods and Supplies Merchant
                Wholesalers
              </td>
            </tr>
            <tr>
              <td>5136</td>
              <td>
                Men's and Boys' Clothing and Furnishings (uniforms and work
                clothing sold via retail method)
              </td>
              <td>448190</td>
              <td>Other Clothing Stores</td>
            </tr>
            <tr>
              <td>2323</td>
              <td>Men's and Boys' Neckwear (contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>3411</td>
              <td>Metal Cans</td>
              <td>332431</td>
              <td>Metal Can Manufacturing</td>
            </tr>
            <tr>
              <td>3442</td>
              <td>Metal Doors, Sash, Frames, Molding, and Trim</td>
              <td>332321</td>
              <td>Metal Window and Door Manufacturing </td>
            </tr>
            <tr>
              <td>3497</td>
              <td>Metal Foil and Leaf (foil and foil containers)</td>
              <td>332999</td>
              <td>
                All Other Miscellaneous Fabricated Metal Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>3497</td>
              <td>
                Metal Foil and Leaf (laminated aluminum foil rolls and sheets
                for flexible packaging uses)
              </td>
              <td>322225</td>
              <td>
                Laminated Aluminum Foil Manufacturing for Flexible Packaging
                Uses
              </td>
            </tr>
            <tr>
              <td>3398</td>
              <td>Metal Heat Treating</td>
              <td>332811</td>
              <td>Metal Heat Treating</td>
            </tr>
            <tr>
              <td>2514</td>
              <td>
                Metal Household Furniture (except upholstered metal furniture
                and metal box spring frames)
              </td>
              <td>337124</td>
              <td>Metal Household Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>2514</td>
              <td>Metal Household Furniture (metal box spring frames)</td>
              <td>337215</td>
              <td>Showcase, Partition, Shelving, and Locker Manufacturing</td>
            </tr>
            <tr>
              <td>2514</td>
              <td>Metal Household Furniture (upholstered)</td>
              <td>337121</td>
              <td>Upholstered Household Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>1081</td>
              <td>
                Metal Mining Services (except site preparation and related
                activities performed on a contract or fee basis and geophysical
                surveying and mapping)
              </td>
              <td>213114</td>
              <td>Support Activities for Metal Mining</td>
            </tr>
            <tr>
              <td>1081</td>
              <td>Metal Mining Services (geophysical surveying and mapping)</td>
              <td>541360</td>
              <td>Geophysical Surveying and Mapping Services</td>
            </tr>
            <tr>
              <td>1081</td>
              <td>
                Metal Mining Services (site preparation and related construction
                activities on a contract basis)
              </td>
              <td>238910</td>
              <td>Site Preparation Contractors</td>
            </tr>
            <tr>
              <td>3412</td>
              <td>Metal Shipping Barrels, Drums, Kegs, and Pails</td>
              <td>332439</td>
              <td>Other Metal Container Manufacturing</td>
            </tr>
            <tr>
              <td>3469</td>
              <td>
                Metal Stampings, NEC (except kitchen utensils, pots and pans for
                cooking, coins, and stamped metal boxes)
              </td>
              <td>332116</td>
              <td>Metal Stamping</td>
            </tr>
            <tr>
              <td>3469</td>
              <td>
                Metal Stampings, NEC (kitchen utensils, pots, and pans for
                cooking)
              </td>
              <td>332214</td>
              <td>Kitchen Utensil, Pot, and Pan Manufacturing</td>
            </tr>
            <tr>
              <td>3469</td>
              <td>
                Metal Stampings, NEC (stamped metal tool, cash, mail, and lunch
                boxes)
              </td>
              <td>332439</td>
              <td>Other Metal Container Manufacturing</td>
            </tr>
            <tr>
              <td>5051</td>
              <td>Metals Service Centers and Offices (agents and brokers) </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5051</td>
              <td>
                Metals Service Centers and Offices (business to business
                electronic markets){" "}
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5051</td>
              <td>
                Metals Service Centers and Offices (merchant wholesalers){" "}
              </td>
              <td>423510</td>
              <td>
                Metal Service Centers and Other Metal Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>3549</td>
              <td>Metalworking Machinery, NEC</td>
              <td>333518</td>
              <td>Other Metalworking Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>2431</td>
              <td>Millwork (except wood doors and windows)</td>
              <td>321918</td>
              <td>Other Millwork (including Flooring ) </td>
            </tr>
            <tr>
              <td>2431</td>
              <td>Millwork (wood windows and doors)</td>
              <td>321911</td>
              <td>Wood Window and Door Manufacturing</td>
            </tr>
            <tr>
              <td>3296</td>
              <td>Mineral Wool</td>
              <td>327993</td>
              <td>Mineral Wool Manufacturing</td>
            </tr>
            <tr>
              <td>3295</td>
              <td>
                Minerals and Earths, Ground or Otherwise Treated (except
                grinding, washing, separating, etc. of nonmetallic minerals)
              </td>
              <td>327992</td>
              <td>Ground or Treated Mineral and Earth Manufacturing</td>
            </tr>
            <tr>
              <td>3295</td>
              <td>
                Minerals and Earths, Ground or Otherwise Treated (grinding,
                washing, separating, etc. of chemical and fertilizer minerals,
                nec)
              </td>
              <td>212393</td>
              <td>Other Chemical and Fertilizer Mineral Mining</td>
            </tr>
            <tr>
              <td>3295</td>
              <td>
                Minerals and Earths, Ground or Otherwise Treated (grinding,
                washing, separating, etc. of clay, ceramic, and refractory
                minerals nec)
              </td>
              <td>212325</td>
              <td>Clay and Ceramic and Refractory Minerals Mining</td>
            </tr>
            <tr>
              <td>3295</td>
              <td>
                Minerals and Earths, Ground or Otherwise Treated (grinding,
                washing, separating, etc. of kaolin and ball clay)
              </td>
              <td>212324</td>
              <td>Kaolin and Ball Clay Mining</td>
            </tr>
            <tr>
              <td>3295</td>
              <td>
                Minerals and Earths, Ground or Otherwise Treated (grinding,
                washing, separating, etc. of nonmetallic minerals, nec)
              </td>
              <td>212399</td>
              <td>All Other Nonmetallic Mineral Mining</td>
            </tr>
            <tr>
              <td>3532</td>
              <td>
                Mining Machinery and Equipment, Except Oil and Gas Field
                Machinery and Equipment
              </td>
              <td>333131</td>
              <td>Mining Machinery and Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>5699</td>
              <td>Miscellaneous Apparel and Accessory Stores (accessories)</td>
              <td>448150</td>
              <td>Clothing Accessories Stores</td>
            </tr>
            <tr>
              <td>5699</td>
              <td>
                Miscellaneous Apparel and Accessory Stores (custom dressmakers)
              </td>
              <td>315233</td>
              <td>Women's and Girls' Cut and Sew Dress Manufacturing</td>
            </tr>
            <tr>
              <td>5699</td>
              <td>
                Miscellaneous Apparel and Accessory Stores (custom tailors)
              </td>
              <td>315222</td>
              <td>
                Men's and Boys' Cut and Sew Suit, Coat, and Overcoat
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>5699</td>
              <td>
                Miscellaneous Apparel and Accessory Stores (custom tailors)
              </td>
              <td>315223</td>
              <td>
                Men's and Boys' Cut and Sew Shirt (except Work Shirt)
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>5699</td>
              <td>
                Miscellaneous Apparel and Accessory Stores (miscellaneous
                apparel except accessories and custom tailors)
              </td>
              <td>448190</td>
              <td>Other Clothing Stores </td>
            </tr>
            <tr>
              <td>6159</td>
              <td>
                Miscellaneous Business Credit Institutions (except trade banks,
                farm mortgage companies, secondary market financing, and finance
                leasing combined with sales financing)
              </td>
              <td>522298</td>
              <td>All Other Nondepository Credit Intermediation</td>
            </tr>
            <tr>
              <td>6159</td>
              <td>
                Miscellaneous Business Credit Institutions (farm mortgage
                companies)
              </td>
              <td>522292</td>
              <td>Real Estate Credit</td>
            </tr>
            <tr>
              <td>6159</td>
              <td>
                Miscellaneous Business Credit Institutions (finance leasing
                combined with sales financing)
              </td>
              <td>522220</td>
              <td>Sales Financing</td>
            </tr>
            <tr>
              <td>6159</td>
              <td>
                Miscellaneous Business Credit Institutions (secondary market
                financing)
              </td>
              <td>522294</td>
              <td>Secondary Market Financing</td>
            </tr>
            <tr>
              <td>6159</td>
              <td>Miscellaneous Business Credit Institutions (trade banks)</td>
              <td>522293</td>
              <td>International Trade Financing</td>
            </tr>
            <tr>
              <td>7389</td>
              <td>Miscellaneous Business Services (bail bonding)</td>
              <td>812990</td>
              <td>All Other Personal Services</td>
            </tr>
            <tr>
              <td>3496</td>
              <td>
                Miscellaneous Fabricated Wire Products (except shopping carts
                and potato mashers)
              </td>
              <td>332618</td>
              <td>Other Fabricated Wire Product Manufacturing</td>
            </tr>
            <tr>
              <td>3496</td>
              <td>Miscellaneous Fabricated Wire Products (potato mashers)</td>
              <td>332214</td>
              <td>Kitchen Utensil, Pot, and Pan Manufacturing</td>
            </tr>
            <tr>
              <td>3496</td>
              <td>
                Miscellaneous Fabricated Wire Products (shopping carts made from
                purchased wire)
              </td>
              <td>333924</td>
              <td>
                Industrial Truck, Tractor, Trailer, and Stacker Machinery
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>5499</td>
              <td>
                Miscellaneous Food Stores (except food supplement stores and
                poultry stores)
              </td>
              <td>445299</td>
              <td>All Other Specialty Food Stores</td>
            </tr>
            <tr>
              <td>5499</td>
              <td>Miscellaneous Food Stores (food supplements)</td>
              <td>446191</td>
              <td>Food (Health) Supplement Stores</td>
            </tr>
            <tr>
              <td>5499</td>
              <td>Miscellaneous Food Stores (poultry and poultry products)</td>
              <td>445210</td>
              <td>Meat Markets</td>
            </tr>
            <tr>
              <td>5399</td>
              <td>
                Miscellaneous General Merchandise Stores (except warehouse club
                and supermarket/general merchandise combination)
              </td>
              <td>452990</td>
              <td>All Other General Merchandise Stores</td>
            </tr>
            <tr>
              <td>5399</td>
              <td>
                Miscellaneous General Merchandise Stores (warehouse clubs and
                supermarket/general merchandise combination)
              </td>
              <td>452910</td>
              <td>Warehouse Clubs and Supercenters</td>
            </tr>
            <tr>
              <td>5719</td>
              <td>Miscellaneous Homefurnishings Stores (blinds and shades)</td>
              <td>442291</td>
              <td>Window Treatment Stores</td>
            </tr>
            <tr>
              <td>5719</td>
              <td>
                Miscellaneous Homefurnishings Stores (except pottery and crafts
                made and sold on site and window furnishings){" "}
              </td>
              <td>442299</td>
              <td>All Other Home Furnishings Stores</td>
            </tr>
            <tr>
              <td>5719</td>
              <td>
                Miscellaneous Homefurnishings Stores (manufacturing and selling
                pottery on site)
              </td>
              <td>327112</td>
              <td>
                Vitreous China, Fine Earthenware, and Other Pottery Product
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>0919</td>
              <td>Miscellaneous Marine Products (catching sea urchins)</td>
              <td>114112</td>
              <td>Shellfish Fishing</td>
            </tr>
            <tr>
              <td>0919</td>
              <td>Miscellaneous Marine Products (cultured pearl production)</td>
              <td>112512</td>
              <td>Shellfish Farming</td>
            </tr>
            <tr>
              <td>0919</td>
              <td>
                Miscellaneous Marine Products (except plant aquaculture,
                cultured pearl production, and catching sea urchins)
              </td>
              <td>114119</td>
              <td>Other Marine Fishing</td>
            </tr>
            <tr>
              <td>0919</td>
              <td>Miscellaneous Marine Products (plant aquaculture)</td>
              <td>112519</td>
              <td>Other Animal Aquaculture</td>
            </tr>
            <tr>
              <td>1099</td>
              <td>Miscellaneous Metal Ores, NEC</td>
              <td>212299</td>
              <td>All Other Metal Ore Mining</td>
            </tr>
            <tr>
              <td>1499</td>
              <td>
                Miscellaneous Nonmetallic Minerals, Except Fuels (bituminous
                limestone and bituminous sandstone)
              </td>
              <td>212319</td>
              <td>Other Crushed and Broken Stone Mining and Quarrying</td>
            </tr>
            <tr>
              <td>1499</td>
              <td>
                Miscellaneous Nonmetallic Minerals, Except Fuels (except
                bituminous limestone and bituminous sandstone)
              </td>
              <td>212399</td>
              <td>All Other Nonmetallic Mineral Mining</td>
            </tr>
            <tr>
              <td>7299</td>
              <td>
                Miscellaneous Personal Services, NEC (babysitting bureaus)
              </td>
              <td>561311</td>
              <td>Employment Placement Agencies</td>
            </tr>
            <tr>
              <td>7299</td>
              <td>
                Miscellaneous Personal Services, NEC (consumer bartering
                services)
              </td>
              <td>561990</td>
              <td>All Other Support Services</td>
            </tr>
            <tr>
              <td>7299</td>
              <td>
                Miscellaneous Personal Services, NEC (consumer credit and debt
                counseling services)
              </td>
              <td>541990</td>
              <td>
                All Other Professional, Scientific, and Technical Services
              </td>
            </tr>
            <tr>
              <td>7299</td>
              <td>
                Miscellaneous Personal Services, NEC (diet and weight reducing
                services)
              </td>
              <td>812191</td>
              <td>Diet and Weight Reducing Centers</td>
            </tr>
            <tr>
              <td>7299</td>
              <td>
                Miscellaneous Personal Services, NEC (except diet and weight
                reducing services, personal care services, valet parking
                services, babysitting bureaus, debt and credit counseling,
                consumer bartering services, and formal wear and costume rental)
              </td>
              <td>812990</td>
              <td>All Other Personal Services</td>
            </tr>
            <tr>
              <td>7299</td>
              <td>
                Miscellaneous Personal Services, NEC (formal wear and costume
                rental)
              </td>
              <td>532220</td>
              <td>Formal Wear and Costume Rental</td>
            </tr>
            <tr>
              <td>7299</td>
              <td>
                Miscellaneous Personal Services, NEC (personal care services)
              </td>
              <td>812199</td>
              <td>Other Personal Care Services</td>
            </tr>
            <tr>
              <td>7299</td>
              <td>
                Miscellaneous Personal Services, NEC (valet parking services)
              </td>
              <td>812930</td>
              <td>Parking Lots and Garages</td>
            </tr>
            <tr>
              <td>2741</td>
              <td>
                Miscellaneous Publishing (directory publishers, except Internet
                publishers)
              </td>
              <td>511140</td>
              <td>Directory and Mailing List Publishers</td>
            </tr>
            <tr>
              <td>2741</td>
              <td>
                Miscellaneous Publishing (except database, advertising
                periodicals, shopping news, technical manuals and books, and
                sheet music publishing or publishing and printing and Internet
                versions of these activities)
              </td>
              <td>511199</td>
              <td>All Other Publishers</td>
            </tr>
            <tr>
              <td>2741</td>
              <td>
                Miscellaneous Publishing (miscellaneous Internet publishing)
              </td>
              <td>519130</td>
              <td>
                Internet Publishing and Broadcasting and Web Search Portals
              </td>
            </tr>
            <tr>
              <td>2741</td>
              <td>
                Miscellaneous Publishing (sheet music publishing or publishing
                and printing)
              </td>
              <td>512230</td>
              <td>Music Publishers</td>
            </tr>
            <tr>
              <td>2741</td>
              <td>
                Miscellaneous Publishing (shopping news and advertising
                periodical publishing or publishing and printing except
                Internet)
              </td>
              <td>511120</td>
              <td>Periodical Publishers</td>
            </tr>
            <tr>
              <td>2741</td>
              <td>
                Miscellaneous Publishing (technical manuals and books publishing
                or publishing and printing, except Internet)
              </td>
              <td>511130</td>
              <td> Book Publishers</td>
            </tr>
            <tr>
              <td>5999</td>
              <td>Miscellaneous Retail Stores, NEC (art dealer)</td>
              <td>453920</td>
              <td>Art Dealers</td>
            </tr>
            <tr>
              <td>5999</td>
              <td>
                Miscellaneous Retail Stores, NEC (except art dealers, pet and
                pet supplies, hearing aids, artificial limbs, cosmetics,
                telephones, sunglasses, manufacture of orthopedic devices to
                prescription in a retail environment, and typewriters)
              </td>
              <td>453998</td>
              <td>
                All Other Miscellaneous Store Retailers (except Tobacco Stores)
              </td>
            </tr>
            <tr>
              <td>5999</td>
              <td>Miscellaneous Retail Stores, NEC (cosmetics and perfumes)</td>
              <td>446120</td>
              <td>Cosmetics, Beauty Supplies, and Perfume Stores</td>
            </tr>
            <tr>
              <td>5999</td>
              <td>
                Miscellaneous Retail Stores, NEC (hearing aids and artificial
                limbs)
              </td>
              <td>446199</td>
              <td>All Other Health and Personal Care Stores </td>
            </tr>
            <tr>
              <td>5999</td>
              <td>
                Miscellaneous Retail Stores, NEC (manufacture of orthopedic
                devices to prescription in a retail environment)
              </td>
              <td>339113</td>
              <td>Surgical Appliance and Supplies Manufacturing</td>
            </tr>
            <tr>
              <td>5999</td>
              <td>Miscellaneous Retail Stores, NEC (pet and pet supplies)</td>
              <td>453910</td>
              <td>Pet and Pet Supplies Stores</td>
            </tr>
            <tr>
              <td>5999</td>
              <td>
                Miscellaneous Retail Stores, NEC (typewriters and telephones)
              </td>
              <td>443112</td>
              <td>Radio, Television, and Other Electronics Stores</td>
            </tr>
            <tr>
              <td>3449</td>
              <td>
                Miscellaneous Structural Metal Work (curtain wall and metal
                plaster bases and lath)
              </td>
              <td>332323</td>
              <td>Ornamental and Architectural Metal Work Manufacturing</td>
            </tr>
            <tr>
              <td>3449</td>
              <td>Miscellaneous Structural Metal Work (custom roll forming)</td>
              <td>332114</td>
              <td>Custom Roll Forming</td>
            </tr>
            <tr>
              <td>3449</td>
              <td>
                Miscellaneous Structural Metal Work (fabricated bar joists and
                concrete reinforcing bars)
              </td>
              <td>332312</td>
              <td>Fabricated Structural Metal Manufacturing</td>
            </tr>
            <tr>
              <td>4925</td>
              <td>
                Mixed, Manufactured, or Liquefied Petroleum Gas Production
                and/or Distribution
              </td>
              <td>221210</td>
              <td>Natural Gas Distribution</td>
            </tr>
            <tr>
              <td>5271</td>
              <td>Mobile Home Dealers</td>
              <td>453930</td>
              <td>Manufactured (Mobile) Home Dealers</td>
            </tr>
            <tr>
              <td>2451</td>
              <td>Mobile Homes</td>
              <td>321991</td>
              <td>Manufactured Home (Mobile Home) Manufacturing</td>
            </tr>
            <tr>
              <td>3061</td>
              <td>Molded, Extruded, and Lathe-Cut Mechanical Rubber Goods</td>
              <td>326291</td>
              <td>Rubber Product Manufacturing for Mechanical Use</td>
            </tr>
            <tr>
              <td>6162</td>
              <td>
                Mortgage Bankers and Loan Correspondents (mortgage servicing)
              </td>
              <td>522390</td>
              <td>Other Activities Related to Credit Intermediation</td>
            </tr>
            <tr>
              <td>6162</td>
              <td>
                Mortgage Bankers and Loan Correspondents (mortgage bankers and
                originators)
              </td>
              <td>522292</td>
              <td>Real Estate Credit</td>
            </tr>
            <tr>
              <td>7822</td>
              <td>
                Motion Picture and Video Tape Distribution (except video tape
                and cassette wholesalers)
              </td>
              <td>512120</td>
              <td>Motion Picture and Video Distribution</td>
            </tr>
            <tr>
              <td>7822</td>
              <td>
                Motion Picture and Video Tape Distribution (prerecorded video
                tape and cassette wholesalers)
              </td>
              <td>423990</td>
              <td>Other Miscellaneous Durable Goods Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>7812</td>
              <td>Motion Picture and Video Tape Production</td>
              <td>512110</td>
              <td>Motion Picture and Video Production</td>
            </tr>
            <tr>
              <td>7832</td>
              <td>Motion Picture Theaters, Except Drive-In</td>
              <td>512131</td>
              <td>Motion Picture Theaters (except Drive-Ins)</td>
            </tr>
            <tr>
              <td>3716</td>
              <td>Motor Homes</td>
              <td>336213</td>
              <td>Motor Home Manufacturing</td>
            </tr>
            <tr>
              <td>5511</td>
              <td>Motor Vehicle Dealers (New and Used)</td>
              <td>441110</td>
              <td>New Car Dealers</td>
            </tr>
            <tr>
              <td>5521</td>
              <td>Motor Vehicle Dealers (Used Only)</td>
              <td>441120</td>
              <td>Used Car Dealers</td>
            </tr>
            <tr>
              <td>3714</td>
              <td>
                Motor Vehicle Parts and Accessories (brake and brake systems,
                including assemblies)
              </td>
              <td>336340</td>
              <td>Motor Vehicle Brake System Manufacturing</td>
            </tr>
            <tr>
              <td>3714</td>
              <td>
                Motor Vehicle Parts and Accessories (dump truck lifting
                mechanisms and fifth wheels)
              </td>
              <td>336211</td>
              <td>Motor Vehicle Body Manufacturing</td>
            </tr>
            <tr>
              <td>3714</td>
              <td>
                Motor Vehicle Parts and Accessories (except truck and bus
                bodies, trailers, engine and engine parts, motor vehicle
                electrical and electronic equipment, motor vehicle steering and
                suspension components, motor vehicle brake systems, and motor
                vehicle transmission and power train parts){" "}
              </td>
              <td>336399</td>
              <td>All Other Motor Vehicle Parts Manufacturing</td>
            </tr>
            <tr>
              <td>3714</td>
              <td>
                Motor Vehicle Parts and Accessories (gasoline engines and engine
                parts including rebuilt)
              </td>
              <td>336312</td>
              <td>Gasoline Engine and Engine Parts Manufacturing</td>
            </tr>
            <tr>
              <td>3714</td>
              <td>
                Motor Vehicle Parts and Accessories (steering and suspension
                parts)
              </td>
              <td>336330</td>
              <td>
                Motor Vehicle Steering and Suspension Components (except Spring)
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3714</td>
              <td>
                Motor Vehicle Parts and Accessories (transmissions and power
                train parts, including rebuilding)
              </td>
              <td>336350</td>
              <td>
                Motor Vehicle Transmission and Power Train Parts Manufacturing
              </td>
            </tr>
            <tr>
              <td>3714</td>
              <td>
                Motor Vehicle Parts and Accessories (wiring harness sets, other
                than ignition; block heaters and battery heaters; instrument
                board assemblies; permanent defrosters; windshield washer-wiper
                mechanisms; cruise control mechanisms; and other electrical
                equipment for internal combustion engines)
              </td>
              <td>336322</td>
              <td>
                Other Motor Vehicle Electrical and Electronic Equipment
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>5015</td>
              <td>Motor Vehicle Parts, Used (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5015</td>
              <td>
                Motor Vehicle Parts, Used (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5015</td>
              <td>
                Motor Vehicle Parts, Used (merchant wholesalers except those
                selling via retail method)
              </td>
              <td>423140</td>
              <td>Motor Vehicle Parts (Used) Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5015</td>
              <td>
                Motor Vehicle Parts, Used (used auto parts sold via the retail
                method)
              </td>
              <td>441310</td>
              <td>Automotive Parts and Accessories Stores</td>
            </tr>
            <tr>
              <td>5013</td>
              <td>Motor Vehicle Supplies and New Parts (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5013</td>
              <td>
                Motor Vehicle Supplies and New Parts (auto parts sold via retail
                method)
              </td>
              <td>441310</td>
              <td>Automotive Parts and Accessories Stores</td>
            </tr>
            <tr>
              <td>5013</td>
              <td>
                Motor Vehicle Supplies and New Parts (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5013</td>
              <td>
                Motor Vehicle Supplies and New Parts (merchant wholesalers
                except those selling via retail method){" "}
              </td>
              <td>423120</td>
              <td>Motor Vehicle Supplies and New Parts Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>3711</td>
              <td>Motor Vehicles and Passenger Car Bodies (automobiles)</td>
              <td>336111</td>
              <td>Automobile Manufacturing</td>
            </tr>
            <tr>
              <td>3711</td>
              <td>
                Motor Vehicles and Passenger Car Bodies (heavy duty trucks)
              </td>
              <td>336120</td>
              <td>Heavy Duty Truck Manufacturing</td>
            </tr>
            <tr>
              <td>3711</td>
              <td>
                Motor Vehicles and Passenger Car Bodies (kit car and other
                passenger car bodies)
              </td>
              <td>336211</td>
              <td>Motor Vehicle Body Manufacturing</td>
            </tr>
            <tr>
              <td>3711</td>
              <td>
                Motor Vehicles and Passenger Car Bodies (light trucks and
                utility vehicles)
              </td>
              <td>336112</td>
              <td>Light Truck and Utility Vehicle Manufacturing </td>
            </tr>
            <tr>
              <td>3711</td>
              <td>
                Motor Vehicles and Passenger Car Bodies (military armored
                vehicles)
              </td>
              <td>336992</td>
              <td>
                Military Armored Vehicle, Tank, and Tank Component Manufacturing
              </td>
            </tr>
            <tr>
              <td>5571</td>
              <td>Motorcycle Dealers</td>
              <td>441221</td>
              <td>Motorcycle Dealers</td>
            </tr>
            <tr>
              <td>3751</td>
              <td>Motorcycles, Bicycles, and Parts</td>
              <td>336991</td>
              <td>Motorcycle, Bicycle, and Parts Manufacturing</td>
            </tr>
            <tr>
              <td>3621</td>
              <td>Motors and Generators</td>
              <td>335312</td>
              <td>Motor and Generator Manufacturing</td>
            </tr>
            <tr>
              <td>8412</td>
              <td>
                Museums and Art Galleries (except historic and heritage sites)
              </td>
              <td>712110</td>
              <td>Museums</td>
            </tr>
            <tr>
              <td>8412</td>
              <td>Museums and Art Galleries (historic and heritage sites)</td>
              <td>712120</td>
              <td>Historical Sites</td>
            </tr>
            <tr>
              <td>3931</td>
              <td>Musical Instruments</td>
              <td>339992</td>
              <td>Musical Instrument Manufacturing</td>
            </tr>
            <tr>
              <td>5736</td>
              <td>Musical Instruments Stores</td>
              <td>451140</td>
              <td>Musical Instrument and Supplies Stores</td>
            </tr>
            <tr>
              <td>2441</td>
              <td>Nailed and Lock Corner Wood Boxes and Shook</td>
              <td>321920</td>
              <td>Wood Container and Pallet Manufacturing</td>
            </tr>
            <tr>
              <td>2241</td>
              <td>
                Narrow Fabric and Other Smallware Mills: Cotton, Wool, Silk and
                Manmade Fiber
              </td>
              <td>313221</td>
              <td>Narrow Fabric Mills</td>
            </tr>
            <tr>
              <td>6021</td>
              <td>National Commercial Banks (banking)</td>
              <td>522110</td>
              <td>Commercial Banking</td>
            </tr>
            <tr>
              <td>6021</td>
              <td>National Commercial Banks (credit card issuing)</td>
              <td>522210</td>
              <td>Credit Card Issuing</td>
            </tr>
            <tr>
              <td>9711</td>
              <td>National Security</td>
              <td>928110</td>
              <td>National Security</td>
            </tr>
            <tr>
              <td>4924</td>
              <td>Natural Gas Distribution</td>
              <td>221210</td>
              <td>Natural Gas Distribution</td>
            </tr>
            <tr>
              <td>1321</td>
              <td>Natural Gas Liquids</td>
              <td>211112</td>
              <td>Natural Gas Liquid Extraction</td>
            </tr>
            <tr>
              <td>4922</td>
              <td>Natural Gas Transmission</td>
              <td>486210</td>
              <td>Pipeline Transportation of Natural Gas</td>
            </tr>
            <tr>
              <td>4923</td>
              <td>Natural Gas Transmission and Distribution (distribution)</td>
              <td>221210</td>
              <td>Natural Gas Distribution</td>
            </tr>
            <tr>
              <td>4923</td>
              <td>Natural Gas Transmission and Distribution (transmission)</td>
              <td>486210</td>
              <td>Pipeline Transportation of Natural Gas</td>
            </tr>
            <tr>
              <td>2022</td>
              <td>Natural, Processed, and Imitation Cheese</td>
              <td>311513</td>
              <td>Cheese Manufacturing</td>
            </tr>
            <tr>
              <td>5994</td>
              <td>News Dealers and Newsstands </td>
              <td>451212</td>
              <td>News Dealers and Newsstands</td>
            </tr>
            <tr>
              <td>7383</td>
              <td>News Syndicates (except independent news correspondents)</td>
              <td>519110</td>
              <td>News Syndicates</td>
            </tr>
            <tr>
              <td>7383</td>
              <td>News Syndicates (independent news correspondents)</td>
              <td>711510</td>
              <td>Independent Artists, Writers, and Performers</td>
            </tr>
            <tr>
              <td>2711</td>
              <td>
                Newspapers: Publishing, or Publishing and Printing (except
                Internet newspaper publishing)
              </td>
              <td>511110</td>
              <td>Newspaper Publishers</td>
            </tr>
            <tr>
              <td>2711</td>
              <td>
                Newspapers: Publishing, or Publishing and Printing (Internet
                newspaper publishing)
              </td>
              <td>519130</td>
              <td>
                Internet Publishing and Broadcasting and Web Search Portals
              </td>
            </tr>
            <tr>
              <td>2873</td>
              <td>Nitrogenous Fertilizers</td>
              <td>325311</td>
              <td>Nitrogenous Fertilizer Manufacturing</td>
            </tr>
            <tr>
              <td>3297</td>
              <td>Nonclay Refractories</td>
              <td>327125</td>
              <td>Nonclay Refractory Manufacturing</td>
            </tr>
            <tr>
              <td>8733</td>
              <td>
                Noncommercial Research Organizations (physical, engineering, and
                life sciences)
              </td>
              <td>541712</td>
              <td>
                Research and Development in the Physical, Engineering, and Life
                Sciences (except biotechnology)
              </td>
            </tr>
            <tr>
              <td>8733</td>
              <td>
                Noncommercial Research Organizations (social sciences and
                humanities)
              </td>
              <td>541712</td>
              <td>
                Research and Development in the Physical, Engineering, and Life
                Sciences (except biotechnology)
              </td>
            </tr>
            <tr>
              <td>3644</td>
              <td>
                Noncurrent-Carrying Wiring Devices (except fishwire, electrical
                wiring tool)
              </td>
              <td>335932</td>
              <td>Noncurrent-Carrying Wiring Device Manufacturing</td>
            </tr>
            <tr>
              <td>3644</td>
              <td>
                Noncurrent-Carrying Wiring Devices (fish wire, electrical wiring
                tool)
              </td>
              <td>332212</td>
              <td>Hand and Edge Tool Manufacturing</td>
            </tr>
            <tr>
              <td>6091</td>
              <td>Nondeposit Trust Facilities </td>
              <td>523991</td>
              <td>Trust, Fiduciary, and Custody Activities</td>
            </tr>
            <tr>
              <td>5199</td>
              <td>
                Nondurable Goods, NEC (advertising specialties goods
                distributors)
              </td>
              <td>541890</td>
              <td>Other Services Related to Advertising</td>
            </tr>
            <tr>
              <td>5199</td>
              <td>Nondurable Goods, NEC (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5199</td>
              <td>
                Nondurable Goods, NEC (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5199</td>
              <td>
                Nondurable Goods, NEC (curios, statuary, gifts, novelties, and
                souvenirs sold via retail method)
              </td>
              <td>453220</td>
              <td>Gift, Novelty, and Souvenir Stores</td>
            </tr>
            <tr>
              <td>5199</td>
              <td>
                Nondurable Goods, NEC (merchant wholesalers except advertising
                specialties goods distributors, wholesaling footwear cutstock,
                wholesaling plastics foam, wholesaling industrial yarns and
                merchant wholesalers selling miscellaneous nondurable goods via
                the retail method)
              </td>
              <td>424990</td>
              <td>Other Miscellaneous Nondurable Goods Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5199</td>
              <td>
                Nondurable Goods, NEC (merchant wholesalers of footwear
                cutstock)
              </td>
              <td>424340</td>
              <td>Footwear Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5199</td>
              <td>
                Nondurable Goods, NEC (merchant wholesalers of plastics foam)
              </td>
              <td>424610</td>
              <td>
                Plastics Materials and Basic Forms and Shapes Merchant
                Wholesalers
              </td>
            </tr>
            <tr>
              <td>5199</td>
              <td>
                Nondurable Goods, NEC (merchant wholesalers of yarns, except
                industrial)
              </td>
              <td>424310</td>
              <td>
                Piece Goods, Notions, and Other Dry Goods Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>5199</td>
              <td>
                Nondurable Goods, NEC (pets, pet supplies and tropical fish sold
                via retail method)
              </td>
              <td>453910</td>
              <td>Pet and Pet Supplies Stores</td>
            </tr>
            <tr>
              <td>5199</td>
              <td>
                Nondurable Goods, NEC (smokers' supplies sold via retail method)
              </td>
              <td>453991</td>
              <td>Tobacco Stores</td>
            </tr>
            <tr>
              <td>3364</td>
              <td>Nonferrous Die-Castings, Except Aluminum</td>
              <td>331522</td>
              <td>Nonferrous (except Aluminum) Die-Casting Foundries</td>
            </tr>
            <tr>
              <td>3463</td>
              <td>Nonferrous Forgings</td>
              <td>332112</td>
              <td>Nonferrous Forging</td>
            </tr>
            <tr>
              <td>3369</td>
              <td>Nonferrous Foundries, Except Aluminum and Copper</td>
              <td>331528</td>
              <td>Other Nonferrous Foundries (except Die-Casting)</td>
            </tr>
            <tr>
              <td>3299</td>
              <td>Nonmetallic Mineral Products, NEC (clay statuary)</td>
              <td>327112</td>
              <td>
                Vitreous China, Fine Earthenware, and Other Pottery Product
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3299</td>
              <td>
                Nonmetallic Mineral Products, NEC (except moldings, ornamental
                and architectural plaster work, clay statuary, and gypsum
                statuary)
              </td>
              <td>327999</td>
              <td>
                All Other Miscellaneous Nonmetallic Mineral Product
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3299</td>
              <td>
                Nonmetallic Mineral Products, NEC (moldings, ornamental and
                architectural plaster work, and gypsum statuary )
              </td>
              <td>327420</td>
              <td>Gypsum Product Manufacturing</td>
            </tr>
            <tr>
              <td>1481</td>
              <td>
                Nonmetallic Minerals Services, Except Fuels (except geophysical
                surveying and mapping and site preparation and related
                construction activities performed on a contract or fee basis)
              </td>
              <td>213115</td>
              <td>
                Support Activities for Nonmetallic Minerals (except Fuels)
              </td>
            </tr>
            <tr>
              <td>1481</td>
              <td>
                Nonmetallic Minerals Services, Except Fuels (geophysical
                surveying and mapping)
              </td>
              <td>541360</td>
              <td>Geophysical Surveying and Mapping Services</td>
            </tr>
            <tr>
              <td>1481</td>
              <td>
                Nonmetallic Minerals Services, Except Fuels (site preparation
                and related construction activities on a contract basis)
              </td>
              <td>238910</td>
              <td>Site Preparation Contractors</td>
            </tr>
            <tr>
              <td>2297</td>
              <td>Nonwoven Fabrics</td>
              <td>313230</td>
              <td>Nonwoven Fabric Mills</td>
            </tr>
            <tr>
              <td></td>
              <td>Null Set for U.S.</td>
              <td>112130</td>
              <td>Dual Purpose Cattle Ranching and Farming</td>
            </tr>
            <tr>
              <td></td>
              <td>Null Set for U.S.</td>
              <td>541120</td>
              <td>Offices of Notaries</td>
            </tr>
            <tr>
              <td>8059</td>
              <td>
                Nursing and Personal Care Facilities, NEC (continuing care
                retirement communities)
              </td>
              <td>623311</td>
              <td>Continuing Care Retirement Communities </td>
            </tr>
            <tr>
              <td>8059</td>
              <td>
                Nursing and Personal Care Facilities, NEC (except continuing
                care retirement communities, psychiatric convalescent homes with
                health care, and homes for the mentally retarded with health
                care)
              </td>
              <td>623110</td>
              <td>Nursing Care Facilities</td>
            </tr>
            <tr>
              <td>8059</td>
              <td>
                Nursing and Personal Care Facilities, NEC (homes for the
                mentally retarded with health care)
              </td>
              <td>623210</td>
              <td>Residential Mental Retardation Facilities</td>
            </tr>
            <tr>
              <td>2542</td>
              <td>
                Office and Store Fixtures, Partitions, Shelving, and Lockers,
                Except Wood (except lunchroom tables and chairs)
              </td>
              <td>337215</td>
              <td>Showcase, Partition, Shelving, and Locker Manufacturing</td>
            </tr>
            <tr>
              <td>2542</td>
              <td>
                Office and Store Fixtures, Partitions, Shelving, and Lockers,
                Except Wood (lunchroom tables and chairs)
              </td>
              <td>337127</td>
              <td>Institutional Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>5044</td>
              <td>Office Equipment (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5044</td>
              <td>
                Office Equipment (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5044</td>
              <td>
                Office Equipment (merchant wholesalers except those selling
                office equipment via retail method)
              </td>
              <td>423420</td>
              <td>Office Equipment Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5044</td>
              <td>
                Office Equipment (office equipment sold via retail method)
              </td>
              <td>453210</td>
              <td>Office Supplies and Stationary Stores</td>
            </tr>
            <tr>
              <td>2522</td>
              <td>Office Furniture, Except Wood</td>
              <td>337214</td>
              <td>Office Furniture (except Wood) Manufacturing</td>
            </tr>
            <tr>
              <td>3579</td>
              <td>
                Office Machines, NEC (except timeclocks, time stamps, pencil
                sharpeners, stapling machines, etc.)
              </td>
              <td>333313</td>
              <td>Office Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>3579</td>
              <td>
                Office Machines, NEC (pencil sharpeners, staplers and other
                office equipment)
              </td>
              <td>339942</td>
              <td>Lead Pencil and Art Good Manufacturing</td>
            </tr>
            <tr>
              <td>3579</td>
              <td>
                Office Machines, NEC (time clocks and other time recording
                devices)
              </td>
              <td>334518</td>
              <td>Watch, Clock, and Part Manufacturing</td>
            </tr>
            <tr>
              <td>8041</td>
              <td>Offices and Clinics of Chiropractors</td>
              <td>621310</td>
              <td>Offices of Chiropractors</td>
            </tr>
            <tr>
              <td>8021</td>
              <td>Offices and Clinics of Dentists</td>
              <td>621210</td>
              <td>Offices of Dentists</td>
            </tr>
            <tr>
              <td>8011</td>
              <td>
                Offices and Clinics of Doctors of Medicine (ambulatory surgical
                and emergency centers)
              </td>
              <td>621493</td>
              <td>Freestanding Ambulatory Surgical and Emergency Centers</td>
            </tr>
            <tr>
              <td>8011</td>
              <td>
                Offices and Clinics of Doctors of Medicine (except mental health
                specialists, HMO medical centers, and ambulatory surgical and
                emergency centers)
              </td>
              <td>621111</td>
              <td>Offices of Physicians (except Mental Health Specialists)</td>
            </tr>
            <tr>
              <td>8011</td>
              <td>
                Offices and Clinics of Doctors of Medicine (HMO Medical Centers)
              </td>
              <td>621491</td>
              <td>HMO Medical Centers</td>
            </tr>
            <tr>
              <td>8011</td>
              <td>
                Offices and Clinics of Doctors of Medicine (mental health
                specialists)
              </td>
              <td>621112</td>
              <td>Offices of Physicians, Mental Health Specialists</td>
            </tr>
            <tr>
              <td>8031</td>
              <td>
                Offices and Clinics of Doctors of Osteopathy (except mental
                health specialists){" "}
              </td>
              <td>621111</td>
              <td>Offices of Physicians (except Mental Health Specialists)</td>
            </tr>
            <tr>
              <td>8031</td>
              <td>
                Offices and Clinics of Doctors of Osteopathy (mental health
                specialists)
              </td>
              <td>621112</td>
              <td>Offices of Physicians, Mental Health Specialists</td>
            </tr>
            <tr>
              <td>8049</td>
              <td>
                Offices and Clinics of Health Practitioners, NEC (except mental
                health practitioners, physical, occupational, speech therapists,
                and audiologists)
              </td>
              <td>621399</td>
              <td>Offices of All Other Miscellaneous Health Practitioners</td>
            </tr>
            <tr>
              <td>8049</td>
              <td>
                Offices and Clinics of Health Practitioners, NEC (mental health
                practitioners except physicians)
              </td>
              <td>621330</td>
              <td>
                Offices of Mental Health Practitioners (except Physicians)
              </td>
            </tr>
            <tr>
              <td>8049</td>
              <td>
                Offices and Clinics of Health Practitioners, NEC (physical,
                occupational, recreational and speech therapists, and
                audiologists)
              </td>
              <td>621340</td>
              <td>
                Offices of Physical, Occupational Speech Therapists, and
                Audiologists
              </td>
            </tr>
            <tr>
              <td>8042</td>
              <td>Offices and Clinics of Optometrists</td>
              <td>621320</td>
              <td>Offices of Optometrists</td>
            </tr>
            <tr>
              <td>8043</td>
              <td>Offices and Clinics of Podiatrists</td>
              <td>621391</td>
              <td>Offices of Podiatrists</td>
            </tr>
            <tr>
              <td>6712</td>
              <td>Offices of Bank Holding Companies</td>
              <td>551111</td>
              <td>Offices of Bank Holding Companies</td>
            </tr>
            <tr>
              <td>6719</td>
              <td>Offices of Holding Companies, NEC</td>
              <td>551112</td>
              <td>Offices of Other Holding Companies</td>
            </tr>
            <tr>
              <td>1382</td>
              <td>
                Oil and Gas Field Exploration Services (except geophysical
                mapping and surveying)
              </td>
              <td>213112</td>
              <td>Support Activities for Oil and Gas Operations</td>
            </tr>
            <tr>
              <td>1382</td>
              <td>
                Oil and Gas Field Exploration Services (geophysical surveying
                and mapping)
              </td>
              <td>541360</td>
              <td>Geophysical Surveying and Mapping Services</td>
            </tr>
            <tr>
              <td>3533</td>
              <td>Oil and Gas Field Machinery and Equipment</td>
              <td>333132</td>
              <td>Oil and Gas Field Machinery and Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>1389</td>
              <td>
                Oil and Gas Field Services, NEC (construction of field gathering
                lines on a contract or fee basis)
              </td>
              <td>237120</td>
              <td>Oil and Gas Pipeline and Related Structures Construction</td>
            </tr>
            <tr>
              <td>1389</td>
              <td>
                Oil and Gas Field Services, NEC (except construction of field
                gathering lines, site preparation and related construction
                activities performed on a contract or fee basis)
              </td>
              <td>213112</td>
              <td>Support Activities for Oil and Gas Operations</td>
            </tr>
            <tr>
              <td>1389</td>
              <td>
                Oil and Gas Field Services, NEC (site preparation and related
                construction activities on a contract basis)
              </td>
              <td>238910</td>
              <td>Site Preparation Contractors</td>
            </tr>
            <tr>
              <td>6792</td>
              <td>Oil Royalty Traders (investing on own account)</td>
              <td>523910</td>
              <td>Miscellaneous Intermediation</td>
            </tr>
            <tr>
              <td>6792</td>
              <td>Oil Royalty Traders (oil and gas royalty leasing)</td>
              <td>533110</td>
              <td>
                Lessors of Nonfinancial Intangible Assets (except Copyrighted
                Works){" "}
              </td>
            </tr>
            <tr>
              <td>1531</td>
              <td>
                Operative Builders (grain elevator, dry cleaning plant, and
                manufacturing and industrial warehouse operative builders)
              </td>
              <td>236220</td>
              <td>Commercial and Institutional Building Construction</td>
            </tr>
            <tr>
              <td>1531</td>
              <td>
                Operative Builders (Operative builders of industrial and
                manufacturing buildings except grain elevators, dry cleaning
                plants, and manufacturing and industrial warehouses)
              </td>
              <td>236210</td>
              <td>Industrial Building Construction</td>
            </tr>
            <tr>
              <td>1531</td>
              <td>Operative Builders (residential operative builders)</td>
              <td>236117</td>
              <td>New Housing Operative Builders</td>
            </tr>
            <tr>
              <td>1531</td>
              <td>Operative Builders (residential operative remodelers)</td>
              <td>236118</td>
              <td>Residential Remodelers</td>
            </tr>
            <tr>
              <td>6513</td>
              <td>Operators of Apartment Buildings</td>
              <td>531110</td>
              <td>Lessors of Residential Buildings and Dwellings</td>
            </tr>
            <tr>
              <td>6514</td>
              <td>Operators of Dwellings Other Than Apartment Buildings</td>
              <td>531110</td>
              <td>Lessors of Residential Buildings and Dwellings</td>
            </tr>
            <tr>
              <td>6512</td>
              <td>
                Operators of Nonresidential Buildings (except stadium and arena
                owners)
              </td>
              <td>531120</td>
              <td>
                Lessors of Nonresidential Buildings (except Miniwarehouses)
              </td>
            </tr>
            <tr>
              <td>6512</td>
              <td>
                Operators of Nonresidential Buildings (stadium and arena owners)
              </td>
              <td>711310</td>
              <td>
                Promoters of Performing Arts, Sports, and Similar Events with
                Facilities
              </td>
            </tr>
            <tr>
              <td>6515</td>
              <td>Operators of Residential Mobile Home Sites</td>
              <td>531190</td>
              <td>Lessors of Other Real Estate Property</td>
            </tr>
            <tr>
              <td>5048</td>
              <td>Ophthalmic Goods (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5048</td>
              <td>
                Ophthalmic Goods (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>3851</td>
              <td>Ophthalmic Goods (except intraocular lenses)</td>
              <td>339115</td>
              <td>Ophthalmic Goods Manufacturing</td>
            </tr>
            <tr>
              <td>3851</td>
              <td>
                Ophthalmic Goods (intraoccular lenses, i.e., surgical implants)
              </td>
              <td>339113</td>
              <td>Surgical Appliance and Supplies Manufacturing</td>
            </tr>
            <tr>
              <td>5048</td>
              <td>Ophthalmic Goods (merchant wholesalers)</td>
              <td>423460</td>
              <td>Ophthalmic Goods Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5995</td>
              <td>
                Optical Goods Stores (except labs grinding prescription lenses)
              </td>
              <td>446130</td>
              <td>Optical Goods Stores</td>
            </tr>
            <tr>
              <td>5995</td>
              <td>
                Optical Goods Stores (optical laboratories grinding lenses to
                prescription)
              </td>
              <td>339115</td>
              <td>Ophthalmic Goods Manufacturing</td>
            </tr>
            <tr>
              <td>3827</td>
              <td>Optical Instruments and Lenses</td>
              <td>333314</td>
              <td>Optical Instrument and Lens Manufacturing</td>
            </tr>
            <tr>
              <td>3489</td>
              <td>Ordnance and Accessories, NEC</td>
              <td>332995</td>
              <td>Other Ordnance and Accessories Manufacturing</td>
            </tr>
            <tr>
              <td>7041</td>
              <td>
                Organization Hotels and Lodging Houses, on Membership Basis
                (except hotels)
              </td>
              <td>721310</td>
              <td>Rooming and Boarding Houses</td>
            </tr>
            <tr>
              <td>7041</td>
              <td>
                Organization Hotels and Lodging Houses, on Membership Basis
                (hotels)
              </td>
              <td>721110</td>
              <td>Hotels (except Casino Hotels) and Motels</td>
            </tr>
            <tr>
              <td>0181</td>
              <td>
                Ornamental Floriculture and Nursery Products (floriculture
                farming)
              </td>
              <td>111422</td>
              <td>Floriculture Production</td>
            </tr>
            <tr>
              <td>0181</td>
              <td>
                Ornamental Floriculture and Nursery Products (nursery farming)
              </td>
              <td>111421</td>
              <td>Nursery and Tree Production</td>
            </tr>
            <tr>
              <td>0783</td>
              <td>Ornamental Shrub and Tree Services</td>
              <td>561730</td>
              <td>Landscaping Services</td>
            </tr>
            <tr>
              <td>3842</td>
              <td>
                Orthopedic, Prosthetic, and Surgical Appliances and Supplies
                (anatomical models)
              </td>
              <td>339999</td>
              <td>All Other Miscellaneous Manufacturing</td>
            </tr>
            <tr>
              <td>3842</td>
              <td>
                Orthopedic, Prosthetic, and Surgical Appliances and Supplies
                (electronic hearing aids)
              </td>
              <td>334510</td>
              <td>
                Electromedical and Electrotherapeutic Apparatus Manufacturing
              </td>
            </tr>
            <tr>
              <td>3842</td>
              <td>
                Orthopedic, Prosthetic, and Surgical Appliances and Supplies
                (except electronic hearing aids, incontinent pads, anatomical
                models, and bed pads)
              </td>
              <td>339113</td>
              <td>Surgical Appliance and Supplies Manufacturing</td>
            </tr>
            <tr>
              <td>3842</td>
              <td>
                Orthopedic, Prosthetic, and Surgical Appliances and Supplies
                (incontinent pads and bed pads)
              </td>
              <td>322291</td>
              <td>Sanitary Paper Product Manufacturing</td>
            </tr>
            <tr>
              <td>7312</td>
              <td>Outdoor Advertising Services</td>
              <td>541850</td>
              <td>Display Advertising</td>
            </tr>
            <tr>
              <td>3536</td>
              <td>Overhead Traveling Cranes, Hoists, and Monorail Systems</td>
              <td>333923</td>
              <td>
                Overhead Traveling Crane, Hoist, and Monorail System
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>5142</td>
              <td>Packaged Frozen Foods (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5142</td>
              <td>
                Packaged Frozen Foods (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5142</td>
              <td>
                Packaged Frozen Foods (frozen food sold via retail method)
              </td>
              <td>454390</td>
              <td>Other Direct Selling Establishments</td>
            </tr>
            <tr>
              <td>5142</td>
              <td>
                Packaged Frozen Foods (merchant wholesalers except those selling
                packaged frozen foods via retail method)
              </td>
              <td>424420</td>
              <td>Packaged Frozen Food Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>3565</td>
              <td>Packaging Machinery</td>
              <td>333993</td>
              <td>Packaging Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>2671</td>
              <td>
                Packaging Paper and Plastics Film, Coated and Laminated (except
                single-web and multi-web plastics packaging film and sheet)
              </td>
              <td>322221</td>
              <td>
                Coated and Laminated Packaging Paper and Plastics Film
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2671</td>
              <td>
                Packaging Paper and Plastics Film, Coated and Laminated
                (single-web and multi-web plastics packaging film and sheet)
              </td>
              <td>326112</td>
              <td>
                Plastics Packaging Film and Sheet (including Laminated)
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>4783</td>
              <td>Packing and Crating</td>
              <td>488991</td>
              <td>Packing and Crating</td>
            </tr>
            <tr>
              <td>5231</td>
              <td>Paint, Glass, and Wallpaper Stores (except glass)</td>
              <td>444120</td>
              <td>Paint and Wallpaper Stores</td>
            </tr>
            <tr>
              <td>5231</td>
              <td>Paint, Glass, and Wallpaper Stores (glass)</td>
              <td>444190</td>
              <td>Other Building Material Dealers</td>
            </tr>
            <tr>
              <td>1721</td>
              <td>Painting and Paper Hanging</td>
              <td>238320</td>
              <td>Paint and Wall Covering Contractors</td>
            </tr>
            <tr>
              <td>1721</td>
              <td>Painting and Paper Hanging (traffic lane painting)</td>
              <td>237310</td>
              <td>Highway, Street, and Bridge Construction</td>
            </tr>
            <tr>
              <td>5198</td>
              <td>
                Paints, Varnishes, and Supplies (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5198</td>
              <td>Paints, Varnishes, and Supplies (agents and brokers) </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5198</td>
              <td>Paints, Varnishes, and Supplies (merchant wholesalers) </td>
              <td>424950</td>
              <td>Paint, Varnish, and Supplies Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>2851</td>
              <td>Paints, Varnishes, Lacquers, Enamels and Allied Products</td>
              <td>325510</td>
              <td>Paint and Coating Manufacturing</td>
            </tr>
            <tr>
              <td>3554</td>
              <td>Paper Industries Machinery</td>
              <td>333291</td>
              <td>Paper Industry Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>2621</td>
              <td>Paper Mills (except newsprint mills)</td>
              <td>322121</td>
              <td>Paper (except Newsprint) Mills</td>
            </tr>
            <tr>
              <td>2621</td>
              <td>Paper Mills (newsprint mills)</td>
              <td>322122</td>
              <td>Newsprint Mills</td>
            </tr>
            <tr>
              <td>2631</td>
              <td>Paperboard Mills</td>
              <td>322130</td>
              <td>Paperboard Mills</td>
            </tr>
            <tr>
              <td>7515</td>
              <td>Passenger Car Leasing</td>
              <td>532112</td>
              <td>Passenger Car Leasing </td>
            </tr>
            <tr>
              <td>7514</td>
              <td>Passenger Car Rental</td>
              <td>532111</td>
              <td>Passenger Car Rental</td>
            </tr>
            <tr>
              <td>6794</td>
              <td>Patent Owners and Lessors</td>
              <td>533110</td>
              <td>
                Lessors of Nonfinancial Intangible Assets (except Copyrighted
                Works)
              </td>
            </tr>
            <tr>
              <td>3951</td>
              <td>Pens, Mechanical Pencils, and Parts </td>
              <td>339941</td>
              <td>Pen and Mechanical Pencil Manufacturing</td>
            </tr>
            <tr>
              <td>6371</td>
              <td>Pension, Health, and Welfare Funds (administrators)</td>
              <td>524292</td>
              <td>Third Party Administration of Insurance and Pension Funds</td>
            </tr>
            <tr>
              <td>6371</td>
              <td>
                Pension, Health, and Welfare Funds (health and welfare funds)
              </td>
              <td>525120</td>
              <td>Health and Welfare Funds</td>
            </tr>
            <tr>
              <td>6371</td>
              <td>Pension, Health, and Welfare Funds (managers)</td>
              <td>523920</td>
              <td>Portfolio Management</td>
            </tr>
            <tr>
              <td>6371</td>
              <td>Pension, Health, and Welfare Funds (pension funds)</td>
              <td>525110</td>
              <td>Pension Funds</td>
            </tr>
            <tr>
              <td>6371</td>
              <td>Pension, Health, and Welfare Funds (profit sharing funds)</td>
              <td>525990</td>
              <td>Other Financial Vehicles</td>
            </tr>
            <tr>
              <td>2844</td>
              <td>
                Perfumes, Cosmetics, and Other Toilet Preparations (except
                toothpaste, gel, and dentifrice powders)
              </td>
              <td>325620</td>
              <td>Toilet Preparation Manufacturing</td>
            </tr>
            <tr>
              <td>2844</td>
              <td>
                Perfumes, Cosmetics, and Other Toilet Preparations (toothpaste,
                gel, and dentifrice powders)
              </td>
              <td>325611</td>
              <td>Soap and Other Detergent Manufacturing</td>
            </tr>
            <tr>
              <td>2721</td>
              <td>
                Periodicals: Publishing, or Publishing and Printing (except
                Internet periodical publishing)
              </td>
              <td>511120</td>
              <td>Periodical Publishers</td>
            </tr>
            <tr>
              <td>2721</td>
              <td>
                Periodicals: Publishing, or Publishing and Printing (Internet
                periodical publishing)
              </td>
              <td>519130</td>
              <td>
                Internet Publishing and Broadcasting and Web Search Portals
              </td>
            </tr>
            <tr>
              <td>6141</td>
              <td>Personal Credit Institutions (credit card issuing)</td>
              <td>522210</td>
              <td>Credit Card Issuing</td>
            </tr>
            <tr>
              <td>6141</td>
              <td>
                Personal Credit Institutions (except installment sales finance,
                industrial nondeposit banks, and credit card issuing)
              </td>
              <td>522291</td>
              <td>Consumer Lending</td>
            </tr>
            <tr>
              <td>6141</td>
              <td>
                Personal Credit Institutions (industrial nondeposit banks)
              </td>
              <td>522298</td>
              <td>All Other Nondepository Credit Intermediation</td>
            </tr>
            <tr>
              <td>6141</td>
              <td>Personal Credit Institutions (installment sales finance)</td>
              <td>522220</td>
              <td>Sales Financing</td>
            </tr>
            <tr>
              <td>3172</td>
              <td>
                Personal Leather Goods, Except Women's Handbags and Purses
                (except nonprecious metal personal goods, such as card cases,
                cigar cases, and comb cases)
              </td>
              <td>316993</td>
              <td>
                Personal Leather Good (except Women's Handbag and Purse)
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3172</td>
              <td>
                Personal Leather Goods, Except Women's Handbags and Purses
                (nonprecious metal personal goods, such as card cases, cigar
                cases, and comb cases)
              </td>
              <td>339914</td>
              <td>Costume Jewelry and Novelty Manufacturing</td>
            </tr>
            <tr>
              <td>2879</td>
              <td>Pesticides and Agricultural Chemicals, NEC</td>
              <td>325320</td>
              <td>Pesticide and Other Agricultural Chemical Manufacturing</td>
            </tr>
            <tr>
              <td>5172</td>
              <td>
                Petroleum and Petroleum Products Wholesalers, Except Bulk
                Stations and Terminals (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5172</td>
              <td>
                Petroleum and Petroleum Products Wholesalers, Except Bulk
                Stations and Terminals (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5172</td>
              <td>
                Petroleum and Petroleum Products Wholesalers, Except Bulk
                Stations and Terminals (merchant wholesalers)
              </td>
              <td>424720</td>
              <td>
                Petroleum and Petroleum Products Merchant Wholesalers (except
                Bulk Stations and Terminals)
              </td>
            </tr>
            <tr>
              <td>5171</td>
              <td>
                Petroleum Bulk Stations and Terminals (except petroleum sold via
                retail method)
              </td>
              <td>424710</td>
              <td>Petroleum Bulk Stations and Terminals</td>
            </tr>
            <tr>
              <td>5171</td>
              <td>
                Petroleum Bulk Stations and Terminals (heating oil sold to final
                consumer)
              </td>
              <td>454311</td>
              <td>Heating Oil Dealers</td>
            </tr>
            <tr>
              <td>5171</td>
              <td>
                Petroleum Bulk Stations and Terminals (LP gas sold to final
                consumer)
              </td>
              <td>454312</td>
              <td>Liquefied Petroleum Gas (Bottled Gas) Dealers</td>
            </tr>
            <tr>
              <td>2911</td>
              <td>Petroleum Refining</td>
              <td>324110</td>
              <td>Petroleum Refineries</td>
            </tr>
            <tr>
              <td>2834</td>
              <td>Pharmaceutical Preparations </td>
              <td>325412</td>
              <td>Pharmaceutical Preparation Manufacturing</td>
            </tr>
            <tr>
              <td>3652</td>
              <td>
                Phonograph Records and Prerecorded Audio Tapes and Disks
                (integrated record companies, except duplication only)
              </td>
              <td>512220</td>
              <td>Integrated Record Production/Distribution</td>
            </tr>
            <tr>
              <td>3652</td>
              <td>
                Phonograph Records and Prerecorded Audio Tapes and Disks
                (reproduction of all other media except video)
              </td>
              <td>334612</td>
              <td>
                Prerecorded Compact Disc (except Software), Tape, and Record
                Reproducing
              </td>
            </tr>
            <tr>
              <td>1475</td>
              <td>Phosphate Rock</td>
              <td>212392</td>
              <td>Phosphate Rock Mining</td>
            </tr>
            <tr>
              <td>2874</td>
              <td>Phosphatic Fertilizers</td>
              <td>325312</td>
              <td>Phosphatic Fertilizer Manufacturing</td>
            </tr>
            <tr>
              <td>7334</td>
              <td>
                Photocopying and Duplicating Services (except quick printing)
              </td>
              <td>561439</td>
              <td>Other Business Service Centers (including Copy Shops)</td>
            </tr>
            <tr>
              <td>7334</td>
              <td>Photocopying and Duplicating Services (quick printing)</td>
              <td>323114</td>
              <td>Quick Printing</td>
            </tr>
            <tr>
              <td>7384</td>
              <td>Photofinishing Laboratories (except one-hour)</td>
              <td>812921</td>
              <td>Photofinishing Laboratories (except One-Hour)</td>
            </tr>
            <tr>
              <td>7384</td>
              <td>Photofinishing Laboratories (one-hour)</td>
              <td>812922</td>
              <td>One-Hour Photofinishing</td>
            </tr>
            <tr>
              <td>5043</td>
              <td>Photographic Equipment and Supplies (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5043</td>
              <td>
                Photographic Equipment and Supplies (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>3861</td>
              <td>
                Photographic Equipment and Supplies (except photographic film,
                paper, plates, and chemicals)
              </td>
              <td>333315</td>
              <td>Photographic and Photocopying Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>5043</td>
              <td>
                Photographic Equipment and Supplies (merchant wholesalers)
              </td>
              <td>423410</td>
              <td>Photographic Equipment and Supplies Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>3861</td>
              <td>
                Photographic Equipment and Supplies (photographic films, paper,
                plates and chemicals)
              </td>
              <td>325992</td>
              <td>
                Photographic Film, Paper, Plate, and Chemical Manufacturing
              </td>
            </tr>
            <tr>
              <td>7221</td>
              <td>Photographic Studios, Portrait</td>
              <td>541921</td>
              <td>Photography Studios, Portrait</td>
            </tr>
            <tr>
              <td>7991</td>
              <td>Physical Fitness Facilities</td>
              <td>713940</td>
              <td>Fitness and Recreational Sports Centers</td>
            </tr>
            <tr>
              <td>2035</td>
              <td>
                Pickled Fruits and Vegetables, Vegetable Sauces and Seasonings,
                and Salad Dressings (pickled fruits and vegetables)
              </td>
              <td>311421</td>
              <td>Fruit and Vegetable Canning</td>
            </tr>
            <tr>
              <td>2035</td>
              <td>
                Pickled Fruits and Vegetables, Vegetable Sauces and Seasonings,
                and Salad Dressings (sauces and salad dressings)
              </td>
              <td>311941</td>
              <td>
                Mayonnaise, Dressing, and Other Prepared Sauce Manufacturing
              </td>
            </tr>
            <tr>
              <td>5131</td>
              <td>
                Piece Goods, Notions, and Other Dry Goods (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5131</td>
              <td>
                Piece Goods, Notions, and Other Dry Goods (broadwoven
                converters)
              </td>
              <td>313311</td>
              <td>Broadwoven Fabric Finishing Mills</td>
            </tr>
            <tr>
              <td>5131</td>
              <td>
                Piece Goods, Notions, and Other Dry Goods (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5131</td>
              <td>
                Piece Goods, Notions, and Other Dry Goods (merchant wholesalers
                except broadwoven and piece goods converters and merchant
                wholesalers selling piece goods, notions and other dry goods via
                retail method)
              </td>
              <td>424310</td>
              <td>
                Piece Goods, Notions, and Other Dry Goods Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>5131</td>
              <td>
                Piece Goods, Notions, and Other Dry Goods (piece goods
                converters, except broadwoven)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>5131</td>
              <td>
                Piece Goods, Notions, and Other Dry Goods (piece goods, notions,
                and other dry goods sold via retail method)
              </td>
              <td>451130</td>
              <td>Sewing, Needlework, and Piece Goods Stores</td>
            </tr>
            <tr>
              <td>4619</td>
              <td>Pipelines, NEC</td>
              <td>486990</td>
              <td>All Other Pipeline Transportation</td>
            </tr>
            <tr>
              <td>1742</td>
              <td>Plastering, Drywall, Acoustical, and Insulation Work</td>
              <td>238310</td>
              <td>Drywall and Insulation Contractors</td>
            </tr>
            <tr>
              <td>3085</td>
              <td>Plastics Bottles</td>
              <td>326160</td>
              <td>Plastics Bottle Manufacturing</td>
            </tr>
            <tr>
              <td>3086</td>
              <td>Plastics Foam Products (except polystyrene foam products)</td>
              <td>326150</td>
              <td>
                Urethane and Other Foam Product (except Polystyrene)
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3086</td>
              <td>Plastics Foam Products (polystyrene foam products)</td>
              <td>326140</td>
              <td>Polystyrene Foam Product Manufacturing</td>
            </tr>
            <tr>
              <td>5162</td>
              <td>
                Plastics Materials and Basic Forms and Shapes (agents and
                brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5162</td>
              <td>
                Plastics Materials and Basic Forms and Shapes (business to
                business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5162</td>
              <td>
                Plastics Materials and Basic Forms and Shapes (merchant
                wholesalers except those selling plastics via retail method)
              </td>
              <td>424610</td>
              <td>
                Plastics Materials and Basic Forms and Shapes Merchant
                Wholesalers
              </td>
            </tr>
            <tr>
              <td>5162</td>
              <td>
                Plastics Materials and Basic Forms and Shapes (plastics
                materials, forms, and basic shapes sold via retail method)
              </td>
              <td>453998</td>
              <td>
                All Other Miscellaneous Store Retailers (except Tobacco Stores)
              </td>
            </tr>
            <tr>
              <td>2821</td>
              <td>
                Plastics Materials, Synthetic and Resins, and Nonvulcanizable
                Elastomers
              </td>
              <td>325211</td>
              <td>Plastics Material and Resin Manufacturing</td>
            </tr>
            <tr>
              <td>3084</td>
              <td>Plastics Pipe</td>
              <td>326122</td>
              <td>Plastics Pipe and Pipe Fitting Manufacturing</td>
            </tr>
            <tr>
              <td>3088</td>
              <td>Plastics Plumbing Fixtures</td>
              <td>326191</td>
              <td>Plastics Plumbing Fixture Manufacturing</td>
            </tr>
            <tr>
              <td>3089</td>
              <td>
                Plastics Products, NEC (except plastics pipe fittings,
                inflatable plastics life jackets, plastics furniture parts, and
                plastics sausage casings)
              </td>
              <td>326199</td>
              <td>All Other Plastics Product Manufacturing</td>
            </tr>
            <tr>
              <td>3089</td>
              <td>Plastics Products, NEC (finished plastic furniture parts)</td>
              <td>337215</td>
              <td>Showcase, Partition, Shelving, and Locker Manufacturing</td>
            </tr>
            <tr>
              <td>3089</td>
              <td>Plastics Products, NEC (inflatable plastic life jackets)</td>
              <td>339113</td>
              <td>Surgical Appliance and Supplies Manufacturing</td>
            </tr>
            <tr>
              <td>3089</td>
              <td>Plastics Products, NEC (pipe fittings)</td>
              <td>326122</td>
              <td>Plastics Pipe and Pipe Fitting Manufacturing</td>
            </tr>
            <tr>
              <td>3089</td>
              <td>Plastics Products, NEC (plastics sausage casings)</td>
              <td>326121</td>
              <td>Unlaminated Plastics Profile Shape Manufacturing</td>
            </tr>
            <tr>
              <td>2673</td>
              <td>
                Plastics, Foil, and Coated Paper Bags (except single web or
                multi-web plastic bags)
              </td>
              <td>322223</td>
              <td>Plastics, Foil, and Coated Paper Bag Manufacturing</td>
            </tr>
            <tr>
              <td>2673</td>
              <td>
                Plastics, Foil, and Coated Paper Bags (single-web and multi-web
                plastics bags)
              </td>
              <td>326111</td>
              <td>Plastics Bag Manufacturing</td>
            </tr>
            <tr>
              <td>2796</td>
              <td>Platemaking and Related Services</td>
              <td>323122</td>
              <td>Prepress Services</td>
            </tr>
            <tr>
              <td>2395</td>
              <td>
                Pleating, Decorative and Novelty Stitching, and Tucking for the
                Trade (except apparel contractors)
              </td>
              <td>314999</td>
              <td>All Other Miscellaneous Textile Product Mills</td>
            </tr>
            <tr>
              <td>2395</td>
              <td>
                Pleating, Decorative and Novelty Stitching, and Tucking for the
                Trade (men's and boy's apparel contractors)
              </td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2395</td>
              <td>
                Pleating, Decorative and Novelty Stitching, and Tucking for the
                Trade (women's, girls', and infants' apparel contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>5074</td>
              <td>
                Plumbing and Heating Equipment and Supplies (Hydronics) (agents
                and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5074</td>
              <td>
                Plumbing and Heating Equipment and Supplies (Hydronics)
                (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5074</td>
              <td>
                Plumbing and Heating Equipment and Supplies (Hydronics)
                (merchant wholesalers except those selling plumbing and hydronic
                heating equipment via retail method)
              </td>
              <td>423720</td>
              <td>
                Plumbing and Heating Equipment and Supplies (Hydronics) Merchant
                Wholesalers{" "}
              </td>
            </tr>
            <tr>
              <td>5074</td>
              <td>
                Plumbing and Heating Equipment and Supplies (Hydronics)(plumbing
                and hydronic heating equipment sold via retail method)
              </td>
              <td>444190</td>
              <td>Other Building Material Dealers</td>
            </tr>
            <tr>
              <td>3432</td>
              <td>
                Plumbing Fixture Fittings and Trim (except shower rods, lawn
                hose nozzles, and lawn sprinklers)
              </td>
              <td>332913</td>
              <td>Plumbing Fixture Fitting and Trim Manufacturing</td>
            </tr>
            <tr>
              <td>3432</td>
              <td>
                Plumbing Fixture Fittings and Trim (lawn hose nozzles and lawn
                sprinklers)
              </td>
              <td>332919</td>
              <td>Other Metal Valve and Pipe Fitting Manufacturing</td>
            </tr>
            <tr>
              <td>3432</td>
              <td>Plumbing Fixture Fittings and Trim (metal shower rods)</td>
              <td>332999</td>
              <td>
                All Other Miscellaneous Fabricated Metal Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>1711</td>
              <td>
                Plumbing, Heating, and Air-Conditioning (environmental control
                installation contractors)
              </td>
              <td>238210</td>
              <td>Electrical Contractors</td>
            </tr>
            <tr>
              <td>1711</td>
              <td>
                Plumbing, Heating, and Air-Conditioning (except environmental
                controls installation; and septic tank, cesspool, and dry well
                construction)
              </td>
              <td>238220</td>
              <td>Plumbing, Heating, and Air-Conditioning Contractors</td>
            </tr>
            <tr>
              <td>1711</td>
              <td>
                Plumbing, Heating, and Air-Conditioning (septic tank, cesspool,
                and dry well construction contractors)
              </td>
              <td>238910</td>
              <td>Site Preparation Contractors</td>
            </tr>
            <tr>
              <td>9221</td>
              <td>Police Protection</td>
              <td>922120</td>
              <td>Police Protection</td>
            </tr>
            <tr>
              <td>8651</td>
              <td>Political Organizations</td>
              <td>813940</td>
              <td>Political Organizations</td>
            </tr>
            <tr>
              <td>3264</td>
              <td>Porcelain Electrical Supplies</td>
              <td>327113</td>
              <td>Porcelain Electrical Supply Manufacturing</td>
            </tr>
            <tr>
              <td>1474</td>
              <td>Potash, Soda, and Borate Minerals</td>
              <td>212391</td>
              <td>Potash, Soda, and Borate Mineral Mining</td>
            </tr>
            <tr>
              <td>2096</td>
              <td>Potato Chips, Corn Chips, and Similar Snacks</td>
              <td>311919</td>
              <td>Other Snack Food Manufacturing</td>
            </tr>
            <tr>
              <td>3269</td>
              <td>Pottery Products, NEC</td>
              <td>327112</td>
              <td>
                Vitreous China, Fine Earthenware, and Other Pottery Product
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>0259</td>
              <td>Poultry and Eggs, NEC</td>
              <td>112390</td>
              <td>Other Poultry Production</td>
            </tr>
            <tr>
              <td>5144</td>
              <td>Poultry and Poultry Products (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5144</td>
              <td>
                Poultry and Poultry Products (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5144</td>
              <td>
                Poultry and Poultry Products (merchant wholesalers except those
                selling poultry and poultry products via retail method)
              </td>
              <td>424440</td>
              <td>Poultry and Poultry Product Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5144</td>
              <td>
                Poultry and Poultry Products (poultry and poultry products sold
                via retail method)
              </td>
              <td>445210</td>
              <td>Meat Markets</td>
            </tr>
            <tr>
              <td>0254</td>
              <td>Poultry Hatcheries</td>
              <td>112340</td>
              <td>Poultry Hatcheries</td>
            </tr>
            <tr>
              <td>2015</td>
              <td>Poultry Slaughtering and Processing (egg processing)</td>
              <td>311999</td>
              <td>All Other Miscellaneous Food Manufacturing</td>
            </tr>
            <tr>
              <td>2015</td>
              <td>
                Poultry Slaughtering and Processing (poultry slaughtering and
                processing)
              </td>
              <td>311615</td>
              <td>Poultry Processing</td>
            </tr>
            <tr>
              <td>7211</td>
              <td>Power Laundries, Family and Commercial</td>
              <td>812320</td>
              <td>Drycleaning and Laundry Services (except Coin-Operated)</td>
            </tr>
            <tr>
              <td>3612</td>
              <td>Power, Distribution, and Specialty Transformers</td>
              <td>335311</td>
              <td>
                Power, Distribution, and Specialty Transformer Manufacturing
              </td>
            </tr>
            <tr>
              <td>3546</td>
              <td>Power-Driven Handtools</td>
              <td>333991</td>
              <td>Power-Driven Hand Tool Manufacturing</td>
            </tr>
            <tr>
              <td>3448</td>
              <td>Prefabricated Metal Buildings and Components</td>
              <td>332311</td>
              <td>Prefabricated Metal Building and Component Manufacturing</td>
            </tr>
            <tr>
              <td>2452</td>
              <td>Prefabricated Wood Buildings and Components</td>
              <td>321992</td>
              <td>Prefabricated Wood Building Manufacturing</td>
            </tr>
            <tr>
              <td>7372</td>
              <td>Prepackaged Software (mass reproduction of software)</td>
              <td>334611</td>
              <td>Software Reproducing</td>
            </tr>
            <tr>
              <td>7372</td>
              <td>Prepackaged Software (software publishing)</td>
              <td>511210</td>
              <td> Software Publishers</td>
            </tr>
            <tr>
              <td>2048</td>
              <td>
                Prepared Feeds and Feed Ingredients for Animals and Fowls,
                Except Dogs and Cats (except slaughtering animals for pet food)
              </td>
              <td>311119</td>
              <td>Other Animal Food Manufacturing</td>
            </tr>
            <tr>
              <td>2048</td>
              <td>
                Prepared Feeds and Feed Ingredients for Animals and Fowls,
                Except Dogs and Cats (slaughtering animals for pet food)
              </td>
              <td>311611</td>
              <td>Animal (except Poultry) Slaughtering</td>
            </tr>
            <tr>
              <td>2045</td>
              <td>Prepared Flour Mixes and Doughs</td>
              <td>311822</td>
              <td>Flour Mixes and Dough Manufacturing from Purchased Flour</td>
            </tr>
            <tr>
              <td>2092</td>
              <td>Prepared Fresh or Frozen Fish and Seafoods</td>
              <td>311712</td>
              <td>Fresh and Frozen Seafood Processing</td>
            </tr>
            <tr>
              <td>3229</td>
              <td>Pressed and Blown Glass and Glassware, NEC</td>
              <td>327212</td>
              <td>Other Pressed and Blown Glass and Glassware Manufacturing</td>
            </tr>
            <tr>
              <td>3692</td>
              <td>Primary Batteries, Dry and Wet</td>
              <td>335912</td>
              <td>Primary Battery Manufacturing</td>
            </tr>
            <tr>
              <td>3399</td>
              <td>
                Primary Metal Products, NEC (aluminum powder, paste, flakes,
                etc.)
              </td>
              <td>331314</td>
              <td>Secondary Smelting and Alloying of Aluminum</td>
            </tr>
            <tr>
              <td>3399</td>
              <td>
                Primary Metal Products, NEC (copper powder, paste, flakes, etc.)
              </td>
              <td>331423</td>
              <td>Secondary Smelting, Refining, and Alloying of Copper</td>
            </tr>
            <tr>
              <td>3399</td>
              <td>
                Primary Metal Products, NEC (ferrous powder, paste, flakes,
                etc.)
              </td>
              <td>331221</td>
              <td>Rolled Steel Shape Manufacturing</td>
            </tr>
            <tr>
              <td>3399</td>
              <td>
                Primary Metal Products, NEC (iron ore recovery from open hearth
                slag)
              </td>
              <td>331111</td>
              <td>Iron and Steel Mills</td>
            </tr>
            <tr>
              <td>3399</td>
              <td>
                Primary Metal Products, NEC (laminating steel for the trade)
              </td>
              <td>332813</td>
              <td>
                Electroplating, Plating, Polishing, Anodizing and Coloring
              </td>
            </tr>
            <tr>
              <td>3399</td>
              <td>
                Primary Metal Products, NEC (nonferrous nails, brads, staples,
                tacks, etc. made from purchased nonferrous wire)
              </td>
              <td>332618</td>
              <td>Other Fabricated Wire Product Manufacturing</td>
            </tr>
            <tr>
              <td>3399</td>
              <td>
                Primary Metal Products, NEC (nonferrous powder, paste, flakes,
                etc. except copper and aluminum)
              </td>
              <td>331492</td>
              <td>
                Secondary Smelting, Refining, and Alloying of Nonferrous Metal
                (except Copper and Aluminum)
              </td>
            </tr>
            <tr>
              <td>3334</td>
              <td>Primary Production of Aluminum</td>
              <td>331312</td>
              <td>Primary Aluminum Production</td>
            </tr>
            <tr>
              <td>3331</td>
              <td>Primary Smelting and Refining of Copper</td>
              <td>331411</td>
              <td>Primary Smelting and Refining of Copper</td>
            </tr>
            <tr>
              <td>3339</td>
              <td>
                Primary Smelting and Refining of Nonferrous Metals, Except
                Copper and Aluminum
              </td>
              <td>331419</td>
              <td>
                Primary Smelting and Refining of Nonferrous Metal (except Copper
                and Aluminum)
              </td>
            </tr>
            <tr>
              <td>3672</td>
              <td>Printed Circuit Boards</td>
              <td>334412</td>
              <td>Bare Printed Circuit Board Manufacturing</td>
            </tr>
            <tr>
              <td>5111</td>
              <td>Printing and Writing Paper (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5111</td>
              <td>
                Printing and Writing Paper (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5111</td>
              <td>
                Printing and Writing Paper (merchant wholesalers except those
                selling printing and writing paper via retail method)
              </td>
              <td>424110</td>
              <td>Printing and Writing Paper Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5111</td>
              <td>
                Printing and Writing Paper (printing and writing paper sold via
                retail method)
              </td>
              <td>453210</td>
              <td>Office Supplies and Stationary Stores</td>
            </tr>
            <tr>
              <td>2893</td>
              <td>Printing Ink</td>
              <td>325910</td>
              <td>Printing Ink Manufacturing</td>
            </tr>
            <tr>
              <td>3555</td>
              <td>Printing Trades Machinery and Equipment</td>
              <td>333293</td>
              <td>Printing Machinery and Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>8811</td>
              <td>Private Households</td>
              <td>814110</td>
              <td>Private Households</td>
            </tr>
            <tr>
              <td>2999</td>
              <td>Products of Petroleum and Coal, NEC</td>
              <td>324199</td>
              <td>All Other Petroleum and Coal Products Manufacturing</td>
            </tr>
            <tr>
              <td>5049</td>
              <td>
                Professional Equipment and Supplies, NEC (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5049</td>
              <td>
                Professional Equipment and Supplies, NEC (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5049</td>
              <td>
                Professional Equipment and Supplies, NEC (merchant wholesalers
                except those selling religious and teacher's school supplies via
                retail method){" "}
              </td>
              <td>423490</td>
              <td>
                Other Professional Equipment and Supplies Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>5049</td>
              <td>
                Professional Equipment and Supplies, NEC (religious and
                teacher's school supplies sold via retail method)
              </td>
              <td>453210</td>
              <td>Office Supplies and Stationery Stores</td>
            </tr>
            <tr>
              <td>8621</td>
              <td>Professional Membership Organizations</td>
              <td>813920</td>
              <td>Professional Organizations</td>
            </tr>
            <tr>
              <td>7941</td>
              <td>
                Professional Sports Clubs and Promoters (professional sports
                clubs)
              </td>
              <td>711211</td>
              <td>Sports Teams and Clubs</td>
            </tr>
            <tr>
              <td>7941</td>
              <td>Professional Sports Clubs and Promoters (sports agents)</td>
              <td>711410</td>
              <td>
                Agents and Managers for Artists, Athletes, Entertainers, and
                Other Public Figures
              </td>
            </tr>
            <tr>
              <td>7941</td>
              <td>
                Professional Sports Clubs and Promoters (sports promoters)
              </td>
              <td>711320</td>
              <td>
                Promoters of Performing Arts, Sports, and Similar Events without
                Facilities
              </td>
            </tr>
            <tr>
              <td>7941</td>
              <td>
                Professional Sports Clubs and Promoters (stadium operators
                promoting events in their own facilities){" "}
              </td>
              <td>711310</td>
              <td>
                Promoters of Performing Arts, Sports, and Similar Events with
                Facilities
              </td>
            </tr>
            <tr>
              <td>8063</td>
              <td>Psychiatric Hospitals</td>
              <td>622210</td>
              <td>Psychiatric and Substance Abuse Hospitals</td>
            </tr>
            <tr>
              <td>2531</td>
              <td>Public Building and Related Furniture (blackboards)</td>
              <td>339942</td>
              <td>Lead Pencil and Art Good Manufacturing</td>
            </tr>
            <tr>
              <td>2531</td>
              <td>
                Public Building and Related Furniture (except motor vehicle
                seats and blackboards)
              </td>
              <td>337127</td>
              <td>Institutional Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>2531</td>
              <td>
                Public Building and Related Furniture (seats for motor vehicles)
              </td>
              <td>336360</td>
              <td>Motor Vehicle Seating and Interior Trim Manufacturing</td>
            </tr>
            <tr>
              <td>9311</td>
              <td>Public Finance, Taxation, and Monetary Policy</td>
              <td>921130</td>
              <td>Public Finance Activities</td>
            </tr>
            <tr>
              <td>7992</td>
              <td>Public Golf Courses</td>
              <td>713910</td>
              <td>Golf Courses and Country Clubs</td>
            </tr>
            <tr>
              <td>9229</td>
              <td>Public Order and Safety, NEC</td>
              <td>922190</td>
              <td>All Other Justice, Public Order, and Safety Activities</td>
            </tr>
            <tr>
              <td>8743</td>
              <td>Public Relations Services</td>
              <td>541820</td>
              <td>Public Relations Agencies</td>
            </tr>
            <tr>
              <td>2611</td>
              <td>Pulp Mills (pulp mills producing newsprint)</td>
              <td>322122</td>
              <td>Newsprint Mills</td>
            </tr>
            <tr>
              <td>2611</td>
              <td>Pulp Mills (pulp mills producing paper except newsprint)</td>
              <td>322121</td>
              <td>Paper (except Newsprint) Mills</td>
            </tr>
            <tr>
              <td>2611</td>
              <td>Pulp Mills (pulp mills producing paperboard)</td>
              <td>322130</td>
              <td>Paperboard Mills</td>
            </tr>
            <tr>
              <td>2611</td>
              <td>Pulp Mills (pulp producing mills only)</td>
              <td>322110</td>
              <td>Pulp Mills</td>
            </tr>
            <tr>
              <td>3561</td>
              <td>Pumps and Pumping Equipment</td>
              <td>333911</td>
              <td>Pump and Pumping Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>7948</td>
              <td>
                Racing, Including Track Operations (except track operators)
              </td>
              <td>711219</td>
              <td>Other Spectator Sports</td>
            </tr>
            <tr>
              <td>7948</td>
              <td>Racing, Including Track Operations (track operations)</td>
              <td>711212</td>
              <td>Racetracks</td>
            </tr>
            <tr>
              <td>3663</td>
              <td>
                Radio and Television Broadcasting and Communications Equipment
              </td>
              <td>334220</td>
              <td>
                Radio and Television Broadcasting and Wireless Communications
                Equipment Manufacturing
              </td>
            </tr>
            <tr>
              <td>7622</td>
              <td>
                Radio and Television Repair Shops (household antenna
                installation and household-type satellite dish installation)
              </td>
              <td>238290</td>
              <td>Other Building Equipment Contractors</td>
            </tr>
            <tr>
              <td>7622</td>
              <td>
                Radio and Television Repair Shops (new retail sales combined
                with repair-repair services as major source of receipts)
              </td>
              <td>443112</td>
              <td>Radio, Television, and Other Electronics Stores</td>
            </tr>
            <tr>
              <td>7622</td>
              <td>
                Radio and Television Repair Shops (stereo, TV, VCR, and radio
                repair)
              </td>
              <td>811211</td>
              <td>Consumer Electronics Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7622</td>
              <td>
                Radio and Television Repair Shops (telecommunication equipment
                repair)
              </td>
              <td>811213</td>
              <td>Communication Equipment Repair and Maintenance</td>
            </tr>
            <tr>
              <td>4832</td>
              <td>Radio Broadcasting Stations (except networks)</td>
              <td>515112</td>
              <td>Radio Stations</td>
            </tr>
            <tr>
              <td>4832</td>
              <td>Radio Broadcasting Stations (networks)</td>
              <td>515111</td>
              <td>Radio Networks</td>
            </tr>
            <tr>
              <td>5731</td>
              <td>
                Radio, Television, and Consumer Electronics Stores (automobile
                radios)
              </td>
              <td>441310</td>
              <td>Automotive Parts and Accessories Stores</td>
            </tr>
            <tr>
              <td>5731</td>
              <td>
                Radio, Television, and Consumer Electronics Stores (except
                automobile radios)
              </td>
              <td>443112</td>
              <td>Radio, Television, and Other Electronics Stores</td>
            </tr>
            <tr>
              <td>7313</td>
              <td>
                Radio, Television, and Publishers' Advertising Representatives
              </td>
              <td>541840</td>
              <td>Media Representatives</td>
            </tr>
            <tr>
              <td>4812</td>
              <td>Radiotelephone Communications (cellular carriers)</td>
              <td>517210</td>
              <td>Wired Telecommunications Carriers (except Satellite)</td>
            </tr>
            <tr>
              <td>4812</td>
              <td>
                Radiotelephone Communications (paging and cellular resellers)
              </td>
              <td>517911</td>
              <td>Telecommunications Resellers</td>
            </tr>
            <tr>
              <td>4812</td>
              <td>Radiotelephone Communications (paging carriers)</td>
              <td>517210</td>
              <td>Wired Telecommunications Carriers (except Satellite)</td>
            </tr>
            <tr>
              <td>3743</td>
              <td>
                Railroad Equipment (except locomotive fuel lubricating or
                cooling medium pumps)
              </td>
              <td>336510</td>
              <td>Railroad Rolling Stock Manufacturing</td>
            </tr>
            <tr>
              <td>3743</td>
              <td>
                Railroad Equipment (locomotive fuel lubricating or cooling
                medium pumps)
              </td>
              <td>333911</td>
              <td>Pump and Pumping Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>4013</td>
              <td>
                Railroad Switching and Terminal Establishments (except short
                line railroads)
              </td>
              <td>488210</td>
              <td>Support Activities for Rail Transportation</td>
            </tr>
            <tr>
              <td>4013</td>
              <td>
                Railroad Switching and Terminal Establishments (short line
                railroads)
              </td>
              <td>482112</td>
              <td>Short Line Railroads</td>
            </tr>
            <tr>
              <td>4011</td>
              <td>Railroads, Line-Haul Operating</td>
              <td>482111</td>
              <td>Line-Haul Railroads</td>
            </tr>
            <tr>
              <td>3273</td>
              <td>Ready-Mixed Concrete</td>
              <td>327320</td>
              <td>Ready-Mix Concrete Manufacturing</td>
            </tr>
            <tr>
              <td>6531</td>
              <td>Real Estate Agents and Managers (agents and brokers)</td>
              <td>531210</td>
              <td>Offices of Real Estate Agents and Brokers</td>
            </tr>
            <tr>
              <td>6531</td>
              <td>Real Estate Agents and Managers (appraisers)</td>
              <td>531320</td>
              <td>Offices of Real Estate Appraisers</td>
            </tr>
            <tr>
              <td>6531</td>
              <td>Real Estate Agents and Managers (cemetery management)</td>
              <td>812220</td>
              <td>Cemeteries and Crematories</td>
            </tr>
            <tr>
              <td>6531</td>
              <td>
                Real Estate Agents and Managers (condominium associations)
              </td>
              <td>813990</td>
              <td>
                Other Similar Organizations (except Business, Professional,
                Labor, and Political Organizations)
              </td>
            </tr>
            <tr>
              <td>6531</td>
              <td>
                Real Estate Agents and Managers (except property managers,
                condominium associations, cemetery management, agents and
                brokers, operating housing authorities, and appraisers)
              </td>
              <td>531390</td>
              <td>Other Activities Related to Real Estate</td>
            </tr>
            <tr>
              <td>6531</td>
              <td>
                Real Estate Agents and Managers (nonresidential property
                managers)
              </td>
              <td>531312</td>
              <td>Nonresidential Property Managers</td>
            </tr>
            <tr>
              <td>6531</td>
              <td>
                Real Estate Agents and Managers (operating housing authorities)
              </td>
              <td>531110</td>
              <td>Lessors of Residential Buildings and Dwellings</td>
            </tr>
            <tr>
              <td>6531</td>
              <td>
                Real Estate Agents and Managers (residential property managers)
              </td>
              <td>531311</td>
              <td>Residential Property Managers</td>
            </tr>
            <tr>
              <td>6798</td>
              <td>
                Real Estate Investment Trusts (hybrid or equity REITs primarily
                leasing miniwarehouses and self-storage units)
              </td>
              <td>531130</td>
              <td>Lessors of Miniwarehouses and Self-Storage Units</td>
            </tr>
            <tr>
              <td>6798</td>
              <td>
                Real Estate Investment Trusts (hybrid or equity REITs primarily
                leasing nonresidential Buildings)
              </td>
              <td>525930</td>
              <td>Real Estate Investment Trusts</td>
            </tr>
            <tr>
              <td>6798</td>
              <td>
                Real Estate Investment Trusts (hybrid or equity REITs primarily
                leasing other real estate property)
              </td>
              <td>531190</td>
              <td>Lessors of Other Real Estate Property</td>
            </tr>
            <tr>
              <td>6798</td>
              <td>
                Real Estate Investment Trusts (hybrid or equity REITs primarily
                leasing residential Buildings and Dwellings)
              </td>
              <td>531110</td>
              <td>Lessors of Residential Buildings and Dwellings</td>
            </tr>
            <tr>
              <td>6798</td>
              <td>
                Real Estate Investment Trusts (hybrid or mortgage REITs
                primarily in underwriting or investing in mortgages)
              </td>
              <td>525990</td>
              <td>Other Financial Vehicles</td>
            </tr>
            <tr>
              <td>2493</td>
              <td>Reconstituted Wood Products</td>
              <td>321219</td>
              <td>Reconstituted Wood Product Manufacturing</td>
            </tr>
            <tr>
              <td>5735</td>
              <td>Record and Prerecorded Tape Stores</td>
              <td>451220</td>
              <td>Prerecorded Tape, Compact Disc, and Record Stores</td>
            </tr>
            <tr>
              <td>5561</td>
              <td>Recreational Vehicle Dealers</td>
              <td>441210</td>
              <td>Recreational Vehicle Dealers</td>
            </tr>
            <tr>
              <td>7033</td>
              <td>Recreational Vehicle Parks and Campsites</td>
              <td>721211</td>
              <td>RV (Recreational Vehicle) Parks and Campgrounds</td>
            </tr>
            <tr>
              <td>4613</td>
              <td>Refined Petroleum Pipelines</td>
              <td>486910</td>
              <td>Pipeline Transportation of Refined Petroleum Products</td>
            </tr>
            <tr>
              <td>4222</td>
              <td>Refrigerated Warehousing and Storage</td>
              <td>493120</td>
              <td>Refrigerated Warehousing and Storage</td>
            </tr>
            <tr>
              <td>7623</td>
              <td>
                Refrigeration and Air-Conditioning Service and Repair Shops
                (except commercial refrigeration equipment repair, and sales
                locations with repair as major source of receipts)
              </td>
              <td>811412</td>
              <td>Appliance Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7623</td>
              <td>
                Refrigeration and Air-Conditioning Services and Repair Shops
                (commercial refrigerator equipment repair)
              </td>
              <td>811310</td>
              <td>
                Commercial and Industrial Machinery and Equipment (except
                Automotive and Electronic) Repair and Maintenance
              </td>
            </tr>
            <tr>
              <td>7623</td>
              <td>
                Refrigeration and Air-Conditioning Services and Repair Shops
                (new retail sales combined with repair-repair services as major
                source of receipts)
              </td>
              <td>443111</td>
              <td>Household Appliance Stores</td>
            </tr>
            <tr>
              <td>5078</td>
              <td>Refrigeration Equipment and Supplies (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5078</td>
              <td>
                Refrigeration Equipment and Supplies (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5078</td>
              <td>
                Refrigeration Equipment and Supplies (merchant wholesalers)
              </td>
              <td>423740</td>
              <td>Refrigeration Equipment and Supplies Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>4953</td>
              <td>Refuse Systems (hazardous waste treatment and disposal)</td>
              <td>562211</td>
              <td>Hazardous Waste Treatment and Disposal</td>
            </tr>
            <tr>
              <td>4953</td>
              <td>Refuse Systems (materials recovery facilities)</td>
              <td>562920</td>
              <td>Materials Recovery Facilities</td>
            </tr>
            <tr>
              <td>4953</td>
              <td>
                Refuse Systems (other nonhazardous waste treatment and disposal)
              </td>
              <td>562219</td>
              <td>Other Nonhazardous Waste Treatment and Disposal</td>
            </tr>
            <tr>
              <td>4953</td>
              <td>Refuse Systems (solid waste combustors and incinerators)</td>
              <td>562213</td>
              <td>Solid Waste Combustors and Incinerators</td>
            </tr>
            <tr>
              <td>4953</td>
              <td>Refuse Systems (solid waste landfills)</td>
              <td>562212</td>
              <td>Solid Waste Landfill</td>
            </tr>
            <tr>
              <td>9631</td>
              <td>
                Regulation and Administration of Communications, Electric, Gas,
                and Other Utilities
              </td>
              <td>926130</td>
              <td>
                Regulation and Administration of Communications, Electric, Gas,
                and Other Utilities
              </td>
            </tr>
            <tr>
              <td>9621</td>
              <td>
                Regulation and Administration of Transportation Programs (except
                air traffic control)
              </td>
              <td>926120</td>
              <td>Regulation and Administration of Transportation Programs</td>
            </tr>
            <tr>
              <td>9621</td>
              <td>
                Regulation and Administration of Transportation Programs
                (government air traffic control)
              </td>
              <td>488111</td>
              <td>Air Traffic Control</td>
            </tr>
            <tr>
              <td>9641</td>
              <td>Regulation of Agricultural Marketing and Commodities</td>
              <td>926140</td>
              <td>Regulation of Agricultural Marketing and Commodities</td>
            </tr>
            <tr>
              <td>9651</td>
              <td>
                Regulation, Licensing, and Inspection of Miscellaneous
                Commercial Sectors
              </td>
              <td>926150</td>
              <td>
                Regulation, Licensing, and Inspection of Miscellaneous
                Commercial Sectors
              </td>
            </tr>
            <tr>
              <td>3625</td>
              <td>Relays and Industrial Controls</td>
              <td>335314</td>
              <td>Relay and Industrial Control Manufacturing</td>
            </tr>
            <tr>
              <td>8661</td>
              <td>Religious Organizations</td>
              <td>813110</td>
              <td>Religious Organizations</td>
            </tr>
            <tr>
              <td>4741</td>
              <td>
                Rental of Railroad Cars (grain leveling in railroad cars, grain
                trimming for railroad equipment, precooling of fruits and
                vegetables in connection with transportation, and railroad car
                cleaning, icing, ventilating, and heating)
              </td>
              <td>488210</td>
              <td>Support Activities for Rail Transportation</td>
            </tr>
            <tr>
              <td>4741</td>
              <td>Rental of Railroad Cars (rental of railroad cars)</td>
              <td>532411</td>
              <td>
                Commercial Air, Rail, and Water Transportation Equipment Rental
                and Leasing
              </td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (boiler cleaning,
                chipping, and scaling)
              </td>
              <td>238220</td>
              <td>Plumbing, Heating, and Air-Conditioning Contractors</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>Repair Shops and Related Services, NEC (camera repair)</td>
              <td>811211</td>
              <td>Consumer Electronics Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (cesspool and septic tank
                cleaning)
              </td>
              <td>562991</td>
              <td>Septic Tank and Related Services</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (custom picture framing
                shops)
              </td>
              <td>442299</td>
              <td>All Other Home Furnishings Stores</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (dental instrument
                repair, laboratory instrument repair, medical equipment and
                other electronic and precision equipment repair, except
                typewriters)
              </td>
              <td>811219</td>
              <td>
                Other Electronic and Precision Equipment Repair and Maintenance
              </td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (except industrial,
                electronic, home and garden, appliance, and leather goods)
              </td>
              <td>811490</td>
              <td>Other Personal and Household Goods Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>Repair Shops and Related Services, NEC (farriers)</td>
              <td>115210</td>
              <td>Support Activities for Animal Production</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (furnace, duct, gutter,
                and drain cleaning services)
              </td>
              <td>561790</td>
              <td>Other Services to Buildings and Dwellings</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (gas appliance repair
                service, sewing machine repair, stove repair shops, and other
                non-electrical appliance)
              </td>
              <td>811412</td>
              <td>Appliance Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (lawnmower repair shops,
                sharpening and repairing knives, saws and tools)
              </td>
              <td>811411</td>
              <td>Home and Garden Equipment Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (leather goods repair
                shops, luggage repair shops, pocketbook repair shops)
              </td>
              <td>811430</td>
              <td>Footwear and Leather Goods Repair</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>Repair Shops and Related Services, NEC (locksmith shops)</td>
              <td>561622</td>
              <td>Locksmiths</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (new bicycle retail sales
                combined with repair-repair services for bicycles as major
                source of receipts)
              </td>
              <td>451110</td>
              <td>Sporting Goods Stores</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (new lawn and garden
                equipment retail sales combined with repair-repair services as
                major source of receipts)
              </td>
              <td>444210</td>
              <td>Outdoor Power Equipment Stores</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (new power tool retail
                sales combined with repair-repair services as major source of
                receipts)
              </td>
              <td>444130</td>
              <td>Hardware Stores</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (other non-automotive
                transportation equipment and industrial machines and equipment,
                and sharpening commercial blades)
              </td>
              <td>811310</td>
              <td>
                Commercial and Industrial Machinery and Equipment (except
                Automotive and Electronic) Repair and Maintenance
              </td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (sewer cleaning and
                rodding)
              </td>
              <td>562998</td>
              <td>All Other Miscellaneous Waste Management Services</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>Repair Shops and Related Services, NEC (ship scaling) </td>
              <td>488390</td>
              <td>Other Support Activities for Water Transportation</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (taxidermists and antique
                repair and restoration, except antique car restoration)
              </td>
              <td>711510</td>
              <td>Independent Artists, Writers, and Performers</td>
            </tr>
            <tr>
              <td>7699</td>
              <td>
                Repair Shops and Related Services, NEC (typewriter repair,
                refilling or recycling ink jet cartridges)
              </td>
              <td>811212</td>
              <td>Computer and Office Machine Repair and Maintenance</td>
            </tr>
            <tr>
              <td>8361</td>
              <td>
                Residential Care (except mental health and substance abuse
                facilities, homes for the elderly, and homes for the mentally
                handicapped with incidental health care)
              </td>
              <td>623990</td>
              <td>Other Residential Care Facilities</td>
            </tr>
            <tr>
              <td>8361</td>
              <td>Residential Care (homes for the elderly)</td>
              <td>623312</td>
              <td>Homes for the Elderly</td>
            </tr>
            <tr>
              <td>8361</td>
              <td>
                Residential Care (homes for the mentally handicapped with
                incidental health care)
              </td>
              <td>623210</td>
              <td>Residential Mental Retardation Facilities</td>
            </tr>
            <tr>
              <td>8361</td>
              <td>
                Residential Care (mental health and substance abuse facilities){" "}
              </td>
              <td>623220</td>
              <td>Residential Mental Health and Substance Abuse Facilities</td>
            </tr>
            <tr>
              <td>3645</td>
              <td>Residential Electric Lighting Fixtures</td>
              <td>335121</td>
              <td>Residential Electric Lighting Fixture Manufacturing </td>
            </tr>
            <tr>
              <td>5461</td>
              <td>
                Retail Bakeries (bread, cake and related products baked and sold
                on premise)
              </td>
              <td>311811</td>
              <td>Retail Bakeries</td>
            </tr>
            <tr>
              <td>5461</td>
              <td>Retail Bakeries (selling only)</td>
              <td>445291</td>
              <td>Baked Goods Stores</td>
            </tr>
            <tr>
              <td>5461</td>
              <td>Retail Bakeries (snacks)</td>
              <td>722213</td>
              <td>Snack and Nonalcoholic Beverage Bars</td>
            </tr>
            <tr>
              <td>5261</td>
              <td>
                Retail Nurseries, Lawn and Garden Supply Stores (except outdoor
                power equipment)
              </td>
              <td>444220</td>
              <td>Nurseries, Garden Centers, and Farm Supply Stores</td>
            </tr>
            <tr>
              <td>5261</td>
              <td>
                Retail Nurseries, Lawn and Garden Supply Stores (outdoor power
                equipment)
              </td>
              <td>444210</td>
              <td>Outdoor Power Equipment Stores</td>
            </tr>
            <tr>
              <td>7641</td>
              <td>Reupholstery and Furniture Repair</td>
              <td>811420</td>
              <td>Reupholstery and Furniture Repair</td>
            </tr>
            <tr>
              <td>0112</td>
              <td>Rice </td>
              <td>111160</td>
              <td>Rice Farming</td>
            </tr>
            <tr>
              <td>2044</td>
              <td>Rice Milling</td>
              <td>311212</td>
              <td>Rice Milling</td>
            </tr>
            <tr>
              <td>2095</td>
              <td>Roasted Coffee</td>
              <td>311920</td>
              <td>Coffee and Tea Manufacturing</td>
            </tr>
            <tr>
              <td>2384</td>
              <td>Robes and Dressing Gowns (men's and boys' contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2384</td>
              <td>Robes and Dressing Gowns (men's except contractors)</td>
              <td>315221</td>
              <td>
                Men's and Boys' Cut and Sew Underwear and Nightwear
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2384</td>
              <td>Robes and Dressing Gowns (women's except contractors)</td>
              <td>315231</td>
              <td>
                Women's and Girls' Cut and Sew Lingerie, Loungewear, and
                Nightwear Manufacturing
              </td>
            </tr>
            <tr>
              <td>2384</td>
              <td>
                Robes and Dressing Gowns (women's, girls', and infants'
                contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>3547</td>
              <td>Rolling Mill Machinery and Equipment</td>
              <td>333516</td>
              <td>Rolling Mill Machinery and Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3351</td>
              <td>Rolling, Drawing, and Extruding of Copper</td>
              <td>331421</td>
              <td>Copper Rolling, Drawing, and Extruding</td>
            </tr>
            <tr>
              <td>3356</td>
              <td>
                Rolling, Drawing, and Extruding of Nonferrous Metals, Except
                Copper and Aluminum
              </td>
              <td>331491</td>
              <td>
                Nonferrous Metal (except Copper and Aluminum) Rolling, Drawing,
                and Extruding
              </td>
            </tr>
            <tr>
              <td>5033</td>
              <td>
                Roofing, Siding, and Insulation Materials (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5033</td>
              <td>
                Roofing, Siding, and Insulation Materials (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5033</td>
              <td>
                Roofing, Siding, and Insulation Materials (merchant wholesalers
                except those selling via retail method)
              </td>
              <td>423330</td>
              <td>
                Roofing, Siding, and Insulation Material Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>5033</td>
              <td>
                Roofing, Siding, and Insulation Materials (roofing, siding, and
                insulation materials sold via retail method)
              </td>
              <td>444190</td>
              <td>Other Building Material Dealers</td>
            </tr>
            <tr>
              <td>1761</td>
              <td>
                Roofing, Siding, and Sheet Metal Work (except roofing and siding
                work)
              </td>
              <td>238390</td>
              <td>Other Building Finishing Contractors</td>
            </tr>
            <tr>
              <td>1761</td>
              <td>
                Roofing, Siding, and Sheet Metal Work (roofing contractors)
              </td>
              <td>238160</td>
              <td>Roofing Contractors</td>
            </tr>
            <tr>
              <td>1761</td>
              <td>
                Roofing, Siding, and Sheet Metal Work (siding contractors)
              </td>
              <td>238170</td>
              <td>Siding Contractors</td>
            </tr>
            <tr>
              <td>7021</td>
              <td>Rooming and Boarding Houses</td>
              <td>721310</td>
              <td>Rooming and Boarding Houses</td>
            </tr>
            <tr>
              <td>3021</td>
              <td>Rubber and Plastics Footwear</td>
              <td>316211</td>
              <td>Rubber and Plastics Footwear Manufacturing</td>
            </tr>
            <tr>
              <td>3052</td>
              <td>Rubber and Plastics Hose and Belting</td>
              <td>326220</td>
              <td>Rubber and Plastics Hoses and Belting Manufacturing</td>
            </tr>
            <tr>
              <td>2068</td>
              <td>Salted and Roasted Nuts and Seeds</td>
              <td>311911</td>
              <td>Roasted Nuts and Peanut Butter Manufacturing</td>
            </tr>
            <tr>
              <td>2656</td>
              <td>Sanitary Food Containers, Except Folding</td>
              <td>322215</td>
              <td>Nonfolding Sanitary Food Container Manufacturing</td>
            </tr>
            <tr>
              <td>2676</td>
              <td>Sanitary Paper Products</td>
              <td>322291</td>
              <td>Sanitary Paper Product Manufacturing</td>
            </tr>
            <tr>
              <td>4959</td>
              <td>
                Sanitary Services, NEC (all but remediation services, malaria
                control, mosquito eradication, snow plowing, street sweeping,
                and airport runway vacuuming)
              </td>
              <td>562998</td>
              <td>All Other Miscellaneous Waste Management Services</td>
            </tr>
            <tr>
              <td>4959</td>
              <td>
                Sanitary Services, NEC (cleaning parking lots and driveways)
              </td>
              <td>561790</td>
              <td>Other Services to Buildings and Dwellings</td>
            </tr>
            <tr>
              <td>4959</td>
              <td>Sanitary Services, NEC (mosquito eradication)</td>
              <td>561710</td>
              <td>Exterminating and Pest Control Services</td>
            </tr>
            <tr>
              <td>4959</td>
              <td>Sanitary Services, NEC (remediation services)</td>
              <td>562910</td>
              <td>Remediation Services</td>
            </tr>
            <tr>
              <td>4959</td>
              <td>
                Sanitary Services, NEC (snow plowing and sweeping streets and
                highways)
              </td>
              <td>488490</td>
              <td>Other Support Activities for Road Transportation</td>
            </tr>
            <tr>
              <td>4959</td>
              <td>Sanitary Services, NEC (vacuuming of runways)</td>
              <td>488119</td>
              <td>Other Airport Operations</td>
            </tr>
            <tr>
              <td>2013</td>
              <td>
                Sausages and Other Prepared Meat Products (except lard made from
                purchased materials)
              </td>
              <td>311612</td>
              <td>Meat Processed from Carcasses </td>
            </tr>
            <tr>
              <td>2013</td>
              <td>
                Sausages and Other Prepared Meat Products (lard made from
                purchased materials)
              </td>
              <td>311613</td>
              <td>Rendering and Meat Byproduct Processing</td>
            </tr>
            <tr>
              <td>6035</td>
              <td>Savings Institutions, Federally Chartered</td>
              <td>522120</td>
              <td>Savings Institutions</td>
            </tr>
            <tr>
              <td>6036</td>
              <td>Savings Institutions, Not Federally Chartered</td>
              <td>522120</td>
              <td>Savings Institutions</td>
            </tr>
            <tr>
              <td>3425</td>
              <td>Saw Blades and Handsaws</td>
              <td>332213</td>
              <td>Saw Blade and Handsaw Manufacturing</td>
            </tr>
            <tr>
              <td>2421</td>
              <td>
                Sawmills and Planing Mills, General (box lumber made from
                purchased lumber)
              </td>
              <td>321920</td>
              <td>Wood Container and Pallet Manufacturing</td>
            </tr>
            <tr>
              <td>2421</td>
              <td>Sawmills and Planing Mills, General (kiln drying)</td>
              <td>321999</td>
              <td>All Other Miscellaneous Wood Product Manufacturing</td>
            </tr>
            <tr>
              <td>2421</td>
              <td>
                Sawmills and Planing Mills, General (lumber manufacturing from
                purchased lumber, softwood cut stock, wood lath, fence pickets,
                and planing mill products)
              </td>
              <td>321912</td>
              <td>Cut Stock, Resawing Lumber, and Planing</td>
            </tr>
            <tr>
              <td>2421</td>
              <td>Sawmills and Planing Mills, General (sawmills)</td>
              <td>321113</td>
              <td>Sawmills</td>
            </tr>
            <tr>
              <td>2421</td>
              <td>Sawmills and Planing Mills, General (softwood flooring)</td>
              <td>321918</td>
              <td>Other Millwork (including Flooring ) </td>
            </tr>
            <tr>
              <td>3596</td>
              <td>Scales and Balances, Except Laboratory</td>
              <td>333997</td>
              <td>Scale and Balance (except Laboratory) Manufacturing</td>
            </tr>
            <tr>
              <td>2397</td>
              <td>Schiffli Machine Embroideries</td>
              <td>313222</td>
              <td>Schiffli Machine Embroidery</td>
            </tr>
            <tr>
              <td>4151</td>
              <td>School Buses</td>
              <td>485410</td>
              <td>School and Employee Bus Transportation</td>
            </tr>
            <tr>
              <td>8299</td>
              <td>
                Schools and Educational Services NEC (educational support
                services)
              </td>
              <td>611710</td>
              <td>Educational Support Services</td>
            </tr>
            <tr>
              <td>8299</td>
              <td>
                Schools and Educational Services, NEC (art, drama, and music
                schools)
              </td>
              <td>611610</td>
              <td>Fine Arts Schools</td>
            </tr>
            <tr>
              <td>8299</td>
              <td>
                Schools and Educational Services, NEC (automobile driving
                instruction)
              </td>
              <td>611692</td>
              <td>Automobile Driving Schools</td>
            </tr>
            <tr>
              <td>8299</td>
              <td>Schools and Educational Services, NEC (baton instruction)</td>
              <td>611620</td>
              <td>Sports and Recreation Instruction</td>
            </tr>
            <tr>
              <td>8299</td>
              <td>
                Schools and Educational Services, NEC (cooking and modeling
                schools)
              </td>
              <td>611519</td>
              <td>Other Technical and Trade Schools</td>
            </tr>
            <tr>
              <td>8299</td>
              <td>
                Schools and Educational Services, NEC (exam preparation and
                tutoring){" "}
              </td>
              <td>611691</td>
              <td>Exam Preparation and Tutoring</td>
            </tr>
            <tr>
              <td>8299</td>
              <td>
                Schools and Educational Services, NEC (except professional and
                management training, aviation and flight training, fine arts
                schools, language schools, exam preparation and tutoring,
                automobile driving schools, and educational support services)
              </td>
              <td>611699</td>
              <td>All Other Miscellaneous Schools and Instruction</td>
            </tr>
            <tr>
              <td>8299</td>
              <td>
                Schools and Educational Services, NEC (flying instruction)
              </td>
              <td>611512</td>
              <td>Flight Training</td>
            </tr>
            <tr>
              <td>8299</td>
              <td>Schools and Educational Services, NEC (language schools)</td>
              <td>611630</td>
              <td>Language Schools</td>
            </tr>
            <tr>
              <td>8299</td>
              <td>
                Schools and Educational Services, NEC (professional and
                management development training)
              </td>
              <td>611430</td>
              <td>Professional and Management Development Training</td>
            </tr>
            <tr>
              <td>5093</td>
              <td>Scrap and Waste Materials (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5093</td>
              <td>
                Scrap and Waste Materials (business to business electronic
                markets){" "}
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5093</td>
              <td>Scrap and Waste Materials (merchant wholesalers)</td>
              <td>423930</td>
              <td>Recyclable Material Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>3451</td>
              <td>Screw Machine Products</td>
              <td>332721</td>
              <td>Precision Turned Product Manufacturing</td>
            </tr>
            <tr>
              <td>3812</td>
              <td>
                Search, Detection, Navigation, Guidance, Aeronautical, and
                Nautical Systems and Instruments
              </td>
              <td>334511</td>
              <td>
                Search, Detection, Navigation, Guidance, Aeronautical, and
                Nautical System and Instrument Manufacturing
              </td>
            </tr>
            <tr>
              <td>3341</td>
              <td>
                Secondary Smelting and Refining of Nonferrous Metals (aluminum)
              </td>
              <td>331314</td>
              <td>Secondary Smelting and Alloying of Aluminum</td>
            </tr>
            <tr>
              <td>3341</td>
              <td>
                Secondary Smelting and Refining of Nonferrous Metals (copper)
              </td>
              <td>331423</td>
              <td>Secondary Smelting, Refining, and Alloying of Copper</td>
            </tr>
            <tr>
              <td>3341</td>
              <td>
                Secondary Smelting and Refining of Nonferrous Metals (except
                copper and aluminum)
              </td>
              <td>331492</td>
              <td>
                Secondary Smelting, Refining, and Alloying of Nonferrous Metal
                (except Copper and Aluminum)
              </td>
            </tr>
            <tr>
              <td>7338</td>
              <td>
                Secretarial and Court Reporting (court reporting services)
              </td>
              <td>561492</td>
              <td>Court Reporting and Stenotype Services</td>
            </tr>
            <tr>
              <td>7338</td>
              <td>Secretarial and Court Reporting (secretarial services)</td>
              <td>561410</td>
              <td>Document Preparation Services</td>
            </tr>
            <tr>
              <td>6231</td>
              <td>Security and Commodity Exchanges</td>
              <td>523210</td>
              <td>Securities and Commodity Exchanges</td>
            </tr>
            <tr>
              <td>6211</td>
              <td>
                Security Brokers, Dealers, and Flotation Companies (except
                security dealers and underwriters, and security, oil lease, and
                gas lease brokers)
              </td>
              <td>523910</td>
              <td>Miscellaneous Intermediation</td>
            </tr>
            <tr>
              <td>6211</td>
              <td>
                Security Brokers, Dealers, and Flotation Companies (oil lease
                and gas lease brokers offices)
              </td>
              <td>523999</td>
              <td>Miscellaneous Financial Investment Activities</td>
            </tr>
            <tr>
              <td>6211</td>
              <td>
                Security Brokers, Dealers, and Flotation Companies (security
                brokers, note brokers)
              </td>
              <td>523120</td>
              <td>Securities Brokerage</td>
            </tr>
            <tr>
              <td>6211</td>
              <td>
                Security Brokers, Dealers, and Flotation Companies (security
                dealers and underwriters)
              </td>
              <td>523110</td>
              <td>Investment Banking and Securities Dealing</td>
            </tr>
            <tr>
              <td>7382</td>
              <td>Security Systems Services</td>
              <td>561621</td>
              <td>Security Systems Services (except Locksmiths)</td>
            </tr>
            <tr>
              <td>3674</td>
              <td>Semiconductors and Related Devices</td>
              <td>334413</td>
              <td>Semiconductor and Related Device Manufacturing</td>
            </tr>
            <tr>
              <td>5087</td>
              <td>
                Service Establishment Equipment and Supplies (agents and
                brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5087</td>
              <td>
                Service Establishment Equipment and Supplies (beauty and barber
                shop equipment and supplies sold via retail method)
              </td>
              <td>446120</td>
              <td>Cosmetics, Beauty Supplies, and Perfume Stores</td>
            </tr>
            <tr>
              <td>5087</td>
              <td>
                Service Establishment Equipment and Supplies (business to
                business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5087</td>
              <td>
                Service Establishment Equipment and Supplies (merchant
                wholesalers except those selling beauty and barber shop
                equipment and supplies via retail method)
              </td>
              <td>423850</td>
              <td>
                Service Establishment Equipment and Supplies Merchant
                Wholesalers
              </td>
            </tr>
            <tr>
              <td>3589</td>
              <td>Service Industry Machinery, NEC</td>
              <td>333319</td>
              <td>
                Other Commercial and Service Industry Machinery Manufacturing
              </td>
            </tr>
            <tr>
              <td>7829</td>
              <td>
                Services Allied to Motion Picture Distribution (commercial
                distribution film libraries)
              </td>
              <td>512120</td>
              <td>Motion Picture and Video Distribution</td>
            </tr>
            <tr>
              <td>7829</td>
              <td>
                Services Allied to Motion Picture Distribution (except
                commercial film distribution libraries and film archives)
              </td>
              <td>512199</td>
              <td>Other Motion Picture and Video Industries</td>
            </tr>
            <tr>
              <td>7829</td>
              <td>
                Services Allied to Motion Picture Distribution (film archives)
              </td>
              <td>519120</td>
              <td>Libraries and Archives</td>
            </tr>
            <tr>
              <td>7819</td>
              <td>
                Services Allied to Motion Picture Production (casting bureaus)
              </td>
              <td>561311</td>
              <td>Employment Placement Agencies</td>
            </tr>
            <tr>
              <td>7819</td>
              <td>
                Services Allied to Motion Picture Production (except casting
                bureaus, wardrobe and equipment rental, talent payment services,
                teleproduction and other postproduction services, reproduction
                of videos, independent film directors, and other independent
                motion picture production related services)
              </td>
              <td>512199</td>
              <td>Other Motion Picture and Video Industries</td>
            </tr>
            <tr>
              <td>7819</td>
              <td>
                Services Allied to Motion Picture Production (film directors and
                related motion picture production services, independent)
              </td>
              <td>711510</td>
              <td>Independent Artists, Writers, and Performers</td>
            </tr>
            <tr>
              <td>7819</td>
              <td>
                Services Allied to Motion Picture Production (motion picture
                consulting)
              </td>
              <td>541690</td>
              <td>Other Scientific and Technical Consulting Services</td>
            </tr>
            <tr>
              <td>7819</td>
              <td>
                Services Allied to Motion Picture Production (motion picture
                equipment rental)
              </td>
              <td>532490</td>
              <td>
                Other Commercial and Industrial Machinery and Equipment Rental
                and Leasing
              </td>
            </tr>
            <tr>
              <td>7819</td>
              <td>
                Services Allied to Motion Picture Production (reproduction of
                video)
              </td>
              <td>334612</td>
              <td>
                Prerecorded Compact Disc (except Software), Tape, and Record
                Reproducing
              </td>
            </tr>
            <tr>
              <td>7819</td>
              <td>
                Services Allied to Motion Picture Production (talent payment
                services)
              </td>
              <td>541214</td>
              <td>Payroll Services</td>
            </tr>
            <tr>
              <td>7819</td>
              <td>
                Services Allied to Motion Picture Production (teleproduction and
                postproduction services)
              </td>
              <td>512191</td>
              <td> Teleproduction and Other Postproduction Services</td>
            </tr>
            <tr>
              <td>7819</td>
              <td>
                Services Allied to Motion Picture Production (wardrobe rental
                for motion picture film production)
              </td>
              <td>532220</td>
              <td>Formal Wear and Costume Rental</td>
            </tr>
            <tr>
              <td>6289</td>
              <td>
                Services Allied With the Exchange of Securities or Commodities,
                NEC (except security custodians)
              </td>
              <td>523999</td>
              <td>Miscellaneous Financial Investment Activities</td>
            </tr>
            <tr>
              <td>6289</td>
              <td>
                Services Allied With the Exchange of Securities or Commodities,
                NEC (security custodians)
              </td>
              <td>523991</td>
              <td>Trust, Fiduciary, and Custody Activities</td>
            </tr>
            <tr>
              <td>8999</td>
              <td>Services, NEC (actuarial consulting)</td>
              <td>541612</td>
              <td>Human Resources and Executive Search Consulting Services</td>
            </tr>
            <tr>
              <td>8999</td>
              <td>
                Services, NEC (authors, artists, and related technical services,
                independent){" "}
              </td>
              <td>711510</td>
              <td>Independent Artists, Writers, and Performers</td>
            </tr>
            <tr>
              <td>8999</td>
              <td>Services, NEC (environmental consultants)</td>
              <td>541620</td>
              <td>Environmental Consulting Services</td>
            </tr>
            <tr>
              <td>8999</td>
              <td>
                Services, NEC (Internet broadcasting, special interest web
                sites, entertainment sites, and interactive game sites)
              </td>
              <td>519130</td>
              <td>
                Internet Publishing and Broadcasting and Web Search Portals
              </td>
            </tr>
            <tr>
              <td>8999</td>
              <td>Services, NEC (Internet web search portals)</td>
              <td>519130</td>
              <td>
                Internet Publishing and Broadcasting and Web Search Portals
              </td>
            </tr>
            <tr>
              <td>8999</td>
              <td>Services, NEC (music publishing)</td>
              <td>512230</td>
              <td>Music Publishers</td>
            </tr>
            <tr>
              <td>8999</td>
              <td>Services, NEC (record production)</td>
              <td>512210</td>
              <td>Record Production </td>
            </tr>
            <tr>
              <td>8999</td>
              <td>
                Services, NEC (scientific and related consulting services)
              </td>
              <td>541690</td>
              <td>Other Scientific and Technical Consulting Services</td>
            </tr>
            <tr>
              <td>8999</td>
              <td>Services, NEC (weather forecasting services)</td>
              <td>541990</td>
              <td>
                All Other Professional, Scientific, and Technical Services
              </td>
            </tr>
            <tr>
              <td>2652</td>
              <td>Setup Paperboard Boxes</td>
              <td>322213</td>
              <td>Setup Paperboard Box Manufacturing</td>
            </tr>
            <tr>
              <td>4952</td>
              <td>Sewerage Systems</td>
              <td>221320</td>
              <td>Sewage Treatment Facilities</td>
            </tr>
            <tr>
              <td>5949</td>
              <td>Sewing, Needlework, and Piece Goods Stores</td>
              <td>451130</td>
              <td>Sewing, Needlework, and Piece Goods Stores</td>
            </tr>
            <tr>
              <td>0214</td>
              <td>Sheep and Goats (goat farms)</td>
              <td>112420</td>
              <td>Goat Farming</td>
            </tr>
            <tr>
              <td>0214</td>
              <td>Sheep and Goats (sheep farms)</td>
              <td>112410</td>
              <td>Sheep Farming</td>
            </tr>
            <tr>
              <td>3444</td>
              <td>Sheet Metal Work (cooling towers, sheet metal)</td>
              <td>333415</td>
              <td>
                Air-Conditioning and Warm Air Heating Equipment and Commercial
                and Industrial Refrigeration Equipment Manufacturing
              </td>
            </tr>
            <tr>
              <td>3444</td>
              <td>
                Sheet Metal Work (except sheet metal bins and vats, skylights,
                and sheet metal cooling towers)
              </td>
              <td>332322</td>
              <td>Sheet Metal Work Manufacturing</td>
            </tr>
            <tr>
              <td>3444</td>
              <td>Sheet Metal Work (metal bins and vats)</td>
              <td>332439</td>
              <td>Other Metal Container Manufacturing</td>
            </tr>
            <tr>
              <td>3444</td>
              <td>Sheet Metal Work (stamped metal skylights)</td>
              <td>332321</td>
              <td>Metal Window and Door Manufacturing </td>
            </tr>
            <tr>
              <td>0913</td>
              <td>Shellfish</td>
              <td>114112</td>
              <td>Shellfish Fishing</td>
            </tr>
            <tr>
              <td>3731</td>
              <td>
                Ship Building and Repairing (except repairs in floating
                drydocks)
              </td>
              <td>336611</td>
              <td>Ship Building and Repairing</td>
            </tr>
            <tr>
              <td>3731</td>
              <td>
                Ship Building and Repairing (repair services provided by
                floating drydocks)
              </td>
              <td>488390</td>
              <td>Other Support Activities for Water Transportation</td>
            </tr>
            <tr>
              <td>7251</td>
              <td>
                Shoe Repair Shops and Shoeshine Parlors (hatcleaning and
                blocking shops)
              </td>
              <td>812320</td>
              <td>Drycleaning and Laundry Services (except Coin-Operated)</td>
            </tr>
            <tr>
              <td>7251</td>
              <td>
                Shoe Repair Shops and Shoeshine Parlors (shoe repair shops)
              </td>
              <td>811430</td>
              <td>Footwear and Leather Goods Repair</td>
            </tr>
            <tr>
              <td>7251</td>
              <td>
                Shoe Repair Shops and Shoeshine Parlors (shoeshine parlors)
              </td>
              <td>812990</td>
              <td>All Other Personal Services</td>
            </tr>
            <tr>
              <td>5661</td>
              <td>Shoe Stores</td>
              <td>448210</td>
              <td>Shoe Stores</td>
            </tr>
            <tr>
              <td>6153</td>
              <td>
                Short Term Business Credit Institutions, Except Agricultural
                (short term inventory credit and purchasing accounts receivable)
              </td>
              <td>522298</td>
              <td>All Other Nondepository Credit Intermediation</td>
            </tr>
            <tr>
              <td>2079</td>
              <td>
                Shortening, Table Oils, Margarine and Other Edible Fats and
                Oils, NEC (processing vegetable oils, except soybean, into
                edible cooking oils from oilseeds and vegetables crushed in the
                same establishment)
              </td>
              <td>311223</td>
              <td>Other Oilseed Processing</td>
            </tr>
            <tr>
              <td>2079</td>
              <td>
                Shortening, Table Oils, Margarine, and Other Edible Fats and
                Oils, NEC (except processing vegetable and soybean oils into
                edible oils from oilseeds and vegetables crushed in the same
                establishment)
              </td>
              <td>311225</td>
              <td>Fats and Oils Refining and Blending</td>
            </tr>
            <tr>
              <td>2079</td>
              <td>
                Shortening, Table Oils, Margarine, and Other Edible Fats and
                Oils, NEC (processing soybean oil into edible cooking oils from
                soybeans crushed in the same establishment)
              </td>
              <td>311222</td>
              <td>Soybean Processing</td>
            </tr>
            <tr>
              <td>6153</td>
              <td>
                Short-Term Business Credit Institutions, Except Agricultural
                (business sales finance).
              </td>
              <td>522220</td>
              <td>Sales Financing</td>
            </tr>
            <tr>
              <td>6153</td>
              <td>
                Short-Term Business Credit Institutions, Except Agricultural
                (credit card issuing)
              </td>
              <td>522210</td>
              <td>Credit Card Issuing</td>
            </tr>
            <tr>
              <td>6153</td>
              <td>
                Short-Term Business Credit Institutions, Except Agricultural
                (credit card service)
              </td>
              <td>522320</td>
              <td>
                Financial Transactions Processing, Reserve, and Clearinghouse
                Activities
              </td>
            </tr>
            <tr>
              <td>6153</td>
              <td>
                Short-Term Business Credit Institutions, Except Agricultural
                (except credit card service and issuing, short term inventory
                credit, purchasing accounts receivable, and business sales
                finance)
              </td>
              <td>523910</td>
              <td>Miscellaneous Intermediation</td>
            </tr>
            <tr>
              <td>3993</td>
              <td>
                Signs and Advertising Specialties (screen printing purchased
                advertising specialties)
              </td>
              <td>323113</td>
              <td>Commercial Screen Printing</td>
            </tr>
            <tr>
              <td>3993</td>
              <td>Signs and Advertising Specialties (signs)</td>
              <td>339950</td>
              <td>Sign Manufacturing</td>
            </tr>
            <tr>
              <td>1044</td>
              <td>Silver Ores</td>
              <td>212222</td>
              <td>Silver Ore Mining</td>
            </tr>
            <tr>
              <td>3914</td>
              <td>
                Silverware, Plated Ware, and Stainless Steel Ware (cutlery and
                flatware, nonprecious and precious plated)
              </td>
              <td>332211</td>
              <td>Cutlery and Flatware (except Precious) Manufacturing</td>
            </tr>
            <tr>
              <td>3914</td>
              <td>
                Silverware, Plated Ware, and Stainless Steel Ware (except
                nonprecious and precious plated metal cutlery, flatware, and
                hollowware)
              </td>
              <td>339912</td>
              <td>Silverware and Holloware Manufacturing</td>
            </tr>
            <tr>
              <td>3914</td>
              <td>
                Silverware, Plated Ware, and Stainless Steel Ware (precious
                metal plated hollowware)
              </td>
              <td>332999</td>
              <td>
                All Other Miscellaneous Fabricated Metal Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>8051</td>
              <td>
                Skilled Nursing Care Facilities (continuing care retirement
                communities)
              </td>
              <td>623311</td>
              <td>Continuing Care Retirement Communities </td>
            </tr>
            <tr>
              <td>8051</td>
              <td>
                Skilled Nursing Care Facilities (except continuing care
                retirement communities and mental retardation hospitals)
              </td>
              <td>623110</td>
              <td>Nursing Care Facilities</td>
            </tr>
            <tr>
              <td>8051</td>
              <td>
                Skilled Nursing Care Facilities (mental retardation hospitals)
              </td>
              <td>623210</td>
              <td>Residential Mental Retardation Facilities</td>
            </tr>
            <tr>
              <td>3484</td>
              <td>Small Arms</td>
              <td>332994</td>
              <td>Small Arms Manufacturing</td>
            </tr>
            <tr>
              <td>3482</td>
              <td>Small Arms Ammunition</td>
              <td>332992</td>
              <td>Small Arms Ammunition Manufacturing</td>
            </tr>
            <tr>
              <td>2841</td>
              <td>Soaps and Other Detergents, Except Specialty Cleaners</td>
              <td>325611</td>
              <td>Soap and Other Detergent Manufacturing</td>
            </tr>
            <tr>
              <td>8399</td>
              <td>
                Social Services, NEC (environment, conservation, and wildlife
                advocacy)
              </td>
              <td>813312</td>
              <td>Environment, Conservation and Wildlife Organizations</td>
            </tr>
            <tr>
              <td>8399</td>
              <td>
                Social Services, NEC (except human rights, environment,
                conservation and wildlife advocacy organizations, grantmaking
                and giving, and voluntary health organizations)
              </td>
              <td>813319</td>
              <td>Other Social Advocacy Organizations</td>
            </tr>
            <tr>
              <td>8399</td>
              <td>Social Services, NEC (grantmaking and giving)</td>
              <td>813219</td>
              <td>Other Grantmaking and Giving Services</td>
            </tr>
            <tr>
              <td>8399</td>
              <td>Social Services, NEC (human rights organizations)</td>
              <td>813311</td>
              <td>Human Rights Organizations</td>
            </tr>
            <tr>
              <td>8399</td>
              <td>Social Services, NEC (voluntary health organizations)</td>
              <td>813212</td>
              <td>Voluntary Health Organizations</td>
            </tr>
            <tr>
              <td>2436</td>
              <td>Softwood Veneer and Plywood</td>
              <td>321212</td>
              <td>Softwood Veneer and Plywood Manufacturing</td>
            </tr>
            <tr>
              <td>0711</td>
              <td>Soil Preparation Services</td>
              <td>115112</td>
              <td>Soil Preparation, Planting, and Cultivating</td>
            </tr>
            <tr>
              <td>2075</td>
              <td>Soybean Oil Mills (processing purchased soybean oil)</td>
              <td>311225</td>
              <td>Fats and Oils Refining and Blending</td>
            </tr>
            <tr>
              <td>2075</td>
              <td>
                Soybean Oil Mills (soybean processing, except edible soybean
                oil)
              </td>
              <td>311222</td>
              <td>Soybean Processing</td>
            </tr>
            <tr>
              <td>0116</td>
              <td>Soybeans</td>
              <td>111110</td>
              <td>Soybean Farming </td>
            </tr>
            <tr>
              <td>9661</td>
              <td>Space Research and Technology</td>
              <td>927110</td>
              <td>Space Research and Technology</td>
            </tr>
            <tr>
              <td>3544</td>
              <td>
                Special Dies and Tools, Die Sets, Jigs and Fixtures, and
                Industrial Molds (except molds)
              </td>
              <td>333514</td>
              <td>
                Special Die and Tool, Die Set, Jig, and Fixture Manufacturing
              </td>
            </tr>
            <tr>
              <td>3544</td>
              <td>
                Special Dies and Tools, Die Sets, Jigs and Fixtures, and
                Industrial Molds (industrial molds)
              </td>
              <td>333511</td>
              <td>Industrial Mold Manufacturing</td>
            </tr>
            <tr>
              <td>3559</td>
              <td>
                Special Industry Machinery, NEC (automotive maintenance
                equipment)
              </td>
              <td>333319</td>
              <td>
                Other Commercial and Service Industry Machinery Manufacturing
              </td>
            </tr>
            <tr>
              <td>3559</td>
              <td>
                Special Industry Machinery, NEC (cotton ginning machinery)
              </td>
              <td>333111</td>
              <td>Farm Machinery and Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3559</td>
              <td>
                Special Industry Machinery, NEC (except rubber and plastics
                manufacturing machinery, semiconductor manufacturing machinery,
                and automotive maintenance equipment)
              </td>
              <td>333298</td>
              <td>All Other Industrial Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>3559</td>
              <td>
                Special Industry Machinery, NEC (nuclear control rod drive
                mechanisms)
              </td>
              <td>332410</td>
              <td>Power Boiler and Heat Exchanger Manufacturing</td>
            </tr>
            <tr>
              <td>3559</td>
              <td>
                Special Industry Machinery, NEC (rubber and plastics
                manufacturing machinery)
              </td>
              <td>333220</td>
              <td>Plastics and Rubber Industry Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>3559</td>
              <td>
                Special Industry Machinery, NEC (semiconductor machinery
                manufacturing)
              </td>
              <td>333295</td>
              <td>Semiconductor Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>2429</td>
              <td>Special Product Sawmills, NEC (excelsior)</td>
              <td>321999</td>
              <td>All Other Miscellaneous Wood Product Manufacturing</td>
            </tr>
            <tr>
              <td>2429</td>
              <td>Special Product Sawmills, NEC (shingle mills, shakes)</td>
              <td>321113</td>
              <td>Sawmills</td>
            </tr>
            <tr>
              <td>2429</td>
              <td>
                Special Product Sawmills, Not Elsewhere Classified (cooperage
                stock)
              </td>
              <td>321920</td>
              <td>Wood Container and Pallet Manufacturing</td>
            </tr>
            <tr>
              <td>1799</td>
              <td>
                Special Trade Contractors, NEC (anchored earth retention
                contractors)
              </td>
              <td>237990</td>
              <td>Other Heavy and Civil Engineering Construction</td>
            </tr>
            <tr>
              <td>1799</td>
              <td>
                Special Trade Contractors, NEC (asbestos abatement and lead
                paint removal contractors)
              </td>
              <td>562910</td>
              <td>Remediation Services</td>
            </tr>
            <tr>
              <td>1799</td>
              <td>
                Special Trade Contractors, NEC (building equipment installation
                contractors for service station equipment; boiler, duct, and
                pipe insulation; lightning rod installation; bowling alley
                equipment installation; church bell installation; and clock
                tower installation)
              </td>
              <td>238290</td>
              <td>Other Building Equipment Contractors</td>
            </tr>
            <tr>
              <td>1799</td>
              <td>
                Special Trade Contractors, NEC (building finishing contractors
                for weather stripping and damp proofing, window covering fixture
                installation, bathtub refinishing, modular furniture
                installation, trade show exhibit installation and removal, and
                spectator seating installation) )
              </td>
              <td>238390</td>
              <td>Other Building Finishing Contractors</td>
            </tr>
            <tr>
              <td>1799</td>
              <td>
                Special Trade Contractors, NEC (countertop, residential-type,
                installation)
              </td>
              <td>238350</td>
              <td>Finish Carpentry Contractors</td>
            </tr>
            <tr>
              <td>1799</td>
              <td>
                Special Trade Contractors, NEC (dewatering contractors, test
                drilling for construction, and core drilling for construction)
              </td>
              <td>238910</td>
              <td>Site Preparation Contractors</td>
            </tr>
            <tr>
              <td>1799</td>
              <td>
                Special Trade Contractors, NEC (except indoor swimming pool
                contractors; anchored earth retention contractors; glass tinting
                work; forming contractors; ornamental metal work contractors;
                lightning rod installation contractors; paint and wall paper
                removal contractors; countertop, residential-type, installation;
                miscellaneous residential building finishing contractors;
                dewatering contractors; test drilling for construction; and core
                drilling for construction)
              </td>
              <td>238990</td>
              <td>All Other Specialty Trade Contractors</td>
            </tr>
            <tr>
              <td>1799</td>
              <td>
                Special Trade Contractors, NEC (forming contractors and
                ornamental metal work contractors)
              </td>
              <td>238190</td>
              <td>
                Other Foundation, Structure, and Building Exterior Contractors
              </td>
            </tr>
            <tr>
              <td>1799</td>
              <td>Special Trade Contractors, NEC (glass tinting work)</td>
              <td>238150</td>
              <td>Glass and Glazing Contractors</td>
            </tr>
            <tr>
              <td>1799</td>
              <td>
                Special Trade Contractors, NEC (indoor swimming pool
                construction contractors)
              </td>
              <td>236220</td>
              <td>Commercial and Institutional Building Construction</td>
            </tr>
            <tr>
              <td>1799</td>
              <td>
                Special Trade Contractors, NEC (paint and wallpaper stripping
                and removing contractors)
              </td>
              <td>238320</td>
              <td>Paint and Wall Covering Contractors</td>
            </tr>
            <tr>
              <td>1799</td>
              <td>
                Special Trade Contractors, NEC (power washing building
                exteriors, not associated with construction)
              </td>
              <td>561790</td>
              <td>Other Services to Buildings and Dwellings</td>
            </tr>
            <tr>
              <td>4226</td>
              <td>
                Special Warehousing and Storage, NEC (except fur storage and
                warehousing in foreign trade zones)
              </td>
              <td>493190</td>
              <td>Other Warehousing and Storage</td>
            </tr>
            <tr>
              <td>4226</td>
              <td>Special Warehousing and Storage, NEC (fur storage)</td>
              <td>493120</td>
              <td>Refrigerated Warehousing and Storage</td>
            </tr>
            <tr>
              <td>4226</td>
              <td>
                Special Warehousing and Storage, NEC (warehousing in foreign
                trade zones)
              </td>
              <td>493110</td>
              <td>General Warehousing and Storage</td>
            </tr>
            <tr>
              <td>2842</td>
              <td>
                Specialty Cleaning, Polishing, and Sanitation Preparations
              </td>
              <td>325612</td>
              <td>Polish and Other Sanitation Good Manufacturing</td>
            </tr>
            <tr>
              <td>8069</td>
              <td>
                Specialty Hospitals, Except Psychiatric (children's hospitals)
              </td>
              <td>622110</td>
              <td>General Medical and Surgical Hospitals</td>
            </tr>
            <tr>
              <td>8069</td>
              <td>
                Specialty Hospitals, Except Psychiatric (except children's and
                substance abuse hospitals){" "}
              </td>
              <td>622310</td>
              <td>
                Specialty (except Psychiatric and Substance Abuse) Hospitals
              </td>
            </tr>
            <tr>
              <td>8069</td>
              <td>
                Specialty Hospitals, Except Psychiatric (substance abuse
                hospitals)
              </td>
              <td>622210</td>
              <td>Psychiatric and Substance Abuse Hospitals</td>
            </tr>
            <tr>
              <td>8093</td>
              <td>
                Specialty Outpatient Facilities, NEC (except family planning
                centers, mental health centers, and respritory therapy clinics
                and offices)
              </td>
              <td>621498</td>
              <td>All Other Outpatient Care Centers</td>
            </tr>
            <tr>
              <td>8093</td>
              <td>
                Specialty Outpatient Facilities, NEC (family planning centers)
              </td>
              <td>621410</td>
              <td>Family Planning Centers</td>
            </tr>
            <tr>
              <td>8093</td>
              <td>
                Specialty Outpatient Facilities, NEC (mental health facilities)
              </td>
              <td>621420</td>
              <td>Outpatient Mental Health and Substance Abuse Centers</td>
            </tr>
            <tr>
              <td>8093</td>
              <td>
                Specialty Outpatient Facilities, NEC (respiratory therapy
                clinics and offices)
              </td>
              <td>621399</td>
              <td>Offices of All Other Miscellaneous Health Practitioners</td>
            </tr>
            <tr>
              <td>3566</td>
              <td>Speed Changers, Industrial High-Speed Drives, and Gears</td>
              <td>333612</td>
              <td>
                Speed Changer, Industrial High-Speed Drive, and Gear
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3949</td>
              <td>Sporting and Athletic Goods, NEC</td>
              <td>339920</td>
              <td>Sporting and Athletic Goods Manufacturing</td>
            </tr>
            <tr>
              <td>7032</td>
              <td>Sporting and Recreational Camps</td>
              <td>721214</td>
              <td>Recreational and Vacation Camps (except Campgrounds)</td>
            </tr>
            <tr>
              <td>5091</td>
              <td>
                Sporting and Recreational Goods and Supplies (agents and
                brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5091</td>
              <td>
                Sporting and Recreational Goods and Supplies (business to
                business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5091</td>
              <td>
                Sporting and Recreational Goods and Supplies (merchant
                wholesalers except those selling sporting and recreational goods
                via retail method)
              </td>
              <td>423910</td>
              <td>
                Sporting and Recreational Goods and Supplies Merchant
                Wholesalers
              </td>
            </tr>
            <tr>
              <td>5091</td>
              <td>
                Sporting and Recreational Goods and Supplies (sporting and
                recreational goods sold via retail method)
              </td>
              <td>451110</td>
              <td>Sporting Goods Stores</td>
            </tr>
            <tr>
              <td>5941</td>
              <td>Sporting Goods Stores and Bicycle Shops</td>
              <td>451110</td>
              <td>Sporting Goods Stores</td>
            </tr>
            <tr>
              <td>6022</td>
              <td>State Commercial Banks (commercial banking)</td>
              <td>522110</td>
              <td>Commercial Banking</td>
            </tr>
            <tr>
              <td>6022</td>
              <td>State Commercial Banks (credit card issuing)</td>
              <td>522210</td>
              <td>Credit Card Issuing</td>
            </tr>
            <tr>
              <td>6022</td>
              <td>State Commercial Banks (private and industrial banking)</td>
              <td>522190</td>
              <td>Other Depository Credit Intermediation</td>
            </tr>
            <tr>
              <td>5112</td>
              <td>Stationery and Office Supplies (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5112</td>
              <td>
                Stationery and Office Supplies (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5112</td>
              <td>
                Stationery and Office Supplies (merchant wholesalers except
                those selling stationery and office supplies via retail method)
              </td>
              <td>424120</td>
              <td>Stationery and Office Supplies Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5112</td>
              <td>
                Stationery and Office Supplies (stationery and office supplies
                sold via retail method)
              </td>
              <td>453210</td>
              <td>Office Supplies and Stationery Stores</td>
            </tr>
            <tr>
              <td>5943</td>
              <td>Stationery Stores</td>
              <td>453210</td>
              <td>Office Supplies and Stationery Stores</td>
            </tr>
            <tr>
              <td>2678</td>
              <td>Stationery, Tablets, and Related Products</td>
              <td>322233</td>
              <td>Stationery, Tablet, and Related Product Manufacturing</td>
            </tr>
            <tr>
              <td>4961</td>
              <td>Steam and Air-Conditioning Supply</td>
              <td>221330</td>
              <td>Steam and Air-Conditioning Supply</td>
            </tr>
            <tr>
              <td>3511</td>
              <td>
                Steam, Gas, and Hydraulic Turbines, and Turbine Generator Set
                Units
              </td>
              <td>333611</td>
              <td>Turbine and Turbine Generator Set Units Manufacturing</td>
            </tr>
            <tr>
              <td>3325</td>
              <td>Steel Foundries, NEC</td>
              <td>331513</td>
              <td>Steel Foundries (except Investment)</td>
            </tr>
            <tr>
              <td>3324</td>
              <td>Steel Investment Foundries</td>
              <td>331512</td>
              <td>Steel Investment Foundries</td>
            </tr>
            <tr>
              <td>3317</td>
              <td>Steel Pipe and Tubes</td>
              <td>331210</td>
              <td>
                Iron and Steel Pipe and Tube Manufacturing from Purchased Steel
              </td>
            </tr>
            <tr>
              <td>3493</td>
              <td>Steel Springs, Except Wire</td>
              <td>332611</td>
              <td>Spring (Heavy Gauge) Manufacturing</td>
            </tr>
            <tr>
              <td>3315</td>
              <td>
                Steel Wiredrawing and Steel Nails and Spikes (nails, spikes,
                paper clips, and wire not made in wiredrawing plants)
              </td>
              <td>332618</td>
              <td>Other Fabricated Wire Product Manufacturing</td>
            </tr>
            <tr>
              <td>3315</td>
              <td>
                Steel Wiredrawing and Steel Nails and Spikes (steel wire
                drawing)
              </td>
              <td>331222</td>
              <td>Steel Wire Drawing</td>
            </tr>
            <tr>
              <td>3312</td>
              <td>
                Steel Works, Blast Furnaces (Including Coke Ovens), and Rolling
                Mills (coke ovens)
              </td>
              <td>324199</td>
              <td>All Other Petroleum and Coal Products Manufacturing</td>
            </tr>
            <tr>
              <td>3312</td>
              <td>
                Steel Works, Blast Furnaces (Including Coke Ovens), and Rolling
                Mills (except coke ovens not integrated with steel mills and
                hot-rolling purchased steel)
              </td>
              <td>331111</td>
              <td>Iron and Steel Mills</td>
            </tr>
            <tr>
              <td>3312</td>
              <td>
                Steel Works, Blast Furnaces (Including Coke Ovens), and Rolling
                Mills (hot-rolling purchased steel)
              </td>
              <td>331221</td>
              <td>Rolled Steel Shape Manufacturing</td>
            </tr>
            <tr>
              <td>3691</td>
              <td>Storage Batteries</td>
              <td>335911</td>
              <td>Storage Battery Manufacturing</td>
            </tr>
            <tr>
              <td>3259</td>
              <td>Structural Clay Products, NEC</td>
              <td>327123</td>
              <td>Other Structural Clay Product Manufacturing</td>
            </tr>
            <tr>
              <td>1791</td>
              <td>Structural Steel Erection (cooling tower installation)</td>
              <td>238220</td>
              <td>Plumbing, Heating, and Air-Conditioning Contractors</td>
            </tr>
            <tr>
              <td>1791</td>
              <td>
                Structural Steel Erection (curtain wall installation and metal
                furring installation)
              </td>
              <td>238190</td>
              <td>
                Other Foundation, Structure, and Building Exterior Contractors
              </td>
            </tr>
            <tr>
              <td>1791</td>
              <td>Structural Steel Erection (structural steel work)</td>
              <td>238120</td>
              <td>Structural Steel and Precast Concrete Contractors</td>
            </tr>
            <tr>
              <td>2439</td>
              <td>Structural Wood Members, NEC (except trusses)</td>
              <td>321213</td>
              <td>Engineered Wood Member (except Truss) Manufacturing</td>
            </tr>
            <tr>
              <td>2439</td>
              <td>Structural Wood Members, NEC (trusses)</td>
              <td>321214</td>
              <td>Truss Manufacturing</td>
            </tr>
            <tr>
              <td>0133</td>
              <td>Sugarcane and Sugar Beets (sugar beet farms)</td>
              <td>111991</td>
              <td>Sugar Beet Farming</td>
            </tr>
            <tr>
              <td>0133</td>
              <td>Sugarcane and Sugar Beets (sugarcane farms)</td>
              <td>111930</td>
              <td>Sugarcane Farming</td>
            </tr>
            <tr>
              <td>6351</td>
              <td>
                Surety Insurance (financial responsibility insurers-direct)
              </td>
              <td>524126</td>
              <td>Direct Property and Casualty Insurance Carriers</td>
            </tr>
            <tr>
              <td>6351</td>
              <td>Surety Insurance (reinsurers)</td>
              <td>524130</td>
              <td>Reinsurance Carriers</td>
            </tr>
            <tr>
              <td>6351</td>
              <td>Surety Insurance (warranty insurance, home)</td>
              <td>524128</td>
              <td>
                Other Direct Insurance (except Life, Health, and Medical)
                Carriers
              </td>
            </tr>
            <tr>
              <td>2843</td>
              <td>
                Surface Active Agents, Finishing Agents, Sulfonated Oils, and
                Assistants
              </td>
              <td>325613</td>
              <td>Surface Active Agent Manufacturing</td>
            </tr>
            <tr>
              <td>3841</td>
              <td>
                Surgical and Medical Instruments and Apparatus (except
                tranquilizer guns and operating room tables)
              </td>
              <td>339112</td>
              <td>Surgical and Medical Instrument Manufacturing</td>
            </tr>
            <tr>
              <td>3841</td>
              <td>
                Surgical and Medical Instruments and Apparatus (operating room
                tables)
              </td>
              <td>337127</td>
              <td>Institutional Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>3841</td>
              <td>
                Surgical and Medical Instruments and Apparatus (tranquilizer
                guns)
              </td>
              <td>332994</td>
              <td>Small Arms Manufacturing</td>
            </tr>
            <tr>
              <td>8713</td>
              <td>Surveying Services (except geophysical surveying)</td>
              <td>541370</td>
              <td>Surveying and Mapping (except Geophysical) Services</td>
            </tr>
            <tr>
              <td>8713</td>
              <td>Surveying Services (geophysical surveying )</td>
              <td>541360</td>
              <td>Geophysical Surveying and Mapping Services</td>
            </tr>
            <tr>
              <td>3613</td>
              <td>Switchgear and Switchboard Apparatus</td>
              <td>335313</td>
              <td>Switchgear and Switchboard Apparatus Manufacturing</td>
            </tr>
            <tr>
              <td>2822</td>
              <td>Synthetic Rubber</td>
              <td>325212</td>
              <td>Synthetic Rubber Manufacturing</td>
            </tr>
            <tr>
              <td>3795</td>
              <td>Tanks and Tank Components</td>
              <td>336992</td>
              <td>
                Military Armored Vehicle, Tank, and Tank Component Manufacturing
              </td>
            </tr>
            <tr>
              <td>7291</td>
              <td>Tax Return Preparation Services</td>
              <td>541213</td>
              <td>Tax Preparation Services</td>
            </tr>
            <tr>
              <td>4121</td>
              <td>Taxicabs</td>
              <td>485310</td>
              <td>Taxi Service</td>
            </tr>
            <tr>
              <td>4822</td>
              <td>Telegraph and Other Message Communications</td>
              <td>517110</td>
              <td>Wired Telecommunications Carriers</td>
            </tr>
            <tr>
              <td>3661</td>
              <td>
                Telephone and Telegraph Apparatus (consumer external modems)
              </td>
              <td>334418</td>
              <td>
                Printed Circuit Assembly (Electronic Assembly) Manufacturing
              </td>
            </tr>
            <tr>
              <td>3661</td>
              <td>
                Telephone and Telegraph Apparatus (except consumer external
                modems)
              </td>
              <td>334210</td>
              <td>Telephone Apparatus Manufacturing</td>
            </tr>
            <tr>
              <td>4813</td>
              <td>
                Telephone Communications, Except Radiotelephone (except
                resellers)
              </td>
              <td>517110</td>
              <td>Wired Telecommunications Carriers</td>
            </tr>
            <tr>
              <td>4813</td>
              <td>
                Telephone Communications, Except Radiotelephone (resellers)
              </td>
              <td>517911</td>
              <td>Telecommunications Resellers</td>
            </tr>
            <tr>
              <td>4833</td>
              <td>Television Broadcasting Stations </td>
              <td>515120</td>
              <td>Television Broadcasting </td>
            </tr>
            <tr>
              <td>4231</td>
              <td>
                Terminal and Joint Terminal Maintenance Facilities for Motor
                Freight Transportation
              </td>
              <td>488490</td>
              <td>Other Support Activities for Road Transportation</td>
            </tr>
            <tr>
              <td>4173</td>
              <td>
                Terminal and Service Facilities for Motor Vehicle Passenger
                Transportation
              </td>
              <td>488490</td>
              <td>Other Support Activities for Road Transportation</td>
            </tr>
            <tr>
              <td>1743</td>
              <td>
                Terrazzo, Tile, Marble, and Mosaic Work (except fresco work)
              </td>
              <td>238340</td>
              <td>Tile and Terrazzo Contractors</td>
            </tr>
            <tr>
              <td>1743</td>
              <td>Terrazzo, Tile, Marble, and Mosaic Work (fresco work)</td>
              <td>238310</td>
              <td>Drywall and Insulation Contractors</td>
            </tr>
            <tr>
              <td>8734</td>
              <td>
                Testing Laboratories (except veterinary testing laboratories)
              </td>
              <td>541380</td>
              <td>Testing Laboratories</td>
            </tr>
            <tr>
              <td>8734</td>
              <td>Testing Laboratories (veterinary testing laboratories)</td>
              <td>541940</td>
              <td>Veterinary Services</td>
            </tr>
            <tr>
              <td>2393</td>
              <td>Textile Bags</td>
              <td>314911</td>
              <td>Textile Bag Mills</td>
            </tr>
            <tr>
              <td>2299</td>
              <td>
                Textile Goods, NEC (broadwoven fabrics of jute, linen, hemp, and
                ramie and hand woven fabrics)
              </td>
              <td>313210</td>
              <td>Broadwoven Fabric Mills</td>
            </tr>
            <tr>
              <td>2299</td>
              <td>
                Textile Goods, NEC (finishing hard fiber thread and yarn without
                manufacturing thread or yarn)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>2299</td>
              <td>Textile Goods, NEC (hemp bags made in spinning mills)</td>
              <td>313111</td>
              <td>Yarn Spinning Mills</td>
            </tr>
            <tr>
              <td>2299</td>
              <td>Textile Goods, NEC (manufacturing other textile products)</td>
              <td>314999</td>
              <td>All Other Miscellaneous Textile Product Mills</td>
            </tr>
            <tr>
              <td>2299</td>
              <td>
                Textile Goods, NEC (manufacturing thread of hemp, linen, and
                ramie)
              </td>
              <td>313113</td>
              <td>Thread Mills</td>
            </tr>
            <tr>
              <td>2299</td>
              <td>
                Textile Goods, NEC (narrow woven fabric of jute, linen, hemp,
                and ramie)
              </td>
              <td>313221</td>
              <td>Narrow Fabric Mills</td>
            </tr>
            <tr>
              <td>2299</td>
              <td>Textile Goods, NEC (nonwoven felt)</td>
              <td>313230</td>
              <td>Nonwoven Fabric Mills</td>
            </tr>
            <tr>
              <td>2299</td>
              <td>
                Textile Goods, NEC (spinning yarn of flax, hemp, jute, and
                ramie)
              </td>
              <td>313111</td>
              <td>Yarn Spinning Mills</td>
            </tr>
            <tr>
              <td>3552</td>
              <td>Textile Machinery</td>
              <td>333292</td>
              <td>Textile Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>7922</td>
              <td>
                Theatrical Producers (Except Motion Picture) and Miscellaneous
                Theatrical Services (casting agencies and television employment
                agencies)
              </td>
              <td>561311</td>
              <td>Employment Placement Agencies</td>
            </tr>
            <tr>
              <td>7922</td>
              <td>
                Theatrical Producers (Except Motion Picture) and Miscellaneous
                Theatrical Services (producers of radio programs)
              </td>
              <td>512290</td>
              <td>Other Sound Recording Industries</td>
            </tr>
            <tr>
              <td>7922</td>
              <td>
                Theatrical Producers (Except Motion Picture) and Miscellaneous
                Theatrical Services (theater operators)
              </td>
              <td>711310</td>
              <td>
                Promoters of Performing Arts, Sports, and Similar Events with
                Facilities
              </td>
            </tr>
            <tr>
              <td>7922</td>
              <td>
                Theatrical Producers (Except Motion Picture) and Miscellaneous
                Theatrical Services (theatrical agents)
              </td>
              <td>711410</td>
              <td>
                Agents and Managers for Artists, Athletes, Entertainers, and
                Other Public Figures
              </td>
            </tr>
            <tr>
              <td>7922</td>
              <td>
                Theatrical Producers (Except Motion Picture) and Miscellaneous
                Theatrical Services (theatrical costume design)
              </td>
              <td>711510</td>
              <td>Independent Artists, Writers, and Performers</td>
            </tr>
            <tr>
              <td>7922</td>
              <td>
                Theatrical Producers (Except Motion Picture) and Miscellaneous
                Theatrical Services (theatrical equipment rental)
              </td>
              <td>532490</td>
              <td>
                Other Commercial and Industrial Machinery and Equipment Rental
                and Leasing
              </td>
            </tr>
            <tr>
              <td>7922</td>
              <td>
                Theatrical Producers (Except Motion Picture) and Miscellaneous
                Theatrical Services (theatrical promoters)
              </td>
              <td>711320</td>
              <td>
                Promoters of Performing Arts, Sports, and Similar Events without
                Facilities
              </td>
            </tr>
            <tr>
              <td>7922</td>
              <td>
                Theatrical Producers (Except Motion Picture) and Miscellaneous
                Theatrical Services (theatrical ticket agencies)
              </td>
              <td>561599</td>
              <td>All Other Travel Arrangement and Reservation Services</td>
            </tr>
            <tr>
              <td>7922</td>
              <td>
                Theatrical Producers (Except Motion Pictures) and Miscellaneous
                Theatrical Services (ballet and dance companies)
              </td>
              <td>711120</td>
              <td>Dance Companies</td>
            </tr>
            <tr>
              <td>7922</td>
              <td>
                Theatrical Producers (Except Motion Pictures) and Miscellaneous
                Theatrical Services (theater companies, opera companies)
              </td>
              <td>711110</td>
              <td>Theater Companies and Dinner Theaters</td>
            </tr>
            <tr>
              <td>Aux</td>
              <td>
                These establishments were included as auxiliaries in the 1987
                Standard Industrial Classification
              </td>
              <td>551114</td>
              <td>Corporate, Subsidiary, and Regional Managing Offices</td>
            </tr>
            <tr>
              <td>2284</td>
              <td>
                Thread Mills (except finishing thread without manufacturing
                thread)
              </td>
              <td>313113</td>
              <td>Thread Mills</td>
            </tr>
            <tr>
              <td>2284</td>
              <td>
                Thread Mills (finishing thread without manufacturing thread)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>0811</td>
              <td>Timber Tracts (long term timber farms)</td>
              <td>113110</td>
              <td>Timber Tract Operations</td>
            </tr>
            <tr>
              <td>0811</td>
              <td>Timber Tracts (short rotation woody crops)</td>
              <td>111421</td>
              <td>Nursery and Tree Production</td>
            </tr>
            <tr>
              <td>2296</td>
              <td>Tire Cord and Fabrics</td>
              <td>314992</td>
              <td>Tire Cord and Tire Fabric Mills</td>
            </tr>
            <tr>
              <td>7534</td>
              <td>
                Tire Retreading and Repair Shops (rebuilding tires and retreaded
                tire manufacturing)
              </td>
              <td>326212</td>
              <td>Tire Retreading</td>
            </tr>
            <tr>
              <td>7534</td>
              <td>Tire Retreading and Repair Shops (tire repair)</td>
              <td>811198</td>
              <td>All Other Automotive Repair and Maintenance</td>
            </tr>
            <tr>
              <td>3011</td>
              <td>Tires and Inner Tubes</td>
              <td>326211</td>
              <td>Tire Manufacturing (except Retreading)</td>
            </tr>
            <tr>
              <td>5014</td>
              <td>Tires and Tubes (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5014</td>
              <td>Tires and Tubes (business to business electronic markets)</td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5014</td>
              <td>
                Tires and Tubes (merchant wholesalers except those selling via
                retail method)
              </td>
              <td>423130</td>
              <td>Tire and Tube Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5014</td>
              <td>Tires and Tubes (tires and tubes sold via retail method)</td>
              <td>441320</td>
              <td>Tire Dealers</td>
            </tr>
            <tr>
              <td>6541</td>
              <td>Title Abstract Offices</td>
              <td>541191</td>
              <td>Title Abstract and Settlement Offices</td>
            </tr>
            <tr>
              <td>6361</td>
              <td>Title Insurance (reinsurers)</td>
              <td>524130</td>
              <td>Reinsurance Carriers</td>
            </tr>
            <tr>
              <td>6361</td>
              <td>Title Insurance (title insurers-direct)</td>
              <td>524127</td>
              <td>Direct Title Insurance Carriers</td>
            </tr>
            <tr>
              <td>0132</td>
              <td>Tobacco</td>
              <td>111910</td>
              <td>Tobacco Farming</td>
            </tr>
            <tr>
              <td>5194</td>
              <td>Tobacco and Tobacco Products (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5194</td>
              <td>
                Tobacco and Tobacco Products (business to business electronic
                markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5194</td>
              <td>
                Tobacco and Tobacco Products (merchant wholesalers except those
                selling tobacco and tobacco products via retail method)
              </td>
              <td>424940</td>
              <td>Tobacco and Tobacco Product Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5194</td>
              <td>Tobacco and Tobacco Products (sold via retail method)</td>
              <td>453991</td>
              <td>Tobacco Stores</td>
            </tr>
            <tr>
              <td>2141</td>
              <td>Tobacco Stemming and Redrying (reconstituted tobacco)</td>
              <td>312229</td>
              <td>Other Tobacco Product Manufacturing</td>
            </tr>
            <tr>
              <td>2141</td>
              <td>
                Tobacco Stemming and Redrying (stemming and redrying tobacco)
              </td>
              <td>312210</td>
              <td>Tobacco Stemming and Redrying</td>
            </tr>
            <tr>
              <td>5993</td>
              <td>Tobacco Stores and Stands</td>
              <td>453991</td>
              <td>Tobacco Stores</td>
            </tr>
            <tr>
              <td>7532</td>
              <td>Top, Body, and Upholstery Repair Shops and Paint Shops</td>
              <td>811121</td>
              <td>
                Automotive Body, Paint, and Interior Repair and Maintenance{" "}
              </td>
            </tr>
            <tr>
              <td>3824</td>
              <td>Totalizing Fluid Meters and Counting Devices</td>
              <td>334514</td>
              <td>Totalizing Fluid Meter and Counting Device Manufacturing</td>
            </tr>
            <tr>
              <td>4725</td>
              <td>Tour Operators</td>
              <td>561520</td>
              <td>Tour Operators</td>
            </tr>
            <tr>
              <td>4492</td>
              <td>Towing and Tugboat Services </td>
              <td>488330</td>
              <td>Navigational Services to Shipping</td>
            </tr>
            <tr>
              <td>5092</td>
              <td>Toys and Hobby Goods and Supplies (agents and brokers)</td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5092</td>
              <td>
                Toys and Hobby Goods and Supplies (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5092</td>
              <td>
                Toys and Hobby Goods and Supplies (merchant wholesalers except
                those selling toys and hobby goods and supplies via retail
                method)
              </td>
              <td>423920</td>
              <td>Toy and Hobby Goods and Supplies Merchant Wholesalers</td>
            </tr>
            <tr>
              <td>5092</td>
              <td>
                Toys and Hobby Goods and Supplies (toys and hobby goods and
                supplies sold via retail method)
              </td>
              <td>451120</td>
              <td>Hobby, Toy, and Game Stores</td>
            </tr>
            <tr>
              <td>5088</td>
              <td>
                Transportation Equipment and Supplies, Except Motor Vehicles
                (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5088</td>
              <td>
                Transportation Equipment and Supplies, Except Motor Vehicles
                (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5088</td>
              <td>
                Transportation Equipment and Supplies, Except Motor Vehicles
                (merchant wholesalers)
              </td>
              <td>423860</td>
              <td>
                Transportation Equipment and Supplies (except Motor Vehicle)
                Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>3799</td>
              <td>
                Transportation Equipment, NEC (automobile, boat, utility and
                light truck trailers)
              </td>
              <td>336214</td>
              <td>Travel Trailer and Camper Manufacturing</td>
            </tr>
            <tr>
              <td>3799</td>
              <td>
                Transportation Equipment, NEC (except automobile, boat, utility
                light truck trailers, trailer hitches, and wheelbarrows)
              </td>
              <td>336999</td>
              <td>All Other Transportation Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>3799</td>
              <td>Transportation Equipment, NEC (trailer hitches)</td>
              <td>336399</td>
              <td>All Other Motor Vehicle Parts Manufacturing</td>
            </tr>
            <tr>
              <td>3799</td>
              <td>Transportation Equipment, NEC (wheelbarrows)</td>
              <td>333924</td>
              <td>
                Industrial Truck, Tractor, Trailer, and Stacker Machinery
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>4789</td>
              <td>
                Transportation Services, NEC (car loading and unloading;
                cleaning of railroad ballast; dining, parlor, sleeping, and
                other car operations; and railroad maintenance)
              </td>
              <td>488210</td>
              <td>Support Activities for Rail Transportation</td>
            </tr>
            <tr>
              <td>4789</td>
              <td>
                Transportation Services, NEC (dining car operations on a fee or
                contract basis)
              </td>
              <td>722310</td>
              <td>Food Service Contractors</td>
            </tr>
            <tr>
              <td>4789</td>
              <td>
                Transportation Services, NEC (horse-drawn cabs and carriages)
              </td>
              <td>487110</td>
              <td>Scenic and Sightseeing Transportation, Land</td>
            </tr>
            <tr>
              <td>4789</td>
              <td>
                Transportation Services, NEC (pipeline terminals and stockyards
                for transportation)
              </td>
              <td>488999</td>
              <td>All Other Support Activities for Transportation</td>
            </tr>
            <tr>
              <td>4724</td>
              <td>Travel Agencies</td>
              <td>561510</td>
              <td>Travel Agencies</td>
            </tr>
            <tr>
              <td>3792</td>
              <td>Travel Trailers and Campers</td>
              <td>336214</td>
              <td>Travel Trailer and Camper Manufacturing</td>
            </tr>
            <tr>
              <td>0173</td>
              <td>Tree Nuts</td>
              <td>111335</td>
              <td>Tree Nut Farming</td>
            </tr>
            <tr>
              <td>3713</td>
              <td>Truck and Bus Bodies</td>
              <td>336211</td>
              <td>Motor Vehicle Body Manufacturing</td>
            </tr>
            <tr>
              <td>7513</td>
              <td>Truck Rental and Leasing Without Drivers</td>
              <td>532120</td>
              <td>
                Truck, Utility Trailer, and RV (Recreational Vehicle) Rental and
                Leasing
              </td>
            </tr>
            <tr>
              <td>3715</td>
              <td>Truck Trailers</td>
              <td>336212</td>
              <td>Truck Trailer Manufacturing</td>
            </tr>
            <tr>
              <td>4213</td>
              <td>
                Trucking, Except Local (general freight, less than truckload)
              </td>
              <td>484122</td>
              <td>
                General Freight Trucking, Long-Distance, Less Than Truckload
              </td>
            </tr>
            <tr>
              <td>4213</td>
              <td>Trucking, Except Local (general freight, truckload)</td>
              <td>484121</td>
              <td>General Freight Trucking, Long-Distance, Truckload</td>
            </tr>
            <tr>
              <td>4213</td>
              <td>Trucking, Except Local (household goods moving)</td>
              <td>484210</td>
              <td>Used Household and Office Goods Moving</td>
            </tr>
            <tr>
              <td>4213</td>
              <td>Trucking, Except Local (specialized freight)</td>
              <td>484230</td>
              <td>
                Specialized Freight (except Used Goods) Trucking, Long-Distance
              </td>
            </tr>
            <tr>
              <td>6733</td>
              <td>
                Trusts, Except Educational, Religious, and Charitable
                (administrators of private estates)
              </td>
              <td>523991</td>
              <td>Trust, Fiduciary, and Custody Activities</td>
            </tr>
            <tr>
              <td>6733</td>
              <td>
                Trusts, Except Educational, Religious, and Charitable (managers)
              </td>
              <td>523920</td>
              <td>Portfolio Management</td>
            </tr>
            <tr>
              <td>6733</td>
              <td>
                Trusts, Except Educational, Religious, and Charitable (personal
                trusts, estates, and agency accounts)
              </td>
              <td>525920</td>
              <td>Trusts, Estates, and Agency Accounts</td>
            </tr>
            <tr>
              <td>6733</td>
              <td>
                Trusts, Except Educational, Religious, and Charitable (vacation
                funds for employees)
              </td>
              <td>525190</td>
              <td>Other Insurance Funds</td>
            </tr>
            <tr>
              <td>0253</td>
              <td>Turkeys and Turkey Eggs</td>
              <td>112330</td>
              <td>Turkey Production</td>
            </tr>
            <tr>
              <td>2791</td>
              <td>Typesetting</td>
              <td>323122</td>
              <td>Prepress Services</td>
            </tr>
            <tr>
              <td>2674</td>
              <td>Uncoated Paper and Multiwall Bags</td>
              <td>322224</td>
              <td>Uncoated Paper and Multiwall Bag Manufacturing</td>
            </tr>
            <tr>
              <td>6726</td>
              <td>
                Unit Investment Trusts, Face-Amount Certificate Offices, and
                Closed-End Management Investment Offices
              </td>
              <td>525990</td>
              <td>Other Financial Vehicles</td>
            </tr>
            <tr>
              <td>4311</td>
              <td>United States Postal Service</td>
              <td>491110</td>
              <td>Postal Service</td>
            </tr>
            <tr>
              <td>3081</td>
              <td>Unsupported Plastics Film and Sheet</td>
              <td>326113</td>
              <td>
                Unlaminated Plastics Film and Sheet (except Packaging)
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>3082</td>
              <td>Unsupported Plastics Profile Shapes</td>
              <td>326121</td>
              <td>Unlaminated Plastics Profile Shape Manufacturing</td>
            </tr>
            <tr>
              <td>1094</td>
              <td>Uranium-Radium-Vanadium Ores</td>
              <td>212291</td>
              <td>Uranium-Radium-Vanadium Ore Mining</td>
            </tr>
            <tr>
              <td>5932</td>
              <td>Used Merchandise Stores (except pawn shops)</td>
              <td>453310</td>
              <td>Used Merchandise Stores</td>
            </tr>
            <tr>
              <td>5932</td>
              <td>Used Merchandise Stores (pawnshops)</td>
              <td>522298</td>
              <td>All Other Nondepository Credit Intermediation</td>
            </tr>
            <tr>
              <td>7519</td>
              <td>Utility Trailers and Recreational Vehicle Rental</td>
              <td>532120</td>
              <td>
                Truck, Utility Trailer, and RV (Recreational Vehicle) Rental and
                Leasing
              </td>
            </tr>
            <tr>
              <td>3494</td>
              <td>
                Valves and Pipe Fittings, NEC (except metal pipe hangers and
                supports)
              </td>
              <td>332919</td>
              <td>Other Metal Valve and Pipe Fitting Manufacturing</td>
            </tr>
            <tr>
              <td>3494</td>
              <td>
                Valves and Pipe Fittings, NEC (metal pipe hangers and supports)
              </td>
              <td>332999</td>
              <td>
                All Other Miscellaneous Fabricated Metal Product Manufacturing
              </td>
            </tr>
            <tr>
              <td>5331</td>
              <td>Variety Stores</td>
              <td>452990</td>
              <td>All Other General Merchandise Stores</td>
            </tr>
            <tr>
              <td>2076</td>
              <td>
                Vegetable Oil Mills, Except Corn, Cottonseed, and Soybean
                (oilseed processing)
              </td>
              <td>311223</td>
              <td>Other Oilseed Processing</td>
            </tr>
            <tr>
              <td>2076</td>
              <td>
                Vegetable Oil Mills, Except Corn, Cottonseed, and Soybean
                (processing purchased vegetable and oilseed oils)
              </td>
              <td>311225</td>
              <td>Fats and Oils Refining and Blending</td>
            </tr>
            <tr>
              <td>0161</td>
              <td>Vegetables and Melons</td>
              <td>111219</td>
              <td>Other Vegetable (except Potato) and Melon Farming</td>
            </tr>
            <tr>
              <td>3647</td>
              <td>Vehicular Lighting Equipment</td>
              <td>336321</td>
              <td>Vehicular Lighting Equipment Manufacturing</td>
            </tr>
            <tr>
              <td>0742</td>
              <td>Veterinary Services for Animal Specialties</td>
              <td>541940</td>
              <td>Veterinary Services</td>
            </tr>
            <tr>
              <td>0741</td>
              <td>Veterinary Services for Livestock</td>
              <td>541940</td>
              <td>Veterinary Services</td>
            </tr>
            <tr>
              <td>7841</td>
              <td>Video Tape Rental</td>
              <td>532230</td>
              <td>Video Tape and Disc Rental</td>
            </tr>
            <tr>
              <td>3261</td>
              <td>
                Vitreous China Plumbing Fixtures and China and Earthenware
                Fittings and Bathroom Accessories
              </td>
              <td>327111</td>
              <td>
                Vitreous China Plumbing Fixture and China and Earthenware
                Bathroom Accessories Manufacturing
              </td>
            </tr>
            <tr>
              <td>3262</td>
              <td>Vitreous China Table and Kitchen Articles</td>
              <td>327112</td>
              <td>
                Vitreous China, Fine Earthenware, and Other Pottery Product
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>8249</td>
              <td>
                Vocational Schools, NEC (aviation schools, excluding flying
                instruction)
              </td>
              <td>611512</td>
              <td>Flight Training</td>
            </tr>
            <tr>
              <td>8249</td>
              <td>
                Vocational Schools, NEC (except aviation and flight training and
                apprenticeship training)
              </td>
              <td>611519</td>
              <td>Other Technical and Trade Schools</td>
            </tr>
            <tr>
              <td>8249</td>
              <td>
                Vocational Schools, NEC (vocational apprenticeship training)
              </td>
              <td>611513</td>
              <td>Apprenticeship Training</td>
            </tr>
            <tr>
              <td>5075</td>
              <td>
                Warm Air Heating and Air-Conditioning Equipment and Supplies
                (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5075</td>
              <td>
                Warm Air Heating and Air-Conditioning Equipment and Supplies
                (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5075</td>
              <td>
                Warm Air Heating and Air-Conditioning Equipment and Supplies
                (merchant wholesalers)
              </td>
              <td>423730</td>
              <td>
                Warm Air Heating and Air-Conditioning Equipment and Supplies
                Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>7631</td>
              <td>
                Watch, Clock, and Jewelry Repair (except new retail sales
                combined with repair services)
              </td>
              <td>811490</td>
              <td>Other Personal and Household Goods Repair and Maintenance</td>
            </tr>
            <tr>
              <td>7631</td>
              <td>
                Watch, Clock, and Jewelry Repair (new retail sales combined with
                repair-repair services as major source of receipts)
              </td>
              <td>448310</td>
              <td>Jewelry Stores</td>
            </tr>
            <tr>
              <td>3873</td>
              <td>Watches, Clocks, Clockwork Operated Devices, and Parts</td>
              <td>334518</td>
              <td>Watch, Clock, and Part Manufacturing</td>
            </tr>
            <tr>
              <td>4941</td>
              <td>Water Supply</td>
              <td>221310</td>
              <td>Water Supply and Irrigation Systems</td>
            </tr>
            <tr>
              <td>4449</td>
              <td>Water Transportation of Freight, NEC</td>
              <td>483211</td>
              <td>Inland Water Freight Transportation</td>
            </tr>
            <tr>
              <td>4489</td>
              <td>
                Water Transportation of Passengers, NEC (airboats, excursion
                boats, and sightseeing boats)
              </td>
              <td>487210</td>
              <td>Scenic and Sightseeing Transportation, Water</td>
            </tr>
            <tr>
              <td>4489</td>
              <td>Water Transportation of Passengers, NEC (water taxi)</td>
              <td>483212</td>
              <td>Inland Water Passenger Transportation</td>
            </tr>
            <tr>
              <td>4499</td>
              <td>
                Water Transportation Services, NEC (all but lighthouse
                operations, piloting vessels in and out of harbors, boat and
                ship rental, marine salvage, lighterage, marine surveyor
                services, and canal operations)
              </td>
              <td>488390</td>
              <td>Other Support Activities for Water Transportation</td>
            </tr>
            <tr>
              <td>4499</td>
              <td>
                Water Transportation Services, NEC (boat and ship rental,
                commercial)
              </td>
              <td>532411</td>
              <td>
                Commercial Air, Rail, and Water Transportation Equipment Rental
                and Leasing
              </td>
            </tr>
            <tr>
              <td>4499</td>
              <td>Water Transportation Services, NEC (lighterage)</td>
              <td>483211</td>
              <td>Inland Water Freight Transportation</td>
            </tr>
            <tr>
              <td>4499</td>
              <td>
                Water Transportation Services, NEC (lighthouse and canal
                operations)
              </td>
              <td>488310</td>
              <td>Port and Harbor Operations</td>
            </tr>
            <tr>
              <td>4499</td>
              <td>
                Water Transportation Services, NEC (marine surveying services)
              </td>
              <td>541990</td>
              <td>
                All Other Professional, Scientific, and Technical Services
              </td>
            </tr>
            <tr>
              <td>4499</td>
              <td>
                Water Transportation Services, NEC (piloting vessels in and out
                of harbors and marine salvage)
              </td>
              <td>488330</td>
              <td>Navigational Services to Shipping</td>
            </tr>
            <tr>
              <td>1781</td>
              <td>Water Well Drilling</td>
              <td>237110</td>
              <td>Water and Sewer Line and Related Structures Construction</td>
            </tr>
            <tr>
              <td>1623</td>
              <td>
                Water, Sewer, Pipeline, and Communications and Power Line
                Construction (gas and oil pipelines, mains, and pumping
                stations)
              </td>
              <td>237120</td>
              <td>Oil and Gas Pipeline and Related Structures Construction</td>
            </tr>
            <tr>
              <td>1623</td>
              <td>
                Water, Sewer, Pipeline, and Communications and Power Line
                Construction (power and communications transmission lines)
              </td>
              <td>237130</td>
              <td>
                Power and Communication Line and Related Structures Construction
              </td>
            </tr>
            <tr>
              <td>1623</td>
              <td>
                Water, Sewer, Pipeline, and Communications and Power Line
                Construction (water and sewer pipelines and related
                construction)
              </td>
              <td>237110</td>
              <td>Water and Sewer Line and Related Structures Construction</td>
            </tr>
            <tr>
              <td>2385</td>
              <td>
                Waterproof Outerwear (accessories, such as aprons, bibs, and
                other miscellaneous waterproof items, made from rubberized
                fabric, plastics, etc. except contractors)
              </td>
              <td>315999</td>
              <td>Other Apparel Accessories and Other Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2385</td>
              <td>
                Waterproof Outerwear (infants' waterproof outerwear made from
                rubberized fabric, plastics, etc. except contractors)
              </td>
              <td>315291</td>
              <td>Infants' Cut and Sew Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2385</td>
              <td>Waterproof Outerwear (men's and boys' contractors)</td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2385</td>
              <td>
                Waterproof Outerwear (men's and boys' water resistant or water
                repellent nontailored outerwear, except made from rubberized
                fabric, plastics, etc. and contractors)
              </td>
              <td>315228</td>
              <td>Men's and Boys' Cut and Sew Other Outerwear Manufacturing</td>
            </tr>
            <tr>
              <td>2385</td>
              <td>
                Waterproof Outerwear (men's and boys' water resistant or water
                repellent tailored overcoats, except made from rubberized
                fabric, plastics, etc. and contractors)
              </td>
              <td>315222</td>
              <td>
                Men's and Boys' Cut and Sew Suit, Coat, and Overcoat
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2385</td>
              <td>
                Waterproof Outerwear (men's, boys', women's, and girls'
                waterproof outerwear made from rubberized fabric, plastics, etc.
                except contractors)
              </td>
              <td>315299</td>
              <td>All Other Cut and Sew Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2385</td>
              <td>
                Waterproof Outerwear (other women's and girls' water resistant
                or water repellent nontailored outerwear, except made from
                rubberized fabric, plastics, etc. and contractors)
              </td>
              <td>315239</td>
              <td>
                Women's and Girls' Cut and Sew Other Outerwear Manufacturing{" "}
              </td>
            </tr>
            <tr>
              <td>2385</td>
              <td>
                Waterproof Outerwear (women's and girls' water resistant or
                water repellent tailored coats, except made from rubberized
                fabric, plastics, etc. and contractors)
              </td>
              <td>315234</td>
              <td>
                Women's and Girls' Cut and Sew Suit, Coat, Tailored Jacket, and
                Skirt Manufacturing
              </td>
            </tr>
            <tr>
              <td>2385</td>
              <td>
                Waterproof Outerwear (women's, girls', and infants' contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>2257</td>
              <td>
                Weft Knit Fabric Mills (except finishing without knitting weft
                fabric)
              </td>
              <td>313241</td>
              <td>Weft Knit Fabric Mills</td>
            </tr>
            <tr>
              <td>2257</td>
              <td>
                Weft Knit Fabric Mills (finishing weft fabric without knitting
                weft fabric)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>7692</td>
              <td>Welding Repair</td>
              <td>811310</td>
              <td>
                Commercial and Industrial Machinery and Equipment (except
                Automotive and Electronic) Repair and Maintenance
              </td>
            </tr>
            <tr>
              <td>2046</td>
              <td>Wet Corn Milling (except refining purchased corn oil)</td>
              <td>311221</td>
              <td>Wet Corn Milling</td>
            </tr>
            <tr>
              <td>2046</td>
              <td>Wet Corn Milling (refining purchased corn oil)</td>
              <td>311225</td>
              <td>Fats and Oils Refining and Blending</td>
            </tr>
            <tr>
              <td>0111</td>
              <td>Wheat</td>
              <td>111140</td>
              <td>Wheat Farming</td>
            </tr>
            <tr>
              <td>5182</td>
              <td>
                Wine and Distilled Alcoholic Beverages (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5182</td>
              <td>
                Wine and Distilled Alcoholic Beverages (business to business
                electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5182</td>
              <td>
                Wine and Distilled Alcoholic Beverages (merchant wholesalers
                except those selling wine and distilled beverages via retail
                method)
              </td>
              <td>424820</td>
              <td>
                Wine and Distilled Alcoholic Beverage Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>5182</td>
              <td>
                Wine and Distilled Alcoholic Beverages (wine and distilled
                alcoholic beverages sold via retail method)
              </td>
              <td>445310</td>
              <td>Beer, Wine, and Liquor Stores</td>
            </tr>
            <tr>
              <td>2084</td>
              <td>Wines, Brandy, and Brandy Spirits</td>
              <td>312130</td>
              <td>Wineries</td>
            </tr>
            <tr>
              <td>3495</td>
              <td>Wire Springs (clock and watch springs)</td>
              <td>334518</td>
              <td>Watch, Clock, and Part Manufacturing</td>
            </tr>
            <tr>
              <td>3495</td>
              <td>Wire Springs (except watch and clock springs)</td>
              <td>332612</td>
              <td>Spring (Light Gauge) Manufacturing</td>
            </tr>
            <tr>
              <td>5632</td>
              <td>Women's Accessory and Specialty Stores (specialty stores)</td>
              <td>448190</td>
              <td>Other Clothing Stores </td>
            </tr>
            <tr>
              <td>3144</td>
              <td>Women's Footwear, Except Athletic</td>
              <td>316214</td>
              <td>Women's Footwear (except Athletic) Manufacturing </td>
            </tr>
            <tr>
              <td>2251</td>
              <td>
                Women's Full-Length and Knee-Length Hosiery, Except Socks
                (dyeing and finishing sheer hosiery without knitting sheer
                hosiery)
              </td>
              <td>313312</td>
              <td>
                Textile and Fabric Finishing (except Broadwoven Fabric) Mills
              </td>
            </tr>
            <tr>
              <td>2251</td>
              <td>
                Women's Full-Length and Knee-Length Hosiery, Except Socks
                (except dyeing and finishing sheer hosiery without knitting
                sheer hosiery)
              </td>
              <td>315111</td>
              <td>Sheer Hosiery Mills</td>
            </tr>
            <tr>
              <td>3171</td>
              <td>Women's Handbags and Purses</td>
              <td>316992</td>
              <td>Women's Handbag and Purse Manufacturing</td>
            </tr>
            <tr>
              <td>5137</td>
              <td>
                Women's, Children's, and Infants' Clothing and Accessories
                (agents and brokers)
              </td>
              <td>425120</td>
              <td>Wholesale Trade Agents and Brokers</td>
            </tr>
            <tr>
              <td>5137</td>
              <td>
                Women's, Children's, and Infants' Clothing and Accessories
                (business to business electronic markets)
              </td>
              <td>425110</td>
              <td>Business to Business Electronic Markets</td>
            </tr>
            <tr>
              <td>5137</td>
              <td>
                Women's, Children's, and Infants' Clothing and Accessories
                (merchant wholesalers except wholesaling athletic uniforms and
                uniforms and merchant wholesalers selling work clothing via
                retail method)
              </td>
              <td>424330</td>
              <td>
                Women's, Children's, and Infants' Clothing and Accessories
                Merchant Wholesalers
              </td>
            </tr>
            <tr>
              <td>5137</td>
              <td>
                Women's, Children's, and Infants' Clothing and Accessories
                (uniforms and work clothing sold via retail method)
              </td>
              <td>448190</td>
              <td>Other Clothing Stores</td>
            </tr>
            <tr>
              <td>2331</td>
              <td>
                Women's, Misses', and Juniors' Blouses and Shirts (contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>2331</td>
              <td>
                Women's, Misses', and Juniors' Blouses and Shirts (except
                contractors)
              </td>
              <td>315232</td>
              <td>
                Women's and Girls' Cut and Sew Blouse and Shirt Manufacturing
              </td>
            </tr>
            <tr>
              <td>2335</td>
              <td>Women's, Misses', and Juniors' Dresses (contractors)</td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>2335</td>
              <td>
                Women's, Misses', and Juniors' Dresses (except contractors)
              </td>
              <td>315233</td>
              <td>Women's and Girls' Cut and Sew Dress Manufacturing</td>
            </tr>
            <tr>
              <td>2339</td>
              <td>
                Women's, Misses', and Juniors' Outerwear, NEC (contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>2339</td>
              <td>
                Women's, Misses', and Juniors' Outerwear, NEC (except team
                athletic uniforms, scarves, and contractors)
              </td>
              <td>315239</td>
              <td>
                Women's and Girls' Cut and Sew Other Outerwear Manufacturing{" "}
              </td>
            </tr>
            <tr>
              <td>2339</td>
              <td>
                Women's, Misses', and Juniors' Outerwear, NEC (scarves except
                contractors)
              </td>
              <td>315999</td>
              <td>Other Apparel Accessories and Other Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2339</td>
              <td>
                Women's, Misses', and Juniors' Outerwear, NEC (team athletic
                uniforms except contractors)
              </td>
              <td>315299</td>
              <td>All Other Cut and Sew Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2337</td>
              <td>
                Women's, Misses', and Juniors' Suits, Skirts, and Coats
                (contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>2337</td>
              <td>
                Women's, Misses', and Juniors' Suits, Skirts, and Coats (except
                contractors)
              </td>
              <td>315234</td>
              <td>
                Women's and Girls' Cut and Sew Suit, Coat, Tailored Jacket, and
                Skirt Manufacturing
              </td>
            </tr>
            <tr>
              <td>2341</td>
              <td>
                Women's, Misses', Children's, and Infants' Underwear and
                Nightwear (boys' contractors)
              </td>
              <td>315211</td>
              <td>Men's and Boys' Cut and Sew Apparel Contractors</td>
            </tr>
            <tr>
              <td>2341</td>
              <td>
                Women's, Misses', Children's, and Infants' Underwear and
                Nightwear (boys' except contractors)
              </td>
              <td>315221</td>
              <td>
                Men's and Boys' Cut and Sew Underwear and Nightwear
                Manufacturing
              </td>
            </tr>
            <tr>
              <td>2341</td>
              <td>
                Women's, Misses', Children's, and Infants' Underwear and
                Nightwear (infants' except contractors)
              </td>
              <td>315291</td>
              <td>Infants' Cut and Sew Apparel Manufacturing</td>
            </tr>
            <tr>
              <td>2341</td>
              <td>
                Women's, Misses', Children's, and Infants' Underwear and
                Nightwear (women and girls' except contractors)
              </td>
              <td>315231</td>
              <td>
                Women's and Girls' Cut and Sew Lingerie, Loungewear, and
                Nightwear Manufacturing
              </td>
            </tr>
            <tr>
              <td>2341</td>
              <td>
                Women's, Misses', Children's, and Infants' Underwear and
                Nightwear (women's, girls', and infants' contractors)
              </td>
              <td>315212</td>
              <td>
                Women's, Girls', and Infants' Cut and Sew Apparel Contractors
              </td>
            </tr>
            <tr>
              <td>5632</td>
              <td>Women's Accessory and Specialty Stores (accessories)</td>
              <td>448150</td>
              <td>Clothing Accessories Stores</td>
            </tr>
            <tr>
              <td>5621</td>
              <td>Women's Clothing Stores (dress shops and bridal shops)</td>
              <td>448190</td>
              <td>Other Clothing Stores </td>
            </tr>
            <tr>
              <td>5621</td>
              <td>
                Women's Clothing Stores (except dress shops and bridal shops)
              </td>
              <td>448120</td>
              <td>Women's Clothing Stores</td>
            </tr>
            <tr>
              <td>5137</td>
              <td>
                Women's, Children's and Infants' Clothing and Accessories
                (merchant wholesalers of athletic uniforms)
              </td>
              <td>423910</td>
              <td>
                Sporting and Recreational Goods and Supplies Merchant
                Wholesalers
              </td>
            </tr>
            <tr>
              <td>5137</td>
              <td>
                Women's, Children's and Infants' Clothing and Accessories
                (selling a general line of children's and infants' clothing via
                retail method)
              </td>
              <td>448130</td>
              <td>Children's and Infants' Clothing Stores</td>
            </tr>
            <tr>
              <td>5137</td>
              <td>
                Women's, Children's, and Infants' Clothing and Accessories
                (selling a general line of womens clothing via retail method)
              </td>
              <td>448120</td>
              <td>Women's Clothing Stores</td>
            </tr>
            <tr>
              <td>2449</td>
              <td>Wood Containers, NEC</td>
              <td>321920</td>
              <td>Wood Container and Pallet Manufacturing</td>
            </tr>
            <tr>
              <td>2511</td>
              <td>
                Wood Household Furniture, Except Upholstered (except wood box
                spring frames)
              </td>
              <td>337122</td>
              <td>Nonupholstered Wood Household Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>2511</td>
              <td>
                Wood Household Furniture, Except Upholstered (wood box spring
                frames(parts))
              </td>
              <td>337215</td>
              <td>Showcase, Partition, Shelving, and Locker Manufacturing</td>
            </tr>
            <tr>
              <td>2512</td>
              <td>Wood Household Furniture, Upholstered</td>
              <td>337121</td>
              <td>Upholstered Household Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>2434</td>
              <td>Wood Kitchen Cabinets</td>
              <td>337110</td>
              <td>Wood Kitchen Cabinet and Countertop Manufacturing</td>
            </tr>
            <tr>
              <td>2541</td>
              <td>
                Wood Office and Store Fixtures, Partitions, Shelving, and
                Lockers ( custom architectural millwork)
              </td>
              <td>337212</td>
              <td>Custom Architectural Woodwork and Millwork Manufacturing</td>
            </tr>
            <tr>
              <td>2541</td>
              <td>
                Wood Office and Store Fixtures, Partitions, Shelving, and
                Lockers (counter tops)
              </td>
              <td>337110</td>
              <td>Wood Kitchen Cabinet and Countertop Manufacturing</td>
            </tr>
            <tr>
              <td>2541</td>
              <td>
                Wood Office and Store Fixtures, Partitions, Shelving, and
                Lockers (except custom architectural millwork, counter tops, and
                lunchroom tables and chairs)
              </td>
              <td>337215</td>
              <td>Showcase, Partition, Shelving, and Locker Manufacturing</td>
            </tr>
            <tr>
              <td>2541</td>
              <td>
                Wood Office and Store Fixtures, Partitions, Shelving, and
                Lockers (wood lunchroom tables and chairs)
              </td>
              <td>337127</td>
              <td>Institutional Furniture Manufacturing</td>
            </tr>
            <tr>
              <td>2521</td>
              <td>Wood Office Furniture</td>
              <td>337211</td>
              <td>Wood Office Furniture Manufacturing </td>
            </tr>
            <tr>
              <td>2448</td>
              <td>Wood Pallets and Skids</td>
              <td>321920</td>
              <td>Wood Container and Pallet Manufacturing</td>
            </tr>
            <tr>
              <td>2491</td>
              <td>Wood Preserving</td>
              <td>321114</td>
              <td>Wood Preservation</td>
            </tr>
            <tr>
              <td>2499</td>
              <td>Wood Products, NEC (cork life preservers)</td>
              <td>339113</td>
              <td>Surgical Appliance and Supplies Manufacturing</td>
            </tr>
            <tr>
              <td>2499</td>
              <td>
                Wood Products, NEC (except wood containers, wood cooling towers,
                cork life preservers, mirror or picture frames, and laundry
                hampers of reed, rattan, and willow)
              </td>
              <td>321999</td>
              <td>All Other Miscellaneous Wood Product Manufacturing</td>
            </tr>
            <tr>
              <td>2499</td>
              <td>
                Wood Products, NEC (laundry hampers of reed, rattan, and willow)
              </td>
              <td>337125</td>
              <td>Household Furniture (except Wood and Metal) Manufacturing</td>
            </tr>
            <tr>
              <td>2499</td>
              <td>Wood Products, NEC (mirror and picture frames)</td>
              <td>339999</td>
              <td>All Other Miscellaneous Manufacturing</td>
            </tr>
            <tr>
              <td>2499</td>
              <td>
                Wood Products, NEC (wood containers, such as noncoopered vats
                and reed or straw baskets)
              </td>
              <td>321920</td>
              <td>Wood Container and Pallet Manufacturing</td>
            </tr>
            <tr>
              <td>2499</td>
              <td>Wood Products, NEC (wood cooling towers)</td>
              <td>333415</td>
              <td>
                Air-Conditioning and Warm Air Heating Equipment and Commercial
                and Industrial Refrigeration Equipment Manufacturing
              </td>
            </tr>
            <tr>
              <td>2517</td>
              <td>
                Wood Television, Radio, Phonograph, and Sewing Machine Cabinets
              </td>
              <td>337129</td>
              <td>
                Wood Television, Radio, and Sewing Machine Cabinet Manufacturing
              </td>
            </tr>
            <tr>
              <td>3553</td>
              <td>Woodworking Machinery</td>
              <td>333210</td>
              <td>Sawmill and Woodworking Machinery Manufacturing</td>
            </tr>
            <tr>
              <td>1795</td>
              <td>Wrecking and Demolition Work</td>
              <td>238910</td>
              <td>Site Preparation Contractors</td>
            </tr>
            <tr>
              <td>3844</td>
              <td>
                X-Ray Apparatus and Tubes and Related Irradiation Apparatus
              </td>
              <td>334517</td>
              <td>Irradiation Apparatus Manufacturing</td>
            </tr>
            <tr>
              <td>2281</td>
              <td>Yarn Spinning Mills</td>
              <td>313111</td>
              <td>Yarn Spinning Mills</td>
            </tr>
            <tr>
              <td>2282</td>
              <td>Yarn Texturizing, Throwing, Twisting and Winding Mills </td>
              <td>313112</td>
              <td>Yarn Texturing, Throwing, and Twisting Mills</td>
            </tr>
            <tr>
              <td> </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default SICtoNAICScodes;
