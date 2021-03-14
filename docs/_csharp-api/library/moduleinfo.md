# ModuleInfo

The ModuleInfo class contains information about each module.


You can get a list of all **loaded** mods with detailed information about them (their ModuleInfo) by doing something like this:

```csharp
var loadedMods = new List<ModuleInfo>();
foreach(var moduleName in Utilities.GetModulesNames())
{
    var moduleInfo = new ModuleInfo();
    moduleInfo.Load(moduleName);
    loadedMods.Add(moduleInfo);
}
```
The Utilities class is part of the Talewords.Engine namespace, and the GetModulesNames() function returns a list of all the names of loaded modules.

This could be used to determine whether a module has been loaded or not, which is useful for mods that have optional dependencies.
