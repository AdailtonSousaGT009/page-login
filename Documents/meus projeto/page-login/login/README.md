# 💻 Tela de Login com Registro e Recuperação de Senha - React

Este projeto é uma **interface de autenticação** moderna construída com **React**, com suporte para:

- Tela de login
- Tela de cadastro
- Página de recuperação de senha
- Modo claro/escuro com alternância
- Navegação entre páginas com React Router
- Interface estilizada com CSS e `react-icons`

---

## Funcionalidades

Formulário de **login** com validação básica
Alternância entre **modo claro e escuro**
Navegação para:
Página de **registro** (`/register`)
Página de **recuperação de senha** (`/forgot-password`)
Campos de **email** e **senha**
Checkbox “Lembre de mim”
Ícones com `react-icons`
Responsivo e com efeito de **vidro translúcido**
Props reutilizáveis para `title` e `buttonText`

---

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS moderno (Glassmorphism, `backdrop-filter`)
- Vite para desenvolvimento

---

## Estrutura de Diretórios (resumo)

src/
├── App.jsx
├── App.css
├── main.jsx
├── Components/
│ ├── Login/
│ │ ├── Login.jsx
│ │ ├── Login.css
│ ├── Register/
│ │ └── Register.jsx
│ ├── ForgotPassword/
│ │ └── ForgotPassword.jsx
