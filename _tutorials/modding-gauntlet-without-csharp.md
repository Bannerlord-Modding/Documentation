# Modding Gauntlet Without C#

## Introduction

The following guide will walk you through step-by-step on how to create a mod that can overwrite any Gauntlet UI without using any C#. For this example, we will be overriding the Quests UI with some custom title text.

## Preparation

#### For this tutorial, we will be naming our project `ExampleUIMod`.

### Setting up your Module \(SubModule.xml\)

1. Go to your game files and locate the `Modules` directory.
2. Create a new folder and name it whatever you want, then open it.
3. Create a new folder named `GUI` and open it.
4. Now create a new folder in your `GUI` directory called `Prefabs`. We will come back to this folder later in the tutorial.
5. Create a new `SubModule.xml` file and then paste the following into it:

   ```xml
    <Module>
        <Name value="Example UI Mod"/>
        <Id value="ExampleUIMod"/>
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
        <SubModules/>
        <Xmls/>
    </Module>
   ```

6. Start the launcher and make sure your mod appears under `Singleplayer` &gt; `Mods`.

For more information on the Module folder structure, [Click Here](../_intro/folder-structure.md).

## Overriding a Gauntlet UI

Note: You can override any Gauntlet UI. However, for this tutorial, we will only be overriding the Quests UI.

1. Go to `Modules\SandBox\GUI\Prefabs\QuestsScreen` and copy the `QuestsScreen.xml` file to your clipboard
2. Go to the `Prefabs` folder you created in Step 4 of `Setting up your Module` and paste the `QuestsScreen.xml` from your clipboard.
3. Open the pasted file in a text editor.
4. Search (Ctrl+F) for a `Text="@QuestTitleText"` and go to this section of the file.
5. Replace `@QuestTitleText` (including @ symbol) with the text you want the title to be.
6. Save the file.
7. Open the Bannerlord launcher and navigate to `Singleplayer` &gt; `Mods` then make sure that your mod is ticked and start the game and load any save.
8. Open the Quests UI and you should see the text you added in the top middle of the screen.
9. You have now successfully created your first Bannerlord Gauntlet mod!

## How To Enable & Use Live UI Editing

Live UI editting is a feature in the game that will make your life **a lot** easier. Unfortunately though, it isn't something you can enable with just the base game.

To enable it, you will need to [download the DeveloperConsole Mod](https://www.nexusmods.com/mountandblade2bannerlord/mods/4).

Once you have downloaded & installed the Developer Console Mod, follow the steps below to enable live editing for your game session.

1. Open the game launcher and then make sure `Developer Console` is ticked in `Singleplayer` &gt; `Mods` along with your Gauntlet UI mod.
2. The Developer Console mod uses the shortcut `CTRL` + `~` (tilde) to enable the console. If this shortcut doesn't work for you, try pressing CTRL and then the key on your keyboard above Tab and below Esc.
3. Now that you can see the console, you will want to type the command `ui.toggle_debug_mode` to enable the live UI editing feature.
4.Any changes you make to your UIs should now update automatically in-game.
