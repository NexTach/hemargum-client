import styled from 'styled-components';
import Card from './card';
import { useState } from 'react';

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

const TitleWrapper = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const TitleGreen = styled.p`
  color: #44be76;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
  transition: transform 0.5s ease-in-out;
`;

const ArrowSign = styled.div`
  width: 36px;
  height: 36px;
  background-color: red;
  cursor: pointer;
`;

const DragWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  overflow: hidden;
  width: 100%;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
`;

function HotPolicy() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 300;
  const totalCards = 6;
  const maxScrollPosition = cardWidth * (totalCards - 1);

  const scrollLeft = () => {
    setScrollPosition((prev) => (prev - cardWidth < 0 ? maxScrollPosition : prev - cardWidth));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => (prev + cardWidth > maxScrollPosition ? 0 : prev + cardWidth));
  };

  return (
    <>
      <PolicyWrapper>
        <PolicyBox>
          <TitleWrapper>
            최근
            <TitleGreen>HOT</TitleGreen>한 정책
          </TitleWrapper>
          <DragWrapper>
            <ArrowSign onClick={scrollLeft} />
            <CardWrapper style={{ transform: `translateX(-${scrollPosition}px)` }}>
              <Slider>
                <Card title={'이상혁'} text={'프론트엔드'} />
                <Card title={'황지훈'} text={'백엔드'} />
                <Card title={'김민솔'} text={'디자인'} />
                <Card title={'권재헌'} text={'무전공'} />
                <Card title={'박승일'} text={'AI'} />
                <Card title={'김태은'} text={'백엔드'} />
              </Slider>
            </CardWrapper>
            <ArrowSign onClick={scrollRight} />
          </DragWrapper>
        </PolicyBox>
      </PolicyWrapper>
    </>
  );
}

export default HotPolicy;
