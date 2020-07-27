# WeaponFlags

## Parent Node
- [Weapon](../../Weapon)

## Child Node
- *None*

## Attributes  
[MeleeWeapon](#meleeweapon) | [RangedWeapon](#rangedweapon) | [HasString](#hasstring) | [StringHeldByHand](#stringheldbyhand) | [NotUsableWithOneHand](#notusablewithonehand) | [TwoHandIdleOnMount](#twohandidleonmount) | [AutoReload](#autoreload) | [UnloadWhenSheathed](#unloadwhensheathed) | [PenaltyWithShield](#penaltywithshield) | [WideGrip](#widegrip) | [CantReloadOnHorseback](#cantreloadonhorseback) | [Consumable](#consumable) | [UseHandAsThrowBase](#usehandasthrowbase) | [AmmoSticksWhenShot](#ammostickswhenshot) | [MultiplePenetration](#multiplepenetration) | [Burning](#burning) | [LeavesTrail](#leavestrail) | [CanPenetrateShield](#canpenetrateshield) | [MissileWithPhysics](#missilewithphysics) | [AmmoCanBreakOnBounceBack](#ammocanbreakonbounceback) | [AffectsArea](#affectsarea) | [AmmoBreaksOnBounceBack](#ammobreaksonbounceback) | [AttachAmmoToVisual](#attachammotovisual) | [CanBlockRanged](#canblockranged) | [HasHitPoints](#hashitpoints)
  
- #### MeleeWeapon
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the weapon is a melee weapon*  
  
- #### RangedWeapon
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the weapon is a ranged weapon*  
  
- #### HasString
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the ranged weapon has a string. Should be set to true for both Bows and Crossbows*  
  
- #### StringHeldByHand
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the string is held by hand. Should be set to true with Bows*  
  
- #### NotUsableWithOneHand
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the weapon cannot be used in 1 hand*  
  
- #### TwoHandIdleOnMount
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *This is set to true with most bows and crossbows. TODO: figure out what this exactly does.*  
  
- #### AutoReload
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If set to false an action is required to reload the weapon. (crossbows)*  
  
- #### UnloadWhenSheathed
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the weapon should remove any loaded projectile when sheathed*  
  
- #### PenaltyWithShield
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the weapon has a damage penalty when using with shield*  
  
- #### WideGrip
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *TODO: figure out what this does*  
  
- #### CantReloadOnHorseback
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the weapon can be reloaded on horseback*  
  
- #### Consumable
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the weapon can be consumed. Set to true for arrows and throwables.*  
  
- #### UseHandAsThrowBase
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the weapon is thrown from the hand*  
  
- #### AmmoSticksWhenShot
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *TODO: figure out what this exactly does*  
  
- #### MultiplePenetration
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the projectile can pierce through multiple entities*  
  
- #### Burning
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the projectile is on fire. TODO: figure out if this also inflicts fire damage, or sets fire to stuff*  
  
- #### LeavesTrail
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the weapon leaves a trail. TODO: figure out what this exactly does*  
  
- #### CanPenetrateShield
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If the projectile can penetrate a shield*  
  
- #### MissileWithPhysics
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If physics are attached to a projectile. TODO: figure out if this is used to damage props as well.*  
  
- #### AmmoCanBreakOnBounceBack
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *TODO: figure out what this exactly does*  
  
- #### AffectsArea
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *TODO: figure out if this is AOE damage?*  
  
- #### AmmoBreaksOnBounceBack
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *TODO: figure out what this exactly does*  
  
- #### AttachAmmoToVisual
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *TODO: figure out what this exactly does*  
  
- #### CanBlockRanged
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If an item can block projectiles (shields)*  
  
- #### HasHitPoints
  **类型:**  `boolean`  
  **接受值:** `'true', 'false'`   
  **例子:** `true`  
  *If an item has hitpoints (shields)*  
  