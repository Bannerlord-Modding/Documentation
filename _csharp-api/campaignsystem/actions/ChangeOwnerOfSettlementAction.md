# ChangeOwnerOfSettlementAction

The function of this class is to set or change the owner of a settlement.

## Functions

Here is a list of functions that detail different ways a settlement can change ownership:
- `ApplyByDefault(Hero hero, Settlement settlement)` - Gives a hero the settlement by default. This is called at the start of a new campaign or when a player cheats and changes the ownership of a settlement manually
  - `Hero hero` - The character that will receive the settlement
  - `Settlement settlement` - The settlement which the hero will receive
- `ApplyByKingDecision(Hero hero, Settlement settlement)` - Gives a hero the settlement by the king of a faction's decision at the end of voting.
  - `Hero hero` - The vassal of the king that will receive the settlement
  - `Settlement settlement` - The settlement which the king bestowed upon the hero
- `ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement)` - Gives the faction leader a settlement after a successful siege.
  - `Hero newOwner` - The character that will receive the settlement (Faction leader until they decide who to give it to)
  - `Hero capturerHero` - The character that led the siege of the settlement and succeeded
  - `Settlement` - The settlement which was just conquered
- `ApplyByRevolt(Hero hero, Settlement settlement)` - Gives revolter a settlement following their declaration of independence from liege.
  - `Hero hero' - The character revolting from liege
  - 'Settlement settlement' - The settlement that the revolter will get
- `ApplyByLeaveFaction(Hero hero, Settlement settlement)` - Changes owner of settlement when they leave faction (verification needed)
  - `Hero hero' - The character leaving the faction
  - `Settlement settlement` - The settlement that the character will get
- `ApplyByBarter(Hero hero, Settlement settlement)` - Changes owner of settlement when a hero trades a settlement to another hero in a faction
  - `Hero hero' - The character receiving the settlement in a trade
  - `Settlement settlement` - The settlement that is being traded
- `ApplyByRemoveFaction(Settlement settlement)` - Functionality unknown as there is no usage of it.
- `ApplyByDestroyClan(Settlement settlement, Hero newOwner)` - Changes owner of settlement when the previous owner dies. When this is called, the settlement is given to a random child of the previous owner.
  - `Settlement settlement` - Settlement that is being inherited
  - `Hero newOwner` - The person that is inheriting the settlement

##Enums

`ChangeOwnerOfSettlementDetail` - The reason why the settlement is changing hands, see functions for explanation of these.
  - `Default`
  - `BySiege'
  - `ByBarter`
  - `ByRevolt`
  - `ByLeaveFaction`
  - `ByKingDecision`
