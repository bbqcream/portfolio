import HistoryOne from "@/components/historyOne";
import Contact from "@/components/contact";
import HistoryTwo from "@/components/historyTwo";
import Intro from "@/components/intro";
import Stacks from "@/components/stacks";
import Project from "@/components/project";
import Beep from "./pages/beep";

export default function Home() {
    return (
        <div className="scroll-smooth mw-[100vw] h-[100vh]">
            <Intro />
            <Contact />
            <HistoryOne />
            <HistoryTwo />
            <Stacks />
            <Project />
            <Beep />
        </div>
    );
}
