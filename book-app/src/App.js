import { BooksProvider } from './services/books';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <BooksProvider>
      <Home></Home>
    </BooksProvider>
  );
}

export default App;
