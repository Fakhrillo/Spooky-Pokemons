"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { DataType, eventType, PokemonType } from '@/types/types';
import { data } from '@/app/backend/data';
import CardContainer from '@/components/cardContainer';
import CreatePokemonCard from '@/components/pokCreate';
import pumpkin from '@/app/images/pumpkin.png'
import bat from '@/app/images/R.png'

export default function Home() {
  const [name, setName] = useState<string>('');
  const [power, setPower] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [pokemons, setPokemon] = useState<DataType>(data);
  const [showModal, setShowModal] = useState(false);
  const [editablePokemon, setEditablePokemon] = useState<PokemonType | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const btnHandler = () => {
    if (!name || !power || !image) return;
    setPokemon(prev => [
      ...prev,
      { id: `${Math.random() * 11}`, name, power, image }
    ]);
    setName('');
    setPower('');
    setImage('');

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const deleteHandler = (id: string) => {
    setPokemon(prev => prev.filter(pokemon => pokemon.id !== id));
  };

  const updateHandler = (pokemon: PokemonType) => {
    setEditablePokemon(pokemon);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditablePokemon(null);
  };

  const handleSave = () => {
    setPokemon(prev => 
      prev.map(pokemon => 
        pokemon.id === editablePokemon?.id ? editablePokemon : pokemon
      )
    );
    handleModalClose();
  };

  const ImageHandler = (e: eventType) => {
    const files = e.target.files;
    if (!files) return;
    setImage(URL.createObjectURL(files[0]));
  };

  const handleImageChange = (e: eventType) => {
    const files = e.target.files;
    if (!files) return;

    const newImage = URL.createObjectURL(files[0]);
    setEditablePokemon(prev => prev ? { ...prev, image: newImage } : null);
  };

  return (
    <div className='bg-gradient-to-r from-orange-600 to-purple-700 min-h-screen p-10 relative' style={{ opacity: 0.85 }}>
      <link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap" rel="stylesheet" />

      <h1
        className='text-5xl font-light text-center mb-6 text-gray-800'
        style={{ 
          fontFamily: 'Rubik Wet Paint, serif', 
          color: '#8ac926',
         }}
      >
        Welcome to the Spooky Pokémon World!
      </h1>
      
      <div className='absolute top-5 left-5'>
        <Image src={pumpkin} alt="Pumpkin" width={200} height={200} />
      </div>
      <div className='absolute top-5 right-5'>
        <Image src={bat} alt="Bat" width={200} height={200} />
      </div>

      <CreatePokemonCard setName={setName} setPower={setPower} name={name} power={power} ImageHandler={ImageHandler} fileInputRef={fileInputRef} btnHandler={btnHandler} />

      <CardContainer pokemons={pokemons} updateHandler={updateHandler} deleteHandler={deleteHandler} />

      {showModal && editablePokemon && (
          <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center'>
              <div className='bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-lg'>
                  <h2 className='text-2xl font-bold mb-4 text-orange-400'>Edit Spooky Pokémon</h2>
                  <div className='mb-4'>
                      <Image src={editablePokemon.image} alt="Current Pokémon" width={100} height={100} className='w-50 h-30 rounded-lg mb-2' />
                      <input
                          type="file"
                          onChange={handleImageChange}
                          className='border-2 border-gray-600 p-2 rounded-lg text-white bg-gray-700'
                      />
                  </div>
                  <input
                      type="text"
                      value={editablePokemon.name}
                      onChange={(e) => setEditablePokemon({ ...editablePokemon, name: e.target.value })}
                      className='border-2 border-gray-600 p-2 w-full mb-4 rounded-lg focus:outline-none text-white bg-gray-700'
                      placeholder='Name'
                  />
                  <input
                      type="text"
                      value={editablePokemon.power}
                      onChange={(e) => setEditablePokemon({ ...editablePokemon, power: e.target.value })}
                      className='border-2 border-gray-600 p-2 w-full mb-4 rounded-lg focus:outline-none text-white bg-gray-700'
                      placeholder='Power'
                  />
                  <button onClick={handleSave} className='bg-orange-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-orange-700 transition'>Save</button>
                  <button onClick={handleModalClose} className='bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition'>Cancel</button>
              </div>
          </div>
      )}
  </div>

  );
}
