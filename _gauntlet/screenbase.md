# ScreenBase

你可以通过screen组织并生成你的 [ViewModels](viewmodel.md) 和 [Movies](movie.md)。

为了防止出现问题，推荐使用以下模板创建screen：

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
        base.OnDeactivate()
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

## Screen入栈

要将你的screen加入screen栈，你可以这样做：

```csharp
ScreenManager.PushScreen(ViewCreatorManager.CreateScreenView<MyExampleScreen>());
```
