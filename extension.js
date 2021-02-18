// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('string-list-creator.helloWorld', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from String-List Creator!');
	// });
	// context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('string-list-creator.createStringList', function () {

		// let pkglog = vscode.window.createOutputChannel("String List Creator");

		const textEditor = vscode.window.activeTextEditor;
		const document = textEditor.document;
		const selection = textEditor.selection;
		const word = document.getText(selection);

		var word_list = word.split('\n');
		word_list = word_list.filter(x => x.length > 0 && x.trim() != '').map(x => x.trim());

		const new_word_list = word_list.map(x => "'" + x + "',");
		var quoted = new_word_list.join('\n');
		quoted = '[' + quoted.slice(0, -1) + ']';
		
		textEditor.edit(function(editBuilder) {
			editBuilder.replace(selection, quoted);
		});
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
