import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from 'react';


function App() {

  
const[name, setName] = useState("FULL NAME");
const[cvv, setCvv] = useState("***");
const[num, setNUM] = useState("#### #### #### ####");
const[month, setMonth] = useState("MM");
const[year, setYear] = useState("YY");


  
  return (
    
    <>

<div className='col-md-12' >
  <div className='' style={{height:"50px"}} ></div>
  <div className='row'>
    <div className='col-md-4'></div>

    <div className='col-md-4'>
      <div className='col-md-12'>
     <div className='row'>
        <div className='col-md-1 col-1'></div>
        <div className='col-md-10 col-10 goku bshadow'>
        <h1 className='font1 float-right text-white mt-1'>visa</h1>
          <img src='img/cip.jpg' className='b mt-3 mr-5' style={{height:"30px"}} ></img>
          <span className='text-white '>cvv:{cvv}</span>
          <br/><br/><br/>

         <center><h2 className='text-white'>{num}</h2></center><br/>

         <span className='text-white float-right'>Expires</span>
        



         <span className='text-white'>Card Holder</span><br/>
         <span className='text-white float-right fonts'>{month}/{year}</span>

         <span className='text-white fonts'>{name}</span>

          
        </div>
        <div className='col-md-1 col-1'></div>
        </div>
    </div>
    <div className='col-md-12 bshadow'>
        <div className='container mt1'  >
          <br/>
          <br/>
          <label className=''>Card Number</label>
          <input className='p-2 rounded' type='text' 
          onChange={(e) => {
    // Use a regular expression to allow only numeric characters
    const value = e.target.value.replace(/[^0-9]/g, '');
    
    // Limit the length to 3 characters
    const nuValue = value.slice(0, 12);

    // Update the state with the sanitized and truncated value
    setNUM(nuValue);
  }}  style={{width:"100%"}} maxLength='12'></input><br/><br/>

          <label className=''>Card Holder</label>
          <input className='p-2 rounded' type='text' onChange={(e) => setName(e.target.value)} style={{width:"100%"}}  ></input><br/><br/>

          <label className=''>Expiration Date</label>
          <label className='float-right mr-5 pr-5'>cvv</label><br/>
          <select onChange={(e) => setMonth(e.target.value)} className='p-2 ' style={{width:"30%"}} >
            <option>Month</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>

          <select onChange={(e) => setYear(e.target.value)} className='p-2 ml-4  ' style={{width:"30%"}} >
            <option>Year</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
            <option>2028</option>
          </select>

        


          <input
  onChange={(e) => {
    // Use a regular expression to allow only numeric characters
    const value = e.target.value.replace(/[^0-9]/g, '');
    
    // Limit the length to 3 characters
    const cvValue = value.slice(0, 3);

    // Update the state with the sanitized and truncated value
    setCvv(cvValue);
  }}
  className='ml-4'
  type='text'
  style={{ width: "29%", height: "41px" }}
  maxLength='3'
/>
<br/>
<br/>
<br/>

          <button className='btn btn-lg btn-primary' style={{width:"100%"}} >Submit</button>
         
         <br/><br/>


        </div>

        
    </div>
    </div>
    

    <div className='col-md-4'></div>
    
  </div>
</div>
   
    
    </>


  );
}

export default App;

