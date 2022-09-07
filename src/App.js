import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Registration } from './Components/Container/Registration';
import { Login,Logout } from './Components/Container/Login';
import { MyAccount } from './Components/Container/MyAccount';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} exact />
                <Route path="/register" element={<Registration/>} exact />
                <Route path="/login" element={<Login/>} exact />
                <Route path="/my-account" element={<MyAccount/>} exact />
                <Route path="/logout" element={<Logout/>} exact />
            </Routes >
        </Router>
      </div>
    </Provider>
  );
}

export default App;
