import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Finishing = () => {
  const { billing, monthly, onlineService, storage, profile } =
    useContext(AppContext);

  let planPrice;

  if (billing === "Arcade") {
    planPrice = monthly ? 9 : 90;
  } else if (billing === "Advanced") {
    planPrice = monthly ? 12 : 120;
  } else if (billing === "Pro") {
    planPrice = monthly ? 15 : 150;
  }

  const onlineServicePrice = monthly ? 1 : 10;
  const storagePrice = monthly ? 2 : 20;
  const profilePrice = monthly ? 2 : 20;

  const total =
    planPrice +
    (onlineService ? onlineServicePrice : 0) +
    (storage ? storagePrice : 0) +
    (profile ? profilePrice : 0);

  return (
    <div>
      <main className="w-[90%] mx-auto bg-white p-5 pb-8 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] sm:shadow-none">
        <section>
          <h1 className="text-2xl font-bold text-blue950">Finishing up</h1>
          <p className="text-grey500 my-3 text-sm pr-10">
            Double-check everything looks OK before confirming.
          </p>
        </section>
        <section>
          <div className="bg-grey500/10 p-3 text-sm rounded-md my-5">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-blue950">
                  {billing}
                  {monthly ? " (Monthly)" : " (Yearly)"}
                </p>
                <p className="text-grey500 cursor-pointer">Change</p>
              </div>
              <div>
                <p className="font-bold text-blue950">
                  ${planPrice}/{monthly ? "mo" : "yr"}
                </p>
              </div>
            </div>
            <div className="bg-grey500 h-[0.5px] w-full my-3"></div>
            {onlineService && (
              <div className="flex justify-between">
                <p className="text-grey500">Online service</p>
                <p>
                  +${onlineServicePrice}/{monthly ? "mo" : "yr"}
                </p>
              </div>
            )}
            {storage && (
              <div className="my-3 flex justify-between items-center">
                <p className="text-grey500">Larger storage</p>
                <p>
                  +${storagePrice}/{monthly ? "mo" : "yr"}
                </p>
              </div>
            )}
            {profile && (
              <div className="my-3 flex justify-between items-center">
                <p className="text-grey500">Customizable profile</p>
                <p>
                  +${profilePrice}/{monthly ? "mo" : "yr"}
                </p>
              </div>
            )}
          </div>

          <section className="flex justify-between items-center px-2">
            <p className="text-sm text-grey500">
              Total {monthly ? "(per month)" : "(per year)"}
            </p>
            <p className="text-lg font-bold text-purple600">
              +${total}/{monthly ? "mo" : "yr"}
            </p>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Finishing;
