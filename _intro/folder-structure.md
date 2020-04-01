# Folder Structure

All folders are entirely optional, the only requirement for a SubModule to be detected by the Launcher is the SubModule base directory itself and a valid [SubModule.xml](../_xmldocs/submodule.md)

For a full example of the folder structure and contents refer to `Drive:\\InstallLocation\Mount & Blade II Bannerlord\Modules\Native\` 

## Folder Descriptions & File Examples

* `AssetPackages` - Unknown at this time, likely requires the release of the editor to create/modify these files.
  *  `someasset.tpac`
* `Atmospheres` -  [Refer to [Atmosphere]](../_xmldocs/atmosphere.md)
  * `Interpolated` 
    * `interpolatedatmosphere.xml`
  * `atmosphere.xml`
* `bin` - Where compiled binaries should go - [Refer to [Basic C# Mod]](../_tutorials/basic-csharp-mod.md)
  * `Win64_Shipping_Client`
    * `MyModule.dll`
* `GUI` - For most things related to Gauntlet.
  * `Brushes` - For Gauntlet Brushes.
  * `Prefabs` - For Gauntlet Movies.
* `ModuleData` - For any general data related to your mod that is in XML format \(e.g. items/cultures/gametexts\).
* `SceneObj` - For your scenes.

```text
- MyModule
	- AssetPackages
		-- assetpackage.tpac
	- Atmospheres
		- Interpolated
			-- interpolatedatmosphere.xml
		-- atmosphere.xml
	- bin
		- Win64_Shipping_Client
			-- MyModule.dll
    - GUI
        - Brushes
        - Prefabs
    - ModuleData
    - SceneObj
    - SubModule.xml
```

