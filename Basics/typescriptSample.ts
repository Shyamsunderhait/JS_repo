// ====== CONSTRUCTOR | STATIC ========
class Emp {
    name:String;
    id:number;
    salary:number;
    constructor(name:string,id:number,salary:number){
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    display():void{
        console.log(`employee name is ${this.name} and id is ${this.id} and salary is ${this.salary}`)
    }
    static depInfo(department:string):void{
        console.log(department);
    }
}
const dep = new Emp('Rhino',234432,45000);
dep.display();
Emp.depInfo('Network marketing')


// ======= ABSTRAC ======

abstract class Abs{
    abstract meth1():void;
    abstract meth2():void;
    public meth3():void{
            console.log("nigggga moneyyyyyy")
    }
    static meth4():void{
        console.log("static method is done!!!")
    }
}

class Imp extends Abs{
    meth1(){
        console.log("meth 1 is done")
    }
    meth2(){
        console.log("meth 2 is done")
    }
    
}
const abs = new Imp();
abs.meth1();
abs.meth2();
abs.meth3();
Imp.meth4();

// ======= INTERFACE ======
interface Face{
     inter1():void;
     inter2():void;
}
class Ret implements Face{
    inter1(){
        console.log("inter 1 is done")
    }
    inter2(){
        console.log("inter2 is done")
    }
}

const ret = new Ret();
ret.inter1();
ret.inter2();

// ===== GENERICS ======

 
class Gen{
     gener<T>(network:T):T{
        return network;
    }
    
}
 const gen = new Gen();
 const call = gen.gener<string>("lavel sabke niklenge lekin niklenge uske jo yaha khada rahega")
 console.log(call)
 const all = gen.gener<string | number>(234);
 console.log(all)
