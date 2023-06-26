'use client';
import styles from './page.module.css';
import { useState } from 'react';
import Project from './Project';
import Modal from './Modal';

const projects = [
  {
    title: 'Ultima Nepal',
    src: 'ultima.webp',
    color: '#000000',
  },
  {
    title: 'Realestate Marketplace',
    src: 'gi.webp',
    color: '#8C8C8C',
  },
  {
    title: 'Netflix Clone',
    src: 'netflix.webp',
    color: '#EFE8D3',
  },
  {
    title: 'GoodwillAlum',
    src: 'goodwill.webp',
    color: '#706D63',
  },
];

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="flex h-[100vh] items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
