import { useQuery } from "@tanstack/react-query";
import fetchBreedlist from "./fetchBreedlist";


export default function useBreedList(animal) {
 
  const results= useQuery(["animal",animal],fetchBreedlist);

  return [results?.data?.breeds ??[], results.status];
}