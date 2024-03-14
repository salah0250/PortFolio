import React from "react"
import {  skills , experiences , projects } from "../Constants";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../componants/CTA";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <div>
        <h1 className="head-text">Projets</h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Découvrez ci-dessous une sélection de mes projets personnels et professionnels. 
            Chaque projet a été une occasion d'apprendre, de grandir et de m'affiner en tant que professionnel. 
            De la résolution de problèmes complexes à la gestion de projets d'envergure, en passant par le travail en équipe dans des environnements multiculturels, 
            j'ai accumulé un riche bagage de compétences et de connaissances. 
            Ces expériences m'ont non seulement permis de me découvrir et de définir mes ambitions, mais elles ont également façonné ma vision et mon approche du monde professionnel. 
          </p>
        </div>
        <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  lien direct
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </section>
    )
}

export default Projects