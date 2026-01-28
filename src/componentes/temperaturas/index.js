import { createContext, useContext, useState } from "react";

const TemperatureContext = createContext();

export function TemperatureProvider({ children }) {
  const [unit, setUnit] = useState("C"); // C ou F

  function toggleUnit() {
    setUnit(prev => (prev === "C" ? "F" : "C"));
  }

  function convertTemp(tempCelsius) {
    if (unit === "F") {
      return (tempCelsius * 9) / 5 + 32;
    }
    return tempCelsius;
  }

  return (
    <TemperatureContext.Provider value={{ unit, toggleUnit, convertTemp }}>
      {children}
    </TemperatureContext.Provider>
  );
}

export function useTemperature() {
  return useContext(TemperatureContext);
}
