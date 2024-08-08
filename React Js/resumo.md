## Primeira Lição

### Nesta lição, aprendemos que:

-    O React é um framework front-end modular, escalável, flexível e popular.
-    JSX é uma extensão de sintaxe para JavaScript que nos permite tratar HTML como expressões.
-    Eles podem ser armazenados em variáveis, objetos, matrizes e muito mais!
-    Os elementos JSX podem ter atributos e ser aninhados uns nos outros, assim como no HTML.
-    JSX deve ter exatamente um elemento externo, e outros elementos podem ser aninhados dentro.
-    createRoot() de react-dom/client pode ser usado para criar uma raiz React no elemento DOM especificado.
-    A React rootilits render() método pode ser usado para renderizar JSX na tela.
-    A React rootilits render() o método atualiza apenas os elementos DOM que foram alterados usando o DOM virtual.
-    À medida que você continua a aprender mais sobre o React, você aprenderá algumas coisas poderosas que você pode fazer com o JSX, alguns problemas comuns do JSX e como evitá-los.

## Segunda Lição

### Nesta lição, você aprendeu sobre um conceito fundamental do React: componentes.

-    As aplicações de reação são compostas de componentes.
-    Os componentes são responsáveis pela renderização de peças da interface do usuário.
-    Para criar componentes e renderizá-los, react e reactDOM deve ser importado.
-    Componentes de reação podem ser definidos com funções Javascript para fazer componentes da função.
-    Os nomes dos componentes da função devem começar com uma letra maiúscula, e o caso Pascal é a convenção de nomenclatura adotada.
-    Os componentes da função devem retornar alguns elementos React JSX sintaxe.
-    Os componentes do React podem ser exportados e importados de arquivo para arquivo.
-    Um componente React pode ser usado chamando o nome do componente em uma sintaxe de tag de fechamento automático semelhante ao HTML.
-    Renderizar um componente React requer o uso de .createRoot() para especificar um contêiner raiz e chamar o .render() método nele.

## Terceira Lição

### Nesta lição, aprendemos:

-    Os componentes da função podem retornar múltiplos JSX linhas aninhando os elementos em um elemento pai.
-    Atributos variáveis podem ser usados dentro de um componente React com injeções JavaScript.
-    Os componentes de reação suportam a lógica colocando as instruções lógicas acima das instruções de retorno.
-    Os componentes podem retornar condicionalmente elementos JSX colocando instruções condicionais dentro dos componentes.
-    Os componentes podem responder a eventos definindo

## Quarta Lição

### Nesta lição, aprendemos que:

-    Um aplicativo React pode conter vários componentes.
-    Os componentes podem interagir uns com os outros retornando instâncias uns dos outros.
-    A interação de componentes permite que eles sejam divididos em componentes menores, armazenados em arquivos separados e reutilizados quando necessário.

## Quinta Lição

### Nesta lição, aprendemos que:

-    Passando um suporte, dando um atributo para uma instância de componente.
-    Acessando um suporte passado via props.propName.
-    Exibindo um adereço.
-    Usando um suporte para tomar decisões sobre o que exibir.
-    Definindo um manipulador de eventos em um componente de função.
-    Passando um manipulador de eventos como um adereço.
-    Receber um manipulador de eventos prop e anexá-lo a um ouvinte de eventos.
-    Nomear manipuladores de eventos e atributos de manipuladores de eventos de acordo com uma convenção.
-    Acessando props.children.
-    Atribuindo valores padrão para adereços.

## Sexta Lição

### Nesta lição, aprendemos que:

-    Com o React, alimentamos modelos de dados estáticos e dinâmicos para JSX para renderizar uma visualização para a tela.
-    Ganchos são utilizados para “hook into” o estado do componente interno para a gestão de dados dinâmicos em componentes de função.
-    Nós empregamos o State Hook usando o código abaixo. O currentState referências ao valor atual do estado e initialState inicializa o valor do estado para a primeira renderização do componente.
-    const [currentState, stateSetter] = useState( initialState );
-    Setters de estado podem ser chamados em manipuladores de eventos.
-    Podemos definir manipuladores de eventos simples em linha em nosso JSX e manipuladores de eventos complexos fora do nosso JSX.
-    Usamos uma função de retorno de chamada de setter de estado quando nosso próximo valor depende do nosso valor anterior.
-    Usamos arrays e objetos para organizar e gerenciar dados relacionados que tendem a mudar juntos.
-    Use a sintaxe de propagação em coleções de dados dinâmicos para copiar o estado anterior para o próximo estado assim: setArrayState((prev) => [ ...prev ]) e setObjectState((prev) => ({ ...prev })).
-    A melhor prática é ter vários estados mais simples em vez de ter um objeto de estado complexo.

