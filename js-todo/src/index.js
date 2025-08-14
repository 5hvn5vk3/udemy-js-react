const onClickAdd = () => {
    // テキストボックスの値を取得
    const inputText = document.getElementById("add-text").value;
    // テキストボックスの値をクリア
    document.getElementById("add-text").value = "";

    // 未完了のTODOリストを作成
    createIncompleteList(inputText);
};

// 渡された引数をもとに未完了のTODOリストを作成する関数
const createIncompleteList = (todo) => {
      // liを作成
      const li = document.createElement("li");
    
      // divを作成
      const div = document.createElement("div");
      div.className = "list-row";
      
      // pを作成
      const p = document.createElement("p");
      p.className = "todo-item";
      p.innerText = todo;
  
      // 完了ボタンを作成
      const completeButton = document.createElement("button");
      completeButton.innerText = "完了";
      completeButton.addEventListener("click",() =>{
          // 押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
          const moveTarget = completeButton.closest("li");
          completeButton.nextElementSibling.remove(); // 削除ボタンを削除
          completeButton.remove(); // 完了ボタンを削除
          // 戻すボタンを生成してdivタグ配下に設定
          const backButton = document.createElement("button");
          backButton.innerText = "戻す";

          backButton.addEventListener("click",() =>{
            // TODOの内容を取得し、未完了リストに追加
            const todoText = backButton.previousElementSibling.innerText;
            createIncompleteList(todoText);
            // 完了リストから削除
            backButton.closest("li").remove();
          });
          
          moveTarget.firstElementChild.appendChild(backButton);
          // 完了リストに移動
          document.getElementById("complete-list").appendChild(moveTarget); // moveTargetは参照を持っているので、appendChildで完了リストに追加できる
      })
  
      // 削除ボタンを作成
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "削除";
      deleteButton.addEventListener("click",() => {
          // 押された削除ボタンの親にあるliタグを未完了リストから削除
          const deleteTarget = deleteButton.closest("li");
          document.getElementById("incomplete-list").removeChild(deleteTarget);
      });
      
      div.appendChild(p);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);
      li.appendChild(div);
  
      // 未完了リストに追加
      document.getElementById("incomplete-list").appendChild(li); 
};

document.getElementById("add-button").addEventListener("click", onClickAdd);