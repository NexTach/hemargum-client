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

const Logo = styled.div<{ isActive: boolean }>`
  background: ${(props) => (props.isActive ? '#fff' : 'var(--Green, #44be76)')};
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

type LogoType = 'education' | 'home' | 'hospital' | 'job';

interface CardData {
  title: string;
  text: string;
}

function Navigation() {
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

  const educationCardData: CardData[] = [
    { title: '교육자료', text: 'https://okep.moe.go.kr/root/index.do?utm_source=chatgpt.com' },
    { title: '한국어능력시험', text: 'https://www.hrdkorea.or.kr/1/3/3/2/1' },
    { title: '한국어 실력평가', text: 'https://nuri.iksi.or.kr/front/page/participation/onlineLevelTest/main.do' },
    { title: '한국어 문법 학습', text: 'https://nuri.iksi.or.kr/front/cms/contents/practice/list.do' },
    {
      title: '한국어 어휘 학습',
      text: 'https://nuri.iksi.or.kr/front/cms/contents/layout2/learningdictionary/contentsList.do',
    },
  ];

  const homeCardData: CardData[] = [{ title: '숙박신고', text: 'https://kstay.hikorea.go.kr/index.do' }];

  const hospitalCardData: CardData[] = [
    {
      title: '법무부지정 의료기관',
      text: 'https://www.hikorea.go.kr/board/BoardNtcDetailR.pt?BBS_SEQ=1&BBS_GB_CD=BS10&NTCCTT_SEQ=365&page=1',
    },
    {
      title: '건강보험 적용안내',
      text: 'https://www.nhis.or.kr/renewal_popup/imgPopup201906_001/index.html?utm_source=chatgpt.com',
    },
  ];

  const jobCardData: CardData[] = [
    { title: '고용허가제 정보', text: 'https://www.hrdkorea.or.kr/1/3/4?k=50537&pageNo=&searchType=&searchText=' },
    {
      title: '고용허가 발급',
      text: 'https://www.work24.go.kr/cm/z/b/0210/openLginPage.do?loginMessage=3&forwardUrl=/ep/a/a/0001/hpepaa0001m01bplcPost.do',
    },
    { title: '보험가입', text: 'https://www.hrdkorea.or.kr/1/3/3/2/2' },
    { title: '채용공고', text: 'https://eps.hrdkorea.or.kr/e9/user/jobMatching/jobRecruit.do?method=recruitList' },
    { title: '기업 PR', text: 'https://eps.hrdkorea.or.kr/e9/user/jobMatching/jobRecruit.do?method=prList' },
    { title: '서울특별시 일자리', text: 'https://global.seoul.go.kr/web/work/workListPage.do?lang=ko' },
  ];

  const cardData: CardData[] = (() => {
    switch (activeLogo) {
      case 'education':
        return educationCardData;
      case 'home':
        return homeCardData;
      case 'hospital':
        return hospitalCardData;
      case 'job':
        return jobCardData;
      default:
        return [];
    }
  })();

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

export default Navigation;
