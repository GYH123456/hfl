// src/plugins/vuetify.js

import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify,{
    VApp,
    VDataTable,
    VToolbar,
    VDialog,
    VBtn,
    VCard,
    VCardTitle,
    VCardText,
    VContainer,
    VRow,
    VCol,
    VTextField,
    VSelect,
    VCardActions,
    VSpacer,
    VIcon,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VSimpleTable
    
} from 'vuetify/lib'

Vuetify.config.silent = true

Vue.use(Vuetify, {
    components: {
        VApp,
        VDataTable,
        VToolbar,
        VDialog,
        VBtn,
        VCard,
        VCardTitle,
        VCardText,
        VContainer,
        VRow,
        VCol,
        VTextField,
        VSelect,
        VCardActions,
        VSpacer,
        VIcon,
        VExpansionPanels,
        VExpansionPanel,
        VExpansionPanelHeader,
        VExpansionPanelContent,
        VSimpleTable
    }
})

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg',
    }
})