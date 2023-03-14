import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';




const Login = () =>{



    const [values, setValues] = useState('Working')

    const hello = () => {
        console.error("=");
        setValues('here')

    };

   
    const onFinish = (values) => {
        console.log('Success:', values);

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
        onFinish={hello}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <h1>Hello{values}</h1>
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

export default Login;