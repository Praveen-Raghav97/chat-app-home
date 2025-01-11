import Image from "next/image";
import { Header } from "./Header";
import Link from "next/link";

export default function Developer() {
  return (
    <section id="about" className="about py-12">
      <div className="container mx-auto px-6">
        {/* Heading */}
       <Header heading={"Developed By "}/>

        <div className="row flex flex-col lg:flex-row items-center lg:gap-12">
          {/* Developer Image */}
          <div className="image hover:animate-pulse cursor-pointer flex-shrink-0 w-full lg:w-1/3 text-center mb-8 lg:mb-0">
            <Image
              src="/developer.png" // Replace with the actual path to your image
              alt="Developer"
              width={300}
              height={300}
              className="tilt rounded-md shadow-lg"
              draggable="false"
            />
          </div>
          

          {/* Content Section */}
          <div className="content lg:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">
              I'm Praveen
            </h3>
            <span className="tag inline-block bg-purple-600 text-purple-100 text-sm px-3 py-2 rounded-full mb-4">
              Full Stack Developer
            </span>

            <p className="text-gray-200 mb-6">
              I am a Web Developer based in Aligarh, India. I am very passionate
              about improving my coding skills & developing applications &
              websites. I build Websites using MERN Stack. Working for myself
              to improve my skills. Love to build Full-Stack clones.
            </p>

            {/* Information Boxes */}
            <div className="box-container grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="box">
                <p className="text-gray-200">
                  <span className="font-semibold">Email:</span>{" "}
                  rishavthakur9027@gmail.com
                </p>
                <p className="text-gray-200">
                  <span className="font-semibold">Place:</span> Uttar Pradesh,
                  India - 202002
                </p>
              </div>
            </div>

            {/* Resume Button */}
            <div className="resumebtn flex gap-4">
              <Link
                href="https://www.linkedin.com/in/praveen-raghav"
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center bg-purple-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600"
              >
                <span>Contact</span>
                <i className="fas fa-chevron-right ml-2"></i>
              </Link>
              <Link
                href="https://praveen-raghav.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center bg-purple-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600"
              >
                <span>Website</span>
                <i className="fas fa-chevron-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
