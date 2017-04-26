---
layout: page-fullwidth
title: "Alchemist Simulations"
meta_title: "Alchemist: how to write simulations"
subheadline: "How to write your own simulations"
teaser: "The common language between you and the simulator"
permalink: "pages/tutorial/simulations/"
#categories:
#    - design
header:
   image_fullwidth: "header_mol.png"

javadoc:
  root: "http://hephaestus.apice.unibo.it/alchemist-build/Alchemist/build/docs/javadoc/"
  base: "it/unibo/alchemist/"
  math3: http://commons.apache.org/proper/commons-math/javadocs/api-3.4/org/apache/commons/math3/

---

Since version 2.0.0, Alchemist uses [YAML][YAML] as primary mean for writing simulations.
Historically, it relied on [XML][XML] instead, but the system has since be deprecated, due to its verbosity and human-unfriendliness.
Some resources on how to write a proper Alchemist XML are still available [here][XML Simulations].
Keep in mind, however, that such method is now deprecated and unmaintained, and it is likely to get dropped if any major breakage occurs.
If you are new to Alchemist, we recommend to follow the remainder of this page, and learn about the wonders of YAML.

### Learn YAML

As a first step, we recommend learning the YAML basics.
The language is so simple and human readable that there is probably no better way to learn it than to read it directly.
My suggestion is to use the tutorial "[Learn X in Y minutes where X = YAML](https://learnxinyminutes.com/docs/yaml/)", it should provide a good YAML guide (surely sufficient to follow the tutorial):

### The Alchemist YAML

Alchemist expects a YAML map as input. In the following, we'll discuss which keys it expects.
Of course, users are free to use all the YAML features (e.g. anchors) to organize their code and reduce duplication.

#### Class loading with the Alchemist YAML

One important aspect of the Alchemist YAML is the ability to let the user control which actual Java classes should be loaded inside a simulation, and which constructor should be used to do so.
Almost every entity of an Alchemist simulation can be instanced using arbitrary Java classes that implement the required interfaces.
When the alchemist YAML parser encounters an entity that is a YAML Map providing the keys `type` and `parameters`, it tries to resolve the value of the value associated to `type` to a class name, then tries to create the object with the constructor better suiting the provided `parameters`.

**Class name resolution**

