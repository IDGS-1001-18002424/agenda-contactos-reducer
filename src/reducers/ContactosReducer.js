/**
 * Definimos el Reducer de contactos como una funcion de JS, que recibe los siguientes parametros:
 * @param {*} state 
 * @param {*} action 
 */

export const ContactosReducer = (state = [], action) => {
    //Toda accion tiene un tipo para lo cual agregamos un switch-case para determinar que tipo es.
    switch(action.type){
        case "add":
            return [...state, action.payload]; //Payload contiene la nueva informacion a agregar.
        case "delete":
            return state.filter((actual) => actual.id !== action.payload);
            default:
            return state;
    }
};