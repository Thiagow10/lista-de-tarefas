let tarefas = []; //criando lista
const listaTarefas = document.getElementById("listaTarefas");
let containerBotao = document.getElementById("botoes");
let botaoApagar;


function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();

    if (tarefa == "") {
        alert("Digite sua tarefa para adiciona-la na lista");
        return;
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        document.getElementById("mensagem").textContent = mensagemSucesso;

        tarefas.push(tarefa);
        renderizarTarefas();

        inputTarefa.value = "";
    }
}

// Função para criar o botão "Apagar Lista"
function criarBotaoApagar() {
    if (!botaoApagar) {
        botaoApagar = document.createElement("button");
        botaoApagar.className = "botao_lista";
        botaoApagar.innerHTML = "Apagar Lista";
        botaoApagar.onclick = () => {
            limparLista();
        };
        containerBotao.appendChild(botaoApagar);
    }
    // Inicialmente, esconde o botão
    botaoApagar.style.display = 'none';
}
criarBotaoApagar();


function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];

        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";
        botaoRemover.innerHTML = "Remover";
        botaoRemover.onclick = () => {
            removerTarefa(i);
        };

        let botaoEditar = document.createElement("button");
        botaoEditar.classList = "editar";
        botaoEditar.innerHTML = "Editar";
        botaoEditar.onclick = () => {
            editarTarefa(i);
        };

        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar);
        listaTarefas.appendChild(novaTarefa);
    }

    atualizarVisibilidadeBotaoApagar();
}

function removerTarefa(i) {
    tarefas.splice(i, 1);
    renderizarTarefas();
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:");
    if (tarefaEditada !== null && tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada;
        renderizarTarefas();
    }
}

function limparLista() {
    tarefas.length = 0;
    renderizarTarefas();
    let mensagemRemovida = "Lista de tarefas limpa com sucesso";
    document.getElementById("mensagem").textContent = mensagemRemovida;
}

function atualizarVisibilidadeBotaoApagar() {
    if (tarefas.length > 0) {
        botaoApagar.style.display = 'inline-block'; 
    } else {
        botaoApagar.style.display = 'none';
    }
}

atualizarVisibilidadeBotaoApagar();