import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import HomeSvgRe from '../assets/homeSvgRe';
import HospitalSvgRe from '../assets/hospitalScgRe';
import JobSvgRe from '../assets/jobSvgRe';
import EducationSvgRe from '../assets/educationSvgRe';
import HospitalSvg from '../assets/hospitalSvg';
import JobSvg from '../assets/jobSvg';
import EducationSvg from '../assets/educationSvg';
import HomeSvg from '../assets/homeSvg';
import Card from './card';
import CardArrowSignSvg from '../assets/cardArrowSignSvg';

// 스타일 정의
const WelfareWrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const WelfareContainer = styled.div`
  width: 1088px;
  height: 520px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 42px 0 67px 54px;
`;

const Title = styled.h1`
  color: #44be76;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TitleBlack = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 8px;
`;

const NavBar = styled.div`
  width: 1081px;
  height: 64px;
  border-radius: 10px;
  background: var(--Green, #44be76);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

// Logo 컴포넌트에 사용자 정의 속성 'isVisible'을 추가
const Logo = styled.div<{ isActive: boolean }>`
  background: ${(props) => (props.isActive ? '#fff' : 'var(--Green, #44be76)')};
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// LogoText에서 isVisible 속성 타입을 정의
const LogoText = styled.span<{ isVisible: boolean }>`
  color: #44be76;
  font-family: Pretendard;
  font-weight: 700;
  margin-left: 8px;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

const DragWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  overflow: hidden;
  width: 100%;
`;

const ArrowSign = styled.div<{ rotate?: boolean }>`
  width: 36px;
  height: 36px;
  cursor: pointer;
  transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'none')};
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
`;

const PolicyBox = styled.div`
  width: 1072px;
  height: 370px;
  margin-bottom: 115px;
`;

// 컴포넌트 정의
type LogoType = 'education' | 'home' | 'hospital' | 'job';

interface CardData {
  title: string;
  text: string;
}

function Welfare() {
  const [activeLogo, setActiveLogo] = useState<LogoType>('education');

  const handleClick = (logo: LogoType) => {
    setActiveLogo(logo);
  };

  const [scrollPosition, setScrollPosition] = useState<number>(0);
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
    }
  };

  const scrollRight = (): void => {
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
    <WelfareWrapper>
      <WelfareContainer>
        <TitleWrapper>
          <Title>
            {activeLogo === 'education' && '#교육'}
            {activeLogo === 'home' && '#주거'}
            {activeLogo === 'hospital' && '#병원'}
            {activeLogo === 'job' && '#취업'}
          </Title>
          <TitleBlack>에 관한</TitleBlack>
          <Title>복지</Title>
        </TitleWrapper>
        <NavBar>
          <Logo isActive={activeLogo === 'education'} onClick={() => handleClick('education')}>
            {activeLogo === 'education' ? <EducationSvgRe /> : <EducationSvg />}
            <LogoText isVisible={activeLogo === 'education'}>교육</LogoText>
          </Logo>
          <Logo isActive={activeLogo === 'home'} onClick={() => handleClick('home')}>
            {activeLogo === 'home' ? <HomeSvgRe /> : <HomeSvg />}
            <LogoText isVisible={activeLogo === 'home'}>주거</LogoText>
          </Logo>
          <Logo isActive={activeLogo === 'hospital'} onClick={() => handleClick('hospital')}>
            {activeLogo === 'hospital' ? <HospitalSvgRe /> : <HospitalSvg />}
            <LogoText isVisible={activeLogo === 'hospital'}>병원</LogoText>
          </Logo>
          <Logo isActive={activeLogo === 'job'} onClick={() => handleClick('job')}>
            {activeLogo === 'job' ? <JobSvgRe /> : <JobSvg />}
            <LogoText isVisible={activeLogo === 'job'}>취업</LogoText>
          </Logo>
        </NavBar>
      </WelfareContainer>
      <PolicyBox>
        <DragWrapper>
          <ArrowSign onClick={scrollLeft}>
            <CardArrowSignSvg />
          </ArrowSign>
          <CardWrapper ref={cardWrapperRef}>
            <Slider>
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
    </WelfareWrapper>
  );
}

export default Welfare;
