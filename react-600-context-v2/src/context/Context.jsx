import { createContext } from "react";

// react.createContext() 함수를 실행하여
// 실행 결과를 export
// react.createContext() 함수를 실행하면
// Context.Provider가 export 된다
// 이제부터 Context.jsx는 state 변수들, 여러가지 함수들을
// 보관했다가 요청하는 곳에 공급하는 Store가 된다
export default createContext();
