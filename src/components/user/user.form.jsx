import { Input } from 'antd';
import { Button, Flex } from 'antd';
import './styles/user.foem.css'
const UserForm = () => {
    return (
        <div className="user-form">
            <div>
                <label htmlFor="username">username</label>
                <Input id="username" placeholder="Basic usage" />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <Input id="email" placeholder="Basic usage" />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <Input.Password id="password" placeholder="Basic usage" />
            </div>
            <div>
                <label htmlFor="phone">phone</label>
                <Input  id="phone" placeholder="Basic usage" />
            </div>
            <div>
                <Button type="primary">Add</Button>
            </div>
        </div>
    )
}
export default UserForm