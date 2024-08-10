import React from 'react'
import File from '../../assets/file.png';
export default function Plank(props) {
    
    return (
        <section className='max-w-xs w-full mx-auto backdrop-blur-xl bg-white/20 rounded-xl relative top-[100%]'>
            <div className='flex flex-row justify-evenly py-2 gap-2'>
                <button className="transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-150">
                    <img src={File} width={50} className="object-fill" alt="ICONS" />
                </button>
                <button onClick={props.OpnEmail} className="transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-150">
                    <img src="https://banner2.cleanpng.com/20180420/pre/avfxryhpm.webp" width={50} className="object-fill" alt="ICONS" />
                </button>
                <button onClick={props.PortFolio} className="transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-150">
                    <img src="https://cdn-icons-png.flaticon.com/512/5977/5977575.png" width={50} className="object-fill" alt="ICONS" />
                </button>
                <button onClick={props.Click} className="transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-150">
                    <img src="https://purepng.com/public/uploads/large/purepng.com-settings-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596115dq1ho.png" width={50} className="object-fill" alt="ICONS" />
                </button>
            </div>
        </section>
    )
}
