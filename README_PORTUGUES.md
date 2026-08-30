# Mapa Geológico Web de Moçambique

Aplicação WebGIS profissional para visualização de dados geológicos de Moçambique usando o pacote GeoMoz. Este mapa interativo fornece acesso abrangente às informações geológicas de Moçambique com capacidades avançadas de filtragem e análise.

## Publicar no GitHub Pages - 3 Passos

**Pronto para publicar em 3 minutos!** Veja [DEPLOY_NOW.md](DEPLOY_NOW.md) para instruções imediatas.

## Funcionalidades

### Mapeamento Interativo
- **Interface profissional** com design moderno
- **Visualização de dados geológicos em tempo real** usando Leaflet.js
- **Limites de províncias** para contexto administrativo
- **Unidades geológicas codificadas por cores** baseadas em litologia
- **Popups interativos** com informações geológicas detalhadas
- **Design responsivo** para desktop e dispositivos móveis

### Filtragem Avançada
- **Filtrar por Província** - Focar em regiões específicas
- **Filtrar por Era Geológica** - Explorar diferentes períodos
- **Filtrar por Unidade Geológica (Legend)** - Dropdown com unidades organizadas por frequência
- **Pesquisar por Suite** - Filtrar por suites geológicas
- **Controle de opacidade** - Ajustar transparência para melhor visualização

### Visão Estatística
- **Contagem total de características geológicas**
- **Unidades geológicas únicas** (515 unidades diferentes)
- **Distribuição de eras geológicas** (17 eras diferentes)
- **Visão geral de suites geológicas** (29 suites)
- **Atualizações de estatísticas em tempo real**

### Design Profissional
- **Interface com gradiente moderno** em tema roxo
- **Barra lateral responsiva** com painéis organizados
- **Indicadores de carregamento** para melhor UX
- **Tipografia profissional** e espaçamento
- **Interface com ícones** usando Font Awesome

## 🛠️ Stack Tecnológico

### Backend (versão local)
- **Flask** - Framework web para API
- **GeoMoz** - Biblioteca de dados geológicos para Moçambique
- **GeoPandas** - Processamento de dados geoespaciais
- **Flask-CORS** - Compartilhamento de recursos entre origens

### Frontend (versão estática GitHub Pages)
- **Leaflet.js** - Biblioteca de mapeamento interativo
- **OpenStreetMap** - Tiles de mapa base
- **Font Awesome** - Ícones profissionais
- **JavaScript Vanilla** - Sem dependências de framework
- **CSS3** - Estilização moderna com gradientes

### Fonte de Dados
- **Pacote GeoMoz** - 7,843 características geológicas (versão filtrada)
- **515 unidades geológicas únicas** com classificações detalhadas
- **Limites administrativos** para 11 províncias
- **Metadados geológicos completos** (eras, períodos, suites, formações)

## Instalação

### Pré-requisitos
- Python 3.9 ou superior
- pip package manager

### Configuração Local (com Backend)

1. **Navegar para o diretório do projeto**
```bash
cd geological-web-map-mozambique
```

2. **Criar ambiente virtual**
```bash
python3 -m venv venv
source venv/bin/activate  # No Linux/Mac
# ou
venv\Scripts\activate     # No Windows
```

3. **Instalar dependências**
```bash
pip install -r requirements.txt
```

4. **Executar a aplicação**
```bash
python app.py
```

5. **Acessar a aplicação**
```
http://localhost:5000
```

### Versão Estática (GitHub Pages)

A versão estática já está configurada e pode ser aberta diretamente:
```bash
# Simplesmente abrir index.html no navegador
open index.html  # No Mac
start index.html  # No Windows
xdg-open index.html  # No Linux
```

## Endpoints da API

### Dados Geológicos
- `GET /api/geology` - Endpoint principal de dados geológicos
  - Parâmetros: `province`, `limit`, `offset`
