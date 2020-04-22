# 文件夹结构

所有文件夹都不是必须的，对于SubModule来说，唯一的要求就是启动器必须能够监测到SubModule文件夹自身，以及有效的 [SubModule.xml](../_xmldocs/submodule.md) 文件。

完整的Mod文件结构与内容可以参考
 `盘符:\\安装目录\Mount & Blade II Bannerlord\Modules\Native\`


## 文件夹描述 & 文件样例

* `AssetPackages` - 暂时还不知道作用，可能需要等到官方编辑器放出才能创建/修改这些文件。
  * `someasset.tpac`
  
* `Atmospheres` -  [参见\[Atmosphere\]](../_xmldocs/atmosphere.md)
  * `Interpolated` 
    * `interpolatedatmosphere.xml`
  * `atmosphere.xml`
  
* `bin` - 编译好的二进制文件放在这里 - [参见 \[基础的 C\# Mod制作\]](../_tutorials/basic-csharp-mod.md)
  * `Win64_Shipping_Client`
    * `MyModule.dll`
	
* `GUI` - 大多数与Gauntlet有关的内容放在这里。
  * `Brushes` - 存放Gauntlet Brushes。
  * `Prefabs` - 存放Gauntlet Movies。
  
* `ModuleData` - 任何与你的Mod有关的XML格式数据存放在这里。 \(例如：items/cultures/gametexts\)

* `SceneObj` - 存放场景。

```text
- MyModule
	- AssetPackages
		-- assetpackage.tpac
	- Atmospheres
		- Interpolated
			-- interpolatedatmosphere.xml
		-- atmosphere.xml
	- bin
		- Win64_Shipping_Client
			-- MyModule.dll
    - GUI
        - Brushes
        - Prefabs
    - ModuleData
    - SceneObj
    - SubModule.xml
```
