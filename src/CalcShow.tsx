import React from "react";
import { ActionButton } from "./ActionButton";
import { ResultButton } from "./ResultButton";
import { BakcspaceButton } from "./BakcspaceButton";

const CalcButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const Operators = ["-", "+", "*", "/"];

const CalcShow: React.FC = () => {
  return (
    <div tabIndex={0} className="buttonWrapper">
      {[...CalcButtons, ...Operators].map((item, index) => (
        <ActionButton text={item} key={`${item}-${index}`} />
      ))}
      <BakcspaceButton />
      <ResultButton />
    </div>
  );
};

export default CalcShow;
