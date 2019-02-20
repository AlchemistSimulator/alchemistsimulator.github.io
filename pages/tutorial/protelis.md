---
layout: page-fullwidth
title: "Protelis"
meta_title: "Protelis incarnation"
subheadline: "A powerful distributed programming language"
teaser: "Alchemist can simulate networks of situated devices running Protelis programs."
permalink: "pages/tutorial/protelis/"
comments: true
#categories:
#    - design
header:
   image_fullwidth: "header_mol.png"

---


## Protelis and Alchemist
[Protelis][Protelis], from the Latin word figuratively meaning "regarding a team", is a language targeting the aggregate of devices rather than the single one.
It has been developed on the solid foundation of [Field Calculus][Field Calculus], a theoretical model of aggregate programming, and it is written and interoperable with Java.

### Learning Protelis
The language and all the machinery of Protelis are out of the scope of this tutorial. However, we warmly recommend to read [this paper][protelis paper] first, and then to deepen your knowledge of Protelis by reading the resources available in [the official Protelis website][Protelis].

### The Protelis Incarnation
Protelis is written in Java and it has been made with ease of portability towards new platforms in mind.
As a consequence, it was rather easy to create an incarnation in Alchemist supporting it.
To be historically accurate, actually, Protelis was initially an attempt to bring a [MIT Proto][Proto]-like language based on [Field Calculus][Field Calculus] into the Alchemist Simulator.
It was built as an incarnation of Alchemist, but this hard dependency was later stripped out, and today Protelis is a standalone language that can be simulated in Alchemist, but has no dependency towards it.

The Protelis incarnation provides:

* An Alchemist-compatible implementation of the Protelis Network Manager and Execution Context
* An [incarnation][ProtelisIncarnation] that includes proper methods to create Protelis-readable data items in form of [molecules][IMolecule] and methods to extract numeric properties from them
* Proper actions, conditions and concentrations that allow for running Protelis code as a Alchemist reactions in Alchemist nodes
* An Eclipse plug-in to highlight Protelis syntax that also provides code suggestions.

## Step by step tutorial
A step by step tutorial is under work [here][Protelis tutorial]. It presents a sequence of examples with increasing complexity, and makes use of the YAML language for the simulation specification.

* Download [the latest Eclipse for Java SE developers][eclipse]. Arch Linux users can use the package extra/eclipse-java, which is rather up-to-date.
* Install Xtext
	* In Eclipse, click Help -> Eclipse Marketplace...
	* In the search form enter "xtext", then press Enter.
	* One of the retrieved entries should be "Xtext 2.11.x": click Install.
	* Follow the instructions, accept the license, wait for Eclipse to download and install the product, accept the installation and restart the IDE.
* Install the Protelis Eclipse plug-in from the Eclipse Marketplace
	* In Eclipse, click Help -> Eclipse Marketplace...
	* In the search form enter "protelis", then press Enter.
	* One of the retrieved entries should be "Protelis": click Install.
	* Follow the instructions, accept the license, wait for Eclipse to download and install the product, restart the IDE when prompted.

### Test installation

