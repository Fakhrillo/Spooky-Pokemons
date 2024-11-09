import { StaticImageData } from "next/image";
import { ChangeEvent } from "react";

export type PokemonType = {
    id: string,
    name: string,
    power: string,
    image: StaticImageData | string
};

export type DataType = PokemonType[]
export type eventType = ChangeEvent<HTMLInputElement>

export type CardContainerPropsType = {
    pokemons: DataType;
    updateHandler: (pokemon: PokemonType) => void;
    deleteHandler: (id: string) => void;
}

export type pokCreateType = {
    setName: React.Dispatch<React.SetStateAction<string>>;
    setPower: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    power: string;
    ImageHandler: (e: eventType) => void;
    fileInputRef: React.RefObject<HTMLInputElement>;
    btnHandler: () => void;
  };
  