import { Button, Drawer } from 'antd';

const UserDetailsModal = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isdatadetailopen,
        setIsdatadetailopen,
    } = props
    const onClose = () => {
        setIsdatadetailopen(false)
        setDataDetail(null)
    }
    return (
        <>

            <Drawer
                title="User Details"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={isdatadetailopen}
                maskClosable={false}
            >
                {dataDetail ? <>
                    <p>ID: {dataDetail?._id}</p>
                    <p>Full name: {dataDetail?.fullName}</p>
                    <p>Phone: {dataDetail?.phone}</p>
                    <p>Email: {dataDetail?.email}</p>
                    <p>Role: {dataDetail?.role}</p>
                </>
                    :
                    <>
                        <p>not found data</p>


                    </>}
            </Drawer>
        </>

    )
}
export default UserDetailsModal