import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import { productInputs, userInput } from "./formSource";
import  './Styles/dark.scss'
import { useContext } from "react";
import { DarkModeContext} from './context/darkModeContext'

function App() {

  const {darkMode}= useContext(DarkModeContext)
  return (
    <div className={darkMode ? 'app dark' : ''}>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />}/>
        <Route path="users">
          <Route index element={<List />}/>
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New inputs={userInput} title='Add New User'/>}/>
        </Route>
        <Route path="products">
          <Route index element={<List />}/>
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New inputs ={productInputs} title='Add New Products'/>}/>
        </Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
