import React, { useEffect, useState } from "react";
import * as List from "./list";

import Postit from "./Postit";
import Move from "./Move";

import * as S from "./styled";

function Pagenation() {
  const [moveNum, setMoveNum] = useState(1);

  const postitMap = List.list.map((x, index) => {
    return (
      <>
        {index >= 10 * (moveNum - 1) && index < 10 * moveNum ? (
          <>
            <Postit title={x.title} main_text={x.main_text} time={x.time}>
              제목
            </Postit>
            <S.postLine />
          </>
        ) : (
          <></>
        )}
      </>
    );
  });

  return (
    <S.pagenation_Page>
      <S.pagenation_Title>PageNation</S.pagenation_Title>
      <S.postAria>{postitMap}</S.postAria>
      <Move moveNum={moveNum} setMoveNum={setMoveNum} />
    </S.pagenation_Page>
  );
}

export default Pagenation;
