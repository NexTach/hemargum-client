import styled from 'styled-components';
import { useState } from 'react';
import HomeSvgRe from '../assets/homeSvgRe';
import HospitalSvgRe from '../assets/hospitalScgRe';
import JobSvgRe from '../assets/jobSvgRe';
import EducationSvgRe from '../assets/educationSvgRe';
import HospitalSvg from '../assets/hospitalSvg';
import JobSvg from '../assets/jobSvg';
import EducationSvg from '../assets/educationSvg';
import HomeSvg from '../assets/homeSvg';

// 스타일 정의
const WelfareWrapper = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  justify-content: center;
`;

const WelfareContainer = styled.div`
  width: 1088px;
  height: 520px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
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

// 컴포넌트 정의
type LogoType = 'education' | 'home' | 'hospital' | 'job';

function Welfare() {
  const [activeLogo, setActiveLogo] = useState<LogoType>('education');

  const handleClick = (logo: LogoType) => {
    setActiveLogo(logo);
  };

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
    </WelfareWrapper>
  );
}

export default Welfare;
