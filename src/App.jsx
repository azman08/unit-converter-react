import "./App.css";
import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Azman" age={23} isStudent={true} />
      <Student name="Ali" age={18} isStudent={false} />
      <Student name="Ayuni" age={16} isStudent={true} />
      <Student />
    </>
  );
}

export default App;
