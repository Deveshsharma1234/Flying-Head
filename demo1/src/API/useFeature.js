
import { useState,useEffect } from "react"
export const useFeature = () => {
    
    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let data = await fetch("https://raw.githubusercontent.com/public-apis-dev/public-apis/main/db/resources.json");
            data = await data.json();
            const Categories = [...new Set(data.entries.map((entery) =>
                entery.Category
            ))];

            setCategory(Categories);

        }
        fetchData();

    }, [])

    return category;
}


