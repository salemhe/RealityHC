import React, { useState } from 'react';
import './Faq.css'; // Importing the CSS file for styling

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of Reality Health care services does your company offer?",
      answer: "Our company provides a range of elder care services including in-home care, skilled nursing care, physical and occupational therapy, medication management, and companionship. We also offer specialized care for conditions such as Alzheimer's and dementia, and support for activities of daily living."
    },
    {
      question: "How do I know if your services are right for my loved one?",
      answer: "We conduct a thorough assessment of each individual's needs through an initial consultation. This includes evaluating medical conditions, care preferences, and personal requirements. Based on this assessment, we recommend a personalized care plan to ensure that the services we provide are tailored to your loved one’s specific needs."
    },
    {
      question: "What qualifications do your caregivers and healthcare professionals have?",
      answer: "Our caregivers and healthcare professionals are highly trained and certified in their respective fields. They undergo rigorous background checks, ongoing training, and adhere to our company’s standards for care. We ensure that all staff members have the necessary certifications and experience to provide high-quality care."
    },
    {
      question: "How do you handle emergencies or changes in my loved one’s condition?",
      answer: "We have protocols in place to handle emergencies and changes in health conditions. Our caregivers are trained to respond to emergencies and report any significant changes to our management team. We also have 24/7 support and coordination with healthcare providers to ensure timely intervention when needed."
    },
    {
      question: "What are the costs associated with your services, and are there payment options?",
      answer: "The cost of our services varies based on the type of care needed and the level of support required. We provide a transparent pricing structure and can offer a detailed cost estimate after an initial assessment. We accept various payment options, including private pay, long-term care insurance, and we can assist with exploring potential financial aid or benefits available to you."
    }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span className={`arrow ${openIndex === index ? 'open' : ''}`}>&#9662;</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;


