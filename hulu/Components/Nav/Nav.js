import requests from "../../utils/requests"

const Nav = () => {

    console.log(requests);

    return (

        <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
            {Object.entries(requests).map(([key, {title, url }]) => (
                <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24" key={key}>{title}</h2>
                ))}
        </div>
    ) 

    
} 

export default Nav
