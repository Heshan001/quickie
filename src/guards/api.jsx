const baseUrl = "http://localhost:8000/"

const fetchUser = async (token) => {
  const response = await fetch("${baseUrl" / user, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
};