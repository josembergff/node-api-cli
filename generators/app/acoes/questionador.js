'use strict';

exports.perguntasNovoApiNodeMongoose = (atual) => {
    return atual.prompt([
        {
            type: 'input',
            name: 'nomeProjeto',
            message: 'Qual o nome deste novo projeto API em Node com Mongoose (sem acentos, somente em minúsculas, espaços e caracteres especiais):',
            default: 'novoprojeto'
        },
        {
            type: 'input',
            name: 'nomeExternoProjeto',
            message: 'Qual o nome externo deste novo projeto API em Node com Mongoose:',
            default: 'Novo Projeto Api'
        },
        {
            type: 'input',
            name: 'descricaoProjeto',
            message: 'Qual a descrição deste novo projeto API em Node com Mongoose:',
            default: 'Novo Projeto API para agilizar os processo web e mobile.'
        }, {
            type: 'input',
            name: 'chaveMongo',
            message: 'Chave de conexão com a base mongo.',
            default: 'configurarChaveMongoDepois'
        }, {
            type: 'input',
            name: 'chaveSendgrid',
            message: 'Chave de envio de email do SendGrid.',
            default: 'configurarChaveSendgridDepois'
        }
    ]);
};

exports.perguntasNovaEntidade = (atual) => {
    return atual.prompt([
        {
            type: 'input',
            name: 'nomeEntidade',
            message: 'Qual o nome da Entidade que será criada:',
            default: 'Cliente'
        },
        {
            type: 'input',
            name: 'nomeExternoEntidade',
            message: 'Qual o nome externo desta nova entidade:',
            default: 'Cliente Comercial'
        },
        {
            type: 'input',
            name: 'nomeExternoEntidadePlural',
            message: 'Qual o nome externo desta nova entidade no plural:',
            default: 'Clientes'
        }
    ]);
}