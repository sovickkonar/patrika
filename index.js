const app = require('./app');
const { connection } = require('./app/utils/connect');
const { PORT } = require('./app/config');

app.listen(PORT, async()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    try {
        await connection();
    } catch (error) {
        console.log('closing the server')
        process.exit(0);
    }
})