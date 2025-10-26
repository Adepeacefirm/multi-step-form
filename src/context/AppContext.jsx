import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [monthly, setMonthly] = useState(true);
  const stepInfo = [
    {
      stage: 1,
      number: "STEP 1",
      name: "YOUR INFO",
    },
    {
      stage: 2,
      number: "STEP 2",
      name: "SELECT PLAN",
    },
    {
      stage: 3,
      number: "STEP 3",
      name: "ADD-ONS",
    },
    {
      stage: 4,
      number: "STEP 4",
      name: "SUMMARY",
    },
  ];

  const billingPlan = [
    {
      name: "Arcade",
      monthlyPrice: "$9/mo",
      yearlyPrice: "$90/yr",
      image: "/icon-arcade.svg",
    },
    {
      name: "Advanced",
      monthlyPrice: "$12/mo",
      yearlyPrice: "$120/yr",
      image: "/icon-advanced.svg",
    },
    {
      name: "Pro",
      monthlyPrice: "$15/mo",
      yearlyPrice: "$150/yr",
      image: "/icon-pro.svg",
    },
  ];

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(
    "This field is required"
  );

  const errorMessage = "This field is required";

  const [onlineService, setOnlineService] = useState(true);
  const [storage, setStorage] = useState(true);
  const [profile, setProfile] = useState(false);

  const [billing, setBilling] = useState("Arcade");

  const validatePersonal = () => {
    let valid = true;

    if (!name.trim()) {
      setNameError(true);
      valid = false;
    } else setNameError(false);

    if (!email.trim()) {
      setEmailError(true);
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage("Invalid email format")
      valid = false;
    } else setEmailError(false);

    if (!phone.trim()) {
      setPhoneError(true);
      valid = false;
    } else setPhoneError(false);

    return valid;
  };

  const value = {
    stepInfo,
    currentStep,
    setCurrentStep,
    monthly,
    setMonthly,
    billingPlan,
    billing,
    setBilling,
    onlineService,
    setOnlineService,
    storage,
    setStorage,
    profile,
    setProfile,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    errorMessage,
    nameError,
    setNameError,
    emailError,
    setEmailError,
    phoneError,
    setPhoneError,
    validatePersonal,
    emailErrorMessage,
    setEmailErrorMessage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
