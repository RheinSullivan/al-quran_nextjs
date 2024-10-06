import React from "react";

export default function Shalat() {
  return (
    <section id="prayer-times">
      <main className="pt-32 py-10">
        <div className="ml-20">
          <div className="md:w-[1000px] my-36 mx-auto text-white">
            <div className="bg-dark mb-6 border-2 rounded-lg border-gray-400">
              <ul className="flex">
                <li className="relative w-60 p-4 text-center last:rounded-r-none font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:bg-green-500 rounded-md hover:text-black">
                  <span className="text">Shalat times.title</span>
                </li>
                <li className="relative w-60 p-4 text-center last:rounded-r-none font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:bg-green-500 rounded-md hover:text-black">
                  <span className="text">Shalat times.title</span>
                </li>
                <li className="relative w-60 p-4 text-center last:rounded-r-none font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:bg-green-500 rounded-md hover:text-black">
                  <span className="text">Shalat times.title</span>
                </li>
                <li className="relative w-60 p-4 text-center last:rounded-r-none font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:bg-green-500 rounded-md hover:text-black">
                  <span className="text">Shalat times.title</span>
                </li>
                <li className="relative w-60 p-4 text-center last:rounded-r-none font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:bg-green-500 rounded-md hover:text-black">
                  <span className="text">Shalat times.title</span>
                </li>
              </ul>
            </div>
            <div className="content">
              <div className="tab_wrap text-end">
                <h1>intentionArab.subTitle</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}