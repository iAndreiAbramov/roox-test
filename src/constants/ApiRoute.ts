export const ApiRoute = {
    Users: (): string => 'https://jsonplaceholder.typicode.com/users',
    User: (id: string): string => `https://jsonplaceholder.typicode.com/users/${id}`,
};
