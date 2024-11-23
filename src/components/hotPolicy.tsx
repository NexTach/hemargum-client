import styled from 'styled-components';
import Card from './card';

const PolicyWrapper = styled.div`
  width: 100vw;
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
`;

const ArrowSign = styled.div`
  width: 36px;
  height: 36px;
  background-color: red;
`;

const DragWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  overflow: hidden;
`;

const Slider1 = styled.div`
  display: flex;
  align-items: center;
`;

const Slider2 = styled.div`
  display: flex;
  align-items: center;
`;

function HotPolicy() {
  return (
    <>
      <PolicyWrapper>
        <PolicyBox>
          <TitleWrapper>
            최근
            <TitleGreen>HOT</TitleGreen>한 정책
          </TitleWrapper>
          <DragWrapper>
            <ArrowSign />
            <CardWrapper>
              <Slider1>
                <Card title={'이상혁'} text={'프론트엔드'} />
                <Card title={'황지훈'} text={'백엔드'} />
                <Card title={'김민솔'} text={'디자인'} />
              </Slider1>
              <Slider2>
                <Card title={'권재헌'} text={'무전공'} />
                <Card title={'박승일'} text={'AI'} />
                <Card title={'김태은'} text={'백엔드'} />
              </Slider2>
            </CardWrapper>
            <ArrowSign />
          </DragWrapper>
        </PolicyBox>
      </PolicyWrapper>
    </>
  );
}

export default HotPolicy;
