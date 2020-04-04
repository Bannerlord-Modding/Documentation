# GameEntity

GameEntities are objects \(entities\) in the game. Examples include characters, buildings, trees, and horses to name a few. Every prop in the game is a GameEntity.

GameEntities contain Meshes, Skeletons, PhysicsBodies, and ScriptComponents along with a variety of other things for each object in the game.

You can add a GameEntity to a scene by editing the [Scene](../../_xmldocs/scene.md)'s `scene.xscene` file or spawn \(instantiate\) one directly using the following static method from the GameEntity class:

```csharp
GameEntity.Instantiate(Scene scene, string prefabName, MatrixFrame frame)
```

Example Usage \(spawning at main [Agent](../mountandblade/agent.md)\):

```csharp
GameEntity.Instantiate(Mission.Current.Scene, "ship_a", Agent.Main.Frame)
```

## Multiplayer GameEntities

Some GameEntities will not be synced between Clients, unless a SynchedMissionObject ScriptComponent is added.

