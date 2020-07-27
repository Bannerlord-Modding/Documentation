# Mission

所谓任务\(`Mission`\)，可以理解成游戏模式`GameMode`(如战场`Battle`，死斗`TeamDeathMatch`之类)。当任务实例化的时候，同时还会生成的实例有：场景[Scene](../engine/scene.md)，任务视图[MissionViews](missionbehaviour/missionview.md)，还有任务行为[MissionBehaviours](missionbehaviour/README.md)。

更多关于任务的相关信息，要等我们\(文档原作者\)获得`CampaignSystem`的DLL的访问权。

## 小贴士

* 你可以通过 `Mission.Current` 属性获取当前任务下的实例\(假如有任何实例的话\)。