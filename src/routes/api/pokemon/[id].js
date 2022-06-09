export async function get({params}){ 
    const id = params.id;
    const url2 = `https://pokeapi.co/api/v2/pokemon?limit=898`;
    const res = await fetch(url2);
    const pokeman =await res.json();
        return{
            status:200,
            body: pokeman
        };
                
    }