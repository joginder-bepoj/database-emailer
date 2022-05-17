import React from 'react'
import { useStateContext } from '../context/StateContext'

const SelectRecords = () => {
    const {setSelectRecords, selectRecords} = useStateContext()
    const handleChange = (e) =>{
        setSelectRecords({
            ...selectRecords, [e.target.name] : e.target.value
        })
    }
    console.log(selectRecords)
    return (
        <>
            <fieldset id="fsEntryDate">
                <legend>Select Records Based on the Sales Record Date:</legend>
                <span className="elevfont">Include in only records that was entered on an earlier date back to a later date.</span>
                <table width="100%" cellPadding="4" cellSpacing="2" className="tdBlock" id="EntryDate">
                    <tbody>
                    <tr valign="top">
                        <td align="center">
                            <h5 className="redtext">From this Date:</h5>
                            <select onChange={handleChange} name="entry_date" id="entry_date">
                                <option value="" style={{color: "#FFF", backgroundColor: "blue"}}>--- Sales Record Date ---</option>
                                <optgroup label="---- Year 2022 ---"></optgroup>
                                <option value="2022-05-01" >May 2022</option>
                                <option value="2022-04-01" >April 2022</option>
                                <option value="2022-03-01" >March 2022</option>
                                <option value="2022-02-01" >February 2022</option>
                                <option value="2022-01-01" >January 2022</option>
                                <optgroup label="---- Year 2021 ---"></optgroup>
                                <option value="2021-12-01" >December 2021</option>
                                <option value="2021-11-01" >November 2021</option>
                                <option value="2021-10-01" >October 2021</option>
                                <option value="2021-09-01" >September 2021</option>
                                <option value="2021-08-01" >August 2021</option>
                                <option value="2021-07-01" >July 2021</option>
                                <option value="2021-06-01" >June 2021</option>
                                <option value="2021-05-01" >May 2021</option>
                                <option value="2021-04-01" >April 2021</option>
                                <option value="2021-03-01" >March 2021</option>
                                <option value="2021-02-01" >February 2021</option>
                                <option value="2021-01-01" >January 2021</option>
                                <optgroup label="---- Year 2020 ---"></optgroup>
                                <option value="2020-12-01" >December 2020</option>
                                <option value="2020-11-01" >November 2020</option>
                                <option value="2020-10-01" >October 2020</option>
                                <option value="2020-09-01" >September 2020</option>
                                <option value="2020-08-01" >August 2020</option>
                                <option value="2020-07-01" >July 2020</option>
                                <option value="2020-06-01" >June 2020</option>
                                <option value="2020-05-01" >May 2020</option>
                                <option value="2020-04-01" >April 2020</option>
                                <option value="2020-03-01" >March 2020</option>
                                <option value="2020-02-01" >February 2020</option>
                                <option value="2020-01-01" >January 2020</option>
                                <optgroup label="---- Year 2019 ---"></optgroup>
                                <option value="2019-12-01" >December 2019</option>
                                <option value="2019-11-01" >November 2019</option>
                                <option value="2019-10-01" >October 2019</option>
                                <option value="2019-09-01" >September 2019</option>
                                <option value="2019-08-01" >August 2019</option>
                                <option value="2019-07-01" >July 2019</option>
                                <option value="2019-06-01" >June 2019</option>
                                <option value="2019-05-01" >May 2019</option>
                                <option value="2019-04-01" >April 2019</option>
                                <option value="2019-03-01" >March 2019</option>
                                <option value="2019-02-01" >February 2019</option>
                                <option value="2019-01-01" >January 2019</option>
                                <optgroup label="---- Year 2018 ---"></optgroup>
                                <option value="2018-12-01" >December 2018</option>
                                <option value="2018-11-01" >November 2018</option>
                                <option value="2018-10-01" >October 2018</option>
                                <option value="2018-09-01" >September 2018</option>
                                <option value="2018-08-01" >August 2018</option>
                                <option value="2018-07-01" >July 2018</option>
                                <option value="2018-06-01" >June 2018</option>
                                <option value="2018-05-01" >May 2018</option>
                                <option value="2018-04-01" >April 2018</option>
                                <option value="2018-03-01" >March 2018</option>
                                <option value="2018-02-01" >February 2018</option>
                                <option value="2018-01-01" >January 2018</option>
                                <option value="">All Dates</option>
                            </select><br />
                            <span className="tenfont">This Must be an Earlier Date than the One to the Right.</span>
                        </td>
                        <td align="center" width="50%">
                            <h5 className="redtext">To this Date:</h5>
                            <select onChange={handleChange} name="entry_date_later" id="entry_date_later">
                                <option value="" style={{color:"#FFF",backgroundColor: "blue"}}>Default: Today's Date</option>
                                <optgroup label="---- Year 2022 ---" />
                                <option value="2022-05-01" >May 2022</option>
                                <option value="2022-04-01" >April 2022</option>
                                <option value="2022-03-01" >March 2022</option>
                                <option value="2022-02-01" >February 2022</option>
                                <option value="2022-01-01" >January 2022</option>
                                <optgroup label="---- Year 2021 ---" />
                                <option value="2021-12-01" >December 2021</option>
                                <option value="2021-11-01" >November 2021</option>
                                <option value="2021-10-01" >October 2021</option>
                                <option value="2021-09-01" >September 2021</option>
                                <option value="2021-08-01" >August 2021</option>
                                <option value="2021-07-01" >July 2021</option>
                                <option value="2021-06-01" >June 2021</option>
                                <option value="2021-05-01" >May 2021</option>
                                <option value="2021-04-01" >April 2021</option>
                                <option value="2021-03-01" >March 2021</option>
                                <option value="2021-02-01" >February 2021</option>
                                <option value="2021-01-01" >January 2021</option>
                                <optgroup label="---- Year 2020 ---" />
                                <option value="2020-12-01" >December 2020</option>
                                <option value="2020-11-01" >November 2020</option>
                                <option value="2020-10-01" >October 2020</option>
                                <option value="2020-09-01" >September 2020</option>
                                <option value="2020-08-01" >August 2020</option>
                                <option value="2020-07-01" >July 2020</option>
                                <option value="2020-06-01" >June 2020</option>
                                <option value="2020-05-01" >May 2020</option>
                                <option value="2020-04-01" >April 2020</option>
                                <option value="2020-03-01" >March 2020</option>
                                <option value="2020-02-01" >February 2020</option>
                                <option value="2020-01-01" >January 2020</option>
                                <optgroup label="---- Year 2019 ---" />
                                <option value="2019-12-01" >December 2019</option>
                                <option value="2019-11-01" >November 2019</option>
                                <option value="2019-10-01" >October 2019</option>
                                <option value="2019-09-01" >September 2019</option>
                                <option value="2019-08-01" >August 2019</option>
                                <option value="2019-07-01" >July 2019</option>
                                <option value="2019-06-01" >June 2019</option>
                                <option value="2019-05-01" >May 2019</option>
                                <option value="2019-04-01" >April 2019</option>
                                <option value="2019-03-01" >March 2019</option>
                                <option value="2019-02-01" >February 2019</option>
                                <option value="2019-01-01" >January 2019</option>
                                <optgroup label="---- Year 2018 ---" />
                                <option value="2018-12-01" >December 2018</option>
                                <option value="2018-11-01" >November 2018</option>
                                <option value="2018-10-01" >October 2018</option>
                                <option value="2018-09-01" >September 2018</option>
                                <option value="2018-08-01" >August 2018</option>
                                <option value="2018-07-01" >July 2018</option>
                                <option value="2018-06-01" >June 2018</option>
                                <option value="2018-05-01" >May 2018</option>
                                <option value="2018-04-01" >April 2018</option>
                                <option value="2018-03-01" >March 2018</option>
                                <option value="2018-02-01" >February 2018</option>
                                <option value="2018-01-01" >January 2018</option>
                            </select><br />
                            <span className="tenfont">Leave box alone if you want to select all records up to now.</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </>
    )
}

export default SelectRecords