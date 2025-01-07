var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "This website hosts the documentation of the Alchemist Simulator, created towards the end of 2010 as a by-product of the European Project SAPERE, and grown ever since into a full-fledged simulation framework.\nIf your browser supported the video tag, there would be a nice video. Where to start We recommend that you check out our showcase to understand what you can simulate, and our tutorials to learn how to fiddle with the tool. Once you are on track, we prepared specific how-to guides for the most common operations. To better understand how the simulator works, refer to our explanation section; to master it, building your own extensions and advanced scenarios or customizing what is available, take a look to the reference.\nAlchemist for Academia If you happen to use Alchemist for academic purposes, please add a reference to the following paper:\nHere is a BibTeX for LaTeX users:\nIndex of contents TutorialsTutorials are lessons that take the reader by the hand through a series of steps. They are meant to show a beginner that they can achieve something with Alchemist.\nQuickstartA super-fast way to get an instance of the simulator up and running.\nStep-by-step tutorialA (video) guide through the main features of the simulator, as presented at DAIS 2021\nProtelis Incarnation TutorialReady-to-run examples of increasing complexity with the Protelis incarnation\nSAPERE Incarnation TutorialReady-to-run examples of increasing complexity with the SAPERE incarnation\nScafi Incarnation TutorialReady-to-run examples of increasing complexity with the Scafi incarnation\nHow-to GuidesHow-to guides take the reader through the steps required to solve a real-world problem. They are recipes, directions to achieve a specific end: while a tutorial is what a beginner needs to know, a how-to guide is an answer to a question that only a user with some experience could even formulate. In how-to guides, we assume some knowledge and understanding, we assume that the user already knows how to do basic things and use basic tools.\nPreparationPreliminary operations for using Alchemist: installation, setup\nAlchemist stand-aloneThe recommended way to run the simulator and fetch all the required modules.\nAlchemist via GradleThe recommended way to run the simulator and fetch all the required modules.\nSimulationGuides on how to create simulation environments, configure node behaviour, and control the simulation details\nCreate reusable variablesDefine reusable pieces of information and compute upon them, prepare for the execution of simulation batches.\nEnsure repeatabilityControl randomness, ensuring reproducibility and replicability of experiments.\nCognitive AgentsAgents with realistic human behavior.\nCreate a networkDefine how nodes should be connected with each other.\nCreate LayersDefine data layers that live in the environment\nCreate rich environmentsHow to create complex environments (obstacles, and so on)\nFind paths indoorsHow to navigate the environment, especially indoors.\nMaps and GPS tracesHow to simulate using maps and GPS traces.\nSimulate indoorHow to create indoor environments based on planimetries.\nSimulate physical interactions among pedestriansPhysical interaction between nodes\nDeploy NodesHow to place nodes within Alchemist environments\n(Irregular) GridsDeployment of nodes in (possibly irregular) grids.\nNodes inside shapesDeployment of nodes randomly inside arbitrary shapes.\nGPS TracesDeployment of nodes on map-based environments using GPS data.\nGraphsDeployment of nodes into arbitrary graphs.\nExport dataSelect which data the simulator should output, in which format, and where.\nMonitor and Control Simulations through GraphQLMonitor and Control a Simulation through a set of GraphQL APIs.\nMonitoring Simulations through Custom Output MonitorsCreate custom monitors to track simulation progression and interact with standard hooks.\nProgram NodesHow to define the behavior of nodes\nMove nodes on mapsHow to move node around in geospatial environments.\nNode contentsDefinition of the initial content of nodes.\nSmart cameras and dronesSimulate robots with a field of view.\nExecutionExecution of multiple simulations, locally or in a distributed environment\nCustomize the Swing GUICustomize the look of your simulation.\nDefine the termination criteriaDecide when the simulator should stop and consider the simulation concluded.\nMultiVeStAHow to integrate MultiVesta in Alchemist\nParameter Sweeping with simulation batchesExecute multiple instances of a simulation with different parameters\nSimulation Engine ConfigurationAvailable simulation engine configurations.\nWorkaroundsPre-concocted solutions to well-known issues\nGraphical Glitches in SwingKnown issues with Swing and OpenGL acceleration, especially with legacy AMD/ATi drivers.\nMemory leaks under LinuxKnown issue of some Java Virtual Machine implementations when requested to use more than 64GB of RAM\nExperiment-specific extensionsOne-time changes or additions to the simulator behavior\nDevelopmentHow to contribute to the project, hence achieving eternal glory\nDeveloper's guideHow to contribute\nEnrich the GraphQL APIHow to create a new Query, Subscription, or Mutation using the GraphQL API\nImport Alchemist in an IDEThe recommended way to get and import the Alchemist project in an IDE\nBuild and run the QAHow to locally build and test the simulator\nExplanationExplanation, or discussions, clarify and illuminate a particular topic. They are a chance for the documentation to relax and step back from the software, taking a wider view, illuminating it from a higher level or even from different perspectives. You might imagine a discussion document being read at leisure, rather than over the code.\nThe Alchemist Meta-ModelWhat does Alchemist simulate? A trip on the abstractions that populate the world of Alchemist.\nThe Alchemist Simulation EngineHow does Alchemist simulate? What is at its core?\nBiochemistry IncarnationBasics of the biochemistry incarnation.\nCognitive AgentsAgents with realistic human behavior.\nPathfindingStrategies to navigate the environment.\nSAPERE IncarnationBasics of SAPERE and how its concepts are mapped in Alchemist.\nReferenceReference guides are technical, austere, and to the point descriptions of the machinery and how to operate it. Reference guides have one job only: to describe. They are code-determined, because ultimately that’s what they describe: key classes, functions, APIs, and so they list things like functions, fields, attributes and methods, and set out how to use them.\nYAML simulation specificationSpecification of the YAML-based language simulations are configured with.\nAPI DocsKDoc API docs. Captures both Java and Kotlin API abstractions.\nPer-module API DocsKDoc API docs. Captures both Java and Kotlin API abstractions.\nProject organizationLocations where things are found: build files, API implementations\nBiochemistry IncarnationReference documentation of the reactions language for the biochemistry incarnation.\nCommand Line interfaceAvailable CLI options.\nDefault Graphical User InterfaceRedirect page for the current default graphical interface\nSAPERE IncarnationReference API for the SAPERE Incarnation.\nSwing GUIKey mappings for the Java Swing-based graphical interface",
    "description": "The Alchemist Simulator",
    "tags": [],
    "title": "The Alchemist Simulator",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "Declaring variables The variables section lists variable simulation values. A variable defines some kind of value that can be referenced in the simulation file.\nThere are two kinds of variables: free and dependent variables. Free variables are meant to provide support for running batches of simulations with varying parameters; dependent variables are either single valued or can be computed from the values of other variables (free or dependent), and they are designed to simplify the simulation code.\nFree variables Free variables define a set of values and a default. Their main scope is enabling Alchemist to run a set of simulations with different parameters (values of variables) without the need to duplicate the simulation code. When used in this mode (called “batch mode”), Alchemist by default produces the cartesian product of all the variables values’ selected for the batch, and runs a simulation for each combination. If the simulation is not executed as batch, then the default value is used.\nLinear variables A variable generating values in a range, starting from a minimum value, and increasing by some step. Represented by LinearVariable.\nExamples Click to show / hide code incarnation: sapere variables: myvar: \u0026myvar type: LinearVariable parameters: [0, 0, 1, 0.2] Click to show / hide code incarnation: sapere variables: rate: \u0026rate type: GeometricVariable parameters: [2, 0.1, 10, 9] size: \u0026size type: LinearVariable parameters: [5, 1, 10, 1] mSize: \u0026mSize formula: -size sourceStart: \u0026sourceStart formula: mSize / 10 sourceSize: \u0026sourceSize formula: size / 5 network-model: type: ConnectWithinDistance parameters: [0.5] _send: \u0026grad - time-distribution: *rate program: \"{token, N, L} --\u003e {token, N, L} *{token, N+#D, L add [#NODE;]}\" - program: \u003e {token, N, L}{token, def: N2\u003e=N, L2} --\u003e {token, N, L} deployments: type: Grid parameters: [*mSize, *mSize, *size, *size, 0.25, 0.25, 0.1, 0.1] contents: type: Rectangle parameters: [*sourceStart, *sourceStart, *sourceSize, *sourceSize] molecule: token, 0, [] programs: *grad Click to show / hide code incarnation: protelis variables: zoom: \u0026zoom formula: 0.1 # Must be a valid Groovy snippet image_name: { formula: \"'chiaravalle.png'\" } image_path: \u0026image_path language: kotlin # Pick whatever JSR223 language you like and add it to the classpath formula: | # The following is pure Kotlin code. Other variables can be referenced! import java.io.File fun File.findImage(): String? = walkTopDown().find { image_name in it.name }?.absolutePath fun File.findImageRecursively(): String = findImage() ?: File(this, \"..\").findImageRecursively() File(\".\").findImageRecursively() timeout: 5000 # Linear free variable walking_speed: \u0026walk-speed { default: 1.4, min: 1, max: 2, step: 0.1 } seed: \u0026seed { default: 0, min: 0, max: 99, step: 1 } # 100 samples scenario_seed: \u0026scenario_seed { formula: (seed + 31) * seed } # Variable-dependent people_count: \u0026people_count type: GeometricVariable # A variable scanning a space with geometric segmentation parameters: [300, 50, 500, 9] # default 300, minimum 50, maximum 100, 9 samples seeds: { simulation: *seed, scenario: *scenario_seed} export: type: CSVExporter parameters: fileNameRoot: \"snippet-variables-export\" data: - time - molecule: \"default_module:default_program\" aggregators: [ mean, max, min, variance, median ] # From Apache's UnivariateStatistic value-filter: onlyfinite # discards NaN and Infinity environment: { type: ImageEnvironment, parameters: [*image_path, *zoom] } network-model: { type: ObstaclesBreakConnection, parameters: [50] } deployments: type: Rectangle parameters: [*people_count, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send - { type: Event, time-distribution: 1, actions: { type: LevyWalk, parameters: [*walk-speed] } } Click to show / hide code incarnation: protelis variables: seed: \u0026seed # You can give the anchor any name, assigning the name of the variable is convenient, though {min: 0, max: 1, step: 1, default: 0} # This variable ranges in [0, 9], steps of 1, defaulting to 0 network-model: { type: ConnectWithinDistance, parameters: [10] } _program-pools: compute-gradient: \u0026gradient - { time-distribution: 1, program: \"advanced:converge\" } - program: send move: \u0026move - time-distribution: { type: ExponentialTime, parameters: [1] } type: Event actions: { type: MoveToTarget, parameters: [destination, 1] } deployments: { type: Circle, parameters: [50, 0, 0, 5], programs: [*gradient, *move] } terminate: { type: AfterTime, parameters: [20] } Click to show / hide code variables: testVar: \u0026testVar min: 0 max: 10 step: 1 default: 2 incarnation: protelis seeds: scenario: 1 simulation: *testVar _molecules: testref: \u0026testRef test network-model: type: ConnectWithinDistance parameters: [1.5] environment: type: Continuous2DEnvironment _pool: \u0026program - time-distribution: *testVar program: test - time-distribution: null program: send - time-distribution: 1 type: Event conditions: [] actions: - type: BrownianMove parameters: [1] - time-distribution: type: Trigger parameters: [1] type: Event conditions: [] actions: - type: BrownianMove parameters: [1] _contents: - source: \u0026content in: type: Rectangle parameters: [-0.2, -0.2, 2.4, 2.4] molecule: source concentration: true - test: \u0026test molecule: *testRef concentration: *testVar deployments: - type: Circle parameters: [100, 0, 0, 2.8] contents: - *content - *test programs: - *program terminate: - type: StepCount parameters: 2000 Click to show / hide code incarnation: protelis variables: time: \u0026time type: Flag parameters: [false] small: \u0026small type: Flag parameters: [false] n: \u0026n formula: 100 range: \u0026range formula: 30 width: \u0026w formula: 200 height: \u0026h formula: 20 freq: \u0026freq formula: 1 sp: formula: 0.1 bp: formula: 0.5 retain: \u0026retain formula: 1 / minfreq fc: formula: \"time ? (small ? sp : bp) : 0\" minfreq: \u0026minfreq formula: \"freq * (1 - fc)\" maxfreq: \u0026maxfreq formula: \"freq * (1 + fc)\" speed: \u0026speed language: kotlin formula: \"if (time as Boolean) 0 else 1\" seed: \u0026seed min: 0 max: 199 step: 1 default: 0 seeds: scenario: *seed simulation: *seed network-model: type: ConnectWithinDistance parameters: [*range] _pools: - pool: \u0026program - time-distribution: type: RandomDiracComb parameters: [*minfreq, *maxfreq] type: Event actions: - type: RunProtelisProgram parameters: [\"1\", *retain] - time-distribution: null program: send - pool: \u0026program2 - time-distribution: 1 program: tomacs - time-distribution: null program: send - pool: \u0026move - time-distribution: 10 type: Event actions: - type: MoveToTarget parameters: [target, *speed] deployments: - type: Rectangle parameters: [*n, 0, 0, *w, *h] contents: - molecule: time concentration: *time - molecule: speed concentration: *speed - molecule: small concentration: *small programs: - *program - *move Click to show / hide code incarnation: sapere variables: category: subcategory: - anothercategory: - three: \u0026three formula: 3 _formula: \u0026formula type: JSR223Variable parameters: [groovy, *three] *three: \u0026max \u003c\u003c: *formula min: \u0026min formula: three * 0 language: kotlin myvar: \u0026myvar type: LinearVariable parameters: [0, *min, *max, 1] mydepvar: formula: 10 / myvar Click to show / hide code incarnation: sapere variables: rate: \u0026rate type: GeometricVariable parameters: [1, 0.1, 10, 9] size: \u0026size min: 1 max: 10 step: 1 default: 5 mSize: \u0026mSize formula: -size sourceStart: \u0026sourceStart formula: mSize / 10 sourceSize: \u0026sourceSize formula: size / 5 network-model: type: ConnectWithinDistance parameters: [0.5] _send: \u0026grad - time-distribution: *rate program: \"{token, N, L} --\u003e {token, N, L} *{token, N+#D, L add [#NODE;]}\" - program: \u003e {token, N, L}{token, def: N2\u003e=N, L2} --\u003e {token, N, L} # Age information - time-distribution: type: DiracComb parameters: [0.1] program: \u003e {token, def: N\u003e0, L} --\u003e {token, N + 1, L} # Cleanup old information - program: \u003e {token, def: N\u003e30, L} --\u003e _move: \u0026move time-distribution: 0.5 type: Event actions: - type: BrownianMove parameters: [0.1] deployments: type: Grid parameters: [*mSize, *mSize, *size, *size, 0.25, 0.25, 0.1, 0.1] contents: in: type: Rectangle parameters: [*sourceStart, *sourceStart, *sourceSize, *sourceSize] molecule: token, 0, [] programs: - *grad - *move Click to show / hide code incarnation: sapere network-model: type: ConnectWithinDistance parameters: [0.4] variables: seed: \u0026seed min: 0 max: 9 step: 1 default: 0 speed: \u0026speed type: ArbitraryVariable parameters: [0.1, [0.1, 0.1, 1]] latencies: formula: \"[0.001, 0.01, 0.1, 1]\" tolerances: formula: \"[0, 0.01, 0.03, 0.1, 0.3, 1, 3]\" controlParameters: \u0026control formula: GroovyCollections.combinations(latencies, tolerances) + [[Double.NaN, Double.NaN]] algorithm: type: ArbitraryVariable parameters: [[0.1, 0.01], *control] network_mean_latency: \u0026network_mean_latency formula: algorithm[0] tolerance: \u0026tolerance formula: algorithm[1] Geometric variables A variable generating geometrically-distributed samples across a range. Ideal for exploring non-linear phenomena, or for exploring very large ranges of values whose effect is unknown. Implemented as GeometricVariable.\nExamples Click to show / hide code incarnation: sapere variables: var0: type: GeometricVariable parameters: [0.5, 1, 1, 1] Click to show / hide code incarnation: protelis variables: zoom: \u0026zoom formula: 0.1 # Must be a valid Groovy snippet image_name: { formula: \"'chiaravalle.png'\" } image_path: \u0026image_path language: kotlin # Pick whatever JSR223 language you like and add it to the classpath formula: | # The following is pure Kotlin code. Other variables can be referenced! import java.io.File fun File.findImage(): String? = walkTopDown().find { image_name in it.name }?.absolutePath fun File.findImageRecursively(): String = findImage() ?: File(this, \"..\").findImageRecursively() File(\".\").findImageRecursively() timeout: 5000 # Linear free variable walking_speed: \u0026walk-speed { default: 1.4, min: 1, max: 2, step: 0.1 } seed: \u0026seed { default: 0, min: 0, max: 99, step: 1 } # 100 samples scenario_seed: \u0026scenario_seed { formula: (seed + 31) * seed } # Variable-dependent people_count: \u0026people_count type: GeometricVariable # A variable scanning a space with geometric segmentation parameters: [300, 50, 500, 9] # default 300, minimum 50, maximum 100, 9 samples seeds: { simulation: *seed, scenario: *scenario_seed} export: type: CSVExporter parameters: fileNameRoot: \"snippet-variables-export\" data: - time - molecule: \"default_module:default_program\" aggregators: [ mean, max, min, variance, median ] # From Apache's UnivariateStatistic value-filter: onlyfinite # discards NaN and Infinity environment: { type: ImageEnvironment, parameters: [*image_path, *zoom] } network-model: { type: ObstaclesBreakConnection, parameters: [50] } deployments: type: Rectangle parameters: [*people_count, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send - { type: Event, time-distribution: 1, actions: { type: LevyWalk, parameters: [*walk-speed] } } Click to show / hide code incarnation: sapere variables: rate: \u0026rate type: GeometricVariable parameters: [2, 0.1, 10, 9] size: \u0026size type: LinearVariable parameters: [5, 1, 10, 1] mSize: \u0026mSize formula: -size sourceStart: \u0026sourceStart formula: mSize / 10 sourceSize: \u0026sourceSize formula: size / 5 network-model: type: ConnectWithinDistance parameters: [0.5] _send: \u0026grad - time-distribution: *rate program: \"{token, N, L} --\u003e {token, N, L} *{token, N+#D, L add [#NODE;]}\" - program: \u003e {token, N, L}{token, def: N2\u003e=N, L2} --\u003e {token, N, L} deployments: type: Grid parameters: [*mSize, *mSize, *size, *size, 0.25, 0.25, 0.1, 0.1] contents: type: Rectangle parameters: [*sourceStart, *sourceStart, *sourceSize, *sourceSize] molecule: token, 0, [] programs: *grad Click to show / hide code incarnation: sapere variables: rate: \u0026rate type: GeometricVariable parameters: [1, 0.1, 10, 9] size: \u0026size min: 1 max: 10 step: 1 default: 5 mSize: \u0026mSize formula: -size sourceStart: \u0026sourceStart formula: mSize / 10 sourceSize: \u0026sourceSize formula: size / 5 network-model: type: ConnectWithinDistance parameters: [0.5] _send: \u0026grad - time-distribution: *rate program: \"{token, N, L} --\u003e {token, N, L} *{token, N+#D, L add [#NODE;]}\" - program: \u003e {token, N, L}{token, def: N2\u003e=N, L2} --\u003e {token, N, L} # Age information - time-distribution: type: DiracComb parameters: [0.1] program: \u003e {token, def: N\u003e0, L} --\u003e {token, N + 1, L} # Cleanup old information - program: \u003e {token, def: N\u003e30, L} --\u003e _move: \u0026move time-distribution: 0.5 type: Event actions: - type: BrownianMove parameters: [0.1] deployments: type: Grid parameters: [*mSize, *mSize, *size, *size, 0.25, 0.25, 0.1, 0.1] contents: in: type: Rectangle parameters: [*sourceStart, *sourceStart, *sourceSize, *sourceSize] molecule: token, 0, [] programs: - *grad - *move Arbitrary-valued variables Generates an ArbitraryVariable spanning on an arbitrary set of values.\nExamples Click to show / hide code incarnation: protelis variables: foo: \u0026foo formula: 1 bar: \u0026bar formula: 5 * foo baz: type: ArbitraryVariable parameters: [0, [1, 2, 3, 4, 5]] fiz: type: ArbitraryVariable parameters: [0, [1, 2, 3, 4, 5]] Click to show / hide code incarnation: sapere network-model: type: ConnectWithinDistance parameters: [0.4] variables: seed: \u0026seed min: 0 max: 9 step: 1 default: 0 speed: \u0026speed type: ArbitraryVariable parameters: [0.1, [0.1, 0.1, 1]] latencies: formula: \"[0.001, 0.01, 0.1, 1]\" tolerances: formula: \"[0, 0.01, 0.03, 0.1, 0.3, 1, 3]\" controlParameters: \u0026control formula: GroovyCollections.combinations(latencies, tolerances) + [[Double.NaN, Double.NaN]] algorithm: type: ArbitraryVariable parameters: [[0.1, 0.01], *control] network_mean_latency: \u0026network_mean_latency formula: algorithm[0] tolerance: \u0026tolerance formula: algorithm[1] Dependent variables Some variables are combination of other variables. Let’s suppose that we want to deploy on a circle, but for some reason (e.g. because it is required by the constructor of some Action) we need to compute and have available radius and perimeter. We don’t need to control both of them: the perimeter can be computed from the radius (or vice versa).\nTo favor reusability and apply the DRY principle, the simulator allows defining variables whose values possibly depend on values of other variables through JSR223Variable. Their values can be expressed, by default, in Groovy, but any JSR-223-compatible language can be used, in principle. If a compatible JSR-223 implementation of the language is available in the classpath, Alchemist will load and use it transparently. By default, groovy, kotlin (or kts), and scala are available as scripting languages for dependent variables.\nInfo The JSR-223 specification defines mechanisms allowing scripting language programs to access information developed in the Java Platform.\nMany languages (including Groovy, Python (Jython), Kotlin, and Scala provide bindings for JSR-223).\nVariables can be defined in any order. Alchemist figures out the dependencies automatically, as far as there are no cyclic dependencies (e.g. variable a requires b, and b requires a). Please note that the simulator variable dependency resolution system is not designed to solve mathematical systems, so even though the problem has a well-formed mathematical solution, the actual variable resolution may fail; e.g. if a is defined as 2 * b + 1, and b is defined as 4 - a, the system won’t bind a to 3 and b to 1, but will simply fail complaining about circular dependencies.\nMultiline programs Sometimes data manipulation can get tricky and trivial scripting may no longer be enough. In such cases, and especially with modern languages that allow for a reduced usage of cerimonial semicolons (such as Kotlin and Scala), it can be useful to write multiline programs. This can be achieved in YAML by using the pipe | operator, as exemplified in the following snippet:\nmultiline-string: | note that the string needs to be indented. Newlines will be preserved! Examples Click to show / hide code incarnation: sapere network-model: type: ConnectWithinDistance parameters: [0.4] variables: seed: \u0026seed min: 0 max: 9 step: 1 default: 0 speed: \u0026speed type: ArbitraryVariable parameters: [0.1, [0.1, 0.1, 1]] latencies: formula: \"[0.001, 0.01, 0.1, 1]\" tolerances: formula: \"[0, 0.01, 0.03, 0.1, 0.3, 1, 3]\" controlParameters: \u0026control formula: GroovyCollections.combinations(latencies, tolerances) + [[Double.NaN, Double.NaN]] algorithm: type: ArbitraryVariable parameters: [[0.1, 0.01], *control] network_mean_latency: \u0026network_mean_latency formula: algorithm[0] tolerance: \u0026tolerance formula: algorithm[1] Click to show / hide code incarnation: sapere variables: var0: formula: 2 var1: formula: 2 _program: \u0026program - time-distribution: 1 program: \"{A, 1}--\u003e{A, 1}\" deployments: type: Rectangle parameters: [10, 0, 0, 10, 10] contents: - molecule: path concentration: true - molecule: interestThr concentration: 0.2 - molecule: veryInterestThr concentration: 0.5 - molecule: estimationK concentration: 0.5 programs: - *program Click to show / hide code incarnation: sapere variables: var: \u0026var language: scala formula: List(5, 3, 4).min var2: \u0026var2 language: scala formula: List(10, 3, 4).max deployments: - type: Point parameters: [*var, *var2] Click to show / hide code variables: a: formula: 22 + 1 language: kts test: formula: | import it.unibo.alchemist.boundary.Loader import kotlin.collections.listOf val b = 5.5 listOf(bindings[\"a\"], b) language: kotlin test2: formula: | val b = 5.5 listOf(\"a\", b) language: kotlin test3: formula: test + test2 incarnation: sapere Click to show / hide code incarnation: sapere variables: myvar: \u0026myvar formula: 1 myvar2: \u0026myvar2 formula: myvar * 100 environment: type: Continuous2DEnvironment parameters: [] network-model: type: it.unibo.alchemist.test.util.DummyRule parameters: [[*myvar, *myvar2], [*myvar, *myvar2]] Click to show / hide code incarnation: sapere variables: var0: formula: 2 var1: formula: 2 Click to show / hide code incarnation: protelis variables: zoom: \u0026zoom formula: 0.1 # Must be a valid Groovy snippet image_name: { formula: \"'chiaravalle.png'\" } image_path: \u0026image_path language: kotlin # Pick whatever JSR223 language you like and add it to the classpath formula: | # The following is pure Kotlin code. Other variables can be referenced! import java.io.File fun File.findImage(): String? = walkTopDown().find { image_name in it.name }?.absolutePath fun File.findImageRecursively(): String = findImage() ?: File(this, \"..\").findImageRecursively() File(\".\").findImageRecursively() timeout: 5000 # Linear free variable walking_speed: \u0026walk-speed { default: 1.4, min: 1, max: 2, step: 0.1 } seed: \u0026seed { default: 0, min: 0, max: 99, step: 1 } # 100 samples scenario_seed: \u0026scenario_seed { formula: (seed + 31) * seed } # Variable-dependent people_count: \u0026people_count type: GeometricVariable # A variable scanning a space with geometric segmentation parameters: [300, 50, 500, 9] # default 300, minimum 50, maximum 100, 9 samples seeds: { simulation: *seed, scenario: *scenario_seed} export: type: CSVExporter parameters: fileNameRoot: \"snippet-variables-export\" data: - time - molecule: \"default_module:default_program\" aggregators: [ mean, max, min, variance, median ] # From Apache's UnivariateStatistic value-filter: onlyfinite # discards NaN and Infinity environment: { type: ImageEnvironment, parameters: [*image_path, *zoom] } network-model: { type: ObstaclesBreakConnection, parameters: [50] } deployments: type: Rectangle parameters: [*people_count, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send - { type: Event, time-distribution: 1, actions: { type: LevyWalk, parameters: [*walk-speed] } } Click to show / hide code incarnation: protelis environment: type: ContinuousPhysics2DEnvironment variables: group1: \u0026group1 formula: it.unibo.alchemist.model.cognitive.groups.GroupFactory.friends() language: kotlin group2: \u0026group2 formula: it.unibo.alchemist.model.cognitive.groups.GroupFactory.friends() language: kotlin deployments: - type: Circle parameters: [10, 0, 0, 20] properties: - type: Pedestrian - type: Perceptive2D - type: CircularArea - type: Social parameters: [*group1] - type: Circle parameters: [15, 0, 0, 20] properties: - type: Pedestrian - type: Perceptive2D - type: CircularArea - type: Social parameters: [*group2] Click to show / hide code incarnation: protelis variables: danger: \u0026danger formula: \"\\\"danger\\\"\" environment: type: ContinuousPhysics2DEnvironment layers: - type: BidimensionalGaussianLayer molecule: *danger parameters: [0.0, 0.0, 20.0, 15.0] _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [1.0] type: CognitiveBehavior actions: - type: CognitiveAgentAvoidLayer parameters: [*danger] deployments: - type: Circle parameters: [100, 0, 0, 50] properties: - type: Human parameters: [\"adult\", \"female\"] - type: Perceptive2D - type: CognitivePedestrian - type: Cognitive2D - type: CircularArea programs: - *behavior Click to show / hide code incarnation: protelis variables: initial_latitude: \u0026initial_latitude formula: 12.613 initial_longitude: \u0026initial_longitude formula: 43.715 final_latitude: formula: 12.663 final_longitude: formula: 43.738 latitude_space: \u0026latitude_space formula: final_latitude - initial_latitude longitude_space: \u0026longitude_space formula: final_longitude - initial_longitude environment: type: OSMEnvironment parameters: - maps/urbino.pbf - true - true network-model: type: ConnectIfInLineOfSigthOnMap parameters: [1000] deployments: - type: Point parameters: [43.719368, 12.623865] - type: Point parameters: [43.718901, 12.623047] - type: Rectangle parameters: - 100 - *initial_longitude - *initial_latitude - *longitude_space - *latitude_space contents: - in: type: Rectangle parameters: [-6, -6, 2, 2] molecule: source concentration: true Click to show / hide code incarnation: sapere variables: category: subcategory: - anothercategory: - three: \u0026three formula: 3 _formula: \u0026formula type: JSR223Variable parameters: [groovy, *three] *three: \u0026max \u003c\u003c: *formula min: \u0026min formula: three * 0 language: kotlin myvar: \u0026myvar type: LinearVariable parameters: [0, *min, *max, 1] mydepvar: formula: 10 / myvar Click to show / hide code incarnation: sapere variables: rate: \u0026rate type: GeometricVariable parameters: [2, 0.1, 10, 9] size: \u0026size type: LinearVariable parameters: [5, 1, 10, 1] mSize: \u0026mSize formula: -size sourceStart: \u0026sourceStart formula: mSize / 10 sourceSize: \u0026sourceSize formula: size / 5 network-model: type: ConnectWithinDistance parameters: [0.5] _send: \u0026grad - time-distribution: *rate program: \"{token, N, L} --\u003e {token, N, L} *{token, N+#D, L add [#NODE;]}\" - program: \u003e {token, N, L}{token, def: N2\u003e=N, L2} --\u003e {token, N, L} deployments: type: Grid parameters: [*mSize, *mSize, *size, *size, 0.25, 0.25, 0.1, 0.1] contents: type: Rectangle parameters: [*sourceStart, *sourceStart, *sourceSize, *sourceSize] molecule: token, 0, [] programs: *grad Click to show / hide code incarnation: sapere variables: rate: \u0026rate type: GeometricVariable parameters: [1, 0.1, 10, 9] size: \u0026size min: 1 max: 10 step: 1 default: 5 mSize: \u0026mSize formula: -size sourceStart: \u0026sourceStart formula: mSize / 10 sourceSize: \u0026sourceSize formula: size / 5 network-model: type: ConnectWithinDistance parameters: [0.5] _send: \u0026grad - time-distribution: *rate program: \"{token, N, L} --\u003e {token, N, L} *{token, N+#D, L add [#NODE;]}\" - program: \u003e {token, N, L}{token, def: N2\u003e=N, L2} --\u003e {token, N, L} # Age information - time-distribution: type: DiracComb parameters: [0.1] program: \u003e {token, def: N\u003e0, L} --\u003e {token, N + 1, L} # Cleanup old information - program: \u003e {token, def: N\u003e30, L} --\u003e _move: \u0026move time-distribution: 0.5 type: Event actions: - type: BrownianMove parameters: [0.1] deployments: type: Grid parameters: [*mSize, *mSize, *size, *size, 0.25, 0.25, 0.1, 0.1] contents: in: type: Rectangle parameters: [*sourceStart, *sourceStart, *sourceSize, *sourceSize] molecule: token, 0, [] programs: - *grad - *move Click to show / hide code incarnation: protelis variables: zoom: \u0026zoom formula: 0.1 # Must be a valid Groovy snippet image_name: { formula: \"'chiaravalle.png'\" } image_path: \u0026image_path language: kotlin # Pick whatever JSR223 language you like and add it to the classpath formula: | # The following is pure Kotlin code. Other variables can be referenced! import java.io.File fun File.findImage(): String? = walkTopDown().find { image_name in it.name }?.absolutePath fun File.findImageRecursively(): String = findImage() ?: File(this, \"..\").findImageRecursively() File(\".\").findImageRecursively() timeout: 5000 # Linear free variable walking_speed: \u0026walk-speed { default: 1.4, min: 1, max: 2, step: 0.1 } seed: \u0026seed { default: 0, min: 0, max: 99, step: 1 } # 100 samples scenario_seed: \u0026scenario_seed { formula: (seed + 31) * seed } # Variable-dependent people_count: \u0026people_count type: GeometricVariable # A variable scanning a space with geometric segmentation parameters: [300, 50, 500, 9] # default 300, minimum 50, maximum 100, 9 samples seeds: { simulation: *seed, scenario: *scenario_seed} export: type: CSVExporter parameters: fileNameRoot: \"snippet-variables-export\" data: - time - molecule: \"default_module:default_program\" aggregators: [ mean, max, min, variance, median ] # From Apache's UnivariateStatistic value-filter: onlyfinite # discards NaN and Infinity environment: { type: ImageEnvironment, parameters: [*image_path, *zoom] } network-model: { type: ObstaclesBreakConnection, parameters: [50] } deployments: type: Rectangle parameters: [*people_count, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send - { type: Event, time-distribution: 1, actions: { type: LevyWalk, parameters: [*walk-speed] } }",
    "description": "Define reusable pieces of information and compute upon them, prepare for the execution of simulation batches.",
    "tags": [
      "Variable",
      "Metric",
      "Dry",
      "Language",
      "Groovy",
      "Kotlin",
      "Scala",
      "Jsr223"
    ],
    "title": "Create reusable variables",
    "uri": "/howtos/simulation/variables/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Execution",
    "content": "T.B.D.\nDrawing navigation graphs The GUI includes a simple effect to draw the navigation graph of an ImageEnvironmentWithGraph in the gui is available as well. Its name is DrawNavigationGraph, you can just select it from the available effects in the gui to have your graph drawn.",
    "description": "Customize the look of your simulation.",
    "tags": [
      "Graphics",
      "Drawing",
      "Effects",
      "Draw"
    ],
    "title": "Customize the Swing GUI",
    "uri": "/howtos/execution/swing-effects/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Execution",
    "content": "Alchemist supports the possibility to write termination conditions for any simulation. Termination conditions are checked after every event, and, if met, cause the immediate termination of a simulation. Termination conditions are expected to be found in the {{ anchor(‘it.unibo.alchemist.model.implementations.terminators’) }} package.\nThey are defined in the terminate section of the configuration file. Multiple terminators are allowed, the first terminator matching causes the termination of the simulation (they are in and).\nTerminating the simulation after some time One of the simplest terminators availables allows for declaring a simulation completed when a certain simulated time is reached. In the following example, it is used in conjunction with a number of variables, showing how it’s possible to use such variables to produce batches of simulations terminating at different times.\nClick to show / hide code incarnation: protelis network-model: type: ConnectWithinDistance parameters: [30] deployments: - type: Rectangle parameters: [100, 62, 15, 95, 200] contents: - molecule: \"source\" concentration: true in: type: Circle parameters: [107.96487911806524, 102.49167432603535, 10] programs: - time-distribution: 1 # This is a frequency program: \u003e import protelis:coord:spreading distanceTo(self.getDeviceUID().getId() == 0) - program: send terminate: - type: AfterTime parameters: 1 Terminating the simulation if the environment is not changing A terminator is provided for terminating when a simulation is “stable” (nothing changes in terms of positions and nodes’ content). The class implementing it is StableForSteps.",
    "description": "Decide when the simulator should stop and consider the simulation concluded.",
    "tags": [
      "Termination",
      "Time"
    ],
    "title": "Define the termination criteria",
    "uri": "/howtos/execution/termination/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "Debugging a simulation requires the ability to reproduce the same behavior multiple times: an unexpected behavior requiring investigation may happen far into the simulation, or in corner conditions encountered by chance. Randomness is controlled by setting the random generator seeds separately for the deployments and the simulation execution, allowing for running different simulations on the same random deployment.\nAlchemist simulations can be reproduced by feeding them the same random number generator. This assumption is true as far as the custom component in use:\ndo not use any other random generators but the one provided by the simulation framework (all the standard components are guaranteed to do so); do not iterate over collections with no predicible iteration order (e.g., Java’s Set and Map) containing elements (or keys) whose hashCode() has not been overridden to return the same value regardless of the specific JVM in use; do not run operations in parallel. The seeds section control the random generation process and may contain two optional values: scenario and simulation. The former is the seed of the pseudo-random generator used during the creation of the simulation, e.g. for deploying nodes in random arrangements. The latter is the seed of the pseudo-random generator used during the simulation, e.g. for computing time distributions or generating random positions. A typical example in which one may want to have different values, is to keep the same random deployment of devices in some scenario but allow events to happen with different timings.\nClick to show / hide code incarnation: protelis environment: type: ContinuousPhysics2DEnvironment seeds: scenario: 0 simulation: 1 deployments: - type: Circle parameters: [100, 0, 0, 20] properties: - type: Pedestrian - type: Social - type: Perceptive2D - type: CircularArea Usually, in batches, you wan to run multiple runs per experiment, varying the simulation seed, in order to get more reliable data (and appropriate error bars). As per any other value, variables can be feeded as random generator seeds.",
    "description": "Control randomness, ensuring reproducibility and replicability of experiments.",
    "tags": [
      "Randomness",
      "Reproducibility",
      "Replicability",
      "Seed",
      "Random"
    ],
    "title": "Ensure repeatability",
    "uri": "/howtos/simulation/repeatability/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Execution",
    "content": "Once you have your simulation project configured as you want, you need to:\nAdd dependency on the multivesta jar implementation(files(\"libs/multivesta.jar\")). You can require the jar by going to MultiVesta’s repository Include the following dependency in build.gradle.kts implementation(\"it.unibo.alchemist:alchemist-multivesta-adapter\") Copy the AlchemistSimState class from current repo (you can reach it in following location alchemist-multivesta-adapter/dist/AlchemistSimState.kt) and paste it in the package you prefer Set the main class as follows mainClass.set(\"it.unibo.alchemist.multivesta.adapter.AlchemistMultiVesta\"), inside the JavaExec Gradle task When you configure Alchemist arguments with Gradle args method, add another args call after traditional Alchemist arguments and pass all MultiVeStA arguments in a single string with key \"-mv\", e.g. args(\"-mv\", \"-c -sots 1 -bs 30 -a 0.05 -ds [0.1] -l 12 com.example.AlchemistSimState -f myquery.multiquatex\").\nImportant: MultiVeStA arguments must include the fully qualified name of the class you have copied on point 3 (in the example it is -com.example.AlchemistSimState) and the desired multiquatex file (in the example it is -f myquery.multiquatex) Add MultiVestaExporter to your Alchemist configuration file, specifying the desired Extractor type: it will supply all available properties to MultiVeStA If you prefer avoiding to add the exporter in Alchemist configuration file, you can add the Alchemist argument -e ExporterClass, that will use such exporter to supply the desired observation to MultiVeStA.\nYou are now ready to start your simulation as usually with Gradle JavaExec task!",
    "description": "How to integrate MultiVesta in Alchemist",
    "tags": [
      "Multivesta",
      "Execution",
      "Analysis"
    ],
    "title": "MultiVeStA",
    "uri": "/howtos/execution/multivesta/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Execution",
    "content": "In some cases you may need to test the same simulation configuration with different parameters. Suppose for example that you want to see what happens when you place a bunch of pedestrian in a circle (for sake of semplicity we’ll ignore their behavior). You may want to observe the scenario with 50 pedestrians placed in a 5 meters radius circle. Then you may like to observe it with 100 pedestrian and perhaps by changing the circle radius also. Instead of re-writing the configuration file over-and-over for each parameter combination, Alchemist offers the possibility to write the configuration once, and it will then derive a batch of simulations.the same configuration\nLaunching batch simulations To exploit this mechanism, you must declare the “parameters” as variables. In our example, they would be the number of pedestrian and the radius of the circle where to place them. Let’s write the configuration file, specifing that we want to test the simulation with 10, 30, 50, 70, 90 pedestrians and a 5, 10, 15 meters circle radius:\nClick to show / hide code incarnation: protelis environment: type: ContinuousPhysics2DEnvironment variables: pedestrianNumber: \u0026pedestrianNumber type: LinearVariable parameters: [10, 10, 100, 10] circleRadius: \u0026cicleRadius type: LinearVariable parameters: [5, 5, 15, 5] deployments: - type: Circle parameters: [*pedestrianNumber, 0, 0, *cicleRadius] properties: - type: Human parameters: [\"adult\", \"male\"] - type: Perceptive2D - type: CognitivePedestrian - type: Cognitive2D - type: CircularArea programs: - time-distribution: type: DiracComb parameters: [ 1.0 ] type: BlendedSteering export: - type: CSVExporter parameters: fileNameRoot: \"time_export\" interval: 1.5 data: - time terminate: - type: StableForSteps parameters: [30, 25] Info To understand how variables work refer to this page. You may also want to learn how to export data and specifying termination criteria.\nNow we can launch the batch of simulations by providing the simulator the following command-line arguments:\n-b: enable batch mode -var pedestrianNumber: all values of variable pedestrianNumber will be tested -var circleRadius: all values of variable circleRadius will be tested Under the hood, the simulator will compute the cartesian product of the all possible values of the variables selected with the -var option. Variables not selected for the batch will have their default value.",
    "description": "Execute multiple instances of a simulation with different parameters",
    "tags": [
      "Batch",
      "Variables",
      "Dry"
    ],
    "title": "Parameter Sweeping with simulation batches",
    "uri": "/howtos/execution/batch/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides",
    "content": "Set up the simulation environment Preparation Contents Alchemist stand-aloneThe recommended way to run the simulator and fetch all the required modules.\nAlchemist via GradleThe recommended way to run the simulator and fetch all the required modules.",
    "description": "Preliminary operations for using Alchemist: installation, setup",
    "tags": [],
    "title": "Preparation",
    "uri": "/howtos/preparation/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tutorials",
    "content": "You need:\nA terminal, bash compatible preferred Java 11+ installed and working Java can be downloaded from https://adoptium.net/ Git installed and working Git can be downloaded from https://git-scm.com Open the terminal and follow these steps\ngit clone https://github.com/AlchemistSimulator/alchemist-primer cd alchemist-primer Launch depending on your terminal: Bash compatible (Linux, MacOS X, Git Bash, Cygwin): ./gradlew runAll Windows native (cmd.exe, Powershell): gradlew.bat runAll Wait for the simulator components to be downloaded (about five minutes on a reasonable connection) A GUI pops up Press the P button to start the simulation. Other relevant buttons are described here Something went wrong along the line? Open an issue and we’ll get back to you.\nYou are now ready to proceed with our tutorials!\nInfo If you want to understand right now what is happening under the hood, consider learning instead about the Alchemist meta-model",
    "description": "A super-fast way to get an instance of the simulator up and running.",
    "tags": [
      "Quickstart",
      "Installation",
      "Execution"
    ],
    "title": "Quickstart",
    "uri": "/tutorials/quickstart/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Explanation",
    "content": "The first step to take in order to use the simulator, is to answer the question\nwhat does Alchemist simulate?\nA broad introduction is provided in form of introductory video from the DAIS 2021 conference tutorial.\nThe model The world of Alchemist is composed of the following entities:\nMolecule The name of a data item If Alchemist were an imperative programming language, a molecule would be the concept of variable name Concentration The value associated to a particular molecule If Alchemist were an imperative programming language, a concentration would be the concept of value associated to a variable Node A container of molecules and reactions, living inside an environment Environment The Alchemist abstration for the space. It is a container for nodes, and it is able to tell: Where the nodes are in the space - i.e. their position The distance between two nodes Optionally, support for moving nodes Linking rule A function of the current status of the environment that associates to each node a neighborhood Neighborhood An entity composed by a node (centre) and a set of nodes (neighbors) Reaction Any event that can change the status of the {{ anchor(’environment’, ‘Environment’) }} Each node has a possibly empty set of reactions Each reaction is defined by a possibly empty list of conditions, one or more actions and a {{ anchor(’time distribution’, ‘TimeDistribution’) }} The frequency at which it happens depends on: A static “rate” parameter The value of each condition A “rate equation”, that combines the static rate and the value of conditions, giving back an “instantaneous rate” A time distribution Condition A function that takes the current environment as input and outputs a boolean and a number If the condition does not hold (i.e. its current output is false), the reaction to which it is associated cannot run The outputed number may or may not influence the reaction speed (i.e. the average number of times the reaction “happens” per time unit), depending on the reaction and its time distribution. Action Models a change in the environment. The following image is a visualization of such model:\nThe behavior of the system is described in terms of reactions. As such, here’s a pictorial representation of a reaction:\nIncarnations As you can see, names are given after classical chemistry terms. This is mostly for historical reasons: Alchemist has been initially conceived as a chemical-oriented multi-compartment stochastic simulation engine, able to support compartment (node) mobility while still retaining high performance.\nHowever, Alchemist is not limited to that. The key of its extensibility is in the very loose interpretation of molecule and concentration. These two terms have a very precise definition in chemistry, but in Alchemist they are respectively\na generic identifier, and a piece of data of some type An incarnation of Alchemist includes a type definition of concentration, and possibly a set of specific conditions, actions and (rarely) environments and reactions that operate on such types. In other words, an incarnation is a concrete instance of the Alchemist meta-model. In addition, a proper Alchemist incarnation’, ‘Incarnation must also define:\nMeans for translating strings into named entities (molecules) Means for obtaining a number when given a node, a molecule and a string representing a property Means for building incarnation-specific model entities given an appropriate context and a parameter String These functionalities are required in order to support a uniform access to different incarnations.\nDifferent Incarnations can model completely different universes. For instance, if the concentration is defined as a positive integer and proper actions and conditions are provided, Alchemist becomes a stochastic simulator for chemistry featuring interconnected and mobile compartments.\nThe standalone distribution comes with:\nProtelis Incarnation SAPERE Incarnation Biochemistry Incarnation Scafi incarnation",
    "description": "What does Alchemist simulate? A trip on the abstractions that populate the world of Alchemist.",
    "tags": [
      "Model",
      "Metamodel",
      "Understand",
      "Molecule",
      "Concentration",
      "Node",
      "Environment",
      "Linking Rule",
      "Neighborhood",
      "Reaction",
      "Condition",
      "Action"
    ],
    "title": "The Alchemist Meta-Model",
    "uri": "/explanation/metamodel/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Reference",
    "content": "Warning This reference guide assumes that the reader knows the basics of YAML. A good resource to learn it quickly is Learn X in Y minutes where X = YAML\nReading this document The key words MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, and OPTIONAL in this document are to be interpreted as described in RFC 2119.\nSimulation document structure The document MUST be YAML map. The map MUST contain all the mandatory Alchemist keys, MAY contain any subset of the optional Alchemist keys, MAY contain any key whose name begins with underscore (_), and MUST NOT contain any other key.\nThe sets of valid cobinations of mandatory and optional keys for each section of the document is specified in form of Kotlin code as follows:\nClick to show / hide code /* * Copyright (C) 2010-2023, Danilo Pianini and contributors * listed, for each module, in the respective subproject's build.gradle.kts file. * * This file is part of Alchemist, and is distributed under the terms of the * GNU General Public License, with a linking exception, * as described in the file LICENSE in the Alchemist distribution's top directory. */ package it.unibo.alchemist.boundary.loader.syntax import kotlin.reflect.KProperty internal object DocumentRoot : SyntaxElement { object JavaType : SyntaxElement { val type by OwnName val parameters by OwnName override val validDescriptors = setOf( validDescriptor { mandatory(type) optional(parameters) }, ) } object DependentVariable : SyntaxElement { val language by OwnName val formula by OwnName val timeout by OwnName override val validDescriptors = JavaType.validDescriptors + setOf( validDescriptor { mandatory(formula) optional(language) optional(timeout) }, ) } object Deployment : SyntaxElement { val contents by OwnName val nodes by OwnName val properties by OwnName val programs by OwnName override val validDescriptors = setOf( validDescriptor { mandatory(JavaType.type) optional(JavaType.parameters, contents, properties, nodes, programs) forbidden(Filter.FILTER) }, ) /* * in: * - type: FilterType * parameters: [...] */ object Filter : SyntaxElement { const val FILTER = \"in\" override val validDescriptors = setOf( validDescriptor { mandatory(JavaType.type) optional(JavaType.parameters) }, ) } object Property : SyntaxElement { override val validDescriptors = setOf( validDescriptor { mandatory(JavaType.type) optional(JavaType.parameters, Filter.FILTER) }, ) } object Contents : SyntaxElement { val molecule by OwnName val concentration by OwnName override val validDescriptors = setOf( validDescriptor { mandatory(molecule, concentration) optional(Filter.FILTER) }, ) } object Program : SyntaxElement { val program by OwnName val actions by OwnName val conditions by OwnName const val TIME_DISTRIBUTION = \"time-distribution\" override val validDescriptors = setOf( validDescriptor { mandatory(JavaType.type) optional(JavaType.parameters, Filter.FILTER, conditions, TIME_DISTRIBUTION, actions) }, validDescriptor { mandatory(program) optional(TIME_DISTRIBUTION, Filter.FILTER) }, ) } } object Export : SyntaxElement { val data by OwnName override val validDescriptors = setOf( validDescriptor { mandatory(JavaType.type, JavaType.parameters, data) }, ) object Data : SyntaxElement { val time by OwnName val molecule by OwnName val property by OwnName val aggregators by OwnName val precision by OwnName const val VALUE_FILTER = \"value-filter\" override val validDescriptors = JavaType.validDescriptors + setOf( validDescriptor { mandatory(time) optional(precision) }, validDescriptor { mandatory(molecule) optional(property, aggregators, precision, VALUE_FILTER) }, ) } } object Environment : SyntaxElement { const val GLOBAL_PROGRAMS = \"global-programs\" object GlobalProgram : SyntaxElement { val actions by OwnName val conditions by OwnName const val TIME_DISTRIBUTION = \"time-distribution\" override val validDescriptors = setOf( validDescriptor { mandatory(JavaType.type) optional(JavaType.parameters, actions, conditions, TIME_DISTRIBUTION) }, ) override fun toString(): String = this::class.simpleName ?: this.javaClass.canonicalName } override val validDescriptors = setOf( validDescriptor { optional(JavaType.parameters, GLOBAL_PROGRAMS) }, ) } object Layer : SyntaxElement { val molecule by OwnName override val validDescriptors = setOf( validDescriptor { mandatory(JavaType.type, molecule) optional(JavaType.parameters) }, ) } object Monitor : SyntaxElement { override val validDescriptors = setOf( validDescriptor { mandatory(JavaType.type) optional(JavaType.parameters) }, ) } object Seeds : SyntaxElement { val scenario by OwnName val simulation by OwnName override val validDescriptors = setOf( validDescriptor { optional(simulation, scenario) }, ) } object Variable : SyntaxElement { val min by OwnName val max by OwnName val default by OwnName val step by OwnName override val validDescriptors = JavaType.validDescriptors + setOf( validDescriptor { mandatory(min, max, default, step) }, ) } val deployments by OwnName val engine by OwnName val environment by OwnName val export by OwnName val incarnation by OwnName val launcher by OwnName val layers by OwnName val monitors by OwnName const val LINKING_RULES = \"network-model\" const val REMOTE_DEPENDENCIES = \"remote-dependencies\" val seeds by OwnName val terminate by OwnName val variables by OwnName override val validDescriptors = setOf( validDescriptor { mandatory(incarnation) optional(*validKeys.toTypedArray()) }, ) } internal object OwnName { operator fun getValue( thisRef: Any?, property: KProperty\u003c*\u003e, ): String = property.name.lowercase() } private fun validDescriptor(configuration: DescriptorBuilder.() -\u003e Unit): SyntaxElement.ValidDescriptor = DescriptorBuilder().apply(configuration).build() Types of entries Type Description Any Any YAML type Int YAML integer number, or other type that can be parsed into an integer List Any YAML List Map Any YAML Map MultiSpec A list of Spec. A Map matches a MultiSpec if it matches one and only one of its Spec. Number YAML number Spec Pair of lists of strings. The first list contains mandatory keys, the second optional keys. A map matches a Spec if it contains all its mandatory keys, any of the optional keys, and no other key SpecMap A YAML Map matching a MultiSpec String YAML String Traversable One of: A SpecMap, a List of Traversable, a Map of Traversable Arbitrary class loading system Type: SpecMap\nAlchemist is able to load arbitrary types conforming to the expected interface (or Scala trait). The expected type depends on where the class is requested. This section describes how the system works independently of the specific target type.\n(Multi)Spec\nMandatory keys Optional keys type parameters type Type: String\nThe name of an instanceable class compatible with the expected interface. It can be either the qualified name or a simple name, in the latter case the class SHOULD be located in the same package where the default alchemist implementations of the same interface live.\nIf a name includes a ., it is interpreted as a fully qualified name. Otherwise, it is interpreted as a simple name. Provided types SHOULD NOT be located in the default package.\nFor instance, if the expected type is an Action and the concrete type FooAction, FooAction SHOULD be located into package it.unibo.alchemist.model.actions.\nparameters Type: List or Map\nThe list of parameters the constructor of type should be passed. Alchemist automatically provides contextual information to the constructors: for instance, if an Action is being built, the loading system is aware of the current RandomGenerator, Incarnation, Environment, Deployment, Node, TimeDistribution, and Reaction, as the action requires all of them. Consequently, all parameters of these types SHOULD NOT be manually specified (on the other hand, the syntax is built to make it very difficult to do by mistake). The constructor MAY fail if they are provided.\nIf a Map is provided instead of a List, then the keys are interpred as the parameter names, and their associated values as the corresponding parameter values. Since Java 11 does not support named arguments, this special invocation type is built around the Kotlin reflection, thus, the concrete class whose constructor is being invoked MUST be written in Kotlin.\nWhen using named arguments, if at least one optional parameter is specified, then all the previous optional parameters MUST be specified as well. This limitation is due to the fact that Alchemist supports loading of JVM classes regardless of their origin language, and, thus, the simulator must leverage constructor overloading to emulate optional parameters. In the case of Kotlin classes, because of the way @JvmOverloads works, only a (reasonable) subset of all possible overloads gets generated, and they differ by parameter count.\nInstantiation is delegated to the Java Implicit Reflective Factory.\nExamples Construction of a Point Click to show / hide code incarnation: protelis deployments: type: Point parameters: [0, 0] Construction of variables with named parameters Click to show / hide code incarnation: sapere network-model: { type: ConnectWithinDistance, parameters: [0.5] } deployments: type: GraphStreamDeployment parameters: nodeCount: 1000 offsetX: -10 offsetY: 10 zoom: 100 layoutQuality: 0.2 generatorName: Lobster createLinks: true parameters: [5, 15] Counter-examples The following simulation fails on loading, as BidimensionalGaussianLayer has the first and last parameters marked as optional: in order to provide the latter, the designer must also provide the former. Click to show / hide code incarnation: protelis network-model: type: ConnectWithinDistance parameters: [6] deployments: type: Rectangle parameters: [1, 0, 0, 100, 100] contents: molecule: grain concentration: 5 layers: - molecule: layer type: BidimensionalGaussianLayer parameters: centerX: 30 centerY: 30 norm: 30 sigmaX: 15 Document root Type: SpecMap\nThe document contents at the root of the file. Contains all the information required to buld a Loader, which, in turn, is able to spawn Simulations through a Launcher.\n(Multi)Spec\nMandatory keys Optional keys incarnation deployments, environment, export, layers, launcher, network-model, remote-dependencies, seeds, terminate, variables Examples Minimal Biochemistry specification Click to show / hide code incarnation: biochemistry Minimal Protelis specification Click to show / hide code incarnation: protelis Minimal SAPERE specification Click to show / hide code incarnation: sapere incarnation Type: String\nValid incarnation types in the full distribution:\nbiochemistry protelis sapere scafi Examples Minimal Biochemistry specification Click to show / hide code incarnation: biochemistry Minimal Protelis specification Click to show / hide code incarnation: protelis Minimal SAPERE specification Click to show / hide code incarnation: sapere action Builds an Action using the arbitrary class loading system.\ncondition Builds a Condition using the arbitrary class loading system.\ndeployments Type: Traversable\nTraversable of deployment\ndeployment Type: SpecMap\nDefinition of the positions of a set of nodes. Builds a Deployment using the same syntax of arbitrary class loading system, with additional keys.\n(Multi)Spec\nMandatory keys Optional keys type parameters, contents, nodes, programs Examples Deployment of a single node in a point Click to show / hide code incarnation: protelis deployments: type: Point parameters: [0, 0] Deployment of three nodes Click to show / hide code incarnation: sapere # The incarnation is always mandatory network-model: type: ConnectWithinDistance # Loads a class with this name implementing LinkingRule parameters: [2] # Connection radius (parameter of a ConnectWithinDistance's constructor) deployments: - type: Point # Loads a class with this name implementing Deployment parameters: [0, 0] # Coordinates - { type: Point, parameters: [0.5, 0.85] } - { type: Point, parameters: [-0.5, 0.85] } Deployment of three nodes, but nesting the traversable Click to show / hide code incarnation: protelis deployments: the_bottom_point: type: Point parameters: [0, 0] the_top_points: - type: Point parameters: [0.5, 0.85] - type: Point parameters: [-0.5, 0.85] Deployment of three nodes through SpecificPositions. Click to show / hide code incarnation: sapere deployments: type: SpecificPositions parameters: [[0,1],[2,2],[3,4]] Grid centered in (0, 0), with nodes distanced of 0.25 both horizontally and vertically. Click to show / hide code incarnation: sapere deployments: type: Grid parameters: [-5, -5, 5, 5, 0.25, 0.25] Irregular Grid centered in (0, 0), with nodes distanced of 0.25 both horizontally and vertically, randomly perturbed of (±0.1 distance units). Click to show / hide code incarnation: sapere deployments: type: Grid parameters: [-5, -5, 5, 5, 0.25, 0.25, 0.1, 0.1] Nodes located randomly inside a Circle Click to show / hide code incarnation: sapere deployments: type: Circle parameters: [1000, 0, 0, 10] Nodes located randomly inside a Rectangle Click to show / hide code incarnation: sapere deployments: type: Rectangle parameters: [1000, 0, 0, 10, 20] Nodes located randomly inside a Polygon delimiting the Venice Lagoon Click to show / hide code incarnation: sapere environment: { type: OSMEnvironment } network-model: { type: ConnectWithinDistance, parameters: [1000] } _venice_lagoon: \u0026lagoon [[45.2038121, 12.2504425], [45.2207426, 12.2641754], [45.2381516, 12.2806549], [45.2570053, 12.2895813], [45.276336, 12.2957611], [45.3029049, 12.2991943], [45.3212544, 12.3046875], [45.331875, 12.3040009], [45.3453893, 12.3040009], [45.3502151, 12.3156738], [45.3622776, 12.3232269], [45.3719259, 12.3300934], [45.3830193, 12.3348999], [45.395557, 12.3445129], [45.3998964, 12.3300934], [45.4018249, 12.3136139], [45.4105023, 12.3122406], [45.4167685, 12.311554], [45.4278531, 12.3012543], [45.4408627, 12.2902679], [45.4355628, 12.2772217], [45.4206242, 12.2703552], [45.3994143, 12.2744751], [45.3738553, 12.2676086], [45.3579354, 12.2614288], [45.3429763, 12.2497559], [45.3198059, 12.2408295], [45.2975921, 12.2346497], [45.2802014, 12.2408295], [45.257972, 12.233963], [45.2038121, 12.2504425]] deployments: type: Polygon parameters: [500, *lagoon] programs: - time-distribution: 10 type: Event actions: { type: BrownianMove, parameters: [0.0005]} deployment.type Same as type\ndeployment.parameters Same as parameters\ndeployment.contents Type: Traversable of content\ndeployment.nodes Type: SpecMap\nForces the type of Node, building concrete types through the arbitrary class loading system. If left unspecified, nodes get created through Incarnation.createNode.\nExamples Creation of heterogeneous pedestrians Click to show / hide code incarnation: protelis environment: type: ContinuousPhysics2DEnvironment seeds: scenario: 0 simulation: 1 deployments: - type: Circle parameters: [50, 0, 0, 20] properties: - type: Human parameters: [\"elderly\", \"female\"] - type: HeterogeneousPedestrian - type: Perceptive2D - type: CircularArea - type: Social - type: Circle parameters: [50, 0, 0, 20] properties: - type: Human parameters: [\"child\", \"male\"] - type: HeterogeneousPedestrian - type: Perceptive2D - type: CircularArea - type: Social deployment.properties Type: Traversable of property\ndeployment.programs Type: Traversable of program\ncontent Type: SpecMap\nDefinition of the contents (Molecules and Concentrations) of a group of nodes.\n(Multi)Spec\nMandatory keys Optional keys molecule, concentration in Examples Three molecules injected into all nodes deployed in the scenario Click to show / hide code incarnation: protelis network-model: type: ConnectWithinDistance parameters: [7] _gradient: \u0026gradient - time-distribution: 1 type: Event actions: - type: RunProtelisProgram parameters: [distanceTo, 1.01] - program: send deployments: - type: Point parameters: [0,0] contents: - molecule: source concentration: false - molecule: enabled concentration: true - molecule: data concentration: 1 / 0 programs: *gradient terminate: type: StepCount parameters: 5000 Injection of a molecule only in those nodes located inside a Rectangle Click to show / hide code incarnation: sapere network-model: { type: ConnectWithinDistance, parameters: [0.5] } deployments: type: Grid parameters: [-5, -5, 5, 5, 0.25, 0.25, 0.1, 0.1] # A perturbed grid of devices contents: - molecule: \"{hit, 0}\" # Everywhere, no one has been hit - in: { type: Rectangle, parameters: [-0.5, -0.5, 1, 1] } # Inside this shape... molecule: ball # ...every node has a ball programs: - time-distribution: 1 # This is a frequency, time distribution type is left to the incarnation # 'program' specs are passed down to the incarnation for being interpreted as reactions program: \"{ball} {hit, N} --\u003e {hit, N + 1} {launching}\" # If hit, count the hit - program: \"{launching} --\u003e +{ball}\" # As soon as possible, throw the ball to a neighbor content.molecule Type: String or SpecMap\nThe name of the molecule to be injected. If a String is provided, then it is created via Incarnation.createMolecule. Otherwise, the arbitrary class loading system SHOULD be used.\ncontent.concentration Type: String\nThe concentration of the molecule to be injected. If a String is provided, then it is created via Incarnation.createConcentration. Otherwise, the arbitrary class loading system SHOULD be used.\ncontent.in Type: Traversable of shapeFilter\nproperty Type: SpecMap\n(Multi)Spec\nMandatory keys Optional keys type parameters, in property.type Same as type\nproperty.parameters Same as parameters\nproperty.in Type: Traversable of shapeFilter\nenvironment Type: SpecMap\nBuilds an Environment using the same syntax of arbitrary class loading system.\nIf left unspecified, defaults to a bidimensional Euclidean manifold: Continuous2DEnvironment.\nType: SpecMap\nExamples Default environment, omitted specification Click to show / hide code incarnation: protelis Explicitly builds a Continuous2DEnvironment solely with the contextual parameters Click to show / hide code incarnation: protelis environment: type: Continuous2DEnvironment Explicitly builds a Continuous2DEnvironment using the qualified type name using only the contextual parameters Click to show / hide code incarnation: protelis environment: type: it.unibo.alchemist.model.environments.Continuous2DEnvironment Explicitly builds a Continuous2DEnvironment explicitly specifying that no parameters but the contextual ones should be used Click to show / hide code incarnation: protelis environment: type: Continuous2DEnvironment parameters: [] export Type: Traversable of exporter\nexporter Type: SpecMap\nDefinition of the contents (Molecules and Concentrations) of a group of nodes.\n(Multi)Spec\nMandatory keys Optional keys type, data parameters exporter.type Same as type\nexporter.data Type: Traversable of extractor\nexporter.parameters Same as parameters\nextractor Type: String or SpecMap\nThe only supported String is \"time\". Otherwise, a SpecMap MUST be provided.\nCreates instances of Extractor.\n(Multi)Spec\nMandatory keys Optional keys type parameters molecule property, aggregators, value-filter extractor.type Same as type\nextractor.parameters Same as parameters\nextractor.molecule Type: String\nName of a Molecule to be read from nodes and exported. The String is passed down to Incarnation.createMolecule. The created molecule is read from every node.\nextractor.property Type: String\nName of a property to be extracted from the selected Molecule. The Molecule and the String are passed down to Incarnation.getProperty. The obtained value is added to the exports.\nextractor.aggregators Type: String or List of Strings\nName of any valid UnivariateStatistic, case insensitive. All those provided with Apache Commons Math are available by default. New statistics can be defined, they get loaded transparently as far as their package matches the one of Apache Commons Math.\nIf the aggregators are specified, only one value per aggregator gets exported, instead of one value for each node.\nextractor.value-filter Type: String or SpecMap\nBuilds a ExportFilter, to be applied to raw data before being processed by the aggregators(#extractoraggregators), if present. If a String is provided, then it is used to load a policy from CommonFilters. Otherwise, the arbitrary class loading system MUST be used.\nMandatory keys Optional keys type parameters extractor.value-filter.type Same as type\nextractor.value-filter.parameters Same as parameters\nlauncher Type: SpecMap\nBuilds a Launcher using the arbitrary class loading system. If unspecified, defaults to DefaultLauncher, which runs the default simulation, unless the variable set on which the batch should be executed is specified.\nCustomizing the launcher can be useful for implementing custom batch execution strategies, or “simulations of simulations”, if the process requires multiple simulation “stages” (e.g., running a batch to train a neural network, then running another batch to test it).\nlayer Type: SpecMap\nBuilds a Layer using the arbitrary class loading system.\nExamples Creation of two Layers Click to show / hide code incarnation: sapere environment: type: Continuous2DEnvironment parameters: [] layers: - type: StepLayer parameters: [2, 2, 100, 0] molecule: A - type: StepLayer parameters: [-2, -2, 0, 100] molecule: B Creation of two BidimensionalGaussianLayers: Click to show / hide code incarnation: protelis _danger: \u0026danger danger _target: \u0026target targe environment: type: ContinuousPhysics2DEnvironment layers: - type: BidimensionalGaussianLayer molecule: *danger parameters: [80, 0, 100, 20] - type: BidimensionalGaussianLayer molecule: *target parameters: [-50, 0, 10, 50] seeds: scenario: 0 simulation: 1 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [2.0] type: BlendedSteering actions: - type: CognitiveAgentAvoidLayer parameters: [*danger] - type: CognitiveAgentFollowLayer parameters: [*target] conditions: - type: WantToEscape - time-distribution: type: DiracComb parameters: [0.5] type: CognitiveBehavior actions: - type: HeadTowardRandomDirection _nodes: \u0026nodes properties: - type: Human parameters: [ \"adult\", \"male\" ] - type: CognitivePedestrian - type: Cognitive2D parameters: [ *danger ] - type: Perceptive2D - type: CircularArea programs: *behavior deployments: - type: Circle parameters: [25, 0, 0, 8] \u003c\u003c: *nodes - type: Circle parameters: [75, 60, 0, 10] \u003c\u003c: *nodes layers Type: Traversable of layer\nExamples Creation of two Layers Click to show / hide code incarnation: sapere environment: type: Continuous2DEnvironment parameters: [] layers: - type: StepLayer parameters: [2, 2, 100, 0] molecule: A - type: StepLayer parameters: [-2, -2, 0, 100] molecule: B Creation of two BidimensionalGaussianLayers: Click to show / hide code incarnation: protelis _danger: \u0026danger danger _target: \u0026target targe environment: type: ContinuousPhysics2DEnvironment layers: - type: BidimensionalGaussianLayer molecule: *danger parameters: [80, 0, 100, 20] - type: BidimensionalGaussianLayer molecule: *target parameters: [-50, 0, 10, 50] seeds: scenario: 0 simulation: 1 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [2.0] type: BlendedSteering actions: - type: CognitiveAgentAvoidLayer parameters: [*danger] - type: CognitiveAgentFollowLayer parameters: [*target] conditions: - type: WantToEscape - time-distribution: type: DiracComb parameters: [0.5] type: CognitiveBehavior actions: - type: HeadTowardRandomDirection _nodes: \u0026nodes properties: - type: Human parameters: [ \"adult\", \"male\" ] - type: CognitivePedestrian - type: Cognitive2D parameters: [ *danger ] - type: Perceptive2D - type: CircularArea programs: *behavior deployments: - type: Circle parameters: [25, 0, 0, 8] \u003c\u003c: *nodes - type: Circle parameters: [75, 60, 0, 10] \u003c\u003c: *nodes monitor Type: SpecMap Builds a OutputMonitor using the arbitrary class loading system.\nExamples Creation of one OutputMonitors Click to show / hide code incarnation: sapere environment: type: Continuous2DEnvironment global-programs: - time-distribution: type: DiracComb parameters: [1.0] type: GlobalTestReaction monitors: - type: another.location.SimpleMonitor monitors Type: Traversable of monitor\nExamples Creation of one OutputMonitors Click to show / hide code incarnation: sapere environment: type: Continuous2DEnvironment global-programs: - time-distribution: type: DiracComb parameters: [1.0] type: GlobalTestReaction monitors: - type: another.location.SimpleMonitor network-model Type: SpecMap\nBuilds a LinkingRule using the arbitrary class loading system. If unspecified, defaults to NoLinks, and no node will have any neighbor.\nExamples Nodes connected when closer than some range Click to show / hide code incarnation: sapere # The incarnation is always mandatory network-model: type: ConnectWithinDistance # Loads a class with this name implementing LinkingRule parameters: [2] # Connection radius (parameter of a ConnectWithinDistance's constructor) deployments: - type: Point # Loads a class with this name implementing Deployment parameters: [0, 0] # Coordinates - { type: Point, parameters: [0.5, 0.85] } - { type: Point, parameters: [-0.5, 0.85] } program Type: SpecMap\nDefinition of the contents (Molecules and Concentrations) of a group of nodes.\n(Multi)Spec\nMandatory keys Optional keys type parameters, conditions, time-distribution actions program time-distribution program.type Same as type\nprogram.program Type: String\nPassed to Incarnation.createReaction to be interepreted and\nprogram.in Type: Traversable of shapeFilter\nprogram.actions Type: Traversable of action\nprogram.conditions Type: Traversable of condition\nprogram.parameters Same as parameters\nprogram.time-distribution Type: String or SpecMap\nBuilds a TimeDistribution. If a String is provided, then it is created via Incarnation.createTimeDistribution. Otherwise, the arbitrary class loading system SHOULD be used.\nremote-dependencies shapeFilter Type: SpecMap\nBuilds a PositionBasedFilter using the arbitrary class loading system.\nExamples Injection of a molecule only in those nodes located inside a Rectangle Click to show / hide code incarnation: sapere network-model: { type: ConnectWithinDistance, parameters: [0.5] } deployments: type: Grid parameters: [-5, -5, 5, 5, 0.25, 0.25, 0.1, 0.1] # A perturbed grid of devices contents: - molecule: \"{hit, 0}\" # Everywhere, no one has been hit - in: { type: Rectangle, parameters: [-0.5, -0.5, 1, 1] } # Inside this shape... molecule: ball # ...every node has a ball programs: - time-distribution: 1 # This is a frequency, time distribution type is left to the incarnation # 'program' specs are passed down to the incarnation for being interpreted as reactions program: \"{ball} {hit, N} --\u003e {hit, N + 1} {launching}\" # If hit, count the hit - program: \"{launching} --\u003e +{ball}\" # As soon as possible, throw the ball to a neighbor seeds Type: SpecMap\nSelection of the seed for the RandomGenerators.\n(Multi)Spec\nMandatory keys Optional keys scenario, simulation seeds.scenario Type: Int\nSelection of the seed for the RandomGenerator controlling the position of random displacements.\nseeds.simulation Type: Int\nSelection of the seed for the RandomGenerator controlling the evolution of the events of the simulation.\nterminate Type: Traversable of terminator\nterminator Type: SpecMap\nBuilds a Predicate using the arbitrary class loading system.\nExamples Termination after some time Click to show / hide code incarnation: protelis network-model: type: ConnectWithinDistance parameters: [30] deployments: - type: Rectangle parameters: [100, 62, 15, 95, 200] contents: - molecule: \"source\" concentration: true in: type: Circle parameters: [107.96487911806524, 102.49167432603535, 10] programs: - time-distribution: 1 # This is a frequency program: \u003e import protelis:coord:spreading distanceTo(self.getDeviceUID().getId() == 0) - program: send terminate: - type: AfterTime parameters: 1 Click to show / hide code incarnation: protelis variables: zoom: \u0026zoom formula: 0.1 image_name: { formula: \"'chiaravalle.png'\" } image_path: \u0026image_path language: kotlin formula: \u003e import java.io.File File(\"../..\").walkTopDown().find { image_name in it.name }?.absolutePath ?: image_name walking_speed: \u0026walk-speed { default: 1.4, min: 1, max: 2, step: 0.1 } seed: \u0026seed { default: 0, min: 0, max: 99, step: 1 } scenario_seed: \u0026scenario_seed { formula: (seed + 31) * seed } people_count: \u0026people_count type: GeometricVariable parameters: [300, 50, 500, 9] seeds: { simulation: *seed, scenario: *scenario_seed} export: - type: CSVExporter parameters: fileNameRoot: \"00-testing_csv_export\" data: - time - molecule: \"default_module:default_program\" aggregators: [ mean, max, min, variance, median ] value-filter: onlyfinite - type: CSVExporter parameters: fileNameRoot: \"fixed-decimals\" data: - type: Time parameters: precision: 2 - molecule: \"default_module:default_program\" property: \"self.nextRandomDouble()\" precision: 2 aggregators: [ mean, max, min, variance, median ] value-filter: onlyfinite environment: { type: ImageEnvironment, parameters: [*image_path, *zoom] } network-model: { type: ObstaclesBreakConnection, parameters: [5] } deployments: type: Rectangle parameters: [*people_count, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send - { type: Event, time-distribution: 1, actions: { type: LevyWalk, parameters: [*walk-speed] } } terminate: - type: AfterTime parameters: 10 Click to show / hide code incarnation: protelis variables: zoom: \u0026zoom formula: 0.1 image_name: { formula: \"'chiaravalle.png'\" } image_path: \u0026image_path language: kotlin formula: \u003e import java.io.File File(\"../..\").walkTopDown().find { image_name in it.name }?.absolutePath ?: image_name walking_speed: \u0026walk-speed { default: 1.4, min: 1, max: 2, step: 0.1 } seed: \u0026seed { default: 0, min: 0, max: 99, step: 1 } scenario_seed: \u0026scenario_seed { formula: (seed + 31) * seed } people_count: \u0026people_count type: GeometricVariable parameters: [10, 50, 500, 9] seeds: { simulation: *seed, scenario: *scenario_seed} export: - type: MongoDBExporter parameters: uri: \"mongodb://localhost:27017/\" dbName: \"test\" interval: 2.0 data: - time - molecule: \"default_module:default_program\" aggregators: [ mean, max, min, variance, median ] value-filter: onlyfinite environment: { type: ImageEnvironment, parameters: [*image_path, *zoom] } network-model: { type: ObstaclesBreakConnection, parameters: [50] } deployments: type: Rectangle parameters: [*people_count, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send - { type: Event, time-distribution: 1, actions: { type: LevyWalk, parameters: [*walk-speed] } } terminate: - type: AfterTime parameters: 3 variable Type: SpecMap\nDefinition of free and dependent variables.\n(Multi)Spec\nMandatory keys Optional keys type parameters min, max, step, default formula language, timeout Variables can be created in three ways:\nUsing the arbitrary class loading system to produce an instance of Variable or DependentVariable; specifying the parameters of a LinearVariable (minimum and maximum values, incrementation step, and default value); writing an expression that can be interpreted by some JSR-223-compatible language whose interpreter is in the classpath, possibly specifying a timeout. Produces a DependentVariable. variable.type Same as type\nvariable.parameters Same as parameters\nvariable.default Type: Number\nDefault value for a LinearVariable, to be selected if the variable is not among those generating the batch.\nvariable.max Type: Number\nMaximum value for a LinearVariable\nvariable.min Type: Number\nMinimum value for a LinearVariable\nvariable.step Type: Number\nSize of the incremental step of a LinearVariable\nvariable.formula Type: String\nCode that can be interpreted by a JSR223Variable.\nvariable.language Type: String\nLanguage to be used by a JSR223Variable. The language must be available in the classpath. Groovy (default), Kotlin (kotlin or kts), and Scala (scala) are supported natively.\nvariable.timeout Type: Int\nTime in milliseconds after which the interpreter of the JSR223Variable is considered stuck or in livelock. The interpreter gets interrupted and the simulation loading fails to prevent unresponsive simulations. Defaults to 1000ms.\nvariables Type: Traversable of variable",
    "description": "Specification of the YAML-based language simulations are configured with.",
    "tags": [
      "Yaml",
      "Simulations",
      "Specification",
      "Environment",
      "Extension",
      "Programming"
    ],
    "title": "YAML simulation specification",
    "uri": "/reference/yaml/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tutorials",
    "content": "In this page, we show an up to date version the examples that are presented in the tutorial paper presented at DAIS 2021 (one of the three conferences of DisCoTec 2021).\nThis tutorial features some companion videos, embedded in this page.\nInfo The tutorial is also available as a scientific document: Info All code has been open-sourced and it is being actively maintained on GitHub\nWarning Snapshots presented here are from the Java Swing GUI module that was the main UI at the time the tutorial was written, and may or may not reflect the current graphical appearance of the examples (which can be configured in any case).\nTip Simulations in alchemist are written in YAML. YAML is pretty intuitive, it can be learnt quickly through Learn X in Y minutes Where X=yaml. Even without any prior knowledge, looking at the syntax and comparing it with the information in the aforementioned page should provide enough information.\nImport the infrastructure Warning You need to be able to import an existing Gradle project from GitHub. If you have no idea of what I’m talking about, take a step back and make sure you followed the quickstart.\ngit clone https://github.com/DanySK/DisCoTec-2021-Tutorial.git cd DisCoTec-2021-Tutorial Unix-like terminals: ./gradlew run00 Windows terminals (cmd, Powershell): gradlew.bat run00 The shell should begin to work, download the required components, and pop a graphical interface in front of you.\nNote If something went wrong, let us know by opening an issue!\nThe build system is continuous-integration sensitive. If a GUI is not displayed but the proces terminates successfully, make sure that you do not have a CI environment variable set to true.\nWriting and launching simple simulations In this video you will see how to:\nimport the example project, and how to use it to run simulations; write simple simulations in YAML; deploy nodes into a bidimensional space; and write programs that perform manipulation of data in form of tuples. Note This is actually the second video of the tutorial. The first presents introductory information on the simulator and its meta-model, it can be found in the Explanation chapter of the documentation.\nThe examples presented in the video are presented in the following subsections, updated to execute with the latest version of the simulator. You will find this code in the current version of the tutorial.\nTip Make changes to the existing configuration files and see what happens!\nThree connected devices In this simple example, we simply deploy three nodes in a bidimensional space. They do nothing, they are just there. Starting the simulation would make it go to infinite time instantly, as there are no events to simulate.\nClick to show / hide code incarnation: sapere # The incarnation is always mandatory network-model: type: ConnectWithinDistance # Loads a class with this name implementing LinkingRule parameters: [2] # Connection radius (parameter of a ConnectWithinDistance's constructor) deployments: - type: Point # Loads a class with this name implementing Deployment parameters: [0, 0] # Coordinates - { type: Point, parameters: [0.5, 0.85] } - { type: Point, parameters: [-0.5, 0.85] } The graphic effect is just to see three dots in the interface. If links are displayed (see the reference of the graphical interface), then the three nodes appear linked. Show snapshot A grid of devices playing dodgeball In this example we create a grid of devices and make them play dodgeball. The program to be injected is rather simple: some nodes will begin the simulation with a ball, and their goal will be to throw it to a random neighbor; whichever node gets hit takes a point, updates its score, and throws the ball again. This program is easy to write in a network of programmable tuple spaces, hence we write the following specification using the SAPERE incarnation.\nClick to show / hide code incarnation: sapere network-model: { type: ConnectWithinDistance, parameters: [0.5] } deployments: type: Grid parameters: [-5, -5, 5, 5, 0.25, 0.25, 0.1, 0.1] # A perturbed grid of devices contents: - molecule: \"{hit, 0}\" # Everywhere, no one has been hit - in: { type: Rectangle, parameters: [-0.5, -0.5, 1, 1] } # Inside this shape... molecule: ball # ...every node has a ball programs: - time-distribution: 1 # This is a frequency, time distribution type is left to the incarnation # 'program' specs are passed down to the incarnation for being interpreted as reactions program: \"{ball} {hit, N} --\u003e {hit, N + 1} {launching}\" # If hit, count the hit - program: \"{launching} --\u003e +{ball}\" # As soon as possible, throw the ball to a neighbor Snapshots of the simulation of the “dodgeball” example follow. Devices with a ball are depicted in black. All other devices’ color hue depends on the hit count, shifting from red (zero hits) towards blue.\nShow snapshots A gradient on a grid of devices In this example, we implement with the SAPERE incarnation a very simple specification of a gradient, a pattern that is considered to be the basis of many other patterns 1\nClick to show / hide code incarnation: sapere network-model: { type: ConnectWithinDistance, parameters: [0.5] } deployments: type: Grid parameters: [-5, -5, 5, 5, 0.25, 0.25, 0.1, 0.1] contents: in: { type: Rectangle, parameters: [-0.5, -0.5, 1, 1] } molecule: source # Here is the source of the gradient programs: - time-distribution: 0.1 # Exponential with λ=0.1 # If there is a source, then the gradient is zero. program: \"{source} --\u003e {source} {gradient, 0}\" - time-distribution: 1 # Exponential distribution with λ=1 # Send all neighbors your gradient value plus one program: \"{gradient, N} --\u003e {gradient, N} *{gradient, N+1}\" # In case of multiple gradients, take the shortest - program: \"{gradient, N}{gradient, def: N2\u003e=N} --\u003e {gradient, N}\" - time-distribution: 0.1 program: \"{gradient, N} --\u003e {gradient, N + 1}\" # Aging process - program: \"{gradient, def: N \u003e 30} --\u003e\" # Death process Here are some snapshots of the simulation of the “gradient” example. Source devices have a central black dot. Devices’ color hue depends on the gradient value, shifting from red (low) towards blue (high).\nShow snapshots Arbitrary network graphs This example showcases some complex deployments made possible by Alchemist via Graphstream\nClick to show / hide code incarnation: sapere network-model: { type: ConnectWithinDistance, parameters: [0.5] } deployments: - { type: GraphStreamDeployment, parameters: [300, -30, 0, 0.8, Lobster, [5, 15]] } - { type: GraphStreamDeployment, parameters: [300, 0, 0, 2, BananaTree, 10] } - { type: GraphStreamDeployment, parameters: [300, 30, 0, PreferentialAttachment] } The example creates a single environment with three advanced deployments. From left to right: a Lobster graph, a banana tree, and a scale-free network with preferential attachment.\nAdvanced examples In this video, we learn how to:\nuse aggregate programming (via Protelis) to write simulations; use images to create indoor environments with physical obstacles; use OpenStreetMap data to simulate on real-world maps; and export data from simulations and configure batches exploring all possible combinations Node mobility and indoor environments Many interesting scenarios the simulator targets require mobility and a richer environment. In the following example, we show a group of mobile devices estimating the distance from a point of interest (the altar) while moving within a church, whose planimetry has been taken from an existing building. Since the gradient is propagated in a network of mobile devices, we use a Protelis implementation of the adaptive Bellman-Ford algorithm from the Protelis-lang library2\nClick to show / hide code incarnation: protelis environment: { type: ImageEnvironment, parameters: [chiaravalle.png, 0.1] } network-model: { type: ObstaclesBreakConnection, parameters: [50] } deployments: type: Rectangle parameters: [300, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send # Actual network message delivery - type: Event time-distribution: 1 actions: { type: LevyWalk, parameters: [1.4] } In the following snapshots, mobile devices progressively explore the location, while measuring the distance from a point of interest via gradient (red nodes are closer to the point of interest; purple ones are farther).\nShow snapshots Real-world maps and GPS traces The simulator can load data from OpenStreetMap exports, navigate devices towards a destination along streets by relying on GraphHopper or by using GPS traces in GPX format, or even using the navigation system to interpolate sparse GPS traces, thus preventing nodes from taking impossible paths. In the following simple scenario buoys are deployed in the Venice lagoon and move Brownianly.\nClick to show / hide code incarnation: sapere environment: { type: OSMEnvironment } network-model: { type: ConnectWithinDistance, parameters: [1000] } _venice_lagoon: \u0026lagoon [[45.2038121, 12.2504425], [45.2207426, 12.2641754], [45.2381516, 12.2806549], [45.2570053, 12.2895813], [45.276336, 12.2957611], [45.3029049, 12.2991943], [45.3212544, 12.3046875], [45.331875, 12.3040009], [45.3453893, 12.3040009], [45.3502151, 12.3156738], [45.3622776, 12.3232269], [45.3719259, 12.3300934], [45.3830193, 12.3348999], [45.395557, 12.3445129], [45.3998964, 12.3300934], [45.4018249, 12.3136139], [45.4105023, 12.3122406], [45.4167685, 12.311554], [45.4278531, 12.3012543], [45.4408627, 12.2902679], [45.4355628, 12.2772217], [45.4206242, 12.2703552], [45.3994143, 12.2744751], [45.3738553, 12.2676086], [45.3579354, 12.2614288], [45.3429763, 12.2497559], [45.3198059, 12.2408295], [45.2975921, 12.2346497], [45.2802014, 12.2408295], [45.257972, 12.233963], [45.2038121, 12.2504425]] deployments: type: Polygon parameters: [500, *lagoon] programs: - time-distribution: 10 type: Event actions: { type: BrownianMove, parameters: [0.0005]} The following snapshots depict the simulation in execution.\nShow snapshots In-depth analysis of simulated scenarios The following snippet showcases the aforementioned features by enriching the example of a gradient in an indoor environment presented previously with:\nvariables for the pedestrian walking speed, pedestrian count, and random seed; constants to ease the configuration of the simulation; a Kotlin resource search expressed as a variable; controlled reproducibility by controlling random seeds; export of generated data (time and several statistics on the gradient). Click to show / hide code incarnation: protelis variables: zoom: \u0026zoom formula: 0.1 # Must be a valid Groovy snippet image_name: { formula: \"'chiaravalle.png'\" } image_path: \u0026image_path language: kotlin # Pick whatever JSR223 language you like and add it to the classpath formula: | # The following is pure Kotlin code. Other variables can be referenced! import java.io.File fun File.findImage(): String? = walkTopDown().find { image_name in it.name }?.absolutePath fun File.findImageRecursively(): String = findImage() ?: File(this, \"..\").findImageRecursively() File(\".\").findImageRecursively() timeout: 5000 # Linear free variable walking_speed: \u0026walk-speed { default: 1.4, min: 1, max: 2, step: 0.1 } seed: \u0026seed { default: 0, min: 0, max: 99, step: 1 } # 100 samples scenario_seed: \u0026scenario_seed { formula: (seed + 31) * seed } # Variable-dependent people_count: \u0026people_count type: GeometricVariable # A variable scanning a space with geometric segmentation parameters: [300, 50, 500, 9] # default 300, minimum 50, maximum 100, 9 samples seeds: { simulation: *seed, scenario: *scenario_seed} export: type: CSVExporter parameters: fileNameRoot: \"snippet-variables-export\" data: - time - molecule: \"default_module:default_program\" aggregators: [ mean, max, min, variance, median ] # From Apache's UnivariateStatistic value-filter: onlyfinite # discards NaN and Infinity environment: { type: ImageEnvironment, parameters: [*image_path, *zoom] } network-model: { type: ObstaclesBreakConnection, parameters: [50] } deployments: type: Rectangle parameters: [*people_count, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send - { type: Event, time-distribution: 1, actions: { type: LevyWalk, parameters: [*walk-speed] } } Info This example:\ncontrols randomness by specifying the random seeds, uses variables to define multiple scenarios at once and don’t repeat itself uses the data export infrastructure  ↩︎\n ↩︎",
    "description": "A (video) guide through the main features of the simulator, as presented at DAIS 2021",
    "tags": [
      "Tutorial",
      "Basics",
      "Video",
      "Examples",
      "Deployment",
      "Maps",
      "Indoor",
      "Graph",
      "Export"
    ],
    "title": "Step-by-step tutorial",
    "uri": "/tutorials/basics/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator",
    "content": "Learning-oriented Tutorials Contents QuickstartA super-fast way to get an instance of the simulator up and running.\nStep-by-step tutorialA (video) guide through the main features of the simulator, as presented at DAIS 2021\nProtelis Incarnation TutorialReady-to-run examples of increasing complexity with the Protelis incarnation\nSAPERE Incarnation TutorialReady-to-run examples of increasing complexity with the SAPERE incarnation\nScafi Incarnation TutorialReady-to-run examples of increasing complexity with the Scafi incarnation",
    "description": "Tutorials are lessons that take the reader by the hand through a series of steps. They are meant to show a beginner that they can achieve something with Alchemist.",
    "tags": [],
    "title": "Tutorials",
    "uri": "/tutorials/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Reference",
    "content": "",
    "description": "KDoc API docs. Captures both Java and Kotlin API abstractions.",
    "tags": [
      "Kdoc",
      "Dokka",
      "Api Docs"
    ],
    "title": "API Docs",
    "uri": "/reference/kdoc/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator",
    "content": "Problem-oriented How-to Guides Contents PreparationPreliminary operations for using Alchemist: installation, setup\nAlchemist stand-aloneThe recommended way to run the simulator and fetch all the required modules.\nAlchemist via GradleThe recommended way to run the simulator and fetch all the required modules.\nSimulationGuides on how to create simulation environments, configure node behaviour, and control the simulation details\nCreate reusable variablesDefine reusable pieces of information and compute upon them, prepare for the execution of simulation batches.\nEnsure repeatabilityControl randomness, ensuring reproducibility and replicability of experiments.\nCognitive AgentsAgents with realistic human behavior.\nCreate a networkDefine how nodes should be connected with each other.\nCreate LayersDefine data layers that live in the environment\nCreate rich environmentsHow to create complex environments (obstacles, and so on)\nFind paths indoorsHow to navigate the environment, especially indoors.\nMaps and GPS tracesHow to simulate using maps and GPS traces.\nSimulate indoorHow to create indoor environments based on planimetries.\nSimulate physical interactions among pedestriansPhysical interaction between nodes\nDeploy NodesHow to place nodes within Alchemist environments\n(Irregular) GridsDeployment of nodes in (possibly irregular) grids.\nNodes inside shapesDeployment of nodes randomly inside arbitrary shapes.\nGPS TracesDeployment of nodes on map-based environments using GPS data.\nGraphsDeployment of nodes into arbitrary graphs.\nExport dataSelect which data the simulator should output, in which format, and where.\nMonitor and Control Simulations through GraphQLMonitor and Control a Simulation through a set of GraphQL APIs.\nMonitoring Simulations through Custom Output MonitorsCreate custom monitors to track simulation progression and interact with standard hooks.\nProgram NodesHow to define the behavior of nodes\nMove nodes on mapsHow to move node around in geospatial environments.\nNode contentsDefinition of the initial content of nodes.\nSmart cameras and dronesSimulate robots with a field of view.\nExecutionExecution of multiple simulations, locally or in a distributed environment\nCustomize the Swing GUICustomize the look of your simulation.\nDefine the termination criteriaDecide when the simulator should stop and consider the simulation concluded.\nMultiVeStAHow to integrate MultiVesta in Alchemist\nParameter Sweeping with simulation batchesExecute multiple instances of a simulation with different parameters\nSimulation Engine ConfigurationAvailable simulation engine configurations.\nWorkaroundsPre-concocted solutions to well-known issues\nGraphical Glitches in SwingKnown issues with Swing and OpenGL acceleration, especially with legacy AMD/ATi drivers.\nMemory leaks under LinuxKnown issue of some Java Virtual Machine implementations when requested to use more than 64GB of RAM\nExperiment-specific extensionsOne-time changes or additions to the simulator behavior\nDevelopmentHow to contribute to the project, hence achieving eternal glory\nDeveloper's guideHow to contribute\nEnrich the GraphQL APIHow to create a new Query, Subscription, or Mutation using the GraphQL API\nImport Alchemist in an IDEThe recommended way to get and import the Alchemist project in an IDE\nBuild and run the QAHow to locally build and test the simulator",
    "description": "How-to guides take the reader through the steps required to solve a real-world problem. They are recipes, directions to achieve a specific end: while a tutorial is what a beginner needs to know, a how-to guide is an answer to a question that only a user with some experience could even formulate. In how-to guides, we assume some knowledge and understanding, we assume that the user already knows how to do basic things and use basic tools.",
    "tags": [],
    "title": "How-to Guides",
    "uri": "/howtos/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Reference",
    "content": "",
    "description": "KDoc API docs. Captures both Java and Kotlin API abstractions.",
    "tags": [
      "Kdoc",
      "Dokka",
      "Api Docs"
    ],
    "title": "Per-module API Docs",
    "uri": "/reference/kdoc-modules/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides",
    "content": "Prepare the simulated environment Simulation Contents Create reusable variablesDefine reusable pieces of information and compute upon them, prepare for the execution of simulation batches.\nEnsure repeatabilityControl randomness, ensuring reproducibility and replicability of experiments.\nCognitive AgentsAgents with realistic human behavior.\nCreate a networkDefine how nodes should be connected with each other.\nCreate LayersDefine data layers that live in the environment\nCreate rich environmentsHow to create complex environments (obstacles, and so on)\nFind paths indoorsHow to navigate the environment, especially indoors.\nMaps and GPS tracesHow to simulate using maps and GPS traces.\nSimulate indoorHow to create indoor environments based on planimetries.\nSimulate physical interactions among pedestriansPhysical interaction between nodes\nDeploy NodesHow to place nodes within Alchemist environments\n(Irregular) GridsDeployment of nodes in (possibly irregular) grids.\nNodes inside shapesDeployment of nodes randomly inside arbitrary shapes.\nGPS TracesDeployment of nodes on map-based environments using GPS data.\nGraphsDeployment of nodes into arbitrary graphs.\nExport dataSelect which data the simulator should output, in which format, and where.\nMonitor and Control Simulations through GraphQLMonitor and Control a Simulation through a set of GraphQL APIs.\nMonitoring Simulations through Custom Output MonitorsCreate custom monitors to track simulation progression and interact with standard hooks.\nProgram NodesHow to define the behavior of nodes\nMove nodes on mapsHow to move node around in geospatial environments.\nNode contentsDefinition of the initial content of nodes.\nSmart cameras and dronesSimulate robots with a field of view.",
    "description": "Guides on how to create simulation environments, configure node behaviour, and control the simulation details",
    "tags": [],
    "title": "Simulation",
    "uri": "/howtos/simulation/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Explanation",
    "content": "The core part of the tool is the incarnation-agnostic simulation engine. Its current implementation is based on Gibson and Bruck’s Next Reaction, extended to support addition and removal of reactions, and improved using input and output contexts for reactions, in order to prune the dependency graph as much as possible. More details on that are demanded to this scientific paper on Journal of Simulation.\nThe engine’s entry point is the Simulation. It is equipped with support for commands like play, pause and stop, and can be equipped with an OutputMonitor. The output monitor can be a graphical interface, a logger or any kind of environment inspector.",
    "description": "How does Alchemist simulate? What is at its core?",
    "tags": [
      "Engine",
      "Gibson-Bruck",
      "Gillespie",
      "Discrete-Event Simulation",
      "Time",
      "Optimization"
    ],
    "title": "The Alchemist Simulation Engine",
    "uri": "/explanation/engine/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides",
    "content": "Run batches, locally or in a distributed fashion Execution Contents Customize the Swing GUICustomize the look of your simulation.\nDefine the termination criteriaDecide when the simulator should stop and consider the simulation concluded.\nMultiVeStAHow to integrate MultiVesta in Alchemist\nParameter Sweeping with simulation batchesExecute multiple instances of a simulation with different parameters\nSimulation Engine ConfigurationAvailable simulation engine configurations.",
    "description": "Execution of multiple simulations, locally or in a distributed environment",
    "tags": [],
    "title": "Execution",
    "uri": "/howtos/execution/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Reference",
    "content": "",
    "description": "Locations where things are found: build files, API implementations",
    "tags": [
      "Packages",
      "Build System"
    ],
    "title": "Project organization",
    "uri": "/reference/organization/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides",
    "content": "Pre-concocted solutions to well-known issues Work arounds If your problem is not listed here, it may still be known and a discussion/workaround could be available on the Alchemist Github issue tracker.\nOther issues you may experience are listed below.\nWarning =\u003e HELP! My issue is not on the tracker nor in this list!\nContents Graphical Glitches in SwingKnown issues with Swing and OpenGL acceleration, especially with legacy AMD/ATi drivers.\nMemory leaks under LinuxKnown issue of some Java Virtual Machine implementations when requested to use more than 64GB of RAM",
    "description": "Pre-concocted solutions to well-known issues",
    "tags": [],
    "title": "Workarounds",
    "uri": "/howtos/workarounds/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation \u003e Deploy Nodes",
    "content": "One common way to deploy nodes in a bidimensional space is on a grid. Grid-like deployments can be easily performed in Alchemist leveraging the Grid Deployment.\nThe following example shows a grid centered in (0, 0), with nodes distanced of 0.25 both horizontally and vertically. Click to show / hide code incarnation: sapere deployments: type: Grid parameters: [-5, -5, 5, 5, 0.25, 0.25] Often, symmetric structures may induce corner behaviors in self-organising systems, and real-world “grid” deployments are not usually geometrically perfect. Indeed, it is common to perturb the grid shape randomly, in order to account for potential irregularities of the real-world system being simulated. Grid supports perturbation natively: for instance, here is an example of a grid where positions are randomly perturbed of ±0.1 distance units.\nClick to show / hide code incarnation: sapere deployments: type: Grid parameters: [-5, -5, 5, 5, 0.25, 0.25, 0.1, 0.1]",
    "description": "Deployment of nodes in (possibly irregular) grids.",
    "tags": [
      "Deployment",
      "Node",
      "Nodes",
      "Grid"
    ],
    "title": "(Irregular) Grids",
    "uri": "/howtos/simulation/deploy/grid/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Showcase",
    "content": "Scientific publication: Experiment publicly available at https://github.com/DanySK/Experiment-2021-JCEE-Optimal-Converge-Cast\nNotes This experiment uses Alchemist experimental version 10.0.0-dev0z+a6d7708ef.\nAbstract A key goal of edge computing is to achieve “distributed sensing” out of data continuously generated from a multitude of interconnected physical devices. The traditional approach is to gather information into sparse collector devices by relying on hop-by-hop accumulation, but issues of reactivity and fragility naturally arise in scenarios with high mobility. We propose novel algorithms for dynamic data summarisation across space, supporting high reactivity and resilience by specific techniques maximising the speed at which information propagates towards collectors. Such algorithms support idempotent and arithmetic aggregation operators and, under reasonable network assumptions, are proved to achieve optimal reactivity. We provide evaluation via simulation: first in multiple scenarios showing improvement over the state of art, and then by a case study in edge data mining, which conveys the practical impact in higher-level distributed sensing patterns.\nExperiment description To exemplify practical applications, we test the proposed algorithms in a realistic setup of mobile edge computing. We focus on crowd tracking, the process of monitoring the evolution of large assembles of people, with the goal of keeping crowd density under control to prevent dangerous situations. We shall show how such monitoring can be performed fully at the edge of the network. Consider a scenario of crowd tracking in the Italian city of Turin,7 especially pushed after the famous June 2017 incident, when a panic wave and stampede emerged resulting in casualties and injuries [19]. We set up a large event in the popular public park “Parco del Valentino”, with an area of roughly . Suppose a small fraction of participants are equipped with wearable devices given by the organisation, capable of local peer-to-peer communication.\nAs reference hardware, we model the communication capabilities of the DecaWave DWM1001 Development Board.8,9 The board features two radio devices, based respectively on Bluetooth Low Energy (BTLE) and on a custom implementation of an Ultrawide Band (UWB) transceiver (IEEE 802.15.4-2011). The BTLE radio is used to exchange identification beacons, while the UWB module is used to communicate directly with devices in proximity, creating a mesh network. The current implementation reaches a communication range of several tenths of metres, and a data rate in the order of few megabits per second. The device is designed to be easily attachable to small-size, low-power ARM boards, such as the Raspberry PI zero, with enough computational power to sustain a full fledged operating system such as Android or GNU/Linux.\nIn our scenario, nine edge servers are displaced at key locations in the park corresponding to existing facilities. The system goal is to provide edge servers with data for predicting the evolution of the local crowd movement, so that field operators can be informed timely about risky situations. Devices can access their position with reasonable accuracy. Our goal is to estimate the density and barycentre of the local crowd in order to detect risky areas. We run an estimation of the local density, and propagate a warning to devices in potentially risky areas: such data can be used to generate short- and mid-terms density estimates [20].\nThe case study has been open-sourced for reproducibility, configured with a continuous integration system, and released as DOI objects [21]. Table 3 summarises all the variables, constants, and metrics. To challenge our proposed algorithms, we include three elements of realism and a disturbance: (1) a packet loss model, with the probability of a packet not being received growing with distance; (2) variability in the device working frequency, to emulate unpredicted scheduling policies, e.g., for battery saving; (3) people are not stationary, but move towards random waypoints within the park at a speed of [22]; (4) once the system initial transient is terminated, we progressively turn off all edge servers, shutting down one edge server every 100 s. We measure two parameters: the probability that a device is found in an area where density is growing towards a potentially dangerous level (), and the overall error of the system in identifying the barycentre of the tracked crowd (), compared to the value produced by an oracle.\nSnapshots",
    "description": "Simulation of crowd control with mobile in Turin.",
    "tags": [
      "Experiment",
      "Maps",
      "Export",
      "Protelis"
    ],
    "title": "2020: Optimal resilient distributed data collection in mobile edge environments",
    "uri": "/showcase/2020-jcee/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Showcase",
    "content": "From Experiment publicly available at https://github.com/cric96/experiment-2022-ieee-decentralised-system\nAbstract The Internet of Things and edge computing are fostering a future of ecosystems hosting complex decentralized computations, deeply integrated with our very dynamic environments. Digitalized buildings, communities of people, and cities will be the next-generation “hardware and platform”, counting myriads of interconnected devices, on top of which intrinsically-distributed computational processes will run and self-organize. They will spontaneously spawn, diffuse to pertinent logical/physical regions, cooperate and compete, opportunistically summon required resources, collect and analyze data, compute results, trigger distributed actions, and eventually decay. How would a programming model for such ecosystems look like? Based on research findings on self-adaptive/self-organizing systems, the paper proposes design abstractions based on “dynamic decentralization domains”: regions of space opportunistically formed to support situated recognition and action. We embody the approach into a Scala application program interface (API) enacting distributed execution and show its applicability in a case study of environmental monitoring.\nExperiment description In the simulation presented in the paper we want to monitor the rain intensity to pre-alert the public safety organizations close to areas at a risk of floods.\nThe tracked phenomenon is spatially and temporally hard to predict with fine-enough grain (data from the NOAA1 has, at best, zip-code gran- ularity): at a single-city level, we could perform better by promptly reacting to specialized sensors readings. However, the information provided by individual sensors is too fragile, as the risk depends on the rain intensity in surroundings and not just on the specific spot (e.g., coastal zones with a steep elevation profiles could suffer floods even with light rain, if the close-by higher-altitude zone is being hit hard). Pre-defining areas (using pre-existing altimetric and structural knowledge) helps, but this strategy misses out on essential information: how the underlying phenomenon is behaving. Indeed, areas should be formed ad-hoc considering the city structure and rain distribution, and leveraged to perform on-the-fly situation recognition and response. This approach is practical whenever there are phenomena with non-strictly-local effects, irregularly shaped in space, and/or hard-to-predict a fine grain.\nFor the simulation of rain intensity, we used open data of Toronto, featuring 50 water gauges samples taken in 2021. To stress-test our proposed approach with a denser network of devices, we added 300 simulated gauges, randomly positioned, whose data is interpolated from the values of the surrounding real devices. We selected the rain event that occurred on 2021-09-07, the heaviest in the available data. We used data from OpenStreetMap to position 24 fire stations In the experiment, devices compute their programs unsynchronized at a frequency of 1Hz. We define a simple metric for the actual risk of a location as the quotient of the local rain intensity on the local altitude (namely, the rainier and the lower the position, the higher the risk); we run an oracle measuring it with a fine grain across the city at each instant. As performance measure, we count how many alerts get generated and how many stations they reach. Additional gauges position and device timing drift are randomized.\nSnapshots Darker shadows indicate heavier rain. Black squares with a small red dot are unalerted fire stations, when at least an alert reaches them, their dot changes to a large red square. Circles represent gauges; their colors map the region they are subject to when measuring rainfall intensity.\nVideo \u003cdiv style=\"position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;\"\u003e \u003ciframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"allowfullscreen\" loading=\"eager\" referrerpolicy=\"strict-origin-when-cross-origin\" src=\"https://www.youtube.com/embed/nWLaglM0EkY?autoplay=0\u0026amp;controls=1\u0026amp;end=0\u0026amp;loop=0\u0026amp;mute=0\u0026amp;start=0\" style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;\" title=\"YouTube video\"\u003e\u003c/iframe\u003e \u003c/div\u003e",
    "description": "Simulation of collective distributed sensing and acting using Toronto rain gauge’s data.",
    "tags": [
      "Experiment",
      "Maps",
      "Export",
      "Scafi"
    ],
    "title": "2022: Dynamic Decentralization Domains for the Internet of Things",
    "uri": "/showcase/2022-iee-ic/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Showcase",
    "content": "Experiment publicly available at https://github.com/ICPS-MicroCity/amusement-park-simulation\nNotes This project was developed for the Intelligent Cyber-Physical Systems course. If you want to have a look at the project, please check the ICPS-MicroCity organization.\nAbstract The aim of this simulation is to determine whether or not a situated recommendation system can positively affect the visitor flow in an amusement park. Since the desired system does not exist, and it would be too costly to implement just for the sake of a proof of concept, we performed our validation via a simulation.\nAmusement parks are a popular form of entertainment for people with diverse ages and interests. As such, they offer several attractions, depending on the park target and theme, which may include roller-coasters, carousels, and water slides, and so on. This is one of the reasons why, especially during holidays, these parks attract a considerable amount of visitors and tend to be significantly crowded. Excessive crowding may result in situations far from ideal for visitors, as chances are that they will have to spend most of their time waiting in queue. This situation becomes even more unattractive for large groups of visitors, such as families with children, or in case of unpleasant weather conditions, such as rain or summer heat. Ultimately, a bad experience with the park may reflect into bad reviews, and hurt the business. In order to improve the overall visitors’ experience, the situated recommendation system could suggest the most suitable attractions for them.\nIn this scenario, it could be useful to recommend the most suitable attraction to visitors depending on their physical location (as tracked by their personal wearable device) and/or on their interests. The recommendations may point to the nearest attraction that suits the visitor’s preferences or to an attraction with a short queue (compared to the usual queue for the same game or to the queues of other attractions). This mechanism could be referred as situated recommendation.\nExperiment description To run a realistic setup, we used an existing amusement park: Mirabilandia. Thus, the simulated environment is a real-world map featuring existing paths.\nAfter setting the OpenStreetMap environment, it is essential to deploy nodes on the map. In the current simulation, the elements that are represented by nodes are:\nVisitors, as single individuals or groups; the key point here is that a node should correspond to one or more people using a single wearable device that tracks and guides its owner. Attractions, that can be of different types, such as rides, water slides, restaurants, etc.; they are considered rendezvous points for visitors and are made of several sensors that allow keeping track of various information, such as the number of people waiting in a queue. As previously described, the aim of this simulation is to determine whether a situated recommendation system may help reduce the waiting time needed to benefit from an attraction. In order to achieve this, the project develops and compares two types of simulations with different redirection policies for the visitors:\nRandom Redirection: once a visitor is satisfied by an attraction, it moves towards another attraction which is chosen randomly among all the ones available in the park. Recommended Redirection: once a visitor is satisfied by an attraction, it moves towards the next one accepting a recommendation. The latter may suggest an attraction if it has a short queue and/or if it is close enough to the visitor. Snapshots Results The outcomes of the experiment showed that the situated recommendation system behaves differently depending on the number of visitors. In particular, the expected result is obtained with a lower number of visitors, such as 500. On the other hand, with an higher number, that is 3000 visitors, the average waiting time per attraction increases significantly when using the situated recommendations. The following plots show the average waiting time per attraction, that is the time every visitor waits in a queue before attending the attraction, respectively with 500 and 3000 visitors.",
    "description": "Simulation of people attending attractions inside the Mirabilandia amusement park.",
    "tags": [
      "Experiment",
      "Maps",
      "Export",
      "Protelis"
    ],
    "title": "2022: Situated recommendation system",
    "uri": "/showcase/2022-icps/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Showcase",
    "content": "Simulation publicly available at https://github.com/kelvin-olaiya/SanCarloSquareStampede\nAbstract Understanding the dynamics that emerge during an emergency evacuation is paramount to better tackle the disastrous events that can happen in overcrowded environments.\nMany studies modeled the humans psychology in panicky situations, our goal is to unify these findings with the physiscal interactions.\nOur reference scenario is the stampede happened in Turin’s Piazza San Carlo on June 3 2017. A crowd assembled in front of a public screen to watch the UEFA Champions Leaugue final match (involving a local team). At some point, an event of panic happened (some sources report that some firecrackers went off, others that a group of four robbers used pepper spray). The panic resulted in over 1500 injured people and 2 casualties.\nFirst, we introduced cognitive agents in the simulator to have a representation of the psicological aspects of a pedestrians such as social contagion. Then, we gave those agents the ability of orienting themselves in an environment having different knoledge degrees of the environment. Finally, we introduced elements of physical micro-interaction in order to bring out typicall behaviors such as avoidance and pushing.\nSimulation description For this simulation we placed over 40,000 cognitive nodes on a reproduction of Piazza San Carlo’s map. These nodes represent adults and childs of male and female genders. After that, we placed a “danger zone” at the point where, analyzing the available footages of the tragedy, we deduced that the mass hysteria had begun. We also included rough representations of the barriers using fixed obstacles.\nResults After executing the simulation we can observe how fear is spread amoung the crowd (social contagion). Fleeing pedestrian who have directly witnessed the danger are pushing the other who have not directly seen the danger. This result is the formation of a “pushing wave” similar to the one visibile on the real disaster footage. Looking at some of the various exits from the Squar,e it also possible to observe the so-called Faster is slower effect.\nRelated readings Cognitive agents Orienting agents",
    "description": "Simulation of Piazza San Carlo crowd disaster",
    "tags": [
      "Simulation",
      "Crowd",
      "Mass",
      "Disaster"
    ],
    "title": "2022: Turin's 2017 stampede in simulation",
    "uri": "/showcase/2022-turin/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Showcase",
    "content": "Simulation and detailed description publicly available at https://github.com/angelacorte/vmc-experiments, related to the paper ``An Aggregate Vascular Morphogenesis Controller for Engineered Self-Organising Spatial Structures’’ presented at ACSOS 2024 (DOI available soon).\nAbstract In the field of evolutionary computing, the concept of Vascular Morphogenesis Controller (VMC) has been proposed in to model the growth of artificial structures over time.\nA thorough analysis of the VMC model revealed some limitations:\nassumes the organization structure is a tree, here intended as a directed acyclic graph with a single root and with a single path connecting the root with each leaf; the model is implicitly synchronous, as it assumes that (i) the evaluation of the nodes must proceed from the leaves to the root (and back), and (ii) the update of the whole tree occurs atomically. Although, depending on the context, these assumptions may be acceptable, in general they may induce (possibly hidden) abstraction gaps when VMC is used to model real-world systems, and, at the same time, limit the applicability of the pattern to engineered morphogenetic systems.\nTo address these limitations, in this work, we propose FieldVMC: a generalisation of the VMC model as a field-based computation, in the spirit of the Aggregate Programming (AP) paradigm.\nExperiment description The experiments want to show the capabilities of the proposed model in generating self-organising spatial structures.\nThe goal of this evaluation is to show that the proposed FieldVMC supports the construction of the same structures of its predecessor, and, in addition, that it can work in scenarios not previously investigated. To this end, we designed a set of five experiments:\noneRoot: self-construction from a single node (growth from seed), cutting: self-repair after disruption (network segmentation) with no regeneration (cutting). The segmentation is performed by removing a part of the structure after 500 simulated seconds, and the nodes are not able to regenerate the missing part; graft: self-integration of multiple FieldVMC systems (grafting). Two distinct structures are created, and after 500 simulated seconds, they are merged into a single structure; graftWithMoreLeaders: self-segmentation of a larger structure (budding). Two distinct structures are created with possibly more than leader each; after 500 simulated seconds, they are merged into a single structure; graftWithSpawning: self-optimization of multiple large structures into a more efficient one (abscission and regrowth). Two distinct structures are created, and after 500 simulated seconds, they are merged into a single structure. During the simulation, nodes are able to spawn new nodes and destroy the ones that are not useful anymore, resulting in an optimized structure. Results In all the experiments, the cyan area represents the resource and the yellow area is the success, with darker shades indicating higher values. Nodes are represented as circles. The root is identified by a dark outer circumference.\nThe size of a circle depends on the amount of resource and success received relative to all other nodes in the system: we fix the maximum possible size $D$, we compute the maximum amount of resource $R$ and the maximum amount of success $S$ across all nodes in the system; then, for each node in the system with success $s$ and resource $r$, we determine its size $d$ proportionally to $D$ as $d=\\frac{D (r + s)}{R + S}$. Their color depends on the amount of resource nodes have and is assigned based on the hue of the HSV color space, with the most resource associated with indigo, and the lowest with red.\nDashed lines are communication channels, solid black lines represent the tree structure, and green (resp. orange) lines depict the resource (resp. success) distribution flows, the thicker they are, the more resource (resp. success) is being transferred.\nSome examples of the generated structures are shown below:\nStarting Structure Self-Organised Structure Structure after cutting a part of it Self-Organised Structure after the cutting The images show the evolution of a structure from a starting configuration to a self-organized structure, after a part of the structure has been removed.\nAs seen in the sequence below, the structure evolves from a single node to a more complex structure. Firstly, the structure results to expand towards the center of the available resources. This happens because the spawned nodes are in a zone with higher resources, used as weight in the leader election phase, thus the newly created node gets elected as the new leader, which results in an expansion towards the center of the resource layer. While the root gains more resources, nodes will spawn children based on their local success, meaning that the nodes which sense more success from the environment have higher probability and capabilities to spawn new children, resulting in an expansion towards the center of the success layer. The structure then stabilizes in what appears to be the optimal configuration, and the structure stops evolving.\nSequence of images showing the evolution in time of the structure in the oneRoot experiment.",
    "description": "Simulations related to the generalization of the Vascular Morphogenesis algorithm using the Aggregate Computing paradigm, presented at ACSOS 2024.",
    "tags": [
      "Simulation",
      "Aggregate Computing",
      "Vascular Morphogenesis"
    ],
    "title": "2024: Aggregate Vascular Morphogenesis Controller",
    "uri": "/showcase/2024-fieldvmc/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Showcase",
    "content": "Simulation publicly available at: https://github.com/nicolasfara/experiments-2024-ACSOS-imageonomics-drones\nAbstract One of the best sources of information for biologists and ethologists to study wildlife behavior is video footage; in particular, aerial video footage provides a unique perspective on the behavior of animals in their natural habitat. Numerous wildlife behavioral studies have demonstrated the effectiveness of UAVs for collecting video data of group-living animals. However, in contrast with well-established techniques for static video acquisition, the deployment of UAVs for wildlife video acquisition requires human operators to manually control and coordinate the drones while minimizing disturbance to animals. To scale UAVs missions to obtain sufficient spatiotemporal resolution, reliance on manual operations is impractical. In this paper, we present a decentralized multi-drone coordination system for wildlife video acquisition using UAVs that leverages a novel k-coverage algorithm specifically designed to cover herds. In particular, it is based on a hierarchical clustering approach to find the herds' centroids, then it coordinates multiple drones in a decentralized fashion to cover them from multiple points of view. We introduce a set of metrics to evaluate the effectiveness of the proposed approach via simulation, finding that the proposed approach improves noticeably over the present state of the art.\nSimulation description We evaluate our decentralized multi-drone coordination system for wildlife video acquisition via simulation, comparing it to the current state of the art in the OMOkC problem considering both the quality of the footage and the noise pollution generated by the drones.\nWe chose zebras as target animals, as they are group-living animals known to form herds. Zebras are a common target for wildlife monitoring, and their behavior is well-documented, including recent drone studies.\nWe place UAVs close together in a circular zone with a 200m radius, simulating the mission as starting from a random location in the operation area. The UAVs have a communication range of 1km and move at a maximum speed of $10 \\frac{m}{s}$. Their FoV is parametrized with $R = 100m$, $B = 18m$, $\\beta = 80°$; these values were selected to match those of a commercially available quadcopter.\nPeriodically, with a frequency of 1Hz, the drones execute a loop of the tracking algorithm to select their target. We compared four tracking algorithms:\nsm_av: selects the target closest to the drone; ff_lin_pro: the current best-performing algorithm for distributed OMOkC, which builds and solves a local optimization problem to attribute targets to UAVs; bc_re_c: an extension to the original bc_re algorithm that selects the targets with the worst coverage, equipped with the clustering mechanisms to work on cluster centroids instead; ff_lin_pro_c: a variant of ff_lin_pro algorithm that includes clustering. We investigate a single video acquisition session with the drones operating for 30 simulated minutes.\nThe performance of various algorithms for wildlife tracking is analyzed, highlighting their effectiveness in different scenarios. The original ff_lin_pro algorithm, known for its success in classic OMOkC scenarios, performs poorly in wildlife tracking. However, when adapted with a problem-specific clustering system (ff_lin_pro_c), it outperforms all other algorithms. Detailed results show that while ff_lin_pro achieves better field-of-view (FoV) distance by focusing on tracked animals, it compromises overall coverage.\nWith herd knowledge added, FoV distance worsens due to a broader inclusion of animals in the scene. The proposed ff_lin_pro_c approach scales well with the number of cameras and performs best for 1- and 3-coverage with sufficient UAVs. Despite higher noise levels from closer UAV positioning, the noise remains within acceptable limits for wildlife monitoring.\nSnapshots",
    "description": "Simulation of decentralized multi-drone coordination for wildlife video acquisition.",
    "tags": [
      "Simulation",
      "Imageonomics",
      "Drones",
      "Protelis"
    ],
    "title": "2024: Decentralized Multi-Drone Coordination for Wildlife Video Acquisition",
    "uri": "/showcase/2024-acsos-imageonomics/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Preparation",
    "content": "Although we recommend to run the simulator via Gradle, Alchemist can be executed through the redistributable jar file.\nSuch jar file can be downloaded from the releases section on github.\nObtain the runnable jar of alchemist-full from GitHub, the open a terminal and move to the folder where the jar is located, then issue:\njava -jar alchemist-full-VERSION-all.jar --help Remember to substitute VERSION with the Alchemist version you actually have downloaded. You can still use alchemist in a modularized form using jars. In this case, use alchemist-VERSION-all.jar and all the jars corresponding to the modules you need. Pass them to the java command as classpath, e.g.:\njava -cp alchemist-VERSION-all.jar:alchemist-incarnation-protelis-VERSION-all.jar:alchemist-swingui-VERSION-all.jar it.unibo.alchemist.Alchemist --help Under Windows, the separator is ; in place of :\nThis command will print information on the available command line options.",
    "description": "The recommended way to run the simulator and fetch all the required modules.",
    "tags": [
      "Gradle",
      "Run",
      "Launch",
      "Example",
      "Jar",
      "Shadowjar",
      "Fatjar"
    ],
    "title": "Alchemist stand-alone",
    "uri": "/howtos/preparation/jar/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Preparation",
    "content": "We recommend to start by generating a new GitHub repository through the Alchemist Primer template repository.\nWe report here the README.md file contents as reference\nAlchemist Primer README file Info Although Alchemist requires Java 11 or above to run, Gradle users can rely on any Gradle-compatible Java version and leverage the Gradle toolchains to obtain an Alchemist-compatible Java Virtual Machine.",
    "description": "The recommended way to run the simulator and fetch all the required modules.",
    "tags": [
      "Gradle",
      "Run",
      "Launch",
      "Example"
    ],
    "title": "Alchemist via Gradle",
    "uri": "/howtos/preparation/gradle/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Explanation",
    "content": "Biochemistry is an incarnation of Alchemist developed to provide support for biochemical reactions that take place inside a biological cell or a group of those surrounded by a common environment.\nThe Biochemistry Incarnation The Biochemistry incarnation provides ways to:\nManage the creation, destruction and relocation of a molecule (which can be either a simple atom or a complex protein) inside a cell or from a cell to another Create junctions between cells using a specified amount of molecules. The junctions are modeled in a general way, but with a simple use of actions and conditions it will be possible to create tight junctions, anchoring junctions, gap junctions and even custom one Move a cell inside its environment in different ways, handling collisions between two ore more of them in a simple but effective way The Biochemistry DSL Biochemistry programs are encapsulated inside the YAML configuration file with a simple and human-readable syntax. Those simple reactions can be written in the section programs of the configuration file, as value of the program key:\nprograms: - - time-distribution: 1 program: \"[ATP] --\u003e [ADP] + [P]\" Reactions A reaction rule can be set using the symbol --\u003e according to chemistry equations, and placing both the molecules and the actions inside two square brackets (ex. [OH], [H2O], [BrownianMove(0.1)])\nThe following line, so, represents a basic chemical reaction that happens inside a cell: [H] + [OH] --\u003e [H2O]\nHowever, reactions can also take place outside the cell itself. Biological cells, indeed, can swap molecules with its neighbour or the surrounding environment, and this is possible in Alchemist too, using the keywords: in cell, in neighbour and in env.\nThe reaction [A in env] --\u003e [A in cell] moves the molecule A from the environement inside the cell.\nIf the location is not explicit, it is assumed the molecule to be inside the cell.\nJunctions A junction can be created just with a neighbor of the programmed cell.\nThe way to create it is with the syntax [X] + [Y in neighbor] --\u003e [junction X-Y], which means that when this reaction happens a junction using the molecule X from the cell and the molecule Y from the neighbor will be created.\nThe junction can also be destroyed using the syntax [junction X-Y] --\u003e [], causing the reintroduction of the molecule X inside the cell and the molecule Y inside the neighbor.\nAlso, the junction will be automatically removed if, because of their movement, the cells will stop being in a neighborhood.\nCustom Conditions Any custom condition must be placed after the reaction products following an if clause.\nFor example, to create a molecule if the cell has at least three neighbor you would write:\n[] --\u003e [X] if NumberOfNeighborsGreaterThan(5)\nMovement A movement can be performed in the same way of a reaction, using the function as it is a product of the reaction itself.\nThis program constantly moves a cell without any other condition:\n[] --\u003e [BrownianMove(0.1)]\nCollisions The Biochemistry Incarnation supports cell collisions and deformations too.\nIn order to do that, however, you must set this environment:\nenvironment: type: BioRect2DEnvironmentNoOverlap Then, when creating the cells, you must use these specific implementations:\nnodes: type: CircularDeformableCellImpl parameters: [max-radius, rigidity] The minimum radius of the cell is so that min-radius = rigidity * max-radius and the two parameters are used to compute collisions and impacts between the cells.",
    "description": "Basics of the biochemistry incarnation.",
    "tags": [
      "Biochemistry",
      "Molecule",
      "Reaction",
      "Junction"
    ],
    "title": "Biochemistry Incarnation",
    "uri": "/explanation/biochemistry/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Reference",
    "content": "The Biochemistry DSL Biochemistry programs are written in a and human-readable syntax. Valid programs can be written directly into Those simple reactions can be fed directly as program in the YAML file.\nReactions A reaction rule can be set using the symbol --\u003e according to chemistry equations, and placing both the molecules and the actions inside two square brackets (ex. [OH], [H2O], [BrownianMove(0.1)])\nThe following line represents a basic chemical reaction that happens inside a cell: [H] + [OH] --\u003e [H2O]\nHowever, reactions can also take place outside cells. Biological cells, indeed, can swap molecules with its neighbour or the surrounding environment, and this is possible in Alchemist too, using the keywords: in cell, in neighbour and in env.\nThe reaction [A in env] --\u003e [A in cell] moves the molecule A from the environement inside the cell.\nIf the location is not explicit, it is assumed the molecule to be inside the cell.\nJunctions A junction can be created just with a neighbor of the programmed cell.\nThe way to create it is with the syntax [X] + [Y in neighbor] --\u003e [junction X-Y], which means that when this reaction happens a junction using the molecule X from the cell and the molecule Y from the neighbor will be created.\nThe junction can also be destroyed using the syntax [junction X-Y] --\u003e [], causing the reintroduction of the molecule X inside the cell and the molecule Y inside the neighbor.\nAlso, the junction will be automatically removed if, because of their movement, the cells will stop being in a neighborhood.\nCustom Conditions Any custom condition must be placed after the reaction products following an if clause. For example, to create a molecule if the cell has at least three neighbor you would write:\n[] --\u003e [X] if NumberOfNeighborsGreaterThan(5)\nMovement A movement can be performed in the same way of a reaction, using the function as it is a product of the reaction itself. This program constantly moves a cell without any other condition:\n[] --\u003e [BrownianMove(0.1)]\nCollisions The Biochemistry Incarnation supports cell collisions and deformations too.\nIn order to do that, however, the environment must feature appropriate support, as for instance BioRect2DEnvironmentNoOverlap.\nThe cells must support deformation as well, as, for instance, a node with the CircularDeformableCell property.\nThe minimum radius of the cell is so that min-radius = rigidity * max-radius and the two parameters are used to compute collisions and impacts between the cells.",
    "description": "Reference documentation of the reactions language for the biochemistry incarnation.",
    "tags": [
      "Biochemistry",
      "Molecule",
      "Junction"
    ],
    "title": "Biochemistry Incarnation",
    "uri": "/reference/biochemistry/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Explanation",
    "content": "Alchemist is capable of simulating the movement of pedestrians with sophisticated cognitive capabilities:\nThe animation above shows an adult male with no previous knowledge of the environment trying to reach the destination marked green.\nTypes of pedestrian There are three basic types of pedestrian, each representing a more sophisticated version of the previous one. These are derived from the work of van der Wal et al.\nHomogeneous Pedestrians: Nodes with no peculiar characteristic. Heterogeneous pedestrians have an age and a gender, based on which their speed, compliance to rules, and social attitudes are computed. Cognitive pedestrians are heterogeneous pedestrians with cognitive capabilities. They have an emotional state and are able to influence and be influenced by others with the same capabilities. As an example, cognitive pedestrians can perceive fear via social contagion (e.g. seeing other people fleeing may cause them flee as well regardless of whether they’ve seen the danger directly). Orienting pedestrians, as shown in the animation on the top of the page, can be equipped with different knowledge degrees of the environment. To do so, a particular type of pedestrian called orienting pedestrian is required: this is derived from the work of Andresen et al. Types of behaviors There are two macro-categories of behaviours:\nthose inspired to Reynold’s steering behaviors, which operate in a greedy fashion, i.e. performing only local choices; those inspired to the work of Andresen et al, which exploit the spatial information available to orienting pedestrians in order to navigate the environment consciously (e.g. without getting stuck in U-shaped obstacles). Note that these actions do not assume that pedestrians have global knowledge of the environment, on the contrary only the spatial information available to a pedestrian is used to move it (which can be little or nothing). Navigation memory model Each time a pedestrian enters a new room (= environment’s area), all the visible doors are weighted, the one with minimum weight is then crossed. The weighting system used in Alchemist is derived from the one by Andresen et al, here’s a brief description of the factors included, these are multiplied to get the final weight.\nName Description volatileMemoryFactor Takes into account the information stored in the pedestrian’s volatile memory (= a map pairing each room with the number of visits, models the ability to remember areas of the environment already visited since the start of the simulation). It is computed as 2^v where v is the number of visits to the area the edge being weighted leads to (in other words, less visited rooms are preferred). congestionFactor Takes into account the congestion of the area the edge being weighted leads to (it is assumed that the pedestrian can estimate the congestion level of a neighboring room). It is computed as density of the area + 1, so as to have a value in [1,2] (less crowded rooms are preferred). impasseFactor Takes into account whereas a door leads to a known impasse or not, known impasses are given knownImpasseWeight (see hardcoded parameters below), otherwise this factor assumes unitary value. suitabilityFactor This factor is used when the pedestrian is moving towards a target: each door is given an integer rank indicating its suitability in order to reach the target (ranks are computed taking into account the target and the door locations, as well as the geometry of the current room). The factor for each door is computed as 1-0.5^rank. Physical pedestrians Physical pedestrians are capable of pushing and bumping into each other. Physical pedestrians are inspired to the work of Pelechano et al.\nFurther references C. Natalie van der Wal, Daniel Formolo, Mark A. Robinson, Michael Minkov, Tibor Bosse\nSimulating Crowd Evacuation with Socio-Cultural, Cognitive, and Emotional Elements\nTransactions on Computational Collective Intelligence XXVII. 2017.\nCraig W. Reynolds\nSteering Behaviors for Autonomous Characters. 1999.\nErik Andresen, Mohcine Chraibi \u0026 Armin Seyfried\nA representation of partial spatial knowledge: a cognitive map approach for evacuation simulations\nNuria Pelechano, Jan M. Allbeck, Norman I. Badler\nControlling Individual Agents in High-Density Crowd Simulation",
    "description": "Agents with realistic human behavior.",
    "tags": [
      "Cognitive",
      "Pedestrian",
      "Agents"
    ],
    "title": "Cognitive Agents",
    "uri": "/explanation/cognitive/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "We recommend to read our explanation of the cognitive agents to better understand the contents of this how-to.\nDifferent kinds of pedestrians are obtainable by attaching NodePropertys to nodes (e.g GenericNode). Common properties concern abilities such as perceiving other nodes (PerceptiveProperty) and occuping space in an environment (OccupiesSpaceProperty).\nHomogeneous Pedestrian As shown in the example below, this kind of pedestrian is obtained by attaching the Pedestrian property.\nClick to show / hide code incarnation: protelis environment: type: ContinuousPhysics2DEnvironment deployments: - type: Circle parameters: [100, 0, 0, 20] properties: - type: Pedestrian - type: Perceptive2D - type: CircularArea - type: Social Heterogeneous Pedestrian The age groups available are: child, adult, and elderly; alternatively, if the exact age is specified, they are assigned to one of the aforementioned groups automatically. The genders available are: male and female. This informations is included in the Human property and it is used by the HeterogeneousPedestrian property, along with the age.\nClick to show / hide code incarnation: protelis environment: type: ContinuousPhysics2DEnvironment deployments: - type: Circle parameters: [50, 0, 0, 20] properties: - type: Human parameters: [\"elderly\", \"female\"] - type: HeterogeneousPedestrian - type: Perceptive2D - type: CircularArea - type: Circle parameters: [50, 0, 0, 20] properties: - type: Human parameters: [\"child\", \"male\"] - type: HeterogeneousPedestrian - type: Perceptive2D - type: CircularArea Cognitive Pedestrian Cognitive pedestrians are heterogeneous pedestrians with cognitive capabilities given by a CognitiveProperty. They have an emotional state and are able to influence and be influenced by others with the same capabilities. As an example, cognitive pedestrians can perceive fear via social contagion (e.g. seeing other people fleeing may cause them flee as well despite they haven’t directly seen the danger). To express how a cognitive pedestrians move, based on their emotional state, attach the CognitivePedestrian property.\nClick to show / hide code incarnation: protelis environment: type: ContinuousPhysics2DEnvironment _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [1.0] type: CognitiveBehavior deployments: - type: Circle parameters: [50, 0, 0, 20] properties: - type: Human parameters: [\"adult\", \"male\"] - type: Perceptive2D - type: CognitivePedestrian - type: Cognitive2D - type: CircularArea programs: - *behavior - type: Circle parameters: [50, 0, 0, 20] properties: - type: Human parameters: [\"adult\", \"female\"] - type: Perceptive2D - type: CognitivePedestrian - type: Cognitive2D - type: CircularArea programs: - *behavior Homogeneous orienting pedestrian These are homogeneous pedestrians that can be equipped with a given knowledge degree of the environment. Such quantity is a Double value in [0,1] describing the percentage of environment the pedestrian is familiar with prior to the start of the simulation (thus it does not take into account the knowledge the pedestrian will gain during it). Note that despite their name (“homogeneous”), knowledge degrees of different homogeneous orienting pedestrians may differ, and even pedestrians with the same knowledge degree can be different as each one can be familiar with different portions of the environment. Be also aware that orienting pedestrians can only be placed in an EnvironmentWithGraph which is a type of environment providing a navigation graph. In order to give a node orienting capabilities enhance a node with an OrientingProperty.\nClick to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: path: planimetry.png zoom: 0.05 deployments: - type: Point parameters: [2, 2] properties: - type: Pedestrian - type: CircularArea - type: Orienting2D parameters: [0.5] Cognitive orienting pedestrian These are cognitive pedestrians equipable with a given knowledge degree of the environment.\nClick to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: path: planimetry.png zoom: 0.05 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [1.0] type: CognitiveBehavior deployments: - type: Point parameters: [2, 2] properties: - type: Human parameters: [\"adult\", \"male\"] - type: Perceptive2D - type: CognitivePedestrian - type: Cognitive2D - type: Orienting2D parameters: [0.5] programs: - *behavior Groups It is likely that a pedestrian doesn’t move on its own, but there is a group consisting of multiple people which are related each other and whose behaviors are strictly dependent on that structure. The only way you can currently assign a group to a pedestrian is by creating it as a variable and passing it as a parameter when the Nodes created are of pedestrian type. If you don’t specify any group in this phase, automatically a new group of type Alone is assigned.\nThe following simulation example loads two groups of homogeneous pedestrians representing friends around the center of the scene, one having 10 members and the other 15.\nClick to show / hide code incarnation: protelis environment: type: ContinuousPhysics2DEnvironment variables: group1: \u0026group1 formula: it.unibo.alchemist.model.cognitive.groups.GroupFactory.friends() language: kotlin group2: \u0026group2 formula: it.unibo.alchemist.model.cognitive.groups.GroupFactory.friends() language: kotlin deployments: - type: Circle parameters: [10, 0, 0, 20] properties: - type: Pedestrian - type: Perceptive2D - type: CircularArea - type: Social parameters: [*group1] - type: Circle parameters: [15, 0, 0, 20] properties: - type: Pedestrian - type: Perceptive2D - type: CircularArea - type: Social parameters: [*group2] Steering Actions Steering actions are Actions whose purpose is moving a node inside an environment. These actions can be divided into two categories:\ngreedy, i.e. performing only local choices; NavigationActions, which exploit the spatial information available to orienting pedestrians in order to navigate the environment consciously (e.g. without getting stuck in U-shaped obstacles). For a complete overview of the available actions refer to the api documentation. The creation of complex movements can be accomplished by combining different steering actions together. The only way currently available to do so is by using some SteeringBehavior extending Reaction, which can recognize, across all the actions specified, the steering ones to trait them in a separate way.\nIn this simulation 50 people wander around the environment and, if they are approaching an obstacle, they avoid it.\nClick to show / hide code incarnation: protelis environment: type: ImageEnvironment parameters: [planimetry.png] _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [3.0] type: PrioritySteering actions: - type: HeadTowardRandomDirection - type: CognitiveAgentWander parameters: [6, 4] - type: CognitiveAgentObstacleAvoidance parameters: [4] deployments: - type: Circle parameters: [50, 0, 0, 25] properties: - type: Pedestrian - type: Perceptive2D - type: CircularArea - type: Social programs: - *behavior Steering Strategies In order to decide the logic according to which the different steering actions must be combined, the concept of steering strategy has been introduced and related to it different reactions are available to be used with the aim of computing the desired route for the pedestrians. If you want a pedestrian to execute a single steering action at a time, PrioritySteering is a reaction which gives relevance only to the steering action whose target point is the nearest to the current pedestrian position. If you want a pedestrian to execute a movement considering multiple actions at a time, BlendedSteering weights them considering their target distance to the current pedestrian position. There is no limit to the number of steering actions which can be used together but some messy compositions can result in unpredictable behaviors, so pay attention.\nIn the example below a pedestrian reaches a point of interest, avoiding in the meantime to approach another position.\nClick to show / hide code incarnation: protelis environment: type: ContinuousPhysics2DEnvironment _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [1.0] type: BlendedSteering actions: - type: CognitiveAgentSeek parameters: [1000, 500] - type: CognitiveAgentFlee parameters: [500, -500] deployments: - type: Point parameters: [0, 0] properties: - type: Pedestrian - type: Perceptive2D - type: CircularArea - type: Social programs: - *behavior Danger and evacuations Pedestrians can be loaded in any kind of Environment but it is recommended to use PhysicsEnvironments since they have properties such as non-overlapping shapes which are advisable to be taken into consideration when working with a crowd. To specify the existence of a potential danger or a significative zone in general inside the environment you can use Layers. You must specify to any cognitive pedestrian the Molecule representing danger in the Environment, otherwise it won’t have the ability to recognize its presence.\nIn the following example, 100 adult females with cognitive capabilities get away from a zone in the environment where there is a potential danger.\nClick to show / hide code incarnation: protelis variables: danger: \u0026danger formula: \"\\\"danger\\\"\" environment: type: ContinuousPhysics2DEnvironment layers: - type: BidimensionalGaussianLayer molecule: *danger parameters: [0.0, 0.0, 20.0, 15.0] _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [1.0] type: CognitiveBehavior actions: - type: CognitiveAgentAvoidLayer parameters: [*danger] deployments: - type: Circle parameters: [100, 0, 0, 50] properties: - type: Human parameters: [\"adult\", \"female\"] - type: Perceptive2D - type: CognitivePedestrian - type: Cognitive2D - type: CircularArea programs: - *behavior Hardcoded parameters Here’s a list of all the hardcoded parameters.\nName Value Description knownImpasseWeight 10 Weight assigned to known impasses (= areas with a single door). It’s usually a high value, allowing to avoid them. toleranceAngle 45 degrees Used by SinglePrevalent, that linearly combines multiple steering actions (= multiple forces) assuming one of them is prevalent. Weights for the linear combination are determined so that the resulting force forms with the prevalent one an angle smaller than or equal to the tolerance angle. The prevalent force usually wants to move the pedestrian consciously, whereas other forces are more “greedy”. The purpose of the tolerance angle is allowing to steer the pedestrian towards the target defined by the prevalent force, while using a trajectory which takes into account other urges as well. alpha 0.5 Used by SinglePrevalent, an exponential smoothing with this alpha is applied to the resulting force in order to reduce oscillatory movements. maxWalkRatio 0.3 Used by SinglePrevalent. When the pedestrian is subject to contrasting forces the resulting one may be small in magnitude, hence a lower bound for such quantity is set to (maximum distance walkable by the pedestrian) * (this parameter) so as to avoid extremely slow movements. delta 0.05 Used by SinglePrevalent. The weight assigned to disturbing forces is set to 1 and then iteratively decreased by delta until the resulting force satisfies the required conditions (see the api). This is similar to a gradient descent. Physical pedestrians Physical pedestrians are capable of pushing and bumping into each other. To express those physical interactions use a PhysicalPedestrian property.\nPhysical steering strategies In order to work properly, physical pedestrians should be equipped with physical steering strategies. Such strategies define how steering actions (which are intentional) are combined with physical forces (which are mostly unintentional). At present, only PhysicalBlendedSteering and NavigationPrioritizedSteeringWithPhysics are available.\nHere’s a simple code for loading a homogeneous pedestrian with physical properties with CognitiveAgentSeek and CognitiveAgentFlee:\nClick to show / hide code incarnation: protelis environment: type: EnvironmentWithDynamics parameters: path: planimetry.png zoom: 0.05 deployments: - type: Point parameters: [2, 2] properties: - type: Pedestrian - type: PhysicalPedestrian2D - type: Perceptive2D - type: CircularArea - type: Social programs: - time-distribution: type: DiracComb parameters: [1.0] type: PhysicalBlendedSteering actions: - type: CognitiveAgentSeek parameters: [1000, 500] - type: CognitiveAgentFlee parameters: [500, -500]",
    "description": "Agents with realistic human behavior.",
    "tags": [
      "Cognitive",
      "Pedestrian",
      "Agents"
    ],
    "title": "Cognitive Agents",
    "uri": "/howtos/simulation/cognitive/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Reference",
    "content": "The CLI Interface Alchemist utilizes a CLI interface to run a simulation.\nA minimal launch looks like this:\nrun --simulationFile simulation.yml Where the options are\nrun - Tells that Alchemist simulation is to be runned --simulationFile - Indicates the resource or path to the resource for the simulation configuration file Logging Verbosity Unless specifies, Alchemist logs with the warn logging level by default. Logging level tells how verbose and throrough the outputted logs are.\nAlchemist has the following logging levels avaialble (from less to most verbose):\noff debug info warn error all In order to specify verbosity, the --verbosity option can be used:\nrun --simulationFile simulation.yml --verbosity error Overriding Variables Alchemist parses the configuration variables from the simulation configuration file. In some cases it may be desirable to override some of the simulation file variables without resorting to creating a new file. For such cases, --override option is available. This options takes in input a valid yaml string representing the part of the configuration file to be overriden.\nFor example, given configuration file simulation.yml:\nfoo: bar: fizz: 42 buzz: some-string And override with\nrun --simulationFile simulation.yml --override foo: bar: buzz: 3 The resulting simulation file would be equivalent to\nfoo: bar: fizz: 42 buzz: 3 The overrides are arbitrary, types can be changed and new varibales introduced.\nLauncher Configuration Alchemist needs a Launcher class in order to run the simulation. Unless configured, Alchemist will default to a launcher that runs the default configuration, unless batch variables are explicitly provided: DefaultLauncher\nIf you would like to use another launcher class, you need to configure it in the simulation configuration file as per the alchemist Arbitrary class loading system.\nHere is an example of a headless simulation run with additional parameters:\ncli options\nrun --simulationFile simulation.yml simulation.yml\n... launcher: type: DefaultLauncher parameters: parallelism: 4 variables: [ 1, 2, 3, 4 ] ... Migrating From Legacy CLI Here is a brief guide on how to re-map legacy CLI configuration options to the new configuration flow.\n-hl - Migrated to launcher configuration, use DefaultLauncher -var - Migrated to launcher configuration, used as parameters in supporting launchers -b - Migrated to launcher configuration -fxui - Migrated to launcher configuration -d - Migrated to launcher configuration -g - Migrated to launcher configuration, used as parameters in supporting launchers -h - Removed -s - Migrated to launcher configuration, used as parameters in supporting launchers -p - Migrated to launcher configuration, used as parameters in supporting launchers -t - Removed, use termination conditions instead (see examples below) -y - Removed, provide simulation file directly as program argument -w - Migrated to launcher configuration Common Launch Configurations Snippets SwingGUI Launch configuration\n... monitors: type: SwingGUI parameters: graphics: /effects/some-effect.json ... Terminate after 50 time units configuration\n... terminate: - type: AfterTime parameters: 50 ...",
    "description": "Available CLI options.",
    "tags": [
      "Cli",
      "Command Line",
      "Options",
      "Batch",
      "Variables"
    ],
    "title": "Command Line interface",
    "uri": "/reference/cli/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "Alchemist nodes can connect to each other and form a network.\nThe network-model key is used to load the implementation of LinkingRule to be used in the simulation, which determines the neighborhood of every node.\nThe key is optional, but defaults to NoLinks, so, if unspecified, nodes in the environment don’t get connected.\nOmitting the key is equivalent to writing any of the following:\nnetwork-model: type: NoLinks network-model: type: NoLinks parameters: [] Linking nodes based on their respective distance One of the most common ways of linking nodes is to connect those which are close enough to each other. To do so, you can use ConnectWithinDistance, passing a parameter representing the maximum connection distance.\nNote that such distance depends on the environment: while the definition of distance is straightforward for euclidean spaces, it’s not so for Riemannian manifolds, which is a fancy name to define manifolds such as the one typical of a urban map (you can roughly interpret it as a euclidean space “with holes”).\nFor instance, in case of environments using GeoPosition, the distance is computed in meters, so the distance between [44.133254, 12.237770] and [44.146680, 12.258627] is about 2240 (meters).\nIn the following example, nodes are connected when closer than a threshold: Click to show / hide code incarnation: sapere # The incarnation is always mandatory network-model: type: ConnectWithinDistance # Loads a class with this name implementing LinkingRule parameters: [2] # Connection radius (parameter of a ConnectWithinDistance's constructor) deployments: - type: Point # Loads a class with this name implementing Deployment parameters: [0, 0] # Coordinates - { type: Point, parameters: [0.5, 0.85] } - { type: Point, parameters: [-0.5, 0.85] }",
    "description": "Define how nodes should be connected with each other.",
    "tags": [
      "Network",
      "Linking Rule",
      "Network Model",
      "Connect",
      "Connection",
      "Neighborhood"
    ],
    "title": "Create a network",
    "uri": "/howtos/simulation/link/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "It is possible to define overlays (layers) of data that can be sensed everywhere in the environment. Layers can be used to model physical properties, such as pollution, light, temperature, and so on. As opposed to nodes’ contents, layers have no dependency optimization. This implies that reactions that read values from layers should have special care in defining their context appropriately.\nLayers are created with the type/parameter syntax, as in this example:\nClick to show / hide code incarnation: sapere environment: type: Continuous2DEnvironment parameters: [] layers: - type: StepLayer parameters: [2, 2, 100, 0] molecule: A - type: StepLayer parameters: [-2, -2, 0, 100] molecule: B The following example shows the syntax for initializing multiple BidimensionalGaussianLayers:\nClick to show / hide code incarnation: protelis _danger: \u0026danger danger _target: \u0026target targe environment: type: ContinuousPhysics2DEnvironment layers: - type: BidimensionalGaussianLayer molecule: *danger parameters: [80, 0, 100, 20] - type: BidimensionalGaussianLayer molecule: *target parameters: [-50, 0, 10, 50] seeds: scenario: 0 simulation: 1 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [2.0] type: BlendedSteering actions: - type: CognitiveAgentAvoidLayer parameters: [*danger] - type: CognitiveAgentFollowLayer parameters: [*target] conditions: - type: WantToEscape - time-distribution: type: DiracComb parameters: [0.5] type: CognitiveBehavior actions: - type: HeadTowardRandomDirection _nodes: \u0026nodes properties: - type: Human parameters: [ \"adult\", \"male\" ] - type: CognitivePedestrian - type: Cognitive2D parameters: [ *danger ] - type: Perceptive2D - type: CircularArea programs: *behavior deployments: - type: Circle parameters: [25, 0, 0, 8] \u003c\u003c: *nodes - type: Circle parameters: [75, 60, 0, 10] \u003c\u003c: *nodes If the target layer is written in Kotlin, it can be loaded using named parameters, which arguably reads more clearly.\nClick to show / hide code incarnation: protelis network-model: type: ConnectWithinDistance parameters: [6] deployments: type: Rectangle parameters: [1, 0, 0, 100, 100] contents: molecule: grain concentration: 5 layers: - molecule: layer type: BidimensionalGaussianLayer parameters: centerX: 30 centerY: 30 norm: 30 sigmaX: 15",
    "description": "Define data layers that live in the environment",
    "tags": [
      "Layer",
      "Layers",
      "Data",
      "Pollution",
      "Light",
      "Temperature"
    ],
    "title": "Create Layers",
    "uri": "/howtos/simulation/layers/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "Configuration of the environment Create rich environments Contents Find paths indoorsHow to navigate the environment, especially indoors.\nMaps and GPS tracesHow to simulate using maps and GPS traces.\nSimulate indoorHow to create indoor environments based on planimetries.\nSimulate physical interactions among pedestriansPhysical interaction between nodes",
    "description": "How to create complex environments (obstacles, and so on)",
    "tags": [],
    "title": "Create rich environments",
    "uri": "/howtos/simulation/environment/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Reference",
    "content": "The current default UI is set to the Java Swing Graphical Interface, refer to its reference guide.",
    "description": "Redirect page for the current default graphical interface",
    "tags": [
      "Gui",
      "Graphical Interface"
    ],
    "title": "Default Graphical User Interface",
    "uri": "/reference/default-ui/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "Displacement of nodes and group of nodes inside the simulated environment Deploy nodes Contents (Irregular) GridsDeployment of nodes in (possibly irregular) grids.\nNodes inside shapesDeployment of nodes randomly inside arbitrary shapes.\nGPS TracesDeployment of nodes on map-based environments using GPS data.\nGraphsDeployment of nodes into arbitrary graphs.",
    "description": "How to place nodes within Alchemist environments",
    "tags": [],
    "title": "Deploy Nodes",
    "uri": "/howtos/simulation/deploy/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides",
    "content": "One-time changes or additions to the simulator behavior Experiment-specific extensions Contents",
    "description": "One-time changes or additions to the simulator behavior",
    "tags": [],
    "title": "Experiment-specific extensions",
    "uri": "/howtos/extensions/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "The simulator provides tools for exporting data automatically. An export section on the simulation file instructs which data is considered interesting, and should be thus exported with the selected sampling frequency. Data can be exported separately for each node, or can be aggregated on the fly using any univariate statistic function (e.g., mean, sum, product, percentile, median…). The treatment of missing or non-finite values can be specified as well. Results are exported in comma-separated values files, easily importable in a variety of data analysis tools.\nData export is realized by Exporters. Exporters are defined in the export section of the configuration, by specifying their type, their constructor parameters, and the data they should export. The elements under data must be instanceable implementations of Extractor.\nExport data as CSV Alchemist can export data to a custom comma-separated-values format. This is the classic way data is exported from the simulator, and relies on CSVExporter.\nExamples Export of the output of a Protelis program every 3 simulated seconds: Click to show / hide code incarnation: protelis export: - type: CSVExporter parameters: fileNameRoot: \"test_export_interval\" interval: 3.0 data: - time - molecule: \"default_module:default_program\" Export data to both a csv file and a MongoDB instance: Click to show / hide code incarnation: protelis export: - type: CSVExporter parameters: fileNameRoot: \"test_exporters_loading\" interval: 2.0 data: - time - molecule: \"default_module:default_program\" - type: MongoDBExporter parameters: uri: \"mongodb://localhost:27017/\" dbName: \"test\" interval: 2.5 data: - time Export of the MeanSquaredError of some custom properties: Click to show / hide code incarnation: protelis export: - type: CSVExporter parameters: [\"test-custom-export\"] data: - type: MeanSquaredError parameters: [ \"A\", \"A\", product, \"A\", \"A\" ] Export of the output of a Protelis program, values generated from nodes get accumulated into mean, max, min, variance, and median: Click to show / hide code incarnation: protelis variables: zoom: \u0026zoom formula: 0.1 image_name: { formula: \"'chiaravalle.png'\" } image_path: \u0026image_path language: kotlin formula: \u003e import java.io.File File(\"../..\").walkTopDown().find { image_name in it.name }?.absolutePath ?: image_name walking_speed: \u0026walk-speed { default: 1.4, min: 1, max: 2, step: 0.1 } seed: \u0026seed { default: 0, min: 0, max: 99, step: 1 } scenario_seed: \u0026scenario_seed { formula: (seed + 31) * seed } people_count: \u0026people_count type: GeometricVariable parameters: [300, 50, 500, 9] seeds: { simulation: *seed, scenario: *scenario_seed} export: - type: CSVExporter parameters: fileNameRoot: \"00-testing_csv_export\" data: - time - molecule: \"default_module:default_program\" aggregators: [ mean, max, min, variance, median ] value-filter: onlyfinite - type: CSVExporter parameters: fileNameRoot: \"fixed-decimals\" data: - type: Time parameters: precision: 2 - molecule: \"default_module:default_program\" property: \"self.nextRandomDouble()\" precision: 2 aggregators: [ mean, max, min, variance, median ] value-filter: onlyfinite environment: { type: ImageEnvironment, parameters: [*image_path, *zoom] } network-model: { type: ObstaclesBreakConnection, parameters: [5] } deployments: type: Rectangle parameters: [*people_count, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send - { type: Event, time-distribution: 1, actions: { type: LevyWalk, parameters: [*walk-speed] } } terminate: - type: AfterTime parameters: 10 Export data to a MongoDB instance Alchemist can send data directly to a pre-existing MongoDB instance through its MongoDBExporter.\nExamples Export data to both a csv file and a MongoDB instance: Click to show / hide code incarnation: protelis export: - type: CSVExporter parameters: fileNameRoot: \"test_exporters_loading\" interval: 2.0 data: - time - molecule: \"default_module:default_program\" - type: MongoDBExporter parameters: uri: \"mongodb://localhost:27017/\" dbName: \"test\" interval: 2.5 data: - time Export of the output of a Protelis program, values generated from nodes get accumulated into mean, max, min, variance, and median: Click to show / hide code incarnation: protelis variables: zoom: \u0026zoom formula: 0.1 image_name: { formula: \"'chiaravalle.png'\" } image_path: \u0026image_path language: kotlin formula: \u003e import java.io.File File(\"../..\").walkTopDown().find { image_name in it.name }?.absolutePath ?: image_name walking_speed: \u0026walk-speed { default: 1.4, min: 1, max: 2, step: 0.1 } seed: \u0026seed { default: 0, min: 0, max: 99, step: 1 } scenario_seed: \u0026scenario_seed { formula: (seed + 31) * seed } people_count: \u0026people_count type: GeometricVariable parameters: [10, 50, 500, 9] seeds: { simulation: *seed, scenario: *scenario_seed} export: - type: MongoDBExporter parameters: uri: \"mongodb://localhost:27017/\" dbName: \"test\" interval: 2.0 data: - time - molecule: \"default_module:default_program\" aggregators: [ mean, max, min, variance, median ] value-filter: onlyfinite environment: { type: ImageEnvironment, parameters: [*image_path, *zoom] } network-model: { type: ObstaclesBreakConnection, parameters: [50] } deployments: type: Rectangle parameters: [*people_count, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send - { type: Event, time-distribution: 1, actions: { type: LevyWalk, parameters: [*walk-speed] } } terminate: - type: AfterTime parameters: 3",
    "description": "Select which data the simulator should output, in which format, and where.",
    "tags": [
      "Data",
      "Export",
      "Csv",
      "Mongodb",
      "Data Analysis"
    ],
    "title": "Export data",
    "uri": "/howtos/simulation/export/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation \u003e Create rich environments",
    "content": "The background regarding the navigation system is explained here.\nGenerating navigation graphs from images If your environment is codified as an image, generating a navigation graph is straight-forward. All you have to do is mark the areas of the environment where to plant initial seeds in blue (RGB #0000FF). In the image below you can see the generation of a navigation graph. The blue regions in the original image indicate where to plant initial seeds. These are then grown and crossings are found between them.\nOnce you have your image ready for the generation of the navigation graph, you can exploit the ImageEnvironmentWithGraph class to produce it for you. This will read your image, extract the positions you marked blue and pass them to the NaviGator algorithm.\nExamples Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: [images/building-planimetry.png, 0.1] seeds: scenario: 0 simulation: 1 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [3.0] type: PrioritySteering actions: - type: CognitiveAgentReachDestination parameters: [135, 15] deployments: - type: Point parameters: [15, 15] properties: - type: CircularArea - type: Orienting2D parameters: [1.0] - type: Pedestrian - type: Social programs: - *behavior Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: [images/congestion-avoidance.png, 0.1] seeds: scenario: 0 simulation: 2 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [1.0] type: PrioritySteering actions: - type: CognitiveAgentReachKnownDestination parameters: [10, 55] deployments: - type: Point parameters: [70, 50] properties: - type: CircularArea - type: Orienting2D parameters: [1.0] - type: Pedestrian - type: Social programs: - *behavior - type: Grid parameters: [27, 52, 56, 58, 0.5, 0.5, 0.3, 0.3] properties: - type: Pedestrian - type: Perceptive2D - type: CircularArea - type: Social - type: Grid parameters: [30, 40, 50, 45, 0.5, 0.5, 0.3, 0.3] properties: - type: Pedestrian - type: Perceptive2D - type: CircularArea - type: Social Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: [images/building-planimetry.png, 0.1] seeds: scenario: 0 simulation: 1 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [3.0] type: PrioritySteering actions: - type: CognitiveAgentExplore deployments: - type: Point parameters: [15, 15] properties: - type: CircularArea - type: Orienting2D parameters: [0.0] - type: Pedestrian - type: Social programs: - *behavior Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: [images/building-planimetry.png, 0.1] seeds: scenario: 0 simulation: 1 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [3.0] type: PrioritySteering actions: - type: CognitiveAgentFollowRoute parameters: [40, 15, 60, 80, 70, 105, 85, 80] deployments: type: Point parameters: [15, 15] properties: - type: CircularArea - type: Orienting2D parameters: [0.0] - type: Pedestrian - type: Social programs: *behavior Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: [images/congestion-avoidance.png, 0.1, 12, 60] seeds: scenario: 0 simulation: 2 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [1.0] type: OrientingBehavior2D deployments: - type: Circle parameters: [130, 70, 52, 5] nodes: type: HomogeneousOrientingPedestrian2D parameters: [1.0] programs: - *behavior - type: Grid parameters: [27, 52, 56, 58, 0.5, 0.5, 0.3, 0.3] nodes: type: HomogeneousPedestrian2D - type: Grid parameters: [30, 40, 50, 45, 0.5, 0.5, 0.3, 0.3] nodes: type: HomogeneousPedestrian2D Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: [images/building-planimetry.png, 0.1] seeds: scenario: 0 simulation: 1 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [3.0] type: PrioritySteering actions: - type: CognitiveAgentReachDestination parameters: [103, 99] # destination is unknown as pedestrian's cognitive map is empty deployments: - type: Point parameters: [108, 88] properties: - type: CircularArea - type: Orienting2D parameters: [0.0] - type: Pedestrian - type: Social programs: - *behavior Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: [images/building-planimetry.png, 0.1] seeds: scenario: 0 simulation: 1 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [3.0] type: PrioritySteering actions: - type: CognitiveAgentReachDestination parameters: [135, 15] # destination is unknown as pedestrian's cognitive map is empty deployments: - type: Point parameters: [15, 15] properties: - type: CircularArea - type: Orienting2D parameters: [0.0] - type: Pedestrian - type: Social programs: - *behavior Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: [images/building-planimetry.png, 0.1] seeds: scenario: 0 simulation: 4 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [3.0] type: PrioritySteering actions: - type: CognitiveAgentReachKnownDestination parameters: [135, 15] deployments: - type: Point parameters: [15, 15] properties: - type: CircularArea - type: Orienting2D parameters: [0.3] - type: Pedestrian - type: Social programs: - *behavior Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: [images/building-planimetry.png, 0.1] seeds: scenario: 0 simulation: 1 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [3.0] type: PrioritySteering actions: - type: CognitiveAgentPursue parameters: [135, 15] # Pursuing assumes the destination is known (despite the pedestrian's cognitive map is empty) deployments: type: Point parameters: [15, 15] properties: - type: CircularArea - type: Orienting2D parameters: [0.0] - type: Pedestrian - type: Social programs: *behavior Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: [images/building-planimetry.png, 0.1] seeds: scenario: 0 simulation: 1 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [3.0] type: PrioritySteering actions: - type: CognitiveAgentReachDestination parameters: [60, 40, 85, 15] # (85, 15) will be known, (60, 40) won't be known but will be reached because found along the way to the former deployments: - type: Point parameters: [15, 15] properties: - type: CircularArea - type: Orienting2D parameters: [0.4] - type: Pedestrian - type: Social programs: - *behavior Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: path: planimetry.png zoom: 0.05 _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [1.0] type: CognitiveBehavior deployments: - type: Point parameters: [2, 2] properties: - type: Human parameters: [\"adult\", \"male\"] - type: Perceptive2D - type: CognitivePedestrian - type: Cognitive2D - type: Orienting2D parameters: [0.5] programs: - *behavior Click to show / hide code incarnation: protelis environment: type: ImageEnvironmentWithGraph parameters: path: planimetry.png zoom: 0.05 deployments: - type: Point parameters: [2, 2] properties: - type: Pedestrian - type: CircularArea - type: Orienting2D parameters: [0.5] Click to show / hide code incarnation: protelis environment: type: EnvironmentWithDynamics parameters: path: planimetry.png zoom: 0.05 deployments: - type: Point parameters: [2, 2] properties: - type: Pedestrian - type: PhysicalPedestrian2D - type: Perceptive2D - type: CircularArea - type: Social programs: - time-distribution: type: DiracComb parameters: [1.0] type: PhysicalBlendedSteering actions: - type: CognitiveAgentSeek parameters: [1000, 500] - type: CognitiveAgentFlee parameters: [500, -500]",
    "description": "How to navigate the environment, especially indoors.",
    "tags": [
      "Node",
      "Nodes",
      "Pathfinding",
      "Navigation Mesh"
    ],
    "title": "Find paths indoors",
    "uri": "/howtos/simulation/environment/pathfinding/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Workarounds",
    "content": "Under some combination of hardware and drivers, the Swing interface may render uncorrectly. This is due to Alchemist using OpenGL as rendering backend for Swing, in order to increase performance.\nExamples of graphical glitches, on a VirtualBox instance with Ubuntu Solution Disable the OpenGL acceleration explicitly by setting the sun.java2d.opengl property to false.\nGradle With Gradle, edit the Alchemist launch task (which should be a JavaExec) by adding: jvmArgs(\"-Dsun.java2d.opengl=false\")\nStand-alone Add the appropriate JVM option:\njava -Dsun.java2d.opengl=false -jar alchemist-full.jar",
    "description": "Known issues with Swing and OpenGL acceleration, especially with legacy AMD/ATi drivers.",
    "tags": [
      "Swing",
      "Gui",
      "Artefacts",
      "Opengl",
      "Driver",
      "Video"
    ],
    "title": "Graphical Glitches in Swing",
    "uri": "/howtos/workarounds/swing-glitch/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation \u003e Create rich environments",
    "content": "Alchemist is equipped with the ability to load and simulate on real-world maps. Navigation on maps can be done by using gps traces, by moving along roads (Alchemist relies on GraphHopper to provide directions), by interpolating gps traces with on-the-road-movements, or by ignoring the map information and just move as you would in a continuous space.\nSetting up a map environment In order to run simulations on real world maps, an appropriate environment must be selected, such as OSMEnvironment.\nIf you need map data to perform on-streets routing, you need to feed it to the simulator. OSMEnvironment supports OpenStreetMap extracts in several formats, we recommend using the protocol buffer binary format (pbf) to save time and space.\nOpenStreetMap extracts It is likely that you do not need a simulation that requires navigation capabilities on the whole planet, especially considering that, even in binary format, it contains more than 50GB of data. We recommend thus to use an extract with the data relative to the area you are interested in simulating in. One great way to obtain an extract is through BBBike.\nIf you rely on their service, consider donating to the project.\nDeploying nodes using GPS traces We prepared a dedicated page on the argument\nNavigate nodes in map environment We prepared a dedicated page on the argument",
    "description": "How to simulate using maps and GPS traces.",
    "tags": [
      "Environment",
      "Planimetry",
      "Maps",
      "Gps",
      "Traces",
      "Geo-Spatial Data"
    ],
    "title": "Maps and GPS traces",
    "uri": "/howtos/simulation/environment/maps/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Workarounds",
    "content": "When Alchemist is used on computers with a large amount of memory and parallelism, additional configuration might be required.\nInfo These problems have more to do with the way memory allocation on Linux and the JVM works than with Alchemist itself. They are not memory leaks in Alchemist (hence the reason why they do not happen with smaller memory sizes).\nSymptoms batch execution slowing down (this is due to the memory pressure) analysis of memory shows that the amount of memory actually in use by the JVM is always growing (similar to a memory leak) the following (or similar) warning is displayed on the standard error on startup: [warning][gc] ***** WARNING! INCORRECT SYSTEM CONFIGURATION DETECTED! ***** [warning][gc] The system limit on number of memory mappings per process might be too low for the given [warning][gc] max Java heap size (101754M). Please adjust /proc/sys/vm/max_map_count to allow for at [warning][gc] least 183157 mappings (current limit is 65530). Continuing execution with the current [warning][gc] limit could lead to a premature OutOfMemoryError being thrown, due to failure to map memory. Solution Warning The file /proc/sys/vm/max_map_count could be changed manually, but these changes won’t persist reboots.\nA persistent solution to the problem is to instruct the system to always load the correct configuration. One possible way is to instruct sysctl through a configuration file (e.g., /etc/sysctl.d/99-vm-max-map-count.conf) including the following line: vm.max_map_count=\u003ccustom max_map_count\u003e. This can be done on a root shell via:\nsudo sh -c 'echo \"vm.max_map_count=\u003ccustom max_map_count\u003e\" \u003e /etc/sysctl.d/99-vm-max-map-count.conf' sudo sysctl --system Computing a “good” value for max_map_count A reasonable estimation of the value is four times the amount of system RAM expressed in Megabytes (for instance vm.max_map_count=524288 for a system with 128GB RAM).\nWhen in doubt, select a higher value, apparently the negative effects are negligible.\nReady-to-use commands 128GB sudo bash -c 'echo \"vm.max_map_count=524288\" \u003e /etc/sysctl.d/99-vm-max-map-count.conf' \u0026\u0026 sudo sysctl --system 256GB sudo bash -c 'echo \"vm.max_map_count=1048576\" \u003e /etc/sysctl.d/99-vm-max-map-count.conf' \u0026\u0026 sudo sysctl --system 512GB sudo bash -c 'echo \"vm.max_map_count=2097152\" \u003e /etc/sysctl.d/99-vm-max-map-count.conf' \u0026\u0026 sudo sysctl --system 1TB sudo bash -c 'echo \"vm.max_map_count=4194304\" \u003e /etc/sysctl.d/99-vm-max-map-count.conf' \u0026\u0026 sudo sysctl --system",
    "description": "Known issue of some Java Virtual Machine implementations when requested to use more than 64GB of RAM",
    "tags": [
      "Linux",
      "Memory Leak",
      "Memory Pressure",
      "Max_map_count",
      "Batch"
    ],
    "title": "Memory leaks under Linux",
    "uri": "/howtos/workarounds/max-map-count/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "A simulation in Alchemist can be monitored and controlled by a set of GraphQL APIs which provide a standard and flexible way to query the system.\nIn the following guide, you will learn how to use the API service for having a simple overview of the running simulation thanks to the playground GraphiQL with the ability to control the simulation, or to develop an Alchemist sub-module that uses the API service.\nUse GraphQL service inside Alchemist In order to attach the GraphQL API service to a simulation, you must specify the GraphQLMonitor in the simulation’s YAML file, providing the server’s host and port (if not specified, default URL is: 127.0.0.1:8081) as shown in the following example:\nmonitors: type: GraphQLMonitor parameters: host: \u003cmy-custom-host\u003e port: \u003cmy-custom-port\u003e Once the YAML file is ready, the simulation can be started as usual.\nSimulation’s overview in the Web Browser Once the simulation is up and running, you can visit on your local web browser the URL: http://\u003cmy-custom-host\u003e:\u003cmy-custom-port\u003e/graphiql. In this GraphiQL playground you will be able to lookup all the operations and types structure that are defined in the GraphQL schema, thanks to the documentation on the sidebar, or execute operations defining the structure of the data that you will need.",
    "description": "Monitor and Control a Simulation through a set of GraphQL APIs.",
    "tags": [
      "Api",
      "Graphql"
    ],
    "title": "Monitor and Control Simulations through GraphQL",
    "uri": "/howtos/simulation/graphql/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "In Alchemist, custom monitors provide a flexible way to observe the progression of simulations and respond to standard hooks. To set up a custom monitor, follow the steps below:\nExtend the OutputMonitor Class: Create a new class extending the OutputMonitor class.\npackage it.unibo.foo import it.unibo.alchemist.model.boundary.OutputMonitor import it.unibo.alchemist.model.interfaces.Position class FooMonitor\u003cT, P : Position\u003cP\u003e\u003e : OutputMonitor\u003cT, P\u003e() Update Simulation Configuration: Add your custom monitor to the simulation configuration file.\nincarnation: protelis monitors: - type: it.unibo.foo.FooMonitor",
    "description": "Create custom monitors to track simulation progression and interact with standard hooks.",
    "tags": [
      "Monitors",
      "Simulation Monitoring",
      "Output Monitors"
    ],
    "title": "Monitoring Simulations through Custom Output Monitors",
    "uri": "/howtos/simulation/monitors/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation \u003e Program Nodes",
    "content": "There are several possibilities to move nodes in gep-spatial environment.\nIgnore geo-spatial information This is of course the easiest way: all data about the map is ignored. This strategy makes sense if you need a geo-spatial coordinate system, but you are simulating objects that are mostly or entirely unaffected by the street-level structure (buildings, roads, etc.); for instance, if the simulation involves unmanned aerial vehicles. There is no need of importing actual map data when navigating this way.\nThis kind of navigation can be realized using MoveToTarget.\nExamples Click to show / hide code incarnation: protelis variables: seed: \u0026seed # You can give the anchor any name, assigning the name of the variable is convenient, though {min: 0, max: 1, step: 1, default: 0} # This variable ranges in [0, 9], steps of 1, defaulting to 0 network-model: { type: ConnectWithinDistance, parameters: [10] } _program-pools: compute-gradient: \u0026gradient - { time-distribution: 1, program: \"advanced:converge\" } - program: send move: \u0026move - time-distribution: { type: ExponentialTime, parameters: [1] } type: Event actions: { type: MoveToTarget, parameters: [destination, 1] } deployments: { type: Circle, parameters: [50, 0, 0, 5], programs: [*gradient, *move] } terminate: { type: AfterTime, parameters: [20] } Click to show / hide code incarnation: protelis variables: time: \u0026time type: Flag parameters: [false] small: \u0026small type: Flag parameters: [false] n: \u0026n formula: 100 range: \u0026range formula: 30 width: \u0026w formula: 200 height: \u0026h formula: 20 freq: \u0026freq formula: 1 sp: formula: 0.1 bp: formula: 0.5 retain: \u0026retain formula: 1 / minfreq fc: formula: \"time ? (small ? sp : bp) : 0\" minfreq: \u0026minfreq formula: \"freq * (1 - fc)\" maxfreq: \u0026maxfreq formula: \"freq * (1 + fc)\" speed: \u0026speed language: kotlin formula: \"if (time as Boolean) 0 else 1\" seed: \u0026seed min: 0 max: 199 step: 1 default: 0 seeds: scenario: *seed simulation: *seed network-model: type: ConnectWithinDistance parameters: [*range] _pools: - pool: \u0026program - time-distribution: type: RandomDiracComb parameters: [*minfreq, *maxfreq] type: Event actions: - type: RunProtelisProgram parameters: [\"1\", *retain] - time-distribution: null program: send - pool: \u0026program2 - time-distribution: 1 program: tomacs - time-distribution: null program: send - pool: \u0026move - time-distribution: 10 type: Event actions: - type: MoveToTarget parameters: [target, *speed] deployments: - type: Rectangle parameters: [*n, 0, 0, *w, *h] contents: - molecule: time concentration: *time - molecule: speed concentration: *speed - molecule: small concentration: *small programs: - *program - *move From the showcase\nOptimal resilient distributed data collection in mobile edge environments\nNavigate along the streets Moves along the available paths, depending on the specific vehicle being used. Requires actual geo-spatial information.\nThis kind of navigation can be realized using TargetMapWalker.\nReproduce a GPS Trace Ignores the map geospatial information and relies on a GPS trace instead, starting from its first position and reaching the last, navigating from point to point in “straight lines” (on maps, these are actually orthodromes).\nThis kind of navigation can be realized using ReproduceGPSTrace.\nDeploying nodes using GPS traces You probably want your nodes to start from the position that marks the beggining of a trace. We discussed how to do so here.\nTime alignment of GPS traces Navigation with GPS traces usually require that they get correctly aligned with time, especially if they come from samples taken at different times. We discussed the alignment of GPS traces here, the same alignment system used for importing traces is used for using them during navigation.\nExamples Click to show / hide code environment: type: OSMEnvironment parameters: [\"vcm.pbf\", false] # Requires the file vcm.pbf in the classpath! incarnation: sapere _pools: - pool: \u0026move - time-distribution: 0.1 type: Event actions: - type: ReproduceGPSTrace parameters: [\"gpsTrace\", true, \"AlignToSimulationTime\"] deployments: - type: FromGPSTrace parameters: [7, \"gpsTrace\", true, \"AlignToSimulationTime\"] programs: - *move terminate: type: StableForSteps parameters: equalIntervals: 5 checkInterval: 100 Interpolate GPS traces with street data Navigates along a GPS trace, but computes the point-to-point distance using the navigation system, rather than “straight lines” (orthodromes).\nThis kind of navigation can be realized using GPSTraceWalker.",
    "description": "How to move node around in geospatial environments.",
    "tags": [
      "Reaction",
      "Program",
      "Behavior",
      "Maps",
      "Gps",
      "Interpolation",
      "Geospatial"
    ],
    "title": "Move nodes on maps",
    "uri": "/howtos/simulation/program/move-on-maps/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation \u003e Program Nodes",
    "content": "It is possible to set the content of the nodes in a deployment. Node contents are defined in terms of molecules and their corresponding concentration. As such, they depend on the specific Incarnation in use.\nThis is done by listing the contents under deployments.contents, specifying a Molecule name and its Concentration.\nUnless the type/parameter syntax is used, the data gets processed by the Incarnation through the Incarnation.createMolecule and Incarnation.createConcentration methods, respectively.\nIn the following example, three molecules are created and injected into all nodes deployed in the scenario:\nClick to show / hide code incarnation: protelis network-model: type: ConnectWithinDistance parameters: [7] _gradient: \u0026gradient - time-distribution: 1 type: Event actions: - type: RunProtelisProgram parameters: [distanceTo, 1.01] - program: send deployments: - type: Point parameters: [0,0] contents: - molecule: source concentration: false - molecule: enabled concentration: true - molecule: data concentration: 1 / 0 programs: *gradient terminate: type: StepCount parameters: 5000 By default, all nodes in the deployment will be injected with the required contents. It is possible, though, to select only a subset of them through the in keyword, which expects enough information to be able to build a PositionBasedFilter through the arbitrary class loading system.\nIn the following example, only molecules located inside a Rectangle get the ball molecule:\nClick to show / hide code incarnation: sapere network-model: { type: ConnectWithinDistance, parameters: [0.5] } deployments: type: Grid parameters: [-5, -5, 5, 5, 0.25, 0.25, 0.1, 0.1] # A perturbed grid of devices contents: - molecule: \"{hit, 0}\" # Everywhere, no one has been hit - in: { type: Rectangle, parameters: [-0.5, -0.5, 1, 1] } # Inside this shape... molecule: ball # ...every node has a ball programs: - time-distribution: 1 # This is a frequency, time distribution type is left to the incarnation # 'program' specs are passed down to the incarnation for being interpreted as reactions program: \"{ball} {hit, N} --\u003e {hit, N + 1} {launching}\" # If hit, count the hit - program: \"{launching} --\u003e +{ball}\" # As soon as possible, throw the ball to a neighbor",
    "description": "Definition of the initial content of nodes.",
    "tags": [
      "Deployment",
      "Node",
      "Nodes",
      "Content",
      "Molecule",
      "Concentration"
    ],
    "title": "Node contents",
    "uri": "/howtos/simulation/program/content/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation \u003e Deploy Nodes",
    "content": "Sometimes it is useful to deploy a bunch of nodes randomly inside some area marked by a shape. Circles and polygons are first-class citizens, but of course users may create their own deployments by implementing Deployment.\nThis example places 1000 nodes randomly in a Circle with center in (0, 0) and radius 10.\nClick to show / hide code incarnation: sapere deployments: type: Circle parameters: [1000, 0, 0, 10] In the following example, they are instead deployed randomly within a 10x20 Rectangle originating in (0,0).\nClick to show / hide code incarnation: sapere deployments: type: Rectangle parameters: [1000, 0, 0, 10, 20] Polygons can be specified by providing all vertices. In the following example, we deploy some nodes within the Venice lagoon.\nClick to show / hide code incarnation: sapere environment: { type: OSMEnvironment } network-model: { type: ConnectWithinDistance, parameters: [1000] } _venice_lagoon: \u0026lagoon [[45.2038121, 12.2504425], [45.2207426, 12.2641754], [45.2381516, 12.2806549], [45.2570053, 12.2895813], [45.276336, 12.2957611], [45.3029049, 12.2991943], [45.3212544, 12.3046875], [45.331875, 12.3040009], [45.3453893, 12.3040009], [45.3502151, 12.3156738], [45.3622776, 12.3232269], [45.3719259, 12.3300934], [45.3830193, 12.3348999], [45.395557, 12.3445129], [45.3998964, 12.3300934], [45.4018249, 12.3136139], [45.4105023, 12.3122406], [45.4167685, 12.311554], [45.4278531, 12.3012543], [45.4408627, 12.2902679], [45.4355628, 12.2772217], [45.4206242, 12.2703552], [45.3994143, 12.2744751], [45.3738553, 12.2676086], [45.3579354, 12.2614288], [45.3429763, 12.2497559], [45.3198059, 12.2408295], [45.2975921, 12.2346497], [45.2802014, 12.2408295], [45.257972, 12.233963], [45.2038121, 12.2504425]] deployments: type: Polygon parameters: [500, *lagoon] programs: - time-distribution: 10 type: Event actions: { type: BrownianMove, parameters: [0.0005]}",
    "description": "Deployment of nodes randomly inside arbitrary shapes.",
    "tags": [
      "Deployment",
      "Node",
      "Nodes",
      "Shape",
      "Random"
    ],
    "title": "Nodes inside shapes",
    "uri": "/howtos/simulation/deploy/shape/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Explanation",
    "content": "This section explains the pathfinding strategies and algorithms of Alchemist. Instructions on how to exercise them are available here.\nNavigation graphs A navigation graph of an environment with obstacles is a graph whose nodes are convex shapes representing portions of the environment which are traversable by agents (namely, walkable areas), and edges represent connections between them. The image below shows a bidimensional environment with obstacles on the left and the associated navigation graph on the right (nodes are painted blue, edges are represented as line segments connecting the centroid of a node to the associated crossing, which is painted green).\nNavigation graphs are mainly used for navigation purposes (e.g. in pathfinding algorithms): the advantage of decomposing the environment into convex regions is that agents can freely walk around within a convex region, as it is guaranteed that no obstacle will be found (remember that a shape is convex when no line segment between any two points on its boundary ever goes outside the shape).\nAlchemist is capable of generating navigation graphs of bidimensional environments featuring euclidean geometry and double precision coordinates. Before diving into the topic, please be aware that the algorithm implemented in Alchemist for the generation of navigation graphs:\nDoes not guarantee the coverage of 100% of the walkable area (as the image above shows). Is only capable to detect axis-aligned crossings. Is only capable to deal with convex polygonal obstacles. Concave ones can be decomposed into convex meshes, whereas for curves bounding boxes can be used, eventually arbitrarily-oriented minimum bounding boxes. NaviGator The algorithm implemented in Alchemist is called NaviGator (Navigation Graphs generAtor), here’s a brief description of how it operates: firstly, a certain number of seeds is planted in the environment. Each seed is a square-shaped region of unitary side that will grow maintaining a convex shape. Secondly, planted seeds are extended as far as possible (i.e. until they are in contact with an obstacle or another seed on each side). Finally, crossings are found between the grown seeds. NaviGator is derived from the DEACCON algorithm for the generation of navigation meshes.",
    "description": "Strategies to navigate the environment.",
    "tags": [
      "Node",
      "Nodes",
      "Pathfinding",
      "Navigation Mesh"
    ],
    "title": "Pathfinding",
    "uri": "/explanation/pathfinding/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "Configuration and programming of the node behavior Program Nodes Contents Move nodes on mapsHow to move node around in geospatial environments.\nNode contentsDefinition of the initial content of nodes.",
    "description": "How to define the behavior of nodes",
    "tags": [],
    "title": "Program Nodes",
    "uri": "/howtos/simulation/program/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tutorials",
    "content": "Protelis, from the Latin word figuratively meaning “regarding a team”, is a language targeting the aggregate of devices rather than the single one. It has been developed on the solid foundation of Field Calculus, a theoretical model of aggregate programming, and it is written and interoperable with Java.\nLearning Protelis The language and all the machinery of Protelis are out of the scope of this tutorial. However, we warmly recommend to read this paper first, and then to deepen your knowledge of Protelis by reading the resources available in the official Protelis website.\nA tutorial similar to the base tutorial, with increasingly rich examples and focused on the Protelis incarnation can be found on GitHub. The README.md file of the project explains the use and the steps to follow.\nNote Something went wrong along the line? Drop us an issue report and we’ll get back to you.",
    "description": "Ready-to-run examples of increasing complexity with the Protelis incarnation",
    "tags": [
      "Protelis",
      "Tutorial",
      "Aggregate",
      "Aggregate Computing",
      "Aggregate Programming"
    ],
    "title": "Protelis Incarnation Tutorial",
    "uri": "/tutorials/protelis/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Explanation",
    "content": "The SAPERE incarnation for Alchemist was the first stable incarnation produced for the simulator. It was developed in the context of the SAPERE EU project.\nAt the core of SAPERE is the concept of Live Semantic Annotation (LSA), namely a description of a resource (sensor, service, actuator…) always mapping the current resource status (somewhat a prelude to the currently famous digital twin concept).\nThese annotations evolve following so-called Eco-Laws, mimicking the complex behaviours of natural ecosystems.\nThe SAPERE approach fostered subsequent approaches, such as aggregate computing.\nLive Semantic Annotations An LSA as modeled in Alchemist is a tuple of values. These tuples can be injected in nodes as data items. From the point of view of the Alchemist metamodel, the concept of Molecule is mapped to LSA (LsaMolecule). As a consequence, LSAs can be inserted in nodes.\nEco-Laws Tuple matching is used to define Eco-Laws. An Eco-Law is a rewriting rule very similar in concept to chemical reactions: elements on the left-hand side of the reaction are removed from the container, elements on the right-hand side are inserted instead.\nThe following program matches LSAs with two arguments, the former must be foo, the latter a number greater than 30, and produces in a new tuple having as first element bar and as second the opposite of the matched number:\n{ foo, def: N \u003e 30 } --\u003e { bar, -N }",
    "description": "Basics of SAPERE and how its concepts are mapped in Alchemist.",
    "tags": [
      "Sapere",
      "Lsa",
      "Live Semantic Annotation",
      "Tuple Space",
      "Tuple Centre"
    ],
    "title": "SAPERE Incarnation",
    "uri": "/explanation/sapere/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Reference",
    "content": "LSAs LSAs, similarly to Prolog terms, support unification and substitution: it is possible to create tuple templates, match them against sets of ground tuples, and obtain a matching ground tuple as result.\nA tuple argument is considered a variable if it begins with an uppercase letter. Additionally, it is possible to discard some matches by expressing constraints on values.\nGround LSA syntax GroundLSA ::= GroundArgument (',' GroundArgument)* GroundArgument ::= Number | Atom | Set Atom ::= [a-z]([a-z]|[A-Z]|[0-9])* Number ::= [0-9]+('.'[0-9]*) Set ::= '[' ((Atom | Number)';')* ']' LSA Syntax LSA ::= '{' GroundLSA | TemplateLSA '}' TemplateLSA ::= Argument (',' Argument)* Argument ::= GroundArgument | Variable | Constraint Variable ::= [A-Z]([a-z]|[A-Z]|[0-9])* Constraint ::= 'def:' Variable Operation Operation ::= ('\u003e'|'\u003e'|'='|'!=') Number | 'add ' Variable | 'del ' Variable",
    "description": "Reference API for the SAPERE Incarnation.",
    "tags": [
      "Sapere",
      "Lsa",
      "Live Semantic Annotation",
      "Tuple Space",
      "Tuple Centre"
    ],
    "title": "SAPERE Incarnation",
    "uri": "/reference/sapere/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tutorials",
    "content": "An explanation of the basics of the SAPERE Incarnation is available here. A tutorial similar to the base tutorial, with increasingly rich examples, focused on the SAPERE incarnation. Reference descriptions of the SAPERE LSA language inside the simulator are available here\nThe tutorial can be found on GitHub. The README.md file of the project explains the use and the steps to follow.\nShow README.md Note Something went wrong along the line? Drop us an issue report and we’ll get back to you.\nLSAs Syntax details are available in the reference. The following code creates an irregular grid of devices, of which those located around the center of such grid contain the tuple { token }:\nThe relevant part here is molecule: token. If we wanted to inject the tuple { foo, 1, bar, 2 }, we could have written molecule: foo, 1, bar, 2.\nEco-Laws Nodes can be programmed with Eco-Laws as follows:\nEco-Laws can be programmed to send LSAs to neighbors, as well as to look into neighboring nodes for getting LSAs. In order to do so, the LSA template in the Eco-Law must be preceded by a neighbor operator, either + or *.\n+ means in a neighbor: if used on the left hand side, it considers the condition satisfied if at least one neighbor has at least one LSA matching the provided template; if used on the right hand side, sends the LSA to one random neighbor.\n* means in all neighbors: if used on the left hand side, it considers the condition satisfied if all neighbors have at least one LSA matching the provided template; if used on the right hand side, sends a copy of the LSA to all neighbors.\nThe following code exemplifies a diffusion program: when { token } is present locally, it is copied into neighboring nodes once per second; and as soon as two copies of { token } are present, one gets removed.\nRates The time distribution with which reactions should get scheduled can be controlled by thinkering with the yaml specification as per every reaction in Alchemist. If no TimeDistribution is specified, the Eco-Law is assumed to run “as soon as possible” (ASAP).\nThis may lead to unwanted behaviour. For instance, programming a single node with: --\u003e { foo } will cause the simulation to schedule a reaction producing { foo } at time zero, and at each execution the time will remain zero: the simulator will be producing copies over copies of the tuple, never advancing in time (Alchemist is a discrete event simulator), and possibly going on until the JVM memory limit is reached.\nIf a number is specified as time distribution, using the time-distribution key, then it will be interpreted as the Markovian rate of an exponentially distributed time.\nOther distributions found at it.unibo.alchemist.model.timedistributions can be used leveraging the arbitrary class loading system.\nIn the following example, two Eco-Laws are configured, and one of them is bound to an ExponentialTime with rate 1, namely, when the reaction can be executed (the left hand LSAs have local matches), it will execute at an average of once per second (with a variance of 1 s²).\nExercise To better grasp details of the incarnation, we recommend looking at the examples available on the Alchemist SAPERE Incarnation tutorial on GitHub.\nBesides examples with growing complexity, there are a number of proposed exercises that should help you get acquainted with the SAPERE way of writing self-organizing behaviors.",
    "description": "Ready-to-run examples of increasing complexity with the SAPERE incarnation",
    "tags": [
      "Sapere",
      "Lsa",
      "Tuple",
      "Tuple Space",
      "Tuple Centre",
      "Tutorial"
    ],
    "title": "SAPERE Incarnation Tutorial",
    "uri": "/tutorials/sapere/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tutorials",
    "content": "ScaFi (Scala Fields) is a Scala-based library and framework for Aggregate Programming. It implements a variant of the Higher-Order Field Calculus (HOFC) operational semantics, which is made available as a usable domain-specific language (DSL), and provides a platform and API for simulating and executing Aggregate Computing systems and applications.\nHow to use ScaFi with Alchemist For more details about ScaFi please read the documentation in the official site where you can find a description of how to integrate ScaFi toolkit with Alchemist.\nA tutorial similar to the base tutorial, with increasingly rich examples, focused on the Scafi incarnation.\nThe tutorial can be found on GitHub. The README.md file of the project explains the use and the steps to follow.\nSimulations with Alchemist and Scafi: tutorial This tutorial presents a sequence of increasingly rich examples using the Scafi aggregate programming DSL and the Alchemist Simulator.\nRequirements A Gradle-compatible Java version e.g., temurin A local installation of Git [Optional] A working version of Python 3 for the plotting part Check if it works\nOpen a terminal and type\njava -version git --version Now you are ready to launch Alchemist \u0026 ScaFi simulations\nQuickstart Open a terminal and run:\nWindows\ncurl https://raw.githubusercontent.com/scafi/learning-scafi-alchemist/master/launch.ps1 | Select-Object -ExpandProperty Content | powershell.exe Linux \u0026 Mac\ncurl https://raw.githubusercontent.com/scafi/learning-scafi-alchemist/master/launch.sh | bash It will take some time for the system to download all the required dependencies, at the end of the process you will be presented the Alchemist default GUI (here are instructions on how to interact with the simulator). At this point, the simulation should be looking like this: Click P to start the simulation. The nodes will compute the ScaFi program described here) in rounds, producing node colour changes. What happened Issuing the one-liner command, you have:\ndownloaded this repository using Git created a folder called learning-scafi-alchemist that contains the simulations executed the command ./gradlew runHelloScafi inside the learning-scafi-alchemist created above. The last command produces the execution of the simulation called helloScafi described using a yml file. Particularly an Alchemist simulation typically consists of a network of devices that could communicate with each other by means of a neighbourhood relationship (you can see the connections by clicking L) In this case, the nodes’ positions are configured through real GPS traces from the Vienna marathon app. The simulation effects (i.e., node shapes and colours) are highly configurable through JSON configuration. Here the node colour depends on the output of the ScaFi program, which is executed in each device every 1 second. Particularly, the execution of a ScaFi program deals with local computations and interaction among neighbours through a distributed data structure called computational field. This distributed and repeated execution of rounds eventually produces a collective result (you can find more details about the execution model of ScaFi programs in the documentation).\nIn this case, the program consists of the evaluation of the distance from the node with the ID 100 (in Aggregate Computing literature called “gradient”).\nSomething wrong?\nTry the following:\nclone manually using git clone https://github.com/scafi/learning-scafi-alchemist.git alternatively: download the repository zip (Download!) then unzip the repository to a local folder open a terminal inside the cloned/downloaded folder run ./gradlew runHelloScafi If you still have problems executing the experiments, please consider opening an issue! New issues\nGuided examples from now on, we will assume all commands have been issued inside learning-scafi-alchemist\n1. Hello, ScaFi! A gradient in space and time Launch command ./gradlew runHelloScafi What happened This is the example described in Quickstart section. Particularly, the program consists of the description of the self-healing gradient: an algorithm that computes a gradient (i.e., a field mapping each device in the system with its minimum distance from the closest source device) field and automatically adjusts it after changes in the source set and the connectivity network (more details about gradients can be found in Compositional Blocks for Optimal Self-Healing Gradients).\nWhat is inside Configuration File ScaFi Program File helloScafi.yml HelloScafi.scala An Alchemist simulation could be described through yml configurations. In order to execute ScaFi script, you should at least define:\nthe Scafi incarnation: incarnation: scafi a Reaction that contains the Action RunScafiProgram with the full class name of the program chosen _reactions: - program: \u0026program - time-distribution: type: ExponentialTime parameters: [*programRate] type: Event actions: - type: RunScafiProgram parameters: [it.unibo.scafi.examples.HelloScafi, *retentionTime] - program: send a deployment that contains in the programs the Action specified above deployments: ## i.e, how to place nodes type: FromGPSTrace ## place nodes from gps traces parameters: [*totalNodes, *gpsTraceFile, true, \"AlignToTime\", *timeToAlign, false, false] programs: ## the reactions installed in each nodes - *program More details about the Alchemist configuration could be found in the official guide.\nThe main logic of the node behaviour is described through the Scafi program file. Particularly, a valid ScaFi program must:\nchoose an incarnation import it.unibo.alchemist.model.scafi.ScafiIncarnationForAlchemist._ extend the AggregateProgram trait class HelloScafi extends AggregateProgram mix-in the libraries required for the application with StandardSensors with ScafiAlchemistSupport with BlockG with Gradients with FieldUtils { define the behaviour inside the main method. A ScaFi program typically deals with environment information through sensors. sense[Type](name) is the built-in operator used to query the sensors attached to each node. Each molecule expressed in the yaml (i.e., the Alchemist variable concept) can be queried from the ScaFi program. For instance, in helloScafi, we write:\n- molecule: test concentration: *source # anchor to \"source\" value, check line 17 Therefore, in the program, we can get the test value as:\n// Access to node state through \"molecule\" val source = sense[Int](\"test\") // Alchemist API =\u003e node.get(\"test\") There are several built-sensors (in checkSensors there are examples of local sensors and neighbouring sensors). For more details, please check the Scaladoc.\nThe main logic of the program is expressed in the following line:\n// An aggregate operation val g = classicGradient(mid() == source) Where classicGradient is a function defined in BlockG that implements the self-healing gradient described above. The first argument is a Boolean field that defines which part of the system could be considered a source zone. In this case, nodes are marked as source when the field of ids (i.e., mid()) is equal to the value passed through the variable test. This can be expressed as mid() == source.\nThe value produced by Scafi definitions could be used to express actuation. In the Scafi incarnation, you can update the Alchemist variables through node.put\n// Write access to node state (i.e., Actuation =\u003e it changes the node state) node.put(\"g\", g) In the Alchemist default GUI you can inspect the node variables (i.e., molecules) by double-clicking a nodes Finally, the last instruction of the main is the returned value of the Scafi program (in scala return is optional)\n// Return value of the program g Minimal changes As described above, the program is self-healing, so try to move node and see how the system eventually reaches a stable condition: click S to enter into selection mode start a selection by clicking the mouse left button and dragging it into the environment once your selection is over, click O to enter into move mode click over the selection and drag the element into another position Try to modify the source node (via yml configuration) and check the program output differences Try to change the source node (i.e. with the ID == 10) after 10 seconds (check BlockT library, or you can implement the time progression with rep(0 seconds)(time =\u003e time + deltaTime)) Using the generated data with the embedded plotting script You can produce plots from the data generated by Alchemist simulations. Indeed, each Alchemist simulation produces aggregated data as expressed in the export configuration section. For more details about data exporting, please refer to the official Alchemist guide.\nParticularly, this command:\n./gradlew runHelloScafi -Pbatch=true -Pvariables=random will run several simulations in batch, one for each possible value of the random variables (six in this case, as expressed in the helloScafi.yml). Each simulation, will produce a csv file in $exportPath/$fileNameRoot-randomValue.$fileExtension (in this case, build/exports/helloScafi/experiment-x.txt, the values starting with $ are gathered from the simulation configuration file).\nTypically, we use these data to produce charts that express the dynamics of the collective system. This repository contains a highly configurable script (please look at the configuration defined in plots).\nTo run the script for this experiment, you should run:\n$ python plotter.py plots/helloScafi.yml ./build/exports/helloScafi \".*\" \"result\" plots/ Where:\nthe first argument is the plot configuration (expressed using a yaml file) the second argument is where the files are located the third argument is a regex used to select the simulations file the fourth argument defines the initial names of the plot the last argument devises the folder in which the plots will be stored 2. A richer pattern: Self-organizing Coordination Regions Launch command ./gradlew runSelforgCoordRegions What happened This example shows an interesting pattern developed with ScaFi, the so-called Self-Organising Coordination Regions (SCR). (more details in Self-organising Coordination Regions: A Pattern for Edge Computing)\nThe idea of SCR is to organize a distributed activity into multiple spatial regions (inducing a partition of the system), each one controlled by a leader device, which collects data from the area members and spreads decisions to enact some area-wide policy. Particularly, when you launch the command of SCR you will see something like this:\nWhere the colour denotes the potential field (i.e., the gradient) that starts from the selected leader. In this GIF, the leaders are the ones marked with blue colour.\nWhat is inside Configuration File ScaFi Program File selforgCoordRegions.yml SelforganisingCoordinationRegions.scala The SCR pattern consists of four main phases:\nleader election: using block S the system will produce a distributed leader election that tries to divide the system equally with a certain range (in S term, it is called grain): // Sparse choice (leader election) of the cluster heads val leader = S(sense(Params.GRAIN), metric = nbrRange) potential field definition: after the leader election process, there is another phase in which will be computed potential field from the leader. In this way, the slave node could send information to leader’s // G block to run a gradient from the leaders val g = distanceTo(leader, metric = nbrRange) collection phase: the slave node could collect local information (e.g., temperature) and send it to the leader. During the path, it will be an aggregation process that combines local information with area information (i.e., all the nodes that are inside the potential field of a leader) // C block to collect information towards the leaders val c = C[Double,Set[ID]](g, _++_, Set(mid()), Set.empty) leader choice and share: with the information collected inside an area, the leader could perform an area-wide decision and then send it to the whole area (using G) // G block to propagate decisions or aggregated info from leaders to members val info = G[Set[ID]](leader, c, identity, metric = nbrRange) val head = G[ID](leader, mid(), identity, metric = nbrRange) Minimal changes Try to change the grain (check in the configuration file). It would lead to changes in area formation Try to count the number of nodes inside an area and share this information with that area—suggestion: change phase 3. of the SCR As in the previous example, the areas are self-healing. Therefore try to move leaders and see what happens in the leader formation. Try to remove nodes too (see the next clip) 3. Overlapping computations in space and time with aggregate processes ./gradlew runAggregateProcesses What happened This example shows an application of Aggregate Processes, which is s a way to specify a dynamic number of collective computations running on dynamic ensembles of devices (more details in Engineering collective intelligence at the edge with aggregate processes). The processes are the bigger circle around the nodes. The colour identifies the process ID. As you can see, during the simulation the process starts, shrink and then could disappear.\nWhat is inside Configuration File ScaFi Program File aggregateProcesses.yml SelforganisingCoordinationRegions.scala Minimal changes To start the process, you can use the spawn operators (and their variation, sspawn, cspawn, etc.):\nval maps = sspawn[Pid,Unit,Double](process, pids, {}) Particularly, sspawn accepts:\nthe process logic, that is a function ID =\u003e Input =\u003e Pout[Out] ID in this case is a case class that contains the id of a node that will start the process, the time in which it will effectively start and finally the time in which it will end. case class Pid(src: ID = mid(), time: Long = alchemistTimestamp.toDouble.toLong) (val terminateAt: Long = Long.MaxValue) The input of the process (in this case is empty) Finally, the Pout[Double] is the process output. Pout is a data structure that contains the output of the process and the status of the process (that could be Output, Terminated and External—more details in the paper). The key set of the process that will be spawn (pids) In this case, the new pids associated to new processes are selected from Alchemist molecule. def processesSpec: Map[Int,(Int,Int)] = sense(MOLECULE_PROCS) From this information il will be created the pids for the processes: // Determine the processes to be generated (these are provided in a molecule \"procs\") val procs: Set[ProcessSpec] = processesSpec.map(tp =\u003e ProcessSpec.fromTuple(tp._1, tp._2)).toSet val t = alchemistTimestamp.toDouble.toLong val pids: Set[Pid] = procs.filter(tgen =\u003e tgen.device == mid() \u0026\u0026 t \u003e tgen.startTime \u0026\u0026 (t - 5) \u003c tgen.startTime) .map(tgen =\u003e Pid(time = tgen.startTime)(terminateAt = tgen.endTime)) Particularly, in this case, the process logic is quite simple:\nit produces a potential field from the processes creator it terminates if the terminateAt is reached the nodes that belong to nodes are the ones that are inside the bubble, that is the nodes inside an area of 200 units def process(pid: Pid)(src: Unit = ()): POut[Double] = { val g = classicGradient(pid.src==mid()) val s = if(pid.src==mid() \u0026\u0026 pid.terminateAt.toDouble \u003c= alchemistTimestamp.toDouble){ Terminated } else if(g \u003c 200) Output else External POut(g, s) } Minimal changes Try to add the extension of the bubble as a parameter (as the start and end time) Even in this case, the computation is self-healing. Therefore, try to move the process center to see how the system reacts Try to add other processess (see the yaml configuration) External resources to improve your understanding The Alchemist metamodel: https://alchemistsimulator.github.io/explanation/ The Alchemist Simulator reference https://alchemistsimulator.github.io/reference/yaml/ ScaFi documentation: https://scafi.github.io/docs/ Main scientific papers about ScaFI (and that use ScaFi): https://scafi.github.io/papers/ Note Something went wrong along the line? Drop us an issue report and we’ll get back to you.",
    "description": "Ready-to-run examples of increasing complexity with the Scafi incarnation",
    "tags": [
      "Scala",
      "Scafi",
      "Scala Fields",
      "Tutorial",
      "Aggregate",
      "Aggregate Computing",
      "Aggregate Programming"
    ],
    "title": "Scafi Incarnation Tutorial",
    "uri": "/tutorials/scafi/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation \u003e Create rich environments",
    "content": "Indoor environments (bidimensional spaces with obstacles) can be generated from images by leveraging ImageEnvironment, which loads the map as raster image from file, interpreting the black pixels as obstacles (wall-like areas not accessible to nodes). Color of pixels that represents obstacles can be set to every color with a constructor’s parameter, black is default.\nBy default, each pixel is considered as a 1x1 block. As a consequence, a 1200x600 image with a vertical line of black pixels at coordinate 500 will be interpreted as a single obstacle of size 1x600 starting at coordinate (500, 0). It is possible to scale up or down the size of the environment by acting on the zoom parameter of ImageEnvironment, as well as changing the initial coordinates.\nExamples Click to show / hide code incarnation: protelis variables: danger: \u0026danger formula: \"\\\"danger\\\"\" exit1: \u0026exit1 formula: \"\\\"exit1\\\"\" exit2: \u0026exit2 formula: \"\\\"exit2\\\"\" exit3: \u0026exit3 formula: \"\\\"exit3\\\"\" exit4: \u0026exit4 formula: \"\\\"exit4\\\"\" environment: type: ImageEnvironment parameters: [images/multiple-exits.png, 0.0416] seeds: scenario: 1 simulation: 0 layers: - type: BidimensionalGaussianLayer molecule: *danger parameters: [10, 10, 20, 8] - type: BidimensionalGaussianLayer molecule: *exit1 parameters: [0.0, 10.0, 5, 2] - type: BidimensionalGaussianLayer molecule: *exit2 parameters: [10.0, 20.0, 5, 2] - type: BidimensionalGaussianLayer molecule: *exit3 parameters: [20.0, 10.0, 5, 2] - type: BidimensionalGaussianLayer molecule: *exit4 parameters: [10.0, 0.0, 5, 2] _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [1.0] type: PrioritySteering conditions: - type: WantToEvacuate actions: - type: CognitiveAgentAvoidLayer parameters: [*danger] - type: CognitiveAgentFollowLayer parameters: [*exit1] - type: CognitiveAgentFollowLayer parameters: [*exit2] - type: CognitiveAgentFollowLayer parameters: [*exit3] - type: CognitiveAgentFollowLayer parameters: [*exit4] - time-distribution: type: DiracComb parameters: [0.25] type: CognitiveBehavior actions: - type: HeadTowardRandomDirection deployments: - type: Circle parameters: [75, 10, 10, 10] nodes: type: CognitivePedestrian2D parameters: [\"adult\", \"male\", *danger] programs: - *behavior - type: Circle parameters: [75, 10, 10, 10] nodes: type: CognitivePedestrian2D parameters: [\"adult\", \"female\", *danger] programs: - *behavior Click to show / hide code incarnation: protelis variables: danger: \u0026danger formula: \"\\\"danger\\\"\" environment: type: ImageEnvironment parameters: [images/obstacles.png] seeds: scenario: 0 simulation: 1 layers: - type: BidimensionalGaussianLayer molecule: *danger parameters: [600.0, 240.0, 10.0, 100.0] _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [0.25] type: BlendedSteering actions: - type: CognitiveAgentFollowLayer parameters: [*danger] - type: CognitiveAgentObstacleAvoidance parameters: [50] _homogeous_pedestrian: \u0026homogeneous_pedestrian properties: - type: Pedestrian - type: Social - type: Perceptive2D - type: CircularArea deployments: - type: Circle parameters: [20, -100, 240, 30] \u003c\u003c: *homogeneous_pedestrian programs: - *behavior - type: Circle parameters: [30, 0, 600, 50] \u003c\u003c: *homogeneous_pedestrian programs: - *behavior - type: Circle parameters: [40, 100, -60, 40] \u003c\u003c: *homogeneous_pedestrian programs: - *behavior Click to show / hide code incarnation: protelis environment: type: ImageEnvironment parameters: [planimetry.png] _reactions: \u0026behavior - time-distribution: type: DiracComb parameters: [3.0] type: PrioritySteering actions: - type: HeadTowardRandomDirection - type: CognitiveAgentWander parameters: [6, 4] - type: CognitiveAgentObstacleAvoidance parameters: [4] deployments: - type: Circle parameters: [50, 0, 0, 25] properties: - type: Pedestrian - type: Perceptive2D - type: CircularArea - type: Social programs: - *behavior Direct reference to the image Click to show / hide code incarnation: protelis environment: { type: ImageEnvironment, parameters: [chiaravalle.png, 0.1] } network-model: { type: ObstaclesBreakConnection, parameters: [50] } deployments: type: Rectangle parameters: [300, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send # Actual network message delivery - type: Event time-distribution: 1 actions: { type: LevyWalk, parameters: [1.4] } Search for the image in the file system via Kotlin Click to show / hide code incarnation: protelis variables: zoom: \u0026zoom formula: 0.1 # Must be a valid Groovy snippet image_name: { formula: \"'chiaravalle.png'\" } image_path: \u0026image_path language: kotlin # Pick whatever JSR223 language you like and add it to the classpath formula: | # The following is pure Kotlin code. Other variables can be referenced! import java.io.File fun File.findImage(): String? = walkTopDown().find { image_name in it.name }?.absolutePath fun File.findImageRecursively(): String = findImage() ?: File(this, \"..\").findImageRecursively() File(\".\").findImageRecursively() timeout: 5000 # Linear free variable walking_speed: \u0026walk-speed { default: 1.4, min: 1, max: 2, step: 0.1 } seed: \u0026seed { default: 0, min: 0, max: 99, step: 1 } # 100 samples scenario_seed: \u0026scenario_seed { formula: (seed + 31) * seed } # Variable-dependent people_count: \u0026people_count type: GeometricVariable # A variable scanning a space with geometric segmentation parameters: [300, 50, 500, 9] # default 300, minimum 50, maximum 100, 9 samples seeds: { simulation: *seed, scenario: *scenario_seed} export: type: CSVExporter parameters: fileNameRoot: \"snippet-variables-export\" data: - time - molecule: \"default_module:default_program\" aggregators: [ mean, max, min, variance, median ] # From Apache's UnivariateStatistic value-filter: onlyfinite # discards NaN and Infinity environment: { type: ImageEnvironment, parameters: [*image_path, *zoom] } network-model: { type: ObstaclesBreakConnection, parameters: [50] } deployments: type: Rectangle parameters: [*people_count, 62, 15, 95, 200] programs: - time-distribution: 1 program: \u003e import protelis:coord:spreading let source = [110, 325] let vector = self.getCoordinates() - source let distance = hypot(vector.get(0), vector.get(1)) distanceTo(distance \u003c 50) - program: send - { type: Event, time-distribution: 1, actions: { type: LevyWalk, parameters: [*walk-speed] } }",
    "description": "How to create indoor environments based on planimetries.",
    "tags": [
      "Environment",
      "Planimetry",
      "Indoor"
    ],
    "title": "Simulate indoor",
    "uri": "/howtos/simulation/environment/indoor/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation \u003e Create rich environments",
    "content": "Before reading the following explanation you may want to look at the explanation of the cognitive agents and then at how to work with them.\nConfiguring the physics environment The simulator is equipped with a special type of Environment named EnvironmentWithDynamics which performs collision detection and response between nodes and with obstacles.\nHere’s a minimal configuration of a physics simulation: Click to show / hide code incarnation: protelis environment: type: EnvironmentWithDynamics It’s also possibile to specify an image path for including obstacles in the environment Click to show / hide code incarnation: protelis environment: type: EnvironmentWithDynamics parameters: [planimentry.png] Adding nodes to the environment Nodes added to the EnvironmentWithDynamics are required to have at least a PedestrianProperty, a PhysicalPedestrian and a OccupiesSpaceProperty.\nHere’s an example: Click to show / hide code incarnation: protelis environment: type: EnvironmentWithDynamics parameteres: [planimetry.png] deployments: - type: Point parameters: [0, 0] properties: - type: Pedestrian - type: PhysicalPedestrian2D - type: CircularArea Configuring nodes programs When using the EnvironmentWithDynamics, any suitable Reaction can be used, however, in order to take advantage of the physical micro-interactions between nodes such as avoidance, pushing behavior and falls, derived from the work of Pelechano et al. you need to use the PhysicalBlendedSteering.\nHere’s an example: Click to show / hide code incarnation: protelis environment: type: EnvironmentWithDynamics parameters: path: planimetry.png zoom: 0.05 deployments: - type: Point parameters: [2, 2] properties: - type: Pedestrian - type: PhysicalPedestrian2D - type: Perceptive2D - type: CircularArea - type: Social programs: - time-distribution: type: DiracComb parameters: [1.0] type: PhysicalBlendedSteering actions: - type: CognitiveAgentSeek parameters: [1000, 500] - type: CognitiveAgentFlee parameters: [500, -500] Updating the physics engine The EnvironmentWithDynamics internally uses a GlobalReaction called PhysicsUpdate to update nodes positions. By deault this reaction uses a DiracComb with a default rate. If you want, it’s possible to override the reaction with a custom TimeDistribution and update rate.\nHere’s some examples: Click to show / hide code incarnation: protelis environment: type: EnvironmentWithDynamics parameteres: [planimetry.png] global-programs: - type: PhysicsUpdate parameters: [1.5] deployments: - type: Point parameters: [0, 0] properties: - type: Pedestrian - type: PhysicalPedestrian2D - type: CircularArea Click to show / hide code incarnation: protelis environment: type: EnvironmentWithDynamics parameteres: [planimetry.png] global-programs: - time-distribution: type: DiracComb parameters: [1.5] type: PhysicsUpdate parameters: [0.5] deployments: - type: Point parameters: [0, 0] properties: - type: Pedestrian - type: PhysicalPedestrian2D - type: CircularArea Click to show / hide code incarnation: protelis environment: type: EnvironmentWithDynamics parameteres: [planimetry.png] global-programs: - time-distribution: type: ExponentialTime parameters: [0.5] type: PhysicsUpdate deployments: - type: Point parameters: [0, 0] properties: - type: Pedestrian - type: PhysicalPedestrian2D - type: CircularArea",
    "description": "Physical interaction between nodes",
    "tags": [
      "Physics",
      "Interaction",
      "Pedestrian"
    ],
    "title": "Simulate physical interactions among pedestrians",
    "uri": "/howtos/simulation/environment/cognitive-physics/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Execution",
    "content": "Engine Configuration The default Alchemist execution requires no special configuration, however different engine implementations are available.\nIn order to configure a different engine, simply add an EngineConfiguration object into the simulation configuration file as per the alchemist Arbitrary class loading system.\nParallel Batch Engines Parallel batch engine is an implementaion of Alchemist’s base engine that speeds up the computations by processing event batches in parallel at the price of determinism.\nAll batch engine implementations require the following parameters:\noutputReplayStrategy - determines how the output monitors get notified after the batch has been processed. Available values: aggregate - only the state after the batch processing is sent to the monitors replay - all the state changes get sent to the monitors ordered by scheduled time. Fixed Size Batch Engine Fixed size batch engine processes events in parallel in batches of fixed size.\nSample configuration:\nengine-configuration: type: FixedBatchEngineConfiguration parameters: outputReplayStrategy: aggregate batchSize: 4 Epsilon Batch Engine Epsilon dynamic size batch engine processes events in parallel in batches constructed using the epsilon sensitivity value. Events get added to the batch as long as the difference in scheduled time is lesser than the given epsilon value.\nSample configuration:\nengine-configuration: type: EpsilonBatchEngineConfiguration parameters: outputReplayStrategy: aggregate epsilonValue: 0.01 0.01 is a reasonable baseline, experiment to find the best value for your case.",
    "description": "Available simulation engine configurations.",
    "tags": [
      "Configuration",
      "Engine",
      "Batch",
      "Parallel"
    ],
    "title": "Simulation Engine Configuration",
    "uri": "/howtos/execution/engine/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation",
    "content": "\u003cdiv style=\"position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;\"\u003e \u003ciframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"allowfullscreen\" loading=\"eager\" referrerpolicy=\"strict-origin-when-cross-origin\" src=\"https://www.youtube.com/embed/yuaY_8Vr3oc?autoplay=0\u0026amp;controls=1\u0026amp;end=0\u0026amp;loop=0\u0026amp;mute=0\u0026amp;start=0\" style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;\" title=\"YouTube video\"\u003e\u003c/iframe\u003e \u003c/div\u003e Prerequisites This guide assumes you already know the Alchemist metamodel and that you keep the YAML reference at your fingertips.\nSmartcam A smartcam is a camera able to detect objects of interest and to communicate with other smartcameras. In many cases it is also assumed to be mounted on a drone as to be able to freely move around in the environment. In Alchemist, smartcams are simulated as Nodes equipped with specific Reactions defining their capabilities and behaviour. Single capabilities are expressed as Actions.\nVision The most basic example of a camera is a Node containing a Reaction with the CameraSee action.\nWarning Note: the CameraSee action currently only works in 2D environments supporting euclidean geometry, for example Continuous2DEnvironment.\nCameraSee requires the following parameters:\nthe distance of the field of view, its angle in degrees, and the name of the Molecule which will contain the ouput, namely, the list of nodes contained in the field of view, which is updated every time the action is triggered, optionally, a fourth parameter can be defined in order to filter the output, such parameter is expected to be the name of a Molecule which has to be contained in a Node for it to be visible, e.g., if it is wanted then only nodes containing a molecule named wanted will be seen. Movement The ability to move can be defined using movement actions such as MoveToTarget or FollowAtDistance.\nMoveToTarget expects 2 parameters:\nthe name of the molecule containing the target’s position, and the movement speed. FollowAtDistance requires:\nthe name of the molecule containing the target’s position, the distance to mantain from the target, and the movement speed. Rotation HeadTowardTarget can be used to instruct cameras to always face the specified target.\nSpin only requires the angular speed and will make the camera spin around itself like a radar.\nOther behavior Without defining an algorithm the cameras wouldn’t do anything interesting. Algorithms can be definied in a moltitude of different ways, depending on the incarnation. Usually, camera readings are used as sensors that get read by, e.g., Protelis or Scafi programs.\nFurther references Lukas Esterle, Peter R. Lewis\nOnline Multi-object k-coverage with Mobile Smart Cameras\nIn Proceedings of the International Conference on Distributed Smart Cameras (ICDSC). Nominated for best paper. 2017.",
    "description": "Simulate robots with a field of view.",
    "tags": [
      "Drone",
      "Smart Camera"
    ],
    "title": "Smart cameras and drones",
    "uri": "/howtos/simulation/smartcam/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides",
    "content": "Guides for the project contributors Development Contents Developer's guideHow to contribute\nEnrich the GraphQL APIHow to create a new Query, Subscription, or Mutation using the GraphQL API\nImport Alchemist in an IDEThe recommended way to get and import the Alchemist project in an IDE\nBuild and run the QAHow to locally build and test the simulator",
    "description": "How to contribute to the project, hence achieving eternal glory",
    "tags": [],
    "title": "Development",
    "uri": "/howtos/development/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation \u003e Deploy Nodes",
    "content": "Importing maps GPS traces require a geospatial environment. We prepared a dedicated page on the topic.\nGPS traces can be used to deploy nodes on a map. FromGPSTrace is a Deployment that takes care of setting the initial position of the nodes depending the first position of the GPS traces.\nThe class supports deploying more nodes than there are available traces by reusing them cyclically.\nClick to show / hide code environment: type: OSMEnvironment parameters: [\"vcm.pbf\", false] # Requires the file vcm.pbf in the classpath! incarnation: sapere _pools: - pool: \u0026move - time-distribution: 0.1 type: Event actions: - type: ReproduceGPSTrace parameters: [\"gpsTrace\", true, \"AlignToSimulationTime\"] deployments: - type: FromGPSTrace parameters: [7, \"gpsTrace\", true, \"AlignToSimulationTime\"] programs: - *move terminate: type: StableForSteps parameters: equalIntervals: 5 checkInterval: 100 Get GPS data for your experiments The great folks at OpenStreetMap release GPS data for the whole planet. As per the map information, regional extracts are available (the full data pack is otherwise larger than 50GB uncompressed).\nAlignment of time Often, GPS traces are collected at different points in time. When this is the case, a strategy must be concted to “align” them: for instance, we may want all traces to be interpreted as beginning at the same time, regardless of the actual time they were taken; or we might want to discard the first hour of data; or maybe we want to use them just as they are.\nAlignment is performed by the subclasses of it.unibo.alchemist.boundary.gps\nThe strategies available to align time of GPS trace are the following:\nNoAlignment No alignment is performed, traces are left untouched.\nTrace Original time samples Aligned time samples A [2, 5] [2, 5] B [4, 6] [4, 6] AlignToFirstTrace: All traces get aligned to the start time of the first trace, keeping their relative distance.\nTrace Original time samples Aligned time samples A [2, 5] [0, 3] B [4, 6] [2, 4] AlignToSimulationTime: Aligns all traces to the initial simulation time, not preserving relative time differences.\nTrace Original time samples Aligned time samples A [2, 5] [0, 3] B [4, 6] [0, 2] AlignToTime: Aligns all traces with the given time in seconds from Epoch. Discards all points before the provided epoch, and shifts back all points located after that time to the initial simulation time, preserving relative distances\nTrace Provided Epoch Original time samples Aligned time samples A 3 [2, 5] [2] B 3 [4, 6] [1, 3] Examples Click to show / hide code environment: type: OSMEnvironment parameters: [\"vcm.pbf\", false] # Requires the file vcm.pbf in the classpath! incarnation: sapere _pools: - pool: \u0026move - time-distribution: 0.1 type: Event actions: - type: ReproduceGPSTrace parameters: [\"gpsTrace\", true, \"AlignToSimulationTime\"] deployments: - type: FromGPSTrace parameters: [7, \"gpsTrace\", true, \"AlignToSimulationTime\"] programs: - *move terminate: type: StableForSteps parameters: equalIntervals: 5 checkInterval: 100",
    "description": "Deployment of nodes on map-based environments using GPS data.",
    "tags": [
      "Deployment",
      "Node",
      "Nodes",
      "Gps",
      "Traces",
      "Gpx"
    ],
    "title": "GPS Traces",
    "uri": "/howtos/simulation/deploy/gps/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Simulation \u003e Deploy Nodes",
    "content": "Alchemist supports Graphstream-based deployments, allowing for rich graphs to be used as node deployments.\nDeployments of this kind can be instanced through GraphStreamDeployment.\nThe most important parameter is the graph name, which must be a valid graph Generator name in GraphStream. If the generator’s name ends in Generator, the last part can be omitted. The trailing parameters are passed directly to the constructor of the generator.\nIn the following example, the deployment is used to generate a Lobster graph:\nClick to show / hide code incarnation: sapere environment: type: Continuous2DEnvironment parameters: [] seeds: scenario: 0 simulation: 0 deployments: type: GraphStreamDeployment parameters: [400, \"Lobster\", 2, 10]",
    "description": "Deployment of nodes into arbitrary graphs.",
    "tags": [
      "Deployment",
      "Node",
      "Nodes",
      "Graph",
      "Graphstream",
      "Scale Free"
    ],
    "title": "Graphs",
    "uri": "/howtos/simulation/deploy/graph/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Development",
    "content": "Contributions to this project are welcome. Just some notes:\nUse conventional commits. The build auto-generates aggressive git hooks that enforce the rules. Contributions must be realized in forks of the project. Once a contribution is ready, please open a pull request. Keep in sync with the mainline (our master branch), preferably via rebasing. Commit often. Small pull requests targeting a small part of a larger work are very welcome if they can be merged individually. Do not introduce low quality code. All the new code must comply with the checker rules (that are quite strict) and must not introduce any other warning. Resolutions of existing warnings (if any is present) are very welcome instead. Fixes should include a regression test. New features must include appropriate test cases. Any change should cause an extension or modification of the documentation, that must be kept up to date",
    "description": "How to contribute",
    "tags": [
      "Development",
      "Contributions",
      "Commits"
    ],
    "title": "Developer's guide",
    "uri": "/howtos/development/contributions/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Development",
    "content": "It is possible to integrate new queries, mutations, or subscriptions into the GraphQL API. This augmentation offers a more organized and predictable approach for interacting with the simulator, thanks to static typing and schema definition.\nIt is possible to use GraphQL APIs for the development of a module inside Alchemist. The GraphQLClient class will take care of establishing a connection to the GraphQL server, validate and compute operations and return their results. This component has been developed in a multiplatform environment, so that applications can run on platforms like Android, iOS, Kotlin/JS or Kotlin/Native.\nCreate a new Query, Mutation, or Subscription In order to create new queries, mutations, or subscriptions, follow these steps:\nInclude the alchemist-graphql common source set in your project. implementation(alchemist(\"graphql\")) Define the structure of the data you need when executing one of the provided operations, inside a set of files with .graphql extension placed in the alchemist-graphql/src/commonMain/resources/graphql/ directory. The following is an example of a query that retrieves the contents of a node by its ID: # NodeQuery.graphql query Node($id: Int!) { nodeById(id: $id) { contents { entries { molecule { name } concentration } } } } Use GraphiQL to build client’s operations files You can test the structure of the data that you need inside the GraphiQL playground, in order to get predicable results when compiling your operations. GraphiQL also notices you if you are writing incorrect operations with useful explanation about the errors.\nRun the Gradle task ./gradlew :alchemist-graphql:generateApolloSources in order to generate Kotlin’s source code that represents the results of operations called in previously defined files.\nUse the defined GraphQL compiled operations on top of the GraphQLClient to execute them.\nval client: GraphQLClient = GraphQLClientFactory.basicClient() /* `NodeQuery` is the generated code for the GraphQL operation defined in the example above */ val node: Node? = client.query(NodeQuery(nodeId = 10)).execute().data",
    "description": "How to create a new Query, Subscription, or Mutation using the GraphQL API",
    "tags": [
      "Graphql",
      "Query",
      "Subscription"
    ],
    "title": "Enrich the GraphQL API",
    "uri": "/howtos/development/graphql/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Development",
    "content": "Recommended IDE configuration The project is easiest to import in IntelliJ Idea. The project can be imported directly as a Gradle project. If you intend to develop new parts in Scala, we suggest to install the Scala plugin for IntelliJ Idea.\nForking the project To contribute to the Alchemist project you must fork it and work on your own copy. In this way you can:\npush all your commits, saving your work on the cloud; exploit the included continuous integration jobs to check the project status; contribute back to the main project via pull requests directly from GitHub. Importing the project Clone either the Alchemist repository or your personal fork in a folder of your preference using git clone --recurse-submodules \u003cALCHEMIST_REPO_URI\u003e. Right click on settings.gradle.kts, select “Open With” and use IntelliJ Idea. The procedure may be slightly different depending on your operating system and desktop environment.\nIf you have a terminal, and if you can launch idea from there, just:\ncd \u003cLOCATION_WHERE_YOU_CLONED_THE REPOSITORY\u003e idea . (we are assuming that you can launch IntelliJ Idea with the idea command, replace it with the correct one for your system)",
    "description": "The recommended way to get and import the Alchemist project in an IDE",
    "tags": [
      "Import",
      "IDE",
      "IntelliJ Idea"
    ],
    "title": "Import Alchemist in an IDE",
    "uri": "/howtos/development/ide-import/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e How-to Guides \u003e Development",
    "content": "Building with Gradle The recommended way to execute any Gradle build is with the help of the Gradle Wrapper (in short just “Wrapper”). The Wrapper is a script that invokes a declared version of Gradle, downloading it beforehand if necessary. As a result, developers can get up and running with a Gradle project quickly without having to follow manual installation. For more information please refer to the Gradle’s documentation website.\ngradlew vs. gradlew.bat Depending on which scripting environment you are using the wrapper can be invoked with gradlew or gradlew.bat. Windows users are likely to use the latter.\nBuilding the project The project can get build via Gradle:\n./gradlew assemble --parallel When imported in IntelliJ Idea as Gradle project, the IDE will use Gradle under the hood to run the necessary steps to perform compilation and packaging.\nTesting Testing can be executed by issuing\n./gradlew test --parallel Quality Assurance To perform a QA run\n./gradlew check --parallel Generating the website To generate the Alchemist website run\n./gradlew hugoBuild --parallel Website preview For a preview of the website issue:\n./gradlew hugo --command=serve The terminal output will show a link, most likely https://localhost:1313/, where the website is being served.",
    "description": "How to locally build and test the simulator",
    "tags": [
      "Build",
      "Report",
      "IntelliJ",
      "Gradle",
      "Javadoc"
    ],
    "title": "Build and run the QA",
    "uri": "/howtos/development/building/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Reference",
    "content": "The current, Swing-based graphical interface for Alchemist is being replaced by a new, JavaFX-based interface. This page currently hosts minimal information on how to use such legacy GUI.\nShortcuts Key binding Active Effect L always (En/Dis)ables the painting of links between nodes M always (En/Dis)ables the painting of a marker on the closest node Mouse pan in normal mode Moves around Mouse wheel in normal mode Zooms in/out Double click in normal mode Opens a frame with the closest node information Right click in normal mode Enters screen rotation mode P always Plays/pauses the simulation R always Enables the real-time mode Left arrow always Speeds the simulation down (more calls to the graphics) Right arrow always Speeds the simulation up (less calls to the graphics) S always Enters / exits the select mode (nodes can be selected with the mouse) O in select mode Selected nodes can be moved by drag and drop E in select mode Enters edit mode (to manually change node contents)",
    "description": "Key mappings for the Java Swing-based graphical interface",
    "tags": [
      "Key Mapping",
      "Hotkeys",
      "Gui",
      "Swing",
      "Graphical Interface"
    ],
    "title": "Swing GUI",
    "uri": "/reference/swing/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator",
    "content": "Understanding-oriented Explanation Contents The Alchemist Meta-ModelWhat does Alchemist simulate? A trip on the abstractions that populate the world of Alchemist.\nThe Alchemist Simulation EngineHow does Alchemist simulate? What is at its core?\nBiochemistry IncarnationBasics of the biochemistry incarnation.\nCognitive AgentsAgents with realistic human behavior.\nPathfindingStrategies to navigate the environment.\nSAPERE IncarnationBasics of SAPERE and how its concepts are mapped in Alchemist.",
    "description": "Explanation, or discussions, clarify and illuminate a particular topic. They are a chance for the documentation to relax and step back from the software, taking a wider view, illuminating it from a higher level or even from different perspectives. You might imagine a discussion document being read at leisure, rather than over the code.",
    "tags": [],
    "title": "Explanation",
    "uri": "/explanation/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator",
    "content": "Information-oriented Reference Contents YAML simulation specificationSpecification of the YAML-based language simulations are configured with.\nAPI DocsKDoc API docs. Captures both Java and Kotlin API abstractions.\nPer-module API DocsKDoc API docs. Captures both Java and Kotlin API abstractions.\nProject organizationLocations where things are found: build files, API implementations\nBiochemistry IncarnationReference documentation of the reactions language for the biochemistry incarnation.\nCommand Line interfaceAvailable CLI options.\nDefault Graphical User InterfaceRedirect page for the current default graphical interface\nSAPERE IncarnationReference API for the SAPERE Incarnation.\nSwing GUIKey mappings for the Java Swing-based graphical interface",
    "description": "Reference guides are technical, austere, and to the point descriptions of the machinery and how to operate it. Reference guides have one job only: to describe. They are code-determined, because ultimately that’s what they describe: key classes, functions, APIs, and so they list things like functions, fields, attributes and methods, and set out how to use them.",
    "tags": [],
    "title": "Reference",
    "uri": "/reference/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Basics",
    "uri": "/tags/basics/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Deployment",
    "uri": "/tags/deployment/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Examples",
    "uri": "/tags/examples/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Export",
    "uri": "/tags/export/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Graph",
    "uri": "/tags/graph/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Indoor",
    "uri": "/tags/indoor/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Maps",
    "uri": "/tags/maps/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Tutorial",
    "uri": "/tags/tutorial/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Video",
    "uri": "/tags/video/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Action",
    "uri": "/tags/action/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Agents",
    "uri": "/tags/agents/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Aggregate",
    "uri": "/tags/aggregate/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Aggregate Computing",
    "uri": "/tags/aggregate-computing/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Aggregate Programming",
    "uri": "/tags/aggregate-programming/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Analysis",
    "uri": "/tags/analysis/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Api",
    "uri": "/tags/api/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Api Docs",
    "uri": "/tags/api-docs/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Artefacts",
    "uri": "/tags/artefacts/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Batch",
    "uri": "/tags/batch/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Behavior",
    "uri": "/tags/behavior/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Biochemistry",
    "uri": "/tags/biochemistry/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Build",
    "uri": "/tags/build/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Build System",
    "uri": "/tags/build-system/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Cli",
    "uri": "/tags/cli/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Cognitive",
    "uri": "/tags/cognitive/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Command Line",
    "uri": "/tags/command-line/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Commits",
    "uri": "/tags/commits/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Concentration",
    "uri": "/tags/concentration/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Condition",
    "uri": "/tags/condition/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Configuration",
    "uri": "/tags/configuration/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Connect",
    "uri": "/tags/connect/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Connection",
    "uri": "/tags/connection/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Content",
    "uri": "/tags/content/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Contributions",
    "uri": "/tags/contributions/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Crowd",
    "uri": "/tags/crowd/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Csv",
    "uri": "/tags/csv/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Data",
    "uri": "/tags/data/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Data Analysis",
    "uri": "/tags/data-analysis/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Development",
    "uri": "/tags/development/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Disaster",
    "uri": "/tags/disaster/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Discrete-Event Simulation",
    "uri": "/tags/discrete-event-simulation/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Dokka",
    "uri": "/tags/dokka/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Draw",
    "uri": "/tags/draw/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Drawing",
    "uri": "/tags/drawing/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Driver",
    "uri": "/tags/driver/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Drone",
    "uri": "/tags/drone/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Drones",
    "uri": "/tags/drones/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Dry",
    "uri": "/tags/dry/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Effects",
    "uri": "/tags/effects/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Engine",
    "uri": "/tags/engine/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Environment",
    "uri": "/tags/environment/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Example",
    "uri": "/tags/example/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Execution",
    "uri": "/tags/execution/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Experiment",
    "uri": "/tags/experiment/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Extension",
    "uri": "/tags/extension/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Fatjar",
    "uri": "/tags/fatjar/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Geo-Spatial Data",
    "uri": "/tags/geo-spatial-data/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Geospatial",
    "uri": "/tags/geospatial/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Gibson-Bruck",
    "uri": "/tags/gibson-bruck/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Gillespie",
    "uri": "/tags/gillespie/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Gps",
    "uri": "/tags/gps/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Gpx",
    "uri": "/tags/gpx/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Gradle",
    "uri": "/tags/gradle/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Graphical Interface",
    "uri": "/tags/graphical-interface/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Graphics",
    "uri": "/tags/graphics/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Graphql",
    "uri": "/tags/graphql/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Graphstream",
    "uri": "/tags/graphstream/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Grid",
    "uri": "/tags/grid/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Groovy",
    "uri": "/tags/groovy/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Gui",
    "uri": "/tags/gui/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Hotkeys",
    "uri": "/tags/hotkeys/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: IDE",
    "uri": "/tags/ide/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Imageonomics",
    "uri": "/tags/imageonomics/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Import",
    "uri": "/tags/import/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Installation",
    "uri": "/tags/installation/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: IntelliJ",
    "uri": "/tags/intellij/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: IntelliJ Idea",
    "uri": "/tags/intellij-idea/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Interaction",
    "uri": "/tags/interaction/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Interpolation",
    "uri": "/tags/interpolation/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Jar",
    "uri": "/tags/jar/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Javadoc",
    "uri": "/tags/javadoc/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Jsr223",
    "uri": "/tags/jsr223/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Junction",
    "uri": "/tags/junction/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Kdoc",
    "uri": "/tags/kdoc/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Key Mapping",
    "uri": "/tags/key-mapping/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Kotlin",
    "uri": "/tags/kotlin/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Language",
    "uri": "/tags/language/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Launch",
    "uri": "/tags/launch/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Layer",
    "uri": "/tags/layer/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Layers",
    "uri": "/tags/layers/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator",
    "content": "Legal information The Alchemist Simulator License Explanation for humans Alchemist adopts a GNU GPLv3 license with a permissive modification. Alchemist or parts of it can be used in commercial products and closed-source software components, as far as they are not mutated. Namely, the GPLv3 is extended with a linking/classpath exception, so it can be used freely as a library, but modified versions the software must instead be released with a GPLv3 compatible lincesing scheme. There is no requirement for the portion of the program calling Alchemist to be reverse-engineerable (the Alchemist license is more permissive than GNU LGPL). If you use the simulator for academic purposes, then you must refer the appropriate paper.\nActual license Alchemist is Copyright (C) 2010-2024, Danilo Pianini and contributors listed in the pom.xml file available for each module from \"The Central Repository\", reachable from https://central.sonatype.com/.\nAlchemist is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3, or (at your option) any later version. Alchemist's documentation is licensed under the Creative Commons Attribution 3.0 License.\nAlchemist is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.\nYou should have received a copy of the GNU General Public License along with Alchemist; see the file GPLv3.txt. If not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.\nCompiling or linking this code statically or dynamically with other modules is making a combined work based on this code. Thus, the terms and conditions of the GNU General Public License cover the whole combination.\nAs a special exception, the copyright holders of this code give you permission to compile or link this code with independent modules to produce an executable, regardless of the license terms of these independent modules, and to copy and distribute the resulting executable under terms of your choice, provided that you also meet, for each independent module, the terms and conditions of the license of that module. An independent module is a module which is not derived from or based on this code. If you modify this code, you may extend this exception to your version of the code, but you are not obligated to do so. If you do not wish to do so, delete this exception statement from your version.\nOver and above the legal restrictions imposed by this license, if you use this software for an academic publication then you are obliged to provide proper attribution. This should be to the paper that describes this simulator, described in the CITATION file that comes with this software distribution.",
    "description": "Legal information The Alchemist Simulator License Explanation for humans Alchemist adopts a GNU GPLv3 license with a permissive modification. Alchemist or parts of it can be used in commercial products and closed-source software components, as far as they are not mutated. Namely, the GPLv3 is extended with a linking/classpath exception, so it can be used freely as a library, but modified versions the software must instead be released with a GPLv3 compatible lincesing scheme. There is no requirement for the portion of the program calling Alchemist to be reverse-engineerable (the Alchemist license is more permissive than GNU LGPL). If you use the simulator for academic purposes, then you must refer the appropriate paper.",
    "tags": [],
    "title": "License",
    "uri": "/license/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Light",
    "uri": "/tags/light/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Linking Rule",
    "uri": "/tags/linking-rule/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Linux",
    "uri": "/tags/linux/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Live Semantic Annotation",
    "uri": "/tags/live-semantic-annotation/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Lsa",
    "uri": "/tags/lsa/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Mass",
    "uri": "/tags/mass/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Max_map_count",
    "uri": "/tags/max_map_count/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Memory Leak",
    "uri": "/tags/memory-leak/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Memory Pressure",
    "uri": "/tags/memory-pressure/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Metamodel",
    "uri": "/tags/metamodel/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Metric",
    "uri": "/tags/metric/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Model",
    "uri": "/tags/model/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Molecule",
    "uri": "/tags/molecule/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Mongodb",
    "uri": "/tags/mongodb/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Monitors",
    "uri": "/tags/monitors/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Multivesta",
    "uri": "/tags/multivesta/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Navigation Mesh",
    "uri": "/tags/navigation-mesh/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Neighborhood",
    "uri": "/tags/neighborhood/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Network",
    "uri": "/tags/network/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Network Model",
    "uri": "/tags/network-model/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Node",
    "uri": "/tags/node/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Nodes",
    "uri": "/tags/nodes/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Opengl",
    "uri": "/tags/opengl/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Optimization",
    "uri": "/tags/optimization/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Options",
    "uri": "/tags/options/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Output Monitors",
    "uri": "/tags/output-monitors/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Packages",
    "uri": "/tags/packages/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Parallel",
    "uri": "/tags/parallel/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Pathfinding",
    "uri": "/tags/pathfinding/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Pedestrian",
    "uri": "/tags/pedestrian/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Physics",
    "uri": "/tags/physics/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Planimetry",
    "uri": "/tags/planimetry/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Pollution",
    "uri": "/tags/pollution/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Program",
    "uri": "/tags/program/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Programming",
    "uri": "/tags/programming/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Protelis",
    "uri": "/tags/protelis/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Query",
    "uri": "/tags/query/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Quickstart",
    "uri": "/tags/quickstart/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Random",
    "uri": "/tags/random/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Randomness",
    "uri": "/tags/randomness/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Reaction",
    "uri": "/tags/reaction/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Replicability",
    "uri": "/tags/replicability/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Report",
    "uri": "/tags/report/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Reproducibility",
    "uri": "/tags/reproducibility/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Run",
    "uri": "/tags/run/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Sapere",
    "uri": "/tags/sapere/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Scafi",
    "uri": "/tags/scafi/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Scala",
    "uri": "/tags/scala/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Scala Fields",
    "uri": "/tags/scala-fields/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Scale Free",
    "uri": "/tags/scale-free/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Seed",
    "uri": "/tags/seed/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Shadowjar",
    "uri": "/tags/shadowjar/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Shape",
    "uri": "/tags/shape/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator",
    "content": "Examples from published papers Showcase Contents 2020: Optimal resilient distributed data collection in mobile edge environmentsSimulation of crowd control with mobile in Turin.\n2022: Dynamic Decentralization Domains for the Internet of ThingsSimulation of collective distributed sensing and acting using Toronto rain gauge’s data.\n2022: Situated recommendation systemSimulation of people attending attractions inside the Mirabilandia amusement park.\n2022: Turin's 2017 stampede in simulationSimulation of Piazza San Carlo crowd disaster\n2024: Aggregate Vascular Morphogenesis ControllerSimulations related to the generalization of the Vascular Morphogenesis algorithm using the Aggregate Computing paradigm, presented at ACSOS 2024.\n2024: Decentralized Multi-Drone Coordination for Wildlife Video AcquisitionSimulation of decentralized multi-drone coordination for wildlife video acquisition.",
    "description": "Examples from published papers Showcase Contents 2020: Optimal resilient distributed data collection in mobile edge environmentsSimulation of crowd control with mobile in Turin.\n2022: Dynamic Decentralization Domains for the Internet of ThingsSimulation of collective distributed sensing and acting using Toronto rain gauge’s data.\n2022: Situated recommendation systemSimulation of people attending attractions inside the Mirabilandia amusement park.\n2022: Turin's 2017 stampede in simulationSimulation of Piazza San Carlo crowd disaster",
    "tags": [],
    "title": "Showcase",
    "uri": "/showcase/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Simulation",
    "uri": "/tags/simulation/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Simulation Monitoring",
    "uri": "/tags/simulation-monitoring/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Simulations",
    "uri": "/tags/simulations/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Smart Camera",
    "uri": "/tags/smart-camera/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Specification",
    "uri": "/tags/specification/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Subscription",
    "uri": "/tags/subscription/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Swing",
    "uri": "/tags/swing/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Temperature",
    "uri": "/tags/temperature/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Termination",
    "uri": "/tags/termination/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Time",
    "uri": "/tags/time/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Traces",
    "uri": "/tags/traces/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Tuple",
    "uri": "/tags/tuple/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Tuple Centre",
    "uri": "/tags/tuple-centre/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Tuple Space",
    "uri": "/tags/tuple-space/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Understand",
    "uri": "/tags/understand/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Variable",
    "uri": "/tags/variable/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Variables",
    "uri": "/tags/variables/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Vascular Morphogenesis",
    "uri": "/tags/vascular-morphogenesis/index.html"
  },
  {
    "breadcrumb": "The Alchemist Simulator \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Yaml",
    "uri": "/tags/yaml/index.html"
  }
]
