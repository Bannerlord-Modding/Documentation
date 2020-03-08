# Movie (XML)

Movies are used when you open any new [GauntletView]((../_docs/GauntletView.md)) or [ScreenBase]((../_docs/ScreenBase.md)). They are loaded through the [GauntletMovie](../_docs/GauntletMovie.md) class.

The template for a movie is as follows:

```xml
<Prefab>
    <Constants>
        <!-- Insert Summary Here -->
    </Constants>
    <Variables>
        <!-- Insert Summary Here -->
    </Variables>
    <VisualDefinitions>
        <!-- Insert Summary Here -->
    </VisualDefinitions>
    <Window>
        <!-- Insert Summary Here -->
    </Window>
</Prefab>
```

You will spend most of your time adding child elements ([Widgets](../_docs/Widget.md)) to the `Window` element.
