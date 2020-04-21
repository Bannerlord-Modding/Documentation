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


An example for a new entry (i.e. adding to the existing file, not entirely replacing its contents) to settlements.xml that adds a town and two villages is here:
```
  <Settlement id="town_M1" name="{=!}Theranda" owner="Faction.clan_empire_north_3" posX="351.687" posY="422.647" culture="Culture.empire" prosperity="7150" gate_posX="350.000" gate_posY="425.9">
    <Components>
      <Town id="town_comp_M1" is_castle="false" level="1" background_crop_position="0.0" background_mesh="menu_empire_seaside_1" wait_mesh="wait_empire_town" gate_rotation="0.408" />
    </Components>
    <Locations complex_template="LocationComplexTemplate.town_complex">
      <Location id="center" scene_name="empire_town_h" scene_name_1="empire_town_h" scene_name_2="empire_town_h" scene_name_3="empire_town_h" />
      <Location id="arena" scene_name="arena_empire_a" />
      <Location id="tavern" scene_name="empire_house_c_tavern_a" />
      <Location id="lordshall" scene_name_1="empire_castle_keep_a_l1_interior" scene_name_2="empire_castle_keep_a_l2_interior" scene_name_3="empire_castle_keep_a_l3_interior" />
      <Location id="prison" scene_name="empire_dungeon_a" />
      <Location id="house_1" scene_name="empire_house_d_interior_house" />
      <Location id="house_2" scene_name="empire_house_d_interior_house" />
      <Location id="house_3" scene_name="empire_house_d_interior_house" />
    </Locations>
    <CommonAreas>
      <Area type="Backstreet" name="{=a0MVffcN}Backstreet" />
      <Area type="Clearing" name="{=LWHIVshb}Clearing" />
      <Area type="Waterfront" name="{=Rr1cy5Sk}Waterfront" />
    </CommonAreas>
  </Settlement>
  <Settlement id="village_M1_1" name="{=!}Thymos" posX="353.376" posY="433.57" culture="Culture.empire" text="{=!}The prosperity of Theranda brought many peasants close to it to live a better life. The first settlers of Thymos were not let into the city and chose to set up a temporary camp close to the river, as Fish was plenty. While eventually they were allowed to Theranda, many chose to stay in what has now become Thymos.">
    <Components>
      <Village id="village_comp_M1_1" village_type="VillageType.fisherman" hearth="165" trade_bound="Settlement.town_M1" bound="Settlement.town_M1" background_crop_position="0.0" background_mesh="gui_bg_village_empire" wait_mesh="wait_empire_village" castle_background_mesh="gui_bg_castle_empire" />
    </Components>
    <Locations complex_template="LocationComplexTemplate.village_complex">
      <Location id="village_center" scene_name="empire_village_x" />
    </Locations>
    <CommonAreas>
      <Area type="Pasture" name="{=fOUsLdZR}Pasture" />
      <Area type="Thicket" name="{=66Mzk0NZ}Thicket" />
      <Area type="Bog" name="{=iXA5SttU}Bog" />
    </CommonAreas>
  </Settlement>
  <Settlement id="village_M1_2" name="{=!}Olicana" posX="368.450" posY="426.103" culture="Culture.empire" text="{=!}Olicana has been around almost as long as Theranda itself. To support construction efforts in Theranda a logging camp was built named after the woman Olicana who organizes the labour in the first days. As Theranda became more and more prosporous new construction needed fresh supplies of lumber. Therefore Olicana grew along with it.">
    <Components>
      <Village id="village_comp_M1_2" village_type="VillageType.lumberjack" hearth="141" trade_bound="Settlement.town_M1" bound="Settlement.town_M1" background_crop_position="0.0" background_mesh="gui_bg_village_empire" wait_mesh="wait_empire_village" castle_background_mesh="gui_bg_castle_empire" />
    </Components>
    <Locations complex_template="LocationComplexTemplate.village_complex">
      <Location id="village_center" scene_name="empire_village_008" />
    </Locations>
    <CommonAreas>
      <Area type="Pasture" name="{=fOUsLdZR}Pasture" />
      <Area type="Thicket" name="{=66Mzk0NZ}Thicket" />
      <Area type="Bog" name="{=iXA5SttU}Bog" />
    </CommonAreas>
  </Settlement>
```
These three new settlements need correspondin game_entity definitions in the main_map/scene.xscene file:

