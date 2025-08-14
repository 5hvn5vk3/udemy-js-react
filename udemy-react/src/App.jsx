import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickButton = () => {
    alert("clicked");
  };
  
  return (
    <>
      <h1 style = {{color: "red"}}>こんにちは！</h1>
      <ColorfulMessage color = "blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color = "green">元気です！</ColorfulMessage>
      <button onClick = {onClickButton}>Click me</button>
    </>
  );  
};
