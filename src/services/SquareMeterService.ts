import axios, { AxiosResponse } from 'axios';

export default class SquareMeterService {

  async getValueSquareMeter(): Promise<AxiosResponse> {
		return await axios.get(`${process.env.URL_API_SQUARE_METER}`);
	}

}