# MBSubModuleBase

You can inherit from the MBSubModuleBase class to handle the loading of your module. There are several useful overrides, such as `OnSubModuleLoad()` and `OnApplicationTick()` that you can make use of.

**It is important to note that you must reference the class' fully qualified name in the module's `SubModule.xml` for this to work properly.**

Example `SubModule.xml` where `ExampleMod.MySubModule` is the fully qualified name for the class inheriting MBSubModuleBase:

```markup
<Module>
    <Name value = "MyModule"/>
    <Id value = "MyModule"/>
    <Version value = "1.0"/>
    <SingleplayerModule value="true"/>
    <MultiplayerModule value="false"/>
    <DependedModules/>
    <SubModules>
        <SubModule>
            <Name value = "MySubModule"/>
            <Version value = "1.0"/>
            <DLLName value = "ExampleMod.dll"/>
            <SubModuleClassType value = "ExampleModNameSpace.MySubModule"/>
            <Tags>
                <Tag key="DedicatedServerType" value ="none" />
                <Tag key="IsNoRenderModeElement" value ="false" />
            </Tags>
        </SubModule>
    </SubModules>
    <Xmls />
</Module>
```

