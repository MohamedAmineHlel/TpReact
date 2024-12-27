import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, revokeTask, editTask } from '../store/store';

function TodoList() {
  const [task, setTask] = useState('');
  const [editableTaskId, setEditableTaskId] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState('');
  const tasks = useSelector((state) => state.tasks); // Sélectionner les tâches du store === get all tasks
  const dispatch = useDispatch(); // Pour dispatcher les actions

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = { id: generateId(), name: task };
      dispatch(addTask(newTask)); // Ajouter une tâche via Redux
      setTask('');
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id)); // Supprimer une tâche via Redux
  };

  const handleRevokeTask = (id) => {
    dispatch(revokeTask(id)); // Inverser l'état revoke via Redux
  };

  const handleEditTask = () => {
    if (editedTaskName.trim()) {
      dispatch(editTask({ id: editableTaskId, name: editedTaskName })); // Modifier la tâche via Redux
      setEditableTaskId(null); // Sortir du mode édition
      setEditedTaskName('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Liste des tâches</h1>

        {/* Task Input */}
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Ajouter une tâche"
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-500"
          >
            Ajouter
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-2 rounded-lg shadow-sm ${
                task.revoke ? 'bg-red-100' : 'bg-gray-50'
              }`}
            >
              {editableTaskId === task.id ? (
                <input
                  type="text"
                  value={editedTaskName}
                  onChange={(e) => setEditedTaskName(e.target.value)}
                  onBlur={handleEditTask}
                  placeholder="Modifier la tâche"
                  className="flex-grow bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <Link to={`/todos/${task.id}`} className="text-blue-600 hover:underline flex-grow">
                  {task.name}
                </Link>
              )}
              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    editableTaskId === task.id
                      ? handleEditTask()
                      : (setEditableTaskId(task.id), setEditedTaskName(task.name))
                  }
                  className={`px-2 py-1 rounded-lg ${
                    editableTaskId === task.id
                      ? 'bg-green-500 hover:bg-green-400'
                      : 'bg-blue-500 hover:bg-blue-400'
                  } text-white`}
                >
                  {editableTaskId === task.id ? 'Sauvegarder' : 'Modifier'}
                </button>
                <button
                  onClick={() => handleRevokeTask(task.id)}
                  className={`px-2 py-1 rounded-lg ${
                    task.revoke ? 'bg-green-500 hover:bg-green-400' : 'bg-yellow-500 hover:bg-yellow-400'
                  } text-white`}
                >
                  {task.revoke ? 'Rétablir' : 'Révoquer'}
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-400"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
