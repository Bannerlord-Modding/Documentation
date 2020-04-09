# ScreenBase

You can organize and instantiate your [ViewModels](viewmodel.md) and [Movies](movie.md) by using screens.

In order to prevent any issues, it is recommended that you use the template below when creating your screens.

```csharp
public class MyExampleScreen : ScreenBase
{

    private MyExampleVM _dataSource;
    private GauntletLayer _gauntletLayer;
    private GauntletMovie _movie;

    protected override void OnInitialize()
    {
        base.OnInitialize();
        _dataSource = new MyExampleVM();
        _gauntletLayer = new GauntletLayer(100)
        {
            IsFocusLayer = true
        };
        AddLayer(_gauntletLayer);
        _gauntletLayer.InputRestrictions.SetInputRestrictions();
        _movie = _gauntletLayer.LoadMovie("MyExampleMovie", _dataSource);
    }

    protected override void OnActivate()
    {
        base.OnActivate();
        ScreenManager.TrySetFocus(_gauntletLayer);
    }

    protected override void OnDeactivate()
    {
        base.OnDeactivate();
        _gauntletLayer.IsFocusLayer = false;
        ScreenManager.TryLoseFocus(_gauntletLayer);
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();
        RemoveLayer(_gauntletLayer);
        _dataSource = null;
        _gauntletLayer = null;
    }
}
```

## Pushing your Screen

To push your screen onto the screen stack, you can do following:

```csharp
ScreenManager.PushScreen(ViewCreatorManager.CreateScreenView<MyExampleScreen>());
```

