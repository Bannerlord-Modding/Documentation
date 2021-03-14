# Armor

## Parent Node
- [ItemComponent](../../ItemComponent)

## Child Node
- *None*

## Attributes
[head_armor](#head_armor) | [has_gender_variations](#has_gender_variations) | [hair_cover_type](#hair_cover_type) | [modifier_group](#modifier_group) | [material_type](#material_type) | [beard_cover_type](#beard_cover_type) | [body_armor](#body_armor) | [leg_armor](#leg_armor) | [arm_armor](#arm_armor) | [covers_body](#covers_body) | [body_mesh_type](#body_mesh_type) | [covers_legs](#covers_legs) | [family_type](#family_type) | [maneuver_bonus](#maneuver_bonus) | [speed_bonus](#speed_bonus) | [charge_bonus](#charge_bonus) | [reins_mesh](#reins_mesh) | [covers_head](#covers_head)

- #### head_armor
  **type:**  `int`   
  **example:** `64`  
  *Amount of head armour*  
  
- #### has_gender_variations
  **type:**  `boolean`   
  **example:** `true`  
  *If there is a gender variation of the model*  
  
- #### hair_cover_type
  **type:**  `string` 
  **accepted values:** `'all', 'type1', 'type2', 'type3'`  
  **example:** `all`  
  *TODO: figure out what type1, type2, type3 stands for*  
  *type1 - cover only top of head*
  *type2 - cover top of head with ears and have strap*
  *type3 - in common with arrow*
  
- #### modifier_group
  **type:**  `string`   
  **accepted values:** `'cloth_unarmoured', 'leather', 'plate', 'chain', 'cloth'`  
  **example:** `leather`  
  *Modifier for hit sound*  
  
- #### material_type
  **type:**  `string`   
  **accepted values:** `'Cloth', 'Leather', 'Plate', 'Chainmail'`  
  **example:** `Cloth`  
  *The material of the armour*  
  
- #### beard_cover_type
  **type:**  `string`   
  **accepted values:** `'type3', 'type2', 'none', 'all', 'type1'`  
  **example:** `none`  
  *Variable to set the covering of beard*  
  
- #### body_armor
  **type:**  `int`   
  **example:** `23`  
  *Amount of body armour*  
  
- #### leg_armor
  **type:**  `int`   
  **example:** `23`  
  *Amount of leg armour*  
  
- #### arm_armor
  **type:**  `int`   
  **example:** `23`  
  *Amount of hand (gauntlet) armour*  
  
- #### covers_body
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`  
  **example:** `true`  
  *If the armour covers the body*  
  
- #### body_mesh_type
  **type:**  `string`  
  **accepted values:** `'shoulders', 'upperbody'`  
  **example:** `shoulders`  
  *Uses for tunics and dresses*  
  
- #### covers_legs
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`  
  **example:** `true`  
  *If the armour covers the legs*  
  
- #### covers_hands
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`  
  **example:** `true`   
  *If the armour covers the hands*   
  
- #### mane_cover_type
  **type:**  `string`  
  **accepted values:** `'none', 'all'`  
  **example:** `none`  
  *none - don't cover horse's head and neck*  
  *all - cover whole horse*  
  
- #### family_type
  **type:**  `int`  
  **accepted values:** `'1', '2'`  
  **example:** `1` 
  *1 - horse saddle* 
  *2 - camel saddle*  
  
- #### maneuver_bonus
  **type:**  `int`   
  **example:** `12`  
  *Gives a bonus to the maneuverablity for horse*  
  
- #### speed_bonus
  **type:**  `int`   
  **example:** `11`  
  *Gives a bonus to the speed for horse?*  
  
- #### charge_bonus
  **type:**  `int`   
  **example:** `11`   
  *Gives a charging bonus for horse*  
  
- #### reins_mesh
  **type:**  `string`   
  **example:** `horse_harness_vlandia_b_rein`  
  *Mesh ID of the reins*  
  
- #### covers_head
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`  
  **example:** `true`  
  *If the armour covers the head*  
  