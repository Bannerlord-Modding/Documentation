# ChangeOwnerOfSettlementAction

The function of this class is to set or change the owner of a settlement.

## Functions

Here is a list of functions that detail different ways a settlement can change ownership:
- `ApplyByDefault(`[Hero](../hero.md)`hero, `[Settlement](../settlement.md)`settlement)` - Called at the start of a campaign or when a player cheats to attain a settlement
- `ApplyByKingDecision(`[Hero](../hero.md)`hero, `[Settlement](../settlement.md)`settlement)`
- `ApplyBySiege(`[Hero](../hero.md)`newOwner, `[Hero](../hero.md)`capturerHero, `[Settlement](../settlement.md)`settlement)`
- `ApplyByRevolt(`[Hero](../hero.md)`hero, `[Settlement](../settlement.md)`settlement)`
- `ApplyByLeaveFaction(`[Hero](../hero.md)`hero, `[Settlement](../settlement.md)`settlement)`
- `ApplyByBarter(`[Hero](../hero.md)`hero, `[Settlement](../settlement.md)`settlement)`
- `ApplyByRemoveFaction(`[Settlement](../settlement.md)`settlement)`
- `ApplyByDestroyClan(`[Settlement](../settlement.md)`settlement, `[Hero](../hero.md)`newOwner)` - Called when owner of settlement dies, when this happens, the fief is passed to a random child of the previous owner
