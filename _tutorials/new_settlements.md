# How settlements work
The way the game adds settlements is by combining two XML based files: One to define what type of settlement it is (hideout, village, city, castle etc.), who owns it and other relevant parameters such as prosperity, production, which town a village belongs to etc.
This definition happens in the base game under Modules/Sandbox/ModuleData/Settlements.xml
Beside this file is a distance cache Modules/Sandbox/ModuleSata/Settlements_distance_cache.bin, which can be generated in code.

This definition does not however define the actual visuals of the settlement. This is done inside Modules/Sandbox/SceneObj/Main_map/scene.xscene file.

# Notes on future SDK support
From other code in the available DLLs it is evident that settlement modding is supposed to occur by using an editor. This editor helps place settlements, define their visuals and also generates the aforementioned distance cache.
For now, none of that exists and one has to resort to pure XML modding.

# Notes on the distance cache
It is unclear what the distance cache actually does. Without updating it AI seems to visit added settlements just fine, they recruit troops there, offload prisoners and buy goods. Players can also enter the new settlements just fine.
The distance cache might be associated with some AI decision making, but it is unclear. The distance cache is created by the method SaveSettlementDistanceCache() in SettlementPositionScript, which is a class that is not used in the game currently, supposedly originating from the aforementioned map editor.
The class can be found in Sandbox.View.dll.

# How to override the default settlements of the game
When creating a mod it is possible to override the definitions from the Sandbox module. It is not however possible to append (add) things to the files, so if you want to make changes to settlements
you need to make changes to everything. 

Start by copying Modules/Sandbox/ModuleData/Settlements.xml into Modules/YourModName/ModuleData/Settlements.xml as well as Modules/Sandbox/SceneObj/main_map (a folder) to Modules/YourModName/SceneObj/main_map.

If you can avoid it, don't use the regular notepad for XML editing. Instead use a proper XML editing tool or a more capable text editor such as Notepad++.

Inside Modules/YourModName/submodule.xml add the following XmlNode

```
		<XmlNode>
			<XmlName id="Settlements" path="settlements"/>
			<IncludeGameTypes>
				<GameType value = "Campaign"/>
				<GameType value = "CampaignStoryMode"/>
			</IncludeGameTypes>
		</XmlNode> 	
```
The main_map is loaded automatically.

Within Settlements.xml you can now copy e.g. a town and customize it however you want, or change some of the existing towns (by e.g. changing the owner, changing starting prosperity, changing production of it etc.).
It is *imperative* that every entry in settlements.xml has its own id.

Within your mods main_map/scene.xscene file there needs to be a game_entity for each entry in your settlements.xml file. Make sure not to have any duplicate id's.


An example for a new entry (i.e. adding to the existing file, not entirely replacing its contents) to settlements.xml that adds a town and two villages [can be found here](https://pastebin.com/BuSbQ6x2).

Note that, the two entries for villages village_M1_1 and village_M1_2 have entries for which town they are bound to:

```
trade_bound="Settlement.town_M1" bound="Settlement.town_M1"
```

It's not clear how exactly these two differ, but for now best set them to the town you want them to belong to.
The villages also include definitions for which good you want them to produce:

```
village_type="VillageType.fisherman"
```
Village types are defined in Modules/SandBox/ModuleData/spprojects.xml.

These three new settlements need correspondin game_entity definitions in the main_map/scene.xscene file. An example entry [can be found here](https://pastebin.com/dXcKT7wf)


