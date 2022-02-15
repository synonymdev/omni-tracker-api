import { err, ok, Result } from './result';

export const parseResponse = async <T>(response): Promise<Result<T>> => {
	try {
		const responseJson = await response.json();
		if (!responseJson?.data) {
			return err(responseJson.msg);
		}
		const data = JSON.parse(responseJson.data);
		return ok(data);
	} catch (e) {
		return err(e);
	}
};
