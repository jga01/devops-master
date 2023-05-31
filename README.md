# Desafio DevOps - Jenkins em Docker com aplicativo Angular e monitoramento do Nagios

Este README fornece instruções sobre a configuração de um ambiente Jenkins em Docker com um aplicativo Angular e seu monitoramento usando o Nagios. A configuração envolve o uso do Terraform para provisionar a infraestrutura e automatizar o processo de implantação.

## Pré-requisitos

- Docker: certifique-se de que o Docker esteja instalado no sistema em que a implantação ocorrerá. Você pode consultar a documentação oficial do Docker para obter instruções de instalação específicas para o seu sistema operacional.

## Provisionamento de infraestrutura

1. Instale o Terraform: Se você não tiver o Terraform instalado, siga a documentação oficial do Terraform para instalá-lo em seu computador local.

2. Clone o repositório: Clone o repositório que contém os arquivos de configuração do Terraform para provisionar a infraestrutura.

```csharp
git clone <repository-url>
```

3. Configure o Terraform: No repositório clonado, atualize os arquivos de configuração do Terraform com os detalhes necessários, como credenciais do AWS, região e quaisquer outros parâmetros necessários.

4. Provisione a infraestrutura: Execute o seguinte comando para inicializar e aplicar a configuração do Terraform, que criará a infraestrutura necessária:

```csharp
terraform init
terraform apply
```

## Configuração do Jenkins com Docker

Depois que a infraestrutura for provisionada, siga estas etapas para configurar o ambiente Dockerized Jenkins:

1. Faça o SSH na instância provisionada ou acesse-a por meio do endereço IP configurado.

2. Instale o Docker na instância se ele ainda não estiver instalado.

3. Extraia a imagem do Docker do Jenkins e execute-a usando a configuração apropriada.

## Pipeline de CI/CD com Jenkins Dockerizado

### Configurar o Jenkins:

- Acesse a instância do Jenkins abrindo um navegador da Web e inserindo o URL do Jenkins.

- Siga as instruções na tela para concluir a configuração inicial do Jenkins.

- Instale todos os plug-ins necessários e configure o Jenkins de acordo com seus requisitos.

### Conecte o Jenkins ao GitHub:

- Na interface da Web do Jenkins, vá para "Manage Jenkins" (Gerenciar Jenkins) > "Manage Plugins" (Gerenciar plug-ins) e instale os plug-ins necessários para a integração com o GitHub (por exemplo, plug-in do GitHub, plug-in do Git).

- Configure um webhook do GitHub nas configurações do seu repositório para acionar as compilações do Jenkins sempre que houver um novo commit.

### Criar o pipeline do Jenkins:

- No Jenkins, crie um novo trabalho de pipeline.

- Configure o pipeline para buscar o código-fonte do aplicativo Angular no repositório do GitHub.

- Defina as etapas de compilação necessárias, como a instalação de dependências, a compilação do aplicativo Angular e a geração de artefatos.

### Teste o pipeline de CI/CD:

- Envie um novo commit para o repositório do GitHub.

- Verifique a interface da Web do Jenkins para verificar se uma nova compilação é acionada automaticamente.

- Monitore os registros de compilação e garanta que o aplicativo Angular seja compilado com êxito.

## Monitoramento do Nagios do aplicativo Angular

### Instale o Nagios:

- Configure um servidor separado ou use um servidor existente para instalar o Nagios.

- Siga a documentação oficial do Nagios para instalar e configurar o Nagios no servidor escolhido.

### Monitorar o aplicativo Angular:

- Configure o Nagios para monitorar o aplicativo Angular implantado.

- Configure os plug-ins do Nagios ou scripts personalizados para monitorar métricas como tempo de resposta, uso da CPU e da memória e taxas de solicitação.

- Defina limites apropriados e regras de alerta para garantir notificações oportunas de quaisquer problemas.

### Teste o monitoramento do Nagios:

- Acesse a interface da Web do Nagios para verificar se o aplicativo Angular está sendo monitorado.

- Acione alertas introduzindo falhas ou simulando cenários de alta utilização de recursos.

- Verifique se o Nagios gera alertas e notificações conforme o esperado.
