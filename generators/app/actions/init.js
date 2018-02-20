const yosay = require('yosay');

const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
        switch (this.options.action) {
            case "init":
            case "i":
                this.log(yosay('Bem-vindo ao gerador de arquivos de API em Node.js!'));
                this.fs.copyTpl(
                    this.templatePath('./root'),
                    this.destinationPath('./generators/temp'), { entity: this.options.entity, action: this.options.action }
                );
                break;
        }
    }

    prompting() {
       // console.log('prompting - init');
    }

    writing() {
        // console.log('writing - init');
    }
};