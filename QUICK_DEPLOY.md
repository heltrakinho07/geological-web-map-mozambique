# 🚀 Quick GitHub Pages Deployment

## Método Mais Rápido (5 minutos)

### 1. Preparar ficheiros para GitHub Pages

```bash
cd geological-web-map-mozambique

# Copiar versão estática para a raiz
cp static/index_static.html index.html
cp static/app_static.js app.js
cp -r static/data data
```

### 2. Criar repositório no GitHub

1. Vai a https://github.com/new
2. Nome do repositório: `geological-web-map-mozambique`
3. Torna público (recommended)
4. Não inicializes com README

### 3. Fazer commit e push

```bash
# Inicializar git
git init

# Adicionar ficheiros
git add .

# Commit
git commit -m "Geological Web Map of Mozambique - Portfolio Project"

# Adicionar remote (substitui TEU_USERNAME)
git remote add origin https://github.com/TEU_USERNAME/geological-web-map-mozambique.git

# Push
git branch -M main
git push -u origin main
```

### 4. Ativar GitHub Pages

1. Vai ao repositório no GitHub
2. Clica em **Settings** 
3. Vai a **Pages** (na barra lateral)
4. Em **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clica **Save**

### 5. Acessar o teu site

Após 2-3 minutos, o teu site estará disponível em:
```
https://TEU_USERNAME.github.io/geological-web-map-mozambique/
```

## 📁 Estrutura Final

```
geological-web-map-mozambique/
├── index.html              # Página principal (versão estática)
├── app.js                  # JavaScript (versão estática)
├── data/                   # Dados geológicos exportados
│   ├── geology.json
│   ├── provinces.json
│   ├── stats.json
│   └── provinces_list.json
├── README.md              # Documentação
└── .gitignore
```

## 🔄 Atualizar Dados

Quando quiseres atualizar os dados:

```bash
# Exportar novos dados
python export_data.py

# Copiar para a pasta data
cp static/data/* data/

# Commit e push
git add data/
git commit -m "Update geological data"
git push
```

## ✅ Vantagens do GitHub Pages

- **100% Gratuito**
- **Sem necessidade de servidor**
- **HTTPS automático**
- **CDN global do GitHub**
- **Perfeito para portfolios**
- **Atualizações automáticas**

## 🎯 O que está incluído

- ✅ Mapa interativo completo
- ✅ 12,533 unidades geológicas
- ✅ Filtros avançados
- ✅ Design profissional
- ✅ Responsivo (mobile)
- ✅ Dados geológicos completos
- ✅ Estatísticas em tempo real

## 📝 Notas Importantes

- Os ficheiros JSON são grandes (~10-15MB)
- GitHub Pages suporta ficheiros até 100MB
- O primeiro carregamento pode demorar alguns segundos
- Funciona perfeitamente em todos os browsers modernos

---

**O teu mapa geológico profissional estará online no teu GitHub!**
