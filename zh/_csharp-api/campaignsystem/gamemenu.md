# GameMenu


战役中所有的菜单选项都由`GameMenuManager`管理。你必须通过提供`Campaign`类中的方法，来加入新菜单。

加入新的菜单:
```csharp
CampaignGameStarter.AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, MenuOverlayType overlay = MenuOverlayType.None, MenuFlags menuFlags = GameMenu.MenuFlags.none, object relatedObject = null)

delegate void OnInitDelegate(MenuCallbackArgs args);
```

覆盖层（overlay）定义了例子中右上角字符列表是否可见。


为菜单加入新的选项:
```csharp
CampaignGameStarter.AddGameMenuOption(string menuId, string optionId, string optionText, OnConditionDelegate condition, OnConsequenceDelegate consequence, bool isLeave = false, int index = -1)

bool OnConditionDelegate(MenuCallbackArgs args);
void OnConsequenceDelegate(MenuCallbackArgs args);
```

您可以在现有菜单中添加选项。使用这个index参数时，可以方便地插入在其它选项之前（默认情况下，它会在末尾插入）。

提供的条件方法（condition method）具有双重职责：
* 启用/禁用选项（通过返回值）
* 设置图标（通过提供的参数）

图标可以通过将 `optionLeaveType` 设置为恰当的值来改变。 可使用的图标在 `Mount & Blade II Bannerlord\GUI\GauntletUI\SpriteParts\ui_group1\GameMenu`目录下，相关的信息可在 `Mount & Blade II Bannerlord\Modules\Native\GUI\Brushes\GameMenu.xml`查看。 当然，你自己的模组可以重写这些东西，但是不能额外添加更多的`LeaveTypes`。
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
