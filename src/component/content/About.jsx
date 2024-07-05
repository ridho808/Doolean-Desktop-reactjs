import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMedium } from 'react-icons/ai'
import Rxdxo from '../../assets/orang-ganteng.jpg'
export default function About(props) {
    return (
        <div data-aos="zoom-in"
            className="max-w-xl w-full backdrop-blur-xl bg-white/60 rounded-lg flex flex-col fixed top-[11%] sm:left-[20%] md:left-[18%] lg:left-[28%] xl:left-[30%] 2xl:left-[32%]">
            <div className="flex flex-row gap-1 p-1 items-center">
                <h1 className="w-full text-center font-bold bg-black/10 rounded-bl-lg rounded-tl-lg text-gray-800 ">About</h1>
                <button onClick={props.oneClick} className="w-[15px] h-[15px] rounded-[360px] bg-yellow-300"></button>
                <button onClick={props.twoClick} className="w-[15px] h-[15px] rounded-[360px] bg-[red]"></button>
            </div>
            <div className="m-2 text-sm text-gray-800 flex flex-row">
                <div className="bg-black/10 p-2 flex gap-2 font-bold">
                    <BsInfoCircle size={20} fill="black" />
                    <span>Information</span>
                </div>
                <div className="w-full bg-white/20 p-2 flex flex-col gap-2 overflow-y-auto h-[500px]">
                    <div className="w-[200px] mx-auto">
                        <img src={Rxdxo} alt="RIDHO" className="w-[250px] object-fill border-4 border-white rounded-[360px]" />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <h3 className="text-lg"><strong> FULLSTACK </strong> DEVELOPER</h3>
                        <h4 className="text-sm"><strong>Name :</strong>  RIDHO</h4>
                        <h4 className="text-sm"><strong>Age :</strong>  24</h4>
                        <h4 className="text-sm"><strong> Summary </strong></h4>
                        <p className="text-xs">I am a Full Stack Developer with over two years of experience.my expertise includes HTML, CSS, JavaScript, Node.js (Express.js), RDMS database,noSQL, React, and Next.js.I excited to learn new things about programming</p>
                        <h4 className="text-sm "><strong>Work Experience</strong></h4>
                        <div className='flex flex-col gap-3'>
                            <h4 className='font-bold'>UKUR.com – Full stack developer (2023-2024)</h4>
                            <p className="text-xs w-[90%] mx-auto">I work with a great team to build an ecommerce application for building materials. I contribute to programming both the frontend and backend using Node.js. Some of the services I handle include the admin dashboard, global search to facilitate searching, and programming internal needs required by the company to improve and develop the application. Additionally, I am involved in coding discussions and coding.</p>
                            <h4 className='font-bold'>Freelancer – Full stack developer (2021-present)</h4>
                            <p className="text-xs w-[90%] mx-auto">I developed a WhatsApp bot using WWebJS, a Baileys bot with Puppeteer for automation, and a server-side app with Express.js. I also created a pixel platformer game in Godot, responsive landing pages, and a library management application.</p>
                        </div>
                        <h4 className="text-sm"><strong>Skill </strong></h4>
                        <div className="flex flex-row flex-wrap">
                            <img src="https://img.icons8.com/color/40/000000/html-5--v1.png" alt="HTML" />
                            <img src="https://img.icons8.com/color/40/000000/css3.png" alt="CSS" />
                            <img src="https://img.icons8.com/color/40/000000/javascript--v1.png" alt="JavaScript" />
                            <img src="https://img.icons8.com/fluency/40/000000/node-js.png" alt="nodeJS" />
                            <img src="https://img.icons8.com/plasticine/40/000000/react.png" alt="React" />
                            <img src="https://img.icons8.com/color/40/000000/mysql-logo.png" alt="mysql" />
                            <img src="https://img.icons8.com/color/40/000000/mongodb.png" alt="MongoDb" />
                            <img src="https://img.icons8.com/color/40/000000/bootstrap.png" alt="Bootstarp" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Bootstarp" width={40} />
                            <img src="https://img.icons8.com/?size=192&id=YKKmRFS8Utmm&format=png" alt="prisma" width={40} />
                            <img src="https://img.icons8.com/?size=192&id=MWiBjkuHeMVq&format=png" alt="next" width={40} />
                            <img src="https://img.icons8.com/?size=192&id=wpZmKzk11AzJ&format=png" alt="" width={40} />
                        </div>
                        <h4 className="text-sm"><strong>Social Media </strong></h4>
                        <div className="flex flex-row flex-wrap gap-3">
                            <a href="https://github.com/ridho808" target='_blank'><AiOutlineGithub size={30} /></a>
                            <a href="https://www.linkedin.com/in/ridho-80271b21b/" target='_blank'><AiOutlineLinkedin size={30} /></a>
                            <a href="https://medium.com/@doolean.dev" target='_blank'><AiOutlineMedium size={30} /></a>
                        </div>
                        <h6 className="mt-2 text-[10px] text-center">Copyright©DOOLEAN 2024</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
