# SubModule \(XML\)

## Element Descriptions

* `Name` - The name of your Module.
* `Id` - The id of your Module \(do not use spaces\).
* `Version` - The current version of your Module.
* `SinglePlayerModule` - Whether or not your module is meant for Single Player mode.
* `MultiPlayerModule` - Whether or not your module is meant for Mutli Player mode.
* `DependedModules` - Modules that your module requires in order to function properly.
* `SubModules` - The SubModules \(DLLs\) that your modules consists of.
* `Xmls` - Contains Paths to XML files in the ModuleData Folder\(s\).

## Important

XMLs with the same id from two separate mods \(or the same mod\) will have their assets combined and **NOT** overwritten. However, if two objects within an XML have the same id \(e.g. two items\), they will Overwrite each other in ModLoading Order as seen in the Launcher. Knowing this can be useful for overwritting native assets.

`MPClassDivisions` Is currently broken.

## Example

```markup
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
        <!-- The following SubModule element is optional. You can remove this portion if your mod does not have a DLL associated with it. -->
        <SubModule>
            <Name value="MySubModule"/>
            <!-- Path to the DLL File, if your Mod is called MyModule then it should be   -->
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

