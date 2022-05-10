export const AppRoute = {
    Root: (): string => '/',
    Users: (): string => '/users',
    User: (id: number): string => `/users/${id}`,
};
