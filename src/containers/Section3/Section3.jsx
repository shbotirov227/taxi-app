import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import "./Section3.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
	  backgroundColor: "#FFF318",
	  color: "#272727",
	  padding: 15,
	  border: 0,
	},
	[`&.${tableCellClasses.body}`]: {
	  fontSize: 14,
	  border: 0,
	},
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
	[`&.${tableCellClasses.body}`]: {
		padding: 70,
	},
	'&:nth-of-type(odd)': {
	  backgroundColor: theme.palette.action.hover,
	  border: 0,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
	  border: 0,
	},
}));
  
function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}


  
const rows = [
	createData("Симферополь - Азовское Акция! до 28 января", "789 ₽", "1089 ₽", "1089 ₽", "1880 ₽"),
	createData("Симферополь - Алупка", "1089 ₽", "1389 ₽", "1580 ₽", "2480 ₽"),
	createData("Симферополь - Алушта", "789 ₽", "1089 ₽", "1089 ₽", "1880 ₽"),
	createData("Симферополь - Рабочий уголок", "1089 ₽", "1389 ₽", "1580 ₽", "2480 ₽"),
	createData("Симферополь - Армянск", "789 ₽", "1089 ₽", "1089 ₽", "1880 ₽"),
	createData("Симферополь - Артек", "1089 ₽", "1389 ₽", "1580 ₽", "2480 ₽"),
	createData("Симферополь - Байдарские ворота", "789 ₽", "1089 ₽", "1089 ₽", "1880 ₽"),
	createData("Симферополь - Бахчисарай", "1089 ₽", "1389 ₽", "1580 ₽", "2480 ₽"),
];
  
const Section3 = () => {

	return (
		<div className="Section3 mb-28 text-center container">
			<h2 className="Section2-title">Тарифы из Симферополя по Крыму</h2>
			<h4 className="Section2-text mb-10">Посмотрите стоимость проезда из Симферополя <br></br>по основным городам Крыма в 2021 году</h4>
		
			<TableContainer>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Маршрут</StyledTableCell>
							<StyledTableCell>Эконом</StyledTableCell>
							<StyledTableCell>Стандарт</StyledTableCell>
							<StyledTableCell>Комфорт+</StyledTableCell>
							<StyledTableCell>Минивэн</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell component="th" scope="row">
									{row.name}
								</StyledTableCell>
								<StyledTableCell align="left">{row.calories}</StyledTableCell>
								<StyledTableCell align="left">{row.fat}</StyledTableCell>
								<StyledTableCell align="left">{row.carbs}</StyledTableCell>
								<StyledTableCell align="left">{row.protein}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<button className="Section3-btn">Заказать такси</button>
		</div>
	)
}

export default Section3;