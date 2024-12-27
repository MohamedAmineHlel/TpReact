import { configureStore, createSlice } from '@reduxjs/toolkit';

// Créer un slice pour gérer les tâches
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      // Ajouter une nouvelle tâche avec une propriété revoke par défaut
      
      state.push({ ...action.payload, revoke: false});
    },
    revokeTask: (state, action) => {
        const task = state.find((task) => task.id === action.payload);
        if (task) {
          task.revoke = !task.revoke; // Inverse l'état `revoke`
        }
      },
    deleteTask: (state, action) => {
      // Supprimer une tâche par son ID
      const id = action.payload
      return state.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, name } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.name = name; // Mise à jour du nom de la tâche
      }
    }
  },
});

// Exporter les actions
export const { addTask, revokeTask, deleteTask ,editTask } = tasksSlice.actions;

// Créer le store
const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;
