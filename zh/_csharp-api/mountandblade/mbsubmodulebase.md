# MBSubModuleBase

你可以通过继承 `MBSubModuleBase 类` 来处理MOD的加载，可以说这是你MOD的入口。这个类中有一些很有用的重载，比如 `OnSubModuleLoad()` 和 `OnApplicationTick()`。

**一定注意在 `SubModule.xml` 里写上正确完整的类名，不然运行时会出问题。**

这是一个例子([SubModule.xml](../../_xmldocs/submodule.md))：例中的 `ExampleMod.MySubModule` 就是一个正确的类名。

## 可重载的函数

下面列出了所有可以重载的函数，并且一般情况下它们就是以这个顺序被调用。这只是一个大概的指南，当你遇到运行顺序导致的问题时，这不能取代Debug。

- `OnSubModuleLoad()` - 游戏处于加载界面时最先被调用的函数，你应该在这个函数中完成初始化的主要部分
- `OnApplicationTick(float)` - 这个函数每一帧都会被调用一次，为了性能考虑，在这个函数中要尽量避免加入一些复杂且费时的操作
  - `float` - 完成当前帧耗费的时间（毫秒）
- `OnBeforeInitialModuleScreenSetAsRoot()` - 在主菜单出现前一刻被调用的函数，当你的MOD需要加载一些别的东西的时候挺有用的
- `OnGameStart(Game, IGameStarter)` - 当用户在主菜单选择一个游戏模式（submodule）后会立刻被调用
  - `Game` - [详情: Game](../core/game.md)
  - `IGameStarter` - N/A
- `BeginGameStart(Game)` - 当所选的游戏模式加载完成后立刻被调用
  - `Game` - [详情: Game](../core/game.md)
- `OnGameLoaded(Game, object)` -  当加载了一个存档后被调用
  - `Game` - [详情: Game](../core/game.md)
  - `object` - N/A
- `OnCampaignStart(Game, object)` -  当任意游戏模式启动后被调用
  - `Game` - [详情: Game](../core/game.md)
  - `object` - N/A
- `OnGameInitializationFinished(Game)` - 当某个游戏模式初始化完成后被调用
  - `Game` - [详情: Game](../core/game.md)
- `DoLoading(Game)` -  当加载结束时被调用，这个不是很确定
  - `Game` - [详情: Game](../core/game.md)
- `OnNewGameCreated(Game, object)` -  当战役模式中开始一个新游戏时被调用
  - `Game` - [详情: Game](../core/game.md)
  - `object` - N/A
- `OnMissionBehaviourInitialize(Mission)` - 当一个任务（mission）开始后，行为（behaviours）初始化前被调用
  - `Mission` - [详情: Mission](mission.md)
- `OnGameEnd(Game)` - 当退出一个任务或战役时被调用
  - `Game` - [详情: Game](../core/game.md)
- `OnSubModuleUnloaded()` - 当退出游戏时被调用


- `OnMultiplayerGameStart(Game, object)` - 多人游戏相关，未测试
  - `Game` - [See: Game](../core/game.md)
  - `object` - N/A