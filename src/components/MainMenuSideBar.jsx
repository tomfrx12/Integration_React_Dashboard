import ButtonSideBar from "./ButtonSideBar";

export default function MainMenuSideBar() {
    return (
        <div>
            <p className="text-[#363636] text-xs pl-4 pb-4 pt-8">MAIN MENU</p>
            <div>
                <ButtonSideBar texte="Home Page"/>
                <ButtonSideBar texte="Student"/>
                <ButtonSideBar texte="Teachers"/>
                <ButtonSideBar texte="Events"/>
                <ButtonSideBar texte="Stats"/>
                <ButtonSideBar texte="Reporting"/>
                <ButtonSideBar texte="Tools"/>
                <ButtonSideBar texte="Documents"/>
            </div>
            <p className="text-[#363636] text-xs pl-4 pb-4 pt-8">MY MENU</p>
            <div>
                <ButtonSideBar texte="Timetable"/>
                <ButtonSideBar texte="My Grades"/>
                <ButtonSideBar texte="Notifications"/>
            </div>
        </div>
    );
};