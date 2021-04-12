# Save System

### Warning!  
As of e1.0.10/e1.1.0 when defining custom data that inherits the game's basic types, be extra careful.  
If the data will be saved to the game's internal storage, upon removing your mod the save won't be able to load because of your missing custom data.  
This will be the case when definining custom ``LogEntry`` types and passing them to the game (``LogEntry.AddLogEntry(customLog);``).  
As a workaround, you should either include a feature to fully remove your custom data from the game or provide a mod for it.

## Basic saving

The core of saving is ``CampaignBehaviorBase``'s ``SyncData`` function.  This will be called on any registered campaign behavior on both saving and loading.

The method is provided a ``DataStore`` object with a ``SyncData`` method, which takes a [`ref` variable](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ref). On save, data from the ref is read and stored in the savefile, on load, the ref will be populated with the data from the save file.

```csharp
public class CustomBehavior : CampaignBehaviorBase
{
    // The data in this field will persist across saving
    public string Data;

    public override void SyncData(IDataStore dataStore)
    {
        // First argument is an identifier, only needs to be unique to this behavior
        dataStore.SyncData("Data", ref Data);
    }

    public override void RegisterEvents() { }
}
```

## SaveableTypeDefiner

To save custom classes, structs, or built-in data structures (such as ``Array``, ``List``, ``Dictionary``, or ``Queue``), implement your own ``TaleWorlds.SaveSystem.SaveableTypeDefiner``, alongside the ``SyncData`` function.
You don't need to register it somewhere, the game will find it itself via reflection.

### Saving custom classes with SaveableTypeDefiner

To make a custom class/struct saveable, register it inside ``DefineClassType`` in your ``SaveableTypeDefiner``.
To mark data in your custom class/struct as saveable, use ``TaleWorlds.SaveSystem.SaveableFieldAttribute`` and ``TaleWorlds.SaveSystem.SaveablePropertyAttribute``.
It seems that there is no real difference between ``SaveableField`` and ``SaveableProperty``, but if you used one of them, stick to the type. They are not interchangeable and the data won't be loaded if types awe switched.
See the complete example below for examples of proper handling of ``SaveableField`` and ``SaveableProperty`` ids.

### Saving data structures with SaveableTypeDefiner

To save built-in data structures, register them in ``DefineContainerDefinitions``.  For example, if you want to save a list of ``ExampleStruct`` you would register:
```csharp
protected override void DefineContainerDefinitions() {
    ConstructContainerDefinition(typeof(List<ExampleStruct>));
}
```
For nested structures, you'll need to register both the outer and inner structures.  For a ``Dictionary`` of ``List``s of ``ExampleStruct``, you would register:
```csharp
protected override void DefineContainerDefinitions() {
    ConstructContainerDefinition(typeof(List<ExampleStruct>));
    ConstructContainerDefinition(typeof(Dictionary<List<ExampleStruct>>));
}
```

### Complete example with SaveableTypeDefiner

```csharp
public class CustomBehavior : CampaignBehaviorBase
{
    public ExampleStruct StructData;
    public List<CustomMapNotification> MapNotificationList;
    public Dictionary<string, List<NestedStruct>> NestedData;

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("StructData", ref StructData);
        dataStore.SyncData("MapNotificationList", ref MapNotificationList);
        dataStore.SyncData("NestedData", ref NestedData);
    }

    public override void RegisterEvents() { }
}

public class CustomSaveDefiner : SaveableTypeDefiner
{
    // use a big number and ensure that no other mod is using a close range
    public CustomSaveDefiner() : base(2_333_000) { }

    protected override void DefineClassTypes()
    {
        // The Id's here are local and will be related to the Id passed to the constructor
        AddClassDefinition(typeof(CustomMapNotification), 1);
        AddStructDefinition(typeof(ExampleStruct), 2);
        AddClassDefinition(typeof(ExampleNested), 3);
        AddStructDefinition(typeof(NestedStruct), 4);
    }

    protected override void DefineContainerDefinitions()
    {
        ConstructContainerDefinition(typeof(List<CustomMapNotification>));
        // Both of these are necessary: order isn't important
        ConstructContainerDefinition(typeof(List<NestedStruct>));
        ConstructContainerDefinition(typeof(Dictionary<string, List<NestedStruct>>));
    }
}

public struct ExampleStruct
{
    // Local ID's start from one if the class/struct does not inherit from any
    // game's types with saveable data
    [SaveableField(1)]
    public PartyBase Attacker;
}

public class CustomMapNotification : InformationData
{
    // InformationData already contains 5 definitions, so start from 6 for custom data
    [SaveableProperty(6)]
    public Hero Mercenary { get; set; }

    [SaveableProperty(7)]
    public bool IsHandled { get; set; }
}

public struct NestedStruct
{
    [SaveableField(1)]
    public bool Flag;
}
public class ExampleNested
{
    [SaveableField(1)]
    public NestedStruct Data;
}
```

