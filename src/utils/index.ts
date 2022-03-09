import { err, ok, Result } from './result';

export const parseResponse = async <T>(response): Promise<Result<T>> => {
	try {
		if (!response?.data) {
			return err(response.msg);
		}
		const data = JSON.parse(response.data.data);
		return ok(data);
	} catch (e) {
		return err(e);
	}
};
