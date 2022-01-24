
import './App.css';
import Component1 from './component1/component1';
import Component2 from './component2/component2';
import Component3 from './component3/component3';

function App() {
 return(
   <div className='container'>
      <div className='C1C2-container'>
          <div className='col-4'>
              <Component1/>
          </div>
          <div className='col-8'>
              <Component2/>
          </div>
      </div>
      <div className="C3">
        <Component3/>
      </div>

   </div>
 );
}

export default App;
