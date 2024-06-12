import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: "Should I wear a helmet?",
    answer: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
  },
  {
    question: "How about the rules & regulations?",
    answer: " Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can  block access to buildings or get in people's way."
  },
  {
    question: "What if I damage my Scoot?",
    answer: "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."
  }
];

const Faq2 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 lg:w-[150vw] ">
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 bg-darkGray bg-opacity-10 rounded-md">
          <button
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-100 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className={`text-lg font-medium ${openIndex === index ? 'text-darkGray' : 'text-darkGray font-mono text-xl'}`}>
              {item.question}
            </span>
            <span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-darkGray font-mono">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq2;
