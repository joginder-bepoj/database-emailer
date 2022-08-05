import React, { createContext, useContext, useState, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
    tableFormData,
    cellCarriersData,
    uniqueEmailFaxData,
    searchLastNameData,
    newMoversData,
    zipConditionData,
    textDataData,
    telSearchData,
    houseHoldIncomeData,
    enterAgeData,
    dobData,
    optInData,
    repeatedData,
    faxNumberData,
    obtainRecordsData,
    searchCompanyNameData,
    jobSearchData,
    companyRevenueData,
    searchEmployeeData,
    uniqueTelephoneEmailData,
    selectRecordsData,
    cellPhoneData,
    urlDatas,
    regDateData,
    selectCanStatesData,
    SICCodesChangeData,
    NACIcodeChangesData,
} from "./settingStates";

const Context = createContext();

export const StateContext = ({ children }) => {
    let location = useLocation();
    const [selectCountry, setSelectCountry] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [selectState, setSelectState] = useState([]);
    const [selectCanStates, setSelectCanStates] = useState(selectCanStatesData);
    const [zipCodeSelect, setZipCodeSelect] = useState(zipConditionData);
    const [selectCounty, setSelectCounty] = useState("");
    const [textData, setTextData] = useState(textDataData);
    const [SCF, setSCF] = useState([]);
    const [email, setEmail] = useState("");
    const [uniqueValues, setUniqueValue] = useState("");
    const [telSearch, setTelSearch] = useState(telSearchData);
    const [gender, setGender] = useState("");
    const [houseHoldIncome, setHouseHoldIncome] = useState(houseHoldIncomeData);
    const [url, setUrl] = useState("");
    const [urlCondition, setUrlCondition] = useState("");
    const [filter, setFilter] = useState(false);
    const [ethnicity, setEthnicity] = useState([]);
    const [searchLastName, setSearchLastName] = useState(searchLastNameData);
    const [enterAge, setEnterAge] = useState(enterAgeData);
    const [dob, setDob] = useState(dobData);
    const [rentingHome, setrentingHome] = useState("");
    const [optIn, setOptIn] = useState(optInData);
    const [repeated, setRepeated] = useState(repeatedData);
    const [intrestedGroup, setIntrestedGroup] = useState([]);
    const [emailDomain, setEmailDomain] = useState([]);
    const [uniqueEmail, setUniqueEmail] = useState(uniqueEmailFaxData);
    const [excludeEmail, setExcludeEmail] = useState([]);
    const [urlDomain, setUrlDomain] = useState("");
    const [faxNumber, setFaxNumber] = useState(faxNumberData);
    const [obtainRecords, setObtainRecords] = useState(obtainRecordsData);
    const [executiveContact, setExecutiveContact] = useState("0");
    const [searchCompany, setSearchCompany] = useState(searchCompanyNameData);
    const [jobSearch, setJobSearch] = useState(jobSearchData);
    const [companyRevenue, setCompanyRevenue] = useState(companyRevenueData);
    const [searchEmployee, setSearchEmployee] = useState(searchEmployeeData);
    const [NACIcode, setNACIcode] = useState([]);
    const [naicsCodeValue, setNaicsCodeValue] = useState('')
    const [NACIcodeChanges, setNACIcodeChanges] = useState(NACIcodeChangesData);
    const [SICcode, setSICcode] = useState([]);
    const [SICValue, setSICValue] = useState("")
    const [SICCodesChange, setSICCodesChages] = useState(SICCodesChangeData);
    const [uniqueTelephoneEmail, setUniqueTelephoneEmail] = useState(
        uniqueTelephoneEmailData
    );
    const [teleMarketingForm, setTeleMarketingForm] = useState(tableFormData);
    const [newMovers, setNewMovers] = useState(newMoversData);
    const [selectRecords, setSelectRecords] = useState(selectRecordsData);
    const [cellData, setCellData] = useState(cellPhoneData);
    const [cellCarrier, setCellCarrier] = useState(cellCarriersData);
    const [urlData, setUrlData] = useState(urlDatas);
    const [regDates, setRegDates] = useState(regDateData);
    const [uniqValues, setUniqValues] = useState("");
    const [registrantContact, setRegistrantContact] = useState("");
    const [badData, setBadData] = useState("");
    const [SCFNOT, setSCFNOT] = useState("");
    const [domainCondition, setDomainCondition] = useState("");
    const [jobTitle, setJobTitle] = useState([])
    const [Age, setAge] = useState({ageLower: "", ageUpper: "",})
    const [telDOB, setTelDOB] = useState({ selDOBMonth: "", selDOBDay: "", selDOBYear: ""})
    const [edu, setEdu] = useState([])
    const [businessOwner, setBusinessOwner] = useState([])
    const [occupationsGeneral, setOccupationsGeneral] = useState([])
    const [occupationDetailed, setOccupationDetailed] = useState([])
    const [languages, setLanguages] = useState([])
    const [ethnicitiesOP, setEthnicitiesOP] = useState([])
    const [ethnicGroup, setEthnicGroup] = useState([])
    const [religions, setReligions] = useState([])
    const [childrenAndMartial, setChildrenAndMartial] = useState({
        NUMBER_OF_CHILDREN: "",
        PRESENCE_OF_CHILDREN: "",
        SEX_OF_CHILDREN: "",
        MARITAL_STATUS: ""
    })
    const [childAndAdult, setChildAndAdult] = useState([])
    const [incomeHH, setIncomeHH] = useState({
        INCOME_ESTIMATED_HH: "",
        INCOME_ESTIMATED_HH_UPPER: ""
    })
    const [netWorth, setNetWorth] = useState({
        NET_WORTH: "",
        NET_WORTH_UPPER: ""
    })
    const [creditRating, setCreditRating] = useState({
        CREDIT_RATING: "",
        CREDIT_RATING_UPPER: ""
    })
    const [family, setFamily] = useState("")
    const [ownerRenter, setOwnerRenter] = useState("")
    const [address, setAddress] = useState([])
    const [residentLength, setResidentLength] = useState({
        LENGTH_OF_RESIDENCE: "",
        Years_Residence: "0"
    })
    const [mortgageDate, setMortgageDate] = useState({
        mortgage_date: "",
        mortgage_date_later: "",
    })
    const [homeMarket, setHomeMarket] = useState({
        HOME_MARKET_VALUE: "",
        HOME_MARKET_VALUE_UPPER: "",
    })
    const [fuel, setFuel] = useState("")
    const [airCond, setAirCond] = useState("")
    const [water, setWater] = useState("")
    const [sewer, setSewer] = useState("")
    const [generations, setGenerations] = useState("")
    const [numAdults, setNumAdults] = useState("")
    const [genderMF, setGenderMF] = useState("")
    const [smokker, setSmokker] = useState("")
    const [discovercard, setDiscovercard] = useState("")
    const [visaCard, setVisaCard] = useState("")
    const [masterCard, setMasterCard] = useState("")
    const [americanCard, setAmericanCard] = useState("")
    const [gasRetailCard, setGasRetailCard] = useState("")
    const [Tennis, setTennis] = useState("")
    const [Golf, setGolf] = useState("")
    const [snowSkiing, setSnowSkiing] = useState("")
    const [motorCycling, setMotorCycling] = useState("")
    const [NASACR, setNASACR] = useState("")
    const [Boating, setBoating] = useState("")
    const [SCUBA, setSCUBA] = useState("")
    const [sportsLesiure, setSportsLesiure] = useState("")
    const [Hunting, setHunting] = useState("")
    const [Fishing, setFishing] = useState("")
    const [hiking, setHiking] = useState("")
    const [shooting, setShooting] = useState("")
    const [exercise, setExercise] = useState("")
    const [flying, setFlying] = useState("")
    const [travel, setTravel] = useState("")
    const [domesticTravel, setDomesticTravel] = useState("")
    const [foreignTravel, setForeignTravel] = useState("")
    const [cruiseTravel, setCruiseTravel] = useState("")
    const [tvSports, setTvSports] = useState("")
    const [autoRacing, setAutoRacing] = useState("")
    const [football, setFootball] = useState("")
    const [baseBall, setBaseBall] = useState("")
    const [basketBall, setBasketBall] = useState("")
    const [hocky, setHocky] = useState("")
    const [soccer, setSoccer] = useState("")
    const [sweepSkates, setSweepSkates] = useState("")
    const resultRef = useRef();

    let checkConsumer = {
        country: selectCountry,
        state: selectState,
        county: selectCounty,
        city: textData.taCities,
        zip: textData.taZIPS,
        zipCondition: zipCodeSelect.zipCondition,
        email_address: email,
        gender: gender,
        url: url,
        urlCondition: urlCondition,
        ethnicity: ethnicity,
        last_name: searchLastName.taLastNames,
        last_nameConditions: searchLastName,
        dob: dob.selDOBYear + "-" + dob.selDOBMonth + "-" + dob.selDOBDay,
        ownrent: rentingHome,
        interest_ids: intrestedGroup,
        email_domain: emailDomain,
        domainCondition: domainCondition,
        phone: telSearch.taPhones,
        scf: SCF,
        scfCondition: SCFNOT,
        regDate: optIn.registration_date,
        regDate2: optIn.registration_date_later,
        uniqueValues: uniqueValues,
        zipRadius: textData.txtZipRadius,
        zipMiles: textData.txtZipRadiusMiles,
        upperAge: enterAge.ageUpper,
        lowerAge: enterAge.ageLower,
        lowIncome: houseHoldIncome.MHHIncLo,
        highIncome: houseHoldIncome.MHHIncHi,
    };

    let checkBuisness = {
        country: selectCountry,
        state: selectState,
        county: selectCounty,
        city: textData.taCities,
        zip: textData.taZIPS,
        zipCondition: zipCodeSelect.zipCondition,
        email_address: email,
        excludeEmail: excludeEmail,
        uniqueValues: uniqueValues,
        uniqueEmailCondition: uniqueEmail,
        urlDomain: urlDomain, 
        phone : telSearch.taPhones,
        fax : faxNumber.taFaxes,
        empLow : searchEmployee.employeesLo,
        empHi : searchEmployee.employeesHi,
        revenueLow : companyRevenue.revenueLo,
        revenueHigh: companyRevenue.revenueHi,
        last_name: searchLastName.taLastNames,
        last_nameConditions: searchLastName,
        executiveContact: executiveContact,
        companyName : searchCompany.txtCompanyName,
        companyConditions: searchCompany,
        chkCompNames: searchCompany.chkCompNames,
        jobTitle: jobTitle,
        jobSearchCondition: jobSearch,
        sicCode : SICcode,
        sicCodeChanges: SICCodesChange,
        sicValueRange : SICValue,
        naicsCode: NACIcode,
        naicsCodeChanges : NACIcodeChanges,
        naicsValueRange: naicsCodeValue
    }

    let checkTelemarketing = {
        country: selectCountry,
        state: selectState,
        county: selectCounty,
        city: textData.taCities,
        zip: textData.taZIPS,
        zipCondition: zipCodeSelect.zipCondition,
        email_address: email,
        emailDomain : emailDomain,
        domainCondition: domainCondition,
        uniqueConditions : uniqueTelephoneEmail,
        telSearch: telSearch.taPhones,
        age: Age,
        dob: telDOB.selDOBYear + "-" + telDOB.selDOBMonth + "-" + telDOB.selDOBDay,
        edu: edu,
        businessOwner: businessOwner,
        generalOccupation : occupationsGeneral,
        detailedOccupation: occupationDetailed,
        languages: languages,
        ethnicities: ethnicitiesOP,
        ethnicGroup: ethnicGroup,
        religions: religions,
        childrenAndMartial: childrenAndMartial,
        childAndAdult: childAndAdult,
        incomeHH: incomeHH,
        netWorth: netWorth,
        creditRating: creditRating,
        family : family,
        ownerRenter: ownerRenter,
        address: address,
        residentLength: residentLength,
        mortgageDate: mortgageDate,
        homeMarket: homeMarket,
        fuel: fuel,
        airCond : airCond,
        water: water,
        sewer: sewer,
        generations: generations,
        numAdults : numAdults,
        genderMF : genderMF,
        smokker: smokker,
        discovercard: discovercard,
        visaCard : visaCard,
        masterCard: masterCard,
        americanCard: americanCard,
        gasRetailCard: gasRetailCard,
        Tennis : Tennis,
        Golf : Golf,
        snowSkiing: snowSkiing,
        motorCycling: motorCycling,
        NASACR: NASACR,
        Boating: Boating,
        SCUBA: SCUBA,
        sportsLesiure: sportsLesiure,
        Hunting: Hunting,
        Fishing: Fishing,
        hiking: hiking,
        shooting: shooting,
        exercise: exercise,
        flying: flying,
        travel: travel,
        domesticTravel: domesticTravel,
        foreignTravel: foreignTravel,
        cruiseTravel: cruiseTravel,
        tvSports: tvSports,
        autoRacing: autoRacing,
        football: football,
        baseBall: baseBall,
        basketBall: basketBall,
        hocky: hocky,
        soccer: soccer,
        sweepSkates: sweepSkates,
    }

    console.log(checkTelemarketing, "checkTelemarketing")

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    if (error) console.log(error);

    const searchQuery = (e) => {
        e.preventDefault();
        resultRef.current.scrollIntoView();
        const url = "http://localhost:8000";
        if (location.pathname === "/database-emailer/") {
            if (
                selectCountry !== "" ||
                selectState.length !== 0 ||
                selectCounty.length !== 0 ||
                email !== "" ||
                gender !== "" ||
                ethnicity.length !== 0 ||
                rentingHome !== "" ||
                intrestedGroup.length !== 0 ||
                emailDomain.length !== 0 ||
                checkConsumer.dob !== "--" ||
                checkConsumer.last_name !== "" ||
                checkConsumer.zip !== "" ||
                checkConsumer.city !== "" ||
                checkConsumer.phone !== "" ||
                SCF.length !== 0 ||
                checkConsumer.regDate !== "" ||
                checkConsumer.regDate2 !== "" ||
                checkConsumer.uniqueValues !== "" ||
                checkConsumer.zipRadius !== "" ||
                checkConsumer.zipMiles !== "" ||
                checkConsumer.upperAge !== "" ||
                checkConsumer.lowerAge !== "" ||
                checkConsumer.lowIncome !== "" ||
                checkConsumer.highIncome !== "" ||
                checkConsumer.zipCondition !== "0" ||
                checkConsumer.scfCondition !== "" ||
                checkConsumer.urlCondition !== "" ||
                checkConsumer.url !== ""
            ) {
                const fetchData = async () => {
                    try {
                        const res = await axios.post(
                            url + "/checkConsumer/find",
                            checkConsumer
                        );
                        setData(res.data);
                    } catch (err) {
                        setError(err);
                    }
                };
                fetchData();
            } else {
                const fetchData = async () => {
                    try {
                        const res = await axios.get(url + "/checkConsumer");
                        setData(res.data);
                    } catch (err) {
                        setError(err);
                    }
                };
                fetchData();
            }

        }else if(location.pathname === "/database-emailer/checkbuisness"){
            const fetchData = async () =>{
                if(checkBuisness.country !=="" || checkBuisness.state.length !== 0 || checkBuisness.county !== "" || checkBuisness.city !== "" || checkBuisness.email_address !=="" || checkBuisness.excludeEmail.length !==0 || checkBuisness.uniqueValues !=="" || checkBuisness.uniqueEmailCondition.chkCompNames !=="" || checkBuisness.uniqueEmailCondition.chkEmails !=="" || checkBuisness.uniqueEmailCondition.chkEmailsAndPhones !== "" || checkBuisness.uniqueEmailCondition.chkEmailsOrPhones !=="" || checkBuisness.uniqueEmailCondition.chkFaxes !== "" || checkBuisness.uniqueEmailCondition.chkPhone !== "" || checkBuisness.uniqueEmailCondition.chkURL !=="" || checkBuisness.urlDomain !== "" || checkBuisness.phone !=="" || checkBuisness.fax !== "" || checkBuisness.empLow !=="" || checkBuisness.revenueLow !== "" || checkBuisness.last_name !== "" || checkBuisness.executiveContact !=="0" || checkBuisness.companyName !== "" || checkBuisness.chkCompNames !== "" || checkBuisness.jobTitle.length !== 0 || checkBuisness.jobSearchCondition.titleCondition === "ALL" || checkBuisness.jobSearchCondition.titleCondition==="NONE" || checkBuisness.jobSearchCondition.txtTitle !=="" || checkBuisness.sicCode.length !== 0 || checkBuisness.sicValueRange !== "" || checkBuisness.sicCodeChanges.txtSicLower !=="" || checkBuisness.sicCodeChanges.chkSICCODESONLY !== "" || checkBuisness.naicsCode.length !==0 || checkBuisness.naicsCodeChanges.txtNAICSLower !== "" || checkBuisness.naicsValueRange !=="" || checkBuisness.naicsCodeChanges.chkNAICS !== "" || checkBuisness.naicsCodeChanges.taNAICS!=="" || checkBuisness.sicCodeChanges.taSIC !==""){
                        try {
                            const res = await axios.post(
                                url + "/checkBusiness/find",
                                checkBuisness
                            );
                            setData(res.data);
                        } catch (err) {
                            setError(err);
                        }
                }else{
                    try {
                        const res = await axios.get(url + "/checkBusiness");
                        setData(res.data)
                    } catch (err) {
                        setError(err)
                    }
                }
            }
            fetchData()
        }else if(location.pathname === "/database-emailer/telemarketing"){
            const fetchData = async() =>{
                if(checkTelemarketing.country !=="" || checkTelemarketing.city !== "" || checkTelemarketing.country !== "" || checkTelemarketing.state.length !==0 || checkTelemarketing.email_address !== "" || checkTelemarketing.zip !=="" || checkTelemarketing.emailDomain.length !== 0 || checkTelemarketing.uniqueConditions.chkDoNotCall !=="" || checkTelemarketing.uniqueConditions.chkHavePhone !=="" || checkTelemarketing.uniqueConditions.chkValidEmails!=="" || checkTelemarketing.uniqueConditions.optUnique !=="" || checkTelemarketing.telSearch !== "" || checkTelemarketing.age.ageLower !=="" || checkTelemarketing.dob !== "--" || checkTelemarketing.edu.length !== 0 || checkTelemarketing.businessOwner.length !== 0 || checkTelemarketing.generalOccupation.length !== 0 || checkTelemarketing.detailedOccupation.length !==0 || checkTelemarketing.languages.length !==0 || checkTelemarketing.ethnicities.length !==0 || checkTelemarketing.ethnicGroup.length !==0 || checkTelemarketing.religions.length !==0 || checkTelemarketing.childrenAndMartial.NUMBER_OF_CHILDREN !=="" || checkTelemarketing.childrenAndMartial.PRESENCE_OF_CHILDREN !=="" || checkTelemarketing.childrenAndMartial.SEX_OF_CHILDREN !=="" || checkTelemarketing.childrenAndMartial.MARITAL_STATUS !=="" || checkTelemarketing.childAndAdult.length !==0 || checkTelemarketing.incomeHH.INCOME_ESTIMATED_HH !=="" || checkTelemarketing.netWorth.NET_WORTH !=="" || checkTelemarketing.creditRating.CREDIT_RATING !==""|| checkTelemarketing.family !=="" || checkTelemarketing.ownerRenter !=="" || checkTelemarketing.address.length !==0 || checkTelemarketing.residentLength.LENGTH_OF_RESIDENCE !=="" || checkTelemarketing.mortgageDate.mortgage_date !=="" || checkTelemarketing.homeMarket.HOME_MARKET_VALUE !==""|| checkTelemarketing.fuel !=="" || checkTelemarketing.airCond !=="" || checkTelemarketing.sewer !=="" || checkTelemarketing.water !=="" || checkTelemarketing.generations !==""|| checkTelemarketing.numAdults !=="" || checkTelemarketing.genderMF !=="" || checkTelemarketing.smokker !=="" || checkTelemarketing.discovercard !=="" || checkTelemarketing.americanCard !=="" || checkTelemarketing.visaCard !=="" || checkTelemarketing.masterCard !=="" || checkTelemarketing.gasRetailCard !=="" || checkTelemarketing.Tennis !=="" || checkTelemarketing.Golf !=="" || checkTelemarketing.snowSkiing !=="" || checkTelemarketing.motorCycling !=="" || checkTelemarketing.NASACR !=="" || checkTelemarketing.Boating !=="" || checkTelemarketing.SCUBA !=="" || checkTelemarketing.sportsLesiure !=="" || checkTelemarketing.Hunting !=="" || checkTelemarketing.Fishing !=="" || checkTelemarketing.hiking !=="" || checkTelemarketing.shooting !=="" || checkTelemarketing.exercise !=="" || checkTelemarketing.flying !==""|| checkTelemarketing.travel !=="" || checkTelemarketing.domesticTravel !=="" || checkTelemarketing.foreignTravel !=="" || checkTelemarketing.cruiseTravel !=="" || checkTelemarketing.tvSports !=="" || checkTelemarketing.autoRacing !=="" || checkTelemarketing.football !=="" || checkTelemarketing.basketBall !=="" || checkTelemarketing.baseBall !=="" || checkTelemarketing.soccer!=="" || checkTelemarketing.hocky !=="" || checkTelemarketing.sweepSkates !=="")
                {
                    try {
                        const res = await axios.post(url + "/telemarketing/find", checkTelemarketing)
                        setData(res.data)
                    } catch (err) {
                        setError(err)
                    }
                }else{
                    try {
                        const res = await axios.get(url+ "/telemarketing");
                        setData(res.data)
                    } catch (err) {
                        setError(err)
                    }
                }
            }
            fetchData()
        }
    };

    return (
        <Context.Provider
            value={{
                selectCountry,
                selectState,
                data,
                searchQuery,
                setSelectState,
                selectCanStates,
                setSelectCanStates,
                zipCodeSelect,
                setZipCodeSelect,
                setSelectCountry,
                setSelectCounty,
                selectCounty,
                textData,
                setTextData,
                setSCF,
                SCF,
                setEmail,
                setUniqueValue,
                setTelSearch,
                telSearch,
                setGender,
                setHouseHoldIncome,
                houseHoldIncome,
                setUrl,
                url,
                setFilter,
                setEthnicity,
                ethnicity,
                setSearchLastName,
                searchLastName,
                setEnterAge,
                enterAge,
                setDob,
                dob,
                setrentingHome,
                rentingHome,
                setOptIn,
                optIn,
                setRepeated,
                repeated,
                setIntrestedGroup,
                intrestedGroup,
                setEmailDomain,
                emailDomain,
                setUniqueEmail,
                uniqueEmail,
                setExcludeEmail,
                excludeEmail,
                setUrlDomain,
                setFaxNumber,
                faxNumber,
                setObtainRecords,
                obtainRecords,
                setExecutiveContact,
                setSearchCompany,
                searchCompany,
                jobSearch,
                setJobSearch,
                setCompanyRevenue,
                companyRevenue,
                setSearchEmployee,
                searchEmployee,
                setNACIcode,
                NACIcode,
                setSICcode,
                SICcode,
                setUniqueTelephoneEmail,
                uniqueTelephoneEmail,
                setTeleMarketingForm,
                teleMarketingForm,
                setNewMovers,
                newMovers,
                setSelectRecords,
                selectRecords,
                setCellData,
                cellData,
                setCellCarrier,
                cellCarrier,
                setUrlData,
                urlData,
                setRegDates,
                regDates,
                setUniqValues,
                uniqValues,
                setRegistrantContact,
                registrantContact,
                setBadData,
                badData,
                isLoggedIn,
                setIsLoggedIn,
                email,
                uniqueValues,
                gender,
                filter,
                executiveContact,
                urlDomain,
                SICCodesChange,
                setSICCodesChages,
                NACIcodeChanges,
                setNACIcodeChanges,
                resultRef,
                setSCFNOT,
                SCFNOT,
                setUrlCondition,
                urlCondition,
                setDomainCondition,
                domainCondition,
                setJobTitle,
                jobTitle,
                setSICValue,
                SICValue,
                setNaicsCodeValue,
                naicsCodeValue,
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
                family,
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
                fuel,
                setAirCond,
                setSmokker,
                setGenderMF,
                setWater,
                setSewer,
                setGenerations,
                setNumAdults,
                setDiscovercard,
                setVisaCard,
                setMasterCard,
                setAmericanCard,
                setGasRetailCard,
                setTennis,
                setGolf,
                setSnowSkiing,
                setMotorCycling,
                setNASACR,
                setBoating,
                setSCUBA,
                setSportsLesiure,
                setHunting,
                setFishing,
                setHiking,
                setShooting,
                setExercise,
                setFlying,
                setTravel,
                setDomesticTravel,
                setForeignTravel,
                setCruiseTravel,
                setTvSports,
                setAutoRacing,
                setFootball,
                setBaseBall,
                setBasketBall,
                setHocky,
                setSoccer,
                setSweepSkates,
            }}
        >
            {children}
        </Context.Provider>
    );
        
};

export const useStateContext = () => useContext(Context);
