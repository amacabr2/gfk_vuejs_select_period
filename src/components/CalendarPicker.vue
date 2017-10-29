<template>
    <div class="rangepicker">
        <div class="rangepicker_month" v-for="month in months">
            <div class="rangepicker_monthtitle">
                {{ month.getName() }}
            </div>
            <div class="rangepicker_days">
                <div v-for="day in days">{{ day }}</div>
            </div>
            <div class="rangepicker_numbers">
                <div class="rangepicker_day" v-for="day in month.getDays()" :class="classForDay(day, month)">
                    {{ day.getDate() }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Month from '../entity/Month'

    export default {
        data() {
            return {
                months: [],
                days: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
            }
        },

        mounted() {
            this.months = Month.createMonthForYear(this.year)
        },

        props: {
            year: Number
        },

        methods: {
            classForDay(day, month) {
                let classes = []
                if (!month.contains(day)) {
                    classes.push('rangepicker_out')
                }
                return classes
            }
        }
    }
</script>

<style src="../assets/scss/rangepicker.scss" lang="scss"></style>