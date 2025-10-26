import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Plans = () => {
  const { monthly, setMonthly, billingPlan, billing, setBilling } =
    useContext(AppContext);

  return (
    <div>
      <main className="w-[90%] mx-auto bg-white p-5 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] sm:shadow-none">
        <section>
          <h1 className="text-2xl font-bold text-blue950">Select your plan</h1>
          <p className="text-grey500 my-3 text-sm pr-10 sm:pr-0">
            You have the option of monthly or yearly billing.
          </p>
        </section>
        <section>
          <div className="flex flex-col lg:flex-row gap-3 my-5">
            {billingPlan.map((item) => (
              <div
                onClick={() => setBilling(item.name)}
                key={item.name}
                className={`flex lg:flex-col items-center lg:items-start gap-3 text-sm border-2 p-3 lg:p-7 rounded-lg ${
                  billing === item.name
                    ? "border-purple600"
                    : "border-purple200"
                }`}
              >
                <div>
                  <img className="w-[90%]" src={item.image} alt={item.name} />
                </div>
                <div className="w-full flex flex-col sm:flex-row lg:flex-col sm:items-center gap-1 sm:justify-between">
                  <div className="lg:mr-auto">
                    <p className="text-blue950">{item.name}</p>
                    <p className="text-xs text-grey500">
                      {monthly ? item.monthlyPrice : item.yearlyPrice}
                    </p>
                  </div>
                  {!monthly && (
                    <p className="text-xs text-blue950">2 months free</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <div
          onClick={() => setMonthly((prev) => !prev)}
          className="flex items-center justify-center mt-10 mb-5 gap-5"
        >
          <p>Monthly</p>
          <div className="bg-blue950 w-10 h-5 rounded-2xl flex px-1 justify-center items-center">
            <div
              className={`bg-white w-3 h-3 rounded-full ${
                monthly ? "mr-auto" : "ml-auto"
              }`}
            ></div>
          </div>
          <p>Yearly</p>
        </div>
      </main>
    </div>
  );
};

export default Plans;
