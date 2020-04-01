# MissionView

Mission Views are a type of [MissionBehaviour](./) that are usually intended for the client and generally involve interacting with UI elements.

An example of this is the `MissionMainAgentController` MissionView, which handles anything from movement for the player \(via inputs\) to checking if the player is requesting to spawn as a bot.

Note that `MissionMainAgentController` has the `DefaultView` attribute applied to it. This means that it will be loaded automatically for Missions that enable loading default views with the `AddDefaultMissionBehavioursTo()` method.

