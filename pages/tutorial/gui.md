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
* A Java 8 (or newer) runtime environment

### Download and installation

Alchemist does not require any installation procedure. It is delivered in form of a runnable jar file, that can be retrieved from [the Alchemist release page on Github](https://github.com/AlchemistSimulator/alchemist/releases). The file name should match ``alchemist-redist-VERSION.jar`` where ``VERSION`` is a [SemVer](http://semver.org/spec/v2.0.0.html) version.

#### Launch from the graphical interface

Once downloaded, if your Java 8 environment is correctly setup, you should be able to launch it the same way you open any file (classically in most environments, by double clicking it). If Alchemist does not start this way, you can fall back to using a terminal.

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
