import React from "react";
import { useStateContext } from "../context/StateContext";

const GetUnique = () => {
    const {setUniqueValue} = useStateContext()
    const handleChange = (e) =>{
        setUniqueValue(e.target.value)

    }
    return (
        <>
            <fieldset id="fsUnique">
                <legend>Unique Values Requirement</legend>
                <h4>Get Unique Email &amp; Street Addresses and Phone Numbers</h4>
                <div className="flex-row" id="divUniq">
                    <div className="uniq">
                        <input
                            type="radio"
                            name="optGrouping"
                            id="optPhones"
                            value="phone_number"
                            onChange={handleChange}
                        />
                        <label htmlFor="optPhones">Unique Phone Numbers</label>
                    </div>
                    <div className="uniq">
                        <input
                            type="radio"
                            name="optGrouping"
                            id="optPhonesEmails"
                            value="email_address_phone"
                            onChange={handleChange}
                        />
                        <label htmlFor="optPhonesEmails">Unique Phone and Emails</label>
                    </div>
                    <div className="uniq">
                        <input
                            type="radio"
                            name="optGrouping"
                            id="optAddresses"
                            value="postal_address"
                            onChange={handleChange}
                        />
                        <label htmlFor="optAddresses">Unique Postal Addresses</label>
                    </div>
                    <div className="uniq">
                        <input
                            type="radio"
                            name="optGrouping"
                            id="optEmailAddresses"
                            value="email_address"
                            onChange={handleChange}
                        />
                        <label htmlFor="optEmailAddresses">Unique Email Addresses</label>
                    </div>
                    <div className="uniq">
                        <input
                            type="radio"
                            name="optGrouping"
                            id="optAddressesPhone"
                            value="postal_address_phone_number"
                            onChange={handleChange}
                        />
                        <label htmlFor="optAddressesPhone">
                            Unique Postal Addresses + Phones
                        </label>
                    </div>
                    <div className="uniq">
                        <input
                            type="radio"
                            name="optGrouping"
                            id="optZED"
                            value="none"
                            onChange={handleChange}
                            defaultChecked
                        />
                        <label htmlFor="optZED">No Unique Requirement</label>
                    </div>
                </div>
            </fieldset>
        </>
    );
};

export default GetUnique;
