# Game of Thrones
## Not the Show: A Combinatorial Game Using Graph Theory

### Description
A **combinatorial game** is a game in which there is no randomization (like dice or flipping a coin) and in which there is perfect information, meaning that both players know everything about the state of the game. A combinatorial game played on graphs refers to the pair-wise mathematical structure that represents relationships between objects, typically represented by vertices (the objects) and edges (lines that connect the objects.) 

**The Game of Thrones** is a combinatorial game played on a type of graph called a **tournament.** A **tournament** is a graph in which every pair of vertices is connected by an edge *and* every edge has a direction (i.e. point A is directed towards point B.) These are also called completed directed graphs or digraphs. 

How to Play:
- If there is an edge from *x* to *y*, we say that *x* beats *y*. The score of a vertex is how many vertices it beats.
- A **king** in a tournament is a vertex *v* such that for every other vertex *x*, there exists either an edge from *v* to *x* **OR** there exists a vertex *y* such that there is an edge from *v* to *y* AND *y* to *x*.
- Players take turns removing vertices where the next player will play on the induced subgraph of the tournament, and ends when there is exactly one king left in the tournament. Hence the name Game of Thrones; there can only be one king.

Here is an example of a game that ends after 3 turns. Kings are shown in blue: 

<p float="left">
  <img src="images/game_1.png.png" width="50" />
  &rarr;
  <img src="images/game_1.png.png" width="50" /> 
  &rarr;
  <img src="images/game_1.png.png" width="50" />
  &rarr;
  <img src="images/game_1.png.png" width="50" />
</p>

### Tournament Applet
Following the JavaScript code in [Trevor’s William’s 2017 dissertation](https://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=7649&context=etd), I was able to recreate his tournaments applet in GeoGebra. It takes in a binary string that represents the adjacencies of the upper triangle of a tournament and creates a tournament that can show/hide any kings. This applet can help you find where the kings are in a game and when in edit mode, you can manually delete vertices to play the game. 

Visit this [list of digraphs](http://users.cecs.anu.edu.au/~bdm/data/digraphs.html) to retrieve a starting game in the form of a binary string.

Applet [here](https://www.geogebra.org/m/gfc8v9dz)

Source code is provided in tournament_applet_source.js if you wish to recreate the applet. Follow instructions [here](https://wiki.geogebra.org/en/Tutorial:Responsive_Applets).

If you want to edit the applet without recreating it from scratch, download tournament_applet_complete.ggb and run on [desktop GeoGebra](https://www.geogebra.org/download?lang=en).

To read more about combinatorial games on graphs, see my full university presentation on combinatorial_games_presentation.pptx.

### Resources
[https://en.wikipedia.org/wiki/Sprague%E2%80%93Grundy_theorem#Proof](https://en.wikipedia.org/wiki/Sprague%E2%80%93Grundy_theorem#Proof)

[https://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=7649&context=etd](https://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=7649&context=etd)

[https://www.cs.cmu.edu/afs/cs/academic/class/15859-f01/www/notes/comb.pdf](https://www.cs.cmu.edu/afs/cs/academic/class/15859-f01/www/notes/comb.pdf)

[https://math.rice.edu/~michael/teaching/2012Fall/nim.pdf](https://math.rice.edu/~michael/teaching/2012Fall/nim.pdf)

[https://wiki.geogebra.org/en/Tutorial:Responsive_Applets](https://wiki.geogebra.org/en/Tutorial:Responsive_Applets)




