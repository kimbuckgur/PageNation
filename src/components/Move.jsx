import React, { useState } from "react";
import * as List from "./list";
import arrowRight from "../asset/arrowRight.svg";
import arrowLeft from "../asset/arrowLeft.svg";

import * as S from "./styled";

function Move({ moveNum, setMoveNum }) {
  let listLength = Math.ceil(List.list.length / 10);
  const arr = Array.from({ length: listLength }, () => 0);

  const [countArray, setCountArray] = useState(arr);

  const MoveClick = (e) => {
    let name  = e.target.innerText;
    setMoveNum(name);
  };
  const minusMoveNum = () => {
    if (moveNum >= 2) {
      setMoveNum(moveNum - 1);
    }
  };
  const plusMoveNum = () => {
    if (moveNum <= List.list.length / 10) {
      setMoveNum(moveNum + 1);
    }
  };

  const CountArrayMap = countArray.map((x, index) => {
    return (
      <S.MoveCountbox onClick={MoveClick} name={index + 1}>
        {index + 1}
      </S.MoveCountbox>
    );
  });

  return (
    <S.displayFlex>
      <S.arrowImg src={arrowLeft} onClick={minusMoveNum} />
      {CountArrayMap}
      <S.arrowImg src={arrowRight} onClick={plusMoveNum} />
    </S.displayFlex>
  );
}

export default Move;
