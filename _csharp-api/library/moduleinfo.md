# ModuleInfo

`ModuleInfo`类里放的是Mod的详细资料。

我们可以把所有**已加载**的Mod的详细资料\(它们各自的`ModuleInfo`\)读取到一个列表`List`里面如：

```csharp
var loadedMods = new List<ModuleInfo>();
foreach(var moduleName in Utilities.GetModulesNames())
{
    var moduleInfo = new ModuleInfo();
    moduleInfo.Load(moduleName);
    loadedMods.Add(moduleInfo);
}
```

通过这个方法，我们随后可以用来判断某个Mod加载了没有。当Mod之间存在依赖关系，但又是非必须的依赖关系时会很有用。