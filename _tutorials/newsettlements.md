# Adding new settlements to the game
Adding new settlements is currently technically not possible. While the StoryMod module does add a new settlement to the game ( a training field) the same does not seem possible for cities, villages or castles.
It is only possible to modify the Sandbox module files to add new settlements:
* settlements.xml (containing the definition of the city, village or castle in terms of its game function such as who owns it, what it produces, how prosperous it is etc.) 
* main_map/scene.xscene file (containing the visual definition of the city hardcoded in the main map scene)

Theoretically adding new settlements should be possible with the Xml system by creating your own XML files with ids Settlements and prefabs the game does not load them properly.

To circumvent this a patcher was developed by the author of this tutorial page. The patcher essentially loads any files of your module the way you would expect the game to and appends the content to the Sandbox module.
While this sounds dirty the patcher makes sure to backup original, unaltered files and keeps track of which is which. If the game is updated and the original files are altered the patcher detects this and will use the updated file.
This means it is possible to add settlements in a modular way in as many parallel modules as desired while maintaining patch compatibility and module-system compatibility.
Caveats are described on the patcher's github page.

The settlement patcher along with an example mod and usage guide can be found here:
https://github.com/KesslerMan/BannerlordSettlementPatcher
It requires minimal coding. If the user wants the supplied example module can simply be used and appended in purely XML to add new villages, cities and towns.

For questions regarding the patcher add author on Discord under Trucker#3350
