import Image from 'next/image';
import Overview from '../Overview/Overview';

const Thumbnail = ({ result }) => {

    const BASE_URL = 'https://image.tmdb.org/t/p/original/';

    return (
        <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50">
        {/* Image of item */}
        <Image
            
            src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`  
            }

            layout='responsive'
            height={1080}
            width={1920}
        />
        {/* Info of item */}
        <Overview result={result} />
        </div>
    )
}

export default Thumbnail
