import AboutUs from './components/AboutUs';
import Certification from './components/Certification';
import Dashboard from './components/Dashboard';
import FAQ from './components/FAQ';
import FeaturesList from './components/FeaturesList';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LuxuryAssets from './components/LuxuryAssets';
import MarketingSolution from './components/MarketingSolution';
import Navbar from './components/Navbar';
import PropertiesSection from './components/PropertiesSection';
import ReferralRewards from './components/ReferralRewards';
import Statistics from './components/Statistics';

function App() {
  return (
    <div>
      <Navbar />
   
      <Hero />
      <Dashboard />
      <Statistics />
      <FeaturesList />
      <PropertiesSection />
      <LuxuryAssets />
      <MarketingSolution />
      <Certification />
      <ReferralRewards />
      <AboutUs />
      <FAQ />
      <Footer />
      {/* Other sections will go here */}
    </div>
  );
}

export default App;
