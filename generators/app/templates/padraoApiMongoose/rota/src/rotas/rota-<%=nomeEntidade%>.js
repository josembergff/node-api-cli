'use strict';

const express = require('express');
const router = express.Router();
const controle = require('../controles/controle-<%=nomeEntidade%>');
const servicoAutenticacao = require('../servicos/servico-autenticacao');
const controleRegistroCrud = require('../controles/controle-registro-crud');

router.post('/',
    servicoAutenticacao.autorizar,
    controleRegistroCrud.cadastrarCriacao,
    controle.cadastrar);
router.put('/:id',
    servicoAutenticacao.autorizar,
    controleRegistroCrud.cadastrarEdicao,
    controle.editar);
router.delete('/:id',
    servicoAutenticacao.autorizar,
    controleRegistroCrud.cadastrarExclusao,
    controle.excluir);
router.get('/', servicoAutenticacao.autorizar, controle.listar);
router.get('/dados/combo', servicoAutenticacao.autorizar, controle.combo);
router.get('/:id', servicoAutenticacao.autorizar, controle.buscarId);


module.exports = router;