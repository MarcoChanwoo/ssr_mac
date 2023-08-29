import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(
  <div>Hello Server Side Rendering!</div>
);

console.log(html);

// 서버에서 리액트 컴포넌트를 렌더링할 땐  ReactDOMServer의 renderToString이라는 함수를 이용함
// 이 함수에 JSX를 넣어 호출하면 렌더링 결과를 문자열로 반환함
