import { Routes, Route } from "react-router-dom";
import { ContactPage } from "./pages/contactPage";
import { HomePage } from "./pages/homePage";
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/contact" element={ <ContactPage /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
