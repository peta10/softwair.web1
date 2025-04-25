import React, { useState } from 'react';
import { BackgroundGradient } from './ui/background-gradient'; // Import BackgroundGradient
import { Badge } from './ui/badge';

// Removed comment about Preline UI as we are implementing state logic now

const FAQSection: React.FC = () => {
  // State to track the currently open accordion item
  const [openAccordion, setOpenAccordion] = useState<string | null>('one'); // Start with 'one' open

  const faqs = [
    {
      id: 'one',
      question: 'What kind of problems does Softwair solve?',
      answer: "We specialize in identifying and solving business inefficiencies through custom software automation. Whether it's streamlining workflows, automating repetitive tasks, or integrating disparate systems, we build solutions that save you time and resources.",
      // removed active property
    },
    {
      id: 'two',
      question: "What's involved in the Custom Solution Plan?",
      answer: "After our initial Problem Discovery Audit, we create a detailed proposal including wireframes and a clear roadmap. This ensures you understand exactly how the proposed software will address your specific challenges and what the final product will look like.",
    },
    {
      id: 'three',
      question: 'How long does development take?',
      answer: "Project timelines vary depending on complexity. However, we prioritize clear communication and agile development methodologies, providing regular updates throughout the process. We establish estimated timelines during the planning phase.",
    },
    {
      id: 'four',
      question: 'What kind of post-launch support do you offer?',
      answer: "Our partnership doesn't end at launch. We provide ongoing maintenance and support packages to ensure your custom solution remains effective, secure, and adapts to your evolving business needs.",
    },
    {
      id: 'five',
      question: 'What industries or technologies do you specialize in?',
      answer: "While we're adaptable, we have deep expertise in building custom web applications, automation scripts, and API integrations using modern technologies like React, Node.js, Python, and cloud platforms. We tailor the tech stack to best suit your project's requirements.",
    },
    {
      id: 'six',
      question: 'How is pricing determined?',
      answer: "Pricing is tailored to the specific scope and complexity of each project, outlined clearly in our Custom Solution Plan. We offer transparent pricing models, which could be project-based or retainer-based for ongoing support, ensuring there are no surprises.",
    },
  ];

  const handleToggle = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="faq" className="w-full py-20">
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Title with gradient text like in InteractiveServices */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <Badge className="mb-4 bg-[#00FF79]/20 text-[#00FF79] hover:bg-[#00FF79]/30">Your Questions, Answered</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
            Your Questions, Answered
          </h2>
          <p className="text-lg text-[#99999A]">
            Answers to frequently asked questions about Softwair.
          </p>
        </div>
        {/* End Title */}

        <div className="max-w-3xl mx-auto">
          {/* Accordion */}
          <div className="space-y-4"> {/* Using space-y for consistent spacing */}
            {faqs.map((faq) => {
              const isOpen = openAccordion === faq.id;
              return (
                // Wrap with BackgroundGradient
                <BackgroundGradient
                  key={faq.id}
                  containerClassName="rounded-xl cursor-pointer" // Add cursor-pointer to show it's clickable
                  className="rounded-xl p-6 bg-[#22232A]/90 hover:bg-[#22232A] border border-[#32333A]" // Match the InteractiveServices card style
                  animate={isOpen} // Re-enable animation based on open state
                  onClick={() => handleToggle(faq.id)} // Make entire card clickable
                >
                  {/* This div now acts as the content container inside the gradient */}
                  <div
                    id={`hs-faq-${faq.id}`}
                    className="cursor-pointer" // Ensure cursor shows as pointer
                  >
                    <button
                      className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-white rounded-lg transition hover:text-gray-300"
                      aria-controls={`hs-faq-collapse-${faq.id}`}
                      aria-expanded={isOpen ? "true" : "false"}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent double triggering
                        handleToggle(faq.id);
                      }}
                    >
                      {faq.question}
                      {/* Arrow Icons */}
                      <svg
                        className={`${isOpen ? 'hidden' : 'block'} shrink-0 size-5 text-gray-400 group-hover:text-gray-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className={`${isOpen ? 'block' : 'hidden'} shrink-0 size-5 text-gray-400 group-hover:text-gray-300 transition-transform duration-300`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id={`hs-faq-collapse-${faq.id}`}
                      // Ensure answer text color is appropriate
                      className={`w-full overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                      role="region"
                      aria-labelledby={`hs-faq-${faq.id}`}
                    >
                      <p className="text-[#99999A] pt-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </BackgroundGradient>
              );
            })}
          </div>
          {/* End Accordion */}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 