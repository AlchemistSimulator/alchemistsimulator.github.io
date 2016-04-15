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
Of course, the user is free to use all the YAML features (e.g. anchors) to organize her code and reduce duplication.

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

#### The `seeds` key

> To be written

#### The `environment` key

The `environment` key is used to load the [Environment][Environment] implementation.
It is optional, defaults to a [continuous bidimensional space][DefaultEnvironment], and supports the class loading mechanism with default search package `it.unibo.alchemist.model.implementations.environments`.

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
As is probably clear by now, if no fully qualified name is provided for class loading, Alchemist uses the package `it.unibo.alchemist.model.implementations.linkingrules` to search for the class.

**Examples**

#### The `displacements` key

> To be written

#### The `variables` key

> To be written

#### The `export` key

> To be written




[DefaultEnvironment]: {{page.javadoc.root}}{{page.javadoc.base}}model/implementations/environments/Continuous2DEnvironment.html
[Environment]: {{page.javadoc.root}}{{page.javadoc.base}}model/interfaces/Environment.html
[Environments]: {{page.javadoc.root}}{{page.javadoc.base}}model/implementations/environments/package-summary.html
[Incarnation]: {{page.javadoc.root}}{{page.javadoc.base}}model/interfaces/Incarnation.html
[LinkingRule]: {{page.javadoc.root}}{{page.javadoc.base}}model/interfaces/LinkingRule.html
[NoLinks]: {{page.javadoc.root}}{{page.javadoc.base}}model/implementations/linkingrules/NoLinks.html
[Node]: {{page.javadoc.root}}{{page.javadoc.base}}model/interfaces/Node.html
[Reaction]: {{page.javadoc.root}}{{page.javadoc.base}}model/interfaces/Reaction.html
[XML]: https://www.w3.org/XML/
[XML Simulations]: {{site.url}}/pages/tutorial/xml/
[YAML]: http://www.yaml.org/spec/1.2/spec.html
