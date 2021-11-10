# Mcdonalds' Order Taking Simulator: <http://wild-trees.surge.sh/>

## Description
<p> 
  The Mcdonald's OTS application is a Mcdonald's order taking simulator to stimulate how employees would take customer orders. This involves loading 
  in different type of menus: breakfast, lunch, and more. Users may play a game to see how fast they can complete orders to post their username and timer completion.
  
  <strong>Project (left) vs Mcdonalds' Real Ordering System (right)</strong>
  
  ![image](https://user-images.githubusercontent.com/77515138/124517531-0cd5b900-dd99-11eb-9272-5966c68ab82d.png)
</p>

## How I built this?
<p>
  Created a responsive front-end for different screen sizes between 600 and 1200+ pixels using media queries. React is used to create the user interface for
fake customers' orders and a variety of 10+ food menus. Redux handles the state of the user's food menu interactions for placing food items. Constructed
the back-end API to handle endpoint routes for all food items, a leaderboard, and fake customer orders using node, express, and PostgreSQL.
</p>

## My Source of Inspiration
<p>
  I worked at McDonald's as a crew member for 4+ years, and always wanted my new hires to gain more experience taking customers' orders outside the workplace. Hence, the project is born. 
</p>

## Features / Playing the Game 

<ul>
<li>A stimulation game to mock customers' orders, this will allow users to stimulate the Mcdonald's order taking system. </li>
  <li><strong>How fast can a user complete 19 customer orders? </strong> </li>
  <li>Click on food items to place them on the screen.</li>
  <li>Click on a size then a food item to make it a combo. Eligible breakfast items only have medium sized combos while eligible lunch items only have medium and large.</li>
  <li>Double click an item to toggle it.</li>
  <li>Clicking 'Void Item' deletes a toggled item from the screen.</li>
  <li>To clear a drink from an item combo, toggle the item then click 'Clear Choice'.</li>
</ul> 

<strong> 
  When you get a customer order correct, it will go to the next customer and the message status displays "Customer #X passed" (shown in left picture)
  When you get a customer order incorrect, the message status will display "Customer #X failed," so you must keep adjusting the order until the order is correct (shown in right picture).
</strong> <br> <br>

![image](https://user-images.githubusercontent.com/77515138/124642526-c9d11f80-de44-11eb-917f-e03c8998f51a.png)


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

## Responsive Layout 

![image](https://user-images.githubusercontent.com/77515138/124644542-3d742c00-de47-11eb-84c9-8de6824f410b.png)


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


