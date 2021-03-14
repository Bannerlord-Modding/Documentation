# GameEntity

游戏实体 `GameEntity` 指的是游戏里的对象\(或称之为实体\)。举几个例子：角色，建筑，树木，马匹……等等等等。凡是游戏里出现的每个物件都是一个游戏实体。

每一个游戏实体，包含了：网格\(`Mesh`\)，骨架\(`Skeleton`\)，刚体\(`PhysicsBody`\)，脚本组件\(`ScriptComponent`\)以及各种游戏里的对象附带的其他内容。

要向场景里添加一个游戏实体，除了通过编辑场景\([Scene](../../_xmldocs/scene.md)\)文件`scene.xscene`外，也可以直接通过`GameEntity`类的静态方法`Instantiate`“刷出”\(实例化出\)一个，比如:

```csharp
GameEntity.Instantiate(Scene scene, string prefabName, MatrixFrame frame)
```

另一个例子，往`main [Agent]`(../mountandblade/agent.md)里生成一个物体。\(注：`Agent`负责处理活物\)

```csharp
GameEntity.Instantiate(Mission.Current.Scene, "ship_a", Agent.Main.Frame)
```

## 多人模式中的游戏实体

某些游戏实体无法在玩家的客户端之间同步，因此你需要自己往脚本组件\(`ScriptComponent`\)里添加 `SynchedMissionObject`。

