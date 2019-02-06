//Action Creator, devem por padrão retornar um objeto
//A Action deve ter um atributo de retorno chamado type
export function changeValue(e){
    console.log('Acessando o Action Creator')
    return{
        type:'VALUE_CHANGED',//Esse é o unico que não é um alias, deve ser (type)
        payload: e.target.value//payload pode ser trocado por qualquer coisa, tipo (dados), e.target.value = valor atualizado do evento
    }
}