The value associated with `type` must be a string representing a valid Java identifier.
If the value contains one or more `.` characters, then it will be interpreted as a fully qualified name.
If no such character is included, then *the default package for the desired alchemist entity will be prefixed*.
In no case Alchemist will attempt loading a class situated in the default package (but I am sure good people like you don't put stuff there, do you?).

**Object instancing**

If the class gets correctly loaded (namely if a class is present in the classpath with the fully qualified name as passed or as guessed by Alchemist), then its constructors get sorted based on the number and type of parameters.
The system tries to build an object with all the constructors, in order, until one of them provides an instanced object, considering both the current context (namely, the entities that have already been instanced) and the value of `parameters`.

For instance, imagine that you are trying to build an instance of a [Reaction][Reaction], whose only constructor requires an [Environment][Environment], a [Node][Node], an `int` and a `String`.
In this case, an [Environment][Environment] and a [Node][Node] must have already been created (or the YAML loader won't be at this point).
As a consequence, the first two parameters are automatically inferred by the current context and passed to the constructor.
The other two parameters can not be inferred this way; as such the value associated to `parameters` is used to extract the proper values (if possible).
In this case, this would have been a valid `parameters` entry:

{% highlight yaml %}
parameters: [4, foo]
{% endhighlight %}

As you can easily infer, the value of `parameters` must be a YAML list.

Don't despair if the class loading system is still unclear: it is used pervasively and it will get clearer and clearer with the examples in the next sections.

#### The `incarnation` key

The key `incarnation` is mandatory.

It expects a string value, and does not support the class loading mechanism.
Such string will be used to get the most similarly named incarnation (the algorithm may vary), namely the subclass of [Incarnation][Incarnation] whose simple name is closest to the string.
The (obvious) suggestion is to use an existing incarnation name, such as `sapere` or `protelis`.
New incarnations may (and will) be available in future.

**Examples**

{% highlight yaml %}
incarnation: sapere
{% endhighlight %}

{% highlight yaml %}
incarnation: protelis
{% endhighlight %}

*Note:* this is also the most minimal valid alchemist specification

#### The `variables` key
The `variable` section lists variable simulation values. A custom variable is defined in a Java class which implements the [Variable][Variable] interface. If no fully qualified variable name is provided for class loading, Alchemist uses the package [variables][VariablePackage] to search for the class.

**Examples**
{% highlight yaml %}
variables:
  # Defining variable `random` with its properties
  random: &random
    min: 0
    max: 9
    step: 1
    default: 0
  mape: &mape
    type: Flag
    # Actual parameters of the variable constructor
    parameters: [true]
{% endhighlight %}


#### The `seeds` key

The `seed` section may contains two optional values: `scenario` and `simulation`. The former is the seed of the pseudo-random generator used during the creation of the simulation. For instance, perturbating grid nodes in the `displacement` section. The latter is the seed of the pseudo-random generator used during the simulation. For instance, handling events concurrency (which event occurs before another).

**Examples**
Setting seeds with integer values.
{% highlight yaml %}
incarnation: protelis
seeds:
  scenario: 0
  simulation: 1
{% endhighlight %}

Setting seeds with variables.
{% highlight yaml %}
variables:
  random: &random
    min: 0
    max: 9
    step: 1
    default: 0
seeds:
  # reference to the `random` variable
  scenario: *random
  simulation: *random
{% endhighlight %}

#### The `environment` key

The `environment` key is used to load the [Environment][Environment] implementation.
It is optional, defaults to a [continuous bidimensional space][DefaultEnvironment]. If no fully qualified environment name is provided for class loading, Alchemist uses the package [environments][EnvironmentPackage] to search for the class.

**Examples**

The following simulations are equivalent, and load the default environment (which is incarnation independent, here `protelis` is picked, but it works for any other incarnation as well):
{% highlight yaml %}
incarnation: protelis
{% endhighlight %}
{% highlight yaml %}
incarnation: protelis
environment:
  type: Continuous2DEnvironment
{% endhighlight %}
{% highlight yaml %}
incarnation: protelis
environment:
  type: it.unibo.alchemist.model.implementations.environments.Continuous2DEnvironment
{% endhighlight %}
{% highlight yaml %}
incarnation: protelis
environment:
  type: Continuous2DEnvironment
  parameters: []
{% endhighlight %}

The following simulation loads data from an Openstreetmap file (OSM XML and PBF formats are supported) located in the classpath in the folder `maps`:
{% highlight yaml %}
incarnation: protelis
environment:
  type: OSMEnvironment
  parameters: [/maps/foo.pbf]
{% endhighlight %}

The following simulation loads data from a black and white raster image file located in the classpath in the folder `images` , interpreting the black pixels as obstacles (areas where the nodes should can not get):
{% highlight yaml %}
incarnation: protelis
environment:
  type: ImageEnvironment
  parameters: [/images/foo.png]
{% endhighlight %}

The following simulation loads a personalized class named `my.package.FooEnv` implementing [Environment][Environment], whose constructor requires a String and a double:
{% highlight yaml %}
incarnation: protelis
environment:
  type: my.package.FooEnv
  parameters: [bar, 2.2]
{% endhighlight %}

More about the environments shipped with the distribution [here][Environments].

#### The `positions` key

The `position` section list the coordinate types of the simulation. Actually, only one value is taken into account. Each type implements the interface [Position][Position]. If no fully qualified position name is provided for class loading, Alchemist uses the package [positions][PositionPackage] to search for the class.

The `position` should reflect the simulation physical features. For instance, when a city map is considered Continuous2DEuclidean distance might be no longer suitable. Given two points A e B, `distance(A, B)` may differ from `distance(B, A)`.

**Example**
{% highlight yaml %}
positions:
  type: LatLongPosition
{% endhighlight %}

#### The `network-model` key

The `network-model` key is used to load the implementation of [linking rule][LinkingRule] to use in the simulation.
It relies on the class loading mechanism, it is optional, and if not specified defaults to [NoLinks][NoLinks] (nodes in the environment don't get connected).
Omitting such key is equivalent to writing any of the following (they are equivalent):
{% highlight yaml %}
network-model:
  type: NoLinks
{% endhighlight %}
{% highlight yaml %}
network-model:
  type: it.unibo.alchemist.model.implementations.linkingrules.NoLinks
  parameters: []
{% endhighlight %}
{% highlight yaml %}
network-model:
  type: NoLinks
  parameters: []
{% endhighlight %}
If no fully qualified linking rule name is provided for class loading, Alchemist uses the package [linkingrules][LinkingRulesPackage] to search for the class.

**Example**
{% highlight yaml %}
network-model:
  type: EuclideanDistance
  # Link together all the nodes closer than 100 according to the euclidean
  # distance function
  parameters: [100]
{% endhighlight %}

#### The `displacements` key

The `displacement` sections lists the node locations at the beginning of the simulation. Each displacement type extends the interface [Displacement][Displacement]. If no fully qualified displacement name is provided for class loading, Alchemist uses the package [displacements][DisplacementPackage] to search for the class.

**Examples**

A single point located in (0, 0).
{% highlight yaml %}
displacements:
  # "in" entries, where each entry defines a group of nodes
  - in:
      type: Point
      # Using a constructor taking (x,y) coordinates
      parameters: [0, 0]
{% endhighlight %}

10000 nodes, displaced in a circle with center in (0, 0) and radius 10.
{% highlight yaml %}
displacements:
  - in:
      type: Circle
      parameters: [10000, 0, 0, 10]
{% endhighlight %}

Nodes are randomly located in a square with a 0.1 distance units long side, centered in the point where the node was previously placed.
{% highlight yaml %}
displacements:
  - in:
      type: Grid
      parameters: [-5, -5, 5, 5, 0.25, 0.25, 0.1, 0.1]
{% endhighlight %}

It is possible to set the content of the nodes inside a given region. Only the nodes inside the `Rectangle` area contain the `source` and `randomSensor` molecules (global variables).
{% highlight yaml %}
displacements:
  - in:
      type: Grid
      parameters: [-5, -5, 5, 5, 0.25, 0.25, 0.1, 0.1]
    contents:
      - in:
          type: Rectangle
          parameters: [-6, -6, 2, 2]
        molecule: source
        # Concentration = molecule value, any valid stateless protelis program is allowed
        concentration: true
        molecule: value
        # Java imports and method calls are allowed. Pay attention to randomness as
        # it breaks the reproducibility invariant of the simulation
        molecule: randomSensor
        concentration: >
          import java.lang.Math.random
          random() * pi
{% endhighlight %}

Nodes can execute a list of protelis programs.
{% highlight yaml %}
# Variable representing the program to be executed
gradient: &gradient
  - time-distribution: 1
    # Make sure that the program folder is part of the project classpath
    program: program:package:distanceTo
  - program: send
displacements:
  - in:
      type: Grid
      parameters: [-5, -5, 5, 5, 0.25, 0.25, 0.1, 0.1]
    programs:
      # Reference to the "gradient" list of programs. This program is executed in all
      # the grid nodes
      - *gradient
{% endhighlight %}


#### The `export` key

The `export` section lists which simulation values are exported into the `folder` specified with the `-e path/to/folder` argument. Data aggregators are statistically univariated. Valid aggregating functions extend   [AbstractStorelessUnivariateStatistic].

**Examples**
{% highlight yaml %}
export:
  # Time step of the simulation
  - time
  # Number of nodes involved in the simulation
  - number-of-nodes
  # Molecule representing an aggregated value
  - molecule: danger
    aggregators: [sum]
{% endhighlight %}

#### Extending the simulation

It is possible to enrich the simulation with custom classes (variable types, displacements, etc). The latter have to be included in the simulation classpath and have to implement (extend) the respective interfaces ([abstract] classes).

[DefaultEnvironment]: {{site.urldoc}}it/unibo/alchemist/model/implementations/environments/Continuous2DEnvironment.html
[Environment]: {{site.urldoc}}it/unibo/alchemist/model/interfaces/Environment.html
[Environments]: {{site.urldoc}}it/unibo/alchemist/model/implementations/environments/package-summary.html
[Incarnation]: {{site.urldoc}}it/unibo/alchemist/model/interfaces/Incarnation.html
[LinkingRule]: {{site.urldoc}}it/unibo/alchemist/model/interfaces/LinkingRule.html
[NoLinks]: {{site.urldoc}}it/unibo/alchemist/model/implementations/linkingrules/NoLinks.html
[Node]: {{site.urldoc}}it/unibo/alchemist/model/interfaces/Node.html
[Reaction]: {{site.urldoc}}it/unibo/alchemist/model/interfaces/Reaction.html
[XML]: https://www.w3.org/XML/
[XML Simulations]: {{site.url}}/pages/tutorial/xml/
[YAML]: http://www.yaml.org/spec/1.2/spec.html
[Variable]: {{site.urldoc}}it/unibo/alchemist/loader/variables/Variable.html
[Displacement]: {{site.urldoc}}it/unibo/alchemist/loader/displacements/Displacement.html
[Continuous2DEuclidean]: {{site.urldoc}}it/unibo/alchemist/model/implementations/positions/Continuous2DEuclidean.html
[ContinuousGenericEuclidean]: {{site.urldoc}}it/unibo/alchemist/model/implementations/positions/ContinuousGenericEuclidean.html
[Discrete2DManhattan]: {{site.urldoc}}it/unibo/alchemist/model/implementations/positions/Discrete2DManhattan.html
[LatLongPosition]: {{site.urldoc}}it/unibo/alchemist/model/implementations/positions/LatLongPosition.html
[Circle]:{{site.urldoc}}it/unibo/alchemist/loader/displacements/Circle.html
[Grid]:{{site.urldoc}}it/unibo/alchemist/loader/displacements/Grid.html
[Point]:{{site.urldoc}}it/unibo/alchemist/loader/displacements/Point.html
[Rectangle]:{{site.urldoc}}it/unibo/alchemist/loader/displacements/Rectangle.html
[Position]:{{site.urldoc}}it/unibo/alchemist/model/interfaces/Position.html
[PositionPackage]:{{site.urldoc}}it/unibo/alchemist/model/implementations/positions/package-summary.html
[DisplacementPackage]:{{site.urldoc}}it/unibo/alchemist/loader/displacements/package-summary.html
[VariablePackage]:{{site.urldoc}}it/unibo/alchemist/loader/variables/package-summary.html
[LinkingRulesPackage]:{{site.urldoc}}it/unibo/alchemist/model/implementations/linkingrules/package-summary.html
[AbstractStorelessUnivariateStatistic]:http://commons.apache.org/proper/commons-math/javadocs/api-3.4/org/apache/commons/math3/stat/descriptive/AbstractStorelessUnivariateStatistic.html
[EnvironmentPackage]:{{site.urldoc}}it/unibo/alchemist/model/implementations/environments/package-summary.html
