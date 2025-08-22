import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ColorfulMessage } from "./components/ColorfulMessage";



export const App = () => {
  console.log("--App--"); // 開発時（StrictMode）はレンダリングが2回走る
  const [num, setNum] = useState(0); // フックは一番上でしか呼べない
  const [isShowFace, setIsShowFace] = useState(true);

  const onClickCountUp = () => {
    setNum((prev) => prev + 1); // 関数を渡すと今の引数の値が設定できる。次の行と合わせて2ずつ増えていくような動きをさせることができる。
    // setNum((prev) => prev + 1);
  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };


  useEffect(() => {
    console.log("--useEffect--");
    if (num > 0) {
      if (num % 3 === 0){
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      };
    };
  }, [num]);

  


  return (
    <>
      <h1 style = {{color: "red"}}>こんにちは！</h1>
      <ColorfulMessage color = "blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color = "green">元気です！</ColorfulMessage>
      <button onClick = {onClickCountUp}>Click me</button>
      <p>{num}</p>

      <button onClick ={onClickToggle}>on/off</button>
      {isShowFace && <p>（´・ω・`）</p>}
    </>
  );  
};
