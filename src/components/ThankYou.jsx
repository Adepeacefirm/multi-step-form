import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ThankYou = () => {
  const { email } = useContext(AppContext);
  return (
    <div>
      <main className="w-[90%] mx-auto bg-white p-5 pt-10 pb-8 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] sm:shadow-none">
        <div>
          <img
            className="mx-auto w-[12%] sm:w-[25%]"
            src="/icon-thank-you.svg"
            alt="thank you"
          />
        </div>
        <p className="text-center text-blue950 text-xl sm:text-2xl font-bold my-3">
          Thank you!
        </p>
        <p className="text-center text-grey500">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at {email}.
        </p>
      </main>
    </div>
  );
};

export default ThankYou;
