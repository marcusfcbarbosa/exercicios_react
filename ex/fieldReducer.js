const INITIAL_STATE =  { value:'Opa' }

export default function(state = INITIAL_STATE, action ){
    //1- qual ação foi disparada
    //2- evoluir o estado do field
    switch(action.type){
        case 'VALUE_CHANGED':
            state.value = action.payload
            return state//dessa forma altero o estado
            //return { value: action.payload }//isso sem alterar o estado atual
        
    }
}