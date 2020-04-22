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
  **类型:** `string`  
  **例子:**  `sturgia_axe_3_t3`  
  *The ID of the item*  
  
- #### name
  **类型:**  `string`  
  **例子:**  `{=wW3iouiU}Hijab`  
  *Note: The prefix in the `{=}` format is the translation id found in strings.txt*  
  *TODO: Find out if this is auto generated.*  

- #### crafting_template
  **类型:**  `string`  
  **possible values:** `'TwoHandedPolearm', 'OneHandedAxe', 'Mace', 'TwoHandedAxe', 'OneHandedSword', 'TwoHandedSword', 'Pike', 'Dagger', 'Javelin', 'ThrowingAxe', 'ThrowingKnife'`  
  **例子:** `TwoHandedPolearm`
  
- #### culture
  **类型:**  `string`  
  **possible values:** `'Culture.aserai', 'Culture.sturgia', 'Culture.battania', 'Culture.looters', 'Culture.khuzait', 'Culture.vlandia', 'Culture.empire', 'Culture.neutral_culture'`  
  **例子:** `Culture.aserai`  

- #### is_merchandise
  **类型:**  `boolean`  
  **例子:** `false`  
  *If the item is marketable*