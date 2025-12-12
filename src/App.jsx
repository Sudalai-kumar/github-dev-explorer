import GitHubUsers from "./GitHubUsers";
import { Routes, Route, Link } from "react-router-dom";
import UserDetails from "./UserDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GitHubUsers />}></Route>
        <Route path="/user/:username" element={<UserDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
