import React from "react";
import { useStateContext } from "../context/StateContext";

const SearchByLastName = () => {
    const {setLastName, lastName} = useStateContext()

    const handleNameChange = e =>{
        const {value, id} = e.target
        setLastName({...lastName, [id]:value})
    }
   

    return (
        <>
            <fieldset id="fsLastName">
                <legend id="Last_name">Search by Last Name:</legend>
                <h3>Search By Last Name:</h3>
                <small>(Use Proper Capitalization)</small>
                <br />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[0]"
                    id="txtLastNames_0"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[1]"
                    id="txtLastNames_1"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[2]"
                    id="txtLastNames_2"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[3]"
                    id="txtLastNames_3"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[4]"
                    id="txtLastNames_4"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[5]"
                    id="txtLastNames_5"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[6]"
                    id="txtLastNames_6"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[7]"
                    id="txtLastNames_7"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[8]"
                    id="txtLastNames_8"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[9]"
                    id="txtLastNames_9"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[10]"
                    id="txtLastNames_10"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[11]"
                    id="txtLastNames_11"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[12]"
                    id="txtLastNames_12"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[13]"
                    id="txtLastNames_13"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[14]"
                    id="txtLastNames_14"
                    size="10"
                />
                <input 
                    onChange={handleNameChange}
                    type="text"
                    name="txtLastNames[15]"
                    id="txtLastNames_15"
                    size="10"
                />{" "}
                <table width="100%">
                    <tbody>
                    <tr valign="top">
                        <td width="50%">
                            <label htmlFor="last_exactly_this">Last Name Exactly: </label>{" "}
                            <input
                                type="radio"
                                name="opt_Last_search_conditions"
                                id="last_exactly_this"
                                title="Names match this exactly"
                                value="3"
                                defaultChecked
                            />
                            <br />
                            <label htmlFor="chkGroupByLastName">Group By Last Names: </label>
                            <input
                                type="checkbox"
                                name="chkGroupByLastName"
                                id="chkGroupByLastName"
                                value="1"
                            />
                            <br />
                            <small>
                                (This is for exact matches only. It will slow query down
                                considerably)
                            </small>
                        </td>
                        <td>
                            <label htmlFor="last_starts_with">
                                Last Name Starts With Entry:{" "}
                            </label>{" "}
                            <input
                                type="radio"
                                name="opt_Last_search_conditions"
                                id="last_starts_with"
                                title="All Last names that start with this will be included"
                                value="1"
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </>
    );
};

export default SearchByLastName;
