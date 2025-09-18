const element1 = React.createElement('h1',{id:"first",className:"name",style:{backgroundColor:"pink",fontSize:"30px"}},"Hello chand shamsi");
const element2 = React.createElement('h1',{id:"first",className:"name",style:{backgroundColor:"pink",fontSize:"30px"}},"kaise ho bhai");
const divElement = React.createElement('div',{},[element1,element2]);
/* ReactDOM.render is no longer supported in React 18. Use createRoot instead. 
Until you switch to the new API, your app will behave as if it's running React 17. 

ReactDOM.render(element,document.getElementById('root'));
 react17 tk to ye sahi chalta tha phir isko replicate kar diya gaya 
 react18 me ....aur react18 me ye chal to jaayega but error la kar de dega  
*/

//React18 me aise render kiya jata hai ..mtlb ye method hai 
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
//react root container is reactRoot
// reactRoot.render(element1);
// reactRoot.render(element2);

reactRoot.render(divElement);