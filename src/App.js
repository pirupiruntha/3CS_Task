import UserInfo from "./pages/UserInfo";
import UserList from "./pages/UserList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" name="Home" element={<UserList />} />
          <Route exact path="/user/:id" element={<UserInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
