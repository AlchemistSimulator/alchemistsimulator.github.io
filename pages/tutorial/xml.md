---
layout: page-fullwidth
title: "Alchemist XML"
meta_title: "Alchemist Basics"
subheadline: "A deprecated way to write simulations"
teaser: "You should really switch to YAML, if possible"
permalink: "pages/tutorial/xml/"
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
Some resources on how to write a proper Alchemist XML are still available here.
Keep in mind, however, that such method is now deprecated and unmaintained, and it is likely to get dropped if any major breakage occurs.
If you are new to Alchemist, we recommend to [learn the new way][Simulations in YAML], and learn about the wonders of YAML.

Incarnations can differ a lot between each other, but the engine is completely agnostic. To a good extent, the same applies to the output monitors.
As a consequence, the tool must be able to load any legal scenario of any supported incarnation without any need for extensions.
In order to satisfy this requirement, Alchemist has been equipped with the ability to load simulations in form of XML files.

As a reference, please consider that Alchemist XML files must conform to the following [XML Schema](https://www.w3.org/XML/Schema):

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
    * ``ENV`` passes a reference to the current environment. If your class takes an instance of [``IEnvironment``][Environment] in its constructor, you probably want it to be the current environment, and as such you want to write an attribute like ``p0="ENV"``
    * ``NODE`` bounds to a reference with the [current node][Node]. This is only available inside a ``<node></node>`` block.
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

Even though you can write XML files by hand, our suggestion is to write your own Alchemist XML code generator based on a domain specific language. Alchemist XML generators are provided for the shipped incarnations in form of [Eclipse](https://eclipse.org) plug-ins.
Instructions on how to install and use them is provided in other tutorial chapters.

The reason why you should really use a code generator, is that the Alchemist XML is extremely verbose, since each node has its own description.

[Environment]: {{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/Environment.html
[Node]: {{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/Node.html
[Reaction]: {{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/Reaction.html
[TimeDistribution]: {{ page.javadoc.root }}{{ page.javadoc.base }}model/interfaces/TimeDistribution.html
[RandomEngine]: {{ page.javadoc.math3 }}random/RandomGenerator.html
[UI]: {{site.url}}/pages/tutorial/swingui
[CLI]: {{site.url}}/pages/tutorial/cli
[Simulations in YAML]: {{site.url}}/pages/tutorial/simulations
[XML]: https://www.w3.org/XML/
[YAML]: http://www.yaml.org/spec/1.2/spec.html
