"use client"
import Image from "next/image";
import { navberData } from "./navberData";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const Navber = () => {

    const [hover, setHover] = useState(null)
    const [hoverTwo, setHoverTwo] = useState(null)

    const [tick, setTick] = useState(false)
    console.log(tick)


    return (
        <div className="bg-blue">
            <div className="w-[1100px] h-[65px] mx-auto flex justify-between items-center">
                <Image src="/Image/nexzan-logo.webp" alt="Loading..." width={168} height={45} />
                <ul className="flex gap-5 items-center">
                    {
                        navberData.map((item, index) => (
                            <li
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(null)}
                                key={index}
                                className="group relative leading-10"
                            >
                                <div className="text-white font-medium flex items-center gap-1 cursor-pointer ">
                                    <span>{item.title}</span>
                                    {item.menus && (
                                        <span className={`transition-transform duration-200 ${item.menus ? "group-hover:rotate-180" : " "}`}>
                                            <FaAngleDown />
                                        </span>
                                    )}
                                </div>
                                {hover === index && item.menus && (
                                    <ul className="absolute bg-extraDarkBlue rounded-b-[4px] top-[44px] right-0 ">
                                        <div className={`size-5 rotate-45 absolute right-5 -top-3 ${tick ? "bg-blue-500" : "bg-extraDarkBlue"}`}></div>
                                        {
                                            item.menus?.map((menu, i) => (
                                                <li
                                                    onMouseEnter={() => { setHoverTwo(i)
                                                        if (i === 0) {
                                                            setTick(true)
                                                        }
                                                    }}

                                                    onMouseLeave={() => {
                                                        setHoverTwo(null)
                                                        if (i === 0) {
                                                            setTick(false)
                                                        }
                                                    }

                                                    }
                                                    key={i}
                                                    className="px-5 w-[200px] py-1.5 hover:bg-blue-500 relative border-b last:border-b-0 border-blue-500/80 "
                                                >
                                                    <span className=" text-[14px] font-medium text-[#D1D1D1] cursor-pointer">{menu.title}</span>
                                                    {
                                                        hoverTwo === i && menu.submenu && (
                                                            <ul className="absolute left-[100%] top-0 px-5 bg-extraDarkBlue w-[200px] cursor-pointer">
                                                                {
                                                                    menu?.submenu?.map((sub, e) => (
                                                                        <li className="text-white py-1.5" key={e}
                                                                        >
                                                                            <span>{sub.title}</span>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        )
                                                    }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )}

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navber;