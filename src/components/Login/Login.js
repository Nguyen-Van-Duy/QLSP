import React, { useRef, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import { authLoginAPI } from '../API';
import { useDispatch } from 'react-redux';
import { tokenActions } from '../../store';

const isEmpty = value => value.trim() === '';

const admin = {
    email: 'admin@gmail.com',
    password: 'admin'
}

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const emailInput = useRef();
    const passwordInput = useRef();
    const [isCheckout, setIsCheckout] = useState({
        email: true,
        password: true,
    })
    const [isLogin, setIsLogin] = useState(true);


    // const [result, setResult] = useState([]);

    const submitHandle = async (e) => {
        e.preventDefault();
        const enteredEmail = emailInput.current.value;
        const enteredPassword = passwordInput.current.value;

        const emailIsValid = !isEmpty(enteredEmail);
        const passwordIsValid = !isEmpty(enteredPassword);

        
        setIsCheckout({
            email: emailIsValid,
            password: passwordIsValid
        })
        
        if(!emailIsValid & !passwordIsValid) {
            return;
        }
        try {
            const authLogin = await authLoginAPI({
                "email": enteredEmail,
                "password": enteredPassword
            });
            if (authLogin.data.token !== undefined) {
                dispatch(tokenActions.tokenHandle(authLogin.data.token));
                localStorage.setItem('token', authLogin.data.token);
                history.push('/admin');
            } else {
                setIsLogin(false)
               
            }
        } catch(e) {
            if(e !== '')  alert('Tài khoản hoặc mật khẩu không chính xác!')
        }

        
    }
    return (
        <div className='login'>
            <form onSubmit={submitHandle} className='form'>
                <h3>Đăng nhập</h3>
                <div className='login-form'>
                    <span>Email</span>
                    <input type='email' id='email' ref={emailInput}/>
                </div>
                    {!isCheckout.email && <p>Vui lòng nhập email của bạn.</p>}
                <div className='login-form'>
                    <span>Password</span>
                    <input type='password' id='password' ref={passwordInput} />
                </div>
                    {!isCheckout.password && <p>Vui lòng nhập mật khẩu</p>}
                {isCheckout.email && isCheckout.password && !isLogin && <p>Email hoặc mật khẩu không chính xác</p>}
                <button type='submit'>Đăng nhập</button>
            </form>
        </div>
    );
};

export default Login;