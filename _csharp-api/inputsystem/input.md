# Input

This static type provides you with input functionality, the base input system has no events to bind to and supports polling only. It's largely self explanatory with a few possible gotchas.

## Key Polling

`GetKeyDown(KeyCode)` | `GetKeyPressed(KeyCode)` | `GetKeyReleased(KeyCode)` - These are likely to be the most commonly used methods, `GetKeyDown` will return true on any number of frames so long as a key is down, this can cause undesired behaviour. If you only want to read an input once, use `GetKeyPressed` or `GetKeyReleased`.

You can also use the extension methods `IsDown`/`IsPressed`/`IsReleased` like so `KeyCode.A.IsPressed()`