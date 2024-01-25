// React.createElement creates a React Element JS object
const heading = React.createElement(
  'h1',
  // Below everything is props
  {
    id: 'heading',
    className: 'heading',
  },
  'Hello World from React'
);

console.log(heading);

// This is how we can create nested elements
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', {}, 'Hello Nested Child')
  )
);

console.log('parent', parent);

// This is how we can create nested elements
const parentWithSibling = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { key: 1 }, 'Hello Nested Child'),
    React.createElement('h1', { key: 2 }, 'Hello Sibling Child'),
  ])
);

// React.createElement creates a mess in code
// and is hard to maintain hence JSX was introduced
// JSX is just and syntactic sugar which later gets
// converted to React.createElement

const root = ReactDOM.createRoot(document.getElementById('root'));

// Converts React element JS object into actualy DOM nodes
// which will be visible to the user
root.render(parentWithSibling);
