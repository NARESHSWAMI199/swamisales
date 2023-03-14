import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { connect,useDispatch,useSelector} from 'react-redux';
import * as actions from '../reducer/actions/auth'


const Login = ((onAuth)) =>{

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    // const dispatch = useDispatch();
   
    const onFinish = (values) => {
        setUsername(values.username)
        setPassword(values.password)
        // dispatch(actions.authLogin(username, password))
        onAuth(values.username, values.password);
        // this.props.history.push('/');
        // console.log('Success:', values);

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (


    <Form
        className='form-group'
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
    )
    };




const mapStateToProps = (state) => {
    // document.write('login......')
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    // document.write('login......dispatch......')
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Login)



