import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import Lira from '../../assets/Lira1.png';
import Adm from '../../assets/ADM.png';
import Cart from '../../assets/Card2Cart.png';
import Abyss from '../../assets/Abyss.png';
import TableApp from '../../assets/TableApp.png';

export default function Portfolio({ Open }) {
    return (
        <div data-aos="zoom-in" 
        className="max-w-xl w-full backdrop-blur-xl bg-white/60 rounded-lg flex flex-col fixed top-[11%] sm:left-[20%] md:left-[18%] lg:left-[28%] xl:left-[30%] 2xl:left-[32%]">
            <div className="flex flex-row gap-1 p-1 items-center">
                <h1 className="w-full text-center font-bold bg-black/10 rounded-bl-lg rounded-tl-lg text-gray-800 ">Portfolio</h1>
                <button onClick={Open} className="w-[15px] h-[15px] rounded-[360px] bg-yellow-300"></button>
                <button onClick={Open} className="w-[15px] h-[15px] rounded-[360px] bg-[red]"></button>
            </div>
            <div className="m-2 text-sm text-gray-800 flex flex-row">
                <div className="bg-black/10 p-2 flex gap-2 font-bold">
                    <BsInfoCircle size={20} fill="black" />
                    <span>Portfolio</span>
                </div>
                <div className="w-full bg-white/20 p-2 flex flex-col gap-2 overflow-y-auto h-[500px]">
                    <div>
                        <a href="https://lira-v2-ecommerce.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <h1 className='font-bold'>Lira-Ecommerce Design</h1>
                            <img src={Lira} alt="LIRA_Design" className='object-contain w-full rounded-lg crs' />
                        </a>
                    </div>
                    <div className='flex flex-row flex-wrap gap-4 items-center justify-evenly'>
                        <div className='flex flex-col bg-white w-[200px] items-center rounded-xl'>
                            <a href="https://admin-dashboard-tailwind.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <img src={Adm} alt="LIRA_Design" className='object-contain w-[185px] h-[90px] rounded-lg crs' />
                                <h1 className='font-bold text-gray-700'>Admin Dashboard</h1>
                            </a>
                        </div>
                        <div className='flex flex-col bg-white w-[200px] items-center rounded-xl'>
                            <a href='https://card2cart.vercel.app/' target="_blank" rel="noreferrer">
                                <img src={Cart} alt="LIRA_Design" className='object-contain w-[180px] h-[89px] rounded-lg crs' />
                                <h1 className='font-bold text-gray-700'>Card To Cart</h1>
                            </a>
                        </div>
                        <div className='flex flex-col bg-white w-[200px] items-center rounded-xl'>
                            <a href="https://abyssmsg-lykzmzusa-ridho808.vercel.app/" target="_blank" rel="noreferrer" >
                                <img src={Abyss} alt="LIRA_Design" className='object-contain w-[180px] h-[89px] rounded-lg crs' />
                                <h1 className='font-bold text-gray-700'>Abyss Public Message</h1>
                            </a>
                        </div>
                        <div className='flex flex-col bg-white w-[200px] items-center rounded-xl'>
                            <a href='https://table-app-do.vercel.app/' target="_blank" rel="noreferrer" >
                                <img src={TableApp} alt="LIRA_Design" className='object-contain w-[180px] h-[89px] rounded-lg crs' />
                                <h1 className='font-bold text-gray-700'>TableApp</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
