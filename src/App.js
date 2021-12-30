import './App.css';
import { Blog } from './components/Blog';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary> */}
        <Blog />
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
