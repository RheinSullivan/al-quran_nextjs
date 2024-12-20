import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col text-white justify-center items-center text-xs md:text-base text-center pl-16 md:pl-16 pt-10">
      <div className="bg-dark rounded-t-full w-[85%] py-5 border border-b-0 border-gray-600">
        <p>Website ini masih dalam perkembangan, Terimakasih</p>
        <h1>
          Copyright{" "}
          <a href="https://rheinsullivan.web.id/" target="_blank" className="underline">
            Rhein Sullivan
          </a>{" "}
          & 7TogkID
        </h1>
        <p>Beta v1.0.2</p>
      </div>
    </footer>
  );
}
