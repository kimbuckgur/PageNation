import React from "react";
import * as S from "./styled";

function Postit({title,main_text,time}) {
  return <S.post_one>{title}</S.post_one>;
}

export default Postit;
