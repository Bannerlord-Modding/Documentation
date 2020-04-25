# TournamentGame
This class is used to handle tournaments, their participants, and the inherent setup.
to modify some of the behaviours, a Harmony patch might be required.

**NOTE**: *This page is incomplete, so if you find anymore information on the subject, please create a pull request and add to this growing Modding Documentation!*

## Accessible Methods:
#### `protected TournamentGame(Town town, ItemObject prize = null)`
Internal method called after AddTournament and CreateTournament to set up the prize.

## Accessible Attributes:
#### `public const int ParticipantNumber`
The number of participants, currently hardcoded to 16 but patcheable.

#### GET `public Town Town`
The settlement where the TournamentGame is happening. 
#### GET `public CampaignTime CreationTime`
The creation time of the TournamentGame.
#### GET/SET `public QualificationMode Mode`
The qualification mode, Either 'TeamScore' or 'IndividualScore', modifiable.
#### GET `public virtual int MaxTeamSize`
The maximum size of a team in every stage of the tournament.
#### GET `public virtual int MaxTeamNumberPerMatch`
The maximum number of teams per match in every stage of the tournament.
#### GET `public ItemObject Prize`
The prize of the tournament.
#### GET `public virtual float TournamentWinRenown`
The renown gained for winning the tournament.
#### GET `public static List<CharacterObject> GetParticipantCharacters( Settlement settlement, int maxParticipantCount, bool includePlayer = true, bool includeHeroes = true )`
This method defines, when a tournament starts, the participants. Called when a player joins a tournament or a tournament is simulated.
#### `public abstract TextObject GetMenuText()`
This method defines the text on the menu when joining a tournament.
#### `public abstract void OpenMission( Settlement settlement, bool isPlayerParticipating )`
This method is called when starting a tournament, wether simulated or with player participation.
#### `public void PrepareForTournamentGame( bool isPlayerParticipating )`
This method is called when starting a tournament, wether simulated or with player participation.

Example usage:
```csharp
foreach (var settlement in Settlement.All) {
    if (settlement.HasTournament) {
        var tournament = Campaign.Current.TournamentManager.GetTournamentGame(settlement.Town);
        showMessage("Tournament at : " + settlement.Town.StringId + " with up to " + tournament.MaxTeamNumberPerMatch + " teams per match.");
    }
}
```
