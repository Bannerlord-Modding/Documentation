# NPCCharacter

## Parent node
- [NPCCharacters](../../NPCCharacters)

## Child nodes
- [equipment](equipment)
- [equipmentSet](equipmentSet)
- [face](face)
- [skills](skills)
- [Traits](Traits)
- [upgrade_targets](upgrade_targets)

## Attributes
[id](#id) | [name](#name) | [default_group](#default_group) | [is_hero](#is_hero) | [civilianTemplate](#civiliantemplate) | [occupation](#occupation) | [culture](#culture) | [skill_template](#skill_template) | [skill_template](#skill_template_1) | [is_female](#is_female) | [level](#level) | [is_basic_troop](#is_basic_troop) | [upgrade_requires](#upgrade_requires) | [formation_position_preference](#formation_position_preference) | [battleTemplate](#battletemplate) | [age](#age) | [voice](#voice)

- #### id
  **type:**  `string`  
  **example:**  `npc_wanderer_equipment_template_aserai`  
  *The ID of the NPC for game reference*  
  
- #### name
  **type:**  `string`  
  **example:**  `{=wW3iouiU}Hijab`  
  *Note: The prefix in the `{=}` format is the translation id found in strings.txt*  
  
- #### default_group
  **type:**  `string`  
  **possible values:**  `Infantry` | `General` | `Ranged` | `HorseArcher` | `Cavalry`  
  **example:**  `Infantry`    
  *Case insensitive. The default group the NPC belongs to when giving orders.*    
  
- #### is_hero
  **type:**  `boolean`  
  **accepted values:**  `true` | `false`  
  **example:**  `true`    
  *TODO: find out what this exactly does*    
  
- #### civilianTemplate
  **type:**  `reference`  
  **example:**  `NPCCharacter.npc_wanderer_equipment_template_empire`    
  *The reference to a civilian equipment template.*    
  
- #### occupation
  **type:**  `string`  
  **possible values:**  `Wanderer` | `Soldier` | `Townsfolk` | `Mercenary` | `Gangster` | `PrisonGuard` | `Judge` | `Blacksmith` | `Weaponsmith` | `NotAssigned` | `RansomBroker` | `ShopKeeper` | `ShopWorker` | `Tavernkeeper` | `TavernGameHost` | `Musician` | `TavernWench` | `Armorer` | `HorseTrader` | `GoodsTrader` | `ArenaMaster` | `Villager` | `CaravanGuard` | `BannerBearer`  
  **example:**  `Wanderer`    
  *The occupation of the NPC*    
  
- #### culture
  **type:**  `string`  
  **possible values:**  `Culture.empire` | `Culture.aserai` | `Culture.sturgia` | `Culture.khuzait` | `Culture.battania` | `Culture.vlandia` | `Culture.darshi` | `Culture.nord` | `Culture.vakken` | `Culture.neutral_culture`   
  **example:**  `Culture.empire`    
  *The faction of the NPC*    

- #### skill_template
  **type:**  `reference`  
  **example:**  `NPCCharacter.infantry_heavyinfantry_level1_template_skills`    
  *The reference to a skills template.*    

- #### skill_template
  **type:**  `reference`  
  **example:**  `NPCCharacter.infantry_heavyinfantry_level1_template_skills`    
  *The reference to a skills template.*    
  
- #### is_female
  **type:**  `boolean`  
  **accepted values:**  `true` | `false`  
  **example:**  `true`    
  *If the NPC is a female*    
  
- #### level
  **type:**  `int`  
  **example:**  `5`    
  *The level of the NPC*    
  
- #### is_basic_troop
  **type:**  `boolean`  
  **accepted values:**  `true` | `false`  
  **example:**  `true`    
  *TODO: figure out what this is exactly for*    
  
- #### upgrade_requires
  **type:**  `ItemCategory reference`  
  **possible values:**  `ItemCategory.horse` | `ItemCategory.war_horse`   
  **example:**  `ItemCategory.horse`    
  *What item is required to upgrade the NPC*    
  
- #### formation_position_preference
  **type:**  `Formation reference`  
  **possible values:**  `Back`   
  **example:**  `Back`    
  *The formation position preference*    
  
- #### battleTemplate
  **type:**  `NPCCharacter reference`  
  **example:**  `NPCCharacter.npc_wanderer_equipment_template_empire`    
  *The battle equipment template*    
  
- #### age
  **type:**  `int`  
  **example:**  `45`    
  *The age of the NPC*    
  
- #### voice
  **type:**  `string`  
  **possible values:**  `curt`   
  **example:**  `curt`    
  *The voice preset for the NPC*    
  