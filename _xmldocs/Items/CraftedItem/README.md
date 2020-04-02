# CraftedItem

## Example Entry
Source: Modules/SandBoxCore/ModuleData/spitems.xml
```xml
  <CraftedItem id="peasant_maul_t1"
               name="{=gYpNILVC}Sledgehammer"
               crafting_template="TwoHandedPolearm"
               culture="Culture.battania">
    <Pieces>
      <Piece id="spear_blade_44"
             Type="Blade"
             scale_factor="102" />
      <Piece id="spear_handle_1"
             Type="Handle" />
    </Pieces>
  </CraftedItem>
```

## Parent node
- [Items](../../Items)

## Child node
- [Pieces](Pieces)

## Attributes
[id](#id) | [name](#name) | [crafting_template](#crafting_template) | [culture](#culture) | [is_merchandise](#is_merchandise)

- #### id
  **type:** `string`  
  **example:**  `sturgia_axe_3_t3`  
  *The ID of the item*  
  
- #### name
  **type:**  `string`  
  **example:**  `{=wW3iouiU}Hijab`  
  *Note: The prefix in the `{=}` format is the translation id found in strings.txt*  
  *TODO: Find out if this is auto generated.*  

- #### crafting_template
  **type:**  `string`  
  **possible values:** `'TwoHandedPolearm', 'OneHandedAxe', 'Mace', 'TwoHandedAxe', 'OneHandedSword', 'TwoHandedSword', 'Pike', 'Dagger', 'Javelin', 'ThrowingAxe', 'ThrowingKnife'`  
  **example:** `TwoHandedPolearm`
  
- #### culture
  **type:**  `string`  
  **possible values:** `'Culture.aserai', 'Culture.sturgia', 'Culture.battania', 'Culture.looters', 'Culture.khuzait', 'Culture.vlandia', 'Culture.empire', 'Culture.neutral_culture'`  
  **example:** `Culture.aserai`  

- #### is_merchandise
  **type:**  `boolean`  
  **example:** `false`  
  *If the item is marketable*