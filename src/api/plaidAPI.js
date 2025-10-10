const dotenv = require('dotenv');
const plaid = require('plaid');
dotenv.config({ path: './config/config.env' })

const client = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    env: plaid.environments.sandbox,
});

const createToken = async (request, response) => {
    try {
        // Get the client_user_id by searching for the current user
        // const user = await User.find();
        const clientUserId = 'user-id';
        // Create the link_token with all of your configurations
        const tokenResponse = await client.createLinkToken({
            user: {
                client_user_id: '9',
            },
            client_name: 'Plaid Test App',
            products: ["auth", "identity"],
            country_codes: ['US'],
            language: 'en',
        });
        response.json(tokenResponse);
    } catch (e) {
        // Display error on client
        return response.send({ error: e.message });
    }
}

const tokenExchange = async (req, res) => {
    try {
        const { public_token } = req.body;
        const { access_token } = await client
            .exchangePublicToken(public_token)
            .catch(console.error);

        const authResponse = await client.getAuth(access_token);
        const identityResponse = await client.getIdentity(access_token);
        const balanceResponse = await client.getBalance(access_token);

        res.json({
            status: "Success",
            Auth: authResponse,
            Identity: identityResponse,
            Balance: balanceResponse,
        });
    } catch (e) {
        console.error(e);
    }
}

const getAccounts = async (request, response, next) => {
    client.getAccounts(accessToken, function (error, accountsResponse) {
        if (error != null) {
            prettyPrintResponse(error);
            return response.json({
                error: error,
            });
        }
        prettyPrintResponse(accountsResponse);
        response.json({ error: null, accounts: accountsResponse });
    });
}


const transactionCtrl = {
    createToken,
    tokenExchange,
    getAccounts
}

module.exports = transactionCtrl;