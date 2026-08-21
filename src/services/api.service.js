import axios from "./axios.customize";

const createUserApi = (fullName, email, password, phone) => {
  const url_Be = "/api/v1/user";

  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(url_Be, data);
};

const updateUserApi = (_id, fullName, phone, email) => {
  const url_Be = "/api/v1/user";

  const data = {
    _id: _id,
    fullName: fullName,
    phone: phone,
    email: email,
  };
  return axios.put(url_Be, data);
};

const deleteUserApi = (id) => {
  const url_Be = `/api/v1/user/${id}`;
  return axios.delete(url_Be);
};

const getUserApi = (current, pageSize) => {
  const url_Be = `/api/v1/user?current=${current}&pageSize=${pageSize}`;

  return axios.get(url_Be);
};

const handleUploadfile = (file, folder) => {
  const url_Be = "/api/v1/file/upload";
  let config = {
    headers: {
      "upload-type": folder,
      "Content-Type": "multipart/form-data",
    },
  };
  const bodyFormData = new FormData();
  bodyFormData.append("fileImg", file);

  return axios.post(url_Be, bodyFormData, config);
};

const updateUserAvatarApi = (avatar, _id, fullName, phone) => {
  const url_Be = "/api/v1/user";

  const data = {
    _id: _id,
    avatar: avatar,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(url_Be, data, );
};
const registerUserApi = (fullName, email, password, phone) => {
  const url_Be = "/api/v1/user/register";

  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(url_Be, data, );
};

const LoginUserApi = (email, password) => {
  const url_Be = "/api/v1/auth/login";

  const data = {
    username: email,
    password: password,
    delay:3000
  };
  return axios.post(url_Be, data );
};
const getAccountApi = () => {
  const url_Be = "/api/v1/auth/account";
  return axios.get(url_Be);
};
const logoutUserApi = () => {
  const url_Be = "/api/v1/auth/logout";
  return axios.post(url_Be);
};
export {
  updateUserApi,
  createUserApi,
  getUserApi,
  deleteUserApi,
  handleUploadfile,
  updateUserAvatarApi,
  registerUserApi,
  LoginUserApi,
  getAccountApi,
  logoutUserApi
  
};
