 import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/Router';
  
function App() {
  return (
    <div className="App bg-violet-200">
        <RouterProvider router={router}></RouterProvider>
     </div>
  );
}

export default App;
