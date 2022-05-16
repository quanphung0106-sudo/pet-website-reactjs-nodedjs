import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/Routes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route path={route.path} key={index}>
                <Route index element={<Page />} />
              </Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
