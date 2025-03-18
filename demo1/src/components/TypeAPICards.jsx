
const TypeAPICards = (pros) => {
    const { API, Description, Auth, HTTPS, Cors, Link } = pros.data


    return (<>
        <a href={Link} target="_blank"    >
            <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
                <h1 className="text-2xl font-bold mb-2">{API}</h1>
                <h2 className="text-lg text-gray-300 mb-4 line-clamp-2">{Description}</h2>
                <div className="flex flex-col gap-2 text-sm">
                    <span className={`font-semibold p-2 rounded-lg ${Auth !== "" ? "bg-blue-500 text-white" : "bg-green-500 text-white"}`}>
                        {Auth !== "" ? "API Key Authorization 🟦" : "No Authorization 🟩"}
                    </span>
                    <span className={`font-semibold p-2 rounded-lg ${HTTPS ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                        {HTTPS ? "HTTPS Available 🟩" : "HTTPS Unavailable 🟥"}
                    </span>
                    <span className={`font-semibold p-2 rounded-lg ${Cors === "no" ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>
                        {Cors === "no" ? "CORS Unavailable 🟥" : "CORS Available 🟩"}
                    </span>
                </div>
            </div>
        </a>


    </>)
}

export default TypeAPICards;