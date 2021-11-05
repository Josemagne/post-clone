
export interface GetAction {
    type: string;
    payload: number;
}

// We have multiple cases. Action combines them together
export type Action = GetAction;
