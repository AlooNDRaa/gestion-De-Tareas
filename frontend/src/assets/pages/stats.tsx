import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import DataInput from './DataInput';
import{
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

const LinesCharts = ({ graphIndex, onReceiveHoursData }) => {
  const [line1Data, setLine1Data] = useState({ labels: [], values: [] });
  const [line2Data, setLine2Data] = useState({ labels: [], values: [] });

  const addDataPoint = (line, label, value) => {
    if (label && value) {
      
      if (line === 1) {
        setLine1Data({
          labels: [...line1Data.labels, label],
          values: [...line1Data.values, parseInt(value)],
        });
      } else if (line === 2) {
        setLine2Data({
          labels: [...line2Data.labels, label],
          values: [...line2Data.values, parseInt(value)],
        });
      }
    
    const totalHours = line1Data.values.reduce((a, b) => a + b, 0) + line2Data.values.reduce((a, b) => a + b, 0);
    onReceiveHoursData(totalHours, graphIndex);
    }
  };

  return (
    <div>
      {/* Componente DataInput para la primera línea */}
      <DataInput placeholder="Trabajo en Equipo"
      onAddData={(label, value) => addDataPoint(1, label, value)} />
      {/* Componente DataInput para la segunda línea */}
      <DataInput 
      placeholder="Trabajo en Solitario"onAddData={(label, value) => addDataPoint(2, label, value)} />

      <div>
        <Line className='hover:cursor-pointer'
          data={{
            labels: line1Data.labels,
            datasets: [
                {
                    label: 'Trabajo en equipo',
                    data: line1Data.values,
                    tension: 0.5,
                    fill: true,
                    pointRadius: 5,
                    pointBorderColor: '#FFFF',
                    pointBackgroundColor: '#21E6C1',
                    borderColor: '#278EA5',
                    backgroundColor: '#21E6C1',
                    
                    
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
                    label: 'Trabajo en solitario',
                    data: line2Data.values,
                    tension: 0.5,
                    fill: true,
                    borderColor: '#0038FF',
                    backgroundColor: '#1F4287',
                    pointRadius: 5,
                    pointBorderColor: '#FFFF',
                    pointBackgroundColor: '#291E54',
                  segment: {
                        borderColor: function (context) {
                           if (context.type === "segment") {
                               return context.p1DataIndex % 2 === 0 ? "#071E3D" : "#1F4287";
                           }
                        },
                        backgroundColor: function (context) {
                           if (context.type === "segment") {
                               return context.p1DataIndex % 2 === 0 ? "#1F4287" : "#071E3D"; 
                           }
                        },
                        
                },
            },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default LinesCharts;
