# 33: Budget Tracker - Combining Reducers 

## Overview

A simple expense/budget React SPA (Single Page Application) with React DOM Router, Redux as state manager, and middleware logging state/actions.

#### Features

* create a new expense section
* create new cards under that section

* edit an expense section name
* edit a card expense name

* delete a card expense
* delete a section expense

* combine all expense cards created to see your total planned spending

### Bugs

- Currently, the only bug I have been dealing with is if you do not delete the "expense sections" in order of creation, the last expense section will not delete.

Recommend: 

To test this... 

* create several sections and even feel free to create cards under those sections. 
* When creating the sections, remember the order you created the sections and delete them from newest to oldest. 

Note: This works, however deleting the sections from oldest (1st created) to newest will leave the last expense section floating. The section name can be edited, cards created, card names edited, even expense amounts edited, just the section itself will not delete. 

### How To

##### Start react app and refresh actively

```
npm run watch
```

### Notes

Please note:

* This is a basic concept utilizing Redux to manage state. There is nothing "pretty" about this site, yet.
* Dashboard and display-section are the only view components.
* simple html/css for basic expense card modeling.

### Tests Performed with Jest

###### testing app.js

##### myfile.js

###### travis and jest will be integrated in future labs react labs...

### Built With

```
react, 
react-dom-router, 
ES6, babel, eslint, 
webpack, redux, 
react-redux, 
redux-devtools-extension,
etc.
```

*Please see package.json for full dependency details.*

### Contributing

Please feel free to contribute. Master branch auto merge locked for approval for non-contributors.

### Version

In Development

### Authors

![CF](http://i.imgur.com/7v5ASc8.png) **Benjamin West** 
