export const ApiRoute = {
    Users: (): string => 'https://jsonplaceholder.typicode.com/users',
    User: (id: number): string => `https://jsonplaceholder.typicode.com/users/${id}`,
};
