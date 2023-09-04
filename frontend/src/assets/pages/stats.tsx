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
            pointRadius: 4,
            pointBorderColor: '#FFFF',
            pointBackgroundColor: '#21E6C1',
            
            segment: {
             borderColor: function (context) {
                if (context.type === "segment") {
                    return context.p1DataIndex % 2 === 0 ? "#278EA5" : "#21E6C1";
                }
             },
             backgroundColor: function (context) {
                if (context.type === "segment") {
                    return context.p1DataIndex % 2 === 0 ? "#21E6C1" : "#278EA5";
                }
             },
              
             
            },
        },
        {
            label: 'Horas solitarias',
            data: horasSolitarias,
            tension: 0.5,
            fill: true,
            borderColor: '#0038FF',
            backgroundColor: '#686085',
            pointRadius: 5,
            pointBorderColor: '#1C3655',
            pointBackgroundColor: '#291E54',

            segment: {
                borderColor: function (context) {
                   if (context.type === "segment") {
                       return context.p1DataIndex % 2 === 0 ? "#278EA5" : "#21E6C1";
                   }
                },
                backgroundColor: function (context) {
                   if (context.type === "segment") {
                       return context.p1DataIndex % 2 === 0 ? "#1F4287" : "#071E3D"; 
                   }
                },
                pointBackgroundColor: function (context) {
                   if (context.type === "segment") {
                       return context.p1DataIndex % 2 === 0 ? "#1F4287" : "#071E3D";
                   }
                },
                
                
               },
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