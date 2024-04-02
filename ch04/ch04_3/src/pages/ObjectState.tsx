import type { FormEvent, ChangeEvent } from 'react'
import { useCallback, useState } from 'react'
import { Title } from '../components'
export default function BasicForm() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault() //  웹 페이지가 다시 렌더링되지 않도록하기 위함
      const formData = new FormData() // FormData는 자바스크립트 엔진이 기본으로 제공하는 클래스, 사용자가 입력한 데이터들을 웹 서버에 전송할 목적으로 사용합니다.
      formData.append('name', name)
      formData.append('email', email)
      alert(JSON.stringify(Object.fromEntries(formData), null, 2)) // JSON 포멧으로 변환
    },
    [name, email]
  )
  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName((notUsed) => e.target.value)
  }, [])
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail((notUsed) => e.target.value)
  }, [])
  // prettier-ignore
  return (
 <section className="mt-4">
 <Title>BasicForm</Title>
 <div className="flex justify-center mt-4">
 <form onSubmit={onSubmit}>
 <div className="form-control">
 <label className="label" htmlFor="name">
 <span className="label-text">Username</span>
 </label>
 <input value={name} onChange={onChangeName} id="name" type="text"
 placeholder="enter your name" className="input input-primary" />
 </div>
 <div className="form-control">
 <label className="label" htmlFor="email">
 <span className="label-text">email</span>
 </label>
 <input value={email} onChange={onChangeEmail} id="email" type="email"
 placeholder="enter your email" className="input input-primary"/>
 </div>
 <div className="flex justify-center mt-4">
 <input type="submit" value="Submit"
 className="w-1/2 btn btn-sm btn-primary"/>
 <input defaultValue="Cancel" className="w-1/2 ml-4 btn btn-sm"/>
 </div>
 </form>
 </div>
 </section>
 )
}
