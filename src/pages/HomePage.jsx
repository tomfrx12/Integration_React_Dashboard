import Card from "../components/Card";
import SideBar from "../components/SideBar";

import { RiGraduationCapFill } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";
import { BsPersonFillX } from "react-icons/bs";

import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import BarsDataset from "../components/BarsDataset";
import GridDemo from "../components/GridDemo";

export default function HomePage() {
    return (
        <main className="flex flex-row">
            <SideBar/>
            <div className="flex flex-col w-[80%] h-screen bg-[#f7f7f7]">
                <h1 className="m-6">Home Page</h1>
                <div className="grid grid-cols-2 gap-4 m-6 mt-0 auto-rows-min items-start">
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 auto-rows-min">
                        <Card className="justify-between">
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-2xl">4,293</p>
                                <p className="font-light text-sm">Total Students</p>
                            </div>
                            <BsPersonFill className="text-zinc-400 self-center w-10 h-10"/>
                        </Card>
                        <Card className="justify-between">
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-2xl">324</p>
                                <p className="font-light text-sm">Total Teachers</p>
                            </div>
                            <RiGraduationCapFill className="text-zinc-400 self-center w-10 h-10"/>
                        </Card>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 auto-rows-min">
                        <Card className="justify-between">
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-2xl">20</p>
                                <p className="font-light text-sm">Total Students Missing</p>
                            </div>
                            <BsPersonFillX className="text-zinc-400 self-center w-10 h-10"/>
                        </Card>
                        <Card className="justify-between">
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-2xl">5</p>
                                <p className="font-light text-sm">Total Students Late</p>
                            </div>
                            <MdWatchLater className="text-zinc-400 self-center w-10 h-10"/>
                        </Card>
                    </div>     
                    <Card>
                        <BarsDataset/>
                    </Card> 
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 auto-rows-min">
                        <Card className="flex-col">
                            <p className="font-medium text-xl mb-2">Calendar</p>
                            <Calendar/>
                        </Card>
                        <Card/>   
                    </div>
                    <Card/>
                    <Card>
                        <GridDemo/>
                    </Card> 
                </div>
            </div>
        </main>
    );
}