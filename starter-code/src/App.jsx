import React from "react";

// CUSTOM COMPONENTS
// import JSXExpressions from "./JSXExpressions";
// import User from "./components/User";
// import HandleStaticAssets from "./HandleStaticAssets";
import IdCard from "./components/IdCard";

import './styles/index.css';

export default function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}
