# GameMenu

All the menus in the campaign are handled by the `GameMenuManager`. To add new menus however you must use the provided methods by the `Campaign` class.

To add a new menu use:
```csharp
CampaignGameStarter.AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, MenuOverlayType overlay = MenuOverlayType.None, MenuFlags menuFlags = GameMenu.MenuFlags.none, object relatedObject = null)

delegate void OnInitDelegate(MenuCallbackArgs args);
```

The overlay defines if for example the upper right characters list is visible or not.

To add a new option to a menu use:
```csharp
CampaignGameStarter.AddGameMenuOption(string menuId, string optionId, string optionText, OnConditionDelegate condition, OnConsequenceDelegate consequence, bool isLeave = false, int index = -1)

bool OnConditionDelegate(MenuCallbackArgs args);
void OnConsequenceDelegate(MenuCallbackArgs args);
```

You can add options to existing menus and for this the index comes in handy to insert it before other options (by default it insert at the end).

The provided condition method does double-duty as it:
* enables / disables the option (via it's return value)
* sets the icon (via the provided args)

The icon can be changed by setting `optionLeaveType` to something appropriate. The used images are found under `Mount & Blade II Bannerlord\GUI\GauntletUI\SpriteParts\ui_group1\GameMenu` and the correspondence can be viewed in `Mount & Blade II Bannerlord\Modules\Native\GUI\Brushes\GameMenu.xml`. This can of course be overrides in your own module, but additional `LeaveTypes` are not possible.

| Type                | Image |
| ------------------- | ----- |
| Default             |       |
| Mission             |       |
| Submenu             |       |
| BribeAndEscape      |       |
| Escape              |       |
| Craft               |       |
| ForceToGiveGoods    |       |
| ForceToGiveTroops   |       |
| RansomAndBribe      |       |
| LeaveTroopsAndFlee  |       |
| OrderTroopsToAttack |       |
| Raid                |       |
| HostileAction       |       |
| Recruit             |       |
| Trade               |       |
| Wait                |       |
| Leave               |       |
| Continue            |       |
| Manage              |       |
| WaitQuest           |       |
| Surrender           |       |
| Conversation        |       |
| DefendAction        |       |