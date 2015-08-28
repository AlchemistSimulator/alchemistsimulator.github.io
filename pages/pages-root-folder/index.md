---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: "header_mol.png"
widget1:
  title: "What is Alchemist?"
  url: "http://dx.doi.org/10.1057/jos.2012.27"
  image: screenshot1.png
  text: 'Alchemist is an extensible "meta-simulator", inspired by stochastic chemistry and tailored to pervasive computing and distributed systems. It provides a flexible meta-model, on which the developers should bind their own abstractions, realizing a so-called "incarnation". Incarnations for SAPERE and Protelis are already available and integrated in the main distribution.'
widget2:
  title: "Why Alchemist?"
  url: '/work-in-progress.html'
  text: '
    1. Extensible: any concrete model that can be translated into the Alchemist generic meta-model can be simulated, reusing common simulator features.
    <br/>2. High performance, scales up to to thousands of nodes easily.
    <br/>3. Built on Java, runs wherever a Java 8 virtual machine runs.
    <br/>4. Click below for a comprehensive list of features'
#    <br/>4. GPL-licensed with linking exception: you can link Alchemist from your private project.
#    <br/>5. Integrated support for
#      <a target="_blank" href="http://www.sapere-project.eu/">SAPERE</a>
#      and <a target="_blank" href="http://protelis.org">Protelis</a>.
#    <br/>4. Support for simulating on maps through OpenStreetMap, navigation via Graphhopper.
#    <br/>3. Built on Java, runs wherever a Java 8 virtual machine runs.
  image: screenshot2.png
#  video: '' #<a href="#" data-reveal-id="videoModal"><img src="http://phlow.github.io/feeling-responsive/images/start-video-feeling-responsive-302x182.jpg" width="302" height="182" alt=""/></a>'
widget3:
  title: "Use Alchemist"
  url: '/work-in-progress.html'
  image: screenshot3.png
  text: 'If you want to simulate a network of
  <a target="_blank" href="http://www.sapere-project.eu/">SAPERE</a>
  or
  <a target="_blank" href="http://protelis.org">Protelis</a>.
  programmed devices, you are in the right place. You should start by following our tutorial, that should guide you step by step.
  If you use Alchemist to perform simulations for a scientific work, please cite
  <a target="_blank" href="http://dx.doi.org/10.1057/jos.2012.27">this paper</a>.
  If you need to create your own incarnation, you should check our developer instructions and documentation first.'
permalink: /index.html
---

This example simulation executed in Alchemist shows a group of pedestrians dynamically steered in the city of London. More information about this example can be found in [this scientific paper](http://dl.acm.org/citation.cfm?id=2773424).

<iframe src="https://vid.me/e/gsIm?stats=1&amp;tools=1" width="1000" height="560" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen scrolling="no"></iframe>
