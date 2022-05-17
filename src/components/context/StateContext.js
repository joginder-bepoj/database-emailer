import React, {createContext, useContext, useState} from 'react'

const Context = createContext()

export const StateContext = ({children}) => {
  const [selectCountry, setSelectCountry] = useState("none")
  const [selectCounty, setSelectCounty] = useState("")
  const [textData, setTextData] = useState('')
  const [SCF, setSCF] = useState('')
  const [email, setEmail] = useState('')
  const [uniqueValues, setUniqueValue] = useState('')
  const [telSearch, setTelSearch] = useState('')
  const [gender, setGender] = useState('')
  const [houseHoldIncome, setHouseHoldIncome] = useState()
  const [url, setUrl] = useState()
  const [filter, setFilter] = useState()
  const [ethnicity, setEthnicity] = useState()
  const [searchLastName, setSearchLastName] = useState()
  const [enterAge, setEnterAge] = useState('')
  const [dob, setDob] = useState()
  const [rentingHome, setrentingHome] = useState('')
  const [optIn, setOptIn] = useState('')
  const [repeated, setRepeated] = useState('')
  const [intrestedGroup, setIntrestedGroup] = useState('')
  const [emailDomain, setEmailDomain] = useState()
  const [uniqueEmail, setUniqueEmail] = useState()
  const [excludeEmail, setExcludeEmail] = useState()
  const [urlDomain, setUrlDomain] = useState('')
  const [faxNumber, setFaxNumber] = useState()
  const [obtainRecords, setObtainRecords] = useState()
  const [executiveContact, setExecutiveContact] = useState()
  const [searchCompany, setSearchCompany] = useState()
  const [jobSearch, setJobSearch] = useState()
  const [companyRevenue, setCompanyRevenue] = useState()
  const [searchEmployee, setSearchEmployee] = useState()
  const [NACIcode, setNACIcode] = useState()
  const [SICcode, setSICcode] = useState()
  const [uniqueTelephoneEmail, setUniqueTelephoneEmail] = useState()
  const [teleMarketingForm, setTeleMarketingForm] = useState()
  const [newMovers, setNewMovers] = useState()
  const [selectRecords, setSelectRecords] = useState()
  const [cellData, setCellData] = useState()
  const [cellCarrier, setCellCarrier] = useState()
  const [urlData, setUrlData] = useState()
  const [regDates, setRegDates] = useState()
  const [uniqValues, setUniqValues] = useState()
  const [registrantContact, setRegistrantContact] = useState()
  const [badData, setBadData] = useState()
  return (
    <Context.Provider value={{selectCountry, setSelectCountry, setSelectCounty, selectCounty, textData, setTextData, setSCF, SCF, setEmail, setUniqueValue, setTelSearch, telSearch, setGender, setHouseHoldIncome, houseHoldIncome, setUrl, url, setFilter, setEthnicity, ethnicity, setSearchLastName, searchLastName, setEnterAge, enterAge, setDob, dob, setrentingHome, rentingHome, setOptIn, optIn, setRepeated, repeated, setIntrestedGroup, intrestedGroup, setEmailDomain, emailDomain, setUniqueEmail, uniqueEmail, setExcludeEmail, excludeEmail, setUrlDomain, setFaxNumber, faxNumber, setObtainRecords, obtainRecords, setExecutiveContact, setSearchCompany, searchCompany, jobSearch, setJobSearch, setCompanyRevenue, companyRevenue, setSearchEmployee, searchEmployee, setNACIcode, NACIcode, setSICcode, SICcode, setUniqueTelephoneEmail, uniqueTelephoneEmail, setTeleMarketingForm, teleMarketingForm, setNewMovers, newMovers, setSelectRecords, selectRecords, setCellData, cellData, setCellCarrier, cellCarrier, setUrlData, urlData, setRegDates, regDates, setUniqValues, uniqValues, setRegistrantContact, registrantContact, setBadData, badData}}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)