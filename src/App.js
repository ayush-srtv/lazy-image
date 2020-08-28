import React from "react";
import Image from "./components/lazy-image";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Image src="https://images.unsplash.com/photo-1587115507733-b0ed701aa7ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
