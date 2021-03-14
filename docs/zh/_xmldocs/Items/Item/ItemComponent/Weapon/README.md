# Weapon

## Parent Node
- [ItemComponent](../../ItemComponent)

## Child Node
- [WeaponFlags](WeaponFlags)

## Attributes
[武器类别 weapon_class](#weapon_class) | [平衡 weapon_balance](#weapon_balance) | [thrust_speed](#thrust_speed) | [速度 speed_rating](#speed_rating) | [投射物速度 missile_speed](#missile_speed) | [长度 weapon_length](#weapon_length) | [挥砍伤害 swing_damage](#swing_damage) | [挥砍伤害的类型 swing_damage_type](#swing_damage_type) | [武器使用 item_usage](#item_usage) | [材质 physics_material](#physics_material) | [弹药类型 ammo_class](#ammo_class) | [弹药限制 ammo_limit](#ammo_limit) | [准确度 accuracy](#accuracy) | [戳刺伤害 thrust_damage](#thrust_damage) | [戳刺伤害类型 thrust_damage_type](#thrust_damage_type) | [重心 center_of_mass](#center_of_mass) | [弹药量 stack_amount](#stack_amount) | [旋转角度 rotation](#rotation) | [掠过的声音 passby_sound_code](#passby_sound_code) | [旋转速度 rotation_speed](#rotation_speed) | [飞行的声音 flying_sound_code](#flying_sound_code) | [击中后的角度 sticking_rotation](#sticking_rotation) | [击中后的位置 sticking_position](#sticking_position) | [轨迹粒子效果 trail_particle_name](#trail_particle_name) | [位置 position](#position) | [躯干护甲 body_armor](#body_armor) | [耐久度 hit_points](#hit_points)

- #### weapon_class
  **类型:**  `string`  
  **接受值:** `'OneHandedAxe', 'Bow', 'OneHandedSword', 'TwoHandedPolearm', 'Crossbow', 'Stone', 'Arrow', 'Boulder', 'Bolt', 'LargeShield', 'Banner'`  
  **例子:** `OneHandedAxe`  
  *武器的类别*  
  
- #### weapon_balance
  **类型:**  `int`  
  **例子:** `100`  
  *武器的平衡*  
  
- #### thrust_speed
  **类型:**  `int`  
  **例子:** `12`  
  *Thrust speed of the weapon*  
  
- #### speed_rating
  **类型:**  `int`  
  **例子:** `60`  
  *武器速度*  
  
- #### missile_speed
  **类型:**  `int`  
  **例子:** `60`  
  *射出的投射物速度*  
  
- #### weapon_length
  **类型:**  `int`  
  **例子:** `60`  
  *武器长度*  
  
- #### swing_damage
  **类型:**  `int`  
  **例子:** `60`  
  *挥砍伤害值*  
  
- #### swing_damage_type
  **类型:**  `string`  
  **接受值:** `'Pierce', 'Blunt', 'Cut'`   
  **例子:** `Pierce`  
  *挥砍伤害的类型*  
  
- #### item_usage
  **类型:**  `string`  
  **接受值:** `'torch', 'bow', 'long_bow', 'onehanded_block_shield_swing', 'polearm_block_thrust', 'crossbow_fast', 'crossbow', 'stone', '', 'heavy_stone', 'arrow_top', 'arrow_right', 'hand_shield', 'shield', 'banner'`   
  **例子:** `heavy_stone`  
  *武器是咋用的*  
  
- #### physics_material
  **类型:**  `string`  
  **接受值:** `'metal_weapon', 'wood_weapon', 'missile', 'ballista_missile', 'burning_ballista', 'boulder_stone', 'burning_jar', 'wood_shield', 'metal_shield'`   
  **例子:** `metal_shield`  
  *武器的材质（诸如铁制盾，铁制武器，木制武器）*  
  
- #### ammo_class
  **类型:**  `string`  
  **接受值:** `'Arrow', 'Bolt', 'Stone', 'Boulder'`   
  **例子:** `Arrow`  
  *弹药类型（箭矢、弩矢等）*  
  
- #### ammo_limit
  **类型:**  `int`   
  **例子:** `1`  
  *弹药限制，不知道是'一个弹匣'还是'一次射出'。*

- #### accuracy
  **类型:**  `int`   
  **例子:** `21`  
  *远程武器的准确度*   
  
- #### thrust_damage
  **类型:**  `int`   
  **例子:** `21`  
  *戳刺伤害*   
  
- #### thrust_damage_type
  **类型:**  `string`  
  **接受值:** `'Pierce', 'Blunt', 'Cut'`   
  **例子:** `Pierce`  
  *戳刺伤害类型*  
  
- #### center_of_mass
  **类型:**  `vector3d`  
  **例子:** `0.15,0,0`  
  *武器中心位置，不知道干嘛用的*  
  
- #### stack_amount
  **类型:**  `int`  
  **例子:** `23`  
  *应该是一袋箭有多少支这种*  
  
- #### rotation
  **类型:**  `vector3d`  
  **例子:** `100,30,20`  
  *不知道干嘛用的（译者按：可能是飞斧之类扔出后模型的旋转角度向量）*  
  
- #### passby_sound_code
  **类型:**  `string`  
  **例子:** `event:/mission/combat/missile/passby`  
  *投射物掠过人物发出的声音*  
  
- #### rotation_speed
  **类型:**  `double`  
  **例子:** `0.5`  
  *不知道干嘛用的（译者按：可能是飞斧之类扔出后模型的旋转速度）*  
  
- #### flying_sound_code
  **类型:**  `string`  
  **例子:** `event:/mission/combat/missile/foley/passby`  
  *投射物飞行发出的声音*  
  
- #### sticking_rotation
  **类型:**  `vector3d`  
  **例子:** `90,0,0`  
  *不知道干嘛用的（译者按：与之前的旋转角度类似，结合下一个属性，可能是击中后模型的旋转角度，飞斧击中盾牌后全都是同一个角度）*  
  
- #### sticking_position
  **类型:**  `vector3d`  
  **例子:** `90,0,0`  
  *不知道干嘛用的（译者按：似乎是旋转中心？结合上一个属性，可能是击中后模型的相对位置）*  
  
- #### trail_particle_name
  **类型:**  `string`  
  **例子:** `psys_game_missile_flame`  
  *弹药飞行轨迹的粒子效果*  
  
- #### position
  **类型:**  `vector3d`  
  **例子:** `-0.04, -0.05, 0.01`  
  *位置，暂时不知道是啥位置*  
  
- #### body_armor
  **类型:**  `int`  
  **例子:** `82`  
  *武器提供的躯干护甲值，不知道对于其他部位是否有效*  
  
- #### hit_points
  **类型:**  `int`  
  **例子:** `820`  
  *盾的耐久度*  