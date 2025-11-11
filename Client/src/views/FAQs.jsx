import React, { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const FAQs = () => {
  const [openItem, setOpenItem] = useState("item-1");
  const headingRef = useRef(null)
  const accordionContainerRef = useRef(null)

  useEffect(() => {
    const heading = headingRef.current
    const container = accordionContainerRef.current
    if (!heading || !container) return

    const items = Array.from(container.querySelectorAll('.rounded-3xl'))

    // set initial states
    gsap.set(heading, { opacity: 0, y: 24 })
    gsap.set(items, { opacity: 0, y: 50 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#faqs-section',
        start: 'top 85%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
      defaults: { ease: 'power2.out' }
    })

    tl.to(heading, { opacity: 1, y: 0, duration: 0.6 })
      .to(items, { opacity: 1, y: 24, duration: 0.6, stagger: 0.2 }, '-=0.3')

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill()
      tl.kill()
    }
  }, [])

  return (
    <>
      <div id="faqs-section" className="relative h-screen w-full bg-transparent flex items-center z-30">
        <div className="h-full w-1/2 flex justify-center items-center text-[5rem] font-bold text-white">
          <p ref={headingRef}>FAQs</p>
        </div>
        <div ref={accordionContainerRef} className="h-full w-1/2 flex flex-col items-center justify-center gap-3">
          <Accordion
            type="single"
            collapsible
            className="w-4/5 flex flex-col gap-3"
            value={openItem}
            onValueChange={setOpenItem}
          >
            <AccordionItem 
              value="item-1"
              className={`bg-white rounded-3xl transition-all duration-300 ease-in-out ${
                openItem === "item-1" ? "scale-105 shadow-xl" : "scale-100"
              }`}
            >
              <AccordionTrigger className="px-6">What is Ikigai4Teens?</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-md px-6">
                <p>
                  Ikigai4Teens is a space built to help teenagers figure out what truly excites them and how it connects to real-world careers. It's based on the Japanese idea of Ikigai — finding purpose by combining what you love, what you're good at, and what the world needs. Our platform uses AI to make that process easier and more personal for every teen.
                </p>
                <p>
                  Simply put, we help teens discover their passions and strengths, and show them how those can lead to meaningful career paths. Our goal is to give teens the clarity and confidence to shape their future.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-2"
              className={`bg-white rounded-3xl transition-all duration-300 ease-in-out ${
                openItem === "item-2" ? "scale-105 shadow-xl" : "scale-100"
              }`}
            >
              <AccordionTrigger className="px-6">How does the platform work?</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-md px-6">
                <p>
                  You start by answering a few fun and simple questions about your interests, hobbies, and goals. Then, our system analyzes your responses and suggests possible career paths, skills to learn, and resources to explore. Think of it as your personal guide to discovering a direction that actually fits you.
                </p>
                <p>
                  And in no time at all, you'll have a clearer idea of what careers align with your passions and strengths. It's all about making career discovery less confusing and more tailored to you.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-3"
              className={`bg-white rounded-3xl transition-all duration-300 ease-in-out ${
                openItem === "item-3" ? "scale-105 shadow-xl" : "scale-100"
              }`}
            >
              <AccordionTrigger className="px-6">Do I need any experience or career knowledge to use it?</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-md px-6">
                <p>
                  Not at all. Ikigai4Teens is made for teens who are just starting to explore what they want to do in life. You don't need to know your dream career or have special skills — the platform helps you discover them step by step.
                </p>
                <p>
                  Just be open to exploring your interests and strengths, and let the platform guide you. It's designed to be simple, fun, and easy to use, no matter where you're starting from.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-4"
              className={`bg-white rounded-3xl transition-all duration-300 ease-in-out ${
                openItem === "item-4" ? "scale-105 shadow-xl" : "scale-100"
              }`}
            >
              <AccordionTrigger className="px-6">Is Ikigai4Teens free to use?</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-md px-6">
                <p>
                  Yes! The basic version of Ikigai4Teens is completely free to try. We want every teenager to have access to career clarity without any barriers. Later, we plan to add some advanced tools and personalized reports that users can unlock if they want.
                </p>
                <p>
                  But for now, you can explore your interests and get career suggestions at no cost. Our goal is to help as many teens as possible find their path.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-5"
              className={`bg-white rounded-3xl transition-all duration-300 ease-in-out ${
                openItem === "item-5" ? "scale-105 shadow-xl" : "scale-100"
              }`}
            >
              <AccordionTrigger className="px-6">What makes Ikigai4Teens different from other career tests?</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance px-6">
                <p>
                  Most career tests just match your answers to fixed job options. Ikigai4Teens goes deeper — it focuses on understanding you. It connects your passions, strengths, and values to real opportunities, and gives you practical next steps to move closer to a career you'll actually enjoy.
                </p>
                <p>
                  Plus, it's designed specifically for teenagers, so the questions and suggestions are relevant to where you are in life. It's not about fitting you into a box, but helping you discover a path that truly fits who you are.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FAQs;
