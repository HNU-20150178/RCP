import type { SyntheticEvent } from "react";
// 가까운부모에서 먼 부모쪽으로 이벤트가 버블링되며 전달되는것을 멈춤 event capturing
export default function StopPropagation() {
  const onDivClick = (e: SyntheticEvent) =>
    console.log("click event bubbles on <div>");
  const onButtonClick = (e: SyntheticEvent) => {
    console.log("mouse click occurs on <button> and call stopPropagation");
    /* <button>이
      stopPropagation을 호출하여 이벤트를 캡처했으므로
      이제 <button>의 부모 요소인 <div> 쪽에는 이벤트가 전달되지 않습니다. 
    */
    e.stopPropagation();
  };
  return (
    <div onClick={onDivClick}>
      <p>StopPropagation</p>
      <button onClick={onButtonClick}>
        Click Me and stop event propagation
      </button>
    </div>
  );
}
