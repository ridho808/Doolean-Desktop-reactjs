import React from 'react'
import { AiFillMail } from 'react-icons/ai'
export default function Email({ Email }) {
    return (
        <div data-aos="zoom-in"
            className="max-w-xl w-full backdrop-blur-xl bg-white/60 rounded-lg flex flex-col fixed top-[11%] sm:left-[20%] md:left-[18%] lg:left-[28%] xl:left-[30%] 2xl:left-[32%]">
            <div className="flex flex-row gap-1 p-1 items-center">
                <h1 className="w-full text-center font-bold bg-black/10 rounded-bl-lg rounded-tl-lg text-gray-800 ">Email</h1>
                <button onClick={Email} className="w-[15px] h-[15px] rounded-[360px] bg-yellow-300"></button>
                <button onClick={Email} className="w-[15px] h-[15px] rounded-[360px] bg-[red]"></button>
            </div>
            <div className="m-2 text-sm flex flex-col bg-white/20 items-center">
                <h1 className='text-4xl font-bold text-gray-800 p-2'>Hire me......</h1>
                <div className='flex flex-row items-center w-full'>
                    <div className='w-full m-3'>
                        <form className='flex flex-col gap-2 w-full'>
                            <div className='flex flex-col justify-evenly gap-2 items-center text-gray-700'>
                                <lable className="font-bold">Name</lable>
                                <input type="text" placeholder='Your Name ...' className='border w-full h-[30px] p-2 rounded-md bg-white/70' />
                            </div>
                            <div className='flex flex-col justify-evenly gap-2 items-center text-gray-700'>
                                <lable className="font-bold">Email</lable>
                                <input type="text" placeholder='Your Email...' className='border w-full h-[30px] p-2 rounded-md bg-white/70' />
                            </div>
                            <div className='flex flex-col justify-evenly gap-2 items-center text-gray-700'>
                                <lable className="font-bold">Message</lable>
                                <textarea type="text" placeholder='Message ...' className='border w-full h-[70px] p-2 rounded-md bg-white/70'></textarea>
                            </div>
                            <button className='bg-sky-500 rounded-xl font-bold w-[150px] h-[40px] flex items-center justify-center mx-auto text-white'>
                                <AiFillMail size={25} /> SEND
                            </button>
                        </form>
                    </div>
                    <div className='w-full hidden md:flex'>
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/marketing-manager-3025704-2526902.png" width={200} className="object-fill email" alt="ICONS" />
                    </div>
                </div>
            </div>
        </div>
    )
}
