import { pokCreateType } from "@/types/types";

export default function CreatePokemonCard({setName, setPower, name, power, ImageHandler, fileInputRef, btnHandler}: pokCreateType ){
    return (
        <div className='bg-gray-800 rounded-lg shadow-lg p-6 space-y-6 max-w-md w-full mx-auto'>
            <link href="https://fonts.googleapis.com/css2?family=Eater&family=Rubik+Wet+Paint&display=swap" rel="stylesheet" />
            <h2 className='text-2xl text-center text-orange-400'
            style={{ 
                fontFamily: 'Eater, serif',
                
               }}
            >Create a Spooky Pokémon</h2>
            <div className='flex flex-col gap-4'>
                <input
                    onChange={(e) => setName(e.target.value)}
                    className='border-2 border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white bg-gray-700'
                    type="text"
                    placeholder='Name'
                    value={name}
                />
                <input
                    onChange={(e) => setPower(e.target.value)}
                    className='border-2 border-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white bg-gray-700'
                    type="text"
                    placeholder='Power'
                    value={power}
                />
                <input
                    onChange={ImageHandler}
                    className='border-2 border-gray-600 p-2 rounded-lg text-white bg-gray-700'
                    type="file"
                    ref={fileInputRef}
                />
                <button onClick={btnHandler} className='bg-orange-600 text-white rounded-lg py-2 hover:bg-orange-700 transition'>Create a Spooky Pokémon</button>
            </div>
        </div>
    )
}