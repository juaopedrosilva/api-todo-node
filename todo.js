const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    data:{
        type: Date,
        default: Date.now
    }
})

mongoose.model('Todo', TodoSchema)