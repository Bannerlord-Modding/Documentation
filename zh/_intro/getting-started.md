# 开始第一步

## 重要提示

在进一步工作之前, 理解文件[SubModule.xml](../_xmldocs/submodule.md) 是非常重要的，因为这个文件指定了你Mod中的哪一部分会被加载。

## 工具

### C\# IDE

* [Microsoft Visual Studio](https://visualstudio.microsoft.com/downloads/) \(基础的Mod不需要用到它\)

### 文本编辑器

任何文本编辑器都足以满足要求, 但是以下是推荐使用的：

* [Visual Studio Code](https://code.visualstudio.com/download)
* [Sublime Text](https://www.sublimetext.com/)  
* [Notepad++](https://notepad-plus-plus.org/downloads/)

## 不使用 C\# 制作Mod

游戏中部分内容不需要C#即可定制，包括场景、物品、文化、角色、Gauntlet UI等等。

## 使用 C\# 制作Mod

“基于模组”的Mod制作系统，使霸主的Mod制作工作比前作更加容易，并且它支持实现更复杂的Mod功能。

## 制作一个模组

在霸主，一个独立运行的Mod被叫做“模组”。模组唯一必要的部分就是SubModule文件夹，和负责启动Mod的`SubModule.xml`文件。

1.在游戏目录的`Modules`文件夹中新建文件夹，文件夹名称必须与你的SubModule保持一致。
2. 在你的新文件夹中创建文件`SubModule.xml`，你可以 [看看这个例子](../_xmldocs/submodule.md) 或者  [获取完整参考文档](../_xmldocs/submodule.md)

## 下一步

* 参考[文件结构](folder-structure.md) 页面，以获取其它文件夹路径的参考信息，帮助拓展你的Mod。
* 参考[基础 C\# Mod](../_tutorials/basic-csharp-mod.md) 页面，它提供了一份在霸主中设置，编译，运行代码的简单例子。
* 参考[不使用C#的Gauntlet UI定制](../_tutorials/modding-gauntlet-without-csharp.md) 页面，它提供了无需C#的Gauntlet UI定制方法。