- `GET /api/geology/stats` - Resumo estatístico
- `GET /api/filter/legend` - Filtrar por unidade geológica
  - Parâmetros: `legend`, `exact` (para correspondência exata), `limit`
- `GET /api/filter/era` - Filtrar por era geológica
  - Parâmetros: `era`, `limit`
- `GET /api/filter/suite` - Filtrar por suite geológica
  - Parâmetros: `suite`, `limit`
- `GET /api/legends/list` - Lista de todas as unidades geológicas com contagens de frequência

### Dados Administrativos
- `GET /api/provinces` - Limites de província como GeoJSON
- `GET /api/provinces/list` - Lista de nomes de províncias

### Sistema
- `GET /api/health` - Endpoint de verificação de saúde
- `GET /` - Interface principal da aplicação

## Guia de Uso

### Navegação Básica
1. **Pan e zoom** usando gestos de mouse ou touch
2. **Clicar em unidades geológicas** para ver informações detalhadas
3. **Passar sobre características** para tooltips rápidos
4. **Usar a barra lateral** para filtrar e controlar camadas

### Filtragem de Dados
1. **Selecionar uma província** do dropdown para focar numa região
2. **Escolher uma era geológica** para explorar períodos específicos
3. **Selecionar uma unidade geológica** do dropdown organizado:
   - Unidades Comuns (100+ características)
   - Frequência Média (20-99 características)
   - Unidades Raras (<20 características)
4. **Pesquisar por suites** para encontrar formações geológicas relacionadas
5. **Clicar "Apply Filters"** para atualizar o mapa
6. **Clicar "Reset"** para limpar todos os filtros

### Controles de Camada
1. **Alternar limites de província** para contexto administrativo
2. **Alternar unidades geológicas** para mostrar/ocultar os dados principais
3. **Ajustar o slider de opacidade** para controlar a transparência da camada

### Informação de Características
- **Clicar em qualquer unidade geológica** para ver propriedades detalhadas
- **Painel de informação** mostra:
  - Nome da unidade geológica (inglês e português)
  - Era e período geológico
  - Informações de suite e formação
  - Códigos geológicos
  - Área estimada

## Informação de Dados

### Cobertura Geológica
- **Características Totais**: 7,843 unidades geológicas (versão filtrada)
- **Cobertura**: Todo o território de Moçambique
- **Sistema de Coordenadas**: EPSG:4326 (WGS 84)
- **Fonte de Dados**: Pacote GeoMoz (v0.1.4)

### Classificação Geológica
- **515 lendas únicas** com descrições detalhadas de litologia
- **17 eras geológicas** do Arqueano ao Cenozoico
- **29 suites geológicas** para agrupamento regional
- **67 formações geológicas** com estratigrafia detalhada

### Principais Unidades Geológicas
1. Eluvial floodplain mud (1,674 unidades)
2. Eluvial floodplain clayey sand (1,331 unidades)
3. Alluvium, sand, silt, gravel (993 unidades)
4. Granite (292 unidades)
5. Coastal sand dunes and beach sand (224 unidades)

## Considerações de Performance

### Recursos de Otimização
- **Cache LRU** para dados geológicos
- **Suporte de paginação** para grandes conjuntos de dados
- **Carregamento preguiçoso** de características do mapa
- **Geração de cores eficiente** para estilização consistente
- **Carregamento de tiles responsivo** para mapas base

### Configurações Recomendadas
- **Limite padrão**: 1,000 características por solicitação
- **Compatibilidade de browser**: Browsers modernos (Chrome, Firefox, Safari, Edge)
- **Requisitos de rede**: Conexão de internet estável para tiles de mapa

## Personalização

### Estilização
A aplicação usa um tema de gradiente roxo moderno. Para personalizar:
- Editar seção CSS em `index.html`
- Modificar paleta de cores em `app.js`
- Ajustar layout em media queries responsivas

### Processamento de Dados
Para adicionar processamento personalizado de dados:
- Modificar funções de endpoint em `app.py`
- Adicionar novas opções de filtragem na API
- Estender a lógica de processamento de dados GeoMoz

