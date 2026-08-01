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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMDMzMjMxODQ2MCIsImZ1bGxOYW1lIjoiQURNSU4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTY4NThjMmI0Y2M1MTNmMTJmOWFkODEiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3ODU1NzAxNzIsImV4cCI6MTc4NTYwNjE3Mn0.hx4XAEtyyxE9iW4oaCduHjUNKG6DGcaGKsLm7ZZlh6E";
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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMDMzMjMxODQ2MCIsImZ1bGxOYW1lIjoiQURNSU4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTY4NThjMmI0Y2M1MTNmMTJmOWFkODEiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3ODU1NzAxNzIsImV4cCI6MTc4NTYwNjE3Mn0.hx4XAEtyyxE9iW4oaCduHjUNKG6DGcaGKsLm7ZZlh6E";
  return axios.put(url_Be, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const deleteUserApi = (id) => {
  const url_Be = `/api/v1/user/${id}`;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMDMzMjMxODQ2MCIsImZ1bGxOYW1lIjoiQURNSU4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTY4NThjMmI0Y2M1MTNmMTJmOWFkODEiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3ODU1NzAxNzIsImV4cCI6MTc4NTYwNjE3Mn0.hx4XAEtyyxE9iW4oaCduHjUNKG6DGcaGKsLm7ZZlh6E";
  return axios.delete(url_Be, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const getUserApi = () => {
  const url_Be = "/api/v1/user";

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMDMzMjMxODQ2MCIsImZ1bGxOYW1lIjoiQURNSU4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTY4NThjMmI0Y2M1MTNmMTJmOWFkODEiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3ODU1NzAxNzIsImV4cCI6MTc4NTYwNjE3Mn0.hx4XAEtyyxE9iW4oaCduHjUNKG6DGcaGKsLm7ZZlh6E";
  return axios.get(url_Be, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { updateUserApi, createUserApi, getUserApi, deleteUserApi };
