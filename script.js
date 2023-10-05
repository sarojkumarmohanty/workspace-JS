class Persion{
    constructor (firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    get fullName(){
        return this.firstName+' '+this.lastName;
    }

}

var p=new Persion('amit','sahoo');

console.log(p.fullName);