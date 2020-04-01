# MBObjectManager

The object manager is something that you will be using a lot in the modding of Bannerlord, so it is important to familiarize yourself with it.

The MBObjectManager can be used to get any object in the game that is currently loaded from the XMLs.

These include:

* [BasicCharacterObjects]()
* CharacterAttributes
* CraftingPieces
* CraftingTemplates
* Cultures
* ItemModifierGroups
* ItemCategories
* ItemComponents
* [ItemObjects](itemobject.md)
* SkillObjects
* SiegeEngineTypes

Example of getting a [BasicCharacterObject]():

```csharp
MBObjectManager.Instance.GetObject<BasicCharacterObject>("example_troop_id");
```

