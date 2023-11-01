import { useState } from 'react';

const AccordionSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t-4 border-black p-2 transition-all duration-700 ease-in-out">
      <div className="flex justify-between items-center cursor-pointer mt-3 mb-3" onClick={toggleAccordion}>
        <h2 className={`text-2xl`}>{title}</h2>
        <span className={`text-xl font-bold`}>{isOpen ? '-' : '+'}</span>
      </div>
      <div className={`mt-2 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
        {content}
      </div>
    </div>
  );
};

export default AccordionSection;
