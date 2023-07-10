import GameSavingLoader from '../GameSavingLoader';

test('should return an obj', async () => {
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  const mySave = new GameSavingLoader();
  expect(await mySave.load()).toEqual(result);
});
