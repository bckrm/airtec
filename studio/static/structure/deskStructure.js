import S from '@sanity/desk-tool/structure-builder';

import { VscFile } from 'react-icons/vsc';

export default () => {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Home')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('indexPage')
                        .documentId('indexPage'),
                ),
            S.listItem()
                .title('About Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('aboutPage')
                        .documentId('aboutPage'),
                ),
            S.listItem()
                .title('Fleet Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('fleetPage')
                        .documentId('fleetPage'),
                ),
            S.listItem()
                .title('Capabilities Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('capabilitiesPage')
                        .documentId('capabilitiesPage'),
                ),
            S.listItem()
                .title('Service Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('servicePage')
                        .documentId('servicePage'),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        'aboutPage',
                        'capabilitiesPage',
                        'fleetPage',
                        'indexPage',
                        'servicePage',
                    ].includes(listItem.getId()),
            ),
        ]);
};
