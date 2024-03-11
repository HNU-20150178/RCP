import type { ChangeEvent } from "react";

/* preventDefault 메서드는 어떤 사용자 액션에 따라 이벤트가 발생
했을 때 이 이벤트와 관련된 웹 브라우저의 기본 구현 내용을 실행하지 않게 한다 */
/* <input> 요소가 제공하는 속성들은 React.InputHTMLAt
tributes<HTMLInputElement> 형태로 얻을 수 있음 */
/*
  value=""대신 defaultValue=""를 사용하여 Warning을 줄였다.
 */

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("onChangeValue", e.target.value);
  };
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeChecked", e.target.checked);
  };
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeFiles", e.target.files);
  };
  // prettier-ignore
  return (
 <div>
 <p>OnChange</p>
 <input type="text" onChange={onChangeValue}
 placeholder="type some text" defaultValue="Hello"/>
 <input type="checkbox" onChange={onChangeChecked} defaultChecked/>
 <input type="file" onChange={onChangeFiles} multiple accept="images/*" />
 </div>
 )
}
