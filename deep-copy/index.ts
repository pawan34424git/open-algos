// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

interface SClass {
  name:string
}

interface Hostal{
  name:string
  roll?:number
}

interface Student {
  classes?: SClass[]
  hostal?: Hostal
}

const student : Student = {
  classes:[
    {name:'math'},
    {name: 'english'}
  ],
  hostal :{
    name:'hostalname1',
    roll: 1234
  }
}

const dest:Student={};

const deepCopy=(srcObj,destObj)=>{
  Object.keys(srcObj).forEach(key=>{
      if(typeof(srcObj[key])==  'object'){
        const aa= {};
        destObj[key]  = aa
        deepCopy(srcObj[key],aa);

      }else if(Array.isArray(srcObj[key])){

         destObj[key] = srcObj[key].reduce((a,c)=> {
           const dc={}
           deepCopy(c,dc);
           a.push(dc);
           return a;
         },[]);
      }else{
        destObj[key] = srcObj[key];
       
      }

  })
}
deepCopy(student,dest);





student.classes[1].name="new";



console.log({student,dest})
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;