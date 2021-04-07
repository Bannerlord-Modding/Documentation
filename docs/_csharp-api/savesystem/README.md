# Save System

### Warning!  
As of e1.0.10/e1.1.0 when defining custom data that inherits the game's basic types, be extra careful.  
If the data will be saved to the game's internal storage, upon removing your mod the save won't be able to load because of your missing custom data.  
This will be the case when definining custom ``LogEntry`` types and passing them to the game (``LogEntry.AddLogEntry(customLog);``.  
As a workaround, you should either include a feature to fully remove your custom data from the game or provide a mod for it.


## SaveableTypeDefiner
For defining custom classes and structs, implement your own ``TaleWorlds.SaveSystem.SaveableTypeDefiner``.  
You don't need to register it somewhere, the game will find it itself via reflection.
```csharp
    public class CustomSaveDefiner : SaveableTypeDefiner
    {
        // use a big number and ensure that no other mod is using a close range
        public CustomSaveDefiner() : base(2 _333_000) { }

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
            ConstructContainerDefinition(typeof(List<ExampleStruct>));
        }
    }
```
  
## SaveableField and SaveableProperty
To mark data in your custom class/struct as savable, use ``TaleWorlds.SaveSystem.SaveableFieldAttribute`` and ``TaleWorlds.SaveSystem.SaveablePropertyAttribute``.  
It seems that there is noreal difference between ``SaveableField`` and ``SaveableProperty``, but if you used one of them, stick to the type. They are not interchangeable and the data won't be loaded if types awe swicthed.  

```csharp
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
  
## CampaignBehaviorBase.SyncData
There is also "shared data" that could be used between one/miltiple ``CampaignBehaviorBase``.  
With it you can store custom container data, such as:  
* Array
* List
* Dictionary
* Queue
```csharp
    public class CustomBehavior : CampaignBehaviorBase
    {
        private List<ExampleStruct> _customDataMap = new List<ExampleStruct>();

        public override void SyncData(IDataStore dataStore)
        {
            dataStore.SyncData("customDataMap", ref _customDataMap);
        }
        
        public override void RegisterEvents() { }
    }
```
  
## Alternative approach
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
  
  
### Notes:
The community should decide how to handle ``saveBaseId`` collisions.  
