import axios from 'axios'

import { GET_MODE_API } from '../constants/endpoints';
import { GameModeData } from '../interfaces';

export const getGameModeData = (): Promise<GameModeData[]> => {
  return axios.get(GET_MODE_API).then(({ data }) => data);
}
