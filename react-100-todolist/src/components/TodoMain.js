import { useState, useEffect } from "react";
import uuid from "react-uuid";
import moment from "moment";
import TodoList from "./TodoList";

const TodoMain = () => {
  /*
   buckList state 변수를 배열로 선언하기
   state 변수를  배열로 선언하여 사용할 경우
   표준 JS 코드에 있는 배열에 요소를 추가하는 함수를 사용할수 없다
   state 배열에 요소를 추가하는 경우는 setter 함수를 사용하는데
   이 함수가 작동되는 방식은
   기존의 배열을 새로운 배열로 복사하고, 요소를 추가한 후
   새로운 배열과 기존의 배열을 교환하는 방식으로 이루어진다

   */
  const [todoList, setTodoList] = useState(() => {
    /*
    현재 브라우저의 localStorage 에 BUCKELIST 이름으로
    데이터가 저장되어 있으면 데이터를 읽어서 JSOIN 데이터로
    변환 한 후 bucketList 를 생성하고
    없으면 빈(blank) 배열을 생성하라
    */
    const todoBody = JSON.parse(localStorage.getItem("TODOLIST"));
    if (todoBody) return todoBody;
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const todo = {
        t_id: uuid(),
        t_content: e.target.value,
        t_end_date: "",
      };
      setTodoList([...todoList, todo]);
      e.target.value = "";
    }
  };

  const todo_delete = (id) => {
    const todoRemoveList = todoList.filter((todo) => {
      return todo.t_id !== id;
    });
    setTodoList(todoRemoveList);
  };

  const todo_complete = (id) => {
    const todoBody = todoList.map((todo) => {
      if (todo.t_id === id) {
        const e_date = todo.t_end_date
          ? ""
          : moment().format("YYYY[-]MM[-]DD HH:mm:ss");

        return { ...todo, t_end_date: e_date };
      }
      return todo;
    });
    setTodoList(todoBody);
  }; // end bucket_complete
  const functions = {
    todo_delete,
    todo_complete,
  };
  return (
    <>
      <div>
        <input
          onKeyDown={onKeyDown}
          placeholder="오늘 할 일의 내용을 입력하세요"
          className="w3-input w3-border"
        />
      </div>
      <button className="w3-button">추가</button>
      <div>
        <TodoList todoList={todoList} functions={functions} />
      </div>
    </>
  );
};

export default TodoMain;
