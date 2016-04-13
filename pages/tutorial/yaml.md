---
layout: page-fullwidth
title: "Alchemist YAML"
meta_title: "The Alchemist's YAML format"
subheadline: "Learn the basics!"
teaser: "Alchemist can be programmed with YAML, and here is how."
permalink: "pages/tutorial/yaml/"
comments: true
#categories:
#    - design
header:
   image_fullwidth: "header_mol.png"
---
{% highlight yaml %}
---
variables:
  runId: &runId
    min: 0
    max: 9
    step: 1
    default: 0
  v: &v
    detail: Speed of nodes
    type: GeometricVariable
    parameters: [0.05, 0.005, 0.5, 9]
  c: &commrange
    formula: 1
  n: &n
    detail: Number of nodes
    type: GeometricVariable
    parameters: [100, 10, 1000, 9]
  a: &a
    detail: Average number of neighbors
    formula: 15
  d: &d
    detail: expected network diameter (lower bound)
    notes:
      - let's call r the radius of the scenario, c the communication range, n the number of nodes
      - the density of devices is n / (pi * r^2)
      - if we want approximately 10 neighbors, then n = 10 * r^2 / c^2
      - also, d = 2 * r / c
      - if c = 1, for any given d, r = d / 2, n = 5 * d / 2
    formula: 2 * $r / $c
  r: &radius
    formula: $c * Math.sqrt($n / $a)
  p: &p
#    type: GeometricVariable
#    parameters: [5, 0.5, 50, 9]
    formula: 4 * $d / ($k - 1)
#  kMul: &kMul
#    type: GeometricVariable
#    parameters: [1.5, 0.15, 15, 9]
  k: &k
#    formula: $kMul * (1 + $p)
    values: [1, 2, 3, 4, 5, 10, 20, 30, 40]
    default: 4
  s: &s
    default: 2
  t1: &t1
    default: 100
  t2: &t2
    default: 200

export:
  - time
  - number-of-nodes
  - name: expected
    molecule: value
    aggregators: [mean, min]
  - molecule: boolval
    aggregators: [product]
  - molecule: gavg
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, mean, gavg, null]
  - molecule: cavg
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, mean, cavg, null]
  - molecule: lavg
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, mean, lavg, null]
  - molecule: pldavg
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, mean, pldavg, null]
  - molecule: rgavg
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, mean, rgavg, null]
  - molecule: rlavg
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, mean, rlavg, null]
  - molecule: rpldavg
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, mean, rpldavg, null]
  - molecule: tgavg
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, mean, tgavg, null]
  - molecule: tlavg
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, mean, tlavg, null]
  - molecule: tpldavg
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, mean, tpldavg, null]
  - molecule: gmin
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, min, gmin, null]
  - molecule: cmin
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, min, cmin, null]
  - molecule: rgmin
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, min, rgmin, null]
  - molecule: tgmin
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [value, null, min, tgmin, null]
  - molecule: gand
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [boolval, null, product, gand, null]
  - molecule: cand
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [boolval, null, product, cand, null]
  - molecule: rgand
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [boolval, null, product, rgand, null]
  - molecule: tgand
    aggregators: [Mean]
  - type: MeanSquaredError
    parameters: [boolval, null, product, tgand, null]

incarnation: protelis

seeds:
  scenario: *runId
  simulation: *runId

network-model:
  type: EuclideanDistance
  parameters: [*commrange]

environment:
  type: Continuous2DEnvironment

positions:
  type: Continuous2DEuclidean

pools:
  - pool: &program
      - time-distribution: 1
#        program: test3
        program: test4
      - time-distribution: null
        program: send
      - time-distribution:
          type: ExponentialTime
          parameters: [1]
        type: Event
        conditions: []
        actions:
          - type: CircleLimitedLevyWalk
            parameters: [*v, 0, 0, *radius]


displacements:
  - in:
      type: Circle
      parameters: [*n, 0, 0, *radius]
    programs:
      - *program
    contents:
      - molecule: boolval
        concentration: true
      - molecule: d
        concentration: *d
      - molecule: s
        concentration: *s
      - molecule: p
        concentration: *p
      - molecule: k
        concentration: *k
{% endhighlight %}
