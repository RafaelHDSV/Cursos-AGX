PRIMEIRO CURSO: Introduction to MongoDB

Banco de dados com estrutura de documentos, como JSON
Modelo de documentos, torna mais fácil a manipulação de dados e podem modular qualquer coisa
MongoDB funciona com as maiorias das linguagens
E commerce, IOT, pagamentos, etc
Escalibi

Documento > Coleção > Banco de Dados
MongoDB é o núcleo do Atlas

BSON transformar JSON em Binário
Object ID AUtomatico

QUERIES para o futuro
DATABASES
PERFORMANCE

find
$in
em
$gt
$lt
$gte
$lte
elemMath $eq
$and
$or

replaceOne()

updateOne()
$set
$push
upsert

findAndModify() = updateOne() + findOne()

UpdateMany()

deleteOne()
deleteMany()

------------------------------------------------------------

cursor.sort()
cursor.limit()

db.collection.find( <query>, { <field> : 1 }) 

db.collection.countDocuments( <query>, <options> )

------------------------------------------------------------

db.collection.aggregate([
    {
        $stage1: {
            { expression1 },
            { expression2 }...
        },
        $stage2: {
            { expression1 }...
        }
    }
])
----------
{
  $match: {
     "field_name": "value"
  }
}
----------
{
  $group:
    {
      _id: <expression>, // Group key
      <field>: { <accumulator> : <expression> }
    }
 }
----------
db.zips.aggregate([
{   
   $match: { 
      state: "CA"
    }
},
{
   $group: {
      _id: "$city",
      totalZips: { $count : { } }
   }
}
])

--------------

db.zips.aggregate([
{
  $sort: {
    pop: -1
  }
},
{
  $limit:  5
}
])

-----------------------------

$project
The $project stage specifies the fields of the output documents. 1 means that the field should be included, and 0 means that the field should be supressed. The field can also be assigned a new value.

{
    $project: {
        state:1, 
        zip:1,
        population:"$pop",
        _id:0
    }
}

$set
The $set stage creates new fields or changes the value of existing fields, and then outputs the documents with the new fields.

{
    $set: {
        place: {
            $concat:["$city",",","$state"]
        },
        pop:10000
     }
  }

$count
The $count stage creates a new document, with the number of documents at that stage in the aggregation pipeline assigned to the specified field name.

{
  $count: "total_zips"
}

$out

--------------------------------

Criar um Índice de Campo Único
Usar createIndex() para criar um novo índice em uma coleção. Dentro dos parênteses de createIndex(), inclua um objeto que contenha o campo e a ordem de classificação.

db.customers.createIndex({
  birthdate: 1
})

Crie um Índice de Campo Único Único
Adicionar como um segundo parâmetro opcional em para forçar a singularidade nos valores do campo de índice. Uma vez que o índice exclusivo é criado, quaisquer inserções ou atualizações, incluindo valores duplicados na coleção para o campo/s de índice, falharão.{unique:true}createIndex()

db.customers.createIndex({
  email: 1
},
{
  unique:true
})
O MongoDB só cria o índice exclusivo se não houver duplicação nos valores do campo para o campo/s do índice.


Visualizar os Índices usados em uma Coleção
Usar getIndexes() para ver todos os índices criados em uma coleção.

db.customers.getIndexes()

Verifique se um índice está sendo usado em uma consulta
Usar explain() em uma coleção ao executar uma consulta para ver o plano Execução. Este plano fornece os detalhes das etapas de execução (IXSCAN , COLLSCAN, FETCH, SORT, etc.).

O IXSCAN stage indica que a consulta está usando um índice e qual índice está sendo selecionado.
O COLLSCAN stage indica que uma varredura de coleção é executada, não usando nenhum índice.
O FETCH o estágio indica que os documentos estão sendo lidos da coleção.
O SORT o estágio indica que os documentos estão sendo classificados na memória.
db.customers.explain().find({
  birthdate: {
    $gt:ISODate("1995-08-01")
    }
  })
db.customers.explain().find({
  birthdate: {
    $gt:ISODate("1995-08-01")
    }
  }).sort({
    email:1
    })

------------------------------------

Understanding Multikey Indexes
Review the code below, which demonstrates how multikey indexes work. If a single field or compound index includes an array field, then the index is a multikey index.


