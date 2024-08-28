import React, { useContext } from "react";
import { TodoContext } from "../utils/Context";

const Checked = () => {
    const [todos, setTodos] = useContext(TodoContext);

    const checkedTodos = todos.filter((todo) => todo.marked);

    const handleRemove = (removeId) => {
        setTodos(todos.filter((todo) => todo.id !== removeId));
    };

    return (
        <ul className="mt-3 flex flex-col gap-2">
            {checkedTodos.length > 0 ? (
                checkedTodos.map((todo) => {
                    if (todo.marked == true) {
                        return (
                            <li
                                key={todo.id}
                                className="flex justify-between px-3 py-2 bg-zinc-700 font-medium rounded-md"
                            >
                                <span>{todo.todo}</span>
                                <button
                                    onClick={() => handleRemove(todo.id)}
                                    className="text-red-500 font-medium hover:underline"
                                >
                                    Remove
                                </button>
                            </li>
                        );
                    }
                })
            ) : (
                <h1 className="font-medium text-center text-lg">
                    No Todos Marked
                </h1>
            )}
        </ul>
    );
};

export default Checked;
