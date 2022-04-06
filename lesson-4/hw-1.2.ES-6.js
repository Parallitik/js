'use strict'

// EcmaScript 6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const firstPost = new Post('Джордж Оруэлл', 'Лучшие книги, понял он, говорят тебе то, что ты уже сам знаешь.', 1984);
firstPost.edit('Лучшие книги...');
console.log(firstPost);

const secondPost = new AttachedPost('Хелен Хейз', 'Сегодняшний специалист в чем-либо когда-то был новичком.', 1980);

console.log(secondPost);
secondPost.edit('Сегодняшний специалист...');
secondPost.makeTextHighlighted();
console.log(secondPost);