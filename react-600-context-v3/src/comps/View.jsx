import { useAppContext } from "../context/ContextProvider";

const View = () => {
  /*
  App.js에서 생성한 address state를 
  Main.jsx에 공급하고
  Main.jsx는 List.jsx에 공급하고
  List.jsx는 다시 View.jsx에 공급하고
  형태의 props Drilling 현상이

  AppContext.Provider에서 제공받음으로서
  Main.jsx와 List.jsx의 관여 없이
  직업 address state를 사용할 수 있게 된다

  useContext는 React 16.x 버전부터 공식적으로 지원
  */
  const { address } = useAppContext();
  const { a_name, a_tel, a_address } = address;
  return (
    <div>
      <strong>이름 : </strong>
      <span>{a_name}</span>
      <strong>전화번호 : </strong>
      <span>{a_tel}</span>
      <strong>주소 : </strong>
      <span>{a_address}</span>
    </div>
  );
};

export default View;
