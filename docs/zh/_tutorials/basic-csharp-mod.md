# 基本 C\# Mod

## 介绍

本文档旨在一步一步教你如何创建一个简单的 C\# Mod。这个Mod将会在单人模式的标题页面增加一个叫做 `消息` 的按钮。当点击按钮的时候，将会在聊天界面输出 `Hello World`。

## 准备

#### 在本教程中，我们的项目名字叫做 `ExampleMod`。

### 配置你的Module \(SubModule.xml\)

1. 到你的游戏目录下并且选定 `Modules` 目录；
2. 创建一个新的目录并且叫做 `ExampleMod` （这个目录名称必须和第四步里面的 Id 一致） Create a new folder and name it `ExampleMod` (Must be the same as the Id you use for Step #4)；
3. 创建一个名叫 `bin` 的目录, 并且在这个目录下，创建一个新的目录 `Win64_Shipping_Client`；
4. 在 `ExampleMod` 目录下建一个新的文件 `SubModule.xml` （必须是这个名字）, 同时复制如下内容进去:

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

    **提示**: `MySubModule` 是我们在[编程]((#programming))指导部分要用到的设定的类名字。

5. 如果你在用其他名字，上述的内容要按照需要修改。
6. 启动游戏，确保你的 Mod 出现 `Singleplayer` &gt; `Mods`。

对于Mod文件结构的信息，请参考[这里](../_intro/folder-structure.md)

### 配置项目

创建 C\# 项目之前，要明白的是，如果只是修改/增加物品，人物或场景的话，可以不需要创建项目。

1. 启动 Microsoft Visual Studio 并且选择 `创建新项目`。
2. 选择 `类库 (.NET Framework)`。
3. 给项目起名字并且选择框架 `.NET Framework 4.7.2`。如果不能选这个选项，可以从[这里](https://dotnet.microsoft.com/download/dotnet-framework/net472)下载。下载\(开发者包\)
4. 现在你的项目已经创建好，设置你的[构建路径](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-change-the-build-output-directory?view=vs-2019)到你的游戏目录下的`Modules/MyModule/bin/Win64_Shipping_Client`。
5. [引用](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-add-or-remove-references-by-using-the-reference-manager?view=vs-2019) 游戏目录（不是指Modules目录）`bin\Win64_Shipping_Client`下的所有`TaleWorlds.*` DLLs 文件。并且引用每个官方模组的 `TaleWorlds.*` DLLs文件，目录为 `Modules\ModuleName\bin\Win64_Shipping_Client`。

### Debugging 项目 (可选)

#### 方法一 (推荐)
1. 打开 项目属性 到 `Debug` 选项卡。
2. 选择 `启动外部程序` 选项，同时浏览到你游戏目录下（不是Modules目录）的`bin\Win64_Shipping_Client`文件夹里面的 `Bannerlord.exe`。
3. 设置工作目录到游戏目录（不是Modules目录）下的 `bin\Win64_Shipping_Client`。
4. 添加如下的命令行参数(要确定替代 `MyModule` 的名字) 
   * `/singleplayer _MODULES_*Native*SandBox*SandBoxCore*StoryMode*CustomBattle*MyModule*_MODULES_`

#### 方法二 (如果你想从启动器窗口开始 Debugging)
1. 打开 项目属性 到 `Debug` 选项卡；
2. 选择 `打开外部程序` 选项同时浏览到你的游戏目录下（不是你的Mod目录）`bin\Win64_Shipping_Client` 文件夹下的 `TaleWorlds.MountAndBlade.Launcher.exe`；
3. 设定你的工作目录是游戏目录下的 `bin\Win64_Shipping_Client`

## 编程

1. 添加或打开 `MySubModule` 类。
2. 添加如下的引用。

   ```csharp
    using TaleWorlds.Core;
    using TaleWorlds.Localization;
    using TaleWorlds.MountAndBlade;
   ```

3. 继承 `MBSubModuleBase` 类
4. 重载 `OnSubModuleLoad()` 方法
5. 添加如下代码到这个方法：

   ```csharp
    Module.CurrentModule.AddInitialStateOption(new InitialStateOption("Message",
        new TextObject("消息", null),
        9990,
        () => { InformationManager.DisplayMessage(new InformationMessage("Hello World!")); },
        false));
   ```

6. 编译你的项目并且确认输出到 `Modules\ExampleMod\bin\Win64_Shipping_Client` 下
7. 打开霸主启动器，并且选择 `Singleplayer` &gt; `Mods` 然后选择你的 Mod， 然后启动游戏。
8. 在标题页面，你应该能看到一个按钮叫做 `消息` ，点击你应该能看到 `Hello World` 出现在屏幕左下角。
9. 现在你已经成功创建了第一个骑马与砍杀2：霸主的Mod！


