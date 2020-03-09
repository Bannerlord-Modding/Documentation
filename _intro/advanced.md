# Advanced

## [Harmony](https://github.com/pardeike/Harmony)

Harmony is a popular library used in modding for several other games. It can be used to alter functionality of applications and DLLs during runtime \(these changes are not permanent and are only valid for the current session\).

_Note that this may cause incompatibilities between mods if they try to patch the same method\(s\), so it should only be used when absolutely needed._

A common use of this library might be to execute code before/after a particular method \(prefix/postfix\). However, it can also be used to replace an entire method with your own method or to patch individual IL instructions \(be careful with this\).

