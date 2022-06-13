import session from 'express-session'
import Keycloak from 'keycloak-connect'

let _keycloak;

var keycloakConfig = {
    clientId: 'nodejs-crudapp',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080',
    realm: 'myRealm',
    credentials: {
        secret: 'lc08KHgwME5tsy7bSkpxYDxMUO8Rm3jB'
    }
};

export function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

export function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}
