const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} =require('mongodb');

var id = '99a668395fa981cb47e0a1e';

if (!ObjectID.isValid(id)) {
    return console.log('errrr');
}
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// });

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('111111111');
    }
    console.log('todoa', todo);
});