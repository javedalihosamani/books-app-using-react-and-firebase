import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import "./App.css";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";

const db = getDatabase(app);

function App() {
  // TO STORE A DATA INTO THE DATABASE
  const putData = () => {
    set(ref(db, "users/javed"), {
      id: 1,
      name: "Javed Ali Hosamani",
      age: 21,
    });
  };

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <button onClick={putData}>Put Data</button>
      <SignupPage />
      <SigninPage />
    </div>
  );
}

export default App;
