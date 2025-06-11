// app/fetch/page.tsx
import { Todo } from '@/types/todo';
import TodoList from '@/components/TodoList';

async function fetchTodos(): Promise<Todo[]> {
    const res = await fetch('https://dummyjson.com/todos?limit=10', {
        next: { revalidate: 60 }, // revalidation toutes les 60s
    });

    if (!res.ok) throw new Error('Failed to fetch todos');

    const data = await res.json();
    return data.todos;
}

export default async function Page() {
    const todos = await fetchTodos();

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Todos (from DummyJSON)</h1>
            <TodoList todos={todos} />
        </main>
    );
}
