import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { Route } from "react-router";
import { Routes } from "react-router";
import { PrivateRoute } from './utilities/routes/PrivateRoute';
import { PublicRestrictedRoute } from './utilities/routes/PublicRoute';
import { Header } from './components/Header/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/contactsOperation';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts)
  }, [])
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<PublicRestrictedRoute restricted><AuthPage /></PublicRestrictedRoute>} />
          <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
      </Routes>
    </>
  )
};

export default App;