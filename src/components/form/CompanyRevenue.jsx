import React from "react";
import { useStateContext } from "../context/StateContext";

const CompanyRevenue = () => {
    const {setCompanyRevenue, companyRevenue} = useStateContext()
    const handleChange = (e) =>{
        setCompanyRevenue({
            ...companyRevenue, [e.target.name] : e.target.value
        })
    }
    return (
        <>
            <fieldset>
                <legend>Search by Company Revenue:</legend>
                <table width="100%" cellPadding="1" className="tdBlock">
                    <tbody>
                    <tr>
                        <td width="50%">
                            <b>FROM: </b>
                            <br />
                            <small>Select a Lower Limit of Company Revenues Below:</small>
                            <br />
                            <select onChange={handleChange}
                                name="revenueLo"
                                id="revenueLo"
                                style={{ width: "250px" }}
                            >
                                <option value="">Lower Limit of Revenues</option>
                                <option value="0">Under $600K</option>
                                <option value="600">$600 Thousand</option>
                                <option value="1500">$1.5 Million</option>
                                <option value="2800">$2.8 Million</option>
                                <option value="7000">$7 Million</option>
                                <option value="11000">$11 Million</option>
                                <option value="25000">$25 Million</option>
                                <option value="70000">$70 Million</option>
                                <option value="180000">$180 Million</option>
                                <option value="400000">$400 Million</option>
                                <option value="1000000">$1 Billion</option>
                            </select>
                        </td>

                        <td>
                            <b>TO:</b>
                            <br />
                            <small>Select an Upper Limit of Company Revenues Below:</small>
                            <br />
                            <select onChange={handleChange}
                                name="revenueHi"
                                id="revenueHi"
                                style={{ width: "250px" }}
                            >
                                <option value="">Upper Limit of Revenues</option>
                                <option value="600">$600 Thousand</option>
                                <option value="1500">$1.5 Million</option>
                                <option value="2800">$2.8 Million</option>
                                <option value="7000">$7 Million</option>
                                <option value="11000">$11 Million</option>
                                <option value="25000">$25 Million</option>
                                <option value="70000">$70 Million</option>
                                <option value="180000">$180 Million</option>
                                <option value="400000">$400 Million</option>
                                <option value="1000000">$1 Billion</option>
                                <option value="1100000">Over $1 Billion</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </>
    );
};

export default CompanyRevenue;
