export function getHotels(body) {
    return fetch("https://experimentation.getsnaptravel.com/interview/hotels", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: body
    }).then(response => {
        return response.json();      
    })
}
