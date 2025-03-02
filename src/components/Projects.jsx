import { MdDescription } from "react-icons/md";
import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";
import { motion } from "framer-motion";

const ProjectsData = [
  {
    image: image1,
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website showcasing skills, projects, and a contact form. It includes a dark mode toggle and animations.", 
    technologies: ["React.js","Tailwind CSS","Framer Motion","JavaScript"],
  },
  {
    image: image2,
    title: "Amazon Clone -E-Commerce Platform",
    description: "A fully functional Amazon-inspired e-commerce platform where users can browse products, add items to their cart, and complete purchases securely. The platform includes user authentication, product filtering, a shopping cart, and a secure payment gateway. Admins can manage products, orders, and users through a dashboard.", 
    technologies: ["React.js","Redux ToolKit","Tailwind CSS","Node.js"],
  },
  {
    image: image3,
    title: "Real Estate Listing Platform (Gamma)",
    description: "A real estate marketplace where users can buy, sell, or rent properties. Listings include images, prices, and agent contact details.", 
    technologies: ["Node.js","React.js","Tailwind CSS","Express.js"],
  },
  {
    image: image4,
    title: "Weather App",
    description: "A weather application that fetches real-time weather data based on the user’s location or search input. It displays temperature, humidity, wind speed, and a 7-day forecast.", 
    technologies: ["React.js","Tailwind CSS","WeatherAPI","ForeCast View"],
  },
  {
    image: image5,
    title: "Online Learning Platform",
    description: "A course-selling platform where instructors can create and sell courses, and students can enroll, watch video lessons, and receive certificates.", 
    technologies: ["React.js","Next.js","Tailwind CSS","Node.js"],
  },
]

const ScrollReveal =({children}) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24 ">
       <img src={project.image} alt="" className="w-full cursor-pointer rounded-2x1 transition-all duration-300 hover:scale-105 md:w-[300px]" />

       <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-3">
        <div className="text-x1 font-semibold">{project.title}</div>
        <p className="text-gray-400">{project.description}</p>
        </div>
         
        <div className="flex flex-wrap gap-5">
          {
            project.technologies.map((tech, index) => (
              <span key={index} className="rounded-1g bg-black p-3">
                {tech}
              </span>
            ))
          }
        </div>

       </div>
    </div>
    </ScrollReveal>
  )

}

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14  md:py-24">

      <ScrollReveal>
      <h1 className="text-[25px] font-light text-white md:text-6x1 ">My Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          ProjectsData.map((project, index) => (
           <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
