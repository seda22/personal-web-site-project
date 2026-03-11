import { useContext } from "react"
import { PersonalContext } from "../contexts/personalContext"


export default function Hero() {
    const { langu, toggleLangu, theme, toggleTheme, profileData } = useContext(PersonalContext);
    const heroData = profileData[langu].personal;

    return (
        <div className="flex w-ful max-w-[1140px] mx-auto">
            <section className="flex flex-col gap-10 w-[55.6%]">
                <div className="flex items-center gap-[10px]">
                    <hr className="h-[1px] w-[102px] border-[#3730A3]" />
                    <span className="text-xl text-[#4338CA]">{heroData.name}</span>
                </div>

                <div>
                    <h1 className="text-7xl font-bold">{heroData.title}</h1>
                </div>

                <div>
                    <p className="text-lg">{heroData.bio}</p>
                </div>

                <div className="flex gap-3">
                    <div className="flex items-center bg-[#3730A3] border border-[#FFFFFF] py-3 px-8 rounded-md">
                        <button className="text-lg text-white whitespace-nowrap">{heroData.cta}</button>
                    </div>
                    <div className="flex items-center gap-3">
                        {heroData.links.map((item, index) => <button key={index} className={` flex item-center border pr-5 pl-2.5 py-3 rounded-md font-semibold text-lg cursor-pointer gap-2.5 ${theme==="light"? "text-[#4731D3]" : "text-[#E1E1FF]"}`}>
                            <img src={theme === "light" ?
                                item.image : item.imageDark
                            } /><span>{item.name}</span></button>)}
                    </div>
                </div>
            </section>
            <section className="w-[44.4%] bg-[#000000]">
                <img className="w-full" src={heroData.image} alt="Profile Photo" />
            </section>
        </div>)
}