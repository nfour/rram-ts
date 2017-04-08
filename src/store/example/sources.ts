import * as Bluebird from 'bluebird';

export const getExampleText = async () => {
  await Bluebird.delay(200);

  return 'Sourced Text!';
};
