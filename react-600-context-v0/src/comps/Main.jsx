// react로부터 useState 함수를 추출하기
// const useState = () => { }
// export { useState }
import { useState } from "react";
// export default Input
import Input from "./Input";
import List from "./List";
import View from "./View";

const Main = () => {
  // address state 변수가 생성되고
  // address state 변수를 변경시키는 setAddress 함수를 선언
  const [address, setAddress] = useState({
    a_name: "홍길동",
    a_tel: "010-111-1111",
    a_address: "서울특별시",
  });
  // 저장을 눌렀을 때 비어있는 배열로 만들어 저장하기(Input.jsx와 연동)
  const [addrList, setAddrList] = useState([]);
  return (
    <>
      <Input
        address={address}
        setAddress={setAddress}
        addrList={addrList}
        setAddrList={setAddrList}
      />
      <View address={address} />
      <List addrList={addrList} />
    </>
  );
};

export default Main;
