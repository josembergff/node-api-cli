const Generator = require('yeoman-generator');
const yosay = require('yosay');
const gerador = require('./acoes/gerador');
const enumAcoes = require('./enum/enum-acoes');
const rename = require("gulp-rename");
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {
        this.log(yosay('Bem-vindo ao gerênciador de projetos de API em Node.js!'));
    }

    default() { }

    prompting() {
        var atual = this;
        this.prompt({
            type: 'list',
            name: 'type',
            message: 'Escolha o que deseja fazer no seu projeto?',
            choices: [{
                name: 'Criar novo projeto api em node com modelo de banco do Mongoose.',
                value: enumAcoes.novoApiNodeMongoose
            },
            {
                name: 'Criar nova Entidade (modelo, controle, repositorio e rota) com modelo de banco do Mongoose.',
                value: enumAcoes.novaEntidadeApiNodeMongoose
            },
            {
                name: 'Criar nova Rota.',
                value: enumAcoes.novaRotaApiNode
            },
            {
                name: 'Criar novo Controle.',
                value: enumAcoes.novoControleApiNode
            },
            {
                name: 'Criar novo Repositório.',
                value: enumAcoes.novoRepositorioApiNodeMongoose
            },
            {
                name: 'Criar novo Modelo de banco do Mongoose.',
                value: enumAcoes.novoModeloApiNodeMongoose
            }
            ]
        }).then(function (tipo) {
            atual.acao = tipo.type;
            gerador.acao(atual);
        });
    }

    writing() {

    }
};