import Nav from "./components/Nav";
import InteractiveForm from "./components/InteractiveForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <InteractiveForm />
      <Footer />
    </div>
  );
}

export default App;
