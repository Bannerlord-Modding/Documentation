# ScriptComponentBehavior

ScriptComponentBehavior's can be used to do anything from animating (rotating) windmills, to creating custom weapon spawner, or even entirely new siege machines.

A basic example of a ScriptComponentBehavior is the `LumberJack` class in `TaleWorlds.MountAndBlade.dll`:

```csharp
    public class Lumberjack : ScriptComponentBehaviour
    {
        private bool _initialized;

        protected internal override void OnTick(float dt)
        {
            base.OnTick(dt);
            if (!this._initialized)
            {
                this._initialized = true;
                base.GameEntity.CreateSimpleSkeleton("human_skeleton");
                base.GameEntity.CopyComponentsToSkeleton();
                base.GameEntity.Skeleton.SetAnimationAtChannel("lumberjack", 0, 1f, -1f, 0f);
                MetaMesh copy = MetaMesh.GetCopy("peasent_hatchet", true, false);
                base.GameEntity.AddMultiMeshToSkeletonBone(copy, 27);
            }
        }
    }
```

** Note: It is probably better to override `OnInit()` instead of `OnTick()` here. Since this is how it was written by TaleWorlds, this example will remain as-is for the time being.
