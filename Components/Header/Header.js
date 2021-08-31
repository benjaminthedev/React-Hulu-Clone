import Image from 'next/image';
import HeaderItem from '../HeaderItem/HeaderItem';
import {HomeIcon, LightingBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon} from '@heroicons/react/outline';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-1 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
             <HeaderItem title='HOME' Icon={HomeIcon} /> 
             {/* This icon causes an issue and I need to sort it.. */}
             {/* <HeaderItem title='TRENDING' Icon={LightingBoltIcon} />  */}
             <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} /> 
             <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />  
             <HeaderItem title='SEARCH' Icon={SearchIcon} /> 
             <HeaderItem title='ACCOUNT' Icon={UserIcon} /> 
        </div>
            
        <Image
        src="/hulu-white.png" 
        alt="Hulu Logo"
        width={150}
        height={150} 
        className="object-contain"
        />
        </header>
    )
}

export default Header
 