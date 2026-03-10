import { useContext } from "react"
import { PersonalContext } from "../contexts/personalContext"


export default function Hero() {
    const {langu, toggleLangu, theme, toggleTheme, profileData} = useContext(PersonalContext);
    const heroData = profileData[langu].personal;

    return (
        <div className="flex w-ful max-w-[1140px] mx-auto">
            <section className="flex flex-col gap-10 w-[55.6%]">
                <div className="flex items-center gap-[10px]">
                    <hr className="h-[1px] w-[102px] border-[#3730A3]"/>
                    <span className="text-xl text-[#4338CA]">Almila Su</span>
                </div>

                <div>
                    <h1 className="text-7xl font-bold">{heroData.title}</h1>
                </div>

                <div>
                    <p className="text-lg">{heroData.bio}</p>
                </div>

                <div className="flex gap-3">
                    <div className="flex items-center bg-[#3730A3] border border-[#FFFFFF] py-3 px-8 rounded-md">
                        <button className="text-lg text-white ">Hire me</button>
                    </div>
                    <div>
                        <button className="flex items-center border border-[#3730A3] rounded-md gap-[10px] p-3 pr-5">
                            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.9993 3.57508e-07C6.62413 -0.000847837 1.18956 4.78809 0.16884 11.3062C-0.851878 17.8244 2.84266 24.147 8.89128 26.2334C9.54273 26.3549 9.77596 25.9406 9.77596 25.5843C9.77596 25.2644 9.76553 24.4169 9.76162 23.2901C6.14606 24.0998 5.38255 21.4844 5.38255 21.4844C5.14453 20.6706 4.63283 19.9721 3.94023 19.5155C2.76762 18.6801 4.03014 18.699 4.03014 18.699C4.86488 18.8176 5.59955 19.3299 6.01967 20.0863C6.37528 20.756 6.97439 21.2509 7.68388 21.461C8.39338 21.671 9.15449 21.5789 9.7981 21.2051C9.85859 20.5222 10.1519 19.884 10.6255 19.4048C7.74081 19.0661 4.70765 17.9109 4.70765 12.7517C4.69164 11.4172 5.17005 10.1272 6.04443 9.14708C5.6488 7.98556 5.69539 6.71153 6.17472 5.58433C6.17472 5.58433 7.26525 5.22131 9.74729 6.9622C11.876 6.35762 14.1227 6.35762 16.2514 6.9622C18.7347 5.21996 19.824 5.58433 19.824 5.58433C20.3055 6.711 20.3521 7.98591 19.9543 9.14708C20.8318 10.1271 21.3099 11.4205 21.2884 12.7571C21.2884 17.9298 18.2527 19.0661 15.3576 19.3994C15.9821 20.0608 16.3024 20.968 16.2371 21.8906C16.2371 23.6909 16.2214 25.143 16.2214 25.5843C16.2214 25.9446 16.4534 26.363 17.1165 26.2307C23.1626 24.1408 26.8532 17.8177 25.8304 11.3013C24.8076 4.78495 19.3732 -0.00151035 12.9993 3.57508e-07Z"
                                    fill="#3730A3" />
                            </svg>
                            <h4 className="text-lg text-[#3730A3]">Github</h4>
                        </button>
                    </div>
                    <div>
                        <button className="flex items-center border border-[#3730A3] rounded-md gap-[10px] p-3 pr-5">
                            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.3333 25.2055H7.99998V8.40183H13.3333V11.2024C14.4701 9.68346 16.1941 8.77791 18.0333 8.7337C21.3407 8.75298 24.0096 11.5796 24 15.0533V25.2055H18.6666V15.7534C18.4533 14.1888 17.1756 13.0278 15.6706 13.0312C15.0123 13.0531 14.391 13.3558 13.9499 13.8695C13.5088 14.3832 13.2862 15.0635 13.3333 15.7534V25.2055ZM5.33332 25.2055H0V8.40183H5.33332V25.2055ZM2.66666 5.60122C1.1939 5.60122 0 4.34734 0 2.80061C0 1.25388 1.1939 0 2.66666 0C4.13942 0 5.33332 1.25388 5.33332 2.80061C5.33332 3.54338 5.05237 4.25572 4.55228 4.78094C4.05218 5.30615 3.3739 5.60122 2.66666 5.60122Z"
                                    fill="#3730A3" />
                            </svg>
                            <h4 className="text-lg text-[#3730A3]">Linkedin</h4>
                        </button>
                    </div>
                </div>
            </section>
            <section className="w-[44.4%] bg-[#000000]">
                    <img className="w-full" src={heroData.image} alt="Profile Photo" />
            </section>
        </div>)
}