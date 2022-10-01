//Ticket Model
export interface Ticket{
    ticketId: number;
    createdAt: string;
    updatedAt: string;
    completedAt: string;
    statusId: number;
    assigneeId: number;
    requesterId: number;
	user: User; 
    admin: string
    agent: string
    requester: string;
}

export interface User {
	userId: string;
	firstName: string;
	lastName: string;
	email: string;
}