# Campaign Behavior Base
This is an abstract class within TaleWorlds.CampaignSystem, and can be used to code for behaviours within the game by creating a subclass that inherits it.

## Abstract Methods:
###### ```public abstract void RegisterEvents()```
When defining this method, you can introduce consequences to certain events, by use of the *"CampaignEvents.onBlahBlah"* methods. A simple example would be:
```
public override void RegisterEvents()
{   
    CampaignEvents.OnClanDestroyedEvent.AddNonSerializedListener(this, new Action<Clan>(
    clan => {
        String clanName = clan.Name.ToString();
        InformationManager.DisplayMessage(new InformationMessage("The " + clanName + " was destroyed!"));
    }));
}
```
The above example registers an event, were when a clan is destroyed, a message is broadcasted to the chat. The AddNonSerializedListener method called here requires the second argument to be an action, which is described here: https://docs.microsoft.com/en-us/dotnet/api/system.action-1?view=netframework-4.8.

###### ```public abstract void SyncData(IDataStore dataStore)```
**WIP**
Note: *We are currently not sure what this method does, but at the moment it is reccomended to be implemented as an empty method, like so:*
```
public override void SyncData(IDataStore dataStore)
{
}
```

## Registering Campaign Behaviors:
Within your [MBSubModuleBase](mbsubmodulebase.md) class, you can utilise the onGameStartMethod to add the behavoir to a campaign. An example is given below:
```
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
