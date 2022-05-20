import React from "react";
import { useLocation, Link } from "react-router-dom";

const PathsShow = () => {
    const location = useLocation();
    let path = ''

    if(location.pathname === '/database-emailer/') {
        path = 'Consumer Emails'
    }else if(location.pathname === '/database-emailer/checkbuisness'){
        path = 'B2B Emails, Phones Contacts'
    }else if(location.pathname === '/database-emailer/checklinkedin'){
        path ='Search for LinkedIn Data: LinkedIn Addresses, Phones + Unique Emails'
    }else if(location.pathname === '/database-emailer/baddata'){
        path ='Verify Emails'
    }else if(location.pathname === '/database-emailer/cellphonedata'){
        path ='Cell Phone Records'
    }else if(location.pathname === '/database-emailer/newmovers'){
        path ='New Movers'
    }else if(location.pathname === '/database-emailer/urldata'){
        path = 'URL Records'
    }else if(location.pathname === '/database-emailer/telemarketing'){
        path = 'Consumer Postal & Phone'
    }

    return (
        <>
            <div className="breadcrumbs-custom-aside" style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                <div className="container" style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                    <ul className="breadcrumbs-custom-path" style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                        <li><Link to="/"> <span className="homeClick">Home</span></Link></li>
                        <li>{path}</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PathsShow;
