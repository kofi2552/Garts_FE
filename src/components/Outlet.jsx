// import React from "react";
// import { useOutlet } from "react-router-dom";

// const Context = React.createContext();

// export function Outlet({ data }) {
//   const el = useOutlet();
//   return <Context.Provider value={data}>{el}</Context.Provider>;
// }

// export function useOutletContext() {
//   const context = React.useContext(Context);
//   if (!context) {
//     throw Error("Using context while not in an Outlet Provider");
//   }
//   return context;
// }
