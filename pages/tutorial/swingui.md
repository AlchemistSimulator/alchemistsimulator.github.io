---
layout: page-fullwidth
title: "Graphical Interface"
meta_title: "The Alchemist's Graphical Interface"
subheadline: "Learn the basics!"
teaser: "Alchemist is equipped with a Java Swing graphical interface, and here is how to use it."
permalink: "pages/tutorial/swingui/"
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

Alchemist does not require any installation procedure. It is delivered in form of a runnable jar file, that can be retrieved from [the Alchemist release page on Github](https://github.com/DanySK/alchemist/releases). The file name should match ``alchemist-redist-VERSION.jar`` where ``VERSION`` is a [SemVer](http://semver.org/spec/v2.0.0.html) version.

#### Lauch from the graphical interface

Once downloaded, if your Java 8 environment is correctly setup, you should be able to launch it the same way you open any file (classically in most environments, by double clicking it). If Alchemist does not start this way, you can fall back to using a terminal.

#### Launch from a terminal

We suppose you have the ``java`` command in your classpath, bound to a Java 8 or newer virtual machine.

* Open a terminal
* Go into the directory where you have downloaded ``alchemist-redist-VERSION.jar``
* Launch ``java -jar alchemist-redist-VERSION.jar``, the graphical interface should pop up.
  * Remember to substitute ``VERSION`` with the actual version you have downloaded
  * In case you want Alchemist to be able to load classes which are not distributed within the standard package, then manually tune your classpath. For instance, if you have a ``alchemist-extension.jar`` file and a ``bin`` folder where the class files you want to be available are located, run:
    * On \*nix (Linux, MacOS, FreeBSD, Solaris):

    ``java -cp alchemist-extension.jar:bin:alchemist-redist-VERSION.jar it.unibo.alchemist.Alchemist``

    * On Windows:

    ``java -cp alchemist-extension.jar;bin;alchemist-redist-VERSION.jar it.unibo.alchemist.Alchemist``

    * Note: the difference between the commands is the separator, colon (``:``) for \*nix-like OSes, semicolon (``;``) for Windows.
    * Note: again, you *must* substitute ``VERSION`` with the actual version of Alchemist

## Basic functionality

Once started, a very bare window will appear, with only two menus.

![Alchemist welcome screen]({{ site.url }}/pages/tutorial/images/screen0.png)

### The "File" menu

The "File" menu contains three sub-options

![File menu]({{ site.url }}/pages/tutorial/images/screen2.png)

#### Quit

Quits the program.

#### Load JAR file

Adds a JAR file to the simulator classpath at runtime. This is useful if you have launched the simulator by a double click and you want to make your custom classes available. If you have launched Alchemist from a terminal, you should have added your jar files to the Java classpath already. However, if you have not, this will get you the same result, with a difference: in the suggested order, we put your custom jar *first* in the classpath. As a consequence, in case of conflicting classes, the one defined in your personalized extension would get loaded. Using this option available from the graphical interface, instead, your jar will be added *last* in the classpath, and as a consequence in case of conflicting names the class shipped in the ``alchemist-redist-VERSION.jar`` file would be used. Summarizing, if you load the file ``alchemist-extension.jar`` through this graphical option, you would obtain the same you'd have gotten with

``java -cp alchemist-redist-VERSION.jar;alchemist-extension.jar it.unibo.alchemist.Alchemist``

#### The logging perspective

The logging perspective opens a new tab in the UI, which will host the output of the simulation logger.

![Logging perspective]({{ site.url }}/pages/tutorial/images/screen3.png)

The simulator will redirect its logging system to the text area. The output will be filtered showing only events as or more relevant than the chosen logging level. This perspective is particularly useful to debug simulations that do not load correctly (often there is a problem with a parameter in some custom constructor), or simulations that hang at a certain point because of some unhandled Java exception raised.

## Loading and running simulations

The second menu has a single option: "Open new perspective".

![Working perspective menu]({{ site.url }}/pages/tutorial/images/screen1.png)

If clicked, a new tab will appear on the main UI. This is the main perspective, the one in which the simulation magic happens. You can use more perspectives at a time, and run multiple simulations concurrently.

Due to [a known issue](https://github.com/DanySK/alchemist-swingui/issues/2), the displayed name is currently wrong: despite the presence of "SAPERE" in the very name of the tab, there is no specific bound to that incarnation. Any valid simulation that uses any valid incarnation can run inside a working perspective.

### Loading Alchemist XML files

![Home tab]({{ site.url }}/pages/tutorial/images/screen4.png)

From the "Home" tab, it is possible to load simulation files. Clicking on "Open..." will prompt the user for an Alchemist XML file. Once the file has been selected, the user has two choices:

1. Loading it and configure a single-threaded simulation. This is the recommended mode, it is tested, predictable, and (as far as the used incarnation does not violate the contract on random number usage) reproducible. Once loaded, the user can force a specific random seed. Running in this mode the same simulation with the same seed will hold the same results.
2. Load in parallel mode. This mode must be considered experimental, since it uses incarnations as thread-safe objects, a condition that *is not generally guaranteed to hold*. The simulation state is updated using multiple threads (the exact number depends on the number of logical CPU cores of the system), which *may or may not* improve the performance, but *will* ruin reproducibility. It offered a perceivable boost (around +50% on a quad core system) in some SAPERE scenarios with many inter-dependant eco-laws, but at the same time offered no boost at all in all Protelis tests.

The selected file will be kept in memory. If the user wants to reload it, there is no need to reselect it. Just press the desired "Load" button again.

### Controlling the simulation flow

The tab "Flow control" includes tools for starting, pausing, stopping, and changing the speed of a simulation.

![Flow control tab]({{ site.url }}/pages/tutorial/images/screen5.png)

#### Play, pause, stop, restart

The "Play", "Pause" and "Run single step" buttons are pretty self-explanatory. It is more relevant to highlight the difference between the "Stop" button and the "Pause" button. The latter guarantees that the simulation can be resumed by pressing play, while the former does not offer this guarantee. Depending on the specific implementation of the simulation engine, the simulation may or may not be resumed. With the default implementation, it can not.
It is not required to press "Stop", unless the user need to free some resources. Even if the simulation run is finished, and the user wants to load another (or the same) simulation file, the "Load" command from the "Home" tab of the same perspective will automatically trigger a simulation stop.

#### UI Reactivity

The UI reactivity is used to tune the simulator speed by deciding how often the screen should be re-drawn.

* **Max Reactivity** --- In this mode the graphical interface is updated at every simulation step. It is computationally very expensive, and will likely slow down very much the numer of events per second that the simulation can process. On the other hand, it is useful if the user needs to notice even small changes in the simulation, e.g. if the user is doing a step-by-step progression.
* **User selected** --- In this mode, the number of redraws per simulation steps will be determined by the slider. The slider is *logarithmic* slider and not linear, and as a consequence allows for a wide range of possible regulations, which comes in handy since different simulations with different incarnations may run at completely different speeds (complex SAPERE code may run in the order of 1000 steps per second, simple experiments on a purely chemical incarnation ran at over 100000 steps per second on the same testbed).
By moving the slider on the left-hand side, the frequency of the updates will be increased, and as a consequence the speed of the simulation will be slowed down, but the graphical interface will be more smooth, and the frame-rate higher.
By moving the slider on the right-hand side, the frequency of the updates will be decreased, and consequently the simulation will run faster, but the graphical interface will be updated more rarely, up to the point where it may become stuttery/choppy/laggy.
* **Real time** --- In this mode, the simulator will try to run in-par with the real-life time, in the sense that it will try to simulate one time unit in one real-life second. There is a bottom cap of 25 frames (and events) per second, introduced in order to avoid the simulator being practically stuck due to to an accidental activation of this mode on very time-sparse simulations (e.g. with an event every hour). Please note that this is a best-effort mode, the alignment between real and simulated time will be far from perfection. Moreover, please note that, if your simulation runs slower than the real time (e.g. because it is very dense of events), then you will get a 25fps simulation at the best possible speed.

#### Time and step monitor

The current progression of the simulation is displayd in the upper right corner. The top number is the simulated time, and it is a positive real number. The bottom number counts how many steps have been executed, and as such is a positive integer. Both numbers start at zero.

## Tuning the simulation aspect

### Default aspect

By default, there will be little information available from the UI:

* A background image, that will depend upon the specific environment. It could be completely white, it could be an indoor map, or it could be an image from OpenStreetMap.
* Nodes marked as black points, except for the one closest to the user's mouse position, that will be highlighted (currently in yellow and red). Moving the mouse around should make the highlighted node change.
* In case the user leaves the mouse on a point in the background, a tooltip will appear indicating the exact position and the id of the closest node.

### Moving around

The user interface allows for a series of view port manipulations.

#### Pan

Moves the view port around. It is controlled by drag-and-drop with the primary mouse button. Click the point you are interested to move, drag where it should be, then drop.

![Zoom in]({{ site.url }}/pages/tutorial/images/pan1.png)
![Zoom out]({{ site.url }}/pages/tutorial/images/pan2.png)


#### Zoom
Enlarges or reduces the portion of space drawn in the view port. It is controlled by the mouse wheel. Roll up to zoom in, roll down to zoom out. The point in which the mouse is located will be the center of the zoom (much like the behavior of Google Maps and other similar services). There is [an open issue regarding the sensibility](https://github.com/DanySK/alchemist/issues/8), so be warned that you may not be able to get exactly at the level you wished.

![Zoom in]({{ site.url }}/pages/tutorial/images/zoomin.png)
![Zoom out]({{ site.url }}/pages/tutorial/images/zoomout.png)

#### Rotate
Rotates the view port. It is controlled by the right mouse button drag-and-drop.

![Zoom in]({{ site.url }}/pages/tutorial/images/rotate.png)

#### Lock and follow
Locks the center of the view port on a node. If the node moves, the view port will move accordingly. The resulting effect looks like the interface of some top-down 2D videogames (among the most diffused: [Grand Theft Auto](https://en.wikipedia.org/wiki/Grand_Theft_Auto_(video_game)) and [Hotline Miami](https://en.wikipedia.org/wiki/Hotline_Miami)). It can be useful to record videos that focus on a specific node moving around. To switch in this mode, click with the central mouse button on the node you intend to follow. Once done, pan gets disabled and the selected node will be at the center of the view port. Rotation and zoom will work as before. To return in normal mode, press the central mouse button again.
Work in progress: zoom, pan, lock

### Applying effects



## Getting information from the simulation

### Exploring the content of a node

### Exporting data

Work in progress: monitor attachment
