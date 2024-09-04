import logo from './logo.svg';
import './App.css';
import MarksSheet from './components/MarksSheet';

function App() {
  return (
    <div className="App">
     <MarksSheet 
     name="Sanju" 
     engMarks="91"
     telMarks="12"
     socMarks="93"
     matMarks="14"
     sciMarks="25"
     hinMarks="96" />
     <MarksSheet name="Likhitha" 
     engMarks="21"
     telMarks="22"
     socMarks="23"
     matMarks="24"
     sciMarks="25"
     hinMarks="26"/>
     <MarksSheet name="Rohan" 
     engMarks="71"
     telMarks="12"
     socMarks="23"
     matMarks="24"
     sciMarks="75"
     hinMarks="76"/>
    </div>
  );
}

export default App;