### Notes:
The community should decide how to handle ``saveBaseId`` collisions.

## Alternative approach - JSON serialization
Instead of relying on the `SaveableTypeDefiner` that will lock the save file, the community found out another method of saving data without the issue, by using JSON serialization.
```csharp
    public class CustomJSONBehavior : CampaignBehaviorBase
    {
        public class ExampleNested
        {
            public NestedStruct Data;
        }
        public struct NestedStruct
        {
            public bool Flag;
        }

        private List<ExampleNested> _customData = new List<ExampleNested>();

        public override void SyncData(IDataStore dataStore)
        {
            if (dataStore.IsSaving)
            {
                var jsonString = JsonConvert.SerializeObject(_customData);
                dataStore.SyncData("NestedStruct", ref jsonString);

            }
            if (dataStore.IsLoading)
            {
                var jsonString = "";
                if (dataStore.SyncData("NestedStruct", ref jsonString) && !string.IsNullOrEmpty(jsonString))
                {
                    _customData = JsonConvert.DeserializeObject<List<ExampleNested>>(jsonString);
                }
                else
                {
                    _customData = new List<ExampleNested>();
                }
            }
        }

        public override void RegisterEvents() { }
    }
```
#### WARNING!  
This approach should only used with custom objects. Do not hold inside the custom objects any references to the in-game classes like `Hero`! They will be serialized wrong and this will cause issues after loading the save!  
  
The game also has a hard limit on the string size. We don't know the exact maximum length, but it's something around `short.MaxValue - 1024`. If your final JSON string is bigger, we recommend splitting the string into `string[]` and using this for saving instead, here's an example for how you would do that:
```csharp
        ...
        private static IEnumerable<string> ToChunks(string str, int maxChunkSize)
        {
            for (var i = 0; i < str.Length; i += maxChunkSize)
                yield return str.Substring(i, Math.Min(maxChunkSize, str.Length-i));
        }
        private static string ChunksToString(string[] chunks)
        {
            if (chunks.Length == 0)
                return string.Empty;
            else if (chunks.Length == 1)
                return chunks[0];

            var strBuilder = new StringBuilder(short.MaxValue);

            foreach (var chunk in chunks)
                strBuilder.Append(chunk);

            return strBuilder.ToString();
        }
        
        ...
        public override void SyncData(IDataStore dataStore)
        {
            if (dataStore.IsSaving)
            {
                var dataJson = JsonConvert.SerializeObject(_customData);
                var chunks = ToChunks(dataJson, short.MaxValue - 1024).ToArray();
                dataStore.SyncData("NestedStruct", ref chunks);
            }

            if (dataStore.IsLoading)
            {
                var jsonDataChunks = Array.Empty<string>();
                if (dataStore.SyncData("NestedStruct", ref jsonDataChunks) && jsonDataChunks is not null)
                {
                    JsonConvert.DeserializeObject<List<ExampleNested>>(ChunksToString(jsonDataChunks));
                }
                else
                {
                    _customData = new List<ExampleNested>();
                }
            }
        }
```
