import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

interface Props {
    title: string;
}

function PieOverview({ title }: Props) {
    return (
        <Box>
            <Typography variant="h2">{title}</Typography>
            <PieChart
                series={[
                    {
                        data: [
                            { label: 'Category A', value: 30 },
                            { label: 'Category B', value: 70 },
                            { label: 'Category C', value: 45 },
                        ]
                    }
                ]}
                height={250}
            />
        </Box>
    );
}

export default PieOverview;