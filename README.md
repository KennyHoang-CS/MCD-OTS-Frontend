# Mcdonalds' Order Taking Simulator: <http://wild-trees.surge.sh/>

## Description
<p> 
  The Mcdonald's OTS application is a Mcdonald's order taking simulator to stimulate how employees would take customer orders. This involves loading 
  in different type of menus: breakfast, lunch, and more. Users may play a game to see how fast they can complete orders to post their username and timer completion.
  
  <strong>Project (left) vs Mcdonalds' Real Ordering System (right)</strong>
  
  ![image](https://user-images.githubusercontent.com/77515138/124517531-0cd5b900-dd99-11eb-9272-5966c68ab82d.png)
</p>

## Features / Playing the Game 

<ul>
<li>A stimulation game to mock customers' orders, this will allow users to stimulate the Mcdonald's order taking system. </li>
  <li><strong>How fast can a user complete 19 customer orders? </strong> </li>
  <li>Click on food items to place them on the screen.</li>
  <li>Click on a size then a food item to make it a combo. Eligible breakfast items only have medium sized combos while eligible lunch items only have medium and large.</li>
  <li>Double click an item to toggle it.</li>
  <li>Clicking 'Void Item' deletes an item from the screen.</li>
  <li>To clear a drink from an item combo, toggle the item then click 'Clear Choice'.</li>
</ul> 

## Tests
<p>
<ol>
<li>Navigate to <strong>\McDonald Order-Taking Simular\mcdonalds-frontend\src</strong><br></li>
<li>Using the terminal, run the command <code>npm test</code></li>
</ol> 
</p>

## User Flows 
<ul>
<li>Visit the leaderboards before starting the game.</li>
<li>Play the game.</li>
<li>Browse through the varying menus.</li>
</ul> 

## Technology Stack 
<p>
 <ul>
<li>Javascript</li>
<li>React</li>
<li>Redux</li>
<li>Node.js</li>
   <li>Axios</li>
</ul> 
</p>

## Running the program
<ol>
  <li>Fork this project from the github page.</li>
  <li>Have node dependencies installed. </li>
  <li>Navigate to the <strong>\McDonald Order-Taking Simular\mcdonalds-frontend</strong> folder.</li>
  <li>Run the command <code>npm start</code>
<ol>
  
##### Side Notes
<p>
    There exists edge cases to be fixed when the user place items on the screen. I.E. Multiple distinct stand-alone drinks should be inserted into multiple upcoming combos.
    Common edge cases and other unique edge cases are fixed to provide a smooth experience of placing items on the screen. 
</p>  


