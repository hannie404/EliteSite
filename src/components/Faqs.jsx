import React, { useState } from 'react';
import styled from 'styled-components';

const StyledAccordion = styled.div`
  /* margin: 0 auto; */
  padding: 2rem 0rem;
  width: 48rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const AccordionItem = styled.div`
/* background: #ffffff40; */
background: linear-gradient(to bottom, #11112b44, #ffffff1d);
  border-bottom: 1px solid #e5e5e5;
`;

const AccordionButton = styled.button`
  position: relative;
  display: block;
  text-align: left;
  width: 100%;
  padding: 1em 0;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 400;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #03b5d2;
  }

  &:hover::after,
  &:focus::after {
    cursor: pointer;
    color: #03b5d2;
    border: 1px solid #03b5d2;
  }

  .accordion-title {
    padding: 1em 1.5em 1em 0;
  }

  .icon {
    display: inline-block;
    position: absolute;
    top: 18px;
    right: 0;
    width: 22px;
    height: 22px;
    border: 1px solid;
    border-radius: 22px;

    &::before {
      display: block;
      position: absolute;
      content: "";
      top: 9px;
      left: 5px;
      width: 10px;
      height: 2px;
      background: currentColor;
    }

    &::after {
      display: block;
      position: absolute;
      content: "";
      top: 5px;
      left: 9px;
      width: 2px;
      height: 10px;
      background: currentColor;
    }
  }

  &[aria-expanded='true'] {
    color: #03b5d2;

    .icon::after {
      width: 0;
    }
  }
`;

const AccordionContent = styled.div`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 200ms linear, max-height 200ms linear;
  will-change: opacity, max-height;

  &[aria-expanded='true'] {
    opacity: 1;
    max-height: 9em;
    transition: all 200ms linear;
    will-change: opacity, max-height;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    margin: 2em 0;
  }
`;

const items = [
  {
    id: 'accordion-button-1',
    title: 'Why is the moon sometimes out during the day?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    id: 'accordion-button-2',
    title: 'Why is the sky blue?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    id: 'accordion-button-3',
    title: 'Will we ever discover aliens?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    id: 'accordion-button-4',
    title: 'How much does the Earth weigh?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    id: 'accordion-button-5',
    title: 'How do airplanes stay up?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
];

const Faqs = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <StyledAccordion>
      <div className="accordion">
        {items.map((item) => (
          <AccordionItem key={item.id} className="accordion-item p-2 ps-3 pe-3">
            <AccordionButton
              id={item.id}
              aria-expanded={activeId === item.id ? 'true' : 'false'}
              onClick={() => toggleAccordion(item.id)}
            >
              <span className="accordion-title">{item.title}</span>
              <span className="icon" aria-hidden="true"></span>
            </AccordionButton>
            <AccordionContent
              className="accordion-content text-light"
              aria-expanded={activeId === item.id ? 'true' : 'false'}
            >
              <p>{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
    </StyledAccordion>
  );
};

export default Faqs;

