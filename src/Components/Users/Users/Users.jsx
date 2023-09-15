import axios from "axios";
import React, { useEffect, useState } from "react";

const Show = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=10")
        .then((response) => {
          const results = response.data.results;

          // Создаем массив запросов для каждого покемона
          const pokemonData = [];
          results.forEach((pokemon) => {
            axios
              .get(pokemon.url)
              .then((res) => {
                pokemonData.push(res.data);

                // Если данные собраны для всех покемонов, обновляем состояние
                if (pokemonData.length === results.length) {
                  setPokemon(pokemonData);
                }
              })
              .catch((error) => {
                console.error("Error fetching Pokemon data:", error);
              });
          });
        })
        .catch((error) => {
          console.error("Error fetching Pokemon list:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Pokemon</h2>
      {pokemon.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <img src={item.sprites.front_default} alt="pokemon" />
        </div>
      ))}
    </div>
  );
};

export default Show;