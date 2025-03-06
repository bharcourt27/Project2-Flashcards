import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateFlashcard from './pages/CreateFlashcard';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <a href="/">Home</a> | <a href="/create">Create Flashcard</a>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateFlashcard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
