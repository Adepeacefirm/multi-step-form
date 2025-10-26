import React, { useContext, useState } from "react";
import Personal from "../components/Personal";
import Plans from "../components/Plans";
import Addons from "../components/Addons";
import Finishing from "../components/Finishing";
import ThankYou from "../components/ThankYou";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { stepInfo, currentStep, setCurrentStep, validatePersonal } =
    useContext(AppContext);

  return (
    <main className="sm:flex sm:justify-center sm:my-10 sm:p-8 sm:bg-white sm:w-[90%] lg:w-[70%] sm:mx-auto sm:rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.2)]">
      <section className='bg-[url("/bg-sidebar-mobile.svg")] sm:bg-[url("/bg-sidebar-desktop.svg")] sm:w-[40%] lg:w-[50%] sm:rounded-2xl bg-center bg-cover pt-7  pb-25'>
        <div className="flex sm:flex-col items-center sm:items-start sm:ml-8 gap-5 justify-center">
          {stepInfo.map((item, index) => (
            <button
              onClick={() => {
                setCurrentStep(item.stage);
              }}
              className="flex items-center gap-3"
              key={index}
            >
              <div
                className={` p-2 rounded-full flex justify-center border border-white items-center font-medium w-7 h-7 ${
                  currentStep === item.stage ? "bg-blue200" : "bg-transparent"
                }`}
              >
                <span
                  className={`text-xs ${
                    currentStep === item.stage ? "text-blue950" : "text-white"
                  }`}
                >
                  {item.stage}
                </span>
              </div>
              <div className="hidden sm:flex sm:flex-col text-start">
                <p className="text-blue300 text-sm">{item.number}</p>
                <p className="text-white font-medium">{item.name}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
      <section className="-mt-17 sm:mt-0 lg:w-full">
        {currentStep === 1 && <Personal />}
        {currentStep === 2 && <Plans />}
        {currentStep === 3 && <Addons />}
        {currentStep === 4 && <Finishing />}
        {currentStep === 5 && <ThankYou />}
        <div
          className={`flex sm:w-[90%] justify-between p-5 mx-auto mt-20 sm:mt-10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] sm:shadow-none ${
            currentStep === 5 && "hidden"
          }`}
        >
          <button
            onClick={() => {
              if (currentStep > 1) setCurrentStep(currentStep - 1);
            }}
            className={`text-grey500 ${
              currentStep > 1 && currentStep < 5 ? "block" : "hidden"
            }`}
          >
            Go Back
          </button>
          <button
            onClick={() => {
              if (currentStep === 1) {
                if (validatePersonal()) {
                  setCurrentStep(currentStep + 1);
                }
              } else {
                setCurrentStep(currentStep + 1);
              }
            }}
            className={`text-white text-sm py-2 px-4 rounded-md ${
              currentStep === 4 ? "bg-purple600" : "bg-blue950"
            } ${currentStep === 1 && "ml-auto"}`}
          >
            {currentStep === 4 ? "Confirm" : "Next Step"}
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