Create a Single field Multikey Index
Use createIndex() to create a new index in a collection. Include an object as parameter that contains the array field and sort order. In this example accounts is an array field.

db.customers.createIndex({
  accounts: 1
})

View the Indexes used in a Collection
Use getIndexes() to see all the indexes created in a collection.

db.customers.getIndexes()

Check if an index is being used on a query
Use explain() in a collection when running a query to see the Execution plan. This plan provides the details of the execution stages (IXSCAN , COLLSCAN, FETCH, SORT, etc.).

The IXSCAN stage indicates the query is using an index and what index is being selected.
The COLLSCAN stage indicates a collection scan is perform, not using any indexes.
The FETCH stage indicates documents are being read from the collection.
The SORT stage indicates documents are being sorted in memory.
db.customers.explain().find({
  accounts: 627788
  })
Previous

---------------------------------

Criar um Índice Composto
Usar createIndex() para criar um novo índice em uma coleção. Dentro dos parênteses de createIndex(), inclua um objeto que contenha dois ou mais campos e sua ordem de classificação.

db.customers.createIndex({
  active:1, 
  birthdate:-1,
  name:1
})

Ordem dos Campos em um Índice Composto
A ordem dos campos é importante ao criar o índice e a ordem de classificação. Recomenda-se listar os campos na seguinte ordem: Igualdade, Classificação e Intervalo.

Igualdade: campo/s que corresponde a um único valor de campo em uma consulta
Ordenar: campo/s que ordena os resultados por em uma consulta
Intervalo: campo/s que a consulta filtra em um intervalo de valores válidos
A consulta a seguir inclui uma correspondência de igualdade no campo ativo, uma classificação no aniversário (descendente) e nome (ascendente) e uma consulta de intervalo no aniversário também.

db.customers.find({
  birthdate: {
    $gte:ISODate("1977-01-01")
    },
    active:true
    }).sort({
      birthdate:-1, 
      name:1
      })
Aqui está um exemplo de um índice eficiente para esta consulta:

db.customers.createIndex({
  active:1, 
  birthdate:-1,
  name:1
})

Visualizar os Índices usados em uma Coleção
Usar getIndexes() para ver todos os índices criados em uma coleção.

db.customers.getIndexes()

Verifique se um índice está sendo usado em uma consulta
Usar explain() em uma coleção ao executar uma consulta para ver o plano Execução. Este plano fornece os detalhes das etapas de execução (IXSCAN , COLLSCAN, FETCH, SORT, etc.). Alguns deles são:

O IXSCAN stage indica que a consulta está usando um índice e qual índice está sendo selecionado.
O COLLSCAN stage indica que uma varredura de coleção é executada, não usando nenhum índice.
O FETCH o estágio indica que os documentos estão sendo lidos da coleção.
O SORT o estágio indica que os documentos estão sendo classificados na memória.
db.customers.explain().find({
  birthdate: {
    $gte:ISODate("1977-01-01")
    },
  active:true
  }).sort({
    birthdate:-1,
    name:1
    })

Cubra uma consulta pelo Índice
Um índice cobre uma consulta quando o MongoDB não precisa buscar os dados da memória, pois todos os dados necessários já são retornados pelo índice.

Na maioria dos casos, podemos usar projeções para retornar apenas os campos obrigatórios e cobrir a consulta. Certifique-se de que os campos na projeção estejam no índice.

Adicionando a projeção {name:1,birthdate:1,_id:0} na consulta anterior, podemos limitar os campos retornados a apenas name e birthdate. Esses campos fazem parte do índice e quando executamos o explain() comando, o plano de execução mostra apenas duas etapas:

IXSCAN - Verificação de índice usando o índice composto
PROJECTION_COVERED - Todas as informações necessárias são retornadas pelo índice, não há necessidade de buscar da memória
db.customers.explain().find({
  birthdate: {
    $gte:ISODate("1977-01-01")
    },
  active:true
  },
  {name:1,
    birthdate:1, 
    _id:0
  }).sort({
    birthdate:-1,
    name:1
    })

------------------

View the Indexes used in a Collection
Use getIndexes() to see all the indexes created in a collection. There is always a default index in every collection on _id field. This index is used by MongoDB internally and cannot be deleted.

