import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Bonjour je m'appele
        <span className='font-semibold mx-2 text-white'>Aboulkacim Salah Eddine</span>
        👋
        <br />
        Future Software Engineer a la recherche d'une alternance.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Du Maroc au France <br /> j'ai acquis de nombreuses compétences en cours de ma route
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Savoir Plus
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          J'ai travaille sur beaucoup de projet. <br /> qui mon aider a developper mes compétences.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visiter mon portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Mon portfolio vous interssez? <br/>  Contactez moi
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Contact
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;