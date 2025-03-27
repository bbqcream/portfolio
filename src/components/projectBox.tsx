import React from "react";
import { ProjectBoxProps } from "./projectBoxProps";

const ProjectBox = ({ img, title, detail, link }: ProjectBoxProps) => {
    return (
        <a href={link} target="_blank">
            <div className="box">
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
