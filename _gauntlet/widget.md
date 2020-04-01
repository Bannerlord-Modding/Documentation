# Widget

Widgets are a great way to create interactable content for your UIs. This may include scrollbars, buttons, tooltips, and so on.

## Common Predefined Widgets Include

* ButtonWidget
* ImageWidget
* ListPanel
* RichTextWidget
* ScrollablePanel
* ScrollBarWidget
* TextWidget
* TooltipWidget
* Widget

### Note

There many more widgets; the above are just the most commonly used widgets. You can find the other widgets by decompiling the `TaleWorlds.GauntletUI.dll` and `TaleWorlds.MountAndBlade.GauntletUI.dll` DLLs. Widgets inherit the `Widget` class and the tag name for that widget will be the same as class name.

## Common Predefined Attributes for Widgets Include

* Brush
* Command.Click _\(Command.YourKeyHere\)_
* DataSource _\(Properties with DataSourceProperty Attribute in C\#\)_
* DoNotAcceptEvents
* HorizontalAlignment / VerticalAlignment
* Id
* MarginLeft / MarginRight / MarginTop / MarginBottom
* Sprite
* SuggestedWidth / SuggestedHeight
* Text _\(Text Widgets only\)_
* WidthSizePolicy / HeightSizePolicy

## Creating a Custom Widget

You can create a custom widget by simply creating a class that inherits from `Widget`. After doing so, you can use your Widget inside any [Movie](../_xmldocs/movie.md). The tag name for your widget will be the same as the class name you used for it.

