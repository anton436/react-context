import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import ContactsContextProvider from './ContactsContext';
import CounterContextProvider from './CounterContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ContactsContextProvider>
          <CounterContextProvider>
            <Header />
            <Routes>
              <Route path='/counter' element={<Counter />} />
              <Route path='/' element={<ContactList />} />
              <Route path='/add' element={<AddContact />} />
            </Routes>
          </CounterContextProvider>
        </ContactsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
