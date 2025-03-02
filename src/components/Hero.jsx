import image from "/public/image.jpg"
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28  md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        <motion.div
         initial={{ y :-50,Opacity: 0}}
         animate={{ y: 0,Opacity:1}}
         transition={{duration: 0.8, delay:0.2}}
        
        >
          <img src={image} alt=""  className="w-[300px]
          cursor-pointer rounded-full shadow-x1 shadow-indigo-900 transition-all duration-300 hover:-tranlate-y-5 hover:scale-105 hover:shadow-2x1 hover:shadow-indigo-600 md:w-[350px]"/>
        </motion.div>

        <motion.div
         initial={{ y :50,Opacity: 0}}
         animate={{ y: 0,Opacity:1}}
         transition={{duration: 0.8, delay:0.2}}

        className="flex max-w-[600px] flex-col items-center     justify-center gap-3 text-center">
         <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-[32px] font-light
         md:text-7x1">Uday Dhengre</h1>
         <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-[20px]  md:text-3x1">Web Developer</h3>
         <p className="md:text-base text-pretty text-sm text-gray-400">
          I'm a web developer skilled in React, Next.js, and Tailwind,focused 
          on builiding clean, scalable applications. From front-end design to 
          seamless database integration with PostgreSQL, I create efficient 
          Solution for dynamic user experience. Let's build Something great 
          together!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;
