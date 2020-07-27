# Culture

## Parent node
- [SPCultures](../../SPCultures)

## Child node
- [female_names](female_names)
- [male_names](male_names)
- [clan_names](clan_names)

## Attributes
[id](#id) | [name](#name) | [is_main_culture](#is_main_culture) | [color](#color) | [color2](#color2) | [elite_basic_troop](#elite_basic_troop) | [basic_troop](#basic_troop) | [melee_militia_troop](#melee_militia_troop) | [ranged_militia_troop](#ranged_militia_troop) | [melee_elite_militia_troop](#melee_elite_militia_troop) | [ranged_elite_militia_troop](#ranged_elite_militia_troop) | [can_have_settlement](#can_have_settlement) | [town_edge_number](#town_edge_number) | [villager_party_template](#villager_party_template) | [default_party_template](#default_party_template) | [caravan_party_template](#caravan_party_template) | [elite_caravan_party_template](#elite_caravan_party_template) | [militia_party_template](#militia_party_template) | [rebels_party_template](#rebels_party_template) | [prosperity_bonus](#prosperity_bonus) | [encounter_background_mesh](#encounter_background_mesh) | [default_face_key](#default_face_key) | [text](#text) | [tournament_master](#tournament_master) | [villager](#villager) | [caravan_master](#caravan_master) | [armed_trader](#armed_trader) | [caravan_guard](#caravan_guard) | [veteran_caravan_guard](#veteran_caravan_guard) | [duel_preset](#duel_preset) | [prison_guard](#prison_guard) | [guard](#guard) | [steward](#steward) | [blacksmith](#blacksmith) | [weaponsmith](#weaponsmith) | [townswoman](#townswoman) | [townswoman_infant](#townswoman_infant) | [townswoman_child](#townswoman_child) | [townswoman_teenager](#townswoman_teenager) | [townsman](#townsman) | [townsman_infant](#townsman_infant) | [townsman_child](#townsman_child) | [townsman_teenager](#townsman_teenager) | [ransom_broker](#ransom_broker) | [gangleader_bodyguard](#gangleader_bodyguard) | [merchant_notary](#merchant_notary) | [artisan_notary](#artisan_notary) | [preacher_notary](#preacher_notary) | [rural_notable_notary](#rural_notable_notary) | [shop_worker](#shop_worker) | [tavernkeeper](#tavernkeeper) | [taverngamehost](#taverngamehost) | [musician](#musician) | [tavern_wench](#tavern_wench) | [armorer](#armorer) | [horseMerchant](#horsemerchant) | [merchant](#merchant) | [beggar](#beggar) | [female_beggar](#female_beggar) | [female_dancer](#female_dancer) | [gear_practice_dummy](#gear_practice_dummy) | [weapon_practice_stage_1](#weapon_practice_stage_1) | [weapon_practice_stage_2](#weapon_practice_stage_2) | [weapon_practice_stage_3](#weapon_practice_stage_3) | [gear_dummy](#gear_dummy) | [militia_bonus](#militia_bonus) | [is_bandit](#is_bandit) | [bandit_chief](#bandit_chief) | [bandit_raider](#bandit_raider) | [bandit_bandit](#bandit_bandit) | [bandit_boss](#bandit_boss) | [bandit_boss_party_template](#bandit_boss_party_template)

- #### id
  **类型:** `string`  
  **例子:**  `empire`  
  *The ID of the culture (faction)*  
  
- #### name
  **类型:**  `string`  
  **例子:**  `{=FjwRsf1C}Vlandia`  
  *Note: The prefix in the `{=}` format is the translation id found in strings.txt*  
  *TODO: Find out if this is auto generated.*  

- #### is_main_culture
  **类型:** `boolean`  
  **接受值:** `true` | `false`
  **例子:**  `false`  
  *If the culture is a major (true) or a minor (false) faction*  
  
- #### color
  **类型:** `hex`  
  **例子:**  `FF4E3A55`  
  *The color of the faction. TODO: figure out where the colour is displayed*
  
- #### color2
  **类型:** `hex`  
  **例子:**  `FF4E3A55`  
  *The secondary color of the faction. TODO: figure out where the colour is displayed*

- #### elite_basic_troop
  **类型:** `reference`  
  **例子:**  `NPCCharacter.imperial_vigla_recruit`  
  *Reference to the NPCCharacter XML node. The Elite Recruit troop of the faction.*   
  
- #### basic_troop
  **类型:** `reference`  
  **例子:**  `NPCCharacter.imperial_recruit`  
  *Reference to the NPCCharacter XML node. The Recruit troop of the faction.* 
    
- #### melee_militia_troop
  **类型:** `reference`  
  **例子:**  `NPCCharacter.imperial_recruit`  
  *Reference to the NPCCharacter XML node.*    
      
- #### ranged_militia_troop
  **类型:** `reference`  
  **例子:**  `NPCCharacter.imperial_recruit`  
  *Reference to the NPCCharacter XML node.*    
  
- #### melee_elite_militia_troop
  **类型:** `reference`  
  **例子:**  `NPCCharacter.imperial_recruit`  
  *Reference to the NPCCharacter XML node.*  
  
- #### ranged_elite_militia_troop
  **类型:** `reference`  
  **例子:**  `NPCCharacter.imperial_recruit`  
  *Reference to the NPCCharacter XML node.*  
   
- #### can_have_settlement
  **类型:** `reference`  
  **接受值:** `true` | `false`  
  **例子:**  `true`  
  *If the faction can have settlements on the map.*  
   
- #### town_edge_number
  **类型:** `int`  
  **例子:**  `16`  
  *TODO: figure out what this does.*      
   
- #### villager_party_template
  **类型:** `reference`  
  **例子:**  `PartyTemplate.villager_empire_template`  
  *Villagers template reference to PartyTemplate XML node*      
     
- #### default_party_template
  **类型:** `reference`  
  **例子:**  `PartyTemplate.villager_empire_template`  
  *Default template reference to PartyTemplate XML node* 
     
- #### caravan_party_template
  **类型:** `reference`  
  **例子:**  `PartyTemplate.villager_empire_template`  
  *Caravan template reference to PartyTemplate XML node* 
     
- #### elite_caravan_party_template
  **类型:** `reference`  
  **例子:**  `PartyTemplate.villager_empire_template`  
  *Elite Caravan template reference to PartyTemplate XML node* 
     
- #### militia_party_template
  **类型:** `reference`  
  **例子:**  `PartyTemplate.villager_empire_template`  
  *Militia template reference to PartyTemplate XML node* 
     
- #### rebels_party_template
  **类型:** `reference`  
  **例子:**  `PartyTemplate.villager_empire_template`  
  *Rebels template reference to PartyTemplate XML node* 
     
- #### prosperity_bonus
  **类型:** `int`  
  **例子:**  `1`  
  *Bonus to the prosperity of a faction* 
     
- #### encounter_background_mesh
  **类型:** `reference`  
  **例子:**  `encounter_empire`  
  *Encounter background* 
     
- #### default_face_key
  **类型:** `face_code`  
  **例子:**  `000fa92e90004202aced5d976886573d5d679585a376fdd605877a7764b8987c00000000000007520000037f0000000f00000037049140010000000000000000`  
  *Default face keys for faction* 
     
- #### text
  **类型:** `string`  
  **例子:**  `{=X0kKBzsW}Lorem Ipsum Dol Amor`  
  *Description of the faction* 

- #### tournament_master
  **类型:** `reference`  
  **例子:**  `NPCCharacter.tournament_master_empire`  
  *Reference to the tournament master NPCCharacter XML node.*   

- #### villager
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### caravan_master
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### armed_trader
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### caravan_guard
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### veteran_caravan_guard
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### duel_preset
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### prison_guard
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### guard
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### steward
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### blacksmith
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### weaponsmith
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### townswoman
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### townswoman_infant
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### townswoman_child
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### townswoman_teenager
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### townsman
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### townsman_infant
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### townsman_child
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### townsman_teenager
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### ransom_broker
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### gangleader_bodyguard
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### merchant_notary
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### artisan_notary
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### preacher_notary
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### rural_notable_notary
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### shop_worker
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### tavernkeeper
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### taverngamehost
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### musician
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### tavern_wench
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### armorer
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### horseMerchant
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### merchant
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### beggar
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### female_beggar
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### female_dancer
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### gear_practice_dummy
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### weapon_practice_stage_1
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### weapon_practice_stage_2
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### weapon_practice_stage_3
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      

- #### gear_dummy
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      
  
- #### militia_bonus
  **类型:** `int`  
  **例子:**  `1`  
  *TODO: figure out what exactly this bonus does.*      

- #### is_bandit
  **类型:** `int`  
  **接受值:** `true` | `false`  
  **default:** `false`  
  **例子:**  `1`  
  *TODO: figure out what exactly this bonus does.*      
 
- #### bandit_chief
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      
 
- #### bandit_raider
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      
 
- #### bandit_bandit
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      
 
- #### bandit_boss
  **类型:** `reference`  
  **例子:**  `NPCCharacter.villager_empire`  
  *Reference to the NPCCharacter XML node.*      
     
- #### bandit_boss_party_template
  **类型:** `reference`  
  **例子:**  `PartyTemplate.sea_raiders_boss_party_template`  
  *Bandit boss party template reference to PartyTemplate XML node* 
