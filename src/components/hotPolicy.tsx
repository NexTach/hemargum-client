import styled from 'styled-components';
import Card from './card';
import { useState, useRef, useEffect } from 'react';
import CardArrowSignSvg from '../assets/cardArrowSignSvg';

const PolicyWrapper = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  justify-content: center;
  margin-top: 42px;
`;

const PolicyBox = styled.div`
  width: 1072px;
  height: 370px;
  border-bottom: 1px solid #d9d9d9;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowSign = styled.div<{ rotate?: boolean }>`
  width: 36px;
  height: 36px;
  cursor: pointer;
  transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'none')};
`;

const DragWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  overflow: hidden;
  width: 100%;
  transition: transform 0.5s ease-in-out;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.5s ease-in-out;
`;

interface CardData {
  title: string;
  text: string;
}

function HotPolicy() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const cardWidth: number = 300;
  const totalCards: number = 6;
  const maxScrollPosition: number = cardWidth * (totalCards - 1);

  useEffect(() => {
    const cardWrapper = cardWrapperRef.current;
    if (cardWrapper) {
      cardWrapper.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (cardWrapper) {
        cardWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleScroll = () => {
    const cardWrapper = cardWrapperRef.current;
    if (cardWrapper) {
      setScrollPosition(cardWrapper.scrollLeft);
    }
  };

  const scrollLeft = (): void => {
    if (!isScrolling) {
      setIsScrolling(true);
      const cardWrapper = cardWrapperRef.current;
      if (cardWrapper) {
        if (scrollPosition === 0) {
          cardWrapper.scrollTo({
            left: maxScrollPosition,
            behavior: 'smooth',
          });
        } else {
          cardWrapper.scrollTo({
            left: scrollPosition - cardWidth,
            behavior: 'smooth',
          });
        }
        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    }
  };

  const scrollRight = (): void => {
    if (!isScrolling) {
      setIsScrolling(true);
      const cardWrapper = cardWrapperRef.current;
      if (cardWrapper) {
        const maxScrollLeft = cardWrapper.scrollWidth - cardWrapper.clientWidth;
        if (scrollPosition >= maxScrollLeft) {
          cardWrapper.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        } else {
          cardWrapper.scrollTo({
            left: scrollPosition + cardWidth,
            behavior: 'smooth',
          });
        }
        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    }
  };

  const cardData: CardData[] = [
    { title: '이상혁', text: '프론트엔드' },
    { title: '황지훈', text: '백엔드' },
    { title: '김민솔', text: '디자인' },
    { title: '권재헌', text: '무전공' },
    { title: '박승일', text: 'AI' },
    { title: '김태은', text: '백엔드' },
  ];

  return (
    <>
      <PolicyWrapper>
        <PolicyBox>
          <DragWrapper>
            <ArrowSign onClick={scrollLeft}>
              <CardArrowSignSvg />
            </ArrowSign>
            <CardWrapper ref={cardWrapperRef}>
              <Slider style={{ transform: `translateX(-${scrollPosition}px)` }}>
                {cardData.map((card, index) => (
                  <Card key={index} title={card.title} text={card.text} />
                ))}
              </Slider>
            </CardWrapper>
            <ArrowSign onClick={scrollRight} rotate>
              <CardArrowSignSvg />
            </ArrowSign>
          </DragWrapper>
        </PolicyBox>
      </PolicyWrapper>
    </>
  );
}

export default HotPolicy;
