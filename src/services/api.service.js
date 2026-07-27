import axios from "./axios.customize";

const createUserApi = (fullName, email, password, phone) => {
  const url_Be = "/api/v1/user";

  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTViMzNhMTM1M2IyOGM5YmIwOWViZDgiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3ODUxMzkzMTQsImV4cCI6MTc4NTE3NTMxNH0.bVmQoTdJMaWX54KCkxxAGe5dDNQHgZfSbFw-hXuJTJg"
  return axios.post(url_Be, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const updateUserApi = () => {
  // sau này sẽ làm
};
const getUserApi =() => {
   const url_Be = "/api/v1/user";

  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2YTViMzNhMTM1M2IyOGM5YmIwOWViZDgiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3ODUxMzkzMTQsImV4cCI6MTc4NTE3NTMxNH0.bVmQoTdJMaWX54KCkxxAGe5dDNQHgZfSbFw-hXuJTJg"
  return axios.get(url_Be, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
}

export { updateUserApi, createUserApi, getUserApi };
