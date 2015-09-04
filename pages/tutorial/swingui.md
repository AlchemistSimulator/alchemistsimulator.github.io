---
layout: page-fullwidth
title: "Graphical Interface"
meta_title: "The Alchemist's Graphical Interface"
subheadline: "Learn the basics!"
teaser: "Alchemist is equipped with a Java Swing graphical interface, and here is how to use it."
permalink: "pages/tutorial/swingui/"
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

![Pan]({{ site.url }}/pages/tutorial/images/pan1.png)
![Pan]({{ site.url }}/pages/tutorial/images/pan2.png)


#### Zoom
Enlarges or reduces the portion of space drawn in the view port. It is controlled by the mouse wheel. Roll up to zoom in, roll down to zoom out. The point in which the mouse is located will be the center of the zoom (much like the behavior of Google Maps and other similar services). There is [an open issue regarding the sensibility](https://github.com/DanySK/alchemist/issues/8), so be warned that you may not be able to get exactly at the level you wished.

![Zoom in]({{ site.url }}/pages/tutorial/images/zoomin.png)
![Zoom out]({{ site.url }}/pages/tutorial/images/zoomout.png)

#### Rotate
Rotates the view port. It is controlled by the right mouse button drag-and-drop.

![Rotation]({{ site.url }}/pages/tutorial/images/rotate.png)

#### Lock and follow
Locks the center of the view port on a node. If the node moves, the view port will move accordingly. The resulting effect looks like the interface of some top-down 2D videogames (among the most diffused: [Grand Theft Auto](https://en.wikipedia.org/wiki/Grand_Theft_Auto_(video_game)) and [Hotline Miami](https://en.wikipedia.org/wiki/Hotline_Miami)). It can be useful to record videos that focus on a specific node moving around. To switch in this mode, click with the central mouse button on the node you intend to follow. Once done, pan gets disabled and the selected node will be at the center of the view port. Rotation and zoom will work as before. To return in normal mode, press the central mouse button again.

### Visual effects

The "View" tab includes the tools to colorize your nodes depending on their status.

#### Seeing neighborhoods

The first feature of the view tab is the possibility to display the network of connections between nodes. By pressing "Draw the links", a gray line will connect each node to its neighbors.

![Display Links]({{ site.url }}/pages/tutorial/images/links.png)

#### The effect stack

The drawing of nodes is demanded to a stack of effects. When a drawing request arrives, the first effect is popped out of the stack, and applied to all nodes. Then, the second one is popped and applied, and so on until all have been applied. Each effect may make some drawing, and each subsequent one may draw about the previous ones, adding or replacing visual information.

![Effect control]({{ site.url }}/pages/tutorial/images/effectcontrol.png)

The effect stack can be controlled with the buttons pictured above. Effects are listed as colored bars. These bars can be selected. The possible operations are:

* **Add a new effect** --- Loads the compatible classes present in the classpath (implementations of [``Effect``]({{ site.url }}/javadoc/it/unibo/alchemist/boundary/gui/effects/Effect.html)), and asks the user which one she desires to load. If confirmed, initializes an instance of such effect and pushes it on the stack.
* **Remove selected** --- Removes the selected effect from the stack
* **< (demote)** --- Reduces the priority of the effect (demotes its position on the stack). The effect will be applied before, and as such the ones that come after that may draw above it.
* **> (promote)** --- Raises the priority of the effect (promotes its position on the stack). The effect will be applied later, and as such it may draw above other effects.
* **Save** --- Saves, in a user-defined location, the current effect stack in ``.aes`` format.
* **Load** --- Prompts the user for a ``.aes`` file. If one such file is selected, it becomes the current effect stack, *replacing the previous*. Remember to save before loading if you do not want to lose your current stack.

#### Modifying the effects

By default, a single effect of class [``DrawShape``](DrawShape) is loaded, and displays any node as a small black point. Any effect, however, can be tuned by clicking on it. On click, a frame will appear displaying the editable settings. This is the window you should use to tune the aspect of your simulation.

![Effect editor]({{ site.url }}/pages/tutorial/images/effecteditor.png)

In the case of [``DrawShape``][DrawShape], this is the configuration screen. The possible configurations are:

##### Incarnation to use
Loads all the available incarnations (implementations of [Incarnation][Incarnation]) and lets the user choose which one to use. This is a *very important* configuration option in case you want to tune your effect based on the content of a node, which is something rather common. If you do not select the correct incarnation, it is very likely that the content won't be matched correctly, and as such you effect will not be applied as expected (which may mean that it gets not applied at all, or that it gets applied in an unwanted fashion). To be sure, always select the actual incarnation you are using in your simulation.

##### Mode
The kind of shape to draw. Currently there are available:
  * *Fill Ellipse* --- Draws an ellipse (a circumference by default) and fills it with the proper color
  * *Fill Rectangle* --- Draws a rectangle (a square by default) and fills it with the proper color
  * *Draw Ellipse* --- Draws an ellipse (a circumference by default) of the proper color
  * *Draw Rectangle* --- Draws a rectangle (a square by default) of the proper color

##### R, G, B, A
These sliders determine the base color applied by this effect, using the [RGBA color space][RGBA]. In short, R stands for red, G for green, B for blue, and A for alpha (namely, the transparency). The chosen color may be later transformed by node content based color tuning.

##### Scale factor
The ratio between horizontal and vertical dimension of the shape. Changing such value  for an ellipse will make it [eccentric][eccentricity]. Changing it for a rectangle will make it less and less similar to a square.

##### Size
How big (in pixel) the nodes should appear.

##### Draw only nodes containing a molecule and Molecule
This combo box and text field determines whether or not all the nodes should get drawn. If it is selected, then a [``IMolecule``][IMolecule] will be produced with the content of the textfield by calling [``IMolecule Incarnation.createMolecule(String)``][create molecule], and only the nodes in which such [``IMolecule``][IMolecule] is present will get the effect applied. Since the specific conversion between [``String``][String] and [``IMolecule``][IMolecule] is delegated to such method, the specific [``IMolecule``][IMolecule] created will depend on the [``Incarnation``][Incarnation] chosen. See "Incarnation to use".

##### Other options: fine color tuning based on contents
The set of these options is used to modify the base color depending on the [concentration][IConcentration] of a [``IMolecule``][IMolecule]. As explained in [the basics]({{site.url}}/pages/tutorial/basics/), the [concentration][IConcentration] is just the value associated with some [``IMolecule``][IMolecule], and its actual type depends on the specific [``Incarnation``][Incarnation]. Again, make sure that you have chosen the correct one. See "Incarnation to use".

All the fields of this part of the form make sense iff "Tune colors using a molecule property" is enabled. Otherwise, they are just ignored.

"Molecule property" is the [``String``][String] that will be passed down to extract the value of a property (in form of a real number) from each node. To better understand how it works, consider the method [``double Incarnation.getProperty(INode, IMolecule, String)``][molecule property]. This method will be called for each node where the effect should be applied passing as parameters: the node, the [``IMolecule``][IMolecule] matched in the "Molecule" textfield, and the [``String``][String] of the text field "Molecule property": the meaning of such [``String``][String] is **very** incarnation-dependent.
The numeric result obtained is then mapped into the [0:1] range as follows:

* Let ``G`` be the value of the slider "Property order of magnitude"
* Let ``m`` be the value of the slider "Minimum property value"
* Let ``M`` be the value of the slider "Maximum property value"
* Let ``P`` be the value returned by [the method][molecule property]
* Let ``x`` be the value mapped to the [0:1] range
* Then:

![Conversion formula]({{ site.url }}/pages/tutorial/images/latex.png)

Basically, it is mapped linearly, and the order of magnitude is the same for minimum and maximum. Values out of the bounds are considered equal to the bounds. In case "Reverse effect" is enabled, after such processing also ``x`` is changed according to the formula: ``x = 1 - x``.

Our number ``x`` is then used to force the value on one of the color channels, selected with the option "Channel to use". The original value set by the base color with the sliders discussed above will get overridden by this value. Possible values are:

* **Alpha**: overrides the transparency in the [RGBA color space][RGBA]. 0 maps to itself, 1 to 255, intermediate numbers are mapped linearly. This effect is very useful to create a "fade-out" or "fade-in" effect.
* **Red**: overrides the value of the red channel in the [RGBA color space][RGBA]. 0 maps to itself, 1 to 255, intermediate numbers are mapped linearly. This effect is useful to fade:
  * black to red and viceversa
  * blue to magenta and viceversa
  * green to yellow and viceversa
  * white to cyan and viceversa
* **Green**: overrides the value of the green channel in the [RGBA color space][RGBA]. 0 maps to itself, 1 to 255, intermediate numbers are mapped linearly. This effect is useful to fade:
  * black to green and viceversa
  * blue to cyan and viceversa
  * red to yellow and viceversa
  * white to magenta and viceversa
* **Blue**: overrides the value of the blue channel in the [RGBA color space][RGBA]. 0 maps to itself, 1 to 255, intermediate numbers are mapped linearly. This effect is useful to fade:
  * black to blue and viceversa
  * green to cyan and viceversa
  * red to magenta and viceversa
  * white to yellow and viceversa
* **Hue**: overrides the value of the hue channel in the [HSB color space][HSB]. 0 maps to itself, 1 maps to 360, intermediate numbers are mapped linearly. This effect is useful to fade circularly along all the color range (red-yellow-green-cyan-blue-magenta-red and viceversa). It can create nice color patterns, in particular if the red-yellow-green transition space is used.
* **Saturation**: overrides the value of the saturation channel in the [HSB color space][HSB]. Values are not remapped. This effect is useful to fade from any color to white.
* **Brightness**: overrides the value of the brightness channel in the [HSB color space][HSB]. Values are not remapped. This effect is useful to fade from any color to black.

###### Writing properties when using SAPERE
When using the SAPERE incarnation the string can be any variable included in the reference LSA. For instance, if you are tracking the LSA ``<gradient, 0, Value, Other, Data>``, one possible content for the property field could be ``Value``. In this case, in all the nodes where at least one matching LSA is present, one of them will be retrieved, and its third argument will get extracted and interpreted as a number with a best effort approach.

###### Writing properties when using Protelis
When using the Protelis incarnation, the molecules actually represent the environment variables, and as such matching a molecule can be translated into a search into the device local environment for a variable named as the molecule is. As a consequence, any variable that is pushed by means of a ``self.putEnvironmentVariable("varName", varVal)`` operation can be then used in the simulator for producing visual effects.
Once a molecule/variable (they will be used interchangeably in the following) has been found, the property string can be any valid Protelis program *that does not perform operations on neighborhoods nor accesses ``self``*. The value matched will be bound to a variable named ``ans``.
Let's consider an example. Let's suppose that all the nodes are running the following program:

{% highlight java %}
rep (d <- Infinity) {
  mux (env.getEnvironmentVariable("source")) {
    0
  } else {
    let nbrRange = self.getDeviceposition().getDistanceTo(nbr(self.getDeviceposition()));
    minHood(nbr(d) + nbrRange)
  }
}
{% endhighlight %}

and suppose that we are interested in visualizing the program output. We may change the program as follows:

{% highlight java %}
let res = rep (d <- Infinity) {
  mux (env.getEnvironmentVariable("source")) {
    0
  } else {
    let nbrRange = self.getDeviceposition().getDistanceTo(nbr(self.getDeviceposition()));
    minHood(nbr(d) + nbrRange)
  }
};
self.putEnvironmentVariable("toTrack", res);
res
{% endhighlight %}

Now, our environment will contain a ``toTrack`` [``IMolecule``][IMolecule]. In the "Molecule" text field we could enter ``toTrack``, while in the "Molecule property" field we may write just ``ans``. If we properly tune the range of values we want to display, then we would get a fading effect depending on the distance of each device from the nearest one containing a ``source`` environment variable set to ``true``.
Since any Protelis program is supported, we could also write something like ``e ^ ans``. This would, for instance, create a logarithmic scale for the values. Another example could be: ``ans < 100``. In this case, devices closer than 100 distance units to a source will be marked with ``true``, that will in turn get translated as ``1``, and all the others will get ``false``, that will get translated to ``0``. This will create a visual segmentation into two groups of different colors. Playing with channels and property values sliders can allow a wide range of color combinations.
Also more complex properties can be written, e.g. ``if (ans ^ 2 < 100) { 0 } else { pi ^ ans }``. Since this property string is fed to the very same interpreter that runs the actual Protelis code and the only difference is that a dummy execution context is used, any string that is also a valid Protelis program will work. Beware that it is largely possible that the returned valued is bound to ``NaN``, mainly because an Object is returned that cannot be interpreted as a number.

## Getting information from the simulation

### Exploring the content of a node

### Exporting data

Work in progress: monitor attachment

[create molecule]: {{site.url}}/javadoc/it/unibo/alchemist/model/interfaces/Incarnation.html#createMolecule-java.lang.String-
[DrawShape]: {{site.url}}/javadoc/it/unibo/alchemist/boundary/gui/effects/DrawShape.html
[eccentricity]: https://en.wikipedia.org/wiki/Eccentricity_(mathematics)
[HSB]: https://en.wikipedia.org/wiki/HSL_and_HSV
[IConcentration]: {{site.url}}/javadoc/it/unibo/alchemist/model/interfaces/IConcentration.html
[IMolecule]: {{site.url}}/javadoc/it/unibo/alchemist/model/interfaces/IMolecule.html
[Incarnation]: {{site.url}}/javadoc/it/unibo/alchemist/model/interfaces/Incarnation.html
[molecule property]: {{site.url}}/javadoc/it/unibo/alchemist/model/interfaces/Incarnation.html#getProperty-it.unibo.alchemist.model.interfaces.INode-it.unibo.alchemist.model.interfaces.IMolecule-java.lang.String-
[RGBA]: https://en.wikipedia.org/wiki/RGBA_color_space
[String]: https://docs.oracle.com/javase/8/docs/api/java/lang/String.html
