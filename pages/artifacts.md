---
layout: page-fullwidth
title: "Alchemist artefacts"
meta_title: "Alchemist artefacts"
subheadline: "Use alchemist as library in your build"
teaser: "Alchemist can be easily imported via Maven, Ivy, Gradle, or sbt"
permalink: "pages/artifacts/"
comments: true
#categories:
#    - design
header:
   image_fullwidth: "header_mol.png"
---

Alchemist provides artifacts on [OSSRH](http://search.maven.org/) to ease the process of being used as a library.

## Easy way

Importing the [`it.unibo.alchemist:alchemist`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22alchemist%22%20g%3A%22it.unibo.alchemist%22) artifact will pull along all the simulator components, all the official incarnations, and all the required dependencies.

First, identify which version of the simulator you want to work with, this will most likely be the latest stable one.
Let's say that you picked version `THE.VERSION`, the following are the dependencies you want to add, depending on your build system.

### Apache Maven

{% highlight xml %}
<dependency>
    <groupId>it.unibo.alchemist</groupId>
    <artifactId>alchemist</artifactId>
    <version>THE.VERSION</version>
</dependency>
{% endhighlight %}

### Gradle

{% highlight groovy %}
compile 'it.unibo.alchemist:alchemist:THE.VERSION'
{% endhighlight %}

### Scala SBT

{% highlight scala %}
libraryDependencies += "it.unibo.alchemist" % "alchemist" % "THE.VERSION"
{% endhighlight %}

### Apache Ivy

{% highlight xml %}
<dependency org="it.unibo.alchemist" name="alchemist" rev="THE.VERSION" />
{% endhighlight %}

### Apache Buildr

{% highlight groovy %}
'it.unibo.alchemist:alchemist:jar:THE.VERSION'
{% endhighlight %}

### Groovy Grape

{% highlight groovy %}
@Grapes(
@Grab(group='it.unibo.alchemist', module='alchemist', version='THE.VERSION')
)
{% endhighlight %}

### Leiningen

{% highlight groovy %}
[it.unibo.alchemist/alchemist "THE.VERSION"]
{% endhighlight %}

## Cleaner way

It is actually unlikely that you want to use the full fledged simulator in your own project.
To support the case where you want a lightweight, small dependency network in your product, the simulator is composed of multiple modular artifacts.
In case you want to to depend on as less artifacts as possible, you should consider verifying which Alchemist artifacts you actually need, and pointing them directly.
All the Alchemist modules (including deprecated and discontinued ones) are available [here on Maven Central](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22it.unibo.alchemist%22).
