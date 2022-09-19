import request from './utils/request';
class Api{
  static urlAPI() {
    return 'https://ikafti-umi.com/api/';
    }

    // Login
    static login(username, password) {
        let path = 'v1/login';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data: {
                username,  
                password,   
            },
        })
    }

    // Announcement
    static indexAnnouncement() {
        let path = 'v1/announcement';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    
    // Information
    static indexInformation() {
        let path = 'v1/information';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    
    // Agenda
    static indexAgenda() {
        let path = 'v1/agenda';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    static showAgenda(id) {
        let path = `v1/agenda/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }

    // Alumni List
    Alumni(data) {
        let path = 'v1/alumni-register';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data,
        })
    }

    // Job
    static indexJob() {
        let path = 'v1/job';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
}
export default Api;