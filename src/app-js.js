import React, { useState } from 'react';
import HomePage from './components/HomePage';
import DashboardPage from './components/DashboardPage';
import AboutPage from './components/AboutPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import { Button } from './components/ui/button';

// Color constants
const FOREST_GREEN = '#228B22';
const DEEP_ORANGE = '#FF8C00';
const DARK_GRAY = '#2D3748';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'signup':
        return <SignUpPage />;
      case 'login':
        return <LoginPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">AlienCrops</h1>
          <div className="space-x-4">
            {['home', 'dashboard', 'about', 'signup', 'login'].map((page) => (
              <Button
                key={page}
                onClick={() => setCurrentPage(page)}
                variant={currentPage === page ? 'secondary' : 'ghost'}
                className={`text-white hover:text-gray-300 ${
                  currentPage === page ? `bg-${DARK_GRAY} hover:bg-${DARK_GRAY}` : ''
                }`}
                style={currentPage === page ? { backgroundColor: DARK_GRAY } : {}}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </nav>
      <main className="container mx-auto mt-8 p-4">{renderPage()}</main>
    </div>
  );
};

export default App;
