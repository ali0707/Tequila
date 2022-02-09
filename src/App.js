import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";
import RouterPage from "./Pages/RouterPage";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <RouterPage />
      <Footer />
    </div>
  );
}

export default App;
