export interface User
{
    id: string;
    email: string;
    password: string;
    salt: string;
    firstName: string;
    lastName: string;
    role: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
