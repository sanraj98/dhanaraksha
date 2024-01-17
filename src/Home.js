import React from 'react'
import './home.css';
import Header from './Header';
import Navigator from './Navigator';
import mantrade from "./img/stock-animing.gif";
import teaching from "./img/teach.jpg";

const Home = () => {
  return (
  <>
  <Header />
  <Navigator />
  <div className="container-fluid h-custom">
    <div className='home-body'>
        <div class="background-layer"></div>
        <h1 className='text-secondary ms-4 mt-5' id="welcome">Teaching Trading course with online Expert</h1> 
        <div className='d-flex container'>
          <div className='card shadow w-25 h-75'>
          <div className='card-layer'></div>
          <h2 className='text-light text-center'> Reserve your seat</h2>
            <div className='card-body'>
              <form>
                <input type='text' className='form-control mt-3' placeholder={"Enter your name"}/>
                <input type='text' className='form-control mt-5' placeholder={"Enter your email"}/>
                <input type='text' className='form-control mt-5' placeholder={"Enter your phone"}/>
                <input type='text' className='form-control mt-5 ' placeholder={"Enter your City"}/>
                <div className='text-center'>
                <button type='submit' className='btn btn-success mt-4'>{"Book now"}</button>
                </div>
              </form>
            </div>
          </div>
          <img clas  className="ms-auto" src={mantrade} alt='trade pic' width={500} height={500}></img>
        </div>
    </div> 
    </div>
    <div class="d-flex justify-content-center">
    <img className='ms-5' src={teaching} alt='tech pic'width={1000} height={500}/>
    </div>
    </>
  )
}

export default Home