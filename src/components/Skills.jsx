import { useContext } from "react";
import { PersonalContext } from "../contexts/personalContext";
export default function Skills() {
    const { langu, toggleLangu, theme, toggleTheme, profileData } = useContext(PersonalContext);
    const dataSkills = profileData[langu].skills;
    const skillsTitle = profileData[langu].skillsTitle;

    return (
        <div className=" gap-7 flex flex-col w-full max-w-[1140px] mx-auto mt-[124px]">
            <h3 className="text-5xl font-semibold">{skillsTitle}</h3>
            <div className=" flex gap-30">
                {dataSkills.map((item) => (
                    <div key={item.id} className="flex flex-col gap-7">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}