---
layout: page-fullwidth
title: "Understand Alchemist"
meta_title: "Alchemist Basics"
subheadline: "Learn the basics!"
teaser: "A description of the entities that the simulator supports."
permalink: "pages/tutorial/basics/"
#categories:
#    - design
header:
   image_fullwidth: "header_mol.png"

javadoc:
  root: "http://hephaestus.apice.unibo.it/alchemist-build/Alchemist/build/docs/javadoc/"
  base: "it/unibo/alchemist/"
  math3: http://commons.apache.org/proper/commons-math/javadocs/api-3.4/org/apache/commons/math3/

---

## The world of Alchemist

The first step to take in order to use the simulator, is to answer the question

> what does Alchemist simulate?

### The model

The world of Alchemist is composed of the following entities:

* [**Molecule**]({{ page.javadoc.root }}{{page.javadoc.base}}model/interfaces/Molecule.html)
  * Name of a data item
  * If Alchemist were an imperative programming language, a *molecule* would have been the abstraction of variable name
* [**Concentration**]({{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/Concentration.html)
  * Value associated to a particular *molecule*
  * If Alchemist were an imperative programming language, a *concentration* would have been the abstraction of value associated to a variable
* [**Node**][Node]
  * Container of *molecules*
  * Container of *reactions*
  * Lives inside an *environment*
* [**Environment**][Environment]
  * The *environment* is the Alchemist abstration for the space. It is a container for *nodes*, and it is able to tell:
    1. Where the nodes are in the space - i.e. their *position*
    2. How distant are two *nodes*
    3. Optionally, it may provide support for moving *nodes*
* [**Linking rule**]({{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/LinkingRule.html)
  * Is a function of the current status of the environment that associates to each *node* a *neighborhood*
* [**Neighborhood**]({{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/Neighborhood.html)
  * An entity composed by a *node* (centre) and a set of *nodes* (neighbors)
* [**Reaction**][Reaction]
  * Any event that can change the status of the *environment* is a *reaction*
  * Each *node* has a (possibly empty) set of *reactions*
  * It is composed of a (possibly empty) list of *conditions*, one or more *actions*, and a [*time distribution*][TimeDistribution]
  * The frequency at which it happens depends on:
    1. A static "rate" parameter
    2. The value of each *condition*
    3. A "rate equation", that combines the static rate and the value of conditions, giving back an "instantaneous rate"
    4. A *time distribution*
* [**Condition**]({{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/Condition.html)
  * A function that takes the current *environment* as input, and outputs a boolean and a number
  * If the *condition* does not hold (i.e. its current output is ``false``), the *reaction* to which it is associated cannot run
  * The number in output may or may not influence the *reaction* speed (i.e. the average number of times the *reaction* "happens" every time unit), depending on the *reaction* and its *time distribution*.
* [**Action**]({{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/Action.html)
  * Models a change in the environment.

The following image is a pictorial view of such model:

![Alchemist model]({{ site.url }}/pages/tutorial/images/model.png)

The behavior of the system is described in terms of reactions. As such, here it is a pictorial representation of a reaction:

![Alchemist reaction]({{ site.url }}/pages/tutorial/images/reaction.png)


### Incarnations

As you can see, names are given after classical chemistry terms. This is mostly for historical reasons: Alchemist has been initially conceived as chemical-oriented multi-compartment stochastic simulation engine, able to support compartment (node) mobility, still retaining high performance.

However, Alchemist is not limited to that. The key of its extensibility is in the very loose interpretation of **molecule** and **concentration**. Those two terms have a very precise definition in chemistry, but in Alchemist they are respectively

1. a generic identifier, and
2. a piece of data of some **type**

An **incarnation** of Alchemist includes a **type** definition of **concentration**, and possibly a set of specific conditions, actions and (rarely) environments and reactions that operate on such types. In other words, an incarnation is a concrete instance of the Alchemist meta-model. In addition, a proper [Alchemist incarnation]({{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/Incarnation.html) must also define:

* A mean for translating strings into named-entities (molecules)
* A mean for obtaining a number given a node, a molecule and and a string representing a property
* A mean for building incarnation-specific model entities given an appropriate context and a parameter String

These functionalities are required in order to support a uniform access to different incarnations.

Different Incarnations can model completely different universes. For instance, if the concentration is defined as a positive integer and proper actions and conditions are provided, Alchemist becomes a stochastic simulator for chemistry featuring interconnected and mobile compartments.

The standalone distribution comes with:

* [SAPERE Incarnation](http://www.sapere-project.eu)
* [Protelis Incarnation](http://protelis.org)

More details on how to use each of the included incarnations will be provided after this introductory chapter.

## The tool

The core part of the tool is the incarnation-agnostic simulation engine. Its current implementation is based on [Gibson and Bruck's Next Reaction](http://dx.doi.org/10.1021/jp993732q), extended to support addition and removal of reactions, and improved using input and output contexts for reactions, in order to prune as much as possible the dependency graph. More details on that are demanded to [this scientific paper on Journal of Simulation](http://dx.doi.org/10.1057/jos.2012.27).

The engine's entry point is the [simulation]({{ page.javadoc.root }}{{ page.javadoc.base }}core/interfaces/Simulation.html). It is equipped with support for commands like play, pause and stop, and can be equipped with an [output monitor]({{ page.javadoc.root }}{{ page.javadoc.base }}boundary/interfaces/OutputMonitor.html). The output monitor can be a graphical interface, a logger, or any kind of environment inspector.

The tool also includes a [graphical interface developed in Java Swing][UI] and a [command line interface][CLI].

### Writing simulations using YAML

Alchemist uses YAML as incarnation-agnostic mean to write simulations.

### Writing simulations using XML (deprecated)

As said, incarnations can be very different among each other, but the engine is completely agnostic. To a good extent, the same applies to the output monitors. As a consequence, the tool must be able to load any legal scenario of any supported incarnation without any need for extensions. In order to satisfy this requirement, Alchemist is equipped with the ability to load simulations if form of XML files.

As a reference, please consider that Alchemist XML files must conform to the following XSD Schema:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
   <xs:element name="environment" type="Environment" />
   <xs:attribute name="type">
      <xs:simpleType>
         <xs:restriction base="xs:string">
            <xs:pattern value="(\w+\.)*\p{Lu}\w*" />
         </xs:restriction>
      </xs:simpleType>
   </xs:attribute>
   <xs:attribute name="seed">
      <xs:simpleType>
         <xs:restriction base="xs:string">
            <xs:pattern value="(RANDOM)|(-?\d)+" />
         </xs:restriction>
      </xs:simpleType>
   </xs:attribute>
   <xs:complexType name="Content">
      <xs:anyAttribute processContents="skip" />
   </xs:complexType>
   <xs:complexType name="Reaction">
      <xs:complexContent>
         <xs:extension base="Entity">
            <xs:sequence>
               <xs:choice minOccurs="0" maxOccurs="unbounded">
                  <xs:element name="condition" type="EmptyEntity" />
               </xs:choice>
               <xs:choice minOccurs="1" maxOccurs="unbounded">
                  <xs:element name="action" type="EmptyEntity" />
               </xs:choice>
            </xs:sequence>
            <xs:attribute name="position" type="xs:string" />
         </xs:extension>
      </xs:complexContent>
   </xs:complexType>
   <xs:complexType name="Node">
      <xs:complexContent>
         <xs:extension base="Entity">
            <xs:sequence>
               <xs:element name="content" type="Content" />
               <xs:choice minOccurs="0" maxOccurs="unbounded">
                  <xs:choice minOccurs="0" maxOccurs="unbounded">
                     <xs:element name="timedistribution" type="EmptyEntity" />
                  </xs:choice>
                  <xs:choice minOccurs="0" maxOccurs="unbounded">
                     <xs:element name="reaction" type="Reaction" />
                  </xs:choice>
               </xs:choice>
            </xs:sequence>
            <xs:attribute name="position" type="xs:string" />
         </xs:extension>
      </xs:complexContent>
   </xs:complexType>
   <xs:complexType name="Environment">
      <xs:complexContent>
         <xs:extension base="Entity">
            <xs:sequence>
               <xs:choice minOccurs="1" maxOccurs="1">
                  <xs:sequence>
                     <xs:element name="concentration" type="Class" />
                     <xs:element name="position" type="Class" />
                     <xs:element name="linkingrule" type="EmptyEntity" />
                  </xs:sequence>
                  <xs:sequence>
                     <xs:element name="linkingrule" type="EmptyEntity" />
                     <xs:element name="concentration" type="Class" />
                     <xs:element name="position" type="Class" />
                  </xs:sequence>
               </xs:choice>
               <xs:element name="random" type="Random" />
               <xs:choice minOccurs="0" maxOccurs="unbounded">
                  <xs:element name="molecule" type="EmptyEntity" />
               </xs:choice>
               <xs:choice minOccurs="0" maxOccurs="unbounded">
                  <xs:element name="node" type="Node" />
               </xs:choice>
            </xs:sequence>
         </xs:extension>
      </xs:complexContent>
   </xs:complexType>
   <xs:complexType name="EmptyEntity">
      <xs:complexContent>
         <xs:restriction base="Entity">
            <xs:sequence />
         </xs:restriction>
      </xs:complexContent>
   </xs:complexType>
   <xs:complexType name="Entity">
      <xs:attribute name="name" type="xs:string" />
      <xs:attribute ref="type" use="required" />
      <xs:attribute name="p0" type="xs:string" use="optional" />
      <xs:attribute name="p1" type="xs:string" use="optional" />
      <xs:attribute name="p2" type="xs:string" use="optional" />
      <xs:attribute name="p3" type="xs:string" use="optional" />
      <xs:attribute name="p4" type="xs:string" use="optional" />
      <xs:attribute name="p5" type="xs:string" use="optional" />
      <xs:attribute name="p6" type="xs:string" use="optional" />
      <xs:attribute name="p7" type="xs:string" use="optional" />
      <xs:attribute name="p8" type="xs:string" use="optional" />
      <xs:attribute name="p9" type="xs:string" use="optional" />
      <xs:attribute name="p10" type="xs:string" use="optional" />
      <xs:attribute name="p11" type="xs:string" use="optional" />
      <xs:attribute name="p12" type="xs:string" use="optional" />
      <xs:attribute name="p13" type="xs:string" use="optional" />
      <xs:attribute name="p14" type="xs:string" use="optional" />
      <xs:attribute name="p15" type="xs:string" use="optional" />
      <xs:attribute name="p16" type="xs:string" use="optional" />
      <xs:attribute name="p17" type="xs:string" use="optional" />
      <xs:attribute name="p18" type="xs:string" use="optional" />
      <xs:attribute name="p19" type="xs:string" use="optional" />
      <xs:attribute name="p20" type="xs:string" use="optional" />
   </xs:complexType>
   <xs:complexType name="Random">
      <xs:attribute ref="type" use="required" />
      <xs:attribute ref="seed" use="required" />
   </xs:complexType>
   <xs:complexType name="Class">
      <xs:attribute ref="type" use="required" />
   </xs:complexType>
</xs:schema>
{% endhighlight %}

Basically, this XML specifies:

* Which Java class will effectively implement any instance of each model entity
* Which parameters should be passed to its constructor
  * There are some special parameter values that are worth mentioning:
    * ``ENV`` passes a reference to the current environment. If your class takes an instance of [``IEnvironment``][IEnvironment] in its constructor, you probably want it to be the current environment, and as such you want to write an attribute like ``p0="ENV"``
    * ``NODE`` bounds to a reference with the [current node][INode]. This is only available inside a ``<node></node>`` block.
    * ``TIMEDIST`` bounds to the [time distribution][TimeDistribution] defined more recently. This block is valid also *outside* the ``<timedist/>`` block.
    * ``REACTION`` bounds to the current [reaction][Reaction]. This is only available inside a ``<reaction></reaction>`` block.
    * ``RANDOM`` bounds to the current simulation's own [random generator][RandomEngine]. This attribute value is available throughout the whole file. Any time you need to inject randomness in your classes, you should define a constructor taking a [``RandomEngine``][RandomEngine] parameter as input, and initialize it using an attribute like ``p0="RANDOM"``. Failing in doing so **will** prevent simulation seeding and reproducibility, since only one random generator per simulation is allowed.
* Where nodes should initially be

As an example, consider this is a minimal specifications, that simulates... nothing, since there are no nodes:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<environment name="environment" type="Continuous2DEnvironment">
   <linkingrule type="EuclideanDistance" p0="0"></linkingrule>
   <concentration type="LsaConcentration"></concentration>
   <position type="Continuous2DEuclidean"></position>
   <random type="MersenneTwister" seed="RANDOM"></random>
</environment>
{% endhighlight %}

Even though you can write XML files by hand, our suggestion is to write your own Alchemist XML code generator based on a domain specific language. Alchemist XML generators are provided for the shipped incarnations in form of [Eclipse](https://eclipse.org) plug-ins. Instructions on how to install and use them is provided in other tutorial chapters.

The reason why you should really use a code generator, is that the Alchemist XML is extremely verbose, since each node has its own description.

[Environment]: {{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/Environment.html
[Node]: {{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/Node.html
[Reaction]: {{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/Reaction.html
[TimeDistribution]: {{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/TimeDistribution.html
[RandomEngine]: {{ page.javadoc.math3 }}random/RandomGenerator.html
[UI]: {{site.url}}/pages/tutorial/swingui
[CLI]: {{site.url}}/pages/tutorial/cli
