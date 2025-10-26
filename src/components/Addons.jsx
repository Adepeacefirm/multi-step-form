import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Addons = () => {
  const {
    monthly,
    onlineService,
    setOnlineService,
    storage,
    setStorage,
    profile,
    setProfile,
  } = useContext(AppContext);
  return (
    <div>
      <main className="w-[90%] mx-auto bg-white p-5 pb-8 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] sm:shadow-none">
        <section>
          <h1 className="text-2xl font-bold text-blue950">Pick add-ons</h1>
          <p className="text-grey500 my-3 text-sm pr-10">
            Add-ons help enhance your gaming experience.
          </p>
        </section>
        <section className="flex flex-col items-center gap-3 lg:mt-8">
          <div
            onClick={() => setOnlineService((prev) => !prev)}
            className={`flex w-full items-center gap-4 border-2 p-3 rounded-md ${
              onlineService ? "border-purple600" : "border-purple200"
            }`}
          >
            <div
              className={`w-6 h-6 flex items-center border-2 rounded-sm border-purple200 justify-center ${
                onlineService ? "bg-purple600" : "bg-transparent"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6 text-white p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="w-full">
              <p className="text-sm text-blue950 font-medium">Online service</p>
              <p className="text-xs w-full text-grey500">
                Access to multiplayer games
              </p>
            </div>
            <div>
              <p className="text-purple600">{monthly ? "+$1/mo" : "+$10/yr"}</p>
            </div>
          </div>
          <div
            onClick={() => setStorage((prev) => !prev)}
            className={`flex w-full items-center gap-7 border-2 p-3 rounded-md ${
              storage ? "border-purple600" : "border-purple200"
            }`}
          >
            <div
              className={`w-6 h-6 rounde-lg flex items-center border-2 rounded-sm border-purple200 justify-center ${
                storage ? "bg-purple600" : "bg-transparent"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6 text-white p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="w-full">
              <p className="text-sm text-blue950 font-medium">Larger storage</p>
              <p className="text-xs text-grey500">Extra 1TB of cloud save</p>
            </div>
            <div>
              <p className="text-purple600">{monthly ? "+$2/mo" : "+$20/yr"}</p>
            </div>
          </div>
          <div
            onClick={() => setProfile((prev) => !prev)}
            className={`flex w-full items-center gap-7 border-2 p-3 rounded-md ${
              profile ? "border-purple600" : "border-purple200"
            }`}
          >
            <div
              className={`w-6 h-6 rounde-lg flex items-center border-2 rounded-sm border-purple200 justify-center ${
                profile ? "bg-purple600" : "bg-transparent"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6 text-white p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="w-full">
              <p className="text-sm  text-blue950 font-medium w-full">
                Customizable profile
              </p>
              <p className="text-xs text-grey500">
                Custom theme on your profile
              </p>
            </div>
            <div>
              <p className="text-purple600">{monthly ? "+$2/mo" : "+$20/yr"}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Addons;
