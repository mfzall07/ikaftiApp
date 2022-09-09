import request from './utils/request';
class Api{
  static urlAPI() {
    return 'http://e27f-114-142-168-15.ngrok.io/api/v1/';
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