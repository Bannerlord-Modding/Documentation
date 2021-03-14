# Localization

## Related contents
* [TextObject](TextObject.md)
* [MBTextManager](MBTextManager.md)

## Developing localizable module
Any game text can be implemented in such a way that it could be localized. In order to achieve that, when developing the module you should follow three basic rules:
1. Strings that can be visible in the interface should be stored in objects of the [TextObject](TextObject.md) class.
2. Each such line must have unique ID.
3. Every localizable string should be included in `std_module_strings_xml.xml` file under `..\Mount & Blade II Bannerlord\Modules\YourModName\ModuleData\Languages\` folder.

### Notes on using TextObjects
Please, consider using additional [properties](TextObject.md#complex-text-variables-and-cases) when setting info on complex objects to the TextObject. That could do your life easier and be absolute lifesaver to the people who will translate the mod. For example, if you need to mention a character in some line, you could just store his name in the result TextObject and it would deal the trick, but translating of the line to other languages could become problematic. Alternatively, you could store in the TextObject several character properties, including Name and Gender. Then even if you don't need gender in that particular line in English, it may be used as a conditional factor in the translation.

<details>
<summary>Here is an example of using properties and the conditionals in the TextObject string.</summary>

```csharp
public const string conditionalString =
  "{=conditionalStringID}This proposal is on cooldown for {NUMBER_OF_DAYS} {?NUMBER_OF_DAYS.PLURAL_FORM}days{?}day{\\?}.";
    
public static readonly TextObject conditionalTextObject = new TextObject(conditionalString);
  
public static void SetNumericVariable(TextObject textObject, string variableKey, int variableValue)
{
  if (string.IsNullOrEmpty(variableKey))
  {
    return;
}
  TextObject explainedTextObject = new TextObject(variableValue);
  explainedTextObject.SetTextVariable("PLURAL_FORM", variableValue != 1 ? 1 : 0);
  if (textObject is null)
  {
    MBTextManager.SetTextVariable(variableKey, explainedTextObject);
  }
  else
  {
    textObject.SetTextVariable(variableKey, explainedTextObject);
  }
}
```
Calling
```csharp
SetNumericVariable(conditionalTextObject, "NUMBER_OF_DAYS", 21);
conditionalTextObject.ToString()
```
would return `"This proposal is on cooldown for 21 days."`, while calling
```csharp
SetNumericVariable(conditionalTextObject, "NUMBER_OF_DAYS", 1);
conditionalTextObject.ToString()
```
would return `"This proposal is on cooldown for 1 day."`.
</details>

Worth a note that default game processing language is English, so it is advisable to use English lines in development.

### Notes on String IDs
String ID is a string key of arbitrary length and content with no spaces or special symbols. It is inadvisable to use long stringIDs, as it said to affect performance. Also, string IDs are global, so even if two different strings with same string ID are created and used in different game modules, they would still conflict (and some pretty bad things may happen then). Therefore, it is inadvisable to regulary use semantically meaningful keys as string IDs. Instead, use X-digit alphanumeric string codes for that, which look as follows: {=zmR6sT03}. As of now, TaleWords and most of the game modders use 8-digit alphanumeric string codes to generate random string IDs. You can use this service to generate random keys: https://www.random.org/strings/ . This, however, is the basis for further reflection on the matter for the modding community, as while random matches are quite unlikely, they are still possible and could lead to the very unpleasant bugs.

Any localizable string should **start** with a string ID:
```csharp
private const string exampleString = "{=stringID}Some text";
public static readonly TextObject exampleTextObject = new TextObject (exampleString);
```

### Notes on std_module_strings_xml
Every localizable string should be included in the `std_module_strings_xml.xml` file under `..\Mount & Blade II Bannerlord\Modules\YourModName\ModuleData\Languages\` folder.
Default game language is English and text processor expects every line you define in the code to be English. So creating `std_module_strings_xml.xml` with `<tag language="English" />` will be just for reference - no game texts will actually be loaded from it, but it may be used by module translators to create their language-specific versions (aka translations).

Here is an example of `std_module_strings_xml.xml` for the above `exampleString` and `conditionalString`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<base xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" type="string">
    <tags>
        <tag language="English" />
    </tags>
    <strings>
        <string id="stringID" text="Some text" />
        <string id="conditionalStringID" text="This proposal is on cooldown for {NUMBER_OF_DAYS} {?NUMBER_OF_DAYS.PLURAL_FORM}days{?}day{\?}." />      
    </strings>
</base>
```

## Translating game module
To translate game module you have to create a copy of every XML file under
```
..\Mount & Blade II Bannerlord\Modules\ModName\ModuleData\Languages\
```
folder and place it under
```
..\Mount & Blade II Bannerlord\Modules\ModName\ModuleData\Languages\LanguageTagShort\
```
folder.
Then you will have to manually change `<tag language="English" />` from `"English"` to the language ID you would like to translate to. As of e.1.4.2 game automatically detects every language ID from every file of every module and adds it to the game menu. In earlier versions, while this also happened, changing in-game language to the new one could have resulted in crash, if that language ID was not also added in `..\Mount & Blade II Bannerlord\GUI\Fonts\Languages.xml`.

Be wary that every language ID is a separate entity for the game, even if they are semantically means the same language, so, for example, if you have some xml files that use `<tag language="Russian" />`, they will be incompatible with xml files that use `<tag language="Русский" />` and only one set of them (currently selected in options) would be used, while every line from the other set will revert to default language.

After you determined with the language ID, each text line should be translated with the original line IDs and all the variables preserved. For the above example:
```xml
<?xml version="1.0" encoding="utf-8"?>
<base xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" type="string">
    <tags>
        <tag language="Русский" />
    </tags>
    <strings>
        <string id="stringID" text="Какой-то текст" />
        <string id="conditionalStringID" text="Это предложение может быть внесено через {NUMBER_OF_DAYS} {?NUMBER_OF_DAYS.PLURAL_FORM}дней{?}день{\?}." />      
    </strings>
</base>
```
When translating, be careful - spacings, punctuation, and using upper or lower case symbols could matter.
