# Сайт и Wiki хакерспейса B4CKSP4CE

Репозиторий содержит исходный код и содержимое [сайта](https://0x08.in) и [Wiki](https://0x08.in/wiki), а в Issues обсуждаются не только баги, но и любые вопросы касательно происходящего в спэйсе.

Сайт доступен на публичном домене 0x08.in с помощью  GitHub Pages. Исходный код проекта, содержимое страниц и связанные с ними файлы находятся в ветке `dev`.

Содержимое добавляется в виде [.md и .mdx](https://mdxjs.com/getting-started) файлов, а код компонентов и обвязки пишется на TypeScript с использованием  Styled Components и GraphQL.

Дистрибутив собирается с помощью [Gatsby.js](https://www.gatsbyjs.com/docs/) и [автоматически публикуется](https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/#deploying-to-a-github-pages-subdomain-at-githubio) в ветку `master`.

> **Важно!** В разных частях проекта используются разные технологии, подходы к написанию кода и к добавлению содержимого! Подробности – в README и CONTRIBUTING файлах основных поддиректорий.

## Как поднять это локально? 

```shell
# Склонировать репозиторий
git pull https://github.com/b4ck5p4c3/0x08.in

# Перейти в директорию проекта
cd 0x08.in

# Установить зависимости и запустить сборку
npm i && npm start

# Дождаться окончания:

Your site is now running at http://localhost:8000

...

```

После этого можно открывать локальный сайт и разрабатывать. Изменения в файлах автоматически обновят страницы с помощью [HMR](https://webpack.js.org/concepts/hot-module-replacement/).

В режиме разработки (по умолчанию) на `http://localhost:8000/___graphql` можно поиграться с данными сайта через GraphQL API (см. [Gatsby GraphQL Tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql))

## Файловая структура проекта

Файловая структура наиболее важных частей проекта выглядит так:

```
├── src/
├── pages/
├── content/
  ├── events/
  ├── projects/
  └── wiki/
├── ...		
├── CNAME
├── robots.txt
├── gatsby-*.js
├── google*.html
└── yandex*.html 
```

### Исходники

- **`src/`** - компоненты и обвязка сайта
- **`pages/`** - код основных страниц сайта
- **`content/events`** - страницы мероприятий
- **`content/projects`** - страницы проектов
- **`content/wiki`** - содержимое Wiki спэйса

### Дистрибутив

- **`CNAME`** - доменное имя для GitHub Pages
- **`robots.txt`** - ограничения для поисковиков
- **`google*.html, yandex*.html`** - подтверждение владения доменом и сайтом

Кроме файлов в репозитории, в процессе установки проекта и сборки сайта генерируются слеедующие:

- **`.cache/`** - кэш сборки
- **`public/`** - статический дистрибутив сайта
- **`node_modules/`** - зависимости проекта

После публикации сайта в ветку master, пользователям будет доступен именно статический дистрибутив собранный в `public/`, а так же файлы для поисковиков и GitHub Pages.

Остальные файлы можно считать служебными и без предварительного изучения документации технологий их лучше не трогать.

## Технологии

- [ESLint](https://eslint.org/) с [конфигом](https://www.npmjs.com/package/eslint-config-airbnb) Airbnb
- [Gatsby MDX](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx) для JSX в Markdown
- [Styled Components](https://www.styled-components.com/) для CSS-in-JS
- [Prettier](https://prettier.io/) для быстрого форматирования `*.tsx`, `*.ts`

## 🎓 Подробнее про Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.


## Лицензия

![Creative Commons License](https://i.creativecommons.org/l/by/4.0/80x15.png) [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
