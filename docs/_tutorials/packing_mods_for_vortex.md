# Packing your mods for Vortex

## Introduction
Vortex is the powerful, open source mod manager by Nexus Mods. It supports installing and managing mods for 100+ games, including Mount & Blade 2: Bannerlord. When sharing you mod, there are few considerations you should make to ensure that it is structure in a way that is compatible with Vortex. [You can learn more about Vortex here](https://nexusmods.com/about/vortex).


## Modules
Modules are detected automatically, they are characterised by mods that are intended to be self contained in the "Modules" folder and include a Submodule.xml file. Vortex grabs the entire folder containing the Submodule.xml and places it into the "Modules" folder of the game. 

Don't forget to enable these mods in the launcher when starting the game!


## XML Edits and other Mods

Any other type of mod currently requires you to simply pack it relative to the game base folder. For example, if I have the file "BannerEditor.xml" which needs to go into the "Modules\Native\GUI\Prefabs\Bannereditor" folder, I'll need to add those folders above my file in the archive that I upload. 

This will allow anything including XML edits, video/sound edits and Reshade presets to be installed correctly and consistently. 


## Mods with multiple options

Vortex supports [mod installers](https://wiki.nexusmods.com/index.php/How_to_create_mod_installers) which allow you offer users a single download containing a choice of options in your mod. Mod installers can be written in XML or created with the [FOMOD Creation Tool](https://www.nexusmods.com/fallout4/mods/6821/?tab=files). If you would like to use a mod installer but are having difficulty getting set up, please reach out to the Nexus Mods Community Managers and we'll be happy to assist you.


## Incompatible mods

At time of writing, we are not aware of any kind of mod that isn't compatible with Vortex (when packed correctly). However, if you are uploading a tool or savegame that should *not* be installed this way, you can disable the Vortex button on the Nexus Mods page.
