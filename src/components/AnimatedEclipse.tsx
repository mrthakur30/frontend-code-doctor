import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

type Props = {}
const texts = [['Code ', ' Doctor  👋 !'], ['What can I', 'help you with?']];
const timeDurations = [5, 5];

export const AnimatedEclipse = (props: Props) => {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, timeDurations[currentTextIndex] * 1000);

        return () => clearInterval(interval);
    }, [currentTextIndex]);

    return (
        <div className="mx-auto">
            <motion.svg
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}

                className="  top-64 md:top-56 md:left-1/3 absolute " xmlns="http://www.w3.org/2000/svg" width="420" height="350" viewBox="0 0 538 475" fill="none">


                <g filter="url(#filter0_f_6_78)">
                    <path d="M34.8639 358.256C-24.2037 255.948 51.057 122.9 172.395 52.8452C293.733 -17.2094 439.981 8.93713 499.049 111.245C558.116 213.553 507.636 353.281 386.298 423.335C264.96 493.39 93.9315 460.564 34.8639 358.256Z" stroke="url(#paint0_linear_6_78)" strokeWidth="9" />
                    <path d="M34.8639 358.256C-24.2037 255.948 51.057 122.9 172.395 52.8452C293.733 -17.2094 439.981 8.93713 499.049 111.245C558.116 213.553 507.636 353.281 386.298 423.335C264.96 493.39 93.9315 460.564 34.8639 358.256Z" stroke="url(#paint1_linear_6_78)" strokeOpacity="0.2" strokeWidth="9" />
                </g>
                <defs>
                    <filter id="filter0_f_6_78" x="0.825958" y="0.074707" width="536.455" height="473.978" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_6_78" />
                    </filter>
                    <linearGradient id="paint0_linear_6_78" x1="375.836" y1="429.376" x2="161.933" y2="58.8855" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A056F7" />
                        <stop offset="1" stopColor="#20C1E4" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_6_78" x1="474.9" y1="126.801" x2="15.849" y2="171.364" gradientUnits="userSpaceOnUse">
                        <stop offset="0.0104167" stopColor="#0A05F8" stopOpacity="0.33" />
                        <stop offset="1" stopColor="white" stopOpacity="0.15" />
                    </linearGradient>
                </defs>
            </motion.svg>


            <div
                className="  top-96 w-1/3 left-28 md:top-80 md:left-[38%] absolute "
                style={{ width: '35%', height: '25%', whiteSpace: 'nowrap' }}>
                <motion.div
                    key={currentTextIndex}
                    style={{ display: 'inline-block' }}
                    initial={{ opacity: 0.1, scale: '0.8' }}
                    animate={{ opacity: 1, scale: '1' }}
                    exit={{ opacity: 0.5, scale: '0.8' }}
                    transition={{ duration: timeDurations[currentTextIndex], ease: 'easeOut' }}
                >
                    <p className="text-center md:text-5xl text-3xl"> {texts[currentTextIndex][0]}</p>
                    <p className="text-center md:text-5xl text-3xl"> {texts[currentTextIndex][1]}</p>
                </motion.div>
            </div>
        </div>
    )
}