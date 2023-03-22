import React, {FormEvent, useState} from 'react';
import s from "./Contact.module.scss"
import b from "../common/styles/Button.module.scss"
import {Title} from "../common/components/Title/Title";
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Contact() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDisabled(true)
    const formData = {name, email, message}
    try {
      const res = await axios.post('https://gmail-smtp-khaki.vercel.app/sendMessage', formData)
      if (res.status === 200) {
        setMessage('')
        setName('')
        setEmail('')
        toast.success("Message sent successfully!")
      } else {
        toast.error("Some error occurred!")
      }
    } catch (e) {
      if (axios.isAxiosError<{ message: string }>(e)) {
        const error = e.response?.data ? e.response?.data : e
        toast.error(error.message)
      }
    }
    setDisabled(false)
  }

  return (
    <div className={s.contactBlock} id={"contact"}>
      <div className={s.contactContainer}>
        <div className={s.title}><Title text={'Contact'}/></div>
        <form data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className={s.formContainer}
              onSubmit={submitHandler}
        >
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.currentTarget.value)}/>
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
          <textarea rows={7} placeholder="Your message" value={message}
                    onChange={e => setMessage(e.currentTarget.value)}></textarea>
          <button disabled={disabled} type="submit" className={b.button}>send message</button>
        </form>
      </div>
    </div>
  )
}

