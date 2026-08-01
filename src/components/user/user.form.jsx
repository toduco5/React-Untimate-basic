import { Input, Button, notification, Modal } from 'antd';
import './styles/user.foem.css'
import { useState } from 'react';
import { createUserApi } from '../../services/api.service';
const UserForm = (props) => {
    const {loadUser}=props
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleSubmit = async () => {

        const res = await createUserApi(fullName, email, password, phone)
        console.log("res", res.data)
        if (res.data) {
            notification.success({
                message: `success ${fullName}`,
                description: 'User created successfully',
            })
            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: `error ${fullName}`,
                description: JSON.stringify(res.message),
            })
        }
    }
    const resetAndCloseModal=()=>{
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }
    return (
        <div className="user-form">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button type="primary"
                    onClick={() => setIsModalOpen(true)}
                >Add</Button>
            </div>
            <Modal
                title="Create New User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => { handleSubmit() }}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                okText='Create'
                cancelText='Cancel'
            >
                <div>
                    <label htmlFor="fullname">Full name</label>
                    <Input id="fullname" placeholder="Basic usage"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <Input id="email" placeholder="Basic usage"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <Input.Password id="password" placeholder="Basic usage"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="phone">phone</label>
                    <Input id="phone" placeholder="Basic usage"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)} />
                </div>

            </Modal>
        </div>

    )
}
export default UserForm