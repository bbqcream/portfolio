import React from "react";
import { ProjectBoxProps } from "./projectBoxProps";

const ProjectBox = ({ img, title, detail, link }: ProjectBoxProps) => {
    return (
        <div className="bg-white text-black p-5 flex flex-col gap-3 border rounded-2xl">
            <a href={link} target="_blank">
                <img src={img} className="w-70" />
            </a>
            <div>
                <div className="font-bold text-4xl">{title}</div>
                <div className="font-medium">{detail}</div>
            </div>
        </div>
    );
};

export default ProjectBox;
