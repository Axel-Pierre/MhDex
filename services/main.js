/*async function go(){
    try
    {
        const response = await fetch('parkings.json',{
            method: 'GET',
            cache: 'no-cache',
            header : {'Content-Type': 'application/json'}
        
        });
        const data = await response.json();   
        return console.log(data)
    }catch(e){
        
    }
  
}
 

go()*/

/*

export default axios.create({
    baseurl: 'http://localhost:8082/parkings',
    header : {'Content-Type': 'application/json'}
})*/
import axios from 'axios';
/*export async function test(){
    await axios.get('http://localhost:8082/parkings').then(response=>{
      return response.data;
    })
}*/

export async function test(){
    await axios.get('https://mhw-db.com/ailments').then(response=>{
    //let res2 = response.data.filter(res => res.species == 'dragon ancien');
return console.log(response)  
})
}