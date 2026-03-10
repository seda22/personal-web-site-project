export default function Header(){
    return(
            <div>

        <div>
            <input id="switch-component" type="checkbox"
                className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
            <label htmlFor="switch-component"
                className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
            </label>
        </div>
        <h5 class="text-[15px]">DARK MODE</h5>
        <span>|</span>
        <span><button>TÜRKÇE</button>'YE GEÇ</span>
        <div><span>A</span></div>
            <nav>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#hireme">Hire me</a>
            </nav>
    </div>
    )
}