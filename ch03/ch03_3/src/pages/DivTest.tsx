import { Title, Subtitle, Div, Icon } from "../components";
/* div의 text-blue-100(등등)이 자식요소에게도 적용이되는 이른바 cascading 확인가능 */
export default function DivTest() {
  return (
    <section className="mt-4">
      <Title>DivTest</Title>
      {/* 6rem 으로 ‘M’ 문자 높이의 6배 높이 설정*/}
      {/*<Div className="text-center text-blue-100 bg-blue-600" height="6rem">*/}
      {/* height속성 생략*/}
      <Div className="text-center text-blue-100 bg-blue-600">
        <Icon name="home" className="text-3xl" />
        <Subtitle>Home</Subtitle>
      </Div>
    </section>
  );
}
