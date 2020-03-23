# MBSubModuleBase

You can inherit from the MBSubModuleBase class to handle the loading of your module. There are several useful overrides, such as `OnSubModuleLoad()` and `OnApplicationTick()` that you can make use of.

**It is important to note that you must reference the class' fully qualified name in the module's `SubModule.xml` for this to work properly.**

Example `SubModule.xml` where `ExampleMod.MySubModule` is the fully qualified name for the class inheriting MBSubModuleBase: [SubModule.xml](../_xmldocs/submodule.md)

