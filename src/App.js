import React,{Component} from 'react';
import Sinhvien from './Components/Person/Person';
import './App.css';
 
class App extends Component{
  render() {
    return (
      <div className="App">
              <h1>Ung dung REact</h1>
        <p>ABC</p>
        
         <Sinhvien hoten="Nguyen thi A" tuoi="35">
           Sothich:Bongda,game ,......
         </Sinhvien>
         <Sinhvien hoten="Nguyen thi B" tuoi="26"/>
         <Sinhvien hoten="Nguyen thi C" tuoi="34"/>
       </div>
    )
  }
}


export default App;
