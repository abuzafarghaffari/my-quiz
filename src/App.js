
import { queries } from '@testing-library/dom';
import './App.css';
import Body from './component/body';
import Quiz from './component/quiz';
import "./sass/style.scss";
function App() {
  return (
    <main className="App">
     {/* <Body />   */}
      <Quiz />
    </main>
  );
}

export default App;
