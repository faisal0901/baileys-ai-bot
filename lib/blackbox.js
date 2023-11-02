
import axios from 'axios';
import cheerio from 'cheerio'
export async function blackbox(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post("https://www.useblackbox.io/chat-request-v4", {
        "textInput": query,
        "allMessages": [
          {
            "user": query
          }
        ],
        "stream": "",
        "clickedContinue": false
      });

      let yanz = response.data.response[0][0];
      resolve(yanz);
    } catch (error) {
      reject(error);
    }
  });
}
