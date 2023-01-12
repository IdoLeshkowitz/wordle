interface AppConfig {
    port: string;
    host: string;
    db: {
        host: string;
        user: string;
        password: string;
        database: string;
    }
}

function env<T=string>(key : string ,defaultValue :T): T{
    return (process.env[key] ?? defaultValue) as T ;
}

export default function config(): AppConfig{
    return {
        host: env('APP_HOST','0.0.0.0'),
        port: env(  'APP_PORT', '3003'),
        db:{
            host: env('APP_DB_HOST','host.docker.internal'),
            database : env('APP_DB_DB', 'postgres'),
            user : env('APP_DB_USER', 'postgres'),
            password: env('APP_DB_PASSWORD', '1825')
        }
    }
}