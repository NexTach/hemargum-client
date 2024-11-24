import styled from 'styled-components';

const TitleWrapper = styled.div`
  width: 100%;
  height: 1377px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 1072px;
  height: 245px;
  border-bottom: 1px solid #d9d9d9;
`;

const TextH1 = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 152px;
`;

const ContentsWrapper = styled.div`
  width: 1072px;
  height: 572px;
  margin-top: 51px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
`;

const TextH2 = styled.h2`
  color: #000;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TextP = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function Title() {
  return (
    <>
      <TitleWrapper>
        <TitleBox>
          <TextH1>Doraemon 정책</TextH1>
        </TitleBox>
        <ContentsWrapper>
          <TextP>#Doraemon이라는 태그를 SNS에 올리면 대나무 헬리콥터를 주는 정책</TextP>
          <div>
            <TextH2>목적</TextH2>
            <TextP>노동자의 더 편한 이동을 위하여</TextP>
          </div>
          <div>
            <TextH2>대상</TextH2>
            <TextP>기초수급을 받는 외국인 노동자</TextP>
          </div>
          <div>
            <TextH2>기간</TextH2>
            <TextP>2724.01.01~2891. 01. 01</TextP>
          </div>
          <div>
            <TextH2>예외대상</TextH2>
            <TextP>범죄 이력이 있는 자</TextP>
            <TextP> *이 정책은 매 달마다 검토되며, 필요에 따라 업데이트 됩니다.*</TextP>
          </div>
        </ContentsWrapper>
      </TitleWrapper>
    </>
  );
}

export default Title;
