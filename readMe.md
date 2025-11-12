# 🧘‍♂️ Estica Aí

**Estica Aí** é um lembrete inteligente desenvolvido em **HTML, CSS e JavaScript**, que envia **notificações automáticas no navegador** a cada 1 hora, incentivando pausas e alongamentos durante o trabalho.  

Ideal para quem passa longos períodos em frente ao computador e quer cuidar da **postura, concentração e bem-estar**. 💻✨  

---

## 🚀 Funcionalidades

- ⏰ Inicia um **temporizador de 1 hora** ao clicar em “Iniciar”;  
- 🔔 A cada hora, exibe uma **notificação no navegador** com dicas de alongamento;  
- 🔁 Reinicia o contador automaticamente após cada notificação;  
- 🧩 Funciona **diretamente no navegador**, sem precisar instalar nada;  
- 💬 Usa a **API de Notificações** nativa do navegador.

---

## 🧠 Como funciona

1. Ao abrir o site e clicar em **“Iniciar**, o navegador solicita permissão para enviar notificações.  
2. Após a permissão ser concedida, o sistema inicia um **contador regressivo de 3600 segundos** (1 hora).  
3. A cada segundo, a função `updateTimerDisplay()` atualiza o relógio exibindo o tempo restante formatado em `hh:mm:ss`.  
4. Quando o tempo chega a zero, o navegador mostra uma **notificação** com a mensagem:  
   > “Hora de se alongar! 🧘‍♀️ Levante-se, respire e movimente o corpo.”  
5. O ciclo se repete automaticamente enquanto o site permanecer aberto.

---

## 📂 Estrutura do projeto
📁 estica-ai/
│
├── 📁 js
│   └── 📄 index.js
├── 📁 styles
│   └── 🎨 style.css
├── 🌐 index.html
└── 📝 readMe.md

💡 *Dica:* você pode reduzir o tempo para testar, alterando o contador para poucos segundos.

---

## ⚙️ Personalização

Você pode modificar o comportamento do **Estica Aí** facilmente:

| O que mudar | Onde alterar | Exemplo |
|--------------|---------------|----------|
| Tempo do lembrete | Valor do contador em segundos | `3600` (1h) → `1800` (30min) |
| Mensagem da notificação | Texto dentro da função `enviarNotificacao()` | “Hora do café ☕” |
| Ícone da notificação | URL do ícone dentro da notificação | Substituir o link do ícone padrão |
| Som de alerta | Adicionar `new Audio('url-do-som').play()` | Opcional |

---

## 🧩 Tecnologias utilizadas

- **HTML5** → Estrutura e conteúdo da página  
- **CSS3** → Estilo e aparência simples e leve  
- **JavaScript (ES6)** → Lógica do temporizador e notificações  
- **API de Notificações do Navegador** → Exibição das mensagens pop-up  

---

## ❤️ Propósito

O **Estica Aí** foi criado para incentivar **pausas regulares e conscientes** durante o trabalho.  
Fazer pequenos alongamentos ao longo do dia ajuda a prevenir dores, melhorar a circulação e aumentar o foco e a produtividade. 🌿  

---

## 🤝 Contribuição

Quer contribuir? Fique à vontade!  
Você pode abrir *issues* com sugestões ou enviar *pull requests* com melhorias.

---

## 📄 Licença

Este projeto é de uso livre sob a licença **MIT**.  
Sinta-se à vontade para usar, modificar e compartilhar — mas lembre-se de dar os devidos créditos. 🙌

---

Feito com ☕ e boas intenções por Denis Oliveira [https://github.com/denis-vetdev].