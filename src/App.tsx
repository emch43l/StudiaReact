import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUsers } from "./requests/userRequest";
import "./index.css";
import LandingPage from "./pages/landingPage";
import AlbumPage from "./pages/albumPage";
import PostPage from "./pages/postPage";
import { User } from "./types/userType";
import { UserContext } from "./contexts/userContext";
import { USERID_PARAM_NAME } from "./hooks/useUserId";
import TodoPage from "./pages/todoPage";
import { ToastContainer } from "react-toastify";


function App() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getUsers();
      setUsers(data);
    })();
  }, []);

  return (
    <UserContext.Provider value={users}>
      <div className="relative h-full w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path={`user/:${USERID_PARAM_NAME}`}>
            <Route path="albums" element={<AlbumPage />} />
            <Route path="posts" element={<PostPage />} />
            <Route path="todos" element={<TodoPage/>} />
          </Route>
          <Route path="/error" element={"An error occured !"} />
        </Routes>
      </div>
      <ToastContainer/>
    </UserContext.Provider>
  );
}

export default App;
