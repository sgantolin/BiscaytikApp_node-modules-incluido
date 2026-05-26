export const ElementsTreeService = {
    getElementsTreeNodesData() {
        return [
            {
                key: '0',
                label: 'Menú de habitantes',
                data: 'Menu de habitantes',

                children: [
                    {
                        key: '0-0',
                        label: 'Formulario de habitantes',
                        data: 'Formulario de habitantes'
                    },
                    {
                        key: '0-1',
                        label: 'Botón de exportar',
                        data: 'Boton de exportar'
                    }
                ]
            },
            {
                key: '1',
                label: 'Menú de padrón municipal',
                data: 'Menu de padron municipal',
                children: [
                    {
                        key: '1-0',
                        label: 'Menú de domicilios',
                        data: 'Menú de domicilios',
                        children: [
                            { key: '1-0-0', label: 'Botón chalets', data: 'Boton casas' },
                            { key: '1-0-1', label: 'Botón pisos', data: 'Boton casas' }
                        ]
                    },
                    {
                        key: '1-1',
                        label: 'Formulario de padrón municipal',
                        data: 'Formulario de padron municipal',
                        children: [
                            { key: '1-1-0', label: 'Submenú registro', data: 'Submenu registro' },
                            { key: '1-1-1', label: 'Submenú descargas', data: 'Submenu descargas' }
                        ]
                    }
                ]
            },
            {
                key: '2',
                label: 'Menú de habitantes',
                data: 'Menu de habitantes',
                children: [
                    {
                        key: '2-0',
                        label: 'Menú de domicilios',
                        data: 'Menú de domicilios',
                        children: [
                            { key: '2-0-0', label: 'Botón chalets', data: 'Boton casas' },
                            { key: '2-0-1', label: 'Botón pisos', data: 'Boton casas' }
                        ]
                    },
                    {
                        key: '2-1',
                        label: 'Formulario de padrón municipal',
                        data: 'Formulario de padron municipal',
                        children: [
                            { key: '2-1-0', label: 'Submenú registro', data: 'Submenu registro' },
                            { key: '2-1-1', label: 'Submenú descargas', data: 'Submenu descargas' }
                        ]
                    }
                ]
            }
        ];
    },

    getElementsTreeNodes() {
        return Promise.resolve(this.getElementsTreeNodesData());
    }
};
