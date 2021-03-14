## Defining custom data
Because the game can't differentiate between it's 'built-int' datas defined in core modules and custom modules, when such custom modules are removed, the game won't load the save file without them.  
While it is expected, not every module introduces permanent changes to the save file that could render it unplayable.  
 
A valid workaround for now would be when defining a custom SaveableTypeDefiner for classes and structures to use a high enough range of numbers that the game doesn't use and when defining custom xml data to use 'custom_MODNAME_' prefix for Id's. This way it would be easier to detect custom data and remove it from game's internal storage in the future.
