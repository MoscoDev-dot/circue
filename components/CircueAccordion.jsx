"use client";
import React, { useState } from "react";

const CircueAccordion = () => {
  const questions = [
    {
      question: "What is Circue?",
      answer:
        "Circue is a communication platform that allows travellers, immigrants or tourists to have access to all the travel information they may need; from answered questions, to directions, to translations, and a community of empathetic people willing to help.",
    },
    {
      question: "How does it work",
      answer:
        "First, you will need to create your profile. You will then select your interests so we can customize your feed to fit in. This basic setup allows you to connect with your friends and access information you may need. To be a guide on Circue, we may require you to put in more information that will help us verify your identity.",
    },
    {
      question: "Does Circue require personal Information?",
      answer:
        "Yes, but only to help you have a better Circue experience.",
    },
     {
      question: "Can i trust reviews from other circue users?",
      answer:
        "Yes. We ensure to verify the location, identity and background of every individual before they become Guides. Star levels are awarded to these individuals based on feedback and the amount of people they have been of help to.",
    },
     {
      question: "Is the App free?",
      answer:
        "Absolutely. You only need to download the app from GooglePlay or AppStore.",
    },
    
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mb-20 mx-auto ">
     
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border border-red-100 border-b-8  rounded-[4vh] shadow-sm"
          >
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-3 flex justify-between items-center focus:outline-none"
            >
              <span className="font-bold text-2xl py-8 px-4 ">{item.question}</span>
              <span
                className={`transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-5 pb-4 text-lg  text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircueAccordion;
