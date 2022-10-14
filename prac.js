document.addEventListener('DOMContentLoaded', () => {
    // setTimeout ... func.. bind this... time
    setTimeout(getRequest, 0);
  
    const title = document.createElement('h1');
    title.innerText = 'Online Chatroom';
    document.querySelector('body').appendChild(title);
  
    // Make div, give ID, add to body
    const textArea = document.createElement("div");
    textArea.setAttribute("id", "text-area");
    textArea.setAttribute('style', 'border: solid');
    document.querySelector('body').appendChild(textArea);
  
    // Form creation
    const formBody = document.createElement('form');
  
    // Make text input and submit button
    // Create "input"
    const inputText = document.createElement("input");
    // id input
    inputText.setAttribute("id", "input");
    // type text
    inputText.setAttribute("type", "text");
    // style border color
    inputText.setAttribute('style', 'border: solid blue');
    // append to form
    formBody.appendChild(inputText);
  
    // Create "submit button"
    const submitButton = document.createElement("input");
    // id submit
    submitButton.setAttribute("id", "button");
    // type submit
    submitButton.setAttribute("type", "submit");
    // style border color
    submitButton.setAttribute('style', 'background-color: skyblue');
    // append to form
    formBody.appendChild(submitButton);
  
    // Attach form to body
    document.querySelector('body').appendChild(formBody);
  
    // Create 5 divs
    const chatBoxes = [];
    for (let i = 0; i < 5; i++){
      let currDiv = document.createElement('div');
      currDiv.setAttribute('id', `chat${i}`);
      chatBoxes.push(currDiv);
    }
    
  
    // make AJAX call here....
    // GET Request
    function getRequest() {
      fetch('https://curriculum-api.codesmith.io/messages')
        .then((data) =>
          // data = Response data type
          // data.json() = Promise object
          data.json())
        .then((data) => {
          // data = Object of data now, yay
          // Obtain messages - Good!
          const messageArr = data;
          console.log('data', messageArr);
  
          // Populate textArea with messages
          // Load 5 messages
          for (let i = 0; i < 5; i++) {
            // Obtain message object
            const currMessage = messageArr[i];
            const currText = currMessage['message'];
            const currCreate = currMessage['created_at'];
            const currAuthor = currMessage['created_by']
            // Make a div, give class, border, innertext
            const currentDiv = chatBoxes[i];
            currentDiv.setAttribute('class', 'message')
            currentDiv.setAttribute('style', 'border: solid grey')
            currentDiv.innerText = `message: ${currText} 
                                  \n created at: ${currCreate}
                                  \n created by: ${currAuthor}`
            // Append to textarea
            textArea.appendChild(currentDiv)
          }
        })
      setTimeout(getRequest, 0);
    }
  
    // Type text in area // Do after getting post working
    // Listen submit event
    // Hardcoded message for now
  
    addEventListener('submit', (e) => {
      //
      e.preventDefault();
      // Submit text info
      const textMessage = document.querySelector('#input');
      // Creating our object message
      const message = {
        created_by: "Emily and Alex",
        message: `${textMessage.value}`
      };
      //fetch request
      fetch('https://curriculum-api.codesmith.io/messages', {
        method: 'POST',
        body: JSON.stringify(message)
      })
        .then((data => {
          data.json()
        }))
        .then((data) => {
          console.log('post', data);
        }).catch((error) => {
          console.error('Error:', error);
        })
    });
  });