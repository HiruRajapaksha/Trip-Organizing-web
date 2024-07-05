import axios from 'axios';

const RQUESTS_BASE_URL = 'http://localhost:8080/api/v1/trips';

class TripService {

    getRequests(){
        return axios.get(RQUESTS_BASE_URL);
    }

    createRequest(request){
        return axios.post(RQUESTS_BASE_URL, request);
    }

    getRequestByID(requestID){
        return axios.get(RQUESTS_BASE_URL + '/' + requestID);
    }

    updateRequest(request, requestID){
        return axios.put(RQUESTS_BASE_URL + '/' + requestID, request);
    }

    deleteRequest(requestID){
        return axios.delete(RQUESTS_BASE_URL + '/' + requestID);
    }

}

const tripService = new TripService();

export default tripService;