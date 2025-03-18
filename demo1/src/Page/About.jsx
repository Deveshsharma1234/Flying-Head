
import {Logo} from '../assets/Logo'


const About = () => {
    return <>
      <div className="text-center max-w-3xl mx-auto p-6">
    <h1 className="text-4xl font-extrabold text-purple-600 mb-4">About Flying Head</h1>
    <img 
        src={Logo} 
        alt="img" 
        className="w-32 mx-auto mb-4 rounded-lg shadow-lg"
    />
    <h4 className="text-lg italic text-gray-500 mb-6">
        A collection for new and experienced developers
    </h4>
    
    <h2 className="text-lg text-gray-800 leading-relaxed bg-gray-100 p-6 rounded-xl shadow-lg">
        <p>
            This React.js project houses a clean, minimalist user interface for exploring and accessing APIs. 
            As a software developer looking for more things to build, I made this collection to easily discover 
            new project ideas and sources of content. And in doing so, I've strived for simple design, accessibility, 
            and intuitive use – because that's what the best things are.
        </p>

        <p className="mt-4">
            Free APIs is organized by two main modes: a general view of all APIs and a targeted, category-specific approach. 
            There are further options to search, sort, shuffle, and reset the API cards. Each card links to its respective API.
        </p>

        <p className="mt-4">
            Go ahead and open a GitHub issue if you have any optimizations, improvements, or suggestions. 
            If you'd like to get in touch, feel free to reach out!
        </p>
    </h2>
</div>

    </>
}

export default About;