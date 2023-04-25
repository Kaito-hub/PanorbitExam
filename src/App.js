import {
  BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import ProfilePage from './ProfilePage'
import Posts from "./Posts";
import Gallery from "./Gallery";
import Todo from "./Todo";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/profile/:id" element={<ProfilePage/>}></Route>
          <Route path="/posts" element={<Posts/>}></Route>
          <Route path="/gallery" element={ <Gallery/> }></Route>
          <Route path="/todo" element={<Todo/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
