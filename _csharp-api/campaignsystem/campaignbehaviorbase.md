# CampaignBehaviorBase
This is an abstract class within [TaleWorlds.CampaignSystem](./README.md), and can be inherited to code for unique behaviours within the game's campaign.

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
(Work in Progress)

**NOTE**: We are currently not sure what this method does, but at the moment we recommended you implement it as an empty method, like so:
```csharp
public override void SyncData(IDataStore dataStore)
{
}
```

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
