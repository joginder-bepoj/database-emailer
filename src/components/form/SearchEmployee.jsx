import React from "react";
import { useStateContext } from "../context/StateContext";

const SearchEmployee = () => {
    const { setSearchEmployee, searchEmployee } = useStateContext();
    const handleChange = (e) => {
        setSearchEmployee({
            ...searchEmployee,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <>
            <fieldset>
                <legend>Search by Number of Employees: </legend>
                <table width="100%" cellPadding="1" className="tdBlock">
                    <tbody>
                        <tr>
                            <td width="50%">
                                <b>FROM: </b>
                                <br />
                                <small>
                                    Select a Lower Limit of the Number of Employees Below:
                                </small>
                                <br />
                                <select
                                    onChange={handleChange}
                                    name="employeesLo"
                                    id="employeesLo"
                                    style={{ width: "250px" }}
                                >
                                    <option value="">Lower Limit of No. of Employees</option>
                                    <option value="1">1</option>
                                    <option value="6">6</option>
                                    <option value="12">12</option>
                                    <option value="24">24</option>
                                    <option value="45">45</option>
                                    <option value="99">99</option>
                                    <option value="200">200</option>
                                    <option value="399">399</option>
                                    <option value="750">750</option>
                                    <option value="4000">4000</option>
                                    <option value="7500">7500</option>
                                </select>
                            </td>
                            <td>
                                <b>TO:</b>
                                <br />
                                <small>
                                    Select an Upper Limit of the Number of Employees Below:
                                </small>
                                <br />
                                <select
                                    onChange={handleChange}
                                    name="employeesHi"
                                    id="employeesHi"
                                    style={{ width: "250px" }}
                                >
                                    <option value="">Upper Limit of No. of Employees</option>
                                    <option value="5">5</option>
                                    <option value="12">12</option>
                                    <option value="24">24</option>
                                    <option value="45">45</option>
                                    <option value="99">99</option>
                                    <option value="200">200</option>
                                    <option value="399">399</option>
                                    <option value="750">750</option>
                                    <option value="4000">4000</option>
                                    <option value="7500">7500</option>
                                    <option value="0">Over 7500</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
        </>
    );
};

export default SearchEmployee;
