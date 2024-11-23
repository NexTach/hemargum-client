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

const Title = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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

type LogoType = 'education' | 'home' | 'hospital' | 'job';

function Welfare() {
  const [activeLogo, setActiveLogo] = useState<LogoType>('education');

  const handleClick = (logo: LogoType) => setActiveLogo(logo);

  const renderLogo = (type: LogoType, SvgRe: JSX.Element, Svg: JSX.Element, text: string) => (
    <Logo isActive={activeLogo === type} onClick={() => handleClick(type)}>
      {activeLogo === type ? SvgRe : Svg}
      <LogoText isVisible={activeLogo === type}>{text}</LogoText>
    </Logo>
  );

  return (
    <WelfareWrapper>
      <WelfareContainer>
        <Title>
          {activeLogo === 'education' && '#교육'}
          {activeLogo === 'home' && '#주거'}
          {activeLogo === 'hospital' && '#의료'}
          {activeLogo === 'job' && '#구직'}
        </Title>
        <NavBar>
          {renderLogo('education', <EducationSvgRe />, <EducationSvg />, '교육')}
          {renderLogo('home', <HomeSvgRe />, <HomeSvg />, '주거')}
          {renderLogo('hospital', <HospitalSvgRe />, <HospitalSvg />, '의료')}
          {renderLogo('job', <JobSvgRe />, <JobSvg />, '구직')}
        </NavBar>
      </WelfareContainer>
    </WelfareWrapper>
  );
}

export default Welfare;
