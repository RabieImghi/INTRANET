<template>
    <div class="date-picker">
        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
                <input type="month"  v-model="selectedMonth" @change="handleMonthChange" name="date_demand_abscence" id="date_demand_abscence" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Select Month And Year</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <label for="departement" class="sr-only">Nom & Prénom</label>
                <select data-v-6b63125a="" id="departement" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option selected> Tous</option>
                    <option data-v-6b63125a="" value="Khalid"> Khalid</option>
                    <option data-v-6b63125a="" value="Soufian"> Soufian </option>
                    <option data-v-6b63125a="" value="Rabie"> Rabie</option>
                </select>
            </div>
        </div>
        <div v-if="selectedMonth">
        <table>
            <thead>
            <tr>
                <th v-for="day in daysOfWeek" :key="day" :class="{ 'text-red-500': day === 'Samedi' || day === 'Dimanche' }">{{ day }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(week, index) in weeks" :key="index">
                <td v-for="(day, dayIndex) in week" :key="dayIndex" :class="{ 'acuuppe': dayIndex === 5 || dayIndex === 6 }">{{ day }}</td>
            </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>

<script>
    import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

    export default {
        data() {
        return {
            selectedMonth: null,
        };
        },
        computed: {
        formattedMonth() {
            if (this.selectedMonth) {
            return format(new Date(this.selectedMonth), 'MMMM yyyy');
            }
            return 'No month selected';
        },
        daysOfWeek() {
            return ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        },
        daysOfMonth() {
            if (this.selectedMonth) {
            const start = startOfMonth(new Date(this.selectedMonth));
            const end = endOfMonth(new Date(this.selectedMonth));
            const days = eachDayOfInterval({ start, end });
            return days.map((day) => format(day, 'd'));
            }
            return [];
        },
        weeks() {
            const weeks = [];
            let currentWeek = [];
            const firstDayOfMonth = new Date(this.selectedMonth).getDay();
            const daysInMonth = new Date(
            new Date(this.selectedMonth).getFullYear(),
            new Date(this.selectedMonth).getMonth() + 1,
            0
            ).getDate();

            const daysInWeek = 7;
        const offset = (firstDayOfMonth - 1 + daysInWeek) % daysInWeek;
        for (let i = 0; i < offset; i++) {
            currentWeek.push('');
        }

            for (let i = 1; i <= daysInMonth; i++) {
            currentWeek.push(i);

            if (currentWeek.length === 7) {
                weeks.push(currentWeek);
                currentWeek = [];
            }
            }
            while (currentWeek.length < 7) {
            currentWeek.push('');
            }
            weeks.push(currentWeek);
            return weeks;
        },
        },
        methods: {
        handleMonthChange() {
            console.log('Selected Month:', this.selectedMonth);
        },
        },
        mounted() {
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1; 
            const currentYear = currentDate.getFullYear();
            this.selectedMonth = `${currentYear}-${currentMonth.toString().padStart(2, '0')}`;
        },
    };
</script>

<style scoped>
.date-picker {
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
}

table {
  width: 100%;
  height:70vh;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: 'Arial', sans-serif;
}

th, td {
  border: 1px solid #ddd;
  padding: 14px;
  
  vertical-align: top;
}

th {
  background-color: #243464;
  color: #ffffff;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #e0e0e0;
}
th.text-red-500 {
  background-color: #ff0000; 
}
tbody tr td.acuuppe {
  background-color: #f1f1f196 !important;
}
</style>