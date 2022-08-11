async function go(){
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
 

go()