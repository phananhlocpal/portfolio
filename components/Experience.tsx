import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/rosen-logo.svg"}
              height={30}
              width={30}
              alt={"Phan Anh Loc - Software Engineer"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Rosenxt Group |</span> Software Developer Intern
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Nov 2024 - Present, Vietnam
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          At Rosenxt Group, I am working as a Software Developer Intern. My role involves developing 
          and maintaining web applications using Angular, ASP.NET Core API and Azure. 
          <br />
          <br />
          I am responsible for creating responsive and user-friendly web pages that provide an excellent user experience.
          I am also working on enhancing the performance of the web applications by optimizing the code
          and implementing best practices. I am gaining valuable experience in full-stack development
          and learning new technologies and tools to improve my skills. I am working closely with the
          development team to deliver high-quality software solutions that meet the client&apos;s requirements.
          I also use Azure DevOps for version control and project management. I am excited to be part of
          the Rosenxt Group team and contribute to the success of the company.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            ASP.NET Core 
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Angular
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Azure
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
