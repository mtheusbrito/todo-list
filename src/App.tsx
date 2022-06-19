import { useState } from 'react'
import { Provider } from 'react-redux';
import Header from './components/Header'
import TodoList from './components/TodoList';
import { store } from './store';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <TodoList />
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App
