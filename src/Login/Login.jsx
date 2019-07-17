import React, { Component } from 'react';
import './css/Login.css';
import Loader from './Loader/Loader';
import Error from './Error/Error';
import Helper from '../common/Helper';
import cookie from 'react-cookies';

class Login extends Component {
    
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            counte: 0,
            countp: 0,
            show: true,
            error: false,
            move: false
        }
    }

    componentWillMount(){
        setTimeout( () => {
            this.setState({
                show: false
            })
        },1000)
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if(e.target.name === 'email'){
            this.setState( (prevState, props) => {
                return {
                    count: prevState.counte++
                }
            })
        }
        else{
            this.setState( (prevState, props) => {
                return {
                    count: prevState.countp++
                }
            })
        }
    }

    fetchData = (e) => {
        e.preventDefault();
        this.changeState('show', true);
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        Helper('login', "POST", user)
        .then((res) => {
            if (res.msg === "Login Successful"){
                cookie.save('token', res.access_token);
                this.props.history.push('/head');
            }
            else{
                this.changeState('error',true);
                setTimeout( () => {
                    this.changeState('error',false);
                }, 4000)
            }
        })
        .catch( (err) => {
            alert(err);
        })
        .finally( _ =>{
            this.changeState('show',false);
            console.log(cookie.load('token'));
        })
    }

    changeState = (variable,vl) =>{
        this.setState({
            [variable]: vl
        });  
    }


    render() { 
        return (  
            <div className="par">
                <Loader show={this.state.show}/>
                <div className="left"></div>
                <div className="box">
                    <h1>Login</h1>
                    <form onSubmit={this.fetchData}>
                        <input type="email" name="email" onChange={this.handleInput} placeholder="Email" required />
                        <div className="error-cont" 
                            style=
                            {
                                this.state.email === '' && this.state.counte > 0 ? {display:'flex'}: {display: 'none'}
                            }>
                        <i className="material-icons err">error</i>&nbsp;&nbsp;Email Required!
                        </div>
                        <input type="password" name="password" onChange={this.handleInput} placeholder="Password" required />
                        <div className="error-cont"
                            style=
                            {
                                this.state.password === '' && this.state.countp > 0 ? {display:'flex'}: {display: 'none'}
                            }>
                        <i className="material-icons err">error</i>&nbsp;&nbsp;Password Required!
                        </div>
                        <button className="login-btn" type="submit">
                            Login
                        </button>
                    </form>
                </div>
                <Error show={this.state.error}/>
            </div>
        );
    }
}
 
export default Login;