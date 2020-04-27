# Input

This static type provides you with input functionality, the base input system has no events to bind to and supports polling only. It's largely self explanatory with a few possible gotchas.

## Key Reading

There's a number of useful methods that detect keys being pressed down in different ways, all seeming to return a 'bool'. Most common are `IsKeyDown`, `IsKeyPressed` and `IsKeyReleased`

You can call them like so: `Input.IsKeyDown(InputKey.TheKeyCode)`. See here for a list of all keycodes: [link](#key-codes)

You can also use the extension methods `IsDown`/`IsPressed`/`IsReleased` as such `KeyCode.A.IsPressed()`

Below, you may find an in-depth documentation of each.

#### Namespace

This page assumes an import like so: `using TaleWorlds.InputSystem;`

 ### public static bool Input.IsKeyDown([InputKey](#key-codes) key)
  This checks to see if the specified [key] is currently being pressed, it returns true as long as the [key] is held down. 
   
  Example:
   
 ```CSharp
 
   if(Input.IsKeyDown(InputKey.Y))
   {
 
       //doSomething
  
   } 
 ```
        
 ### public static bool Input.IsKeyDownImmediate([InputKey](#key-codes) key)
   This acts as an intermediary check between `IsKeyDown` and `IsKeyPressed`      
   
   Example:
   
  ```CSharp
  
    if(Input.IsKeyDownImmediate(InputKey.Y))
    {
    
        //doSomething
        
    }
  ```
        
 ### public static bool Input.IsKeyPressed([InputKey](#key-codes) key)
  This checks to see if the specified [key] has been pressed, it returns a bool once. 
  
  Example:
  
  ```CSharp
  
    if(Input.IsKeyPressed(InputKey.Y))
    {
        
        //doSomething
        
    }
  ```
 ### public static bool Input.IsKeyReleased([InputKey](#key-codes) key)
  This checks to see if the specified [key] is not currently being pressed, it returns a bool once. 
   
  Example:
  
  ```CSharp
  
    if(Input.IsKeyReleased(InputKey.Y))
    {
        
        //doSomething
        
    } 
  ```
 #### To see how one could document the stages of a key using the above 3 methods: [example](#monitoring-a-keys-state)
 
 ### public static bool Input.IsControlOrShiftNotDown()
  I do not believe there is any other method more self-explanatory than this. Returns true while neither Control or Shift are down.

### public static bool Input.IsPressed([InputKey](#key-codes) key)
  Checks to see if a they specified [key] is currently pressed. Unlike IsDown, it can be used as Input.IsPressed() but not as an extension.

### public static Vector2 Input.GetKeyState([InputKey](#key-codes) key)
  Checks and returns the current state of the specified [key] as a Vector2.
  I am not aware how this can be used.
  
  Example:
  ```CSharp
  using System.Numerics; // WARNING, this assumes the existance of System.Numerics.Vectors.dll,
                         // which has to be installed manually.
  using Taleworlds.InputSystem;
  
  Vector2 test = new Vector2(Input.GetKeyState(InputKey.A));
  
  Vector2 compare = new Vector2(10, 10);
  
  if (Equals(test, compare))
    InformationManager.DisplayMessage(new InformationMessage("Help please I'm forced to write this doc!"));
    
  ```
### public static string Input.GetKeyboardText()
 Returns the text currently existing in the user's clipboard as a string.

### public static bool Input.IsMouseActive
 Checks to see if the mouse is currently active, if so returns `true`.

### public static bool Input.IsMouseScrollChanged
 Checks to see if the mouse scroll wheel is currently rotating, if so returns `true`.

### public static float Input.MouseMoveX
 Returns the horizontal position of the mouse as a float.

### public static float Input.MouseMoveY
 Returns the vertical position of the mouse as a float.

## Examples
### Monitoring a key's state
  ```CSharp
  protected override void OnApplicationTick(float dt)
  {
    int x = 0;
    int y = 0;
    int z = 0;
    //If X has been pressed, increment x by 1
    if(Input.IsKeyPressed(InputKey.X))
      x++;
    //For each tick that X is being held down, increment y by 1
    if(Input.IsKeyDown(InputKey.X))
      y++;
    //For each tick that X is untouched, increment z by 1
    if(Input.IsKeyReleased(InputKey.X))
      z++;
  }   
  ```
  
## Key Codes

As of Bannerlord 1.2.1 the following key codes are available:

```CSharp
public enum InputKey
{
    Invalid,
    Escape,
    D1,
    D2,
    D3,
    D4,
    D5,
    D6,
    D7,
    D8,
    D9,
    D0,
    Minus,
    Equals,
    BackSpace,
    Tab,
    Q,
    W,
    E,
    R,
    T,
    Y,
    U,
    I,
    O,
    P,
    OpenBraces,
    CloseBraces,
    Enter,
    LeftControl,
    A,
    S,
    D,
    F,
    G,
    H,
    J,
    K,
    L,
    SemiColon,
    Apostrophe,
    Tilde,
    LeftShift,
    BackSlash,
    Z,
    X,
    C,
    V,
    B,
    N,
    M,
    Comma,
    Period,
    Slash,
    RightShift,
    NumpadMultiply,
    LeftAlt,
    Space,
    CapsLock,
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8,
    F9,
    F10,
    Numpad7,
    Numpad8,
    Numpad9,
    NumpadMinus,
    Numpad4,
    Numpad5,
    Numpad6,
    NumpadPlus,
    Numpad1,
    Numpad2,
    Numpad3,
    Numpad0,
    NumpadPeriod,
    Extended,
    F11,
    F12,
    NumpadEnter,
    RightControl,
    NumpadSlash,
    RightAlt,
    NumLock,
    Home,
    Up,
    PageUp,
    Left,
    Right,
    End,
    Down,
    PageDown,
    Insert,
    Delete,
    ControllerLStick,
    ControllerRStick,
    LeftMouseButton,
    RightMouseButton,
    MiddleMouseButton,
    X1MouseButton,
    X2MouseButton,
    MouseScrollUp,
    MouseScrollDown,
    ControllerLStickUp,
    ControllerLStickDown,
    ControllerLStickLeft,
    ControllerLStickRight,
    ControllerRStickUp,
    ControllerRStickDown,
    ControllerRStickLeft,
    ControllerRStickRight,
    ControllerLUp,
    ControllerLDown,
    ControllerLLeft,
    ControllerLRight,
    ControllerRUp,
    ControllerRDown,
    ControllerRLeft,
    ControllerRRight,
    ControllerLBumper,
    ControllerRBumper,
    ControllerLOption,
    ControllerROption,
    ControllerLThumb,
    ControllerRThumb,
    ControllerLTrigger,
    ControllerRTrigger,
}
```
