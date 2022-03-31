
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Form } from  "./components/form";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Routes>
          <Route  path="/" element={<Form/>}/>
        </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
