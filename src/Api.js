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

    // Admin
    static AddAdmin(token, data) {
        let path = 'v1/admin';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data,
            headers: {
                'Authorization': `Bearer ${token}`,
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

    static AddAnnouncement(token, data) {
        let path = 'v1/announcement';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
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
    static registerAlumni(data) {
        let path = 'v1/alumni-register';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data,
        })
    }

    // Waiting List
    static WaitingList(token) {
        let path = `v1/waiting-list`
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }

    static WaitingListDetail(id, token) {
        let path = `v1/alumni/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }

    static WaitingListApprove(id, token) {
        let path = `v1/approve-alumni/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    
    static WaitingListDecline(id, token) {
        let path = `v1/decline-alumni/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }

    // Job
    static indexJob() {
        let path = 'v1/job';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }

    static AddJob(token, data) {
        let path = 'v1/job';
        return request(`${this.urlAPI()}${path}`, {
            method: 'POST',
            data,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    
    // Progress Bar
    static ProgressBar() {
        let path = 'v1/percentage-alumni';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
}
export default Api;