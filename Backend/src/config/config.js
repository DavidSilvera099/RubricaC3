const config = {
    PORT: process.env.PORT || 3001,
    KEYSECRET_JWT: 'David123',
    LINKFRONTEND: process.env.LINKFRONTEND || 'http://localhost:5173',
    DB: {
        HOST: process.env.DB_HOST || 'localhost',
        USER: process.env.DB_USER || 'root',
        PASSWORD: process.env.DB_PASSWORD || '12072001',
        NAME: process.env.DB_NAME || 'dhotel',
        PORT: process.env.DB_PORT || 3306
    }
};

export default config;
