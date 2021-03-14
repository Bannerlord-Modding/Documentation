# Scene

Scenes are the current loaded view of the instances.

## Tips

* You can get current scene with `Mission.Current.Scene` assuming `Mission.Current` is not null and Scene is loaded.

* You can get the Scenes' static information through `/Modules/_MODULENAME_/SceneObj/`.

### Scene Detection Example

**Note**: You should **NEVER** modify the default game files directly.

Each Module's Scene is located in the corresponding `SceneObj` directory. For example, SandBox scenes are located in `/Modules/SandBox/SceneObj`.

In this example the path: `/Modules/SandBox/SceneObj/arena_aserai_a`. Open up the `scene.xscene` with preferred text editor.

The second line in the file contains the name of this particular Scene.

`<scene name="arena_aserai_a" version="2">` name of the Scene is `arena_aserai_a`.

And then check the current Scene in code by it's name.

```csharp
if(Mission.Current.SceneName == "arena_aserai_a")
{
    // ...
}
```

