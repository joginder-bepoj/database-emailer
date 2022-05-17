import React from 'react'
import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const handleChange = (e) =>{
        let value = e.target.value
        if(value === "checkConsumer") return navigate("/database-emailer/")
        if(value === "checkBusiness") return navigate("/database-emailer/checkbuisness")
        if(value === "newmovers") return navigate("/database-emailer/newmovers")
        if(value === "checklinkedin") return navigate("/database-emailer/checklinkedin")
        if(value === "telemarketing") return navigate("/database-emailer/telemarketing")
        if(value === "cellphonedata") return navigate("/database-emailer/cellphonedata")
        if(value === "urldata") return navigate("/database-emailer/urldata")
        if(value === "badadata") return navigate("/database-emailer/baddata")
    }
  return (
    <>
        <select name="goto" id="" onChange={handleChange} style={{background: "blue", height:"30px", textAlign: "center"}} >
            <option style={{background: "none"}} value="">Free data search here</option>
            <option style={{backgroundColor: "none"}} value="checkConsumer">Consumer Opt-in Email 400+ Million 23 Data Fields</option>
            <option value="checkBusiness">Business Data 200+ Million SIC &amp; NAICS Codes, Titles Revenue</option>
            <option value="newmovers">New Home Movers Updated Daily Feed 15,000 Average daily</option>
            <option value="telemarketing">Consumers postal & phones</option>
            <option value="checklinkedin">LinkedIn Data Search 46 million</option>
            <option value="cellphonedata">Cell Phones SMS Texting 250 Million Data Query</option>
            <option value="urldata">Website URL Data: USA &amp; Canada 72 Million</option>
            <option value="badadata">Bad Data 300 Million Spam Traps &amp; Bounces</option>
        </select>
    </>
  )
}

export default Navbar

                  
                    
                    
                    
                    
                    
                   
                    
