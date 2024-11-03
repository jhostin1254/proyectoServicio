
import { getInstance } from '../../API/getInstance';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Card,
    Title
} from '@tremor/react';

export function Huawey() {

    const { data } = getInstance(`https://localhost:44343/api/Pantalla`);

    console.log(data)
    return (
        <>
            <div>
            
            </div>

        </>
    )
}
