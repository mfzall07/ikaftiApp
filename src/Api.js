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
    static indexAdmin(token) {
        let path = 'v1/admin';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    
    static DeleteAdmin(id, token) {
        let path = `v1/admin/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }

    // Announcement
    static indexAnnouncement(limit) {
        let path = `v1/announcement?limit=${limit}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    
    static LindexAnnouncement() {
        let path = `v1/announcement`;
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

    static DeleteAnnouncement(id, token) {
        let path = `v1/announcement/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    
    // Information
    static indexInformation(limit) {
        let path = `v1/information?limit=${limit}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }

    static LindexInformation() {
        let path = 'v1/information';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    
    static ShowInformation(id) {
        let path = `v1/information/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    
    // Agenda
    static indexAgenda(limit) {
        let path = `v1/agenda?limit=${limit}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }

    static LindexAgenda() {
        let path = `v1/agenda`;
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

    static AlumniDetail(id, token) {
        let path = `v1/alumni/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    
    static EditAlumniDetail(id, token, data) {
        let path = `v1/alumni/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'PATCH',
            data,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    }
    
    static DeleteAlumni(id, token) {
        let path = `v1/alumni/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
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
    static indexJob(limit) {
        let path = `v1/job?limit=${limit}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }
    
    static LindexJob() {
        let path = 'v1/job';
        return request(`${this.urlAPI()}${path}`, {
            method: 'GET',
        })
    }

    static showJob(id) {
        let path = `v1/job/${id}`;
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

    static DeleteJob(id, token) {
        let path = `v1/job/${id}`;
        return request(`${this.urlAPI()}${path}`, {
            method: 'DELETE',
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