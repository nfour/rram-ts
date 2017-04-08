import * as Bluebird from 'bluebird';
import { getExampleText } from './sources';

export const setText = (text) => ({
  type: 'set',
  payload: text,
});

export const resetExample = () => ({
  type: 'reset',
});

export const appendText = (text) => ({
  type: 'append',
  payload: text,
});

export const setTextDelayed = () =>
  async (dispatch) => {
    await Bluebird.delay(400);
    return dispatch(setText('[[REQUESTING TEXT]]'));
  };

export const requestText = (newText = '') =>
  async (dispatch) => {
    await dispatch(setTextDelayed('[[REQUESTING TEXT]]'));

    const text = await getExampleText();

    // SYNCHRONOUS DISPATCH
    // Because `setText` is synchronous (doesn't return a promise), we dont need to await it.
    dispatch(setText(text + newText));
  };
