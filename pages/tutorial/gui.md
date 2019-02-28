---
layout: page-fullwidth
title: "Graphical Interface"
meta_title: "The Alchemist's Graphical Interface"
subheadline: "Learn the basics!"
teaser: "Alchemist is equipped with a Java graphical interface, and here is how to use it."
permalink: "pages/tutorial/gui/"
comments: true
#categories:
#    - design
header:
   image_fullwidth: "header_mol.png"
---

## Starting Alchemist in graphical mode

### Prerequisites

* A working graphical environment
* Java 8 with OpenJFX 8, Java 11, or a later Java version. Java 9 and Java 10 are not supported, although the Java 8 version of Alchemist might work, if OpenJFX or another JavaFX library is correctly installed

### Download and installation

Alchemist does not require any installation procedure. It can be rerieved via Gradle or in the form of a runnable JAR file.

#### Gradle

Retrieving Alchemist via Gradle is preferable and it can be done by cloning the empty project for Alchemist that is stored [here](https://github.com/AlchemistSimulator/Empty-Alchemist-project-using-Gradle) using the command: `git clone https://github.com/AlchemistSimulator/Empty-Alchemist-project-using-Gradle.git` (or `git clone git@github.com:AlchemistSimulator/Empty-Alchemist-project-using-Gradle.git`, if you want to use SSH) in a Command Line Interface.

Then, you will be able to import the project inside Eclipse or IntelliJ IDEA and start the graphical interface from a Commang Line Interface using the Gradle Wrapper with the command `gradlew.bat` if you are on Windows, or `./gradlew` if you are on \*nix (Linux, MacOS, FreeBSD, Solaris).

For further information, you can find more specific tutorials [here](https://github.com/AlchemistSimulator).

#### JAR

You can get Alchemist in the form of a runnable jar file, that can be retrieved from [the Alchemist release page on Github](https://github.com/AlchemistSimulator/alchemist/releases). The file name should match ``alchemist-redist-VERSION.jar`` where ``VERSION`` is a [SemVer](http://semver.org/spec/v2.0.0.html) version.

Once downloaded, if your Java environment is correctly setup, you should be able to launch it the same way you open any file (classically in most environments, by double clicking it). If Alchemist does not start this way, you can fall back to using a terminal.

### Shortcuts

The graphical interface that pops up when Alchemist is executed providing a YAML file on the command line is a stripped-down version of the one that shows when the simulator is invoked by `java -jar` or by double clicking.

In order to use such interface, consider the following command list:

| Key binding             | Active         | Effect                                                                |
| ------------------------| -------------- | --------------------------------------------------------------------- |
| <kbd>L</kbd>            | always         | (En/Dis)ables the painting of links between nodes                     |
| <kbd>M</kbd>            | always         | (En/Dis)ables the painting of a marker on the closest node            |
| <kbd>Mouse pan</kbd>    | in normal mode | Moves around                                                          |
| <kbd>Mouse wheel</kbd>  | in normal mode | Zooms in/out                                                          |
| <kbd>Double click</kbd> | in normal mode | Opens a frame with the closest node information                       |
| <kbd>Right click</kbd>  | in normal mode | Enters screen rotation mode                                           |
| <kbd>P</kbd>            | always         | Plays/pauses the simulation                                           |
| <kbd>R</kbd>            | always         | Enables the real-time mode                                            |
| <kbd>Left arrow</kbd>   | always         | Speeds the simulation down (more calls to the graphics)               |
| <kbd>Right arrow</kbd>  | always         | Speeds the simulation up (less calls to the graphics)                 |
| <kbd>S</kbd>            | always         | Enters / exits the select mode (nodes can be selected with the mouse) |
| <kbd>O</kbd>            | in select mode | Selected nodes can be moved by drag and drop                          |
| <kbd>E</kbd>            | in select mode | Enters edit mode (to manually change node contents)                   |
