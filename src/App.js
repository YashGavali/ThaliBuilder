import './App.css';
import Navigation from './components/Navigation/Navigation';
import {Routes,Route} from "react-router-dom"; 
import Thali from './components/Thali/Thali';
import Checkout from './components/Checkout/Checkout';
import { connect } from 'react-redux/es/exports';

function App({finalThali}) {
  return (
    <div className="App">
    <Navigation finalThali={finalThali}/>
    <Routes>
<Route path="/" element={<Thali/>}/>
{}
<Route path="/Checkout" element={<Checkout />}/>
    </Routes>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    finalThali: state.shop.finalThali,
  };
}


export default connect(mapStateToProps) (App);
