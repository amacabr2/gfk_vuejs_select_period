<template>
    <div class="rangepicker">
        <div class="rangepicker_month" v-for="month in months">
            {{ month.getName() }}
        </div>
    </div>
</template>

<script>
    import Month from '../entity/Month'

    export default {
        data() {
            return {
                months: []
            }
        },

        mounted() {
            this.months = Month.createMonthForYear(this.year)
        },

        props: {
            year: Number
        }
    }
</script>

<style src="../assets/scss/rangepicker.scss" lang="scss"></style>