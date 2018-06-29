import axios from 'axios';

export const fetchSpotsByGPS = (gps) => (
    axios({
        method: 'get',
        url: '/api/search',
        params: gps
    })
);

export const fetchSpotsByZip = (zip) => (
    axios({
        method: 'get',
        url: '/api/search/byzip',
        params: zip
    })
);

export const fetchSpot = (id) => (
    axios({
        method: 'get',
        url: `/api/spots/${id}`,
    })
);

export const createSpot = (spot) => (
    axios({
        method: 'post',
        url: '/api/spots',
        data: { spot }
    })
);

export const updateSpot = (spot) => (
    axios({
        method: 'patch',
        url: `/api/spots/${spot.id}`,
        data: { spot }
    })
);

export const deleteSpot = (id) => (
    axios({
        method: 'delete',
        url: `/api/spots/${id}`
    })
);
