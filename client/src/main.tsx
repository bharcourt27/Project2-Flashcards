import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Home from './pages/Home';
import CreateFlashcard from './pages/CreateFlashcard';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
// import Dashboard from './pages/Dashboard.tsx';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import App from './app';
import ReactDOM from 'react-dom/client';
import NavWrapper from './components/NavWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NavWrapper><ErrorPage /></NavWrapper>,
    children: [
      {
        index: true,
        element: <NavWrapper><Home /></NavWrapper>,
      }, 
      // {
      //   path: '/edit',
      //   element: <EditTicket />
      // },
      {
        path: '/create',
        element: <NavWrapper><CreateFlashcard /></NavWrapper>,
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/SignUpPage',
        element: <SignUpPage />
      }
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
