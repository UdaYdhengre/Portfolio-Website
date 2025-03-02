
const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center ">
      <div className="flex flex-col items-center  justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-[25px] md:text-7x1">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Get in Touch</span>
        </h1>

         <p className="text-center text-1g font-semibold text-gray-500">
          want to chat? send me an E-mail through this button and I'll respond
          whenever I can.
         </p>

         <a href="mailto:udaydhengre4@gmail.com" className="text-nowrap rounded-1g border border-indigo-600 bg-black px-5 py-3 text-1g font-bold text-white shadow-1g shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-x1 hover:shadow-indigo-600">Contact Me</a>
      </div>
    </div>
  )
}

export default Contact;
