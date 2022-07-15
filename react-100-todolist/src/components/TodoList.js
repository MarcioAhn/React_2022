import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todoList, functions } = props;

  /*
    bucketList 배열을 forEach 하여
    각 배열의 요소를 내부 함수로 전달하고
    내부 함수에서 연산을 수행한 후
    return 을 하면 그 결과를 모두 모아서
    새로운 배열 bucketBody 를 만든다
  */

  const todoBody = todoList.map((todo) => {
    return <TodoItem item={todo} functions={functions} key={todo.t_id} />;
  });

  return (
    <table className="w3-table-all">
      <tbody>
        <tr>
          <td>{todoBody}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TodoList;
