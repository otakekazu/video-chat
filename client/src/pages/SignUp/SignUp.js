import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../Firebase/firebase'
import { useAuthContext } from '../../Firebase/AuthContext'

function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailRef = useRef(null)
    const emailPassword = useRef(null)

    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail(emailRef.current.value)
        setPassword(emailPassword.current.value)
    }

    useEffect(() => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                history.push('/contents')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }, [email, password])

    return (
        <div>
            <h1>ユーザ登録</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label>メールアドレス</label>
                <input name="email" type="email" placeholder="email" ref={emailRef}/>
                </div>
                <div>
                <label>パスワード</label>
                <input name="password" type="password" ref={emailPassword}/>
                </div>
                <div>
                <button>登録</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
