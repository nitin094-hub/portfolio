import React from 'react';
import { TagCloud } from 'react-tagcloud'
import { GrGithub } from 'react-icons/gr';

export default function ProjectItem2(props) {
    const data = [
        { value: 'React', count: 35 },
        { value: 'Firebase', count: 30 },
        { value: 'Tailwind', count: 28 },
        
      ]
    return (
        <div className='custom-bg w-96 sm:w-80 h-64 border-t-2 border-blue-500 drop-shadow-lg shadow-black p-2 overflow-hidden mt-4 mx-4 hover:scale-105 transition ease-out delay-250 hover:transition hover:ease-in hover:delay-200'>
           
            <aside className='flex flex-col items-start ml-4 mt-2'>
            <h1 className='uppercase tracking-wide text-blue-500'>React Application</h1>
            <h1 className='text-white hover:text-blue-500 capitalize text-2xl sm:text-4xl tracking-wide'>{props.title}</h1>
            </aside>
            <p className='text-white mx-4 mt-4'>
            {props.desc}</p>

            <section className='flex justify-between gap-1 mx-4 mt-8 items-center'>
            <TagCloud
            minSize={8}
            maxSize={20}
            tags={data}
            onClick={tag => {
                //todo:hover color change
            }}
  
          />
          <a href={props.path} target='_blank'><GrGithub className='fill-white h-8 w-8 cursor-pointer hover:fill-blue-500'></GrGithub></a>
            </section>

        </div>
    )
}
