'use strict';
const rename = require("gulp-rename");

exports.renomearEntidade = (atual, data) => {
    atual.registerTransformStream(rename(function (path) {
        path.basename = path.basename.replace(/(<%=nomeEntidade%>)/g, data.nomeEntidade);
        path.dirname = path.dirname.replace(/(<%=nomeEntidade%>)/g, data.nomeEntidade);
    }));
};

exports.novoProjetoApiNodeMongoose = (atual, data) => {
    atual.fs.copyTpl(
        atual.templatePath('./padraoApiMongoose/estrutura'),
        atual.destinationPath('./generators/temp'), {
            nomeProjeto: data.nomeProjeto,
            nomeExternoProjeto: data.nomeExternoProjeto,
            descricaoProjeto: data.descricaoProjeto,
            chaveMongo: data.chaveMongo,
            chaveSendgrid: data.chaveSendgrid
        }
    );
};

exports.novoRepositorioApiNodeMongoose = (atual, data) => {
    atual.fs.copyTpl(
        atual.templatePath('./padraoApiMongoose/repositorio'),
        atual.destinationPath('./generators/temp'), {
            nomeEntidade: data.nomeEntidade,
            nomeExternoEntidade: data.nomeExternoEntidade,
            nomeExternoEntidadePlural: data.nomeExternoEntidadePlural
        }
    );
};

exports.novoModeloApiNodeMongoose = (atual, data) => {
    atual.fs.copyTpl(
        atual.templatePath('./padraoApiMongoose/modelo'),
        atual.destinationPath('./generators/temp'), {
            nomeEntidade: data.nomeEntidade,
            nomeExternoEntidade: data.nomeExternoEntidade,
            nomeExternoEntidadePlural: data.nomeExternoEntidadePlural
        }
    );
    atual.log('Obs.: Após criado o arquivo do modelo é necessário adicionar nas configurações do projeto no arquivo "src/config.js".');
};

exports.novoControleApiNodeMongoose = (atual, data) => {
    atual.fs.copyTpl(
        atual.templatePath('./padraoApiMongoose/controle'),
        atual.destinationPath('./generators/temp'), {
            nomeEntidade: data.nomeEntidade,
            nomeExternoEntidade: data.nomeExternoEntidade,
            nomeExternoEntidadePlural: data.nomeExternoEntidadePlural
        }
    );
};

exports.novoRotaApiNodeMongoose = (atual, data) => {
    atual.fs.copyTpl(
        atual.templatePath('./padraoApiMongoose/rota'),
        atual.destinationPath('./generators/temp'), {
            nomeEntidade: data.nomeEntidade,
            nomeExternoEntidade: data.nomeExternoEntidade,
            nomeExternoEntidadePlural: data.nomeExternoEntidadePlural
        }
    );
    atual.log('Obs.: Após criado o arquivo de rota é necessário adicionar nas configurações do projeto no arquivo "src/config.js".');
};