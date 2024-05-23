import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Components/Header/Header';
import SingleVideo from './Components/SingleVideo/SingleVideo';
import SearchData from './Components/SearchData/SearchData';
import Error from './Components/Error';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Videos/:CategoryId/:VideoId' element={<SingleVideo />} />
        <Route path='/Search' element={<SearchData />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
