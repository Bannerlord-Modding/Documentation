# 防具 Armor

## 父节点 Parent Node
- [ItemComponent](../../ItemComponent)

## 子节点 Child Node
- *无 None*

## 属性 Attributes
[头部护甲 head_armor](#head_armor) | [男女不同模型 has_gender_variations](#has_gender_variations) | [遮盖头发模式 hair_cover_type](#hair_cover_type) | [修正类型 modifier_group](#modifier_group) | [材质类型 material_type](#material_type) | [遮盖胡子模式 beard_cover_type](#beard_cover_type) | [躯干护甲 body_armor](#body_armor) | [腿部护甲 leg_armor](#leg_armor) | [手部护甲 arm_armor](#arm_armor) | [覆盖躯干 covers_body](#covers_body) | [(?) body_mesh_type](#body_mesh_type) | [覆盖双腿 covers_legs](#covers_legs) | [覆盖双手 covers_hands](#covers_hands) | [(?) mane_cover_type](#mane_cover_type) | [family_type](#family_type) | [操作性修正 maneuver_bonus](#maneuver_bonus) | [速度修正 speed_bonus](#speed_bonus) | [冲刺修正 charge_bonus](#charge_bonus) | [缰绳模型 reins_mesh](#reins_mesh) | [覆盖头部 covers_head](#covers_head)

- #### head_armor
  **类型:**  `int`   
  **范例:** `64`  
  *头部护甲值*  
  
- #### has_gender_variations
  **类型:**  `boolean`   
  **范例:** `true`  
  *男女是否使用不同模型*  
  
- #### hair_cover_type
  **类型:**  `string` 
  **接受值:** `'all', 'type1', 'type2', 'type3'`  
  **范例:** `all`  
  *待查明type1，type2，type3分别是啥样的*  
  
- #### modifier_group
  **类型:**  `string`   
  **接受值:** `'cloth_unarmoured', 'leather', 'plate', 'chain', 'cloth'`  
  **范例:** `leather`  
  *可能影响伤害吸收?*  
  
- #### material_type
  **类型:**  `string`   
  **接受值:** `'Cloth', 'Leather', 'Plate', 'Chainmail'`  
  **范例:** `Cloth`  
  *护甲的材质*  
  
- #### beard_cover_type
  **类型:**  `string`   
  **接受值:** `'type3', 'type2', 'none', 'all', 'type1'`  
  **范例:** `none`  
  *类似遮盖头发模式*  
  
- #### body_armor
  **类型:**  `int`   
  **范例:** `23`  
  *躯干护甲值*  
  
- #### leg_armor
  **类型:**  `int`   
  **范例:** `23`  
  *腿部护甲值*  
  
- #### arm_armor
  **类型:**  `int`   
  **范例:** `23`  
  *手部护甲值*  
  
- #### covers_body
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`  
  **范例:** `true`  
  *护甲是否覆盖躯干*  
  
- #### body_mesh_type
  **类型:**  `string`  
  **接受值:** `'shoulders'`  
  **范例:** `shoulders`  
  *待查明作用*  
  
- #### covers_legs
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`  
  **范例:** `true`  
  *是否覆盖双腿*  
  
- #### covers_hands
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`  
  **范例:** `true`   
  *是否覆盖双手*   
  
- #### mane_cover_type
  **类型:**  `string`  
  **接受值:** `'none', 'all'`  
  **范例:** `none`  
  *待查明覆盖部位*  
  
- #### family_type
  **类型:**  `int`  
  **接受值:** `'1', '2'`  
  **范例:** `1`  
  *待查明作用*  
  
- #### maneuver_bonus
  **类型:**  `int`   
  **范例:** `12`  
  *不知道是对人还是对马的操作性修正(译者认为是马铠对马的操纵性修正)*  
  
- #### speed_bonus
  **类型:**  `int`   
  **范例:** `11`  
  *不知道是对人还是对马的速度修正(译者认为是马铠对马的速度修正)*  
  
- #### charge_bonus
  **类型:**  `int`   
  **范例:** `11`   
  *不知道是对人还是对马的冲刺修正(译者认为是马铠对马的冲刺修正)*  
  
- #### reins_mesh
  **类型:**  `string`   
  **范例:** `horse_harness_vlandia_b_rein`  
  *缰绳的模型ID*  
  
- #### covers_head
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`  
  **范例:** `true`  
  *是否覆盖头部*  
  