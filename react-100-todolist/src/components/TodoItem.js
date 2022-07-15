import React from "react";

function TodoItem(props) {
  const { item, functions } = props;
  const { todo_delete, todo_complete } = functions;

  return (
    <tr className={item.t_end_date ? "cancel" : ""}>
      <td id="delete" onClick={() => todo_delete(item.t_id)}>
        &times;
      </td>
      <td id="content" onClick={() => todo_complete(item.t_id)}>
        {item.t_content}
      </td>
    </tr>
  );
}

export default TodoItem;
