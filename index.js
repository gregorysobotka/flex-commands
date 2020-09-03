const { Command } = require('commander');
const program = new Command();

const Actions = require('./actions');


// 
program.version('0.0.1', '-v, --version', 'output the current version');

program
  .command('docs [name]')
  .option('-s <searchString>', 'search cheat sheet(s)')
  .action(function (name, cmdObj) {

    let actionContext = {
      name: 'all',
      search: ''
    };

    if(name){
      actionContext.name = name;
    }

    if(cmdObj.s){
      actionContext.search = cmdObj.s;
    }

    Actions.docs(actionContext);

  });
  
program.parse(process.argv);