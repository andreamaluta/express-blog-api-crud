const post = require('../data/postsList');

function index(req, res) {
    res.json(post);
}

function show(req, res){
    const id = parseInt(req.params.id);
    const postFound = post.find(post => post.id === id);
    res.json(postFound); 
}

function store(req, res){
    console.log(req.body);
}

function update(req, res){
    res.send('Modifica totale del post: ' +req.params.id);
}

function modify(req, res){
    res.send('Modifica parziale del post: ' +req.params.id);
}

function destroy(req, res){
    const id = parseInt(req.params.id);
    const postFound = post.find(post => post.id === id);
    post.splice(post.indexOf(postFound), 1);
    console.log(post);

    res.sendStatus(204);

}

module.exports = {index, show, store, update, modify, destroy}