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

// Carrega o audio reproduzido ao concluir uma tarefa
const audioConcluir = new Audio('Sound/gmae.wav');

// --------------------------------------------------------
// 2. FUNÇÕES DE LÓGICA
// --------------------------------------------------------

function iniciaToDo() {
    // alert("Olá");
    // Associa a função ao evento de clicar no botão de "Adicionar" nova tarefa
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);
    // Associa função "adicionarTarefaEnter()" ao evento de pressionar a tecla "Enter"
    // no campo de "Adicionar nova tarefa"
    txt_nova_tarefa.addEventListener("keypress", adicionarTarefaEnter)
}

function adicionarTarefa() {
    // Se a caixa de texto de "Adicionar nova tarefa" não está vazia
    // .trim() remove espaços em branco do começo e fim do valor do campo
    if (txt_nova_tarefa.value.trim() !== "") {
        const btn_item = `
        <div>
        <button class="btn btn-success btn-sm me-2" onclick="concluirTarefa(this)">Concluir</button>
        <button class="btn btn-danger btn-sm">Excluir</button>
        </div>
        `;
        
        // Cria um novo item de lista
        const item = document.createElement("li");
        item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        // Adiciona o texto digitado na caixa de texto e os botões para concluir e excluir a tarefa.
        // "span" permite aplicar formatações em linha
        // "w-75" limita o nome da tarefa a 75% da largura da linha, deixando 25% da largura restante reservado para os botões
        // "text-truncate" corta e adiciona reticências (três pontos ...) em nomes de tarefas que excedem 75% da largura da linha 
        item.innerHTML = "<span class='w-75 text-truncate'>" + txt_nova_tarefa.value + "</span>" + btn_item;
        
        // Adiciona o item a lista de tarefas
        lista_tarefas.append(item);
        
    }
    
    // Limpa o campo de texto de "Adicionar nova tarefa" após adicionar a tarefa a lista
    txt_nova_tarefa.value = "";
    // Seleciona o campo "Adicionar nova tarefa" após adicionar a tarefa a lista
    txt_nova_tarefa.focus();
    
}

function adicionarTarefaEnter(evento) {
    // Se a tecla pressionada for igual a "Enter"
    if (evento.key == "Enter") {
        // Chama a função JavaScript "adicionarTarefa()"
        adicionarTarefa();
    }
}

function concluirTarefa(elemento) {
    // Reproduz o audio ao clicar no botão de "Concluir"
    audioConcluir.play();

    // Joga a quantidade de confettis que você definir na tela
    for (let i = 0; i <= 50; i++) {
        confetti();
    }
}
// --------------------------------------------------------
// 3. ESCUTADORES DE EVENTOS E INÍCIO
// --------------------------------------------------------

iniciaToDo();