db.customers.getIndexes()

Delete an Index
Use dropIndex() to delete an existing index from a collection. Within the parentheses of dropIndex(), include an object representing the index key or provide the index name as a string.

Delete index by name:

db.customers.dropIndex(
  'active_1_birthdate_-1_name_1'
)
Delete index by key:

db.customers.dropIndex({
  active:1,
  birthdate:-1, 
  name:1
})

Delete Indexes
Use dropIndexes() to delete all the indexes from a collection, with the exception of the default index on _id.

db.customers.dropIndexes()
The dropIndexes() command also can accept an array of index names as a parameter to delete a specific list of indexes.

db.collection.dropIndexes([
  'index1name', 'index2name', 'index3name'
  ])

---------------------------------

$search {
  "compound": {
    "must": [{
      "text": {
        "query": "field",
        "path": "habitat"
      }
    }],
    "should": [{
      "range": {
        "gte": 45,
        "path": "wingspan_cm",
        "score": {"constant": {"value": 5}}
      }
    }]
  }
}

------------------------------------------------

$searchMeta e faceta
$searchMeta é um estágio de agregação para o Atlas Search onde os metadados relacionados à pesquisa são mostrados. Isso significa que, se os nossos resultados de pesquisa forem divididos em intervalos, usando faceta, podemos ver isso no estágio $searchMeta, porque esses intervalos são informações sobre como os resultados da pesquisa são formatados.

$searchMeta: {
    "facet": {
        "operator": {
            "text": {
            "query": ["Northern Cardinal"],
            "path": "common_name"
            }
        },
        "facets": {
            "sightingWeekFacet": {
                "type": "date",
                "path": "sighting",
                "boundaries": [ISODate("2022-01-01"), 
                    ISODate("2022-01-08"),
                    ISODate("2022-01-15"),
                    ISODate("2022-01-22")],
                "default" : "other"
            }
        }
    }
}
"facet" é um operador dentro de $searchMeta. "operador" refere-se ao operador de pesquisa - a consulta em si. "facetas" operador é onde colocamos a definição dos baldes para as facetas.

---------------------------------------------------

Usando uma Transação: Código de Vídeo
Aqui está uma recapitulação do código usado para concluir uma transação de vários documentos:

const session = db.getMongo().startSession()

session.startTransaction()

const account = session.getDatabase('< add database name here>').getCollection('<add collection name here>')

//Add database operations like .updateOne() here

session.commitTransaction()

Abortar uma Transação
Se você se encontrar em um cenário que exige que você reverta as operações do banco de dados antes de uma transação ser concluída, você pode abortar a transação. Isso reverterá o banco de dados para seu estado original, antes que a transação seja iniciada.


Abortando uma Transação: Código de Vídeo
Aqui está uma recapitulação do código que é usado para cancelar uma transação antes de concluir:

const session = db.getMongo().startSession()

session.startTransaction()

const account = session.getDatabase('< add database name here>').getCollection('<add collection name here>')
	
//Add database operations like .updateOne() here

session.abortTransaction()

--------------------------------------------------------------------------------------------------------------------

SEGUNDO CURSO: MongoDB Data Modeling Path
IDENTIFYING ENTITIES
Entidade pode ser uma pessoa, produto, organização ou localização (Ebooks, AudioBooks, Printed Boook, Users)
Atributos podem ser nome, preço

Entidadedes / Operaçãos que a entidade vai fazer / Informações que precisam para essas operações / Tipo de Leitura ou Escrita

Estimar quantidade de operações irão ocorrer (1000 / seg ou 2 /dia)











IDENTIFYING RELATIONSHIPS
1-1 (relação um para um, onde só pode ter um em todos os casos)
1-M (relação onde uma entidade pode se relacionar com inúmeras entidades)
M-M (relação onde muitas entidades podem se relacionar com muitas entidades)

