import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { connect} from 'react-redux';
import * as actions from '../reducer/actions/auth'
import { useNavigate } from 'react-router-dom';


const Login = (props) =>{

   

    const navigate = useNavigate();
    const onFinish = (values) => {
        // setUsername(values.username)
        // setPassword(values.password)
        props.onAuth(values.username,values.password)
        navigate("/")
        // this.props.history.push('/');
        // console.log('Success:', values);

    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return ( <>
    <Form
        className='form-group mt-3'
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        {/* <h1>Hello  Username : {username} and Password : {password} </h1> */}
        <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
                <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
    </>  )
    };




const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
        token : state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)



