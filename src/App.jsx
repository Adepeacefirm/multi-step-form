import React from "react";

import Home from "./pages/Home";
import AppContextProvider from "./context/AppContext";

const App = () => {
  return (
    <div>
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </div>
  );
};

export default App;
