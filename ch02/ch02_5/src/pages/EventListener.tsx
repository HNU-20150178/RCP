// isTrusted 속성은 이벤트가 웹 브라우저에서 발생한 것인지(true), 프로그래밍으로 발생한 것인지를(false) 구분한다
document.getElementById("root")?.addEventListener("click", (e: Event) => {
  const { isTrusted, target, bubbles } = e;
  console.log("mouse click occurs.", isTrusted, target, bubbles);
});
document.getElementById("root")?.addEventListener("click", (e: Event) => {
  const { isTrusted, target, bubbles } = e;
  console.log("mouse click also occurs.", isTrusted, target, bubbles);
});
window.onclick = (e: Event) =>
  console.log("mouse click occurs.", e.isTrusted, e.target, e.bubbles);
export default function EventListener() {
  return <div>EventListener</div>;
}
