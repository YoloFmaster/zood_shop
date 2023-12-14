import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Registration from "./pages/registration";
import MissingAnimals from "./pages/missingAnimals";
import PageAddAnimal from "./pages/addAnimal";
import Auth from "./pages/auth";
import PersonalCabinet from "./pages/personalCabinet";
import PageAnimal from "./pages/pageAnimal";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/missingAnimals" element={<MissingAnimals/>} />
        <Route path="/addAnimal" element={<PageAddAnimal/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/personalCabinet" element={<PersonalCabinet/>} />
        <Route path="/animal/:id" element={<PageAnimal/>}/>
      </Routes>
    </div>
  );
}

/* 
Страница поиска
 */