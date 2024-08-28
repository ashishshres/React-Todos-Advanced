import React from "react";
import Input from "./Input";
import Routing from "../utils/Routing";
import Nav from "./Nav";

const Todo = () => {
    return (
        <div className="w-96">
            <h1 className="text-center text-4xl font-bold mb-6">Todo App</h1>
            <Input />
            <Nav />
            <Routing />
        </div>
    );
};

export default Todo;
