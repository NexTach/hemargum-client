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

const TextP = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function Title({ title, text }: { title: string; text: string }) {
  return (
    <>
      <TitleWrapper>
        <TitleBox>
          <TextH1>{title}</TextH1>
        </TitleBox>
        <ContentsWrapper>
          <TextP>{text}</TextP>
        </ContentsWrapper>
      </TitleWrapper>
    </>
  );
}

export default Title;