## Sétima Lição

### Nesta lição, aprendemos que:

-    Podemos importar o useEffect() função do 'react' biblioteca e chamá-lo em nossos componentes de função.
-    Efeito refere-se a uma função que passamos como o primeiro argumento do useEffect() função. Por padrão, o Effect Hook chama esse efeito após cada renderização.
-    O função de limpeza é opcionalmente retornado pelo efeito. Se o efeito fizer qualquer coisa que precise ser limpa para evitar vazamentos de memória, o efeito retornará uma função de limpeza, em seguida, o Gancho de Efeito chamará essa função de limpeza antes de chamar o efeito novamente, bem como quando o componente estiver sendo desmontado.
-    O matriz de dependência é o segundo argumento opcional que o useEffect() a função pode ser chamada com a fim impedir repetidamente chamar o efeito quando este não é necessário. Essa matriz deve consistir em todas as variáveis das quais o efeito depende.
-    O Effect Hook é tudo sobre o agendamento quando nosso código effectilits é executado. Podemos usar a matriz de dependência para configurar quando nosso efeito é chamado das seguintes maneiras:
-    Os ganchos nos dão a flexibilidade de organizar nosso código de maneiras diferentes, agrupando dados relacionados, bem como separando preocupações

## Oitava Lição

### Nesta lição, aprendemos que:

-    Identificou-se que o componente original precisava ser refatorado: tratava de cálculos/lógica e apresentação/renderização.
-    Criou um componente de contêiner contendo toda a lógica stateful.
-    Criou uma função que chama o método de configuração de estado fornecido por useState().
-    Componentes de apresentação criados e exportados contendo apenas JSX.
-    Importou os componentes de apresentação para o componente de contêiner.
-    Utilizou os componentes de apresentação na declaração de retorno do componente de contêiner.
-    Estado passado e funções usadas para alterar o estado como adereços para os componentes de apresentação renderizados.

## Nona Lição

### Nesta lição, aprendemos que:

-    Os componentes do React podem ser estilizados de várias maneiras diferentes: estilo em linha, estilo variável de objeto, folhas de estilo e módulos CSS.
-    O estilo em linha pode ser usado para aplicar estilos a um único elemento. O estilo em linha pode ser feito dando ao elemento um atributo chamado style cujo valor é um objeto literal cercado por chaves.
-    Uma variável de objeto também pode ser usada para aplicar um estilo a um único elemento. A sintaxe é semelhante ao estilo inline, mas em vez de passar um objeto literal, o nome da variável é passado em vez disso.
     const myStyle = { color: "red" }
-    Os nomes de estilo no React devem estar no camelCase. Por exemplo, background-color torna-se backgroundColor.
-    No React, um valor de estilo numérico é interpretado automaticamente com px.
-    Os estilos podem ser separados e armazenados em arquivos de módulo CSS. Os estilos podem ser importados e usados aplicando className atributos aos elementos relevantes.

## Décima Lição

### Nesta lição, aprendemos que:

-    O estado de um formulário React é gerenciado pelo componente e as atualizações são acionadas pelo onChange evento.
-    O onChange o evento usa um manipulador de eventos para capturar alterações e determinar quais ações devem ser tomadas.
-    Um formulário React usa o hook de estado para armazenar o valor do campo de entrada no estado componentilits. O estado pode então ser atualizado com o setter de estados.
-    Os componentes de reação podem ser controlados ou não controlados. A maioria dos formulários React são controlados, pois controlam o valor inputilits com o estado.

# Documentação:

-    Em ciência da computação (e especialmente no mundo da programação funcional), o, uma função pura é uma função com as seguintes características:

     -    Ele cuida de seu próprio negócio. Ele não altera nenhum objeto ou variável que existia antes de ser chamado.
     -    Mesmas entradas, mesma saída. Dadas as mesmas entradas, uma função pura deve sempre retornar o mesmo resultado.

-    e.stopPropagation() impedir que os manipuladores de eventos associados às tags superiores sejam acionados.
-    e.preventDefault() impedir que o navegador execute o comportamento padrão associado a determinados eventos.

-    O porque de usar useState() e não variaveis comuns:
     1.   Variáveis locais não persistentes entre renderizações. Quando o React renderiza esse componente uma segunda vez, ele o faz do principio—sem considerar quem quer mudanças às variáveis locais.
     2.   Mudanças às variáveis locais não acionam renderizações. O React não percebe que precisa renderizar o componente novo com os novos dados.
