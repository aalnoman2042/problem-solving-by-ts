function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
        return input.toLowerCase()
    }
    else{
        return input.toUpperCase()
    }

}


 
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]  {
    let highRated: { title: string; rating: number }[] = []
    for(let i= 0; i <items.length ; i++  ){
        if(items[i].rating >= 4){
            highRated.push(items[i])
        }
    }
    return highRated
}





function concatenateArrays<T>(...arrays: T[][]): T[]{
    let array : T[] = []

     for (let i = 0; i < arrays.length ; i++){
        array = array.concat(arrays[i])
     }
     return array
}



class Vheicle {
    private make : string;
   private year : number;

    constructor(make: string, year: number){
        this.make = make
        this.year = year
    }
    getInfo(): string {
        return `make: ${this.make}, year: ${this.year}`
      }
} 

class Car extends Vheicle {
    private model : String;
    constructor( make: string,year: number,model: string, ) {
        super(make, year);
        this.model = model;
      }
    getModel (){
        return `Model: ${this.model}`
    }
}

 



function processValue(value: string | number): number{
    let multiplied = 0
    if(typeof value === "string" ){
        return value.length
    }else{
        return multiplied += value*2
    }
}

// problem 6
interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null
    }
  
    let max = products[0].price
    let higestPrice = products[0]
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > max) {
        max = products[i].price
        higestPrice = products[i]
      }
    }
  
    return higestPrice
  }
  const products = [

];

console.log(getMostExpensiveProduct(products));
  

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if (day === Day.Sunday){
        return "weekend"
    }else{
        return "weekday"
    }
  }



async function squareAsync(n: number): Promise<number>{
    if(n<0){
        return Promise.reject('give positive number')
    }
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            const squre = n * n
            resolve(squre)
        }, 1000);
    })
}

  