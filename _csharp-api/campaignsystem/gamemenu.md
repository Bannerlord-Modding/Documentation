# GameMenu

All the menus in the campaign are handled by the `GameMenuManager`. To add new menus however you must use the provided methods by the `Campaign` class.

To add a new menu use:
```csharp
Campaign.AddGameMenu(string menuId, string menuText, OnInitDelegate init_lambda)
```

To add a new option use:
```csharp
Campaign.AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1)
```

The provided condition does double-duty as it:
* enables / disables the option
* sets the icon