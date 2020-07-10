# MBTextManager

## General Info
The MBTextManager is a public static class, that is used to make in-game texts localizable.
It contains games text processong logics and could be used to set global text variables. You can find more information on text variables [here](TextObject.md#text-variables).

## Setting gloabal text variables
You can set text variable to MBTextManager using method `SetTextVariable`:
```csharp
MBTextManager.SetTextVariable(tag, textObject);
```
It has several overloaded versions with different value argument types.

Any variable set to the MBTextManager will be used by game text processor for any TextObject as if it was defined for that TextObject itself:
```csharp
StringHelpers.SetCharacterProperties("CURRENT_LIEGE", forLord.MapFaction.Leader.CharacterObject, null, null, false);
StringHelpers.SetCharacterProperties("NEW_LIEGE", newLiege.CharacterObject, null, null, false);

...

persuasionTask2.SpokenLine =
      new TextObject("{=CymOFgzv}I gave an oath to {CURRENT_LIEGE.LINK} - but {?LORD.GENDER}her{?}his{\\?} disregard for the common people of this realm does give me pause.");
```
In this example method `StringHelpers.SetCharacterProperties` is used to store certain character properties to the MBTextManager variable array, making them global.
They are then used to form new TextObject for a persuasion dialog line.

## TextContext
Any variable set to MBTextManager is stored in private field TextContext. It is only cleared on `Campaign.OnDestroy()`.
Text variables could be freely rewrited at any time with new values.
