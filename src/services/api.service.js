import axios from "./axios.customize";

const createUserApi = (fullName, email, password, phone) => {
  const url_Be = "/api/v1/user";

  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiYXNkZiIsImZ1bGxOYW1lIjoiQURNSU4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTY4NThjMmI0Y2M1MTNmMTJmOWFkODEiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy05MmVjYmZjNTkzNzEwNDlhYjZiNjQ2MWM4ODU0NmExODMucG5nIiwiaWF0IjoxNzg2OTY3NDA0LCJleHAiOjE3ODcwMDM0MDR9.OVjxr25HuvHq9siC8Qb2z6-EdjcJTRY-wssphN3u-OY";
  return axios.post(url_Be, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const updateUserApi = (_id, fullName, phone, email) => {
  const url_Be = "/api/v1/user";

  const data = {
    _id: _id,
    fullName: fullName,
    phone: phone,
    email: email,
  };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiYXNkZiIsImZ1bGxOYW1lIjoiQURNSU4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTY4NThjMmI0Y2M1MTNmMTJmOWFkODEiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy05MmVjYmZjNTkzNzEwNDlhYjZiNjQ2MWM4ODU0NmExODMucG5nIiwiaWF0IjoxNzg2OTY3NDA0LCJleHAiOjE3ODcwMDM0MDR9.OVjxr25HuvHq9siC8Qb2z6-EdjcJTRY-wssphN3u-OY";
  return axios.put(url_Be, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const deleteUserApi = (id) => {
  const url_Be = `/api/v1/user/${id}`;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiYXNkZiIsImZ1bGxOYW1lIjoiQURNSU4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTY4NThjMmI0Y2M1MTNmMTJmOWFkODEiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy05MmVjYmZjNTkzNzEwNDlhYjZiNjQ2MWM4ODU0NmExODMucG5nIiwiaWF0IjoxNzg2OTY3NDA0LCJleHAiOjE3ODcwMDM0MDR9.OVjxr25HuvHq9siC8Qb2z6-EdjcJTRY-wssphN3u-OY";
  return axios.delete(url_Be, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getUserApi = (current, pageSize) => {
  const url_Be = `/api/v1/user?current=${current}&pageSize=${pageSize}`;

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiYXNkZiIsImZ1bGxOYW1lIjoiQURNSU4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTY4NThjMmI0Y2M1MTNmMTJmOWFkODEiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy05MmVjYmZjNTkzNzEwNDlhYjZiNjQ2MWM4ODU0NmExODMucG5nIiwiaWF0IjoxNzg2OTY3NDA0LCJleHAiOjE3ODcwMDM0MDR9.OVjxr25HuvHq9siC8Qb2z6-EdjcJTRY-wssphN3u-OY";
  return axios.get(url_Be, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const handleUploadfile = (file, folder) => {
  const url_Be = "/api/v1/file/upload";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiYXNkZiIsImZ1bGxOYW1lIjoiQURNSU4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTY4NThjMmI0Y2M1MTNmMTJmOWFkODEiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy05MmVjYmZjNTkzNzEwNDlhYjZiNjQ2MWM4ODU0NmExODMucG5nIiwiaWF0IjoxNzg2OTY3NDA0LCJleHAiOjE3ODcwMDM0MDR9.OVjxr25HuvHq9siC8Qb2z6-EdjcJTRY-wssphN3u-OY";

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
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
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiYXNkZiIsImZ1bGxOYW1lIjoiQURNSU4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTY4NThjMmI0Y2M1MTNmMTJmOWFkODEiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy05MmVjYmZjNTkzNzEwNDlhYjZiNjQ2MWM4ODU0NmExODMucG5nIiwiaWF0IjoxNzg2OTY3NDA0LCJleHAiOjE3ODcwMDM0MDR9.OVjxr25HuvHq9siC8Qb2z6-EdjcJTRY-wssphN3u-OY";
  return axios.put(url_Be, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const registerUserApi = (fullName, email, password, phone) => {
  const url_Be = "/api/v1/user/register";

  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiYXNkZiIsImZ1bGxOYW1lIjoiQURNSU4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTY4NThjMmI0Y2M1MTNmMTJmOWFkODEiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy05MmVjYmZjNTkzNzEwNDlhYjZiNjQ2MWM4ODU0NmExODMucG5nIiwiaWF0IjoxNzg2OTY3NDA0LCJleHAiOjE3ODcwMDM0MDR9.OVjxr25HuvHq9siC8Qb2z6-EdjcJTRY-wssphN3u-OY";
  return axios.post(url_Be, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export {
  updateUserApi,
  createUserApi,
  getUserApi,
  deleteUserApi,
  handleUploadfile,
  updateUserAvatarApi,
  registerUserApi,
};
