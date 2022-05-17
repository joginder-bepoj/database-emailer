import React from "react";
import { useStateContext } from "../context/StateContext";

const HouseholdIncome = () => {
    const {houseHoldIncome, setHouseHoldIncome} = useStateContext()
    const handleChange= (e) =>{
       setHouseHoldIncome({...houseHoldIncome, [e.target.name] : e.target.value})
    }

    
    return (
        <>
            <fieldset id="HHI">
                <legend>Select a Household Income Range: (Optional)</legend>
                <table width="100%" className="tdBlock">
                    <caption>
                        <b>For US Addresses Only, Will Exclude Canadian Data</b>
                    </caption>
                    <tbody>
                    <tr align="center">
                        <td width="50%">
                            <span className="elevfont">Low End of Income Range:</span>
                            <br />
                            <select
                                name="MHHIncLo"
                                id="MHHIncLo"
                                onChange={handleChange}
                            >
                                <option
                                    value=""
                                    style={{ color: "#FFF", backgroundColor: "blue" }}
                                >
                                    -- Low End of Incomes --
                                </option>
                                <option value="10000">&lt; $20,000</option>
                                <option value="20000">$20,000</option>
                                <option value="30000">$30,000</option>
                                <option value="40000">$40,000</option>
                                <option value="50000">$50,000</option>
                                <option value="60000">$60,000</option>
                                <option value="70000">$70,000</option>
                                <option value="80000">$80,000</option>
                                <option value="90000">$90,000</option>
                                <option value="100000">$100,000</option>
                                <option value="110000">$110,000</option>
                                <option value="120000">$120,000</option>
                                <option value="130000">$130,000</option>
                                <option value="140000">$140,000</option>
                                <option value="150000">$150,000</option>
                                <option value="160000">$160,000</option>
                                <option value="170000">$170,000</option>
                                <option value="180000">$180,000</option>
                                <option value="190000">$190,000</option>
                                <option value="200000">$200,000</option>
                                <option value="210000">$210,000</option>
                                <option value="220000">$220,000</option>
                                <option value="230000">$230,000</option>
                                <option value="240000">$240,000</option>
                                <option value="250000">$250,000</option>
                                <option value="260000">$260,000</option>
                                <option value="270000">$270,000</option>
                                <option value="280000">$280,000</option>
                                <option value="290000">$290,000</option>
                                <option value="300000">$300,000</option>
                            </select>
                        </td>
                        <td>
                            <span className="elevfont">High End of Income Range:</span>
                            <br />
                            <select name="MHHIncHi" id="MHHIncHi" onChange={handleChange}>
                                <option
                                    value=""
                                    style={{ color: "#FFF", backgroundColor: "blue" }}
                                >
                                    -- High End of Incomes --
                                </option>
                                <option value="20000">$20,000</option>
                                <option value="30000">$30,000</option>
                                <option value="40000">$40,000</option>
                                <option value="50000">$50,000</option>
                                <option value="60000">$60,000</option>
                                <option value="70000">$70,000</option>
                                <option value="80000">$80,000</option>
                                <option value="90000">$90,000</option>
                                <option value="100000">$100,000</option>
                                <option value="110000">$110,000</option>
                                <option value="120000">$120,000</option>
                                <option value="130000">$130,000</option>
                                <option value="140000">$140,000</option>
                                <option value="150000">$150,000</option>
                                <option value="160000">$160,000</option>
                                <option value="170000">$170,000</option>
                                <option value="180000">$180,000</option>
                                <option value="190000">$190,000</option>
                                <option value="200000">$200,000</option>
                                <option value="210000">$210,000</option>
                                <option value="220000">$220,000</option>
                                <option value="230000">$230,000</option>
                                <option value="240000">$240,000</option>
                                <option value="250000">$250,000</option>
                                <option value="260000">$260,000</option>
                                <option value="270000">$270,000</option>
                                <option value="280000">$280,000</option>
                                <option value="290000">$290,000</option>
                                <option value="300000">$300,000</option>
                                <option value="HL">&gt; $300,000</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </>
    );
};

export default HouseholdIncome;
