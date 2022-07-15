// react로부터 useState 함수를 추출하기
// const useState = () => { }
// export { useState }
// import { useState } from "react";
// export default Input
import Input from "./Input";
import List from "./List";
import View from "./View";

const Main = () => {
  return (
    <>
      <Input />
      <List />
    </>
  );
};

export default Main;
