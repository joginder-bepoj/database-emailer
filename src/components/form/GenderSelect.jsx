import React from "react";
import { useStateContext } from "../context/StateContext";

const GenderSelect = () => {
    const {setGender} = useStateContext()


    const handleChange= (e) =>{
        setGender(e.target.value)
    }

    return (
        <>
            <fieldset id="fsSex">
                <legend>Select Gender: (Optional)</legend>
                <div align="center" id="divSex">
                    <b>
                        <label htmlFor="genderBoth">Both:</label>{" "}
                        <input
                            type="radio"
                            name="gender"
                            id="genderBoth"
                            value="Un"
                            defaultChecked onChange={handleChange}
                        />
                        &nbsp;|&nbsp;<label htmlFor="genderFem">Female:</label>{" "}
                        <input type="radio" name="gender" id="genderFem" value="F" onChange={handleChange} />
                        &nbsp;|&nbsp;<label htmlFor="genderMal">Male:</label>{" "}
                        <input type="radio" name="gender" id="genderMal" value="M" onChange={handleChange} />
                    </b>
                </div>
            </fieldset>
        </>
    );
};

export default GenderSelect;
