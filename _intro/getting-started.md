# Getting Started

## Important

Before proceeding, it is important to have a good understanding of the [SubModule.xml](../_xmldocs/submodule.md) file, as this file tells the game what it should be loading when your mod is selected.

## Tools

### C\# IDE

* [Microsoft Visual Studio](https://visualstudio.microsoft.com/downloads/) \(not required for basic mods\)

### Text Editor

Any text editor will suffice, but one of these is recommended...

* [Visual Studio Code](https://code.visualstudio.com/download)
* [Sublime Text](https://www.sublimetext.com/)  
* [Notepad++](https://notepad-plus-plus.org/downloads/)

## Modding without C\#

There are several aspects of the game you can mod without C\#. This includes scenes, items, cultures, characters, Gauntlet UIs, and many more.

## Modding with C\#

The module-based modding system makes modding in Bannerlord much easier than past games in the series and allows for much more complexity in your mods.

## Creating a Module

In Bannerlord an individual mod is called a Module and the only required part is the SubModule folder itself and a `SubModule.xml` file which informs the launcher of your mod.

1. Create a new folder in the `Modules` directory in your game files, the name of the folder must be the name of your SubModule.
2. Create a `SubModule.xml` file in your new folder. You can [see an example here](../_xmldocs/submodule.md) or find the [full documentation here](../_xmldocs/submodule.md)

## Next Steps

- Refer to the [Folder Structure](folder-structure.md) page for additional information on what additional directories to add depending on the intended content of your mod.
- Refer to the [Basic C# Mod](../_tutorials/basic-csharp-mod.md) page for an example of how to set up, build and run code in Bannerlord.
- Refer to the [Modding Gauntlet UIs Without C#](_tutorials/modding-gauntlet-without-csharp.md) page for information on how to mod Gauntlet UIs without using any C#.

