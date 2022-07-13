import { stringify } from "querystring";

function Tests () {
    
    // const date = new Date();
    // console.log(date);
    // console.log(typeof date)
    
    
    // function person (name: string, age: number, sex: string){
    //     console.log(`Hi, my name is ${name}, im ${age} years old.`)
    // }
    
    // person("Carla", 24, "bla");

    type Car = {
        marca: string,
        modelo: string,
        ano?: number
    }


    const corolla: Car ={
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2010
    }
    const punto: Car ={
        marca: 'Fiat',
        modelo: 'Punto'
    }


    const bar = [
        corolla,
        punto,
    ]

    console.table(bar);


    const cars = [
        {
            marca: 'Subaro',
            modelo: 'Impreza',
            ano: 2010,
            portas: 2,
            rodas: 6
        },
        
        {
            marca: 'Toyota',
            modelo: 'Corolla GR',
            ano: 2022,
            portas: 1,
            rodas: 2
        },
        {
            marca: 'Dodge',
            modelo: 'Ram 1000',
            ano: 2020,
            portas: 5,
            rodas: 7
        }
    ]

    console.table(cars);
}



 export default Tests;