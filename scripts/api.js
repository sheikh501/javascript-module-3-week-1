async function getAllPokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
}
async function getOnePokemonSprite(url) {
  const response = await fetch(url);
  const { sprites } = await response.json();
  return sprites.front_default;

}
export { getAllPokemons, getOnePokemonSprite };