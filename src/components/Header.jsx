import { useContext } from "react"
import { PersonalContext } from "../contexts/personalContext";

export default function Header() {
const {langu, toggleLangu, theme, toggleTheme,profileData} = useContext(PersonalContext);
const dataNav = profileData[langu].navItems;

    return (
        <div>

            <div className="relative">
                <input
                    id="switch-component"
                    type="checkbox"
                    onChange={toggleTheme}
                    className="peer sr-only"
                />

                <label
                    htmlFor="switch-component"
                    className="w-11 h-5 bg-slate-200 rounded-full flex items-center cursor-pointer transition-colors peer-checked:bg-slate-800"
                >

                    <div className="w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-6"></div>

                </label>
            </div>
            <h5 className="text-[15px]">{langu==="tr"? "KARANLIK TEMA" : "DARK MODE"}</h5>
            <span>|</span>
            <button onClick={toggleLangu}>{langu==="tr"? (<div className={`text-[15px] font-bold text-[#777777]`} ><span className={`text-[15px] font-bold ${theme==="light"? "text-[#4731D3]" : "text-[#BAB2E7]"}`} >TÜRKÇE</span>'YE GEÇ</div>) : (<span>ENGLISH</span>)}</button>
            <div><span>A</span></div>
            <nav>
                {dataNav.map((item, index) => <a key={item.id} href={item.href}>
      {item.label}
    </a>)}
            </nav>
        </div>
    )
}