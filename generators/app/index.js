const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument('action', { type: String, required: true });
        this.argument('name', { type: String, required: false });
        this.option('type', { type: Number, required: false });
    }

    default() {
        this.composeWith(require.resolve('./actions/init.js'), {action: this.options.action, entity:this.options.entity});
        this.composeWith(require.resolve('./actions/generate.js'), { action: this.options.action, entity: this.options.entity });
    }

    prompting() {
        //this.log(this.templatePath() + ' - ' + this.destinationPath());
    }

    writing() {
        //this.log("Api Node Cli iniciado!");
    }
};