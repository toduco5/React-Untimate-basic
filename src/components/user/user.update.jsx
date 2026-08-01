import { useEffect, useState } from "react"
import { Input, notification, Modal } from 'antd';
import { updateUserApi } from "../../services/api.service";

const UserUpdateModal = (props) => {
    const {
        loadUser,
        isModalUpdateOpen,
        setIsModalUpdateOpen,
        dataUpdate,
        setDataUpdate
    } = props
    const [fullName, setFullName] = useState("")
    const [id, setId] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.fullName)
            setId(dataUpdate._id)
            setEmail(dataUpdate.email)
            setPhone(dataUpdate.phone)
        }


    }, [dataUpdate])
    const handleSubmit = async () => {
        const res = await updateUserApi(id, fullName, phone,email)
        console.log("res", res.data)
        if (res.data) {
            notification.success({
                message: `Update ${fullName}`,
                description: 'User updated successfully',
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

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false)
        setFullName("")
        setId("")
        setPhone("")
        setEmail("")
        setDataUpdate(null)
    }
    return (

        <Modal
            title="Edit User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen}
            onOk={() => { handleSubmit() }}
            onCancel={() => resetAndCloseModal()}
            maskClosable={true}
            okText='Update'
            cancelText='Cancel'
        >
            <div>
                <label htmlFor="id">id</label>
                <Input id="id" placeholder="Basic usage"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                    disabled={true} />
            </div>
            <div>
                <label htmlFor="fullname">Full name</label>
                <Input id="fullname" placeholder="Basic usage"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="phone">phone</label>
                <Input id="phone" placeholder="Basic usage"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)} />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <Input id="email" placeholder="Basic usage"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />
            </div>

        </Modal>
    )
}
export default UserUpdateModal