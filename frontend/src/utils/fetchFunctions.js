const fetchLogin = async (formData) => {
  return await fetch("http://localhost:3333/user",
    {
      body: JSON.stringify(formData),
      method: "post",
      headers: {
      "Content-Type": "application/json"
    },
    });
}

export default {
  fetchLogin,
}