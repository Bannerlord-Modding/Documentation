# ChangeOwnerOfSettlementAction

The function of this class is to set or change the owner of a settlement.

## Functions

Here is a list of functions that detail different ways a settlement can change ownership. All these functions take a :
- `ApplyByDefault(`[Hero](_csharp-api/campaignsystem/hero.md)` hero, Settlement settlement)` - Gives a hero the settlement by default. This is called at the start of a new campaign or when a player cheats and changes the ownership of a settlement manually
- `ApplyByKingDecision(Hero hero, Settlement settlement)` - Gives a hero the settlement by the king of a faction's decision at the end of voting.
- `ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement settlement)` - Gives the faction leader a settlement after a successful siege.
- `ApplyByRevolt(Hero hero, Settlement settlement)` - Gives revolter a settlement following their declaration of independence from liege.
- `ApplyByLeaveFaction(Hero hero, Settlement settlement)` - Changes owner of settlement when they leave faction (verification needed)
- `ApplyByBarter(Hero hero, Settlement settlement)` - Changes owner of settlement when a hero trades a settlement to another hero in a faction
- `ApplyByRemoveFaction(Settlement settlement)` - Functionality unknown as there is no usage of it.
- `ApplyByDestroyClan(Settlement settlement, Hero newOwner)` - Changes owner of settlement when the previous owner dies. When this is called, the settlement is given to a random child of the previous owner.

## Enums

`ChangeOwnerOfSettlementDetail` - The reason why the settlement is changing hands, see functions for explanation of these.
  - `Default`
  - `BySiege`
  - `ByBarter`
  - `ByRevolt`
  - `ByLeaveFaction`
  - `ByKingDecision`