Referenciamento: Documentos separados usando uma chave (_id)
Incorporação: Único documento onde as informações são armazenadas dentro do pai
REGRA DE OURO: Dados que são acessados juntos devem ser guardados juntos
Perguntas para saber se deve fazer um referenciamento ou incorporação (Se sim, 1 ponto para incorporação. Se não, 1 ponto para referenciamento):
	Simplicity: Manter as informações juntas levaria a um modelo mais simplesf e um código mais simples
	Go Together: As informações vão juntas para um relacionamento
	Query Atomicity: A aplicação consulta as informações juntas
	Update Complexity: As informçãoes são atualizadas juntas
	Archival: As informações devem ser arquivadas ao mesmo tempo
	Cardinality: Alta cardinalidade, ou seja, uma matriz ilimitada
	Data Duplication: Seria complicada para gereciar e pouco desejada
	Document Size: Tiraria muito memória ou transferência de banda para aplicação
	Document Growth: Teria um crescimento avançado das informações
	Workload: As informações escritas em diferentes momenots tem uma carga de trabalho pesada
	Individuality: A entidade filha consegue existir sem a entidade pai

relação 1-1 é o mais comum
Referenciamento pode ser feito nos dois lado da entidade

1-Many normalmente se utiliza subdocumentos

Many - Many é a mais complexa
Algumas duplicações não são ruins
Não é recomendado as relações bidirecionais nesse caso













SCHEMA DESIGN PATTERNS
Padrões de heranças nos permite armazenar documentos de diferentes formatos na mesma coleção
Polimorfismo: Documentos podem ter diferentes formatos
Utiliza o padrão de herança quando existir mais semelhanças do que diferenças entre os documentos

Operações Matemáticas: Eliminar operações repitidas, fazendo o calculo apenas quando uma nova informação for adicionada
Roll-up: Mesclar dados juntos. Agrupar categorias de unidades menores em maiores

Padrão de Aproximação: Usado quando os dados são díficeis ou caros para calcular

Padrão de Referência estendida evita a junção de muitos dados em uma consulta

Versionamento de Esquemas
Esquemas mudam
MongoDB é capaz de implementar o versionamento, sem inatividade

ADVANCED SCHEMA DESIGN PATTERNS
Fornecem uma solução para otimizar o desempenho da sua aplicação

O grupo de padrão de coleta única relacionam documentos de diferentes tipos em uma única coleção
Isso torna mais eficiente, pois evita consulta de elementos ou documentos não relacionados
Many-Many ou 1-Many
docType: mesma variavel em todos as entidades
relatedTo: para o mesmo valor
Com 1-Many usamos id separado por /

O padrão de subconjunto nos ajuda a diminuir o tamanho geral de documentos que são utilizados com frequência
Melhora o cache e a performance da aplicação

O padrão de balde nos ajuda a agrupar informações em baldes, para que o tamanho do sistema seja otimizado

Padrão de Outlier: Trata documentos com características incomuns de forma diferentes








SCHEMA DESIGN ANTI PATTERNS
Um array ilimitado corre o risco de exceder o tamanho limite do BSON de 16MB
Armazenamos dados que são consultados juntos
Podemos controlar o tamanho do array, uma matriz não deve crescer sem limite

Documentos em blogs aumento o tamanho do arquivo e o conjunto de trabalho, impactando no desempenho da aplicação
WiredTiger
Logical Data Size = Avg Document Size x Documents
Para recuperar o número de documentos em uma coleção usando o stats() método em mongosh, use o seguinte:
	db.collection.stats().count
Para recuperar o tamanho médio de documentos em uma coleção usando o stats() método em mongosh, use o seguinte:
	db.collection.stats().avgObjSize

5000 coleções por M10
10000 coleções por M20 / M30
Quando existe um número maior de coleções do que o esperado, começamos a perder desempenho
Uma maneira de evitar é arquivar ou excluir coleções

um índice é desnecessário quando não é utilizado ou utilizado raramente

O anti-padrão de normalização de dados ocorrem quando dados separados são acessados juntos, resultando em muitas queries ou lookup

Anti-padrão de sensibilidade de caso: busca por palavras com letras maisculas e minusculas
collation: 
	regras específicas da linguagem
	determina como os caracteres são comparados e ordenados
	precisa especificar um locale (locale: "pt-br")
$regex with /i option:
	não é muito eficiente
	não é recomendado







SCHEMA LIFECYCLE MANAGEMENT
Regras de Validação
Níveis de Validação
Ações de Validação
	Error: Rejeita a atualização ou operação de inserção
	Warn: Permite a operação proseguir normalmente, mas a violação é gravada no log.
