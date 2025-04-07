export interface Project { 
    title: string;
    description: string;
    image: string;
    live?: string;
    gitLink: string;
    technology: Technology[];
}

export interface Technology {
    name: string;
    icon: string;
}