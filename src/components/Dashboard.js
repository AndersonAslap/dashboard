import { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

import '../styles/Dashboard.module.css';

export function Dashboard() {

    const TITLE = 'Quantidade de cadastro por meses';

    const [data, setData] = useState([
        ['Mês', 'Quantidade'],
        ['Janeiro', 33],
        ['Fevereiro', 59],
        ['Março', 27],
        ['Abril',  88],
        ['Maio',  78],
        ['Junho',  91]
    ]);

    useEffect(() => {
        function updateData() {
            const dataGrafic = data.map(line => {
                if (Number.isInteger(line[1])) {
                    line[1] = Math.floor(Math.random() * 101);
                }

                return line;
            })

            setData(dataGrafic);
        }

        const interval = setInterval(() => updateData(), 5000);

        return () => {
            clearInterval(interval);
        }

    }, [data]);

    return (
        <div style={{float:'left'}}>
            <h1>Dashboard</h1>

            <Chart
                width={'400px'}
                height={'300px'}
                chartType={'PieChart'}
                data={data}
                options = {{
                    title : TITLE
                }}
            />

            <Chart
                width={'400px'}
                height={'300px'}
                chartType={'PieChart'}
                data={data}
                options = {{
                    title : TITLE,
                    is3D:true
                }}
            />

            <Chart
                width={'400px'}
                height={'300px'}
                chartType={'PieChart'}
                data={data}
                options = {{
                    title : TITLE,
                    pieHole:0.4
                }}
            />

            <Chart
                width={'400px'}
                height={'300px'}
                chartType={'BarChart'}
                data={data}
                options = {{
                    title : TITLE,
                    chartArea: { width: '50%' },
                    hAxis : { title: 'Quantidade' },
                    vAxis : { title: 'Mês' },
                    animation: { duration: 1000, easing: 'out', startup: true }
                }}
            />

            <Chart
                width={'400px'}
                height={'300px'}
                chartType={'LineChart'}
                data={data}
                options = {{
                    title : TITLE,
                    chartArea: { width: '50%' },
                    hAxis : { title: 'Quantidade' },
                    vAxis : { title: 'Mês' },
                    animation: { duration: 1000, easing: 'out', startup: true }
                }}
            />

            <Chart
                width={'400px'}
                height={'300px'}
                chartType={'AreaChart'}
                data={data}
                options = {{
                    title : TITLE,
                    chartArea: { width: '50%' },
                    hAxis : { title: 'Mês' },
                    vAxis : { title: 'Quantidade' },
                    animation: { duration: 1000, easing: 'out', startup: true }
                }}
            />
        </div>
    );
}