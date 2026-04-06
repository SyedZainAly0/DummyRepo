// src/App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Welcome to PracticePro</h1>
          <p className="mt-4 text-lg text-gray-600">Your React + Vite + Python environment is ready.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;