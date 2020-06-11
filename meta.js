const spawn = require("child_process").spawn;
module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name"
    },
    "version": {
      "type": "string",
      "label": "version",
      "default": "1.0.0"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "An react.js project"
    },
    "author": {
      "type": "string",
      "label": "Author"
    },
    "license": {
      "type": "string",
      "label": "License",
      "default": "MIT"
    },
    "less": {
      "type": "confirm",
      "message": "Use less?",
      "default": false
   },
    "sass": {
      "type": "confirm",
      "message": "Use sass?",
      "default": false
   },
   "router": {
    "type": "confirm",
    "message": "Use React Router?",
    "default": false
   },
   "codeSplit": {
    "type": "confirm",
    "message": "Use Code Splitting?",
    "default": false
   }
  },
  "filters": {
    "src/router/**/*": "router",
    "src/components/Loading/**/*": "codeSplit"
  },
  complete({dest}, {chalk}){
    let cmd = spawn("npm", ["install"], {
      cwd: dest,
      stdio: 'inherit',
      shell: true,
    })
    cmd.on('exit', () => {
      chalk.green("Project installation completed!")
    })
    cmd.on('error', () => {
      chalk.red("The automatic installation process is abnormal, please try to install manually")
    })
  }
}
