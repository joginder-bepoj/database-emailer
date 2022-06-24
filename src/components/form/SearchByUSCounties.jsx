import React, {useState, useEffect} from "react";
import { useStateContext } from "../context/StateContext";
import axios from "axios";


const SearchByUSCounties = () => {
    const {setSelectCounty, selectState } = useStateContext();
    const selectCountyChange = (event) => {
        setSelectCounty(event.target.value);
    };

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    if(error) console.log(error)

    useEffect(() => {
        const url = "http://localhost:8000";
        const fetchData = async () => {
            try {
                const res = await axios.get(url + "/tblsatecounty");
                setData(res.data);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <div style={{ fontSize: "13pt" }} align="center">
                Select a County
            </div>
            <span
                style={{ fontSize: "11pt", verticalAlign: "top", marginLeft: "150px" }}
            >
                All Counties in <span id="St">{selectState.map(state=> state+ ", ")}</span>:
            </span>
            <div align="center">
                <select
                    name="Counties[]"
                    id="Counties"
                    size="10"
                    multiple="multiple"
                    onChange={selectCountyChange}
                >
                    <option value="" style={{ color: "#FFF", backgroundColor: "blue" }}>
                        Select Counties
                    </option>
                    {
                        selectState.map(item =>(
                            <optgroup key={item} label={`Counties in ${item}`}>
                            {data.map((data) => ( data.St === `${item}` &&
                                <option value={data.StCtyCode} key={data.StCtyCode}>
                                    {data.CtyName}
                                </option>
                            ))}
                            </optgroup>
                        ))
                    }
                </select>
            </div>
        </>
    );
};

export default SearchByUSCounties;
