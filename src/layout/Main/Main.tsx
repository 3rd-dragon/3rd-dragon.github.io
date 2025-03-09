import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/Main2.jpg'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      {/* <Line></Line> */}
      <MainTitle>{greeting.title}</MainTitle>
      <MainImg src={mainImg} />
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const Line = styled.span`
  width: 100%;
  height: 1px;
  background: rgb(255, 130, 0);
`;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 100%;
  max-width: 450px;
  padding-top: 20px;
  margin-top: 20px
`;

const MainTitle = styled.p`
  //font-family: HSSanTokki20-Regular, serif;
  font-size: 1.5rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
