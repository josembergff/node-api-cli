'use strict';

const repositorio = require('../repositorios/repositorio-<%=nomeEntidade%>');

const servicoAutenticacao = require('../servicos/servico-autenticacao');
const enumAcoes = require('../enumeradores/enum-acoes');
const validacoes = require('../validacoes/validacoes');

exports.cadastrar = async (req, res, next) => {
    try {

        let validar = new validacoes();
        validar.tamanhoMinimo(req.body.nome, 3, 'O nome deve conter pelo menos 3 caracteres');

        // Se os dados forem inválidos
        if (!validar.valido()) {
            res.status(400).send(validar.erros()).end();
            return;
        }

        req.body.criador = await servicoAutenticacao.idUsuarioToken(req);
        await repositorio.padrao().criar(req.body);
        res.status(200).send({
            msg: '<%=nomeExternoEntidade%> cadastrado com sucesso!'
        });
    }
    catch (e) {
        res.status(500).send({
            msg: 'Falha ao salvar o <%=nomeExternoEntidade%>.'
        });
    }
};

exports.editar = async (req, res, next) => {
    try {
        req.body.editor = await servicoAutenticacao.idUsuarioToken(req);
        await repositorio.padrao().editar(req.params.id, req.body);
        const objeto = await repositorio.buscarPorId(req.params.id);
        res.status(200).send(objeto);
    }
    catch (e) {
        res.status(500).send({
            msg: 'Falha ao editar o <%=nomeExternoEntidade%>.',
            msgErro: e
        });
    }
};

exports.excluir = async (req, res, next) => {
    try {
        await repositorio.padrao().excluir(req.params.id);
        res.status(200).send({
            msg: '<%=nomeExternoEntidade%> excluído com sucesso!'
        });
    }
    catch (e) {
        res.status(500).send({
            msg: 'Falha ao excluír o <%=nomeExternoEntidade%>.',
            msgErro: e
        });
    }
};

exports.combo = async (req, res, next) => {
    try {
        const idUsuario = await servicoAutenticacao.idUsuarioToken(req);

        const lista = await repositorio.listaCombo(idUsuario);
        res.status(200).send(lista);
    }
    catch (e) {
        res.status(500).send({
            msg: 'Falha ao buscar o combo de <%=nomeExternoEntidadePlural%>.',
            msgErro: e
        });
    }
};

exports.listar = async (req, res, next) => {
    try {
        const idUsuario = await servicoAutenticacao.idUsuarioToken(req);
        const lista = await repositorio.listaGeral(idUsuario);
        res.status(200).send(lista);
    }
    catch (e) {
        res.status(500).send({
            msg: 'Falha ao listar os <%=nomeExternoEntidadePlural%>.',
            msgErro: e
        });
    }
};

exports.buscarId = async (req, res, next) => {
    try {
        const idUsuario = await servicoAutenticacao.idUsuarioToken(req);
        const objeto = await repositorio.buscarPorId(req.params.id);
        res.status(200).send(objeto);
    }
    catch (e) {
        res.status(500).send({
            msg: 'Falha ao busca o <%=nomeExternoEntidade%>.',
            msgErro: e
        });
    }
};