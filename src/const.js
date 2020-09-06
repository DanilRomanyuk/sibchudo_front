export const BASE_URL = 'http://45.84.224.17';

export const API = {
    TITLE: BASE_URL + '/api/title/',
    CAT: function (catId) {
        return BASE_URL + '/api/cat/' + (catId ?? '')
    },
    LITTER: function (litterId) {
        return BASE_URL + '/api/litter/' + (litterId ?? '')
    },
    BASE_COLOR: BASE_URL + '/api/base_color/',
    GENDER: BASE_URL + '/api/gender/',
    BREED: BASE_URL + '/api/breed',
    CLASS: BASE_URL + '/api/class',
    LOGIN: BASE_URL + '/api/login/',
    COLOR_CODE: BASE_URL + '/api/color_code',
    STATUS: BASE_URL + '/api/status',
    OWNER: BASE_URL + '/api/owner',
    COMMUNITY: BASE_URL + '/api/community',
    CAT_AVATAR: function (catId) {
        return BASE_URL + '/api/cat/' + catId + '/avatar'
    }
}