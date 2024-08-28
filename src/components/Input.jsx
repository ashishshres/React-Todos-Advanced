import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Input = () => {
    const [todos, setTodos] = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState("");
    const handleAddTodo = () => {
        setTodos([...todos, { id: nanoid(), todo: newTodo, marked: false }]);
        setNewTodo("");
    };

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify([...todos]));
    }, [todos]);

    return (
        <div className="bg-zinc-700 rounded-md overflow-hidden flex gap-1 justify-between">
            <input
                type="text"
                name="todo-item"
                id="todo-item"
                className="bg-zinc-700 outline-none w-full py-2 px-3"
                placeholder="Write your todo..."
                value={newTodo}
                onChange={handleChange}
            />
            <button
                onClick={handleAddTodo}
                className="w-28 bg-blue-600 px-4 py-1 rounded-md font-medium text-white hover:bg-blue-500"
            >
                Add
            </button>
        </div>
    );
};

export default Input;
