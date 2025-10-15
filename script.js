// --------------------------------------------------------
// 1. VARIÁVEIS GLOBAIS 
// São acessíveis á partir de qualquer função JavaScript.
// --------------------------------------------------------

// Proucra pelo elemento com o ID "txt-nova-tarefa" no documento HTML
const txt_nova_tarefa = document.querySelector("#txt-nova-tarefa");
// Proucra pelo elemento com o ID "btn-nova-tarefa" no documento HTML
const btn_nova_tarefa = document.querySelector("#btn-nova-tarefa");
// Proucra pelo elemento com o ID "lista-tarefas" no documento HTML
const lista_tarefas = document.querySelector("#lista-tarefas");

// --------------------------------------------------------
// 2. FUNÇÕES DE LÓGICA
// --------------------------------------------------------

function iniciarToDo() {
    // alert("Olá");
    // Associa a função ao evento de clicar no botão de "Adicionar" nova tarefa
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);
}

function adicionarTarefa() {
    alert("Tarefa");
}

// --------------------------------------------------------
// 3. ESCUTADORES DE EVENTOS E INÍCIO
// --------------------------------------------------------

iniciarToDo();