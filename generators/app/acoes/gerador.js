'use strict';
const enumAcoes = require('../enum/enum-acoes');
const questionador = require('./questionador');
const rename = require("gulp-rename");


exports.acao = (atual) => {

    switch (atual.acao) {
        case enumAcoes.novoApiNodeMongoose:
            atual.log("novo api");
            questionador.perguntasNovoApiNodeMongoose(atual)
                .then(data => {
                    console.log("retorno questionador", data);
                    atual.fs.copyTpl(
                        atual.templatePath('./root'),
                        atual.destinationPath('./generators/temp'), { entity: data.nomeProjeto, action: 'exemplo' }
                    );
                });
            break;
        case enumAcoes.novaEntidadeApiNodeMongoose:
            atual.log("novo api");
            questionador.perguntasNovoApiNodeMongoose(atual)
                .then(data => {
                    console.log("retorno questionador", data);
                    atual.registerTransformStream(rename(function (path) {
                        path.basename = path.basename.replace(/(<%=entidade%>)/g, data.nomeProjeto);
                        path.dirname = path.dirname.replace(/(<%=entidade%>)/g, data.nomeProjeto);
                    }));
                    atual.fs.copyTpl(
                        atual.templatePath('./modelo'),
                        atual.destinationPath('./generators/temp'), { entidade: data.nomeProjeto }
                    );
                });
            break;
    }

};