
//  ====== DESTRUCTORING =======


let ob = {
    name:"rajivtalvar",
    id:221
}

const {name,id}= ob
//console.log(name);



let ar = [2,5,65];
const [a,b,c] = ar;
//console.log(a);
 
//====== 2nd question ======
class Emp{
    displayInfo(name,id,salary){
        console.log(` name= ${name} id= ${id} salary= ${salary}`);
    }
}

let object = new Emp();
//object.displayInfo("shyamsunderhait",21,5000000)



// ===== CONSTRUCTOR SAMPLE ======
class Emp1 {
   constructor(name,id,salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
   }
}

let object1 = new Emp1("shyamsunderhait",21,35000);
//console.log(object1);

// ====== TRY/CATCH ======

try {
    const nigga = 324;
    nigga = "shashikant"
} catch (error) {
    //console.log(error.name);
    //console.log(error.message);
}


// ======= PROMISE / ASYNC / AWAIT =======

function lenaDenaBank(){
    return new Promise((resolve,reject)=>{
        const bal = Math.random()>0.5;
        if(bal){
            resolve({message:'WHAT WOULD YOU HAVE SIR'})
        }else{
        reject({message:'GAREEBI REKHA KE NICHE BHAG JAA YAHASE'})
        }
    })
}

lenaDenaBank().then((data)=>{
    console.log('AMEER: ',data.message);
}).catch((error)=>{
    console.log('GAREEB: ',error.message);
})

async function khataJodo() {
 const data = await lenaDenaBank();
 if(data){
    console.log(data);
 } else{
    console.log('PLEASE GO OUT');
 }  
}

khataJodo();













