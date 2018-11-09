## Search React App

This project is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) to give the initial setup.

## Explanation

Just created one container and one component to handle this search box. 

Search container is managing the state and the events for the child item which is Search component.
Search component is basiccally takes everything from outside as props (as much as needed) and build dynamic design with the help of renderItem prop. This also help for the testing of the component.

This component built by respecting UI need like responsive design, UI transitions.

I try to make design and properties for the data dynamic, which means i passed renderItem to redesign the list item.
I would separate 'li' item to a separate stateless component, but i tought that this part is not going to be reusable(in this case), so i prefer to kept it simple.

I also did not use redux in this project, since i don't have anything to share globally.

### CSS

I used regular css with media queries to make serach box responsive. Normally i would use sass, but the reason that i did not use, since this project is build by [create react app] there is no webpack to setup sass (without eject). I intented to use [node-sass-chokidar], but it sounds weird to use external module just to build sass to css. In the end you just import css in this approach. 

### Unit testing

I tried to write test for the cases which requires changes in the design. 

### Storybook

Story book for serach box in 3 different position is done

## Folder Structure

The initial project structure looks like this:

```
search-react/
  README.md
  node_modules/
  package.json
  public/
    index.html
    manifest.json
  src/
    App.js
    App.test.js
    index.css
    index.js
    registerServiceWorker.js
```
