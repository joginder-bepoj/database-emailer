import React from "react";
import { useStateContext } from "../context/StateContext";

const RentingHome = () => {
    const {setrentingHome} = useStateContext()
    const handleChange = (e) =>{
        setrentingHome(e.target.value)
    }
    return (
        <>
            <fieldset id="fsOwnRent">
                <legend>
                    Select Records Based Upon Owning or Renting Their Home: (Optional)
                </legend>
                <div align="center" id="divOwnRent">
                    <b>
                        <label htmlFor="ownrentB">Both:</label>{" "}
                        <input
                            type="radio"
                            name="ownrent"
                            id="ownrentB"
                            value=""
                            defaultChecked
                            onChange={handleChange}
                        />
                        &nbsp;|&nbsp;<label htmlFor="ownrentO">Own:</label>{" "}
                        <input type="radio" name="ownrent" id="ownrentO" value="own" onChange={handleChange} />
                        &nbsp;|&nbsp;<label htmlFor="ownrentR">Rent:</label>{" "}
                        <input type="radio" name="ownrent" id="ownrentR" value="rent" onChange={handleChange} />
                    </b>
                </div>
            </fieldset>
        </>
    );
};

export default RentingHome;
