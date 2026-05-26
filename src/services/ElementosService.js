export const ElementosService = {
    getElementosData() {
        return [
            {
                id: '1001',
                identificador: 'E-01-000000',
                nombreES: 'Formulartio del padrón municipal > Habitantes',
                nombreEU: 'EU_Formulartio del padrón municipal > Habitantes',
                tipo: 'Menú',
                padre: 'Menú de habitantes',
                estado: "Alta"
            },
            {
                id: '1002',
                identificador: 'E-01-000000',
                nombreES: 'Formulartio del padrón municipal > Habitantes',
                nombreEU: 'EU_Formulartio del padrón municipal > Habitantes',
                tipo: 'Menú',
                padre: 'Menú de habitantes',
                estado: "Baja"
            },
            {
                id: '1003',
                identificador: 'E-01-000000',
                nombreES: 'Formulartio del padrón municipal > Habitantes',
                nombreEU: 'EU_Formulartio del padrón municipal > Habitantes',
                tipo: 'Menú',
                padre: 'Menú de habitantes',
                estado: "Alta"
            },
            {
                id: '1004',
                identificador: 'E-01-000000',
                nombreES: 'Formulartio del padrón municipal > Habitantes',
                nombreEU: 'EU_Formulartio del padrón municipal > Habitantes',
                tipo: 'Menú',
                padre: 'Menú de habitantes',
                estado: "Alta"
            },
            {
                id: '1005',
                identificador: 'E-01-000000',
                nombreES: 'Formulartio del padrón municipal > Habitantes',
                nombreEU: 'EU_Formulartio del padrón municipal > Habitantes',
                tipo: 'Menú',
                padre: 'Menú de habitantes',
                estado: "Alta"
            },
            {
                id: '1006',
                identificador: 'E-01-000000',
                nombreES: 'Formulartio del padrón municipal > Habitantes',
                nombreEU: 'EU_Formulartio del padrón municipal > Habitantes',
                tipo: 'Menú',
                padre: 'Menú de habitantes',
                estado: "Alta"
            },
            {
                id: '1007',
                identificador: 'E-01-000000',
                nombreES: 'Formulartio del padrón municipal > Habitantes',
                nombreEU: 'EU_Formulartio del padrón municipal > Habitantes',
                tipo: 'Menú',
                padre: 'Menú de habitantes',
                estado: "Alta"
            },
            {
                id: '1008',
                identificador: 'E-01-000000',
                nombreES: 'Formulartio del padrón municipal > Habitantes',
                nombreEU: 'EU_Formulartio del padrón municipal > Habitantes',
                tipo: 'Menú',
                padre: 'Menú de habitantes',
                estado: "Alta"
            },
            {
                id: '1009',
                identificador: 'E-01-000000',
                nombreES: 'Formulartio del padrón municipal > Habitantes',
                nombreEU: 'EU_Formulartio del padrón municipal > Habitantes',
                tipo: 'Menú',
                padre: 'Menú de habitantes',
                estado: "Baja"
            },
            {
                id: '1010',
                identificador: 'E-01-000000',
                nombreES: 'Formulartio del padrón municipal > Habitantes',
                nombreEU: 'EU_Formulartio del padrón municipal > Habitantes',
                tipo: 'Menú',
                padre: 'Menú de habitantes',
                estado: "Alta"
            },
            {
                id: '1011',
                identificador: 'E-01-000000',
                nombreES: 'Formulartio del padrón municipal > Habitantes',
                nombreEU: 'EU_Formulartio del padrón municipal > Habitantes',
                tipo: 'Menú',
                padre: 'Menú de habitantes',
                estado: "Alta"
            },
        ];
    },

    getElementosMini() {
        return Promise.resolve(this.getElementosData().slice(0, 5));
    },

    getElementosSmall() {
        return Promise.resolve(this.getElementosData().slice(0, 10));
    },

    getElementos() {
        return Promise.resolve(this.getElementosData());
    },

    getElementosWithOrdersSmall() {
        return Promise.resolve(this.getElementosWithOrdersData().slice(0, 10));
    },

    getElementosWithOrders() {
        return Promise.resolve(this.getElementosWithOrdersData());
    }
};