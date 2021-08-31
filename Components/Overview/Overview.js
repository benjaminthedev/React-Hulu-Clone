import { ThumbUpIcon } from "@heroicons/react/outline"

const Overview = ({ result }) => {
    return (
        <div className="p-2">
       
         <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
        
         <p className="truncate max-w-md ">{result.overview}</p>   
        
            <p className='flex items-center opacity-0 group-hover:opacity-100'>
                {result.media_type && `${result.media_type}`}{" "}
                {result.release_date || result.first_air_date} {" "}
                <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
            </p>









        </div>
    )
}

export default Overview
