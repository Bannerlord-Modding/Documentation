# Scene

## Parent node
- [Scenes](../../Scenes)

## Child nodes
- [TerrainTypes](TerrainTypes)

## Attributes
[name](#name) | [terrain](#terrain) | [forest_density](#forest_density) | [is_siege_map](#is_siege_map) | [is_village_map](#is_village_map)

- #### name
  **类型:**  `string`  
  **例子:**  `{=!}battle_terrain_a (Plain)`  
  *The name of the scene*  

- #### terrain
  **类型:**  `string`  
  **possible values:** `Plain` | `Desert` | `Steppe` |  `Swamp` |  `Forest`
  **例子:**  `Plain`  
  *The terrain of the scene*  
  
- #### forest_density
  **类型:**  `string`  
  **possible values:** `Low` | `High`
  **例子:**  `Low`  
  *The forest density on the scene*  
  *Note: the value seems to be case insensitive*  
  
- #### is_siege_map
  **类型:**  `boolean`  
  **接受值:** `true` | `false`  
  **default value:** `false`  
  **例子:**  `true`  
  *If the scene is a Siege scene*  
  
- #### is_village_map
  **类型:**  `boolean`  
  **接受值:** `true` | `false`  
  **default value:** `false`  
  **例子:**  `true`  
  *If the scene is a Village scene*  
  