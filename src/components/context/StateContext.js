import React, {createContext, useContext, useState} from 'react'
import axios from 'axios'
import {tableFormData, ethnicityData, cellCarriersData, intrestGroupData, uniqueEmailFaxData, excludeGeneralEmailData, searchLastNameData, newMoversData, zipConditionData, textDataData, telSearchData, houseHoldIncomeData, setSearchUrlData, enterAgeData, dobData, optInData, repeatedData, faxNumberData, obtainRecordsData, searchCompanyNameData, jobSearchData, companyRevenueData, searchEmployeeData, uniqueTelephoneEmailData, selectRecordsData, cellPhoneData, urlDatas, regDateData, selectCanStatesData,  SICCodesChangeData, NACIcodeChangesData} from "./settingStates"

const Context = createContext()

export const StateContext = ({children}) => {
  const [selectCountry, setSelectCountry] = useState("none")
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [selectState, setSelectState] = useState([])
  const [selectCanStates, setSelectCanStates] = useState(selectCanStatesData)
  const [zipCodeSelect, setZipCodeSelect] = useState(zipConditionData)
  const [selectCounty, setSelectCounty] = useState("")
  const [textData, setTextData] = useState(textDataData)
  const [SCF, setSCF] = useState([])
  const [email, setEmail] = useState('')
  const [uniqueValues, setUniqueValue] = useState('')
  const [telSearch, setTelSearch] = useState(telSearchData)
  const [gender, setGender] = useState('')
  const [houseHoldIncome, setHouseHoldIncome] = useState(houseHoldIncomeData)
  const [url, setUrl] = useState(setSearchUrlData)
  const [filter, setFilter] = useState(false)
  const [ethnicity, setEthnicity] = useState(ethnicityData)
  const [searchLastName, setSearchLastName] = useState(searchLastNameData)
  const [enterAge, setEnterAge] = useState(enterAgeData)
  const [dob, setDob] = useState(dobData)
  const [rentingHome, setrentingHome] = useState('')
  const [optIn, setOptIn] = useState(optInData)
  const [repeated, setRepeated] = useState(repeatedData)
  const [intrestedGroup, setIntrestedGroup] = useState(intrestGroupData)
  const [emailDomain, setEmailDomain] = useState()
  const [uniqueEmail, setUniqueEmail] = useState(uniqueEmailFaxData)
  const [excludeEmail, setExcludeEmail] = useState(excludeGeneralEmailData)
  const [urlDomain, setUrlDomain] = useState('')
  const [faxNumber, setFaxNumber] = useState(faxNumberData)
  const [obtainRecords, setObtainRecords] = useState(obtainRecordsData)
  const [executiveContact, setExecutiveContact] = useState("")
  const [searchCompany, setSearchCompany] = useState(searchCompanyNameData)
  const [jobSearch, setJobSearch] = useState(jobSearchData)
  const [companyRevenue, setCompanyRevenue] = useState(companyRevenueData)
  const [searchEmployee, setSearchEmployee] = useState(searchEmployeeData)
  const [NACIcode, setNACIcode] = useState([])
  const [NACIcodeChanges, setNACIcodeChanges] = useState(NACIcodeChangesData)
  const [SICcode, setSICcode] = useState([])
  const [SICCodesChange, setSICCodesChages] = useState(SICCodesChangeData)
  const [uniqueTelephoneEmail, setUniqueTelephoneEmail] = useState(uniqueTelephoneEmailData)
  const [teleMarketingForm, setTeleMarketingForm] = useState(tableFormData)
  const [newMovers, setNewMovers] = useState(newMoversData)
  const [selectRecords, setSelectRecords] = useState(selectRecordsData)
  const [cellData, setCellData] = useState(cellPhoneData)
  const [cellCarrier, setCellCarrier] = useState(cellCarriersData)
  const [urlData, setUrlData] = useState(urlDatas)
  const [regDates, setRegDates] = useState(regDateData)
  const [uniqValues, setUniqValues] = useState('')
  const [registrantContact, setRegistrantContact] = useState('')
  const [badData, setBadData] = useState('')

  // check consumer data api
  const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    if(error) console.log(error)

    const searchQuery = (e) =>{
        e.preventDefault()
        const url = "http://localhost:8000";
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
    console.log(data);








  return (
    <Context.Provider value={{selectCountry,selectState, data, searchQuery, setSelectState,selectCanStates, setSelectCanStates, zipCodeSelect, setZipCodeSelect, setSelectCountry, setSelectCounty, selectCounty, textData, setTextData, setSCF, SCF, setEmail, setUniqueValue, setTelSearch, telSearch, setGender, setHouseHoldIncome, houseHoldIncome, setUrl, url, setFilter, setEthnicity, ethnicity, setSearchLastName, searchLastName, setEnterAge, enterAge, setDob, dob, setrentingHome, rentingHome, setOptIn, optIn, setRepeated, repeated, setIntrestedGroup, intrestedGroup, setEmailDomain, emailDomain, setUniqueEmail, uniqueEmail, setExcludeEmail, excludeEmail, setUrlDomain, setFaxNumber, faxNumber, setObtainRecords, obtainRecords, setExecutiveContact, setSearchCompany, searchCompany, jobSearch, setJobSearch, setCompanyRevenue, companyRevenue, setSearchEmployee, searchEmployee, setNACIcode, NACIcode, setSICcode, SICcode, setUniqueTelephoneEmail, uniqueTelephoneEmail, setTeleMarketingForm, teleMarketingForm, setNewMovers, newMovers, setSelectRecords, selectRecords, setCellData, cellData, setCellCarrier, cellCarrier, setUrlData, urlData, setRegDates, regDates, setUniqValues, uniqValues, setRegistrantContact, registrantContact, setBadData, badData, isLoggedIn, setIsLoggedIn, email, uniqueValues, gender, filter, executiveContact, urlDomain, SICCodesChange, setSICCodesChages, NACIcodeChanges, setNACIcodeChanges}}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)