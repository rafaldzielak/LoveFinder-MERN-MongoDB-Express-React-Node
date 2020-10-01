import React, { Fragment } from "react";
import PeopleActions from '../people/PeopleActions'

const Landing = () => {
  return (
    
    <Fragment>
      <PeopleActions />
      <div className='container'>
        <div className='flex-rewind'>
          <p id='previous-btn'>
            <i className='fas fa-chevron-left fa-5x'></i>
          </p>

          <div className='inside'>
            <h1 className='header'>
              <i className='fas fa-heartbeat'></i> LOVEfinder{" "}
              <i className='fas fa-heartbeat'></i>
            </h1>
            <div className='img-relative'>
              <img
                id='img-main'
                src='https://source.unsplash.com/collection/1606521/400x400'
                alt=''
              ></img>
              <div>
                <i className='far fa-heart heart-icon fa-2x'></i>
              </div>
            </div>

            <p id='person'>Use Arrows to Navigate</p>
          </div>
          <p id='next-btn'>
            <i className='fas fa-chevron-right fa-5x'></i>
          </p>
        </div>
        <footer id='bottom'>
          <i className='fab fa-facebook-f fa-2x icon-bottom'></i>
          <i className='fab fa-twitter fa-2x icon-bottom'></i>
          <i className='fab fa-instagram fa-2x icon-bottom'></i>
          <i className='fab fa-pinterest fa-2x icon-bottom'></i>
        </footer>
      </div>
    </Fragment>
  );
};

export default Landing;
