# SubModule \(XML\)

## 字段描述

* `Name` - 模组的名称。
* `Id` - 模组的ID \(不要使用空格\)。
* `Version` - 模组的当前版本。
* `SinglePlayerModule` - 单人游戏中模组是否可用。
* `MultiPlayerModule` - 多人游戏中模组是否可用。
* `DependedModules` - 此模组正常工作需要的依赖模组。
* `SubModules` - 该模组由哪些子模组 \(DLLs\)组成。 
* `Xmls` - 包含ModuleData文件夹中的XML文件路径。

## 重要提示

对于两个独立的mod，如果XML中的id相同，它们的内容将会合并 **而不是** 互相覆盖。然而，假如两个物体在XML文件中具有相同的id（例如：两个item），它们会按照启动器中Mod的排列顺序覆盖。了解这一点对于重写native中的内容非常有用。

`MPClassDivisions` 当前存在问题。

## 例子

```xml
<Module>
    <Name value="My Module"/>
    <Id value="MyModule"/>
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
        <!-- 以下的SubModule标签是可选的。如果你的模组不需要DLL外链，可用移除这部分内容。-->
        <SubModule>
            <Name value="MySubModule"/>
            <!-- DLL文件的路径, 假如你的模组叫MyModule，写法会像下面这样   -->
            <DLLName value="ExampleMod.dll"/>
            <SubModuleClassType value="ExampleMod.MySubModule"/>
            <Tags>
                <Tag key="DedicatedServerType" value="none" />
                <Tag key="IsNoRenderModeElement" value="false" />
            </Tags>
        </SubModule>
    </SubModules>
    <Xmls>
        <XmlNode>
            <XmlName type="1" id="Items" path="customitems"/>
        </XmlNode>  
        <XmlNode>
            <XmlName type="1" id="SPCultures" path="customcultures"/>
        </XmlNode>
        <XmlNode>
            <XmlName type="1" id="NPCCharacters" path="customcharacters"/>
        </XmlNode>
    </Xmls>
</Module>
```
