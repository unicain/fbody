# Frequency Body — Landing Page de Alta Conversão & SEO (WB-EMS São Paulo)

Landing page institucional e de captação de clientes para a **Frequency Body EletroEstimulação**, com foco em posicionamento premium nos bairros nobres de São Paulo (Moema, Itaim Bibi, Jardins, Vila Nova Conceição, Morumbi, Brooklin), alinhamento com **Google Meu Negócio**, integração com o **Instagram (@frequency.body)** e múltiplos pontos de conversão para **WhatsApp**.

---

## 🚀 Tecnologias Utilizadas

- **React 19** com componentes funcionais e hooks modernos.
- **TypeScript** para tipagem estrita e segurança de código.
- **Tailwind CSS v4** para estilização utilitária de alta fidelidade e design responsivo.
- **Vite 8** como bundler ultra-rápido configurado com `base: './'` (compatível com raiz e subpastas do GitHub Pages).
- **Lucide React** para iconografia leve e moderna.
- **Schema.org JSON-LD** integrado no HTML para SEO avançado (*LocalBusiness*, *HealthAndBeautyBusiness*, *FAQPage*).

---

## 📂 Estrutura do Projeto

```text
├── index.html                   # Entry point com SEO, OpenGraph e Schema.org JSON-LD
├── vite.config.ts               # Configuração do Vite com base relativa para GitHub Pages
├── package.json                 # Dependências e scripts npm
├── .github/
│   └── workflows/deploy.yml     # Workflow pronto para Deploy Automático no GitHub Pages
├── src/
│   ├── main.tsx                 # Ponto de entrada React
│   ├── App.tsx                  # Estrutura dos 5 Capítulos Editoriais
│   ├── index.css                # Importação do Tailwind CSS v4
│   ├── data/
│   │   └── frequencyData.ts     # Dados centralizados (contatos, 4 pilares, bairros de SP, 5 FAQs)
│   └── components/
│       ├── FrequencyLogo.tsx    # Logo vetorial adaptado à estética editorial
│       ├── Navbar.tsx           # Menu dos 5 itens (The Experience, The Method, Your Session, About, Book Your Session)
│       ├── Hero.tsx             # Hero editorial ("O TEMPO É O VERDADEIRO LUXO")
│       ├── TheExperienceSection.tsx # The Experience (Os 4 Pilares, Atendimento VIP e Bairros)
│       ├── TheMethodSection.tsx # The Method (Whole-Body EMS, 10 grupos e Accordion das 5 Perguntas)
│       ├── YourSessionSection.tsx   # Your Session (Etapas da sessão e Simulador de Tempo Poupado)
│       ├── AboutFernanda.tsx    # About (Fernanda B. Faria, CREF-SP e Propósito de Longevidade)
│       ├── BookingForm.tsx      # Book Your Session (Agendamento personalizado via WhatsApp)
│       ├── Footer.tsx           # Rodapé editorial com avisos legais e ética do CREF-SP
│       └── FloatingWhatsApp.tsx # Botão flutuante minimalista para WhatsApp
```

---

## 🛠️ Como Rodar Localmente

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse no seu navegador: `http://localhost:3000` (ou a porta informada no terminal).

3. **Gerar a versão de produção (Build):**
   ```bash
   npm run build
   ```
   Os arquivos finais otimizados serão gerados na pasta `dist/`.

4. **Testar o preview da versão de produção:**
   ```bash
   npm run preview
   ```

---

## 🌐 Como Publicar no GitHub e Fazer Deploy

### Passo 1: Inicializar o repositório Git e fazer o primeiro commit
No terminal do projeto, execute:
```bash
git init
git add .
git commit -m "feat: landing page completa Frequency Body com SEO e WhatsApp"
git branch -M main
```

### Passo 2: Conectar ao seu repositório no GitHub
Crie um repositório no seu GitHub (exemplo: `frequency-body`) e conecte:
```bash
git remote add origin https://github.com/SEU-USUARIO/frequency-body.git
git push -u origin main
```

### Passo 3: Ativar o GitHub Pages (Automático)
O projeto já conta com o arquivo `.github/workflows/deploy.yml`:
1. No seu repositório no GitHub, clique na aba **Settings**.
2. Vá em **Pages** (no menu lateral esquerdo).
3. Em **Build and deployment > Source**, selecione **GitHub Actions**.
4. Sempre que você fizer um `git push` na branch `main`, o GitHub compilará o projeto e disponibilizará o link no ar automaticamente!

*(O projeto também é 100% compatível com deploy na **Vercel**, **Netlify** ou **Cloudflare Pages** simplesmente conectando o repositório do GitHub).*

---

## ⚙️ Onde Personalizar Informações

Todas as informações centrais do negócio estão organizadas em um único arquivo de configuração:
👉 **`src/data/frequencyData.ts`**

Nele você pode alterar com facilidade:
- **Número do WhatsApp:** `phoneRaw` e `phoneFormatted`
- **Email de Contato:** `email`
- **Instagram:** `instagram` e `instagramUrl`
- **Mensagens Padrão do WhatsApp:** textos prontos que chegam para você no WhatsApp
- **Bairros de São Paulo Atendidos:** adicionar ou remover bairros
- **Perguntas e Respostas do FAQ**
