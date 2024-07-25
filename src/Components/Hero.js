import React from 'react';
import image from '../Images/hero-contractor.png';
import heroPierre from '../Images/hero-pierre.jpg';
import './Hero.css';
import { Button } from 'bootstrap-4-react/lib/components';
import { useState } from 'react';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  return (
    <div class='container col-xxl-8 px-4 py-5'>
      <div class='row flex-lg-row-reverse align-items-center g-5'>
        <div class='col-10 col-sm-8 col-lg-6'>
          <img
            src={heroPierre}
            class='d-block mx-lg-auto img-fluid rounded'
            alt='Bootstrap Themes'
            width='400'
            height='300'
            loading='lazy'
          />
        </div>
        <div class='col-lg-6'>
          <h1 class='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
            We Build Your Dreams.
          </h1>
          <p class='lead'>
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div
          // class='d-grid gap-2 d-md-flex justify-content-md-start'
          // display='grid'
          // gap='2'
          // md='flex'
          >
            <Button
              primary
              data-toggle='modal'
              data-target='#exampleModal'
              onClick={handleOpen}
              className='mr-2'
            >
              Free Quote
            </Button>
            <Button secondary>Our Work</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
