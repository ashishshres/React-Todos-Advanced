import React, { useContext } from "react";
import { TodoContext } from "../utils/Context";

const List = () => {
    const [todos, setTodos] = useContext(TodoContext);

    const handleRemove = (removeId) => {
        setTodos(todos.filter((todo) => todo.id !== removeId));
    };

    const handleMark = (markedId) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === markedId) {
                    return { ...todo, marked: !todo.marked };
                }
                return { ...todo };
            })
        );
    };

    return (
        <ul className="mt-3 flex flex-col gap-2">
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between px-3 py-2 bg-zinc-700 font-medium rounded-md"
                    >
                        <span
                            onClick={() => handleMark(todo.id)}
                            className={`cursor-pointer ${
                                todo.marked && "line-through"
                            } hover:line-through`}
                        >
                            {todo.todo}
                        </span>
                        <button
                            onClick={() => handleRemove(todo.id)}
                            className="text-red-500 font-medium hover:underline"
                        >
                            Remove
                        </button>
                    </li>
                ))
            ) : (
                <h1 className="font-medium text-center text-lg">
                    No Todos Added
                </h1>
            )}
        </ul>
    );
};

export default List;
