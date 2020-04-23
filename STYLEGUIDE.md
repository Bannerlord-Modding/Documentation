# Documentation Style Guide

For those new to markdown styling, please familiarize yourself with the following [Quick reference cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

**Before** starting on any work, please check the [Project Board](https://github.com/Bannerlord-Modding/Documentation/projects/1) to ensure that nobody else is working on whatever you are planning on doing. If nobody is, [create an issue](https://github.com/Bannerlord-Modding/Documentation/issues) describing what you are creating / fixing / enhancing.

All Pull Requests are expected to match this style guide.
___

## Base level Structure / Navigation

Items in the root README.md should always be nested under wider category.

Base level items are containers for more specific items and should be linked to the root README.me. Inidvidual files (like tutorials or classes) should not be linked to the root README.md, but should be detailed the lower level files. 

```
## [C# API Documentation](_csharp-api/)

* [CampaignSystem](_csharp-api/campaignsystem/)
* [Core](_csharp-api/core/)
```
All README files should only go two levels deep at *most* (but one may be more appropriate in many cases), any need to go deeper should be put into a README in the second level to avoid clutter in any single file.

Each of the sections below would be the scope of a single readme:
```
ROOT README
# Section (eg: api)
 - packages
```
```
# package
 - classes
```
```
# Class
 - methods
  - params
```
Each of these READMEs should only contain the table of contents of it's relevant data.
___

## C# Packages

Each package directory should contain the following sections in its README:
```md
<Package overview>
## Table of contents
* [classes](_csharp-api/packagename/classes/)
* [childclasses](_csharp-api/packagename/childclasses/)
* ...
## Classes
* [classname](_csharp-api/packagename/classes/classname/)
* ...
## Child Classes
* [classname](_csharp-api/packagename/childclasses/classname/)
* ...
## Template Classes
* [classname](_csharp-api/packagename/templateclasses/classname/)
* ...
## Enums
* [enumname](_csharp-api/packagename/enums/enumname/)
* ...
## Structs
* [structname](_csharp-api/packagename/structs/structname/)
* ...
## Interfaces
* [interfacename](_csharp-api/packagename/interfaces/interfacename/)
* ...
## Exception Classes
* [exceptionname](_csharp-api/packagename/exceptions/exceptionname/)
* ...
```
>Each of the sections (at both levels) should have a valid link to their respective info pages.

The package information header should contain the following:
```md
Current Version (Stable branch): v0.0.0.0
<Brief description of the package and its contents>
```
___

## Classes (Base, Child, Templated, and Exceptions)

Unlike the root and package level READMEs, the class README will contain more than just links to child folders. Each class will start with a **Class Overview Panel**:

### [Parent Object Name](EXAMPLE)
# Class Name

This is a description of the class and what it does.

<div style= "font-size:12px">

| Using / Namespaces | <div style='color:yellow'>Taleworlds.Core</div> | <div style='color:green'>Saveable</div> |
|:---|---|---:|
| [System](EXAMPLE) | | 10000 |
| [System.Xml](EXAMPLE)| | |
| [TaleWorlds.SaveSystem](EXAMPLE) | | |
</div>

> For the non-savable classes, use ```'color:red'``` and change to text to "Not Savable".

After this class overview, a small code snippet should exist showing how to use / initialize the class. **This should not be exhaustive**, just a quick reference.
```csharp
new InformationMessage("Hello World!")
```

The above would be a valid snippet for the ```InformationMessage``` Class, but can be longer if the extra length is used to give important context about the snippet.

Directly after this intro snippet, we have a section outlining the variables of the class. All variables are assumed to have private setters unless otherwise noted. Each variable should contain all of the following information:

* Name
* Type (with link to that object or objects)
* Notes

## Variables

<div style= "font-size:12px">

| Mod | Name | Type | Notes |
| --- | --- | --- | --- |
| Const | HeadArmor | int |
| Instance |MeshesMask | [SkinMask](EXAMPLE) | |
| ReadOnly |BeardCoverType | [ArmorComponent](EXAMPLE).[BeardCoverTypes](EXAMPLE)
| Static |ReinsRopeMesh | string | returns ```this.ReinsMesh + "_rope";```|
|...|...|...|...|
</div>

Methods should follow parameters, seperated by a H2 header.

## Methods

<div style= "font-size:12px">

| Type | Method Name | Params |
| --- | --- | --- |
| void | [SetItem](EXAMPLE) | 2 |
| [Equipment](EXAMPLE) | [Clone](EXAMPLE) | 1 | 
| void | [FillFrom](EXAMPLE) | 2 |
| ... | ... | ... |
</div>


> The class page should only list out the methods like a table of contents, the detail should be saved for the methods own README page.

Methods should be like a miniature version of a class page, with a small table at the top for parameters (if any), return type, description, etc. as shown below:

<div style= "font-size:12px">

### [Parent Object Name](EXAMPLE)
## Method Name

| Parameters | Type | Default |
|---|---|---|---|
| Param Name | string | 'Hello World' |
| Param Name | [XmlNode](EXAMPLE) | N/A |
| ... | ... | ... | ... |
</div>

> Parameters should be in the same order as they appear in the method. Types should also link to their class. Copy paste symbols as needed. You don't need to link to base types (like int or string).

### Detailed description of the method.
 ___
 Code Snippets (extended)
```
Here is how you do the thing!
```
```
Here is another way to do the thing
```

___

# Enums

Enums should be placed in their own file at the Class level (on their own page under a package) with the following format:

### [Parent Object Name](EXAMPLE)
# Enum Name

<div style= "font-size:12px">

Using / Namespaces | | <div style='color:yellow'>Taleworlds.Core</div>| | | | <div style='color:Cyan'>Flags</div> |
:---|---|---|---|---|---|---:|
[System](EXAMPLE) | | | | | | Flag Name |
| | | | | | | Another Flag Name |
</div>

## Values
* None
* Mountable
* CanJump
* CanRear
* etc...
___


# Structs

Structs should be placed in their own file at the same level as classes and structs within their respective package (eg: TaleWorlds.Core). Due to the nature of structs, they have identical layout to classes with the only change being instead of savable, they get flags.

### [Parent Object Name](EXAMPLE)
# Struct Name

This is a description of the class and what it does.

<div style= "font-size:12px">

Using / Namespaces | | <div style='color:yellow'>Taleworlds.Core</div>| | | | <div style='color:green'>Serializable</div> |
:---|---|---|---|---|---|---:|
[System](EXAMPLE) | | | | | | |
</div>

> For the non-serializable classes, use ```'color:red'``` and change to text to "Not Serializable".

Struct READMEs may have subfolders depending on their size, referr to Class layout for structs.

___

## TODO:

Style guide for Gauntlet, Tutorial, and XML docs sections