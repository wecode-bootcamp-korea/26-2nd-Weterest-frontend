import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Circle from './Circle';

const LoginIntroduce = () => {
  const [order, setOrder] = useState(0);
  const changeOrderNumber = () => {
    if (order === TEXTS.length - 1) {
      clearTimeout(changeOrderNumber);
      setOrder(0);
      return;
    }
    setOrder(order + 1);
  };

  useEffect(() => {
    setTimeout(changeOrderNumber, 2000);
  }, [order]);
  return (
    <Introduce>
      <Next>다음</Next>
      <IntroduceLooking>
        <Text textsColor={TEXTS_COLOR[order]}>{TEXTS[order]}</Text>
        <Circles>
          {ORDER.map(selfOrder => {
            return (
              <CircleContainier key={selfOrder}>
                <Circle
                  selfOrder={selfOrder}
                  order={order}
                  textsColor={TEXTS_COLOR[order]}
                />
              </CircleContainier>
            );
          })}
        </Circles>
      </IntroduceLooking>
    </Introduce>
  );
};

export default LoginIntroduce;

const TEXTS = [
  '저녁 식사 메뉴 아이디어를 찾아보세요',
  '집안 꾸미기 아이디어를 찾아보세요',
  '새로운 패션을 찾아보세요',
  '정원가꾸기 아이디어를 찾아보세요',
];

const TEXTS_COLOR = ['red', 'blue', 'pink', 'orange'];

const ORDER = [0, 1, 2, 3];

const bounce = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
`;

const Introduce = styled.div`
  padding-top: 50px;
  text-align: center;
`;

const Next = styled.div`
  font-size: 60px;
  font-weight: bolder;
`;

const IntroduceLooking = styled.div`
  text-align: center;
`;

const Text = styled.div`
  margin: 20px 0 40px;
  color: ${props => props.textsColor};
  font-size: 60px;
  text-align: center;
  animation: ${bounce} 2s infinite;
`;

const Circles = styled.div`
  display: flex;
  justify-content: center;
`;

const CircleContainier = styled.div`
  margin-right: 10px;
`;