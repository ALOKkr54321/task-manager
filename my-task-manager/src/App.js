import "./App.css";
import Calender from "./components/Calender";
import ChatBox from "./components/ChatBox";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";
import Statistics from "./components/Statistics";
import Task from "./components/Task";
import TaskHistory from "./components/TaskHistory";
import TopBar from "./components/TopBar";

function App() {
  return <div className="w-[100vw] h-max overflow-y-scroll  flex flex-row gap-3 bg-slate-200 p-1">
    <SideBar/>

    <div className="w-[94%] h-auto flex flex-col md:gap-4 gap-2 md:ml-[6%] ml-[12%]">
      <TopBar/>
      
      <div className="flex flex-col md:flex-row gap-3 h-[90%]">
        <div className="flex flex-col md:w-[33%] w-[90%] rounded-2xl p-1">
          <ChatBox/>
          <Statistics/>
        </div>

        <div className="flex flex-col md:w-[40%] w-[90%] rounded-2xl">
          <Projects/>
          <Task/>
        </div>

        <div className="md:w-[33%] w-[90%] rounded-2xl bg-slate-50 flex flex-col gap-8 p-5">
          <Calender/>
          <TaskHistory/>
        </div>
      </div>

    </div>

  </div>;
}

export default App;
