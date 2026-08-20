import { Link, NavLink } from 'react-router-dom'
// import '../layout/styles/header.css'
import { HomeOutlined, UserOutlined, ProductOutlined, SettingFilled, LoginOutlined, LogoutOutlined } from '@ant-design/icons';

import { Menu } from 'antd'
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const { user } = useContext(AuthContext);
    console.log("check user from context", user)
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
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
        {
            label: 'Setting',
            key: 'setting',
            icon: <SettingFilled />,
            children: [
                {
                    label: <Link to={'/login'}> Login</Link>,
                    key: 'login',
                    icon: <LoginOutlined />,
                },
                {
                    label: 'Logout',
                    key: 'Logout',
                    icon: <LogoutOutlined />,
                },
            ]

        },
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