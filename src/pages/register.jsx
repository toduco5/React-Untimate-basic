import { Button, Checkbox, Form, Input, notification, Row, Col } from 'antd';
import { registerUserApi } from '../services/api.service';
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const res = await registerUserApi(values.fullName, values.email, values.password, values.phone);
        console.log('Success:', res);
        if (res.data) {
            notification.success({
                message: 'Success',
                description: 'User registered successfully!'
            })
            navigate("/login")
        } else {
            notification.error({
                message: 'Error',
                description: JSON.stringify(res.message)
            })
        }
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            layout='vertical'
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            style={{ margin: "20px auto", padding: '20px' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            {/* <Col>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col> */}
            <Row justify="center">
                <Col xs={24} md={8}>
                    <Form.Item
                        label="FullName"
                        name="fullName"
                        rules={[{ required: true, message: 'Please input your fullName!' }]}
                    >
                        <Input />
                    </Form.Item>

                </Col>
            </Row>
            <Row justify="center">
                <Col xs={8} md={8}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{
                            required: true, message: 'Please input your email!'
                        },
                        {
                            type: 'email',
                            message: 'Please enter a valid email!'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={8} md={8}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{
                            required: true, message: 'Please input your password!'
                        }
                            ,
                        {
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                            message: 'Must be at least 8 characters, including uppercase, lowercase, number and special character!'
                        }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={8} md={8}>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone!' },
                        {
                            pattern: /^(03|05|07|08|09)\d{8}$/,
                            message: 'Phone number must be 10 digits and start with 0!'
                        }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={8} md={8}>
                    <Form.Item name="remember" valuePropName="checked" label={null}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={8} md={8}>
                    <Form.Item label={null}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={() => form.submit}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>

        </Form>

    )


}
export default RegisterPage