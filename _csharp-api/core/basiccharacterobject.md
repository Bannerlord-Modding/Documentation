# BasicCharacterObject

BasicCharacterObjects contain the deserialized information from the `npccharacters` XML file. This includes the BodyProperties, Equipment, Level, Skills, and Culture for each defined character.

BasicCharacterObjects are used as the building blocks for [Agents](https://github.com/Bannerlord-Modding/Documentation/tree/69fbb4b6e777bdaab5349c04490ba7247e8bdf38/_csharp-api/core/agent.md).

You can use the [MBObjectManager](mbobjectmanager.md) to get a loaded BasicCharacterObject by using the following:

```csharp
MBObjectManager.Instance.GetObject<BasicCharacterObject>("example_troop_id");
```

