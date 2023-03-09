![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

# Project 7 "Les petits plats" from React JS Application Developer Training:<br/>
Develop a search algorithm in JavaScript.

![LOGO](./logo.png)<br/>
##
**Skills developed:**
- Analyze a computer problem
- Develop an algorithm to solve a problem
##
**Start the project:**<br/>
Nothing to install here, just open the index.html file.<br/>
<br/>
**Using the directory:**<br/>
This project contains 2 branches to test two different versions of the "search bar" functionality.
- "cla" branch:<br/>
:point_right: [here](https://github.com/cla31/Les-petits-plats-P7-Cla31/tree/cla)
- "secondAlgo" branch:<br/>
:point_right: [here](https://github.com/cla31/Les-petits-plats-P7-Cla31/tree/secondAlgo)
<br/>
The objective is to be able to compare their performance and then choose the best one.
##
**Project problem**:<br/> 
Filter recipes according to the needs of a user.<br/> 
The user must be able to enter a recipe in the search field and quickly access it in the interface.<br/>
- **Option 1: functional programming (see Flowchart below).**<br/>
Using prototype array functions. Here, use of the filter method of the array object which makes it possible to filter the recipes according to the term entered by the user in the search field. For this, the algorithm will check if there are matches between the user's input and the name of the recipe or its ingredients or its description.
If the recipe meets this condition, it is added to a table which will then display the recipes updated by the algorithm.
- **Option 2: native programming (see Algorigram below).
Using loops (while, for...)**<br/>
In this algorithm, use of the for loop which traverses the general array of recipes checking if there is a match between the input entered by the user and the name of the recipe or its description or its ingredients.
If the recipe meets this condition, it is added to a table which will then display the recipes updated by the algorithm.<br/>
**Chosen solution :**<br/>
It appears that the execution time of the algorithm in native programming clearly increases with the number of data.
The choice therefore falls on option 1, functional programming.
According to the console.time, the for takes longer if we increase the filters does not change or very little regardless of the number of data.
The for clearly increases with the number of data.
It appears that for the other tools, JSBench and JSBench.me, the for seems to perform better. However, these tools do not seem to take the number of data into account.<br/>
##
**flowchart:**
##
For more details on the feature performance study.
To view the page online click  :point_right: [here](https://github.com/cla31/Les-petits-plats-P7-Cla31/blob/cla/Fiche-investigation-de-fonctionnalité.pdf)
##
**Code Architecture:**
##
##
To view the page online click  :point_right: [here](https://cla31.github.io/Les-petits-plats-P7-Cla31/#)
##
Application overview  (in desktop version):
<br/>
<br/>
![DESKTOP-VERSION](./version-desktop.png)
<br/>
<br/>
Application overview (in mobile version):
<br/>
<br/>
![DESKTOP-VERSION](./version-mobile.png)
