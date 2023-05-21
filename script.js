const usuarios = [
    {Nome: 'João', Senha: '123'}, 
    {Nome: 'Maria', Senha: '321'}, 
    {Nome: 'Eduardo', Senha: '789'}, 
    {Nome: 'Hemilly', Senha: '456'}, 
    {Nome: 'Marcelo', Senha: '159'}
]

function checarlogin(){

    var nomedeusuario = document.querySelector('#nome').value;
    var senhainserida = document.querySelector('#senhainserida').value;
    var loginEncontrado = false; 

    for (var i = 0; i < usuarios.length; i++) {
        if (nomedeusuario === usuarios[i].Nome && senhainserida === usuarios[i].Senha) { //"===" é um operador usado para a comparação entre duas variáveis
            alert("Você está logado");
            loginEncontrado = true;
            break;
        }
        else if (nomedeusuario === usuarios[i].Nome && senhainserida !== usuarios[i].Senha) {
            alert("Senha incorreta");
            loginEncontrado = true;
            break;
        }
    }
    if (!loginEncontrado) {
        alert("Usuário não cadastrado");
    }
}
