"use client"
import Image from 'next/image'
import Img from '../../public/home.png'
import Rings from '../../public/rings.png'
import { motion } from 'framer-motion'
import { AnimatedEclipse } from '@/components/AnimatedEclipse'
import { Form } from '@/components/Form'

export default function Home() {


  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };


  return (
    <main className="min-h-screen dark">
      

      <motion.div

        className="flex flex-col justify-center gap-12 pt-10 px-8 items-center">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 100,duration: 3, }}
          animate={{  y: 0, opacity: 1 }}
          className='fancy-text-one py-2  text-center text-5xl font-semibold '>Integrate AI Throughout Your Workflow</motion.p>
        <motion.span
          initial={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 60, duration: 3}}
          animate={{  y: 0, opacity: 1 }}
          className='text-5xl font-mono'>Code Doctor</motion.span>
        <motion.p
          initial={{ y: 140, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 70 , duration: 3}}
          animate={{  y: 0, opacity: 1 }}
          className='text-xl text-center '>Make processes where AI collaborates with your team throughout <br /> the whole development process.</motion.p>
        <motion.button
          initial={{ y: 160, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 80 , duration: 3}}
          animate={{  y: 0, opacity: 1 }}
          onClick={scrollToBottom}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Join Waitlist !
          </span>
        </motion.button>
        <motion.div
          initial={{ y: 160, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 100, duration: 5 }}
          animate={{  y: 0, opacity: 1 }}
        >
          <Image alt='' className="" src={Img}></Image>
        </motion.div>
      </motion.div>


      <div className="flex flex-col items-center justify-center md:py-24 gap-8">
        <div className=" flex flex-col gap-3">
          <p className="fancy-text-two text-center md:p-0 p-3  font-roboto font-semibold text-3xl md:text-4xl">Boost the speed of your development and test <br /> cycles.</p>
          <p className="text-center text-md">With AI-driven test case generation and code analysis, problems may be found and fixed <br /> more quickly.</p>
        </div>


        <div className="relative h-screen my-10  w-full">
          <ul className="bg-white left-14  md:w-1/3 bg-opacity-10 absolute top-16 flex flex-col p-3 rounded-md gap-4">
            <li className="flex flex-row gap-5 items-center text-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d="M25.714 20.8576C38.9686 20.8576 49.7135 16.4925 49.7135 11.1077C49.7135 5.72298 38.9686 1.35779 25.714 1.35779C12.4595 1.35779 1.7146 5.72298 1.7146 11.1077C1.7146 16.4925 12.4595 20.8576 25.714 20.8576Z" stroke="#7534FF" strokeWidth="2.3" />
                <path d="M1.71521 30.6078C1.71521 30.6078 1.71521 38.223 1.71521 43.6077C1.71521 48.9925 12.4601 53.3577 25.7143 53.3577C38.9687 53.3577 49.7146 48.9925 49.7146 43.6077C49.7146 40.92 49.7146 30.6078 49.7146 30.6078" stroke="#7534FF" strokeWidth="2.3" strokeLinecap="square" />
                <path d="M1.71521 11.1078C1.71521 11.1078 1.71521 21.973 1.71521 27.3576C1.71521 32.7424 12.4601 37.1077 25.7143 37.1077C38.9687 37.1077 49.7146 32.7424 49.7146 27.3576C49.7146 24.6699 49.7146 11.1078 49.7146 11.1078" stroke="#7534FF" strokeWidth="2.3" />
              </svg>
              <p>CI/CD Pipeline Generate</p>
            </li>
            <hr className="opacity-50 w-64 mx-auto" />
            <li className="flex flex-row gap-5 items-center text-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d="M25.714 20.8576C38.9686 20.8576 49.7135 16.4925 49.7135 11.1077C49.7135 5.72298 38.9686 1.35779 25.714 1.35779C12.4595 1.35779 1.7146 5.72298 1.7146 11.1077C1.7146 16.4925 12.4595 20.8576 25.714 20.8576Z" stroke="#E862FE" strokeWidth="2.3" />
                <path d="M1.71521 30.6078C1.71521 30.6078 1.71521 38.223 1.71521 43.6077C1.71521 48.9925 12.4601 53.3577 25.7143 53.3577C38.9687 53.3577 49.7146 48.9925 49.7146 43.6077C49.7146 40.92 49.7146 30.6078 49.7146 30.6078" stroke="#E862FE" strokeWidth="2.3" strokeLinecap="square" />
                <path d="M1.71521 11.1078C1.71521 11.1078 1.71521 21.973 1.71521 27.3576C1.71521 32.7424 12.4601 37.1077 25.7143 37.1077C38.9687 37.1077 49.7146 32.7424 49.7146 27.3576C49.7146 24.6699 49.7146 11.1078 49.7146 11.1078" stroke="#E862FE" strokeWidth="2.3" />
              </svg>
              <p>Build / Deploymnent</p>
            </li>
          </ul>

          <ul className="bg-white absolute  md:w-1/3 bg-opacity-10  bottom-16 right-14 flex flex-col p-3  rounded-md gap-4">
            <li className="flex flex-row gap-5 items-center text-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d="M25.714 20.8576C38.9686 20.8576 49.7135 16.4925 49.7135 11.1077C49.7135 5.72298 38.9686 1.35779 25.714 1.35779C12.4595 1.35779 1.7146 5.72298 1.7146 11.1077C1.7146 16.4925 12.4595 20.8576 25.714 20.8576Z" stroke="#7534FF" strokeWidth="2.3" />
                <path d="M1.71521 30.6078C1.71521 30.6078 1.71521 38.223 1.71521 43.6077C1.71521 48.9925 12.4601 53.3577 25.7143 53.3577C38.9687 53.3577 49.7146 48.9925 49.7146 43.6077C49.7146 40.92 49.7146 30.6078 49.7146 30.6078" stroke="#7534FF" strokeWidth="2.3" strokeLinecap="square" />
                <path d="M1.71521 11.1078C1.71521 11.1078 1.71521 21.973 1.71521 27.3576C1.71521 32.7424 12.4601 37.1077 25.7143 37.1077C38.9687 37.1077 49.7146 32.7424 49.7146 27.3576C49.7146 24.6699 49.7146 11.1078 49.7146 11.1078" stroke="#7534FF" strokeWidth="2.3" />
              </svg>
              <p>Generate Test Cases</p>
            </li>
            <hr className="opacity-50 w-64 mx-auto" />
            <li className="flex flex-row gap-5 items-center text-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d="M25.714 20.8576C38.9686 20.8576 49.7135 16.4925 49.7135 11.1077C49.7135 5.72298 38.9686 1.35779 25.714 1.35779C12.4595 1.35779 1.7146 5.72298 1.7146 11.1077C1.7146 16.4925 12.4595 20.8576 25.714 20.8576Z" stroke="#E862FE" strokeWidth="2.3" />
                <path d="M1.71521 30.6078C1.71521 30.6078 1.71521 38.223 1.71521 43.6077C1.71521 48.9925 12.4601 53.3577 25.7143 53.3577C38.9687 53.3577 49.7146 48.9925 49.7146 43.6077C49.7146 40.92 49.7146 30.6078 49.7146 30.6078" stroke="#E862FE" strokeWidth="2.3" strokeLinecap="square" />
                <path d="M1.71521 11.1078C1.71521 11.1078 1.71521 21.973 1.71521 27.3576C1.71521 32.7424 12.4601 37.1077 25.7143 37.1077C38.9687 37.1077 49.7146 32.7424 49.7146 27.3576C49.7146 24.6699 49.7146 11.1078 49.7146 11.1078" stroke="#E862FE" strokeWidth="2.3" />
              </svg>
              <p>Code Analysis</p>
            </li>
          </ul>

          <AnimatedEclipse />
        </div>

      </div>

      <div className=" grid grid-cols-1   place-items-center">
        <span className="fancy-text-two text-center mb-5  font-roboto font-semibold text-4xl">Use AI to handle workflows in your chat platforms.</span>
        <div className="flex md:flex-row flex-col w-full mt-10 mb-14 justify-center ">
          <div className="h-64 mb-14 mx-8 md:w-[35%] bg-white bg-opacity-10 relative p-4 rounded-2xl grid overflow-clip ">
            <div className="flex flex-col gap-4">
              <p className="fancy-text-two text-3xl  md:text-4xl">ask questions</p>
              <p>To assist with managing the development, testing, and <br className=" md:block hidden" /> deployment process, ask it questions or issue instructions.</p>
            </div>
            <button className=" w-36 h-10 bg-blue-600 rounded-3xl text-sm  py-1 px-4  ">COMING SOON</button>
            <Image alt='' className="object-cover absolute w-80  -right-32   top-32" src={Rings}></Image>
          </div>

          <div className="h-64 mx-8 md:w-[35%] relative bg-white bg-opacity-10 p-4 rounded-2xl grid overflow-clip ">
            <div className="flex flex-col gap-4">
              <p className="fancy-text-two text-3xl  md:text-4xl">execute</p>
              <p>With a single command, you may run a series of tests or install a <br className=" md:block hidden" />new version of a programme in a particular setting.</p>
            </div>
            <button className=" w-36 h-10 bg-blue-600 rounded-3xl text-sm  py-1 px-4  ">COMING SOON</button>
            <Image alt='' className="object-cover absolute w-80  -right-32   top-32" src={Rings}></Image>
          </div>
        </div>
        <motion.div

          className="md:h-64 mx-8 p-4 bg-white bg-opacity-10 relative  rounded-2xl grid overflow-clip ">
          <div className="flex flex-col gap-4">
            <p className="fancy-text-two text-3xl md:text-4xl">Fix security concerns more quickly <br className=" md:block hidden" /> using generated code <br /> recommendations</p>
            <p>With the aid of AI, recognise any security risk and swiftly and effectively fix it. <br className=" md:block hidden" /> granting developers the freedom they require to protect their work frequently and early.</p>
          </div>
          <Image alt='' className="object-cover absolute w-80  -z-10 -right-32  top-24" src={Rings}></Image>
        </motion.div>

      </div>

      <div className="flex flex-col justify-center mt-24 py-10 gap-8 pt-10  items-center">
        <span className="fancy-text-one px-5 text-3xl md:text-5xl text-center">Automate all aspects of your delivery process <br /> with AI support.</span>
        <p className="text-center font-light text-xl">Get Early Access</p>
        <Form />
      </div>

      <div className="mb-8  md:mt-16">
        <p className=" text-center">Copyright © 2023 EXOCODE TECHNOLOGIES <br />All rights reserved</p>
      </div>

    </main>
  )
}
