'use strict'

// EcmaScript 5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
}

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function(highlighted) {
    this.highlighted = true;
}

const firstPost = new Post('Джордж Оруэлл', 'Лучшие книги, понял он, говорят тебе то, что ты уже сам знаешь.', 1984);
firstPost.edit('Лучшие книги...');
console.log(firstPost);

const secondPost = new AttachedPost('Хелен Хейз', 'Сегодняшний специалист в чем-либо когда-то был новичком.', 1980);
console.log(secondPost);
secondPost.edit('Сегодняшний специалист...');
secondPost.makeTextHighlighted();
console.log(secondPost);


