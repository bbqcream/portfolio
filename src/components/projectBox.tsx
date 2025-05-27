import { ProjectBoxProps } from "./projectBoxProps";

const ProjectBox = ({ img, title, detail, link }: ProjectBoxProps) => {
  return (
    <a href={link} target="_blank" className="w-full">
      <div className="box sm:h-80 sm:w-80 h-60 w-full">
        <img src={img} className="sm:w-70 sm:h-40 w-30 h-40" />
        <div>
          <div className="font-bold sm:text-4xl text-3xl whitespace-normal break-words">
            {title}
          </div>
          <div className="font-medium whitespace-normal break-words">
            {detail}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectBox;
