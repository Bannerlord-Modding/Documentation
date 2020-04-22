# Widget

Widgets（以下简称控件） 是一种强大的，用于为你的UI创建可交互内容的工具。它可能包括scrollbars（滚动条）, buttons（按钮）, tooltips（工具栏）,等等。

## 常用的预定义控件包括

* ButtonWidget（按钮）
* ImageWidget （图片）
* ListPanel（列表界面）
* RichTextWidget（富文本）
* ScrollablePanel（滚动界面）
* ScrollBarWidget（滚动条）
* TextWidget（普通文本）
* TooltipWidget（工具栏）
* Widget（控件）

### 注意
这里有非常多的控件;上面所列举的只是最常用到的控件。你可以通过反编译`TaleWorlds.GauntletUI.dll`和`TaleWorlds.MountAndBlade.GauntletUI.dll`这2个DLL文件去找到其它控件。继承于`widget`类的自定义控件的标签名将会与自定义控件类的类名相同。

## 控件常用的预定义属性包括

* Brush
* Command.Click _\(Command.自定义方法键\)_
* DataSource _\(Properties with DataSourceProperty Attribute in C\#\)_
* DoNotAcceptEvents
* HorizontalAlignment / VerticalAlignment
* Id
* MarginLeft / MarginRight / MarginTop / MarginBottom
* Sprite
* SuggestedWidth / SuggestedHeight
* Text _\(只有Text控件包含此属性\)_
* WidthSizePolicy / HeightSizePolicy

## 创建一个自定义控件

你可以通过简单的继承`widget`类来创建一个自定义控件。当这一切完成以后，你可以在[Movie](movie.md)中使用你自定义的控件。你的控件的标签名将会与你自定义控件类的类名相同。