* Open Eclipse on a workspace of your choice.
* Click on File -> New -> Other.
* Select Gradle Project.
* Give the project a name, then follow the instruction and click "Finish".
* Find the ``src`` folder.
* Create a ``test.pt`` file.
* Eclipse will prompt you with a question: "Do you want to add the Xtext nature to the project "(your project name here")?". Answer "Yes".
	* If Eclipse does not ask you to add such nature, right click on the project, go to Configure -> Convert to Xtext Project.
* Open the ``test.pt`` file.
* Writing something, it should show an error.
* Type the following (you can use ctrl + space, or your user defined shortcut, and use autocompletion):

{% highlight javascript %}
def myFunction(x, y) {
	x + y
}

let x = 1;
let y = 2;

myFunction(x, y)
{% endhighlight %}

* If Protelis is correctly installed, the code will be highlited and Eclipse should not report errors.

### Sample Project Setup

* Create a ``protelis`` folder in ``scr/main``. This folder will contain all ``*.pt``files.
* Create a ``yml`` folder in ``src/main``. This folder will contain all ``*.yml`` (simulation) files.
* Now your workspace should be like this:

![Workspace setup]({{ site.url }}/pages/tutorial/images/workspaceSetup.png)
* Add this dependencies to your ``build.gradle`` file (replace ``<version>>`` with the [latest available version][alchemistVersion]):

{% highlight gradle %}
compile("it.unibo.alchemist:alchemist:<version>") {
    exclude module: 'org.eclipse.xtext.dependencies'
}
{% endhighlight %}

* Synchronize the project:
	* Right click on your project, then Gradle -> Refresh Gradle Project.
* Create a ``sample.yml`` file in the proper folder (``src/main/yml``) and add the following code:

{% highlight yaml %}
incarnation: protelis

environment:
    type: Continuous2DEnvironment
    parameters: []

network-model:
    type: EuclideanDistance
    parameters: [30]

sum: &sum
  - time-distribution: 1
    program: it:unibo:alchemist:tutorial
  - program: send

displacements:
  - in:
      type: Grid
      parameters: [-100, -100, 200, 200, 20, 20, 0, 0]
    programs:
      - *sum
{% endhighlight %}

* Create a ``tutorial.pt`` file. Notice that this file should be named ``tutorial.pt`` and contained into the ``protelis/it/unibo/alchemist`` folder, as ``it:unibo:alchemist:tutorial`` is the module name (similar to Java package naming convention). The simulation will not work if the file whole file path mismatches the one specified in the module name. Put this code inside the created file:

{% highlight javascript %}
module it:unibo:alchemist:tutorial

let myId = self.getDeviceUID().getId(); //get the ID of this node

env.put("neighbor_sum", sumHood(nbr(myId)));
{% endhighlight %}

* Create the Run Configuration.
	* Click on Run -> Run Configurations...
	* Right click on Java Application, then select New.
	* In the Main tab, give a name to your configuration, select the project and use ``it.unibo.alchemist.Alchemist`` as Main Class.
	* In the Arguments tab, add the following arguments: ``-y ./src/main/yml/sample.yml``
	* In the Classpath tab, select User Entries, then click Advanced, select Add Folders and click Ok. Expand ``src/main`` and select the ``protelis`` folder inside your project, then click Ok.
* Run the project with this Run Configuration.
* Alchemist GUI will be launched. Press the P key to start the simulation. The timer on the right corner will start and double-clicking on a node you should see something like this:

![Simulation Running]({{ site.url }}/pages/tutorial/images/simulationRunning.png)




[eclipse]: https://eclipse.org/downloads/
[Field Calculus]: http://dx.doi.org/10.1007/978-3-642-45364-9_11
[gui tutorial]: {{site.url}}/pages/tutorial/swingui
[IMolecule]: {{site.urldoc}}it/unibo/alchemist/model/interfaces/Molecule.html
[Protelis]: http://protelis.org
[ProtelisIncarnation]: {{site.urldoc}}it/unibo/alchemist/model/ProtelisIncarnation.html
[protelis paper]: http://dx.doi.org/10.1145/2695664.2695913
[Protelis tutorial]: https://github.com/AlchemistSimulator/Protelis-Incarnation-tutorial
[Proto]: http://proto.bbn.com/

[Apache Math 3]: http://commons.apache.org/proper/commons-math/
[create molecule]: {{site.url}}/javadoc/it/unibo/alchemist/model/interfaces/Incarnation.html#createMolecule-java.lang.String-
[DrawShape]: {{site.url}}/javadoc/it/unibo/alchemist/boundary/gui/effects/DrawShape.html
[eccentricity]: https://en.wikipedia.org/wiki/Eccentricity_(mathematics)
[HSB]: https://en.wikipedia.org/wiki/HSL_and_HSV
[IConcentration]: {{site.url}}/javadoc/it/unibo/alchemist/model/interfaces/IConcentration.html
[Incarnation]: {{site.url}}/javadoc/it/unibo/alchemist/model/interfaces/Incarnation.html
[ISimulation]: {{site.url}}/javadoc/it/unibo/alchemist/core/interfaces/ISimulation.html
[molecule property]: {{site.url}}/javadoc/it/unibo/alchemist/model/interfaces/Incarnation.html#getProperty-it.unibo.alchemist.model.interfaces.INode-it.unibo.alchemist.model.interfaces.IMolecule-java.lang.String-
[NaN]: https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html#NaN
[NumberOfNodesNextToANode]: {{site.url}}/javadoc/it/unibo/alchemist/boundary/monitors/NumberOfNodesNextToANode.html
[observer pattern]: https://en.wikipedia.org/wiki/Observer_pattern
[RGBA]: https://en.wikipedia.org/wiki/RGBA_color_space
[statistic functions]: https://commons.apache.org/proper/commons-math/apidocs/org/apache/commons/math3/stat/descriptive/AbstractStorelessUnivariateStatistic.html
[String]: https://docs.oracle.com/javase/8/docs/api/java/lang/String.html
[alchemistVersion]: https://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22it.unibo.alchemist%22%20AND%20a%3A%22alchemist%22
