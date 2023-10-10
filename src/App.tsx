import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUsers } from "./requests/userRequest";
import "./index.css";
import LandingPage from "./pages/landingPage";
import AlbumPage from "./pages/albumPage";
import PostPage from "./pages/postPage";
import { User } from "./types/userType";
import { UserContext } from "./contexts/userContext";

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
          <Route path="user/:userId">
            <Route path="albums" element={<AlbumPage />} />
            <Route path="posts" element={<PostPage />} />
          </Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
