import { ArrowUpRight, Copyright, Facebook, Github, Linkedin, Mail } from "lucide-react"
import "./styles/index.css";

import {
  heroPhoto,
  handshake,
  python,
  api,
  react,
  coding,
  app,
  design,
  bot,
  desktop
} from "../assets"
import React from "react";


const Social = () => {  
  const data = [
    {
      icon: <Linkedin className="block lg:hidden" />,
      text: "Linkedin",
      link: ""
    },
    {
      icon: <Facebook className="block lg:hidden" />,
      text: "Facebook",
      link: ""
    },
    {
      icon: <Github className="block lg:hidden" />,
      text: "Github",
      link: ""
    },
  ]

  return (
    <div className="ml-auto hidden md:flex gap-2">
      {data.map((item, index) => (
        <React.Fragment key={index}><a key={index} className="hover:underline" href={item.link} target="_blank" rel="noopener noreferrer"><span className="hidden lg:block">{item.text}</span> {item.icon}</a> {index < data.length - 1 ? '/' : ''}</React.Fragment>
      ))}
    </div>
  )
}


const Navbar = () => {  
  const [copied, setCopied] = useState(false);
  const textToCopy = "farkhodabdualiev@gmail.com";

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Nusxalashda xatolik yuz berdi!", err);
    }
  };
  
  return (
    <nav className="hidden md:flex p-6 lg:pl-5 lg:pr-10 items-center">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 rounded-3xl bg-[#F1EFEE] pl-5 p-1">
          <span>
            farkhodabdualiev@gmail.com
          </span>
          <button onClick={copyText} className="rounded-3xl px-10 py-2 bg-white cursor-pointer"> {copied ? "Copied!" : "Copy"} </button>
        </div>
        <a className="rounded-3xl px-10 py-2 bg-white" href="https://github.com/farkhod-abdualiev/cv" >Cv</a>
      </div>
      <Social />
    </nav>
  )
}

const Hero = () => {
  return (
    <div className="grid place-items-center mt-8 mb-17">
      <div className="">
        <div className="flex justify-center mb-7">
          <figure className="relative">
          <img className="border-[#F1EFEE] border-8 h-40 w-40 md:h-52 md:w-52 object-cover  rounded-full" src={heroPhoto} alt="photo" />
          <div className="absolute bg-white py-1 px-4 rounded-2xl top-1/2 -right-24 border-2 border-[#F2F1EF] -rotate-16">Farkhod <span className="ml-2">👋🏻</span></div>
          </figure>
        </div>
        <h2 className="max-w-72 md:max-w-xl font-extrabold text-2xl md:leading-14 md:text-5xl text-center mb-10">Building digital, products, brands and experience.</h2>
        <div className="flex justify-center">
          <a className="flex items-center gap-2 cursor-pointer rounded-3xl bg-neutral-700 text-white border-neutral-200 border-2 px-5 md:px-10 py-2 md:py-4 hover:bg-neutral-800" href="https://github.com/farkhod-abdualiev/cv"><span className="flex gap-1">Latest works <ArrowUpRight /></span></a>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {

  const data = [
    {
      img: coding,
      title: "Html&Css"
    },
    {
      img: react,
      title: "React(Js, Ts)"
    },
    {
      img: python,
      title: "Python(Django)"
    },
    {
      img: api,
      title: "API(DRF, FastAPI)"
    }
  ]

  return (
    <section>
      <div className="flex flex-wrap gap-20 justify-evenly pb-24 pt-10 md:py-10">
        {data.map((item, index) => (
          <figure key={index} className="flex flex-col items-center gap-2">
            <img className="w-14 h-14 mb-2" src={item.img} alt="html&css" />
            <figcaption>
              <h2 className="font-medium text-xl">{item.title}</h2>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>

  )
}

const Services = () => {

  const data = [
    {
      img: app,
      title: "Full Stack Development",
      subtitle: "Building end-to-end solutions with seamless integration between frontend and backend."
    },
    {
      img: design,
      title: "Frontend & Backend",
      subtitle: "Creating fast, scalable, and modern web applications with a clean UI and efficient server logic."
    },
    {
      img: desktop,
      title: "Desktop Applications",
      subtitle: "Developing cross-platform desktop applications with high performance and smooth UX."
    },
    {
      img: bot,
      title: "Telegram Bots",
      subtitle: "Automating tasks and enhancing user experience with powerful and intelligent Telegram bots."
    },
  ]

  return (
    <section className="my-10">
      <article className="grid justify-center mb-10">
        <h2 className="max-w-80 md:max-w-[850px] font-semibold text-lg md:leading-14 md:text-5xl text-center mb-10">Collabrate with brends and agencies to create impactful results.</h2>
      </article>
      <div className="border-neutral-300 border-t-1 mx-20 relative pt-20 mb-32">
        <span className="absolute rotate-[-9deg] left-1/2 -translate-x-1/2 -top-6 px-8 py-2 bg-white rounded-4xl font-medium">Services</span>
        <article className="flex flex-wrap justify-evenly gap-20">
          {data.map((item, index) => (
            <figure key={index} className="basis-64">
              <img className="w-20 h-20 mb-5" src={item.img} alt="app development" />
              <figcaption className="">
                <h2 className="font-semibold mb-3">{item.title}</h2>
                <p className="w-64 font-normal text-sm">{item.subtitle}</p>
              </figcaption>
            </figure>
          ))}
        </article>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <div className="bg-dotted rounded-custom-bottom grid grid-cols-1 pt-10">
      <div className="">
        <figure className="flex flex-col items-center">
          <img className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-full handshake-bg mb-5" src={handshake} alt="hanshake img" />
          <figcaption>
            <h2 className="max-w-80 md:max-w-2xl font-extrabold text-2xl md:text-5xl md:leading-14 text-center mb-10">
              Tell me about your next  projet
            </h2>
          </figcaption>
        </figure>
        <div className="flex gap-5 justify-center mb-10">
          <button className="flex items-center gap-2 cursor-pointer rounded-3xl bg-neutral-700 text-white border-neutral-200 border-2 px-5 md:px-10 py-2 md:py-4 hover:bg-neutral-800">
            <Mail /> Email me
          </button>
          <button className="rounded-3xl cursor-pointer bg-white border-neutral-200 border-2 px-5 md:px-10 py-2 md:py-4 hover:bg-neutral-100">
            WhatsApp
          </button>
        </div>
      </div>
      <div className="justify-center md:justify-between flex pt-5 m-6 lg:m-10 lg:mr-15 items-center border-neutral-300 border-t-1">
        <div className="flex items-center gap-2 ">
          <Copyright />{new Date().getFullYear()} All rights reserved.
        </div>
        <Social />
      </div>
    </div>
  )
}



function App() {
  return (
    <div className="bg-dotted-dark border-[#FFFFFE] border-0 md:border-4 md:rounded-4xl m-0 md:my-10 md:mx-10">
      <header className="flex flex-col bg-dotted rounded-custom-top mb-10 md:mb-20">
        <div className="bg-dotted-dark rounded-custom-top">
          <Navbar />
          <Hero />
        </div>
        <Skills />
      </header>
      <main>
        <Services />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
