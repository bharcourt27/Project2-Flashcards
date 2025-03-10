import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Home from './pages/Home';
import CreateFlashcard from './pages/CreateFlashcard.tsx';
import LoginPage from './pages/LoginPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';
import Dashboard from './pages/Dashboard.tsx';
import './App.css';
import ErrorPage from './pages/ErrorPage.tsx';
import App from './App.tsx';
import ReactDOM from 'react-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }, 
      // {
      //   path: '/edit',
      //   element: <EditTicket />
      // },
      {
        path: '/create',
        element: <CreateFlashcard />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/signUpPage',
        element: <SignUpPage />
      }
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
