Sometimes you might want to alter some of the existing behaviors. Here we try to do this with 2 different aproaches.
  
### 1. With GameModels
[GameModels](../_csharp-api/core/gamemodel.md) that are derived from the `TaleWorlds.Core.GameModel` class.
There is a naming convention like `*Something*Model` (when it's an abstract class derived from the GameModels) and `*DefaultSomething*Model` (when it's derived from `Something*Model`).

Some behaviors have related game models which include key factors for behaviors. You need to check whether your need them in model (if there are some) or not.

**Note:** Before we start these are what I could do with my knowledge, there is alot way to do this (probably better ways) but once you get the idea you can do as you need.
For this tutorial I want to edit `SettlementLoyaltyModel` and do the followings:
1. Add +2 Loyality Buff for Settlement belongs to Vlandian Kingdom, lets say as Culturel Buff.
2. Change the Owner Culture Debuff from -3 to -1.
3. Change the `DailyNotableRelationBonus` from 1 to 2 and the threshold for this to happen from 75 to 55.

First, extend the model:
```csharp
class ModifiedDefaultSettlementLoyaltyModel : DefaultSettlementLoyaltyModel
```

Then add the new model via the `gameStarter` in `InitializeGameStarter`:
```csharp
protected override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    if (starterObject is CampaignGameStarter campaignGameStarter)
    {
        campaignGameStarter.AddModel(new ModifiedDefaultSettlementLoyaltyModel());
    }
}
``` 
Note: It does remove (doesn't duplicate) the original `DefaultSettlementLoyaltyModel` when the `GameModelManager` is creating the models in `AddGameModelsManager()` method in `TaleWorlds.Core.Game` class. If someone else figure it out please edit here. 

Lets override the things we want to edit:
```csharp
public override int DailyNotableRelationBonus => 2;
public override float ThresholdForNotableRelationBonus => 55f;
	
public override ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)
{
    var myResult = base.CalculateLoyaltyChange(town, includeDescriptions);

    EditLoyalityFactors(ref myResult, "Owner Culture", -1f, includeDescriptions);
    VlandianLoyalityBuff(town, ref myResult);
    return myResult;
}	
```

Here the function to edit an existing factor (most of the parts are private in the models so we can't override the method that calculates the factor, instead we create another `ExplaineNumber` and change it while copying from the original model)
```csharp
public void EditLoyalityFactors(ref ExplainedNumber result,string descriptionOfFactor,float newValue,bool includeDescriptions)
{
    var listOfFactors = result.GetLines();
    var temp = new ExplainedNumber(0f, includeDescriptions, null);
    foreach (var (name, value) in listOfFactors)
    {
        if (name.Equals(descriptionOfFactor))
        {
            temp.Add(newValue,new TextObject(name, null), null);
            continue;
        }
        temp.Add(value,new TextObject(name, null), null);
    }

    result = temp;
}
```

And finally adding the new factor:
```csharp
public void VlandianLoyalityBuff(Town town, ref ExplainedNumber explainedNumber)
{
    if(town.OwnerClan != null && town.OwnerClan.Kingdom != null && town.OwnerClan.Kingdom.Name.ToString().Equals("Vlandia"))
    {
        var VlandianCultureLoyalityBuffTO = new TextObject("Vlandian culture buff", null);
        explainedNumber.Add(2f, VlandianCultureLoyalityBuffTO, null);
    }
}
```
  
### 2. Altering Behavior Class
[Modify Campaign Behavior With ReRegistering Event](./altering_existing_behavior_via_reregistering_events.md)
