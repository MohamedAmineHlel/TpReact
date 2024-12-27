import React from 'react';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Bienvenue sur l'application de gestion des tâches
        </h1>
        <p className="text-gray-700 text-lg">
          Gérez vos tâches facilement avec notre application.
        </p>
      </div>
    </div>
  );
}

export default Home;
