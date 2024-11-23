import styled from 'styled-components';

const IntroduceWrapper = styled.div`
  width: 100vw;
  height: 311px;
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  width: 1080px;
  height: 159px;
  display: flex;
  align-items: center;
  margin-top: 152px;
  border-bottom: 1px solid #d9d9d9;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-right: 50px;
`;

const InYourBox = styled.div`
  display: flex;
  align-items: center;
`;

const TextH2InYour = styled.h2`
  color: var(--Green, #44be76);
  font-family: 'Pretendard Variable';
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 95%; /* 60.8px */
`;

const TextH2Green = styled.h2`
  color: rgba(16, 16, 16, 1);
  font-family: 'Pretendard Variable';
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 95%;
  margin-right: 20px;
`;

const MentWrapper = styled.div`
  width: 644px;
  height: 76px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Ment = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
`;

const MentGreen = styled.p`
  color: var(--Green, #44be76);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.16px;
`;

const MentBox = styled.div`
  display: flex;
  align-items: center;
`;

function Introduce() {
  return (
    <IntroduceWrapper>
      <TextWrapper>
        <TextBox>
          <TextH2InYour>in Tour</TextH2InYour>
          <InYourBox>
            <TextH2Green>In</TextH2Green>
            <TextH2InYour> your</TextH2InYour>
          </InYourBox>
        </TextBox>
        <MentWrapper>
          <MentBox>
            <MentGreen>인투어</MentGreen>
            <Ment>는 외국인 관광객을 지원해주는 서비스입니다.</Ment>
          </MentBox>
          <Ment> 저희는 혁신적인 국내 여행 서비스를 추구합니다.</Ment>
        </MentWrapper>
      </TextWrapper>
    </IntroduceWrapper>
  );
}

export default Introduce;
