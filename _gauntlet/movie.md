# Movie \(XML\)

Movies are used when you open any new [GauntletView](https://github.com/Bannerlord-Modding/Documentation/tree/e1750735f93f2bf8930a82342deb76c028938da5/_docs/gauntletview.md) or [ScreenBase](https://github.com/Bannerlord-Modding/Documentation/tree/e1750735f93f2bf8930a82342deb76c028938da5/_docs/screenbase.md). They are loaded through the [GauntletMovie](https://github.com/Bannerlord-Modding/Documentation/tree/e1750735f93f2bf8930a82342deb76c028938da5/_docs/gauntletmovie.md) class.

The template for a movie is as follows:

```markup
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

You will spend most of your time adding child elements \([Widgets](https://github.com/Bannerlord-Modding/Documentation/tree/e1750735f93f2bf8930a82342deb76c028938da5/_docs/widget.md)\) to the `Window` element.

