import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import TypeAPICards from "../components/TypeAPICards";
import { Link } from "react-router-dom";


const ExpandCategory = () => {
    const [search, setSearch] = useState("");


    const [data, setData] = useState([])
    const [filterdData,setFilterdData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data = await fetch("https://raw.githubusercontent.com/public-apis-dev/public-apis/main/db/resources.json");
            data = await data.json();
            data = data.entries;

            setData(data);
            setFilterdData(data)

        }
        fetchData();

    }, [])

    const { cat } = useParams();
    console.log(cat);
    console.log(data)
    return (<>
      <div className="max-w-6xl mx-auto p-6">
    {/* Search Bar */}
    <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-md">
        <input
            type="text"
            id="txtSearch"
            placeholder="Search APIs..."
            className="w-full md:w-2/3 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={()=>{
            if(search !==""){
                const filterdData = data.filter(api =>api.API.toLowerCase().includes(search.toLowerCase()))
                setFilterdData(filterdData)
            }else{
                setFilterdData(data)

            }
        }} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all">
            Search
        </button>
    </div>

    {/* Category Heading */}
    <div className="mt-6 text-center">
    <h1 className="text-4xl font-extrabold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-lg shadow-lg text-center uppercase tracking-wide">
    {cat}
</h1>

    </div>

    {/* API Cards */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      
      {filterdData
           .filter((d) => d.Category === cat)
           .map((d, index) => (
               <TypeAPICards key={index} data={d} />
           ))}
   </div>   
</div>


    </>)


}

export default ExpandCategory