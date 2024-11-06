import React, { useState, useEffect } from 'react';
import './todo.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface Task {
    id: string;
    task: string;
}

interface ModalProps {
    onClose: () => void;
    onSave: (task: Task) => void;
    task?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, onSave, task }) => {
    const [newTask, setNewTask] = useState<string>(task || '');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTaskObject = { id: Date.now().toString(), task: newTask };
        onSave(newTaskObject);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label>
                        Tarefa:
                        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    </label>
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
};

const Todo: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedTask, setSelectedTask] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('https://api.jsonbin.io/v3/b/672bfe00ad19ca34f8c596a2', {
                headers: {
                    'X-Master-Key': '$2a$10$6bvCsK79fm7uvqnHbqQID.G.C8D/GefZqGSABQxwiZb2YGy/kefni'
                }
            });
            const data = await response.json();
            setTasks(data.record.tasks);
        };

        fetchTasks();
    }, []);

    const handleOpenModal = (task?: string) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTask(undefined);
    };

    const handleSaveTask = async (newTask: Task) => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);

        // Atualizar dados no JSONBin
        const response = await fetch('https://api.jsonbin.io/v3/b/672bfe00ad19ca34f8c596a2', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2a$10$6bvCsK79fm7uvqnHbqQID.G.C8D/GefZqGSABQxwiZb2YGy/kefni'
            },
            body: JSON.stringify({ tasks: updatedTasks })
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div className="box-todo-englobador">
            <div className="box-todo">
                <div className="head">
                    <h1>ToDo List</h1>
                    <AddCircleOutlineIcon className="add-task" onClick={() => handleOpenModal()} />
                </div>
                <div className="tasks">
                    {tasks.map((task) => (
                        <div key={task.id} className="task" onClick={() => handleOpenModal(task.task)}>
                            {task.task}
                        </div>
                    ))}
                </div>
                {isModalOpen && <Modal onClose={handleCloseModal} onSave={handleSaveTask} task={selectedTask} />}
            </div>
        </div>
    );
};

export default Todo;