### Configuração de Mapa
Para alterar o comportamento do mapa:
- Ajustar visualização inicial em `app.js`
- Modificar camada base na inicialização do Leaflet
- Adicionar camadas ou sobreposições adicionais de tiles

## Publicação

### Publicação no GitHub Pages (Recomendado - Gratuito)

A aplicação está configurada para publicação estática no GitHub Pages:

1. **Preparar ficheiros estáticos**
```bash
# Os ficheiros já estão preparados
# data/geology.json (57MB - versão filtrada)
# data/provinces.json (0.6MB)
# data/stats.json (47KB)
# data/provinces_list.json (212B)
```

2. **Criar repositório no GitHub**
- Vai a https://github.com/new
- Nome: `geological-web-map-mozambique`
- Público ✅
- Não inicializar com README

3. **Fazer push para GitHub**
```bash
git init
git add .
git commit -m "Mapa Geológico Web de Moçambique"
git remote add origin https://github.com/TEU_USERNAME/geological-web-map-mozambique.git
git branch -M main
git push -u origin main
```

4. **Ativar GitHub Pages**
- Settings → Pages
- Source: Branch `main`, folder `/ (root)`
- Save

5. **Acessar o site**
```
https://TEU_USERNAME.github.io/geological-web-map-mozambique/
```

### Alternativa: Hospedagem de Backend

Se preferir funcionalidade completa de backend (Flask API), considere:

**Railry (Tier Gratuito)**
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

**Render (Tier Gratuito)**
1. Criar configuração `render.yaml`
2. Conectar repositório GitHub
3. Render fará auto-deploy no push

## Solução de Problemas

### Problemas Comuns

**Problema**: Mapa não carregando
- **Solução**: Verificar conexão de internet para tiles de mapa
- **Solução**: Verificar se o servidor Flask está a funcionar

**Problema**: Dados geológicos não exibindo
- **Solução**: Verificar instalação do pacote GeoMoz
- **Solução**: Verificar carregamento de dados nos logs do servidor

**Problema**: Filtros não funcionando
- **Solução**: Limpar cache do browser
- **Solução**: Verificar respostas dos endpoints da API

**Problema**: Problemas de performance
- **Solução**: Reduzir o número de características carregadas
- **Solução**: Usar filtro de província para limitar dados

## Licença

Este projeto usa dados do pacote GeoMoz, que é licenciado sob MIT. O código da aplicação foi criado para fins de portfólio e educacionais.

## Créditos

### Fonte de Dados
- **Pacote GeoMoz** - Biblioteca de dados geoespaciais para Moçambique
- **Autor**: Hélder Gonçalves Félix Traquinho
- **Licença**: MIT
- **Repositório**: https://github.com/geolithicamz-hub/geomoz

### Tecnologias
- **Leaflet.js** - Biblioteca de mapeamento interativo
- **OpenStreetMap** - Tiles de mapa e dados
- **Flask** - Framework web Python
- **GeoPandas** - Processamento de dados geoespaciais

## Integração de Portfólio

Esta aplicação demonstra:
- **Desenvolvimento web full-stack** (Python + JavaScript)
- **Processamento e visualização de dados geoespaciais**
- **Design e implementação de API**
- **Design UI/UX profissional**
- **Interação e filtragem de dados em tempo real**
- **Técnicas de otimização de performance**

Perfeito para exibir num portfólio profissional, especialmente para funções em:
- Desenvolvimento geoespacial
- Desenvolvimento de aplicações web
- Visualização de dados
- Programação GIS
- Computação científica

## Contacto

Para perguntas ou feedback sobre esta aplicação, por favor consulte a documentação do projeto GeoMoz ou contacte através da plataforma Geolithica.

---

**Nota**: Este é um projeto de portfólio que demonstra competências profissionais de desenvolvimento WebGIS usando dados geológicos reais de Moçambique.
