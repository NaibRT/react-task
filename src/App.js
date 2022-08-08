import Layout from "./components/layout";
import "./scss/index.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
         <Routes>
         <Route path="/" element={<Home />}/>
         </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
