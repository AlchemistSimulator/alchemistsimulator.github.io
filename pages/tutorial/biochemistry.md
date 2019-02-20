---
layout: page-fullwidth
title: "Biochemistry"
meta_title: "Biochemistry incarnation"
subheadline: "A powerful distributed programming language"
teaser: "Alchemist can simulate biochemical reactions and multicellular organisms through the Biochemistry Incarnation"
permalink: "pages/tutorial/biochemistry/"
comments: true
#categories:
#    - design
header:
   image_fullwidth: "header_mol.png"

---

## Biochemistry and Alchemist
Biochemistry is the latter incarnation of Alchemist Simulator, which has been developed to give a support for biochemical reactions that take place inside a biological cell or a group of those surrounded by a common environment.

### The Biochemistry Incarnation
The Biochemistry incarnation provides a way to:

* Manage the creation, destruction and relocation of a molecule (which can be either a simple atom or a complex protein) inside a cell or from a cell to another
* Create junctions between cells using a specified amount of molecules. The junctions are modeled in a general way, but with a simple use of actions and conditions it will be possible to create tight junctions, anchoring junctions, gap junctions and even customized one
* Move a cell inside its environment in different ways, handling collisions between two ore more of them in a simplistic but effective way

## The Biochemistry DSL
Biochemistry simulations can be set up using a YAML configuration file with a simple and human-readable syntax.

### Incarnation
As first step, it is required to add this line of code in order to notice Alchemist to use the Biochemistry Incarnation:
```yaml
incarnation: biochemistry
```

### Reactions
A reaction rule can be set using the symbol ``-->`` according to chemistry equations, and placing both the molecules and the actions inside two square brackets (ex. ``[OH]``, ``[H2O]``, ``[BrownianMove(0.1)]``)

The following line, so, represents a basic chemical reaction that happens inside a cell: ``[H] + [OH] --> [H2O]``

However, reactions can also take place outside the cell itself. Biological cells, indeed, can swap molecules with its neighbour or the surrounding environment, and this is possible in Alchemist too, using the keywords: ``in cell``, ``in neighbour`` and ``in env``.

The reaction ``[A in env] --> [A in cell]`` moves the molecule A from the environement inside the cell.

If the location is not explicit, it is assumed the molecule to be inside the cell.

### Junctions
