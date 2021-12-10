import styled from "styled-components";

export const displayFlex = styled.div`
  display: flex;
  align-items: center;

`;

export const pagenation_Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1vh;
`;

export const pagenation_Title = styled.p`
  font-family: "Archivo", sans-serif;
  font-size: 40px;
  font-weight: bold;

  margin-top: 80px;
`;

export const postAria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 70px;
  margin-bottom: 30px;
`;

export const post_one = styled.div`
  cursor: pointer;

  font-size: 20px;
  font-family: "Noto Sans KR", sans-serif;

  width: 980px;
  height: 60px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const postLine = styled.div`
  width: 1000px;
  height: 2px;

  background-color: rgba(215, 215, 215, 1);
`;

export const arrowImg = styled.img`
  cursor: pointer;
`;

export const MoveCountbox = styled.p`
  cursor: pointer;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 30px;
  line-height: 30px;

  width:40px;
  height:40px;
  margin: 0px;
  margin-left: 20px;
  margin-right: 20px;

  display:flex;
  justify-content:center;
  align-items:center;
  border:solid black 1px;
`;
