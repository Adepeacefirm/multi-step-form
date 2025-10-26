import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Personal = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    nameError,
    setNameError,
    emailError,
    setEmailError,
    phoneError,
    setPhoneError,
    errorMessage,
    emailErrorMessage,
  } = useContext(AppContext);
  return (
    <div>
      <main className="w-[90%] mx-auto bg-white p-5 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)] sm:shadow-none">
        <section>
          <h1 className="text-2xl sm:text-3xl font-bold text-blue950">
            Personal info
          </h1>
          <p className="text-grey500 my-3 lg:text-sm">
            Please provide your name, email address, and phone number.
          </p>
        </section>
        <section className="text-sm my-5">
          <div>
            <label
              className="text-blue950 font-medium flex items-center justify-between"
              htmlFor="name"
            >
              <span>Name</span>
              {nameError && <span className="text-red500">{errorMessage}</span>}
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (name.trim()) {
                  setNameError(false);
                }
              }}
              className="border border-grey500 rounded-md block w-full p-2 sm:p-3 my-1 text-blue950 font-medium placeholder:font-medium placeholder:text-grey500"
              type="text"
              name="input"
              placeholder="e.g Stephen King"
            />
          </div>
          <div className="my-4">
            <label
              className="text-blue950 font-medium flex items-center justify-between"
              htmlFor="email"
            >
              <span>Email Address</span>
              {emailError && (
                <span className="text-red500">{emailErrorMessage}</span>
              )}
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (email.trim()) {
                  setEmailError(false);
                }
              }}
              className="border border-gray500 rounded-md w-full block p-2 sm:p-3 my-1 text-blue950 font-medium placeholder:font-medium placeholder:text-grey500"
              type="text"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div>
            <label
              className="text-blue950 font-medium flex items-center justify-between"
              htmlFor="phone"
            >
              <span>Phone Number</span>
              {phoneError && (
                <span className="text-red500">{errorMessage}</span>
              )}
            </label>
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (phone.trim()) {
                  setPhoneError(false);
                }
              }}
              className="border border-gray500 rounded-md w-full block p-2 sm:p-3 my-1 text-blue950 font-medium placeholder:font-medium placeholder:text-grey500"
              type="number"
              name="phone"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Personal;
