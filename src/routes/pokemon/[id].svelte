<script context="module">
    export async function load({url,params}){
        const id = params.id;
        const url2 = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url2);
        const pokeman = await res.json();
        return {props:{pokeman}};
    }
</script>

<script>
    export let pokeman;
    const type = pokeman.types[0].type.name;
</script>
<div class="flex flex-col items-center">
<h1 class="text-4x; text-center my-8 uppercase">{pokeman.name}</h1>
<p>Type: <strong>{type}</strong> | Heigh: <strong>{pokeman.height}
</strong>
    | Weight: <strong>{pokeman.weight}</strong>
</p>
<img class="card-image" src={pokeman.sprites['front_default']}
alt={pokeman.name}
/>
</div>