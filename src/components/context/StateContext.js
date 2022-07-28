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
    const [NACIcodeChanges, setNACIcodeChanges] = useState(NACIcodeChangesData);
    const [SICcode, setSICcode] = useState([]);
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
    }
    console.log(checkBuisness, "checkbusiness")

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
                if(checkBuisness.country !=="" || checkBuisness.state.length !== 0 || checkBuisness.county !== "" || checkBuisness.city !== "" || checkBuisness.email_address !=="" || checkBuisness.excludeEmail.length !==0 || checkBuisness.uniqueValues !=="" || checkBuisness.uniqueEmailCondition.chkCompNames !=="" || checkBuisness.uniqueEmailCondition.chkEmails !=="" || checkBuisness.uniqueEmailCondition.chkEmailsAndPhones !== "" || checkBuisness.uniqueEmailCondition.chkEmailsOrPhones !=="" || checkBuisness.uniqueEmailCondition.chkFaxes !== "" || checkBuisness.uniqueEmailCondition.chkPhone !== "" || checkBuisness.uniqueEmailCondition.chkURL !=="" || checkBuisness.urlDomain !== "" || checkBuisness.phone !=="" || checkBuisness.fax !== "" || checkBuisness.empLow !=="" || checkBuisness.revenueLow !== "" || checkBuisness.last_name !== "" || checkBuisness.executiveContact !=="0" || checkBuisness.companyName !== "" || checkBuisness.chkCompNames !== ""){
                    const fetchData = async () => {
                        try {
                            const res = await axios.post(
                                url + "/checkBusiness/find",
                                checkBuisness
                            );
                            setData(res.data);
                        } catch (err) {
                            setError(err);
                        }
                    };
                    fetchData();
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
                jobTitle
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
