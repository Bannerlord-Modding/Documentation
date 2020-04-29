# Agent [Type]

You can think of an agent as any **living** entity in the game.

This might be the player, an NPC character, or even a horse.




## Tips

* You can get the player agent through the `Agent.Main` property (assuming they are alive).

# Agent [Class]
 The agent class is the class used to access the universal types of properties that all Agents have.
 
## Nested Enums

| Name                 | Type | Contains / Does                                                                                | Arguments/Enum listings                                                                                                                          | Tips                                                                       |
|----------------------|------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Agent.AiStateFlag    | Enum | A set of all available State Flags                                                             | Alarmed, Cautious, Guard, None, Paused, UseObjectMoving, UseObjectUsing, UseObjectWaiting                                                        |                                                                            |
| Agent.ControllerType | Enum | A set of all available Control Types, if control type is player the agent is player-controlled | AI, Count, None, Player                                                                                                                          | Can be also use with Agent.Main.ControllerType to set to player controller |
| Agent.CreationType   | Enum | A set of all available Creation Types, only use is finding Horses afaik                        | FromCharacterObj, FromHorseObj, FromRooster, Invalid                                                                                             |                                                                            |
| Agent.KillInfo       | Enum | A set of information related to how an Agent was killed, should dedicate an entire section     | ALL weapon types, each has their own listings that return strings/ints                                                                           |                                                                            |
| Agent.GuardMode      | Enum | A set of all the defensive directions one could guard from                                     | Top, Left, Down, Right                                                                                                                           |                                                                            |
| Agent.UsageDirection | Enum | A set of all directions and actions one could use do any held item.                            | AttackAny, AttackTop, AttackLeft, AttackCenter, AttackDown, AttackRight, DefendAny, DefendTop, DefendLeft, DefendCenter, DefendDown, DefendRight |                                                                            |
