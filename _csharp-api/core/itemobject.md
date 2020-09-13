# ItemObject

An example of an ItemObject is a weapon.

If you have the ItemObject has been defined and loaded in an XML, you can retrieve it via
```csharp
ItemObject itemObject = MBObjectManager.Instance.GetObject<ItemObject>(itemObjectId);
```
