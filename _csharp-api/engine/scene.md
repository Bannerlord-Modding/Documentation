# Scene

Scenes are the current loaded view of the instances.

## Tips

* You can get current scene with `Mission.Current.Scene` assuming `Mission.Current` is not null and Scene is loaded.

* You can get the Scenes' static information through `/Modules/_MODULENAME_/SceneObj/` 

### Scene Detection Example

For Native, go in to `/Modules/SandBox/SceneObj`. Enter one of the folders.

In this example the path: `/Modules/SandBox/SceneObj/arena_aserai_a`. Open up the `scene.xscene` with preferred text editor.

Second line in the file contains the name of this particular Scene.

`<scene name="arena_aserai_a" version="2">` name of the Scene is `arena_aserai_a`.

And then check the Current Scene in code by it's name.

```
if(Mission.Current.SceneName.Equals("arena_aserai_a")) 
{
	...
}
```

