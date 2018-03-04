'use strict';

const repositorioGenerico = require('./repositorio-generico');
const padrao = () => {
    repositorioGenerico.modelo('<%=nomeEntidade%>');
    return repositorioGenerico;
};

const modelo = () => {
    return repositorioGenerico.modelo('<%=nomeEntidade%>');
};

exports.padrao = padrao;

exports.listaCombo = async (idUsuario) => {
    const lista = await padrao().listagem({}, 'nome');
    return lista;
};

exports.listaGeral = async (idUsuario) => {
    const lista = await modelo().find({})
        .populate('criador', 'nome')
        .populate('editor', 'nome');
    return lista;
};

exports.buscarPorId = async (id) => {
    const objeto = await modelo().findById(id)
        .populate('criador', 'nome')
        .populate('editor', 'nome');
    return objeto;
};