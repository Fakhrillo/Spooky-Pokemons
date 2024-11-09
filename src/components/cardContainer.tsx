import { CardContainerPropsType, DataType, eventType, PokemonType } from "@/types/types";
import Image from "next/image";

export default function CardContainer({pokemons, updateHandler, deleteHandler}: CardContainerPropsType) {
    return(
        <div className='flex flex-wrap gap-6 items-center justify-center mt-10'>
            {pokemons.map((pokemon) => (
                <div key={pokemon.id} className='bg-gray-700 border-2 border-gray-600 rounded-lg shadow-lg w-56 p-4 transition-transform transform hover:scale-105'>
                    <Image src={pokemon.image} alt="pokemon image" width={100} height={100} className='w-full h-28 rounded-lg mb-2' />
                    <h1 className='text-lg font-semibold text-orange-400'>{pokemon.name}</h1>
                    <p className='text-gray-300'>Power: {pokemon.power}</p>
                    <div className='flex justify-center gap-4 mt-4'>
                        <button 
                            className='bg-yellow-500 text-white rounded-lg px-3 py-1 hover:bg-yellow-600 transition' 
                            onClick={() => updateHandler(pokemon)}
                        >
                            Update
                        </button>
                        <button 
                            className='bg-red-600 text-white rounded-lg px-3 py-1 hover:bg-red-700 transition' 
                            onClick={() => deleteHandler(pokemon.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}