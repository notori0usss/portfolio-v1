import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
interface ModalProps {
  modal: any;
  projects: any;
}

export default function Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    let yMoveCursor = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        className={
          'h-64 w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center'
        }
      >
        <div
          style={{
            top: `${index * -100}%`,
            transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
          className={'h-full w-full absolute ease-in-out '}
        >
          {projects.map((project: any, index: any) => {
            const { src, color } = project;
            return (
              <div
                className={'w-full h-full flex items-center justify-center'}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={0}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className={
          'w-20 h-20 rounded-full bg-[#455CE9] text-white absolute z-10 flex items-center justify-center text-base font-extralight pointer-events-none'
        }
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className={
          'w-20 h-20 rounded-full bg-[#455CE9] text-white absolute z-10 flex items-center justify-center text-base font-extralight pointer-events-none'
        }
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      >
        View
      </motion.div>
    </>
  );
}
