# NPCCharacter（NPC角色）
（译者注：不单单指玩家在酒馆里招的同伴）

## 父节点
- [NPCCharacters](../../NPCCharacters)

## 子节点
- [equipment](equipment)
- [equipmentSet](equipmentSet)
- [face](face)
- [skills](skills)
- [Traits](Traits)
- [upgrade_targets](upgrade_targets)

## 属性
[id](#id) | [name](#name) | [default_group](#default_group) | [is_hero](#is_hero) | [civilianTemplate](#civiliantemplate) | [occupation](#occupation) | [culture](#culture) | [skill_template](#skill_template) | [skill_template](#skill_template_1) | [is_female](#is_female) | [level](#level) | [is_basic_troop](#is_basic_troop) | [upgrade_requires](#upgrade_requires) | [formation_position_preference](#formation_position_preference) | [battleTemplate](#battletemplate) | [age](#age) | [voice](#voice)

- #### id
  **数据类型:**  `string`  
  **例子:**  `npc_wanderer_equipment_template_aserai`  
  *NPC的ID用于游戏引用人物*  
  
- #### name
  **数据类型:**  `string`  
  **例子:**  `{=wW3iouiU}Hijab`  
  *注意: 在 `{=}`格式中前缀，是在strings.txt中的翻译id。*  
  
- #### default_group
  **数据类型:**  `string`  
  **可选取值:**  `Infantry` | `General` | `Ranged` | `HorseArcher` | `Cavalry`  
  **例子:**  `Infantry`    
  *不区分大小写。 命令NPC时所属的默认组。*    
  
- #### is_hero
  **数据类型:**  `boolean`  
  **可接受取值:**  `true` | `false`  
  **例子:**  `true`    
  *待办: 去找找它到底有什么作用*    
  
- #### civilianTemplate
  **数据类型:**  `reference`  
  **例子:**  `NPCCharacter.npc_wanderer_equipment_template_empire`    
  *引用对应着某个市民装备模板.*    
  
- #### occupation
  **数据类型:**  `string`  
  **可选取值:**  `Wanderer` | `Soldier` | `Townsfolk` | `Mercenary` | `Gangster` | `PrisonGuard` | `Judge` | `Blacksmith` | `Weaponsmith` | `NotAssigned` | `RansomBroker` | `ShopKeeper` | `ShopWorker` | `Tavernkeeper` | `TavernGameHost` | `Musician` | `TavernWench` | `Armorer` | `HorseTrader` | `GoodsTrader` | `ArenaMaster` | `Villager` | `CaravanGuard` | `BannerBearer`  
  **例如:**  `Wanderer`    
  *NPC的职业*    
  
- #### culture
  **数据类型:**  `string`  
  **可选取值:**  `Culture.empire` | `Culture.aserai` | `Culture.sturgia` | `Culture.khuzait` | `Culture.battania` | `Culture.vlandia` | `Culture.darshi` | `Culture.nord` | `Culture.vakken` | `Culture.neutral_culture`   
  **例子:**  `Culture.empire`    
  *NPC所属的派系*    

- #### skill_template
  **数据类型:**  `reference`  
  **例子:**  `NPCCharacter.infantry_heavyinfantry_level1_template_skills`    
  *引用对应着某个技能加点模板*    
  
- #### is_female
  **数据类型:**  `boolean`  
  **可接受取值:**  `true` | `false`  
  **例子:**  `true`    
  *NPC是否为女性*    
  
- #### level
  **数据类型:**  `int`  
  **例子:**  `5`    
  *NPC的等级*    
  
- #### is_basic_troop
  **数据类型:**  `boolean`  
  **可接受取值:**  `true` | `false`  
  **例子:**  `true`    
  *待办: 搞清楚这个是干嘛的*    
  
- #### upgrade_requires
  **数据类型:**  `ItemCategory reference`  
  **可选取值:**  `ItemCategory.horse` | `ItemCategory.war_horse`   
  **例子:**  `ItemCategory.horse`    
  *NPC升级必须的物品*    
  
- #### formation_position_preference
  **数据类型:**  `Formation reference`  
  **可能取值:**  `Back`   
  **例子:**  `Back`    
  *阵地位置偏好*    
  
- #### battleTemplate
  **数据类型:**  `NPCCharacter reference`  
  **例子:**  `NPCCharacter.npc_wanderer_equipment_template_empire`    
  *战役装备模板*    
  
- #### age
  **数据类型:**  `int`  
  **例子:**  `45`    
  *NPC的年龄*    
  
- #### voice
  **数据类型:**  `string`  
  **可选取值:**  `curt`   
  **例子:**  `curt`    
  *NPC的声线类型*    
  
