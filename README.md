# Projeto-09-Tryunfo

Neste projeto você vai desenvolver um jogo no estilo Super Trunfo! Ao utilizar essa aplicação uma pessoa usuária deverá ser capaz de:

Criar um baralho com o tema livre;

Adicionar e remover uma carta do baralho;

Visualizar todas as cartas que foram adicionadas ao baralho;

Jogar com o baralho criado.

1. Crie o formulário que será usado para adicionar cartas ao baralho
Crie um formulário que será utilizado para criar as cartas do seu baralho.

Crie um componente chamado Form dentro da pasta src/components.

Renderize o componente Form dentro do componente principal App.

Crie os seguintes itens dentro do component Form:
Imagem exemplo:

O que será verificado
2. Adicione as props necessárias ao componente de formulário
O componente Form deverá receber as seguintes props:
As props do componente Form deverão ser utilizadas conforme o indicado abaixo:

bulb Obs: não se preocupe com os valores a serem passados para as props nesse momento. No requisito 4, ficará nítido como estas props serão utilizadas.

O que será verificado

3. Crie e renderize o componente Card com as props necessárias
Crie um componente com o nome Card na pasta src/components e renderize-o no componente principal App. O componente Card deve receber as seguintes props:
Renderize o componente Card dentro do componente principal App:
Imagem Exemplo:

O que será verificado

4. Crie o preview da carta que está sendo criada pelo formulário
Até o momento você criou dois componentes que recebem props, agora está na hora de criar o estado dos componentes. Os componentes Form e Card irão compartilhar o mesmo estado para exibir as mesmas informações (isso já te dá uma dica de onde o estado deve estar, não é mesmo?). Quando alguma informação é digitada em algum campo do formulário, o componente Card deve exibir a mesma informação em tempo real, criando um preview da carta antes de ela ser salva no baralho (a funcionalidade de salvar será feita nos próximos requisitos).

Você deverá usar a prop onInputChange para passar uma callback para lidar com os eventos de onChange dos inputs do formulário. Não se esqueça que os valores dos inputs (que também são passados por props) também devem ser salvos em um estado.

bulb Dica: o mesmo estado usado para controlar os inputs do formulário podem ser passados para o componente Card.

Informações técnicas:

O que será verificado

5. Faça a validação do botão de Salvar no formulário
O botão que possui o atributo data-testid="save-button" só deve estar habilitado se todas as informações do formulário estiverem preenchidas corretamente, seguindo as seguintes regras:

O que será verificado

6. Crie a função do botão salvar
Agora que o botão de salvar já está validado, você pode adicionar uma nova carta ao seu baralho. Isso significa que você precisará criar um novo estado na sua aplicação para salvar a lista de cartas existentes no seu baralho.

O que será verificado

7. Crie a validação do Super Trunfo
Em um baralho de Super Trunfo pode existir apenas uma carta Super Trunfo. Por isso é necessário fazer uma validação para que somente 1 carta Super Trunfo seja salva no seu baralho:

O que será verificado

8. Exiba a lista de cartas que estão salvas no estado
Você já tem várias cartas legais em seu baralho, agora é a hora de listá-las para que você possa ver toda sua coleção!

Renderize dentro do component App uma lista com todas as cartas que você tem no estado da aplicação.
Garanta que sempre que uma carta for adicionada, a lista é atualizada automaticamente.
bulb Dica: você pode reutilizar o componente Card nesse requisito. bulb

Imagem Exemplo:

O que será verificado

9. Crie um botão para remover uma carta do baralho
Criar em cada carta que está sendo renderizada do seu baralho um button com o texto Excluir e o atributo data-testid="delete-button".
O que será verificado
