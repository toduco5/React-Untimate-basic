import { Button, Checkbox, Form, Input, notification, Row, Col, Divider } from 'antd';
import { registerUserApi } from '../services/api.service';
import { useNavigate, Link } from 'react-router-dom';
import { QuestionCircleOutlined } from '@ant-design/icons';
import  "../assets/style/register.css"
const RegisterPage = () => {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const res = await registerUserApi(values.fullName, values.email, values.password, values.phone);
        console.log('Success:', res);
        if (res&&res.data) {
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
        <div className="bg-container">
            <Row justify='center'>
                <Col xs={24} md={16} lg={8}>
                    <fieldset style={{ borderRadius: '20px', padding: '20px' }}
                    >
                        <legend style={{ textAlign: 'center', fontSize: "20px" }}>   Register Account </legend>

                        <Form
                            form={form}
                            layout='vertical'
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <div
                                style={{
                                    margin: "10px 20px"
                                }}
                            >

                                <Form.Item
                                    label="FullName"
                                    name="fullName"
                                    rules={[{ required: true, message: 'Please input your fullName!' }]}
                                >
                                    <Input />
                                </Form.Item>
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Button type="primary" htmlType="submit" onClick={() => form.submit()}>
                                        Register
                                    </Button>
                                    <Link to='/'>Forgot your password <QuestionCircleOutlined /></Link>
                                </div>
                                <Divider />
                                <div style={{ textAlign: 'center' }}>
                                    Đã có tài khoản? <Link to="/login">Đăng nhập tại đây</Link>
                                </div>
                            </div>

                        </Form>

                    </fieldset>
                </Col>
            </Row>
        </div>
    )


}
export default RegisterPage