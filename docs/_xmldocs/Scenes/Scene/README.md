# Scene

## Parent node
- [Scenes](../../Scenes)

## Child nodes
- [TerrainTypes](TerrainTypes)

## Attributes
[name](#name) | [terrain](#terrain) | [forest_density](#forest_density) | [is_siege_map](#is_siege_map) | [is_village_map](#is_village_map)

- #### name
  **type:**  `string`  
  **example:**  `{=!}battle_terrain_a (Plain)`  
  *The name of the scene*  

- #### terrain
  **type:**  `string`  
  **possible values:** `Plain` | `Desert` | `Steppe` |  `Swamp` |  `Forest`
  **example:**  `Plain`  
  *The terrain of the scene*  
  
- #### forest_density
  **type:**  `string`  
  **possible values:** `Low` | `High`
  **example:**  `Low`  
  *The forest density on the scene*  
  *Note: the value seems to be case insensitive*  
  
- #### is_siege_map
  **type:**  `boolean`  
  **accepted values:** `true` | `false`  
  **default value:** `false`  
  **example:**  `true`  
  *If the scene is a Siege scene*  
  
- #### is_village_map
  **type:**  `boolean`  
  **accepted values:** `true` | `false`  
  **default value:** `false`  
  **example:**  `true`  
  *If the scene is a Village scene*  
  
  
  



  