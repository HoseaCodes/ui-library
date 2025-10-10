function CoinMarketAPI() {
    const [crypto, setCrypto] = useState([])

    const getCrypto = async () => {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        try {
            const res = await axios.get(url)
            console.log(res.data)
            setCrypto(res.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getCrypto()
    }, [])

    return {
        crypto: [crypto, setCrypto]
    }


}

export default CoinMarketAPI;