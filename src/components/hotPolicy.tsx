import styled from 'styled-components';

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

const Card = styled.div`
  width: 284px;
  height: 192px;
  border-radius: 10px;
  border: 1px solid rgba(250, 250, 250, 1);
  background-color: black;
  margin: 12px;
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
              <Card />
              <Card />
              <Card />
            </CardWrapper>
            <ArrowSign />
          </DragWrapper>
        </PolicyBox>
      </PolicyWrapper>
    </>
  );
}

export default HotPolicy;
