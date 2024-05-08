import axios from 'axios';

export const getStatistic = async () => {
    try {
        const response = await axios.get('https://mocki.io/v1/62380cb9-86e8-42b0-b54b-3b3d7f2586c2');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const getTicketGraph = async () => {
    try {
        const response = await axios.get('https://mocki.io/v1/aad3865a-0077-4e73-86fc-b12d0057e545');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const getTasks = async () => {
    try {
        const response = await axios.get('https://mocki.io/v1/2283606f-6a95-42fd-a5d8-9863304ad082');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const getTotalUnresolvedTicket = async () => {
    try {
        const response = await axios.get('https://mocki.io/v1/26bfe7a0-362e-4b89-896f-8fe4a9f16d0c');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};