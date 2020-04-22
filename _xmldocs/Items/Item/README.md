# 物品 Item

## 例子
Source: Modules/SandBoxCore/ModuleData/spitems.xml
```xml
  <Item id="headscarf_d"
        name="{=wW3iouiU}Hijab"
        mesh="headscarf_d"
        culture="Culture.aserai"
        weight="0.5"
        appearance="0.5"
        Type="HeadArmor">
    <ItemComponent>
      <Armor head_armor="3"
             has_gender_variations="false"
             hair_cover_type="all"
             modifier_group="cloth_unarmoured"
             material_type="Cloth"
             beard_cover_type="type3" />
    </ItemComponent>
    <Flags Civilian="true"
           UseTeamColor="true" />
  </Item>
```

## Parent node
- [物品(类别) Items](../../Items)

## Child nodes
- [物品组件 ItemComponent](ItemComponent)
- [旗帜 Flags](Flags)

## Attributes  
[名称 name](#name) | [网格 mesh](#mesh) | [文化 culture](#culture) | [重量 weight](#weight) | [外观 appearance](#appearance) |  [类型 Type](#type) | [多人模式物品 multiplayer_item](#multiplayer_item) |  [子类型 subtype](#subtype) | [难度 difficulty](#difficulty) |  [(?) lod_atlas_index](#lod_atlas_index) | [是否商品 is_merchandise](#is_merchandise) | [模型名 body_name](#body_name) | [(?) recalculate_body](#recalculate_body) | [(?) prefab](#prefab) | [价值 value](#value) | [收起位置 item_holsters](#item_holsters) | [弹药位置偏移 AmmoOffset](#ammooffset) | [(?) holster_position_shift](#holster_position_shift) | [(?) holster_body_name](#holster_body_name) | [容器模型 holster_mesh](#holster_mesh) | [容器(带武器)模型 holster_mesh_with_weapon](#holster_mesh_with_weapon) | [投射物模型 flying_mesh](#flying_mesh) | [盾牌碰撞模型 shield_body_name](#shield_body_name) | [(?) using_tableau](#using_tableau) | [(?) has_lower_holster_priority](#has_lower_holster_priority) | [物品类别 item_category](#item_category) | [是否食物 IsFood](#isfood)

- #### name
  **类型:**  `string`  
  **范例:**  `{=wW3iouiU}Hijab`  
  *注意: 例子中的前缀 `{=}` 是string.txt中定义的翻译文本ID*  
  *尚不知晓翻译文本ID是否为自动生成的*  
  
- #### mesh
  **类型:**  `string`  
  **范例:** `headscarf_d`  
  *字符串为模型的ID*  
  *尚未找出模型的存储位置*  
  
- #### culture
  **类型:**  `string`  
  **可能的值:** `'Culture.aserai', 'Culture.sturgia', 'Culture.battania', 'Culture.looters', 'Culture.khuzait', 'Culture.vlandia', 'Culture.empire', 'Culture.neutral_culture'`  
  **范例:** `Culture.aserai`  
  
- #### weight
  **类型:**  `double`  
  **范例:** `0.5`  
  
- #### appearance
  **类型:**  `double`  
  **范例:** `0.5`  
  *待办: 找出这个属性的具体作用*  

- #### Type
  **类型:**  `ArmourType`  
  **可能的值:** `'HeadArmor', 'headArmor', 'Cape', 'BodyArmor', 'HandArmor', 'LegArmor', 'OneHandedWeapon', 'Bow', 'Polearm', 'Crossbow', 'Thrown', 'Arrows', 'Bolts', 'Shield', 'Horse', 'HorseHarness', 'Goods', 'Banner', 'Animal'`  
  **范例:** `HeadArmor`  
  
- #### multiplayer_item
  **类型:**  `boolean`  
  **可能的值:** `'true', 'false'`   
  **范例:** `false`  
  
- #### subtype
  **类型:**  `string`  
  **可能的值:** `'head_armor', 'body_armor', 'bow', 'two_handed_wpn', 'arrows', 'horse'`  
  **范例:** `head_armor`  
  *待办: 查明作用*  
  
- #### difficulty
  **类型:**  `int`  
  **可能的值:** `0-100`  
  **范例:** `80`  
  
- #### lod_atlas_index
  **类型:**  `int`  
  **范例:** `2`  
  *待办: 查明作用*    
  
- #### is_merchandise
  **类型:**  `boolean`  
  **范例:** `false`  
  *定义这件物品是否是商品（是否买得到）*
  
- #### body_name
  **类型:**  `id`  
  **范例:** `bo_mace_a`  
  *可能是武器的碰撞模型？ 待办: 查明作用*
  
- #### recalculate_body
  **类型:**  `boolean`  
  **可能的值:** `'true', 'false'`  
  **范例:** `false`  
  *待办: 查明作用*  
  
- #### prefab
  **类型:**  `id`  
  **范例:** `torch_a_wm_only_flame`  
  *待办: 查明作用 可能是粒子效果？* 
  
- #### value
  **类型:**  `int`  
  **范例:** `150`  
  *市场均价* 
  
- #### item_holsters
  **类型:**  `string`  
  **可能的值:** `'abdomen_left', 'bow_back_2:bow_hip:bow_hip_2:bow_back', 'bow_back:bow_back_2:bow_hip:bow_hip_2', 'sword_left_hip', 'polearm_back:polearm_back_2', 'bow_hip:bow_hip_2:bow_back:bow_back_2', 'crossbow_back:bow_hip:mace_right_hip:bow_hip_2', 'throwing_stone:throwing_stone_2', '', 'quiver_back_top:quiver_back_top_2', 'quiver_back_middle:quiver_bolts_2:quiver_bolts', 'quiver_back_lower:quiver_back_lower_2', 'quiver_back_middle:quiver_bolts:quiver_bolts_2', 'quiver_bolts:quiver_bolts_2:quiver_back_middle:quiver_back_top', 'quiver_back_middle:quiver_back_top:quiver_bolts:quiver_bolts_2', 'shield_round:shield_4', 'shield_oval:shield_4:shield_3:shield_2', 'shield:shield_2:shield_3:shield_4', 'shield_kite:shield_2:shield_3:shield_4'`  
  **范例:** `abdomen_left`  
  *收起状态下的携带位置*  
  
- #### AmmoOffset
  **类型:**  `vector3d`  
  **范例:** `0.0, 0.02131, 0.24675`  
  *投射物的起始位置？* 
  
- #### holster_position_shift
  **类型:**  `vector3d`   
  **范例:** `0.0,0.0,-0.0`  
  *待办: 查明作用（某种位置偏移）*  
  
- #### holster_body_name
  **类型:**  `string`   
  **范例:** `bo_axe_short`  
  *待办: 查明作用（模型）*  
  
- #### holster_mesh
  **类型:**  `string`   
  **范例:** `stone_holster`  
  *比如箭袋的模型*   
  
- #### holster_mesh_with_weapon
  **类型:**  `string`   
  **范例:** `stone_holster`  
  *比如插着剑的剑鞘的模型*  
  
- #### flying_mesh
  **类型:**  `string`   
  **范例:** `arrow_bl_flying`  
  *投射物模型* 
  
- #### shield_body_name
  **类型:**  `string`   
  **范例:** `bo_sturgia_shield_a`  
  *盾牌的碰撞模型*  
  
- #### using_tableau
  **类型:**  `boolean`   
  **范例:** `true`  
  *Whether the item has a tableau（不确定Tableau是什么）*  
  
- #### has_lower_holster_priority
  **类型:**  `boolean`   
  **范例:** `true`  
  *待办: 查明作用* 
  
- #### item_category
  **类型:**  `id`   
  **可能的值:** `'horse', 'sumpter_horse', 'war_horse', 'wool', 'silver', 'jewelry', 'salt', 'cotton', 'flax', 'clay', 'pottery', 'linen', 'leather', 'velvet', 'cheese', 'butter', 'fish', 'grape', 'date_fruit', 'olives', 'beer', 'wine', 'oil', 'fur', 'animal', 'sheep', 'cow', 'hog'`  
  **范例:** `horse`  
  *交易界面的类型*  

- #### IsFood
  **类型:**  `boolean`   
  **范例:** `true`  
  *能不能吃*  
