Sometimes you might wanna alter some of existing behaviors.Here we try to do this wit 2 different aproach.
### 1-With GameModels
GameModels derived from TaleWorlds.Core.GameModel class,there is naming convention like this  *Something*Model(abstract class derived from GameModels)  and *DefaultSomething*Model(derived from *Something*Model)

Some behaviors has related game models which includes key factors for behaviors.You need to check whether your need in model(if there is) or not.

**Note:**Before we start these are what I could do with my knowledge,there is alot way to do this(probably better ways) but once you get the idea you can do as you need.
For this tutorial I want to edit SettlementLoyaltyModel and do followings:

1.Add +2 Loyality Buff for Settlement belongs to Vlandian Kingdom lets say as Culturel Buff
2.Change the Owner Culture Debuff from -3 to -1
3.Change the DailyNotableRelationBonus from 1-->2 and threshold for this to happen from 75-->55

first extend model 
```csharp
class ModifiedDefaultSettlementLoyaltyModel : DefaultSettlementLoyaltyModel
```

add new model with gameStarter
```csharp
	protected override void InitializeGameStarter(Game game, IGameStarter starterObject)
    {       
        (starterObject as CampaignGameStarter).AddModel(new ModifiedDefaultSettlementLoyaltyModel());
    }
```
Note:It does remove/(not add at all) original DefaultSettlementLoyaltyModel while creating GameModelManager in AddGameModelsManager() method in TaleWorlds.Core.Game class.If someone else figure it out please edit here.

lets override things we want to edit

```csharp
	public override int DailyNotableRelationBonus
    {
		get
		{
			return 2;
		}
    }
	public override float ThresholdForNotableRelationBonus
    {
        get
        {
            return 55f;
        }
    }
	
	public override ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)
    {
        ExplainedNumber myResult = base.CalculateLoyaltyChange(town, includeDescriptions);
               
        EditLoyalityFactors(ref myResult,"Owner Culture",-1f,includeDescriptions);
        VlandianLoyalityBuff(town, ref myResult);
        return myResult;
    }	
```
here the function to Edit existing factor(most of the part are private in models so we cant override method that calculate factor,instead create another ExplaineNumber and edit while copying from other one)
```csharp
	public void EditLoyalityFactors(ref ExplainedNumber result,string descriptionOfFactor,float newValue,bool includeDescriptions)
    {
        List<(string name, float value)> listOfFactors = result.GetLines();
        ExplainedNumber temp = new ExplainedNumber(0f, includeDescriptions, null);
        foreach (var (name,value) in listOfFactors)
        {
            if (name.Equals(descriptionOfFactor))
            {
                temp.Add(newValue,new TextObject(name,null),null);
                continue;
            }
            temp.Add(value,new TextObject(name,null),null);
        }

        result = temp;
    }
```
and finally adding new factor
```csharp
	public void VlandianLoyalityBuff(Town town,ref ExplainedNumber explainedNumber)
    {
		if(town.OwnerClan != null && town.OwnerClan.Kingdom != null && town.OwnerClan.Kingdom.Name.ToString().Equals("Vlandia"))
        {
			TextObject VlandianCultureLoyalityBuffTO = new TextObject("Vlandian culture buff", null);
            explainedNumber.Add(2f, VlandianCultureLoyalityBuffTO, null);
        }
    }
```
### 2-Altering Behavior Class
[Modify Campaign Behavior With ReRegistering Event](./altering_existing_behavior_via_reregistering_events.md)