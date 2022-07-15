# React Props Drilling

- React Component가 여러 겹으로 감싸고 있을 때, 상위 Component state를 생성하고 그 state를 사용하여 하위(child) 컴포넌트들이 rendering을 하거나 state를 변경해야 하는 경우가 아주 많다
- 상위 Component에서 여러겹의 하위 Component로 state를 전달할 때 중간에 위치한 Component들은 실제로는 필요하지 않지만 부모 Component로부터 props로 받아서 자식 Component에게 계속해서 props를 Toss 해야하는 경우가 발생한다
- 이러한 Drilling 현상을 방지하기 위하여 Store라는 개념이 생겨났다 Drilling 현상을 방지하기 위하여 기본 React 기능 외에 `Redux`, `Mobx`, `recoil` 등의 3rd part LIB를 사용한다
- 3rd part LIB 들이 오히려 React를 학습하는 것보다 많은 어려운 경우가 많다 그래서 React에서는 Context.Provider라는 도구를 제공하여 단지 Store 기능만을 수행하도록 마련을 해놓았다
