import React, { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

const Context = (props) => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );
    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default Context;
