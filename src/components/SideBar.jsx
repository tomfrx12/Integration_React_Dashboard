import MainMenuSideBar from "./MainMenuSideBar";
import Profile from "./Profile";

export default function SideBar() {
    return (
        <div className="flex flex-col w-[20%] border-r border-zinc-200 shadow-sm bg-[#FFF]">
            <Profile/>
            <MainMenuSideBar/>
        </div>
    )
}