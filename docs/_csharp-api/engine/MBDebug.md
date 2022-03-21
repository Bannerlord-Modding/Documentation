# MBDebug

MBDebug contains helper functions for easy display of debugging information.

Note that some methods have the attribute `[Conditional("_RGL_KEEP_ASSERTS")]`, meaning, the call is not compiled unless the `_RGL_KEEP_ASSERTS` compiler condition is set.  

Set the conditional compile flag by navigation to the project properties -> `Build`, and set `Conditional compilation symbols` to `_RGL_KEEP_ASSERTS`.


## Examples

### Drawing debug lines showing where every caravan on the map is and where it is going.

Requires `_RGL_KEEP_ASSERTS` compilation flag.

```cs
using TaleWorlds.Engine;

// ARGB color
uint destArrowColor = 0xb0ea7712;
foreach (var caravan in MobileParty.AllCaravanParties)
{
    var destination = caravan.TargetSettlement;

    if (destination is null)
    {
        continue;
    }
    
    Vec3 caravanPos = caravan.GetPosition();
    Vec3 destPos = destination.GetPosition();

    MBDebug.RenderDebugDirectionArrow(caravanPos, destPos - caravanPos, destArrowColor, false);
}
```