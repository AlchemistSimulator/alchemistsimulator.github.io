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
The following code is from [Learn X in Y minutes where X = YAML](https://learnxinyminutes.com/docs/yaml/), and should provide a good YAML guide (surely sufficient to follow the tutorial):

{% highlight yaml %}
# Comments in YAML look like this.

################
# SCALAR TYPES #
################

# Our root object (which continues for the entire document) will be a map,
# which is equivalent to a dictionary, hash or object in other languages.
key: value
another_key: Another value goes here.
a_number_value: 100
# If you want to use number 1 as a value, you have to enclose it in quotes,
# otherwise, YAML parser will assume that it is a boolean value of true.
scientific_notation: 1e+12
boolean: true
null_value: null
key with spaces: value
# Notice that strings don't need to be quoted. However, they can be.
however: "A string, enclosed in quotes."
"Keys can be quoted too.": "Useful if you want to put a ':' in your key."

# Multiple-line strings can be written either as a 'literal block' (using |),
# or a 'folded block' (using '>').
literal_block: |
    This entire block of text will be the value of the 'literal_block' key,
    with line breaks being preserved.

    The literal continues until de-dented, and the leading indentation is
    stripped.

        Any lines that are 'more-indented' keep the rest of their indentation -
        these lines will be indented by 4 spaces.
folded_style: >
    This entire block of text will be the value of 'folded_style', but this
    time, all newlines will be replaced with a single space.

    Blank lines, like above, are converted to a newline character.

        'More-indented' lines keep their newlines, too -
        this text will appear over two lines.

####################
# COLLECTION TYPES #
####################

# Nesting is achieved by indentation.
a_nested_map:
    key: value
    another_key: Another Value
    another_nested_map:
        hello: hello

# Maps don't have to have string keys.
0.25: a float key

# Keys can also be complex, like multi-line objects
# We use ? followed by a space to indicate the start of a complex key.
? |
    This is a key
    that has multiple lines
: and this is its value

# YAML also allows mapping between sequences with the complex key syntax
# Some language parsers might complain
# An example
? - Manchester United
  - Real Madrid
: [ 2001-01-01, 2002-02-02 ]

# Sequences (equivalent to lists or arrays) look like this:
a_sequence:
    - Item 1
    - Item 2
    - 0.5 # sequences can contain disparate types.
    - Item 4
    - key: value
      another_key: another_value
    -
        - This is a sequence
        - inside another sequence

# Since YAML is a superset of JSON, you can also write JSON-style maps and
# sequences:
json_map: {"key": "value"}
json_seq: [3, 2, 1, "takeoff"]

#######################
# EXTRA YAML FEATURES #
#######################

# YAML also has a handy feature called 'anchors', which let you easily duplicate
# content across your document. Both of these keys will have the same value:
anchored_content: &anchor_name This string will appear as the value of two keys.
other_anchor: *anchor_name

# Anchors can be used to duplicate/inherit properties
base: &base
    name: Everyone has same name

foo: &foo
    <<: *base
    age: 10

bar: &bar
    <<: *base
    age: 20

# foo and bar would also have name: Everyone has same name

# YAML also has tags, which you can use to explicitly declare types.
explicit_string: !!str 0.5
# Some parsers implement language specific tags, like this one for Python's
# complex number type.
python_complex_number: !!python/complex 1+2j

# We can also use yaml complex keys with language specific tags
? !!python/tuple [5, 7]
: Fifty Seven
# Would be {(5, 7): 'Fifty Seven'} in python

####################
# EXTRA YAML TYPES #
####################

# Strings and numbers aren't the only scalars that YAML can understand.
# ISO-formatted date and datetime literals are also parsed.
datetime: 2001-12-15T02:59:43.1Z
datetime_with_spaces: 2001-12-14 21:59:43.10 -5
date: 2002-12-14

# The !!binary tag indicates that a string is actually a base64-encoded
# representation of a binary blob.
gif_file: !!binary |
    R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5
    OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+
    +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC
    AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=

# YAML also has a set type, which looks like this:
set:
    ? item1
    ? item2
    ? item3

# Like Python, sets are just maps with null values; the above is equivalent to:
set2:
    item1: null
    item2: null
    item3: null
{% endhighlight %}

Pretty easy, isn't it?

### The Alchemist YAML

Alchemist expects a YAML map as input. In the following, we'll discuss which keys it expects.
Of course, the user is free to use all the YAML features (e.g. anchors) to organize her code and reduce duplication.

#### The `incarnation` key

The key `incarnation` is mandatory.

It expects a string value.
Such string will be used to get the most similarly named incarnation (the algorithm may vary), namely the subclass of [Incarnation][Incarnation] whose simple name is closest to the string.
The (obvious) suggestion is to use an existing incarnation name, such as `sapere` or `protelis`.
New incarnations may (and will) be available in future.

**Example**

{% highlight yaml %}
incarnation: sapere
{% endhighlight %}

*Note:* this is also the most minimal acceptable alchemist specification

#### Class loading with the Alchemist YAML

One important aspect of the Alchemist YAML is the ability to let the user control which actual Java classes should be loaded inside a simulation, and which constructor should be used to do so.
Almost every entity of an Alchemist simulation (incarnation being a notable exception) can be instanced using arbitrary Java classes.
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

The value of `parameters` must be a YAML list.

Don't despair if the class loading system is still unclear: it is used pervasively and will get clearer and clearer with the examples in the next sections.

#### The `network-model` key

The `network-model` key is used to load the implementation of [linking rule][LinkingRule] to use in the simulation.
It expects a map with two keys: `type` is used to identify which class should be loaded, `parameters`
If left unspecified, then NoLinks is loaded



[Node]: {{page.javadoc.root}}{{page.javadoc.base}}model/interfaces/Environment.html
[Incarnation]: {{page.javadoc.root}}{{page.javadoc.base}}model/interfaces/Incarnation.html
[LinkingRule]: {{page.javadoc.root}}{{page.javadoc.base}}model/interfaces/LinkingRule.html
[Node]: {{page.javadoc.root}}{{page.javadoc.base}}model/interfaces/Node.html
[Reaction]: {{page.javadoc.root}}{{page.javadoc.base}}model/interfaces/Reaction.html
[XML]: https://www.w3.org/XML/
[XML Simulations]: {{site.url}}/pages/tutorial/xml/
[YAML]: http://www.yaml.org/spec/1.2/spec.html
