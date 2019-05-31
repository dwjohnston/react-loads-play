import { string } from "prop-types";




export interface Todo {
    id: string;
    value: string;
}

const initialTodos: Todo[] = [
    {
        id: "1",
        value: "Hello",
    }, {
        id: "2",
        value: "World",
    }
]; 



export const getTodos = async (): Promise<Todo[]> => {
    return await new Promise((res, rej) => {
        setTimeout(() => {
            res(initialTodos);
        }, 2000)
    });
}

export const postTodo = async (value: string): Promise<Todo> => {
    return await new Promise((res, rej) => {
        setTimeout(() => {
            res({
                id: `${Math.random()}`, 
                value, 
            });
        }, 2000)
    }); 
}

