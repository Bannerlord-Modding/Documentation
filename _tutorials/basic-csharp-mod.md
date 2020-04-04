# Basic C\# Mod

## Introduction

The following guide will walk you through step-by-step on how to create a basic C\# mod. This mod will add a button to the singleplayer title screen called `Message`. When clicked, this button will output `Hello World` to chat.

## Preparation

### Setting up a project

Before setting up a project, it is important to know that **this is not required for basic mods** \(e.g. changing or adding items/characters/scenes\).

1. Start Microsoft Visual Studio and select `Create New Project`.
2. Choose `Class Library (.NET Framework)`.
3. Name your project whatever you want and choose `.NET Framework 4.7.2` as the `Framework`.  If this option is not available for you, [Download it here](https://dotnet.microsoft.com/download/dotnet-framework/net472) \(Developer Pack\).
4. Now that your project is setup, \[set your build path\]\(\([https://docs.microsoft.com/en-us/visualstudio/ide/how-to-change-the-build-output-directory?view=vs-2019](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-change-the-build-output-directory?view=vs-2019)\)\) to the `Modules/MyModule/bin/Win64_Shipping_Client` directory in your game files.
5. [Reference](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-add-or-remove-references-by-using-the-reference-manager?view=vs-2019) the `TaleWorlds.*` DLLs in the `bin\Win64_Shipping_Client` directory of your game files \(not your module directory\). Also reference the `TaleWorlds.*` DLLs for each official module in `Modules\ModuleName\bin\Win64_Shipping_Client`.

### Debugging a project

1. Open your project properties and go to the `Debug` tab.
2. Select the `Start external program` option and then browse for `Bannerlord.exe` located in the `bin\Win64_Shipping_Client` directory in your game files \(not your module directory\).
3. Set your working directory to the `bin\Win64_Shipping_Client` directory in your game files \(not your module directory\).
4. Add the following command line arguments \(be sure to replace MyModule with the name of your module\):
   * `/singleplayer _MODULES_*Native*SandBox*SandBoxCore*StoryMode*CustomBattle*MyModule*_MODULES_`

#### For this tutorial, we will be naming our project `ExampleMod`.

### Setting up your Module \(SubModule.xml\)

1. Go to your game files and locate the `Modules` directory.
2. Create a new folder and name it `ExampleMod` \(Must be the same as the Id you use for Step \#6\).
3. Create a new folder named `bin` and inside this directory, create a new folder called `Win64_Shipping_Client`.
4. Set the build output for your DLL \(in Visual Studio\) to the previously created `bin` folder.
5. Create a new class in your VS Project and name it `MySubModule` \(_can be anything_\).
6. Create a new `SubModule.xml` file inside the folder you created in Step \#2 and then paste the following into it:

   ```markup
    <Module>
        <Name value="Example Mod"/>
        <Id value="ExampleMod"/>
        <Version value="v1.0.0"/>
        <SingleplayerModule value="true"/>
        <MultiplayerModule value="false"/>
        <DependedModules>
            <DependedModule Id="Native"/>
            <DependedModule Id="SandBoxCore"/>
            <DependedModule Id="Sandbox"/>
            <DependedModule Id="CustomBattle"/>
            <DependedModule Id="StoryMode" />
        </DependedModules>
        <SubModules>
            <SubModule>
                <Name value="ExampleMod"/>
                <DLLName value="ExampleMod.dll"/>
                <SubModuleClassType value="ExampleMod.MySubModule"/>
                <Tags>
                    <Tag key="DedicatedServerType" value="none" />
                    <Tag key="IsNoRenderModeElement" value="false" />
                </Tags>
            </SubModule>
        </SubModules>
        <Xmls/>
    </Module>
   ```

7. If you are using different names, change the above values to match that of your Module/SubModule.
8. Start the launcher and make sure your mod appears under `Singleplayer` &gt; `Mods`.

For more information on the Module folder structure, [Click Here](../_intro/folder-structure.md).

## Programming

1. Open your `MySubModule` class.
2. Add the following using directives to your class:

   ```csharp
    using TaleWorlds.Core;
    using TaleWorlds.Localization;
    using TaleWorlds.MountAndBlade;
   ```

3. Inherit from the `MBSubModuleBase` class.
4. Setup an override for the `OnSubModuleLoad()` inherited method.
5. Add the following code to your override method:

   ```csharp
    Module.CurrentModule.AddInitialStateOption(new InitialStateOption("Message",
        new TextObject("Message", null),
        9990,
        () => { InformationManager.DisplayMessage(new InformationMessage("Hello World!")); },
        false));
   ```

6. Compile your project and confirm that it was outputted to `Modules\ExampleMod\bin\Win64_Shipping_Client`.
7. Open the Bannerlord launcher and navigate to `Singleplayer` &gt; `Mods` then make sure that your mod is ticked and start the game.
8. On the title screen, you should now see a button called `Message`, click it and you should see `Hello World` displayed in the bottom-left corner of your screen \(in chat\).
9. You have now successfully created your first Bannerlord mod!

