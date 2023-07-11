import GameSavingLoader from '../GameSavingLoader';

test('should return an obj', async () => {
  const mySave = new GameSavingLoader();
  expect(await mySave.load()).toBeInstanceOf(Object);
});
