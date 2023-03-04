import React from "react";
import { BiTimeFive } from "react-icons/bi";
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.png";
import p4 from "../img/p4.jpeg";
import p5 from "../img/p5.jpeg";
import p6 from "../img/p6.png";
import p8 from "../img/p8.png";
import p9 from "../img/p9.png";

const Data = [
  {
    id: 1,
    image: p1,
    title: "Web Developer",
    time: "Now",
    location: "Bangalore",
    desc: "We are looking for a React developer",
    company: "PieDroid Private Ltd.",
  },
  {
    id: 2,
    image: p2,
    title: "Software Developer",
    time: "Now",
    location: "Hebbal",
    desc: "We are looking for a developer good in python",
    company: "Global Private Ltd.",
  },
  {
    id: 3,
    image: p3,
    title: " App Developer",
    time: "Now",
    location: "Yelahanka",
    desc: "We are looking for a Senior Product Designer",
    company: "XEN Private Ltd.",
  },
  {
    id: 4,
    image: p4,
    title: "Creative Designer",
    time: "Now",
    location: "Bangalore",
    desc: "We are looking for a Senior Product Designer for our team",
    company: "XEN Private Ltd.",
  },
  {
    id: 5,
    image: p5,
    title: "UI/UX Designer",
    time: "Now",
    location: "Bangalore",
    desc: "We are looking for a Senior Product Designer for our team",
    company: "DCharm Companies.",
  },
  {
    id: 6,
    image: p6,
    title: "Backend Developer",
    time: "Now",
    location: "Bangalore",
    desc: "We are looking for a backend developer",
    company: "CISCO Limited.",
  },
  {
    id: 7,
    image: p8,
    title: "Creative Director",
    time: "Now",
    location: "Halsur",
    desc: "We are looking for a Senior Product Designer",
    company: "Qatar Limited.",
  },
  {
    id: 8,
    image: p9,
    title: "Software Developer",
    time: "Now",
    location: "Bangalore",
    desc: "We are looking for a Software developer",
    company: "Rupa Private Limited.",
  },
];

const Jobs = () => {
  return (
    <div >
      <div className="searchDiv grid gap-10 bg-gray-100 rounded-[10px] p-[3rem] items-center pt-3 " >
        <h1 className="items-center font-bold">Job Search</h1>

        <form className="max-w-[400px] w-full mx-auto bg-white p-4 ">
          <h1 className="text-[#808080] font-semibold">Search</h1>
          <div className="flex items-center">
          <input
            type="text"
            placeholder="Job description...."
            className="bg-gray-100 text-blue-500 focus:outline-none w-[30%] border border-black rounded-sm "
          />
          </div>
         
          <div className="singleSearch flex items-center pt-2">
            <label
              htmlFor="relevance"
              className="text-[#808080] font-semibold "
            >
              Status:
            </label>
            <select
              name=""
              id="relevance "
              className="bg-white rounded-[3px] px-4 py-1 "
            >
              <option value="">all</option>
              <option value="">interview</option>
              <option value="">declined</option>
              <option value="">pending</option>
            </select>

            <div className="secDiv flex items-center gap-10 pt">
              <div className="singleSearch flex items-center gap-2">
                <label
                  htmlFor="relevance"
                  className="text-[#808080] font-semibold "
                >
                  Type:
                </label>
                <select
                  name=""
                  id="relevance "
                  className="bg-white rounded-[3px] px-4 py-1 pt-2"
                >
                  <option value="">Full-time</option>
                  <option value="">remote</option>
                  <option value="">part-contract</option>
                  <option value="">part-time</option>
                </select>
              </div>
            </div>
          </div>
          <button className="border-[2px] rounded-[10px]  p-[8px] w-[30%] text-[14px]  hover:bg-red-200 mx-auto justify-center">
            Clear Filters
          </button>
        </form>
      </div>

      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-500 shadow-lg shadow-gray-200 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company logo" className="w-[30%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
