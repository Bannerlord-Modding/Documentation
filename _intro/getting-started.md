# Getting Started

## Notice

### Modding in Bannerlord is currently limited due to the lack of access to the `CampaignSystem` DLLs and official modding tools. This guide will be updated accordingly as soon as access to these things are provided. In the meantime, now is a great opportunity to learn the basics of modding Bannerlord.

## Tools

### C\# IDE

* [Microsoft Visual Studio](https://visualstudio.microsoft.com/downloads/) \(not required for basic mods\)

### Text Editor

* I recommend [Visual Studio Code](https://code.visualstudio.com/download) and/or [Notepad++](https://notepad-plus-plus.org/downloads/)

## Creating a module

1. Create a folder in the `Modules` directory in your game files and name it whatever you want the name of your module to be.
2. Create a `SubModule.xml` file in your new directory. You can [see an example here](https://pastebin.com/x8NU4FLN).
3. Add a `ModuleData` , `GUI` and `bin` Folder to your new Directory. ModuleData will contain things such as modded items and characters, while GUI will contain Gauntlet UI elements for your mod.
4. Inside your new `bin` directory, create a folder named `Win64_Shipping_Client`. This is where any DLLs related to your mod will go.
5. Inside your new `GUI` directory, create 2 more folders, once named `Brushes` and the other named `Prefabs`. Brushes will contain your Gauntlet Brushes, while Prefabs will contain your [Movies](../_xmldocs/movie.md) for Gauntlet.

## Setting up a project

Before setting up a project, it is important to know that **this is not required for basic mods** \(e.g. changing or adding items/characters/scenes\).

1. Start Microsoft Visual Studio and select `Create New Project`.
2. Choose `Class Library (.NET Framework)`.
3. Name your project whatever you want and choose `.NET Framework 4.7.2` as the `Framework`.  If this option is not available for you, [Download it here](https://dotnet.microsoft.com/download/dotnet-framework/net472) \(Developer Pack\).
4. Now that your project is setup, set your build path to the `Modules/MyModule/bin/Win64_Shipping_Client` directory in your game files.
5. Reference the `TaleWorlds.*` DLLs in the `bin\Win64_Shipping_Client` directory in your game files \(not your module directory\).

## Debugging a project

1. Open your project properties and go to the `Debug` tab.
2. Select the `Start external program` option and then browse for `Bannerlord.exe` located in the `bin\Win64_Shipping_Client` directory in your game files \(not your module directory\).
3. Set your working directory to the `bin\Win64_Shipping_Client` directory in your game files \(not your module directory\).
4. Add the following command line arguments \(be sure to replace MyModule with the name of your module\):
   * `/singleplayer _MODULES_*Native*SandBox*SandBoxCore*StoryMode*CustomBattle*MyModule*_MODULES_`

