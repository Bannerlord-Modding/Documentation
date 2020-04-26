# Input

This static type provides you with input functionality, the base input system has no events to bind to and supports polling only. It's largely self explanatory with a few possible gotchas.

## Key Reading

There's a number of usefull methods that detect keys being pressed down in different ways, all seeming to return a 'bool'. Most common are `isKeyDown`, `isKeyPressed` and `isKeyReleased`

You can also use the extension methods `IsDown`/`IsPressed`/`IsReleased` as such `KeyCode.A.IsPressed()`

Below, you may find an in-depth documentation of each.

 ### Input.IsKeyDown(InputKey.[key])
   This checks to see if the specified [key] is currently being pressed, it returns true as long as the [key] is held down. 
   
   Example:
   
``
 if(Input.IsKeyDown(InputKey.Y)){
 
  //doSomething
  
   } ``
        
 ### Input.IsKeyDownImmediate(InputKey.[key])
   This acts as an intermediary check between `IsKeyDown` and `IsKeyPressed`      
   
   Example:
   
``
        if(Input.IsKeyDownImmediate(InputKey.Y)){
        
        //doSomething
        
        }``
        
 ### Input.IsKeyPressed(InputKey.[key])
   This checks to see if the specified [key] has been pressed, it returns a bool once. 
   
   Example:
   
``
        if(Input.IsKeyPressed(InputKey.Y)){
        
        //doSomething
        
        }``
        
 ### Input.IsKeyReleased(InputKey.[key])
   This checks to see if the specified [key] is not currently being pressed, it returns a bool once. 
   
   Example:
   
``
        if(Input.IsKeyReleased(InputKey.Y)){
        
        //doSomething
        
        }  ``
      
 ### Notice that one could document the stages of a key using the above 3, 
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
    ```
