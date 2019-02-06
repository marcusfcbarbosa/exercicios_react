//Action Creator, que sempre retorna um objeto
//A Action deve ter um atributo de retorno chamado type
export function inc(){
    return {
        type:'INC'
    }
}

export function dec(){
    return {
        type:'DEC'
    }
}

export function stepChanged(e){
    return{
        type:'STEP_CHANGED',
        payload: e.target.value
    }
}