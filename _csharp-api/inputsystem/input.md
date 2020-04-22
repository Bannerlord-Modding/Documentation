# Input

`Input`这个静态类型用来提供输入功能。基本的输入系统并不是基于事件绑定的，而是采用轮询的方式。这部分内容比较直观，一般来说看函数名就知道用法，但也会有几个坑。

## 按键轮询

`GetKeyDown(KeyCode)` | `GetKeyPressed(KeyCode)` | `GetKeyReleased(KeyCode)` - 这几个貌似是最常用的方法了。 关于 `GetKeyDown` 请注意：只要键盘按键处于按下状态，程序就会在每一帧持续不断地返回`true`，显然这会导致运行一些不必要的方法\(造成资源浪费\)。假如你只想触发一次按键操作，可以用`GetKeyPressed` 或者 `GetKeyReleased`。

还有几个扩展方法也可以达到按键的效果:`IsDown`/`IsPressed`/`IsReleased`。用法如： `KeyCode.A.IsPressed()`。