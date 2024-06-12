import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const faqData = [
  {
    question: "How do i download the app?",
    answer: "To download the Scoot app, you can search 'scoot' in both the App and Google play stores.An even simpler way to do it would be to click the revelant link at the bottom of this page and you'll be re-directed to the correct page."
  },
  {
    question: "can i find nearby Scoots?",
    answer: " Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information. "
  },
  {
    question: "Do i need a licence to drive?",
    answer: "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <div className="max-w-6xl mx-auto mt-10 lg:w-[150vw] ">
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 bg-darkGray bg-opacity-10 rounded-md">
          <button
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-100 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span  className={`text-lg font-medium ${openIndex === index ? 'text-darkGray' : 'text-darkGray font-mono text-xl'}`}>
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

export default FAQ;
