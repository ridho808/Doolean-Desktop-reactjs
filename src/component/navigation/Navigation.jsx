import React, { useEffect, useState } from 'react'
import Logo from '../../assets/icons.png';
import {BsPersonCircle} from 'react-icons/bs'
export default function Navigation() {
    const [Hours,setHours] = useState(null);
    const [Minuts,setMinuts] = useState(null);
    const GetTime =()=>{
        setHours(new Date().getHours());
        setMinuts(new Date().getMinutes());
    }
    useEffect(()=>{
        GetTime();
    },[])
    return (
        <nav className='max-w-full w-full h-[37px] flex flex-row justify-between items-center fixed top-0 backdrop-blur-xl bg-white/30 z-10'>
            <img src={Logo} width={25} className="m-2" alt='Icons'/>
            <div className='flex flex-row items-center gap-2 mx-2'>
            <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/full-battery.png" alt='batteries' className='w-[25px]'/>
            <img src="https://img.icons8.com/windows/32/FFFFFF/wifi--v1.png" className='w-[25px] h-[25px]' alt='ICons'/>
            <p className='font-bold text-sm text-white'>{Hours}:{Minuts}</p>
            <BsPersonCircle size={20} fill="white"/>
            </div>
        </nav>
    )
}
