export const fetchVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const villagers = await res.json();

  return villagers.map(villager => ({
    id: villager._id,
    image: villager.image,
    name: villager.name,
    gender: villager.gender,
    phrase: villager.phrase,
  }));
};
