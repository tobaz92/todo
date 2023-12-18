import axios from 'axios'

import CryptoJS from 'crypto-js'

import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { setUser } from '../../application/store/user-slice'

const generateBrowserFingerprint = () => {
    const fingerprint = {
        userAgent: window.navigator.userAgent,
        language: window.navigator.language,
        colorDepth: window.screen.colorDepth,
        deviceMemory: navigator.deviceMemory,
        hardwareConcurrency: navigator.hardwareConcurrency,
        timezoneOffset: new Date().getTimezoneOffset(),
    }

    return JSON.stringify(fingerprint)
}

const API_Login = async (
    email,
    password,
    decodedRememberedUser = undefined,
) => {
    try {
        const config = {
            method: 'post',
            url: `${import.meta.env.VITE_API_URL}/login`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                email,
                password,
                rememberedUser: decodedRememberedUser,
            }),
        }
        const response = await axios(config)
        return response.data
    } catch (error) {
        console.error('Error during login:', error)
        throw error
    }
}

const LogWithRememberedUser = async (dispatch) => {
    if (localStorage.getItem('rememberedUser')) {
        const rememberedUser = localStorage.getItem('rememberedUser')

        // Décodez la chaîne Base64 (JWT) en objet JavaScript
        const decodedRememberedUser = JSON.parse(atob(rememberedUser))

        try {
            const data = await API_Login(
                decodedRememberedUser.email,
                undefined,
                decodedRememberedUser.data,
            )

            const token = data.token
            const secretKey = data.secretKey
            const userId = data.userId

            if (data.token !== undefined) {
                dispatch(setUser(data))
            }
        } catch (error) {
            console.error('Error during login with remembered user:', error)
        }
    }
}

const API_Register = async (username, email, password) => {
    try {
        const config = {
            method: 'post',
            url: `${import.meta.env.VITE_API_URL}/register`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                username,
                email,
                password,
                browserFingerprint: generateBrowserFingerprint(),
            }),
        }

        const response = await axios(config)
        return response.data
    } catch (error) {
        console.error('Error during login:', error)
        throw error
    }
}

