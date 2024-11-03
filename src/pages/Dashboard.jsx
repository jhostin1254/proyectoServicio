import '../styles/dashboard.css'
// 'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

const data = [
    {
        workspace: 'sales_by_day_api',
        owner: 'John Doe',
        status: 'live',
        costs: '$3,509.00',
        region: 'US-West 1',
        capacity: '99%',
        lastEdited: '23/09/2023 13:00',
    },
    {
        workspace: 'marketing_campaign',
        owner: 'Jane Smith',
        status: 'live',
        costs: '$5,720.00',
        region: 'US-East 2',
        capacity: '80%',
        lastEdited: '22/09/2023 10:45',
    },
    {
        workspace: 'sales_campaign',
        owner: 'Jane Smith',
        status: 'live',
        costs: '$5,720.00',
        region: 'US-East 2',
        capacity: '80%',
        lastEdited: '22/09/2023 10:45',
    },
    {
        workspace: 'development_env',
        owner: 'Mike Johnson',
        status: 'live',
        costs: '$4,200.00',
        region: 'EU-West 1',
        capacity: '60%',
        lastEdited: '21/09/2023 14:30',
    },
    {
        workspace: 'new_workspace_1',
        owner: 'Alice Brown',
        status: 'live',
        costs: '$2,100.00',
        region: 'US-West 2',
        capacity: '75%',
        lastEdited: '24/09/2023 09:15',
    },
    {
        workspace: 'test_environment',
        owner: 'David Clark',
        status: 'inactive',
        costs: '$800.00',
        region: 'EU-Central 1',
        capacity: '40%',
        lastEdited: '25/09/2023 16:20',
    },
];

export function Dashboard() {
    return (
        <>
            <h1>Dashboaar</h1>
        </>
    );
}