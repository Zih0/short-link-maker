const express = require('express')

// instatiate the express app  
const app = express()

const PORT = process.env.PORT || 5000
// Listen for incoming requests
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))