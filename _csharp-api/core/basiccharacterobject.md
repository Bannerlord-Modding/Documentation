# BasicCharacterObject

`BasicCharacterObjects` 包含了 `npccharacters` XML 文件中的反序列化信息。每个被定义的角色有 `BodyProperties`, `Equipment`, `Level`, `Skills`, 和 `Culture` 信息。

`BasicCharacterObjects` 一般用来构建 [Agents](../mountandblade/agent.md) 的区块。

你可以用 [MBObjectManager](mbobjectmanager.md) 来获取一个加载后的  `BasicCharacterObject` ，代码如下：

```csharp
MBObjectManager.Instance.GetObject<BasicCharacterObject>("example_troop_id");
```
