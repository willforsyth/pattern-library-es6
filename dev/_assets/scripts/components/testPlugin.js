import $ from 'jquery';

let logWidth = () => {
  let width = $('body').width();
  console.log(width)
};

let foo = "this is ES6";

export{foo, logWidth}
