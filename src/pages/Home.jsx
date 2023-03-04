import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BiTimeFive } from "react-icons/bi";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
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
];

const Home = () => {
  return (
    <div>
      <div className="searchDiv grid gap-10 bg-gray-100 rounded-[10px] p-[3rem] md:w-auto sm:w-[640px]">
        <form action="">
          <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-gray-400">
            <div className="flex gap-2 items-center">
              <AiOutlineSearch className="text-[25px] cursor-pointer" />
              <input
                type="text"
                className="bg-transparent text-blue-900 focus:outline-none w-[100%] "
                placeholder="Search Job Here..."
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor cursor-pointer" />
            </div>

            <div className="flex gap-2 items-center">
              <BsHouseDoor className="text-[25px] cursor-pointer" />
              <input
                type="text"
                className="bg-transparent text-blue-900 focus:outline-none w-[100%] "
                placeholder="Search by Company..."
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor cursor-pointer" />
            </div>

            <div className="flex gap-2 items-center">
              <CiLocationOn className="text-[25px] cursor-pointer" />
              <input
                type="text"
                className="bg-transparent text-blue-900 focus:outline-none w-[100%] "
                placeholder="Search by location..."
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor cursor-pointer" />
            </div>

            <button className="bg-blue-600 h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
              Search
            </button>
          </div>
        </form>

        <div className="secDiv flex items-center gap-10 justify-center">
          <div className="singleSearch flex items-center gap-2">
            <label
              htmlFor="relevance"
              className="text-[#808080] font-semibold "
            >
              Sort:
            </label>
            <select
              name=""
              id="relevance "
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts With</option>
              <option value="">Contains</option>
            </select>
          </div>

          <div className="singleSearch flex items-center gap-2">
            <label
              htmlFor="type"
              className="text-[#808080] font-semibold items-center"
            >
              Type:
            </label>
            <select
              name=""
              id="relevance "
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Full-time</option>
              <option value="">Remote</option>
              <option value="">Contract</option>
              <option value="">Part-time</option>
            </select>
          </div>

          <div className="singleSearch flex items-center gap-2">
            <label
              htmlFor="level"
              className="text-[#808080] font-semibold items-center"
            >
              Level:
            </label>
            <select
              name=""
              id="relevance "
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Senior</option>
              <option value="">Beginner</option>
              <option value="">Intermediate</option>
              <option value="">Advocate</option>
            </select>
          </div>

          <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="flex-col items-center justify-center text-gray-800 text-center">
          <div class="flex items-center justify-center">
            <div class="h-36 w-[90%] flex items-center justify-center md:text-4xl text-2xl lg:text-5xl font-bold ">
              Placement Report
            </div>
          </div>

          <div class="flex">
            <div class="flex md:flex-row flex-col p-4 space-x-4 space-y-2 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
              <div class=" w-[70%] md:w-1/2 bg-gray-200 py-10 rounded-2xl flex items-center justify-center ml-4">
                <div class="flex-col  items-center px-0 md:px-6">
                  <div class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400  bg-clip-text text-transparent">
                    98%
                  </div>
                  <div class="text-md mt-8 font-bold text-gray-800">
                    No of people got placed in top Companies
                  </div>
                </div>
              </div>
              <div class=" w-[70%] md:w-1/2 bg-gray-200 py-10 rounded-2xl flex items-center justify-center ml-4">
                <div class="flex-col  items-center px-0 md:px-6">
                  <div class="text-5xl font-bold bg-gradient-to-l from-fuchsia-500 to-orange-500  bg-clip-text text-transparent">
                    2%
                  </div>
                  <div class="text-md mt-8 font-bold text-gray-800">
                   No of people placed in Government sector
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className=" w-full card mt-[2rem] flex justify-between bg-gray-100 p-[5rem] rounded-[10px]">
          <div>
            <h1 className="text-blueColor text-[30px] font-bold ">
              Ready to Switch a career
            </h1>
            <h2 className="text-textColor text-[25px] font-bold">
              Lets get started!
            </h2>
          </div>
          <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
            Get Started
          </button>
        </div>
      </div>
      <div className="footer p-[5rem] mb-4 bg-blue-600 rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-center justify-center">
        <div>
          <div className="logoDiv">
            <h1 className="logo text-[25px] text-white pb-[1.5rem] ">
              <strong>Job</strong>Search
            </h1>
          </div>

          <p className="text-white pb-[13px] opacity-70 leading-7">
            We always make our seekers and companies find the best jobs and
            employers find the best candidates.
          </p>
        </div>

        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Company
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              About Us
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Features
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
          </div>
        </div>

        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Resources
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Account
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Support
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Feedback
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Contact Us
            </li>
          </div>
        </div>

        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Support
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Events
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">Promo</li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Request Demo
            </li>
            <li className="text-white opacity-[.7] hover:opacity-[1]">
              Careers
            </li>
          </div>
        </div>

        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Contact Info
          </span>

          <div className="grid gap-3">
            <small className="text-[14px] text-white">
              jobinfo@outlook.com
            </small>
            <div className="icons flex gap-4 py-[1rem] ">
              <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-600 cursor-pointer" />
              <BsFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-600 cursor-pointer" />
              <AiOutlineTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
