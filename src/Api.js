import request from './utils/request';
class Api{
  static urlAPI() {
    return 'https://ikafti-umi.com/api/v1/';
    }
    static indexCareer(token) {
        let path = 'job';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
}
export default Api;