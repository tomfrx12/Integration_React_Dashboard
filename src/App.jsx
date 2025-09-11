<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
 return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    </Router>
=======
import Card from "./components/Card";
import Header from "./components/Header";
import PieChartWithNeedle from "./components/PieChartWithNeedle";
import StraightAnglePieChart from "./components/StraightAnglePieChart";
import StackedBarChart from "./components/StackedBarChart";
import SimpleLineChart from "./components/SimpleLineChart";
import ChooseStudent from "./components/ChooseStudent";
import SimpleRadarChart from "./components/SimpleRadarChart";

function App() {
 return (
    <>
        <Header/>
        <div className="p-8">
            <ChooseStudent/>
        </div>
        <div className="p-8 flex justify-around">
            <Card text="Moyenne Générale (Classe)">
                <PieChartWithNeedle/>
            </Card>
            <Card text="Moyenne classe (Par Spé)">
                <div className="grid grid-cols-2 grid-rows-2">
                    <StraightAnglePieChart text="ananin"/>
                    <StraightAnglePieChart/>
                    <StraightAnglePieChart/>
                    <StraightAnglePieChart/>
                </div>
            </Card>
        </div>
        <div className="p-8 flex justify-around">
            <Card text="Nombres d'étudiants présent (Par Spé)" className="h-150! w-150!">
                <StackedBarChart/>
            </Card>
            <Card text="Radar compétences élève" className="h-150! w-150!">
                <SimpleRadarChart/>
            </Card>
        </div>
        <div className="p-8 flex justify-around">
            <Card text="Nombres d'étudiants présent (Par Spé)" className="h-150! w-150!">
                <SimpleLineChart/>
            </Card>
        </div>
    </>
>>>>>>> bfa155b0feb557291defc33de8a586d990f913a7
 )
}

export default App
