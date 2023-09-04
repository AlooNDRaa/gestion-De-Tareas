import { Line } from 'react-chartjs-2';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

let horasEnEquipo: number[] = [0, 5, 10, 2, 7, 6, 7, 8, 9];
let dias: string[] = ["14 de Junio", "12 de junio", "14 de Junio", "16 de Junio", "18 de Junio"];
let horasSolitarias: number[] = [0, 2, 2, 4, 3];
let midata: { labels: string[], datasets: { label: string, data: number[], tension: number, fill: boolean, borderColor: string, backgroundColor: string, pointRadius: number, pointBorderColor: string, pointBackgroundColor: string }[] } = {
    labels: dias,
    datasets: [
        {
            label: 'Horas en equipo',
            data: horasEnEquipo,
            tension: 0.5,
            fill: true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        {
            label: 'Horas solitarias',
            data: horasSolitarias,
            tension: 0.5,
            fill: true,
            borderColor: '#0038FF',
            backgroundColor: '#686085',
            pointRadius: 5,
            pointBorderColor: '#291E54',
            pointBackgroundColor: '#291E54',
        },
    ],
};

let misoptions: {} = {

};



export default function LinesCharts(): JSX.Element {
    return <Line 
    data={midata}
    options={misoptions}>
    </Line>
}