# 🚀 DEPLOY PARA GITHUB AGORA - 3 PASSOS

## Passo 1: Criar repositório no GitHub

1. Vai a https://github.com/new
2. Nome: `geological-web-map-mozambique`
3. Público ✅
4. Não inicializes com README

## Passo 2: Fazer push para GitHub

```bash
cd geological-web-map-mozambique

# Inicializar git
git init
git add .
git commit -m "Geological Web Map of Mozambique"

# Adicionar o teu username do GitHub
git remote add origin https://github.com/heltrakinho07/geological-web-map-mozambique.git

# Push
git branch -M main
git push -u origin main
```

## Passo 3: Ativar GitHub Pages

1. Vai ao repositório no GitHub
2. Settings → Pages
3. Source: Branch `main`, folder `/ (root)`
4. Save

## 🎉 Resultado

Após 2-3 minutos, o teu site estará em:
```
https://heltrakinho07.github.io/geological-web-map-mozambique/
```

## O que está incluído

- 7,843 unidades geológicas (filtradas para performance)
- 11 províncias de Moçambique
- Filtros profissionais por era, unidade geológica, suite
- Design responsivo e moderno
- Totalmente funcional sem backend
- Tamanho total: ~65MB (dentro dos limites)

## 🔄 Para atualizar no futuro

```bash
python export_data_filtered.py
cp static/data/geology_filtered.json data/geology.json
git add data/
git commit -m "Update data"
git push
```

---

**Pronto para o teu portfolio! 🌍**
