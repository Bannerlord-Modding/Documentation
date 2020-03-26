# Basic C\# Mod

## Introduction

The following guide will walk you through step-by-step on how to create a basic C\# mod. This mod will add a button to the singleplayer title screen called `Message`. When clicked, this button will output `Hello World` to chat.

## Preparation

### Setting up a project

Please follow the below instructions to download any tools needed and setup a project for modding.

[Click here for more details](../_intro/getting-started.md)

### Setting up your Module \(SubModule.xml\)

1. Go to your game files and locate the `Modules` directory.
2. Create a new folder and name it whatever you want, then open it.
3. Create a new folder named `bin` \(don't navigate to it\).
4. Set the build output for your DLL \(in Visual Studio\) to the previously created `bin` folder.
5. Create a new class in your VS Project and name it `MySubModule` \(_can be anything_\).
6. Create a new `SubModule.xml` file and then paste the following into it:

   ```markup
    <Module>
        <Name value="My Module"/>
        <Id value="MyModule"/>
        <Version value="v1.0.0"/>
        <SingleplayerModule value="true"/>
        <MultiplayerModule value="false"/>
        <DependedModules/>
        <SubModules>
            <SubModule>
                <Name value="MySubModule"/>
                <DLLName value="../../Modules/MyModule/bin/ExampleMod.dll"/>
                <SubModuleClassType value="ExampleModNameSpace.MySubModule"/>
                <Tags>
                    <Tag key="DedicatedServerType" value="none" />
                    <Tag key="IsNoRenderModeElement" value="false" />
                </Tags>
            </SubModule>
        </SubModules>
        <Xmls/>
    </Module>
   ```

7. Change the above values to match that of your Module/SubModule.
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

6. Compile your project and confirm that it was outputted to `Modules\MyModule\bin`.
7. Open the Bannerlord launcher and navigate to `Singleplayer` &gt; `Mods` then make sure that your mod is ticked and start the game.
8. On the title screen, you should now see a button called `Message`, click it and you should see `Hello World` displayed in the bottom-left corner of your screen \(in chat\).
9. You have now successfully created your first Bannerlord mod!

