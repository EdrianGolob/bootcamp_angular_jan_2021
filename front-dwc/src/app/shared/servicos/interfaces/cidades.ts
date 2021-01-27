export interface Cidade {
	id: string;
	nome: string;
	estado: string;
}

export type Cidades = Array<Cidade>;

export interface CidadesAPI {
	items: Cidade[];
	hasNext: boolean;
}
