import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, notification, Row, Col, Divider } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { LoginUserApi } from '../services/api.service';
import { useContext, useState } from 'react';
import { AuthContext } from '../components/context/auth.context';
const LoginPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
        const {setUser} = useContext(AuthContext);
    
    const onFinish = async (values) => {
        setLoading(true)
        const res = await LoginUserApi(values.email, values.password)
        if (res && res.data) {
            
            setLoading(false)
            notification.success({
                message: 'Success',
                description: 'Login successfully!',               
            })
            localStorage.setItem("access_token",res.data.access_token)
            setUser(res.data.user)
            navigate('/')
        } else {
            setLoading(false)
            notification.error({
                message: 'Error',
                description: JSON.stringify(res.message)
            })
        }
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    

    return (
        <Row justify='center'>
            <Col xs={24} md={16} lg={8}>
                <fieldset
                    style={{
                        padding: '20px',
                        margin: "60px 0",
                        border:"1px solid #ccc",
                        borderRadius:"10px"
                    }}>
                    <legend>
                        <div>
                            <h3 style={{ textAlign: 'center' }}>Login Account</h3>
                        </div></legend>
                    <Form
                        form={form}
                        layout='vertical'
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <div
                            style={
                                {
                                   margin:"10px 20px"
                                }}
                        >
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
                                // {
                                //     pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                                //     message: 'Must be at least 8 characters, including uppercase, lowercase, number and special character!'
                                // }
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked" label={null}>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Button 
                                loading={loading}
                                type="primary" htmlType="submit" onClick={() => form.submit()}>
                                    Login
                                </Button>
                                <Link to='/'>Go To Home <ArrowRightOutlined /></Link>
                            </div>
                            <Divider />
                            <div style={{ textAlign: 'center' }}>
                                Đã có tài khoản? <Link to="/register">Đăng ký tại đây</Link>
                            </div>
                        </div>
                    </Form>
                </fieldset>
            </Col>
        </Row>
    )

}
export default LoginPage