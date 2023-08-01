import React from 'react';
import styled, { keyframes } from 'styled-components';

const commentName = [
  ["A", "Annie", "EliteSite's service is a game-changer, offering innovative strategies and seamless execution that redefine success for any venture."],
  ["N", "Nahla", "With EliteSite, excellence is the standard. Their team's professionalism and visionary approach guarantee outstanding outcomes."],
  ["N", "Norman", "Trusting EliteSite was a decision we'll never regret – they delivered beyond our expectations and empowered our brand like never before."],
  ["I", "Ibrahim", "The level of expertise at EliteSite is astounding; their customized solutions propel businesses towards unprecedented achievements."],
  ["E", "Elias", "Seamless collaboration with EliteSite allowed us to achieve remarkable growth, making them an invaluable partner for any business."],
  ["N", "Nermin", "EliteSite's service is a testament to their commitment to excellence, providing cutting-edge solutions that create a lasting impact."],
  ["E", "Ella", "From concept to implementation, EliteSite's service demonstrates finesse and ingenuity, setting them apart as true industry leaders."],
  ["S", "Sarah", "Working with EliteSite was an absolute pleasure; their team's dedication and proficiency ensured a smooth and rewarding journey."],
  ["H", "Hedjaralin", "EliteSite's service is a testament to their passion for success, delivering top-tier solutions that leave a lasting impression."]
];

const Wrapper = styled.div`
  /* background: linear-gradient(60deg, #420285, #08BDBD);
  height: 100%;
  width: 100%; */
  display: flex;
  justify-content: space-between;
`;

const Carousel = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const carouselAnimation = keyframes`
  0% {
    transform: translateY(100%) scale(0.5);
    opacity: 0;
    visibility: hidden;
  }
  3%, 11.1111111111% {
    transform: translateY(100%) scale(0.7);
    opacity: 0.4;
    visibility: visible;
  }
  14.1111111111%, 22.2222222222% {
    transform: translateY(0) scale(1);
    opacity: 1;
    visibility: visible;
  }
  25.2222222222%, 33.3333333333% {
    transform: translateY(-100%) scale(0.7);
    opacity: 0.4;
    visibility: visible;
  }
  36.3333333333% {
    transform: translateY(-100%) scale(0.5);
    opacity: 0;
    visibility: visible;
  }
  100% {
    transform: translateY(-100%) scale(0.5);
    opacity: 0;
    visibility: hidden;
  }
`;

const CarouselItem = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 50rem;
  padding: 0 12px;
  opacity: 0;
  filter: drop-shadow(0 2px 2px #555);
  will-change: transform, opacity;
  animation: ${carouselAnimation} 27s linear infinite;

  &:nth-child(1) {
    animation-delay: calc(3s * -1);
  }
  &:nth-child(2) {
    animation-delay: calc(3s * 0);
  }
  &:nth-child(3) {
    animation-delay: calc(3s * 1);
  }
  &:nth-child(4) {
    animation-delay: calc(3s * 2);
  }
  &:nth-child(5) {
    animation-delay: calc(3s * 3);
  }
  &:nth-child(6) {
    animation-delay: calc(3s * 4);
  }
  &:nth-child(7) {
    animation-delay: calc(3s * 5);
  }
  &:nth-child(8) {
    animation-delay: calc(3s * 6);
  }
  &:last-child {
    animation-delay: calc(-3s * 2);
  }
`;

const CarouselItemHead = styled.div`
  border-radius: 50%;
  background-color: #d7f7fc;
  width: 90px;
  height: 90px;
  padding: 14px;
  position: relative;
  margin-right: -45px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;

const CarouselItemBody = styled.div`
  width: 100%;
  background-color: #11112B;
  border-radius: 8px;
  padding: 16px 20px 16px 70px;
  color: #fff;

  .title {
    text-transform: uppercase;
    font-size: 20px;
    margin-top: 10px;
  }
`;

const CarouselComment = () => {
  return (
    <Wrapper>
      <Carousel>
        {commentName.map((i, index) => (
          <CarouselItem key={index}>
            <CarouselItemHead>
              {i[0]}
            </CarouselItemHead>
            <CarouselItemBody>
              <p className="title">{i[1]}</p>
              <p>{i[2]}</p>
            </CarouselItemBody>
          </CarouselItem>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default CarouselComment;
