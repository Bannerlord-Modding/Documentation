# MissionLogic
MissionLogic is an abstract class that inherits [MissionBehaviour](./). In addition to several additional callbacks, mission logics also have overridable methods that affect the logic of mission.

## Callbacks
- `AccelerateHorseKeyPressAnswer()` - Seems to be a deprecated callback. Use of this is not recommended.
- `OnBattleEnded()` - Called when player chooses to leave a mission with battle before it ends naturally.
- `OnMissionResultReady(MissionResult)` - Called when a mission is complete and MissionResult is created. Note that this is called before `ShowBattleResults`.
  - `MissionResult` - Calculated mission result data.
- `OnRetreatMission()` - Called when player retreats from a mission. Currently, missions with battle and arena missions seem to be missions where a player can retreat.
- `ShowBattleResults()` - Called when a mission is complete and timer for the end mission call starts. This is called before end of mission callbacks.
  
  ## Overrides
- `bool IsAgentInteractionAllowed()` - Called to determine if agents are interactable. Return true to allow interaction. Note that all mission logics need to return true for the end result to be true.
- `bool IsOrderShoutingAllowed()` - Called to determine if order voices are allowed. Return true to allow voices. Note that all mission logics need to return true for the end result to be true.
- `bool MissionEnded(ref MissionResult)` - Can be overrided to determine end of a mission. This is called every mission tick in additional to state based checks. Return true to trigger mission end. Note that only one mission logic returning true would be enough and first mission logic returning true would determine the `MissionResult`.
  - `MissionResult` - MissionResult instance to store result data. This parameter is passed with `ref` keyword.
- `InquiryData OnEndMissionRequest(out bool)` - Called when player wants to leave the mission. An `InquiryData` can be returned to show a confirmation box. Note that the first non-null `InquiryData` returned by a mission logic will be shown and this callback won't be called for the rest.
  - `bool` - Determines if the player can leave the mission. This parameter is passed with `out` keyword. Set as true if the player can leave. Note that first mission logic setting it to false will prevent player from leaving and this callback won't be called for the rest.
