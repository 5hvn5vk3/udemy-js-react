import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Todo.css";



export const Todo = () => {

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力"></input>
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li>
            <p className="todo-item">TODOです</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <p className="todo-item">TODOです</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <li>
            <p className="todo-item">TODOでした</p>
            <button>戻す</button>
          </li>
          <li>
            <p className="todo-item">TODOでした</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );  
};
