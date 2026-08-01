import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useState, useEffect } from 'react'
import { getUserApi } from "../services/api.service"
const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([])
    useEffect(() => { loadUser() }, [])
    const loadUser = async () => {
        const res = await getUserApi()
        console.log("res ebd: ", res)
        setDataUsers(res.data)
    }
    return (
        <div>
            <div>
                <UserForm
                    loadUser={loadUser}
                />
                <UserTable
                    dataUsers={dataUsers}
                    loadUser={loadUser}
                />
            </div>
        </div>
    )
}
export default UserPage