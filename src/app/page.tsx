import HistoryOne from "@/components/historyOne";
import Contact from "@/components/contact";
import HistoryTwo from "@/components/historyTwo";
import Intro from "@/components/intro";
import Stacks from "@/components/stacks";
import Project from "@/components/project";

export default function Home() {
    return (
        <div className="scroll-smooth">
            <Intro />
            <Contact />
            <HistoryOne />
            <HistoryTwo />
            <Stacks />
            <Project />
        </div>
    );
}
