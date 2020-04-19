# WeaponFlags

## Parent Node
- [Weapon](../../Weapon)

## Child Node
- *None*

## Attributes  
[MeleeWeapon](#meleeweapon) | [RangedWeapon](#rangedweapon) | [HasString](#hasstring) | [StringHeldByHand](#stringheldbyhand) | [NotUsableWithOneHand](#notusablewithonehand) | [TwoHandIdleOnMount](#twohandidleonmount) | [AutoReload](#autoreload) | [UnloadWhenSheathed](#unloadwhensheathed) | [PenaltyWithShield](#penaltywithshield) | [WideGrip](#widegrip) | [CantReloadOnHorseback](#cantreloadonhorseback) | [Consumable](#consumable) | [UseHandAsThrowBase](#usehandasthrowbase) | [AmmoSticksWhenShot](#ammostickswhenshot) | [MultiplePenetration](#multiplepenetration) | [Burning](#burning) | [LeavesTrail](#leavestrail) | [CanPenetrateShield](#canpenetrateshield) | [MissileWithPhysics](#missilewithphysics) | [AmmoCanBreakOnBounceBack](#ammocanbreakonbounceback) | [AffectsArea](#affectsarea) | [AmmoBreaksOnBounceBack](#ammobreaksonbounceback) | [AttachAmmoToVisual](#attachammotovisual) | [CanBlockRanged](#canblockranged) | [HasHitPoints](#hashitpoints)
  
- #### MeleeWeapon
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the weapon is a melee weapon*  
  
- #### RangedWeapon
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the weapon is a ranged weapon*  
  
- #### HasString
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the ranged weapon has a string. Should be set to true for both Bows and Crossbows*  
  
- #### StringHeldByHand
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the string is held by hand. Should be set to true with Bows*  
  
- #### NotUsableWithOneHand
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the weapon cannot be used in 1 hand*  
  
- #### TwoHandIdleOnMount
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *This is set to true with most bows and crossbows. And it's seems like it's unused except TRACE*  
  
- #### AutoReload
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If set to false an action is required to reload the weapon. (crossbows)*  
  
- #### UnloadWhenSheathed
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the weapon should remove any loaded projectile when sheathed*  
  
- #### PenaltyWithShield
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the weapon has a damage penalty when using with shield*  
  
- #### WideGrip
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *It used to calculate if the non-craft weapon is polearm*  
  
- #### CantReloadOnHorseback
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the weapon can be reloaded on horseback*  
  
- #### Consumable
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the weapon can be consumed. Set to true for arrows and throwables.*  
  
- #### UseHandAsThrowBase
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the weapon is thrown from the hand*  
  
- #### AmmoSticksWhenShot
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *Used in MnB.Mission.CalculateAttachedLocalFrame* 
  
- #### MultiplePenetration
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the projectile can pierce through multiple entities*  
  
- #### Burning
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the projectile is on fire. Used when drop item and when siege towe destroyed*  
  
- #### LeavesTrail
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the weapon leaves a trail. It seems like it's unused*  
  
- #### CanPenetrateShield
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If the projectile can penetrate a shield*  
  
- #### MissileWithPhysics
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If physics are attached to a projectile. It seems like it's unused*  
  
- #### AmmoCanBreakOnBounceBack
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *Used in MnB.Mession.MissileHitCallback*  
  
- #### AffectsArea
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *Used when drop item and siege tower is destroyed*  
  
- #### AmmoBreaksOnBounceBack
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *Used in MnB.Mession.MissileHitCallback*  
  
- #### AttachAmmoToVisual
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *TODO: figure out what this exactly does*  
  
- #### CanBlockRanged
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If an item can block projectiles (shields)*  
  
- #### HasHitPoints
  **type:**  `boolean`  
  **accepted values:** `'true', 'false'`   
  **example:** `true`  
  *If an item has hitpoints (shields)*  
  