const Login = () => {
    const dispatch = useDispatch()

    LogWithRememberedUser(dispatch)

    const [language, setLanguage] = useState('fr')

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const [rememberMe, setRememberMe] = useState(false)
    const [type, setType] = useState({
        login: true,
        register: false,
        forgotPassword: false,
    })

    const text = {
        en: {
            titleLogin: 'Login',
            titleForgotPassword: 'Forgot password',
            titleRegister: 'Sign in',
            login: 'Login',
            register: 'Register',
            forgotPassword: 'Forgot password?',
            rememberMe: 'Remember me',
            dontHaveAnAccount: "Don't have an account?",
            youHaveAnAccount: 'You have an account?',
            submitButtonForgotPassword: 'Recover password',
            email: 'Email',
            username: 'Username',
            password: 'Password',
            confirmpassword: 'Confirm Password',

            usernameRequired: 'Username is required',
            emailRequired: 'Email is required',
            passwordRequired: 'Password is required',
            confirmPasswordRequired: 'Confirm password is required',
            passwordNotMatch: 'Password do not match',
            emailInvalid: 'Email is invalid',
            usernameInvalid: 'Username is invalid',
            passwordInvalid: 'Password is invalid',
        },
        fr: {
            titleLogin: 'Identification',
            titleForgotPassword: 'Mot de passe oublié',
            titleRegister: 'Inscription',
            login: "S'identifier",
            register: "S'inscrire",
            forgotPassword: 'Mot de passe oublié?',
            rememberMe: 'Se souvenir de moi',
            dontHaveAnAccount: "Vous n'avez pas de compte?",
            youHaveAnAccount: 'Vous avez un compte?',
            submitButtonForgotPassword: 'Récupérer votre mot de passe',
            email: 'Email',
            username: 'Identifiant',
            password: 'Mot de passe',
            confirmpassword: 'Confirmer le mot de passe',

            usernameRequired: "L'utilisateur est requis",
            emailRequired: "L'email est requis",
            passwordRequired: 'Le mot de passe est requis',
            confirmPasswordRequired:
                'La confirmation du mot de passe est requise',
            passwordNotMatch: 'Le mot de passe ne correspond pas',
            emailInvalid: "L'email est invalide",
            usernameInvalid: "L'Identifiant est invalide",
            passwordInvalid: 'Le mot de passe est invalide',
        },
    }[language]

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email) {
            setEmailError(text.emailRequired)
        } else {
            setEmailError('')
        }

        if (!username) {
            setUsernameError(text.usernameRequired)
        } else {
            setUsernameError('')
        }

        if (!password) {
            setPasswordError(text.passwordRequired)
        } else {
            setPasswordError('')
        }

        if (!confirmPassword) {
            setConfirmPasswordError(text.confirmPasswordRequired)
        } else {
            setConfirmPasswordError('')
        }

        if (email !== '' && password !== '' && type.login) {
            const data = await API_Login(email, password)

            if (rememberMe) {
                console.log('secretKey', data.secretKey)

                const encryptedData = CryptoJS.AES.encrypt(
                    JSON.stringify({ password }),
                    data.secretKey,
                )

                const encryptedDataWithEmail = {
                    data: encryptedData.toString(),
                    email: email,
                }

                const encryptedDataWithEmailBase64 = btoa(
                    JSON.stringify(encryptedDataWithEmail),
                )

                localStorage.setItem(
                    'rememberedUser',
                    encryptedDataWithEmailBase64.toString(),
                )
            }

            if (data.token !== undefined) {
                console.log(data)
                dispatch(setUser(data))
            }
        }

        if (
            username !== '' &&
            email !== '' &&
            password !== '' &&
            confirmPassword !== '' &&
            password === confirmPassword &&
            type.register
        ) {
            const data = await API_Register(username, email, password)
            console.log(data)
        }
    }

    const LoginStyles = `
	.loginPage {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		padding: 1rem;
		border-radius: 5px;
		font-size: 1rem;
	}
		
	@media screen and (min-width: 480px) {
		.loginPage {
			max-width: 450px;
			padding: 2rem;
			border: 1px solid #ccc;
			box-sizing: border-box;
		}
	}
	
	.loginPage h1 {
		margin: 0;
		margin-bottom: 1rem;
	}
	
	.loginPage label {
		display: block;
		margin-bottom: 0.5rem;
	}
	
	.loginPage input {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 5px;
		width: 100%;
		box-sizing: border-box;
	}
	
	.loginPage .line {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
	}
	
	@media screen and (min-width: 480px) {
		.loginPage .line {
			gap: 1rem;
		}
	}
	
	.loginPage .rememberMe {
		display: flex;
		align-items: center;
	}
	
	.loginPage .rememberMe input {
		margin-right: 0.5rem;
	}
	
	.loginPage .rememberMe label {
		white-space: nowrap;
		margin-bottom: 0;
	}
	
	.loginPage .forgot-password {
		text-align: right;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	
	.loginPage .forgot-password a {
		color: #333;
		text-decoration: none;
	}
	
	.loginPage .forgot-password a:hover {
		text-decoration: underline;
	}
	
	.loginPage button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 5px;
		background-color: #333;
		color: #fff;
		cursor: pointer;
	}
	
	.loginPage button:hover {
		background-color: #444;
	}
	
	.loginPage .lineSwitch {
		text-align: center;
	}
	
	.loginPage .lineSwitch a {
		color: #333;
		text-decoration: none;
	}
	
	.loginPage .lineSwitch a:hover {
		text-decoration: underline;
	}
	`

    return (
        <form
            className="loginPage"
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSubmit(e)
                }
            }}
        >
            <h1>
                {type.login
                    ? text.titleLogin
                    : type.register
                      ? text.titleRegister
                      : text.forgotPassword}
            </h1>
            {type.register && (
                <InputUsername
                    text={text}
                    usernameError={usernameError}
                    setUsername={setUsername}
                    username={username}
                />
            )}
            <InputEmail
                text={text}
                emailError={emailError}
                setEmail={setEmail}
                email={email}
            />
            {(type.login || type.register) && (
                <InputPassword
                    label={text.password}
                    passwordError={passwordError}
                    setPassword={setPassword}
                    password={password}
                />
            )}
            {type.register && (
                <InputPassword
                    label={text.confirmpassword}
                    passwordError={confirmPasswordError}
                    setPassword={setConfirmPassword}
                    password={confirmPassword}
                />
            )}

            {type.login && !type.register && (
                <div className="line">
                    <div className="rememberMe">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            id="rememberMe"
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe">{text.rememberMe}</label>
                    </div>
                    <div className="forgot-password">
                        <a
                            href="/forgot-password"
                            onClick={(e) => {
                                e.preventDefault()
                                setType({
                                    login: false,
                                    register: false,
                                    forgotPassword: true,
                                })
                            }}
                        >
                            {text.forgotPassword}
                        </a>
                    </div>
                </div>
            )}

            <button type="submit">
                {type.register ? text.register : ''}
                {type.login ? text.login : ''}
                {type.forgotPassword ? text.submitButtonForgotPassword : ''}
            </button>

            {!type.login && (
                <>
                    <div className="lineSwitch">
                        {text.youHaveAnAccount}&nbsp;
                        <a
                            href="/login"
                            onClick={(e) => {
                                e.preventDefault()
                                setType({
                                    login: true,
                                    register: false,
                                    forgotPassword: false,
                                })
                            }}
                        >
                            Login
                        </a>
                    </div>
                </>
            )}
            {type.login && (
                <>
                    <div className="lineSwitch">
                        {text.dontHaveAnAccount}&nbsp;
                        <a
                            href="/register"
                            onClick={(e) => {
                                e.preventDefault()
                                setType({
                                    login: false,
                                    register: true,
                                    forgotPassword: false,
                                })
                            }}
                        >
                            {text.titleRegister}
                        </a>
                    </div>
                </>
            )}

            <style>{LoginStyles}</style>
        </form>
    )
}
export default Login

const ErrorMsg = ({ msg }) => {
    const ErrorMsgStyles = `
		.errorMsg{
			padding: 0.5rem 1rem;
			border-radius: 0 0 5px 5px;
			background-color: #f44336;
			color: #fff;
			font-size: 0.9rem;
		}
		.errorMsg p{
			margin: 0;
		}
	`

    return (
        <div className="errorMsg">
            <p>{msg}</p>
            <style>{ErrorMsgStyles}</style>
        </div>
    )
}

const InputUsername = ({ text, usernameError, setUsername, username }) => {
    return (
        <div>
            <label htmlFor="username">{text.username}</label>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <ErrorMsg msg={usernameError} />}
        </div>
    )
}

const InputEmail = ({ text, emailError, setEmail, email }) => {
    return (
        <div>
            <label htmlFor="email">{text.email}</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <ErrorMsg msg={emailError} />}
        </div>
    )
}

const InputPassword = ({ label, passwordError, setPassword, password }) => {
    return (
        <div>
            <label htmlFor="password">{label}</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <ErrorMsg msg={passwordError} />}
        </div>
    )
}
