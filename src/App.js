import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';
import Details from './components/Details';
import './index.css';
import PersonCrud from './components/Person';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 p-4 shadow-lg">
          <ul className="flex justify-center space-x-8">
            <li>
              {/* <Link 
                to="/" 
                className="text-white text-lg hover:text-blue-300"
              >
                Home
              </Link> */}
            </li>
            <li>
              <Link 
                to="/todos" 
                className="text-white text-lg hover:text-blue-300"
              >
                Todo List
              </Link>
            </li>
      
          </ul>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto py-10 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos/:id" element={<Details />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path='per' element={<PersonCrud />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
