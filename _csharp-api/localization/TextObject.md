# TextObject

## General Info
The TextObject class is required to make in-game texts localizable. It would be a nice approach to use this class for any information that may ever be shown to a player.
TextObject requires a string as a main value argument. It may be created using int or float arguments, in which case they are converted to string in the constructor.

## String IDs
To become fully localizable, strings used in TextObjects should start with stringID:
```csharp
private const string exampleString = "{=stringID}Some text";
public static readonly TextObject exampleTextObject = new TextObject (exampleString);
```
String ID is a string key of arbitrary length and content with no spaces. It is inadvisable to use long stringIDs, as it said to affect performance.
Also, string IDs are global, so even if two different strings with same string ID are created and used in different game modules,
they would still conflict (and some pretty bad things may happen then). Therefore, it is inadvisable to regulary use semantically meaningful keys as string IDs.
Instead, use X-digit alphanumeric string codes for that, which look as follows: `{=zmR6sT03}`.
As of now, TaleWords and most of the game modders use 8-digit alphanumeric string codes to generate string IDs in most cases.
You can use this service to generate random keys: https://www.random.org/strings/ . Of course random matches are still possible, but quite unlikely.

More information about using string IDs in the game’s XML files can be found in [Localization](README.md#notes-on-string-ids).

## Text variables
Strings used in TextObjects could contain variables, which themselves are TextObjects. Variables are stored in the public property named Attributes:
```csharp
public Dictionary<string, TextObject> Attributes 
```
### Defining text variables
There are two ways to define a text variable for TextObject. You can do it in constructor, or with `SetTextVariable` method:
```csharp
private const string SOME_STRING = "{=r6NczU68} Some text {TEXT_VARIABLE} more text {OTHER_TEXT_VARIABLE}.";

public static TextObject GetSomeStringAsTextObject()
{
    TextObject result = new TextObject(SOME_STRING, new Dictionary<string, TextObject>() { ["TEXT_VARIABLE"] = new TextObject("Variable value") });
    string s = "Other variable value";
    result.SetTextVariable("OTHER_TEXT_VARIABLE", s);
    return result;
}
```
### Complex text variables and cases
As all text variables are TextObjects themselves, they could be quite complex.
Note that any variables set to the nested TextObject could be used as properties in external TextObject.
It is also worth noting that TextObjects do have basic built-in inline conditional processor.
Consider following example:
```csharp
private const string MAIN_STRING =
    "{=stringIDMain}I spent {NESTED_TEXT_OBJECT} this example! " +
    "By the way, using of number {VARIABLE_TAG} requires {VARIABLE_TAG.NESTED_PROPERTY} after it! " +
    "{BIT_FLAG}Conditional text example for when value of bitFlag = 1{?}Another conditional text example for when value of bitFlag = 0{\\?}.";

private const string NESTED_STRING = "{=stringIDNested}{MINUTES} minutes to come up with and write";
private const string NESTED_PROPERTY_SINGULAR = "{=ie0XDdqR}singular noun";
private const string NESTED_PROPERTY_PLURAL = "{=oRPbCfYq}plural noun";

public static TextObject GetMainTextObject(int variable, bool flag)
{
    TextObject mainTextObject = new TextObject(MAIN_STRING);
    TextObject nestedTextObject = new TextObject(NESTED_STRING,
        new Dictionary<string, TextObject>() { ["MINUTES"] = new TextObject(variable) });
    mainTextObject.SetTextVariable("NESTED_TEXT_OBJECT", nestedTextObject);
      
    TextObject variableTextObject = new TextObject(variable);
    variableTextObject.SetTextVariable("NESTED_PROPERTY", variable == 1 ? NESTED_PROPERTY_SINGULAR : NESTED_PROPERTY_PLURAL);
    mainTextObject.SetTextVariable("VARIABLE_TAG", variableTextObject);
    mainTextObject.SetTextVariable("BIT_FLAG", flag ? 1 : 0);
    return mainTextObject;
}
```
Then using of ` GetMainTextObject(40, true).ToString();` would return following string:
```csharp
"I spent 40 minutes to come up with and write this example! By the way, using of number 40 requires plural noun after it! Conditional text example for when value of bitFlag = 1."
```
### Note on nested properties
Using of nested properties for complex objects could be very helpful to anyone translating your mod. Consider following example from TaleWorlds code:
```csharp
TextObject textObject = new TextObject("{=jF4Nl8Au}{NPC_LIEGE.NAME}, {LIEGE_RELATIONSHIP}? Long may {?NPC_LIEGE.GENDER}she{?}he{\\?} live.");
StringHelpers.SetCharacterProperties("NPC_LIEGE", Hero.OneToOneConversationHero.Clan.Leader.CharacterObject, null, textObject, false);
```
Method `StringHelpers.SetCharacterProperties` here is used to set several character-related attributes, that are used in the TextObject string.
In this example character's Name and Gender are used.
Adding such info to any string mentioning a character would be wise desision, as even if English phrasing you use does not require, for example, gender info,
translation of the sentence to other language may have.

Be wary though, that using multiple levels of nesting for properties is not supported, so using of something like `{NPC.CLAN.NAME}` is impossible -
game text processor would return an empty sting, if you use several dots with one variable tag.
### Global text variables
Sometimes you would need to use same info in several TextObjects.
In that case you can define global text variable, that will be used by text processor for any TextObject when `.ToString()` method is called. To do so you will have to use
```csharp
MBTextManager.SetTextVariable(StringTag, TextVariable);
```
[MBTextManager](MBTextManager.md) is a public static class. Any variable set to it will be used by game text processor for any TextObject as if it was defined for that TextObject itself. If you intend to use global text variables in the TextObject, you should not set any local text variables to it. Game text processor only uses variables stored in the MBTextManager if TextObject instance does not have it's own attributes.

## Default language
Default language for the game is English, so any localizable string you use in design time should be defined in English. That way it would never be read from any game files,
but instead would be built in your assembly. See more information on mantaining your XML files with game strings in [Localization](README.md#notes-on-std_module_strings_xml
).
