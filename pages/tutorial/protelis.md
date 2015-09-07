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
* A domain-specific language that translates a compact environment description into the (very verbose) Alchemist XML equivalent
* An Eclipse plug-in that automatically runs such translation, also equipped with code highlight and code suggestions.

## Writing Protelis simulations
This section will cover the creation of Alchemist simulations using the Protelis incarnation.

### Install the Eclipse plugin
* Download [the latest Eclipse for Java SE developers][eclipse]. Arch Linux users can use the package extra/eclipse-java, which is rather up-to-date.
* Install Xtext
	* In Eclipse, click Help -> Eclipse Marketplace...
	* In the search form enter "xtext", then press Enter
	* One of the retrieved entries should be "Xtext 2.8.x", click Install
	* Follow the instructions, accept the license, wait for Eclipse to download and install the product, accept the installation and restart the IDE.
* Install the Protelis Eclipse plug-in
	* In Eclipse, click Help -> Install New Software
	* In the text field labelled "Work with:", enter: ``http://hephaestus.apice.unibo.it/protelis-dsl/stable/``
		* If you want to work with the last nightly, choose instead: ``http://hephaestus.apice.unibo.it/alchemist-build/alchemist-protelis-parser/alchemist.protelis.repository/target/repository/``
	* Protelis will appear in the plugin list. Select it and click Next.
	* Follow the instructions, accept the license, wait for Eclipse to download and install the product, restart the IDE when prompted
* Install the Protelis Simulations Eclipse plug-in
	* In Eclipse, click Help -> Install New Software
	* In the text field labelled "Work with:", enter: ``http://hephaestus.apice.unibo.it/protelis-simulation-dsl/stable/``
		* If you want to work with the last nightly, choose instead: ``http://hephaestus.apice.unibo.it/alchemist-build/alchemist-dsl-protelis/alchemist.protelisdsl.repository/target/repository/``

	* Press Enter
	* Protelis DSL will appear in the plugin list. Select it and click Next.
	* Follow the instructions, accept the license, wait for Eclipse to download and install the product, restart the IDE when prompted

### Test installation

* Open Eclipse on a workspace of your choice
* Click on File -> New -> Java Project
* Give the project a name, then click "Finish"
* Find the ``src`` folder
* Create a ``test.psim`` file
* Eclipse will prompt you with a question: "Do you want to add the Xtext nature to the project "(your project name here")?". Answer "Yes"
	* If Eclipse does not ask you to add such nature, right click on the project, go to Configure -> Add Xtext Nature
* Open the ``test.psim`` file
* It should show an error
* Type the following (you can use ctrl + space, or your user defined shortcut, and use autocompletion):
{% highlight java %}
val x = 1

default environment
linking nodes in range 1.5

protelis program prog
1
@x,x

place 100 nodes within rect (0,0,9,9) with program prog
{% endhighlight %}
* A folder named ``src-gen`` will appear, containing a ``test.xml`` file. This file can be loaded by Alchemist.
* If such file is correctly generated, your installation has been successful.

### Example 0: minimal specification
{% highlight java %}
default environment
linking nodes in range 1
{% endhighlight %}



### Example X: maps

[eclipse]: https://eclipse.org/downloads/
[Field Calculus]: http://dx.doi.org/10.1007/978-3-642-45364-9_11
[IMolecule]: {{site.url}}/javadoc/it/unibo/alchemist/model/interfaces/IMolecule.html
[Protelis]: http://protelis.org
[ProtelisIncarnation]: {{site.url}}/javadoc/it/unibo/alchemist/model/ProtelisIncarnation.html
[protelis paper]: http://dx.doi.org/10.1145/2695664.2695913
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
[NodeInspector]: {{site.url}}/javadoc/it/unibo/alchemist/boundary/monitors/NodeInspector.html
[NumberOfNodesNextToANode]: {{site.url}}/javadoc/it/unibo/alchemist/boundary/monitors/NumberOfNodesNextToANode.html
[observer pattern]: https://en.wikipedia.org/wiki/Observer_pattern
[RGBA]: https://en.wikipedia.org/wiki/RGBA_color_space
[statistic functions]: https://commons.apache.org/proper/commons-math/apidocs/org/apache/commons/math3/stat/descriptive/AbstractStorelessUnivariateStatistic.html
[String]: https://docs.oracle.com/javase/8/docs/api/java/lang/String.html
