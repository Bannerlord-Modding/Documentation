# SubModule \(XML\)

## Element Descriptions

* `Name` - The name of your Module.
* `Id` - The id of your Module \(do not use spaces\).
* `Version` - The current version of your Module.
* `SinglePlayerModule` - Whether or not your module is meant for Single Player mode.
* `MultiPlayerModule` - Whether or not your module is meant for Mutli Player mode.
* `DependedModules` - Modules that your module requires in order to function properly.
* `SubModules` - The SubModules \(DLLs\) that your modules consists of.
* `Xmls` - Contains Paths to your XML files in the ModuleData Folder.

## Important

XMLs with the same id from two separate mods \(or the same mod\) will have their assets combined and **NOT** overwritten. However, if two objects within an XML have the same id \(e.g. two items\), they will Overwrite each other in ModLoading Order as seen in the Launcher. Knowing this can be useful for overwritting native assets.
`MPClassDivisions` Is currently broken


## Example

```markup
<Module>
    <Name value = "My Module"/>
    <Id value = "MyModule"/>
    <Version value = "1.0"/>
    <SingleplayerModule value="true"/>
    <MultiplayerModule value="false"/>
    <DependedModules/>
    <SubModules>
        <!-- The following SubModule element is optional. You can remove this portion if your mod does not have a DLL associated with it. -->
        <SubModule>
            <Name value = "MySubModule"/>
            <Version value = "1.0"/>
            <!-- Path to DLL File, if ur Mod is Called MyModule then it should be   -->
            <DLLName value = "../../Modules/MyModule/bin/ExampleMod.dll"/>
            <SubModuleClassType value = "ExampleModNameSpace.MySubModule"/>
            <Tags>
                <Tag key="DedicatedServerType" value ="none" />
                <Tag key="IsNoRenderModeElement" value ="false" />
            </Tags>
        </SubModule>
    </SubModules>
    <Xmls>
		<XmlNode>                
			<XmlName id="Items" path="mpitems"/>
			<!--<IncludedGameTypes>
				<GameType value = "CampaignStoryMode"/>
				<GameType value = "CustomBattle"/>
			</IncludedGameTypes>-->
		</XmlNode>               
		<XmlNode>                
			<XmlName id="MPCharacters" path="mpcharacters"/>
		</XmlNode>               
		<XmlNode>                
			<XmlName id="BasicCultures" path="mpcultures"/>
		</XmlNode>               
		<XmlNode>                
			<XmlName id="MPClassDivisions" path="mpclassdivisions"/>
		</XmlNode>               
		<XmlNode>                
			<XmlName id="Monsters" path="monsters"/>
		</XmlNode>               
		<XmlNode>                
			<XmlName id="ItemModifiers" path="item_modifiers"/>
		</XmlNode>               
		<XmlNode>                
			<XmlName id="ItemModifierGroups" path="item_modifiers_groups"/>
		</XmlNode>               
		<XmlNode>                
			<XmlName id="CraftingPieces" path="mp_crafting_pieces"/>
		</XmlNode>               
		<XmlNode>                
			<XmlName id="CraftingPieces" path="crafting_pieces"/>
		</XmlNode>               
		<XmlNode>                
			<XmlName id="CraftingTemplates" path="crafting_templates"/>
		</XmlNode>          
		<XmlNode>                
			<XmlName id="SkeletonScales" path="skeleton_scales"/>
		</XmlNode>   
		<XmlNode>                
			<XmlName id="SiegeEngines" path="siegeengines"/>
		</XmlNode>
	</Xmls>
</Module>
```