```
    <game_entity name="town_M1" old_prefab_name="__empty_object">
      <transform position="351.687, 422.647, 9.850" rotation_euler="0.000, -0.050, 4.000" scale="0.800, 0.800, 0.800" />
      <physics mass="1.000" />
      <children>
        <game_entity name="decal_path_a" old_prefab_name="">
          <transform position="0.328, 0.989, 0.000" rotation_euler="0.000, 0.000, 0.111" scale="0.517, 0.517, 0.517" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_a" argument="0.530, 0.530, 0.480, 0.010" />
          </components>
        </game_entity>
        <game_entity name="map_rock_groups_a" old_prefab_name="map_rock_groups_a">
          <transform position="-4.022, -1.935, 0.083" rotation_euler="0.000, 0.000, 2.804" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_rock_groups_a">
              <mesh name="map_rock_groups_a" factor="4288387995" />
            </meta_mesh_component>
          </components>
        </game_entity>
        <game_entity name="map_rock_f_snow" old_prefab_name="map_rock_f_snow">
          <transform position="-4.273, -3.979, 0.058" rotation_euler="0.000, 0.000, 0.991" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_rock_f_snow">
              <mesh name="map_rock_f_snow" factor="4291085508" />
            </meta_mesh_component>
          </components>
        </game_entity>
        <game_entity name="map_rock_groups_a" old_prefab_name="map_rock_groups_a">
          <transform position="-3.325, -4.986, 0.065" rotation_euler="0.000, 0.000, -0.244" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_rock_groups_a">
              <mesh name="map_rock_groups_a" factor="4287072135" />
            </meta_mesh_component>
          </components>
        </game_entity>
        <game_entity name="map_rock_a" old_prefab_name="map_rock_a">
          <transform position="0.155, -7.416, -0.080" rotation_euler="0.000, 0.000, 0.154" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_rock_a">
              <mesh name="map_rock_a" factor="4287072135" />
            </meta_mesh_component>
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="6.330, 0.074, 0.049" rotation_euler="0.000, 0.000, 2.868" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="3.510, -1.837, -0.432" rotation_euler="0.000, 0.000, -2.897" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_sack_b" old_prefab_name="map_icons_sack_b">
          <transform position="-0.445, -1.886, 0.036" rotation_euler="0.000, 0.000, -0.341" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_sack_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_sack_c" old_prefab_name="map_icons_sack_c">
          <transform position="-0.574, -2.061, 0.045" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_sack_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_market_stall" old_prefab_name="map_icons_market_stall">
          <transform position="0.240, -2.314, 0.027" rotation_euler="0.000, 0.000, -2.202" scale="2.036, 2.036, 2.036" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_market_stall" />
          </components>
        </game_entity>
        <game_entity name="map_icons_market_stall" old_prefab_name="map_icons_market_stall">
          <transform position="0.068, -1.998, 0.027" rotation_euler="0.000, 0.000, -0.637" scale="2.036, 2.036, 2.036" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_market_stall" />
          </components>
        </game_entity>
        <game_entity name="map_icons_market_stall" old_prefab_name="map_icons_market_stall">
          <transform position="-0.882, -2.273, 0.016" rotation_euler="0.000, 0.000, -1.352" scale="2.036, 2.036, 2.036" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_market_stall" />
          </components>
        </game_entity>
        <game_entity name="map_icons_market_stall" old_prefab_name="map_icons_market_stall">
          <transform position="-0.273, -2.803, 0.028" rotation_euler="0.000, 0.000, 0.000" scale="2.036, 2.036, 2.036" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_market_stall" />
          </components>
        </game_entity>
        <game_entity name="map_icons_market_tent_b" old_prefab_name="map_icons_market_tent_b">
          <transform position="-0.787, -1.607, 0.000" rotation_euler="0.031, -0.349, -0.645" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_market_tent_b">
              <mesh name="mi_market_tent_b" factor="4281670699" />
            </meta_mesh_component>
          </components>
        </game_entity>
        <game_entity name="map_icons_market_tent_a" old_prefab_name="map_icons_market_tent_a">
          <transform position="-0.131, -3.040, 0.027" rotation_euler="-0.039, 0.117, -1.098" scale="0.936, 0.936, 0.936" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_market_tent_a">
              <mesh name="mi_market_tent_a.0" factor="4286126861" />
              <mesh name="mi_market_tent_a.1" factor="4286126861" />
            </meta_mesh_component>
          </components>
        </game_entity>
        <game_entity name="map_icons_market_tent_a" old_prefab_name="map_icons_market_tent_a">
          <transform position="0.124, -2.182, -0.044" rotation_euler="-0.136, 0.477, 0.222" scale="0.940, 0.940, 1.060" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_market_tent_a">
              <mesh name="mi_market_tent_a.0" factor="4283324710" />
              <mesh name="mi_market_tent_a.1" factor="4283324710" />
            </meta_mesh_component>
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-1.304, 0.764, -0.168" rotation_euler="0.000, 0.000, 1.535" scale="0.853, 0.853, 0.853" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-0.631, 0.492, -0.086" rotation_euler="0.000, 0.000, 1.956" scale="0.853, 0.853, 0.853" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="decal_path_a" old_prefab_name="">
          <transform position="-2.148, -1.379, 0.000" rotation_euler="0.000, 0.000, -0.531" scale="0.544, 0.544, 0.544" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_a" argument="0.530, 0.530, 0.480, 0.010" />
          </components>
        </game_entity>
        <game_entity name="decal_path_a" old_prefab_name="">
          <transform position="2.254, -0.407, 0.000" rotation_euler="0.000, 0.000, -1.200" scale="0.502, 0.502, 0.502" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_a" argument="0.530, 0.530, 0.480, 0.010" />
          </components>
        </game_entity>
        <game_entity name="decal_path_b" old_prefab_name="">
          <transform position="-1.335, -0.885, 0.000" rotation_euler="0.000, 0.000, -1.614" scale="0.515, 0.515, 0.515" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_b" argument="0.530, 0.530, 0.000, 0.010" />
          </components>
        </game_entity>
        <game_entity name="decal_path_b" old_prefab_name="">
          <transform position="-0.269, 0.186, 0.000" rotation_euler="0.000, 0.000, -1.224" scale="0.592, 0.652, 0.592" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_b" argument="0.530, 0.530, 0.000, 0.010" />
          </components>
        </game_entity>
        <game_entity name="town_gate" old_prefab_name="__empty_object">
          <tags>
            <tag name="main_map_city_gate" />
          </tags>
          <transform position="-2.186, -4.782, 0.335" rotation_euler="0.053, -0.011, -1.106" scale="1.793, 1.793, 1.793" />
          <physics mass="1.000" />
        </game_entity>
        <game_entity name="decal_path_a" old_prefab_name="">
          <transform position="2.789, -0.318, 0.000" rotation_euler="0.000, 0.000, -1.200" scale="0.525, 0.525, 0.525" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_a" argument="0.530, 0.530, 0.480, 0.010" />
          </components>
        </game_entity>
        <game_entity name="decal_path_b" old_prefab_name="">
          <transform position="0.606, -0.779, 0.000" rotation_euler="0.000, 0.000, 3.139" scale="0.628, 0.628, 0.628" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_b" argument="0.530, 0.530, 0.000, 0.010" />
          </components>
        </game_entity>
        <game_entity name="decal_path_b" old_prefab_name="">
          <transform position="0.429, -1.289, 0.000" rotation_euler="0.000, 0.000, -0.876" scale="0.626, 0.626, 0.626" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_b" argument="0.530, 0.530, 0.000, 0.010" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_gatehouse_l3" old_prefab_name="map_icons_empire_gatehouse_l3">
          <transform position="-1.445, -3.771, -0.026" rotation_euler="0.000, 0.000, 0.960" scale="0.929, 0.929, 0.929" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_3_gatehouse" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="decal_path_b" old_prefab_name="">
          <transform position="-0.899, -0.403, 0.000" rotation_euler="0.000, 0.000, -0.361" scale="0.572, 0.572, 0.572" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_b" argument="0.530, 0.530, 0.000, 0.010" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l3" old_prefab_name="map_icons_empire_tower_l3">
          <transform position="-3.463, 0.255, 0.042" rotation_euler="0.000, 0.000, -0.328" scale="0.852, 0.852, 0.852" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l3" old_prefab_name="map_icons_empire_tower_l3">
          <transform position="0.468, -5.566, -1.273" rotation_euler="0.000, 0.000, -0.005" scale="1.202, 1.202, 1.202" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l3" old_prefab_name="map_icons_empire_tower_l3">
          <transform position="0.468, -5.566, 0.596" rotation_euler="0.000, 0.000, -0.005" scale="0.755, 0.755, 0.755" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l3" old_prefab_name="map_icons_empire_tower_l3">
          <transform position="-4.376, -3.914, 0.189" rotation_euler="0.000, 0.000, -0.604" scale="0.767, 0.767, 0.767" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-0.130, -4.983, -0.133" rotation_euler="0.000, 0.000, 0.576" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="emp_bridge_g" old_prefab_name="emp_bridge_g">
          <transform position="-3.668, -3.197, 0.907" rotation_euler="0.000, 0.000, -0.744" scale="0.045, 0.045, 0.045" />
          <physics shape="bo_emp_bridge_g" override_material="stone" mass="1.000" />
          <components>
            <meta_mesh_component name="emp_bridge_g">
              <mesh name="emp_bridge_g" factor="4287927444" />
              <mesh name="emp_bridge_g.1" factor="4287927444" />
            </meta_mesh_component>
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icon_siege" old_prefab_name="map_icon_siege">
          <transform position="3.250, -8.976, 0.376" rotation_euler="0.000, 0.000, 1.915" scale="1.792, 1.792, 1.792" />
          <physics mass="1.000" />
          <children>
            <game_entity name="map_icon_siege_camp_1" old_prefab_name="map_icon_siege_camp_1">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <tags>
                <tag name="siege_preparation" />
              </tags>
              <transform position="1.006, 3.378, -0.187" rotation_euler="0.036, -0.771, -2.057" scale="1.188, 1.188, 1.188" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="map_icon_siege_camp_1" />
              </components>
            </game_entity>
            <game_entity name="map_barrel_c" old_prefab_name="map_barrel_c">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <transform position="-1.432, 2.100, 0.263" rotation_euler="0.253, -0.126, 1.127" scale="1.618, 1.618, 1.618" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_barrels_c" />
              </components>
            </game_entity>
            <game_entity name="map_icon_siege_camp_5" old_prefab_name="map_icon_siege_camp_5">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <tags>
                <tag name="siege_preparation" />
              </tags>
              <transform position="0.860, -3.681, 0.392" rotation_euler="-0.465, -0.131, -0.612" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="map_icon_siege_camp_5" />
              </components>
            </game_entity>
            <game_entity name="map_icon_siege_camp_1" old_prefab_name="map_icon_siege_camp_1">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <tags>
                <tag name="siege_preparation" />
              </tags>
              <transform position="1.041, -2.782, 0.185" rotation_euler="-0.294, 0.111, -2.580" scale="1.188, 1.188, 1.188" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="map_icon_siege_camp_1" />
              </components>
            </game_entity>
            <game_entity name="volume_box_corner" old_prefab_name="volume_box_corner">
              <flags>
                <flag name="align_to_terrain" value="true" />
              </flags>
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_camp_area_2" />
              </tags>
              <transform position="-3.143, -3.943, 0.860" rotation_euler="0.000, 0.000, 1.468" scale="4.369, 1.326, 1.631" />
              <physics mass="1.000" />
              <children>
                <game_entity name="volume_box" old_prefab_name="volume_box">
                  <flags>
                    <flag name="record_to_scene_replay" value="true" />
                  </flags>
                  <visibility_masks>
                    <visibility_mask name="visible_only_when_editing" value="true" />
                  </visibility_masks>
                  <transform position="0.500, 0.500, -0.500" />
                  <physics mass="1.000" />
                  <components>
                    <meta_mesh_component name="volume_box" />
                  </components>
                  <scripts>
                    <script name="VolumeBox">
                      <variables>
                        <variable name="NavMeshPrefabName" value="" />
                      </variables>
                    </script>
                  </scripts>
                  <levels>
                    <level name="base" />
                  </levels>
                </game_entity>
              </children>
              <levels>
                <level name="base" />
              </levels>
            </game_entity>
            <game_entity name="volume_box_corner" old_prefab_name="volume_box_corner">
              <flags>
                <flag name="align_to_terrain" value="true" />
              </flags>
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_camp_area_2" />
              </tags>
              <transform position="-1.411, 4.403, 0.171" rotation_euler="0.000, 0.000, -2.913" scale="3.361, 2.174, 1.631" />
              <physics mass="1.000" />
              <children>
                <game_entity name="volume_box" old_prefab_name="volume_box">
                  <flags>
                    <flag name="record_to_scene_replay" value="true" />
                  </flags>
                  <visibility_masks>
                    <visibility_mask name="visible_only_when_editing" value="true" />
                  </visibility_masks>
                  <transform position="0.500, 0.500, -0.500" />
                  <physics mass="1.000" />
                  <components>
                    <meta_mesh_component name="volume_box" />
                  </components>
                  <scripts>
                    <script name="VolumeBox">
                      <variables>
                        <variable name="NavMeshPrefabName" value="" />
                      </variables>
                    </script>
                  </scripts>
                  <levels>
                    <level name="base" />
                  </levels>
                </game_entity>
              </children>
              <levels>
                <level name="base" />
              </levels>
            </game_entity>
            <game_entity name="map_icons_market_tent_a" old_prefab_name="map_icons_market_tent_a">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <transform position="-0.761, 1.812, 0.076" rotation_euler="-0.067, 0.191, -0.464" scale="0.779, 0.779, 0.779" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_market_tent_a" />
              </components>
            </game_entity>
            <game_entity name="map_icon_siege_camp_5" old_prefab_name="map_icon_siege_camp_5">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <tags>
                <tag name="siege_preparation" />
              </tags>
              <transform position="0.499, -1.841, 0.296" rotation_euler="0.129, -0.064, 1.124" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="map_icon_siege_camp_5" />
              </components>
            </game_entity>
            <game_entity name="map_icon_siege_camp_1" old_prefab_name="map_icon_siege_camp_1">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <tags>
                <tag name="siege_preparation" />
              </tags>
              <transform position="0.789, -1.037, 0.178" rotation_euler="0.109, -0.294, -2.366" scale="1.188, 1.188, 1.188" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="map_icon_siege_camp_1" />
              </components>
            </game_entity>
            <game_entity name="map_icon_siege_camp_4" old_prefab_name="map_icon_siege_camp_4">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <tags>
                <tag name="siege_preparation" />
              </tags>
              <transform position="0.838, -0.189, 0.020" rotation_euler="-0.186, 0.080, 0.284" scale="1.014, 1.014, 1.014" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="map_icon_siege_camp_4" />
              </components>
            </game_entity>
            <game_entity name="map_icon_siege_camp_1" old_prefab_name="map_icon_siege_camp_1">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <tags>
                <tag name="siege_preparation" />
              </tags>
              <transform position="1.025, 0.292, -0.083" rotation_euler="0.017, -0.201, -1.780" scale="1.188, 1.188, 1.188" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="map_icon_siege_camp_1" />
              </components>
            </game_entity>
            <game_entity name="map_icon_siege_camp_4" old_prefab_name="map_icon_siege_camp_4">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <tags>
                <tag name="siege_preparation" />
              </tags>
              <transform position="0.684, 1.256, -0.055" rotation_euler="0.102, 0.102, -0.127" scale="1.014, 1.014, 1.014" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="map_icon_siege_camp_4" />
              </components>
            </game_entity>
            <game_entity name="map_icons_market_tent_a" old_prefab_name="map_icons_market_tent_a">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <transform position="-1.089, 1.197, 0.139" rotation_euler="0.189, 0.211, 1.378" scale="0.779, 0.779, 0.779" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_market_tent_a" />
              </components>
            </game_entity>
            <game_entity name="volume_box_corner" old_prefab_name="volume_box_corner">
              <flags>
                <flag name="align_to_terrain" value="true" />
              </flags>
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_camp_area_2" />
              </tags>
              <transform position="-0.024, -2.246, 0.306" rotation_euler="0.000, 0.000, 3.008" scale="2.724, 2.174, 1.631" />
              <physics mass="1.000" />
              <children>
                <game_entity name="volume_box" old_prefab_name="volume_box">
                  <flags>
                    <flag name="record_to_scene_replay" value="true" />
                  </flags>
                  <visibility_masks>
                    <visibility_mask name="visible_only_when_editing" value="true" />
                  </visibility_masks>
                  <transform position="0.500, 0.500, -0.500" />
                  <physics mass="1.000" />
                  <components>
                    <meta_mesh_component name="volume_box" />
                  </components>
                  <scripts>
                    <script name="VolumeBox">
                      <variables>
                        <variable name="NavMeshPrefabName" value="" />
                      </variables>
                    </script>
                  </scripts>
                  <levels>
                    <level name="base" />
                  </levels>
                </game_entity>
              </children>
              <levels>
                <level name="base" />
              </levels>
            </game_entity>
            <game_entity name="volume_box_corner" old_prefab_name="volume_box_corner">
              <flags>
                <flag name="align_to_terrain" value="true" />
              </flags>
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_camp_area_1" />
              </tags>
              <transform position="-0.431, 1.068, 0.074" rotation_euler="0.000, 0.000, 3.008" scale="1.601, 2.050, 1.631" />
              <physics mass="1.000" />
              <children>
                <game_entity name="volume_box" old_prefab_name="volume_box">
                  <flags>
                    <flag name="record_to_scene_replay" value="true" />
                  </flags>
                  <visibility_masks>
                    <visibility_mask name="visible_only_when_editing" value="true" />
                  </visibility_masks>
                  <transform position="0.500, 0.500, -0.500" />
                  <physics mass="1.000" />
                  <components>
                    <meta_mesh_component name="volume_box" />
                  </components>
                  <scripts>
                    <script name="VolumeBox">
                      <variables>
                        <variable name="NavMeshPrefabName" value="" />
                      </variables>
                    </script>
                  </scripts>
                  <levels>
                    <level name="base" />
                  </levels>
                </game_entity>
              </children>
              <levels>
                <level name="base" />
              </levels>
            </game_entity>
            <game_entity name="map_icon_siege_camp_4" old_prefab_name="map_icon_siege_camp_4">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <tags>
                <tag name="siege_preparation" />
              </tags>
              <transform position="0.823, 2.409, -0.055" rotation_euler="0.073, 0.124, -0.388" scale="0.973, 0.973, 0.973" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="map_icon_siege_camp_4" />
              </components>
            </game_entity>
            <game_entity name="map_icons_market_tent_a" old_prefab_name="map_icons_market_tent_a">
              <flags>
                <flag name="align_to_terrain" value="true" />
                <flag name="align_rotation_to_terrain" value="true" />
              </flags>
              <transform position="-0.958, -1.785, 0.436" rotation_euler="0.000, 0.000, 0.791" scale="0.779, 0.779, 0.779" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_market_tent_a" />
              </components>
            </game_entity>
            <game_entity name="attacker_ranged_engine" old_prefab_name="attacker_ranged_engine">
              <flags>
                <flag name="align_to_terrain" value="true" />
              </flags>
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_siege_engine_3" />
              </tags>
              <transform position="-0.050, 2.100, -0.012" rotation_euler="0.000, 0.000, -1.799" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform position="0.048, 0.021, -0.013" rotation_euler="0.000, 0.000, 2.438" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
            </game_entity>
            <game_entity name="attacker_ranged_engine" old_prefab_name="attacker_ranged_engine">
              <flags>
                <flag name="align_to_terrain" value="true" />
              </flags>
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_siege_engine_2" />
              </tags>
              <transform position="-0.138, 1.308, 0.049" rotation_euler="0.000, 0.000, -1.598" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform position="0.006, -0.038, -0.017" rotation_euler="0.000, 0.000, -0.236" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
            </game_entity>
            <game_entity name="attacker_ranged_engine" old_prefab_name="attacker_ranged_engine">
              <flags>
                <flag name="align_to_terrain" value="true" />
              </flags>
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_siege_engine_1" />
              </tags>
              <transform position="0.067, -0.330, 0.080" rotation_euler="0.000, 0.000, -1.515" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform position="0.051, -0.014, 0.009" rotation_euler="0.000, 0.000, 2.889" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
            </game_entity>
            <game_entity name="attacker_ranged_engine" old_prefab_name="attacker_ranged_engine">
              <flags>
                <flag name="align_to_terrain" value="true" />
              </flags>
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_siege_engine_0" />
              </tags>
              <transform position="-0.038, -1.957, 0.341" rotation_euler="0.000, 0.000, -1.371" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform position="0.024, -0.093, -0.028" rotation_euler="0.000, 0.000, 2.879" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
            </game_entity>
            <game_entity name="attacker_siege_ram" old_prefab_name="attacker_siege_ram">
              <flags>
                <flag name="align_to_terrain" value="true" />
              </flags>
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_siege_ram" />
              </tags>
              <transform position="-2.395, 1.267, 0.449" rotation_euler="0.000, 0.000, -1.532" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform position="0.079, 0.058, -0.020" rotation_euler="0.000, 0.000, 1.922" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
            </game_entity>
            <game_entity name="attacker_siege_tower" old_prefab_name="attacker_siege_tower">
              <flags>
                <flag name="align_to_terrain" value="true" />
              </flags>
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_siege_tower" />
              </tags>
              <transform position="-3.196, 1.009, 0.725" rotation_euler="0.000, 0.000, -1.660" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform position="-0.023, 0.025, -0.024" rotation_euler="0.000, 0.000, -0.555" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
            </game_entity>
            <game_entity name="attacker_siege_tower" old_prefab_name="attacker_siege_tower">
              <flags>
                <flag name="align_to_terrain" value="true" />
              </flags>
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_siege_tower" />
              </tags>
              <transform position="-1.938, -1.750, 0.526" rotation_euler="0.000, 0.000, -1.540" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform position="0.024, 0.028, -0.022" rotation_euler="0.000, 0.000, -2.195" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
            </game_entity>
            <game_entity name="defender_ranged_l1" old_prefab_name="defender_ranged_l1">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_2" />
              </tags>
              <transform position="3.390, 0.071, 0.316" rotation_euler="0.000, 0.000, 1.561" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -3.076" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_1" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
            <game_entity name="defender_ranged_l1" old_prefab_name="defender_ranged_l1">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_1" />
              </tags>
              <transform position="3.384, 0.811, 0.312" rotation_euler="0.000, 0.000, 1.580" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -3.088" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_1" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
            <game_entity name="defender_ranged_l1" old_prefab_name="defender_ranged_l1">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_3" />
              </tags>
              <transform position="3.787, -0.932, 0.536" rotation_euler="0.000, 0.000, 1.575" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -2.776" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_1" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
            <game_entity name="defender_ranged_l1" old_prefab_name="defender_ranged_l1">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_0" />
              </tags>
              <transform position="3.750, 1.523, 0.463" rotation_euler="0.000, 0.000, 1.569" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -3.102" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_1" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
            <game_entity name="defender_ranged_l2" old_prefab_name="defender_ranged_l2">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_2" />
              </tags>
              <transform position="3.307, 0.076, 0.658" rotation_euler="0.000, 0.000, 1.582" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -3.088" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_2" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
            <game_entity name="defender_ranged_l2" old_prefab_name="defender_ranged_l2">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_1" />
              </tags>
              <transform position="3.275, 0.800, 0.656" rotation_euler="0.000, 0.000, 1.579" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -3.102" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_2" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
            <game_entity name="defender_ranged_l2" old_prefab_name="defender_ranged_l2">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_0" />
              </tags>
              <transform position="3.715, 1.602, 0.672" rotation_euler="0.000, 0.000, 1.578" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -2.776" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_2" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
            <game_entity name="defender_ranged_l2" old_prefab_name="defender_ranged_l2">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_3" />
              </tags>
              <transform position="3.713, -0.983, 0.725" rotation_euler="0.000, 0.000, 1.588" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -3.076" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_2" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
            <game_entity name="defender_ranged_l3" old_prefab_name="defender_ranged_l3">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_1" />
              </tags>
              <transform position="3.309, 0.577, 0.535" rotation_euler="0.000, 0.000, 1.730" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -3.102" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_3" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
            <game_entity name="defender_ranged_l3" old_prefab_name="defender_ranged_l3">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_2" />
              </tags>
              <transform position="3.393, 0.036, 0.539" rotation_euler="0.000, 0.000, 1.740" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -3.088" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_3" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
            <game_entity name="defender_ranged_l3" old_prefab_name="defender_ranged_l3">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_3" />
              </tags>
              <transform position="3.409, -1.155, 0.970" rotation_euler="0.000, 0.000, 1.575" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -3.076" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_3" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
            <game_entity name="defender_ranged_l3" old_prefab_name="defender_ranged_l3">
              <visibility_masks>
                <visibility_mask name="visible_only_when_editing" value="true" />
              </visibility_masks>
              <tags>
                <tag name="map_defensive_engine_0" />
              </tags>
              <transform position="2.133, 1.420, 0.747" rotation_euler="0.000, 0.000, 1.630" scale="0.350, 0.350, 0.350" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="arrow_new_icon" />
              </components>
              <children>
                <game_entity name="bo_siege_engine" old_prefab_name="bo_siege_engine">
                  <transform rotation_euler="0.000, 0.000, -3.076" scale="1.050, 1.050, 1.050" />
                  <physics shape="bo_sphere_collider" mass="1.000" />
                </game_entity>
              </children>
              <levels>
                <level name="level_3" />
                <level name="civilian" />
                <level name="siege" />
              </levels>
            </game_entity>
          </children>
          <levels>
            <level name="level_1" />
            <level name="level_2" />
            <level name="level_3" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="6.131, -0.646, 0.049" rotation_euler="0.000, 0.000, 2.867" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-3.446, -1.865, -0.007" rotation_euler="0.000, 0.000, 0.504" scale="1.000, 1.038, 1.000" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-3.801, -1.176, -0.007" rotation_euler="0.000, 0.000, 0.438" scale="1.000, 1.048, 1.000" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-3.545, 0.076, -0.007" rotation_euler="0.000, 0.000, -0.055" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-4.812, -0.695, -0.354" rotation_euler="0.000, 0.000, 0.996" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="town_circle_decal" old_prefab_name="">
          <tags>
            <tag name="map_settlement_circle" />
          </tags>
          <transform position="0.580, -0.631, 2.638" rotation_euler="0.000, 0.000, 2.549" scale="10.118, 10.118, 10.118" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_circle_a" argument="1.000, 1.000, 0.000, 0.000" argument2="11.000, 0.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.072, -0.271, -0.164" rotation_euler="0.000, 0.000, 2.023" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="1.392, -4.428, -0.425" rotation_euler="0.000, 0.000, 2.506" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l3" old_prefab_name="map_icons_empire_tower_l3">
          <transform position="1.997, -3.583, -0.317" rotation_euler="0.000, 0.000, 0.572" scale="0.872, 0.872, 0.872" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_small_gatehouse_l1" old_prefab_name="map_icons_empire_small_gatehouse_l1">
          <transform position="1.619, -0.743, 0.000" rotation_euler="0.000, 0.000, 0.379" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_1_mini_gatehouse" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_arena" old_prefab_name="map_icons_empire_arena">
          <transform position="0.104, 2.682, 0.015" rotation_euler="0.000, 0.000, 0.126" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_arena" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="-3.047, 2.800, -0.358" rotation_euler="0.000, 0.000, -1.068" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="-1.376, 3.727, -0.358" rotation_euler="0.000, 0.000, -1.068" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-5.746, -0.195, -0.272" rotation_euler="0.000, 0.000, 0.985" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-5.001, 1.448, -0.272" rotation_euler="0.000, 0.000, -0.806" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-4.453, 1.978, -0.272" rotation_euler="0.000, 0.000, -0.806" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-5.476, 0.871, -0.272" rotation_euler="0.000, 0.000, -0.584" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="2.032, 0.246, -0.186" rotation_euler="0.000, 0.000, 0.414" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-4.167, -0.887, -0.354" rotation_euler="0.000, 0.000, 1.560" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-3.735, -0.570, -0.007" rotation_euler="0.000, 0.000, -0.555" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="-4.090, 0.766, -0.273" rotation_euler="0.000, 0.000, 0.763" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_monument_1" old_prefab_name="map_icons_empire_monument_1">
          <transform position="-3.076, -0.841, 0.113" rotation_euler="0.000, 0.000, 0.166" scale="2.224, 2.224, 2.224" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_3_monument_1" />
          </components>
          <levels>
            <level name="base" />
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_small_gatehouse_l3" old_prefab_name="map_icons_empire_small_gatehouse_l3">
          <transform position="1.537, -0.724, 0.101" rotation_euler="0.000, 0.000, 0.441" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_3_mini_gatehouse" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="5.213, -0.993, -0.272" rotation_euler="0.000, 0.000, 1.781" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="2.836, -1.512, -0.272" rotation_euler="0.000, 0.000, 1.781" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="2.228, 1.655, -0.240" rotation_euler="0.000, 0.000, 0.972" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="1.869, -1.405, -0.276" rotation_euler="0.000, 0.000, 0.457" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.777, 1.259, -0.200" rotation_euler="0.000, 0.000, 2.502" scale="1.241, 1.241, 1.241" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.203, 1.511, -0.162" rotation_euler="0.000, 0.000, -2.077" scale="0.793, 0.793, 0.793" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="2.450, 2.873, -0.523" rotation_euler="0.000, 0.000, -0.582" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="0.430, 4.248, -0.242" rotation_euler="0.000, 0.000, -1.530" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="2.321, 4.319, -0.242" rotation_euler="0.000, 0.000, -1.530" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="3.838, 3.439, 0.014" rotation_euler="0.000, 0.000, -2.599" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="5.140, 2.439, 0.023" rotation_euler="0.000, 0.000, -1.854" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="6.198, 1.302, 0.056" rotation_euler="0.000, 0.000, -2.920" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_sack_a" old_prefab_name="map_icons_sack_a">
          <transform position="-0.754, -2.015, 0.021" rotation_euler="0.000, 0.000, -0.306" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_sack_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="2.967, -2.747, -0.442" rotation_euler="0.000, 0.000, 2.328" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="map_icons_empire_wall_l3">
          <transform position="4.233, -1.207, -0.272" rotation_euler="0.000, 0.000, 1.781" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="3.155, 3.969, -0.526" rotation_euler="0.000, 0.000, -0.563" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="6.142, -0.607, 0.344" rotation_euler="0.000, 0.000, 2.873" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l1" old_prefab_name="map_icons_empire_square_tower_l1">
          <transform position="6.075, -0.933, 0.152" rotation_euler="0.000, 0.000, 1.681" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l1" old_prefab_name="map_icons_empire_square_tower_l1">
          <transform position="-3.157, -2.188, 0.036" rotation_euler="0.000, 0.000, 0.993" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.459, 1.770, -0.211" rotation_euler="0.000, 0.000, -0.594" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_well" old_prefab_name="map_icons_empire_well">
          <transform position="-0.369, -2.217, 0.005" rotation_euler="0.000, 0.000, -0.620" scale="0.566, 0.566, 0.566" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_well" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-5.895, 0.233, -0.272" rotation_euler="0.000, 0.000, -0.584" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_pier_a" old_prefab_name="map_icons_pier_a">
          <transform position="-5.549, -1.067, 0.205" rotation_euler="0.000, 0.000, -0.605" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_pier_a" />
          </components>
        </game_entity>
        <game_entity name="map_mountain_rock_c" old_prefab_name="map_mountain_rock_c">
          <transform position="-4.791, -3.888, -0.075" rotation_euler="-0.183, 0.000, -1.726" scale="0.680, 0.680, 0.680" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_mountain_rock_c" />
          </components>
        </game_entity>
        <game_entity name="map_mountain_rock_c_snw" old_prefab_name="map_mountain_rock_c_snw">
          <transform position="-4.305, -4.219, -0.255" rotation_euler="0.000, 0.000, -0.293" scale="0.828, 0.828, 0.828" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_mountain_rock_c_snw" />
          </components>
        </game_entity>
        <game_entity name="map_mountain_rock_c_snw" old_prefab_name="map_mountain_rock_c_snw">
          <transform position="-3.759, -3.801, -0.429" rotation_euler="-0.343, 0.000, 1.866" scale="0.828, 0.828, 0.828" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_mountain_rock_c_snw" />
          </components>
        </game_entity>
        <game_entity name="map_mountain_rock_c_snw" old_prefab_name="map_mountain_rock_c_snw">
          <transform position="-4.393, -3.352, -0.211" rotation_euler="-0.560, -0.230, 3.120" scale="0.689, 0.689, 0.689" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_mountain_rock_c_snw" />
          </components>
        </game_entity>
        <game_entity name="map_mountain_rock_c_snw" old_prefab_name="map_mountain_rock_c_snw">
          <transform position="-4.235, -1.216, -0.125" rotation_euler="-0.445, 0.000, -0.009" scale="0.624, 0.624, 0.624" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_mountain_rock_c_snw" />
          </components>
        </game_entity>
        <game_entity name="map_mountain_rock_c_snw" old_prefab_name="map_mountain_rock_c_snw">
          <transform position="-4.076, -1.579, -0.194" rotation_euler="-0.602, 0.124, -0.884" scale="0.624, 0.624, 0.624" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_mountain_rock_c_snw" />
          </components>
        </game_entity>
        <game_entity name="map_mountain_rock_c_snw" old_prefab_name="map_mountain_rock_c_snw">
          <transform position="-3.260, -2.816, -0.670" rotation_euler="-0.140, 0.000, -1.138" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_mountain_rock_c_snw" />
          </components>
        </game_entity>
        <game_entity name="map_mountain_rock_b_snw" old_prefab_name="map_mountain_rock_b_snw">
          <transform position="-2.714, -3.071, 0.039" rotation_euler="-0.501, 0.000, 0.019" scale="0.618, 0.618, 0.618" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="map_mountain_rock_b_snw" />
          </components>
        </game_entity>
        <game_entity name="empire_road_plaza_a" old_prefab_name="empire_road_plaza_a">
          <transform position="-0.349, -2.241, 0.016" rotation_euler="0.000, 0.000, -0.611" scale="0.065, 0.065, 0.065" />
          <physics shape="bo_empire_road_plaza_a" override_material="stone" mass="1.000" />
          <components>
            <meta_mesh_component name="empire_road_plaza_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="2.532, -2.298, 0.073" rotation_euler="0.000, 0.000, 1.033" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="2.136, -2.855, 0.076" rotation_euler="0.000, 0.000, 2.500" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.726, -2.302, -0.050" rotation_euler="0.000, 0.000, 1.745" scale="0.842, 0.842, 0.842" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.542, -1.801, -0.126" rotation_euler="0.000, 0.000, -2.607" scale="0.842, 0.842, 0.842" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.233, -3.980, -0.079" rotation_euler="0.000, 0.000, -0.630" scale="0.961, 0.961, 0.961" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="0.839, -4.342, -0.079" rotation_euler="0.000, 0.000, -2.159" scale="0.960, 0.960, 0.960" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="0.210, -4.619, -0.122" rotation_euler="0.000, 0.000, 0.602" scale="0.932, 0.932, 0.932" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-0.141, -4.233, -0.133" rotation_euler="0.000, 0.000, 0.892" scale="0.932, 0.932, 0.932" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="0.774, -3.572, -0.091" rotation_euler="0.000, 0.000, -0.641" scale="0.813, 0.813, 0.813" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="0.404, -4.018, -0.133" rotation_euler="0.000, 0.000, 0.862" scale="0.687, 0.687, 0.687" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="0.145, -3.797, -0.133" rotation_euler="0.000, 0.000, 2.458" scale="0.687, 0.687, 0.687" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="0.304, -3.346, -0.133" rotation_euler="0.000, 0.000, 2.458" scale="0.687, 0.687, 0.687" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="0.504, -3.047, -0.133" rotation_euler="0.000, 0.000, 0.889" scale="0.687, 0.687, 0.687" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.135, -3.125, -0.079" rotation_euler="0.000, 0.000, 0.965" scale="0.809, 0.809, 0.809" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.433, -2.776, -0.079" rotation_euler="0.000, 0.000, -2.213" scale="0.809, 0.809, 0.809" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.076, -2.095, -0.133" rotation_euler="0.000, 0.000, -0.603" scale="0.938, 0.938, 0.938" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="0.756, -2.532, -0.133" rotation_euler="0.000, 0.000, -2.255" scale="0.840, 0.840, 0.840" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-0.273, 1.125, -0.079" rotation_euler="0.000, 0.000, 1.687" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-0.939, 1.419, -0.160" rotation_euler="0.000, 0.000, -0.212" scale="1.130, 1.130, 1.130" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-1.431, 1.861, -0.287" rotation_euler="0.000, 0.000, 0.692" scale="1.098, 1.098, 1.098" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-2.149, 1.655, -0.333" rotation_euler="0.000, 0.000, 0.670" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-1.782, 1.239, -0.231" rotation_euler="0.000, 0.000, 0.670" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-2.999, 0.775, -0.236" rotation_euler="0.000, 0.000, 2.629" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-2.332, 0.603, -0.195" rotation_euler="0.000, 0.000, -2.104" scale="0.897, 0.897, 0.897" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-3.582, 0.842, -0.233" rotation_euler="0.000, 0.000, 1.798" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-4.040, 1.339, -0.359" rotation_euler="0.000, 0.000, -2.370" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-3.618, 1.634, -0.385" rotation_euler="0.000, 0.000, 0.642" scale="0.878, 0.878, 0.878" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-3.281, 1.850, -0.435" rotation_euler="0.000, 0.000, 0.261" scale="0.820, 0.820, 0.820" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-3.254, 2.245, -0.578" rotation_euler="0.000, 0.000, 1.852" scale="0.759, 0.759, 0.759" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-2.888, 2.041, -0.456" rotation_euler="0.000, 0.000, 2.437" scale="0.760, 0.760, 0.760" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-2.022, 2.186, -0.474" rotation_euler="0.000, 0.000, 1.846" scale="0.760, 0.760, 0.760" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-1.917, 2.826, -0.634" rotation_euler="0.000, 0.000, 0.490" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-1.531, 3.219, -0.585" rotation_euler="0.000, 0.000, -1.123" scale="1.521, 1.521, 1.521" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-2.704, 2.561, -0.668" rotation_euler="0.000, 0.000, -1.062" scale="1.213, 1.213, 1.213" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="0.684, -1.711, -0.133" rotation_euler="0.000, 0.000, -0.658" scale="0.828, 0.828, 0.828" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-0.222, -1.177, -0.133" rotation_euler="0.000, 0.000, 0.959" scale="0.828, 0.828, 0.828" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="0.036, -0.803, -0.133" rotation_euler="0.000, 0.000, 0.959" scale="0.736, 0.736, 0.736" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-0.485, -0.682, -0.049" rotation_euler="0.000, 0.000, 0.946" scale="0.660, 0.660, 0.660" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-0.634, -0.958, -0.062" rotation_euler="0.000, 0.000, 2.465" scale="0.659, 0.659, 0.659" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="empire_garden_wall_c2" old_prefab_name="empire_garden_wall_c2">
          <transform position="-1.791, -1.207, -0.122" rotation_euler="0.000, 0.000, 1.014" scale="0.252, 0.252, 0.252" />
          <physics shape="bo_empire_garden_wall_c2" override_material="stone" mass="1.000" />
          <components>
            <meta_mesh_component name="empire_garden_wall_c2" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="0.870, 0.309, -0.150" rotation_euler="0.000, 0.000, -2.688" scale="0.958, 0.958, 0.958" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="empire_garden_wall_c2" old_prefab_name="empire_garden_wall_c2">
          <transform position="-2.573, -1.647, -0.122" rotation_euler="0.000, 0.000, -0.558" scale="0.253, 0.253, 0.253" />
          <physics shape="bo_empire_garden_wall_c2" override_material="stone" mass="1.000" />
          <components>
            <meta_mesh_component name="empire_garden_wall_c2" />
          </components>
        </game_entity>
        <game_entity name="empire_garden_wall_c2" old_prefab_name="empire_garden_wall_c2">
          <transform position="-2.005, -1.551, -0.122" rotation_euler="0.000, 0.000, 1.014" scale="0.253, 0.253, 0.253" />
          <physics shape="bo_empire_garden_wall_c2" override_material="stone" mass="1.000" />
          <components>
            <meta_mesh_component name="empire_garden_wall_c2" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-1.359, 0.092, -0.090" rotation_euler="0.000, 0.000, -0.575" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-1.794, 0.320, -0.133" rotation_euler="0.000, 0.000, -0.633" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_alley" old_prefab_name="map_icons_empire_alley">
          <transform position="-2.768, 1.467, -0.042" rotation_euler="0.000, 0.000, 1.725" scale="0.637, 0.637, 0.637" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_alley" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-2.922, -1.755, -0.083" rotation_euler="0.000, 0.000, 2.559" scale="1.305, 1.305, 1.305" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-2.433, -2.137, -0.079" rotation_euler="0.000, 0.000, 1.003" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-1.993, -2.508, -0.086" rotation_euler="0.000, 0.000, -0.620" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-1.399, -2.691, -0.155" rotation_euler="0.000, 0.000, -2.159" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-0.210, -3.544, -0.133" rotation_euler="0.000, 0.000, -0.631" scale="0.808, 0.808, 0.808" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-1.560, -1.894, -0.079" rotation_euler="0.000, 0.000, 1.025" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.319, 0.621, -0.186" rotation_euler="0.000, 0.000, -2.717" scale="1.312, 1.312, 1.312" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.517, 0.707, -0.186" rotation_euler="0.000, 0.000, 2.502" scale="1.312, 1.312, 1.312" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_keep_l3" old_prefab_name="">
          <transform position="4.298, 0.829, -0.093" rotation_euler="0.000, 0.000, -0.234" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_keep_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-0.170, -0.354, -0.040" rotation_euler="0.000, 0.000, 2.507" scale="0.793, 0.793, 0.793" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-3.205, -1.289, -0.162" rotation_euler="0.000, 0.000, -2.745" scale="1.715, 1.715, 1.715" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="empire_garden_wall_c2" old_prefab_name="">
          <transform position="-1.648, -0.229, -0.122" rotation_euler="0.000, 0.000, -0.579" scale="0.253, 0.253, 0.253" />
          <physics shape="bo_empire_garden_wall_c2" override_material="stone" mass="1.000" />
          <components>
            <meta_mesh_component name="empire_garden_wall_c2" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_tavern" old_prefab_name="">
          <transform position="-2.885, -0.587, 0.000" rotation_euler="0.000, 0.000, -0.544" scale="1.386, 1.386, 1.386" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tavern" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l3" old_prefab_name="">
          <transform position="1.410, 1.281, -0.523" rotation_euler="0.000, 0.000, -0.582" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="">
          <transform position="1.056, 0.232, -0.527" rotation_euler="0.000, 0.000, 0.457" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="">
          <transform position="1.175, -0.004, -0.530" rotation_euler="0.000, 0.000, 0.457" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="1.557, 0.095, -0.186" rotation_euler="0.000, 0.000, -2.717" scale="1.312, 1.312, 1.312" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="2.491, 2.192, -0.240" rotation_euler="0.000, 0.000, 2.555" scale="1.075, 1.075, 1.075" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="3.529, 1.102, -0.056" rotation_euler="0.000, 0.000, 0.977" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_monument_1" old_prefab_name="map_icons_empire_monument_1">
          <transform position="3.366, 3.279, 0.089" rotation_euler="0.000, 0.000, -0.045" scale="1.698, 1.698, 1.698" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_3_monument_1" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="3.330, 0.609, -0.042" rotation_euler="0.000, 0.000, 1.272" scale="1.529, 1.529, 1.529" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="2.803, 2.695, -0.269" rotation_euler="0.000, 0.000, -0.579" scale="0.866, 0.866, 0.866" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="2.520, 0.268, -0.186" rotation_euler="0.000, 0.000, 0.414" scale="0.823, 0.823, 0.823" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="2.241, -1.159, -0.144" rotation_euler="0.000, 0.000, 0.174" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="2.639, -1.068, -0.133" rotation_euler="0.000, 0.000, 0.174" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="3.337, -1.003, 0.085" rotation_euler="0.000, 0.000, 1.804" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="5.655, -0.148, 0.190" rotation_euler="0.000, 0.000, -0.311" scale="1.601, 1.601, 1.601" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="5.927, 0.655, 0.113" rotation_euler="0.000, 0.000, 0.216" scale="1.874, 1.874, 1.874" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="5.720, 1.540, 0.103" rotation_euler="0.000, 0.000, 0.186" scale="1.874, 1.874, 1.874" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-4.925, 0.940, -0.488" rotation_euler="0.000, 0.000, -0.830" scale="1.621, 1.621, 1.621" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-4.342, 0.621, -0.280" rotation_euler="0.000, 0.000, 0.741" scale="1.621, 1.621, 1.621" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-5.416, 0.173, -0.577" rotation_euler="0.000, 0.000, -0.594" scale="1.144, 1.144, 1.144" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-4.442, -0.532, -0.293" rotation_euler="0.000, 0.000, -0.242" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_b" old_prefab_name="map_icons_empire_house_b">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-4.021, -0.428, -0.213" rotation_euler="0.000, 0.000, 2.533" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_b" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="-4.797, -0.031, -0.351" rotation_euler="0.000, 0.000, 2.507" scale="1.132, 1.132, 1.132" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="1.992, -1.988, -0.111" rotation_euler="0.000, 0.000, -0.825" scale="1.203, 1.203, 1.203" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="0.588, -0.827, -0.111" rotation_euler="0.000, 0.000, -0.453" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="4.610, 0.045, -0.111" rotation_euler="0.000, 0.000, -1.359" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="-1.369, -2.194, -0.111" rotation_euler="0.000, 0.000, -0.654" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="-2.882, -0.833, -0.111" rotation_euler="0.000, 0.000, -1.029" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="-4.380, 0.276, -0.111" rotation_euler="0.000, 0.000, -0.567" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="-3.006, 1.520, -0.111" rotation_euler="0.000, 0.000, -1.026" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="-0.911, 2.468, -0.111" rotation_euler="0.000, 0.000, -1.026" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="0.840, 2.976, -0.111" rotation_euler="0.000, 0.000, -1.524" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l3" old_prefab_name="map_icons_empire_square_tower_l3">
          <transform position="-3.979, 2.307, -1.580" rotation_euler="0.000, 0.000, 0.532" scale="1.366, 1.366, 1.366" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="2.390, 1.162, -0.111" rotation_euler="0.000, 0.000, -1.524" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="2.962, -0.340, -0.111" rotation_euler="0.000, 0.000, -1.359" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="-0.967, 0.123, -0.111" rotation_euler="0.000, 0.000, -1.119" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="1.017, 1.063, -0.111" rotation_euler="0.000, 0.000, -1.119" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="editor_cube" old_prefab_name="editor_cube">
          <transform position="0.211, 2.693, -2.672" rotation_euler="0.000, 0.000, 0.127" scale="2.687, 1.750, 2.687" />
          <physics shape="bo_editor_cube" mass="1.000" />
          <components>
            <meta_mesh_component name="editor_cube">
              <mesh name="editor_cube" material="desert_border_mat_c" factor="4287401100" argument="2.000, 0.000, 0.000, 0.000" />
            </meta_mesh_component>
          </components>
        </game_entity>
        <game_entity name="decal_path_a" old_prefab_name="">
          <transform position="1.333, -0.807, 0.000" rotation_euler="0.000, 0.000, -1.080" scale="0.517, 0.591, 0.517" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_a" argument="0.530, 0.530, 0.480, 0.010" />
          </components>
        </game_entity>
        <game_entity name="decal_path_b" old_prefab_name="">
          <transform position="-0.925, -1.354, 0.000" rotation_euler="0.000, 0.000, 0.356" scale="0.572, 0.572, 0.572" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_b" argument="0.530, 0.530, 0.000, 0.010" />
          </components>
        </game_entity>
        <game_entity name="decal_path_a" old_prefab_name="">
          <transform position="-1.524, -3.861, 0.000" rotation_euler="0.000, 0.000, 2.544" scale="0.517, 0.517, 0.517" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_a" argument="0.530, 0.530, 0.480, 0.010" />
          </components>
        </game_entity>
        <game_entity name="decal_path_a" old_prefab_name="">
          <transform position="0.458, 0.118, 0.000" rotation_euler="0.000, 0.000, 0.225" scale="0.509, 0.509, 0.509" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_a" argument="0.530, 0.530, 0.480, 0.010" />
          </components>
        </game_entity>
        <game_entity name="decal_path_a" old_prefab_name="">
          <transform position="-0.932, -3.090, 0.000" rotation_euler="0.000, 0.000, -0.585" scale="0.517, 0.517, 0.517" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_a" argument="0.530, 0.530, 0.480, 0.010" />
          </components>
        </game_entity>
        <game_entity name="decal_path_a" old_prefab_name="">
          <transform position="-2.045, -0.629, 0.000" rotation_euler="0.000, 0.000, -0.531" scale="0.517, 0.517, 0.517" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_a" argument="0.530, 0.530, 0.480, 0.010" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l1" old_prefab_name="map_icons_empire_tower_l1">
          <transform position="4.160, -0.274, 0.000" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="sign_tavern" old_prefab_name="sign_tavern">
          <transform position="-2.680, -1.078, 1.305" rotation_euler="0.000, 0.000, 2.627" scale="0.254, 0.254, 0.254" />
          <physics shape="bo_sign_tavern" override_material="wood" mass="1.000" />
          <components>
            <meta_mesh_component name="sign_tavern" />
          </components>
        </game_entity>
        <game_entity name="bd_table_b" old_prefab_name="bd_table_b">
          <transform position="-1.905, -0.783, 0.000" rotation_euler="0.000, 0.000, -2.349" scale="0.193, 0.193, 0.193" />
          <physics shape="bo_bd_table_b" override_material="wood" mass="1.000" />
          <components>
            <meta_mesh_component name="bd_table_b" />
          </components>
        </game_entity>
        <game_entity name="decal_path_a" old_prefab_name="">
          <transform position="-1.765, -0.794, 0.000" rotation_euler="0.000, 0.000, -0.531" scale="0.517, 0.517, 0.517" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_empire_path_a" argument="0.530, 0.530, 0.480, 0.010" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="5.438, -0.956, 0.204" rotation_euler="0.000, 0.000, 1.766" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="3.496, -1.859, 0.043" rotation_euler="0.000, 0.000, -2.880" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_gatehouse_l1" old_prefab_name="map_icons_empire_gatehouse_l1">
          <transform position="-1.267, -3.555, 0.005" rotation_euler="0.000, 0.000, 0.965" scale="1.153, 1.153, 1.211" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_1_gatehouse" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l1" old_prefab_name="map_icons_empire_tower_l1">
          <transform position="-3.561, 0.278, 0.355" rotation_euler="0.000, 0.000, -0.323" scale="0.889, 0.889, 0.889" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l1" old_prefab_name="map_icons_empire_tower_l1">
          <transform position="0.468, -5.566, -0.339" rotation_euler="0.000, 0.000, 0.000" scale="1.202, 1.202, 1.202" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l1" old_prefab_name="map_icons_empire_tower_l1">
          <transform position="0.468, -5.566, 0.407" rotation_euler="0.000, 0.000, 0.000" scale="0.755, 0.755, 0.755" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l1" old_prefab_name="map_icons_empire_tower_l1">
          <transform position="-4.376, -3.914, 0.502" rotation_euler="0.000, 0.000, -0.599" scale="0.767, 0.767, 0.767" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_breach_l3" old_prefab_name="map_icons_empire_wall_small_breach_l3">
          <tags>
            <tag name="map_breachable_wall" />
          </tags>
          <transform position="-2.206, -3.106, -0.177" rotation_euler="0.000, 0.000, 0.966" scale="1.075, 1.075, 1.075" />
          <physics mass="1.000" />
          <children>
            <game_entity name="map_icons_empire_wall_small_breach_l3" old_prefab_name="map_icons_empire_wall_small_breach_l3">
              <tags>
                <tag name="map_broken_wall" />
              </tags>
              <transform position="0.057, 0.010, 0.000" rotation_euler="0.000, 0.000, 0.000" scale="1.000, 0.960, 1.000" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_3s_collapsed" />
              </components>
            </game_entity>
            <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
              <tags>
                <tag name="map_solid_wall" />
              </tags>
              <transform position="0.035, 0.010, -0.017" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_3s" />
              </components>
            </game_entity>
            <game_entity name="bo_siege_wall" old_prefab_name="bo_siege_wall">
              <transform rotation_euler="0.000, 0.000, 1.590" scale="0.368, 0.368, 0.367" />
              <physics shape="bo_sphere_collider" mass="1.000" />
            </game_entity>
          </children>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="-2.643, -2.588, 0.033" rotation_euler="0.000, 0.000, 0.955" scale="1.002, 0.854, 1.002" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="-3.477, -1.809, 0.259" rotation_euler="0.000, 0.000, 0.509" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="-3.821, -1.134, 0.270" rotation_euler="0.000, 0.000, 0.443" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="-3.593, 0.113, 0.273" rotation_euler="0.000, 0.000, -0.050" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="-4.812, -0.695, 0.182" rotation_euler="0.000, 0.000, 1.001" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_breach_l3" old_prefab_name="map_icons_empire_wall_small_breach_l3">
          <tags>
            <tag name="map_breachable_wall" />
          </tags>
          <transform position="-0.666, -4.508, -0.177" rotation_euler="0.000, 0.000, 0.966" scale="1.075, 1.075, 1.075" />
          <physics mass="1.000" />
          <children>
            <game_entity name="map_icons_empire_wall_small_breach_l3" old_prefab_name="map_icons_empire_wall_small_breach_l3">
              <tags>
                <tag name="map_broken_wall" />
              </tags>
              <transform position="0.057, 0.010, 0.000" rotation_euler="0.000, 0.000, 0.000" scale="1.000, 0.960, 1.000" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_3s_collapsed" />
              </components>
            </game_entity>
            <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
              <tags>
                <tag name="map_solid_wall" />
              </tags>
              <transform position="0.035, 0.010, -0.017" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_3s" />
              </components>
            </game_entity>
            <game_entity name="bo_siege_wall" old_prefab_name="bo_siege_wall">
              <transform rotation_euler="0.000, 0.000, 1.590" scale="0.368, 0.368, 0.367" />
              <physics shape="bo_sphere_collider" mass="1.000" />
            </game_entity>
          </children>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="1.353, -4.482, 0.118" rotation_euler="0.000, 0.000, 2.511" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l1" old_prefab_name="map_icons_empire_tower_l1">
          <transform position="2.040, -3.682, -0.004" rotation_euler="0.000, 0.000, 0.892" scale="0.888, 0.888, 0.888" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="-3.047, 2.800, 0.110" rotation_euler="0.000, 0.000, -1.063" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="-1.391, 3.719, 0.132" rotation_euler="0.000, 0.000, -1.063" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="-5.746, -0.195, 0.138" rotation_euler="0.000, 0.000, 0.990" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="-5.001, 1.448, 0.135" rotation_euler="0.000, 0.000, -0.801" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="-4.453, 1.978, 0.124" rotation_euler="0.000, 0.000, -0.801" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="-5.476, 0.871, 0.135" rotation_euler="0.000, 0.000, -0.579" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="-4.167, -0.887, 0.182" rotation_euler="0.000, 0.000, 1.565" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="-3.783, -0.533, 0.273" rotation_euler="0.000, 0.000, -0.550" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="-4.166, 0.845, 0.119" rotation_euler="0.000, 0.000, 0.768" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="2.836, -1.512, 0.243" rotation_euler="0.000, 0.000, 1.786" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="2.450, 2.873, 0.104" rotation_euler="0.000, 0.000, -0.577" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="0.430, 4.248, 0.071" rotation_euler="0.000, 0.000, -1.525" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="2.321, 4.319, 0.071" rotation_euler="0.000, 0.000, -1.525" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="3.838, 3.439, 0.309" rotation_euler="0.000, 0.000, -2.594" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="5.140, 2.439, 0.318" rotation_euler="0.000, 0.000, -1.849" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="6.198, 1.302, 0.351" rotation_euler="0.000, 0.000, -2.915" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="2.964, -2.775, 0.033" rotation_euler="0.000, 0.000, 2.345" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="4.233, -1.207, 0.192" rotation_euler="0.000, 0.000, 1.786" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="3.155, 3.969, 0.101" rotation_euler="0.000, 0.000, -0.558" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="-5.895, 0.233, 0.138" rotation_euler="0.000, 0.000, -0.579" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l1" old_prefab_name="map_icons_empire_wall_l1">
          <transform position="1.410, 1.281, 0.104" rotation_euler="0.000, 0.000, -0.577" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l1" old_prefab_name="map_icons_empire_square_tower_l1">
          <transform position="3.336, -1.424, 0.179" rotation_euler="0.000, 0.000, 0.240" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="1.273, -0.201, 0.095" rotation_euler="0.000, 0.000, 0.462" scale="1.000, 0.894, 1.000" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l1" old_prefab_name="map_icons_empire_square_tower_l1">
          <transform position="-0.468, 4.226, 0.135" rotation_euler="0.000, 0.000, 0.222" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="6.330, 0.074, 0.344" rotation_euler="0.000, 0.000, 2.873" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l1" old_prefab_name="map_icons_empire_square_tower_l1">
          <transform position="3.257, 4.199, 0.227" rotation_euler="0.000, 0.000, 0.934" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l1" old_prefab_name="map_icons_empire_square_tower_l1">
          <transform position="-4.091, 2.329, 0.239" rotation_euler="0.000, 0.000, 0.704" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l1" old_prefab_name="map_icons_empire_square_tower_l1">
          <transform position="-5.169, -0.462, 0.042" rotation_euler="0.000, 0.000, 1.015" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l3" old_prefab_name="map_icons_empire_square_tower_l3">
          <transform position="6.033, -0.844, -0.163" rotation_euler="0.000, 0.000, 0.190" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="emp_bridge_g" old_prefab_name="emp_bridge_g">
          <transform position="-3.643, -3.142, 1.028" rotation_euler="0.000, 0.000, -0.743" scale="0.045, 0.045, 0.045" />
          <physics shape="bo_emp_bridge_g" override_material="stone" mass="1.000" />
          <components>
            <meta_mesh_component name="emp_bridge_g">
              <mesh name="emp_bridge_g" factor="4287927444" />
              <mesh name="emp_bridge_g.1" factor="4287927444" />
            </meta_mesh_component>
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l3" old_prefab_name="map_icons_empire_square_tower_l3">
          <transform position="3.184, 4.246, 0.239" rotation_euler="0.000, 0.000, -0.304" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l3" old_prefab_name="map_icons_empire_square_tower_l3">
          <transform position="-0.533, 4.167, 0.127" rotation_euler="0.000, 0.000, 0.133" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_monument_1" old_prefab_name="map_icons_empire_monument_1">
          <transform position="-3.076, -0.841, 0.113" rotation_euler="0.000, 0.000, 0.166" scale="2.717, 2.717, 2.717" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_3_monument_1" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l3" old_prefab_name="map_icons_empire_square_tower_l3">
          <transform position="-3.979, 2.307, 0.207" rotation_euler="0.000, 0.000, 0.532" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="1.022, 0.301, 0.100" rotation_euler="0.000, 0.000, 0.462" scale="1.000, 0.873, 1.000" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_keep_l2" old_prefab_name="map_icons_empire_keep_l2">
          <transform position="4.096, 0.404, 0.266" rotation_euler="0.000, 0.000, 0.437" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_keep_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="3.663, 2.696, -0.110" rotation_euler="0.000, 0.000, 0.549" scale="1.529, 1.529, 1.529" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_keep_l1" old_prefab_name="map_icons_empire_keep_l1">
          <transform position="4.237, 0.421, 0.000" rotation_euler="0.000, 0.000, 0.437" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_keep_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_gatehouse_l1" old_prefab_name="map_icons_empire_gatehouse_l1">
          <transform position="4.060, 0.556, 0.000" rotation_euler="0.000, 0.000, 0.979" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_1_gatehouse" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l1" old_prefab_name="map_icons_empire_tower_l1">
          <transform position="4.411, 1.062, 0.000" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_d" old_prefab_name="map_icons_empire_house_d">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="5.263, 1.974, 0.083" rotation_euler="0.000, 0.000, 1.263" scale="1.581, 1.581, 1.581" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_d" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
          <transform position="1.869, -1.405, 0.239" rotation_euler="0.000, 0.000, 0.462" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_1s" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="2.300, 3.077, -0.111" rotation_euler="0.000, 0.000, -1.524" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="decal_ground" old_prefab_name="_decal">
          <transform position="0.478, -3.610, -0.111" rotation_euler="0.000, 0.000, -0.654" scale="1.178, 1.178, 1.178" />
          <physics mass="1.000" />
          <components>
            <decal_component material="decal_city_ground" argument="1.000, 1.000, 0.000, 0.000" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_a" old_prefab_name="map_icons_empire_house_a">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="2.692, 0.904, -0.155" rotation_euler="0.000, 0.000, -0.298" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_a" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="5.763, 1.576, 0.095" rotation_euler="0.000, 0.000, 0.186" scale="1.874, 1.874, 1.874" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="5.827, 0.764, 0.129" rotation_euler="0.000, 0.000, -0.051" scale="1.874, 1.874, 1.874" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="4.198, 2.118, 0.000" rotation_euler="0.000, 0.000, 1.272" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="3.820, 1.634, -0.041" rotation_euler="0.000, 0.000, 2.359" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="3.219, 2.015, -0.194" rotation_euler="0.000, 0.000, 0.940" scale="1.195, 1.195, 1.195" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_house_c" old_prefab_name="map_icons_empire_house_c">
          <flags>
            <flag name="align_to_terrain" value="true" />
          </flags>
          <transform position="2.951, 1.527, -0.187" rotation_euler="0.000, 0.000, 0.940" scale="0.973, 0.973, 0.973" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_house_c" />
          </components>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l3" old_prefab_name="map_icons_empire_square_tower_l3">
          <transform position="3.321, -1.362, 0.082" rotation_euler="0.000, 0.000, 0.191" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l3" old_prefab_name="map_icons_empire_square_tower_l3">
          <transform position="-2.933, -2.354, 0.044" rotation_euler="0.000, 0.000, 0.863" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l3" old_prefab_name="map_icons_empire_square_tower_l3">
          <transform position="-5.184, -0.522, 0.061" rotation_euler="0.000, 0.000, 0.976" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="emp_bridge_g" old_prefab_name="emp_bridge_g">
          <transform position="-3.879, -3.202, 0.654" rotation_euler="0.000, 0.000, -0.603" scale="0.045, 0.045, 0.045" />
          <physics shape="bo_emp_bridge_g" override_material="stone" mass="1.000" />
          <components>
            <meta_mesh_component name="emp_bridge_g">
              <mesh name="emp_bridge_g" factor="4287927444" />
              <mesh name="emp_bridge_g.1" factor="4287927444" />
            </meta_mesh_component>
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l2" old_prefab_name="map_icons_empire_square_tower_l2">
          <transform position="-2.933, -2.354, 0.044" rotation_euler="0.000, 0.000, 0.862" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l2" old_prefab_name="map_icons_empire_tower_l2">
          <transform position="-4.377, -3.913, 0.189" rotation_euler="0.000, 0.000, -0.605" scale="0.767, 0.767, 0.767" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="-2.302, -2.969, -0.102" rotation_euler="0.000, 0.000, 0.886" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_gatehouse_l2" old_prefab_name="map_icons_empire_gatehouse_l2">
          <transform position="-1.445, -3.771, -0.026" rotation_euler="0.000, 0.000, 0.959" scale="0.929, 0.929, 0.929" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_2_gatehouse" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_breach_l1" old_prefab_name="map_icons_empire_wall_small_breach_l1">
          <tags>
            <tag name="map_breachable_wall" />
          </tags>
          <transform position="0.009, -5.227, -0.197" rotation_euler="0.000, 0.000, 0.261" scale="1.235, 1.235, 1.235" />
          <physics mass="1.000" />
          <children>
            <game_entity name="bo_siege_wall" old_prefab_name="bo_siege_wall">
              <transform rotation_euler="0.000, 0.000, 1.590" scale="0.368, 0.368, 0.367" />
              <physics shape="bo_sphere_collider" mass="1.000" />
            </game_entity>
            <game_entity name="map_icons_empire_wall_small_breach_l1" old_prefab_name="map_icons_empire_wall_small_breach_l1">
              <tags>
                <tag name="map_broken_wall" />
              </tags>
              <transform position="0.010, 0.012, 0.000" rotation_euler="0.000, 0.000, 0.000" scale="1.000, 0.988, 1.000" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_1s_collapsed" />
              </components>
            </game_entity>
            <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
              <tags>
                <tag name="map_solid_wall" />
              </tags>
              <transform position="0.028, 0.018, 0.028" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_1s" />
              </components>
            </game_entity>
          </children>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_breach_l1" old_prefab_name="map_icons_empire_wall_small_breach_l1">
          <tags>
            <tag name="map_breachable_wall" />
          </tags>
          <transform position="-0.343, -4.562, -0.108" rotation_euler="0.000, 0.000, 0.801" scale="1.235, 1.235, 1.235" />
          <physics mass="1.000" />
          <children>
            <game_entity name="bo_siege_wall" old_prefab_name="bo_siege_wall">
              <transform rotation_euler="0.000, 0.000, 1.590" scale="0.368, 0.368, 0.367" />
              <physics shape="bo_sphere_collider" mass="1.000" />
            </game_entity>
            <game_entity name="map_icons_empire_wall_small_breach_l1" old_prefab_name="map_icons_empire_wall_small_breach_l1">
              <tags>
                <tag name="map_broken_wall" />
              </tags>
              <transform position="0.010, 0.012, 0.000" rotation_euler="0.000, 0.000, 0.000" scale="1.000, 0.988, 1.000" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_1s_collapsed" />
              </components>
            </game_entity>
            <game_entity name="map_icons_empire_wall_small_l1" old_prefab_name="map_icons_empire_wall_small_l1">
              <tags>
                <tag name="map_solid_wall" />
              </tags>
              <transform position="0.028, 0.018, 0.028" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_1s" />
              </components>
            </game_entity>
          </children>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l2" old_prefab_name="map_icons_empire_tower_l2">
          <transform position="0.467, -5.566, -0.841" rotation_euler="0.000, 0.000, -0.006" scale="1.202, 1.202, 1.202" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l2" old_prefab_name="map_icons_empire_tower_l2">
          <transform position="0.467, -5.566, 0.539" rotation_euler="0.000, 0.000, -0.006" scale="0.755, 0.755, 0.755" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="1.391, -4.428, -0.340" rotation_euler="0.000, 0.000, 2.505" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l2" old_prefab_name="map_icons_empire_tower_l2">
          <transform position="1.997, -3.583, -0.503" rotation_euler="0.000, 0.000, 0.571" scale="0.872, 0.872, 0.872" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="2.967, -2.747, -0.357" rotation_euler="0.000, 0.000, 2.327" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="3.592, -1.830, -0.169" rotation_euler="0.000, 0.000, -2.988" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l2" old_prefab_name="map_icons_empire_square_tower_l2">
          <transform position="3.321, -1.363, -0.169" rotation_euler="0.000, 0.000, 0.190" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="5.213, -0.994, -0.021" rotation_euler="0.000, 0.000, 1.780" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l2" old_prefab_name="map_icons_empire_square_tower_l2">
          <transform position="6.033, -0.845, -0.414" rotation_euler="0.000, 0.000, 0.189" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="4.233, -1.208, -0.021" rotation_euler="0.000, 0.000, 1.780" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="2.836, -1.512, -0.021" rotation_euler="0.000, 0.000, 1.780" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="1.869, -1.405, -0.025" rotation_euler="0.000, 0.000, 0.456" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_small_gatehouse_l2" old_prefab_name="map_icons_empire_small_gatehouse_l2">
          <transform position="1.537, -0.724, 0.101" rotation_euler="0.000, 0.000, 0.440" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_2_mini_gatehouse" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="1.056, 0.232, -0.527" rotation_euler="0.000, 0.000, 0.456" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="1.175, -0.004, -0.530" rotation_euler="0.000, 0.000, 0.456" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="1.410, 1.281, -0.523" rotation_euler="0.000, 0.000, -0.583" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="2.450, 2.873, -0.523" rotation_euler="0.000, 0.000, -0.583" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="3.156, 3.969, -0.526" rotation_euler="0.000, 0.000, -0.564" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l2" old_prefab_name="map_icons_empire_square_tower_l2">
          <transform position="3.185, 4.246, -0.012" rotation_euler="0.000, 0.000, -0.305" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="3.839, 3.438, -0.039" rotation_euler="0.000, 0.000, -2.600" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l2" old_prefab_name="map_icons_empire_square_tower_l2">
          <transform position="4.377, 2.848, -0.390" rotation_euler="0.000, 0.000, -0.581" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="5.140, 2.438, -0.215" rotation_euler="0.000, 0.000, -1.855" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="6.198, 1.301, -0.241" rotation_euler="0.000, 0.000, -2.921" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="6.330, 0.073, -0.051" rotation_euler="0.000, 0.000, 2.867" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="6.131, -0.647, -0.051" rotation_euler="0.000, 0.000, 2.866" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="2.322, 4.319, 0.190" rotation_euler="0.000, 0.000, -1.531" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="0.431, 4.248, 0.190" rotation_euler="0.000, 0.000, -1.531" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l2" old_prefab_name="map_icons_empire_square_tower_l2">
          <transform position="-0.532, 4.167, 0.127" rotation_euler="0.000, 0.000, 0.132" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="-1.375, 3.727, 0.168" rotation_euler="0.000, 0.000, -1.069" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="-3.047, 2.800, 0.168" rotation_euler="0.000, 0.000, -1.069" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l2" old_prefab_name="map_icons_empire_square_tower_l2">
          <transform position="-3.979, 2.308, 0.207" rotation_euler="0.000, 0.000, 0.531" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="-4.453, 1.979, 0.120" rotation_euler="0.000, 0.000, -0.807" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="-5.001, 1.449, 0.120" rotation_euler="0.000, 0.000, -0.807" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="-5.476, 0.872, 0.120" rotation_euler="0.000, 0.000, -0.585" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="-5.844, 0.262, 0.120" rotation_euler="0.000, 0.000, -0.489" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="-5.746, -0.194, 0.128" rotation_euler="0.000, 0.000, 0.984" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l2" old_prefab_name="map_icons_empire_square_tower_l2">
          <transform position="-5.184, -0.521, 0.061" rotation_euler="0.000, 0.000, 0.975" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="-4.812, -0.694, 0.089" rotation_euler="0.000, 0.000, 0.995" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="-4.148, -0.888, 0.089" rotation_euler="0.000, 0.000, 1.562" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="-3.735, -0.569, 0.119" rotation_euler="0.000, 0.000, -0.556" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_tower_l2" old_prefab_name="map_icons_empire_tower_l2">
          <transform position="-3.463, 0.256, 0.042" rotation_euler="0.000, 0.000, -0.329" scale="0.852, 0.852, 0.852" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_l2" old_prefab_name="map_icons_empire_wall_l2">
          <transform position="-4.090, 0.767, -0.273" rotation_euler="0.000, 0.000, 0.762" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="-3.801, -1.175, 0.119" rotation_euler="0.000, 0.000, 0.437" scale="1.000, 1.048, 1.000" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
          <transform position="-3.446, -1.864, 0.119" rotation_euler="0.000, 0.000, 0.503" scale="1.000, 1.038, 1.000" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_2s" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_keep_l2" old_prefab_name="map_icons_empire_keep_l2">
          <transform position="4.298, 0.828, -0.093" rotation_euler="0.000, 0.000, -0.234" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_keep_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="bo_town" old_prefab_name="__empty_object">
          <tags>
            <tag name="bo_town" />
          </tags>
          <transform position="0.952, 0.843, -4.516" rotation_euler="0.000, 0.000, 0.045" scale="7.168, 7.168, 7.168" />
          <physics shape="bo_sphere_collider" mass="1.000">
            <body_flags>
              <body_flag name="only_collide_with_raycast" />
            </body_flags>
          </physics>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_l3" old_prefab_name="map_icons_empire_wall_small_l3">
          <transform position="-2.710, -2.532, -0.090" rotation_euler="0.000, 0.000, 0.504" scale="1.000, 1.038, 1.000" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_wall_3s" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_breach_l2" old_prefab_name="map_icons_empire_wall_small_breach_l2">
          <tags>
            <tag name="map_breachable_wall" />
          </tags>
          <transform position="-0.223, -5.181, -0.072" rotation_euler="0.000, 0.000, 0.226" scale="1.139, 1.139, 1.139" />
          <physics mass="1.000" />
          <children>
            <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
              <tags>
                <tag name="map_solid_wall" />
              </tags>
              <transform position="-0.041, 0.026, 0.000" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_2s" />
              </components>
            </game_entity>
            <game_entity name="bo_siege_wall" old_prefab_name="bo_siege_wall">
              <transform position="-0.014, 0.036, 0.000" rotation_euler="0.000, 0.000, 1.590" scale="0.368, 0.368, 0.367" />
              <physics shape="bo_sphere_collider" mass="1.000" />
            </game_entity>
            <game_entity name="map_icons_empire_wall_small_breach_l2" old_prefab_name="map_icons_empire_wall_small_breach_l2">
              <tags>
                <tag name="map_broken_wall" />
              </tags>
              <transform position="-0.006, 0.029, 0.000" rotation_euler="0.000, 0.000, 0.000" scale="0.925, 0.963, 1.000" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_2s_collapsed" />
              </components>
            </game_entity>
          </children>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_wall_small_breach_l2" old_prefab_name="map_icons_empire_wall_small_breach_l2">
          <tags>
            <tag name="map_breachable_wall" />
          </tags>
          <transform position="-0.599, -4.593, -0.088" rotation_euler="0.000, 0.000, 0.964" scale="1.139, 1.139, 1.139" />
          <physics mass="1.000" />
          <children>
            <game_entity name="map_icons_empire_wall_small_l2" old_prefab_name="map_icons_empire_wall_small_l2">
              <tags>
                <tag name="map_solid_wall" />
              </tags>
              <transform position="-0.041, 0.026, 0.000" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_2s" />
              </components>
            </game_entity>
            <game_entity name="bo_siege_wall" old_prefab_name="bo_siege_wall">
              <transform position="-0.014, 0.036, 0.000" rotation_euler="0.000, 0.000, 1.590" scale="0.368, 0.368, 0.367" />
              <physics shape="bo_sphere_collider" mass="1.000" />
            </game_entity>
            <game_entity name="map_icons_empire_wall_small_breach_l2" old_prefab_name="map_icons_empire_wall_small_breach_l2">
              <tags>
                <tag name="map_broken_wall" />
              </tags>
              <transform position="-0.006, 0.029, 0.000" rotation_euler="0.000, 0.000, 0.000" scale="0.925, 0.963, 1.000" />
              <physics mass="1.000" />
              <components>
                <meta_mesh_component name="mi_emp_wall_2s_collapsed" />
              </components>
            </game_entity>
          </children>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l1" old_prefab_name="map_icons_empire_square_tower_l1">
          <transform position="-4.091, 2.329, -0.440" rotation_euler="0.000, 0.000, 0.704" scale="1.201, 1.201, 1.201" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l2" old_prefab_name="map_icons_empire_square_tower_l2">
          <transform position="-3.979, 2.308, -1.720" rotation_euler="0.000, 0.000, 0.531" scale="1.497, 1.497, 1.497" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_square_tower_l1" old_prefab_name="map_icons_empire_square_tower_l1">
          <transform position="3.257, 4.199, -0.830" rotation_euler="0.000, 0.000, 0.934" scale="1.417, 1.417, 1.417" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_emp_square_tower_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
      </children>
    </game_entity>
    <game_entity name="village_M1_1" old_prefab_name="">
      <transform position="353.376, 433.570, 10.55" rotation_euler="0.000, 0.000, 2.109" scale="1.000, 1.000, 1.000" />
      <physics mass="1.000" />
      <children>
        <game_entity name="map_icons_empire_village_l2" old_prefab_name="map_icons_empire_village_l2">
          <transform position="-0.310, 0.100, 0.040" rotation_euler="0.000, 0.000, 0.000" scale="0.400, 0.400, 0.400" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="village_empire_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_village_l3" old_prefab_name="map_icons_empire_village_l3">
          <transform position="-0.122, 0.000, -0.010" non_orthogonal_rotation_mat="0.998197, 0.001531, -0.059994, 0.001656, 0.999422, 0.033959, 0.093448, -0.052939, 0.994216" scale="0.400, 0.400, 0.401" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="village_empire_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="_bo" old_prefab_name="_bo">
          <transform position="-0.005, 0.004, -0.031" rotation_euler="0.000, 0.000, 1.500" scale="4.200, 4.200, 4.200" />
          <physics shape="bo_barrier_sphere" mass="1.000">
            <body_flags>
              <body_flag name="only_collide_with_raycast" />
            </body_flags>
          </physics>
          <additional_features>
            <feature name="apply_factor_color_to_all_components" value="true">
              <factor value="0.465, 0.002, 0.062, 1.000" />
            </feature>
          </additional_features>
        </game_entity>
        <game_entity name="map_icons_empire_village_l1" old_prefab_name="map_icons_empire_village_l1">
          <transform position="-0.410, 0.150, 0.050" rotation_euler="0.000, 0.000, 0.000" scale="0.400, 0.400, 0.400" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="village_empire_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_village_looted" old_prefab_name="map_icons_empire_village_looted">
          <transform position="-0.460, 0.120, 0.016" rotation_euler="0.000, 0.000, 0.020" scale="0.400, 0.400, 0.400" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="village_empire_1">
              <mesh name="village_empire_1.0" factor="4282598211" />
              <mesh name="village_empire_1.1" factor="4282598211" />
              <mesh name="village_empire_1.2" factor="4282598211" />
              <mesh name="village_empire_1.3" factor="4282598211" />
              <mesh name="village_empire_1.4" factor="4282598211" />
              <mesh name="village_empire_1.5" factor="4282598211" />
              <mesh name="village_empire_1.6" factor="4282598211" />
              <mesh name="village_empire_1.7" factor="4282598211" />
              <mesh name="village_empire_1.8" factor="4282598211" />
              <mesh name="village_empire_1.9" factor="4282598211" />
              <mesh name="village_empire_1.10" factor="4282598211" />
              <mesh name="village_empire_1.11" factor="4282598211" />
              <mesh name="village_empire_1.12" factor="4282598211" />
              <mesh name="village_empire_1.13" factor="4282598211" />
              <mesh name="village_empire_1.14" factor="4282598211" />
            </meta_mesh_component>
          </components>
          <children>
            <game_entity name="siege_fire_particle_e" old_prefab_name="siege_fire_particle_e">
              <transform position="-0.055, 0.076, 0.000" rotation_euler="0.000, 0.000, 0.000" scale="2.326, 2.273, 2.326" />
              <physics mass="1.000" />
              <components>
                <particle_system_instanced_component>
                  <effect_ref base_effect="{39CDECB3-046B-4A8B-8E71-533BB7F6C882}" />
                </particle_system_instanced_component>
              </components>
              <levels>
                <level name="looted" />
              </levels>
            </game_entity>
          </children>
          <levels>
            <level name="level_1" />
            <level name="level_2" />
            <level name="level_3" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_production_lumberjack_a" old_prefab_name="map_icons_production_lumberjack_a">
          <transform position="-1.417, 1.465, 0.016" non_orthogonal_rotation_mat="-0.850883, 0.501579, 0.156257, -0.472694, -0.870034, 0.140005, 0.312295, 0.068566, 0.947508" scale="0.642, 0.643, 0.527" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_lumberjack_a" />
          </components>
          <scripts>
            <script name="sound_emitter">
              <variables>
                <variable name="Event Path" value="event:/map/ambient/node/settlements/lumberjack" />
                <variable name="Overrided Parameters" value="false" />
                <variable name="Play On Startup" value="true" />
                <variable name="Overrided Max Distance" value="40.000000" />
                <variable name="Overrided Min Distance" value="1.500000" />
                <variable name="Overrided Volume" value="0.000000" />
                <variable name="Overrided Pitch" value="1.000000" />
              </variables>
            </script>
          </scripts>
          <levels>
            <level name="level_1" />
            <level name="level_2" />
            <level name="level_3" />
            <level name="civilian" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_production_lumberjack_b" old_prefab_name="map_icons_production_lumberjack_b">
          <transform position="2.325, -0.385, -0.210" non_orthogonal_rotation_mat="0.334827, -0.940767, 0.053370, 0.908053, 0.297003, -0.295347, 0.385082, 0.216575, 0.897110" scale="0.685, 0.670, 0.569" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_lumberjack_b" />
          </components>
          <scripts>
            <script name="sound_emitter">
              <variables>
                <variable name="Event Path" value="event:/map/ambient/node/settlements/lumberjack" />
                <variable name="Overrided Parameters" value="false" />
                <variable name="Play On Startup" value="true" />
                <variable name="Overrided Max Distance" value="40.000000" />
                <variable name="Overrided Min Distance" value="1.500000" />
                <variable name="Overrided Volume" value="0.000000" />
                <variable name="Overrided Pitch" value="1.000000" />
              </variables>
            </script>
          </scripts>
          <levels>
            <level name="level_2" />
            <level name="level_3" />
            <level name="civilian" />
          </levels>
        </game_entity>
        <game_entity prefab="map_icons_production_lumberjack_d" _index_="7">
          <transform position="0.565, -3.176, -0.071" non_orthogonal_rotation_mat="0.985960, -0.052849, -0.158398, 0.038568, 0.997492, -0.059353, 0.246726, 0.080249, 0.965757" scale="0.665, 0.669, 0.543" />
          <scripts>
            <script name="sound_emitter">
              <variables>
                <variable name="Overrided Max Distance" value="40.000000" />
                <variable name="Overrided Min Distance" value="1.500000" />
              </variables>
            </script>
          </scripts>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
          </levels>
        </game_entity>
      </children>
      <levels>
        <level name="level_1" />
        <level name="level_2" />
        <level name="level_3" />
        <level name="civilian" />
        <level name="siege" />
        <level name="looted" />
      </levels>
    </game_entity>
    <game_entity name="village_M1_2" old_prefab_name="">
      <transform position="368.450, 426.103, 9.590" rotation_euler="0.0, 0.000, 1.509" scale="1.000, 1.000, 1.000" />
      <physics mass="1.000" />
      <children>
        <game_entity name="map_icons_empire_village_l2" old_prefab_name="map_icons_empire_village_l2">
          <transform position="-0.310, 0.100, 0.040" rotation_euler="0.000, 0.000, 0.000" scale="0.400, 0.400, 0.400" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="village_empire_2" />
          </components>
          <levels>
            <level name="level_2" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_village_l3" old_prefab_name="map_icons_empire_village_l3">
          <transform position="-0.122, 0.000, -0.010" non_orthogonal_rotation_mat="0.998197, 0.001531, -0.059994, 0.001656, 0.999422, 0.033959, 0.093448, -0.052939, 0.994216" scale="0.400, 0.400, 0.401" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="village_empire_3" />
          </components>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="_bo" old_prefab_name="_bo">
          <transform position="-0.005, 0.004, -0.031" rotation_euler="0.000, 0.000, 1.500" scale="4.200, 4.200, 4.200" />
          <physics shape="bo_barrier_sphere" mass="1.000">
            <body_flags>
              <body_flag name="only_collide_with_raycast" />
            </body_flags>
          </physics>
          <additional_features>
            <feature name="apply_factor_color_to_all_components" value="true">
              <factor value="0.465, 0.002, 0.062, 1.000" />
            </feature>
          </additional_features>
        </game_entity>
        <game_entity name="map_icons_empire_village_l1" old_prefab_name="map_icons_empire_village_l1">
          <transform position="-0.410, 0.150, 0.050" rotation_euler="0.000, 0.000, 0.000" scale="0.400, 0.400, 0.400" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="village_empire_1" />
          </components>
          <levels>
            <level name="level_1" />
            <level name="civilian" />
            <level name="siege" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_empire_village_looted" old_prefab_name="map_icons_empire_village_looted">
          <transform position="-0.460, 0.120, 0.016" rotation_euler="0.000, 0.000, 0.020" scale="0.400, 0.400, 0.400" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="village_empire_1">
              <mesh name="village_empire_1.0" factor="4282598211" />
              <mesh name="village_empire_1.1" factor="4282598211" />
              <mesh name="village_empire_1.2" factor="4282598211" />
              <mesh name="village_empire_1.3" factor="4282598211" />
              <mesh name="village_empire_1.4" factor="4282598211" />
              <mesh name="village_empire_1.5" factor="4282598211" />
              <mesh name="village_empire_1.6" factor="4282598211" />
              <mesh name="village_empire_1.7" factor="4282598211" />
              <mesh name="village_empire_1.8" factor="4282598211" />
              <mesh name="village_empire_1.9" factor="4282598211" />
              <mesh name="village_empire_1.10" factor="4282598211" />
              <mesh name="village_empire_1.11" factor="4282598211" />
              <mesh name="village_empire_1.12" factor="4282598211" />
              <mesh name="village_empire_1.13" factor="4282598211" />
              <mesh name="village_empire_1.14" factor="4282598211" />
            </meta_mesh_component>
          </components>
          <children>
            <game_entity name="siege_fire_particle_e" old_prefab_name="siege_fire_particle_e">
              <transform position="-0.055, 0.076, 0.000" rotation_euler="0.000, 0.000, 0.000" scale="2.326, 2.273, 2.326" />
              <physics mass="1.000" />
              <components>
                <particle_system_instanced_component>
                  <effect_ref base_effect="{39CDECB3-046B-4A8B-8E71-533BB7F6C882}" />
                </particle_system_instanced_component>
              </components>
              <levels>
                <level name="looted" />
              </levels>
            </game_entity>
          </children>
          <levels>
            <level name="level_1" />
            <level name="level_2" />
            <level name="level_3" />
            <level name="looted" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_production_lumberjack_a" old_prefab_name="map_icons_production_lumberjack_a">
          <transform position="-1.417, 1.465, 0.016" non_orthogonal_rotation_mat="-0.850883, 0.501579, 0.156257, -0.472694, -0.870034, 0.140005, 0.312295, 0.068566, 0.947508" scale="0.642, 0.643, 0.527" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_lumberjack_a" />
          </components>
          <scripts>
            <script name="sound_emitter">
              <variables>
                <variable name="Event Path" value="event:/map/ambient/node/settlements/lumberjack" />
                <variable name="Overrided Parameters" value="false" />
                <variable name="Play On Startup" value="true" />
                <variable name="Overrided Max Distance" value="40.000000" />
                <variable name="Overrided Min Distance" value="1.500000" />
                <variable name="Overrided Volume" value="0.000000" />
                <variable name="Overrided Pitch" value="1.000000" />
              </variables>
            </script>
          </scripts>
          <levels>
            <level name="level_1" />
            <level name="level_2" />
            <level name="level_3" />
            <level name="civilian" />
          </levels>
        </game_entity>
        <game_entity name="map_icons_production_lumberjack_b" old_prefab_name="map_icons_production_lumberjack_b">
          <transform position="2.325, -0.385, -0.210" non_orthogonal_rotation_mat="0.334827, -0.940767, 0.053370, 0.908053, 0.297003, -0.295347, 0.385082, 0.216575, 0.897110" scale="0.685, 0.670, 0.569" />
          <physics mass="1.000" />
          <components>
            <meta_mesh_component name="mi_lumberjack_b" />
          </components>
          <scripts>
            <script name="sound_emitter">
              <variables>
                <variable name="Event Path" value="event:/map/ambient/node/settlements/lumberjack" />
                <variable name="Overrided Parameters" value="false" />
                <variable name="Play On Startup" value="true" />
                <variable name="Overrided Max Distance" value="40.000000" />
                <variable name="Overrided Min Distance" value="1.500000" />
                <variable name="Overrided Volume" value="0.000000" />
                <variable name="Overrided Pitch" value="1.000000" />
              </variables>
            </script>
          </scripts>
          <levels>
            <level name="level_2" />
            <level name="level_3" />
            <level name="civilian" />
          </levels>
        </game_entity>
        <game_entity prefab="map_icons_production_lumberjack_d" _index_="7">
          <transform position="0.565, -3.176, -0.071" non_orthogonal_rotation_mat="0.985960, -0.052849, -0.158398, 0.038568, 0.997492, -0.059353, 0.246726, 0.080249, 0.965757" scale="0.665, 0.669, 0.543" />
          <scripts>
            <script name="sound_emitter">
              <variables>
                <variable name="Overrided Max Distance" value="40.000000" />
                <variable name="Overrided Min Distance" value="1.500000" />
              </variables>
            </script>
          </scripts>
          <levels>
            <level name="level_3" />
            <level name="civilian" />
          </levels>
        </game_entity>
      </children>
      <levels>
        <level name="level_1" />
        <level name="level_2" />
        <level name="level_3" />
        <level name="civilian" />
        <level name="siege" />
        <level name="looted" />
      </levels>
    </game_entity>
```
