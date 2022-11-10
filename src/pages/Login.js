import React from 'react'
import './Login.css';
import {ReactComponent as Logo} from '/home/floki/Documents/mystique/src/Assets/grand-funk-railroad_pointing-finger.svg'
class Login extends React.Component{
    state = {
        email: '',
        pwd:''
    }
    // handleChange = (e) => {
    //     const { name, value } = e.target
    //         .this.setState({ [name]: value })
    //     }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.isLogin(true)

        }
    
    render() {
        return (
            <div className='div-login'>
                <div className='div-login-logo'>
                    <Logo/>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='email' name='email' placeholder='email...' required />
                        <input type='password' name='pwd'placeholder='Password...'required/>
                    </form>
                    <button onSubmit={this.handleSubmit}>Login</button>

                </div>
            </div>
        )
    }
}
export default Login;