Json Schema é um padrão bem conhecido que permite descrever e validar documentos em JSON.
	Strict: Aplica regras para todos documentos inseridos e atualizados
	Moderate: Aplica regra para novos e documentos já validados antes
	$nor{validation}: para descrobrir aquilo que ainda não foi validado
	
A correção de um bug pode pedir que a gente mude o esquema da aplicação

Neste exemplo, implementamos a atualização reviews esquema para incluir um opcional locale campo, no properties documento, que aceita apenas fr ou en valores:

const bookstore_reviews_international = {
    bsonType: "object",
    required: [“_id”, "review_id", "user_id", "timestamp", "review", "rating"],
    additionalProperties: false,
    properties: {
        _id: { bsonType: "objectId" },
        review_id: { bsonType: "string" },
        user_id: { bsonType: "string" },
        timestamp: { bsonType: "date" },
        review: { bsonType: "string" },
        rating: {
            bsonType: "int",
            minimum: 0,
            maximum: 5,
        },
        comments: {
            bsonType: "array",
            maxItems: 3,
            items: {
                bsonType: "object",
            },
        },
        locale: { 
            enum: [“en”, “fr”]},
        },
    },
};

Para ativar ou atualizar a validação de esquema para a coleção existente, use o collMod comando e fornecer a opção validador. No nosso exemplo, usamos o $jsonSchema operador para construir o validador e definir o nível de validação e as opções de ação de validação para moderate e warn:

const schema_validation_international = 
{ $jsonSchema: bookstore_reviews_international };

db.runCommand({
    collMod: "reviews",
    validator: schema_validation_international,
    validationLevel: "moderate",
    validationAction: "warn",
});

Eager Migration: Onde fazemos todas as mudanças de uma única vez
Lazy Migration: Onde as mudanças são implementadas conforme os dados são usados
Incremental Migration: Onde damos pequenos passos para implementar as mudanças
Predictive Migration: Atualizamos o esquema com base em previsões de como os dados serão usados no futuro
Hereirates o esquema padrão para o reviews documentos em nossa livraria:

const bookstore_reviews_default = {
    bsonType: "object",
    required: ["_id", "review_id", "user_id", "timestamp", "review", "rating"],
    additionalProperties: false,
    properties: {
        _id: { bsonType: "objectId" },
        review_id: { bsonType: "string" },
        user_id: { bsonType: "string" },
        timestamp: { bsonType: "date" },
        review: { bsonType: "string" },
        rating: {
            bsonType: "int",
            minimum: 0,
            maximum: 5,
        },
        comments: {
            bsonType: "array",
            maxItems: 3,
            items: {
                bsonType: "object",
            },
        },
    },
};

A nova versão do esquema inclui o locale campo e parece com isto:

const bookstore_reviews_international = {
    bsonType: "object",
    required: [
         "_id",
        "review_id",
        "user_id",
        "timestamp",
        "review",
        "rating",
        "locale",
        "schema_version"
    ],
    additionalProperties: false,
    properties: {        
        _id: { bsonType: "objectId" },
        review_id: { bsonType: "string" },
        user_id: { bsonType: "string" },
        timestamp: { bsonType: "date" },
        review: { bsonType: "string" },
        rating: {
            bsonType: "int",
         minimum: 0,
            maximum: 5,
        },
        comments: {
            bsonType: "array",
            maxItems: 3,
            items: {
                bsonType: "object",
            },
        },
        locale: {
          enum: ["en", "fr"],
        },
        schema_version: {
          enum: ["1.0.0"],
        },
    },
};
Para habilitar a validação de esquema para ambos os esquemas simultaneamente, usamos o $jsonSchema o operador e o oneOf palavra-chave:

const schema_migration_validation = { 
    $jsonSchema: { 
       oneOf: [
         bookstore_reviews_default,
         bookstore_reviews_international
       ]
    }
};
Para atualizar as regras de validação de esquema para a coleção existente, usamos o collMod comando:

db.runCommand({
    collMod: "reviews",
    validator: schema_migration_validation,
    validationLevel: "strict",
    validationAction: "error",
});