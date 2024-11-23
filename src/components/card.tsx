import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowSvg from '../assets/arrowSign';

const CardBox = styled.div`
  width: 284px;
  height: 192px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 12px;
  position: relative;
`;

const CardTitle = styled.p`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 95%;
  margin: 28px 22px 14px 22px;
`;

const CardText = styled.p`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 240px;
  height: 107px;
  margin: 0 22px 0 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  top: 130px;
  left: 220px;
`;

interface Card {
  title: string;
  text: string;
}

function Card({ title, text }: Card) {
  const [Title, setTitle] = useState<string>('');
  const [Text, setText] = useState<string>('');

  useEffect(() => {
    setTitle(title);
    setText(text);
  }, [title, text]);

  return (
    <CardBox>
      <TextWrapper>
        <CardTitle>{Title}</CardTitle>
        <CardText>{Text}</CardText>
      </TextWrapper>
      <ArrowWrapper>
        <ArrowSvg />
      </ArrowWrapper>
    </CardBox>
  );
}

export default Card;
