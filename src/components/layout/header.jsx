import { Link, NavLink } from 'react-router-dom'
// import '../layout/styles/header.css'
import {  HomeOutlined, UserOutlined, ProductOutlined } from '@ant-design/icons';

import { Menu } from 'antd'
import { useState } from 'react';
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={ '/'}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to = {'/User'}> User</Link>,
            key: 'User',
            icon: <UserOutlined />,
            
        },
        {
            label: <Link to = {'/product'}> Product</Link>,
            key: 'product',
            icon: <ProductOutlined />,
            
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