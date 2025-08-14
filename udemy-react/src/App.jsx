import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export const App = () => {
  const onClickButton = () => {
    alert("clicked");
  };
  const contentStyle = {
    color: "blue",
    fontSize: "20px", // font-sizeとは書かない。キャメルケースで書く。JavaScriptのDOM操作の際のclassNameのような書き方に似ている。
  };
  
  return (
    <>
      <h1 style = {{color: "red"}}>こんにちは！</h1>
      <p style = {contentStyle}>お元気ですか？</p>
      <button onClick = {onClickButton}>Click me</button>
    </>
  );  
};
