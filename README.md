# vscode-extension-string-list-creator
A very simple VS Code extension, so I can sort of learn how they work.

The extension has one command so far, which can be activated by Ctrl + Shift + P and the command "String List Creator: Create list of strings". It will turn a "list" of unquoted strings, one per line, into a valid Python list. This is useful (to me, at least) for when you paste some text into your code editor that you wish to pass to Python as a list. For example, you can paste a list of Jamiroquai albums to your code editor:

```
Emergency on Planet Earth
The Return of the Space Cowboy
Travelling Without Moving
Synkronized
A Funk Odyssey
Dynamite
Rock Dust Light Star
Automaton (bleh)
```

If you select the text and running the command, the result will be:

```
['Emergency on Planet Earth',
'The Return of the Space Cowboy',
'Travelling Without Moving',
'Synkronized',
'A Funk Odyssey',
'Dynamite',
'Rock Dust Light Star',
'Automaton (bleh)']
```

TODO:

1. if any of the strings contain single quotes, turn them into double quotes and display a warning to the user
2. if no text is selected, do nothing and display a warning to the user (I feel like anything else would be stupid — failing silently would be frustrating, assuming that the user wants to quote the *entire* document and transforming everything would be even more annoying)
3. allow the user to define a separator other than a newline. Maybe the package could have different functions? Instead of "Create list of strings", we could have a series of commands that say "Create list of strings (newline separated)", "Create list of strings (semicolon separated)", etc.