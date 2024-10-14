import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Career from './pages/Career';
import NavBar from './Components/Header';
import NetProfitCalculator from './pages/NetProfitCalculator';
import GSTCalculator from './pages/Calculators/GSTCalculator';
import TDSCalculator from './pages/Calculators/TDSCalculator';
import ServicePage from './pages/Services/ServicePage';
import Footer from './Components/Footer';
import EMICalculator from './pages/Calculators/EMICalculator';
import NSCCalculator from './pages/Calculators/NSCCalculator';
import AboutUs_TheFirm from './pages/AboutUs/AboutUs_TheFirm';
import AboutUs_OurValue from './pages/AboutUs/AboutUs_OurValue';
import AboutUs_OurTeam from './pages/AboutUs/AboutUs_OurTeam';
import ExperiencePage from './pages/Experience/ExperiencePage';
import AutoLoanCalculator from './pages/Calculators/AutoLoanCalculator';
import EffectiveCapital from './pages/Calculators/EffectiveCapital';
import NetWorthCalculator from './pages/Calculators/NetWorthCalculator';
import HomeLoanCalculator from './pages/Calculators/HomeLoanCalculator';
import Installment from './pages/Calculators/GetInstallment';
import HRA from './pages/Calculators/HRACalculator';
import IncomeTaxCalculator from './pages/Calculators/IncomeTaxCalculator';
import Header2 from './Components/Header2';


function App() {
  return (
    <div>
      
      <Header2/>
      {/* <NavBar />   */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus/thefirm' element={<AboutUs_TheFirm />} />
        <Route path='/aboutus/ourvalue' element={<AboutUs_OurValue />} />
        <Route path='/aboutus/ourteam' element={<AboutUs_OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/career' element={<Career />} />
        <Route path='/gstcalculator' element={<GSTCalculator />} />
        <Route path='/tdscalculator' element={<TDSCalculator />} />
        <Route path='/emicalculator' element={<EMICalculator />} />
        <Route path='/nsccalculator' element={<NSCCalculator />} />
        <Route path='/netprofitcalculator' element={<NetProfitCalculator />} />
        <Route path='/autoloancalculator' element={<AutoLoanCalculator />} />
        <Route path='/effectivecapital' element={<EffectiveCapital />} />
        <Route path='/networthcalculator' element={<NetWorthCalculator />} />
        <Route path='/service/:serviceKey' element={<ServicePage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/homeloancalculator' element={<HomeLoanCalculator/>} />
        <Route path='/installment' element={<Installment/>} />
        <Route path='/HRAcalculator' element={<HRA/>}/>
        <Route path='/incometaxcalculator' element={<IncomeTaxCalculator/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
