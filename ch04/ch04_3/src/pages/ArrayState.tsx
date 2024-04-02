import { useCallback, useState, useMemo } from 'react'
import { Title, Div } from '../components'
import { Icon } from '../theme/daisyui'
import * as D from '../data'
export default function ArrayState() {
  const [images, setImages] = useState<string[]>([]) // 배열을 상태로 만들기
  const addImage = useCallback(
    //  () => setImages((images) => [...images, D.randomImage(200, 100, 50)]), // 전개 연산자가 앞쪽에 있으므로 새로 생성되는 이미지 정보가 배열 맨 뒤에 위치한다.
    () => setImages((images) => [D.randomImage(200, 100, 50), ...images]), // 전개 연산자가 뒤쪽에 있으므로 새로 생성되는 이미지 정보가 배열 맨 앞에 위치한다.
    []
  )
  const clearImages = useCallback(() => setImages((notUsed) => []), []) // images를 빈 대괄호 []로 설정하여 초기화
  const children = useMemo(
    () =>
      images.map((image, index) => (
        <Div
          key={index}
          src={image}
          className="w-1/5 m-2"
          height="5rem"
          minHeight="5rem"
        />
      )),
    [images]
  )
  return (
    <section className="mt-4">
      <Title>ArrayState</Title>
      <div className="flex justify-center mt-4 ">
        <div data-tip="add image" className="tooltip">
          <Icon name="add" onClick={addImage} className="mr-12 btn-primary" />
        </div>
        <div data-tip="clear all" className="tooltip">
          <Icon name="clear_all" onClick={clearImages} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  )
}
