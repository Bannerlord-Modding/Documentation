# CampaignBehaviorBase
这是一个在 [TaleWorlds.CampaignSystem](./README.md) 中抽象的分类， and can be inherited to code for unique behaviours within the game's campaign.

## Abstract Methods:
#### ```public abstract void RegisterEvents()```
When defining this method, you can introduce consequences to certain events, by use of the `CampaignEvents.On...` methods. A simple example would be:
```csharp
public override void RegisterEvents()
{   
    CampaignEvents.OnClanDestroyedEvent.AddNonSerializedListener(this, new Action<Clan>(
    clan => {
        String clanName = clan.Name.ToString();
        InformationManager.DisplayMessage(new InformationMessage("The " + clanName + " was destroyed!"));
    }));
}
```
The above example registers an event, such that when a clan is destroyed, a message is broadcasted to the chat. The `AddNonSerializedListener` method called here requires the second argument to be an action, which is described [here](https://docs.microsoft.com/en-us/dotnet/api/system.action-1?view=netframework-4.8).

#### ```public abstract void SyncData(IDataStore dataStore)```

Here you can manipulate data that your `Behavior` requires persist between saves. However, most `Behavior` won't need it and you can leave it empty if you wish.

If you do require it, the general form looks like this:

```csharp
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData(string_id_for_var, ref the_variable_itself);
}
```

For example, here is the storage of a counter of an event:

```csharp
// inside your class
private int _numVillagesRaided;

public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("_numVillagesRaided", ref _numVillagesRaided);
}
```

Perhaps you might increase this number every time the player raids a village, which will now persist between saves, and if they do it enough maybe give them something, like some gold or extra Roguery experience, or whatever you want.

The syntax is very simple, the first argument is a string identifier for what you are storing. This only needs to be unique within a given `Behavior` class, so you don't have to worry about having the same name as in someone else's `Behavior`. The second argument is a reference to the variable itself to save or load. You don't need to worry about which is happening, the game will handle it. If the player loads a save, it will write it to that variable, and if they save their game, it will read from it and into the save.

## Registering Campaign Behaviors:
Within your [MBSubModuleBase](../mountandblade/mbsubmodulebase.md) class, you can utilise the `OnGameStart` Method to add the behavoir to a campaign. An example is given below:
```csharp
protected override void OnGameStart(Game game, IGameStarter gameStarter) 
{
    if(game.GameType is Campaign) 
    {
        //The current game is a campaign
        CampaignGameStarter campaignStarter = (CampaignGameStarter) gameStarter;
        campaignStarter.AddBehavior(new ExampleBehavior());
        //ExampleBehavoir is our custom class which extends CampaignBehaviorBase
    }
}
```
