# MBSubModuleBase

You can inherit from the MBSubModuleBase class to handle the loading of your module, it is essentially the entry point to your code. There are several useful overrides, such as `OnSubModuleLoad()` and `OnApplicationTick()` that you can make use of.

**It is important to note that you must reference the class' fully qualified name in the module's `SubModule.xml` for this to work properly.**

Example `SubModule.xml` where `ExampleMod.MySubModule` is the fully qualified name for the class inheriting MBSubModuleBase: [SubModule.xml](../../_xmldocs/submodule.md)

## Overrides 

This is the full list of available overrides, in (generally) the order in which they are called. This is a rough guide and is not a substitute for debugging when you're having order-of-execution issues.

- `OnSubModuleLoad()` - Called during the first loading screen of the game, always the first override to be called, this is where you should be doing the bulk of your initial setup.
- `OnApplicationTick(float)` - This is called once every frame, you should avoid expensive operations being called directly here and instead do as little work as possible for performance reasons. 
  - `float` - The time in milliseconds the frame took to complete.
- `OnBeforeInitialModuleScreenSetAsRoot()` - Called just before the main menu first appears, helpful if your mod depends on other things being set up during the initial load.
- `OnGameStart(Game, IGameStarter)` - Called immediately upon loading after selecting a game mode (submodule) from the main menu.
  - `Game` - [See: Game](../core/game.md)
  - `IGameStarter` - N/A
- `BeginGameStart(Game)` - Called immediately after loading the selected game mode (submodule) has completed.
  - `Game` - [See: Game](../core/game.md)
- `OnGameLoaded(Game, object)` -  Called only after loading a save.
  - `Game` - [See: Game](../core/game.md)
  - `object` - N/A
- `OnCampaignStart(Game, object)` -  Called once any game mode is started.
  - `Game` - [See: Game](../core/game.md)
  - `object` - N/A
- `OnGameInitializationFinished(Game)` - Called once the initialisation for a game mode has finished.
  - `Game` - [See: Game](../core/game.md)
- `DoLoading(Game)` -  Called seemingly as loading is ending, not entirely sure of this one.
  - `Game` - [See: Game](../core/game.md)
- `OnNewGameCreated(Game, object)` -  Called when starting a new save in the campaign mode specifically.
  - `Game` - [See: Game](../core/game.md)
  - `object` - N/A
- `OnMissionBehaviourInitialize(Mission)` - Called once a mission is started and behaviours are to be initialized.
  - `Mission` - [See: Mission](mission.md)
- `OnGameEnd(Game)` - Called on exiting out of a mission/campaign.
  - `Game` - [See: Game](../core/game.md)
- `OnSubModuleUnloaded()` - Called when exiting Bannerlord entirely.



- `OnMultiplayerGameStart(Game, object)` - Multiplayer related, haven't tested.
  - `Game` - [See: Game](../core/game.md)
  - `object` - N/A