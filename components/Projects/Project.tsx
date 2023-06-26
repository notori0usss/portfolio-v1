'use client';
import React from 'react';
import styles from './style.module.css';

interface ProjectProps {
  index: number;
  title: string;
  setModal: any;
}
export default function Project({ index, title, setModal }: ProjectProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={
        'flex w-full justify-between items-center px-12 py-16 cursor-pointer transition-all duration-200 hover:opacity-50 group group-last-of-type:border-t-4 group-last-of-type:border-black '
      }
    >
      <h2 className="group-hover:-translate-x-2 text-7xl font-medium transition-all duration-300">
        {title}
      </h2>
      <p className="group-hover:translate-x-2 transition-all duration-300">
        Design & Development
      </p>
    </div>
  );
}
