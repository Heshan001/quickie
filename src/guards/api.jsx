const baseUrl = "http://localhost:3001/"

const fetchUser = async () => {
    const response = await fetch('${baseUrl' / user, {
        method: "GET",
        headers: {
            Authorization: 'Bearer ${token}',
        },
    })

    const data = await response.json()
}