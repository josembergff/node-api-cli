const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
        switch (this.options.action) {
            case "g":
            case "generate":
                this.log("Generator actived.");
                break;
        }
    }

    prompting() {
        //console.log('prompting - generate');
    }

    writing() {
        //console.log('writing - generate');
    }
};