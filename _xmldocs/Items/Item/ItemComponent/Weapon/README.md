# Weapon

## Parent Node
- [ItemComponent](../../ItemComponent)

## Child Node
- [WeaponFlags](WeaponFlags)

## Attributes
[weapon_class](#weapon_class) | [weapon_balance](#weapon_balance) | [thrust_speed](#thrust_speed) | [speed_rating](#speed_rating) | [missile_speed](#missile_speed) | [weapon_length](#weapon_length) | [swing_damage](#swing_damage) | [swing_damage_type](#swing_damage_type) | [item_usage](#item_usage) | [physics_material](#physics_material) | [ammo_class](#ammo_class) | [ammo_limit](#ammo_limit) | [accuracy](#accuracy) | [thrust_damage](#thrust_damage) | [thrust_damage_type](#thrust_damage_type) | [center_of_mass](#center_of_mass) | [stack_amount](#stack_amount) | [rotation](#rotation) | [passby_sound_code](#passby_sound_code) | [rotation_speed](#rotation_speed) | [flying_sound_code](#flying_sound_code) | [sticking_rotation](#sticking_rotation) | [sticking_position](#sticking_position) | [trail_particle_name](#trail_particle_name) | [position](#position) | [body_armor](#body_armor) | [hit_points](#hit_points)

- #### weapon_class
  **type:**  `string`  
  **accepted values:** `'OneHandedAxe', 'Bow', 'OneHandedSword', 'TwoHandedPolearm', 'Crossbow', 'Stone', 'Arrow', 'Boulder', 'Bolt', 'LargeShield', 'Banner'`  
  **example:** `OneHandedAxe`  
  *Type of weapon*  
  
- #### weapon_balance
  **type:**  `int`  
  **example:** `100`  
  *Balance of the weapon*  
  
- #### thrust_speed
  **type:**  `int`  
  **example:** `12`  
  *Thrust speed of the weapon*  
  
- #### speed_rating
  **type:**  `int`  
  **example:** `60`  
  *Speed rating of the weapon*  
  
- #### missile_speed
  **type:**  `int`  
  **example:** `60`  
  *Speed of the projectile being fired from the weapon*  
  
- #### weapon_length
  **type:**  `int`  
  **example:** `60`  
  *Length of the weapon*  
  
- #### swing_damage
  **type:**  `int`  
  **example:** `60`  
  *Swing damage of the weapon*  
  
- #### swing_damage_type
  **type:**  `string`  
  **accepted values:** `'Pierce', 'Blunt', 'Cut'`   
  **example:** `Pierce`  
  *Swing damage type of the weapon*  
  
- #### item_usage
  **type:**  `string`  
  **accepted values:** `'torch', 'bow', 'long_bow', 'onehanded_block_shield_swing', 'polearm_block_thrust', 'crossbow_fast', 'crossbow', 'stone', '', 'heavy_stone', 'arrow_top', 'arrow_right', 'hand_shield', 'shield', 'banner'`   
  **example:** `heavy_stone`  
  *How the item is used*  
  
- #### physics_material
  **type:**  `string`  
  **accepted values:** `'metal_weapon', 'wood_weapon', 'missile', 'ballista_missile', 'burning_ballista', 'boulder_stone', 'burning_jar', 'wood_shield', 'metal_shield'`   
  **example:** `metal_shield`  
  *What the weapon consists of*  
  
- #### ammo_class
  **type:**  `string`  
  **accepted values:** `'Arrow', 'Bolt', 'Stone', 'Boulder'`   
  **example:** `Arrow`  
  *Ammo type*  
  
- #### ammo_limit
  **type:**  `int`   
  **example:** `1`  
  *Amount of ammo stored in the weapon. If set to 2 game will be closed*
  *When enter the battle*   
- #### accuracy
  **type:**  `int`   
  **example:** `21`  
  *Accuracy of a ranged weapon*   
  
- #### thrust_damage
  **type:**  `int`   
  **example:** `21`  
  *Thrust damage of a weapon*   
  
- #### thrust_damage_type
  **type:**  `string`  
  **accepted values:** `'Pierce', 'Blunt', 'Cut'`   
  **example:** `Pierce`  
  *Thrust damage type of the weapon*  
  
- #### center_of_mass
  **type:**  `vector3d`  
  **example:** `0.15,0,0`  
  *Center of mass of the weapon. Used for calculating damage*  
  
- #### stack_amount
  **type:**  `int`  
  **example:** `23`  
  *Amount of projectiles the weapon (arrows, bolts, stones) has*  
  
- #### rotation
  **type:**  `vector3d`  
  **example:** `100,30,20`  
  *TODO: figure out what this does*  
  
- #### passby_sound_code
  **type:**  `string`  
  **example:** `event:/mission/combat/missile/passby`  
  *What sound a projectile should make if passing by an agent*  
  
- #### rotation_speed
  **type:**  `double`  
  **example:** `0.5`  
  *TODO: figure out what this does*  
  
- #### flying_sound_code
  **type:**  `string`  
  **example:** `event:/mission/combat/missile/foley/passby`  
  *What sound a projectile should make when flying in midair*  
  
- #### sticking_rotation
  **type:**  `vector3d`  
  **example:** `90,0,0`  
  *TODO: figure out what this does*  
  
- #### sticking_position
  **type:**  `vector3d`  
  **example:** `90,0,0`  
  *TODO: figure out what this does*  
  
- #### trail_particle_name
  **type:**  `string`  
  **example:** `psys_game_missile_flame`  
  *Particles that are emitted on a flying projectile*  
  
- #### position
  **type:**  `vector3d`  
  **example:** `-0.04, -0.05, 0.01`  
  *TODO: figure out what this does*  
  
- #### body_armor
  **type:**  `int`  
  **example:** `82`  
  *The amount of body armour a weapon gives. TODO: figure out if this is possible with head, leg, and hand armour as well.*  
  
- #### hit_points
  **type:**  `int`  
  **example:** `820`  
  *Hit points of a shield*  