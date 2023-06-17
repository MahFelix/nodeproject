const express = require('express')
const uuid = require('uuid')
const bodyParser = require('body-parser')
import cors from 'cors'




const app = express()
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())



app.listen(3001)


const users = []

const checkUserID = (request, response, next) => {
    const { id } = request.params;

    const index = users.findIndex((user) => user.id === id);

    if (index<0) {
        return response.status(404).json({ error: "User not found"});

    }

    request.userIndex = index;
    request.userID = i
}









app.get('/users', (request, response) => {
    return response.json(users)

})

app.post('/users', (request, response) => {
    const { name, age} = request.body
    const user = {id:uuid.v4(), name:name, age:age}

    users.push(user)

    return response.status(201).json(user)



})

app.put('/users/:id', (request, response) => {
    const { id } = request.params
    const { name, age } = request.body

    const updatedUser = { id, name, age}

    const index = users.findIndex(user => user.id === id)

    if(index < 0 ){
        return response.status(404).json({ message:"User not found"})
    }

    users[ index ] = updatedUser

    return response.json(updatedUser)

})

app.delete('/users/:id', (request, response) => {
    const { id } = request.params


    const index = users.findIndex(user => user.id === id)

    if(index < 0 ){
        return response.status(404).json({ message:"User not found"})
}


    users.splice(index,1)


    return response.status(204).json()


})

