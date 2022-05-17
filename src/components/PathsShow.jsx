import React from "react";
import { useLocation } from "react-router-dom";

const PathsShow = () => {
    const location = useLocation();
    switch (location.pathname) {
        case "/database-emailer/":
            return (
                <>
                    <div className="breadcrumbs-custom-aside" style={{textAlign: "center"}}>
                        <div className="container">
                            <ul className="breadcrumbs-custom-path">
                                <li>Home</li>
                                <li className="active">Consumer Emails</li>
                            </ul>
                        </div>
                    </div>
                </>
            );
        case "/database-emailer/checkbuisness":
            return (
                <>
                    <div className="breadcrumbs-custom-aside" style={{textAlign: "center"}}>
                        <div className="container">
                            <ul className="breadcrumbs-custom-path">
                                <li>Home</li>
                                <li className="active">B2B Emails, Phones Contacts</li>
                            </ul>
                        </div>
                    </div>
                </>
            );
        case "/database-emailer/checklinkedin":
            return (
                <>
                    <div className="breadcrumbs-custom-aside" style={{textAlign: "center"}}>
                        <div className="container">
                            <ul className="breadcrumbs-custom-path">
                                <li>Home</li>
                                <li className="active">
                                    Search for LinkedIn Data: LinkedIn Addresses, Phones + Unique
                                    Emails
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            );
        case "/database-emailer/baddata":
            return (
                <>
                    <div className="breadcrumbs-custom-aside" style={{textAlign: "center"}}>
                        <div className="container">
                            <ul className="breadcrumbs-custom-path">
                                <li>Home</li>
                                <li className="active">Verify Emails</li>
                            </ul>
                        </div>
                    </div>
                </>
            );
        case "/database-emailer/cellphonedata":
            return (
                <>
                    <div className="breadcrumbs-custom-aside" style={{textAlign: "center"}}>
                        <div className="container">
                            <ul className="breadcrumbs-custom-path">
                                <li>Home</li>
                                <li className="active">Cell Phone Records</li>
                            </ul>
                        </div>
                    </div>
                </>
            );
        case "/database-emailer/newmovers":
            return (
                <>
                    <div className="breadcrumbs-custom-aside" style={{textAlign: "center"}}>
                        <div className="container">
                            <ul className="breadcrumbs-custom-path">
                                <li>Home</li>
                                <li className="active">New Movers</li>
                            </ul>
                        </div>
                    </div>
                </>
            );
        case "/database-emailer/urldata":
            return (
                <>
                    <div className="breadcrumbs-custom-aside" style={{textAlign: "center"}}>
                        <div className="container">
                            <ul className="breadcrumbs-custom-path">
                                <li>Home</li>
                                <li className="active">URL Records</li>
                            </ul>
                        </div>
                    </div>
                </>
            );
        case "/database-emailer/telemarketing":
            return (
                <>
                    <div className="breadcrumbs-custom-aside" style={{textAlign: "center"}}>
                        <div className="container">
                            <ul className="breadcrumbs-custom-path">
                                <li>Home</li>
                                <li className="active">Consumer Postal & Phone</li>
                            </ul>
                        </div>
                    </div>
                </>
            );
        default:
            break;
    }
};

export default PathsShow;
