# ScreenBase
namespace: TaleWorlds.Engine.Screens

You can create a custom screen by inheriting from ScreenBase and add your widgets.

Here is a skeleton of what your inherited class should look like:

```csharp
public class MyScreen : ScreenBase
{
  //Add your stuff here (will update soon)
}
```

And you can push it with:
```csharp
ScreenBase myScreen = new MyScreen();
ScreenManager.PushScreen(MyScreen);
```

If you want it to close again you can use:
```csharp
ScreenManager.PopScreen();
```
Which will pop the Screen on top.
