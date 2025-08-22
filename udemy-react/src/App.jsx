import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ColorfulMessage } from "./components/ColorfulMessage";



export const App = () => {
  console.log("--App--"); // 開発時（StrictMode）はレンダリングが2回走る
  const [num, setNum] = useState(0); // フックは一番上でしか呼べない
  const [isSHowFace, setIsSHowFace] = useState(true);

  const onClickCountUp = () => {
    setNum((prev) => prev + 1); // 関数を渡すと今の引数の値が設定できる。次の行と合わせて2ずつ増えていくような動きをさせることができる。
    // setNum((prev) => prev + 1);
  };

  const onClickToggle = () => {
    setIsSHowFace(!isSHowFace);
  };


  if (num % 3 === 0){
    isShowFace || setIsSHowFace(true); // isShowFace（左側）がtureのときに処理を終了して右側に進む
  } else {
    isShowFace && setIsSHowFace(false);
  };



  return (
    <>
      <h1 style = {{color: "red"}}>こんにちは！</h1>
      <ColorfulMessage color = "blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color = "green">元気です！</ColorfulMessage>
      <button onClick = {onClickCountUp}>Click me</button>
      <p>{num}</p>

      <button onClick ={onClickToggle}>on/off</button>
      {isSHowFace && <p>（´・ω・`）</p>}
    </>
  );  
};
