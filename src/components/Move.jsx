import React from "react";
import * as List from "./list";
import arrowRight from "../asset/arrowRight.svg";
import arrowLeft from "../asset/arrowLeft.svg";

import * as S from "./styled";

function Move({ moveNum, setMoveNum }) {
  const minusMoveNum = () => {
    if (moveNum >= 2) {
      setMoveNum(moveNum - 1);
    }
  };
  const plusMoveNum = () => {
    if (moveNum <= ((List.list).length) / 10) {
      setMoveNum(moveNum + 1);
    }
  };

  const MoveNumMap = List.list.map((x,index)=>{

  }) 
  return (
    <S.displayFlex>
      <S.arrowImg src={arrowLeft} onClick={minusMoveNum} />
      <S.MoveCount>{moveNum}</S.MoveCount>
      <S.arrowImg src={arrowRight} onClick={plusMoveNum} />
    </S.displayFlex>
  );
}

export default Move;
