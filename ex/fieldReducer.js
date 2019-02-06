const INITIAL_STATE =  { value:'Opa' }

export default function(state = INITIAL_STATE, action ){
    //1- qual ação foi disparada
    //2- evoluir o estado do field
    switch(action.type){
        case 'VALUE_CHANGED':
            return { value: action.payload }//isso sem alterar o estado atual
        default:
            return state //retorna o estado da forma que esta
    }
}