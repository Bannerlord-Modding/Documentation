Work In Progress by Watikita, V1.1
# Agent [Type]

你可以把媒介(`agent`)想象成游戏里任何**能走动**的实体。

比方说可以是玩家，NPC，甚至是一匹马。

## Relevant methods and properties

| Syntax                      | Return Type                 | Does What?                                              | Available Values/Extensions            | Example                                         |
|-----------------------------|-----------------------------|---------------------------------------------------------|----------------------------------------|-------------------------------------------------|
| unit.Age                    | public float                | Get/Set the age of the agent                            | N/A                                    | `float age = unit.Age`                          |
| unit.AgentRole              | public AgentRole            | Get/Set the role of the agent                           | I have no idea.                        | I have no idea.                                 |
| unit.Scale                  | public float                | Get the scaling factor of the agent                     | N/A                                    | `float scale = unit.Scale`                      |
| unit.AIStateFlags           | public AIStateFlag          | Get or sets the [state flag] of the AI                  | Alarmed, Cautious, Guard, None, Paused | `unit.AIStateFlags = Agent.AIStateFlag.Alarmed` |
| unit.AttackDirection        | public AttackDirection      | Get the direction the Agent is attacking towards        | Top, Left, Down, Right                 |                                                 |
| unit.Character              | public BasicCharacterObject | Used to link between Hero.MainHero and the player Agent | [unit.Character]                       |                                                 |
| unit.ClearAttachedWeapons   | public void                 | Clears the weapons attached to the Agent                | N/A                                    | Method                                          |
| unit.ClearAttachedEquipment | public void                 | Clears the equipment attached to the Agent              | N/A                                    | Method                                          |
| unit.ClothingColor1         | public Color                | Gets the clothing color of the agent                    | N/A                                    | I have no idea.                                 |
| unit.Controller             | public Contorller           | Get/Set the controller of the agent                     | Player, AI                             | I have no idea.                                 |
| unit.CrouchMode             | public bool                 | Returns true if the agent is crouched                   | N/A                                    | bool crouch = unit.CrouchMode;                  |

## Relevant boolean properties


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
