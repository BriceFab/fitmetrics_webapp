'use client';

import { Todo } from '@/types/todo';

interface Props {
    todos: Todo[];
}

export default function TodoList({ todos }: Props) {
    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className={`p-3 border rounded-md ${
                        todo.completed ? 'bg-green-100' : 'bg-red-100'
                    }`}
                >
                    <span className="font-medium text-black">
                        {todo.todo}
                    </span>
                    <div className="text-sm text-gray-600">
                        Status: {todo.completed ? '✅ Completed' : '❌ Pending'} | User ID: {todo.userId}
                    </div>
                </li>
            ))}
        </ul>
    );
}
