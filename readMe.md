# 🧘‍♂️ Estica Aí  

**Estica Aí** é um lembrete inteligente desenvolvido em **HTML, CSS e JavaScript**, que envia **notificações automáticas no navegador** para incentivar **pausas e alongamentos** durante o trabalho.  

Ideal para quem passa longos períodos em frente ao computador e quer cuidar da **postura, concentração e bem-estar**. 💻✨  

---

## 🚀 Funcionalidades  

- ⏰ Permite escolher o **intervalo entre lembretes** (15, 30, 60 ou 120 minutos);  
- 🔔 Exibe **notificações automáticas** no navegador com lembretes de pausa;  
- 🕒 Mostra um **contador regressivo em tempo real**, com precisão mesmo em segundo plano;  
- 🔁 Reinicia o ciclo automaticamente após cada notificação;  
- 🧩 Funciona **diretamente no navegador**, sem precisar instalar nada;  
- 💬 Usa a **API de Notificações** nativa do navegador;  
- ⚙️ Compatível com Chrome, Edge e navegadores baseados em Chromium.  

---

## 🧠 Como funciona  

1. Ao abrir o site e clicar em **“Iniciar”**, o navegador solicita permissão para enviar notificações.  
2. O usuário escolhe o **intervalo desejado** entre os lembretes (por exemplo, 1 hora).  
3. O sistema registra o **horário exato de término** com base na hora do sistema (`Date.now()`), garantindo **precisão total** mesmo se o navegador ficar em segundo plano.  
4. A função `updateTimerDisplay()` calcula o tempo restante em tempo real e exibe o formato `hh:mm:ss`.  
5. Quando o contador chega a zero, é exibida uma **notificação** com a mensagem:  

   > ⏸️ *Pausa para alongar!*  
   > Hora de se levantar, esticar e relaxar os ombros.  

6. Após o aviso, o temporizador é **reiniciado automaticamente**, mantendo o ciclo contínuo.  

---

## ⚙️ Tecnologias utilizadas  

- **HTML5** – Estrutura da página  
- **CSS3** – Estilização e layout  
- **JavaScript (ES6+)** – Lógica do timer, cálculo em tempo real e notificações  

---

## 💡 Por que usar  

👨‍💻 Ideal para profissionais que passam horas sentados em frente ao computador.  
🧍‍♂️ Ajuda a **prevenir dores na coluna, pescoço e ombros**.  
🧘‍♀️ Incentiva **pausas ativas e respiração consciente** ao longo do dia.  

---

## 🛠️ Melhorias futuras  

- 💬 Adicionar **alertas visuais animados** (pop-up/modal na tela);  
- ✏️ Permitir **mensagens personalizadas** para cada lembrete;  
- 📱 Transformar em **PWA** (para funcionar mesmo com o navegador fechado);  
- 📊 Adicionar **estatísticas de pausas realizadas**.  

---

## 🧩 Como testar localmente  

1. **Baixe ou clone este repositório.**  
2. **Abra o arquivo `index.html` diretamente no navegador.**  
3. **Permita o envio de notificações** quando o site solicitar.  
4. **Escolha o intervalo** e clique em **“Iniciar”**.  
5. **Mantenha o site aberto** — o *Estica Aí* cuidará do resto! 💪  

---

## ❤️ Propósito

O **Estica Aí** foi criado para incentivar **pausas regulares e conscientes** durante o trabalho.  
Fazer pequenos alongamentos ao longo do dia ajuda a prevenir dores, melhorar a circulação e aumentar o foco e a produtividade. 
Uma lembrança de que até o código pode cuidar da gente!🌿  
> “Às vezes, o melhor upgrade que podemos dar no nosso trabalho é levantar, respirar e se alongar.” 

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