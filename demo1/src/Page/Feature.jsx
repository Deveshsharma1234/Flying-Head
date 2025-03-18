import { useState, useEffect } from "react";
import Categroy from '../components/Category';
import { Link } from "react-router-dom";
import { useFeature } from "../API/useFeature";


const Feature = () => {

    const category = useFeature();
    console.log(category);
    return (<>
      <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        API Categories
      </h1>

      {/* Category Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {category.map((cat, index) => (
         <Link to={`/feature/${cat}`}> <Categroy key={index} Categroy={cat} /></Link>
        ))}
      </div>
    </div>


    </>)
}

export default Feature;


