export async function getResponse(prompt) {

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
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
        return response
    })
        .catch((e) => {
            return e.message;
        });

    return completion;

}