

document.getElementById('request-form').addEventListener('submit', async (event) => {
    event.preventDefault()


    const firstName = document.getElementById('fname').value
    const lastName = document.getElementById('lname').value
    const email = document.getElementById('email').value
    const password = document.getElementById('pass').value
    const designation = document.getElementById('role').value


    
    try {
        const response = await fetch('https://donation-manager-e83t.onrender.com/api/create_user', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ firstName, lastName, email, password, designation }),      
        })
        

        const response1 = await fetch('https://donation-manager-e83t.onrender.com/api/users', {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })

       
        const data = await response.json()
        const data1 = await response1.json();

        const responseElement = document.getElementById("response")

        responseElement.textContent = data.message
        responseElement.className = "response-message error";
        responseElement.style.display = "block";
        console.log("Response from backend:", data)
        console.log("Response from backend:", data1)


    } catch (error) {
        console.error("Error sending data:", error)
        document.getElementById("response").textContent = "An error occurred."
    }
})