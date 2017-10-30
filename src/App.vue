<template>
    <div id="app">
        {{ ranges }}
        <button @click="pickerShow">Afficher le calendrier</button>
        <div class="main" v-if="isPickerVisible">
            <calendar-picker :year="2017" v-model="ranges" @cancel="pickerHide" @submit="pickerHide"/>
        </div>
    </div>
</template>

<script>
    import CalendarPicker from './components/CalendarPicker'

    export default {
        name: 'app',

        data () {
          return {
              isPickerVisible: false,
              ranges: [
                  [1483484400000, 1485555500000],
                  [1486162800000, 1486162800000],
                  [1493676000000, 1493676000000],
                  [1495231200000, 1495231200000],
                  [1496268000000, 1497650400000],
                  [1498860000000, 1498860000000],
              ]
          }
        },

        components: {
            CalendarPicker
        },

        methods: {
            pickerShow() {
                this.isPickerVisible = true
            },

            pickerHide() {
                this.isPickerVisible = false
            }
        }
    }
</script>

<style src="./assets/scss/app.scss"></style>
