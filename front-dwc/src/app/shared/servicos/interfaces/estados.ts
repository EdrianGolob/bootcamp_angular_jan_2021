export interface Estado {
	id: string;
	sigla: string;
	nome: string;
}

export type Estados = Array<Estado>;

export interface EstadoAPI {
	items: Estado[];
	hasNext: boolean;
}
//ctrl + shift + p
