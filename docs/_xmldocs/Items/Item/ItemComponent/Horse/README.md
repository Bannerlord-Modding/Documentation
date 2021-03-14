# Horse

## Parent Node
- [ItemComponent](../../ItemComponent)

## Child Node
- [Materials](Materials)

## Attributes
[monster](#monster) | [maneuver](#maneuver) | [speed](#speed) | [charge_damage](#charge_damage) | [body_length](#body_length) | [is_mountable](#is_mountable) | [extra_health](#extra_health) | [skeleton_scale](#skeleton_scale) | [modifier_group](#modifier_group) | [is_pack_animal](#is_pack_animal) | [decorator_key_min](#decorator_key_min) | [decorator_key_max](#decorator_key_max) | [mane_mesh](#mane_mesh)
  
- #### monster
  **type:**  `string`  
  **accepted values:** `'Monster.horse', 'Monster.camel', 'Monster.mule', 'Monster.mule_unmountable', 'Monster.camel_unmountable', 'Monster.horse_2', 'Monster.cat', 'Monster.dog', 'Monster.sheep', 'Monster.cow', 'Monster.hog', 'Monster.goose', 'Monster.chicken'`  
  **example:** `Monster.horse`   
  *Skeleton of the animal*  
  
- #### maneuver
  **type:**  `int`   
  **example:** `73`  
  *Maneuverability of an animal*  
  
- #### speed
  **type:**  `int`   
  **example:** `73`  
  *Speed of an animal*  
  
- #### charge_damage
  **type:**  `int`   
  **example:** `73`  
  *Charge damage of an animal*  
  
- #### body_length
  **type:**  `int`   
  **example:** `73`  
  *Length of the body of an animal*  
  
- #### is_mountable
  **type:**  `boolean`   
  **accepted values:** `'true', 'false'`  
  **example:** `false`  
  *If an animal can be mounted*  
  
- #### extra_health
  **type:**  `int`   
  **example:** `81`  
  *Extra health of an animal. Can also be negative*  
  
- #### skeleton_scale
  **type:**  `string`   
  **accepted values:** `'aserai_horse', 'battania_horse', 'battania_horse' 'empire_horse', 'khuzait_horse', 'sturgia_horse', 'vlandia_horse'`  
  **example:** `aserai_horse`  
  *Predefined scales of a skeleton.*
  *Accepted values defined in Native\ModulesData\sceleton_scales.xml*  
  
- #### modifier_group
  **type:**  `string`   
  **accepted values:** `'cloth_unarmoured', 'leather', 'plate', 'horse',  
  'chain', 'cloth'`  
  **example:** `horse`  
  *Uses as loot casualities modifier*  
  
- #### is_pack_animal
  **type:**  `boolean`   
  **accepted values:** `'true', 'false'`  
  **example:** `false`  
  *Is the animal increase weight capacity*  
  
- #### decorator_key_min
  **type:**  `hex`    
  **example:** `0F`  
  *It seems like unused*  
  
- #### decorator_key_max
  **type:**  `hex`    
  **example:** `0F`  
  *It seems like unused*  
  
- #### mane_mesh
  **type:**  `id`    
  **example:** `horse_mane`  
  *Mesh ID of the manes*  
  