'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: [true, 'O nome do <%=nomeEntidade%> é obrigatório'],
        trim: true,
        unique: true
    },
    criacao: {
        type: Date,
        required: true,
        default: Date.now
    },
    edicao: {
        type: Date,
        required: false
    },
    criador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    editor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

module.exports = mongoose.model('<%=nomeEntidade%>', schema);
