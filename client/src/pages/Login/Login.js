import React from 'react'
import { auth } from '../../Firebase/firebase';
import { Link, useHistory} from 'react-router-dom'

export default function Login() {
    const history = useHistory()
    const handleSubmit = async(event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        await auth.signInWithEmailAndPassword(email.value, password.value);
        history.push('/contents')
    };

    return (
        <div className="Login">
            <h1>ログイン</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label>メールアドレス</label>
                <input name="email" type="email" placeholder="email" />
                </div>
                <div>
                <label>パスワード</label>
                <input name="password" type="password" placeholder="password" />
                </div>
                <div>
                <button>ログイン</button>
                </div>
                <div>
                ユーザ登録は<Link to={'/signup'}>こちら</Link>から
                </div>
            </form>
        </div>
    )
}
