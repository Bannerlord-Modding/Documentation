### Parent: [MBObjectBase]()

# Hero

Heroes are all the unique characters in the game. This class contains all the information of these characters and allows you to change them.

## Using

* System;
* System.Collections.Generic;
* System.Linq;
* System.Xml;
* System.Xml.Serialization;
* Helpers;
* TaleWorlds.CampaignSystem.Actions;
* TaleWorlds.CampaignSystem.CharacterDevelopment.Managers;
* TaleWorlds.Core;
* TaleWorlds.Library;
* TaleWorlds.Localization;
* TaleWorlds.SaveSystem;

## Implements

* [ITrackableCampaignObject]()

* [ITrackableBase]()

## Example of usage

Work in progress

## Constants

 | Name                      | Type  | Value | Notes                                      |
 | ------------------------- | ----- | ----- | ------------------------------------------ |
 | RelationLimit             | `int` | 100   | Max value for relation                     |
 | RelationNeutralLimit      | `int` | 10    | Max value for relation with neutral heroes |
 | MaximumNumberOfVolunteers | `int` | 6     | TODO                                       |
 | HeroWoundedHealthLevel    | `int` | 20    | Value, below which hero is wounded         |
 |                           |

## Variables

### Public

 | Name                          | Type                                  | Notes                           |
 | ----------------------------- | ------------------------------------- | ------------------------------- |
 | LastTimeStampForActivity      | `int`                                 | TODO                            |
 | VolunteerTypes;               | `CharacterObject[]`                   | Party?                          |
 | NumberOfCreatedParties        | `int`                                 | Number of parties< heads by ??  |
 | FirstName                     | [TextObject]()                        |                                 |
 | Name                          | [TextObject]()                        |                                 |
 | Detected                      | `bool`                                | Have you met with hero??        |
 | DaysLeftToRespawn             | `int`                                 | Days for respawn (after death?) |
 | NeverBecomePrisoner           | `bool`                                | Will never be prisoner?         |
 | AlwaysDie                     | `bool`                                | ???                             |
 | LastVisitTimeOfHomeSettlement | `float`                               | ???                             |
 | Level                         | `int`                                 | Level of hero                   |
 | IsMercenary                   | `bool`                                | Is hero mercenary               |
 | SpcDaysInLocation             | `int`                                 | ??                              |
 | VisitedSettlements            | `Dictionary<`[Settlement]()`, float>` | ??                              |
 | Culture                       | [CultureObject]()                     | ??                              |
 | SpecialItems                  | `List<`(ItemObject)[]`>`              | ??                              |
 | RandomValue                   | `int`                                 | ??                              |
 | RandomValueDeterministic      | `int`                                 | ??                              |
 | RandomValueRarelyChanging     | `int`                                 | ??                              |
 | ExSpouses                     | (MBReadOnlyList)[]`<`[Hero]()`>`      | ??                              |
 | IsFertile                     | bool                                  | Can hero have children          |
 | IsPregnant                    | bool                                  | Is hero pregnant now            |F
 |

### Private

Work im progress

## Properties

- `internal StaticBodyProperties StaticBodyProperties` { get; set; }
- `CanHaveRecruits` - A boolean that details if this hero can have recruits. Preachers, Rural Notables, Mercenaries, Gang Leaders, Merchants, and Headmen can have recruits. This property can only be read, not changed.

## Functions

Work in progress
