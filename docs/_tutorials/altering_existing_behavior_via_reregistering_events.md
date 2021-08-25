### Adding new location to settlement
Sometimes what you wanna add/modify not be in model or there is no model,it can be even hardcoded in private methods/fields.Editing existing things hard but adding generally easy.
In this tutorial I want to walkthrough adding new interior scenes/districts to villages by playing around PlayerTownVisitCampaignBehavior

First of all let me try to explain how the settlement interactions work as far as I know.

When you go to settlement `TaleWorlds.CampaignSystem.PlayerEncounter` class creates `TaleWorlds.CampaignSystem.LocationEncounter` base on settlement you just visit.There is 3 type of encounter Town,Village,Castle and they derived from TaleWorlds.CampaignSystem.LocationEncounter
Important part here they override `CreateAndOpenMissionController()` method which creates [mission](../_csharp-api/mountandblade/mission.md)/scene.This is first thing we need to modify.These are happens in PlayerEncounter.EnterSettlement() method afterwards which calls `EnterSettlementAction`
and next part come in.

`PlayerTownVisitCampaignBehavior` class is the where most of the interactions defined.Its derived from [CampaignBehaviorBase](../_csharp-api/campaignsystem/campaignbehaviorbase.md) like other behaviors.Here we need to know about [GameMenus](../_csharp-api/campaignsystem/gamemenu.md) and [GameMenuOptions](../_csharp-api/campaignsystem/gamemenu.md).
When you enter settlement first `on_init` method of current GameMenu called then `on_condition` of method of GameMenuOptions called.Let say you click the take a walk around town center option it will call  `on_consuqence` method of that option which going to call
`TownEncounter.CreateAndOpenMissionController()` and it will create town_center scene.Let say you walk around town and went to tavern door when you use door `SandBox.Source.Objects.SettlementObjects.PassageUsePoint.OnUse()` will be called and it will assign `Campaign.Current.GameMenuManager.NextLocation` to its toLocation field which you can edit with editor(modding tools) and calls `Mission.Current.EndMission()`.
Then we again start from town menu's on_init method and it will check `Campaign.Current.GameMenuManager.NextLocation` if its not null it will create another mission.For villages there is no check like this and `VillageEncouter.CreateAndOpenMissionController()` will return null for locations different than **"village_center"**.


#1.Create Scene(s)

Make sure you have passage point with correct id(location id on xml file) on toLocation parameter for both inside/outside of scene.Save them inside your [SceneObj](../_intro/folder-structure.md) folder

#2.Override settlement.xml and location_complex_templates.xml

