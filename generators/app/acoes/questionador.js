'use strict';

exports.perguntasNovoApiNodeMongoose = (atual) => {
    return atual.prompt({
        type: 'input',
        name: 'nomeProjeto',
        message: 'Qual o nome deste novo projeto API em Node com Mongoose:',
    });
}