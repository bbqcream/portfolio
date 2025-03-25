import React from "react";
import { ProjectBoxProps } from "./projectBoxProps";

const ProjectBox = ({ img, title, detail, link }: ProjectBoxProps) => {
    return (
        <a href={link} target="_blank">
            <div className="bg-white text-black p-5 flex sm:flex-col sm:gap-3 gap-5 items-center border rounded-2xl">
                <img src={img} className="sm:w-70 w-30" />
                <div>
                    <div className="font-bold sm:text-4xl text-3xl">
                        {title}
                    </div>
                    <div className="font-medium">{detail}</div>
                </div>
            </div>
        </a>
    );
};

export default ProjectBox;
