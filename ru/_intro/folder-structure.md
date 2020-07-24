# Структура папок

Создавать все папки не обязательно. Единственное требование, чтобы Лаунчер обнаружил мод - это папка SubModule и файл [SubModule.xml](../_xmldocs/submodule.md).

Полный пример структуры и содержимого папок рассмотрим на примере - `«Имя диска»:\\«Место установки»\Mount & Blade II Bannerlord\Modules\Native\` 

## Описания папок и примеры файлов

* `AssetPackages` - Содержит файлы TPAC (формат архивов у Taleworlds). Формат TPAC был представлен во время релиза многопользовательской бета-версии Bannerlord, заменив устаревший формат .BRF у Warband и формат CRF ранней бета-версии, и до сих пор используется по сей день. Можно исследовать с помощью неофициального инструмента [TpacTool](https://github.com/szszss/TpacTool).
  *  `someasset.tpac`
* `Atmospheres` -  [Обратитесь к [Atmosphere.xml]](../_xmldocs/atmosphere.md)
  * `Interpolated` 
    * `interpolatedatmosphere.xml`
  * `atmosphere.xml`
* `bin` - Здесь должны находиться скомпилированные двоичные файлы - [Обратитесь к [Базовый C# Мод]](../_tutorials/basic-csharp-mod.md)
  * `Win64_Shipping_Client`
    * `MyModule.dll`
* `GUI` - Здесь большинство вещей, связанных с Gauntlet (пользовательский интерфейс).
  * `Brushes` - стили для элементов.
  * `Prefabs` - текстовое описание окна, с элементами вроде текста, слайдеров или текстбокса.
* `ModuleData` - Здесь находятся общие данные, связанные с вашим модом, в формате XML (например, предметы/культуры/игровые тексты).
* `SceneObj` - Здесь ваши сцены.

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

### ``Переведено сайтом commando.com.ua``