# Basic C\# Mod

## Introduction

The following guide will walk you through step-by-step on how to create a basic C\# mod. This mod will add a button to the singleplayer title screen called `Message`. When clicked, this button will output `Hello World` to chat.

## Preparation

### Code environment

#### Important!
There is a fantastic set of four videos on youtube that run you through the mod setup process. While this tutorial serves as a slightly more in-depth text version, you should definitely watch these videos:
https://www.youtube.com/playlist?list=PL-eEdYu_CymFEGjndmZRmM-gSg8AK66L_

Or, read on for the more in-depth version.

We will be using Visual Studio 2019 and DotNet Framework 4.7.2. If you already know how to set up a DotNet project and add references from .dll files, feel free to skip this part of the tutorial and jump ahead to "Setting up your Module".

Firstly, download Visual Studio Community 2019. Go to this link and click "Free Download" under the "Community" option: https://visualstudio.microsoft.com/downloads/. This is one of those fantastic microsoft things that installs a downloader that downloads an installer to download the files you need to install a downloader that downloads an installer for the downloader that you need to install the downloader that... you get the idea.

At some point in the installation you will get a window that allows you to select extra stuff to download and install while the main installer is running. In that list will be DotNet Framework 4.7.2. Enable that while installing VS2019 so the installer can take care of it for you. If you get all the way through the install process and you don't see that option don't fret! You can also go here to download it: https://dotnet.microsoft.com/download/dotnet-framework/net472 - download the .NET Framework 4.7.2 Developer Pack and run the installer.

At this point it may be a good idea to restart your computer so that all the extra stuff that gets installed gets initialized properly.

#### For this tutorial, we will be naming our project `ExampleMod`.

### Setting up your Module \(SubModule.xml\)

When the bannerlord engine starts up it looks in the `Modules` directory for any subfolders. It then reads the `SubModule.xml` files in those directories to load up your code. Before we set up our C# project in Visual Studio, we will want to set up our SubModule so it gets loaded with the game. Here's how to do that.

1. Go to your game files and locate the `Modules` directory.
2. Create a new folder and name it `ExampleMod`.
3. Create a new `SubModule.xml` file (case sensitive) inside that folder and then paste the following into it:

   ```xml
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

    **Note**: If you look at the above xml you can see a `<SubModule>` node containing a `<SubModuleClassType>` node. The `value` property of that node is the "entry point" for your C# code. In this example, `MySubModule` is the name of the class we will be using in the [Programming](#programming) section of the tutorial, while `ExampleMod` is the namespace. When the module is loaded up by the bannerlord engine, it will see the value of this node and look in `ExampleMod.MySubModule` for specific methods - one being the `RegisterEvents` method - to integrate your code into the runtime. This is important because it is the basis for injecting C# code into the mod.

Now is a good time to start the launcher and make sure your mod appears under `Singleplayer` &gt; `Mods`.

For more information on the Module folder structure, [Click Here](../_intro/folder-structure.md).

### Setting up your C# Project

Before setting up a project, it is important to know that **this is not required for basic mods** \(e.g. changing or adding items/characters/scenes\). You can still add and modify a lot of things in bannerlord simply by changing xml files. As these files don't get compiled, and are simply read from at runtime, there is no need to set up a C# project if you only need to modify xml files.

For those mods that want to change the behaviour of the game via code, read on.

#### Create a new .NET Framework C# project

Start Microsoft Visual Studio and select `Create New Project`. Choose `Class Library (.NET Framework)` - that's `Framework`, not `Standard`. 

Name your project `ExampleMod` and select `.NET Framework 4.7.2` as the `Framework`.  If this option is not available for you, [Download it here](https://dotnet.microsoft.com/download/dotnet-framework/net472) \(Developer Pack\). 

Keep clicking through until Visual Studio opens up with your first basic C# class created and open in the code editor. We'll come back to this shortly.

#### Set your build path

We need to tell .NET where to place the compiled `.dll` files - these are the files that are read by the engine, and are separate from the `.cs` files that you write code into. `.dll` stands for "Dynamic Linked Library" and is a binary file that contains non-human-readable data. .NET takes your `.cs` files and "compiles" them to the more efficient `.dll` files used by the engine.

Bannerlords module system is hardcoded to expect your `.dll` files to be in your `Modules/[ModuleName]/bin/Win64_Shipping_Client` directory (case sensetive) so we want to set up our project to place those compiled `.dll` files in that directory.

Go ahead and create that directory structure now - in your `Modules/ExampleMod` folder, create a folder called `bin` (short for "binaries") and then a folder inside `bin` called `Win64_Shipping_Client`.

Now back in Visual Studio, go to `Project > ExampleMod Properties`. A new editor view will open up with a windows-style interface. In the menu on the left, select `Build`. Scroll down until you find the `Output` section, and set your `Output path` to the `Win64_Shipping_Client` directory we created above. This wil tell the project to place your compiled files in that location.

#### Add References

Visual studio and .NET have some really helpful code completion and error detection functions that we definitely want to use. We can add references to the rest of TaleWorlds' `.dll` files and Visual Studio will use .NET to read those files and giver us super helpful stuff. 

Go to `Project > Add Reference...`. A window will open. Select `Browse` from the menu on the left, and then hit the `Browse...` button at bottom right. Navigate to your `Bannerlord/bin/Win64_Shipping_Client` directory (not in the `Modules` directory), and highlight all of the `.dll` files that start with `TaleWorlds` and `Add` them to the reference list. There is something like 30 files to add there.

Once those files have been added to the reference list you stil need to make sure they are toggled on - hover over them in the list and a checkbox appears. Tick them all.

Your project is now set up for coding!

#### Building your code

Once you have written some C# (more on that below) you can compile your code by simply pressing ctrl+b. You will see an Output panel at the bottom of the screen with a readout on the compilation process. If all goes will with the compilation process you should see some lines and then `========== Build: 1 succeeded, 0 failed, 0 up-to-date, 0 skipped ==========`, indicating your code compiled successfully and you can launch the game to test it.

### Debugging your Project (Optional)

#### Way 1 (Preferred)
1. Open your project properties and go to the `Debug` tab.
2. Select the `Start external program` option and then browse for `Bannerlord.exe` located in the `bin\Win64_Shipping_Client` directory in your game files \(not your module directory\).
3. Set your working directory to the `bin\Win64_Shipping_Client` directory in your game files \(not your module directory\).
4. Add the following command line arguments \(be sure to replace ExampleMod with the name of your module\):
   * `/singleplayer _MODULES_*Native*SandBoxCore*CustomBattle*SandBox*StoryMode*ExampleMod*_MODULES_`

#### Way 2 (If you want to start your debugging from launcher window)
1. Open your project properties and go to the `Debug` tab.
2. Select the `Start external program` option and then browse for `TaleWorlds.MountAndBlade.Launcher.exe` located in the `bin\Win64_Shipping_Client` directory in your game files \(not your module directory\).
3. Set your working directory to the `bin\Win64_Shipping_Client` directory in your game files \(not your module directory\).

## Programming

1. Create a new class in your VS Project and name it `MySubModule`, then open it.
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

