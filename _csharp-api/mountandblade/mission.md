# Mission

You can think of Missions as GameModes(Battles/TeamDeathMatch) etc. Missions are instantiated with a [Scene](../engine/scene.md), [MissionViews](missionbehaviour/missionview.md), and [MissionBehaviours](missionbehaviour/README.md).

More information on missions will be available once we gain access to the `CampaignSystem` DLLs.

## Tips

* You can get the current mission instance (if any) by using `Mission.Current` property.

## Mission States

The mission state tells you the current state of the mission, such as initializing, loading, or ending. This is can be useful if you only want certain code running in these different states.

```csharp
if (Mission.Current.CurrentState == Mission.State.Initializing)
{
	// Run mission startup code here
}
```

## Harmony

The Mission class has a lot of combat methods you can alter with Harmony.

```csharp
// This method executes when a melee hit strikes anything.
// There are a lot of things you could alter to change up the combat with this method. 
[HarmonyPatch("MeleeHitCallback")]

// This method executes when an Agent has been hit. I'm pretty sure it doesn't execute if the attack was blocked.
[HarmonyPatch("RegisterBlow")]
```
