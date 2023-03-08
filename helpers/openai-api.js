import { REACT_APP_OPENAI_API_KEY } from "../secrets";
import { Configuration, OpenAIApi } from 'openai'
import 'react-native-url-polyfill/auto'

export async function getResponse(prompt) {

    const configuration = new Configuration({
        apiKey: REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'user',
                content: prompt,
            }
        ],
    }).then((response) => {
        return response.statusText
    })
        .catch((e) => {
            return e.message;
        });

    return completion;

}