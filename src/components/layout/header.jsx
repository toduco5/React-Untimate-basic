import { Link, NavLink, useNavigate } from 'react-router-dom'
// import '../layout/styles/header.css'
import { HomeOutlined, UserOutlined, ProductOutlined, LoginOutlined, LogoutOutlined, InfoCircleTwoTone } from '@ant-design/icons';

import { Menu, message } from 'antd'
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { logoutUserApi } from '../../services/api.service';
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const { user, setUser } = useContext(AuthContext);
        const navigate = useNavigate();
    
    console.log("check user from context", user)
    const onClick = e => {
        // console.log('click ', e);
        setCurrent(e.key);
    };
    const handleLogout = async () => {
        const res = await logoutUserApi()
        if (res.data) {
            //clear data
            localStorage.removeItem("access_token")
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })
            message.success("Logout Done")
            navigate("/")
        }

    }
    const items = [
        {
            label: <Link to={'/'}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={'/User'}> User</Link>,
            key: 'User',
            icon: <UserOutlined />,

        },
        {
            label: <Link to={'/product'}> Product</Link>,
            key: 'product',
            icon: <ProductOutlined />,

        },
        ...(!user.id ? [{
            label: <Link to={'/login'}> Login</Link>,
            key: 'login',
            icon: <LoginOutlined />
        }] : [])
        ,
        ...(user.id ? [{
            label: `hello ${user.fullName}`,
            key: 'info',
            icon: <InfoCircleTwoTone />,
            children: [
                {
                    label: <span onClick={() => { handleLogout() }}>Logout</span>,
                    key: 'Logout',
                    icon: <LogoutOutlined />,
                },
            ]
        }] : [])
        ,

    ];

    return (
        <div >

            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items} />;
        </div>

    )

}
export default Header