import { Button, Drawer, notification } from 'antd';
import { useState } from 'react';
import { handleUploadfile, updateUserAvatarApi } from '../../services/api.service';

const UserDetailsModal = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isdatadetailopen,
        setIsdatadetailopen,
        loadUser
    } = props
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const onClose = () => {
        setIsdatadetailopen(false)
        setDataDetail(null)
    }
    const handleUploadAvatar = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return
        }
        const file = e.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
        // console.log("file", preview);
    }
    // console.log("preview", preview);
    const handleSavefile = async () => {
        // step 1: upload file
        const resUpload = await handleUploadfile(selectedFile, "avatar")
        if (resUpload.data) {
            const newAvater = resUpload.data.fileUploaded
            // step 2 : update user
            const resUpdateAvatar = await updateUserAvatarApi(newAvater, dataDetail._id, dataDetail.fullName, dataDetail.phone)
            if (resUpdateAvatar.data) {
                setIsdatadetailopen(false)
                setDataDetail(null)
                setSelectedFile(null)
                setPreview(null)
                await loadUser()
                notification.success({
                    message: `Update  avatar `,
                    description: 'User updated successfully',
                })

            } else {
                notification.error({
                    message: `error update avatar`,
                    description: JSON.stringify(resUpdateAvatar.message),
                })
            }
            // console.log("check newAvater ", newAvater)
        } else {
            notification.error({
                message: `error upload file`,
                description: JSON.stringify(resUpload.message),

            })
            return;
        }
        // console.log("check resUpload ", resUpload)

    }
    return (
        <>

            <Drawer
                width={"35vw"}
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
                    <hr />
                    <br />
                    <p>AVATAR:</p> <br />
                    <div
                        style={{
                            maxWidth: "25vw", maxHeight: "30vh", marginTop: "10px", clipPath: "circle()"
                        }}
                    >
                        <img
                            style={{
                                maxWidth: "100%", objectFit: "contain", border: "3px solid #ccc"
                            }}
                            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail?.avatar}`} />
                    </div>
                    <br />

                    <br />
                    <div>
                        <label htmlFor="upload-avatar" className='label-upload'
                            style={{
                                padding: "8px 16px", backgroundColor: "#ff4d4f", fontSize: "16px",
                                color: "#fff", borderRadius: "6px", cursor: "pointer"
                            }}
                        >Upload Avatar</label>
                        <input type="file" id="upload-avatar" hidden
                            onChange={handleUploadAvatar}
                        />
                    </div>
                    {
                        preview &&
                        <>
                            <div
                                style={{
                                    maxWidth: "25vw", maxHeight: "30vh", marginTop: "10px", clipPath: "circle()"
                                }}
                            >
                                <img
                                    style={{
                                        maxWidth: "100%", objectFit: "contain", border: "3px solid #ccc"
                                    }}
                                    src={preview} />
                            </div> <br />
                            <Button type="primary"
                                onClick={() => handleSavefile()}
                            >save</Button>
                        </>
                    }
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