# Campaign Game Starter
This class can be used to introduce behaviours, dialog, menus and models for campaigns, and implements the IGameStarter interface. This is useful in the `OnGameStart` method in [MBSubModuleBase](mbsubmodulebase.md), which is shown in the example.

**NOTE**: *This page is incomplete, so if you find anymore information on the subject, please create a pull request and add to this growing Modding Documentation!*

## Accessible Methods:
#### `public void ClearEmptyObjects()`
(Work in progress)
#### `public void AddBehavior(CampaignBehaviorBase campaignBehavior)`
Adds the [Campaign Behavior](campaignbehaviorbase.md) to the current campaign.
#### `public void AddModel(GameModel model)`
Adds the [Game Model](gamemodel.md) to the current campaign.
#### `public void LoadGameTexts(string xmlPath)`
(Work in progress) Loads XML file at the inputted path, introducing more texts to the game. These texts are in the same format as the *comment_strings.xml* file, with their purpose currently not determined.
#### `public void LoadGameMenus(Type typeOfGameMenusCallbacks, string xmlPath)`
(Work in progress) Loads XML file at the inputted path, introducing more menus to the game.
#### `public void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameOverlays.MenuOverlayType overlay = GameOverlays.MenuOverlayType.None, GameMenu.MenuFlags menuFlags = GameMenu.MenuFlags.none, object relatedObject = null)`
See [GameMenu](gamemenu.md) for use.
#### `public void AddWaitGameMenu(string idString, string text, OnInitDelegate initDelegate, OnConditionDelegate condition, OnConsequenceDelegate consequence, OnTickDelegate tick, GameMenu.MenuAndOptionType type, GameOverlays.MenuOverlayType overlay = GameOverlays.MenuOverlayType.None, float targetWaitHours = 0f, GameMenu.MenuFlags flags = GameMenu.MenuFlags.none, object relatedObject = null)`
(Work in progress)
#### `public void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false)`
See [GameMenu](gamemenu.md) for use.
## Accessible Attributes:
**NOTE**: *All of these are get/read only*
#### `public readonly bool IsTutorial`
Whether or not the campaign starts with a tutorial.
#### `public ICollection<CampaignBehaviourBase> CampaignBehaviors`
Collection of all registered [Campaign Behaviours](campaignbehaviorbase.md).
#### `public IEnumerable<GameModel> Models`
Enumerable Set of all registered [Game Models](gamemodel.md)

## Example Use:
This is used within our [MBSubModuleBase]() class: 
```csharp
protected override void OnGameStart(Game game, IGameStarter gameStarter) 
{
    if(game.GameType is Campaign) 
    {
        //Current game is a campaign, so IGameStarter object must be CampaignGameStarter
        CampaignGameStarter campaignStarter = (CampaignGameStarter) gameStarter;
        //Can now use CampaignGameStarter
    }
}
```
