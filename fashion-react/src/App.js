import Arrivals from './components/Arrivals/Arrivals';
import Brands from './components/Brands/Brands';
import Download from './components/Download/Download';
import Favourite from './components/Favourite/Favourite';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Payday from './components/Payday/Payday';
import Promo from './components/Promo/Promo';


function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Payday />
      <Favourite />
      <Download />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
