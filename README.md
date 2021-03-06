# Fun Budgie Front-end

## Overview

English summary:
A modern web app to make budgeting less of a hassle and ultimately allow you to get the most out of your paychecks. Use fun budgie to sretch your paychecks to and extract the most fun out of your monthly/yearly expenses.

Technical summary:
An expense/budget React SPA (Single Page Application) with React DOM Router, Redux as state manager, and middleware logging state/actions, and mongodb in backend.

#### Features

* create a new expense section
* create new cards under that section

* edit an expense section name
* edit a card expense name

* delete a card expense
* delete a section expense

* combine all expense cards created to see your total planned spending

### Current Bugs

- If you do not delete the "expense sections" in order of creation, the last expense section will not delete.
- If you do not add an amount to the first section you create, expense total does not add.
- If you put letters in the amount of the item expense, it changes to expense total to NaN. If you delete the  item it goes away, but ultimately this needs to be fixed.

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

TBD

### Tests Performed with Jest

TBD

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

### Current contributors 

**Benjamin West** 
