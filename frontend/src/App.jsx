import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../src/routes/AppRoutes.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <div>
        <AppRoutes />
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </div>
    </Router>
  );
}

export default App;
