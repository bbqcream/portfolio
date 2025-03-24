import HistoryOne from "@/components/\bhistoryone";
import Contact from "@/components/contact";
import HistoryTwo from "@/components/historyTwo";
import Intro from "@/components/intro";

export default function Home() {
    return (
        <div className="scroll-smooth">
            <Intro />
            <Contact />
            <HistoryOne />
            <HistoryTwo />
        </div>
    );
}
