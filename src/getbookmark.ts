let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
export const handler = async (event: any = {}): Promise<any> => {
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
              name: "typescript-sam-links",
              links: [
                "https://google.com",
                "https://typescript.io"
              ]
            })
        }
    } catch (err) {
        console.log(err)
        return err
    }

    console.log('Sending response')
    console.log(response)
    return response
}
