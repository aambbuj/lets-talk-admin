// Admin Frontend Configuration for API endpoints
const API_CONFIG = {
  BASE_URLS: {
    LOCAL: 'http://localhost:5000',
    STAGING: 'https://staging.clientfriendclub.com',
    PRODUCTION: 'https://clientfriendclub.com'
  },

  // Set to 'local' during development, 'production' on deployment
  // CURRENT_ENV: 'local',
  CURRENT_ENV: 'production',

  getBaseUrl: function() {
    return this.BASE_URLS[this.CURRENT_ENV.toUpperCase()] || this.BASE_URLS.PRODUCTION;
  },

  getApiBaseUrl: function() {
    return `${this.getBaseUrl()}/api/v1`;
  },

  ENDPOINTS: {
    AUTH: {
      HOST_LIST_FOR_ADMIN: '/host-list-for-admin',
      HOST_DETAILS_BY_ID_FOR_ADMIN: '/host-details-by-id-for-admin',
      APPROVE_HOST_THROUGH_ADMIN: '/approve-host-through-admin',
      REJECT_HOST_THROUGH_ADMIN: '/reject-host-through-admin',
      DELETE_HOST_THROUGH_ADMIN: '/delete-host-through-admin'
    }
  },

  getApiUrl: function(endpoint) { return `${this.getApiBaseUrl()}${endpoint}`; },
  getAuthUrl: function(endpoint) { return this.getApiUrl(endpoint); }
};

// Expose globally in browser
if (typeof window !== 'undefined') {
  window.API_CONFIG = API_CONFIG;
}