Just copy and paste both xml to your [ModuleData](../_intro/folder-structure.md) folder.
I will just add tavern for village_complex and will name it new_complex here how it looks
```xml
	<LocationComplexTemplate id="new_complex">
		<Location id="village_center"
				  name="{=25pNV9E3}Village Center"
				  scene_name="scn_new_interior_village"
				  indoor="false"
				  max_prosperity="40"
				  ai_can_enter="CanAlways"
				  ai_can_exit="CanAlways"
				  player_can_enter="CanAlways"
				  player_can_see="CanAlways" />
		<Location id="tavern"
				  name="{=DO7Vk4iw}Tavern test text"
				  scene_name="scn_new_interior_tavern"
				  indoor="true"
				  max_prosperity="30"
				  ai_can_enter="CanIfGrownUpMaleOrHero"
				  ai_can_exit="CanAlways"
				  player_can_enter="CanAlways"
				  player_can_see="CanAlways" />		  
		<Passages>
		  <Passage location_1="village_center"
				   location_2="tavern" />
		</Passages>
	  </LocationComplexTemplate> 
```
for village I choose Polisia since its close to starting point as empire culture,we just need to edit Locations part here how it looks
```xml
	<Locations complex_template="LocationComplexTemplate.new_complex">
		<Location id="village_center" scene_name="scn_new_interior_village" />
		<Location id="tavern" scene_name="scn_new_interior_tavern" />
	</Locations>
```
you need to add these 2 xmls to `SubModule.xml` and also need to add .xslt to override native xmls.[See here](http://docs.modding.bannerlord.com/bestpractices/xslt_usage_tutorial/)

#3.
Modify Village Encounter
```csharp
	class ModifiedVillageEncouter : VillageEncouter
	{
		public override IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)
		{
					
			IMission result = null;
			if (nextLocation.StringId == "village_center")
			{
				result = CampaignMission.OpenVillageMission(nextLocation.GetSceneName(1), nextLocation, talkToChar);
			}
			else if (nextLocation.StringId == "tavern")
			{

				result = CampaignMission.OpenIndoorMission(nextLocation.GetSceneName(1), 1, nextLocation, talkToChar);
			}
			return result;
		}
	}
```
#4.
Lets write modified behavior
```csharp
	class ModifiedPlayerTownVisitCampaignBehavior : PlayerTownVisitCampaignBehavior
	{
		public ModifiedPlayerTownVisitCampaignBehavior(IGameStarter gameStarter)
		{
			//Removing original Behavior
			CampaignBehaviorBase behaviorInstance = (gameStarter as CampaignGameStarter).CampaignBehaviors.ToList<CampaignBehaviorBase>().Find(x => x.GetType()==typeof(PlayerTownVisitCampaignBehavior));
			(gameStarter as CampaignGameStarter).RemoveBehavior<PlayerTownVisitCampaignBehavior>(behaviorInstance as PlayerTownVisitCampaignBehavior);
		}
	}	
```
#5.
Lets add [GameMenuOption](../_csharp-api/campaignsystem/gamemenu.md) and its delegates,here you can add another GameMenu as distirct and stuff I will keep it simple.Since GameMenuOption's on_condition called after GameMenu's on_init I will use it with same manner.Its really up to you.
```csharp
	protected new void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)
	{
		campaignGameSystemStarter.AddGameMenuOption("village", "tavern", "{=l9sFJawW}Visit the local inn!!",
			new GameMenuOption.OnConditionDelegate(this.game_menu_village_village_inn_on_condition),
			new GameMenuOption.OnConsequenceDelegate(this.game_menu_village_village_inn_on_consequence), false, 0);
	}  

	public bool game_menu_village_village_inn_on_condition(MenuCallbackArgs args)
	{     
		//check if player try to go an interior scene
		//you can just just return false and option will not be visible also you can enable it for specific settlement etc. here like:
		//if(!Settlement.CurrentSettlement.LocationComplex.GetListOfLocations().Any((Location x) => x.StringId == "tavern")) return false
		if (this.CheckAndOpenNextLocation(args))
		{
			return false;
		}
		//these part I believe possible quest and helper icons inside scene when you press ALT
		bool shouldBeDisabled;
		TextObject disabledText;
		bool canPlayerDo = Campaign.Current.Models.SettlementAccessModel.CanMainHeroAccessLocation(Settlement.CurrentSettlement, "tavern", out shouldBeDisabled, out disabledText);
		List<Location> currentLocations = Settlement.CurrentSettlement.LocationComplex.FindAll((string x) => x == "tavern").ToList<Location>();
		args.OptionIssueType = Campaign.Current.IssueManager.CheckIssueForMenuLocations(currentLocations);
		args.OptionQuestStatus = Campaign.Current.QuestManager.CheckQuestForMenuLocations(currentLocations);
		args.optionLeaveType = GameMenuOption.LeaveType.Submenu;
		
		return MenuHelper.SetOptionProperties(args, canPlayerDo, shouldBeDisabled, disabledText);
	}     

	private void game_menu_village_village_inn_on_consequence(MenuCallbackArgs args)
	{
		//it doesnt work setting next location and call CheckAndOpenNextLocation due to MapState basicially same code in CheckAndOpenNextLocation probably can be reduced to 1 method
		Settlement currentSettlement = PlayerEncounter.EncounterSettlement;
		PlayerEncounter.LocationEncounter = new ModifiedVillageEncouter(currentSettlement);//here we use our modified encounter
		PlayerEncounter.LocationEncounter.CreateAndOpenMissionController(LocationComplex.Current.GetLocationWithId("tavern"),
			LocationComplex.Current.GetLocationWithId("village_center"), null, null);
					
		Campaign.Current.GameMenuManager.NextLocation = null;
		Campaign.Current.GameMenuManager.PreviousLocation = null;
	}     
```
#6.
Lets add CheckAndOpenNextLocation method, the methods have same naming convention(if not same) with parent class to when you check it you can recognize.
```csharp
	public bool CheckAndOpenNextLocation(MenuCallbackArgs args)
	{
		/check if player try to go an interior scene
		if (Campaign.Current.GameMenuManager.NextLocation != null && GameStateManager.Current.ActiveState is MapState)
		{
			Settlement currentSettlement = PlayerEncounter.EncounterSettlement;
			string stringId = Campaign.Current.GameMenuManager.NextLocation.StringId;

			
			PlayerEncounter.LocationEncounter = new ModifiedVillageEncouter(currentSettlement);

			PlayerEncounter.LocationEncounter.CreateAndOpenMissionController(Campaign.Current.GameMenuManager.NextLocation,
			Campaign.Current.GameMenuManager.PreviousLocation, null, null);
			//its important to set these 2 to null because after mission end game switch to menu and if Next location not null it will loop here(passage points(Doors) does assign next points)
			Campaign.Current.GameMenuManager.NextLocation = null;
			Campaign.Current.GameMenuManager.PreviousLocation = null;
						
			//this is which menu will be game showing after mission end(using passage points(door) also ends mission)
			//hard coded it will go village menu every time when player leave area
			Campaign.Current.GameMenuManager.SetNextMenu("village");
						
			return true;
		}
		return false;
	}
```
There is some stuffs in parent class  for Game Menu indexes etc.

#7.
Finally this part is important,modifying existing behaviors you need to understand how it works partially if not whole but at the end you can do this for every one of them(if the event did not occur before here)
Till here all we did add a menu option and edit VillageEncounter here we'll first call parent's register event then delete listeners on the function we edited(AddGameMenu in this situation) and add listener again.
```csharp
	public new void OnAfterNewGameCreated(CampaignGameStarter campaignGameStarter)
	{
		base.OnAfterNewGameCreated(campaignGameStarter);//Parent class call add game menu here
		this.AddGameMenus(campaignGameStarter);
	}
	public override void RegisterEvents()
	{
		//ReRegister original events
		base.RegisterEvents();
		//Get behavior, it is this class now(removed on constructor)
		CampaignBehaviorBase baseToModify = Campaign.Current.CampaignBehaviorManager.GetBehavior<ModifiedPlayerTownVisitCampaignBehavior>();
		//Remove listener on modified method
		CampaignEvents.OnNewGameCreatedEvent.ClearListeners(baseToModify);
		CampaignEvents.OnGameLoadedEvent.ClearListeners(baseToModify);
		//Add listener back with new method
		CampaignEvents.OnNewGameCreatedEvent.AddNonSerializedListener(this, new Action<CampaignGameStarter>(this.OnAfterNewGameCreated));
		CampaignEvents.OnGameLoadedEvent.AddNonSerializedListener(this, new Action<CampaignGameStarter>(this.OnAfterNewGameCreated));
	}
```
#8.
Add modified behavior to gameStarter
```csharp
	public class VillageInteriorScene : MBSubModuleBase
	{
		protected override void InitializeGameStarter(Game game, IGameStarter starterObject)
		{
			(starterObject as CampaignGameStarter).AddBehavior(new ModifiedPlayerTownVisitCampaignBehavior(starterObject));
		}
	}
```