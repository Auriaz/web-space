<template>
    <v-content 
        v-if="online" 
        class="inbox"
    >
        <v-row align-content="center">
            <v-col class="col-12 my-7">
                <h1 class="title text-center grey--text">Wiadomości</h1>
            </v-col>

            <v-container>
                <v-layout 
                    row 
                    justify-space-between 
                    class="inbox__cards"
                >
                    <template>
                        <v-card class="inbox__main-card">
                            <v-card-title>
                                Inbox
                                <v-spacer></v-spacer>
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-search"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                            </v-card-title>

                            <v-data-table
                                :headers="headers"
                                :items="inbox"
                                :search="search"
                            >
                            </v-data-table>
                        </v-card>
                    </template>
                </v-layout>
            </v-container>
        </v-row>

        <v-menu-inbox/>
    </v-content>
</template>

<script>
import VMenuInbox from '../components/navigations/VMenuInbox'

  export default {
    name: 'inbox',
    components: {
        VMenuInbox: VMenuInbox
    },
    data () {
        return {
            search: '',
            headers: [
                {
                    text: 'E-mail',
                    align: 'left',
                    sortable: true,
                    value: 'email',
                },
                { text: 'nazwa', value: 'surname' },
                { text: 'tytuł', value: 'title' },
                // { text: 'treść', value: 'content' },
                { text: 'data', value: 'createdAt' },
            ],
            items: [],
        }
    },
    computed: {
        online() {
            return this.$store.getters.online
        }, 
        inbox() {
             return this.$store.state.inbox
        }   
    },
    methods: {
        fetchData () {
            if(this.$store.state.inbox.length) {
                return
            } 

            this.$store.dispatch('getInbox')
           
        },
        open(id) {
            alert(id)
        }
    },
    created() {
        this.fetchData()
    },
  }
</script>

<style lang="scss" scoped>
    .inbox {
        margin-top: 60px;

        &__container {
            width: 1200px;
            height: auto;
            position: relative;
        }

        &__main-card {
          width: 100%;  
        }
    }
</style>