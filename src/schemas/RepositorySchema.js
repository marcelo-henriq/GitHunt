export default class RepositorySchema {
    static schema = {
        name: 'Repository',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            avatar: 'string',
            name: 'string',
            fullname: 'string',
            description: 'string',
            stars: 'int',
            forks: 'int',
        }
    };
}