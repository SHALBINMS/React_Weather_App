import { useContext } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import ThemeContext from "./Context/theme.context";
import './styles/components/App.scss';  
import "bootstrap-icons/font/bootstrap-icons.css"; // Importing Bootstrap Icons

function App() {
  const { dark } = useContext(ThemeContext); // This can be dynamically set based on user preference or system settings
  return (
  <div className={`App-${dark ? 'dark' : 'light'}`}> 
      <Header/>
      <Main/>
   
    </div>
  );
}

export default App;
