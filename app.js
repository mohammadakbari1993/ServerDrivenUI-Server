
const express = require('express')
const app = express()

//localhost 3000
app.get('/pet-listing', (req, res) => {

    const model = {
        pageTitle : 'Pets',
        components : [
            {
                type : 'featuredImage',
                data : {
                    imageUrl : 'https://i.cbc.ca/1.5077459.1553886010!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/pets.jpg'
                }
            }
        ]
    }

    res.json(model)

})

app.listen(3000, ()=> {
    console.log("server is running ....")
})