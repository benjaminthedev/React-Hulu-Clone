import Image from 'next/image';
import HeaderItem from '../HeaderItem/HeaderItem';
import {HomeIcon, LightingBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon} from '@heroicons/react/outline';

function Header() {
    return (
        <>
        <div>
             <HeaderItem title='HOME' Icon={HomeIcon} /> 
             {/* This icon causes an issue and I need to sort it.. */}
             {/* <HeaderItem title='TRENDING' Icon={LightingBoltIcon} />  */}
             <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} /> 
             <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />  
             <HeaderItem title='SEARCH' Icon={SearchIcon} /> 
             <HeaderItem title='ACCOUNT' Icon={UserIcon} /> 
        </div>
        <header className="">
            <h1>This is the header</h1>
            <Image
            src="/hulu-white.png" 
            alt="Hulu Logo"
            width={200}
            height={200} 
            className="object-contain"
            />
        </header>
        </>
    )
}

export default Header
 