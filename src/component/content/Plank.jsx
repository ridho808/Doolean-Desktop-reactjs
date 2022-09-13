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
                    <img src="https://www.apple.com/v/macbook-pro-13/m/images/specs/icon_mail__ea4dqj27ekqe_large_2x.png" width={50} className="object-fill" alt="ICONS" />
                </button>
                <button onClick={props.PortFolio} className="transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-150">
                    <img src="https://www.apple.com/v/macbook-pro-13/m/images/specs/icon_appstore__gfxbk0odreq2_large_2x.png" width={50} className="object-fill" alt="ICONS" />
                </button>
                <button onClick={props.Click} className="transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-150">
                    <img src="https://purepng.com/public/uploads/large/purepng.com-settings-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596115dq1ho.png" width={50} className="object-fill" alt="ICONS" />
                </button>
            </div>
        </section>
    )
}
