import React from "react";

const MailMerge = () => {
    const handleChange = (e) =>{
        console.log({
            [e.target.name] : e.target.value
        })

    }
    return (
        <>
            <section className="section section-xs content">
                <div className="container" id="searchContainer">
                    <div
                        className="row row-50 justify-content-center justify-content-lg-start align-items-center"
                        id="row50"
                    >
                        <div className="col-md-12 wow fadeIn" data-wow-delay=".3s">
                            <span style={{ fontSize: "12pt", color: "#3D5899" }}>
                                Welcome Back <br />
                                You have 0 records left in your account.
                            </span>{" "}
                            <h2 className="text-center">
                                Create Personalized Letters to New Movers
                            </h2>
                            <form
                                method="post"
                                action="#results"
                                name="frmMailmerge"
                                id="frmMailmerge"
                            >
                                <input onChange={handleChange}
                                    type="hidden"
                                    name="action"
                                    id="action"
                                    value="customization"
                                />
                                <div id="customization">
                                    <h3 style={{ textAlign: "left" }}>
                                        Customization step 1 of 3
                                    </h3>
                                    <p>
                                        Create personalized "mail merged" letters to download and
                                        print either onto your own business letterhead or we'll
                                        create your business letterhead.
                                    </p>
                                    <fieldset className="bg-grey">
                                        <legend>Letterhead Options</legend>
                                        <div className="mb20">
                                            <div>
                                                <label>
                                                    <input onChange={handleChange}
                                                        type="radio"
                                                        name="print"
                                                        id="print0"
                                                        value="0"
                                                        
                                                        defaultChecked
                                                    />{" "}
                                                    Use your Business Stationary (for printing on your
                                                    preprinted letterhead).
                                                </label>
                                            </div>
                                            <div className="row-10">
                                                <label>
                                                    <input onChange={handleChange}
                                                        type="radio"
                                                        name="print"
                                                        id="print1"
                                                        value="1"
                                                    />{" "}
                                                    Use your Business Information you enter below (for
                                                    printing header on blank paper, option displays form
                                                    below)
                                                </label>
                                            </div>
                                        </div>
                                        <fieldset className="bg-grey" id="customData">
                                            <legend>We will create your Business Letterhead</legend>
                                            <div className="row row-10">
                                                <div className="col-lg-6 col-md-6">
                                                    <label>
                                                        <strong>Business Name: (Req.)</strong>
                                                    </label>{" "}
                                                    <input onChange={handleChange}
                                                        type="text"
                                                        id="business_name"
                                                        
                                                        name="business_name"
                                                        className="form-input personalize"
                                                        placeholder="Business Name"
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <label>
                                                        <strong>Address: (Req.)</strong>
                                                    </label>{" "}
                                                    <input onChange={handleChange}
                                                        type="text"
                                                        id="address"
                                                        name="USERaddress"
                                                        
                                                        className="form-input onChange={handleChange} personalize"
                                                        placeholder="Address"
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <label>
                                                        <strong>City: (Req.)</strong>
                                                    </label>{" "}
                                                    <input onChange={handleChange}
                                                        type="text"
                                                        id="city"
                                                        name="USERcity"
                                                        className="form-input personalize"
                                                        
                                                        placeholder="City"
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <label>
                                                        <strong>State: (Req.)</strong>
                                                    </label>{" "}
                                                    <input onChange={handleChange}
                                                        type="text"
                                                        id="state"
                                                        name="USERstate"
                                                        className="form-input personalize"
                                                       
                                                        placeholder="State"
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <label>
                                                        <strong>Zip: (Req.)</strong>
                                                    </label>{" "}
                                                    <input onChange={handleChange}
                                                        type="text"
                                                        id="zip"
                                                        name="USERzip"
                                                        className="form-input personalize"
                                                        
                                                        placeholder="Zip"
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <label>
                                                        <strong>Phone: (Req.)</strong>
                                                    </label>{" "}
                                                    <input onChange={handleChange}
                                                        type="text"
                                                        id="phone"
                                                        name="phone"
                                                        className="form-input personalize"
                                                        
                                                        placeholder="Phone"
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <label>
                                                        <strong>Email: (Req.)</strong>
                                                    </label>{" "}
                                                    <input onChange={handleChange}
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        className="form-input personalize"
                                                        
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <label>
                                                        <strong>Website:</strong>
                                                    </label>{" "}
                                                    <input onChange={handleChange}
                                                        type="text"
                                                        id="URL"
                                                        name="URL"
                                                        className="form-input personalize"
                                                        
                                                        placeholder="Website"
                                                    />
                                                </div>
                                            </div>
                                        </fieldset>

                                        <fieldset className="bg-grey">
                                            <legend>Data Replacement Codes</legend>
                                            <div>
                                                Use these Data Replacement Codes to personalized your
                                                letter. Simply enter your letter in the editor below
                                                then tap a #code# to insert it as a placeholder that
                                                will be replaced with values from the selected data
                                                file!
                                            </div>

                                            <div className="drcodesContainer">
                                                <div className="row row-10">
                                                    <div className="col-md-4">
                                                        <h5 className="text-left">New Mover Info</h5>
                                                        <ul className="cols-1">
                                                            <li> #buyer_first_name#</li>
                                                            <li> #buyer_last_name#</li>
                                                            <li> #address#</li>
                                                            <li> #city#</li>
                                                            <li> #county#</li>
                                                            <li> #state#</li>
                                                            <li> #zip#</li>
                                                            <li> #phone_number#</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h5 className="text-left">Seller Info</h5>
                                                        <ul className="cols-1">
                                                            <li> #seller_first_name#</li>
                                                            <li> #seller_last_name#</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h5 className="text-left">Transaction Info</h5>
                                                        <ul className="cols-1">
                                                            <li>#seller_company#</li>
                                                            <li> #loan_amount#</li>
                                                            <li> #loan_type#</li>
                                                            <li> #interest_rate#</li>
                                                            <li> #lender_name#</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className="text-center" style={{borderTop: '1px solid',paddingTop: '20px'}}><a href="https://tipscloud.egnyte.com/dl/miHiqUACEz/" target="_blank" rel="noreferrer"><strong>Additional Data Replacement Codes Here</strong></a>. Use column "5.0. Field Name" Then choose Row. Example 1<sup>st</sup> row #seller_company#</p>
                                            </div>
                                        </fieldset>
                                        {/* here text area will come from tiny components */}
                                    </fieldset>
                                </div>
                                <div className="bg-grey" id="buttons">
                                    <div className="text-center" id="results">
                                        Choose A Name for Your File (20 char max):{" "}
                                        <input onChange={handleChange}
                                            type="text"
                                            name="txtFileName"
                                            id="txtFileName"
                                            maxLength="20"
                                            size="20"
                                            
                                            placeholder="Your File Name"
                                        />
                                        <br />
                                        <br />
                                        <input
                                            className="button button-sm button-primary"
                                            value="Create Your Mail Merge File"
                                            name="cmdSearch"
                                            id="cmdSearch"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MailMerge;
