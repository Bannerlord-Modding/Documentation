# 将你的mod打包上传至Vortex

## 介绍
Vortex是Nexus Mods出品的、强大的开源Mod管理器。 它支持安装和管理适用于100多种游戏的mod，包括骑马与砍杀2：霸主。 共享您的mod时，应注意一些事项，以确保其结构与Vortex兼容。
 [你可以在这里了解关于Vortex的更多事情](https://nexusmods.com/about/vortex).


## 模组

模组是自动检测的，它们由多个mod组成。这些mods包含在“ Modules”文件夹中，并且包含Submodule.xml文件。 Vortex抓取了包含Submodule.xml的整个文件夹，并将其放入游戏的“ Modules”文件夹中。

开始游戏时，请不要忘记在启动器中启用这些mod！


## XML 编辑与其它mod

当前，任何其他类型的mod都需要您相对于游戏根目录进行简单打包。 例如，如果我有文件“ BannerEditor.xml”，则需要进入“ Modules \ Native \ GUI \ Prefabs \ Bannereditor”文件夹，然后将我上传的文件放到这些文件夹下。

这种方式将正确且一致地安装包括XML编辑，视频/声音编辑和Reshade预设在内的所有内容。


## 有多种选项的Mod

Vortex支持[mod 安装器]（https://wiki.nexusmods.com/index.php/How_to_create_mod_installers），它可让您向用户提供选择性的Mod下载方式。 Mod安装程序可以用XML编写，也可以使用[FOMOD 创建工具]（https://www.nexusmods.com/fallout4/mods/6821/?tab=files）创建。 如果您想使用Mod安装程序，但是在设置方面遇到困难，请联系Nexus Mods社区管理员，我们将很乐意为您提供帮助。


## 不匹配的Mod

在撰写本文时，我们还不知道是否有与Vortex不兼容的任何Mod（正确打包上传的前提下）。 但是，如果您上传的工具或保存游戏不应该以上述方式安装，则可以在Nexus Mods页面上禁用Vortex按钮。