# MBInitialScreenBase

想要创建一个自定义的开场画面，你可以写一个MBInitialScreenBase的派生类，然后让这个类采用`GameStateScreen`属性。

这个派生类的写法，可以参考以下例子:

```csharp
[GameStateScreen(typeof(InitialState))]
public class MyInitialScreen : MBInitialScreenBase
{
    private GauntletLayer _gauntletLayer;
    private InitialMenuVM _dataSource;

    public MBInitialScreen(InitialState initialState) : base(initialState) { }

    protected override void OnInitialize()
    {
        base.OnInitialize();
        this._dataSource = new InitialMenuVM();
        this._gauntletLayer = new GauntletLayer(1, "GauntletLayer");
        this._gauntletLayer.LoadMovie("InitialScreen", this._dataSource);
        this._gauntletLayer.InputRestrictions.SetInputRestrictions(true, InputUsageMask.Mouse);
        base.AddLayer(this._gauntletLayer);
        GameNotificationManager.Current?.LoadMovie(false);
        ChatLog.Current?.LoadMovie(false);
        InformationManager.ClearAllMessages();
    }
}
```

然后把类名中的 `InitialScreen` 替换成相应的[影片](../../_gauntlet/movie.md)XML文件的文件名。
