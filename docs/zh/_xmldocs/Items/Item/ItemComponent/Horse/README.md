# 马匹 Horse

## Parent Node
- [ItemComponent](../../ItemComponent)

## Child Node
- [Materials](Materials)

## Attributes
[生物类型 monster](#monster) | [操纵性 maneuver](#maneuver) | [速度 speed](#speed) | [冲撞伤害 charge_damage](#charge_damage) | [体长 body_length](#body_length) | [能不能骑 is_mountable](#is_mountable) | [额外生命值 extra_health](#extra_health) | [骨骼大小 skeleton_scale](#skeleton_scale) | [伤害修正 modifier_group](#modifier_group) | [is_pack_animal](#is_pack_animal) | [decorator_key_min](#decorator_key_min) | [decorator_key_max](#decorator_key_max) | [mane_mesh](#mane_mesh)
  
- #### monster
  **类型:**  `string`  
  **接受值:** `'Monster.horse', 'Monster.camel', 'Monster.mule', 'Monster.mule_unmountable', 'Monster.camel_unmountable', 'Monster.horse_2', 'Monster.cat', 'Monster.dog', 'Monster.sheep', 'Monster.cow', 'Monster.hog', 'Monster.goose', 'Monster.chicken'`  
  **例子:** `Monster.horse`   
  *骑乘的类型，比如马啊骆驼啊之类的*  
  
- #### maneuver
  **类型:**  `int`   
  **例子:** `73`  
  *操纵性*  
  
- #### speed
  **类型:**  `int`   
  **例子:** `73`  
  *速度*  
  
- #### charge_damage
  **类型:**  `int`   
  **例子:** `73`  
  *冲撞伤害*  
  
- #### body_length
  **类型:**  `int`   
  **例子:** `73`  
  *身体长度*  
  
- #### is_mountable
  **类型:**  `boolean`   
  **接受值:** `'true', 'false'`  
  **例子:** `false`  
  *能不能骑（骑牛与砍杀）*  
  
- #### extra_health
  **类型:**  `int`   
  **例子:** `81`  
  *额外的生命中？正负皆可*  
  
- #### skeleton_scale
  **类型:**  `string`   
  **接受值:** `'aserai_horse', 'battania_horse', 'empire_horse', 'khuzait_horse', 'sturgia_horse', 'vlandia_horse'`  
  **例子:** `aserai_horse`  
  *预定义的骨骼缩放比例. 待查明数字是否有效以及定义这些常量的位置*  
  
- #### modifier_group
  **类型:**  `string`   
  **接受值:** `'horse'`  
  **例子:** `horse`  
  *不知道干嘛的（译者按：难道和盔甲一样有伤害减免？）*  
  
- #### is_pack_animal
  **类型:**  `boolean`   
  **接受值:** `'true', 'false'`  
  **例子:** `false`  
  *不知道干嘛的s*  
  
- #### decorator_key_min
  **类型:**  `hex`    
  **例子:** `0F`  
  *不知道干嘛的*  
  
- #### decorator_key_max
  **类型:**  `hex`    
  **例子:** `0F`  
  *不知道干嘛的*  
  
- #### mane_mesh
  **类型:**  `id`    
  **例子:** `horse_mane`  
  *Mesh ID of the manes*  
  